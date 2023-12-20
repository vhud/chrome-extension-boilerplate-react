/* eslint-disable quotes */
console.log('This is the background page.');
console.log('Put the background scripts here.');

chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.executeScript(tab.id, { file: 'linkClick.js' }, function () {
    chrome.tabs.sendMessage(tab.id, {
      action: 'click_link',
      linkText: 'Western Christianity',
    });
  });
});
