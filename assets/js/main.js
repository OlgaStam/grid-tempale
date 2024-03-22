
// $(document).ready(function () {

//   $('.header-navbar__hamburger').on('click', function () {
//     $(this).toggleClass('active');
//     $('.header-navbar__list').stop(true, true).slideToggle(500);
//   });

// });
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.header-navbar__hamburger');
  const list = document.querySelector('.header-navbar__list');

  if (!btn || !list) return;

  btn.addEventListener('click', () => {
    btn.classList.toggle('header-navbar__hamburger--active');

    if (btn.classList.contains('header-navbar__hamburger--active')) {
      list.classList.add('animate__flipInX');
      list.classList.remove('animate__flipOutX');
    } else {
      list.classList.remove('animate__flipInX');
      list.classList.add('animate__flipOutX');
    }
  });

});
