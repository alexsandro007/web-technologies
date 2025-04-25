// Задача 1
function compareNumbers() {
     let num1 = document.getElementById('num1').value;
     let num2 = document.getElementById('num2').value;
     let result = document.getElementById('result1');
     
     if (num1.toLowerCase() === 'q' || num2.toLowerCase() === 'q') {
         result.innerHTML = "Программа завершена";
         return;
     }
     
     if (isNaN(num1) || isNaN(num2)) {
         result.innerHTML = "Первый или второй ввод – не число";
         return;
     }
     
     num1 = Number(num1);
     num2 = Number(num2);
     
     if (num1 === num2) result.innerHTML = "Числа равны";
     else if (num1 < num2) result.innerHTML = "Первое число меньше";
     else result.innerHTML = "Второе число меньше";
}

// Задача 2
function getEntranceNumber() {
     try {
         let floors = Number(document.getElementById('floors').value);
         let entrances = Number(document.getElementById('entrances').value);
         let flatsPerFloor = Number(document.getElementById('flatsPerFloor').value);
         let flatNumber = Number(document.getElementById('flatNumber').value);
         let result = document.getElementById('result2');
         
         if (floors < 1 || floors > 20 || isNaN(floors)) throw new Error("Неверное количество этажей");
         if (entrances < 1 || entrances > 15 || isNaN(entrances)) throw new Error("Неверное число подъездов");
         if (flatsPerFloor < 1 || flatsPerFloor > 5 || isNaN(flatsPerFloor)) throw new Error("Неверное количество квартир на площадке");
         if (flatNumber < 1 || isNaN(flatNumber)) throw new Error("Неверный номер квартиры");
         
         let flatsPerEntrance = floors * flatsPerFloor;
         let entranceNumber = Math.ceil(flatNumber / flatsPerEntrance);
         
         if (entranceNumber > entrances) throw new Error("Квартира находится за пределами дома");
         
         result.innerHTML = `Номер подъезда: ${entranceNumber}`;
     } catch (error) {
         document.getElementById('result2').innerHTML = `Ошибка: ${error.message}`;
     }
}

// Задача 3
function getDayOfWeek() {
     let month = Number(document.getElementById('month').value);
     let day = Number(document.getElementById('day').value);
     let result = document.getElementById('result3');
 
     if (month < 1 || month > 12 || day < 1 || day > 31) {
         result.innerHTML = "Неверная дата";
         return;
     }
 
     const baseDate = new Date(2022, 2, 22);
     const targetDate = new Date(2022, month - 1, day);
 
     if (targetDate.getMonth() !== month - 1 || targetDate.getDate() !== day) {
         result.innerHTML = "Неверная дата";
         return;
     }
 
     const diffDays = Math.floor((targetDate - baseDate) / (1000 * 60 * 60 * 24));
 
     const days = ['воскресенье', 'понедельник', 'вторник', 'среда', 
                   'четверг', 'пятница', 'суббота'];
 
     const dayIndex = (diffDays + 2) % 7;
 
     result.innerHTML = days[dayIndex >= 0 ? dayIndex : dayIndex + 7];
}

// Задача 4
function processNumbers(a, b) {
     if (a % 2 === 0 && b % 2 === 0) return a * b;
     if (a % 2 !== 0 && b % 2 !== 0) return a + b;
     if (a % 2 === 0) return b;
     if (b % 2 === 0) return b;
     return a;
}

function processNumbersUI() {
     let a = Number(document.getElementById('numA').value);
     let b = Number(document.getElementById('numB').value);
     let result = document.getElementById('result4');
     if (isNaN(a) || isNaN(b)) {
         result.innerHTML = "Введите корректные числа";
         return;
     }
     result.innerHTML = `Результат: ${processNumbers(a, b)}`;
}

// Задача 5
function sumUI() {
     let a = document.getElementById('sum1').value.split(',').map(Number);
     
     let result = document.getElementById('result5');
     result.innerHTML = `Результат: ${a.reduce((acc, num) => acc + num, 0)}`; 
}

// Задача 6
function range(start, finish, step = 1) {
     let result = [];
     if (step > 0) {
         for (let i = start; i <= finish; i += step) {
             result.push(i);
         }
     } else {
         for (let i = start; i >= finish; i += step) {
             result.push(i);
         }
     }
     return result;
}

