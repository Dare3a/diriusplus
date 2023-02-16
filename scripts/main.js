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
