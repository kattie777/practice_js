'use strict';

function calculateVolumeAndArea(side) {
    if (Number.isInteger(side) == false || side <= 0) {
        return 'При вычислении произошла ошибка';
    } else {
        const volume = side * side * side,
              square = side * side * 6;
        return `Объем куба: ${volume}, площадь всей поверхности: ${square}`;
    }
}

function getCoupeNumber(seatNumber) {
    if (seatNumber < 0 || Number.isInteger(seatNumber) == false) {
        return "Ошибка. Проверьте правильность введенного номера места";
    } else if (seatNumber < 1 || seatNumber > 36) {
        return "Таких мест в вагоне не существует";
    } else {
        const num = Math.ceil(seatNumber / 4);
        return num;
    }
}

// Место для первой задачи
function getTimeFromMinutes(min) {
    if (min < 0 || Number.isInteger(min) == false) {
        return 'Ошибка, проверьте данные';
    } else {
        const formMins = min % 60,
              formHours = (min - formMins) / 60;
        if (formHours == 0 || formHours == 5 || formHours == 6 || formHours == 7 || formHours == 8 || formHours == 9 || formHours == 10) {
            return `Это ${formHours} часов и ${formMins} минут`;            
        } else if (formHours == 1) {
            return `Это ${formHours} час и ${formMins} минут`;
        } else {
            return `Это ${formHours} часа и ${formMins} минут`;
        }
    }
}

// Место для второй задачи
function findMaxNumber(a, b, c, d) {
    const arr = [a, b, c, d];
    for (let i = 0; i < 4; i++) {
        if (arr[i] == undefined || typeof(arr[i]) != 'number') {
            return 0;
        }
    }

    return Math.max.apply(null, arr);
}

//числа фибоначчи
function fib(count) {
    if (Number.isInteger(count) != true || count <= 0) {
        return '';
    } else if (count == 1) {
        return '0';
    } else if (count == 2) {
        return '0 1';
    } else {
        let result = '0 1 ',
            previous = 0,
            current = 1,
            temp;
        for (let i = 3; i <= count; i++) {
            temp = current + previous;
            previous = current;
            current = temp;
            if (i == count) {
                result = result + `${current}`;
            } else {
                result = result + `${current} `;
            }
        }
        return result;
    }
}

console.log(fib(9));