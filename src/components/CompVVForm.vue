<template>
    <div>
        <Form
            :name="name"
            :type="type"
        >
            <slot></slot>
        </Form>
    </div>
</template>

<script lang="ts">
import { defineComponent, toRefs } from 'vue';
import { Form, useForm, useField } from 'vee-validate';

export default defineComponent({
    name: 'CompVVForm',

    components: {
        Form,
    },

    props: {
        name: {
            type: String,
            required: true,
            default: "CompVVForm",
        },

        type: {
            type: String,
            default: "text",
        },
    },

    setup(props, ){
        const { name } = toRefs(props);
        const { value, errorMessage } = useField(name);

        return {

        }
    }
    
});
</script>

<style>

</style>