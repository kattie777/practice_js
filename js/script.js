'use strict';

let st = '';
for (let i = 1; i < 7; i++) {
    st = '';
    for (let j = 1; j < i + 1; j++) {
        st = st + '*';
    }
    console.log(st);
}

//first
for (let i = 5; i < 11; i++){
    console.log(i);
}

//second
for (let i = 20; i > 9; i--){
    if(i == 13){
        break;
    }
    console.log(i);
}

//third
for (let i = 2; i < 11; i++){
    if(i%2 === 0){
        console.log(i);
    }
}

//fourth
let i = 2;
while (i < 17){
    if (i % 2 === 0) {
        i++;
        continue;
    } else {
        console.log(i);
    }
    i++;
}

//fifth
let arr = [];
for (let i = 0; i < 6; i++){
    arr[i] = 5 + i;
}

//2_level first
const arr2 = [3, 5, 8, 16, 20, 23, 50];
const result = [];

for (let i = 0; i < arr2.length; i++) {
    result[i] = arr2[i];
}
console.log(result);



//2_level second
function secondTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    for (let i = 0; i < data.length; i++) {
        if (typeof(data[i]) === 'string') {
            data[i] = data[i] + ' - done';
        } else if (typeof (data[i]) === 'number') {
            data[i] = data[i] * 2;
        }

    }
}

//2_level third
function thirdTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];

    for (let i = data.length - 1, j = 0; i > -1; i--, j++) {
        result[i] = data[0 + j];
    }
console.log(result)
}

//pyramide2
let rows = 6;
let maxStars = rows * 2 - 1;
let startPoint = (maxStars - 1) / 2;
let result2 = '';
for (let row = 1; row <= rows; row++) {
    let i = 1;
    let starsInRow = 1; //скока звезд в этом ряду
    while (i < row) {
        starsInRow = starsInRow + 2;
        i++;
    }
    let Shift = (starsInRow - 1) / 2; //сколько звезд по каждую сторону от центральной
    for (let col = 0; col < maxStars; col++) {
        if (col < (startPoint - Shift) || col > (startPoint + Shift)) {
            result2 = result2 + ' ';
        } else {
            result2 = result2 + '*';
        }
    }
    result2 = result2 + '\n';
}
console.log(result2);

