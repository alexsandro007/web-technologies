<template>
  <div>
    <h2>Form Three</h2>
    <form @submit.prevent="handleSubmit">
      <label for="message">Message:</label>
      <textarea id="message" v-model="message" required></textarea>
      <button type="submit">Submit</button>
    </form>
    <div v-if="submitted">
      <h3>Submitted Data:</h3>
      <pre>{{ formData }}</pre>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: '',
      submitted: false
    };
  },
  computed: {
    formData() {
      return this.$store.getters.getFormData;
    }
  },
  methods: {
    handleSubmit() {
      this.$store.dispatch('submitForm', { message: this.message });
      this.submitted = true;
    }
  }
};
</script>

<style scoped>
/* Уникальные стили для Form Three */
h2 {
  color: #dc3545;
}
</style>
