import Vue from 'vue';
import axios from 'axios';
import Form from './core/Form';

import Example from './components/Example';

window.axios = axios;
window.Form = Form;

new Vue({
    el: '#root',
    components: {
        Example
    },
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
