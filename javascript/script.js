function toggleNav() {
  var nav = document.querySelector('nav');
  nav.classList.toggle('active');
}


const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');

togglePassword.addEventListener('click', function () {
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);

    const icon = this.querySelector('i');
    icon.classList.toggle('fa-eye-slash');
    icon.classList.toggle('fa-eye');
});


document.addEventListener('DOMContentLoaded', function() {
  var carouselItems = document.querySelectorAll('.carousel-item');
  var moveLeftBtn = document.getElementById('moveLeft');
  var moveRightBtn = document.getElementById('moveRight');
  
  var total = carouselItems.length;
  var current = 0;
  
  function showItem(index) {
    carouselItems.forEach(function (item, i) {
      if (i === index) {
        item.style.opacity = 1;
        item.style.visibility = 'visible';
        item.style.transform = 'translateY(0)';
      } else {
        item.style.opacity = 0;
        item.style.visibility = 'hidden';
        item.style.transform = 'translateY(25%)';
      }
    });
  }
  
  moveLeftBtn.addEventListener('click', function() {
    var prev = current;
    current = (current - 1 + total) % total;
    showItem(current);
  });
  
  moveRightBtn.addEventListener('click', function() {
    var next = current;
    current = (current + 1) % total;
    showItem(current);
  });
  
  showItem(current);
});


function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' 
  });
}

window.addEventListener('scroll', function() {
  console.log('Scroll position:', window.scrollY);
  var scrollToTopBtn = document.getElementById("scrollToTopBtn");
  if (window.scrollY > 300) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});


