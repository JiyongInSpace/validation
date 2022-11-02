<template>
  <div class="home">
    <img 
      alt="Vue logo" 
      src="../assets/LogoVeeValidate.png"
      width="100"
    >
    
    <comp-easy-form></comp-easy-form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CompEasyForm from '@/components/CompEasyForm.vue';

export default defineComponent({
  name: 'PageVeeValidate',
  components: {
    CompEasyForm,
  },
});
</script>
