// --- START: FINAL COOKIE SCRIPT ---

window.addEventListener('load', () => {
  const popUp = document.getElementById("cookiePopup");
  const acceptBtn = document.getElementById("acceptCookie");

  // Only proceed if both elements were successfully found
  if (popUp && acceptBtn) {

    // Logic for when the user clicks the accept button
    acceptBtn.addEventListener("click", () => {
      let d = new Date();
      // Set the cookie to expire in 2 minutes
      d.setMinutes(d.getMinutes() + 2);
      document.cookie = "myCookieName=thisIsMyCookie; expires=" + d.toUTCString() + "; path=/";
      // Hide the popup
      popUp.classList.remove("show");
    });

    // Function to check if the cookie exists
    const checkCookie = () => {
      const cookieExists = document.cookie.includes("myCookieName=");
      if (!cookieExists) {
        // If the cookie does NOT exist, show the popup
        popUp.classList.add("show");
      }
    };

    // Wait 2 seconds and then check for the cookie
    setTimeout(checkCookie, 2000);
  }
});

// --- END: FINAL COOKIE SCRIPT ---
 
 
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


  