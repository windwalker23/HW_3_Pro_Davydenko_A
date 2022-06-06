a = parseInt(prompt('a'));
while(a < 0 || isNaN(a)) {
    alert(`a должно быть больше 0`);
    a = parseInt(prompt('a'));
}

b = parseInt(prompt('b'));
while (a >= b || isNaN(b)) {
    alert(`a должно быть меньше b`)
    b = parseInt(prompt('b'));
} 

h = parseInt(prompt('h'));
while(h < 0 || isNaN(h)) {
    alert(`h должно быть больше 0`);
    h = parseInt(prompt('h'));
}

for(i = a + h, sum = 0; i < b; i += h) {
    for (j = 1, factorial = 1; j <= i; j++){
        factorial = factorial * j;
    }
    console.log(`Факториал числа ${i}! = ${factorial}`);
    sum = sum + factorial;
}
console.log(`Сумма факториалов = ${sum}`);