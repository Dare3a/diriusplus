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
    kontaktForma.addEventListener('submit', toast)
    kontaktForma.addEventListener('submit', resetForm)
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
    console.log(hamburgerImg);
    hamburger.addEventListener('click', () => {
        if (nav.classList.contains('flex-column')) {
            nav.classList.replace('flex-column', 'd-none')
            hamburgerImg.classList.replace('hamburgerX', 'hamburgerHam')
            hamburgerImg.innerHTML = '&equiv;'
        } else {
            nav.classList.replace('' +
                'd-none', 'flex-column');
            hamburgerImg.classList.replace('hamburgerHam', 'hamburgerX')
            hamburgerImg.innerHTML = 'x'
        }
    })
}

// Otvaranje i zatvaranje podmenija u navigaciji za mobilni
const padajuciMeni = document.querySelectorAll('#opremaMarketiStrelica, #magacinskePoliceStrelica, #dodatnaOpremaStrelica');
const padajuciMeniLista = document.querySelectorAll('#opremaMarketiMenu, #magacinskePoliceMenu, #dodatnaOpremaMenu');
if (padajuciMeni) {
    padajuciMeni.forEach(item => {
        item.addEventListener('click', () => {
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
const slidesModal = document.querySelectorAll(".slide-md")
const modal = document.querySelector('.md-modal')
// loop through slides and set each slides translateX
slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${indx * 100}%)`;
})
slidesModal.forEach((slide, indx) => {
    slide.style.transform = `translateX(${indx * 100}%)`;
});

// select next slide button
const nextSlideBtn = document.querySelectorAll(".btn-next, .btn-next-artikli, .btn-next-md");

// current slide counter
let curSlide = 0;
let curSlideModal = 0;
// maximum number of slides
let maxSlide;
let maxSlideModal;
window.onresize = changeMaxSlides;

changeMaxSlides();


// Ako se u slideru prikazuje jedna slika, ovde staviti length -1, ako se prikazuje vise slika, staviti - broj slika koji se prikazuje
function changeMaxSlides() {
    if (slides.length > 0) {
        console.log('usao u changeMaxSlides');
        if (window.innerWidth > 768 && slides[0].classList.contains('slide')) {
            maxSlide = slides.length - 4;
        }
        if (slidesModal.length > 0) {
            if (window.innerWidth > 768 && slidesModal[0].classList.contains('slide-md')) {
                maxSlideModal = slidesModal.length - 1;
            }
        }
        if (window.innerWidth > 768 && slides[0].classList.contains('slide-artikli')) {
            maxSlide = slides.length - 2;

        } else if (window.innerWidth <= 768) {
            maxSlide = slides.length - 1;
            maxSlideModal = slidesModal.length - 1;

        }
    }


}

// add event listener and navigation functionality
nextSlideBtn.forEach(button => {
    button.addEventListener("click", function () {
        nextSlide(button)
    });
})

const nextSlide = (element) => {
    // check if current slide is the last and reset current slide
    if (curSlide === maxSlide) {
        console.log('curSlide 0')
        curSlide = 0;
    } else {
        curSlide++;
    }
    if (curSlideModal === maxSlideModal) {
        curSlideModal = 0;
    } else if (element.classList.contains('btn-next-md')) {
        curSlideModal++;
    }

    //   move slide by -100%
    slides.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
    });
    slidesModal.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100 * (indx - curSlideModal)}%)`;
    });
}

//Auto slide slider
function autoNextSlide() {
    nextSlideBtn.forEach(slide => {
        if (slide.classList.contains('btn-next-artikli')) {
            slide.click()
        }
        if (slide.classList.contains('btn-next')) {
            slide.click()
        }
    });

    isModal()
}

function isModal() {
    if (modal) {
        if (!modal.classList.contains('md-show')) {
            console.log('if');
            setTimeout(autoNextSlide, 3000)
        }
    } else if (!modal) {
        setTimeout(autoNextSlide, 3000)
    }
}

isModal();

// select next slide button
const prevSlideBtn = document.querySelectorAll(".btn-prev, .btn-prev-artikli, .btn-prev-md");

// add event listener and navigation functionality
prevSlideBtn.forEach(button => {
    button.addEventListener("click", function () {
        prevSlide()
    });
})

const prevSlide = () => {
    // check if current slide is the first and reset current slide to last
    if (curSlide === 0) {
        curSlide = maxSlide;
    }
    if (curSlideModal === 0) {
        curSlideModal = maxSlideModal;
    } else {
        curSlide--;
        curSlideModal--;
    }

    //   move slide by 100%
    slides.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
    });
    slidesModal.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100 * (indx - curSlideModal)}%)`;
    });
};

// OTVARANJE MODALA
const otvaranjeModala = () => {
    if (slides.length > 0) {
        if (slides[0].classList.contains('slide-artikli')) {
            const slidesArray = Array.prototype.slice.call(slides)
            slides.forEach(slide => {
                slide.addEventListener('click', () => {

                    modal.classList.add('md-show')
                    curSlideModal = slidesArray.indexOf(slide)
                    slidesModal.forEach((slide, indx) => {
                        slide.style.transform = `translateX(${100 * (indx - curSlideModal)}%)`;
                    });
                    isModal()
                })
            })
        }
    }
}

otvaranjeModala()


// ZATVARANJE MODALA
const modalCloseBtn = document.querySelector('.close-btn-md');
if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', () => {
        modal.classList.remove('md-show')
        isModal();
    });
}

// SCROLL TO TOP
document.addEventListener("DOMContentLoaded", function (event) {

    const button = document.querySelector('#scroll-top');

    button.addEventListener('click', function () {
        window.scrollTo({top: 0, left: 0, behavior: "smooth"});
    });

    // window.addEventListener('scroll', function () {
    //     if (window.scrollY < 200) {
    //         button.style.opacity = "0";
    //     } else {
    //         button.style.opacity = "1";
    //     }
    // });

});

// MOBILE SLIDER SWIPE
document.addEventListener('DOMContentLoaded', () => {
    const artikliSlider = document.querySelector('.slider-artikli');
    if (artikliSlider) {
        // touchstart
        let touchstartX = 0;
        let touchendX = 0;

        artikliSlider.addEventListener('touchstart', (evt) => {
            touchstartX = evt.changedTouches[0].screenX;
            console.log(touchstartX);
        })
        // touchend
        artikliSlider.addEventListener('touchend', (evt) => {
            touchendX = evt.changedTouches[0].screenX;

            console.log(touchendX);
            changeSwapDirection();
        })


        const changeSwapDirection = () => {
            if (touchstartX < touchendX) {
                console.log('desno')
                console.log(nextSlideBtn)
                nextSlide(nextSlideBtn[1])
            } else if (touchstartX > touchendX) {
                console.log('levo');
                prevSlide()
            } else {
                console.log('sredina')
            }
        }
    }
})
