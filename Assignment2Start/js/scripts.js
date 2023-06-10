// Constants for query selectors
const custColor = document.querySelector(".custColor");
const randColor = document.querySelector(".randColor");
const custNumber = document.querySelector("#customNumber");
const imageSelection = document.querySelector("#imageSelect");
const resetBtn = document.querySelector("#reset");
let background = document.querySelector("body");
let studentId = null;
const imageArray = [
  "Assignment2Start/img/img1.jpg",
  "Assignment2Start/img/img2.jpg",
  "Assignment2Start/img/img3.jpg",
  "Assignment2Start/img/img4.jpg",
  "Assignment2Start/img/img5.jpg",
];

// Function to change bg color from user input and add student id

function changeCustomColor() {
  if (!studentId) {
    studentId = document.createElement("p");
    studentId.textContent = "200539594";
    studentId.className = "studentId";
    document.body.appendChild(studentId);
  }
  let number = parseInt(custNumber.value);

  if (number < 0 || number > 100) {
    background.style.backgroundColor = "red";
  } else if (number >= 0 && number <= 20) {
    background.style.backgroundColor = "green";
  } else if (number > 20 && number <= 40) {
    background.style.backgroundColor = "blue";
  } else if (number > 40 && number <= 60) {
    background.style.backgroundColor = "orange";
  } else if (number > 60 && number <= 80) {
    background.style.backgroundColor = "purple";
  } else if (number > 80 && number <= 100) {
    background.style.backgroundColor = "yellow";
  }
}

// Function to change bg color from random no.
function changeRandomColor() {
  randomNum = Math.ceil(Math.random() * 100);
  number = randomNum;
  if (number < 0 || number > 100) {
    background.style.backgroundColor = "red";
  } else if (number >= 0 && number <= 20) {
    background.style.backgroundColor = "green";
  } else if (number > 20 && number <= 40) {
    background.style.backgroundColor = "blue";
  } else if (number > 40 && number <= 60) {
    background.style.backgroundColor = "orange";
  } else if (number > 60 && number <= 80) {
    background.style.backgroundColor = "purple";
  } else if (number > 80 && number <= 100) {
    background.style.backgroundColor = "yellow";
  }
}

// Function to generate options for select list
function addList() {
  // Implement the logic to add elements to the select list from an array
  for (let i = 0; i < imageArray.length; i++) {
    const imageSrc = imageArray[i];
    const option = document.createElement("option");
    option.value = imageSrc;
    option.textContent = imageSrc.slice(-8);
    imageSelection.appendChild(option);
  }
}

// Function to change the image
function changeImage() {
  // Implement the logic to change the image
  const selectedImage = imageSelection.value;
  document.querySelector("#images").style.width = "400px";
  document.querySelector("#images").style.height = "300px";
  document.getElementById("images").src = selectedImage;
}

function resetFunction() {
  background.style.backgroundColor = "";

  // Remove student ID
  if (studentId) {
    document.body.removeChild(studentId);
    studentId = null;
  }

  custNumber.value = "";

  imageSelection.selectedIndex = 0;

  document.querySelector("#images").src = "";
  document.querySelector("#images").style.width = "";
  document.querySelector("#images").style.height = "";
}

// Event listeners for click events of buttons and select

// Event listener for the "Change Custom Color" button
custColor.addEventListener("click", changeCustomColor);

// Event listener for the "Change Random Color" button
randColor.addEventListener("click", changeRandomColor);

// Event listener for the imageSelection select element
imageSelection.addEventListener("change", changeImage);

resetBtn.addEventListener("click", resetFunction);

addList();
