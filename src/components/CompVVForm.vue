<template>
    <div class="vv-input">
        <!-- <slot></slot> -->
        <comp-v-v-field
            name="email"
            v-model="inputEmail"
        ></comp-v-v-field>

        <comp-v-v-field
            name="password"
            type="password"
            v-model="inputPassword"
        ></comp-v-v-field>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import { useForm } from 'vee-validate';
import CompVVField from './CompVVField.vue';
import * as yup from "yup";

export default defineComponent({
    name: 'CompVVForm',

    components: {
        CompVVField,
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

    setup(){
        const state = reactive({
            inputEmail: "",
            inputPassword: "",
        })
        const schema = yup.object({
            email: yup.string().required().email(),
            password: yup.string().required().min(8),
        });
        // Create a form context with the validation schema
        const { errors } = useForm({
            validationSchema: schema,
        });

        return {
            yup,
            errors,
            ...toRefs(state),
        }
    }
    
});
</script>

<style>
    .vv-input{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>