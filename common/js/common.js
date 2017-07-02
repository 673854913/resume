$(window).load(function(){
    //加载完成后延迟1s隐藏
    $('.preloader').delay(1000).fadeOut("slow");    
});

//Backstretch
//duration切换的间隔
//fade切换所用的时间
//jQuery library (version 1.7 or newer) 
$(function(){
    jQuery(document).ready(function() {
        $('body').backstretch([
            "common/static/images/tm-bg-slide-1.jpg", 
            "common/static/images/tm-bg-slide-2.jpg",
            "common/static/images/tm-bg-slide-3.jpg"
        ],{duration: 3200, fade: 1300});
    });
})