AOS.init({
    offset: 400,
    duration: 1000
});
$(document).ready(() => {
    
    $('#work-button').click(() => {
        $("html, body").animate({ scrollTop: $('#my-works').offset().top }, 1000);
    }); 
    $(window).scroll(function(){
        const scroll = $(window).scrollTop();
        if (scroll > 300) {
            $(".nav-bar").addClass('is-scrolled');  
        }

        else{
            $(".nav-bar").removeClass('is-scrolled');	
        }
    });
    const date = new Date();
    document.getElementById('current-year').innerHTML = date.getFullYear();
    document.getElementById('hamburger-icon').addEventListener('click', function() {
        let navContainer = document.getElementsByClassName('nav-container');
        navContainer[0].classList.toggle('open');
    });
})
                                                                                                                                                                                                                                                                                                                