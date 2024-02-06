function init() {
  window.addEventListener('DOMContentLoaded', () => {
    doAThing()
  })
}

function doAThing() {
  const button = document.getElementById('button')

  button?.addEventListener('click', () => {
    const text = 'Oi'

    const msg = new SpeechSynthesisUtterance()
    msg.text = text

    window.alert(speechSynthesis.getVoices()[0].name)
    window.alert(speechSynthesis.getVoices()[1].name)
    window.alert(speechSynthesis.getVoices()[2].name)

    msg.voice = speechSynthesis.getVoices()[0]
    speechSynthesis.speak(msg)
  })
}

init()
