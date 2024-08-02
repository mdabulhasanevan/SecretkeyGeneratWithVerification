let secretKey = '';
let inputKey = '';

document.getElementById('generateKeyBtn').addEventListener('click', generateKey);
document.querySelectorAll('.keypad-btn').forEach(button => {
    button.addEventListener('click', handleKeyPress);
});
document.getElementById('submitBtn').addEventListener('click', submitKey);
document.getElementById('clearBtn').addEventListener('click', clearInput);
document.getElementById('deleteBtn').addEventListener('click', deleteLastDigit);

function generateKey() {
    secretKey = Math.floor(100000 + Math.random() * 900000).toString();
    document.getElementById('generatedKey').textContent = secretKey;
    document.getElementById('message').textContent = '';
    clearInput();
}

function handleKeyPress(event) {
    const value = event.target.textContent;
    if (inputKey.length < 6 && !isNaN(value)) {
        inputKey += value;
        document.getElementById('display').textContent = inputKey;
    }
}

function submitKey() {
    const messageElement = document.getElementById('message');
    if(secretKey!="" && inputKey!=""){
        if (inputKey === secretKey) {
            messageElement.textContent = 'Success! Keys Match.';
            messageElement.style.color = 'green';
        } else {
            messageElement.textContent = 'Error! Keys Do Not Match.';
            messageElement.style.color = 'red';
        }
    }
    else{
        messageElement.textContent = "Error! Secret key or Input key can't be null.";
        messageElement.style.color = 'yellow';
    }
   
}

function clearInput() {
    inputKey = '';
    document.getElementById('display').textContent = '';
}

function deleteLastDigit() {
    inputKey = inputKey.slice(0, -1);
    document.getElementById('display').textContent = inputKey;
}
