/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction(){
    var menuBtn = document.getElementById("myNavMenu");

    if(menuBtn.className === "nav-menu"){
      menuBtn.className += " responsive";
    } else {
      menuBtn.className = "nav-menu";
    }
  }

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
  window.onscroll = function() {headerShadow()};

  function headerShadow() {
    const navHeader =document.getElementById("header");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {

      navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
      navHeader.style.height = "70px";
      navHeader.style.lineHeight = "70px";

    } else {

      navHeader.style.boxShadow = "none";
      navHeader.style.height = "90px";
      navHeader.style.lineHeight = "90px";

    }
  }


/* ----- TYPING EFFECT ----- */
 var typingEffect = new Typed(".typedText",{
    strings : ["Web Developer","Frontend Developer"],
    loop : true,
    typeSpeed : 100, 
    backSpeed : 80,
    backDelay : 2000
 })


/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
 const sr = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 2000,
        reset: true     
 })

/* -- HOME -- */
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})


/* -- PROJECT BOX -- */
sr.reveal('.project-box',{interval: 200})

/* -- HEADINGS -- */
sr.reveal('.top-header',{})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
  origin: 'left',
  distance: '80px',
  duration: 2000,
  reset: true
})

srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
  origin: 'right',
  distance: '80px',
  duration: 2000,
  reset: true
})

srRight.reveal('.skills-box',{delay: 100})
srRight.reveal('.form-control',{delay: 100})



/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute('id')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 

        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

    }  else {

      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

    }
  })
}

window.addEventListener('scroll', scrollActive)


//   About Dowlode cv by nav link

  document.getElementById('dowlodeCv').addEventListener('click', function() {
    // Create a link element
    var link = document.createElement('a');
    // Set the URL of the file to be downloaded
    link.href = 'CV/Rinki sharma.pdf';
    // Set the download attribute with a filename
    link.download = 'Rinki_Sharma_Cv.pdf';
    // Append the link to the body
    document.body.appendChild(link);
    // Programmatically click the link to trigger the download
    link.click();
    // Remove the link from the document
    document.body.removeChild(link);
  });

  document.getElementById('Download').addEventListener('click', function() {
    // Create a link element
    var link = document.createElement('a');
    // Set the URL of the file to be downloaded
    link.href = 'CV/Rinki sharma.pdf';
    // Set the download attribute with a filename
    link.download = 'Rinki_Sharma_Cv.pdf';
    // Append the link to the body
    document.body.appendChild(link);
    // Programmatically click the link to trigger the download
    link.click();
    // Remove the link from the document
    document.body.removeChild(link);
  });


//    About Introduction Readmore function

    document.getElementById('ReadMore').addEventListener('click', function() {
      var dots = document.getElementById('LessIntro');
      var moreText = document.getElementById('MoreIntro');
      var btnText = document.getElementById('ReadMore');
      var icon = btnText.querySelector('i');

      if (dots.style.display === 'none') {
        dots.style.display = 'inline';
        btnText.innerHTML = 'Read more <i class="uil uil-angle-down"></i>';
        moreText.style.display = 'none';
      } else {
        dots.style.display = 'none';
        btnText.innerHTML = 'Read less  <i class="uil uil-angle-up"></i>';
        moreText.style.display = 'inline';
      }
    });


//   About theam  changing toggle

const themeToggleBtn = document.getElementById('themeToggleBtn');
const sunIcon = document.getElementById('sunIcon');
const moonIcon = document.getElementById('moonIcon');

themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');
    updateIcons();
});

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('dark-theme');
    sunIcon.classList.add('active');
} else {
    document.body.classList.add('light-theme');
    moonIcon.classList.add('active');
}

function updateIcons() {
    if (document.body.classList.contains('dark-theme')) {
        sunIcon.classList.add('active');
        moonIcon.classList.remove('active');
    } else {
        sunIcon.classList.remove('active');
        moonIcon.classList.add('active');
    }
}















