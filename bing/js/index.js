$(document).ready(function(){

    var sb = 0;
    

    $('.nb2_bg div').each(function(index){
        $(this).attr('index-data',index);
    });
    $('.slide_nb').each(function(index){
        $(this).attr('index-data',index);
    });

    $('.slide_btn li').each(function(index){
        $(this).attr('index-data',index);
    }).click(function(){
        i = $(this).attr('index-data');

        //화면
        $('.slide_nb').fadeOut();
        $('.slide_nb').eq(i).fadeIn();

        //버튼
        $('.slide_btn li').removeClass('slide_btn_color');
        $('.slide_btn li').eq(i).addClass('slide_btn_color');

        //inner
        
        //banner img
    });

    $('.slide_right').click(function(){
        
        if(sb==0){
            $('.slide_btn li').removeClass('slide_btn_color');
            $('.slide_btn li').eq(1).addClass('slide_btn_color');
            $('.slide_nb').fadeOut();
            $('.slide_nb').eq(1).fadeIn();
            sb++;
            console.log(sb);
        }else if(sb==1){
            $('.slide_btn li').removeClass('slide_btn_color');
            $('.slide_btn li').eq(2).addClass('slide_btn_color');
            $('.slide_nb').fadeOut();
            $('.slide_nb').eq(2).fadeIn();
            sb++;
            console.log(sb);
        }else if(sb==2){
            $('.slide_btn li').removeClass('slide_btn_color');
            $('.slide_btn li').eq(3).addClass('slide_btn_color');
            $('.slide_nb').fadeOut();
            $('.slide_nb').eq(3).fadeIn();
            sb++;
            console.log(sb);
        }else if(sb==3){
            $('.slide_btn li').removeClass('slide_btn_color');
            $('.slide_btn li').eq(0).addClass('slide_btn_color');
            $('.slide_nb').fadeOut();
            $('.slide_nb').eq(0).fadeIn();
            sb=0;
            console.log(sb);
        }

    }); //right

    $('.slide_left').click(function(){
        
        if(sb==0){
            $('.slide_btn li').removeClass('slide_btn_color');
            $('.slide_btn li').eq(3).addClass('slide_btn_color');
            $('.slide_nb').fadeOut();
            $('.slide_nb').eq(3).fadeIn();
            sb=3;
            console.log(sb);
        }else if(sb==1){
            $('.slide_btn li').removeClass('slide_btn_color');
            $('.slide_btn li').eq(0).addClass('slide_btn_color');
            $('.slide_nb').fadeOut();
            $('.slide_nb').eq(0).fadeIn();
            sb--;
            console.log(sb);
        }else if(sb==2){
            $('.slide_btn li').removeClass('slide_btn_color');
            $('.slide_btn li').eq(1).addClass('slide_btn_color');
            $('.slide_nb').fadeOut();
            $('.slide_nb').eq(1).fadeIn();
            sb--;
            console.log(sb);
        }else if(sb==3){
            $('.slide_btn li').removeClass('slide_btn_color');
            $('.slide_btn li').eq(2).addClass('slide_btn_color');
            $('.slide_nb').fadeOut();
            $('.slide_nb').eq(2).fadeIn();
            sb--;
            console.log(sb);
        }

    }); //left
    


    $('.inner_btn a').hover(function(){
        
        $('.inner_arrow').addClass('inner_arrow_hover');
    },function(){
        
        $('.inner_arrow').removeClass('inner_arrow_hover');
    });

    

    























});//header end
$(document).ready(function(){

    var i = 0;
    var b = 0;
    var c = 0;

    $('.section_3_data').click(function(){
        
        if(i==0){
            $('.section_3_btn_con').animate({
                height:180,
            });
            $('.section_3_btn_con').css({
                borderBottomLeftRadius:'15%',
                borderBottomRightRadius:'15%',
            });
            i++;
        }else if(i==1){
            $('.section_3_btn_con').animate({
                height:0,
            });
            $('.section_3_btn_con').css({
                borderBottomLeftRadius:'15%',
                borderBottomRightRadius:'15%',
            });
            i=0; 
        }
    });
    

    $('.more_data').click(function(){
        $('.product_list_none').css({
            display:'block',
        });
        $('.more_data').css({
            display:'none'
        });
    });

  




///////////이미지 hover///////////////////////////////////////////////////
    $('.np_pay_img_1').hover(function(){
        $('.np_pay_img_1 img').attr({
            src:'img/cart_hover.png'
        });
        $(this).css({
            backgroundColor:'#ff4c00'
        });
    },function(){
        $('.np_pay_img_1 img').attr({
            src:'img/cart.png'
        });
        $(this).css({
            backgroundColor:'#f1eff6'
        });
    });
    $('.np_pay_img_2').hover(function(){
        $('.np_pay_img_2 img').attr({
            src:'img/buy_hover.png'
        });
        $(this).css({
            backgroundColor:'#ff4c00'
        });
    },function(){
        $('.np_pay_img_2 img').attr({
            src:'img/buy.png'
        });
        $(this).css({
            backgroundColor:'#f1eff6'
        });
    });


    $('.np_slide_wrap > div').each(function(index){
        $(this).attr('sd-data',index);
    });

    $('.np_outbox_btn li').each(function(index){
        $(this).attr('sd-data',index);
    }).click(function(){
        sdtn = $(this).attr('sd-data');
        
        //버튼 색깔
        $('.np_outbox_btn li').removeClass('np_outbox_btn_color');
        $('.np_outbox_btn li').eq(sdtn).addClass('np_outbox_btn_color');
       
        //색깔에 따른 슬라이드
        
        $('.np_slide_wrap > div').animate({
            left:-1100*sdtn
        });
      

    });
///////////오른쪽 클릭///////////////////////////////////////////////////
    $('.saright').click(function(){
        
        if(b==0){
            
            $('.np_slide_wrap').animate({
                left:-1100
            });
            $('.np_outbox_btn li').removeClass('np_outbox_btn_color');
            $('.np_outbox_btn li').eq(1).addClass('np_outbox_btn_color');
            b++;
      
        }else if(b==1){
            $('.np_slide_wrap').animate({
                left:-2200
            });
            $('.np_outbox_btn li').removeClass('np_outbox_btn_color');
            $('.np_outbox_btn li').eq(2).addClass('np_outbox_btn_color');
            b++;
      
        }else if(b==2){
            $('.np_slide_wrap').animate({
                left:0
            });
            $('.np_outbox_btn li').removeClass('np_outbox_btn_color');
            $('.np_outbox_btn li').eq(0).addClass('np_outbox_btn_color');
            b=0;
        }
    });

    ///////////왼쪽 클릭////////////////////////////////////////////////////
    $('.saleft').click(function(){
        if(b==0){
            $('.np_slide_wrap').animate({
                left:-2200
            });
            $('.np_outbox_btn li').removeClass('np_outbox_btn_color');
            $('.np_outbox_btn li').eq(2).addClass('np_outbox_btn_color');
            b=2;
            
        }else if(b==1){
            $('.np_slide_wrap').animate({
                left:0
            });
            $('.np_outbox_btn li').removeClass('np_outbox_btn_color');
            $('.np_outbox_btn li').eq(0).addClass('np_outbox_btn_color');
            b--;
          
        }else if(b==2){
            $('.np_slide_wrap').animate({
                left:-1100
            });
            $('.np_outbox_btn li').removeClass('np_outbox_btn_color');
            $('.np_outbox_btn li').eq(1).addClass('np_outbox_btn_color');
            b--;
          
        }
    });

    
    
  
});//section_3 end
$(document).ready(function(){
    $('.section_5_pay_img_1').hover(function(){
        $('.section_5_pay_img_1 img').attr({
            src:'img/cart.png'
        });
        $(this).css({
            backgroundColor:'#f1eff6'
        });
    },function(){
        $('.section_5_pay_img_1 img').attr({
            src:'img/cart_hover.png'
        });
        $(this).css({
            backgroundColor:'#fc7f4a'
        });
    });
    $('.section_5_pay_img_2').hover(function(){
        $('.section_5_pay_img_2 img').attr({
            src:'img/buy.png'
        });
        $(this).css({
            backgroundColor:'#f1eff6'
        });
    },function(){
        $('.section_5_pay_img_2 img').attr({
            src:'img/buy_hover.png'
        });
        $(this).css({
            backgroundColor:'#fc7f4a'
        });
    });

   
    $('.section_5_linebar li').each(function(index){
        $(this).attr('s5-data',index);
    });
    $('.section_5_items li').each(function(index){
        $(this).attr('s5-data',index);
    }).hover(function(){

        s5 = $(this).attr('s5-data');

        $('.section_5_linebar li').eq(s5).css({
            color:'black'
        });

    },function(){
        s5 = $(this).attr('s5-data');

        $('.section_5_linebar li').eq(s5).css({
            color:'#bebebe'
        });
    });

});//section_5 end
$(document).ready(function(){
    $('.section_8_cart').hover(function(){
        $('.section_8_cart img').attr({
            src:'img/cart_hover.png'
        });
    },function(){
        $('.section_8_cart img').attr({
            src:'img/cart.png'
        });
    });
    $('.section_8_buy').hover(function(){
        $('.section_8_buy img').attr({
            src:'img/buy_hover.png'
        });
    },function(){
        $('.section_8_buy img').attr({
            src:'img/buy.png'
        });
    });

    $('.section_8_btn li img').each(function(index){
        $(this).attr('s8-data',index);
    });
    $('.section_8_banner').each(function(index){
        $(this).attr('s8-data',index);
    });

    $('.section_8_btn li img').click(function(){

        s8b = $(this).attr('s8-data');
        
        //버튼색깔
        
        $('.section_8_btn li img').removeClass('section_8_btn_action');
        $('.section_8_btn li img').eq(s8b).addClass('section_8_btn_action');
        

        $('.section_8_banner').css({
            display:'none',
        });
        $('.section_8_banner').eq(s8b).css({
            display:'block',
        });
        $('iframe').css({
            zIndex:98,  
        });
    });


    $('.vedeoimg').eq(0).click(function(){
        $('iframe').eq(0).css({
            zIndex:110,  
        });
    });
    $('.vedeoimg').eq(1).click(function(){
        $('iframe').eq(1).css({
            zIndex:110,  
        });
    });
    $('.vedeoimg').eq(2).click(function(){
        $('iframe').eq(2).css({
            zIndex:110,  
        });
    });


});//section_8 end
$(document).ready(function(){

    var s9s = 0;

    $('.section_9_btn_right').click(function(){
        $('.section_9_slide_wrap').animate({
            left:-235,
        });
    });
    $('.section_9_btn_left').click(function(){
        $('.section_9_slide_wrap').animate({
            left:0,
        });
    });
});//section_9 end
