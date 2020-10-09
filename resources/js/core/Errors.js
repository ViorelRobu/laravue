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

export default Errors;
