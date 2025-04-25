document.getElementById("task1").addEventListener("click", task1);
document.getElementById("task2").addEventListener("click", task2);
document.getElementById("task3").addEventListener("click", task3);
document.getElementById("task4").addEventListener("click", task4);
document.getElementById("task5").addEventListener("click", task5);
document.getElementById("task6").addEventListener("click", task6);
document.getElementById("task7").addEventListener("click", task7);
document.getElementById("task8").addEventListener("click", task8);
document.getElementById("task9").addEventListener("click", task9);
document.getElementById("task10").addEventListener("click", task10);

function task1() {
    const num1 = prompt("Введите первое число");
    const num2 = prompt("Введите второе число");

    if (num1.toLowerCase() === 'q' || num2.toLowerCase() === 'q') {
        return;
    }

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("result").textContent = "Первый или второй ввод – не число";
        return;
    }

    const n1 = Number(num1);
    const n2 = Number(num2);

    if (n1 === n2) {
        document.getElementById("result").textContent = "Числа равны";
    } else if (n1 < n2) {
        document.getElementById("result").textContent = "Первое число меньше";
    } else {
        document.getElementById("result").textContent = "Второе число меньше";
    }
}

function task2() {
    const floors = prompt("Введите количество этажей (1-20)");
    const entrances = prompt("Введите количество подъездов (1-15)");
    const flats = prompt("Введите количество квартир на лестничной площадке (1-5)");

    if (isNaN(floors) || isNaN(entrances) || isNaN(flats) ||
        floors < 1 || floors > 20 || entrances < 1 || entrances > 15 || flats < 1 || flats > 5) {
        document.getElementById("result").textContent = "Ошибка: введены некорректные значения";
        return;
    }

    const apartment = prompt("Введите номер квартиры");

    if (isNaN(apartment) || apartment < 1) {
        document.getElementById("result").textContent = "Ошибка: Номер квартиры некорректен";
        return;
    }

    const totalFlatsOnFloor = entrances * flats;
    const entranceNumber = Math.ceil(apartment / totalFlatsOnFloor);
    
    document.getElementById("result").textContent = `Квартира находится в подъезде: ${entranceNumber}`;
}

function task3() {
    const month = prompt("Введите номер месяца (1-12):");
    const day = prompt("Введите число в этом месяце (1-31):");

    if (isNaN(month) || isNaN(day) || month < 1 || month > 12 || day < 1 || day > 31) {
        document.getElementById("result").textContent = "Ошибка: введены некорректные значения";
        return;
    }

    const startDate = new Date(2022, 2, 22);  // 22 марта 2022 - вторник
    const inputDate = new Date(2022, month - 1, day);

    const daysDifference = Math.floor((inputDate - startDate) / (1000 * 60 * 60 * 24));

    const daysOfWeek = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"];
    const dayOfWeek = daysOfWeek[(daysDifference % 7 + 7) % 7];

    document.getElementById("result").textContent = `В этот день недели: ${dayOfWeek}`;
}

function task4() {
    const num1 = prompt("Введите первое число:");
    const num2 = prompt("Введите второе число:");

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("result").textContent = "Ошибка: введены некорректные значения";
        return;
    }

    const n1 = Number(num1);
    const n2 = Number(num2);

    if (n1 % 2 === 0 && n2 % 2 === 0) {
        document.getElementById("result").textContent = `Произведение: ${n1 * n2}`;
    } else if (n1 % 2 !== 0 && n2 % 2 !== 0) {
        document.getElementById("result").textContent = `Сумма: ${n1 + n2}`;
    } else if (n1 % 2 === 0 && n2 % 2 !== 0) {
        document.getElementById("result").textContent = `Нечетное число: ${n2}`;
    } else {
        document.getElementById("result").textContent = `Четное число: ${n2}`;
    }
}

function task5() {
    let sum = 0;

    function add(num) {
        sum += num;
        return add;  // Возвращаем функцию для последующих вызовов
    }

    const result = add(3)(1)(1); // Пример вызова
    document.getElementById("result").textContent = `Результат суммы: ${sum}`;
}

