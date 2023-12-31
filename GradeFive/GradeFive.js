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
     imageUrl: "./img/schoologo.png",
    },
    { 
      imageUrl: "",
      Name: "1. ",
      Gender: "", 
      Academics:"", 
      AdmNo: "", 
      AssessmentNo: "",
      UPI:"F2AJ5A",
      MedicalCondition:"None",
      Father:"SETH OTIENO ABEKA.",
      GratuationYear:"2023",
      Tel:"+254729246853", 
      Mother:"EVELYN AKINYI ABEKA", 
      SchoolChoices: "./Pdfs/SCHOOLCHOICES.pdf",
      LearnerSelections: "./Pdfs/NominallKcpe.pdf", 
      LeavingCertificate: "./Pdfs/leaving/Abeka's leaving Cert.pdf", 
      OnlineResultSlip: "./Pdfs/Slip/Abeka's Slip.pdf", 
      Placement:"./Pdfs/Placements 2023.pdf", 
      CallingLetter:"#",
      password: "ass",
     
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

function promptForDownloadPassword(learner, fileKey = "SchoolChoices") {
  handleDownload(learner, fileKey);
}

function handleDownload(learner, fileKey) {
  const password = enteredPassword;

  // Directly initiate download without checking password
  window.location.href = learner[fileKey];
}
function countLearnersInClass(className) {
  return learners[className].length-1;
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
    if (key !== "imageUrl" 
    && key !== "SchoolChoices"
    && key !== "LearnerSelections" 
    && key !== "LeavingCertificate"
    && key !== "OnlineResultSlip"
    && key !== "Placement" 
    && key !== "CallingLetter" 
    && key !== "password") 
    {
    const p = document.createElement("p");
    p.textContent = `${key}: ${value}`;
    biodataDiv.appendChild(p);
    }
  }

  // Display download links
  if (selectedLearner.SchoolChoices) {
    const downloadLink = document.createElement("a");
    downloadLink.href = "#";
    downloadLink.textContent = "🫂School Choices";
    downloadLink.onclick = function () {
      promptForDownloadPassword(selectedLearner);
    };
    biodataDiv.appendChild(downloadLink);
    
  

    if (selectedLearner.LearnerSelections) {
      const downloadLink2 = document.createElement("a");
      downloadLink2.href = "#";
      downloadLink2.textContent = "🚶‍♀️Learner Selections ";
      downloadLink2.onclick = function () {
        promptForDownloadPassword(selectedLearner, "LearnerSelections");
      
      };
      biodataDiv.appendChild(downloadLink2);
    }

    if (selectedLearner.LeavingCertificate) {
      const downloadLink3 = document.createElement("a");
      downloadLink3.href = "#";
      downloadLink3.textContent = "🤼leaving Certificate";
      downloadLink3.onclick = function () {
        promptForDownloadPassword(selectedLearner, "LeavingCertificate");
      };
      biodataDiv.appendChild(downloadLink3);
    }
    if (selectedLearner.OnlineResultSlip) {
      const downloadLink4 = document.createElement("a");
      downloadLink4.href = "#";
      downloadLink4.textContent = "👨‍⚕️Online Result Slip";
      downloadLink4.onclick = function () {
        promptForDownloadPassword(selectedLearner, "OnlineResultSlip");
      };
      biodataDiv.appendChild(downloadLink4);
    }
    if (selectedLearner.OnlineResultSlip) {
      const downloadLink5 = document.createElement("a");
      downloadLink5.href  = "#";
      downloadLink5.textContent = "🔍Placements";
      downloadLink5.onclick = function () {
        promptForDownloadPassword(selectedLearner, "Placement");
      };
      biodataDiv.appendChild(downloadLink5);
    }
    if (selectedLearner.OnlineResultSlip) {
      const downloadLink6 = document.createElement("a");
      downloadLink6.href  = "#";
      downloadLink6.textContent = "📩Calling Letter";
      downloadLink6.onclick = function () {
        promptForDownloadPassword(selectedLearner, "CallingLetter");
        alert("Pending Update");
        
      };
      biodataDiv.appendChild(downloadLink6);
    }
   
  }
}

// Initial call to display learners
displayLearners();
