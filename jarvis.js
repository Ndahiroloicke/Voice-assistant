const butt = document.querySelector(".input");
const content = document.querySelector(".content");

function speak(text) {
  if ("speechSynthesis" in window) {
    const text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate = 1;
    text_speak.volume = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
  } else {
   alert("your browser does not support this Assistant")
  }
}

function wishMe() {
  const day = new Date();
  var hour = day.getHours();

  if (hour >= 0 && hour < 12) {
    speak("Good Morning Master...");
  } else if (hour > 12 && hour < 17) {
    speak("Good afternoon Master...");
  } else {
    speak("Good evening Master");
  }
}

window.addEventListener("load",()=>{
  speak("Initializing Jarvis");
  wishMe();
})

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
  const currentIndex = event.resultIndex;
  const transcript = event.results[currentIndex][0].transcript;
  content.textContent = transcript;
  takeCommand(transcript.toLowerCase());
};

butt.addEventListener("click", () => {
  content.textContent = "Listening...";
  recognition.start();
});
function takeCommand(message) {
  if (message.includes("hey") || message.includes("hello")) {
    speak("Hello sir, how May I help ");
  } else if (
    message.includes("open google") ||
    message.includes("i need to use google")
  ) {
    window.open("https://google.com", "_blank");
    speak("opening google");
  } else if (
    message.includes("who made you") ||
    message.includes("what is jarvis")
  ) {
    speak(
      "I your daytoday voice assistant developed by loic and I am still under development"
    );
  } else if (
    message.includes("what can you do") ||
    message.includes("what are your capabilities")
  ) {
    speak(
      "currently i am limited to opening some web applications like youtube and more. And mainly best at making some research for you and other simple activities like telling time and opening calculator"
    );
  } else if (
    message.includes("open youtube") ||
    message.includes("i need to see a video")
  ) {
    window.open("https://youtube.com", "_blank");
    speak("opening youtube");
  } else if (
    message.includes("open spotify") ||
    message.includes("i need some music") ||
    message.includes("spotify")
  ) {
    window.open("https://spotify.com", "_blank");
    speak("opening spotify");
  } else if (
    message.includes("open pinterest") ||
    message.includes("i need to use pinterest") ||
    message.includes("pinterest")
  ) {
    window.open("https://pinterest.com", "_blank");
    speak("opening pinterest");
  } else if (
    message.includes("i need to learn coding") ||
    message.includes("code") ||
    message.includes("coding")
  ) {
    window.open("https://w3schools.com", "_blank");
    speak("opening The best coding website");
  } else if (
    message.includes("what is") ||
    message.includes("who is") ||
    message.includes("where is") ||
    message.includes("when does")
  ) {
    window.open(
      `https://www.google.com/search?q=${message.replace(" ", "+")}`,
      "_blank"
    );
    const finaltext =
      "this is what i found  on the internet regarding" + message;
    speak(finaltext);
  } else if (message.includes("wikipedia")) {
    window.open(
      `https://www.wikipedia.org/search?q=${message.replace("wikipedia", "")}`,
      "_blank"
    );
    const finaltext =
      "this is what i found  on the internet regarding" + message;
    speak(finaltext);
  } else if (
    message.includes("what is the time") ||
    message.includes("when are we") ||
    message.includes("time")
  ) {
    const time = new Date().toLocaleString(undefined, {
      hour: "numeric",
      minute: "numeric",
    });
    const final = time;
    console.log(final);
    speak(final);
  } else if (message.includes("calculator")) {
    window.open("calculator:///");
    speak("Opening Calculator");
  } else if(message.includes("thank you")){
    speak("not at all. I am here to assist you in your day to day life")
  }
  else {
    const finaltext = "I  found some information for " + message + "on the web";
    window.open(
      `https://www.google.com/search?q=${message.replace(" ", "+")}`,
      "_blank"
    );
    speak(finaltext);
  }
}
