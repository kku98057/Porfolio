$(document).ready(function () {

    var s3 = 0;

    $('#s3 .container .bottom .right img').click(function(){
        
        if(s3==0){
            $('#s3 .container .bottom .right img').attr({
                src:'../img/경상도/경남/전주/한옥.jpeg'
            });
            s3++;
        }else if(s3==1){
            $('#s3 .container .bottom .right img').attr({
                src:'../img/경상도/경남/전주/한옥2.jpg'
            });
            s3=0;
        }
    });
   

    // s4 pc 슬라이드
    function pc() {
        var pww = $(window).width()
        var i = 0;
        
        if (1400 <= pww) {
          
            $('#s4 .container #right').click(function () {
                if (i == 0) {
                    $('.slide_wrap').animate({
                        right: 1400,
                    });
                    i++;
                    console.log(i);

                } else if (i == 1) {
                    $('.slide_wrap').animate({
                        right: 2800,
                    });
                    i++;
                    console.log(i);

                } else if (i == 2) {
                    $('.slide_wrap').animate({
                        right: 0,
                    });
                    i = 0;
                    console.log(i);

                }
            });
            $('#s4 .container #left').click(function () {
                if (i == 0) {
                    $('.slide_wrap').animate({
                        right: 2800,
                    });
                    i = 2;
                    console.log(i);

                } else if (i == 1) {
                    $('.slide_wrap').animate({
                        right: 0
                    });
                    i--;
                    console.log(i);

                } else if (i == 2) {
                    $('.slide_wrap').animate({
                        right: 1400,
                    });
                    i--;
                    console.log(i);

                }
            });
        }
    }
    pc();
    // 타블릿 버전//////
    function tab() {
        var tww = $(window).width()
        var i = 0;

        if (768 <= tww && tww <1400 ) {

            $('#s4 .container #right').click(function () {
                if (i == 0) {
                    $('.slide_wrap').animate({
                        right: 960,
                    });
                    i++;
                    console.log(i);

                } else if (i == 1) {
                    $('.slide_wrap').animate({
                        right: 1920,
                    });
                    i++;
                    console.log(i);

                } else if (i == 2) {
                    $('.slide_wrap').animate({
                        right: 0,
                    });
                    i = 0;
                    console.log(i);

                }
            });

            $('#s4 .container #left').click(function () {
                if (i == 0) {
                    $('.slide_wrap').animate({
                        right: 1920,
                    });
                    i = 2;
                    console.log(i);

                } else if (i == 1) {
                    $('.slide_wrap').animate({
                        right: 0
                    });
                    i--;
                    console.log(i);

                } else if (i == 2) {
                    $('.slide_wrap').animate({
                        right: 960,
                    });
                    i--;
                    console.log(i);

                }
            });
        }
    }
    tab();
    // 모바일 버전//////

    function mob() {
        var mww = $(window).width();
        if (mww < 768) {
            


            // s4 영역
            var bg = 0;
            $('.slide_wrap .bg .inner').each(function (index) {
                $(this).attr('bg-data', index);
            });
            $('.slide_wrap .bg').each(function (index) {
                $(this).attr('bg-data', index);
            }).click(function () {
                inner = $(this).attr('bg-data');
                if (bg == 0) {
                    $('.slide_wrap .bg .inner').eq(inner).fadeIn();
                    bg++;
                } else if (bg == 1) {
                    $('.slide_wrap .bg .inner').fadeOut();
                    bg = 0;
                }
            });

        }
    }
    mob();
    var lang = 0;
            // 모바일버튼
            $('header .btn').click(function () {
                $('.m_menu_wrap').animate({
                    left:0, 
                });
               
                $('body').css({
                    overflowY:'hidden'
                });
            });

            $('.m_menu_wrap > .m_btn').click(function(){
                $('.m_menu_wrap').animate({
                    left:'-90vw'
                });
               
                $('body').css({
                    overflowY:'scroll'
                });
            });

            $('.m_lang_wrap > p').click(function () {

                if(lang==0){
                    $('.m_lang').stop().slideDown();
                    lang++;
                    console.log(lang);
                }else if(lang==1){
                    $('.m_lang').stop().slideUp();
                    lang=0;
                    console.log(lang);
                }
            });

    

    //리사이징
  
    
    
});//end