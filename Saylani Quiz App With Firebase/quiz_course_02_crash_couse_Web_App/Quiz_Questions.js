let question_data = [
  {
    question:
      "What does the `<!DOCTYPE html>` declaration do in an HTML document?",
    options: [
      "Defines the document type and version",
      "Specifies the character encoding",
      "Links to an external stylesheet",
      "None of the above",
    ],
    correct_option: "Defines the document type and version",
  },
  {
    question: "Which of the following is a valid CSS selector?",
    options: ["class-name", "id-name", "element-name", "All of the above"],
    correct_option: "All of the above",
  },
  {
    question: "What is the default value of the `position` property in CSS?",
    options: ["absolute", "relative", "static", "fixed"],
    correct_option: "static",
  },
  {
    question: "How do you center a block element horizontally with CSS?",
    options: [
      "margin: auto;",
      "text-align: center;",
      "position: absolute; left: 50%;",
      "display: flex; justify-content: center;",
    ],
    correct_option: "margin: auto;",
  },
  {
    question:
      "Which attribute is used to define an external CSS file in an HTML document?",
    options: ["src", "href", "link", "style"],
    correct_option: "href",
  },
  {
    question: "What does the `float` property do in CSS?",
    options: [
      "Aligns elements horizontally",
      "Controls the width of elements",
      "Sets the position of elements",
      "Defines text color",
    ],
    correct_option: "Aligns elements horizontally",
  },
  {
    question:
      "Which property is used to change the background color of an HTML element?",
    options: ["color", "background", "bgcolor", "background-color"],
    correct_option: "background-color",
  },
  {
    question: "How do you apply a style to all p elements in CSS?",
    options: ["p { ... }", "all-p { ... }", ".p { ... }", "#p { ... }"],
    correct_option: "p { ... }",
  },
  {
    question: "What is the purpose of the `z-index` property in CSS?",
    options: [
      "Controls the stacking order of elements",
      "Sets the transparency level of elements",
      "Defines the border radius",
      "Adjusts the element's padding",
    ],
    correct_option: "Controls the stacking order of elements",
  },
  {
    question: "Which HTML element is used to define a hyperlink?",
    options: ["anchor", "link", "a", "hyperlink"],
    correct_option: "a",
  },
];

const questions_container = document.getElementById("quiz_questions_container");
const result = document.getElementById("results");
let current_question_index = 0;
let score = 0;

let question_length = question_data.length;

sessionStorage.setItem("questions_length", question_length);

function renderQuestion() {
  if (current_question_index < question_data.length) {
    questions_container.innerHTML = "";

    // Render current question
    questions_container.innerHTML += `
      <h2>Question ${current_question_index + 1}: ${
      question_data[current_question_index].question
    }</h2>
      <hr>`;

    // Render options
    question_data[current_question_index].options.forEach((opt, ind) => {
      const optionId = `option${ind + 1}`;
      questions_container.innerHTML += `
        <label for="${optionId}">
          <input type="radio" id="${optionId}" name="options-${current_question_index}" value="${opt}">
          ${opt}
        </label>
        <br>`;
    });

    // Render Next or Submit button
    const btnText =
      current_question_index === question_data.length - 1 ? "Submit" : "Next";
    questions_container.innerHTML += `
      <div class="btn-container">
      <button class="btn btn-primary" id="nextBtn" disabled>
      ${btnText} 
      </button>
      </div>`;

    // Add event listener to radio inputs
    const radioBtns = document.querySelectorAll(
      `input[name="options-${current_question_index}"]`
    );
    radioBtns.forEach((radio) => {
      radio.addEventListener("change", () => {
        const nextBtn = document.getElementById("nextBtn");
        nextBtn.disabled = false;
      });
    });

    // Add event listener to Next or Submit button
    const nextBtn = document.getElementById("nextBtn");
    nextBtn.addEventListener("click", handleButtonClick);
  } else {
    showResult();
  }
}

function handleButtonClick() {
  const checkedRadioBtn = document.querySelector(
    `input[name="options-${current_question_index}"]:checked`
  );
  if (checkedRadioBtn) {
    const selectedAnswer = checkedRadioBtn.value;
    const correctAnswer = question_data[current_question_index].correct_option;

    if (selectedAnswer === correctAnswer) {
      score++;
    }

    current_question_index++;
    renderQuestion(); // Render next question or show result if last question
  } else {
    alert("Please select an option before proceeding.");
  }
}

function showResult() {
  sessionStorage.setItem("result", score);
  window.location.href = `./Results.html`;
  // Redirect to result page
  // window.location.href = "/quiz_course_01_python/Python_Result.html";
}

renderQuestion();
