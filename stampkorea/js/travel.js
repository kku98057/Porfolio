$(document).ready(function () {
    
    var ww = $(window).width();
    
    // pc 버전

    //반응형 시 각 사이즈별 작동이 제대로 안되니까 다시 수정할것
    //function pc() {
        var i = 1;
        var h = $('#t_s4 .container .flex_wrap li').height();
        var a = 0;
       //if (1400 <= ww) { //1400~
            $('#t_s4 .container .btn').click(function () {
                if (i == 1) {
                    $('#t_s4 .container .flex_wrap').css({
                        height: i*(h*3.2),
                    });
                    i++;

                    console.log('i' + i*h);

                } else if (i == 2) {
                    $('#t_s4 .container .flex_wrap').css({
                        height:i*(h*3.2),
                    });
                    console.log('i' + i);
                    $('#t_s4 .container .btn').addClass('close');
                }
            });

            $('#t_s2 .container #right').click(function () {
                if (a == 0) {
                    $('.slide_wrap').animate({
                        left: -450
                    });
                    $('.slide_wrap').first().appendTo();
                    a++;
                } else if (a == 1) {
                    $('.slide_wrap').animate({
                        left: -900
                    });
                    a++;
                } else if (a == 2) {
                    $('.slide_wrap').animate({
                        left: -1350
                    });
                    a++;
                } else if (a == 3) {
                    $('.slide_wrap').animate({
                        left: 0
                    });
                    a = 0;
                }
            });
            $('#t_s2 .container #left').click(function () {
                if (a == 0) {
                    $('.slide_wrap').animate({
                        left: -1350
                    });
                    $('.slide_wrap').first().appendTo();
                    a = 3;
                } else if (a == 1) {
                    $('.slide_wrap').animate({
                        left: -0
                    });
                    a--;
                } else if (a == 2) {
                    $('.slide_wrap').animate({
                        left: -450
                    });
                    a--;
                } else if (a == 3) {
                    $('.slide_wrap').animate({
                        left: -900
                    });
                    a--;
                }
            });
       // }
  //pc();
    // // 타블릿 버전 
    // function tab() {
        
    //     var tab_btn = 0;
    //     if (768 <= ww < 1400) { //768~1399

    //         $('#t_s4 .container .btn').click(function () {
    //             if (tab_btn == 0) {
    //                 $('#t_s4 .container .flex_wrap').css({
    //                     height: 730,
    //                 });
    //                 tab_btn++;
    //                 console.log('tab_btn' + tab_btn);
    //             } else if (tab_btn == 1) {
    //                 $('#t_s4 .container .flex_wrap').css({
    //                     height: 980,
    //                 });
    //                 tab_btn++;
    //                 console.log('tab_btn' + tab_btn);
    //             } else if (tab_btn == 2) {
    //                 $('#t_s4 .container .flex_wrap').css({
    //                     height: 1240,
    //                 });
    //                 $('#t_s4 .container .btn').addClass('close');
    //                 console.log('tab_btn' + tab_btn);
    //             }
    //         });

    //     };
    // }
    // tab();
});//end