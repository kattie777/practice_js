'use strict';

const box = document.getElementById('box');

const wrapper = document.querySelectorAll('.wrapper');
const hearts = document.querySelectorAll('.heart');

const divBlack = document.createElement('div'); //создать элемент, будет отображаться только в джиес
divBlack.classList.add('black'); //добавить элементу класс

const divRose = document.createElement('div');
divRose.classList.add('rose');

const divBlue = document.createElement('div');
divBlue.classList.add('blue');

const divRed = document.createElement('div');
divRed.classList.add('red');

const divGreen = document.createElement('div');
divGreen.classList.add('green');

wrapper[0].append(divBlack); //добавить элемент в скобках в конец элемента врэппэр
wrapper[0].prepend(divRose); 
hearts[2].before(divBlue)
hearts[2].after(divRed)
hearts[3].replaceWith(divGreen)
hearts[0].remove();




    

