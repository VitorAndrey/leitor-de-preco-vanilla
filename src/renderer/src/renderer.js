// renderer.js

function init() {
  window.addEventListener('DOMContentLoaded', () => {
    main()
  })
}

function main() {
  const button = document.getElementById('button')

  button?.addEventListener('click', async () => {
    button.classList.toggle('cor')

    const { audioContent } = await window.api.speak('Coca cola. 3 reais e 99 centavos')

    const audio = new Audio(`data:audio/mp3;base64,${audioContent}`)

    audio.play()
  })
}

init()
