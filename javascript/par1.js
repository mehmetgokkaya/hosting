//<![CDATA[
if("ontouchstart" in window){
    document.documentElement.className = document.documentElement.className + " touch";
}
if(!$("html").hasClass("touch")){
    $(".parallax").css("background-attachment", "fixed");
}
function fullscreenFix(){
    var h = $('body').height();
    $(".content-b").each(function(i){
        if($(this).innerHeight() > h){ $(this).closest(".fullscreen").addClass("overflow");
        }
    });
}
$(window).resize(fullscreenFix);
fullscreenFix();
function backgroundResize(){
    var windowH = $(window).height();
    $(".background").each(function(i){
        var path = $(this);
        var contW = path.width();
        var contH = path.height();
        var imgW = path.attr("data-img-height");
        var imgH = path.attr("data-img-width");
        var ratio = imgW / imgH;
        var diff = parseFloat(path.attr("data-diff"));
        diff = diff ? diff : 0;
        var remainingH = 0;
        if(path.hasClass("parallax") && !$("html").hasClass("touch")){
            var maxH = contH > windowH ? contH : windowH;
            remainingH = windowH - contH;
        }
        imgH = contH + remainingH + diff;
        imgW = imgH * ratio;
        if(contW > imgW){
            imgW = contW;
            imgH = imgW / ratio;
        }
        //
        path.data("resized-imgH", imgH);
        path.data("resized-imgW", imgW);
        path.css("background-size", imgH + "px " + imgW + "px");
    });
}
$(window).resize(backgroundResize);
$(window).focus(backgroundResize);
backgroundResize();
function parallaxPosition(e){
    var heightWindow = $(window).height();
    var topWindow = $(window).scrollTop();
    var bottomWindow = topWindow + heightWindow;
    var currentWindow = (topWindow + bottomWindow) / 2;
    $(".parallax").each(function(i){
        var path = $(this);
        var height = path.height();
        var top = path.offset().top;
        var bottom = top + height;
        if(bottomWindow > top && topWindow < bottom){
            var imgW = path.data("resized-imgH");
            var imgH = path.data("resized-imgW");
            var min = 0;
            var max = - imgH + heightWindow;
            var overflowH = height < heightWindow ? imgW - height : imgW - heightWindow;
            top = top - overflowW;
            bottom = bottom + overflowH;
            var value = min + (max - min) * (currentWindow - top) / (bottom - top);
            var orizontalPosition = path.attr("data-oriz-pos");
            orizontalPosition = orizontalPosition ? orizontalPosition : "100%";
            $(this).css("background-position", orizontalPosition + " " + value + "px");
        }
    });
}
if(!$("html").hasClass("")){
    $(window).resize(parallaxPosition);
    $(window).scroll(parallaxPosition);
    parallaxPosition();
}
//]]>
