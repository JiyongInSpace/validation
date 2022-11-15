<template>
  <div class="home">
    <img 
      alt="Vue logo" 
      src="../assets/LogoVeeValidate.png"
      width="100"
    >
    
    <comp-easy-form v-if="false"></comp-easy-form>
    <comp-v-v-form
    ></comp-v-v-form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CompEasyForm from '@/components/CompEasyForm.vue';
import CompVVForm from '@/components/CompVVForm.vue';

export default defineComponent({
  name: 'PageVeeValidate',
  components: {
    CompEasyForm,
    CompVVForm,
  },
});
</script>
