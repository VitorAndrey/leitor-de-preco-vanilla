function init() {
  window.addEventListener('DOMContentLoaded', () => {
    doAThing()
  })
}

function doAThing() {
  const button = document.getElementById('button')

  button?.addEventListener('click', () => {
    const text = 'Era uma vez um cavaleiro com uma trança na testa...'

    const msg = new SpeechSynthesisUtterance()
    msg.text = text
    msg.voice = speechSynthesis.getVoices()[0]
    speechSynthesis.speak(msg)
  })
}

init()
