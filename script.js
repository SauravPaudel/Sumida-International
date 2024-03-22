$(window).scroll(function() {
    if ($(window).scrollTop() > 10) {
        $('#navBar').addClass('floatingNav');
  
    } else {
        $('#navBar').removeClass('floatingNav');
    }
});

// const activePage = window.location.pathname;
// const navLinks = document.querySelectorAll('nav a').forEach(link => {
//   if(link.href.includes(`${activePage}`)){
//     link.classList.add('active');
//     console.log(link);
//   }
// })


// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

