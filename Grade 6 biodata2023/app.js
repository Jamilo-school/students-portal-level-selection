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

