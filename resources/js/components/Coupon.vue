<template>
    <input type="text" :value="code" @input="updateCode($event.target.value)" ref="input">
</template>

<script>
export default {
    props: ['code'],
    methods: {
        updateCode(code) {
            if (this.invalids.includes(code)) {
                alert('This coupon is no longer valid. Sorry!');

                this.$refs.input.value = code = '';

            }
            this.$emit('input', code);
        }
    },
    data() {
        return {
            invalids: ['ALLFREE', 'SOMETHING ELSE']
        }
    }
}
</script>
