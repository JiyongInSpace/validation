<template>
    <div class="vv-field">
        <div class="vv-field-wrapper">
            <input 
                class="vv-field-input"
                :name="name"
                :type="type"
                v-model="value"
            >
        </div>
        
        <div class="vv-field-error">
            {{ errorMessage }}
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useField } from 'vee-validate';

export default defineComponent({
    name: 'CompVVField',

    components: {
    },

    props: {
        name: {
            type: String,
            required: true,
            default: "CompVVField",
        },

        type: {
            type: String,
            default: "text",
        },

        rules: {
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

<style lang="scss" scoped>
    .vv-field{
        display: flex;
        flex-direction: column;
        align-items: center;

        .vv-field-wrapper{
            border: 1px solid grey;
            padding: 8px;
            border-radius: 8px;

            .vv-field-input{
                border: 0;

                &:focus{
                    outline: none;
                }
            }
        }

        .vv-field-error{
            color: red;
        }
    }
    
</style>