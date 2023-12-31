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



document.addEventListener('DOMContentLoaded', function() {
  var reloadButton = document.getElementById('reload');

  reloadButton.addEventListener('click', function() {
 
    location.reload();
  });
});






const learners = {
  ClassEight2023: [
    {Name:"learner Not yet Selected ",
    imageUrl: "./img/replace.jpg",
  
  }, 
    // Other learner objects without passwords
  ],
  GradeSeven: [
    { Name: "", Age: "", grade: "", imageUrl: "" },
    { Name: "Alice Johnson", age: 16, grade: "A+", imageUrl: "url/to/image4.jpg" },
    // Other learner objects without passwords
  ],
  // Other classes and learners
};

const adminPassword = "admin";
let enteredPassword = ""; // Variable to store the entered password

function promptForDownloadPassword(learner, fileKey = "fileURL") {
  handleDownload(learner, fileKey);
}

function handleDownload(learner, fileKey) {
  const password = enteredPassword;

  // Directly initiate download without checking password
  window.location.href = learner[fileKey];
}
function countLearnersInClass(className) {
  return learners[className].length;
}

function displayLearners() {
  const selectedClass = document.getElementById("classSelect").value;
  const learnerSelect = document.getElementById("learnerSelect");
  learnerSelect.innerHTML = "";

  learners[selectedClass].forEach((learner, index) => {
    const option = document.createElement("option");
    option.value = index;
    option.textContent = learner.Name;
    learnerSelect.appendChild(option);
  });
   // Display number of learners registered for the selected class
   const numberOfLearners = countLearnersInClass(selectedClass);
   const countDisplay = document.getElementById("learnerCount");
   countDisplay.textContent = `🔍Number of Registered learners :>>  ${numberOfLearners}`;
  //  countDisplay.textContent = `🔍Number of Registered learners in ${selectedClass} are: ${numberOfLearners}`;

  displayBiodata();
}

function displayBiodata() {
  const selectedClass = document.getElementById("classSelect").value;
  const selectedLearnerIndex = document.getElementById("learnerSelect").value;
  const biodataDiv = document.getElementById("learnerBiodata");
  const selectedLearner = learners[selectedClass][selectedLearnerIndex];

  biodataDiv.innerHTML = "";

  // Display image
  const learnerImage = document.createElement("img");
  learnerImage.src = selectedLearner.imageUrl;
  learnerImage.alt = `${selectedLearner.Name}'s Image`;
  biodataDiv.appendChild(learnerImage);

  // Display learner details
  for (const [key, value] of Object.entries(selectedLearner)) {
    if (key !== "imageUrl" && key !== "fileURL" && key !== "fileURL2" && key !== "fileURL3" && key !== "password") {
      const p = document.createElement("p");
      p.textContent = `${key}: ${value}`;
      biodataDiv.appendChild(p);
    }
  }

  // Display download links
  if (selectedLearner.fileURL) {
    const downloadLink = document.createElement("a");
    downloadLink.href = "#";
    downloadLink.textContent = "🫂Leaving Cert";
    downloadLink.onclick = function () {
      promptForDownloadPassword(selectedLearner);
    };
    biodataDiv.appendChild(downloadLink);

    if (selectedLearner.fileURL2) {
      const downloadLink2 = document.createElement("a");
      downloadLink2.href = "#";
      downloadLink2.textContent = "🚶‍♀️Online Slip";
      downloadLink2.onclick = function () {
        promptForDownloadPassword(selectedLearner, "fileURL2");
      };
      biodataDiv.appendChild(downloadLink2);
    }

    if (selectedLearner.fileURL3) {
      const downloadLink3 = document.createElement("a");
      downloadLink3.href = "#";
      downloadLink3.textContent = "🤼Graduation Book";
      downloadLink3.onclick = function () {
        promptForDownloadPassword(selectedLearner, "fileURL3");
      };
      biodataDiv.appendChild(downloadLink3);
    }
  }
}

// Initial call to display learners
displayLearners();
