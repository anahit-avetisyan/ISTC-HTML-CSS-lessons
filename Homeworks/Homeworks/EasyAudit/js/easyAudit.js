// $(document).ready(function() {

//     $(".slideShow > div:gt(0)").hide();
 
//  setInterval(function() {
//  $('.slideShow > div:first')
//  .fadeOut(1500)
//  .next()
//  .fadeIn(1500)
//  .end()
//  .appendTo('.slideShow');
//  },  4000);
//  });
var slideIndex = 0;
showSlides();
function showSlides() {
 var slides = document.getElementsByClassName("slideShow")
 for ( let i = 0; i < slides.length; i++) {
   slides[i].style.display = "none";
 };
 slideIndex++;
 if (slideIndex > slides.length) {slideIndex = 1} ;
 slides[slideIndex-1].style.display = "block";
 setTimeout(showSlides, 1500);
};
