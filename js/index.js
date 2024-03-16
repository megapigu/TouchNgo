const checkbox = document.querySelector('input[id=terms]');
const form = document.getElementById('form');
const username = document.getElementById('username');
const myKadNo = document.getElementById('myKadNo');
const submitButton = document.getElementById("submit");

form.addEventListener('submit', function(event) {
    validateInputs();

    if(isFormValid()==true){
        form.submit();
    } else {
        event.preventDefault();
    }
});

const isFormValid = () => {
    const inputContainers = form.querySelectorAll('.input-control');
    let result = true;
    inputContainers.forEach((container)=>{
        if(container.classList.contains('error')){
            result = false;
        }
    });

    return result;
}

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const myKadNoValue = myKadNo.value.trim();

    if(usernameValue === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }

    if(myKadNoValue === '') {
        setError(myKadNo, 'MyKad.No is required');
    } else if (myKadNoValue.length < 12 ) {
        setError(myKadNo, 'MyKad.No must be 12 digits');
    } else {
        setSuccess(myKadNo);
    }
}


checkbox.addEventListener("change", function() {
    if (this.checked) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
});

if(checkbox.checked) {
    submitButton.disabled = false;
} else {
    submitButton.disabled = true;
}
