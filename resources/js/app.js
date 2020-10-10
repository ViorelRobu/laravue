import Vue from 'vue';
import axios from 'axios';
import Form from './core/Form';

import Example from './components/Example';
import Coupon from './components/Coupon';

window.axios = axios;
window.Form = Form;

new Vue({
    el: '#root',
    components: {
        Coupon
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

new Vue({
    el: '#app',
    components: {
        Coupon
    },
    data: {
        coupon: 'FREEBIE'
    }
});
