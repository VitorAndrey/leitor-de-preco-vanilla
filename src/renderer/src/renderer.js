function init() {
  window.addEventListener('DOMContentLoaded', () => {
    main()
  })
}

function main() {
  const button = document.getElementById('button')

  button?.addEventListener('click', () => {
    button.classList.toggle('cor')

    window.api.speak('Coca cola. 3 reais e 99 centavos')
  })
}

init()
