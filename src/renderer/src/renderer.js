function init() {
  window.addEventListener('DOMContentLoaded', () => {
    doAThing()
  })
}

function doAThing() {
  const button = document.getElementById('button')
  const response = document.getElementById('response')

  button?.addEventListener('click', () => {
    button.classList.toggle('cor')

    const text = 'Oi'

    const msg = new SpeechSynthesisUtterance()
    msg.text = text

    response.innerHTML += speechSynthesis.getVoices()[0].name || 'Nao tem'
    response.innerHTML += '<br></br>'
    response.innerHTML += speechSynthesis.getVoices()[1].name || 'Nao tem'
    response.innerHTML += '<br></br>'
    response.innerHTML += speechSynthesis.getVoices()[3].name || 'Nao tem'

    msg.voice = speechSynthesis.getVoices()[0]
    speechSynthesis.speak(msg)
  })
}

init()
