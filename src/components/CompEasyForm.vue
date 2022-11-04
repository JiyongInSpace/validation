<template>
    <Form
        name="easyForm"
        id="easyForm"
    >
        <div class="field_container">
            <Field
                name="IdField"
                v-slot="{ field }"
                :rules="IdRules"
            >
                <div class="input-container">
                    <div class="input-wrapper">
                        <span>
                            ID
                        </span>
                        <input 
                            class="InputId"
                            v-bind="field"
                        />
                    </div>
    
                    <ErrorMessage name="IdField"></ErrorMessage>
                </div>
            </Field>

            <Field
                name="PasswordField"
                v-slot="{ field }"
                :rules="PasswordRules"
            >
                <div class="input-container">
                    <div class="input-wrapper">
                        <span>
                            Password
                        </span>
                        <input 
                            class="InputPassword"
                            v-bind="field"
                        />
                    </div>
    
                    <ErrorMessage name="PasswordField"></ErrorMessage>
                </div>
            </Field>

        </div>
    </Form>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import { Form, Field, ErrorMessage } from "vee-validate";
    import * as Yup from "yup"


    export default defineComponent({
        name: 'CompEasyForm',

        components: {
            Form, 
            Field,
            ErrorMessage,
        },

        setup() {
            const IdRules = (_value: string) => {
                if(!_value){
                    return "NO VALUE";
                }
            }
            
            const PasswordRules = (_value: string) => {
                if(!_value){
                    return "NO PASSWORD";
                }
            }

            // schema 적용
            // const schema = Yup.object({
            //     id: Yup.string().required(),
            //     password: Yup.string(),
            //     email: Yup.string().email(),
            //     age: Yup.number().required().positive().integer(),
            // })

            return {
                IdRules,
                PasswordRules,
                // schema,
            }
        },
    });
</script>

<style lang="scss">
</style>