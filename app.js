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
    
    image: "assets/items/item-001.png",

    day: "Waking Up",

    scene: "Morning Greeting",

    question: "Good morning.",

    answer: "Good morning.",

    production:
      "How do you usually greet someone in the morning?",
  },

  {
    id: "002",

    image: "assets/items/item-002.png",


    day: "Waking Up",

    scene: "Sleeping Well",

    question: "Did you sleep well?",

    answer: "Yes, I did.",

    production:
      "How do you ask someone about their sleep?",
  },

  {
    id: "003",

    image: "assets/items/item-003.png",


    day: "Waking Up",

    scene: "Feeling Sleepy",

    question: "Are you still sleepy?",

    answer: "A little.",

    production:
      "How do you tell someone that you're still sleepy?",
  },

  {
    id: "004",
    
    image: "assets/items/item-004.png",


    day: "Waking Up",

    scene: "Checking the Time",

    question: "What time is it?",

    answer: "It's seven o'clock.",

    production:
      "Ask someone what time it is.",
  },

  {
    id: "005",

    image: "assets/items/item-005.png",


    day: "Waking Up",

    scene: "Starting the Day",

    question: "Are you ready?",

    answer: "Let's go.",

    production:
      "How do you invite someone to start the day?",
  }

];

const sceneImage =
    document.getElementById(
        "sceneImage"
    );

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
const questionText =
  document.getElementById("questionText");

const answerText =
  document.getElementById("answerText");

const playQuestionBtn =
  document.getElementById("playQuestionBtn");

const playAnswerBtn =
  document.getElementById("playAnswerBtn");
const stepLabel = document.getElementById("moment");

const itemCount = document.getElementById("itemCount");
const actionBtn = document.getElementById("actionBtn");
const nextStepBtn = document.getElementById("nextStepBtn");

const stageButtons = [
  ...document.querySelectorAll(
    ".stage"
  )
];

const progressDots = [
  ...document.querySelectorAll(
    "#stepLine i"
  )
];

// =========================
// RENDER ITEM
// =========================

function renderItem() {

    const item =
        items[currentItem];

    sceneImage.src =
        item.image;

    itemCount.textContent =
        `${currentItem + 1}/${items.length}`;

    questionText.textContent =
        item.question;

    answerText.textContent =
        item.answer;

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

  if (currentStage === 0) {

  questionText.textContent =
    item.question;

  answerText.textContent =
    item.answer;

}

else if (currentStage === 1) {

  questionText.textContent =
    item.question;

  answerText.textContent =
    item.answer;

}

else if (currentStage === 2) {

  questionText.textContent =
    item.question;

  answerText.textContent =
    item.answer;

}

else if (currentStage === 3) {

  prepareUnlock();

}

else if (currentStage === 4) {

  questionText.textContent =
    item.production;

  answerText.textContent =
    "Say it your way.";

}
);

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
  if (currentStage === 2) {

  startVoiceRecognition(
    "echo"
  );

}

  // UNLOCK
  else if (currentStage === 3) {

  startVoiceRecognition(
    "unlock"
  );

}

  // EXPRESS
  else if (currentStage === 4) {

  startVoiceRecognition(
    "express"
  );

}

});


// =========================
// SPEECH
// =========================

function speakText(text) {

  if (!("speechSynthesis" in window)) {
    return;
  }

  window.speechSynthesis.cancel();

  const speech =
    new SpeechSynthesisUtterance(text);

  speech.lang = "en-US";
  speech.rate = 0.85;
  speech.pitch = 1;

  window.speechSynthesis.speak(speech);
}


// =========================
// PLAY A / B
// =========================

playQuestionBtn.addEventListener(
  "click",
  () => {

    const item =
      items[currentItem];

    speakText(
      item.question
    );

  }
);


playAnswerBtn.addEventListener(
  "click",
  () => {

    const item =
      items[currentItem];

    speakText(
      item.answer
    );

  }
);

// =========================
// FEEL
// =========================

function playListenPrototype() {

  const item = items[currentItem];

  actionBtn.textContent =
    "🔊";

  speakDialogue(
    item.question,
    item.answer
  );

  setTimeout(() => {

    actionBtn.textContent =
      "▶ Play";

  }, 2500);
}

function speakDialogue(
  question,
  answer
) {

  if (!("speechSynthesis" in window)) {
    return;
  }

  window.speechSynthesis.cancel();

  const speechA =
    new SpeechSynthesisUtterance(
      question
    );

  speechA.lang = "en-US";
  speechA.rate = 0.85;


  const speechB =
    new SpeechSynthesisUtterance(
      answer
    );

  speechB.lang = "en-US";
  speechB.rate = 0.85;


  speechA.onend = () => {

    setTimeout(() => {

      window.speechSynthesis.speak(
        speechB
      );

    }, 400);

  };


  window.speechSynthesis.speak(
    speechA
  );
}

