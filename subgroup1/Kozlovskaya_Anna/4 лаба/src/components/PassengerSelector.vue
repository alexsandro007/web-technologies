<template>
    <div v-if="isOpen" class="absolute bg-white shadow-lg rounded-lg p-4 w-64">
        <div class="flex items-center justify-between mb-4">
            <div>
                <p>Взрослые</p>
                <p class="text-xs text-gray-500">12 лет и старше</p>
            </div>
            <div class="flex items-center space-x-2">
                <button @click="decrease('adults')" class="bg-gray-200 p-2 rounded-full">-</button>
                <span>{{ localPassengers.adults }}</span>
                <button @click="increase('adults')" class="bg-gray-200 p-2 rounded-full">+</button>
            </div>
        </div>
        <div class="flex items-center justify-between mb-4">
            <div>
                <p>Дети</p>
                <p class="text-xs text-gray-500">от 2 до 11 лет</p>
            </div>
            <div class="flex items-center space-x-2">
                <button @click="decrease('children')" class="bg-gray-200 p-2 rounded-full">-</button>
                <span>{{ localPassengers.children }}</span>
                <button @click="increase('children')" class="bg-gray-200 p-2 rounded-full">+</button>
            </div>
        </div>
        <div class="flex items-center justify-between mb-4">
            <div>
                <p>Младенцы</p>
                <p class="text-xs text-gray-500">Младше 2 лет, без места</p>
            </div>
            <div class="flex items-center space-x-2">
                <button @click="decrease('infants')" class="bg-gray-200 p-2 rounded-full">-</button>
                <span>{{ localPassengers.infants }}</span>
                <button @click="increase('infants')" class="bg-gray-200 p-2 rounded-full">+</button>
            </div>
        </div>
        <div class="flex items-center justify-between mb-4">
            <p>Класс обслуживания</p>
            <select v-model="localServiceClass" class="bg-gray-200 p-2 rounded-lg">
                <option value="Эконом">Эконом</option>
                <option value="Комфорт">Комфорт</option>
                <option value="Бизнес">Бизнес</option>
                <option value="Первый класс">Первый класс</option>
            </select>
        </div>
        <button @click="applyChanges" class="w-full bg-blue-500 text-white py-2 px-4 rounded-md">
            Применить
        </button>
    </div>
</template>
<script>
export default {
    props: {
        isOpen: Boolean,
        passengers: Object,
        serviceClass: String
    },
    data() {
        return {
            localPassengers: { ...this.passengers },
            localServiceClass: this.serviceClass
        }
    },
    methods: {
        increase(type) {
            this.localPassengers[type]++
        },
        decrease(type) {
            if (this.localPassengers[type] > 0) {
                this.localPassengers[type]--
            }
        },
        applyChanges() {
            this.$emit('update-passengers', this.localPassengers)
            this.$emit('update-service-class', this.localServiceClass)
            this.$emit('close')
        }
    }
}
</script>