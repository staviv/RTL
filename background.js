chrome.commands.onCommand.addListener((command) => {
    if (command === "toggle-rtl") {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {action: "toggleRTL"});
      });
    }
  });