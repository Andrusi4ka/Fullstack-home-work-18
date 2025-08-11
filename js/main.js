console.log('JS #1. Домашнє завдання. Основи JavaScript: Працюємо зі змінними, типами даних');
console.log('');

/*
 * #1
 *
 * Створіть змінні зі значеннями.
 */

// ім'я змінної: myNum, значення: 10
console.log("1. ім'я змінної: myNum, значення: 10");
let myNum = 10;
console.log('myNum = ' + myNum + ', ' + typeof (myNum));
console.log('');

// ім'я змінної: myStr, значення: 'some string'
console.log("2. ім'я змінної: myStr, значення: 'some string'");
let myStr = 'some string';
console.log('myStr = ' + myStr + ', ' + typeof (myStr));
console.log('');

// ім'я змінної: myBool, значення: true
console.log("3. ім'я змінної: myBool, значення: true");
let myBool = true;
console.log('myBool = ' + myBool + ', ' + typeof (myBool));
console.log('');

// ім'я змінної: myArr, значення: 1, 2, 3, 4, 5
console.log("4. ім'я змінної: myArr, значення: 1, 2, 3, 4, 5");
let myArr = ['1', '2', '3', '4', '5'];
console.log(myArr);
console.log('');


// ім'я змінної: myObj, значення: first: 'First Name', last: 'Last Name'
console.log("5. ім'я змінної: myObj, значення: first: 'First Name', last: 'Last Name'");
let myObj = {
    first: 'First Name',
    last: 'Last Name'
}
console.log(myObj);
console.log('');

/*
 * #2
 *
 * Відформатуйте ціле число, яке зберігається в змінній myNum, щоб отримати результат з 2 знаками після коми.
 * Результат збережіть у змінній decimal2.
 *
 */

// decimal2
console.log('6. Відформатуйте ціле число, яке зберігається в змінній myNum, щоб отримати результат з 2 знаками після коми. Результат збережіть у змінній decimal2');
let decimal2 = myNum.toFixed(2);
console.log('decimal2 = ' + decimal2 + ', ' + typeof (+decimal2));
console.log('');

/*
 * #3
 *
 * Створіть змінну myBigInt і запишіть в неї число 123n (BigInt).
 * Потім збільште його на 1 та запищіть в цю ж саму змінну.
 */

// myBigInt
console.log('7. Створіть змінну myBigInt і запишіть в неї число 123n (BigInt). Потім збільште його на 1 та запищіть в цю ж саму змінну.');
let myBigInt = 123n;
console.log(myBigInt);
myBigInt = myBigInt + 1n;
console.log(myBigInt);


