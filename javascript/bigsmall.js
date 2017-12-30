//<![CDATA[
$(document).ready(function () {
    var min = 9;
    var max = 35;
	var line= -21;
    var reset = $('#fontChange').css('fontSize');
    var elm = $('#fontChange');
    var size = str_replace(reset, 'px', '');
    $('a.fontSizePlus').click(function () {
        if (size < max) {
            size++;
            elm.css({ 'fontSize': size });
        }
        return false;
    });
    $('a.fontSizePlus').click(function () {
         {
            size++;

            elm.css({ 'line-height': 2 });
        }
        return false;
    });
    $('a.fontSizeMinus').click(function () {
        if (size > min) {
            size--;
            elm.css({ 'fontSize': size });
        }
        return false;
    });
$('a.fontSizeMinus').click(function () {
        if (size - line) {
            size--;
            elm.css({ 'line-height': 1 });
        }
        return false;
    });
    $('a.fontReset').click(function () {
        size = str_replace(reset, 'px', '');
        elm.css({ 'fontSize': reset });
    });
	 $('a.fontReset').click(function () {
        size = str_replace(reset, 'px', '');
        elm.css({ 'line-height': reset });
    });
});
 function str_replace(haystack, needle, replacement) {
        var splitString = haystack + '';
        var temp = splitString.split(needle);
        return temp.join(replacement);
    }
//]]>
