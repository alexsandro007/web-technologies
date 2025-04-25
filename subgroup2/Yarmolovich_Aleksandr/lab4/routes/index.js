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
    const { name, flightNumber, date, email, passengers, departureCity, transferCity, destinationCity } = req.body;
    const booking = { name, flightNumber, date, email, passengers, departureCity, transferCity, destinationCity };
    bookings.push(booking);
    res.render('booking', booking);
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
            departureCity: booking.departureCity,
            transferCity: booking.transferCity,
            destinationCity: booking.destinationCity
        });
    } else {
        res.status(404).send('Бронирование не найдено');
    }
});

// Обработчик для редактирования бронирования
router.post('/edit', (req, res) => {
    const { name, flightNumber, date, email, passengers, departureCity, transferCity, destinationCity } = req.body;
const bookingIndex = bookings.findIndex(b => b.flightNumber === flightNumber);

if (bookingIndex !== -1) {
    bookings[bookingIndex] = { name, flightNumber, date, email, passengers, departureCity, transferCity, destinationCity };
    res.render('booking', bookings[bookingIndex]);
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