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
    dayNumber: 1,
    
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
    dayNumber: 1,

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
    dayNumber: 1,

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
    dayNumber: 1,
    
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
    dayNumber: 1,

    image: "assets/items/item-005.png",


    day: "Waking Up",

    scene: "Starting the Day",

    question: "Are you ready?",

    answer: "Let's go.",

    production:
      "How do you invite someone to start the day?",
  },
  
{
  id: "006",
  image: "assets/items/item-006.png",
  dayNumber: 2,
  day: "Getting Ready",
  scene: "Looking for Something",
  question: "Where are my keys?",
  answer: "They're on the table.",
  production:
    "Ask someone where your keys are."
},

{
  id: "007",
  image: "assets/items/item-007.png",
  dayNumber: 2,
  day: "Getting Ready",
  scene: "Getting Dressed",
  question: "Are you ready yet?",
  answer: "Almost.",
  production:
    "Tell someone you're almost ready."
},

{
  id: "008",
  image: "assets/items/item-008.png",
  dayNumber: 2,
  day: "Getting Ready",
  scene: "Choosing Clothes",
  question: "Which shirt should I wear?",
  answer: "The blue one looks nice.",
  production:
    "Ask someone which shirt you should wear."
},

{
  id: "009",
  image: "assets/items/item-009.png",
  dayNumber: 2,
  day: "Getting Ready",
  scene: "Running Late",
  question: "Are you running late?",
  answer: "Just a little.",
  production:
    "Tell someone you're running a little late."
},

{
  id: "010",
  image: "assets/items/item-010.png",
  dayNumber: 2,
  day: "Getting Ready",
  scene: "Leaving Home",
  question: "Shall we go?",
  answer: "Let's go.",
  production:
    "Invite someone to leave with you."
},

  {
    id: "011",

    dayNumber: 3,

    image: "assets/items/item-011.png",

    day: "Breakfast & Coffee",

    scene: "Tea or Coffee?",

    question: "Would you like tea or coffee?",

    answer: "Coffee, please.",

    production:
        "What would you like to drink?"
},

{
    id: "012",

    dayNumber: 3,

    image: "assets/items/item-012.png",

    day: "Breakfast & Coffee",

    scene: "Choosing Breakfast",

    question: "What would you like for breakfast?",

    answer: "I'll have eggs and toast.",

    production:
        "What do you usually eat for breakfast?"
},

{
    id: "013",

    dayNumber: 3,

    image: "assets/items/item-013.png",

    day: "Breakfast & Coffee",

    scene: "Enjoying the Food",

    question: "How is your breakfast?",

    answer: "It's delicious.",

    production:
        "Describe your breakfast."
},

{
    id: "014",

    dayNumber: 3,

    image: "assets/items/item-014.png",

    day: "Breakfast & Coffee",

    scene: "Having More",

    question: "Would you like some more?",

    answer: "Yes, please.",

    production:
        "How do you ask for more food?"
},

{
    id: "015",

    dayNumber: 3,

    image: "assets/items/item-015.png",

    day: "Breakfast & Coffee",

    scene: "Finishing Breakfast",

    question: "Are you full?",

    answer: "Yes, I'm full.",

    production:
        "How do you say that you've eaten enough?"
},
  {
    id: "016",

    dayNumber: 4,

    image: "assets/items/item-016.png",

    day: "Work & Daily Tasks",

    scene: "Starting Work",

    question: "Are you busy today?",

    answer: "Yes, I have a lot to do.",

    production:
        "Describe your workload today."
},

{
    id: "017",

    dayNumber: 4,

    image: "assets/items/item-017.png",

    day: "Work & Daily Tasks",

    scene: "Today's Task",

    question: "What are you working on?",

    answer: "I'm finishing a report.",

    production:
        "Talk about something you're working on."
},

{
    id: "018",

    dayNumber: 4,

    image: "assets/items/item-018.png",

    day: "Work & Daily Tasks",

    scene: "Asking for Help",

    question: "Can you help me?",

    answer: "Of course.",

    production:
        "Ask someone for help."
},

{
    id: "019",

    dayNumber: 4,

    image: "assets/items/item-019.png",

    day: "Work & Daily Tasks",

    scene: "Almost Finished",

    question: "Are you done yet?",

    answer: "I'm almost finished.",

    production:
        "Tell someone you're almost done."
},

