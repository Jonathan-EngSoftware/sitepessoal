document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', smoothScroll);
  });
  
  function smoothScroll(event) {
    event.preventDefault();
  
    const targetId = this.getAttribute('href');
    const targetPosition = document.querySelector(targetId).offsetTop;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1000;
    let start = null;
  
    function animation(currentTime) {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }
  
    function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    }
  
    requestAnimationFrame(animation);
  }

const textToType = "Bem-vindo ao meu site pessoal. Eu sou uma pessoa apaixonada por tecnologia e desenvolvimento de Software.";


const typingElement = document.getElementById("efeito1");


const delay = 100;

let currentPosition = 0;

function typeText() {
  if (currentPosition < textToType.length) {
    typingElement.innerHTML += textToType.charAt(currentPosition);
    currentPosition++;
    setTimeout(typeText, delay);
  }
}

typeText();

const contato = document.getElementById("contato");

contato.addEventListener("submit", function(event) {
  event.preventDefault();

  const thankYouMessage = document.getElementById("thank-you-message");
  thankYouMessage.style.display = "block";

  contato.reset();
});
const showContentButton = document.getElementById("show-content");
const content = document.getElementById("content");

showContentButton.addEventListener("click", function() {
  content.style.display = "block";
});
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

function closePopup() {
  var popup = document.querySelector('.popup');
  popup.style.display = 'none';
}

window.onload = function() {
  var popup = document.querySelector('.popup');
  popup.style.display = 'flex';
}
