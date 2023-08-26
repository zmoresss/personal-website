export const textToSpeech = (text) => {
  const msg = new SpeechSynthesisUtterance();
  msg.text = text;
  msg.volume = 1;
  msg.rate = 1;
  msg.pitch = 0.20000000298023224;
  msg.voice = speechSynthesis
    .getVoices()
    .filter(
      function(voice) {
        return voice.name == 'Microsoft Zira - English (United States)';
      })[0];

  window.speechSynthesis.speak(msg);
}
