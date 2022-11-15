<template>
    <div class="vv-input">
        <!-- <slot></slot> -->
        <comp-v-v-field
            name="id"
            :rules="yup.string().required().min(8)"
        ></comp-v-v-field>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import { useField } from 'vee-validate';
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


        return {
            yup,
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