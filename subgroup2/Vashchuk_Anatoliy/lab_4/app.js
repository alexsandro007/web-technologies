const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Настройка EJS как шаблонизатора
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Настройка статических файлов
app.use(express.static(path.join(__dirname, 'public')));

// Парсинг данных из форм
app.use(express.urlencoded({ extended: true }));

// Подключение маршрутов
const indexRouter = require('./routes/index');
app.use('/', indexRouter);

// Запуск сервера
app.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}`);
});