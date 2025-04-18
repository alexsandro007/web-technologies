<template>
  <div class="search-results">
    <!-- Результаты авиабилетов -->
    <div v-if="flights.length" class="flight-results">
      <h2>Найденные авиабилеты</h2>
      <div class="flight-card" v-for="(flight, index) in flights" :key="index">
        <div class="flight-info">
          <div class="route">
            <span class="city">{{ flight.departure }}</span>
            <span class="arrow">→</span>
            <span class="city">{{ flight.destination }}</span>
          </div>
          <div class="details">
            <span><strong>Рейс:</strong> {{ flight.flightNumber }}</span>
            <span><strong>Дата:</strong> {{ flight.date }}</span>
          </div>
        </div>
        <div class="price">
          {{ flight.price }} ₽
        </div>
      </div>
    </div>

    <!-- Результаты отелей -->
    <div v-if="hotels.length" class="hotel-results">
      <h2>Найденные отели</h2>
      <div class="hotel-card" v-for="(hotel, index) in hotels" :key="'hotel-' + index">
        <div class="hotel-info">
          <h3>{{ hotel.name }}</h3>
          <div class="location">{{ hotel.location }}</div>
          <div class="dates">
            <span>{{ hotel.checkIn }} — {{ hotel.checkOut }}</span>
          </div>
          <div class="rating" v-if="hotel.rating">
            Рейтинг: {{ '★'.repeat(hotel.rating) }}
          </div>
        </div>
        <div class="price">
          {{ hotel.price }} ₽<span class="per-night">/ночь</span>
        </div>
      </div>
    </div>

    <!-- Сообщение, если нет результатов -->
    <div v-if="!flights.length && !hotels.length" class="no-results">
      <p>Проведите поиск, чтобы увидеть результаты</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchResults',
  props: {
    flights: {
      type: Array,
      default: () => []
    },
    hotels: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>
.search-results {
  max-width: 1200px;
  margin: 30px auto;
  padding: 20px;
  background: white;
  border-radius: 15px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  color: #333;
}

h2 {
  color: #003366;
  font-size: 1.5rem;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
}

.flight-card, .hotel-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  margin-bottom: 15px;
  background: #f9f9f9;
  border-radius: 8px;
  transition: transform 0.2s;
}

.flight-card:hover, .hotel-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.flight-info {
  flex: 1;
}

.route {
  font-size: 1.2rem;
  margin-bottom: 5px;
}

.arrow {
  margin: 0 10px;
  color: #ffa500;
}

.details {
  display: flex;
  gap: 20px;
  font-size: 0.9rem;
  color: #666;
}

.price {
  font-size: 1.5rem;
  font-weight: bold;
  color: #003366;
  min-width: 120px;
  text-align: right;
}

.hotel-info h3 {
  margin: 0 0 5px 0;
  color: #003366;
}

.location {
  color: #666;
  margin-bottom: 5px;
}

.dates {
  font-size: 0.9rem;
  color: #666;
}

.rating {
  color: #ffa500;
  font-weight: bold;
  margin-top: 5px;
}

.per-night {
  font-size: 0.8rem;
  color: #666;
}

.no-results {
  text-align: center;
  padding: 20px;
  color: #666;
}
</style>