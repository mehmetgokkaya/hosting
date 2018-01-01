//<![CDATA[
   $(function(){var o=$("#sidebar-wrapper").offset(),r=$("#enson").offset().top-$("#sidebar-wrapper").outerHeight()-0;$(window).scroll(function(){$(window).scrollTop()>o.top?$(window).scrollTop()<r&&$("#sidebar-wrapper").stop().animate({marginTop:$(window).scrollTop()-o.top+60}):$("#sidebar-wrapper").stop().animate({marginTop:0})})});
function goster(){$("div#panel").show(100);}function gizle(){$("div#panel").hide(100);}function gostergizle(){$("div#panel").toggle(100);}
$(document).ready(function () { $("div#panel").hide(100); });
;
;
var countDownDate = new Date("Jan 1, 2018 00:00:00").getTime();
var countdownfunction = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("gerisayim").innerHTML = days + " Gün " + hours + " Saat "
    + minutes + " Dakika " + seconds + " Saniye ";
    if (distance < 0) {
        clearInterval(countdownfunction);
        document.getElementById("gerisayim").innerHTML = "Mutlu Yıllar";
    }
}, 1000);

$(document).ready(function() {
  $("#bookmarkme").click(function() {
    if (window.sidebar) {
      window.sidebar.addPanel(location.href,document.title,"");
    } else if(window.external) {
      window.external.AddFavorite(location.href,document.title); }
    else if(window.opera && window.print) {
      this.title=document.title;
      return true;
    }
  });
});
//]]>
