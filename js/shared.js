const modeImages = Array.from(document.querySelectorAll('.nav__mode-image'));
const scrollUp = document.querySelector(".scroll-up");
const hamburgerButton = document.querySelector(".nav__hamburger");
const homeImage = document.querySelector(".home__image-container");
const logos = Array.from(document.querySelectorAll(".nav__logo"));
const mobileNavigation = document.querySelector('.nav__mobile-navigation');
const backdrop = document.querySelector('.backdrop');
const infoBox = document.querySelector('.contact__map img');
const navItems = Array.from(document.querySelectorAll('.nav__mobile-navigation-item'));

//console.log(infoBox) // PROMISE ?

const toggleMobileNavigation = () => {
    backdrop.classList.toggle('backdrop--open');
    mobileNavigation.classList.toggle('nav__mobile-navigation--open');
    navItems.forEach(item => {
        item.classList.toggle('nav__item-animation');
    })
}

const openMobileNavigation = () => {
    hamburgerButton.classList.toggle("nav__hamburger--open");
    toggleMobileNavigation();
}

// MAIN DARK/LIGH MODE FUNC
modeImages.forEach(image => {
    image.addEventListener('click', () => {
        changeImage();
        trans(image);
        image.classList.add("nav__pop-up");
        document.documentElement.toggleAttribute("dark-mode");

        if(document.documentElement.hasAttribute("dark-mode")) {
            localStorage.setItem("mode", "dark-mode");
            localStorage.setItem("mainImage", "url('assets/bike-w.png')");
            localStorage.setItem("modeImage", "assets/sunny.png");
            localStorage.setItem("logo", "assets/logo-w.png");
        } else {
            localStorage.setItem("mode", "light-mode");
            localStorage.setItem("mainImage", "url('assets/bike-b.png')");
            localStorage.setItem("modeImage", "assets/half-moon.png");
            localStorage.setItem("logo", "assets/logo-b.png");
        }
    });
});

const getMode = () => {

    const mode = localStorage.getItem('mode');
    const logoSrc = localStorage.getItem('logo');

    document.documentElement.toggleAttribute(mode);
    logos.forEach(logo => {
        logo.src = logoSrc;
    })
}

// MAKE TRANSITION WHEN CHANGING DARK/LIGHT
const trans = image => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition');
        image.classList.remove("nav__pop-up");
    },1000);
}

// CHANGE IMAGE ON TOGGLE DARK/LIGHT MODE
const changeImage = () => {

    const mode = localStorage.getItem('mode');

    modeImages.forEach(image => {
        image.src = image.src.includes("assets/half-moon.png") ? 
        "assets/sunny.png": 
        "assets/half-moon.png";
    });
    
    logos.forEach(logo => {
        logo.src = logo.src.includes("assets/logo-b.png") ? 
        "assets/logo-w.png" : 
        "assets/logo-b.png";
    })

    let glow = document.querySelector('.glow');

    if(homeImage) {
        if(glow) {
            console.log("glow")
            glow.remove();
        } else {
            let glow = document.createElement('div');
            glow.classList.add('glow');
            homeImage.append(glow);
        }
    } else {
        return;
    }


        // if(!homeImage || homeImage && (mode === "dark-mode" || !mode)) {
    //     let glow = document.createElement('div');
    //     glow.classList.add('glow');
    //     homeImage.append(glow);
    // } else {
    //     let glow = document.querySelector('.glow');
    //     glow.remove();
    // }
} 

const setLogo = () => {

    const logoSrc = localStorage.getItem('logo');

    if(logoSrc) {
        logos.forEach(logo => {
            logo.src = logoSrc;
        });
    } else {
        logos.forEach(logo => {
            logo.src = "assets/logo-b.png";
        });
    };
}

const setMode = () => {

    const modeImg = localStorage.getItem('modeImage');

    if(modeImg) {
        console.log(modeImg)
        modeImages.forEach(img => {
            img.src = modeImg.includes("assets/half-moon.png") ? 
            "assets/sunny.png" : 
            "assets/half-moon.png";
        });
    } else {
        modeImages.forEach(img => {
            img.src = "assets/sunny.png";
        });
    };
}

const showScrollUpButton = () => {

    document.body.scrollTop > 128 || document.documentElement.scrollTop > 128 ?
    scrollUp.classList.add("scroll-up--open") :
    scrollUp.classList.remove("scroll-up--open")
}


window.addEventListener("scroll", showScrollUpButton);
hamburgerButton.addEventListener("click", openMobileNavigation);
getMode();
setLogo();
setMode();

