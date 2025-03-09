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