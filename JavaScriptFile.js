let speech = new SpeechSynthesisUtterance();
// SpeechSynthesisUtterance is a web speech API. Here, speech is the object for this API
speech.lang = "en";
// /setting default laguage as English
let voices = [];
window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[0];
  let voiceSelect = document.querySelector("#voices");
  voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
};

document.querySelector("#rate").addEventListener("input", () => {
  const rate = document.querySelector("#rate").value;
  speech.rate = rate;
  document.querySelector("#rate-label").innerHTML = rate;
  // above line is to update speed as per input provided
});
// here we can change the speed of the speech

document.querySelector("#volume").addEventListener("input", () => {
  const volume = document.querySelector("#volume").value;
  speech.volume = volume;
  document.querySelector("#volume-label").innerHTML = volume;
  // above line is to update volume as per input provided
});
// change volume of speech
document.querySelector("#pitch").addEventListener("input", () => {
  const pitch = document.querySelector("#pitch").value;
  speech.pitch = pitch;
  document.querySelector("#pitch-label").innerHTML = pitch;
  // above line is to update pitch as per input provided
});
// change pitch of speech

document.querySelector("#voices").addEventListener("change", () => {
  speech.voice = voices[document.querySelector("#voices").value];
});
// change language
document.querySelector("#start").addEventListener("click", () => {
  speech.text = document.querySelector("textarea").value;
  window.speechSynthesis.speak(speech);
  // inbuilt function
});

document.querySelector("#pause").addEventListener("click", () => {
  window.speechSynthesis.pause();
  // inbuilt function
});

document.querySelector("#resume").addEventListener("click", () => {
  window.speechSynthesis.resume();
  // inbuilt function
});

document.querySelector("#cancel").addEventListener("click", () => {
  window.speechSynthesis.cancel();
  // inbuilt function
}); 

document.querySelector("#clear").addEventListener("click", () => {
  document.querySelector("textarea").value = "";
});