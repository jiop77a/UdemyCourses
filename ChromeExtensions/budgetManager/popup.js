$(function(){
  chrome.storage.sync.get(['total', 'limit', 'notifNum'], function(budget) {
    $.notifNum = (budget.notifNum) ? budget.notifNum : 0;
    $('#total').text(budget.total);
    $('#limit').text(budget.limit);
  });

  $('#spendAmount').click(function() {
    chrome.storage.sync.get(['total', 'limit'], function(budget){
      var newTotal = 0;
      if (budget.total) {
        newTotal += parseInt(budget.total);
      }

      var amount = $('#amount').val();
      if(amount) {
        newTotal += parseInt(amount);
      }

      chrome.storage.sync.set({'total': newTotal}, function(){
        if (amount && newTotal >= budget.limit) {

          var notifOptions = {
            type: 'basic',
            iconUrl: 'icon48.png',
            title: 'limit reached!',
            message: "Uh oh! looks like you've reached your limit!"
          };
          chrome.notifications.create('notif' + $.notifNum++, notifOptions);
          chrome.storage.sync.set({'notifNum': $.notifNum});
        }
      });

      $('#total').text(newTotal);
      $('#amount').val('');
    });
  });

  $('#reset').click(function() {
    chrome.storage.sync.set({'total': 0}, function(){
        var notifOptions = {
          type: 'basic',
          iconUrl: 'icon48.png',
          title: 'total reset!',
          message: "Total has been reset to 0!"
        };
        chrome.notifications.create('notif' + $.notifNum++, notifOptions);
        chrome.storage.sync.set({'notifNum': $.notifNum});

    });

    $('#total').text(0);
    $('#amount').val('');
  });
});
