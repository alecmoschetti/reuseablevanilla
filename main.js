/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/carousel.js":
/*!*************************!*\
  !*** ./src/carousel.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initCarousel\": () => (/* binding */ initCarousel)\n/* harmony export */ });\n/* carousel module */\n\n/* used https://medium.com/@marcusmichaels/how-to-build-a-carousel-from-scratch-in-vanilla-js-9a096d3b98c9 \nas a starting place to get the idea juices flowing */\n\nconst photoClass = 'carousel__photo';\nconst photos = document.getElementsByClassName(photoClass);\nconst photosLength = photos.length;\nconst dotsClass = 'dots__svg';\nconst dots = document.getElementsByClassName(dotsClass);\nconst dotsLength = dots.length;\nlet dot = 0;\nlet slide = 0;\nlet moving = true;\nlet autoPlay;\n\nfunction setPhotoClasses() {\n    photos[photosLength - 1].classList.add('prev');\n    photos[0].classList.add('active');\n    photos[1].classList.add('next');\n}\n\nfunction setDotClasses() {\n    dots[dotsLength - 1].classList.add('prev');\n    dots[0].classList.add('active');\n    dots[1].classList.add('next');\n}\n\nfunction scrollCarousel() {\n    if (moving) {\n        autoPlay = setInterval(moveNextPhoto, 3000);\n    }\n}\n\nfunction goToSpecificSlide() {\n    [...dots].forEach(navDot => navDot.addEventListener('click', () => {\n        const index = [...dots].indexOf(navDot);\n        slide = index;\n        dot = index;\n        let active = [...document.getElementsByClassName('active')];\n        let previous = [...document.getElementsByClassName('prev')];\n        let following = [...document.getElementsByClassName('next')];\n        active.forEach(activeItem => activeItem.classList.remove('active'));\n        previous.forEach(previousItem => previousItem.classList.remove('prev'));\n        following.forEach(followingItem => followingItem.classList.remove('next'));\n        moveCarouselTo(slide);\n        moveDotsTo(dot);\n    }));\n}\n\nfunction setEventListeners() {\n    let next = document.querySelector('.carousel__button--next');\n    let prev = document.querySelector('.carousel__button--prev');\n    next.addEventListener('click', () => {\n        moveNextPhoto();\n        clearInterval(autoPlay);\n    });\n    prev.addEventListener('click', () => {\n        movePrevPhoto();\n        clearInterval(autoPlay);\n    });\n    goToSpecificSlide();\n  }\n\nfunction moveNextPhoto() {\n    if (!moving) {\n       if (slide === (photosLength - 1)) {\n        slide = 0 \n        dot = 0;\n       } else {\n        slide++;\n        dot++;\n       } \n    }\n    moveCarouselTo(slide);\n    moveDotsTo(dot);\n    moving = false;\n}\n\nfunction movePrevPhoto() {\n    if (!moving) {\n        if (slide === 0) {\n            slide = photosLength - 1;\n            dot = dotsLength - 1;\n        } else {\n            slide--;\n            dot--;\n        } \n    }\n    moveCarouselTo(slide);\n    moveDotsTo(dot);\n}\n\nfunction disablePhotoMovement() {\n    moving = true;\n    setTimeout(() => {\n        moving = false;\n    }, 500);\n}\n\nfunction moveCarouselTo(slide) {\n    if (!moving) {\n        disablePhotoMovement();\n        let newPrevious = slide - 1;\n        let newNext = slide + 1;\n        let oldPrevious = slide - 2;\n        let oldNext = slide + 2;\n        if ((photosLength - 1) > 3) {\n            if (newPrevious <= 0) {\n                oldPrevious = (photosLength - 1);\n            } else if (newNext >= (photosLength - 1)) {\n                oldNext = 0;\n            }\n        if (slide === 0) {\n                newPrevious = (photosLength - 1);\n                oldPrevious = (photosLength - 2);\n                oldNext = (slide + 1);\n        } else if (slide === (photosLength - 1)) {\n            newPrevious = (slide - 1);\n            newNext = 0;\n            oldNext = 1;\n        }\n        photos[oldPrevious].className = photoClass;\n        photos[oldNext].className = photoClass;\n        photos[newPrevious].className = photoClass + \" prev\";\n        photos[slide].className = photoClass + \" active\";\n        photos[newNext].className = photoClass + \" next\";\n        }\n    }\n}\n\nfunction moveDotsTo(dot) {\n    let newPrevious = dot - 1;\n    let newNext = dot + 1;\n    let oldPrevious = dot - 2;\n    let oldNext = dot + 2;\n    if ((dotsLength - 1) > 3) {\n        if (newPrevious <= 0) {\n            oldPrevious = (dotsLength - 1);\n        } else if (newNext >= (dotsLength - 1)) {\n            oldNext = 0;\n        }\n        if (dot === 0) {\n            newPrevious = (dotsLength - 1);\n            oldPrevious = (dotsLength - 2);\n            oldNext = (dot + 1);\n        } else if (dot === (dotsLength - 1)) {\n            newPrevious = (dot - 1);\n            newNext = 0;\n            oldNext = 1;\n        }\n        dots[oldPrevious].className = dotsClass;\n        dots[oldNext].className = dotsClass;\n        dots[newPrevious].className = dotsClass + \" prev\";\n        dots[dot].className = dotsClass + \" active\";\n        dots[newNext].className = dotsClass + \" next\";\n    }\n}\n\nfunction initCarousel() {\n    setPhotoClasses();\n    setDotClasses();\n    scrollCarousel();\n    setEventListeners();\n}\n\n\n\n//# sourceURL=webpack://reuse/./src/carousel.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initEventListeners\": () => (/* binding */ initEventListeners)\n/* harmony export */ });\n/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav */ \"./src/nav.js\");\n\n\n\n//global variables\nconst body = document.querySelector('body');\nconst main = document.querySelector('main');\nconst carousel = document.querySelector('.carousel');\nconst formContainer = document.querySelector('.form__container');\n\nfunction hideElement(arrEl) {\n    arrEl.forEach(element => element.classList.add('hidden'));\n}\n\nfunction showElement(el) {\n    el.classList.remove('hidden');\n}\n\nfunction setHeading(el, text) {\n    el.innerHTML = `${text}`;\n}\n\nfunction initEventListeners() { \n    body.addEventListener('click', (e) => {\n        let h1 = main.querySelector('h1');\n        const id = e.target.id;\n        const parentID = e.target.parentNode.id;\n        if (id === 'expand' || id === 'minimize') {\n            (0,_nav__WEBPACK_IMPORTED_MODULE_0__.expandNav)(id);\n        } else if (id === 'alienForm') {\n            hideElement([carousel]);\n            showElement(formContainer);\n            setHeading(h1, 'VOLUNTEER FOR ALIEN ABDUCTION');\n        } else if (parentID === 'carousel') {\n            hideElement([formContainer]);\n            showElement(carousel);\n            setHeading(h1, 'VANILLA JS CAROUSEL');\n        } else if (parentID === 'visit') {\n            hideElement([carousel, formContainer]);\n            (0,_nav__WEBPACK_IMPORTED_MODULE_0__.expandNav)();\n            setHeading(h1, 'VISIT');\n        } else if (parentID === 'about') {\n            hideElement([carousel, formContainer]);\n            (0,_nav__WEBPACK_IMPORTED_MODULE_0__.expandNav)();\n            setHeading(h1, 'ABOUT');\n        } else if (parentID === 'contact') {\n            hideElement([carousel, formContainer]);\n            (0,_nav__WEBPACK_IMPORTED_MODULE_0__.expandNav)();\n            setHeading(h1, 'CONTACT');\n        } else if (parentID === 'support') {\n            hideElement([carousel, formContainer]);\n            (0,_nav__WEBPACK_IMPORTED_MODULE_0__.expandNav)();\n            setHeading(h1, 'SUPPORT');\n        } else {\n            return;\n        }\n    });\n}\n\n \n\n//# sourceURL=webpack://reuse/./src/dom.js?");

/***/ }),

