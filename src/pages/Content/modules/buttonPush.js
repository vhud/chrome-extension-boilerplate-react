chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "click_button") {
    var button = document.getElementById(request.buttonId);
    button.click();
  }
});