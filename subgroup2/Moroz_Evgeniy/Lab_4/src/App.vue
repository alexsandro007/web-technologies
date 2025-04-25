<template>
  <div id="app">
    <header class="app-header">
      <h1>Авиабилеты и Отели Онлайн</h1>
    </header>

    <main>
      <FlightSearch 
        @search-flights="handleFlightSearch"
        @search-hotels="handleHotelSearch"
      />
      <SearchResults 
        :flights="flightResults"
        :hotels="hotelResults"
      />
    </main>

    <footer class="app-footer">
      <p>&copy; 2025 Авиабилеты и Отели Онлайн. Все права защищены.</p>
    </footer>
  </div>
</template>

<script>
import FlightSearch from './components/FlightSearch.vue';
import SearchResults from './components/SearchResults.vue';

export default {
  name: 'App',
  components: {
    FlightSearch,
    SearchResults,
  },
  data() {
    return {
      flightResults: [],
      hotelResults: [],
    };
  },
  methods: {
    handleFlightSearch(flights) {
      console.log('Searching flights:', flights);
      // Здесь будет логика реального поиска
      // Пока просто имитируем результаты
      this.flightResults = flights.map(flight => ({
        departure: flight.departure || 'Москва',
        destination: flight.destination || 'Санкт-Петербург',
        flightNumber: 'SU-' + Math.floor(1000 + Math.random() * 9000),
        date: flight.travelDate || '2025-05-15',
        price: Math.floor(5000 + Math.random() * 15000),
      }));
    },
    handleHotelSearch(hotel) {
      console.log('Searching hotels:', hotel);
      // Здесь будет логика реального поиска
      // Пока просто имитируем результаты
      this.hotelResults = [
        {
          name: 'Гранд Отель Европа',
          location: hotel.city || 'Санкт-Петербург',
          checkIn: hotel.checkIn || '2025-05-15',
          checkOut: hotel.checkOut || '2025-05-20',
          rating: 5,
          price: Math.floor(5000 + Math.random() * 15000),
        },
        {
          name: 'Отель Москва',
          location: hotel.city || 'Москва',
          checkIn: hotel.checkIn || '2025-05-15',
          checkOut: hotel.checkOut || '2025-05-20',
          rating: 4,
          price: Math.floor(3000 + Math.random() * 10000),
        }
      ];
    }
  },
};
</script>

<style>
/* Глобальные стили */
body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  background-color: #0056b3; /* Синий фон */
  color: #ffffff;
}

/* Стили для корневого контейнера */
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* Стили для заголовка */
.app-header {
  background-color: #004080; /* Более тёмный синий */
  padding: 20px;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.app-header h1 {
  margin: 0;
  font-size: 2rem;
}

/* Стили для главной секции */
main {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

/* Стили для футера */
.app-footer {
  background-color: #003366; /* Тёмно-синий */
  text-align: center;
  padding: 10px;
  font-size: 0.9rem;
}

.app-footer p {
  margin: 0;
  color: #ffffff;
}
</style>
