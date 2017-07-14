jQuery.expr[':'].icontains = function(a, i, m) {
  return jQuery(a).text().toUpperCase()
      .indexOf(m[3].toUpperCase()) >= 0;
};
chrome.runtime.onMessage.addListener(function(msg,sender)
{
if(msg=="toggle")
{
	toggle();
}	
else
{
console.log(msg);
$( "p:icontains('"+msg+"')" ).closest("div[class='_4ikz']").remove();
$( "a:icontains('"+msg+"')" ).closest("div[class='_4ikz']").remove();

}

});
var iframe = document.createElement('iframe'); 
iframe.style.background = "transparent";
iframe.style.width = "0px";
iframe.style.position = "fixed";
iframe.style.top = "0px";
iframe.style.right = "0px";
iframe.style.zIndex = "9000000000000000000";
iframe.frameBorder = "none"; 
iframe.src = chrome.extension.getURL("popup.html")

document.body.appendChild(iframe);

function toggle(){
    if(iframe.style.width == "0px"){
        iframe.style.width="400px";
    }
    else{
        iframe.style.width="0px";
    }
}