function task6() {
    const start = prompt("Введите начало диапазона:");
    const finish = prompt("Введите конец диапазона:");
    const step = prompt("Введите шаг (по умолчанию 1):");

    if (isNaN(start) || isNaN(finish)) {
        document.getElementById("result").textContent = "Ошибка: введены некорректные значения";
        return;
    }

    let arr = [];
    const s = Number(start);
    const f = Number(finish);
    const st = step ? Number(step) : 1;

    if (st > 0) {
        for (let i = s; i <= f; i += st) {
            arr.push(i);
        }
    } else {
        for (let i = s; i >= f; i += st) {
            arr.push(i);
        }
    }

    document.getElementById("result").textContent = `Диапазон: ${arr}`;
}

function task7() {
    const rows = prompt("Введите количество строк:");
    const cols = prompt("Введите количество столбцов:");

    if (isNaN(rows) || isNaN(cols)) {
        document.getElementById("result").textContent = "Ошибка: введены некорректные значения";
        return;
    }

    const matrix = [];
    for (let i = 0; i < rows; i++) {
        const row = [];
        for (let j = 0; j < cols; j++) {
            row.push(Math.floor(Math.random() * 101));  // случайные числа от 0 до 100
        }
        matrix.push(row);
    }

    // Формируем строку для вывода матрицы
    let matrixOutput = '';
    matrix.forEach(row => {
        matrixOutput += '[' + row.join(', ') + ']\n';  // Каждая строка матрицы будет выведена в формате массива, как [a, b, c, ...]
    });

    document.getElementById("result").textContent = `Матрица: \n${matrixOutput}`;
}

function task8() {
    function myUnion(...arrays) {

        if (arrays.some(arr => Array.isArray(arr) === false)) {
            document.getElementById("result").textContent = "Ошибка: Все аргументы должны быть одномерными массивами";
            return;
        }

        const result = [];
        arrays.forEach(array => {
            array.forEach(element => {
                if (!result.includes(element)) {
                    result.push(element);
                }
            });
        });
        return result;
    }

    const inputArrays = [];
    let moreArrays = true;

    while (moreArrays) {
        const input = prompt("Введите одномерный массив (через запятую), или 'q' для завершения:");

        if (input.toLowerCase() === 'q') {
            moreArrays = false;
            break;
        }

        const array = input.split(',').map(item => item.trim());
        
        inputArrays.push(array);
    }

    if (inputArrays.length === 0) {
        document.getElementById("result").textContent = "Ошибка: Нет введенных массивов";
        return;
    }

    const result = myUnion(...inputArrays);

    document.getElementById("result").textContent = `Результат объединения: ${JSON.stringify(result)}`;
}

function task9() {
    function flattenArray(arr) {
        if (!Array.isArray(arr)) {
            document.getElementById("result").textContent = "Ошибка: Введенные данные не являются массивом";
            return;
        }

        const result = [];
        arr.forEach(element => {
            if (Array.isArray(element)) {
                // Рекурсивный вызов для вложенных массивов
                result.push(...flattenArray(element));  
            } else {
                result.push(element);
            }
        });
        return result;
    }

    // Запрашиваем ввод массива от пользователя в формате JSON
    const input = prompt("Введите массив с уровнями вложенности в формате JSON (например: [1, [2], [[5], [3, [4]]]])");

    // Преобразуем строку в массив
    let array;
    try {
        array = JSON.parse(input);
    } catch (e) {
        document.getElementById("result").textContent = "Ошибка: Невозможно распарсить введенный массив. Пожалуйста, используйте формат JSON.";
        return;
    }

    // Вызываем функцию flatten для получения плоского массива
    const result = flattenArray(array);

    document.getElementById("result").textContent = `Плоский массив: ${JSON.stringify(result)}`;
}


function task10() {
    function uniqueArray(arr, repeatCount) {
        if (!Array.isArray(arr)) {
            document.getElementById("result").textContent = "Ошибка: Введены некорректные данные";
            return;
        }

        const result = [];
        const counts = {};

        arr.forEach(element => {
            counts[element] = (counts[element] || 0) + 1;
        });

        Object.keys(counts).forEach(key => {
            if (counts[key] < repeatCount) {
                result.push(key);
            }
        });

        return result;
    }

    const inputArray = prompt("Введите массив чисел (через запятую):");
    const repeatCount = prompt("Введите количество повторений:");

    const arr = inputArray.split(',').map(item => item.trim());

    if (isNaN(repeatCount) || repeatCount <= 0) {
        document.getElementById("result").textContent = "Ошибка: Некорректное количество повторений";
        return;
    }

    const result = uniqueArray(arr, Number(repeatCount));

    document.getElementById("result").textContent = `Уникальные элементы: ${JSON.stringify(result)}`;
}