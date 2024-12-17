"use strict"

function myfun10() {

    var b1 = document.getElementById("b1").value
    var b2 = document.getElementById("b2").value
    var b3 = document.getElementById("b3").value
    var b4 = document.getElementById("b4").value
    var b5 = document.getElementById("b5").value
    var b6 = document.getElementById("b6").value
    var b7 = document.getElementById("b7").value
    var b8 = document.getElementById("b8").value
    var b9 = document.getElementById("b9").value

    var b1btn = document.getElementById("b1")
    var b2btn = document.getElementById("b2")
    var b3btn = document.getElementById("b3")
    var b4btn = document.getElementById("b4")
    var b5btn = document.getElementById("b5")
    var b6btn = document.getElementById("b6")
    var b7btn = document.getElementById("b7")
    var b8btn = document.getElementById("b8")
    var b9btn = document.getElementById("b9")

    if (b1 == 'X' && b2 == 'X' && b3 == 'X') {
        document.getElementById("result").innerHTML = " person X win"
        b4btn.disabled = true;
        b5btn.disabled = true;
        b6btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;
        b1btn.style.color = "red";
        b2btn.style.color = "red";
        b3btn.style.color = "red";
    }
    else if (b4 == 'X' && b5 == 'X' && b6 == 'X') {
        document.getElementById("result").innerHTML = " person X win"
        b1btn.disabled = true;
        b2btn.disabled = true;
        b3btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;
        b4btn.style.color = "red";
        b5btn.style.color = "red";
        b6btn.style.color = "red";
    }
    else if (b7 == 'X' && b8 == 'X' && b9 == 'X') {
        document.getElementById("result").innerHTML = "player X win"
        b4btn.disabled = true;
        b5btn.disabled = true;
        b6btn.disabled = true;
        b1btn.disabled = true;
        b2btn.disabled = true;
        b3btn.disabled = true;
        b7btn.style.color = "red";
        b8btn.style.color = "red";
        b9btn.style.color = "red";
    }
    else if (b1 == 'X' && b4 == 'X' && b7 == 'X') {
        document.getElementById("result").innerHTML = "player X win"
        b2btn.disabled = true;
        b3btn.disabled = true;
        b5btn.disabled = true;
        b6btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;
        b1btn.style.color = "red";
        b4btn.style.color = "red";
        b7btn.style.color = "red";
    }
    else if (b2 == 'X' && b5 == 'X' && b8 == 'X') {
        document.getElementById("result").innerHTML = "player X win"
        b1btn.disabled = true;
        b3btn.disabled = true;
        b4btn.disabled = true;
        b6btn.disabled = true;
        b7btn.disabled = true;
        b9btn.disabled = true;
        b2btn.style.color = "red";
        b5btn.style.color = "red";
        b8btn.style.color = "red";
    }
    else if (b3 == 'X' && b6 == 'X' && b9 == 'X') {
        document.getElementById("result").innerHTML = "player X win"
        b1btn.disabled = true;
        b2btn.disabled = true;
        b4btn.disabled = true;
        b5btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;
        b3btn.style.color = "red";
        b6btn.style.color = "red";
        b9btn.style.color = "red";
    }
    else if (b3 == 'X' && b5 == 'X' && b7 == 'X') {
        document.getElementById("result").innerHTML = "player X win"
        b1btn.disabled = true;
        b2btn.disabled = true;
        b4btn.disabled = true;
        b6btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;
        b3btn.style.color = "red";
        b5btn.style.color = "red";
        b7btn.style.color = "red";
    }
    else if (b1 == 'X' && b5 == 'X' && b9 == 'X') {
        document.getElementById("result").innerHTML = "player X win"
        b2btn.disabled = true;
        b3btn.disabled = true;
        b4btn.disabled = true;
        b6btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;
        b1btn.style.color = "red";
        b5btn.style.color = "red";
        b9btn.style.color = "red";
    }
    else if (b1 == '0' && b2 == '0' && b3 == '0') {
        document.getElementById("result").innerHTML = "player 0 win"
        b4btn.disabled = true;
        b5btn.disabled = true;
        b6btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;
        b1btn.style.color = "red";
        b2btn.style.color = "red";
        b3btn.style.color = "red";
    }
    else if (b4 == '0' && b5 == '0' && b6 == '0') {
        document.getElementById("result").innerHTML = "player 0 win"
        b1btn.disabled = true;
        b2btn.disabled = true;
        b3btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;
        b4btn.style.color = "red";
        b5btn.style.color = "red";
        b6btn.style.color = "red";
    }
    else if (b7 == '0' && b8 == '0' && b9 == '0') {
        document.getElementById("result").innerHTML = "player 0 win"
        b4btn.disabled = true;
        b5btn.disabled = true;
        b6btn.disabled = true;
        b1btn.disabled = true;
        b2btn.disabled = true;
        b3btn.disabled = true;
        b7btn.style.color = "red";
        b8btn.style.color = "red";
        b9btn.style.color = "red";
    }
    else if (b1 == '0' && b4 == '0' && b7 == '0') {
        document.getElementById("result").innerHTML = "player 0 win"
        b2btn.disabled = true;
        b3btn.disabled = true;
        b5btn.disabled = true;
        b6btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;
        b1btn.style.color = "red";
        b4btn.style.color = "red";
        b7btn.style.color = "red";
    }
    else if (b2 == '0' && b5 == '0' && b8 == '0') {
        document.getElementById("result").innerHTML = "player 0 win"
        b1btn.disabled = true;
        b3btn.disabled = true;
        b4btn.disabled = true;
        b6btn.disabled = true;
        b7btn.disabled = true;
        b9btn.disabled = true;
        b2btn.style.color = "red";
        b5btn.style.color = "red";
        b8btn.style.color = "red";
    }
    else if (b3 == '0' && b6 == '0' && b9 == '0') {
        document.getElementById("result").innerHTML = "player 0 win"
        b1btn.disabled = true;
        b2btn.disabled = true;
        b4btn.disabled = true;
        b5btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;
        b3btn.style.color = "red";
        b6btn.style.color = "red";
        b9btn.style.color = "red";
    }
    else if (b3 == '0' && b5 == '0' && b7 == '0') {
        document.getElementById("result").innerHTML = "player 0 win"
        b1btn.disabled = true;
        b2btn.disabled = true;
        b4btn.disabled = true;
        b6btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;
        b3btn.style.color = "red";
        b5btn.style.color = "red";
        b7btn.style.color = "red";
    }
    else if (b1 == '0' && b5 == '0' && b9 == '0') {
        document.getElementById("result").innerHTML = "player 0 win"
        b2btn.disabled = true;
        b3btn.disabled = true;
        b4btn.disabled = true;
        b6btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;
        b1btn.style.color = "red";
        b5btn.style.color = "red";
        b9btn.style.color = "red";
    }
    else if ((b1 == "X" || b1 == "0") && (b2 == "X" || b2 == "0")
        && (b3 == "X" || b3 == "0") && (b4 == "X" || b4 == "0")
        && (b5 == "X" || b5 == "0") && (b6 == "X" || b6 == "0")
        && (b7 == "X" || b7 == "0") && (b8 == "X" || b8 == "0")
        && (b9 == "X" || b9 == "0")) {
        document.getElementById("result").innerHTML = "match tie";
    } else {
        if (flag == 1) {
            document.getElementById("result").innerHTML = "Player X turn.";
        } else {
            document.getElementById("result").innerHTML = "Player 0 turn.";
        }
    }
}
function resert() {
    location.reload();
}
let flag = 1;
function myfun1() {
    if (flag == 1) {
        document.getElementById("b1").value = "X";
        document.getElementById("b1").disabled = true;
        // document.getElementById("b1").setAttribute('readonly', true);
        flag = 0;
        // console.log(document.getElementById("b1"));

    }
    else {
        document.getElementById("b1").value = "0";
        document.getElementById("b1").disabled = true;
        flag = 1;
    }
}
function myfun2() {
    if (flag == 1) {
        document.getElementById("b2").value = "X"
        document.getElementById("b2").disabled = true
        flag = 0;
    }
    else {
        document.getElementById("b2").value = "0"
        document.getElementById("b2").disabled = true
        flag = 1;
    }
}
function myfun3() {
    if (flag == 1) {
        document.getElementById("b3").value = "X"
        document.getElementById("b3").disabled = true
        flag = 0;
    }
    else {
        document.getElementById("b3").value = "0"
        document.getElementById("b3").disabled = true
        flag = 1;
    }
}
function myfun4() {
    if (flag == 1) {
        document.getElementById("b4").value = "X"
        document.getElementById("b4").disabled = true
        flag = 0;
    }
    else {
        document.getElementById("b4").value = "0"
        document.getElementById("b4").disabled = true
        flag = 1;
    }
}
function myfun5() {
    if (flag == 1) {
        document.getElementById("b5").value = "X"
        document.getElementById("b5").disabled = true
        flag = 0;
    }
    else {
        document.getElementById("b5").value = "0"
        document.getElementById("b5").disabled = true
        flag = 1;
    }
}
function myfun6() {
    if (flag == 1) {
        document.getElementById("b6").value = "X"
        document.getElementById("b6").disabled = true
        flag = 0;
    }
    else {
        document.getElementById("b6").value = "0"
        document.getElementById("b6").disabled = true
        flag = 1;
    }
}
function myfun7() {
    if (flag == 1) {
        document.getElementById("b7").value = "X"
        document.getElementById("b7").disabled = true
        flag = 0;
    }
    else {
        document.getElementById("b7").value = "0"
        document.getElementById("b7").disabled = true
        flag = 1;
    }
}
function myfun8() {
    if (flag == 1) {
        document.getElementById("b8").value = "X"
        document.getElementById("b8").disabled = true
        flag = 0;
    }
    else {
        document.getElementById("b8").value = "0"
        document.getElementById("b8").disabled = true
        flag = 1;
    }
}
function myfun9() {
    if (flag == 1) {
        document.getElementById("b9").value = "X"
        document.getElementById("b9").disabled = true
        flag = 0;
    }
    else {
        document.getElementById("b9").value = "0"
        document.getElementById("b9").disabled = true
        flag = 1;
    }
}

function selecting(val) {
    if (val.value == "0") {
        flag = 0;
    }
    else {
        flag = 1;
    }
    console.log(val.value);

}