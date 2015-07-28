(function() {

  'use strict';

  const ICON_URL = '';
  const FB_NOTIFICATION = {
    'friend': '',
    'message': '',
    'event': ''
  };

  function observeFBchanges() {

  }

  function notificationCb(evt) {
    var notification = evt.target;
    notification.close();

    // switch to view.
    notification.tag = '';
  }

  function sendNotification(key) {
    // We always use tag "pairing-request" to manage these notifications.
    var notificationId = 'pairing-request';
    var notification = new Notification(title, {
     body: FB_NOTIFICATION[key],
     icon: ICON_URL,
     tag: key
    });

    // set onclick handler for the notification
    notification.addEventListener('click', notificationCb);
  }

  if (document.readyState !== 'loading') {
    observeFBchanges();
  } else {
    document.addEventListener('readystatechange',
      function readyStateChange() {
        if (document.readyState == 'interactive') {
          document.removeEventListener('readystatechange', readyStateChange);
          observeFBchanges();
        }
      });
  }
})();
