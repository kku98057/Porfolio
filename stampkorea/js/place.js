$(document).ready(function(){

    $(window).scroll(function(){
        var a = $('#p_s4').offset().top;
        var b = $('#p_s3 .container').offset().top;
        var scr = $(window).scrollTop();
        var c = $('.sidebar').offset().top;
        // console.log(a);
        console.log(scr);
        // console.log(bb);
        console.log(b-c);
        // console.log(a+','+bb+','+c)

        if(scr > b){
            $('.sidebar').css({
                position:'fixed',
                
                top:30,
            });
        }else if(scr < c){
            $('.sidebar').css({
                position:'absolute',
            });
            console.log(a-c);
        }else if(2460 < b-c){
            $('.sidebar').css({
                position:'absolute',
                
            });
        }
        // if(1906 < scr && scr < 2539){
        //     $('.sidebar').css({
        //         top:scr-1876
        //     });
        // }
        
    });

});