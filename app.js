function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    } else {
        // console.log("Got 3 digit and call again", pin);
        return getPin();
    }

}

function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}
document.getElementById('key-pad').addEventListener('click', function(event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';
        }
    } else {
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }
});

function verifyPin() {
    const pin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-numbers').value;
    const successNotification = document.getElementById('notify-success');
    const failedNotification = document.getElementById('notify-failed');


    if (pin == typedNumbers) {
        successNotification.style.display = 'block';
        failedNotification.style.display = 'none';
        document.getElementById('typed-numbers').value = ''
        document.getElementById('display-pin').value = '';



    } else {
        failedNotification.style.display = 'block';
        successNotification.style.display = 'none';

    }
}