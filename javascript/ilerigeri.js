//<![CDATA[
window.onload = function()
    {
    document.onkeyup = function(event)
    {
    if (document.activeElement.nodeName == "TEXTAREA" || document.activeElement.nodeName == "INPUT") return;
    event = event || window.event;
    switch(event.keyCode)
    {
    case 37:
    var newerLink = document.getElementById("Blog1_blog-pager-newer-link");
    if(newerLink !=null) window.location.href = newerLink.href;
    break;
    case 39:
    var olderLink = document.getElementById("Blog1_blog-pager-older-link");
    if(olderLink!=null) window.location.href = olderLink.href;
    }
    };
    };
//]]>
