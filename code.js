
let result1 = document.getElementById("result1");
let result2 = document.getElementById("result2");

function calc() {
    const input1 = parseInt(document.getElementById("first").value);
    const input2 = parseInt(document.getElementById("second").value);
    if (input1 > input2) {
        var largerNumber = input1;
        var smallerNumber = input2;
    } else {
        var largerNumber = input2;
        var smallerNumber = input1;
    }
    var finalNumber = -1;

    if (isNaN(input1) || isNaN(input2)) {
        result1.innerHTML = "Syötä vain kokonaislukuja!";
        result2.innerHTML = "";
        return;
    }

    if (input1 == 0 || input2 == 0) {
        result1.innerHTML = "Ei voida jakaa nollalla!";
        result2.innerHTML = "";
        return;
    }

    while(finalNumber == -1) {
        let divider = Math.floor(largerNumber / smallerNumber);
        let remainder = largerNumber - (divider * smallerNumber);

        if (remainder != 0) {
            largerNumber = smallerNumber;
            smallerNumber = remainder;
        } else {
            finalNumber = smallerNumber;
        }
    }

    result1.innerHTML = "syt: " + finalNumber;
    result2.innerHTML = "pym: " + (input1 * input2) / finalNumber;
}

document.getElementById("first").addEventListener("input", calc)
document.getElementById("second").addEventListener("input", calc)