// 1. Select the elements
const nameInput = document.getElementById('userName');
const helloBtn = document.getElementById('Btn');
const modalOverlay = document.getElementById('myModal');
const displayName = document.getElementById('displayName');

// 2. Add the click event to the button
helloBtn.addEventListener('click', () => {
    // Get the value from the input and trim extra spaces
    const enteredName = nameInput.value.trim();

    // Check if the user actually typed something
    if (enteredName !== "") {
        displayName.textContent = enteredName;
    } else {
        displayName.textContent = "Guest";
    }

    // 3. Show the modal
    // Note: We use 'flex' instead of 'block' to keep your CSS centering active
    modalOverlay.style.display = 'flex';
});

// 4. Bonus: Close the modal if the user clicks the dark background
window.addEventListener('click', (event) => {
    if (event.target === modalOverlay) {
        modalOverlay.style.display = 'none';

        // Optional: Clear the input after closing
        nameInput.value = "";
    }
});