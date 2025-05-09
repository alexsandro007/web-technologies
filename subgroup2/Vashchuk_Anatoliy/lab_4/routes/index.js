const express = require('express');
const router = express.Router();

let bookings = []; // Массив для хранения бронирований

// Главная страница
router.get('/', (req, res) => {
    res.render('index');
});

// Страница поиска билетов
router.get('/search', (req, res) => {
    res.render('search');
});

// Страница бронирования
// Страница бронирования
router.post('/booking', (req, res) => {
    const { name, flightNumber, date, email, passengers, departureCity, destinationCity } = req.body;
    const booking = { name, flightNumber, date, email, passengers, departureCity, destinationCity };
    bookings.push(booking); // Сохраняем новое бронирование
    res.render('booking', booking); // Отправляем данные на страницу подтверждения
});

// Страница редактирования
router.get('/edit/:flightNumber', (req, res) => {
    const flightNumber = req.params.flightNumber;
    const booking = bookings.find(b => b.flightNumber === flightNumber);

    if (booking) {
        res.render('edit', {
            name: booking.name,
            flightNumber: booking.flightNumber,
            date: booking.date,
            email: booking.email,
            passengers: booking.passengers,
            departureCity: booking.departureCity, // Убедитесь, что значение существует
            destinationCity: booking.destinationCity // Убедитесь, что значение существует
        });
    } else {
        res.status(404).send('Бронирование не найдено');
    }
});

// Обработчик для редактирования бронирования
router.post('/edit', (req, res) => {
    const { name, flightNumber, date, email, passengers, departureCity, destinationCity } = req.body;
    const bookingIndex = bookings.findIndex(b => b.flightNumber === flightNumber);
    
    if (bookingIndex !== -1) {
        bookings[bookingIndex] = { name, flightNumber, date, email, passengers, departureCity, destinationCity }; // Обновляем бронирование
        res.render('booking', bookings[bookingIndex]); // Отправляем обновленные данные
    } else {
        res.status(404).send('Бронирование не найдено');
    }
});

// Обработчик для удаления бронирования
router.post('/delete', (req, res) => {
    const { flightNumber } = req.body;
    bookings = bookings.filter(b => b.flightNumber !== flightNumber); // Удаляем бронирование по номеру рейса
    res.redirect('/search'); // Перенаправляем на страницу поиска
});

module.exports = router;