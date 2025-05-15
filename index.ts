const navLinks = 'nav a'
document.querySelectorAll(navLinks).forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault()
    const target = event.target as HTMLAnchorElement
    const targetId = target.getAttribute('href')?.split('#')[1]
    if (targetId) {
      const targetEl = document.getElementById(targetId)
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth' })
      }
    }
  })
})
