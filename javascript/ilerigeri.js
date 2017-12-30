//<![CDATA[
window.onload = function()
    {
    document.onkeyup = function(event)
    {
    if (document.activeElement.nodeName == &#39;TEXTAREA&#39; || document.activeElement.nodeName == &#39;INPUT&#39;) return;
    event = event || window.event;
    switch(event.keyCode)
    {
    case 37:
    var newerLink = document.getElementById(&#39;Blog1_blog-pager-newer-link&#39;);
    if(newerLink !=null) window.location.href = newerLink.href;
    break;
    case 39:
    var olderLink = document.getElementById(&#39;Blog1_blog-pager-older-link&#39;);
    if(olderLink!=null) window.location.href = olderLink.href;
    }
    };
    };
//]]>
