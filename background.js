chrome.browserAction.onClicked.addListener(function()
{

chrome.tabs.query({active:true,currentWindow:true},function(tabs)
{
chrome.tabs.sendMessage(tabs[0].id,"toggle");

});
});

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "open_new_tab" ) {
      chrome.tabs.create({"url": request.url});
    }
  });