{
    id: "020",

    dayNumber: 4,

    image: "assets/items/item-020.png",

    day: "Work & Daily Tasks",

    scene: "Good Job",

    question: "Great work today.",

    answer: "Thank you.",

    production:
        "How do you compliment someone at work?"
},
  {
    id: "021",

    dayNumber: 5,

    image: "assets/items/item-021.png",

    day: "Food & Eating",

    scene: "Feeling Hungry",

    question: "Are you hungry?",

    answer: "Yes, I'm starving.",

    production:
        "How do you say that you're very hungry?"
},

{
    id: "022",

    dayNumber: 5,

    image: "assets/items/item-022.png",

    day: "Food & Eating",

    scene: "Choosing a Restaurant",

    question: "What should we eat?",

    answer: "How about some noodles?",

    production:
        "Suggest a meal to someone."
},

{
    id: "023",

    dayNumber: 5,

    image: "assets/items/item-023.png",

    day: "Food & Eating",

    scene: "Ordering Food",

    question: "What would you like to order?",

    answer: "I'd like fried rice, please.",

    production:
        "Order your favorite food."
},

{
    id: "024",

    dayNumber: 5,

    image: "assets/items/item-024.png",

    day: "Food & Eating",

    scene: "Enjoying the Meal",

    question: "How does it taste?",

    answer: "It's really good.",

    production:
        "Describe the taste of your food."
},

{
    id: "025",

    dayNumber: 5,

    image: "assets/items/item-025.png",

    day: "Food & Eating",

    scene: "Eating Together",

    question: "Would you like to eat together?",

    answer: "Sure, I'd love to.",

    production:
        "Invite someone to eat with you."
},
  {
    id: "026",

    dayNumber: 6,

    image: "assets/items/item-026.png",

    day: "Going Out",

    scene: "Leaving Home",

    question: "Where are you going?",

    answer: "I'm going to the supermarket.",

    production:
        "Tell someone where you're going."
},

{
    id: "027",

    dayNumber: 6,

    image: "assets/items/item-027.png",

    day: "Going Out",

    scene: "Choosing Transportation",

    question: "How are you getting there?",

    answer: "I'm taking the train.",

    production:
        "Explain how you're traveling."
},

{
    id: "028",

    dayNumber: 6,

    image: "assets/items/item-028.png",

    day: "Going Out",

    scene: "Waiting for Someone",

    question: "Can you wait for me?",

    answer: "Sure. I'll wait here.",

    production:
        "Ask someone to wait for you."
},

{
    id: "029",

    dayNumber: 6,

    image: "assets/items/item-029.png",

    day: "Going Out",

    scene: "Going Together",

    question: "Do you want to go together?",

    answer: "Yes. Let's go together.",

    production:
        "Invite someone to go with you."
},

{
    id: "030",

    dayNumber: 6,

    image: "assets/items/item-030.png",

    day: "Going Out",

    scene: "Saying Goodbye",

    question: "See you later.",

    answer: "See you.",

    production:
        "How do you say goodbye before leaving?"
},
  {
    id: "031",

    dayNumber: 7,

    image: "assets/items/item-031.png",

    day: "Small Talk",

    scene: "Talking About Your Day",

    question: "How was your day?",

    answer: "It was pretty good.",

    production:
        "Describe your day."
},

{
    id: "032",

    dayNumber: 7,

    image: "assets/items/item-032.png",

    day: "Small Talk",

    scene: "Today's Activities",

    question: "What did you do today?",

    answer: "I went to work and met some friends.",

    production:
        "Talk about what you did today."
},

{
    id: "033",

    dayNumber: 7,

    image: "assets/items/item-033.png",

    day: "Small Talk",

    scene: "Showing Interest",

    question: "Really?",

    answer: "Yes. It was amazing.",

    production:
        "React to an interesting story."
},

{
    id: "034",

    dayNumber: 7,

    image: "assets/items/item-034.png",

    day: "Small Talk",

    scene: "Talking About Hobbies",

    question: "What do you like to do for fun?",

    answer: "I enjoy playing games.",

    production:
        "Talk about one of your hobbies."
},

{
    id: "035",

    dayNumber: 7,

    image: "assets/items/item-035.png",

    day: "Small Talk",

    scene: "Saying Goodbye",

    question: "See you tomorrow.",

    answer: "See you tomorrow.",

    production:
        "Say goodbye and make plans to meet again."
}
];

const sceneImage =
    document.getElementById(
        "sceneImage"
    );

// =========================
// STATE
// =========================

let currentDay = 1;

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
const dayLabel = document.getElementById("dayLabel");

