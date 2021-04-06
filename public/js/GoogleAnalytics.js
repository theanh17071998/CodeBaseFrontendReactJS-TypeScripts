/* eslint-disable no-sequences */
/* eslint-disable prefer-rest-params */
/* eslint-disable no-undef */
/* eslint-disable prefer-destructuring */
/* eslint-disable func-names */
/* eslint-disable no-param-reassign */
/* eslint-disable dot-notation */
(function(i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    (i[r] =
      i[r] ||
      function() {
        (i[r].q = i[r].q || []).push(arguments);
      }),
      (i[r].l = 1 * new Date());
    (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m);
  })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
  ga('create', 'UA-46983583-1', 'auto');
  
  function trackingGA(e) {
    const content = e.path
      .filter(v => v.nodeName === 'BUTTON' || v.nodeName === 'INPUT')[0]
      ?.id.split('.');
    if (content) {
      const category = content?.[0];
      const action = JSON.stringify({
        action: content?.[1],
        x: e.x,
        y: e.y,
        screenHeight: e.view.innerHeight,
        screenWidth: e.view.innerWidth,
      });
      ga('send', {
        hitType: 'event',
        eventCategory: category,
        eventAction: action,
      });
    }
  }
  
  if (window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
    document.addEventListener('click', trackingGA);
  }
  