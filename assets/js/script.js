'use strict';



/**
 * MOBILE NAVBAR TOGGLE
 */

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelector("[data-nav-toggler]");

navToggler.addEventListener("click", function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active");
});


// Product section navigation 


document.addEventListener('DOMContentLoaded', function () {
  const categoryButtons = document.querySelectorAll('.category-btn');
  const productCards = document.querySelectorAll('.product-card');

  categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
      const category = button.getAttribute('data-category');
      
      productCards.forEach(card => {
        if (category === 'all' || card.getAttribute('data-category') === category) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
});
