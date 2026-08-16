const screens = document.querySelectorAll(".screen");
const goButtons = document.querySelectorAll("[data-go]");

function showScreen(id) {
  screens.forEach((screen) => {
    screen.classList.toggle("active", screen.id === id);
  });

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

// =========================
// NAVIGATION
// =========================

goButtons.forEach((button) => {
  button.addEventListener("click", () => {
    showScreen(button.dataset.go);
  });
});

// =========================
// LEARNING STAGES
// =========================

const stages = [
  {
    title: "Scene",
    help: "Look at the moment. Let the image stay with you.",
    button: "See the moment"
  },

  {
    title: "Feel",
    help: "Hear the sentence. Feel what it means.",
    button: "▶ Play"
  },

  {
    title: "Echo",
    help: "Say it aloud. Your voice matters more than perfection.",
    button: "🎙 Speak"
  },

  {
    title: "Unlock",
    help: "No text this time. Let the image bring the words back.",
    button: "🎙 Recall"
  },

  {
    title: "Express",
    help: "Make the sentence yours.",
    button: "🎙 Create"
  }
];

// =========================
// ITEMS
// =========================

const items = [
  {
    id: "001",
    count: "1/2",

    concept: "Name",

    listen: "My name is Tom.",

    create: "My name is ______.",

    production:
      "You meet someone for the first time. Introduce yourself.",

    person: "👋🧑🏻",

    prop: "✨"
  },

  {
    id: "002",
    count: "2/2",

    concept: "Age",

    listen: "I am 33 years old.",

    create: "I am ______ years old.",

    production:
      "Someone asks your age. Tell them how old you are.",

    person: "🧑🏻",

    prop: "🎂"
  }
];

// =========================
// STATE
// =========================

let currentItem = 0;
let currentStage = 0;

// =========================
// ELEMENTS
// =========================

const stageTitle = document.getElementById("stageTitle");
const stageHelp = document.getElementById("stageHelp");
const sentence = document.getElementById("sentence");
const stepLabel = document.getElementById("stepLabel");

const itemCount = document.getElementById("itemCount");

const scenePerson = document.getElementById("scenePerson");
const sceneProp = document.getElementById("sceneProp");

const actionBtn = document.getElementById("actionBtn");
const nextStepBtn = document.getElementById("nextStepBtn");

const stageButtons = [
  ...document.querySelectorAll(".stage-btn")
];

const progressDots = [
  ...document.querySelectorAll(".stage-progress span")
];

// =========================
// RENDER ITEM
// =========================

function renderItem() {
  const item = items[currentItem];

  itemCount.textContent = item.count;

  scenePerson.textContent = item.person;
  sceneProp.textContent = item.prop;

  renderStage();
}

// =========================
// RENDER STAGE
// =========================

function renderStage() {
  const stage = stages[currentStage];
  const item = items[currentItem];

  stageTitle.textContent = stage.title;

  stageHelp.textContent = stage.help;

  stepLabel.textContent =
    `Moment ${currentStage + 1} of 5`;

  actionBtn.textContent = stage.button;

  // =========================
  // TEXT BEHAVIOUR
  // =========================

  if (currentStage === 3) {

    // Unlock
    // ซ่อนข้อความทั้งหมด

    sentence.textContent = "";

  } else if (currentStage === 4) {

    // Express

    sentence.textContent = item.create;

  } else {

    sentence.textContent = item.listen;

  }

  // =========================
  // STAGE BUTTONS
  // =========================

  stageButtons.forEach((button, index) => {

    button.classList.toggle(
      "active",
      index === currentStage
    );

  });

  // =========================
  // PROGRESS
  // =========================

  progressDots.forEach((dot, index) => {

    dot.classList.toggle(
      "done",
      index <= currentStage
    );

  });

  // =========================
  // CONTINUE BUTTON
  // =========================

  if (currentStage === stages.length - 1) {

    nextStepBtn.textContent =
      currentItem === items.length - 1
        ? "Finish Journey"
        : "Complete Moment";

  } else {

    nextStepBtn.textContent = "Continue";

  }
}

// =========================
// STAGE NAVIGATION
// =========================

stageButtons.forEach((button) => {

  button.addEventListener("click", () => {

    currentStage =
      Number(button.dataset.stage);

    renderStage();

  });

});

// =========================
// CONTINUE
// =========================

nextStepBtn.addEventListener("click", () => {

  // Next stage

  if (currentStage < stages.length - 1) {

    currentStage++;

    renderStage();

    return;

  }

  // Next Item

  if (currentItem < items.length - 1) {

    currentItem++;

    currentStage = 0;

    renderItem();

    return;

  }

  // Finished Prototype

  showScreen("checkpointScreen");

});

// =========================
// ACTION BUTTON
// =========================

actionBtn.addEventListener("click", () => {

  // FEEL
  if (currentStage === 1) {

    playListenPrototype();

  }

  // ECHO
  else if (currentStage === 2) {

    simulateSpeaking();

  }

  // UNLOCK
  else if (currentStage === 3) {

    startRecall();

  }

  // EXPRESS
  else if (currentStage === 4) {

    startCreate();

  }

});

// =========================
// FEEL
// =========================

function playListenPrototype() {

  const item = items[currentItem];

  actionBtn.textContent = "🔊";

  // Browser text-to-speech prototype

  if ("speechSynthesis" in window) {

    window.speechSynthesis.cancel();

    const speech =
      new SpeechSynthesisUtterance(
        item.listen
      );

    speech.lang = "en-US";

    speech.rate = 0.85;

    window.speechSynthesis.speak(speech);

  }

  setTimeout(() => {

    actionBtn.textContent = "▶ Play";

  }, 1200);
}

// =========================
// ECHO
// =========================

function simulateSpeaking() {

  actionBtn.textContent = "●";

  stageHelp.textContent =
    "Keep going. It doesn't need to be perfect.";

  setTimeout(() => {

    actionBtn.textContent = "🎙 Speak";

    stageHelp.textContent =
      "Say it aloud. Your voice matters more than perfection.";

  }, 1800);
}

// =========================
// UNLOCK
// =========================

function startRecall() {

  actionBtn.textContent = "●";

  stageHelp.textContent =
    "Bring the words back from memory.";

  startThinkingTimer(10);

}

// =========================
// EXPRESS
// =========================

function startCreate() {

  actionBtn.textContent = "●";

  stageHelp.textContent =
    "Say it your way.";

  setTimeout(() => {

    actionBtn.textContent = "🎙 Create";

  }, 1800);
}

// =========================
// THINKING TIMER
// =========================

let timerInterval = null;

function startThinkingTimer(seconds) {

  clearInterval(timerInterval);

  let timeLeft = seconds;

  actionBtn.textContent = timeLeft;

  timerInterval = setInterval(() => {

    timeLeft--;

    actionBtn.textContent = timeLeft;

    if (timeLeft <= 0) {

      clearInterval(timerInterval);

      actionBtn.textContent = "🎙 Recall";

      stageHelp.textContent =
        "That's okay. Let's keep moving.";

    }

  }, 1000);
}

// =========================
// INITIAL LOAD
// =========================

renderItem();
