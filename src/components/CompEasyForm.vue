<template>
    <div>
        <Form
            name="easyForm"
            id="easyForm"
            class="d-flex flex-column"
        >
            <Field
                name="InputId"
            >
            </Field>

            <Field
                name="InputPassword"
                type="password"
            >
            </Field>
        </Form>
    </div>   
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import { Form, Field } from "vee-validate";

    export default defineComponent({
        name: 'CompEasyForm',

        components: {
            Form, 
            Field,
        },

    });
</script>

<style>

</style>