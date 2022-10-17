
function add_number() {
    let input = document.querySelectorAll(".number");
    let sum = 0;
    input.forEach(elem =>
    sum += parseInt(elem.value) || 0);
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