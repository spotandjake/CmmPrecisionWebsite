!(function (c, l, a, r, i, t, y) {
  function sync() {
    new Image().src = 'https://c.clarity.ms/c.gif';
  }
  'complete' == document.readyState
    ? sync()
    : window.addEventListener('load', sync);
  a[c]('metadata', function (e) {
    try {
      const n = 'dataLayer',
        o = 'gtag';
      (a[n] = a[n] || []),
      (a[o] =
          a[o] ||
          function () {
            a[n].push(arguments);
          }),
      a[o]('config', 'G-F17Y9XWHDV', { send_page_view: !1 }),
      a[o]('event', 'Clarity', {
        eventCategory: 'Clarity',
        eventAction: e.sessionId,
        nonInteraction: !0,
        claritydimension: [
          'https://clarity.microsoft.com/ga',
          e.projectId,
          e.userId,
          e.sessionId,
        ].join('/'),
      });
    } catch (e) {}
  });
  if (a[c].v || a[c].t) return a[c]('event', c, `dup.${i.projectId}`);
  (a[c].t = !0),
  ((t = l.createElement(r)).async = !0),
  (t.src = './Clarity/clarity.js'),
  (y = l.getElementsByTagName(r)[0]).parentNode.insertBefore(t, y),
  a[c]('start', i),
  a[c].q.unshift(a[c].q.pop());
})('clarity', document, window, 'script', {
  projectId: 'e4pkw0pjg0',
  upload: 'https://f.clarity.ms/collect',
  expire: 365,
  cookies: ['_uetmsclkid', '_uetvid'],
  track: true,
  lean: false,
  content: true,
  extract: [
    0,
    501,
    'window.navigator.hardwareConcurrency',
    0,
    502,
    'window.navigator.deviceMemory',
    0,
    503,
    'window.navigator.platform',
    0,
    504,
    'window.navigator.maxTouchPoints',
    0,
    505,
    'window.devicePixelRatio',
    0,
    506,
    'navigator.connection.downlink',
    0,
    507,
    'navigator.connection.downlinkMax',
    0,
    508,
    'navigator.connection.effectiveType',
    0,
    509,
    'navigator.connection.rtt',
    0,
    510,
    'screen.isExtended',
    0,
    511,
    'navigator.cookieEnabled',
    0,
    512,
    'navigator.onLine',
    0,
    513,
    'navigator.doNotTrack',
    0,
    514,
    'navigator.connection.saveData',
    0,
    515,
    'navigator.vendor',
    0,
    516,
    'navigator.product',
    0,
    517,
    'navigator.productSub',
    0,
    518,
    'navigator.pdfViewerEnabled',
    0,
    519,
    'navigator.connection.type',
    3,
    1,
    ['4f509md79', 'zjy56jaz', '4s4zm72hj'],
  ],
  unmask: ['body'],
  report: 'https://www.clarity.ms/report/eusd',
});
