// window.onload = function () {
//   let score = localStorage.getItem("result");
//   let name = localStorage.getItem("User Data");
//   let questions_length = localStorage.getItem("questions_length");
//   let inner = document.getElementById("inner");

//   name = JSON.parse(name);
//   questions_length = JSON.parse(questions_length);

//   let student_name = name.form_name;
//   let total_questions = questions_length;
//   let Percentage = (score * 100) / questions_length;
//   Percentage_Ceil = Math.ceil(Percentage);

//   let results = document.querySelector(".results-container");

//   results.innerHTML = `
//         <h2>${student_name} Scored : ${score} out of ${total_questions}</h2>
//         <h2>
//           Percentage : ${
//             Percentage > 70
//               ? `<span class="student_name">${Math.ceil(Percentage)}%</span>`
//               : `<span class="student_name_red">${Math.ceil(
//                   Percentage
//                 )}%</span>`
//           }
//         </h2>
//       `;

//   if (Percentage > 70) {
//     results.innerHTML += `
//           <h2> Congratulations ! <span class="student_name">${student_name}</span>, You have passed the Quiz</h2>
//         `;

//     inner.innerText = `${Percentage_Ceil}%`;

//     var progressBar = new ProgressBar.Circle("#progress", {
//       color: "#0d6db7",
//       strokeWidth: 10,
//       duration: 2000, // milliseconds
//       easing: "easeInOut",
//     });

//     progressBar.animate(Percentage / 100); // percent
//   } else {
//     inner.style.color = "red";

//     inner.innerText = `${Percentage_Ceil}%`;

//     var progressBar = new ProgressBar.Circle("#progress", {
//       color: "red",
//       strokeWidth: 10,
//       duration: 2000, // milliseconds
//       easing: "easeInOut",
//     });

//     results.innerHTML += `
//           <h1 class="student_name">Better Luck Next Time !</h1>
//           <h2> We regret to inform you, <span class="student_name_red">${student_name}</span>, that you did not pass the quiz. </h2>
//         `;

//     progressBar.animate(Percentage / 100); // percent
//   }
// };

let spinner = document.getElementById("spinner-div");

spinner.style.display = "flex";

let main_content = document.getElementById("main-content");

main_content.style.display = "none";

setTimeout(() => {
  spinner.style.display = "none";
  main_content.style.display = "block";
}, 2000);

// Accessing the html element
let User_profile_pic = document.getElementById("User-profile-pic");

// Accessing the html element
let userNavbar_Name = document.getElementById("userNavbar-Name");

// getting the name of the user from the session storage
let full_name_of_user = sessionStorage.getItem("userName");

// getting the Image of the user from the session storage

let profile_pic = sessionStorage.getItem("UserprofilePhoto");

if (full_name_of_user) {
  User_profile_pic.src = profile_pic;

  let userFirstName = full_name_of_user.split(" ")[0];

  userNavbar_Name.innerHTML = userFirstName;
} else {
  Swal.fire({
    icon: "error",
    title: `Student Logged Out ! Please Sign In Again `,
    text: " Connection Timed Out !",
  });

  setTimeout(() => {
    window.location.href = "../index.html";
  }, 1000);
}

// ----------------------------------------------------------------------
// Now Let's focus on the pop up of results and log out

// First access the arrow element
let downward_arrow = document.getElementById("downward-arrow");

// Here, we have to tackle our downward arrow functionality

// accessing the pop Up box

let popUp = document.getElementById("popUp");

popUp.style.display = "none";

downward_arrow.addEventListener("click", () => {
  event.stopPropagation();
  if (popUp.style.display === "block" || popUp.style.display === "") {
    popUp.style.display = "none";
  } else {
    popUp.style.display = "block";
  }
});

// Close Pop up , if you clicked on any part of your body in html

document.addEventListener("click", () => {
  popUp.style.display = "none";
});

// Let's work on the log out functionality now

let logOutBtn = document.getElementById("logOutBtn");

logOutBtn.addEventListener("click", () => {
  // alert("Hello");
  sessionStorage.removeItem("userName");

  spinner.style.display = "flex";
  main_content.style.display = "none";

  setTimeout(() => {
    spinner.style.display = "none";
    main_content.style.display = "none";
    window.location.href = "../index.html";
  }, 1000);
});

// -----------------------------------------

// -----------------------------------------

let Backhome = document.getElementById("Backhome");

Backhome.addEventListener("click", () => {
  window.location.href = "/Local Storage in JavaScript/dashboard.html";
});

let score = sessionStorage.getItem("result");
let questions_length = sessionStorage.getItem("questions_length");

let total_questions = questions_length;
let total_quest = document.getElementById("total-quest");
total_quest.innerText = total_questions;

let marks_obtained = document.getElementById("correct-ques");
marks_obtained.innerText = score;

let Percentage = (score * 100) / questions_length;
let Percentage_Ceil = Math.ceil(Percentage);

let percent_container = document.getElementById("percent");
percent_container.textContent = Percentage_Ceil + "%";

let percentageBar = document.getElementById("perc-bar");

// Get the radius from the SVG element
let radius = 48.5;

let circumference = 2 * Math.PI * parseFloat(radius);

// Calculate stroke-dashoffset
let offset = circumference - (Percentage_Ceil / 100) * circumference;

let feedback = document.getElementById("feedback");

if (Percentage_Ceil >= 75) {
  feedback.innerText = "Congratulations, You Passed";
  feedback.classList.add("theme-green");
  feedback.classList.remove("theme-red");

  percent_container.style.fill = "green";
  percentageBar.style.stroke = "green";
} else {
  feedback.innerText = "Sorry, you didn’t pass the quiz";
  feedback.classList.add("theme-red");
  feedback.classList.remove("theme-green");

  percent_container.style.fill = "rgb(245, 69, 69)";
  percentageBar.style.stroke = "rgb(245, 69, 69)";
}

// Apply the calculated stroke-dasharray and stroke-dashoffset
percentageBar.style.strokeDasharray = circumference; // Total length of the circle's stroke
percentageBar.style.strokeDashoffset = offset; // Amount of stroke that is hidden from view
