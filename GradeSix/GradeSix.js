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

  // GradeSix2024: [
  //   {Name:"No Registered Learner ",   
  //   imageUrl: "./img/schoologo.png",
  //  },


  //   // Other learner objects without passwords
  // ],


  GradeSix2023: [
    {Name:"learner Not yet Selected ",   
     imageUrl: "./img/schoologo.jpg",
    },
    {
    imageUrl: "./img/Remy.jpg",
    Name: " ADAMS ,REMY OTIENO",
    Gender: "Male",  
    EntryNo: "", 
  
    MedicalCondition:"N/A",
    UPI:"",
    GratuationYear:"2024",
   SchoolChoices: "./Pdfs/SCHOOLCHOICES.pdf",
   LearnerSelections: "./Pdfs/NominallKcpe.pdf",
    LeavingCertificate: "./Pdfs/leaving/stephanie.pdf", 
    OnlineResultSlip: "./Pdfs/Slip/stephanie Slip.pdf", 
    Placement:"./Pdfs/Placements 2023.pdf", 
    CallingLetter:"#",
    },
    // Other learner objects without passwords
  ],

  // Other classes and learners
};


function promptForDownloadPassword(learner, fileKey = "SchoolChoices") {
  handleDownload(learner, fileKey);
}

function handleDownload(learner, fileKey) {
  const url = learner[fileKey];

  // Open a new window
  const newWindow = window.open();

  // Create a temporary anchor element in the new window to trigger the download
  const link = newWindow.document.createElement("a");
  link.href = url;
  link.setAttribute("download", "");
  newWindow.document.body.appendChild(link); // Append the link to the new window's body
  link.click();


  // Close the new window after a short delay (e.g., 500 milliseconds)
  setTimeout(() => {
    newWindow.close();
    
  }, 100);
}


  // Directly initiate download without checking password
  window.location.href = learner[fileKey];

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
    if(key !== "imageUrl" 
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
