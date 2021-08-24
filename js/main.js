var nav = document.querySelector('nav');

      window.addEventListener('scroll', function () {
        if (window.pageYOffset > 100) {
          nav.classList.add('shadow');
        } else {
          nav.classList.remove('shadow');
        }
      });

var offset = 80;

      $('.navbar li a').on(click, function(event) {
          event.preventDefault();
          $($(this).attr('href'))[0].scrollIntoView();
          scrollBy(0, -offset);
      });