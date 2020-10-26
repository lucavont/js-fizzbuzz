for (var i = 1; i <= 100; i++) {
    document.getElementById('numeri').innerHTML += "<br>" + i;
    if (i % 3 === 0 && i % 5 === 0) {
        document.getElementById('numeri').innerHTML += " FizzBuzz";
    } else if (i % 3 === 0) {
        document.getElementById('numeri').innerHTML += " Fizz";
    } else if (i % 5 === 0) {
        document.getElementById('numeri').innerHTML += " Buzz";
    }
}