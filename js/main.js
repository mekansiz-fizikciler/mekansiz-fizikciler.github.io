var nav = document.querySelector('nav');

      window.addEventListener('scroll', function () {
        if (window.pageYOffset > 100) {
          nav.classList.add('bg-primary', 'shadow');
        } else {
          nav.classList.remove('bg-primary', 'shadow');
        }
      });

var offset = 80;

      $('.navbar li a').on(click, function(event) {
          event.preventDefault();
          $($(this).attr('href'))[0].scrollIntoView();
          scrollBy(0, -offset);
      });