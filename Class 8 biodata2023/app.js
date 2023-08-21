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

// Start  of JavaScript code for generating notifications in order
var notifications = [
	"Good evening",
	"Thanks for visiting our site.",
	"Merry Christmas.",
	"Happy New Year",
	"Keep checking the website for updates.",
  ];
  
  var notificationIndex = 0;
  
  function displayNotification() {
	if (notificationIndex < notifications.length) {
	  var notification = notifications[notificationIndex];
  
	  var notificationElement = document.createElement("div");
	  notificationElement.classList.add("toast");
	  notificationElement.innerText = notification;
	  document.body.appendChild(notificationElement);
  
	  notificationElement.classList.add("toast-enter");
	  setTimeout(function () {
		notificationElement.classList.remove("toast-enter");
		setTimeout(function () {
		  notificationElement.classList.add("toast-exit");
		  setTimeout(function () {
			notificationElement.remove();
			notificationIndex++;
			displayNotification(); // Display the next notification
		  }, 1000); // Exit animation duration
		}, 5000); // Display duration
	  }, 6000); // Entrance animation delay
	} else {
	  // All notifications have been displayed, reset the index
	  notificationIndex = 0;
	  setTimeout(displayNotification, 6000); // Delay before displaying the first notification again
	}
  }
  
  // Display the first notification and start the sequence
  displayNotification();

  // End of JavaScript code for generating notifications in order
  




