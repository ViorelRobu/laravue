class Errors {
    /**
     * Create a new Errors instance
     */
    constructor() {
        this.errors = {};
    }

    /**
     * Check to see if there is an error matching the field
     * and return it
     *
     * @param {string} field
     */
    has(field) {
        return this.errors.hasOwnProperty(field);
    }

    /**
     * Check to see if there are any errors
     *
     * @returns boolean
     */
    any() {
        return Object.keys(this.errors).length > 0;
    }

    /**
     * Get the error for a given field
     *
     * @param {string} field
     */
    get(field) {
        if (this.errors[field]) {
            return this.errors[field][0];
        }
    }

    /**
     * Add new errors to the errors object
     *
     * @param {object} errors
     */
    record(errors) {
        this.errors = errors;
    }

    /**
     * Clear errors from the errors object
     *
     * @param {string} field
     */
    clear(field) {
        if (field) {
            delete this.errors[field];
        } else {
            this.errors = {};
        }
    }
}

class Form {
    /**
     * Create a new form instance
     *
     * @param {object} data
     */
    constructor(data) {
        this.originalData = data;

        for (let field in data) {
            this[field] = data[field];
        }

        this.errors = new Errors();

        this.success = false;

        this.successMessage = '';
    }

    /**
     * Reset the form fields
     */
    reset() {
        for (let field in this.originalData) {
            this[field] = '';
        }

        this.errors.clear();
    }

    /**
     * Fetch all the relevant data for the form
     */
    data() {

        let data = {};

        for (let property in this.originalData) {
            data[property] = this[property]
        }

        return data;
    }

    /**
     * Send a post request
     *
     * @param {string} url
     */
    post(url) {
        return this.submit('post', url);
    }

    /**
     * Send a patch request
     *
     * @param {string} url
     */
    patch(url) {
        return this.submit('patch', url);
    }

    /**
     * Send a delete request
     *
     * @param {string} url
     */
    delete(url) {
        return this.submit('delete', url);
    }

    /**
     * Submit the form
     *
     * @param {string} requestType
     * @param {string} url
     */
    submit(requestType, url) {
        return new Promise((resolve, reject) => {
            axios[requestType](url, this.data())
                .then(response => {
                    this.onSuccess(response.data);
                    resolve(response.data);
                })
                .catch(error => {
                    this.onFail(error.response.data.errors);
                    reject(error.response.data.errors);
                });
        });

    }

    /**
     * Handle a successful form submission
     *
     * @param {object} response
     */
    onSuccess(data) {
        this.success = true;

        this.successMessage = data.message;

        this.reset();
    }

    /**
     * Handle a failed form submission
     *
     * @param {object} error
     */
    onFail(errors) {
        this.errors.record(errors);
    }

    /**
     * Close the success message
     */
    closeMessage() {
        this.success = false;
        this.successMessage = '';
    }


}

new Vue({
    el: '#root',
    data: {
        form: new Form({
            name: '',
            description: ''
        }),
    },
    methods: {
        onSubmit() {
            this.form.post('/projects')
                .then(data => console.log(data))
                .catch(error => console.log(error));
        }
    }
});
