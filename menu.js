(function () {
  const MENU_TOGGLE_CLASS = 'menu-toggle'
  const MOBILE_MENU_CLASS = 'main-nav'
  const BACKDROP_CLASS = 'backdrop'
  const HAMBURGER_IMAGE = '/images/icon-hamburger.svg'
  const CLOSE_IMAGE = '/images/icon-close.svg'

  let menuVisible = false

  const menuToggle = document.querySelector(`.${MENU_TOGGLE_CLASS}`)
  const menu = document.querySelector(`.${MOBILE_MENU_CLASS}`)
  const backdrop = document.querySelector(`.${BACKDROP_CLASS}`)

  menuToggle.addEventListener('click', () => {
    if (!menuVisible) {
      menu.style.visibility = 'visible'
      backdrop.style.visibility = 'visible'
      menuToggle.src = CLOSE_IMAGE
      menuVisible = true
    } else {
      menu.style.visibility = 'hidden'
      backdrop.style.visibility = 'hidden'
      menuToggle.src = HAMBURGER_IMAGE
      menuVisible = false
    }
  })
})()
