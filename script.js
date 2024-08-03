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

        // Create an <i> element for the icon
    const iconOK = document.createElement('i');
    const message = document.createElement('span');

    message.textContent = "";
    const messageElement = document.getElementById('message');
    messageElement.textContent="";
    if(secretKey!="" && inputKey!=""){
        if (inputKey === secretKey) {
            message.textContent = ' Success! Keys Match.';
            
            messageElement.style.color = 'green';

            iconOK.className = 'bi bi-check-circle-fill'; // Add the Bootstrap icon class
            messageElement.appendChild(iconOK);
            messageElement.appendChild(message);
        } else {
           
            message.textContent = "Error! Keys Do Not Match.  ";
            messageElement.style.color = 'red';

            iconOK.className = 'bi bi-circle-half'; // Add the Bootstrap icon class
            messageElement.appendChild(iconOK);
            messageElement.appendChild(message);
        }
    }
    else{
     
        message.textContent = "Error! Secret key or Input key can't be null. ";
        iconOK.className = 'bi bi-emoji-expressionless-fill'; // Add the Bootstrap icon class
        messageElement.appendChild(iconOK);
        messageElement.appendChild(message);
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
