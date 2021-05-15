$(document).ready(function () {

            // logo
    LOGO=()=>{
        $('.logo').removeClass('logo_active');
    }
    if($(window).width() < 861){
        $('.logo').css({
            display:'none'
        });
    }else{
        $('.logo').css({
            display:'block'
        });
    }
    setTimeout(LOGO,2500);
    startBgRemove=()=>{
        $('.start_bg').removeClass('start_bg_active');
        $('.start_bg').css({
            display:'none'
        });
    }
    setTimeout(startBgRemove,2500);
    skillWrap = () => {

        if ($(window).width() > 860) {
            $(window).scroll(function () {
                if ($(window).scrollTop() > 1602) {

                    $('.html_bar').addClass('html_bar_active');
                    $('.css_bar').addClass('css_bar_active');
                    $('.jquery_bar').addClass('jquery_bar_active');
                    $('.javascript_bar').addClass('javascript_bar_active');
                    $('.ps_bar').addClass('ps_bar_active');
                    $('.ai_bar').addClass('ai_bar_active');
                    $('.xd_bar').addClass('xd_bar_active');
                }
                console.log($(window).scrollTop());
            });
        } else {
            $(window).scroll(function () {
                if ($(window).scrollTop() > 2400) {

                    $('.html_bar').addClass('html_bar_active');
                    $('.css_bar').addClass('css_bar_active');
                    $('.jquery_bar').addClass('jquery_bar_active');
                    $('.javascript_bar').addClass('javascript_bar_active');
                    $('.ps_bar').addClass('ps_bar_active');
                    $('.ai_bar').addClass('ai_bar_active');
                    $('.xd_bar').addClass('xd_bar_active');
                }
                console.log($(window).scrollTop());
            });
        }
    }

    skillWrap();
    // 반응형 시 지역변수로 하지 않으면 리사이즈 시 바뀌는 값이 아닌 처음 값을 그대로 사용함
    scroll = () => {
        let introOffset = $('.s1').offset().top,
            skillOffset = $('.s4').offset().top,
            portfolioOffset = $('.s2').offset().top,
            portfolioMob = $('.s2_mob').offset().top,
            personalityOffset = $('.s3').offset().top,
            windowOffset = $(window).scrollTop(),
            windowWidth = $(window).width();
        if (windowWidth >= 861) {
            $('.nav_intro').off('click').on('click', function () {
                $('body, html').animate({
                    scrollTop: 0,
                });
            });
            $('.nav_portfolio').off('click').on('click', function () {
                $('body, html').animate({
                    scrollTop: portfolioOffset - 120,
                });
            });
            $('.nav_personality').off('click').on('click', function () {
                $('body, html').animate({
                    scrollTop: personalityOffset - 120,
                });
            });
            $('.nav_professional').off('click').on('click', function () {
                $('body, html').animate({
                    scrollTop: skillOffset - 120,
                });
            });
        } else if (windowWidth < 860) {
            
            $('.nav_intro').off('click').on('click', function () {
                $('body, html').animate({
                    scrollTop: 0,
                });
            });
            $('.nav_portfolio').off('click').on('click', function () {
                $('body, html').animate({
                    scrollTop: portfolioMob - 120,
                });
                console.log(portfolioOffset);
            });
            $('.nav_personality').off('click').on('click', function () {
                $('body, html').animate({
                    scrollTop: personalityOffset - 120,
                });
            });
            $('.nav_professional').off('click').on('click', function () {
                $('body, html').animate({
                    scrollTop: skillOffset - 120,
                });
            });
        }
    }

    scroll();
    $(window).resize(function () {
        let introOffset = $('.s1').offset().top,
            skillOffset = $('.s4').offset().top,
            portfolioOffset = $('.s2').offset().top,
            portfolioMob = $('.s2_mob').offset().top,
            personalityOffset = $('.s3').offset().top,
            windowOffset = $(window).scrollTop(),
            windowWidth = $(window).width();
        scroll();
        skillWrap();
        if($(window).width() < 861){
            $('.logo').css({
                display:'none'
            });
        }else{
            $('.logo').css({
                display:'block'
            });
        }
    });
    // letter
    $('.letter_img').click(function () {
        $('.act_letter').addClass('letter_act');
        $('body').css({
            overflowY: 'hidden'
        });
    });
    $('.letter_close').click(function () {
        $('.act_letter').removeClass('letter_act');
        $('body').css({
            overflowY: 'scroll'
        });
    })
});