$(document).ready(function(){


    var s1 = 0;
    var s2 = 0;
    var ww = $(window).width();
    var wh = $(window).height();
    var nav_btn = 0;
///////////////// section_1 슬라이드//////////////////////////////////////////////////////////////
    $('.bg_title').each(function(index){
        $(this).attr('data-index',index);
    }).first().css({
        display:'block'
    });

    $('.btn li').each(function(index){
        $(this).attr('data-index',index);
    }).click(function(){
        a = $(this).attr('data-index');
        

        //버튼
        $('.btn li').removeClass('btn_color');
        $('.btn li').eq(a).addClass('btn_color');
       
        //배경
        $('.bg_title').fadeOut(1000);
        $('.bg_title').eq(a).fadeIn(1000);
    });

    $('.right').click(function(){
        
        
        if(s1==0){
            $('.bg_title').fadeOut(1000);
            $('.header_bg_2').fadeIn(1000);
            $('.btn li').removeClass('btn_color');
            $('.btn li').eq(1).addClass('btn_color');
            s1++;
            console.log(s1);
        }else if(s1==1){
            $('.bg_title').fadeOut(1000);
            $('.header_bg_3').fadeIn(1000);
            $('.btn li').removeClass('btn_color');
            $('.btn li').eq(2).addClass('btn_color');
            s1++;
            console.log(s1);
        }else if(s1==2){
            $('.bg_title').fadeOut(1000);
            $('.header_bg_1').fadeIn(1000);
            $('.btn li').removeClass('btn_color');
            $('.btn li').eq(0).addClass('btn_color');
            s1=0;
            console.log(s1);
        }
    });
    $('.left').click(function(){        
        if(s1==0){
            $('.bg_title').fadeOut(1000);
            $('.header_bg_3').fadeIn(1000);
            $('.btn li').removeClass('btn_color');
            $('.btn li').eq(2).addClass('btn_color');
            s1=2;
            console.log(s1);
        }else if(s1==1){
            $('.bg_title').fadeOut(1000);
            $('.header_bg_2').fadeIn(1000);
            $('.btn li').removeClass('btn_color');
            $('.btn li').eq(1).addClass('btn_color');
            s1--;
            console.log(s1);
        }else if(s1==2){
            $('.bg_title').fadeOut(1000);
            $('.header_bg_1').fadeIn(1000);
            $('.btn li').removeClass('btn_color');
            $('.btn li').eq(0).addClass('btn_color');
            s1--;
            console.log(s1);
        }
    });
    
    setInterval(function(){
        $('.right').trigger('click');
    },3000);


////////////////////////section_1 슬라이드 끝//////////////////////////////////////////////////////


////////////////////////section_2 탭메뉴////////////////////////////////////////////

    $('.section_2_tabmenu li').each(function(index){
        $(this).attr('section_2_data',index);
    });
    $('.section_2_tabbtn li').each(function(index){
        $(this).attr('section_2_data',index);
    }).click(function(){

       tab =  $(this).attr('section_2_data');

            $('.section_2_tabmenu li').css({
                display:'none'
            });
            $('.section_2_tabmenu li').eq(tab).css({
                display:'block',
            });
            if(tab==2){
                $('.section_2').css({
                    height:900
                });
            }else{
                $('.section_2').css({
                    height:500
                });
            }
       $('.section_2_tabbtn li').removeClass('btn_color');
       $('.section_2_tabbtn li').eq(tab).addClass('btn_color');

    });

////////////////////////section_2 탭메뉴 끝////////////////////////////////////////////

    $('.section_4_slidewrap').css({
        width:ww*3,
    });
    $('.section_4_btn_right').click(function(){
        
        if(s2==0){
            $('.section_4_slidewrap').animate({
                left:-ww,
            });
            s2++;
        }else if(s2==1){
            $('.section_4_slidewrap').animate({
                left:-ww*2,
            });
            s2++;
        }else if(s2==2){
            $('.section_4_slidewrap').animate({
                left:0,
            });
            s2=0;
        }
    });

    $('.section_4_btn_left').click(function(){
        
        if(s2==0){
            $('.section_4_slidewrap').animate({
                left:-ww*2
            });
            s2=2;
        }else if(s2==1){
            $('.section_4_slidewrap').animate({
                left:0
            });
            s2--;
        }else if(s2==2){
            $('.section_4_slidewrap').animate({
                left:-ww,
            });
            s2--;
        }
    });

    $('.nav_btn').click(function(){

        if(nav_btn==0){
            
            $('.menu_wrap').animate({
                width:ww,
            });
            $('.nav_btn').css({
                border:'2px solid black' 
            });
            $('.menu_wrap li a').fadeIn();
            $('.nav_btn img').attr({
                src :'img/nav_btn_cancel.png'
            });
            
            nav_btn++;
        }else if(nav_btn==1){
            $('.menu_wrap').animate({
                width:0,
            });
            $('.nav_btn').css({
                border:'2px solid white' 
            });
            $('.menu_wrap li a').fadeOut();
            $('.nav_btn img').attr( {
                src :'img/nav_btn.png'
            });
            nav_btn=0;
        }
    });












});//end