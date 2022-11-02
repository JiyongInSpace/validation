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
import { defineComponent } from 'vue';
import { Form } from 'vee-validate';

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
    
});
</script>

<style>

</style>