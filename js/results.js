const usernameDisplay = document.querySelector('#usernameDisplay');
const myKadNoDisplay = document.querySelector('#myKadNoDisplay');

const params = new URLSearchParams(window.location.search);

params.forEach((value, key) => {
    if (key === 'username') {
        usernameDisplay.textContent = `${value}`;
    } else if (key === 'myKadNo') {
        myKadNoDisplay.textContent = `${value}`;
    }   
});

function getSelectValue()
{
    var selectedValue = document.getElementById("State").value;
    console.log(selectedValue);
    var selectedValue = document.getElementById("gender").value;
    console.log(selectedValue);
    var selectedValue = document.getElementById("race").value;
    console.log(selectedValue);
}
