const header = document.querySelector('header');
const main = document.querySelector('main');
const overlay = document.querySelector('.overlay');

const signUpBtn = document.querySelector('button#sign-up');
const reachedBtn = document.querySelector('button#reached');
const overlayCloseBtn = document.querySelector('img#overlay-close');

const buttons = [signUpBtn, reachedBtn];

/* main.addEventListener('click', () => {
    console.log(window.scrollY, window.pageYOffset)
}) */

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        main.classList.add('blur');
        header.classList.add('blur');
        overlay.classList.remove('hidden');
        disableScroll()
    })
})

overlayCloseBtn.addEventListener('click', () => {
    main.classList.remove('blur');
    header.classList.remove('blur');
    overlay.classList.add('hidden');
    enableScroll();
})


function disableScroll() {
    let scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;

    document.addEventListener('wheel', preventDefaultScroll, { passive: false });
    document.addEventListener('touchmove', preventDefaultScroll, { passive: false });

    window.scrollTo(0, scrollPosition);

    /* window.addEventListener('scroll', 
        (e) => {
            e.preventDefault();
            e.stopPropagation();
            window.scrollTo(0, scrollPosition);
        }, {passive: false}
    )
    */
}

function preventDefaultScroll(e) {
    e.preventDefault();
    e.stopPropagation();
}

function enableScroll() {
    document.removeEventListener('wheel', preventDefaultScroll);
    document.removeEventListener('touchmove', preventDefaultScroll);
    document.body.classList.remove('disable-scroll');
}

const ctnFeatures = document.querySelector('.all-features');
const featuresObserver = new IntersectionObserver(revealFeatures, {root: null, threshold: 0.60});

function revealFeatures(entries, observer) {
    const [entry] = entries;
    if(!entry.isIntersecting) return;
    Array.from(entry.target.children).forEach(ft => {ft.classList.remove('hiddenx')})
    observer.unobserve(entry.target);
}

featuresObserver.observe(ctnFeatures)

const allBenefits = document.querySelectorAll('.benefit');
const benefitsObserver = new IntersectionObserver(revealBenefits, {root: null, threshold: 1, rootMargin: "-150px"});

function revealBenefits(entries, observer) {
    const [entry] = entries;
    if(!entry.isIntersecting) return;
    entry.target.classList.remove('hiddenx');
    observer.unobserve(entry.target)
}

allBenefits.forEach(bn => {benefitsObserver.observe(bn)})

const personsReachedHTML = document.querySelector('.persons-reached');
let personsReached = 1500678;
// let randomTime = Math.ceil(Math.random() * (6000 - 500)) + 500;
personsReachedHTML.textContent = personsReached;

setInterval(() => {
    personsReached += Math.floor(Math.random() * 6);
    personsReachedHTML.textContent = personsReached;
    // randomTime = Math.ceil(Math.random() * (6000 - 500)) + 500;
}, 4000)

