//global variables
const menuAnchor = document.querySelector('#menuAnchor');
const navMenu = document.querySelector('#navMenu');
const expandedNav = document.querySelector('#expandedNav');

const xSVG = `
    <svg xmlns="http://www.w3.org/2000/svg" id="minimize" class="icon icon-tabler icon-tabler-x animateSVG" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
`;

const menuSVG = `
    <svg xmlns="http://www.w3.org/2000/svg" id="expand" class="icon icon-tabler icon-tabler-menu-2 animateSVG" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <line x1="4" y1="6" x2="20" y2="6" />
        <line x1="4" y1="12" x2="20" y2="12" />
        <line x1="4" y1="18" x2="20" y2="18" />
    </svg>
`

function createSVG(div, svgContent) {
    div.innerHTML = svgContent;
    return div;
}

function findHamburger() {
    const hamburger = document.querySelector('#expand');
    return hamburger;
}

function findMinimize() {
    const closeSVG = document.querySelector('#minimize');
    return closeSVG;
}

function showExpandedNav() {
    const hamburger = findHamburger();
    hamburger.classList.remove('roll-in-right', 'animateSVG');
    hamburger.classList.add('roll-out-left');
    expandedNav.classList.remove('swing-out-left-bck', 'hidden');
    expandedNav.classList.add('swing-in-left-fwd');
    setTimeout(() => {
        hamburger.remove();
        const closeSVG = createSVG(navMenu, xSVG);
        closeSVG.classList.add('roll-in-right');
        menuAnchor.append(closeSVG);
    }, 200);
}

function hideExpandedNav() {
    const closeSVG = findMinimize();
    closeSVG.remove();
    expandedNav.classList.remove('swing-in-left-fwd');
    expandedNav.classList.add('swing-out-left-bck');
    const hamburger = createSVG(navMenu, menuSVG);
    hamburger.classList.add('roll-in-right');
    menuAnchor.append(hamburger); 
    setTimeout(() => {
        expandedNav.classList.add('hidden');
    }, 575);
}

function expandNav(currentID) {
    if (currentID === 'expand') {
        showExpandedNav();
    } else if (currentID === 'minimize' || currentID === null) {
        hideExpandedNav();
    }
}

export {expandNav};