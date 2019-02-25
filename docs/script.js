const links = Array.prototype.slice.call(document.getElementsByClassName('header-link'))

function checkPositionAndUpdate() {
  const scrolled = window.scrollY
  const height = window.innerHeight
  const section = sections[Math.floor(scrolled / height)]
  if (section) {
    links.forEach((link) => link.className = 'header-link light')
  } else {
    links.forEach((link) => link.className = 'header-link')
  }
}

window.addEventListener('scroll', checkPositionAndUpdate, { passive: true })
window.addEventListener('resize', checkPositionAndUpdate)