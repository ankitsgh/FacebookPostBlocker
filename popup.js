
function popup()
{
var word=$('#word').val();
chrome.tabs.query({active:true,currentWindow:true},function(tabs)
{

	chrome.tabs.sendMessage(tabs[0].id, word);

  
});
}

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("submit").addEventListener("click", popup)
});
