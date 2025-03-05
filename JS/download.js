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