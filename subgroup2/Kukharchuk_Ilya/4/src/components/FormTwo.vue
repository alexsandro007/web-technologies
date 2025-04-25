<template>
  <div>
    <h2>Form Two</h2>
    <form @submit.prevent="handleSubmit">
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email" required />
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: ''
    };
  },
  methods: {
    handleSubmit() {
      this.$store.dispatch('submitForm', { email: this.email });
      this.$router.push('/form-three');
    }
  }
};
</script>

<style scoped>
/* Уникальные стили для Form Two */
h2 {
  color: #28a745;
}
</style>
