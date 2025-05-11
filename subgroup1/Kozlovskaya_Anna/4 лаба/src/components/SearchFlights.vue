<template>
    <div class="min-h-screen bg-blue-500 flex flex-col items-center justify-center">
        <div class="text-center text-white mb-6">
            <h1 class="text-4xl font-bold">Поиск дешёвых авиабилетов</h1>
            <p class="mt-2">16 лет помогаем вам экономить</p>
        </div>
        <div class="flex items-center space-x-2 mb-4">
            <button class="py-2 px-4 bg-white text-blue-500 font-bold rounded-md shadow-md border border-blue-500">
                Авиабилеты
            </button>
            <button class="py-2 px-4 bg-blue-100 text-blue-500 font-bold rounded-md">Отели</button>
        </div>
        <div v-for="(segment, index) in segments" :key="index" class="p-4 rounded-full w-full max-w-5xl mb-0">
            <div class="flex items-center space-x-0.5 mb-2">
                <input v-model="segment.from" type="text" placeholder="Откуда" :class="{
                    'w-1/6': !isComplexRoute,
                    'w-1/3': isComplexRoute
                }"
                    class="h-10 rounded-tl-lg rounded-bl-lg border border-gray-300 shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                <input v-model="segment.to" type="text" placeholder="Куда" :class="{
                    'w-1/6': !isComplexRoute,
                    'w-1/3': isComplexRoute
                }"
                    class="border h-10 border-gray-300 shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                <input v-model="segment.departureDate" type="date" placeholder="Дата вылета" :class="{
                    'w-1/6': !isComplexRoute,
                    'w-1/3': isComplexRoute,
                    'rounded-tr-lg': isComplexRoute,
                    'rounded-br-lg': isComplexRoute
                }"
                    class="border border-gray-300 shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                <input v-if="!isComplexRoute" v-model="returnDate" type="date" placeholder="Обратно"
                    class="w-1/6 border border-gray-300 shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                <div v-if="!isComplexRoute"
                    class="w-1/6 border h-10 rounded-tr-lg rounded-br-lg shadow-smfocus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                    <button @click="togglePassengerSelector" class="bg-white rounded-tr-lg rounded-br-lg">
                        Количество пассажиров: {{ totalPassengers }}
                    </button>
                    <PassengerSelector v-if="showPassengerSelector" :isOpen="showPassengerSelector"
                        :passengers="passengerDetails" :serviceClass="serviceClass"
                        @update-passengers="updatePassengers" @update-service-class="updateServiceClass"
                        @close="togglePassengerSelector" />
                </div>
                <button v-if="segments.length > 1" @click="removeSegment(index)" class="text-red-500">
                    ✕
                </button>
                <button v-if="!isComplexRoute" type="submit" @click="searchFlights"
                    class="w-1/5 bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
                    id="search-button">
                    Найти билеты
                </button>
            </div>
        </div>
        <div class="flex items-center space-x-2 p-4 rounded-full w-full max-w-5xl mb-0">
            <div v-if="isComplexRoute"
                class="w-1/3 border h-10 rounded-xl shadow-smfocus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                <button @click="togglePassengerSelector" class="bg-white rounded-xl rounded-br-lg w-full h-full">
                    Количество пассажиров: {{ totalPassengers }}
                </button>
                <PassengerSelector v-if="showPassengerSelector" :isOpen="showPassengerSelector"
                    :passengers="passengerDetails" :serviceClass="serviceClass" @update-passengers="updatePassengers"
                    @update-service-class="updateServiceClass" @close="togglePassengerSelector" />
            </div>
            <button v-if="isComplexRoute" @click="addSegment"
                class="w-1/3 bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                + Добавить перелёт
            </button>
            <button v-if="isComplexRoute" type="submit" @click="searchFlights"
                class="w-1/3 bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
                id="search-button">
                Найти билеты
            </button>
        </div>
        <label class="inline-flex items-center text-sm text-white mt-4">
            <input type="checkbox" class="form-checkbox text-blue-600" @change="toggleComplexRoute" />
            <span class="ml-2">Составить сложный маршрут</span>
        </label>
    </div>
</template>
<script>
import PassengerSelector from './PassengerSelector.vue'
export default {
    components: {
        PassengerSelector
    },
    data() {
        return {
            segments: [{ from: '', to: '', departureDate: '' }],
            passengers: 1,
            isComplexRoute: false,
            returnDate: '',
            showPassengerSelector: false,
            passengerDetails: {
                adults: 1,
                children: 0,
                infants: 0
            },
            serviceClass: 'Эконом'
        }
    },
    computed: {
        totalPassengers() {
            return (
                this.passengerDetails.adults +
                this.passengerDetails.children +
                this.passengerDetails.infants
            )
        }
    },
    methods: {
        addSegment() {
            this.segments.push({ from: '', to: '', departureDate: '' })
        },
        removeSegment(index) {
            this.segments.splice(index, 1)
        },
        searchFlights() {
            console.log('Поиск билетов', this.segments, this.passengers)
        },
        toggleComplexRoute() {
            this.isComplexRoute = !this.isComplexRoute
            if (this.isComplexRoute) {
                this.addSegment()
            } else {
                this.segments = [{ from: 'Падерборн', to: '', departureDate: '' }]
            }
        },
        togglePassengerSelector() {
            this.showPassengerSelector = !this.showPassengerSelector
        },
        updatePassengers(newDetails) {
            this.passengerDetails = newDetails
        },
        updateServiceClass(newClass) {
            this.serviceClass = newClass
        }
    }
}
</script>