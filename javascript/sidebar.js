//<![CDATA[
   $(function(){var o=$("#sidebar-wrapper").offset(),r=$("#enson").offset().top-$("#sidebar-wrapper").outerHeight()-0;$(window).scroll(function(){$(window).scrollTop()>o.top?$(window).scrollTop()<r&&$("#sidebar-wrapper").stop().animate({marginTop:$(window).scrollTop()-o.top+60}):$("#sidebar-wrapper").stop().animate({marginTop:0})})});
//]]>
