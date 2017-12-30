//<![CDATA[
$(function() {
  var doubleClicked = false;
  $(document).on("contextmenu", function (e) {
   if(doubleClicked == false) {
    e.preventDefault();
    var windowHeight = $(window).height()/2;
    var windowWidth = $(window).width()/2;
    if(e.clientY > windowHeight && e.clientX <= windowWidth) {
      $("#contextMenuContainer").css("left", e.clientX);
      $("#contextMenuContainer").css("bottom", $(window).height()-e.clientY);
      $("#contextMenuContainer").css("right", "auto");
      $("#contextMenuContainer").css("top", "auto");
    } else if(e.clientY > windowHeight && e.clientX > windowWidth) {
      $("#contextMenuContainer").css("right", $(window).width()-e.clientX);
      $("#contextMenuContainer").css("bottom", $(window).height()-e.clientY);
      $("#contextMenuContainer").css("left", "auto");
      $("#contextMenuContainer").css("top", "auto");
    } else if(e.clientY <= windowHeight && e.clientX <= windowWidth) {
      $("#contextMenuContainer").css("left", e.clientX);
      $("#contextMenuContainer").css("top", e.clientY);
      $("#contextMenuContainer").css("right", "auto");
      $("#contextMenuContainer").css("bottom", "auto");
    } else {
      $("#contextMenuContainer").css("right", $(window).width()-e.clientX);
      $("#contextMenuContainer").css("top", e.clientY);
      $("#contextMenuContainer").css("left", "auto");
      $("#contextMenuContainer").css("bottom", "auto");
    }
    $("#contextMenuContainer").fadeIn(500, FocusContextOut());
      doubleClicked = true;
    } else {
      e.preventDefault();
      doubleClicked = false;
      $("#contextMenuContainer").fadeOut(500);
    }
  });
  function FocusContextOut() {
    $(document).on("click", function () {
      doubleClicked = false; 
      $("#contextMenuContainer").fadeOut(500);
      $(document).off("click");           
    });
  }
});
//]]>
