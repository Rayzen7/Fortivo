// Scroll bar start
window.addEventListener('scroll', function() {
    const scroll = this.window.scrollY;
    const barSuccess = this.document.querySelector('.quality-progress-bar-success');
    const barDesignSuccess = this.document.querySelector('.design-progress');
    console.log(scroll)

    if (scroll >= 1400) {
        barSuccess.classList.add('active');
        barDesignSuccess.classList.add('active');
    } else {
        barSuccess.classList.remove('active'); 
        barDesignSuccess.classList.remove('active');
    }
});
// Scroll bar end

// Navbar start
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('navbar-list');
    const navbarContent = document.querySelector('.navbar-container');

    hamburger.addEventListener('click', function() {
        navbarContent.classList.toggle('active');
    });
});
// Navbar end

// Fly button start
document.addEventListener('DOMContentLoaded', function () {
    const btnPlus = document.getElementById('fly-btn-plus');
    const flyBtnContent = document.querySelector('.fly-btn-content');
    const flyBtnStack = document.querySelector('.image-stack');

    const iconOpen = './assets/images/gambling-test/fly-btn.svg';
    const iconClose = './assets/images/gambling-test/fly-btn-close.svg';

    btnPlus.addEventListener('click', function () {
        flyBtnStack.classList.toggle('active');
        flyBtnContent.classList.toggle('active');
        
        if (flyBtnStack.classList.contains('active')) {
            btnPlus.src = iconClose;
        } else {
            btnPlus.src = iconOpen;
        }
    });
});
// Fly button end