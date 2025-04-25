<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/form-one">Form One</router-link>
      <router-link to="/form-two">Form Two</router-link>
      <router-link to="/form-three">Form Three</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
/* Общие стили для приложения */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f4f4f9;
}

nav {
  background-color: #333;
  padding: 1rem;
}

nav a {
  color: white;
  margin: 0 1rem;
  text-decoration: none;
}

nav a:hover {
  text-decoration: underline;
}

#app {
  max-width: 800px;
  margin: auto;
  padding: 2rem;
}

h2 {
  color: #555;
}

form {
  background: white;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

label {
  display: block;
  margin-bottom: 0.5rem;
  color: #333;
}

input, textarea {
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  background-color: #28a745;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #218838;
}
</style>
