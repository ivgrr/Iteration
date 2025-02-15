# Упражнения

## Итерирование циклами

Реализуйте функцию `sum(...args)`, которая суммирует все свои аргументы, пятью
разными способами. Примеры вызовов с результатами:
```js
const a = sum(1, 2, 3) // a === 6
const b = sum(0) // b === 0
const c = sum() // c === 0
const d = sum(1, -1, 1) // d === 1
const e = sum(10, -1, -1, -1) // e === 7
```

1. Цикл `for`
2. Цикл `for..of`
3. Цикл `while`
4. Цикл `do..while`
5. Метод `Array.prototype.reduce()`

## Итерирование по двумерному массиву

6. Найдите максимальный элемент в двумерном массиве
```js
const m = max([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
console.log(m); // 9
```

## Итерирование объектов-справочников

7. При помощи цикла `for..in` перебрать объект-справочник с датами рождения и
смерти людей и вернуть справочник с продолжительностью их жизни. Например:
```js
const persons = {
  lenin: { born: 1870, died: 1924 },
  mao: { born: 1893, died: 1976 },
  gandhi: { born: 1869, died: 1948 },
  hirohito: { born: 1901, died: 1989 },
};
console.log(ages(persons));
// {
//   lenin: 54,
//   mao: 83,
//   gandhi: 79,
//   hirohito: 88,
// }
```

## Итерирование в объектах и массивах

8. При помощи циклов перебрать объект и подсчитать количество фруктов
в массивах. Например:
```js
const obj = {
  viktor: ["apple", "grape", "orange", "apple", "banana"],
  kate: ["apple", "grape", "orange", "grape", "banana"],
};

console.log(fruits(obj));
// fruits(obj) должна вернуть
// {
//    viktor: {apple: 2, grape: 1, orange: 1, banana: 1},
//    kate: {apple: 1, grape: 2, orange: 1, apple: 1, banana: 1}
// }
```
