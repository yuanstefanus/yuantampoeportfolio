// sticky navbar
let header = document.querySelector('header');

header.classList.toggle('sticky', window.scrollY > 100)


// scroll section active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = function() {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a [href*=' + id + ']').classList.add('active');
      })
    }
  })
}

hamburger = document.getElementById(".bx bx-menu");
function onClickHamburger() {
  navBar = document.querySelector(".navbar");
  navBar.classList.toggle("active");
}

// scroll reveal
ScrollReveal({ 
  reset: true,
  distance:'80px',
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, contact-form', {origin: 'bottom'})
ScrollReveal().reveal('.home-content h1, .about-img', {origin: 'left'})
ScrollReveal().reveal('.home-content p, .about-content', {origin: 'right'})

// typed js
const typed = new Typed('.multiple-text',{
  strings: ['Frontend Developer', 'System Analist', 'UI/UX Designer', 'Human :D'],
  typeSpeed: 100,
  backSpeed: 70,
  backDelay: 50,
  loop: true
});

// smtp js
function sendEmail(){
  Email.send({
    Host : "smtp.gmail.com",
    Username : "tampubolonyuan@gmail.com",
    Password : "password",
    To : 'tampubolonyuan@gmail.com',
    From : document.getElementById("input-email").value,
    Subject : "New Contact Form Enquiry",
    Body : "Name: "+ document.getElementById("input-name").value
    + "<br> Email: "+document.getElementById("input-email").value
    + "<br> Phone: "+ document.getElementById("input-number").value
    + "<br> Message: "+ document.getElementById("input-message").value
}).then(
  message => alert("Message Sent Successfully")
);
}













   