/***/ "./src/form.js":
/*!*********************!*\
  !*** ./src/form.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initFormValidation\": () => (/* binding */ initFormValidation)\n/* harmony export */ });\n//global variables\nconst form = document.querySelector('form');\nconst email = document.querySelector('#email');\nconst checkbox = document.querySelector('#account');\nconst accountInfo = document.querySelector('#accountInfo');\nconst username = document.querySelector('#username');\nconst password = document.querySelector('#password');\nconst passwordConfirm = document.querySelector('#passwordCheck');\nconst submit = document.querySelector('#submitButton');\nconst firstnameError = document.querySelector('#firstname + span.error');\nconst lastnameError = document.querySelector('#lastname + span.error');\nconst emailError = document.querySelector('#email + span.error');\nconst usernameError = document.querySelector('#username + span.error');\nconst passwordError = document.querySelector('#password + span.error');\nconst passwordConfirmError = document.querySelector('#passwordCheck + span.error');\nconst submitError = document.querySelector('#submitButton + span.error');\n\n//regex variables\nconst nameRegX = /\\b[A-Za-z]{2,18}\\b/;\nconst emailRegX = /^[^@]+@\\w+(\\.\\w+)+\\w$/;\nconst usernameRegX = /^(?=.{4,20}$)(?:[a-zA-Z\\d]+(?:(?:\\.|-|_)[a-zA-Z\\d])*)+$/gi;\nconst passwordRegX = /^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{6,16}$/;\n\n//type mismatch string variables\nconst nameMismatch = 'No numbers or special characters'\nconst emailMismatchString = 'Entered value needs to be an e-mail address.';\nconst usernameMismatchString = 'Entered value needs to be a name';\nconst passwordMismatchString = 'Must contain letters, numbers, and a special character';\nconst passwordConfirmMistmatchString = 'Passwords do not match'\n\n\nfunction showError(input, error, mismatch) {\n    if(input.validity.valueMissing) {\n      // If the field is empty\n      // display the following error message.\n      error.textContent = 'You need to enter a value';\n    } else if(input.validity.typeMismatch) {\n      // If the field doesn't contain a proper input for that input type\n      // display the following error message.\n      error.textContent = mismatch;\n    } else if(input.validity.tooShort) {\n      // If the data is too short\n      // display the following error message.\n      error.textContent = `Input should be at least ${input.minLength} characters; you entered ${input.value.length}`;\n    } else if (input.validity.tooLong) {\n        error.textContent = `Input can't be above ${input.maxLength} characters; you entered ${input.value.length}`\n    } else if (input.validity.patternMismatch) {\n        error.textContent = mismatch;\n    } else if (input.id === 'passwordCheck') {\n        error.textContent = passwordConfirmMistmatchString;\n    } else if (input.id === 'submitButtton') {\n        error.textContent = 'mismatch';\n    }\n    // Set the styling appropriately\n    error.className = 'error active';\n  }\n\nfunction hideError(error) {\n    error.textContent = '';\n    error.className = 'error'\n}\n\nfunction accountAttributes(bool) {\n    if (bool) {\n        username.setAttribute('required', 'required');\n        password.setAttribute('required', 'required');\n        passwordConfirm.setAttribute('required', 'required');\n    } else if (!bool) {\n        username.removeAttribute('required');\n        username.setCustomValidity('');\n        username.value = '';\n        password.removeAttribute('required');\n        password.setCustomValidity('');\n        password.value = '';\n        passwordConfirm.removeAttribute('required');\n        passwordConfirm.setCustomValidity('');\n        passwordConfirm.value = '';\n    }\n}\n\nfunction initFormValidation() {\n    form.addEventListener('input', (e) => {\n        const target = e.target;\n        const id = target.id;\n        accountAttributes(checkbox.checked);\n        if (id === 'firstname' || id === 'lastname') {\n            if (nameRegX.test(target.value)) {\n                target.setCustomValidity('');\n                hideError(firstnameError);\n                hideError(lastnameError);\n            } else {\n                target.setCustomValidity('invalid');\n                (id === 'firstname') ? showError(target, firstnameError, nameMismatch) : showError(target, lastnameError, nameMismatch);\n            }\n        } else if (id === 'email') {\n            if (emailRegX.test(target.value)) {\n                email.setCustomValidity('');\n                hideError(emailError);\n            } else {\n                email.setCustomValidity(\"invalid\");\n                showError(target, emailError, emailMismatchString);\n            }\n        } else if (id === 'account') {\n            accountInfo.classList.toggle('hidden');\n        } else if (id === 'username') {\n            if (usernameRegX.test(target.value)) {\n                username.setCustomValidity('');\n                hideError(usernameError);\n            } else {\n                username.setCustomValidity(\"invalid\");\n                showError(target, usernameError, usernameMismatchString);\n            }\n        } else if (id === 'password') {\n            if (passwordRegX.test(target.value)) {\n                password.setCustomValidity('');\n                hideError(passwordError);\n            } else {\n                password.setCustomValidity(\"invalid\");\n                showError(target, passwordError, passwordMismatchString);\n            }\n        } else if (id === 'passwordCheck') {\n            if (password.value === passwordConfirm.value) {\n                passwordConfirm.setCustomValidity('');\n                hideError(passwordConfirmError);\n            } else {\n                passwordConfirm.setCustomValidity(\"invalid\");\n                showError(target, passwordConfirmError, passwordConfirmMistmatchString);\n            }\n        }\n    });\n    \n    submit.addEventListener('click', e => {\n        e.preventDefault();\n        if (!checkbox.checked) {\n            accountAttributes(false);\n        }\n        const formInputs = [...document.querySelectorAll('form input')];\n        const failed = formInputs.filter(input => !input.validity.valid);\n        if (failed.length > 0) {\n            submitError.classList.add('active');\n            submitError.textContent = 'Please fill out all required inputs properly';\n        } else {\n            submitError.textContent = '';\n            submitError.classList.remove('active');\n            form.reset();\n        }\n    });\n}\n\n\n\n\n\n//# sourceURL=webpack://reuse/./src/form.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./carousel */ \"./src/carousel.js\");\n/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form */ \"./src/form.js\");\n\n\n\n\n(0,_dom__WEBPACK_IMPORTED_MODULE_0__.initEventListeners)();\n(0,_form__WEBPACK_IMPORTED_MODULE_2__.initFormValidation)();\n(0,_carousel__WEBPACK_IMPORTED_MODULE_1__.initCarousel)(); \n\n\n\n\n\n//# sourceURL=webpack://reuse/./src/index.js?");

