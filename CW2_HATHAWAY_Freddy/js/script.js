
//Get the button:
mybutton = document.getElementById("myBtn");

// Fuction is created so when the user scrolls 20px down from the top of the document, the button shows
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// Fuction is created to when the user clicks on the button, it scrolls to the top of the page
function topFunction() {
  document.body.scrollTop = 0; // This is for Safari
  document.documentElement.scrollTop = 0; // This is for Chrome, Firefox, IE and Opera
};
