$(document).ready(function(){


// menu 영역 
    $('#c_s2 .data_wrap > li').each(function(index){
        $(this).attr('menu-data',index);
    });

    $('#c_s2 .menu_wrap >li').each(function(index){
        $(this).attr('menu-data',index);
    });

    $('#c_s2 .menu_wrap >li').click(function(){
        
        var mn = $(this).attr('menu-data');

        $('#c_s2 .data_wrap > li').fadeOut();
        $('#c_s2 .data_wrap > li').eq(mn).fadeIn();

        $('#c_s2 .menu_wrap >li').removeClass();
        $('#c_s2 .menu_wrap >li').eq(mn).addClass('color');

    });

    //메뉴 스크롤 영역 ,스크롤 올릴때 메뉴바가 비정상적 작동 수정할것!
    $(window).scroll(function(){
        var a = $('#c_s2 .menu_wrap').offset().top;
        var scr = $(window).scrollTop();
        var b = $('#c_s2 .data_wrap').offset().top;
        
        console.log(scr);

        if(scr > a){
            $('#c_s2 .menu_wrap').css({
                position:'fixed',
                top:0
            });
        }else if(scr < b){
            $('#c_s2 .menu_wrap').css({
                position:'absolute',
                top:0,
            });
        }

        // if(837 < scr){
        //     $('.menu_wrap').css({
        //         top:scr-837
        //     });
            
        // }else if(scr >= 837){
        //     $('.menu_wrap').css({
        //         top:0
        //     });   
        // }
    });

});