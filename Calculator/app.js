const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');

const body = document.querySelector('body');

const add = document.getElementById('add');
const sub = document.getElementById('sub');
const mul = document.getElementById('mul');
const div = document.getElementById('division');
const mod = document.getElementById('mod');

const resultBox = document.getElementById('result-box');

add.addEventListener("click", function() {
    let i1 = Number(input1.value);
    let i2 = Number(input2.value);

    resultBox.value = i1+i2;
    input1.value = "";
    input2.value = "";
});

sub.addEventListener("click", function() {
    let i1 = Number(input1.value);
    let i2 = Number(input2.value);

    resultBox.value = i1-i2;
    input1.value = "";
    input2.value = "";
});

mul.addEventListener("click", function() {
    let i1 = Number(input1.value);
    let i2 = Number(input2.value);

    resultBox.value = i1*i2;
    input1.value = "";
    input2.value = "";
});

div.addEventListener("click", function() {
    let i1 = Number(input1.value);
    let i2 = Number(input2.value);

    resultBox.value = i1/i2;
    input1.value = "";
    input2.value = "";
});

mod.addEventListener("click", function() {
    let i1 = Number(input1.value);
    let i2 = Number(input2.value);

    resultBox.value = i1%i2;
    input1.value = "";
    input2.value = "";
});

// if(resultBox.value) {
//     resultBox.style.borderColor = "green";
// }
// else {
//     resultBox.style.borderColor = "black";
// }

body.addEventListener("dblclick", function() {
    resultBox.value = "";
})