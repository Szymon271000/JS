function calculate()
{
    add_number()
    average()
    maxValue()
    minValue()
}


function add_number() {
    let input = document.querySelectorAll(".number");
    let sum = 0
    input.forEach(elem =>
    sum += parseInt(elem.value) || 0)
    document.getElementById("total").value = sum;
}

function average() {
    let input = document.querySelectorAll(".number");
    let sum = 0
    input.forEach(elem =>
    sum += parseInt(elem.value) || 0)
    let average = sum / input.length
    document.getElementById("average").value = average;
}

function maxValue()
{
    let first_number = parseFloat(document.getElementById("first_number").value);
    if (isNaN(first_number)) first_number = 0;
    let second_number = parseFloat(document.getElementById("second_number").value);
    if (isNaN(second_number)) second_number = 0;
    let third_number = parseFloat(document.getElementById("third_number").value);
    if (isNaN(third_number)) third_number = 0;
    let fourth_number = parseFloat(document.getElementById("fourth_number").value);
    if (isNaN(fourth_number)) fourth_number = 0;
    let maxNumber = (Math.max(first_number, second_number, third_number, fourth_number))
    console.log(maxNumber)
    document.getElementById("maxValue").value = maxNumber;
}

function minValue()
{
    let first_number = parseFloat(document.getElementById("first_number").value);
    if (isNaN(first_number)) first_number = 0;
    let second_number = parseFloat(document.getElementById("second_number").value);
    if (isNaN(second_number)) second_number = 0;
    let third_number = parseFloat(document.getElementById("third_number").value);
    if (isNaN(third_number)) third_number = 0;
    let fourth_number = parseFloat(document.getElementById("fourth_number").value);
    if (isNaN(fourth_number)) fourth_number = 0;
    let minValue = (Math.min(first_number, second_number, third_number, fourth_number))
    document.getElementById("minValue").value = minValue;
}