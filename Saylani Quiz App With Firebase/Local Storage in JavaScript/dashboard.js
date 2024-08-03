let spinner = document.getElementById("spinner-div");

spinner.style.display = "flex";

let main_content = document.getElementById("main-content");

main_content.style.display = "none";

setTimeout(() => {
  spinner.style.display = "none";
  main_content.style.display = "block";
}, 2000);

// Accessing the html element
let name_of_user = document.getElementById("name_of_user");

// Accessing the html element
let User_profile_pic = document.getElementById("User-profile-pic");

// Accessing the html element
let userNavbar_Name = document.getElementById("userNavbar-Name");

// getting the name of the user from the session storage
let full_name_of_user = sessionStorage.getItem("userName");

// getting the Image of the user from the session storage

let profile_pic = sessionStorage.getItem("UserprofilePhoto");

if (full_name_of_user) {
  full_name_of_user = full_name_of_user
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  name_of_user.innerHTML = `<h1>Hi, ${full_name_of_user} 👋</h1>`;

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

// let smit_student_result = document.getElementById("smit-student-results");

// smit_student_result.addEventListener("click", () => {
//   // window.location.href = "/OverAll_Results.html";
//   alert("Hello ");
// });
