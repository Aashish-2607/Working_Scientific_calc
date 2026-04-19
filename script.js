const display = document.getElementById('display');

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function deleteChar() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        // eval handles the order of operations (PEMDAS) automatically
        // WARNING: eval is generally unsafe for untrusted input, but acceptable for this local project.
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
        setTimeout(clearDisplay, 1500);
    }
}

function scientific(func) {
    try {
        const val = eval(display.value) || 0;
        switch(func) {
            case 'sin': display.value = Math.sin(val); break;
            case 'cos': display.value = Math.cos(val); break;
            case 'tan': display.value = Math.tan(val); break;
            case 'log': display.value = Math.log10(val); break;
            case 'sqrt': display.value = Math.sqrt(val); break;
        }
    } catch (error) {
        display.value = "Error";
    }
}
