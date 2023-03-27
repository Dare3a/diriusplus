"use strict";

// Toast za poslatu poruku u kontakt formi
// namesteno je na click zbog testa na lokalu u produkciji promeniti na submit
// $(document).ready(function () {
//     $("#form-contact, #form-contact-modal").submit(function () {
//         $(".toast").toast({delay: 1200});
//         $(".toast").toast("show");
//         resetForm();
//     });
// });
//

// Toast za poslatu poruku u kontakt formi
// TODO promeniti click event u produkciji na submit
const toastMsg = document.querySelector('.toast')

function toast() {
    console.log('pokrenut toast')
    toastMsg.classList.replace('hide', 'show')
    setTimeout(() => {
        toastMsg.classList.replace('show', 'hide')

    }, 1200);
}

// Reset kontakt forme i modal kontakt forme
const kontaktForma = document.querySelector("#form-contact")
const kontaktFormaBtn = document.querySelector('.send-dugme')
if (kontaktForma) {
    kontaktFormaBtn.addEventListener('click', toast)
    kontaktFormaBtn.addEventListener('click', resetForm)
}

function resetForm() {
    setTimeout(() => {
        kontaktForma.reset();
    }, 1000);
}


// Otvaranje i zatvaranje hamburgera
const hamburgerImg = document.querySelector('#hamburgerImg');
const hamburger = document.querySelector('#hamburger');
const nav = document.querySelector('#nav');
if (hamburger) {
    hamburger.addEventListener('click', () => {
        if (nav.classList.contains('flex-column')) {
            nav.classList.replace('flex-column', 'd-none')
            hamburgerImg.src = 'images/icons/hamburger.png'
        } else {
            nav.classList.replace('d-none', 'flex-column');
            hamburgerImg.src = 'images/icons/close.png'
        }
    })
}

// Otvaranje i zatvaranje podmenija u navigaciji za mobilni
const padajuciMeni = document.querySelectorAll('#opremaMarketiStrelica, #magacinskePoliceStrelica, #dodatnaOpremaStrelica');
const padajuciMeniLista = document.querySelectorAll('#opremaMarketiMenu, #magacinskePoliceMenu, #dodatnaOpremaMenu');
if (padajuciMeni) {
    padajuciMeni.forEach(item => {
        item.addEventListener('click', (evt) => {
            const index = Array.prototype.indexOf.call(padajuciMeni, item)
            if (padajuciMeniLista[index].classList.contains('show-nav-menu')) {
                padajuciMeniLista[index].classList.remove('show-nav-menu')
            } else {
                padajuciMeniLista[index].classList.add('show-nav-menu');
            }
        })
    })
}

// Slider
// Select all slides
const slides = document.querySelectorAll(".slide-artikli, .slide");

// loop through slides and set each slides translateX
slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${indx * 100}%)`;

});

// select next slide button
const nextSlide = document.querySelector(".btn-next, .btn-next-artikli");

// current slide counter
let curSlide = 0;
// maximum number of slides
let maxSlide;
window.onresize = changeMaxSlides;

changeMaxSlides();


// Ako se u slideru prikazuje jedna slika, ovde staviti length -1, ako se prikazuje vise slika, staviti - broj slika koji se prikazuje
function changeMaxSlides() {
    if (window.innerWidth > 768 && slides[0].classList.contains('slide')) {
        maxSlide = slides.length - 4;

    }
    if (window.innerWidth > 768 && slides[0].classList.contains('slide-artikli')) {
        maxSlide = slides.length - 3;

    } else if (window.innerWidth <= 768) {
        maxSlide = slides.length - 1;

    }

}

// add event listener and navigation functionality
nextSlide.addEventListener("click", function () {
    // check if current slide is the last and reset current slide
    if (curSlide === maxSlide) {
        curSlide = 0;
    } else {
        curSlide++;
    }

    //   move slide by -100%
    slides.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
    });
});

//Auto slide slider
function autoNextSlide() {
    nextSlide.click();

    setTimeout(autoNextSlide, 3000)
}

autoNextSlide();


// select next slide button
const prevSlide = document.querySelector(".btn-prev, .btn-prev-artikli");

// add event listener and navigation functionality
prevSlide.addEventListener("click", function () {
    // check if current slide is the first and reset current slide to last
    if (curSlide === 0) {
        curSlide = maxSlide;
    } else {
        curSlide--;
    }

    //   move slide by 100%
    slides.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
    });
});


