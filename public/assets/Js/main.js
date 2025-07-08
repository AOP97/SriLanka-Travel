/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the blur-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('blur-header') 
                       : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 3000,
    delay: 400,
    // reset: true // Animations repeat
})

/*=============== GRADIENT BACKGROUND ===============*/
const granimInstance = new Granim({
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
});

/*=============== SLIDE GLIDE ===============*/
new Glide('.about-carousel', {
  type: 'carousel',
  perView: 1,
  autoplay: 3000,
  animationDuration: 600,
  hoverpause: true,
}).mount();

sr.reveal(`.home__data, .explore__data, .explore__user, .footer__container`)
sr.reveal(`.home__card`, {delay: 600, distance: '100px', interval: 100})
sr.reveal(`.about__data, .join__image`, {origin: 'right'})
sr.reveal(`.about__image, .join__data`, {origin: 'left'})
sr.reveal(`.popular__card`, {interval: 200})





/*=============== GALLERY GRID (DYNAMIC) ===============*/
document.addEventListener("DOMContentLoaded", () => {

const galleryData = [
  { title: "Ella", img: "assets/Images/popular-lake.jpg", area: "box1", height: "150px" },
  { title: "Unawatuna", img: "assets/Images/popular-lake.jpg", area: "box2", height: "300px" },
  { title: "Sigiriya", img: "assets/Images/popular-lake.jpg", area: "box3", height: "150px" },
  { title: "Kandy", img: "assets/Images/popular-lake.jpg", area: "box4", height: "200px" },
  { title: "Nuwara Eliya", img: "assets/Images/popular-lake.jpg", area: "box5", height: "150px" },
  { title: "Arugam Bay", img: "assets/Images/popular-lake.jpg", area: "box6", height: "200px" },
  { title: "Trincomaleea", img: "assets/Images/popular-lake.jpg", area: "box7", height: "150px" },
  
];

  const grid = document.getElementById("gallery-grid");
  if (!grid) return;

  galleryData.forEach((item, index) => {
  const link = document.createElement("a");
  link.href = item.img;
  link.setAttribute("data-lightbox", "gallery");
  link.setAttribute("data-title", item.title);
  link.style.display = "block";

  const box = document.createElement("div");
  box.className = "box";
  link.style.gridArea = `box${index + 1}`;
  box.style.backgroundImage = `url('${item.img}')`;
  box.style.backgroundSize = "cover";
  box.style.backgroundPosition = "center";
  box.style.backgroundRepeat = "no-repeat";
  box.style.minHeight = item.height;

  box.innerHTML = `<h2>${item.title}</h2>`;

  link.appendChild(box);
  grid.appendChild(link);
});
});

/*=============== CONTACT FORM VALIDATION ===============*/
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = form.querySelector('input[placeholder="Your Name"]');
    const email = form.querySelector('input[placeholder="Your Email"]');
    const message = form.querySelector('textarea');

    if (!name.value || !email.value || !message.value) {
      alert("Please fill in all fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
      alert("Please enter a valid email address.");
      return;
    }

    alert("Thank you! Your message has been submitted.");
    form.reset(); 
  });
});