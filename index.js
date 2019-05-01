//carousel
const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel__button--right');
const prevButton = document.querySelector('.carousel__button--left');
const dotsNav = document.querySelector('.carousel__nav');
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;


// arrange the slides next to one another

const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
}
slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}

const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
}

const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
    if (targetIndex === 0) {
        prevButton.classList.add('is-hiden');
        nextButton.classList.remove('is-hiden');
    } else if (targetIndex === slides.length - 1) {
        prevButton.classList.remove('is-hiden');
        nextButton.classList.add('is-hiden');
    } else {
        prevButton.classList.remove('is-hiden');
        nextButton.classList.remove('is-hiden');
    }
}

// when i click left. move to the left
prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const prevDot = currentDot.previousElementSibling;
    const prevIndex = slides.findIndex(slide => slide === prevSlide);


    moveToSlide(track, currentSlide, prevSlide);
    updateDots(currentDot, prevDot);
    hideShowArrows(slides, prevButton, nextButton, prevIndex)

})


// when i click right. move to the right
nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const nextDot = currentDot.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide);

    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);
    hideShowArrows(slides, prevButton, nextButton, nextIndex)
})

// when i click nav indicators. move to thet side


dotsNav.addEventListener('click', e => {
    // what was clicked
    const targetDot = e.target.closest('button');

    if (!targetDot) return;

    const currentSlide = track.querySelector('.current-slide');
    const currentDot = dotsNav.querySelector('.current-slide');
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];

    //calling function
    moveToSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
    hideShowArrows(slides, prevButton, nextButton, targetIndex);
})

// end of carousel

// news li dropdown menu

// const drop = document.querySelector('.news1-li');
// const hidde = document.querySelector('#hidden');
// drop.style.color = 'blue';

// drop.addEventListener('click', e => {

//     // if (hidde.style.display === 'none') {
//     //     hidde.style.display = 'block';
//     // }
//     // elese {
//     hidde.style.display = 'block';
//     // }

console.log(slideWidth)
// })

// const dropul = document.querySelector('.news1-ul');
// dropul.style.color = 'red';



// const currentSlide = track.querySelector('.current-slide');
// const nextSlide = currentSlide.nextElementSibling;
// const currentDot = dotsNav.querySelector('.current-slide');
// const nextDot = currentDot.nextElementSibling;
// const nextIndex = slides.findIndex(slide => slide === nextSlide);

// moveToSlide(track, currentSlide, nextSlide);
// updateDots(currentDot, nextDot);
// hideShowArrows(slides, prevButton, nextButton, nextIndex)

// navabar
function toggle(id, id2) {
    console.log(btn.classList.value)
    // "small-drop-btn is-active"
    if (btn.classList.value === "small-drop-btn") {
        btn.classList.add('is-active');
    } else {
        btn.classList.remove('is-active');
    }


    // btn.classList.add('is-active');


    let n = document.getElementById(id);
    if (n.style.display != 'none') {
        n.style.display = 'none';
        document.getElementById(id2).setAttribute('aria-expanded', 'true');
    } else {
        n.style.display = '';
        document.getElementById(id2).setAttribute('aria-expanded', 'false');
    }
}


// small-drop-btn
// let btn = document.getElementsByClassName('small-drop-btn');

// btn.addEventListener('click', e => {
//             console.log('click sa nava')
//             btn.classList.add('is-active');
//         }

// function togleNavBtn() {
//     btn.classList.add('is-active');
// }

// nextButton.classList.remove('is-hiden');