$(function () {
	
	var hbg = $('.mobile_menu .header_btn');
    var sideMenu = $('.side_menu');

    hbg.on('click', function () {
        if (hbg.hasClass("active")) {
        hbg.addClass('not-active').removeClass("active");
        sideMenu.removeClass('active');
        $('.black').fadeOut(400).css('display','none');
        } else {
        hbg.addClass('active').removeClass("not-active");
        sideMenu.addClass('active');
        $('.black').fadeIn(400).css('display','block');
        }
    })
    
    const swiper = new Swiper(".mySwiper", {
        loop: true,
        autoplay:{
            delay:3000
        },
    });
});