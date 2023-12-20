// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//   console.log("Message received!");
//   console.log("req::", request);
//   if (request.action === "click_link") {
//     console.log("clicking link");
// var links = document.getElementsByTagName("a");
// for (var i = 0; i < links.length; i++) {
//   if (links[i].textContent === request.linkText) {
//     links[i].click();
//     break;
//   }
// }
//   }
// });

export const linkClick = (linkText) => {
  console.log("linkClick called");
  var links = document.getElementsByTagName("a");
  if (links.length === 0) {
    console.log("no links exist on this page");
    return;
  }
  for (var i = 0; i < links.length; i++) {
    if (links[i].textContent === linkText) {
      // links[i].click();
      console.log("link found", links[i]);
      break;
    } else {
      console.log("link not found");
    }
  }
};
