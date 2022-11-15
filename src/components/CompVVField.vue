<template>
    <div class="vv-input">
        <input 
            :name="name"
            :type="type"
            v-model="value"
        >
        {{ errorMessage }}
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useField } from 'vee-validate';

export default defineComponent({
    name: 'CompVVForm',

    components: {
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

        rules: {
            type: Function,
            default: () => true,
        }
    },

    setup(props){
        const { value, errorMessage } = useField("name", props.rules as any);

        return {
            value, 
            errorMessage,
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