const homeDayLabel = document.getElementById("homeDayLabel");
const homeDayTitle = document.getElementById("homeDayTitle");
const homeProgressLabel = document.getElementById("homeProgressLabel");
const continueJourneyBtn = document.getElementById("continueJourneyBtn");
const continueJourneySub = document.getElementById("continueJourneySub");
const reviewPreviousBtn = document.getElementById("reviewPreviousBtn");
const reviewDayLabel = document.getElementById("reviewDayLabel");
const reviewDayHint = document.getElementById("reviewDayHint");
const openDawnFieldsBtn = document.getElementById("openDawnFieldsBtn");
const dayCards = [...document.querySelectorAll(".dayCard")];

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
// DAY NAVIGATION
// =========================

function goToDay(day) {

    const firstIndex = items.findIndex(
      item => item.dayNumber === day
    );

    // Day ยังไม่มีเนื้อหา
    if (firstIndex === -1) {
      return;
    }

    currentDay = day;
    currentItem = firstIndex;
    currentStage = 0;

    renderItem();
    updateHome();
    updateDayCards();

    showScreen("itemScreen");
}


function updateHome() {

  const currentDayItems =
    items.filter(item => item.dayNumber === currentDay);

  const firstItem =
    currentDayItems[0];

  if (!firstItem) {
    return;
  }

  homeDayLabel.textContent =
    `Day ${currentDay}`;

  homeDayTitle.textContent =
    firstItem.day;

  homeProgressLabel.textContent =
    `${currentDay} / 180`;

  continueJourneySub.textContent =
    firstItem.day;

  if (currentDay > 1) {

    const previousItems =
      items.filter(item => item.dayNumber === currentDay - 1);

    if (previousItems.length) {

      reviewPreviousBtn.disabled = false;

      reviewDayLabel.textContent =
        `Day ${currentDay - 1} · ${previousItems[0].day}`;

      reviewDayHint.textContent =
        "Tap to review";

      return;
    }
  }

  reviewPreviousBtn.disabled = true;
  reviewDayLabel.textContent =
    "No previous day yet";
  reviewDayHint.textContent =
    "Your reviews will appear here";
}


function updateDayCards() {

  dayCards.forEach(card => {

    const day =
      Number(card.dataset.day);

    const available =
      items.some(item => item.dayNumber === day);

    card.disabled =
      !available;

    card.classList.toggle(
      "locked",
      !available
    );

    card.classList.toggle(
      "current",
      day === currentDay
    );

    const state =
      card.querySelector(".dayState");

    if (!available) {
      state.textContent = "🔒";
    }

    else if (day === currentDay) {
      state.textContent = "▶";
    }

    else if (day < currentDay) {
      state.textContent = "✓";
    }

    else {
      state.textContent = "○";
    }

  });
}


continueJourneyBtn.addEventListener(
  "click",
  () => goToDay(currentDay)
);


reviewPreviousBtn.addEventListener(
  "click",
  () => {

    if (currentDay > 1) {
      goToDay(currentDay - 1);
    }

  }
);


openDawnFieldsBtn.addEventListener(
  "click",
  () => {

    updateDayCards();

    showScreen(
      "realmDetailScreen"
    );

  }
);


dayCards.forEach(card => {

  card.addEventListener(
    "click",
    () => {

      const day =
        Number(card.dataset.day);

      goToDay(day);

    }
  );

});

// =========================
// RENDER ITEM
// =========================

function renderItem() {

    const item =
        items[currentItem];

    currentDay = item.dayNumber || currentDay;

    sceneImage.src =
        item.image;

    dayLabel.textContent =
    `Day ${item.dayNumber} • ${item.day}`;

    const dayItems =
        items.filter(i => i.dayNumber === currentDay);

    const itemPosition =
        dayItems.findIndex(i => i.id === item.id) + 1;

    itemCount.textContent =
        `${itemPosition}/${dayItems.length}`;

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


// PLAY QUESTION

playQuestionBtn.addEventListener(
  "click",
  () => {

    const item = items[currentItem];

    speakText(item.question);

  }
);


// PLAY ANSWER

playAnswerBtn.addEventListener(
  "click",
  () => {

    const item = items[currentItem];

    speakText(item.answer);

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

  if (mode === "echo") {

    stageHelp.textContent =
      `You said: "${transcript}"`;

    actionBtn.textContent =
      "✓ Nice!";

  }

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
updateHome();
updateDayCards();
