<template>
  <div>
    <h2>Form One</h2>
    <form @submit.prevent="handleSubmit">
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="name" required />
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: ''
    };
  },
  methods: {
    handleSubmit() {
      this.$store.dispatch('submitForm', { name: this.name });
      this.$router.push('/form-two');
    }
  }
};
</script>

<style scoped>
/* Уникальные стили для Form One */
h2 {
  color: #007bff;
}
</style>
