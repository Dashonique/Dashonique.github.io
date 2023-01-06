// This function clear all the values
function clr() {
    document.getElementById("res").value = "";
}

// This function display values
function disp(val) {
    document.getElementById("res").value += val.innerHTML;
}

// This function evaluates the expression and returns result
function calc() {
    let expr = document.getElementById("res").value;
    let res = Function("return " + expr)();
    document.getElementById("res").value = res;
}