function rangeUI() {
     let start = Number(document.getElementById('rangeStart').value);
     let finish = Number(document.getElementById('rangeFinish').value);
     let step = document.getElementById('rangeStep').value;
     let result = document.getElementById('result6');
     
     step = step === '' ? 1 : Number(step);
     if (isNaN(start) || isNaN(finish) || isNaN(step)) {
         result.innerHTML = "Введите корректные числа";
         return;
     }
     result.innerHTML = `Результат: [${range(start, finish, step)}]`;
}

// Задача 7
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

function sumMatrices(matrix1, matrix2) {
     if (matrix1.length !== matrix2.length || matrix1[0].length !== matrix2[0].length) {
         return "Матрицы должны быть одинакового размера";
     }
     let result = [];
     for (let i = 0; i < matrix1.length; i++) {
         let row = [];
         for (let j = 0; j < matrix1[0].length; j++) {
             row.push(matrix1[i][j] + matrix2[i][j]);
         }
         result.push(row);
     }
     return result;
}

function matrixUI() {
     let rows = Number(document.getElementById('rows').value);
     let cols = Number(document.getElementById('cols').value);
     let result = document.getElementById('result7');
     
     if (isNaN(rows) || isNaN(cols) || rows < 1 || cols < 1) {
         result.innerHTML = "Введите корректные размеры";
         return;
     }
     
     let m1 = createMatrix(rows, cols);
     let m2 = createMatrix(rows, cols);
     let sum = sumMatrices(m1, m2);
     result.innerHTML = `Матрица 1: ${JSON.stringify(m1)}<br>` +
                      `Матрица 2: ${JSON.stringify(m2)}<br>` +
                      `Сумма: ${JSON.stringify(sum)}`;
}

// Задача 8
function MyUnionFunc(...arrays) {
     for (let arr of arrays) {
         if (Array.isArray(arr[0])) {
             return `Функция работает только с одномерными массивами. Введён массив размерности ${arr.length}x${arr[0].length}`;
         }
     }
     let result = new Set();
     arrays.forEach(arr => arr.forEach(item => result.add(item)));
     return Array.from(result);
}

function unionUI() {
     let input = document.getElementById('arrays').value;
     let result = document.getElementById('result8');
     try {
         let arrays = input.split(';').map(arr => arr.split(',').map(Number));
         console.log(arrays);
         
         let output = MyUnionFunc(...arrays);
         result.innerHTML = `Результат: [${output}]`;
     } catch (e) {
         result.innerHTML = "Ошибка ввода. Используйте формат: 1,2,3;4,5,6";
     }
}

// Задача 9
function MyArrayFlattenFunc(arr) {
     return arr.reduce((flat, item) => 
         flat.concat(Array.isArray(item) ? MyArrayFlattenFunc(item) : item), []);
}

function flattenUI() {
     let input = document.getElementById('nestedArray').value;
     let result = document.getElementById('result9');
     try {
         let arr = JSON.parse(input);
         let output = MyArrayFlattenFunc(arr);
         result.innerHTML = `Результат: [${output}]`;
     } catch (e) {
         result.innerHTML = "Ошибка ввода. Используйте формат: [1,[2],[[3]]]";
     }
}

// Задача 10
function MyFunctionUnique(input, count) {
     let arr = Array.isArray(input) ? input : input.split('');
     
     let counts = {};
     arr.forEach(item => {
         counts[item] = (counts[item] || 0) + 1;
     });
     
     return Object.entries(counts)
         .filter(([_, freq]) => freq < count)
         .map(([item]) => isNaN(item) ? item : Number(item));
}

function uniqueUI() {
     let input = document.getElementById('inputArray').value;
     let count = Number(document.getElementById('count').value);
     let result = document.getElementById('result10');
     
     if (isNaN(count)) {
         result.innerHTML = "Введите корректное число повторений";
         return;
     }
     
     try {
         let arr = JSON.parse(input);
         let output = MyFunctionUnique(arr, count);
         result.innerHTML = `Результат: [${output}]`;
     } catch (e) {
         let output = MyFunctionUnique(input, count);
         result.innerHTML = `Результат: [${output}]`;
     }
}