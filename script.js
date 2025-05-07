$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
    // Animate sections on scroll
    const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });
  
  document.querySelectorAll('.content-section').forEach(section => {
    observer.observe(section);
  });
    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["TOBEUPDATED", "TOBEUPDATED", "TOBEUPDATED", "TOBEUPDATED"],
        typeSpeed: 100,
        backSpeed: 80,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["TOBEUPDATED", "TOBEUPDATED", "TOBEUPDATED", "TOBEUPDATED"],
        typeSpeed: 100,
        backSpeed: 80,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});
// stats
const counters = document.querySelectorAll('.count');
  counters.forEach(counter => {
    const update = () => {
      const target = +counter.dataset.target;
      const count = +counter.innerText;
      const increment = target / 200;
      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(update, 15);
      } else {
        counter.innerText = target;
      }
    };
    update();
  });
  // stats end