/***/ }),

/***/ "./src/nav.js":
/*!********************!*\
  !*** ./src/nav.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"expandNav\": () => (/* binding */ expandNav)\n/* harmony export */ });\n//global variables\nconst menuAnchor = document.querySelector('#menuAnchor');\nconst navMenu = document.querySelector('#navMenu');\nconst expandedNav = document.querySelector('#expandedNav');\n\nconst xSVG = `\n    <svg xmlns=\"http://www.w3.org/2000/svg\" id=\"minimize\" class=\"icon icon-tabler icon-tabler-x animateSVG\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"#000000\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n        <path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/>\n        <line x1=\"18\" y1=\"6\" x2=\"6\" y2=\"18\" />\n        <line x1=\"6\" y1=\"6\" x2=\"18\" y2=\"18\" />\n    </svg>\n`;\n\nconst menuSVG = `\n    <svg xmlns=\"http://www.w3.org/2000/svg\" id=\"expand\" class=\"icon icon-tabler icon-tabler-menu-2 animateSVG\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"#000000\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n        <path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/>\n        <line x1=\"4\" y1=\"6\" x2=\"20\" y2=\"6\" />\n        <line x1=\"4\" y1=\"12\" x2=\"20\" y2=\"12\" />\n        <line x1=\"4\" y1=\"18\" x2=\"20\" y2=\"18\" />\n    </svg>\n`\n\nfunction createSVG(div, svgContent) {\n    div.innerHTML = svgContent;\n    return div;\n}\n\nfunction findHamburger() {\n    const hamburger = document.querySelector('#expand');\n    return hamburger;\n}\n\nfunction findMinimize() {\n    const closeSVG = document.querySelector('#minimize');\n    return closeSVG;\n}\n\nfunction showExpandedNav() {\n    const hamburger = findHamburger();\n    hamburger.classList.remove('roll-in-right', 'animateSVG');\n    hamburger.classList.add('roll-out-left');\n    expandedNav.classList.remove('swing-out-left-bck', 'hidden');\n    expandedNav.classList.add('swing-in-left-fwd');\n    setTimeout(() => {\n        hamburger.remove();\n        const closeSVG = createSVG(navMenu, xSVG);\n        closeSVG.classList.add('roll-in-right');\n        menuAnchor.append(closeSVG);\n    }, 200);\n}\n\nfunction hideExpandedNav() {\n    const closeSVG = findMinimize();\n    closeSVG.remove();\n    expandedNav.classList.remove('swing-in-left-fwd');\n    expandedNav.classList.add('swing-out-left-bck');\n    const hamburger = createSVG(navMenu, menuSVG);\n    hamburger.classList.add('roll-in-right');\n    menuAnchor.append(hamburger); \n    setTimeout(() => {\n        expandedNav.classList.add('hidden');\n    }, 575);\n}\n\nfunction expandNav(currentID) {\n    if (currentID === 'expand') {\n        showExpandedNav();\n    } else if (currentID === 'minimize' || currentID === null) {\n        hideExpandedNav();\n    }\n}\n\n\n\n//# sourceURL=webpack://reuse/./src/nav.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;