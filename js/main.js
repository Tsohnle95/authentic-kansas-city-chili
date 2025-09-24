 // Fade in JS
 const observerOptions = {
    root: null,
    rootMargin: '0px 0px -20% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const elementsToAnimate = document.querySelectorAll('.fade-in-element');
  elementsToAnimate.forEach((element) => {
    observer.observe(element);
  });

  // Toggle JS

  const btn = document.querySelector('.toggle-nav');
  const nav = document.querySelector('nav');
  btn.addEventListener('click', (event) => {
    nav.classList.toggle('toggle-nav');
  })

  // scroll to top arrow button

  const scrollButton = document.querySelector('.scroll-to-top');
  const observerTwo = new IntersectionObserver(function(entries) {
    if (entries[0].isIntersecting === false) {
        scrollButton.classList.add('visible');
    }   else {
        scrollButton.classList.remove('visible');
    }
  });

  observerTwo.observe(btn);


  