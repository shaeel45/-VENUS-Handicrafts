

// <!-- spinner preloader -->

window.onload = function loader() {
  setTimeout(() => {
    document.getElementById("preloader").style.visibility = "hidden";
    document.getElementById("preloader").style.opacity = "0";
  }, 1000);
};

// <!-- !spinner preloader -->


// <!-- backt to top tooltip  -->

let mybutton = document.getElementById("btn-back-to-top");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// <!-- !backt to top tooltip  -->


// <!-- form validation -->

(() => {
  'use strict'

  const forms = document.querySelectorAll('.needs-validation')

  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()

// <!-- !form validation -->

var swiper = new Swiper(".mySwiper", {

  loop: true,
  grabCursor: true,
  autoplay: {
    delay: 3000
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".mySwiper2", {
  loop: true,
  grabCursor: true,
  autoplay: {
    delay: 4000
  },
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Navbar Scroll Color Change

$(window).scroll(function () {
  var scroll = $(window).scrollTop();

  if (scroll >= 570) {
    $(".navbar").css("background-color", "black")

  }
  else {
    $(".navbar").css("background-color", "transparent")

  }
});


// for(var i = 0; i < carddata.length; i++){
//   document.querySelector("#dataload").innerHTML += `
//     <div class="products-card col-md-4">
//     <div class="card mx-2 my-3">
//                         <div class="card-img">
//                         <img src="assets/${carddata[i].img}" class="card-img-top" alt="...">
//                     </div>
//                         <div class="card-body">
//                             <h5 class="card-title">${carddata[i].Name}</h5>
//                             <h6 class="card-text">${carddata[i].Product}</h6>
//                         </div>
//                     </div>
//                     </div>
//     `;
// }

