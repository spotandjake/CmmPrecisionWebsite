/* clarity-js v0.6.43: https://github.com/microsoft/clarity (License: MIT) */
!(function () {
  'use strict';
  const t = Object.freeze({
      __proto__: null,
      get start() {
        return xn;
      },
      get stop() {
        return Mn;
      },
      get parse() {
        return Nn;
      },
      get getId() {
        return _n;
      },
      get add() {
        return Tn;
      },
      get update() {
        return Dn;
      },
      get sameorigin() {
        return In;
      },
      get iframe() {
        return Cn;
      },
      get hashText() {
        return An;
      },
      get getNode() {
        return Rn;
      },
      get getValue() {
        return Hn;
      },
      get get() {
        return Yn;
      },
      get lookup() {
        return Wn;
      },
      get has() {
        return Xn;
      },
      get updates() {
        return qn;
      },
    }),
    e = Object.freeze({
      __proto__: null,
      get track() {
        return va;
      },
      get start() {
        return wa;
      },
      get queue() {
        return ka;
      },
      get stop() {
        return Ea;
      },
    }),
    n = Object.freeze({
      __proto__: null,
      get data() {
        return La;
      },
      get keys() {
        return Aa;
      },
      get fragments() {
        return Ya;
      },
      get start() {
        return Wa;
      },
      get clone() {
        return Xa;
      },
      get compute() {
        return qa;
      },
      get reset() {
        return Pa;
      },
      get update() {
        return Ua;
      },
      get stop() {
        return Ba;
      },
    }),
    a = Object.freeze({
      __proto__: null,
      get data() {
        return za;
      },
      get start() {
        return Za;
      },
      get check() {
        return Ka;
      },
      get trigger() {
        return Qa;
      },
      get compute() {
        return $a;
      },
      get stop() {
        return tr;
      },
    }),
    r = Object.freeze({
      __proto__: null,
      get data() {
        return er;
      },
      get updates() {
        return nr;
      },
      get start() {
        return ar;
      },
      get stop() {
        return rr;
      },
      get log() {
        return ir;
      },
      get compute() {
        return or;
      },
      get reset() {
        return ur;
      },
    }),
    i = Object.freeze({
      __proto__: null,
      get data() {
        return cr;
      },
      get callbacks() {
        return sr;
      },
      get start() {
        return dr;
      },
      get stop() {
        return fr;
      },
      get metadata() {
        return hr;
      },
      get id() {
        return pr;
      },
      get consent() {
        return vr;
      },
      get clear() {
        return gr;
      },
      get save() {
        return mr;
      },
    }),
    o = Object.freeze({
      __proto__: null,
      get data() {
        return Sr;
      },
      get start() {
        return Nr;
      },
      get stop() {
        return _r;
      },
      get envelope() {
        return Tr;
      },
    }),
    u = {
      projectId: null,
      delay: 1e3,
      lean: !1,
      track: !0,
      content: !0,
      mask: [],
      unmask: [],
      regions: [],
      extract: [],
      cookies: [],
      fraud: [],
      report: null,
      upload: null,
      fallback: null,
      upgrade: null,
      action: null,
    };
  function c(t) {
    return window.Zone && '__symbol__' in window.Zone
      ? window.Zone.__symbol__(t)
      : t;
  }
  let s = 0;
  function l(t) {
    return (
      void 0 === t && (t = null),
      (t = t || performance.now()),
      Math.max(Math.round(t - s), 0)
    );
  }
  const d = '0.6.43';
  function f(t) {
    for (var e = 5381, n = e, a = 0; a < t.length; a += 2) {
      if (((e = ((e << 5) + e) ^ t.charCodeAt(a)), a + 1 < t.length))
        n = ((n << 5) + n) ^ t.charCodeAt(a + 1);
    }
    return Math.abs(e + 11579 * n).toString(36);
  }
  let h = null,
    p = null,
    v = !1;
  function g() {
    v &&
      (h = {
        time: l(),
        event: 4,
        data: {
          visible: p.visible,
          docWidth: p.docWidth,
          docHeight: p.docHeight,
          screenWidth: p.screenWidth,
          screenHeight: p.screenHeight,
          scrollX: p.scrollX,
          scrollY: p.scrollY,
          pointerX: p.pointerX,
          pointerY: p.pointerY,
          activityTime: p.activityTime,
        },
      }),
    (p = p || {
      visible: 1,
      docWidth: 0,
      docHeight: 0,
      screenWidth: 0,
      screenHeight: 0,
      scrollX: 0,
      scrollY: 0,
      pointerX: 0,
      pointerY: 0,
      activityTime: 0,
    });
  }
  function m(t, e, n) {
    switch (t) {
      case 8:
        (p.docWidth = e), (p.docHeight = n);
        break;
      case 11:
        (p.screenWidth = e), (p.screenHeight = n);
        break;
      case 10:
        (p.scrollX = e), (p.scrollY = n);
        break;
      default:
        (p.pointerX = e), (p.pointerY = n);
    }
    v = !0;
  }
  function b(t) {
    p.activityTime = t;
  }
  function y(t, e) {
    (p.visible = 'visible' === e ? 1 : 0), p.visible || b(t), (v = !0);
  }
  function w() {
    v && Ga(4);
  }
  let k = Object.freeze({
      __proto__: null,
      get state() {
        return h;
      },
      start: function () {
        (v = !1), g();
      },
      reset: g,
      track: m,
      activity: b,
      visibility: y,
      compute: w,
      stop: function () {
        g();
      },
    }),
    E = null;
  function O(t, e) {
    Fr() &&
      t &&
      e &&
      'string' == typeof t &&
      'string' == typeof e &&
      t.length < 255 &&
      e.length < 255 &&
      ((E = { key: t, value: e }), Ga(24));
  }
  let x,
    M = null,
    S = null;
  function N(t) {
    t in M || (M[t] = 0), t in S || (S[t] = 0), M[t]++, S[t]++;
  }
  function _(t, e) {
    null !== e &&
      (t in M || (M[t] = 0), t in S || (S[t] = 0), (M[t] += e), (S[t] += e));
  }
  function T(t, e) {
    null !== e &&
      !1 === isNaN(e) &&
      (t in M || (M[t] = 0),
      (e > M[t] || 0 === M[t]) && ((S[t] = e), (M[t] = e)));
  }
  function D(t, e, n) {
    return window.setTimeout(Cr(t), e, n);
  }
  function I(t) {
    return window.clearTimeout(t);
  }
  let C = 0,
    j = 0,
    z = null;
  function L() {
    z && I(z), (z = D(A, j)), (C = l());
  }
  function A() {
    const t = l();
    (x = { gap: t - C }),
    Ga(25),
    x.gap < 3e5
      ? (z = D(A, j))
      : Ur &&
          (O('clarity', 'suspend'),
          si(),
          ['mousemove', 'touchstart'].forEach(function (t) {
            return zr(document, t, Gr);
          }),
          ['resize', 'scroll', 'pageshow'].forEach(function (t) {
            return zr(window, t, Gr);
          }));
  }
  let R = Object.freeze({
      __proto__: null,
      get data() {
        return x;
      },
      start: function () {
        (j = 6e4), (C = 0);
      },
      reset: L,
      stop: function () {
        I(z), (C = 0), (j = 0);
      },
    }),
    H = null;
  function Y(t, e) {
    if (t in H) {
      const n = H[t],
        a = n[n.length - 1];
      e - a[0] > 100 ? H[t].push([e, 0]) : (a[1] = e - a[0]);
    } else H[t] = [[e, 0]];
  }
  function W() {
    Ga(36);
  }
  function X() {
    H = {};
  }
  let q = Object.freeze({
      __proto__: null,
      get data() {
        return H;
      },
      start: function () {
        H = {};
      },
      stop: function () {
        H = {};
      },
      track: Y,
      compute: W,
      reset: X,
    }),
    P = null;
  function U(t) {
    Fr() &&
      u.lean &&
      ((u.lean = !1), (P = { key: t }), mr(), u.upgrade && u.upgrade(t), Ga(3));
  }
  let B = Object.freeze({
      __proto__: null,
      get data() {
        return P;
      },
      start: function () {
        !u.lean && u.upgrade && u.upgrade('Config'), (P = null);
      },
      upgrade: U,
      stop: function () {
        P = null;
      },
    }),
    V = null;
  function F(t, e) {
    G(t, 'string' == typeof e ? [e] : e);
  }
  function J(t, e, n) {
    void 0 === e && (e = null),
    void 0 === n && (n = null),
    G('userId', [t]),
    G('sessionId', [e]),
    G('pageId', [n]);
  }
  function G(t, e) {
    if (Fr() && t && e && 'string' == typeof t && t.length < 255) {
      for (var n = (t in V) ? V[t] : [], a = 0; a < e.length; a++)
        'string' == typeof e[a] && e[a].length < 255 && n.push(e[a]);
      V[t] = n;
    }
  }
  function Z() {
    Ga(34);
  }
  function K() {
    V = {};
  }
  function Q(t, e, n, a) {
    return new (n || (n = Promise))(function (r, i) {
      function o(t) {
        try {
          c(a.next(t));
        } catch (t) {
          i(t);
        }
      }
      function u(t) {
        try {
          c(a.throw(t));
        } catch (t) {
          i(t);
        }
      }
      function c(t) {
        let e;
        t.done
          ? r(t.value)
          : ((e = t.value),
          e instanceof n
            ? e
            : new n(function (t) {
              t(e);
            })).then(o, u);
      }
      c((a = a.apply(t, e || [])).next());
    });
  }
  function $(t, e) {
    let n,
      a,
      r,
      i,
      o = {
        label: 0,
        sent: function () {
          if (1 & r[0]) throw r[1];
          return r[1];
        },
        trys: [],
        ops: [],
      };
    return (
      (i = { next: u(0), throw: u(1), return: u(2) }),
      'function' == typeof Symbol &&
        (i[Symbol.iterator] = function () {
          return this;
        }),
      i
    );
    function u(i) {
      return function (u) {
        return (function (i) {
          if (n) throw new TypeError('Generator is already executing.');
          for (; o; )
            try {
              if (
                ((n = 1),
                a &&
                  (r =
                    2 & i[0]
                      ? a.return
                      : i[0]
                        ? a.throw || ((r = a.return) && r.call(a), 0)
                        : a.next) &&
                  !(r = r.call(a, i[1])).done)
              )
                return r;
              switch (((a = 0), r && (i = [2 & i[0], r.value]), i[0])) {
                case 0:
                case 1:
                  r = i;
                  break;
                case 4:
                  return o.label++, { value: i[1], done: !1 };
                case 5:
                  o.label++, (a = i[1]), (i = [0]);
                  continue;
                case 7:
                  (i = o.ops.pop()), o.trys.pop();
                  continue;
                default:
                  if (
                    !((r = o.trys),
                    (r = r.length > 0 && r[r.length - 1]) ||
                      (6 !== i[0] && 2 !== i[0]))
                  ) {
                    o = 0;
                    continue;
                  }
                  if (3 === i[0] && (!r || (i[1] > r[0] && i[1] < r[3]))) {
                    o.label = i[1];
                    break;
                  }
                  if (6 === i[0] && o.label < r[1]) {
                    (o.label = r[1]), (r = i);
                    break;
                  }
                  if (r && o.label < r[2]) {
                    (o.label = r[2]), o.ops.push(i);
                    break;
                  }
                  r[2] && o.ops.pop(), o.trys.pop();
                  continue;
              }
              i = e.call(t, o);
            } catch (t) {
              (i = [6, t]), (a = 0);
            } finally {
              n = r = 0;
            }
          if (5 & i[0]) throw i[1];
          return { value: i[0] ? i[1] : void 0, done: !0 };
        })([i, u]);
      };
    }
  }
  const tt = 'CompressionStream' in window;
  function et(t) {
    return Q(this, void 0, void 0, function () {
      let e, n;
      return $(this, function (a) {
        switch (a.label) {
          case 0:
            return (
              a.trys.push([0, 3, , 4]),
              tt
                ? ((e = new ReadableStream({
                  start: function (e) {
                    return Q(this, void 0, void 0, function () {
                      return $(this, function (n) {
                        return e.enqueue(t), e.close(), [2];
                      });
                    });
                  },
                })
                  .pipeThrough(new TextEncoderStream())
                  .pipeThrough(new window.CompressionStream('gzip'))),
                (n = Uint8Array.bind),
                [4, nt(e)])
                : [3, 2]
            );
          case 1:
            return [2, new (n.apply(Uint8Array, [void 0, a.sent()]))()];
          case 2:
            return [3, 4];
          case 3:
            return a.sent(), [3, 4];
          case 4:
            return [2, null];
        }
      });
    });
  }
  function nt(t) {
    return Q(this, void 0, void 0, function () {
      let e, n, a, r, i;
      return $(this, function (o) {
        switch (o.label) {
          case 0:
            (e = t.getReader()), (n = []), (a = !1), (r = []), (o.label = 1);
          case 1:
            return a ? [3, 3] : [4, e.read()];
          case 2:
            return (
              (i = o.sent()),
              (a = i.done),
              (r = i.value),
              a ? [2, n] : (n.push.apply(n, r), [3, 1])
            );
          case 3:
            return [2, n];
        }
      });
    });
  }
  const at = [
    k,
    r,
    Object.freeze({
      __proto__: null,
      get data() {
        return V;
      },
      start: function () {
        K();
      },
      set: F,
      identify: J,
      compute: Z,
      reset: K,
      stop: function () {
        K();
      },
    }),
    a,
    q,
    i,
    o,
    e,
    R,
    B,
    n,
  ];
  function rt() {
    (M = {}),
    (S = {}),
    N(5),
    at.forEach(function (t) {
      return Cr(t.start)();
    });
  }
  function it() {
    at
      .slice()
      .reverse()
      .forEach(function (t) {
        return Cr(t.stop)();
      }),
    (M = {}),
    (S = {});
  }
  function ot() {
    Z(), w(), or(), Ga(0), W(), $a(), qa();
  }
  let ut = /\S/gi,
    ct = !0,
    st = null,
    lt = null,
    dt = null;
  function ft(t, e, n, a) {
    if ((void 0 === a && (a = !1), t))
      switch (n) {
        case 0:
          return t;
        case 1:
          switch (e) {
            case '*T':
            case 'value':
            case 'placeholder':
            case 'click':
            case 'input':
              return (function (t) {
                let e = -1,
                  n = 0,
                  a = !1,
                  r = !1,
                  i = !1,
                  o = null;
                if (ct && null === st)
                  try {
                    (st = new RegExp('\\p{N}', 'gu')),
                    (lt = new RegExp('\\p{L}', 'gu')),
                    (dt = new RegExp('\\p{Sc}', 'gu'));
                  } catch (t) {
                    ct = !1;
                  }
                for (let u = 0; u < t.length; u++) {
                  const c = t.charCodeAt(u);
                  if (
                    ((a = a || (c >= 48 && c <= 57)),
                    (r = r || 64 === c),
                    (i = 9 === c || 10 === c || 13 === c || 32 === c),
                    0 === u || u === t.length - 1 || i)
                  ) {
                    if (a || r) {
                      null === o && (o = t.split(''));
                      let s = t.substring(e + 1, i ? u : u + 1);
                      (s =
                        ct && null !== dt
                          ? s.match(dt)
                            ? s
                            : s.replace(lt, '▪').replace(st, '▫')
                          : ht(s)),
                      o.splice(e + 1 - n, s.length, s),
                      (n += s.length - 1);
                    }
                    i && ((a = !1), (r = !1), (e = u));
                  }
                }
                return o ? o.join('') : t;
              })(t);
          }
          return t;
        case 2:
        case 3:
          switch (e) {
            case '*T':
              return a
                ? (function (t) {
                  const e = t.trim();
                  if (e.length > 0) {
                    const n = e[0],
                      a = t.indexOf(n),
                      r = t.substr(0, a),
                      i = t.substr(a + e.length);
                    return ''
                      .concat(r)
                      .concat(e.length.toString(36))
                      .concat(i);
                  }
                  return t;
                })(t)
                : ht(t);
            case 'src':
            case 'srcset':
            case 'title':
            case 'alt':
              return 3 === n ? '' : t;
            case 'value':
            case 'click':
            case 'input':
              return (function (t) {
                for (
                  var e = 5 * (Math.floor(t.length / 5) + 1), n = '', a = 0;
                  a < e;
                  a++
                )
                  n += a > 0 && a % 5 == 0 ? ' ' : '•';
                return n;
              })(t);
            case 'placeholder':
              return ht(t);
          }
      }
    return t;
  }
  function ht(t) {
    return t.replace(ut, '•');
  }
  let pt,
    vt = [];
  function gt(t, e, n) {
    null !== t &&
      n &&
      n.length >= 5 &&
      ((pt = { id: t, target: e, hash: f(n) }),
      vt.indexOf(pt.hash) < 0 && (vt.push(pt.hash), Da(41)));
  }
  let mt = 'load,active,fixed,visible,focus,show,collaps,animat'.split(','),
    bt = {};
  function yt(t, e) {
    let n = t.attributes,
      a = t.prefix ? t.prefix[e] : null,
      r =
        0 === e
          ? ''.concat('~').concat(t.position - 1)
          : ':nth-of-type('.concat(t.position, ')');
    switch (t.tag) {
      case 'STYLE':
      case 'TITLE':
      case 'LINK':
      case 'META':
      case '*T':
      case '*D':
        return '';
      case 'HTML':
        return 'HTML';
      default:
        if (null === a) return '';
        (a = ''.concat(a).concat('>')),
        (t.tag =
            0 === t.tag.indexOf('svg:') ? t.tag.substr('svg:'.length) : t.tag);
        var i = ''.concat(a).concat(t.tag).concat(r),
          o = 'id' in n && n.id.length > 0 ? n.id : null,
          u =
            'BODY' !== t.tag && 'class' in n && n.class.length > 0
              ? n.class
                .trim()
                .split(/\s+/)
                .filter(function (t) {
                  return wt(t);
                })
                .join('.')
              : null;
        if (u && u.length > 0)
          if (0 === e) {
            const c = ''
              .concat(
                (function (t) {
                  for (var e = t.split('>'), n = 0; n < e.length; n++) {
                    const a = e[n].indexOf('~'),
                      r = e[n].indexOf('.');
                    e[n] = e[n].substring(
                      0,
                      r > 0 ? r : a > 0 ? a : e[n].length
                    );
                  }
                  return e.join('>');
                })(a)
              )
              .concat(t.tag)
              .concat('.')
              .concat(u);
            c in bt || (bt[c] = []),
            bt[c].indexOf(t.id) < 0 && bt[c].push(t.id),
            (i = ''.concat(c).concat('~').concat(bt[c].indexOf(t.id)));
          } else i = ''.concat(a).concat(t.tag, '.').concat(u).concat(r);
        return (
          (i =
            o && wt(o)
              ? ''
                .concat(
                  (function (t) {
                    const e = t.lastIndexOf('*S'),
                      n = t.lastIndexOf(''.concat('iframe:').concat('HTML')),
                      a = Math.max(e, n);
                    if (a < 0) return '';
                    return t.substring(0, t.indexOf('>', a) + 1);
                  })(a)
                )
                .concat('#')
                .concat(o)
              : i),
          i
        );
    }
  }
  function wt(t) {
    if (!t) return !1;
    if (
      mt.some(function (e) {
        return t.toLowerCase().indexOf(e) >= 0;
      })
    )
      return !1;
    for (let e = 0; e < t.length; e++) {
      const n = t.charCodeAt(e);
      if (n >= 48 && n <= 57) return !1;
    }
    return !0;
  }
  let kt = {},
    Et = [],
    Ot = null,
    xt = null,
    Mt = null;
  function St() {
    (kt = {}), (Et = []), (Ot = null), (xt = null);
  }
  function Nt(t, e) {
    return (
      void 0 === e && (e = 0),
      Q(this, void 0, void 0, function () {
        let n, a, r;
        return $(this, function (i) {
          for (n = 0, a = Et; n < a.length; n++)
            if (a[n].task === t) return [2];
          return (
            (r = new Promise(function (n) {
              Et[1 === e ? 'unshift' : 'push']({
                task: t,
                resolve: n,
                id: pr(),
              });
            })),
            null === Ot && null === xt && _t(),
            [2, r]
          );
        });
      })
    );
  }
  function _t() {
    const t = Et.shift();
    t &&
      ((Ot = t),
      t
        .task()
        .then(function () {
          t.id === pr() && (t.resolve(), (Ot = null), _t());
        })
        .catch(function (e) {
          t.id === pr() &&
            (e && ja(0, 1, e.name, e.message, e.stack), (Ot = null), _t());
        }));
  }
  function Tt(t) {
    const e = jt(t);
    return e in kt
      ? performance.now() - kt[e].start > kt[e].yield
        ? 0
        : 1
      : 2;
  }
  function Dt(t) {
    kt[jt(t)] = { start: performance.now(), calls: 0, yield: 30 };
  }
  function It(t) {
    const e = performance.now(),
      n = jt(t),
      a = e - kt[n].start;
    _(t.cost, a), N(5), kt[n].calls > 0 && _(4, a);
  }
  function Ct(t) {
    return Q(this, void 0, void 0, function () {
      let e, n;
      return $(this, function (a) {
        switch (a.label) {
          case 0:
            return (e = jt(t)) in kt ? (It(t), (n = kt[e]), [4, zt()]) : [3, 2];
          case 1:
            (n.yield = a.sent().timeRemaining()),
            (function (t) {
              const e = jt(t);
              if (kt && kt[e]) {
                const n = kt[e].calls,
                  a = kt[e].yield;
                Dt(t), (kt[e].calls = n + 1), (kt[e].yield = a);
              }
            })(t),
            (a.label = 2);
          case 2:
            return [2, e in kt ? 1 : 2];
        }
      });
    });
  }
  function jt(t) {
    return ''.concat(t.id, '.').concat(t.cost);
  }
  function zt() {
    return Q(this, void 0, void 0, function () {
      return $(this, function (t) {
        switch (t.label) {
          case 0:
            return xt ? [4, xt] : [3, 2];
          case 1:
            t.sent(), (t.label = 2);
          case 2:
            return [
              2,
              new Promise(function (t) {
                At(t, { timeout: 5e3 });
              }),
            ];
        }
      });
    });
  }
  var Lt,
    At =
      window.requestIdleCallback ||
      function (t, e) {
        const n = performance.now(),
          a = new MessageChannel(),
          r = a.port1,
          i = a.port2;
        (r.onmessage = function (a) {
          const r = performance.now(),
            o = r - n,
            u = r - a.data;
          if (u > 30 && o < e.timeout)
            requestAnimationFrame(function () {
              i.postMessage(r);
            });
          else {
            const c = o > e.timeout;
            t({
              didTimeout: c,
              timeRemaining: function () {
                return c ? 30 : Math.max(0, 30 - u);
              },
            });
          }
        }),
        requestAnimationFrame(function () {
          i.postMessage(performance.now());
        });
      };
  function Rt(t, e, n) {
    return (
      void 0 === e && (e = null),
      void 0 === n && (n = null),
      Q(this, void 0, void 0, function () {
        let a, r, i, o, c, s, d, f, h, p, v, g, y, w, k, E, O, x, M, S, N, _;
        return $(this, function (T) {
          switch (T.label) {
            case 0:
              switch (((a = n || l()), (r = [a, t]), t)) {
                case 8:
                  return [3, 1];
                case 7:
                  return [3, 2];
                case 5:
                case 6:
                  return [3, 3];
              }
              return [3, 10];
            case 1:
              return (
                (i = Lt),
                r.push(i.width),
                r.push(i.height),
                m(t, i.width, i.height),
                ka(r),
                [3, 10]
              );
            case 2:
              for (o = 0, c = Bn; o < c.length; o++)
                (s = c[o]),
                (r = [s.time, 7]).push(s.data.id),
                r.push(s.data.interaction),
                r.push(s.data.visibility),
                r.push(s.data.name),
                ka(r);
              return aa(), [3, 10];
            case 3:
              if (2 === Tt(e)) return [3, 10];
              if (!((d = qn()).length > 0)) return [3, 9];
              (f = 0), (h = d), (T.label = 4);
            case 4:
              return f < h.length
                ? ((p = h[f]), 0 !== (v = Tt(e)) ? [3, 6] : [4, Ct(e)])
                : [3, 8];
            case 5:
              (v = T.sent()), (T.label = 6);
            case 6:
              if (2 === v) return [3, 8];
              for (
                g = p.data,
                y = p.metadata.active,
                w = p.metadata.suspend,
                k = p.metadata.privacy,
                E = (function (t) {
                  const e = t.metadata.privacy;
                  return '*T' === t.data.tag && !(0 === e || 1 === e);
                })(p),
                O = 0,
                x = y ? ['tag', 'attributes', 'value'] : ['tag'];
                O < x.length;
                O++
              )
                if (g[(M = x[O])])
                  switch (M) {
                    case 'tag':
                      (S = Ht(p)),
                      (N = E ? -1 : 1),
                      r.push(p.id * N),
                      p.parent && y && r.push(p.parent),
                      p.previous && y && r.push(p.previous),
                      r.push(w ? '*M' : g[M]),
                      S &&
                          2 === S.length &&
                          r.push(
                            ''
                              .concat('#')
                              .concat(Yt(S[0]), '.')
                              .concat(Yt(S[1]))
                          );
                      break;
                    case 'attributes':
                      for (_ in g[M])
                        void 0 !== g[M][_] && r.push(Wt(_, g[M][_], k));
                      break;
                    case 'value':
                      gt(p.metadata.fraud, p.id, g[M]),
                      r.push(ft(g[M], g.tag, k, E));
                  }
              T.label = 7;
            case 7:
              return f++, [3, 4];
            case 8:
              6 === t && b(a),
              ka(
                (function (t) {
                  for (
                    var e = [], n = {}, a = 0, r = null, i = 0;
                    i < t.length;
                    i++
                  )
                    if ('string' == typeof t[i]) {
                      const o = t[i],
                        u = n[o] || -1;
                      u >= 0
                        ? r
                          ? r.push(u)
                          : ((r = [u]), e.push(r), a++)
                        : ((r = null), e.push(o), (n[o] = a++));
                    } else (r = null), e.push(t[i]), a++;
                  return e;
                })(r),
                !u.lean
              ),
              (T.label = 9);
            case 9:
              return [3, 10];
            case 10:
              return [2];
          }
        });
      })
    );
  }
  function Ht(t) {
    if (null !== t.metadata.size && 0 === t.metadata.size.length) {
      const e = Rn(t.id);
      if (e)
        return [
          Math.floor(100 * e.offsetWidth),
          Math.floor(100 * e.offsetHeight),
        ];
    }
    return t.metadata.size;
  }
  function Yt(t) {
    return t.toString(36);
  }
  function Wt(t, e, n) {
    return ''.concat(t, '=').concat(ft(e, t, n));
  }
  function Xt() {
    Lt = null;
  }
  function qt() {
    const t = document.body,
      e = document.documentElement,
      n = t ? t.clientWidth : null,
      a = t ? t.scrollWidth : null,
      r = t ? t.offsetWidth : null,
      i = e ? e.clientWidth : null,
      o = e ? e.scrollWidth : null,
      u = e ? e.offsetWidth : null,
      c = Math.max(n, a, r, i, o, u),
      s = t ? t.clientHeight : null,
      l = t ? t.scrollHeight : null,
      d = t ? t.offsetHeight : null,
      f = e ? e.clientHeight : null,
      h = e ? e.scrollHeight : null,
      p = e ? e.offsetHeight : null,
      v = Math.max(s, l, d, f, h, p);
    (null !== Lt && c === Lt.width && v === Lt.height) ||
      null === c ||
      null === v ||
      ((Lt = { width: c, height: v }), Rt(8));
  }
  function Pt(t) {
    const e = { x: 0, y: 0 };
    if (t && t.offsetParent)
      do {
        const n = t.offsetParent,
          a = null === n ? Cn(t.ownerDocument) : null;
        (e.x += t.offsetLeft), (e.y += t.offsetTop), (t = a || n);
      } while (t);
    return e;
  }
  let Ut = ['input', 'textarea', 'radio', 'button', 'canvas'],
    Bt = [];
  function Vt(t) {
    zr(t, 'click', Ft.bind(this, 9, t), !0);
  }
  function Ft(t, e, n) {
    let a = Cn(e),
      r = a ? a.contentDocument.documentElement : document.documentElement,
      i =
        'pageX' in n
          ? Math.round(n.pageX)
          : 'clientX' in n
            ? Math.round(n.clientX + r.scrollLeft)
            : null,
      o =
        'pageY' in n
          ? Math.round(n.pageY)
          : 'clientY' in n
            ? Math.round(n.clientY + r.scrollTop)
            : null;
    if (a) {
      const u = Pt(a);
      (i = i ? i + Math.round(u.x) : i), (o = o ? o + Math.round(u.y) : o);
    }
    const c = ra(n),
      s = (function (t) {
        for (; t && t !== document; ) {
          if (t.nodeType === Node.ELEMENT_NODE) {
            const e = t;
            if ('A' === e.tagName) return e;
          }
          t = t.parentNode;
        }
        return null;
      })(c),
      d = (function (t) {
        let e = null,
          n = document.documentElement;
        if ('function' == typeof t.getBoundingClientRect) {
          const a = t.getBoundingClientRect();
          a &&
            a.width > 0 &&
            a.height > 0 &&
            (e = {
              x: Math.floor(
                a.left +
                  ('pageXOffset' in window ? window.pageXOffset : n.scrollLeft)
              ),
              y: Math.floor(
                a.top +
                  ('pageYOffset' in window ? window.pageYOffset : n.scrollTop)
              ),
              w: Math.floor(a.width),
              h: Math.floor(a.height),
            });
        }
        return e;
      })(c);
    0 === n.detail &&
      d &&
      ((i = Math.round(d.x + d.w / 2)), (o = Math.round(d.y + d.h / 2)));
    const f = d ? Math.max(Math.floor(((i - d.x) / d.w) * 32767), 0) : 0,
      h = d ? Math.max(Math.floor(((o - d.y) / d.h) * 32767), 0) : 0;
    null !== i &&
      null !== o &&
      (Bt.push({
        time: l(),
        event: t,
        data: {
          target: c,
          x: i,
          y: o,
          eX: f,
          eY: h,
          button: n.button,
          reaction: Gt(c),
          context: Zt(s),
          text: Jt(c),
          link: s ? s.href : null,
          hash: null,
          trust: n.isTrusted ? 1 : 0,
        },
      }),
      Nt(oa.bind(this, t)));
  }
  function Jt(t) {
    let e = null;
    if (t) {
      const n = t.textContent || t.value || t.alt;
      n && (e = n.trim().replace(/\s+/g, ' ').substr(0, 25));
    }
    return e;
  }
  function Gt(t) {
    if (t.nodeType === Node.ELEMENT_NODE) {
      const e = t.tagName.toLowerCase();
      if (Ut.indexOf(e) >= 0) return 0;
    }
    return 1;
  }
  function Zt(t) {
    if (t && t.hasAttribute('target'))
      switch (t.getAttribute('target')) {
        case '_blank':
          return 1;
        case '_parent':
          return 2;
        case '_top':
          return 3;
      }
    return 0;
  }
  function Kt() {
    Bt = [];
  }
  let Qt = [];
  function $t(t, e) {
    Qt.push({ time: l(), event: 38, data: { target: ra(e), action: t } }),
    Nt(oa.bind(this, 38));
  }
  function te() {
    Qt = [];
  }
  let ee = null,
    ne = [];
  function ae(t) {
    const e = ra(t),
      n = Yn(e);
    if (e && e.type && n) {
      let a = e.value;
      switch (e.type) {
        case 'radio':
        case 'checkbox':
          a = e.checked ? 'true' : 'false';
      }
      const r = { target: e, value: a };
      ne.length > 0 && ne[ne.length - 1].data.target === r.target && ne.pop(),
      ne.push({ time: l(), event: 27, data: r }),
      I(ee),
      (ee = D(re, 500, 27));
    }
  }
  function re(t) {
    Nt(oa.bind(this, t));
  }
  function ie() {
    ne = [];
  }
  let oe,
    ue = [],
    ce = null;
  function se(t, e, n) {
    let a = Cn(e),
      r = a ? a.contentDocument.documentElement : document.documentElement,
      i =
        'pageX' in n
          ? Math.round(n.pageX)
          : 'clientX' in n
            ? Math.round(n.clientX + r.scrollLeft)
            : null,
      o =
        'pageY' in n
          ? Math.round(n.pageY)
          : 'clientY' in n
            ? Math.round(n.clientY + r.scrollTop)
            : null;
    if (a) {
      const u = Pt(a);
      (i = i ? i + Math.round(u.x) : i), (o = o ? o + Math.round(u.y) : o);
    }
    null !== i &&
      null !== o &&
      de({ time: l(), event: t, data: { target: ra(n), x: i, y: o } });
  }
  function le(t, e, n) {
    const a = Cn(e),
      r = a ? a.contentDocument.documentElement : document.documentElement,
      i = n.changedTouches,
      o = l();
    if (i)
      for (let u = 0; u < i.length; u++) {
        let c = i[u],
          s = 'clientX' in c ? Math.round(c.clientX + r.scrollLeft) : null,
          d = 'clientY' in c ? Math.round(c.clientY + r.scrollTop) : null;
        (s = s && a ? s + Math.round(a.offsetLeft) : s),
        (d = d && a ? d + Math.round(a.offsetTop) : d),
        null !== s &&
            null !== d &&
            de({ time: o, event: t, data: { target: ra(n), x: s, y: d } });
      }
  }
  function de(t) {
    switch (t.event) {
      case 12:
      case 15:
      case 19:
        var e = ue.length,
          n = e > 1 ? ue[e - 2] : null;
        n &&
          (function (t, e) {
            const n = t.data.x - e.data.x,
              a = t.data.y - e.data.y,
              r = Math.sqrt(n * n + a * a),
              i = e.time - t.time,
              o = e.data.target === t.data.target;
            return e.event === t.event && o && r < 20 && i < 25;
          })(n, t) &&
          ue.pop(),
        ue.push(t),
        I(ce),
        (ce = D(fe, 500, t.event));
        break;
      default:
        ue.push(t), fe(t.event);
    }
  }
  function fe(t) {
    Nt(oa.bind(this, t));
  }
  function he() {
    ue = [];
  }
  function pe() {
    const t = document.documentElement;
    (oe = {
      width:
        t && 'clientWidth' in t
          ? Math.min(t.clientWidth, window.innerWidth)
          : window.innerWidth,
      height:
        t && 'clientHeight' in t
          ? Math.min(t.clientHeight, window.innerHeight)
          : window.innerHeight,
    }),
    oa(11);
  }
  function ve() {
    oe = null;
  }
  let ge = [],
    me = null;
  function be(t) {
    void 0 === t && (t = null);
    let e = window,
      n = document.documentElement,
      a = t ? ra(t) : n;
    if (a && a.nodeType === Node.DOCUMENT_NODE) {
      const r = Cn(a);
      (e = r ? r.contentWindow : e), (a = n = a.documentElement);
    }
    const i =
        a === n && 'pageXOffset' in e
          ? Math.round(e.pageXOffset)
          : Math.round(a.scrollLeft),
      o =
        a === n && 'pageYOffset' in e
          ? Math.round(e.pageYOffset)
          : Math.round(a.scrollTop),
      u = { time: l(), event: 10, data: { target: a, x: i, y: o } };
    if ((null !== t || 0 !== i || 0 !== o) && null !== i && null !== o) {
      const c = ge.length,
        s = c > 1 ? ge[c - 2] : null;
      s &&
        (function (t, e) {
          const n = t.data.x - e.data.x,
            a = t.data.y - e.data.y;
          return n * n + a * a < 400 && e.time - t.time < 25;
        })(s, u) &&
        ge.pop(),
      ge.push(u),
      I(me),
      (me = D(ye, 500, 10));
    }
  }
  function ye(t) {
    Nt(oa.bind(this, t));
  }
  let we = null,
    ke = null,
    Ee = null;
  function Oe(t) {
    const e = (t.nodeType === Node.DOCUMENT_NODE ? t : document).getSelection();
    if (
      null !== e &&
      !(
        (null === e.anchorNode && null === e.focusNode) ||
        (e.anchorNode === e.focusNode && e.anchorOffset === e.focusOffset)
      )
    ) {
      const n = we.start ? we.start : null;
      null !== ke && null !== we.start && n !== e.anchorNode && (I(Ee), xe(21)),
      (we = {
        start: e.anchorNode,
        startOffset: e.anchorOffset,
        end: e.focusNode,
        endOffset: e.focusOffset,
      }),
      (ke = e),
      I(Ee),
      (Ee = D(xe, 500, 21));
    }
  }
  function xe(t) {
    Nt(oa.bind(this, t));
  }
  function Me() {
    (ke = null), (we = { start: 0, startOffset: 0, end: 0, endOffset: 0 });
  }
  let Se,
    Ne,
    _e = [];
  function Te(t) {
    _e.push({ time: l(), event: 39, data: { target: ra(t) } }),
    Nt(oa.bind(this, 39));
  }
  function De() {
    _e = [];
  }
  function Ie(t) {
    (Se = { name: t.type }), oa(26), si();
  }
  function Ce() {
    Se = null;
  }
  function je() {
    (Ne = {
      visible:
        'visibilityState' in document ? document.visibilityState : 'default',
    }),
    oa(28);
  }
  function ze() {
    Ne = null;
  }
  function Le(t) {
    !(function (t) {
      const e = Cn(t);
      zr(e ? e.contentWindow : t === document ? window : t, 'scroll', be, !0);
    })(t),
    t.nodeType === Node.DOCUMENT_NODE &&
        (Vt(t),
        (function (t) {
          zr(t, 'cut', $t.bind(this, 0), !0),
          zr(t, 'copy', $t.bind(this, 1), !0),
          zr(t, 'paste', $t.bind(this, 2), !0);
        })(t),
        (function (t) {
          zr(t, 'mousedown', se.bind(this, 13, t), !0),
          zr(t, 'mouseup', se.bind(this, 14, t), !0),
          zr(t, 'mousemove', se.bind(this, 12, t), !0),
          zr(t, 'wheel', se.bind(this, 15, t), !0),
          zr(t, 'dblclick', se.bind(this, 16, t), !0),
          zr(t, 'touchstart', le.bind(this, 17, t), !0),
          zr(t, 'touchend', le.bind(this, 18, t), !0),
          zr(t, 'touchmove', le.bind(this, 19, t), !0),
          zr(t, 'touchcancel', le.bind(this, 20, t), !0);
        })(t),
        (function (t) {
          zr(t, 'input', ae, !0);
        })(t),
        (function (t) {
          zr(t, 'selectstart', Oe.bind(this, t), !0),
          zr(t, 'selectionchange', Oe.bind(this, t), !0);
        })(t),
        (function (t) {
          zr(t, 'submit', Te, !0);
        })(t));
  }
  const Ae = Object.freeze({
      __proto__: null,
      start: function () {
        (ua = []),
        sa(),
        Kt(),
        te(),
        he(),
        ie(),
        zr(window, 'resize', pe),
        pe(),
        zr(document, 'visibilitychange', je),
        je(),
        (ge = []),
        be(),
        Me(),
        De(),
        zr(window, 'pagehide', Ie);
      },
      stop: function () {
        (ua = []),
        sa(),
        Kt(),
        te(),
        I(ce),
        ue.length > 0 && fe(ue[ue.length - 1].event),
        I(ee),
        ie(),
        ve(),
        ze(),
        I(me),
        (ge = []),
        Me(),
        I(Ee),
        De(),
        Ce();
      },
      observe: Le,
    }),
    Re = /[^0-9\.]/g;
  function He(t) {
    for (let e = 0, n = Object.keys(t); e < n.length; e++) {
      let a = n[e],
        r = t[a];
      if ('@type' === a && 'string' == typeof r)
        switch (
          (r =
            (r = r.toLowerCase()).indexOf('article') >= 0 ||
            r.indexOf('posting') >= 0
              ? 'article'
              : r)
        ) {
          case 'article':
          case 'recipe':
            ir(5, t[a]), ir(8, t.creator), ir(18, t.headline);
            break;
          case 'product':
            ir(5, t[a]),
            ir(10, t.name),
            ir(12, t.sku),
            t.brand && ir(6, t.brand.name);
            break;
          case 'aggregaterating':
            t.ratingValue &&
              (T(11, Ye(t.ratingValue, 100)),
              T(18, Ye(t.bestRating)),
              T(19, Ye(t.worstRating))),
            T(12, Ye(t.ratingCount)),
            T(17, Ye(t.reviewCount));
            break;
          case 'person':
            ir(8, t.name);
            break;
          case 'offer':
            ir(7, t.availability),
            ir(14, t.itemCondition),
            ir(13, t.priceCurrency),
            ir(12, t.sku),
            T(13, Ye(t.price));
            break;
          case 'brand':
            ir(6, t.name);
        }
      null !== r && 'object' == typeof r && He(r);
    }
  }
  function Ye(t, e) {
    if ((void 0 === e && (e = 1), null !== t))
      switch (typeof t) {
        case 'number':
          return Math.round(t * e);
        case 'string':
          return Math.round(parseFloat(t.replace(Re, '')) * e);
      }
    return null;
  }
  const We = [
      'title',
      'alt',
      'onload',
      'onfocus',
      'onerror',
      'data-drupal-form-submit-last',
    ],
    Xe = /[\r\n]+/g;
  function qe(e, n) {
    let a = null;
    if (2 === n && !1 === Xn(e)) return a;
    0 !== n &&
      e.nodeType === Node.TEXT_NODE &&
      e.parentElement &&
      'STYLE' === e.parentElement.tagName &&
      (e = e.parentNode);
    let r = !1 === Xn(e) ? 'add' : 'update',
      i = e.parentElement ? e.parentElement : null,
      o = e.ownerDocument !== document;
    switch (e.nodeType) {
      case Node.DOCUMENT_TYPE_NODE:
        i = o && e.parentNode ? Cn(e.parentNode) : i;
        var u = e,
          c = {
            tag: `${o ? 'iframe:' : ''  }*D`,
            attributes: {
              name: u.name,
              publicId: u.publicId,
              systemId: u.systemId,
            },
          };
        t[r](e, i, c, n);
        break;
      case Node.DOCUMENT_NODE:
        e === document && Nn(document), Pe(e);
        break;
      case Node.DOCUMENT_FRAGMENT_NODE:
        var s = e;
        if (s.host)
          if (
            (Nn(s),
            'function' === typeof s.constructor &&
              s.constructor.toString().indexOf('[native code]') >= 0)
          ) {
            Pe(s);
            for (
              var l = '',
                d = 0,
                f = ('adoptedStyleSheets' in s) ? s.adoptedStyleSheets : [];
              d < f.length;
              d++
            ) {
              l += Be(f[d]);
            }
            const h = { tag: '*S', attributes: { style: l } };
            t[r](e, s.host, h, n);
          } else t[r](e, s.host, { tag: '*P', attributes: {} }, n);
        break;
      case Node.TEXT_NODE:
        if (
          ((i = i || e.parentNode),
          'update' === r || (i && Xn(i) && 'STYLE' !== i.tagName))
        ) {
          const p = { tag: '*T', value: e.nodeValue };
          t[r](e, i, p, n);
        }
        break;
      case Node.ELEMENT_NODE:
        var v = e,
          g = v.tagName,
          m = (function (t) {
            const e = {},
              n = t.attributes;
            if (n && n.length > 0)
              for (let a = 0; a < n.length; a++) {
                const r = n[a].name;
                We.indexOf(r) < 0 && (e[r] = n[a].value);
              }
            'INPUT' === t.tagName &&
              !('value' in e) &&
              t.value &&
              (e.value = t.value);
            return e;
          })(v);
        switch (
          ((i = e.parentElement
            ? e.parentElement
            : e.parentNode
              ? e.parentNode
              : null),
          'http://www.w3.org/2000/svg' === v.namespaceURI && (g = `svg:${  g}`),
          g)
        ) {
          case 'HTML':
            i = o && i ? Cn(i) : null;
            var b = { tag: (o ? 'iframe:' : '') + g, attributes: m };
            t[r](e, i, b, n);
            break;
          case 'SCRIPT':
            if ('type' in m && 'application/ld+json' === m.type)
              try {
                He(JSON.parse(v.text.replace(Xe, '')));
              } catch (t) {}
            break;
          case 'NOSCRIPT':
            break;
          case 'META':
            var y = 'property' in m ? 'property' : 'name' in m ? 'name' : null;
            if (y && 'content' in m) {
              const w = m.content;
              switch (m[y]) {
                case 'og:title':
                  ir(20, w);
                  break;
                case 'og:type':
                  ir(19, w);
                  break;
                case 'generator':
                  ir(21, w);
              }
            }
            break;
          case 'HEAD':
            var k = { tag: g, attributes: m };
            location &&
              (k.attributes['*B'] =
                `${location.protocol  }//${  location.hostname}`),
            t[r](e, i, k, n);
            break;
          case 'STYLE':
            var E = { tag: g, attributes: m, value: Ue(v) };
            t[r](e, i, E, n);
            break;
          case 'IFRAME':
            var O = e,
              x = { tag: g, attributes: m };
            In(O) &&
              (!(function (t) {
                !1 === Xn(t) &&
                  zr(t, 'load', cn.bind(this, t, 'childList'), !0);
              })(O),
              (x.attributes['*O'] = 'true'),
              O.contentDocument &&
                O.contentWindow &&
                'loading' !== O.contentDocument.readyState &&
                (a = O.contentDocument)),
            t[r](e, i, x, n);
            break;
          default:
            var M = { tag: g, attributes: m };
            v.shadowRoot && (a = v.shadowRoot), t[r](e, i, M, n);
        }
    }
    return a;
  }
  function Pe(t) {
    Xn(t) ||
      (!(function (t) {
        try {
          const e = c('MutationObserver'),
            n = e in window ? new window[e](Cr(nn)) : null;
          n &&
            (n.observe(t, {
              attributes: !0,
              childList: !0,
              characterData: !0,
              subtree: !0,
            }),
            Fe.push(n));
        } catch (t) {
          ja(2, 0, t ? t.name : null);
        }
      })(t),
      Le(t));
  }
  function Ue(t) {
    let e = t.textContent ? t.textContent.trim() : '',
      n = t.dataset ? Object.keys(t.dataset).length : 0;
    return (0 === e.length || n > 0) && (e = Be(t.sheet)), e;
  }
  function Be(t) {
    let e = '',
      n = null;
    try {
      n = t ? t.cssRules : [];
    } catch (t) {
      if ((ja(1, 1, t ? t.name : null), t && 'SecurityError' !== t.name))
        throw t;
    }
    if (null !== n) for (let a = 0; a < n.length; a++) e += n[a].cssText;
    return e;
  }
  function Ve(t, e, n) {
    return Q(this, void 0, void 0, function () {
      let a, r, i, o, u;
      return $(this, function (c) {
        switch (c.label) {
          case 0:
            (a = [t]), (c.label = 1);
          case 1:
            if (!(a.length > 0)) return [3, 4];
            for (r = a.shift(), i = r.firstChild; i; )
              a.push(i), (i = i.nextSibling);
            return 0 !== (o = Tt(e)) ? [3, 3] : [4, Ct(e)];
          case 2:
            (o = c.sent()), (c.label = 3);
          case 3:
            return 2 === o ? [3, 4] : ((u = qe(r, n)) && a.push(u), [3, 1]);
          case 4:
            return [2];
        }
      });
    });
  }
  var Fe = [],
    Je = [],
    Ge = null,
    Ze = null,
    Ke = null,
    Qe = [],
    $e = null,
    tn = null,
    en = {};
  function nn(t) {
    const e = l();
    Y(6, e),
    Je.push({ time: e, mutations: t }),
    Nt(an, 1).then(function () {
      D(qt), Cr($n)();
    });
  }
  function an() {
    return Q(this, void 0, void 0, function () {
      let t, e, n, a, r, i, o, u, c;
      return $(this, function (s) {
        switch (s.label) {
          case 0:
            Dt((t = { id: pr(), cost: 3 })), (s.label = 1);
          case 1:
            if (!(Je.length > 0)) return [3, 8];
            (e = Je.shift()), (n = 0), (a = e.mutations), (s.label = 2);
          case 2:
            return n < a.length
              ? ((r = a[n]), 0 !== (i = Tt(t)) ? [3, 4] : [4, Ct(t)])
              : [3, 6];
          case 3:
            (i = s.sent()), (s.label = 4);
          case 4:
            if (2 === i) return [3, 6];
            switch (
              ((o = r.target),
              (u = (function (t, e) {
                const n = t.target ? Yn(t.target.parentNode) : null;
                if (n && 'HTML' !== n.data.tag) {
                  const a = l() > tn,
                    r = Yn(t.target),
                    i = r && r.selector ? r.selector.join() : t.target.nodeName,
                    o = [
                      n.selector ? n.selector.join() : '',
                      i,
                      t.attributeName,
                      rn(t.addedNodes),
                      rn(t.removedNodes),
                    ].join();
                  en[o] = o in en ? en[o] : [0];
                  const u = en[o];
                  if (
                    (!1 === a && u[0] >= 10 && on(u[1], 2, e),
                    (u[0] = a ? u[0] + 1 : 1),
                    10 === u[0])
                  )
                    return (u[1] = t.removedNodes), 'suspend';
                  if (u[0] > 10) return '';
                }
                return t.type;
              })(r, t)),
              u && o && o.ownerDocument && Nn(o.ownerDocument),
              u &&
                o &&
                o.nodeType == Node.DOCUMENT_FRAGMENT_NODE &&
                o.host &&
                Nn(o),
              u)
            ) {
              case 'attributes':
                qe(o, 3);
                break;
              case 'characterData':
                qe(o, 4);
                break;
              case 'childList':
                on(r.addedNodes, 1, t), on(r.removedNodes, 2, t);
                break;
              case 'suspend':
                (c = Yn(o)) && (c.metadata.suspend = !0);
            }
            s.label = 5;
          case 5:
            return n++, [3, 2];
          case 6:
            return [4, Rt(6, t, e.time)];
          case 7:
            return s.sent(), [3, 1];
          case 8:
            return It(t), [2];
        }
      });
    });
  }
  function rn(t) {
    for (var e = [], n = 0; t && n < t.length; n++) e.push(t[n].nodeName);
    return e.join();
  }
  function on(t, e, n) {
    return Q(this, void 0, void 0, function () {
      let a, r, i;
      return $(this, function (o) {
        switch (o.label) {
          case 0:
            (a = t ? t.length : 0), (r = 0), (o.label = 1);
          case 1:
            return r < a
              ? 1 !== e
                ? [3, 2]
                : (Ve(t[r], n, e), [3, 5])
              : [3, 6];
          case 2:
            return 0 !== (i = Tt(n)) ? [3, 4] : [4, Ct(n)];
          case 3:
            (i = o.sent()), (o.label = 4);
          case 4:
            if (2 === i) return [3, 6];
            qe(t[r], e), (o.label = 5);
          case 5:
            return r++, [3, 1];
          case 6:
            return [2];
        }
      });
    });
  }
  function un(t, e) {
    return (
      void 0 === e && (e = !1),
      Qe.indexOf(t) < 0 && Qe.push(t),
      $e && I($e),
      ($e = D(function () {
        !(function (t) {
          for (let e = 0, n = Qe; e < n.length; e++) {
            const a = n[e];
            if (a) {
              const r = a.nodeType === Node.DOCUMENT_FRAGMENT_NODE;
              if (r && Xn(a)) continue;
              cn(a, r || t ? 'childList' : 'characterData');
            }
          }
          Qe = [];
        })(e);
      }, 33)),
      t
    );
  }
  function cn(t, e) {
    Cr(nn)([
      {
        addedNodes: [t],
        attributeName: null,
        attributeNamespace: null,
        nextSibling: null,
        oldValue: null,
        previousSibling: null,
        removedNodes: [],
        target: t,
        type: e,
      },
    ]);
  }
  let sn = 1,
    ln = [],
    dn = [],
    fn = [],
    hn = {},
    pn = [],
    vn = [],
    gn = {},
    mn = [],
    bn = [],
    yn = [],
    wn = null,
    kn = null,
    En = null,
    On = null;
  function xn() {
    Sn(), Nn(document, !0);
  }
  function Mn() {
    Sn();
  }
  function Sn() {
    (sn = 1),
    (ln = []),
    (dn = []),
    (fn = []),
    (hn = {}),
    (pn = []),
    (vn = []),
    (mn = 'address,password,contact'.split(',')),
    (bn =
        'password,secret,pass,social,ssn,name,code,dob,cell,mob,contact,hidden,account,cvv,ccv,email,tel,phone,address,addr,card,zip'.split(
          ','
        )),
    (yn = 'radio,checkbox,range,button,reset,submit'.split(',')),
    (wn = new WeakMap()),
    (kn = new WeakMap()),
    (En = new WeakMap()),
    (On = new WeakMap()),
    (bt = {});
  }
  function Nn(t, e) {
    void 0 === e && (e = !1);
    try {
      e &&
        u.unmask.forEach(function (t) {
          return t.indexOf('!') < 0 ? vn.push(t) : pn.push(t.substr(1));
        }),
      'querySelectorAll' in t &&
          (u.regions.forEach(function (e) {
            return t.querySelectorAll(e[1]).forEach(function (t) {
              return Kn(t, ''.concat(e[0]));
            });
          }),
          u.mask.forEach(function (e) {
            return t.querySelectorAll(e).forEach(function (t) {
              return En.set(t, 3);
            });
          }),
          u.fraud.forEach(function (e) {
            return t.querySelectorAll(e[1]).forEach(function (t) {
              return On.set(t, e[0]);
            });
          }),
          vn.forEach(function (e) {
            return t.querySelectorAll(e).forEach(function (t) {
              return En.set(t, 0);
            });
          }));
    } catch (t) {
      ja(5, 1, t ? t.name : null);
    }
  }
  function _n(t, e) {
    if ((void 0 === e && (e = !1), null === t)) return null;
    let n = wn.get(t);
    return !n && e && ((n = sn++), wn.set(t, n)), n || null;
  }
  function Tn(t, e, n, a) {
    let r,
      i = _n(t, !0),
      o = e ? _n(e) : null,
      c = Pn(t),
      s = null,
      l = Qn(t) ? i : null,
      d = null,
      f = On.has(t) ? On.get(t) : null,
      h = u.content ? 1 : 3;
    o >= 0 &&
      dn[o] &&
      ((s = dn[o]).children.push(i),
      (l = null === l ? s.region : l),
      (d = s.fragment),
      (f = null === f ? s.metadata.fraud : f),
      (h = s.metadata.privacy)),
    n.attributes &&
        'data-clarity-region' in n.attributes &&
        (Kn(t, n.attributes['data-clarity-region']), (l = i)),
    (ln[i] = t),
    (dn[i] = {
      id: i,
      parent: o,
      previous: c,
      children: [],
      data: n,
      selector: null,
      hash: null,
      region: l,
      metadata: {
        active: !0,
        suspend: !1,
        privacy: h,
        position: null,
        fraud: f,
        size: null,
      },
      fragment: d,
    }),
    (function (t, e, n) {
      const a = e.data,
        r = e.metadata,
        i = r.privacy,
        o = a.attributes || {},
        u = a.tag.toUpperCase();
      switch (!0) {
        case 'data-clarity-mask' in o:
          r.privacy = 3;
          break;
        case 'data-clarity-unmask' in o:
          r.privacy = 0;
          break;
        case En.has(t):
          r.privacy = En.get(t);
          break;
        case On.has(t):
          r.privacy = 2;
          break;
        case '*T' === u:
          var c = n && n.data ? n.data.tag : '',
            s = n && n.selector ? n.selector[1] : '',
            l = ['STYLE', 'TITLE', 'svg:style'];
          r.privacy =
              l.includes(c) ||
              pn.some(function (t) {
                return s.indexOf(t) >= 0;
              })
                ? 0
                : i;
          break;
        case 'INPUT' === u && 0 === i:
          var d = '';
          Object.keys(o).forEach(function (t) {
            return (d += o[t].toLowerCase());
          }),
          (r.privacy = jn(d, bn, r));
          break;
        case 'INPUT' === u && 1 === i:
          (r.privacy = jn(o.class, mn, r)),
          (r.privacy = jn(o.type, bn, r)),
          (r.privacy = yn.indexOf(o.type) >= 0 ? 0 : r.privacy);
          break;
        case 1 === i:
          r.privacy = jn(o.class, mn, r);
      }
    })(t, dn[i], s),
    Ln(dn[i]),
    'IMG' === (r = dn[i]).data.tag &&
        3 === r.metadata.privacy &&
        (r.metadata.size = []),
    Un(i, a, dn[i].fragment);
  }
  function Dn(t, e, n, a) {
    let r = _n(t),
      i = e ? _n(e) : null,
      o = Pn(t),
      u = !1,
      c = !1;
    if (r in dn) {
      const s = dn[r];
      if (
        ((s.metadata.active = !0),
        s.previous !== o && ((u = !0), (s.previous = o)),
        s.parent !== i)
      ) {
        u = !0;
        const l = s.parent;
        if (((s.parent = i), null !== i && i >= 0)) {
          const d = null === o ? 0 : dn[i].children.indexOf(o) + 1;
          dn[i].children.splice(d, 0, r), (s.region = Qn(t) ? r : dn[i].region);
        } else
          !(function (t, e) {
            if (t in dn) {
              const n = dn[t];
              (n.metadata.active = !1), (n.parent = null), Un(t, e);
            }
          })(r, a);
        if (null !== l && l >= 0) {
          const f = dn[l].children.indexOf(r);
          f >= 0 && dn[l].children.splice(f, 1);
        }
        c = !0;
      }
      for (const h in n) zn(s.data, n, h) && ((u = !0), (s.data[h] = n[h]));
      s.fragment && gn[s.fragment] && (u = !0),
      Ln(s),
      Un(r, a, dn[r].fragment, u, c);
    }
  }
  function In(t) {
    let e = !1;
    if (t.nodeType === Node.ELEMENT_NODE && 'IFRAME' === t.tagName) {
      const n = t;
      try {
        n.contentDocument && (kn.set(n.contentDocument, n), (e = !0));
      } catch (t) {}
    }
    return e;
  }
  function Cn(t) {
    const e = t.nodeType === Node.DOCUMENT_NODE ? t : null;
    return e && kn.has(e) ? kn.get(e) : null;
  }
  function jn(t, e, n) {
    return t &&
      e.some(function (e) {
        return t.indexOf(e) >= 0;
      })
      ? 2
      : n.privacy;
  }
  function zn(t, e, n) {
    if ('object' == typeof t[n] && 'object' == typeof e[n]) {
      for (var a in t[n]) if (t[n][a] !== e[n][a]) return !0;
      for (var a in e[n]) if (e[n][a] !== t[n][a]) return !0;
      return !1;
    }
    return t[n] !== e[n];
  }
  function Ln(t) {
    const e = t.parent && t.parent in dn ? dn[t.parent] : null,
      n = e ? e.selector : null,
      a = t.data,
      r = (function (t, e) {
        e.metadata.position = 1;
        for (let n = t ? t.children.indexOf(e.id) : -1; n-- > 0; ) {
          const a = dn[t.children[n]];
          if (e.data.tag === a.data.tag) {
            e.metadata.position = a.metadata.position + 1;
            break;
          }
        }
        return e.metadata.position;
      })(e, t),
      i = {
        id: t.id,
        tag: a.tag,
        prefix: n,
        position: r,
        attributes: a.attributes,
      };
    (t.selector = [yt(i, 0), yt(i, 1)]),
    (t.hash = t.selector.map(function (t) {
      return t ? f(t) : null;
    })),
    t.hash.forEach(function (e) {
      return (hn[e] = t.id);
    }),
    t.hash.some(function (t) {
      return -1 !== Ya.indexOf(t);
    }) && (t.fragment = t.id);
  }
  function An(t) {
    const e = Rn(Wn(t));
    return null !== e && null !== e.textContent
      ? e.textContent.substr(0, 25)
      : '';
  }
  function Rn(t) {
    return t in ln ? ln[t] : null;
  }
  function Hn(t) {
    return t in dn ? dn[t] : null;
  }
  function Yn(t) {
    const e = _n(t);
    return e in dn ? dn[e] : null;
  }
  function Wn(t) {
    return t in hn ? hn[t] : null;
  }
  function Xn(t) {
    return _n(t) in ln;
  }
  function qn() {
    for (var t = [], e = 0, n = fn; e < n.length; e++) {
      (a = n[e]) in dn && t.push(dn[a]);
    }
    for (var a in ((fn = []), gn)) Ua(gn[a], a, !0);
    return (gn = {}), t;
  }
  function Pn(t) {
    for (var e = null; null === e && t.previousSibling; )
      (e = _n(t.previousSibling)), (t = t.previousSibling);
    return e;
  }
  function Un(t, e, n, a, r) {
    if (
      (void 0 === n && (n = null),
      void 0 === a && (a = !0),
      void 0 === r && (r = !1),
      n && !gn[n])
    ) {
      const i = Rn(n),
        o = Hn(n);
      i &&
        o &&
        (un(i, !0),
        o.hash.forEach(function (t) {
          -1 !== Ya.indexOf(t) && (gn[n] = t);
        }));
    }
    const u = fn.indexOf(t);
    u >= 0 && 1 === e && r
      ? (fn.splice(u, 1), fn.push(t))
      : -1 === u && a && fn.push(t);
  }
  var Bn = [],
    Vn = null,
    Fn = {},
    Jn = [],
    Gn = !1,
    Zn = null;
  function Kn(t, e) {
    !1 === Vn.has(t) &&
      (Vn.set(t, e),
      (Zn =
        null === Zn && Gn
          ? new IntersectionObserver(ta, {
            threshold: [0, 0.2, 0.4, 0.6, 0.8, 1],
          })
          : Zn) &&
        t &&
        t.nodeType === Node.ELEMENT_NODE &&
        Zn.observe(t));
  }
  function Qn(t) {
    return Vn && Vn.has(t);
  }
  function $n() {
    for (var t = [], e = 0, n = Jn; e < n.length; e++) {
      const a = n[e],
        r = _n(a.node);
      r in Fn ||
        (r
          ? ((a.data.id = r), (Fn[r] = a.data), Bn.push(na(a.data)))
          : t.push(a));
    }
    (Jn = t), Bn.length > 0 && Rt(7);
  }
  function ta(t) {
    for (let e = 0, n = t; e < n.length; e++) {
      const a = n[e],
        r = a.target,
        i = a.boundingClientRect,
        o = a.intersectionRect,
        u = a.rootBounds;
      if (Vn.has(r) && i.width + i.height > 0 && u.width > 0 && u.height > 0) {
        const c = r ? _n(r) : null,
          s =
            c in Fn
              ? Fn[c]
              : { id: c, name: Vn.get(r), interaction: 16, visibility: 0 },
          l =
            (o ? (o.width * o.height * 1) / (u.width * u.height) : 0) > 0.05 ||
            a.intersectionRatio > 0.8,
          d =
            (l || 10 == s.visibility) && Math.abs(i.top) + u.height > i.height;
        ea(r, s, s.interaction, d ? 13 : l ? 10 : 0),
        s.visibility >= 13 && Zn && Zn.unobserve(r);
      }
    }
    Bn.length > 0 && Rt(7);
  }
  function ea(t, e, n, a) {
    const r = n > e.interaction || a > e.visibility;
    (e.interaction = n > e.interaction ? n : e.interaction),
    (e.visibility = a > e.visibility ? a : e.visibility),
    e.id
      ? ((e.id in Fn && r) || !(e.id in Fn)) &&
          ((Fn[e.id] = e), Bn.push(na(e)))
      : Jn.push({ node: t, data: e });
  }
  function na(t) {
    return {
      time: l(),
      data: {
        id: t.id,
        interaction: t.interaction,
        visibility: t.visibility,
        name: t.name,
      },
    };
  }
  function aa() {
    Bn = [];
  }
  function ra(t) {
    const e = t.composed && t.composedPath ? t.composedPath() : null,
      n = e && e.length > 0 ? e[0] : t.target;
    return (
      (tn = l() + 3e3),
      n.nodeType === Node.DOCUMENT_NODE ? n.documentElement : n
    );
  }
  function ia(t, e, n) {
    void 0 === n && (n = null);
    const a = { id: 0, hash: null, privacy: 2, node: t };
    if (t) {
      const r = Yn(t);
      if (null !== r) {
        const i = r.metadata;
        (a.id = r.id),
        (a.hash = r.hash),
        (a.privacy = i.privacy),
        r.region &&
            (function (t, e) {
              let n = Rn(t),
                a =
                  t in Fn
                    ? Fn[t]
                    : {
                      id: t,
                      visibility: 0,
                      interaction: 16,
                      name: Vn.get(n),
                    },
                r = 16;
              switch (e) {
                case 9:
                  r = 20;
                  break;
                case 27:
                  r = 30;
              }
              ea(n, a, r, a.visibility);
            })(r.region, e),
        i.fraud && gt(i.fraud, r.id, n || r.data.value);
      }
    }
    return a;
  }
  function oa(t) {
    return Q(this, void 0, void 0, function () {
      let e,
        n,
        a,
        r,
        i,
        o,
        u,
        c,
        s,
        d,
        f,
        h,
        p,
        v,
        g,
        b,
        w,
        k,
        E,
        O,
        x,
        M,
        S,
        N,
        _,
        T,
        D,
        I,
        C;
      return $(this, function (j) {
        switch (((e = l()), (n = [e, t]), t)) {
          case 13:
          case 14:
          case 12:
          case 15:
          case 16:
          case 17:
          case 18:
          case 19:
          case 20:
            for (a = 0, r = ue; a < r.length; a++)
              (I = r[a]),
              (i = ia(I.data.target, I.event)).id > 0 &&
                  ((n = [I.time, I.event]).push(i.id),
                  n.push(I.data.x),
                  n.push(I.data.y),
                  ka(n),
                  m(I.event, I.data.x, I.data.y));
            he();
            break;
          case 9:
            for (o = 0, u = Bt; o < u.length; o++)
              (I = u[o]),
              (c = ia(I.data.target, I.event, I.data.text)),
              (n = [I.time, I.event]),
              (s = c.hash.join('.')),
              n.push(c.id),
              n.push(I.data.x),
              n.push(I.data.y),
              n.push(I.data.eX),
              n.push(I.data.eY),
              n.push(I.data.button),
              n.push(I.data.reaction),
              n.push(I.data.context),
              n.push(ft(I.data.text, 'click', c.privacy)),
              n.push(I.data.link),
              n.push(s),
              n.push(I.data.trust),
              ka(n),
              la(
                I.time,
                I.event,
                s,
                I.data.x,
                I.data.y,
                I.data.reaction,
                I.data.context
              );
            Kt();
            break;
          case 38:
            for (d = 0, f = Qt; d < f.length; d++)
              (I = f[d]),
              (n = [I.time, I.event]),
              (_ = ia(I.data.target, I.event)).id > 0 &&
                  (n.push(_.id), n.push(I.data.action), ka(n));
            te();
            break;
          case 11:
            (h = oe),
            n.push(h.width),
            n.push(h.height),
            m(t, h.width, h.height),
            ve(),
            ka(n);
            break;
          case 26:
            (p = Se), n.push(p.name), Ce(), ka(n);
            break;
          case 27:
            for (v = 0, g = ne; v < g.length; v++)
              (I = g[v]),
              (b = ia(I.data.target, I.event, I.data.value)),
              (n = [I.time, I.event]).push(b.id),
              n.push(ft(I.data.value, 'input', b.privacy)),
              ka(n);
            ie();
            break;
          case 21:
            (w = we) &&
              ((k = ia(w.start, t)),
              (E = ia(w.end, t)),
              n.push(k.id),
              n.push(w.startOffset),
              n.push(E.id),
              n.push(w.endOffset),
              Me(),
              ka(n));
            break;
          case 10:
            for (O = 0, x = ge; O < x.length; O++)
              (I = x[O]),
              (M = ia(I.data.target, I.event)).id > 0 &&
                  ((n = [I.time, I.event]).push(M.id),
                  n.push(I.data.x),
                  n.push(I.data.y),
                  ka(n),
                  m(I.event, I.data.x, I.data.y));
            ge = [];
            break;
          case 39:
            for (S = 0, N = _e; S < N.length; S++)
              (I = N[S]),
              (n = [I.time, I.event]),
              (_ = ia(I.data.target, I.event)).id > 0 &&
                  (n.push(_.id), ka(n));
            De();
            break;
          case 22:
            for (T = 0, D = ca; T < D.length; T++)
              (I = D[T]),
              (n = [I.time, I.event]).push(I.data.type),
              n.push(I.data.hash),
              n.push(I.data.x),
              n.push(I.data.y),
              n.push(I.data.reaction),
              n.push(I.data.context),
              ka(n, !1);
            sa();
            break;
          case 28:
            (C = Ne), n.push(C.visible), ka(n), y(e, C.visible), ze();
        }
        return [2];
      });
    });
  }
  var ua = [],
    ca = [];
  function sa() {
    ca = [];
  }
  function la(t, e, n, a, r, i, o) {
    void 0 === i && (i = 1),
    void 0 === o && (o = 0),
    ua.push({
      time: t,
      event: 22,
      data: { type: e, hash: n, x: a, y: r, reaction: i, context: o },
    }),
    m(e, a, r);
  }
  let da,
    fa,
    ha,
    pa,
    va,
    ga = 0,
    ma = 0,
    ba = null,
    ya = 0;
  function wa() {
    (pa = !0),
    (ga = 0),
    (ma = 0),
    (ya = 0),
    (da = []),
    (fa = []),
    (ha = {}),
    (va = null);
  }
  function ka(t, e) {
    if ((void 0 === e && (e = !0), pa)) {
      const n = l(),
        a = t.length > 1 ? t[1] : null,
        r = JSON.stringify(t);
      switch (a) {
        case 5:
          ga += r.length;
        case 37:
        case 6:
          (ma += r.length), da.push(r);
          break;
        default:
          fa.push(r);
      }
      N(25);
      const i = (function () {
        const t = !1 === u.lean && ga > 0 ? 100 : Sr.sequence * u.delay;
        return 'string' == typeof u.upload
          ? Math.max(Math.min(t, 3e4), 100)
          : u.delay;
      })();
      n - ya > 2 * i && (I(ba), (ba = null)),
      e &&
          null === ba &&
          (25 !== a && L(), (ba = D(Oa, i)), (ya = n), Ka(ma));
    }
  }
  function Ea() {
    I(ba),
    Oa(!0),
    (ga = 0),
    (ma = 0),
    (ya = 0),
    (da = []),
    (fa = []),
    (ha = {}),
    (va = null),
    (pa = !1);
  }
  function Oa(t) {
    return (
      void 0 === t && (t = !1),
      Q(this, void 0, void 0, function () {
        let e, n, a, r, i, o, c, s;
        return $(this, function (l) {
          switch (l.label) {
            case 0:
              return (
                (ba = null),
                (e =
                  !1 === u.lean &&
                  ma > 0 &&
                  (ma < 1048576 || Sr.sequence > 0)) && T(1, 1),
                $n(),
                (function () {
                  const t = [];
                  ca = [];
                  for (
                    let e = Sr.start + Sr.duration,
                      n = Math.max(e - 2e3, 0),
                      a = 0,
                      r = ua;
                    a < r.length;
                    a++
                  ) {
                    const i = r[a];
                    i.time >= n && (i.time <= e && ca.push(i), t.push(i));
                  }
                  (ua = t), oa(22);
                })(),
                ot(),
                (n = !0 === t),
                (a = JSON.stringify(Tr(n))),
                (r = '['.concat(fa.join(), ']')),
                (i = e ? '['.concat(da.join(), ']') : ''),
                (o = (function (t) {
                  return t.p.length > 0
                    ? '{"e":'
                      .concat(t.e, ',"a":')
                      .concat(t.a, ',"p":')
                      .concat(t.p, '}')
                    : '{"e":'.concat(t.e, ',"a":').concat(t.a, '}');
                })({ e: a, a: r, p: i })),
                n ? ((s = null), [3, 3]) : [3, 1]
              );
            case 1:
              return [4, et(o)];
            case 2:
              (s = l.sent()), (l.label = 3);
            case 3:
              return (
                _(2, (c = s) ? c.length : o.length),
                xa(o, c, Sr.sequence, n),
                (fa = []),
                e && ((da = []), (ma = 0), (ga = 0)),
                [2]
              );
          }
        });
      })
    );
  }
  function xa(t, e, n, a) {
    if ((void 0 === a && (a = !1), 'string' == typeof u.upload)) {
      let r = u.upload,
        i = !1;
      if (a && 'sendBeacon' in navigator)
        try {
          (i = navigator.sendBeacon.bind(navigator)(r, t)) && Sa(n);
        } catch (t) {}
      if (!1 === i) {
        n in ha ? ha[n].attempts++ : (ha[n] = { data: t, attempts: 1 });
        const o = new XMLHttpRequest();
        o.open('POST', r),
        null !== n &&
            (o.onreadystatechange = function () {
              Cr(Ma)(o, n);
            }),
        (o.withCredentials = !0),
        e
          ? (o.setRequestHeader('Accept', 'application/x-clarity-gzip'),
          o.send(e))
          : o.send(t);
      }
    } else if (u.upload) {
      (0, u.upload)(t), Sa(n);
    }
  }
  function Ma(t, e) {
    const n = ha[e];
    t &&
      4 === t.readyState &&
      n &&
      ((t.status < 200 || t.status > 208) && n.attempts <= 1
        ? t.status >= 400 && t.status < 500
          ? Qa(6)
          : (0 === t.status && (u.upload = u.fallback ? u.fallback : u.upload),
          xa(n.data, null, e))
        : ((va = { sequence: e, attempts: n.attempts, status: t.status }),
        n.attempts > 1 && Ga(2),
        200 === t.status &&
            t.responseText &&
            (function (t) {
              const e = t && t.length > 0 ? t.split(' ') : [''];
              switch (e[0]) {
                case 'END':
                  Qa(6);
                  break;
                case 'UPGRADE':
                  U('Auto');
                  break;
                case 'ACTION':
                  u.action && e.length > 1 && u.action(e[1]);
              }
            })(t.responseText),
        0 === t.status && (xa(n.data, null, e, !0), Qa(3)),
        t.status >= 200 && t.status <= 208 && Sa(e),
        delete ha[e]));
  }
  function Sa(t) {
    1 === t && mr();
  }
  let Na,
    _a = {};
  function Ta(t) {
    const e = t.error || t;
    return (
      e.message in _a || (_a[e.message] = 0),
      _a[e.message]++ >= 5 ||
        (e &&
          e.message &&
          ((Na = {
            message: e.message,
            line: t.lineno,
            column: t.colno,
            stack: e.stack,
            source: t.filename,
          }),
          Da(31))),
      !0
    );
  }
  function Da(t) {
    return Q(this, void 0, void 0, function () {
      let e;
      return $(this, function (n) {
        switch (((e = [l(), t]), t)) {
          case 31:
            e.push(Na.message),
            e.push(Na.line),
            e.push(Na.column),
            e.push(Na.stack),
            e.push(Na.source),
            ka(e);
            break;
          case 33:
            Ia &&
              (e.push(Ia.code),
              e.push(Ia.name),
              e.push(Ia.message),
              e.push(Ia.stack),
              e.push(Ia.severity),
              ka(e, !1));
            break;
          case 41:
            pt &&
              (e.push(pt.id), e.push(pt.target), e.push(pt.hash), ka(e, !1));
        }
        return [2];
      });
    });
  }
  let Ia,
    Ca = {};
  function ja(t, e, n, a, r) {
    void 0 === n && (n = null),
    void 0 === a && (a = null),
    void 0 === r && (r = null);
    const i = n ? ''.concat(n, '|').concat(a) : '';
    (t in Ca && Ca[t].indexOf(i) >= 0) ||
      ((Ia = { code: t, name: n, message: a, stack: r, severity: e }),
      t in Ca ? Ca[t].push(i) : (Ca[t] = [i]),
      Da(33));
  }
  var za,
    La = {},
    Aa = [],
    Ra = {},
    Ha = {},
    Ya = [];
  function Wa() {
    try {
      const t = u.extract;
      if (!t) return;
      for (let e = 0; e < t.length; e += 3) {
        const n = t[e],
          a = t[e + 1];
        switch (n) {
          case 0:
            var r = t[e + 2];
            Ra[a] = Va(r);
            break;
          case 1:
            break;
          case 2:
            var i = t[e + 2];
            Ha[a] = i;
            break;
          case 3:
            Ya = t[e + 2];
        }
      }
    } catch (t) {
      ja(8, 1, t ? t.name : null);
    }
  }
  function Xa(t) {
    return JSON.parse(JSON.stringify(t));
  }
  function qa() {
    try {
      for (const t in Ra) {
        const e = (r = Fa(Xa(Ra[t]))) ? JSON.stringify(r).substring(0, 1e4) : r;
        e && Ua(t, e);
      }
      for (const n in Ha) {
        const a = document.querySelector(Ha[n]);
        a && Ua(n, a.innerText);
      }
    } catch (t) {
      ja(5, 1, t ? t.name : null);
    }
    let r;
    Ga(40);
  }
  function Pa() {
    Aa = [];
  }
  function Ua(t, e, n) {
    void 0 === n && (n = !1),
    (!(t in La) || (t in La && La[t] !== e) || n) &&
        ((La[t] = e), Aa.push(t));
  }
  function Ba() {
    (La = {}), (Aa = []), (Ra = {}), (Ha = {});
  }
  function Va(t) {
    for (var e = [], n = t.split('.'); n.length > 0; ) {
      const a = n.shift(),
        r = a.indexOf('['),
        i = a.indexOf('{'),
        o = a.indexOf('}');
      e.push({
        name: r > 0 ? a.substring(0, r) : i > 0 ? a.substring(0, i) : a,
        type: r > 0 ? 1 : i > 0 ? 2 : 3,
        condition: i > 0 ? a.substring(i + 1, o) : null,
      });
    }
    return e;
  }
  function Fa(t, e) {
    if ((void 0 === e && (e = window), 0 == t.length)) return e;
    let n,
      a = t.shift();
    if (e && e[a.name]) {
      const r = e[a.name];
      if (1 !== a.type && Ja(r, a.condition)) n = Fa(t, r);
      else if (Array.isArray(r)) {
        for (var i = [], o = 0, u = r; o < u.length; o++) {
          const c = u[o];
          if (Ja(c, a.condition)) {
            const s = Fa(t, c);
            s && i.push(s);
          }
        }
        n = i;
      }
      return n;
    }
    return null;
  }
  function Ja(t, e) {
    if (e) {
      const n = e.split(':');
      return n.length > 1 ? t[n[0]] == n[1] : t[n[0]];
    }
    return !0;
  }
  function Ga(t) {
    let e = [l(), t];
    switch (t) {
      case 4:
        var n = h;
        n &&
          ((e = [n.time, n.event]).push(n.data.visible),
          e.push(n.data.docWidth),
          e.push(n.data.docHeight),
          e.push(n.data.screenWidth),
          e.push(n.data.screenHeight),
          e.push(n.data.scrollX),
          e.push(n.data.scrollY),
          e.push(n.data.pointerX),
          e.push(n.data.pointerY),
          e.push(n.data.activityTime),
          ka(e, !1)),
        g();
        break;
      case 25:
        e.push(x.gap), ka(e);
        break;
      case 35:
        e.push(za.check), ka(e, !1);
        break;
      case 3:
        e.push(P.key), ka(e);
        break;
      case 2:
        e.push(va.sequence), e.push(va.attempts), e.push(va.status), ka(e, !1);
        break;
      case 24:
        e.push(E.key), e.push(E.value), ka(e);
        break;
      case 34:
        var a = Object.keys(V);
        if (a.length > 0) {
          for (let r = 0, i = a; r < i.length; r++) {
            const o = i[r];
            e.push(o), e.push(V[o]);
          }
          K(), ka(e, !1);
        }
        break;
      case 0:
        var u = Object.keys(S);
        if (u.length > 0) {
          for (let c = 0, s = u; c < s.length; c++) {
            var d = s[c],
              f = parseInt(d, 10);
            e.push(f), e.push(Math.round(S[d]));
          }
          (S = {}), ka(e, !1);
        }
        break;
      case 1:
        var p = Object.keys(nr);
        if (p.length > 0) {
          for (let v = 0, m = p; v < m.length; v++) {
            const b = m[v];
            f = parseInt(b, 10);
            e.push(f), e.push(nr[b]);
          }
          ur(), ka(e, !1);
        }
        break;
      case 36:
        var y = Object.keys(H);
        if (y.length > 0) {
          for (let w = 0, k = y; w < k.length; w++) {
            var O = k[w];
            f = parseInt(O, 10);
            e.push(f), e.push([].concat.apply([], H[O]));
          }
          X(), ka(e, !1);
        }
        break;
      case 40:
        for (let M = 0, N = Aa; M < N.length; M++) {
          O = N[M];
          e.push(O), e.push(La[O]);
        }
        Pa(), ka(e, !1);
    }
  }
  function Za() {
    za = { check: 0 };
  }
  function Ka(t) {
    if (0 === za.check) {
      let e = za.check;
      (e = Sr.sequence >= 128 ? 1 : e),
      (e = l() > 72e5 ? 2 : e),
      (e = t > 10485760 ? 2 : e) !== za.check && Qa(e);
    }
  }
  function Qa(t) {
    (za.check = t), gr(), si();
  }
  function $a() {
    0 !== za.check && Ga(35);
  }
  function tr() {
    za = null;
  }
  var er = null,
    nr = null;
  function ar() {
    (er = {}), (nr = {});
  }
  function rr() {
    (er = {}), (nr = {});
  }
  function ir(t, e) {
    e &&
      ((e = ''.concat(e)),
      t in er || (er[t] = []),
      er[t].indexOf(e) < 0 &&
        (er[t].push(e),
        t in nr || (nr[t] = []),
        nr[t].push(e),
        er[t].length > 128 && Qa(5)));
  }
  function or() {
    Ga(1);
  }
  function ur() {
    nr = {};
  }
  var cr = null,
    sr = [],
    lr = null;
  function dr() {
    lr = null;
    const t = navigator && 'userAgent' in navigator ? navigator.userAgent : '',
      e = document && document.title ? document.title : '',
      n = (function () {
        const t = {
            session: wr(),
            ts: Math.round(Date.now()),
            count: 1,
            upgrade: null,
            upload: '',
          },
          e = Or('_clsk');
        if (e) {
          const n = e.split('|');
          n.length >= 5 &&
            t.ts - kr(n[1]) < 18e5 &&
            ((t.session = n[0]),
            (t.count = kr(n[2]) + 1),
            (t.upgrade = kr(n[3])),
            (t.upload =
              n.length >= 6
                ? ''.concat('https://').concat(n[5], '/').concat(n[4])
                : ''.concat('https://').concat(n[4])));
        }
        return t;
      })(),
      a = Er();
    (cr = {
      projectId: u.projectId || f(location.host),
      userId: a.id,
      sessionId: n.session,
      pageNum: n.count,
    }),
    (u.lean = u.track && null !== n.upgrade ? 0 === n.upgrade : u.lean),
    (u.upload =
        u.track &&
        'string' == typeof u.upload &&
        n.upload &&
        n.upload.length > 'https://'.length
          ? n.upload
          : u.upload),
    ir(0, t),
    ir(3, e),
    ir(1, location.href),
    ir(2, document.referrer),
    ir(
      15,
      (function () {
        let t = wr();
        if (u.track && br(window, 'sessionStorage')) {
          const e = sessionStorage.getItem('_cltk');
          (t = e || t), sessionStorage.setItem('_cltk', t);
        }
        return t;
      })()
    ),
    ir(16, document.documentElement.lang),
    ir(17, document.dir),
    navigator &&
        (ir(9, navigator.userLanguage || navigator.language),
        navigator.userAgentData &&
          navigator.userAgentData.getHighEntropyValues &&
          navigator.userAgentData
            .getHighEntropyValues([
              'model',
              'platform',
              'platformVersion',
              'uaFullVersion',
            ])
            .then(function (t) {
              let e;
              ir(22, t.platform),
              ir(23, t.platformVersion),
              null === (e = t.brands) ||
                  void 0 === e ||
                  e.forEach(function (t) {
                    ir(24, `${t.name  }~${  t.version}`);
                  }),
              ir(25, t.model),
              T(27, t.mobile ? 1 : 0);
            })),
    T(0, n.ts),
    T(1, 0),
    screen &&
        (T(14, Math.round(screen.width)),
        T(15, Math.round(screen.height)),
        T(16, Math.round(screen.colorDepth)));
    for (let r = 0, i = u.cookies; r < i.length; r++) {
      const o = i[r],
        c = Or(o);
      c && F(o, c);
    }
    yr(a);
  }
  function fr() {
    (lr = null), (cr = null);
  }
  function hr(t, e) {
    void 0 === e && (e = !0),
    cr && !1 === e && t(cr, !u.lean),
    sr.push({ callback: t, wait: e });
  }
  function pr() {
    return cr ? [cr.userId, cr.sessionId, cr.pageNum].join('.') : '';
  }
  function vr() {
    Fr() && ((u.track = !0), yr(Er(), 1));
  }
  function gr() {
    xr('_clsk', '', 0);
  }
  function mr() {
    const t = Math.round(Date.now()),
      e =
        u.upload && 'string' == typeof u.upload
          ? u.upload.replace('https://', '')
          : '',
      n = u.lean ? 0 : 1;
    !(function (t) {
      sr.length > 0 &&
        sr.forEach(function (e) {
          !e.callback || (e.wait && !t) || e.callback(cr, !u.lean);
        });
    })(n),
    xr('_clsk', [cr.sessionId, t, cr.pageNum, n, e].join('|'), 1);
  }
  function br(t, e) {
    try {
      return !!t[e];
    } catch (t) {
      return !1;
    }
  }
  function yr(t, e) {
    void 0 === e && (e = null), (e = null === e ? t.consent : e);
    const n = Math.ceil((Date.now() + 31536e6) / 864e5);
    (null === t.expiry || Math.abs(n - t.expiry) >= 1 || t.consent !== e) &&
      xr('_clck', [cr.userId, 1, n.toString(36), e].join('|'), 365);
  }
  function wr() {
    let t = Math.floor(Math.random() * Math.pow(2, 32));
    return (
      window &&
        window.crypto &&
        window.crypto.getRandomValues &&
        Uint32Array &&
        (t = window.crypto.getRandomValues(new Uint32Array(1))[0]),
      t.toString(36)
    );
  }
  function kr(t, e) {
    return void 0 === e && (e = 10), parseInt(t, e);
  }
  function Er() {
    const t = { id: wr(), expiry: null, consent: 0 },
      e = Or('_clck');
    if (e && e.length > 0) {
      for (
        var n = e.split('|'), a = 0, r = 0, i = document.cookie.split(';');
        r < i.length;
        r++
      ) {
        a += '_clck' === i[r].split('=')[0].trim() ? 1 : 0;
      }
      if (1 === n.length || a > 1) {
        const o = ''
          .concat(';')
          .concat('expires=')
          .concat(new Date(0).toUTCString())
          .concat(';path=/');
        (document.cookie = ''.concat('_clck', '=').concat(o)),
        (document.cookie = ''.concat('_clsk', '=').concat(o));
      }
      n.length > 2 && (t.expiry = kr(n[2], 36)),
      n.length > 3 && 1 === kr(n[3]) && (t.consent = 1),
      (u.track = u.track || 1 === t.consent),
      (t.id = u.track ? n[0] : t.id);
    }
    return t;
  }
  function Or(t) {
    if (br(document, 'cookie')) {
      const e = document.cookie.split(';');
      if (e)
        for (let n = 0; n < e.length; n++) {
          const a = e[n].split('=');
          if (a.length > 1 && a[0] && a[0].trim() === t) return a[1];
        }
    }
    return null;
  }
  function xr(t, e, n) {
    if (
      u.track &&
      ((navigator && navigator.cookieEnabled) || br(document, 'cookie'))
    ) {
      const a = new Date();
      a.setDate(a.getDate() + n);
      const r = a ? `expires=${  a.toUTCString()}` : '',
        i = ''.concat(t, '=').concat(e).concat(';').concat(r).concat(';path=/');
      try {
        if (null === lr) {
          for (
            let o = location.hostname ? location.hostname.split('.') : [],
              c = o.length - 1;
            c >= 0;
            c--
          )
            if (
              ((lr = '.'.concat(o[c]).concat(lr || '')),
              c < o.length - 1 &&
                ((document.cookie = ''
                  .concat(i)
                  .concat(';')
                  .concat('domain=')
                  .concat(lr)),
                Or(t) === e))
            )
              return;
          lr = '';
        }
      } catch (t) {
        lr = '';
      }
      document.cookie = lr
        ? ''.concat(i).concat(';').concat('domain=').concat(lr)
        : i;
    }
  }
  var Mr,
    Sr = null;
  function Nr() {
    const t = cr;
    Sr = {
      version: d,
      sequence: 0,
      start: 0,
      duration: 0,
      projectId: t.projectId,
      userId: t.userId,
      sessionId: t.sessionId,
      pageNum: t.pageNum,
      upload: 0,
      end: 0,
    };
  }
  function _r() {
    Sr = null;
  }
  function Tr(t) {
    return (
      (Sr.start = Sr.start + Sr.duration),
      (Sr.duration = l() - Sr.start),
      Sr.sequence++,
      (Sr.upload = t && 'sendBeacon' in navigator ? 1 : 0),
      (Sr.end = t ? 1 : 0),
      [
        Sr.version,
        Sr.sequence,
        Sr.start,
        Sr.duration,
        Sr.projectId,
        Sr.userId,
        Sr.sessionId,
        Sr.pageNum,
        Sr.upload,
        Sr.end,
      ]
    );
  }
  function Dr() {
    Mr = [];
  }
  function Ir(t) {
    if (Mr && -1 === Mr.indexOf(t.message)) {
      const e = u.report;
      if (e && e.length > 0) {
        const n = {
          v: Sr.version,
          p: Sr.projectId,
          u: Sr.userId,
          s: Sr.sessionId,
          n: Sr.pageNum,
        };
        t.message && (n.m = t.message), t.stack && (n.e = t.stack);
        const a = new XMLHttpRequest();
        a.open('POST', e), a.send(JSON.stringify(n)), Mr.push(t.message);
      }
    }
    return t;
  }
  function Cr(t) {
    return function () {
      const e = performance.now();
      try {
        t.apply(this, arguments);
      } catch (t) {
        throw Ir(t);
      }
      const n = performance.now() - e;
      _(4, n), n > 30 && (N(7), T(6, n));
    };
  }
  let jr = [];
  function zr(t, e, n, a) {
    void 0 === a && (a = !1), (n = Cr(n));
    try {
      t[c('addEventListener')](e, n, a),
      jr.push({ event: e, target: t, listener: n, capture: a });
    } catch (t) {}
  }
  function Lr() {
    for (let t = 0, e = jr; t < e.length; t++) {
      const n = e[t];
      try {
        n.target[c('removeEventListener')](n.event, n.listener, n.capture);
      } catch (t) {}
    }
    jr = [];
  }
  let Ar = null,
    Rr = null,
    Hr = null,
    Yr = 0;
  function Wr() {
    return !(Yr++ > 20) || (ja(4, 0), !1);
  }
  function Xr() {
    (Yr = 0), Hr !== Pr() && (si(), window.setTimeout(qr, 250));
  }
  function qr() {
    ci(), T(29, 1);
  }
  function Pr() {
    return location.href
      ? location.href.replace(location.hash, '')
      : location.href;
  }
  var Ur = !1;
  function Br() {
    (Ur = !0),
    (s = performance.now()),
    St(),
    Lr(),
    Dr(),
    (Hr = Pr()),
    (Yr = 0),
    zr(window, 'popstate', Xr),
    null === Ar &&
        ((Ar = history.pushState),
        (history.pushState = function () {
          Ar.apply(this, arguments), Fr() && Wr() && Xr();
        })),
    null === Rr &&
        ((Rr = history.replaceState),
        (history.replaceState = function () {
          Rr.apply(this, arguments), Fr() && Wr() && Xr();
        }));
  }
  function Vr() {
    (Hr = null), (Yr = 0), Dr(), Lr(), St(), (s = 0), (Ur = !1);
  }
  function Fr() {
    return Ur;
  }
  function Jr(t) {
    if (null === t || Ur) return !1;
    for (const e in t) e in u && (u[e] = t[e]);
    return !0;
  }
  function Gr() {
    ci(), O('clarity', 'restart');
  }
  const Zr = Object.freeze({
    __proto__: null,
    start: function () {
      !(function () {
        (vt = []), T(26, navigator.webdriver ? 1 : 0);
        try {
          T(31, window.top == window.self ? 1 : 2);
        } catch (t) {
          T(31, 0);
        }
      })(),
      zr(window, 'error', Ta),
      (_a = {}),
      (Ca = {});
    },
    stop: function () {
      Ca = {};
    },
  });
  function Kr() {
    return Q(this, void 0, void 0, function () {
      let t, e;
      return $(this, function (n) {
        switch (n.label) {
          case 0:
            return (
              (t = l()),
              Dt((e = { id: pr(), cost: 3 })),
              [4, Ve(document, e, 0)]
            );
          case 1:
            return n.sent(), [4, Rt(5, e, t)];
          case 2:
            return n.sent(), It(e), [2];
        }
      });
    });
  }
  const Qr = Object.freeze({
    __proto__: null,
    start: function () {
      Xt(),
      qt(),
      aa(),
      (Zn = null),
      (Vn = new WeakMap()),
      (Fn = {}),
      (Jn = []),
      (Gn = !!window.IntersectionObserver),
      xn(),
      (function () {
        if (
          ((Fe = []),
          (Qe = []),
          ($e = null),
          (tn = 0),
          (en = {}),
          null === Ge &&
              ((Ge = CSSStyleSheet.prototype.insertRule),
              (CSSStyleSheet.prototype.insertRule = function () {
                return Fr() && un(this.ownerNode), Ge.apply(this, arguments);
              })),
          null === Ze &&
              ((Ze = CSSStyleSheet.prototype.deleteRule),
              (CSSStyleSheet.prototype.deleteRule = function () {
                return Fr() && un(this.ownerNode), Ze.apply(this, arguments);
              })),
          null === Ke)
        ) {
          Ke = Element.prototype.attachShadow;
          try {
            Element.prototype.attachShadow = function () {
              return Fr()
                ? un(Ke.apply(this, arguments))
                : Ke.apply(this, arguments);
            };
          } catch (t) {
            Ke = null;
          }
        }
      })(),
      Nt(Kr, 1).then(function () {
        Cr(qt)(), Cr($n)();
      });
    },
    stop: function () {
      aa(),
      (Vn = null),
      (Fn = {}),
      (Jn = []),
      Zn && (Zn.disconnect(), (Zn = null)),
      (Gn = !1),
      Mn(),
      (function () {
        for (let t = 0, e = Fe; t < e.length; t++) {
          const n = e[t];
          n && n.disconnect();
        }
        (Fe = []), (en = {}), (Je = []), (Qe = []), (tn = 0), ($e = null);
      })(),
      Xt();
    },
    hashText: An,
  });
  let $r,
    ti = null;
  function ei() {
    ti = null;
  }
  function ni(t) {
    (ti = {
      fetchStart: Math.round(t.fetchStart),
      connectStart: Math.round(t.connectStart),
      connectEnd: Math.round(t.connectEnd),
      requestStart: Math.round(t.requestStart),
      responseStart: Math.round(t.responseStart),
      responseEnd: Math.round(t.responseEnd),
      domInteractive: Math.round(t.domInteractive),
      domComplete: Math.round(t.domComplete),
      loadEventStart: Math.round(t.loadEventStart),
      loadEventEnd: Math.round(t.loadEventEnd),
      redirectCount: Math.round(t.redirectCount),
      size: t.transferSize ? t.transferSize : 0,
      type: t.type,
      protocol: t.nextHopProtocol,
      encodedSize: t.encodedBodySize ? t.encodedBodySize : 0,
      decodedSize: t.decodedBodySize ? t.decodedBodySize : 0,
    }),
    (function (t) {
      Q(this, void 0, void 0, function () {
        let e, n;
        return $(this, function (a) {
          return (
            (e = l()),
            (n = [e, t]),
            29 === t &&
                (n.push(ti.fetchStart),
                n.push(ti.connectStart),
                n.push(ti.connectEnd),
                n.push(ti.requestStart),
                n.push(ti.responseStart),
                n.push(ti.responseEnd),
                n.push(ti.domInteractive),
                n.push(ti.domComplete),
                n.push(ti.loadEventStart),
                n.push(ti.loadEventEnd),
                n.push(ti.redirectCount),
                n.push(ti.size),
                n.push(ti.type),
                n.push(ti.protocol),
                n.push(ti.encodedSize),
                n.push(ti.decodedSize),
                ei(),
                ka(n, !1)),
            [2]
          );
        });
      });
    })(29);
  }
  const ai = [
    'navigation',
    'resource',
    'longtask',
    'first-input',
    'layout-shift',
    'largest-contentful-paint',
  ];
  function ri() {
    try {
      $r && $r.disconnect(), ($r = new PerformanceObserver(Cr(ii)));
      for (let t = 0, e = ai; t < e.length; t++) {
        const n = e[t];
        PerformanceObserver.supportedEntryTypes.indexOf(n) >= 0 &&
          ('layout-shift' === n && _(9, 0),
          $r.observe({ type: n, buffered: !0 }));
      }
    } catch (t) {
      ja(3, 1);
    }
  }
  function ii(t) {
    !(function (t) {
      for (
        let e =
            !('visibilityState' in document) ||
            'visible' === document.visibilityState,
          n = 0;
        n < t.length;
        n++
      ) {
        const a = t[n];
        switch (a.entryType) {
          case 'navigation':
            ni(a);
            break;
          case 'resource':
            var r = a.name;
            ir(4, oi(r)),
            (r !== u.upload && r !== u.fallback) || T(28, a.duration);
            break;
          case 'longtask':
            N(7);
            break;
          case 'first-input':
            e && T(10, a.processingStart - a.startTime);
            break;
          case 'layout-shift':
            e && !a.hadRecentInput && _(9, 1e3 * a.value);
            break;
          case 'largest-contentful-paint':
            e && T(8, a.startTime);
        }
      }
      performance &&
        'memory' in performance &&
        performance.memory.usedJSHeapSize &&
        T(30, Math.abs(performance.memory.usedJSHeapSize / 1048576));
    })(t.getEntries());
  }
  function oi(t) {
    const e = document.createElement('a');
    return (e.href = t), e.hostname;
  }
  const ui = [
    Zr,
    Qr,
    Ae,
    Object.freeze({
      __proto__: null,
      start: function () {
        ei(),
        (function () {
          window.PerformanceObserver &&
            PerformanceObserver.supportedEntryTypes
            ? 'complete' !== document.readyState
              ? zr(window, 'load', D.bind(this, ri, 0))
              : ri()
            : ja(3, 0);
        })();
      },
      stop: function () {
        $r && $r.disconnect(), ($r = null), ei();
      },
    }),
  ];
  function ci(t) {
    void 0 === t && (t = null),
    (function () {
      try {
        return (
          !1 === Ur &&
            'undefined' != typeof Promise &&
            window.MutationObserver &&
            document.createTreeWalker &&
            'now' in Date &&
            'now' in performance &&
            'undefined' != typeof WeakMap
        );
      } catch (t) {
        return !1;
      }
    })() &&
        (Jr(t),
        Br(),
        rt(),
        ui.forEach(function (t) {
          return Cr(t.start)();
        }));
  }
  function si() {
    Fr() &&
      (ui
        .slice()
        .reverse()
        .forEach(function (t) {
          return Cr(t.stop)();
        }),
      it(),
      Vr());
  }
  const li = Object.freeze({
    __proto__: null,
    version: d,
    start: ci,
    pause: function () {
      Fr() &&
        (O('clarity', 'pause'),
        null === xt &&
          (xt = new Promise(function (t) {
            Mt = t;
          })));
    },
    resume: function () {
      Fr() &&
        (xt && (Mt(), (xt = null), null === Ot && _t()),
        O('clarity', 'resume'));
    },
    stop: si,
    consent: vr,
    event: O,
    identify: J,
    set: F,
    upgrade: U,
    metadata: hr,
    hashText: An,
  });
  !(function () {
    if ('undefined' != typeof window) {
      const t = window,
        e = 'clarity';
      if (t[e] && t[e].v)
        return console.warn('Error CL001: Multiple Clarity tags detected.');
      const n = (t[e] && t[e].q) || [];
      for (
        t[e] = function (t) {
          for (var e = [], n = 1; n < arguments.length; n++)
            e[n - 1] = arguments[n];
          return li[t].apply(li, e);
        },
        t[e].v = d;
        n.length > 0;

      )
        t[e].apply(t, n.shift());
    }
  })();
})();
