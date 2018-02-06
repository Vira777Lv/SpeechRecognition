(function () {
  'use strict';
  window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  let recognition = new SpeechRecognition();
  recognition.interimResults = true;

  let p = document.createElement('p');
  let speechResult = document.querySelector('.speechResult');
  speechResult.appendChild(p);

  recognition.addEventListener('result', event => {
    let transcript = Array.from(event.results)
      .map(result => result[0])
      .map(result => result.transcript)
      .join('');

    p.textContent = transcript;

    if (event.results[0].isFinal) {
      p = document.createElement('p');
      speechResult.appendChild(p);
    }
  });

  recognition.addEventListener('end', recognition.start);
  recognition.start();
})();
