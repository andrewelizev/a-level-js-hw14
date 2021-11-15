// GitHub https://github.com/andrewelizev/a-level-js-hw14

// Lesson 14



console.log('HW1 ==================================================');
// Практика 1
// Проблема
const test = [1,2,[3,4,[5,6]]];
// test.flat(); // [1, 2, 3, 4, Array(2)]
// Напишите мне свою реализацию метода flat, который будет отрабатывать так как нужно для любых кейсов
// const test = [1,2,[3,4,[5,6]]];
// test.customFlat(); // [1,2,3,4,5,6]

Array.prototype.customFlat = function() {
    let newArr = [];
    let arr = this.toString().split(',');
    arr.forEach((item) => newArr.push(+item));
    return newArr;
};

console.log(test.customFlat());


console.log('HW2 ==================================================');
// Практика 2
// Написать функцию, которая проверят строку

// 'dog' 'dgo' -> true (одно и то же слово) 'dog' 'dfg' -> false (слова разные) 'doog' 'ddog' -> false

function compareString(string1, string2) {
    let str1 = string1.split('').sort().join('');
    let str2 = string2.split('').sort().join('');
    if (str1 === str2) {
        return true;
    }
    return false;
}

let res1 = compareString('dog', 'dgo');
console.log('dog', 'dgo', res1);

let res2 = compareString('dog', 'dfg');
console.log('dog', 'dfg', res2);

let res3 = compareString('doog', 'ddog');
console.log('doog', 'ddog', res3);


console.log('HW3 ==================================================');
// Практика 3
let a = { b: 1 };
let c = Object.create(a);

console.log(c.b); // 1
delete c.b;
console.log(c.b); // 1
delete a.b;
console.log(c.b); // undefined


console.log('HW4 == Тут вообще ничего не понятно - что, как, куда, зачем');

// Практика 4
// Напишите функцию, которая будет выводить в консоль, тот индекс, который вписали

// closure()[3]() === 3
// closure()[1]() === 1

// Решение

function closure() {
    return (function () {
        let arr = [];
        for (let i = 0; i < 10; i++) {
            arr = [...arr, () => i];
        }
        return arr;
    })();
}

console.log(closure()[3]());


console.log('HW5 == Тут вообще ничего не понятно - что, как, куда, зачем');
// Практика 5
// Используем reduce

const data = [{
    items: [{
        file: {
            lang: 'React'
        },
        desc: 'Lib'
    }]
}, {
    items: [{
        file: {
            lang: 'Angular'
        },
        desc: 'Framework'
    }]
}, {
    items: [{
        file: {
            lang: 'EXT'
        },
        desc: 'Framework'
    }]
}];

// Решение

const dataParser = (data) => {
    return data.reduce((acc, item) => {
        acc[item.items[0].file.lang] = item.items[0].desc;
        return acc;
    }, {});
};

const languages = dataParser(data); // {React: "Lib", Angular: "Framework", EXT: "Framework"}
console.log(languages);