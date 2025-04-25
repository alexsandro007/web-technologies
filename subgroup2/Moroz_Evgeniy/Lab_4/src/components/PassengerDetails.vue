<template>
  <div class="passenger-details">
    <h2>Детали пассажиров</h2>
    <div class="form-field">
      <label for="passengers">Количество пассажиров:</label>
      <input
        type="number"
        id="passengers"
        v-model="passengers"
        min="1"
        placeholder="1"
      />
    </div>
    <div class="form-field">
      <label for="class">Класс обслуживания:</label>
      <select id="class" v-model="serviceClass">
        <option value="economy">Эконом</option>
        <option value="business">Бизнес</option>
        <option value="first">Первый</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  props: ["value"],
  data() {
    return {
      passengers: this.value ? this.value.passengers : 1,
      serviceClass: this.value ? this.value.serviceClass : "economy",
    };
  },
  watch: {
    passengers(newVal) {
      this.$emit("input", {
        passengers: newVal,
        serviceClass: this.serviceClass,
      });
    },
    serviceClass(newVal) {
      this.$emit("input", {
        passengers: this.passengers,
        serviceClass: newVal,
      });
    },
  },
};
</script>

<style scoped>
.passenger-details {
  margin-bottom: 20px;
}

h2 {
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 15px;
}

.form-field {
  margin-bottom: 15px;
}

input,
select {
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>
