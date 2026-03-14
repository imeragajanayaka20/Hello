
const nameInput = document.getElementById('userName');
const helloBtn = document.getElementById('Btn');
const modalOverlay = document.getElementById('myModal');
const displayName = document.getElementById('displayName');


helloBtn.addEventListener('click', () => {

    const enteredName = nameInput.value.trim();


    if (enteredName !== "") {
        displayName.textContent = enteredName;
    } else {
        displayName.textContent = "Guest";
    }



    modalOverlay.style.display = 'flex';
});


window.addEventListener('click', (event) => {
    if (event.target === modalOverlay) {
        modalOverlay.style.display = 'none';


        nameInput.value = "";
    }
});