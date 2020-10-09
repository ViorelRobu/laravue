import Errors from './Errors';

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

export default Form;
