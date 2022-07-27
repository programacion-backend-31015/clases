"use strict";

var lista = [2, 3, 4, 7];
lista.map(function (x) {
  return x * x;
}).forEach(function (x) {
  return console.log(x);
});
