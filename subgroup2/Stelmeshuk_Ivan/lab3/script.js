function task1() {
    while (true) {
        let num1 = prompt("Введите первое число (q для выхода):");
        if (num1.toLowerCase() === 'q') break;
        let num2 = prompt("Введите второе число (q для выхода):");
        if (num2.toLowerCase() === 'q') break;

        if (isNaN(num1) || isNaN(num2)) {
            document.getElementById('result1').innerText = "Первый или второй ввод – не число";
            break;
        }

        num1 = Number(num1);
        num2 = Number(num2);
        if (num1 === num2) document.getElementById('result1').innerText = "Числа равны";
        else if (num1 < num2) document.getElementById('result1').innerText = "Первое число меньше";
        else document.getElementById('result1').innerText = "Второе число меньше";
        break;
    }
}

function task2() {
    try {
        let floors = Number(document.getElementById('floors').value);
        let entrances = Number(document.getElementById('entrances').value);
        let flats = Number(document.getElementById('flats').value);
        let flatNum = Number(document.getElementById('flatNum').value);

        if (floors < 1 || floors > 20) throw new Error("Этажей должно быть 1-20");
        if (entrances < 1 || entrances > 15) throw new Error("Подъездов должно быть 1-15");
        if (flats < 1 || flats > 5) throw new Error("Квартир на площадке должно быть 1-5");
        if (flatNum < 1) throw new Error("Номер квартиры должен быть положительным");

        let flatsPerEntrance = floors * flats;
        let entranceNum = Math.ceil(flatNum / flatsPerEntrance);
        if (entranceNum > entrances) throw new Error("Квартира не существует в этом доме");
        document.getElementById('result2').innerText = `Номер подъезда: ${entranceNum}`;
    } catch (e) {
        document.getElementById('result2').innerText = `Ошибка: ${e.message}`;
    }
}

function task3() {
    let month = Number(document.getElementById('month').value);
    let day = Number(document.getElementById('day').value);
    if (month < 1 || month > 12 || day < 1 || day > 31) {
        document.getElementById('result3').innerText = "Неверный месяц или день";
        return;
    }

    let baseDate = new Date(2022, 2, 22);
    let targetDate = new Date(2022, month - 1, day);
    let diffDays = Math.floor((targetDate - baseDate) / (1000 * 60 * 60 * 24));
    let days = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
    let dayIndex = (2 + diffDays) % 7;
    if (dayIndex < 0) dayIndex += 7;
    document.getElementById('result3').innerText = days[dayIndex];
}

function task4() {
    let num1 = Number(document.getElementById('num1').value);
    let num2 = Number(document.getElementById('num2').value);
    
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('result4').innerText = "Введите числа";
        return;
    }

    if (num1 % 2 === 0 && num2 % 2 === 0) document.getElementById('result4').innerText = num1 * num2;
    else if (num1 % 2 !== 0 && num2 % 2 !== 0) document.getElementById('result4').innerText = num1 + num2;
    else if (num1 % 2 === 0) document.getElementById('result4').innerText = num2;
    else document.getElementById('result4').innerText = num2; 
}

// Задача 5
function sum(a) {
    let currentSum = a;

    function next(b) {
        if (b === undefined) {
            return currentSum;
        }
        currentSum += b;
        return next;
    }

    next.toString = function() {
        return currentSum;
    };

    return next;
}

function task5() {
    // Получаем значение из поля ввода
    let input = document.getElementById('numbersInput').value.trim();
    
    // Разделяем строку на массив чисел (по пробелу или запятой)
    let numbers = input.split(/[\s,]+/).map(Number);
    
    // Проверяем, что все введённые значения — числа
    if (numbers.some(isNaN)) {
        document.getElementById('result5').innerText = "Ошибка: Введите только числа";
        return;
    }

    if (numbers.length === 0) {
        document.getElementById('result5').innerText = "Ошибка: Введите хотя бы одно число";
        return;
    }

    // Начинаем с первого числа
    let result = sum(numbers[0]);
    
    // Добавляем остальные числа через цепочку вызовов
    for (let i = 1; i < numbers.length; i++) {
        result = result(numbers[i]);
    }

    // Получаем итоговую сумму (можно через пустой вызов или toString)
    let finalResult = result();
    
    document.getElementById('result5').innerText = `Результат: ${finalResult}`;
}

function range(start, finish, step = 1) {
    let arr = [];
    if (step > 0) {
        for (let i = start; i <= finish; i += step) arr.push(i);
    } else {
        for (let i = start; i >= finish; i += step) arr.push(i);
    }
    return arr;
}
function task6() {
    let start = Number(document.getElementById('start').value);
    let finish = Number(document.getElementById('finish').value);
    let step = document.getElementById('step').value === '' ? 1 : Number(document.getElementById('step').value);
    let result = range(start, finish, step);
    document.getElementById('result6').innerText = JSON.stringify(result);
}

function createMatrix(rows, cols) {
    let matrix = [];
    for (let i = 0; i < rows; i++) {
        let row = [];
        for (let j = 0; j < cols; j++) {
            row.push(Math.floor(Math.random() * 101));
        }
        matrix.push(row);
    }
    return matrix;
}
function sumMatrices(m1, m2) {
    let result = [];
    for (let i = 0; i < m1.length; i++) {
        let row = [];
        for (let j = 0; j < m1[0].length; j++) {
            row.push(m1[i][j] + m2[i][j]);
        }
        result.push(row);
    }
    return result;
}
function task7() {
    let rows = Number(document.getElementById('rows').value);
    let cols = Number(document.getElementById('cols').value);
    let m1 = createMatrix(rows, cols);
    let m2 = createMatrix(rows, cols);
    let sum = sumMatrices(m1, m2);

    let formatMatrix = (matrix) => {
        return matrix.map(row => row.join(' ')).join('\n');
    };
    document.getElementById('result7').innerText = 
        `Матрица 1:\n${formatMatrix(m1)}\n\nМатрица 2:\n${formatMatrix(m2)}\n\nСумма:\n${formatMatrix(sum)}`;
}

