const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

//////////////////////////

// script.js
const elements = document.querySelectorAll('.Nemis2');
const infoPanel = document.querySelector('.info-panel');

elements.forEach(element => {
  element.addEventListener('mouseover', () => {
    const info = element.getAttribute('data-info');
    infoPanel.textContent = info;
    infoPanel.style.display = 'block';
    infoPanel.style.top = `${element.offsetTop + element.offsetHeight}px`;
    infoPanel.style.left = `${element.offsetLeft}px`;
  });

  element.addEventListener('mouseout', () => {
    infoPanel.style.display = 'none';
  });
});



//Pop up log in for nemis starts

const showSignUpButtons = document.querySelectorAll('.showSignUp');
const popupContainers = document.querySelectorAll('.popup-container');

showSignUpButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    popupContainers[index].style.display = 'flex';
  });
});

popupContainers.forEach((container) => {
  container.addEventListener('click', (event) => {
    if (event.target === container) {
      container.style.display = 'none';
    }
  });
});



//End Pop up log in for nemis 

//log in form start

/// Get all form containers
const formContainers = document.querySelectorAll('.form-container');

// Loop through each form container
formContainers.forEach((container) => {
  const form = container.querySelector('.form2');
  const emailInput = form.querySelector('.email');
  const primaryButton = form.querySelector('.primary_button');
  const errorDiv = container.querySelector('.error-message');

  primaryButton.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent form submission

    const enteredEmail = emailInput.value;

    // Simulate login validation - replace with your actual login logic
    const validEmail = 'user@example.com'; // Replace with your valid email

    if (enteredEmail === validEmail) {
      // Display success message
      errorDiv.textContent = 'Login successful! Redirecting...';

      // Clear the message after 2 seconds and redirect
      setTimeout(() => {
        window.location.href = 'mailto:geofreyonyango167@gmail.com';
      }, 2000);
    } else {
      // Display error message
      errorDiv.textContent = 'Invalid key. Please enter a valid Authentication key.';
    }
  });
});
