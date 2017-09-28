var contextMenuItem = {
  "id": "spendMoney",
  "title": "SpendMoney",
  "contexts": ["selection"]
};

chrome.contextMenus.create(contextMenuItem);

chrome.contextMenus.onClicked.addListener(function(clickData){
  if (clickData.menuItemId === "spendMoney" && clickData.selectionText) {
    if (Number.isInteger(parseInt(clickData.selectionText))) {
      chrome.storage.sync.get(['total', 'limit', 'notifNum'], function(budget) {
        var newTotal = 0;
        var notifNum = (budget.notifNum) ? budget.notifNum : 0;
        if (budget.total) {
          newTotal += parseInt(budget.total);
        }
        newTotal += parseInt(clickData.selectionText);
        chrome.storage.sync.set({'total': newTotal}, function(){
          if (newTotal >= budget.limit) {
            var notifOptions = {
              type: 'basic',
              iconUrl: 'icon48.png',
              title: 'limit reached!',
              message: "Uh oh! looks like you've reached your limit!"
            };
            chrome.notifications.create('notif' + notifNum++, notifOptions);
            chrome.storage.sync.set({'notifNum': notifNum});
          }
        });
      });
    }
  }
});

chrome.storage.onChanged.addListener(function(changes, storageName){
  chrome.browserAction.setBadgeText({"text": changes.total.newValue.toString()});
});
