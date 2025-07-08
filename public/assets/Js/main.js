/* -------------------- NAVIGATION TOGGLE -------------------- */
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

if (navToggle) {
  navToggle.addEventListener('click', () => navMenu.classList.add('show-menu'))
}
if (navClose) {
  navClose.addEventListener('click', () => navMenu.classList.remove('show-menu'))
}

/* -------------------- REMOVE MENU ON LINK CLICK -------------------- */
document.querySelectorAll('.nav__link').forEach(link =>
  link.addEventListener('click', () => navMenu.classList.remove('show-menu'))
)

/* -------------------- BLUR HEADER ON SCROLL -------------------- */
const blurHeader = () => {
  const header = document.getElementById('header')
  window.scrollY >= 50
    ? header.classList.add('blur-header')
    : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

/* -------------------- SCROLL UP BUTTON -------------------- */
const scrollUp = () => {
  const scrollUpBtn = document.getElementById('scroll-up')
  window.scrollY >= 350
    ? scrollUpBtn.classList.add('show-scroll')
    : scrollUpBtn.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/* -------------------- SCROLL ACTIVE LINK -------------------- */
const sections = document.querySelectorAll('section[id]')
const scrollActive = () => {
  const scrollY = window.pageYOffset
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 58
    const sectionId = current.getAttribute('id')
    const sectionLink = document.querySelector(`.nav__menu a[href*=${sectionId}]`)
    sectionLink?.classList.toggle('active-link', scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)
  })
}
window.addEventListener('scroll', scrollActive)

/* -------------------- SCROLL REVEAL ANIMATION -------------------- */
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 3000,
  delay: 400,
})
sr.reveal(`.home__data, .explore__data, .explore__user, .footer__container`)
sr.reveal(`.home__card`, { delay: 600, distance: '100px', interval: 100 })
sr.reveal(`.about__data, .join__image`, { origin: 'right' })
sr.reveal(`.about__image, .join__data`, { origin: 'left' })
sr.reveal(`.popular__card`, { interval: 200 })

/* -------------------- GRADIENT BACKGROUND -------------------- */
new Granim({
  element: '#granim-canvas',
  direction: 'diagonal',
  isPausedWhenNotInView: true,
  states: {
    "default-state": {
      gradients: [
        ['#0f2027', '#2c5364'],
        ['#1a2a6c', '#b21f1f', '#fdbb2d'],
        ['#134E5E', '#71B280']
      ],
      transitionSpeed: 5000
    }
  }
})

/* -------------------- ABOUT SECTION SLIDER -------------------- */
new Glide('.about-carousel', {
  type: 'carousel',
  perView: 1,
  autoplay: 3000,
  animationDuration: 600,
  hoverpause: true,
}).mount()

/* -------------------- DYNAMIC GALLERY GRID -------------------- */
document.addEventListener("DOMContentLoaded", () => {
  const galleryData = [
    { title: "Ella", img: "assets/Images/Ella.jpg", area: "box1", height: "150px" },
    { title: "Unawatuna", img: "assets/Images/Unawatuna.jpg", area: "box2", height: "300px" },
    { title: "Sigiriya", img: "assets/Images/Sigiriya.jpg", area: "box3", height: "150px" },
    { title: "Kandy", img: "assets/Images/Kandy.jpg", area: "box4", height: "200px" },
    { title: "Nuwara Eliya", img: "assets/Images/Nuwaraeliya.jpg", area: "box5", height: "150px" },
    { title: "Arugam Bay", img: "assets/Images/Arugambay.jpg", area: "box6", height: "200px" },
    { title: "Trincomaleea", img: "assets/Images/Trincomalee.jpg", area: "box7", height: "150px" },
  ]

  const grid = document.getElementById("gallery-grid")
  if (!grid) return

  galleryData.forEach((item, index) => {
    const link = document.createElement("a")
    link.href = item.img
    link.setAttribute("data-lightbox", "gallery")
    link.setAttribute("data-title", item.title)
    link.style.display = "block"
    link.style.gridArea = `box${index + 1}`

    const box = document.createElement("div")
    box.className = "box"
    box.style.backgroundImage = `url('${item.img}')`
    box.style.backgroundSize = "cover"
    box.style.backgroundPosition = "center"
    box.style.backgroundRepeat = "no-repeat"
    box.style.minHeight = item.height
    box.innerHTML = `<h2>${item.title}</h2>`

    link.appendChild(box)
    grid.appendChild(link)
  })
})

/* -------------------- CONTACT FORM VALIDATION -------------------- */
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form")
  if (!form) return

  form.addEventListener("submit", e => {
    e.preventDefault()
    const name = form.querySelector('input[placeholder="Your Name"]')
    const email = form.querySelector('input[placeholder="Your Email"]')
    const message = form.querySelector('textarea')

    if (!name.value || !email.value || !message.value) {
      return alert("Please fill in all fields.")
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email.value)) {
      return alert("Please enter a valid email address.")
    }

    alert("Thank you! Your message has been submitted.")
    form.reset()
  })
})