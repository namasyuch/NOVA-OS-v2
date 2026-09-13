function openWindow(name) {
    document.getElementById(name).style.display = "block";
}

function closeWindow(name) {
    document.getElementById(name).style.display = "none";
}

function addNumbers() {
    let a = Number(document.getElementById("number1").value);
    let b = Number(document.getElementById("number2").value);

    document.getElementById("answer").innerHTML = a + b;
}

function subtractNumbers() {
    let a = Number(document.getElementById("number1").value);
    let b = Number(document.getElementById("number2").value);

    document.getElementById("answer").innerHTML = a - b;
}

function multiplyNumbers() {
    let a = Number(document.getElementById("number1").value);
    let b = Number(document.getElementById("number2").value);

    document.getElementById("answer").innerHTML = a * b;
}

function divideNumbers() {
    let a = Number(document.getElementById("number1").value);
    let b = Number(document.getElementById("number2").value);

    if (b == 0) {
        document.getElementById("answer").innerHTML = "Cannot divide by 0";
    } else {
        document.getElementById("answer").innerHTML = a / b;
    }
}

let notes = document.getElementById("notes");
let notesBar = document.querySelector("#notes .bar");

notesBar.onmousedown = function(event) {
    let x = event.clientX - notes.offsetLeft;
    let y = event.clientY - notes.offsetTop;

    document.onmousemove = function(event) {
        notes.style.left = event.clientX - x + "px";
        notes.style.top = event.clientY - y + "px";
    };

    document.onmouseup = function() {
        document.onmousemove = null;
    };
};

let about = document.getElementById("about");
let aboutBar = document.querySelector("#about .bar");

aboutBar.onmousedown = function(event) {
    let x = event.clientX - about.offsetLeft;
    let y = event.clientY - about.offsetTop;

    document.onmousemove = function(event) {
        about.style.left = event.clientX - x + "px";
        about.style.top = event.clientY - y + "px";
    };

    document.onmouseup = function() {
        document.onmousemove = null;
    };
};

let calculator = document.getElementById("calculator");
let calculatorBar = document.querySelector("#calculator .bar");

calculatorBar.onmousedown = function(event) {
    let x = event.clientX - calculator.offsetLeft;
    let y = event.clientY - calculator.offsetTop;

    document.onmousemove = function(event) {
        calculator.style.left = event.clientX - x + "px";
        calculator.style.top = event.clientY - y + "px";
    };

    document.onmouseup = function() {
        document.onmousemove = null;
    };
};