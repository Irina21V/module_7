//7.7.2
function calculate(a, b, operator) {
    if (operation === 'add') {
        return a + b;
    } else if (operation === 'subtract') {
        return a - b;
    } else if (operation === 'multiply') {
        return a * b;
    } else if (operation === 'divide') {
    }

    return 0;
}

let result = calculate.apply(null, [2, 3, "+"]);
console.log(result);