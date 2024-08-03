window.onload = function () {
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
};
