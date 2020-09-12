'use strict';

let tempC = prompt("Введите температуру в градусах");

let tempF = (9 / 5) * tempC + 32;

alert("Температура в фаренгейтах равна " + (Math.round(tempF * 100) / 100));