// =========================
// SPEECH RECOGNITION
// =========================

const SpeechRecognition =
  window.SpeechRecognition ||
  window.webkitSpeechRecognition;

let recognition = null;

if (SpeechRecognition) {

  recognition = new SpeechRecognition();

  recognition.lang = "en-US";

  recognition.interimResults = false;

  recognition.continuous = false;
}


// =========================
// START LISTENING
// =========================

function startVoiceRecognition(mode) {

  if (!recognition) {

    stageHelp.textContent =
      "Speech recognition is not supported in this browser.";

    return;
  }


  recognition.start();

  actionBtn.textContent =
    "🎙 Listening...";

  stageHelp.textContent =
    "Speak now. Don't worry about being perfect.";


  recognition.onresult = (event) => {

    const transcript =
      event.results[0][0].transcript;

    console.log(
      "User said:",
      transcript
    );


    handleSpeechResult(
      mode,
      transcript
    );

  };


  recognition.onerror = () => {

    actionBtn.textContent =
      "🎙 Try again";

    stageHelp.textContent =
      "I didn't catch that. Try once more.";

  };


  recognition.onend = () => {

    if (actionBtn.textContent === "🎙 Listening...") {

      actionBtn.textContent =
        "🎙 Speak";

    }

  };

}

// =========================
// SPEECH RESULT
// =========================

function handleSpeechResult(mode, transcript) {

  const item = items[currentItem];


  // =========================
  // ECHO
  // =========================

  if (mode === "echo") {

    stageHelp.textContent =
      `You said: "${transcript}"`;

    actionBtn.textContent =
      "✓ Nice!";

  }


  // =========================
  // UNLOCK
  // =========================

  else if (mode === "unlock") {

    const result =
      checkUnlockAnswer(
        transcript,
        item.answer
      );


    if (result === "good") {

      stageHelp.textContent =
        `You said: "${transcript}" — Nice!`;

      answerText.textContent =
        item.answer;

      actionBtn.textContent =
        "✓ Got it";

    }


    else if (result === "close") {

      stageHelp.textContent =
        `You said: "${transcript}" — Almost there!`;

      answerText.textContent =
        item.answer;

      actionBtn.textContent =
        "✓ Keep going";

    }


    else {

      stageHelp.textContent =
        `You said: "${transcript}" — Let's hear it again.`;

      answerText.textContent =
        item.answer;

      actionBtn.textContent =
        "↻ Try again";

    }

  }


  // =========================
  // EXPRESS
  // =========================

  else if (mode === "express") {

    stageHelp.textContent =
      `You said: "${transcript}"`;

    answerText.textContent =
      transcript;

    actionBtn.textContent =
      "✓ You spoke!";

  }

}
// =========================
// NORMALIZE SPEECH
// =========================

function normalizeText(text) {

  return text
    .toLowerCase()
    .replace(/[.,!?']/g, "")
    .replace(/\s+/g, " ")
    .trim();

}

// =========================
// CHECK UNLOCK ANSWER
// =========================

function checkUnlockAnswer(
  transcript,
  expectedAnswer
) {

  const spoken =
    normalizeText(transcript);

  const expected =
    normalizeText(expectedAnswer);


  // ตรงทั้งหมด
  if (spoken === expected) {
    return "good";
  }


  // มีคำหลักตรงกันบางส่วน
  const expectedWords =
    expected.split(" ");

  const spokenWords =
    spoken.split(" ");

  const matchedWords =
    expectedWords.filter(word =>
      spokenWords.includes(word)
    );

  const matchRate =
    matchedWords.length /
    expectedWords.length;


  // ตรงประมาณครึ่งหนึ่งขึ้นไป
  if (matchRate >= 0.5) {
    return "close";
  }


  return "try";
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
// ENTER UNLOCK
// =========================

function prepareUnlock() {

  const item =
    items[currentItem];

  questionText.textContent =
    item.question;

  answerText.textContent =
    "__________";

  stageHelp.textContent =
    "Bring the answer back from memory.";

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

  actionBtn.textContent =
    `🎙 ${timeLeft}`;


  timerInterval =
    setInterval(() => {

      timeLeft--;

      actionBtn.textContent =
        `🎙 ${timeLeft}`;


      if (timeLeft <= 0) {

        clearInterval(
          timerInterval
        );

        actionBtn.textContent =
          "🎙 Speak";

        stageHelp.textContent =
          "Ready when you are.";

      }

    }, 1000);
}
// =========================
// INITIAL LOAD
// =========================

renderItem();
