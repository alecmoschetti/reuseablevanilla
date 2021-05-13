/* carousel module */

/* used https://medium.com/@marcusmichaels/how-to-build-a-carousel-from-scratch-in-vanilla-js-9a096d3b98c9 
as a starting place to get the idea juices flowing */

const photoClass = 'carousel__photo';
const photos = document.getElementsByClassName(photoClass);
const photosLength = photos.length;
const dotsClass = 'dots__svg';
const dots = document.getElementsByClassName(dotsClass);
const dotsLength = dots.length;
let dot = 0;
let slide = 0;
let moving = true;
let autoPlay;

function setPhotoClasses() {
    photos[photosLength - 1].classList.add('prev');
    photos[0].classList.add('active');
    photos[1].classList.add('next');
}

function setDotClasses() {
    dots[dotsLength - 1].classList.add('prev');
    dots[0].classList.add('active');
    dots[1].classList.add('next');
}

function scrollCarousel() {
    if (moving) {
        autoPlay = setInterval(moveNextPhoto, 3000);
    }
}

function goToSpecificSlide() {
    [...dots].forEach(navDot => navDot.addEventListener('click', () => {
        const index = [...dots].indexOf(navDot);
        slide = index;
        dot = index;
        let active = [...document.getElementsByClassName('active')];
        let previous = [...document.getElementsByClassName('prev')];
        let following = [...document.getElementsByClassName('next')];
        active.forEach(activeItem => activeItem.classList.remove('active'));
        previous.forEach(previousItem => previousItem.classList.remove('prev'));
        following.forEach(followingItem => followingItem.classList.remove('next'));
        moveCarouselTo(slide);
        moveDotsTo(dot);
    }));
}

function setEventListeners() {
    let next = document.querySelector('.carousel__button--next');
    let prev = document.querySelector('.carousel__button--prev');
    next.addEventListener('click', () => {
        moveNextPhoto();
        clearInterval(autoPlay);
    });
    prev.addEventListener('click', () => {
        movePrevPhoto();
        clearInterval(autoPlay);
    });
    goToSpecificSlide();
  }

function moveNextPhoto() {
    if (!moving) {
       if (slide === (photosLength - 1)) {
        slide = 0 
        dot = 0;
       } else {
        slide++;
        dot++;
       } 
    }
    moveCarouselTo(slide);
    moveDotsTo(dot);
    moving = false;
}

function movePrevPhoto() {
    if (!moving) {
        if (slide === 0) {
            slide = photosLength - 1;
            dot = dotsLength - 1;
        } else {
            slide--;
            dot--;
        } 
    }
    moveCarouselTo(slide);
    moveDotsTo(dot);
}

function disablePhotoMovement() {
    moving = true;
    setTimeout(() => {
        moving = false;
    }, 500);
}

function moveCarouselTo(slide) {
    if (!moving) {
        disablePhotoMovement();
        let newPrevious = slide - 1;
        let newNext = slide + 1;
        let oldPrevious = slide - 2;
        let oldNext = slide + 2;
        if ((photosLength - 1) > 3) {
            if (newPrevious <= 0) {
                oldPrevious = (photosLength - 1);
            } else if (newNext >= (photosLength - 1)) {
                oldNext = 0;
            }
        if (slide === 0) {
                newPrevious = (photosLength - 1);
                oldPrevious = (photosLength - 2);
                oldNext = (slide + 1);
        } else if (slide === (photosLength - 1)) {
            newPrevious = (slide - 1);
            newNext = 0;
            oldNext = 1;
        }
        photos[oldPrevious].className = photoClass;
        photos[oldNext].className = photoClass;
        photos[newPrevious].className = photoClass + " prev";
        photos[slide].className = photoClass + " active";
        photos[newNext].className = photoClass + " next";
        }
    }
}

function moveDotsTo(dot) {
    let newPrevious = dot - 1;
    let newNext = dot + 1;
    let oldPrevious = dot - 2;
    let oldNext = dot + 2;
    if ((dotsLength - 1) > 3) {
        if (newPrevious <= 0) {
            oldPrevious = (dotsLength - 1);
        } else if (newNext >= (dotsLength - 1)) {
            oldNext = 0;
        }
        if (dot === 0) {
            newPrevious = (dotsLength - 1);
            oldPrevious = (dotsLength - 2);
            oldNext = (dot + 1);
        } else if (dot === (dotsLength - 1)) {
            newPrevious = (dot - 1);
            newNext = 0;
            oldNext = 1;
        }
        dots[oldPrevious].className = dotsClass;
        dots[oldNext].className = dotsClass;
        dots[newPrevious].className = dotsClass + " prev";
        dots[dot].className = dotsClass + " active";
        dots[newNext].className = dotsClass + " next";
    }
}

function initCarousel() {
    setPhotoClasses();
    setDotClasses();
    scrollCarousel();
    setEventListeners();
}

export {initCarousel};