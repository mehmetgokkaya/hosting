//<![CDATA[
   $(function(){var o=$("#sidebar-wrapper").offset(),r=$("#enson").offset().top-$("#sidebar-wrapper").outerHeight()-0;$(window).scroll(function(){$(window).scrollTop()>o.top?$(window).scrollTop()<r&&$("#sidebar-wrapper").stop().animate({marginTop:$(window).scrollTop()-o.top+60}):$("#sidebar-wrapper").stop().animate({marginTop:0})})});
function goster(){$("div#panel").show(100);}function gizle(){$("div#panel").hide(100);}function gostergizle(){$("div#panel").toggle(100);}
$(document).ready(function () { $("div#panel").hide(100); });
//]]>
