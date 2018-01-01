//<![CDATA[
$(document).ready(function(){
    var getMax = function(){
        return $(document).height() - $(window).height() - $('footer').height();
    }
    var getValue = function(){
        return $(window).scrollTop();
    }
    if('max' in document.createElement('progress')){
        // Browser supports progress element
        var progressBar = $('progress');
        // Set the Max attr for the first time
        progressBar.attr({ max: getMax() });
        $(document).on('scroll', function(){
            // On scroll only Value attr needs to be calculated
            progressBar.attr({ value: getValue() });
        });
        $(window).resize(function(){
            // On resize, both Max/Value attr needs to be calculated
            progressBar.attr({ max: getMax(), value: getValue() });
        });   
    }
    else {
        var progressBar = $('.progress-bar'), 
            max = getMax(), 
            value, width;
        var getWidth = function(){
            // Calculate width in percentage
            value = getValue();            
            width = (value/max) * 100;
            width = width + '%';
            return width;
        }
        var setWidth = function(){
            progressBar.css({ width: getWidth() });
        }
        
        $(document).on('scroll', setWidth);
        $(window).on('resize', function(){
            // Need to reset the Max attr
            max = getMax();
            setWidth();
        });
    }
});

$(document).ready(function() {
  $("#input").keyup(function(e) {
    var text = $(this).val();
    var total = 0;
    for (var i = 0; i < text.length; i++) {
      total += text.charCodeAt(i);
    }
    var red = total * 3 % 100 + 55;
    var green = total * 11 % 100 + 55;
    var blue = total * 23 % 100 + 55;
    
    $("morphsearch").css("background-color", "rgb(" + red + ", " + green + ", " + blue + ")");
    
    var light = "rgb(" + (100+red) + ", " + (100+green) + ", " + (100+blue) + ")";
    $(this).css({"color" : light,
                 "box-shadow": "0 0 15px " + light});
  });
});
//]]>
