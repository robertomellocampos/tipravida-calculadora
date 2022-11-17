
let expression = ['', ''];
let operation = '';
let operationAction;
let preview = '';
let hasResult = false;

const operations = {
    '+': (num1, num2) => num1 + num2,
    '-': (num1, num2) => num1 - num2,
    'x': (num1, num2) => num1 * num2,
    '÷': (num1, num2) => num1 / num2
};

function num(value) {

    if (hasResult) {
        clean();
    }

    if (!operation) {
        expression[0] += value;
    } else {
        expression[1] += value;
    }
    output();
}

function op(value) {
    if (!operation) {
        operation = value;
    }
    output();
}

function clean() {
    selectedOperation = undefined;
    operation = '';
    preview = '';
    document.getElementById('preview').innerText = preview;
    expression = ['', ''];
    hasResult = false;
    output();
}

function result() {
    operationAction = operations[operation];
    if (operationAction && !Object.keys(operations).includes(expression[expression.length])) {
        const calculated = operationAction(parseFloat(expression[0]), parseFloat(expression[1]));
        setPreview()
        hasResult = true;
        expression = [calculated.toFixed(2), ''];
        selectedOperation = undefined;
        operation = '';
        output(expression[0]);
    } else {
        output();
    }
}

function output(calculated) {
    const element = document.getElementById('display');
    if (calculated) {
        element.value = calculated;
    } else if (operation) {
        element.value = expression[0] + operation + expression[1];
    } else {
        element.value = expression[0];
    }
}

function setPreview() {
    preview = expression[0] + ' ' + operation + ' ' + expression[1] + ' =';
    document.getElementById('preview').innerText = preview;
}
