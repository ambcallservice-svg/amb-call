/* ================= CARDS ANIMATION ================= */

const cards = document.querySelectorAll('.card');

function revealCards(){

    cards.forEach((card,index) => {

        const top = card.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){

            setTimeout(() => {

                card.classList.add('show');

            }, index * 120);

        }

    });

}

window.addEventListener('scroll', revealCards);

window.addEventListener('load', revealCards);


/* ================= NAVBAR SCROLL ================= */

const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {

    if(window.scrollY > 50){

        nav.classList.add('nav-scroll');

    }

    else{

        nav.classList.remove('nav-scroll');

    }

});


/* ================= STATS ANIMATION ================= */

const stats = document.querySelectorAll('.stat-box');

function revealStats(){

    stats.forEach((box,index) => {

        const top = box.getBoundingClientRect().top;

        if(top < window.innerHeight - 80){

            setTimeout(() => {

                box.classList.add('show');

            }, index * 200);

        }

    });

}

window.addEventListener('scroll', revealStats);

window.addEventListener('load', revealStats);


/* ================= ACCESS TITLE ================= */

const title = document.querySelector('.access-title');

window.addEventListener('load', () => {

    title.style.opacity = "1";

    title.style.transform = "translateY(0)";

});


/* ================= ACCESS IMAGE ================= */

const image = document.querySelector('.access-image');

window.addEventListener('load', () => {

    setTimeout(() => {

        image.classList.add('show-image');

    }, 300);

});


/* ================= FEATURE BOXES ================= */

const featureBoxes = document.querySelectorAll('.feature-box');

featureBoxes.forEach((box,index) => {

    box.style.opacity = "0";

    box.style.transform = "translateY(40px)";

    box.style.transition = "0.6s ease";

    setTimeout(() => {

        box.style.opacity = "1";

        box.style.transform = "translateY(0)";

    }, 200 + (index * 120));

});


/* ================= SYSTEM CARDS ================= */

const systemCards = document.querySelectorAll('.system-card');

function revealSystemCards(){

    systemCards.forEach((card,index) => {

        const top = card.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){

            setTimeout(() => {

                card.style.opacity = "1";

                card.style.transform = "translateY(0)";

            }, index * 150);

        }

    });

}

systemCards.forEach(card => {

    card.style.opacity = "0";

    card.style.transform = "translateY(60px)";

    card.style.transition = "0.7s ease";

});

window.addEventListener('scroll', revealSystemCards);

window.addEventListener('load', revealSystemCards);


/* ================= HERO IMAGE FLOAT ================= */

const heroImage = document.querySelector('.hero-right img');

window.addEventListener('mousemove', (e) => {

    let x = (window.innerWidth / 2 - e.pageX) / 40;

    let y = (window.innerHeight / 2 - e.pageY) / 40;

    heroImage.style.transform =
    `translate(${x}px, ${y}px)`;

});


/* ================= BUTTON HOVER EFFECT ================= */

const buttons = document.querySelectorAll('.btn-red, .btn-white');

buttons.forEach(button => {

    button.addEventListener('mouseenter', () => {

        button.style.transform = "translateY(-5px) scale(1.03)";

    });

    button.addEventListener('mouseleave', () => {

        button.style.transform = "translateY(0) scale(1)";

    });

});
/* FOOTER FEATURES ANIMATION */

const footerCards =
document.querySelectorAll('.footer-features li');

footerCards.forEach((card,index)=>{

    card.style.opacity = "0";

    card.style.transform =
    "translateY(50px)";

    card.style.transition =
    "0.7s ease";

});

