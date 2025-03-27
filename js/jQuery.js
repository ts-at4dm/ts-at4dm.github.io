jQuery(document).ready(function($){
    $('.slider-img').on('click', function(){
        $('.slider-img').removeClass('active');
        $(this).addClass('active');
    })
});
  window.addEventListener('scroll', function() {
    const homeButton = document.getElementById('homeButton');
    const s2Section = document.getElementById('s2');
    const rect = s2Section.getBoundingClientRect();

    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        homeButton.classList.add('show');
    } else if (rect.top > window.innerHeight) {
        homeButton.classList.remove('show');
    }
});

document.getElementById('homeButton').addEventListener('click', function() {
    document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
});

