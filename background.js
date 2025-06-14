chrome.browserAction.onClicked.addListener(function(tab) {
  console.log("Toolbar icon clicked in Firefox (Manifest V2)");
  chrome.tabs.executeScript(tab.id, {
    file: "content.js"
  });
});