function MyUnionFunc(...arrays) {
    // Проверяем, что все параметры — массивы
    for (let arr of arrays) {
        if (!Array.isArray(arr)) {
            return "Ошибка: Один из параметров не является массивом";
        }
        // Проверяем, что массив одномерный
        for (let elem of arr) {
            if (Array.isArray(elem)) {
                return `Функция работает только с одномерными массивами. Размерность: ${getArrayDepth(arr)}`;
            }
        }
    }

    // Объединяем уникальные элементы
    let unionSet = new Set();
    for (let arr of arrays) {
        arr.forEach(elem => unionSet.add(elem));
    }

    // Возвращаем отсортированный массив
    return Array.from(unionSet).sort((a, b) => a - b);
}

function getArrayDepth(arr) {
    return Array.isArray(arr) ? 1 + Math.max(...arr.map(getArrayDepth)) : 0;
}

function task8() {
    let input = document.getElementById('arraysInput').value.trim();

    // Разделяем ввод на отдельные массивы по пробелам между скобками
    let arrayStrings = input.match(/\[.*?\]/g); // Извлекаем все подстроки вида [числа]
    
    if (!arrayStrings || arrayStrings.length === 0) {
        document.getElementById('result8').innerText = "Ошибка: Введите хотя бы один массив в формате [числа]";
        return;
    }

    // Преобразуем строки в массивы чисел
    let arrays = [];
    try {
        for (let str of arrayStrings) {
            // Удаляем скобки и преобразуем строку в массив чисел
            let nums = str.slice(1, -1).split(/[\s,]+/).map(Number);
            if (nums.some(isNaN)) {
                document.getElementById('result8').innerText = "Ошибка: Введите только числа в массивах";
                return;
            }
            arrays.push(nums);
        }
    } catch (e) {
        document.getElementById('result8').innerText = "Ошибка: Неверный формат ввода";
        return;
    }

    // Вызываем функцию с переданными массивами
    let result = MyUnionFunc(...arrays);
    document.getElementById('result8').innerText = JSON.stringify(result);
}

function MyArrayFlattenFunc(arr) {
    // Проверяем, что параметр — массив
    if (!Array.isArray(arr)) {
        return "Ошибка: Введённый параметр не является массивом";
    }

    // Используем встроенный метод flat с Infinity для максимальной вложенности
    return arr.flat(Infinity);

    // Альтернативная рекурсивная реализация (если flat недоступен):
    /*
    let flattenedArray = [];
    
    function flatten(array) {
        for (let elem of array) {
            if (Array.isArray(elem)) {
                flatten(elem);
            } else {
                flattenedArray.push(elem);
            }
        }
    }
    
    flatten(arr);
    return flattenedArray;
    */
}

function task9() {
    let input = document.getElementById('arrayInput').value.trim();

    // Проверяем, что введённый текст — это массив
    if (!input.startsWith('[') || !input.endsWith(']')) {
        document.getElementById('result9').innerText = "Ошибка: Введите массив в формате [элементы]";
        return;
    }

    // Преобразуем строку в массив
    let arr;
    try {
        // Используем eval для разбора строки в массив (опасно в продакшене, см. примечание ниже)
        arr = eval(input);
        if (!Array.isArray(arr)) {
            document.getElementById('result9').innerText = "Ошибка: Введённый параметр не является массивом";
            return;
        }
    } catch (e) {
        document.getElementById('result9').innerText = "Ошибка: Неверный формат массива";
        return;
    }

    // Применяем функцию и выводим результат
    let result = MyArrayFlattenFunc(arr);
    document.getElementById('result9').innerText = JSON.stringify(result);
}

function MyFunctionUnique(input, repetitions) {
    // Проверяем, что входной параметр — массив или строка
    if (!Array.isArray(input) && typeof input !== 'string') {
        return "Ошибка: Введённый параметр не является массивом или строкой";
    }

    // Преобразуем входные данные в массив
    let arr = typeof input === 'string' ? input.split('') : input;

    // Подсчитываем количество повторений каждого элемента
    let counts = {};
    arr.forEach(item => {
        counts[item] = (counts[item] || 0) + 1;
    });

    // Фильтруем элементы, у которых повторений <= repetitions
    return Object.entries(counts)
        .filter(([_, count]) => count <= repetitions)
        .map(([item]) => isNaN(item) ? item : Number(item));
}

function task10() {
    let inputStr = document.getElementById('inputData').value.trim();
    let repetitions = Number(document.getElementById('repetitions').value);

    // Проверяем корректность количества повторений
    if (isNaN(repetitions) || repetitions < 1) {
        document.getElementById('result10').innerText = "Ошибка: Введите корректное число повторений (>= 1)";
        return;
    }

    let input;
    // Если ввод начинается с [ и заканчивается ], считаем это массивом
    if (inputStr.startsWith('[') && inputStr.endsWith(']')) {
        try {
            input = eval(inputStr); // Преобразуем строку в массив
            if (!Array.isArray(input)) {
                document.getElementById('result10').innerText = "Ошибка: Введённый параметр не является массивом";
                return;
            }
        } catch (e) {
            document.getElementById('result10').innerText = "Ошибка: Неверный формат массива";
            return;
        }
    } else {
        // Если не массив, считаем это строкой
        input = inputStr;
    }

    // Выполняем функцию и выводим результат
    let result = MyFunctionUnique(input, repetitions);
    document.getElementById('result10').innerText = JSON.stringify(result);
}