const quickStart = document.getElementById('quick-start')

const sections = [ false, true, true, true, false ]

function checkPositionAndUpdate() {
  const scrolled = window.scrollY
  const height = window.innerHeight
  const section = sections[Math.floor(scrolled / height)]
  if (section) {
    quickStart.className = 'light'
  } else {
    quickStart.className = ''
  }
}

window.addEventListener('scroll', checkPositionAndUpdate, { passive: true })
window.addEventListener('resize', checkPositionAndUpdate)