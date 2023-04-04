function yd(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const l in r)
        if (l !== "default" && !(l in e)) {
          const o = Object.getOwnPropertyDescriptor(r, l);
          o &&
            Object.defineProperty(
              e,
              l,
              o.get ? o : { enumerable: !0, get: () => r[l] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const o of l)
      if (o.type === "childList")
        for (const i of o.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const o = {};
    return (
      l.integrity && (o.integrity = l.integrity),
      l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const o = n(l);
    fetch(l.href, o);
  }
})();
function Fa(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var ar = {},
  wd = {
    get exports() {
      return ar;
    },
    set exports(e) {
      ar = e;
    },
  },
  Hl = {},
  v = {},
  Ed = {
    get exports() {
      return v;
    },
    set exports(e) {
      v = e;
    },
  },
  M = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Tr = Symbol.for("react.element"),
  Sd = Symbol.for("react.portal"),
  kd = Symbol.for("react.fragment"),
  xd = Symbol.for("react.strict_mode"),
  Cd = Symbol.for("react.profiler"),
  Nd = Symbol.for("react.provider"),
  Pd = Symbol.for("react.context"),
  _d = Symbol.for("react.forward_ref"),
  Rd = Symbol.for("react.suspense"),
  Td = Symbol.for("react.memo"),
  Od = Symbol.for("react.lazy"),
  cs = Symbol.iterator;
function Ld(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (cs && e[cs]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var $a = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Ua = Object.assign,
  Ba = {};
function zn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Ba),
    (this.updater = n || $a);
}
zn.prototype.isReactComponent = {};
zn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
zn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Aa() {}
Aa.prototype = zn.prototype;
function Ji(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Ba),
    (this.updater = n || $a);
}
var qi = (Ji.prototype = new Aa());
qi.constructor = Ji;
Ua(qi, zn.prototype);
qi.isPureReactComponent = !0;
var fs = Array.isArray,
  Wa = Object.prototype.hasOwnProperty,
  bi = { current: null },
  Va = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ha(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      Wa.call(t, r) && !Va.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var s = Array(u), a = 0; a < u; a++) s[a] = arguments[a + 2];
    l.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {
    $$typeof: Tr,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: bi.current,
  };
}
function zd(e, t) {
  return {
    $$typeof: Tr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function eu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Tr;
}
function Md(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var ds = /\/+/g;
function po(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Md("" + e.key)
    : t.toString(36);
}
function tl(e, t, n, r, l) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (o) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Tr:
          case Sd:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = r === "" ? "." + po(i, 0) : r),
      fs(l)
        ? ((n = ""),
          e != null && (n = e.replace(ds, "$&/") + "/"),
          tl(l, t, n, "", function (a) {
            return a;
          }))
        : l != null &&
          (eu(l) &&
            (l = zd(
              l,
              n +
                (!l.key || (i && i.key === l.key)
                  ? ""
                  : ("" + l.key).replace(ds, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), fs(e)))
    for (var u = 0; u < e.length; u++) {
      o = e[u];
      var s = r + po(o, u);
      i += tl(o, t, n, s, l);
    }
  else if (((s = Ld(e)), typeof s == "function"))
    for (e = s.call(e), u = 0; !(o = e.next()).done; )
      (o = o.value), (s = r + po(o, u++)), (i += tl(o, t, n, s, l));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return i;
}
function Fr(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    tl(e, r, "", "", function (o) {
      return t.call(n, o, l++);
    }),
    r
  );
}
function Dd(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var pe = { current: null },
  nl = { transition: null },
  Id = {
    ReactCurrentDispatcher: pe,
    ReactCurrentBatchConfig: nl,
    ReactCurrentOwner: bi,
  };
M.Children = {
  map: Fr,
  forEach: function (e, t, n) {
    Fr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Fr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Fr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!eu(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
M.Component = zn;
M.Fragment = kd;
M.Profiler = Cd;
M.PureComponent = Ji;
M.StrictMode = xd;
M.Suspense = Rd;
M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Id;
M.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Ua({}, e.props),
    l = e.key,
    o = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (i = bi.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (s in t)
      Wa.call(t, s) &&
        !Va.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var a = 0; a < s; a++) u[a] = arguments[a + 2];
    r.children = u;
  }
  return { $$typeof: Tr, type: e.type, key: l, ref: o, props: r, _owner: i };
};
M.createContext = function (e) {
  return (
    (e = {
      $$typeof: Pd,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Nd, _context: e }),
    (e.Consumer = e)
  );
};
M.createElement = Ha;
M.createFactory = function (e) {
  var t = Ha.bind(null, e);
  return (t.type = e), t;
};
M.createRef = function () {
  return { current: null };
};
M.forwardRef = function (e) {
  return { $$typeof: _d, render: e };
};
M.isValidElement = eu;
M.lazy = function (e) {
  return { $$typeof: Od, _payload: { _status: -1, _result: e }, _init: Dd };
};
M.memo = function (e, t) {
  return { $$typeof: Td, type: e, compare: t === void 0 ? null : t };
};
M.startTransition = function (e) {
  var t = nl.transition;
  nl.transition = {};
  try {
    e();
  } finally {
    nl.transition = t;
  }
};
M.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
M.useCallback = function (e, t) {
  return pe.current.useCallback(e, t);
};
M.useContext = function (e) {
  return pe.current.useContext(e);
};
M.useDebugValue = function () {};
M.useDeferredValue = function (e) {
  return pe.current.useDeferredValue(e);
};
M.useEffect = function (e, t) {
  return pe.current.useEffect(e, t);
};
M.useId = function () {
  return pe.current.useId();
};
M.useImperativeHandle = function (e, t, n) {
  return pe.current.useImperativeHandle(e, t, n);
};
M.useInsertionEffect = function (e, t) {
  return pe.current.useInsertionEffect(e, t);
};
M.useLayoutEffect = function (e, t) {
  return pe.current.useLayoutEffect(e, t);
};
M.useMemo = function (e, t) {
  return pe.current.useMemo(e, t);
};
M.useReducer = function (e, t, n) {
  return pe.current.useReducer(e, t, n);
};
M.useRef = function (e) {
  return pe.current.useRef(e);
};
M.useState = function (e) {
  return pe.current.useState(e);
};
M.useSyncExternalStore = function (e, t, n) {
  return pe.current.useSyncExternalStore(e, t, n);
};
M.useTransition = function () {
  return pe.current.useTransition();
};
M.version = "18.2.0";
(function (e) {
  e.exports = M;
})(Ed);
const We = Fa(v),
  Ko = yd({ __proto__: null, default: We }, [v]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var jd = v,
  Fd = Symbol.for("react.element"),
  $d = Symbol.for("react.fragment"),
  Ud = Object.prototype.hasOwnProperty,
  Bd = jd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Ad = { key: !0, ref: !0, __self: !0, __source: !0 };
function Qa(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) Ud.call(t, r) && !Ad.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: Fd,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: Bd.current,
  };
}
Hl.Fragment = $d;
Hl.jsx = Qa;
Hl.jsxs = Qa;
(function (e) {
  e.exports = Hl;
})(wd);
const hl = ar.Fragment,
  R = ar.jsx,
  Me = ar.jsxs;
var Go = {},
  ml = {},
  Wd = {
    get exports() {
      return ml;
    },
    set exports(e) {
      ml = e;
    },
  },
  _e = {},
  Xo = {},
  Vd = {
    get exports() {
      return Xo;
    },
    set exports(e) {
      Xo = e;
    },
  },
  Ka = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(N, O) {
    var L = N.length;
    N.push(O);
    e: for (; 0 < L; ) {
      var F = (L - 1) >>> 1,
        U = N[F];
      if (0 < l(U, O)) (N[F] = O), (N[L] = U), (L = F);
      else break e;
    }
  }
  function n(N) {
    return N.length === 0 ? null : N[0];
  }
  function r(N) {
    if (N.length === 0) return null;
    var O = N[0],
      L = N.pop();
    if (L !== O) {
      N[0] = L;
      e: for (var F = 0, U = N.length, et = U >>> 1; F < et; ) {
        var me = 2 * (F + 1) - 1,
          oe = N[me],
          Se = me + 1,
          en = N[Se];
        if (0 > l(oe, L))
          Se < U && 0 > l(en, oe)
            ? ((N[F] = en), (N[Se] = L), (F = Se))
            : ((N[F] = oe), (N[me] = L), (F = me));
        else if (Se < U && 0 > l(en, L)) (N[F] = en), (N[Se] = L), (F = Se);
        else break e;
      }
    }
    return O;
  }
  function l(N, O) {
    var L = N.sortIndex - O.sortIndex;
    return L !== 0 ? L : N.id - O.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var i = Date,
      u = i.now();
    e.unstable_now = function () {
      return i.now() - u;
    };
  }
  var s = [],
    a = [],
    h = 1,
    d = null,
    m = 3,
    y = !1,
    w = !1,
    g = !1,
    x = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(N) {
    for (var O = n(a); O !== null; ) {
      if (O.callback === null) r(a);
      else if (O.startTime <= N)
        r(a), (O.sortIndex = O.expirationTime), t(s, O);
      else break;
      O = n(a);
    }
  }
  function E(N) {
    if (((g = !1), p(N), !w))
      if (n(s) !== null) (w = !0), Ke(k);
      else {
        var O = n(a);
        O !== null && X(E, O.startTime - N);
      }
  }
  function k(N, O) {
    (w = !1), g && ((g = !1), f(T), (T = -1)), (y = !0);
    var L = m;
    try {
      for (
        p(O), d = n(s);
        d !== null && (!(d.expirationTime > O) || (N && !ce()));

      ) {
        var F = d.callback;
        if (typeof F == "function") {
          (d.callback = null), (m = d.priorityLevel);
          var U = F(d.expirationTime <= O);
          (O = e.unstable_now()),
            typeof U == "function" ? (d.callback = U) : d === n(s) && r(s),
            p(O);
        } else r(s);
        d = n(s);
      }
      if (d !== null) var et = !0;
      else {
        var me = n(a);
        me !== null && X(E, me.startTime - O), (et = !1);
      }
      return et;
    } finally {
      (d = null), (m = L), (y = !1);
    }
  }
  var C = !1,
    P = null,
    T = -1,
    j = 5,
    z = -1;
  function ce() {
    return !(e.unstable_now() - z < j);
  }
  function be() {
    if (P !== null) {
      var N = e.unstable_now();
      z = N;
      var O = !0;
      try {
        O = P(!0, N);
      } finally {
        O ? je() : ((C = !1), (P = null));
      }
    } else C = !1;
  }
  var je;
  if (typeof c == "function")
    je = function () {
      c(be);
    };
  else if (typeof MessageChannel < "u") {
    var $t = new MessageChannel(),
      bt = $t.port2;
    ($t.port1.onmessage = be),
      (je = function () {
        bt.postMessage(null);
      });
  } else
    je = function () {
      x(be, 0);
    };
  function Ke(N) {
    (P = N), C || ((C = !0), je());
  }
  function X(N, O) {
    T = x(function () {
      N(e.unstable_now());
    }, O);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (N) {
      N.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || y || ((w = !0), Ke(k));
    }),
    (e.unstable_forceFrameRate = function (N) {
      0 > N || 125 < N
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (j = 0 < N ? Math.floor(1e3 / N) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (N) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var O = 3;
          break;
        default:
          O = m;
      }
      var L = m;
      m = O;
      try {
        return N();
      } finally {
        m = L;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (N, O) {
      switch (N) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          N = 3;
      }
      var L = m;
      m = N;
      try {
        return O();
      } finally {
        m = L;
      }
    }),
    (e.unstable_scheduleCallback = function (N, O, L) {
      var F = e.unstable_now();
      switch (
        (typeof L == "object" && L !== null
          ? ((L = L.delay), (L = typeof L == "number" && 0 < L ? F + L : F))
          : (L = F),
        N)
      ) {
        case 1:
          var U = -1;
          break;
        case 2:
          U = 250;
          break;
        case 5:
          U = 1073741823;
          break;
        case 4:
          U = 1e4;
          break;
        default:
          U = 5e3;
      }
      return (
        (U = L + U),
        (N = {
          id: h++,
          callback: O,
          priorityLevel: N,
          startTime: L,
          expirationTime: U,
          sortIndex: -1,
        }),
        L > F
          ? ((N.sortIndex = L),
            t(a, N),
            n(s) === null &&
              N === n(a) &&
              (g ? (f(T), (T = -1)) : (g = !0), X(E, L - F)))
          : ((N.sortIndex = U), t(s, N), w || y || ((w = !0), Ke(k))),
        N
      );
    }),
    (e.unstable_shouldYield = ce),
    (e.unstable_wrapCallback = function (N) {
      var O = m;
      return function () {
        var L = m;
        m = O;
        try {
          return N.apply(this, arguments);
        } finally {
          m = L;
        }
      };
    });
})(Ka);
(function (e) {
  e.exports = Ka;
})(Vd);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ga = v,
  Ne = Xo;
function S(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Xa = new Set(),
  cr = {};
function Jt(e, t) {
  Nn(e, t), Nn(e + "Capture", t);
}
function Nn(e, t) {
  for (cr[e] = t, e = 0; e < t.length; e++) Xa.add(t[e]);
}
var st = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Yo = Object.prototype.hasOwnProperty,
  Hd =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  ps = {},
  hs = {};
function Qd(e) {
  return Yo.call(hs, e)
    ? !0
    : Yo.call(ps, e)
    ? !1
    : Hd.test(e)
    ? (hs[e] = !0)
    : ((ps[e] = !0), !1);
}
function Kd(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Gd(e, t, n, r) {
  if (t === null || typeof t > "u" || Kd(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function he(e, t, n, r, l, o, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = i);
}
var le = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    le[e] = new he(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  le[t] = new he(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  le[e] = new he(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  le[e] = new he(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    le[e] = new he(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  le[e] = new he(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  le[e] = new he(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  le[e] = new he(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  le[e] = new he(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var tu = /[\-:]([a-z])/g;
function nu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(tu, nu);
    le[t] = new he(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(tu, nu);
    le[t] = new he(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(tu, nu);
  le[t] = new he(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  le[e] = new he(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
le.xlinkHref = new he(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  le[e] = new he(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ru(e, t, n, r) {
  var l = le.hasOwnProperty(t) ? le[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Gd(t, n, l, r) && (n = null),
    r || l === null
      ? Qd(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var dt = Ga.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  $r = Symbol.for("react.element"),
  on = Symbol.for("react.portal"),
  un = Symbol.for("react.fragment"),
  lu = Symbol.for("react.strict_mode"),
  Zo = Symbol.for("react.profiler"),
  Ya = Symbol.for("react.provider"),
  Za = Symbol.for("react.context"),
  ou = Symbol.for("react.forward_ref"),
  Jo = Symbol.for("react.suspense"),
  qo = Symbol.for("react.suspense_list"),
  iu = Symbol.for("react.memo"),
  vt = Symbol.for("react.lazy"),
  Ja = Symbol.for("react.offscreen"),
  ms = Symbol.iterator;
function Un(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ms && e[ms]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Q = Object.assign,
  ho;
function Xn(e) {
  if (ho === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      ho = (t && t[1]) || "";
    }
  return (
    `
` +
    ho +
    e
  );
}
var mo = !1;
function vo(e, t) {
  if (!e || mo) return "";
  mo = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (a) {
          var r = a;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (a) {
          r = a;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (a) {
        r = a;
      }
      e();
    }
  } catch (a) {
    if (a && r && typeof a.stack == "string") {
      for (
        var l = a.stack.split(`
`),
          o = r.stack.split(`
`),
          i = l.length - 1,
          u = o.length - 1;
        1 <= i && 0 <= u && l[i] !== o[u];

      )
        u--;
      for (; 1 <= i && 0 <= u; i--, u--)
        if (l[i] !== o[u]) {
          if (i !== 1 || u !== 1)
            do
              if ((i--, u--, 0 > u || l[i] !== o[u])) {
                var s =
                  `
` + l[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= i && 0 <= u);
          break;
        }
    }
  } finally {
    (mo = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Xn(e) : "";
}
function Xd(e) {
  switch (e.tag) {
    case 5:
      return Xn(e.type);
    case 16:
      return Xn("Lazy");
    case 13:
      return Xn("Suspense");
    case 19:
      return Xn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = vo(e.type, !1)), e;
    case 11:
      return (e = vo(e.type.render, !1)), e;
    case 1:
      return (e = vo(e.type, !0)), e;
    default:
      return "";
  }
}
function bo(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case un:
      return "Fragment";
    case on:
      return "Portal";
    case Zo:
      return "Profiler";
    case lu:
      return "StrictMode";
    case Jo:
      return "Suspense";
    case qo:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Za:
        return (e.displayName || "Context") + ".Consumer";
      case Ya:
        return (e._context.displayName || "Context") + ".Provider";
      case ou:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case iu:
        return (
          (t = e.displayName || null), t !== null ? t : bo(e.type) || "Memo"
        );
      case vt:
        (t = e._payload), (e = e._init);
        try {
          return bo(e(t));
        } catch {}
    }
  return null;
}
function Yd(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return bo(t);
    case 8:
      return t === lu ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Mt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function qa(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Zd(e) {
  var t = qa(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (i) {
          (r = "" + i), o.call(this, i);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = "" + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Ur(e) {
  e._valueTracker || (e._valueTracker = Zd(e));
}
function ba(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = qa(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function vl(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ei(e, t) {
  var n = t.checked;
  return Q({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function vs(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Mt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function ec(e, t) {
  (t = t.checked), t != null && ru(e, "checked", t, !1);
}
function ti(e, t) {
  ec(e, t);
  var n = Mt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? ni(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && ni(e, t.type, Mt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function gs(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function ni(e, t, n) {
  (t !== "number" || vl(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Yn = Array.isArray;
function wn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Mt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function ri(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(S(91));
  return Q({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function ys(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(S(92));
      if (Yn(n)) {
        if (1 < n.length) throw Error(S(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Mt(n) };
}
function tc(e, t) {
  var n = Mt(t.value),
    r = Mt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function ws(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function nc(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function li(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? nc(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Br,
  rc = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Br = Br || document.createElement("div"),
          Br.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Br.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function fr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var bn = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Jd = ["Webkit", "ms", "Moz", "O"];
Object.keys(bn).forEach(function (e) {
  Jd.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (bn[t] = bn[e]);
  });
});
function lc(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (bn.hasOwnProperty(e) && bn[e])
    ? ("" + t).trim()
    : t + "px";
}
function oc(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = lc(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var qd = Q(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function oi(e, t) {
  if (t) {
    if (qd[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(S(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(S(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(S(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(S(62));
  }
}
function ii(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var ui = null;
function uu(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var si = null,
  En = null,
  Sn = null;
function Es(e) {
  if ((e = zr(e))) {
    if (typeof si != "function") throw Error(S(280));
    var t = e.stateNode;
    t && ((t = Yl(t)), si(e.stateNode, e.type, t));
  }
}
function ic(e) {
  En ? (Sn ? Sn.push(e) : (Sn = [e])) : (En = e);
}
function uc() {
  if (En) {
    var e = En,
      t = Sn;
    if (((Sn = En = null), Es(e), t)) for (e = 0; e < t.length; e++) Es(t[e]);
  }
}
function sc(e, t) {
  return e(t);
}
function ac() {}
var go = !1;
function cc(e, t, n) {
  if (go) return e(t, n);
  go = !0;
  try {
    return sc(e, t, n);
  } finally {
    (go = !1), (En !== null || Sn !== null) && (ac(), uc());
  }
}
function dr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Yl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(S(231, t, typeof n));
  return n;
}
var ai = !1;
if (st)
  try {
    var Bn = {};
    Object.defineProperty(Bn, "passive", {
      get: function () {
        ai = !0;
      },
    }),
      window.addEventListener("test", Bn, Bn),
      window.removeEventListener("test", Bn, Bn);
  } catch {
    ai = !1;
  }
function bd(e, t, n, r, l, o, i, u, s) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (h) {
    this.onError(h);
  }
}
var er = !1,
  gl = null,
  yl = !1,
  ci = null,
  ep = {
    onError: function (e) {
      (er = !0), (gl = e);
    },
  };
function tp(e, t, n, r, l, o, i, u, s) {
  (er = !1), (gl = null), bd.apply(ep, arguments);
}
function np(e, t, n, r, l, o, i, u, s) {
  if ((tp.apply(this, arguments), er)) {
    if (er) {
      var a = gl;
      (er = !1), (gl = null);
    } else throw Error(S(198));
    yl || ((yl = !0), (ci = a));
  }
}
function qt(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function fc(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Ss(e) {
  if (qt(e) !== e) throw Error(S(188));
}
function rp(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = qt(e)), t === null)) throw Error(S(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var o = l.alternate;
    if (o === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === n) return Ss(l), e;
        if (o === r) return Ss(l), t;
        o = o.sibling;
      }
      throw Error(S(188));
    }
    if (n.return !== r.return) (n = l), (r = o);
    else {
      for (var i = !1, u = l.child; u; ) {
        if (u === n) {
          (i = !0), (n = l), (r = o);
          break;
        }
        if (u === r) {
          (i = !0), (r = l), (n = o);
          break;
        }
        u = u.sibling;
      }
      if (!i) {
        for (u = o.child; u; ) {
          if (u === n) {
            (i = !0), (n = o), (r = l);
            break;
          }
          if (u === r) {
            (i = !0), (r = o), (n = l);
            break;
          }
          u = u.sibling;
        }
        if (!i) throw Error(S(189));
      }
    }
    if (n.alternate !== r) throw Error(S(190));
  }
  if (n.tag !== 3) throw Error(S(188));
  return n.stateNode.current === n ? e : t;
}
function dc(e) {
  return (e = rp(e)), e !== null ? pc(e) : null;
}
function pc(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = pc(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var hc = Ne.unstable_scheduleCallback,
  ks = Ne.unstable_cancelCallback,
  lp = Ne.unstable_shouldYield,
  op = Ne.unstable_requestPaint,
  Y = Ne.unstable_now,
  ip = Ne.unstable_getCurrentPriorityLevel,
  su = Ne.unstable_ImmediatePriority,
  mc = Ne.unstable_UserBlockingPriority,
  wl = Ne.unstable_NormalPriority,
  up = Ne.unstable_LowPriority,
  vc = Ne.unstable_IdlePriority,
  Ql = null,
  Je = null;
function sp(e) {
  if (Je && typeof Je.onCommitFiberRoot == "function")
    try {
      Je.onCommitFiberRoot(Ql, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Ve = Math.clz32 ? Math.clz32 : fp,
  ap = Math.log,
  cp = Math.LN2;
function fp(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((ap(e) / cp) | 0)) | 0;
}
var Ar = 64,
  Wr = 4194304;
function Zn(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function El(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    o = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var u = i & ~l;
    u !== 0 ? (r = Zn(u)) : ((o &= i), o !== 0 && (r = Zn(o)));
  } else (i = n & ~l), i !== 0 ? (r = Zn(i)) : o !== 0 && (r = Zn(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Ve(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function dp(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function pp(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var i = 31 - Ve(o),
      u = 1 << i,
      s = l[i];
    s === -1
      ? (!(u & n) || u & r) && (l[i] = dp(u, t))
      : s <= t && (e.expiredLanes |= u),
      (o &= ~u);
  }
}
function fi(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function gc() {
  var e = Ar;
  return (Ar <<= 1), !(Ar & 4194240) && (Ar = 64), e;
}
function yo(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Or(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Ve(t)),
    (e[t] = n);
}
function hp(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Ve(n),
      o = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
  }
}
function au(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Ve(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var I = 0;
function yc(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var wc,
  cu,
  Ec,
  Sc,
  kc,
  di = !1,
  Vr = [],
  Ct = null,
  Nt = null,
  Pt = null,
  pr = new Map(),
  hr = new Map(),
  wt = [],
  mp =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function xs(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Ct = null;
      break;
    case "dragenter":
    case "dragleave":
      Nt = null;
      break;
    case "mouseover":
    case "mouseout":
      Pt = null;
      break;
    case "pointerover":
    case "pointerout":
      pr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      hr.delete(t.pointerId);
  }
}
function An(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l],
      }),
      t !== null && ((t = zr(t)), t !== null && cu(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function vp(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (Ct = An(Ct, e, t, n, r, l)), !0;
    case "dragenter":
      return (Nt = An(Nt, e, t, n, r, l)), !0;
    case "mouseover":
      return (Pt = An(Pt, e, t, n, r, l)), !0;
    case "pointerover":
      var o = l.pointerId;
      return pr.set(o, An(pr.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (o = l.pointerId), hr.set(o, An(hr.get(o) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function xc(e) {
  var t = At(e.target);
  if (t !== null) {
    var n = qt(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = fc(n)), t !== null)) {
          (e.blockedOn = t),
            kc(e.priority, function () {
              Ec(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function rl(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = pi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (ui = r), n.target.dispatchEvent(r), (ui = null);
    } else return (t = zr(n)), t !== null && cu(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Cs(e, t, n) {
  rl(e) && n.delete(t);
}
function gp() {
  (di = !1),
    Ct !== null && rl(Ct) && (Ct = null),
    Nt !== null && rl(Nt) && (Nt = null),
    Pt !== null && rl(Pt) && (Pt = null),
    pr.forEach(Cs),
    hr.forEach(Cs);
}
function Wn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    di ||
      ((di = !0),
      Ne.unstable_scheduleCallback(Ne.unstable_NormalPriority, gp)));
}
function mr(e) {
  function t(l) {
    return Wn(l, e);
  }
  if (0 < Vr.length) {
    Wn(Vr[0], e);
    for (var n = 1; n < Vr.length; n++) {
      var r = Vr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Ct !== null && Wn(Ct, e),
      Nt !== null && Wn(Nt, e),
      Pt !== null && Wn(Pt, e),
      pr.forEach(t),
      hr.forEach(t),
      n = 0;
    n < wt.length;
    n++
  )
    (r = wt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < wt.length && ((n = wt[0]), n.blockedOn === null); )
    xc(n), n.blockedOn === null && wt.shift();
}
var kn = dt.ReactCurrentBatchConfig,
  Sl = !0;
function yp(e, t, n, r) {
  var l = I,
    o = kn.transition;
  kn.transition = null;
  try {
    (I = 1), fu(e, t, n, r);
  } finally {
    (I = l), (kn.transition = o);
  }
}
function wp(e, t, n, r) {
  var l = I,
    o = kn.transition;
  kn.transition = null;
  try {
    (I = 4), fu(e, t, n, r);
  } finally {
    (I = l), (kn.transition = o);
  }
}
function fu(e, t, n, r) {
  if (Sl) {
    var l = pi(e, t, n, r);
    if (l === null) Ro(e, t, r, kl, n), xs(e, r);
    else if (vp(l, e, t, n, r)) r.stopPropagation();
    else if ((xs(e, r), t & 4 && -1 < mp.indexOf(e))) {
      for (; l !== null; ) {
        var o = zr(l);
        if (
          (o !== null && wc(o),
          (o = pi(e, t, n, r)),
          o === null && Ro(e, t, r, kl, n),
          o === l)
        )
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else Ro(e, t, r, null, n);
  }
}
var kl = null;
function pi(e, t, n, r) {
  if (((kl = null), (e = uu(r)), (e = At(e)), e !== null))
    if (((t = qt(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = fc(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (kl = e), null;
}
function Cc(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (ip()) {
        case su:
          return 1;
        case mc:
          return 4;
        case wl:
        case up:
          return 16;
        case vc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var St = null,
  du = null,
  ll = null;
function Nc() {
  if (ll) return ll;
  var e,
    t = du,
    n = t.length,
    r,
    l = "value" in St ? St.value : St.textContent,
    o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
  return (ll = l.slice(e, 1 < r ? 1 - r : void 0));
}
function ol(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Hr() {
  return !0;
}
function Ns() {
  return !1;
}
function Re(e) {
  function t(n, r, l, o, i) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = i),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(o) : o[u]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? Hr
        : Ns),
      (this.isPropagationStopped = Ns),
      this
    );
  }
  return (
    Q(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Hr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Hr));
      },
      persist: function () {},
      isPersistent: Hr,
    }),
    t
  );
}
var Mn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  pu = Re(Mn),
  Lr = Q({}, Mn, { view: 0, detail: 0 }),
  Ep = Re(Lr),
  wo,
  Eo,
  Vn,
  Kl = Q({}, Lr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: hu,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Vn &&
            (Vn && e.type === "mousemove"
              ? ((wo = e.screenX - Vn.screenX), (Eo = e.screenY - Vn.screenY))
              : (Eo = wo = 0),
            (Vn = e)),
          wo);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Eo;
    },
  }),
  Ps = Re(Kl),
  Sp = Q({}, Kl, { dataTransfer: 0 }),
  kp = Re(Sp),
  xp = Q({}, Lr, { relatedTarget: 0 }),
  So = Re(xp),
  Cp = Q({}, Mn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Np = Re(Cp),
  Pp = Q({}, Mn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  _p = Re(Pp),
  Rp = Q({}, Mn, { data: 0 }),
  _s = Re(Rp),
  Tp = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Op = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Lp = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function zp(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Lp[e]) ? !!t[e] : !1;
}
function hu() {
  return zp;
}
var Mp = Q({}, Lr, {
    key: function (e) {
      if (e.key) {
        var t = Tp[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = ol(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Op[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: hu,
    charCode: function (e) {
      return e.type === "keypress" ? ol(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? ol(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Dp = Re(Mp),
  Ip = Q({}, Kl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Rs = Re(Ip),
  jp = Q({}, Lr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: hu,
  }),
  Fp = Re(jp),
  $p = Q({}, Mn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Up = Re($p),
  Bp = Q({}, Kl, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Ap = Re(Bp),
  Wp = [9, 13, 27, 32],
  mu = st && "CompositionEvent" in window,
  tr = null;
st && "documentMode" in document && (tr = document.documentMode);
var Vp = st && "TextEvent" in window && !tr,
  Pc = st && (!mu || (tr && 8 < tr && 11 >= tr)),
  Ts = String.fromCharCode(32),
  Os = !1;
function _c(e, t) {
  switch (e) {
    case "keyup":
      return Wp.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Rc(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var sn = !1;
function Hp(e, t) {
  switch (e) {
    case "compositionend":
      return Rc(t);
    case "keypress":
      return t.which !== 32 ? null : ((Os = !0), Ts);
    case "textInput":
      return (e = t.data), e === Ts && Os ? null : e;
    default:
      return null;
  }
}
function Qp(e, t) {
  if (sn)
    return e === "compositionend" || (!mu && _c(e, t))
      ? ((e = Nc()), (ll = du = St = null), (sn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Pc && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Kp = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Ls(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Kp[e.type] : t === "textarea";
}
function Tc(e, t, n, r) {
  ic(r),
    (t = xl(t, "onChange")),
    0 < t.length &&
      ((n = new pu("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var nr = null,
  vr = null;
function Gp(e) {
  Bc(e, 0);
}
function Gl(e) {
  var t = fn(e);
  if (ba(t)) return e;
}
function Xp(e, t) {
  if (e === "change") return t;
}
var Oc = !1;
if (st) {
  var ko;
  if (st) {
    var xo = "oninput" in document;
    if (!xo) {
      var zs = document.createElement("div");
      zs.setAttribute("oninput", "return;"),
        (xo = typeof zs.oninput == "function");
    }
    ko = xo;
  } else ko = !1;
  Oc = ko && (!document.documentMode || 9 < document.documentMode);
}
function Ms() {
  nr && (nr.detachEvent("onpropertychange", Lc), (vr = nr = null));
}
function Lc(e) {
  if (e.propertyName === "value" && Gl(vr)) {
    var t = [];
    Tc(t, vr, e, uu(e)), cc(Gp, t);
  }
}
function Yp(e, t, n) {
  e === "focusin"
    ? (Ms(), (nr = t), (vr = n), nr.attachEvent("onpropertychange", Lc))
    : e === "focusout" && Ms();
}
function Zp(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Gl(vr);
}
function Jp(e, t) {
  if (e === "click") return Gl(t);
}
function qp(e, t) {
  if (e === "input" || e === "change") return Gl(t);
}
function bp(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Qe = typeof Object.is == "function" ? Object.is : bp;
function gr(e, t) {
  if (Qe(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!Yo.call(t, l) || !Qe(e[l], t[l])) return !1;
  }
  return !0;
}
function Ds(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Is(e, t) {
  var n = Ds(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Ds(n);
  }
}
function zc(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? zc(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Mc() {
  for (var e = window, t = vl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = vl(e.document);
  }
  return t;
}
function vu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function eh(e) {
  var t = Mc(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    zc(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && vu(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          o = Math.min(r.start, l);
        (r = r.end === void 0 ? o : Math.min(r.end, l)),
          !e.extend && o > r && ((l = r), (r = o), (o = l)),
          (l = Is(n, o));
        var i = Is(n, r);
        l &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var th = st && "documentMode" in document && 11 >= document.documentMode,
  an = null,
  hi = null,
  rr = null,
  mi = !1;
function js(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  mi ||
    an == null ||
    an !== vl(r) ||
    ((r = an),
    "selectionStart" in r && vu(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (rr && gr(rr, r)) ||
      ((rr = r),
      (r = xl(hi, "onSelect")),
      0 < r.length &&
        ((t = new pu("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = an))));
}
function Qr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var cn = {
    animationend: Qr("Animation", "AnimationEnd"),
    animationiteration: Qr("Animation", "AnimationIteration"),
    animationstart: Qr("Animation", "AnimationStart"),
    transitionend: Qr("Transition", "TransitionEnd"),
  },
  Co = {},
  Dc = {};
st &&
  ((Dc = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete cn.animationend.animation,
    delete cn.animationiteration.animation,
    delete cn.animationstart.animation),
  "TransitionEvent" in window || delete cn.transitionend.transition);
function Xl(e) {
  if (Co[e]) return Co[e];
  if (!cn[e]) return e;
  var t = cn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Dc) return (Co[e] = t[n]);
  return e;
}
var Ic = Xl("animationend"),
  jc = Xl("animationiteration"),
  Fc = Xl("animationstart"),
  $c = Xl("transitionend"),
  Uc = new Map(),
  Fs =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function It(e, t) {
  Uc.set(e, t), Jt(t, [e]);
}
for (var No = 0; No < Fs.length; No++) {
  var Po = Fs[No],
    nh = Po.toLowerCase(),
    rh = Po[0].toUpperCase() + Po.slice(1);
  It(nh, "on" + rh);
}
It(Ic, "onAnimationEnd");
It(jc, "onAnimationIteration");
It(Fc, "onAnimationStart");
It("dblclick", "onDoubleClick");
It("focusin", "onFocus");
It("focusout", "onBlur");
It($c, "onTransitionEnd");
Nn("onMouseEnter", ["mouseout", "mouseover"]);
Nn("onMouseLeave", ["mouseout", "mouseover"]);
Nn("onPointerEnter", ["pointerout", "pointerover"]);
Nn("onPointerLeave", ["pointerout", "pointerover"]);
Jt(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Jt(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Jt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Jt(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Jt(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Jt(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Jn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  lh = new Set("cancel close invalid load scroll toggle".split(" ").concat(Jn));
function $s(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), np(r, t, void 0, e), (e.currentTarget = null);
}
function Bc(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var u = r[i],
            s = u.instance,
            a = u.currentTarget;
          if (((u = u.listener), s !== o && l.isPropagationStopped())) break e;
          $s(l, u, a), (o = s);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((u = r[i]),
            (s = u.instance),
            (a = u.currentTarget),
            (u = u.listener),
            s !== o && l.isPropagationStopped())
          )
            break e;
          $s(l, u, a), (o = s);
        }
    }
  }
  if (yl) throw ((e = ci), (yl = !1), (ci = null), e);
}
function B(e, t) {
  var n = t[Ei];
  n === void 0 && (n = t[Ei] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Ac(t, e, 2, !1), n.add(r));
}
function _o(e, t, n) {
  var r = 0;
  t && (r |= 4), Ac(n, e, r, t);
}
var Kr = "_reactListening" + Math.random().toString(36).slice(2);
function yr(e) {
  if (!e[Kr]) {
    (e[Kr] = !0),
      Xa.forEach(function (n) {
        n !== "selectionchange" && (lh.has(n) || _o(n, !1, e), _o(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Kr] || ((t[Kr] = !0), _o("selectionchange", !1, t));
  }
}
function Ac(e, t, n, r) {
  switch (Cc(t)) {
    case 1:
      var l = yp;
      break;
    case 4:
      l = wp;
      break;
    default:
      l = fu;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !ai ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1);
}
function Ro(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var s = i.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = i.stateNode.containerInfo),
              s === l || (s.nodeType === 8 && s.parentNode === l))
            )
              return;
            i = i.return;
          }
        for (; u !== null; ) {
          if (((i = At(u)), i === null)) return;
          if (((s = i.tag), s === 5 || s === 6)) {
            r = o = i;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  cc(function () {
    var a = o,
      h = uu(n),
      d = [];
    e: {
      var m = Uc.get(e);
      if (m !== void 0) {
        var y = pu,
          w = e;
        switch (e) {
          case "keypress":
            if (ol(n) === 0) break e;
          case "keydown":
          case "keyup":
            y = Dp;
            break;
          case "focusin":
            (w = "focus"), (y = So);
            break;
          case "focusout":
            (w = "blur"), (y = So);
            break;
          case "beforeblur":
          case "afterblur":
            y = So;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            y = Ps;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = kp;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = Fp;
            break;
          case Ic:
          case jc:
          case Fc:
            y = Np;
            break;
          case $c:
            y = Up;
            break;
          case "scroll":
            y = Ep;
            break;
          case "wheel":
            y = Ap;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = _p;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = Rs;
        }
        var g = (t & 4) !== 0,
          x = !g && e === "scroll",
          f = g ? (m !== null ? m + "Capture" : null) : m;
        g = [];
        for (var c = a, p; c !== null; ) {
          p = c;
          var E = p.stateNode;
          if (
            (p.tag === 5 &&
              E !== null &&
              ((p = E),
              f !== null && ((E = dr(c, f)), E != null && g.push(wr(c, E, p)))),
            x)
          )
            break;
          c = c.return;
        }
        0 < g.length &&
          ((m = new y(m, w, null, n, h)), d.push({ event: m, listeners: g }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((m = e === "mouseover" || e === "pointerover"),
          (y = e === "mouseout" || e === "pointerout"),
          m &&
            n !== ui &&
            (w = n.relatedTarget || n.fromElement) &&
            (At(w) || w[at]))
        )
          break e;
        if (
          (y || m) &&
          ((m =
            h.window === h
              ? h
              : (m = h.ownerDocument)
              ? m.defaultView || m.parentWindow
              : window),
          y
            ? ((w = n.relatedTarget || n.toElement),
              (y = a),
              (w = w ? At(w) : null),
              w !== null &&
                ((x = qt(w)), w !== x || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((y = null), (w = a)),
          y !== w)
        ) {
          if (
            ((g = Ps),
            (E = "onMouseLeave"),
            (f = "onMouseEnter"),
            (c = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((g = Rs),
              (E = "onPointerLeave"),
              (f = "onPointerEnter"),
              (c = "pointer")),
            (x = y == null ? m : fn(y)),
            (p = w == null ? m : fn(w)),
            (m = new g(E, c + "leave", y, n, h)),
            (m.target = x),
            (m.relatedTarget = p),
            (E = null),
            At(h) === a &&
              ((g = new g(f, c + "enter", w, n, h)),
              (g.target = p),
              (g.relatedTarget = x),
              (E = g)),
            (x = E),
            y && w)
          )
            t: {
              for (g = y, f = w, c = 0, p = g; p; p = tn(p)) c++;
              for (p = 0, E = f; E; E = tn(E)) p++;
              for (; 0 < c - p; ) (g = tn(g)), c--;
              for (; 0 < p - c; ) (f = tn(f)), p--;
              for (; c--; ) {
                if (g === f || (f !== null && g === f.alternate)) break t;
                (g = tn(g)), (f = tn(f));
              }
              g = null;
            }
          else g = null;
          y !== null && Us(d, m, y, g, !1),
            w !== null && x !== null && Us(d, x, w, g, !0);
        }
      }
      e: {
        if (
          ((m = a ? fn(a) : window),
          (y = m.nodeName && m.nodeName.toLowerCase()),
          y === "select" || (y === "input" && m.type === "file"))
        )
          var k = Xp;
        else if (Ls(m))
          if (Oc) k = qp;
          else {
            k = Zp;
            var C = Yp;
          }
        else
          (y = m.nodeName) &&
            y.toLowerCase() === "input" &&
            (m.type === "checkbox" || m.type === "radio") &&
            (k = Jp);
        if (k && (k = k(e, a))) {
          Tc(d, k, n, h);
          break e;
        }
        C && C(e, m, a),
          e === "focusout" &&
            (C = m._wrapperState) &&
            C.controlled &&
            m.type === "number" &&
            ni(m, "number", m.value);
      }
      switch (((C = a ? fn(a) : window), e)) {
        case "focusin":
          (Ls(C) || C.contentEditable === "true") &&
            ((an = C), (hi = a), (rr = null));
          break;
        case "focusout":
          rr = hi = an = null;
          break;
        case "mousedown":
          mi = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (mi = !1), js(d, n, h);
          break;
        case "selectionchange":
          if (th) break;
        case "keydown":
        case "keyup":
          js(d, n, h);
      }
      var P;
      if (mu)
        e: {
          switch (e) {
            case "compositionstart":
              var T = "onCompositionStart";
              break e;
            case "compositionend":
              T = "onCompositionEnd";
              break e;
            case "compositionupdate":
              T = "onCompositionUpdate";
              break e;
          }
          T = void 0;
        }
      else
        sn
          ? _c(e, n) && (T = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T &&
        (Pc &&
          n.locale !== "ko" &&
          (sn || T !== "onCompositionStart"
            ? T === "onCompositionEnd" && sn && (P = Nc())
            : ((St = h),
              (du = "value" in St ? St.value : St.textContent),
              (sn = !0))),
        (C = xl(a, T)),
        0 < C.length &&
          ((T = new _s(T, e, null, n, h)),
          d.push({ event: T, listeners: C }),
          P ? (T.data = P) : ((P = Rc(n)), P !== null && (T.data = P)))),
        (P = Vp ? Hp(e, n) : Qp(e, n)) &&
          ((a = xl(a, "onBeforeInput")),
          0 < a.length &&
            ((h = new _s("onBeforeInput", "beforeinput", null, n, h)),
            d.push({ event: h, listeners: a }),
            (h.data = P)));
    }
    Bc(d, t);
  });
}
function wr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function xl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      o = l.stateNode;
    l.tag === 5 &&
      o !== null &&
      ((l = o),
      (o = dr(e, n)),
      o != null && r.unshift(wr(e, o, l)),
      (o = dr(e, t)),
      o != null && r.push(wr(e, o, l))),
      (e = e.return);
  }
  return r;
}
function tn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Us(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var u = n,
      s = u.alternate,
      a = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 &&
      a !== null &&
      ((u = a),
      l
        ? ((s = dr(n, o)), s != null && i.unshift(wr(n, s, u)))
        : l || ((s = dr(n, o)), s != null && i.push(wr(n, s, u)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var oh = /\r\n?/g,
  ih = /\u0000|\uFFFD/g;
function Bs(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      oh,
      `
`
    )
    .replace(ih, "");
}
function Gr(e, t, n) {
  if (((t = Bs(t)), Bs(e) !== t && n)) throw Error(S(425));
}
function Cl() {}
var vi = null,
  gi = null;
function yi(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var wi = typeof setTimeout == "function" ? setTimeout : void 0,
  uh = typeof clearTimeout == "function" ? clearTimeout : void 0,
  As = typeof Promise == "function" ? Promise : void 0,
  sh =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof As < "u"
      ? function (e) {
          return As.resolve(null).then(e).catch(ah);
        }
      : wi;
function ah(e) {
  setTimeout(function () {
    throw e;
  });
}
function To(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), mr(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  mr(t);
}
function _t(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Ws(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Dn = Math.random().toString(36).slice(2),
  Ye = "__reactFiber$" + Dn,
  Er = "__reactProps$" + Dn,
  at = "__reactContainer$" + Dn,
  Ei = "__reactEvents$" + Dn,
  ch = "__reactListeners$" + Dn,
  fh = "__reactHandles$" + Dn;
function At(e) {
  var t = e[Ye];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[at] || n[Ye])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Ws(e); e !== null; ) {
          if ((n = e[Ye])) return n;
          e = Ws(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function zr(e) {
  return (
    (e = e[Ye] || e[at]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function fn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(S(33));
}
function Yl(e) {
  return e[Er] || null;
}
var Si = [],
  dn = -1;
function jt(e) {
  return { current: e };
}
function A(e) {
  0 > dn || ((e.current = Si[dn]), (Si[dn] = null), dn--);
}
function $(e, t) {
  dn++, (Si[dn] = e.current), (e.current = t);
}
var Dt = {},
  ae = jt(Dt),
  ye = jt(!1),
  Kt = Dt;
function Pn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Dt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    o;
  for (o in n) l[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function we(e) {
  return (e = e.childContextTypes), e != null;
}
function Nl() {
  A(ye), A(ae);
}
function Vs(e, t, n) {
  if (ae.current !== Dt) throw Error(S(168));
  $(ae, t), $(ye, n);
}
function Wc(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(S(108, Yd(e) || "Unknown", l));
  return Q({}, n, r);
}
function Pl(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Dt),
    (Kt = ae.current),
    $(ae, e),
    $(ye, ye.current),
    !0
  );
}
function Hs(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(S(169));
  n
    ? ((e = Wc(e, t, Kt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      A(ye),
      A(ae),
      $(ae, e))
    : A(ye),
    $(ye, n);
}
var nt = null,
  Zl = !1,
  Oo = !1;
function Vc(e) {
  nt === null ? (nt = [e]) : nt.push(e);
}
function dh(e) {
  (Zl = !0), Vc(e);
}
function Ft() {
  if (!Oo && nt !== null) {
    Oo = !0;
    var e = 0,
      t = I;
    try {
      var n = nt;
      for (I = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (nt = null), (Zl = !1);
    } catch (l) {
      throw (nt !== null && (nt = nt.slice(e + 1)), hc(su, Ft), l);
    } finally {
      (I = t), (Oo = !1);
    }
  }
  return null;
}
var pn = [],
  hn = 0,
  _l = null,
  Rl = 0,
  Te = [],
  Oe = 0,
  Gt = null,
  lt = 1,
  ot = "";
function Ut(e, t) {
  (pn[hn++] = Rl), (pn[hn++] = _l), (_l = e), (Rl = t);
}
function Hc(e, t, n) {
  (Te[Oe++] = lt), (Te[Oe++] = ot), (Te[Oe++] = Gt), (Gt = e);
  var r = lt;
  e = ot;
  var l = 32 - Ve(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var o = 32 - Ve(t) + l;
  if (30 < o) {
    var i = l - (l % 5);
    (o = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (l -= i),
      (lt = (1 << (32 - Ve(t) + l)) | (n << l) | r),
      (ot = o + e);
  } else (lt = (1 << o) | (n << l) | r), (ot = e);
}
function gu(e) {
  e.return !== null && (Ut(e, 1), Hc(e, 1, 0));
}
function yu(e) {
  for (; e === _l; )
    (_l = pn[--hn]), (pn[hn] = null), (Rl = pn[--hn]), (pn[hn] = null);
  for (; e === Gt; )
    (Gt = Te[--Oe]),
      (Te[Oe] = null),
      (ot = Te[--Oe]),
      (Te[Oe] = null),
      (lt = Te[--Oe]),
      (Te[Oe] = null);
}
var Ce = null,
  xe = null,
  W = !1,
  Be = null;
function Qc(e, t) {
  var n = Le(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Qs(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ce = e), (xe = _t(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ce = e), (xe = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Gt !== null ? { id: lt, overflow: ot } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Le(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ce = e),
            (xe = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function ki(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function xi(e) {
  if (W) {
    var t = xe;
    if (t) {
      var n = t;
      if (!Qs(e, t)) {
        if (ki(e)) throw Error(S(418));
        t = _t(n.nextSibling);
        var r = Ce;
        t && Qs(e, t)
          ? Qc(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (W = !1), (Ce = e));
      }
    } else {
      if (ki(e)) throw Error(S(418));
      (e.flags = (e.flags & -4097) | 2), (W = !1), (Ce = e);
    }
  }
}
function Ks(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ce = e;
}
function Xr(e) {
  if (e !== Ce) return !1;
  if (!W) return Ks(e), (W = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !yi(e.type, e.memoizedProps))),
    t && (t = xe))
  ) {
    if (ki(e)) throw (Kc(), Error(S(418)));
    for (; t; ) Qc(e, t), (t = _t(t.nextSibling));
  }
  if ((Ks(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(S(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              xe = _t(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      xe = null;
    }
  } else xe = Ce ? _t(e.stateNode.nextSibling) : null;
  return !0;
}
function Kc() {
  for (var e = xe; e; ) e = _t(e.nextSibling);
}
function _n() {
  (xe = Ce = null), (W = !1);
}
function wu(e) {
  Be === null ? (Be = [e]) : Be.push(e);
}
var ph = dt.ReactCurrentBatchConfig;
function $e(e, t) {
  if (e && e.defaultProps) {
    (t = Q({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Tl = jt(null),
  Ol = null,
  mn = null,
  Eu = null;
function Su() {
  Eu = mn = Ol = null;
}
function ku(e) {
  var t = Tl.current;
  A(Tl), (e._currentValue = t);
}
function Ci(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function xn(e, t) {
  (Ol = e),
    (Eu = mn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (ge = !0), (e.firstContext = null));
}
function De(e) {
  var t = e._currentValue;
  if (Eu !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), mn === null)) {
      if (Ol === null) throw Error(S(308));
      (mn = e), (Ol.dependencies = { lanes: 0, firstContext: e });
    } else mn = mn.next = e;
  return t;
}
var Wt = null;
function xu(e) {
  Wt === null ? (Wt = [e]) : Wt.push(e);
}
function Gc(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), xu(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    ct(e, r)
  );
}
function ct(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var gt = !1;
function Cu(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Xc(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function it(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Rt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), D & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      ct(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), xu(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    ct(e, n)
  );
}
function il(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), au(e, n);
  }
}
function Gs(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (l = o = i) : (o = o.next = i), (n = n.next);
      } while (n !== null);
      o === null ? (l = o = t) : (o = o.next = t);
    } else l = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Ll(e, t, n, r) {
  var l = e.updateQueue;
  gt = !1;
  var o = l.firstBaseUpdate,
    i = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u,
      a = s.next;
    (s.next = null), i === null ? (o = a) : (i.next = a), (i = s);
    var h = e.alternate;
    h !== null &&
      ((h = h.updateQueue),
      (u = h.lastBaseUpdate),
      u !== i &&
        (u === null ? (h.firstBaseUpdate = a) : (u.next = a),
        (h.lastBaseUpdate = s)));
  }
  if (o !== null) {
    var d = l.baseState;
    (i = 0), (h = a = s = null), (u = o);
    do {
      var m = u.lane,
        y = u.eventTime;
      if ((r & m) === m) {
        h !== null &&
          (h = h.next =
            {
              eventTime: y,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var w = e,
            g = u;
          switch (((m = t), (y = n), g.tag)) {
            case 1:
              if (((w = g.payload), typeof w == "function")) {
                d = w.call(y, d, m);
                break e;
              }
              d = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = g.payload),
                (m = typeof w == "function" ? w.call(y, d, m) : w),
                m == null)
              )
                break e;
              d = Q({}, d, m);
              break e;
            case 2:
              gt = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (m = l.effects),
          m === null ? (l.effects = [u]) : m.push(u));
      } else
        (y = {
          eventTime: y,
          lane: m,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          h === null ? ((a = h = y), (s = d)) : (h = h.next = y),
          (i |= m);
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        (m = u),
          (u = m.next),
          (m.next = null),
          (l.lastBaseUpdate = m),
          (l.shared.pending = null);
      }
    } while (1);
    if (
      (h === null && (s = d),
      (l.baseState = s),
      (l.firstBaseUpdate = a),
      (l.lastBaseUpdate = h),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (i |= l.lane), (l = l.next);
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    (Yt |= i), (e.lanes = i), (e.memoizedState = d);
  }
}
function Xs(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(S(191, l));
        l.call(r);
      }
    }
}
var Yc = new Ga.Component().refs;
function Ni(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Q({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Jl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? qt(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = de(),
      l = Ot(e),
      o = it(r, l);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = Rt(e, o, l)),
      t !== null && (He(t, e, l, r), il(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = de(),
      l = Ot(e),
      o = it(r, l);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = Rt(e, o, l)),
      t !== null && (He(t, e, l, r), il(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = de(),
      r = Ot(e),
      l = it(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = Rt(e, l, r)),
      t !== null && (He(t, e, r, n), il(t, e, r));
  },
};
function Ys(e, t, n, r, l, o, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !gr(n, r) || !gr(l, o)
      : !0
  );
}
function Zc(e, t, n) {
  var r = !1,
    l = Dt,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = De(o))
      : ((l = we(t) ? Kt : ae.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? Pn(e, l) : Dt)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Jl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Zs(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Jl.enqueueReplaceState(t, t.state, null);
}
function Pi(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = Yc), Cu(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (l.context = De(o))
    : ((o = we(t) ? Kt : ae.current), (l.context = Pn(e, o))),
    (l.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (Ni(e, t, o, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && Jl.enqueueReplaceState(l, l.state, null),
      Ll(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function Hn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(S(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(S(147, e));
      var l = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (i) {
            var u = l.refs;
            u === Yc && (u = l.refs = {}),
              i === null ? delete u[o] : (u[o] = i);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(S(284));
    if (!n._owner) throw Error(S(290, e));
  }
  return e;
}
function Yr(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      S(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Js(e) {
  var t = e._init;
  return t(e._payload);
}
function Jc(e) {
  function t(f, c) {
    if (e) {
      var p = f.deletions;
      p === null ? ((f.deletions = [c]), (f.flags |= 16)) : p.push(c);
    }
  }
  function n(f, c) {
    if (!e) return null;
    for (; c !== null; ) t(f, c), (c = c.sibling);
    return null;
  }
  function r(f, c) {
    for (f = new Map(); c !== null; )
      c.key !== null ? f.set(c.key, c) : f.set(c.index, c), (c = c.sibling);
    return f;
  }
  function l(f, c) {
    return (f = Lt(f, c)), (f.index = 0), (f.sibling = null), f;
  }
  function o(f, c, p) {
    return (
      (f.index = p),
      e
        ? ((p = f.alternate),
          p !== null
            ? ((p = p.index), p < c ? ((f.flags |= 2), c) : p)
            : ((f.flags |= 2), c))
        : ((f.flags |= 1048576), c)
    );
  }
  function i(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function u(f, c, p, E) {
    return c === null || c.tag !== 6
      ? ((c = Fo(p, f.mode, E)), (c.return = f), c)
      : ((c = l(c, p)), (c.return = f), c);
  }
  function s(f, c, p, E) {
    var k = p.type;
    return k === un
      ? h(f, c, p.props.children, E, p.key)
      : c !== null &&
        (c.elementType === k ||
          (typeof k == "object" &&
            k !== null &&
            k.$$typeof === vt &&
            Js(k) === c.type))
      ? ((E = l(c, p.props)), (E.ref = Hn(f, c, p)), (E.return = f), E)
      : ((E = dl(p.type, p.key, p.props, null, f.mode, E)),
        (E.ref = Hn(f, c, p)),
        (E.return = f),
        E);
  }
  function a(f, c, p, E) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== p.containerInfo ||
      c.stateNode.implementation !== p.implementation
      ? ((c = $o(p, f.mode, E)), (c.return = f), c)
      : ((c = l(c, p.children || [])), (c.return = f), c);
  }
  function h(f, c, p, E, k) {
    return c === null || c.tag !== 7
      ? ((c = Qt(p, f.mode, E, k)), (c.return = f), c)
      : ((c = l(c, p)), (c.return = f), c);
  }
  function d(f, c, p) {
    if ((typeof c == "string" && c !== "") || typeof c == "number")
      return (c = Fo("" + c, f.mode, p)), (c.return = f), c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case $r:
          return (
            (p = dl(c.type, c.key, c.props, null, f.mode, p)),
            (p.ref = Hn(f, null, c)),
            (p.return = f),
            p
          );
        case on:
          return (c = $o(c, f.mode, p)), (c.return = f), c;
        case vt:
          var E = c._init;
          return d(f, E(c._payload), p);
      }
      if (Yn(c) || Un(c))
        return (c = Qt(c, f.mode, p, null)), (c.return = f), c;
      Yr(f, c);
    }
    return null;
  }
  function m(f, c, p, E) {
    var k = c !== null ? c.key : null;
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return k !== null ? null : u(f, c, "" + p, E);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case $r:
          return p.key === k ? s(f, c, p, E) : null;
        case on:
          return p.key === k ? a(f, c, p, E) : null;
        case vt:
          return (k = p._init), m(f, c, k(p._payload), E);
      }
      if (Yn(p) || Un(p)) return k !== null ? null : h(f, c, p, E, null);
      Yr(f, p);
    }
    return null;
  }
  function y(f, c, p, E, k) {
    if ((typeof E == "string" && E !== "") || typeof E == "number")
      return (f = f.get(p) || null), u(c, f, "" + E, k);
    if (typeof E == "object" && E !== null) {
      switch (E.$$typeof) {
        case $r:
          return (f = f.get(E.key === null ? p : E.key) || null), s(c, f, E, k);
        case on:
          return (f = f.get(E.key === null ? p : E.key) || null), a(c, f, E, k);
        case vt:
          var C = E._init;
          return y(f, c, p, C(E._payload), k);
      }
      if (Yn(E) || Un(E)) return (f = f.get(p) || null), h(c, f, E, k, null);
      Yr(c, E);
    }
    return null;
  }
  function w(f, c, p, E) {
    for (
      var k = null, C = null, P = c, T = (c = 0), j = null;
      P !== null && T < p.length;
      T++
    ) {
      P.index > T ? ((j = P), (P = null)) : (j = P.sibling);
      var z = m(f, P, p[T], E);
      if (z === null) {
        P === null && (P = j);
        break;
      }
      e && P && z.alternate === null && t(f, P),
        (c = o(z, c, T)),
        C === null ? (k = z) : (C.sibling = z),
        (C = z),
        (P = j);
    }
    if (T === p.length) return n(f, P), W && Ut(f, T), k;
    if (P === null) {
      for (; T < p.length; T++)
        (P = d(f, p[T], E)),
          P !== null &&
            ((c = o(P, c, T)), C === null ? (k = P) : (C.sibling = P), (C = P));
      return W && Ut(f, T), k;
    }
    for (P = r(f, P); T < p.length; T++)
      (j = y(P, f, T, p[T], E)),
        j !== null &&
          (e && j.alternate !== null && P.delete(j.key === null ? T : j.key),
          (c = o(j, c, T)),
          C === null ? (k = j) : (C.sibling = j),
          (C = j));
    return (
      e &&
        P.forEach(function (ce) {
          return t(f, ce);
        }),
      W && Ut(f, T),
      k
    );
  }
  function g(f, c, p, E) {
    var k = Un(p);
    if (typeof k != "function") throw Error(S(150));
    if (((p = k.call(p)), p == null)) throw Error(S(151));
    for (
      var C = (k = null), P = c, T = (c = 0), j = null, z = p.next();
      P !== null && !z.done;
      T++, z = p.next()
    ) {
      P.index > T ? ((j = P), (P = null)) : (j = P.sibling);
      var ce = m(f, P, z.value, E);
      if (ce === null) {
        P === null && (P = j);
        break;
      }
      e && P && ce.alternate === null && t(f, P),
        (c = o(ce, c, T)),
        C === null ? (k = ce) : (C.sibling = ce),
        (C = ce),
        (P = j);
    }
    if (z.done) return n(f, P), W && Ut(f, T), k;
    if (P === null) {
      for (; !z.done; T++, z = p.next())
        (z = d(f, z.value, E)),
          z !== null &&
            ((c = o(z, c, T)), C === null ? (k = z) : (C.sibling = z), (C = z));
      return W && Ut(f, T), k;
    }
    for (P = r(f, P); !z.done; T++, z = p.next())
      (z = y(P, f, T, z.value, E)),
        z !== null &&
          (e && z.alternate !== null && P.delete(z.key === null ? T : z.key),
          (c = o(z, c, T)),
          C === null ? (k = z) : (C.sibling = z),
          (C = z));
    return (
      e &&
        P.forEach(function (be) {
          return t(f, be);
        }),
      W && Ut(f, T),
      k
    );
  }
  function x(f, c, p, E) {
    if (
      (typeof p == "object" &&
        p !== null &&
        p.type === un &&
        p.key === null &&
        (p = p.props.children),
      typeof p == "object" && p !== null)
    ) {
      switch (p.$$typeof) {
        case $r:
          e: {
            for (var k = p.key, C = c; C !== null; ) {
              if (C.key === k) {
                if (((k = p.type), k === un)) {
                  if (C.tag === 7) {
                    n(f, C.sibling),
                      (c = l(C, p.props.children)),
                      (c.return = f),
                      (f = c);
                    break e;
                  }
                } else if (
                  C.elementType === k ||
                  (typeof k == "object" &&
                    k !== null &&
                    k.$$typeof === vt &&
                    Js(k) === C.type)
                ) {
                  n(f, C.sibling),
                    (c = l(C, p.props)),
                    (c.ref = Hn(f, C, p)),
                    (c.return = f),
                    (f = c);
                  break e;
                }
                n(f, C);
                break;
              } else t(f, C);
              C = C.sibling;
            }
            p.type === un
              ? ((c = Qt(p.props.children, f.mode, E, p.key)),
                (c.return = f),
                (f = c))
              : ((E = dl(p.type, p.key, p.props, null, f.mode, E)),
                (E.ref = Hn(f, c, p)),
                (E.return = f),
                (f = E));
          }
          return i(f);
        case on:
          e: {
            for (C = p.key; c !== null; ) {
              if (c.key === C)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === p.containerInfo &&
                  c.stateNode.implementation === p.implementation
                ) {
                  n(f, c.sibling),
                    (c = l(c, p.children || [])),
                    (c.return = f),
                    (f = c);
                  break e;
                } else {
                  n(f, c);
                  break;
                }
              else t(f, c);
              c = c.sibling;
            }
            (c = $o(p, f.mode, E)), (c.return = f), (f = c);
          }
          return i(f);
        case vt:
          return (C = p._init), x(f, c, C(p._payload), E);
      }
      if (Yn(p)) return w(f, c, p, E);
      if (Un(p)) return g(f, c, p, E);
      Yr(f, p);
    }
    return (typeof p == "string" && p !== "") || typeof p == "number"
      ? ((p = "" + p),
        c !== null && c.tag === 6
          ? (n(f, c.sibling), (c = l(c, p)), (c.return = f), (f = c))
          : (n(f, c), (c = Fo(p, f.mode, E)), (c.return = f), (f = c)),
        i(f))
      : n(f, c);
  }
  return x;
}
var Rn = Jc(!0),
  qc = Jc(!1),
  Mr = {},
  qe = jt(Mr),
  Sr = jt(Mr),
  kr = jt(Mr);
function Vt(e) {
  if (e === Mr) throw Error(S(174));
  return e;
}
function Nu(e, t) {
  switch (($(kr, t), $(Sr, e), $(qe, Mr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : li(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = li(t, e));
  }
  A(qe), $(qe, t);
}
function Tn() {
  A(qe), A(Sr), A(kr);
}
function bc(e) {
  Vt(kr.current);
  var t = Vt(qe.current),
    n = li(t, e.type);
  t !== n && ($(Sr, e), $(qe, n));
}
function Pu(e) {
  Sr.current === e && (A(qe), A(Sr));
}
var V = jt(0);
function zl(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Lo = [];
function _u() {
  for (var e = 0; e < Lo.length; e++)
    Lo[e]._workInProgressVersionPrimary = null;
  Lo.length = 0;
}
var ul = dt.ReactCurrentDispatcher,
  zo = dt.ReactCurrentBatchConfig,
  Xt = 0,
  H = null,
  J = null,
  ee = null,
  Ml = !1,
  lr = !1,
  xr = 0,
  hh = 0;
function ie() {
  throw Error(S(321));
}
function Ru(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Qe(e[n], t[n])) return !1;
  return !0;
}
function Tu(e, t, n, r, l, o) {
  if (
    ((Xt = o),
    (H = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (ul.current = e === null || e.memoizedState === null ? yh : wh),
    (e = n(r, l)),
    lr)
  ) {
    o = 0;
    do {
      if (((lr = !1), (xr = 0), 25 <= o)) throw Error(S(301));
      (o += 1),
        (ee = J = null),
        (t.updateQueue = null),
        (ul.current = Eh),
        (e = n(r, l));
    } while (lr);
  }
  if (
    ((ul.current = Dl),
    (t = J !== null && J.next !== null),
    (Xt = 0),
    (ee = J = H = null),
    (Ml = !1),
    t)
  )
    throw Error(S(300));
  return e;
}
function Ou() {
  var e = xr !== 0;
  return (xr = 0), e;
}
function Xe() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ee === null ? (H.memoizedState = ee = e) : (ee = ee.next = e), ee;
}
function Ie() {
  if (J === null) {
    var e = H.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = J.next;
  var t = ee === null ? H.memoizedState : ee.next;
  if (t !== null) (ee = t), (J = e);
  else {
    if (e === null) throw Error(S(310));
    (J = e),
      (e = {
        memoizedState: J.memoizedState,
        baseState: J.baseState,
        baseQueue: J.baseQueue,
        queue: J.queue,
        next: null,
      }),
      ee === null ? (H.memoizedState = ee = e) : (ee = ee.next = e);
  }
  return ee;
}
function Cr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Mo(e) {
  var t = Ie(),
    n = t.queue;
  if (n === null) throw Error(S(311));
  n.lastRenderedReducer = e;
  var r = J,
    l = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      (l.next = o.next), (o.next = i);
    }
    (r.baseQueue = l = o), (n.pending = null);
  }
  if (l !== null) {
    (o = l.next), (r = r.baseState);
    var u = (i = null),
      s = null,
      a = o;
    do {
      var h = a.lane;
      if ((Xt & h) === h)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: a.action,
              hasEagerState: a.hasEagerState,
              eagerState: a.eagerState,
              next: null,
            }),
          (r = a.hasEagerState ? a.eagerState : e(r, a.action));
      else {
        var d = {
          lane: h,
          action: a.action,
          hasEagerState: a.hasEagerState,
          eagerState: a.eagerState,
          next: null,
        };
        s === null ? ((u = s = d), (i = r)) : (s = s.next = d),
          (H.lanes |= h),
          (Yt |= h);
      }
      a = a.next;
    } while (a !== null && a !== o);
    s === null ? (i = r) : (s.next = u),
      Qe(r, t.memoizedState) || (ge = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (o = l.lane), (H.lanes |= o), (Yt |= o), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Do(e) {
  var t = Ie(),
    n = t.queue;
  if (n === null) throw Error(S(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = (l = l.next);
    do (o = e(o, i.action)), (i = i.next);
    while (i !== l);
    Qe(o, t.memoizedState) || (ge = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function ef() {}
function tf(e, t) {
  var n = H,
    r = Ie(),
    l = t(),
    o = !Qe(r.memoizedState, l);
  if (
    (o && ((r.memoizedState = l), (ge = !0)),
    (r = r.queue),
    Lu(lf.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (ee !== null && ee.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Nr(9, rf.bind(null, n, r, l, t), void 0, null),
      te === null)
    )
      throw Error(S(349));
    Xt & 30 || nf(n, t, l);
  }
  return l;
}
function nf(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = H.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (H.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function rf(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), of(t) && uf(e);
}
function lf(e, t, n) {
  return n(function () {
    of(t) && uf(e);
  });
}
function of(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Qe(e, n);
  } catch {
    return !0;
  }
}
function uf(e) {
  var t = ct(e, 1);
  t !== null && He(t, e, 1, -1);
}
function qs(e) {
  var t = Xe();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Cr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = gh.bind(null, H, e)),
    [t.memoizedState, e]
  );
}
function Nr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = H.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (H.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function sf() {
  return Ie().memoizedState;
}
function sl(e, t, n, r) {
  var l = Xe();
  (H.flags |= e),
    (l.memoizedState = Nr(1 | t, n, void 0, r === void 0 ? null : r));
}
function ql(e, t, n, r) {
  var l = Ie();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (J !== null) {
    var i = J.memoizedState;
    if (((o = i.destroy), r !== null && Ru(r, i.deps))) {
      l.memoizedState = Nr(t, n, o, r);
      return;
    }
  }
  (H.flags |= e), (l.memoizedState = Nr(1 | t, n, o, r));
}
function bs(e, t) {
  return sl(8390656, 8, e, t);
}
function Lu(e, t) {
  return ql(2048, 8, e, t);
}
function af(e, t) {
  return ql(4, 2, e, t);
}
function cf(e, t) {
  return ql(4, 4, e, t);
}
function ff(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function df(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), ql(4, 4, ff.bind(null, t, e), n)
  );
}
function zu() {}
function pf(e, t) {
  var n = Ie();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ru(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function hf(e, t) {
  var n = Ie();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ru(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function mf(e, t, n) {
  return Xt & 21
    ? (Qe(n, t) || ((n = gc()), (H.lanes |= n), (Yt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (ge = !0)), (e.memoizedState = n));
}
function mh(e, t) {
  var n = I;
  (I = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = zo.transition;
  zo.transition = {};
  try {
    e(!1), t();
  } finally {
    (I = n), (zo.transition = r);
  }
}
function vf() {
  return Ie().memoizedState;
}
function vh(e, t, n) {
  var r = Ot(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    gf(e))
  )
    yf(t, n);
  else if (((n = Gc(e, t, n, r)), n !== null)) {
    var l = de();
    He(n, e, r, l), wf(n, t, r);
  }
}
function gh(e, t, n) {
  var r = Ot(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (gf(e)) yf(t, l);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var i = t.lastRenderedState,
          u = o(i, n);
        if (((l.hasEagerState = !0), (l.eagerState = u), Qe(u, i))) {
          var s = t.interleaved;
          s === null
            ? ((l.next = l), xu(t))
            : ((l.next = s.next), (s.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = Gc(e, t, l, r)),
      n !== null && ((l = de()), He(n, e, r, l), wf(n, t, r));
  }
}
function gf(e) {
  var t = e.alternate;
  return e === H || (t !== null && t === H);
}
function yf(e, t) {
  lr = Ml = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function wf(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), au(e, n);
  }
}
var Dl = {
    readContext: De,
    useCallback: ie,
    useContext: ie,
    useEffect: ie,
    useImperativeHandle: ie,
    useInsertionEffect: ie,
    useLayoutEffect: ie,
    useMemo: ie,
    useReducer: ie,
    useRef: ie,
    useState: ie,
    useDebugValue: ie,
    useDeferredValue: ie,
    useTransition: ie,
    useMutableSource: ie,
    useSyncExternalStore: ie,
    useId: ie,
    unstable_isNewReconciler: !1,
  },
  yh = {
    readContext: De,
    useCallback: function (e, t) {
      return (Xe().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: De,
    useEffect: bs,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        sl(4194308, 4, ff.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return sl(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return sl(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Xe();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Xe();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = vh.bind(null, H, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Xe();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: qs,
    useDebugValue: zu,
    useDeferredValue: function (e) {
      return (Xe().memoizedState = e);
    },
    useTransition: function () {
      var e = qs(!1),
        t = e[0];
      return (e = mh.bind(null, e[1])), (Xe().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = H,
        l = Xe();
      if (W) {
        if (n === void 0) throw Error(S(407));
        n = n();
      } else {
        if (((n = t()), te === null)) throw Error(S(349));
        Xt & 30 || nf(r, t, n);
      }
      l.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (l.queue = o),
        bs(lf.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        Nr(9, rf.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Xe(),
        t = te.identifierPrefix;
      if (W) {
        var n = ot,
          r = lt;
        (n = (r & ~(1 << (32 - Ve(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = xr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = hh++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  wh = {
    readContext: De,
    useCallback: pf,
    useContext: De,
    useEffect: Lu,
    useImperativeHandle: df,
    useInsertionEffect: af,
    useLayoutEffect: cf,
    useMemo: hf,
    useReducer: Mo,
    useRef: sf,
    useState: function () {
      return Mo(Cr);
    },
    useDebugValue: zu,
    useDeferredValue: function (e) {
      var t = Ie();
      return mf(t, J.memoizedState, e);
    },
    useTransition: function () {
      var e = Mo(Cr)[0],
        t = Ie().memoizedState;
      return [e, t];
    },
    useMutableSource: ef,
    useSyncExternalStore: tf,
    useId: vf,
    unstable_isNewReconciler: !1,
  },
  Eh = {
    readContext: De,
    useCallback: pf,
    useContext: De,
    useEffect: Lu,
    useImperativeHandle: df,
    useInsertionEffect: af,
    useLayoutEffect: cf,
    useMemo: hf,
    useReducer: Do,
    useRef: sf,
    useState: function () {
      return Do(Cr);
    },
    useDebugValue: zu,
    useDeferredValue: function (e) {
      var t = Ie();
      return J === null ? (t.memoizedState = e) : mf(t, J.memoizedState, e);
    },
    useTransition: function () {
      var e = Do(Cr)[0],
        t = Ie().memoizedState;
      return [e, t];
    },
    useMutableSource: ef,
    useSyncExternalStore: tf,
    useId: vf,
    unstable_isNewReconciler: !1,
  };
function On(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Xd(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (o) {
    l =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function Io(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function _i(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Sh = typeof WeakMap == "function" ? WeakMap : Map;
function Ef(e, t, n) {
  (n = it(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      jl || ((jl = !0), (Fi = r)), _i(e, t);
    }),
    n
  );
}
function Sf(e, t, n) {
  (n = it(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        _i(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        _i(e, t),
          typeof r != "function" &&
            (Tt === null ? (Tt = new Set([this])) : Tt.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function ea(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Sh();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = Ih.bind(null, e, t, n)), t.then(e, e));
}
function ta(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function na(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = it(-1, 1)), (t.tag = 2), Rt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var kh = dt.ReactCurrentOwner,
  ge = !1;
function fe(e, t, n, r) {
  t.child = e === null ? qc(t, null, n, r) : Rn(t, e.child, n, r);
}
function ra(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return (
    xn(t, l),
    (r = Tu(e, t, n, r, o, l)),
    (n = Ou()),
    e !== null && !ge
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        ft(e, t, l))
      : (W && n && gu(t), (t.flags |= 1), fe(e, t, r, l), t.child)
  );
}
function la(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !Bu(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), kf(e, t, o, r, l))
      : ((e = dl(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & l))) {
    var i = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : gr), n(i, r) && e.ref === t.ref)
    )
      return ft(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = Lt(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function kf(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (gr(o, r) && e.ref === t.ref)
      if (((ge = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
        e.flags & 131072 && (ge = !0);
      else return (t.lanes = e.lanes), ft(e, t, l);
  }
  return Ri(e, t, n, r, l);
}
function xf(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        $(gn, ke),
        (ke |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          $(gn, ke),
          (ke |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        $(gn, ke),
        (ke |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      $(gn, ke),
      (ke |= r);
  return fe(e, t, l, n), t.child;
}
function Cf(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Ri(e, t, n, r, l) {
  var o = we(n) ? Kt : ae.current;
  return (
    (o = Pn(t, o)),
    xn(t, l),
    (n = Tu(e, t, n, r, o, l)),
    (r = Ou()),
    e !== null && !ge
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        ft(e, t, l))
      : (W && r && gu(t), (t.flags |= 1), fe(e, t, n, l), t.child)
  );
}
function oa(e, t, n, r, l) {
  if (we(n)) {
    var o = !0;
    Pl(t);
  } else o = !1;
  if ((xn(t, l), t.stateNode === null))
    al(e, t), Zc(t, n, r), Pi(t, n, r, l), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      u = t.memoizedProps;
    i.props = u;
    var s = i.context,
      a = n.contextType;
    typeof a == "object" && a !== null
      ? (a = De(a))
      : ((a = we(n) ? Kt : ae.current), (a = Pn(t, a)));
    var h = n.getDerivedStateFromProps,
      d =
        typeof h == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((u !== r || s !== a) && Zs(t, i, r, a)),
      (gt = !1);
    var m = t.memoizedState;
    (i.state = m),
      Ll(t, r, i, l),
      (s = t.memoizedState),
      u !== r || m !== s || ye.current || gt
        ? (typeof h == "function" && (Ni(t, n, h, r), (s = t.memoizedState)),
          (u = gt || Ys(t, n, u, r, m, s, a))
            ? (d ||
                (typeof i.UNSAFE_componentWillMount != "function" &&
                  typeof i.componentWillMount != "function") ||
                (typeof i.componentWillMount == "function" &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == "function" &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (i.props = r),
          (i.state = s),
          (i.context = a),
          (r = u))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      Xc(e, t),
      (u = t.memoizedProps),
      (a = t.type === t.elementType ? u : $e(t.type, u)),
      (i.props = a),
      (d = t.pendingProps),
      (m = i.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = De(s))
        : ((s = we(n) ? Kt : ae.current), (s = Pn(t, s)));
    var y = n.getDerivedStateFromProps;
    (h =
      typeof y == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((u !== d || m !== s) && Zs(t, i, r, s)),
      (gt = !1),
      (m = t.memoizedState),
      (i.state = m),
      Ll(t, r, i, l);
    var w = t.memoizedState;
    u !== d || m !== w || ye.current || gt
      ? (typeof y == "function" && (Ni(t, n, y, r), (w = t.memoizedState)),
        (a = gt || Ys(t, n, a, r, m, w, s) || !1)
          ? (h ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, w, s),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, w, s)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (u === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = w)),
        (i.props = r),
        (i.state = w),
        (i.context = s),
        (r = a))
      : (typeof i.componentDidUpdate != "function" ||
          (u === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Ti(e, t, n, r, o, l);
}
function Ti(e, t, n, r, l, o) {
  Cf(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && Hs(t, n, !1), ft(e, t, o);
  (r = t.stateNode), (kh.current = t);
  var u =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = Rn(t, e.child, null, o)), (t.child = Rn(t, null, u, o)))
      : fe(e, t, u, o),
    (t.memoizedState = r.state),
    l && Hs(t, n, !0),
    t.child
  );
}
function Nf(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Vs(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Vs(e, t.context, !1),
    Nu(e, t.containerInfo);
}
function ia(e, t, n, r, l) {
  return _n(), wu(l), (t.flags |= 256), fe(e, t, n, r), t.child;
}
var Oi = { dehydrated: null, treeContext: null, retryLane: 0 };
function Li(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Pf(e, t, n) {
  var r = t.pendingProps,
    l = V.current,
    o = !1,
    i = (t.flags & 128) !== 0,
    u;
  if (
    ((u = i) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    $(V, l & 1),
    e === null)
  )
    return (
      xi(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (i = { mode: "hidden", children: i }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = i))
                : (o = to(i, r, 0, null)),
              (e = Qt(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Li(n)),
              (t.memoizedState = Oi),
              e)
            : Mu(t, i))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return xh(e, t, i, r, u, l, n);
  if (o) {
    (o = r.fallback), (i = t.mode), (l = e.child), (u = l.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = Lt(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (o = Lt(u, o)) : ((o = Qt(o, i, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? Li(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (o.memoizedState = i),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = Oi),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = Lt(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Mu(e, t) {
  return (
    (t = to({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Zr(e, t, n, r) {
  return (
    r !== null && wu(r),
    Rn(t, e.child, null, n),
    (e = Mu(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function xh(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Io(Error(S(422)))), Zr(e, t, i, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (l = t.mode),
        (r = to({ mode: "visible", children: r.children }, l, 0, null)),
        (o = Qt(o, l, i, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && Rn(t, e.child, null, i),
        (t.child.memoizedState = Li(i)),
        (t.memoizedState = Oi),
        o);
  if (!(t.mode & 1)) return Zr(e, t, i, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (o = Error(S(419))), (r = Io(o, r, void 0)), Zr(e, t, i, r);
  }
  if (((u = (i & e.childLanes) !== 0), ge || u)) {
    if (((r = te), r !== null)) {
      switch (i & -i) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | i) ? 0 : l),
        l !== 0 &&
          l !== o.retryLane &&
          ((o.retryLane = l), ct(e, l), He(r, e, l, -1));
    }
    return Uu(), (r = Io(Error(S(421)))), Zr(e, t, i, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = jh.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (xe = _t(l.nextSibling)),
      (Ce = t),
      (W = !0),
      (Be = null),
      e !== null &&
        ((Te[Oe++] = lt),
        (Te[Oe++] = ot),
        (Te[Oe++] = Gt),
        (lt = e.id),
        (ot = e.overflow),
        (Gt = t)),
      (t = Mu(t, r.children)),
      (t.flags |= 4096),
      t);
}
function ua(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ci(e.return, t, n);
}
function jo(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = l));
}
function _f(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    o = r.tail;
  if ((fe(e, t, r.children, n), (r = V.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && ua(e, n, t);
        else if (e.tag === 19) ua(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if (($(V, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && zl(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          jo(t, !1, l, n, o);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && zl(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        jo(t, !0, n, null, o);
        break;
      case "together":
        jo(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function al(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function ft(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Yt |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(S(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Lt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Lt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Ch(e, t, n) {
  switch (t.tag) {
    case 3:
      Nf(t), _n();
      break;
    case 5:
      bc(t);
      break;
    case 1:
      we(t.type) && Pl(t);
      break;
    case 4:
      Nu(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      $(Tl, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? ($(V, V.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Pf(e, t, n)
          : ($(V, V.current & 1),
            (e = ft(e, t, n)),
            e !== null ? e.sibling : null);
      $(V, V.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return _f(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        $(V, V.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), xf(e, t, n);
  }
  return ft(e, t, n);
}
var Rf, zi, Tf, Of;
Rf = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
zi = function () {};
Tf = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), Vt(qe.current);
    var o = null;
    switch (n) {
      case "input":
        (l = ei(e, l)), (r = ei(e, r)), (o = []);
        break;
      case "select":
        (l = Q({}, l, { value: void 0 })),
          (r = Q({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (l = ri(e, l)), (r = ri(e, r)), (o = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Cl);
    }
    oi(n, r);
    var i;
    n = null;
    for (a in l)
      if (!r.hasOwnProperty(a) && l.hasOwnProperty(a) && l[a] != null)
        if (a === "style") {
          var u = l[a];
          for (i in u) u.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          a !== "dangerouslySetInnerHTML" &&
            a !== "children" &&
            a !== "suppressContentEditableWarning" &&
            a !== "suppressHydrationWarning" &&
            a !== "autoFocus" &&
            (cr.hasOwnProperty(a)
              ? o || (o = [])
              : (o = o || []).push(a, null));
    for (a in r) {
      var s = r[a];
      if (
        ((u = l != null ? l[a] : void 0),
        r.hasOwnProperty(a) && s !== u && (s != null || u != null))
      )
        if (a === "style")
          if (u) {
            for (i in u)
              !u.hasOwnProperty(i) ||
                (s && s.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in s)
              s.hasOwnProperty(i) &&
                u[i] !== s[i] &&
                (n || (n = {}), (n[i] = s[i]));
          } else n || (o || (o = []), o.push(a, n)), (n = s);
        else
          a === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (u = u ? u.__html : void 0),
              s != null && u !== s && (o = o || []).push(a, s))
            : a === "children"
            ? (typeof s != "string" && typeof s != "number") ||
              (o = o || []).push(a, "" + s)
            : a !== "suppressContentEditableWarning" &&
              a !== "suppressHydrationWarning" &&
              (cr.hasOwnProperty(a)
                ? (s != null && a === "onScroll" && B("scroll", e),
                  o || u === s || (o = []))
                : (o = o || []).push(a, s));
    }
    n && (o = o || []).push("style", n);
    var a = o;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
Of = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Qn(e, t) {
  if (!W)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function ue(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Nh(e, t, n) {
  var r = t.pendingProps;
  switch ((yu(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return ue(t), null;
    case 1:
      return we(t.type) && Nl(), ue(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Tn(),
        A(ye),
        A(ae),
        _u(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Xr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Be !== null && (Bi(Be), (Be = null)))),
        zi(e, t),
        ue(t),
        null
      );
    case 5:
      Pu(t);
      var l = Vt(kr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Tf(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(S(166));
          return ue(t), null;
        }
        if (((e = Vt(qe.current)), Xr(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[Ye] = t), (r[Er] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              B("cancel", r), B("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              B("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Jn.length; l++) B(Jn[l], r);
              break;
            case "source":
              B("error", r);
              break;
            case "img":
            case "image":
            case "link":
              B("error", r), B("load", r);
              break;
            case "details":
              B("toggle", r);
              break;
            case "input":
              vs(r, o), B("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                B("invalid", r);
              break;
            case "textarea":
              ys(r, o), B("invalid", r);
          }
          oi(n, o), (l = null);
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var u = o[i];
              i === "children"
                ? typeof u == "string"
                  ? r.textContent !== u &&
                    (o.suppressHydrationWarning !== !0 &&
                      Gr(r.textContent, u, e),
                    (l = ["children", u]))
                  : typeof u == "number" &&
                    r.textContent !== "" + u &&
                    (o.suppressHydrationWarning !== !0 &&
                      Gr(r.textContent, u, e),
                    (l = ["children", "" + u]))
                : cr.hasOwnProperty(i) &&
                  u != null &&
                  i === "onScroll" &&
                  B("scroll", r);
            }
          switch (n) {
            case "input":
              Ur(r), gs(r, o, !0);
              break;
            case "textarea":
              Ur(r), ws(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Cl);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = nc(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = i.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = i.createElement(n, { is: r.is }))
                : ((e = i.createElement(n)),
                  n === "select" &&
                    ((i = e),
                    r.multiple
                      ? (i.multiple = !0)
                      : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[Ye] = t),
            (e[Er] = r),
            Rf(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = ii(n, r)), n)) {
              case "dialog":
                B("cancel", e), B("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                B("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Jn.length; l++) B(Jn[l], e);
                l = r;
                break;
              case "source":
                B("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                B("error", e), B("load", e), (l = r);
                break;
              case "details":
                B("toggle", e), (l = r);
                break;
              case "input":
                vs(e, r), (l = ei(e, r)), B("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = Q({}, r, { value: void 0 })),
                  B("invalid", e);
                break;
              case "textarea":
                ys(e, r), (l = ri(e, r)), B("invalid", e);
                break;
              default:
                l = r;
            }
            oi(n, l), (u = l);
            for (o in u)
              if (u.hasOwnProperty(o)) {
                var s = u[o];
                o === "style"
                  ? oc(e, s)
                  : o === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0), s != null && rc(e, s))
                  : o === "children"
                  ? typeof s == "string"
                    ? (n !== "textarea" || s !== "") && fr(e, s)
                    : typeof s == "number" && fr(e, "" + s)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (cr.hasOwnProperty(o)
                      ? s != null && o === "onScroll" && B("scroll", e)
                      : s != null && ru(e, o, s, i));
              }
            switch (n) {
              case "input":
                Ur(e), gs(e, r, !1);
                break;
              case "textarea":
                Ur(e), ws(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Mt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? wn(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      wn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Cl);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return ue(t), null;
    case 6:
      if (e && t.stateNode != null) Of(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(S(166));
        if (((n = Vt(kr.current)), Vt(qe.current), Xr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Ye] = t),
            (o = r.nodeValue !== n) && ((e = Ce), e !== null))
          )
            switch (e.tag) {
              case 3:
                Gr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Gr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Ye] = t),
            (t.stateNode = r);
      }
      return ue(t), null;
    case 13:
      if (
        (A(V),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (W && xe !== null && t.mode & 1 && !(t.flags & 128))
          Kc(), _n(), (t.flags |= 98560), (o = !1);
        else if (((o = Xr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(S(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(S(317));
            o[Ye] = t;
          } else
            _n(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ue(t), (o = !1);
        } else Be !== null && (Bi(Be), (Be = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || V.current & 1 ? q === 0 && (q = 3) : Uu())),
          t.updateQueue !== null && (t.flags |= 4),
          ue(t),
          null);
    case 4:
      return (
        Tn(), zi(e, t), e === null && yr(t.stateNode.containerInfo), ue(t), null
      );
    case 10:
      return ku(t.type._context), ue(t), null;
    case 17:
      return we(t.type) && Nl(), ue(t), null;
    case 19:
      if ((A(V), (o = t.memoizedState), o === null)) return ue(t), null;
      if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
        if (r) Qn(o, !1);
        else {
          if (q !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = zl(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    Qn(o, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (i = o.alternate),
                    i === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = i.childLanes),
                        (o.lanes = i.lanes),
                        (o.child = i.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = i.memoizedProps),
                        (o.memoizedState = i.memoizedState),
                        (o.updateQueue = i.updateQueue),
                        (o.type = i.type),
                        (e = i.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return $(V, (V.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            Y() > Ln &&
            ((t.flags |= 128), (r = !0), Qn(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = zl(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Qn(o, !0),
              o.tail === null && o.tailMode === "hidden" && !i.alternate && !W)
            )
              return ue(t), null;
          } else
            2 * Y() - o.renderingStartTime > Ln &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Qn(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = o.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (o.last = i));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = Y()),
          (t.sibling = null),
          (n = V.current),
          $(V, r ? (n & 1) | 2 : n & 1),
          t)
        : (ue(t), null);
    case 22:
    case 23:
      return (
        $u(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? ke & 1073741824 && (ue(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ue(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(S(156, t.tag));
}
function Ph(e, t) {
  switch ((yu(t), t.tag)) {
    case 1:
      return (
        we(t.type) && Nl(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Tn(),
        A(ye),
        A(ae),
        _u(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Pu(t), null;
    case 13:
      if ((A(V), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(S(340));
        _n();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return A(V), null;
    case 4:
      return Tn(), null;
    case 10:
      return ku(t.type._context), null;
    case 22:
    case 23:
      return $u(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Jr = !1,
  se = !1,
  _h = typeof WeakSet == "function" ? WeakSet : Set,
  _ = null;
function vn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        G(e, t, r);
      }
    else n.current = null;
}
function Mi(e, t, n) {
  try {
    n();
  } catch (r) {
    G(e, t, r);
  }
}
var sa = !1;
function Rh(e, t) {
  if (((vi = Sl), (e = Mc()), vu(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            u = -1,
            s = -1,
            a = 0,
            h = 0,
            d = e,
            m = null;
          t: for (;;) {
            for (
              var y;
              d !== n || (l !== 0 && d.nodeType !== 3) || (u = i + l),
                d !== o || (r !== 0 && d.nodeType !== 3) || (s = i + r),
                d.nodeType === 3 && (i += d.nodeValue.length),
                (y = d.firstChild) !== null;

            )
              (m = d), (d = y);
            for (;;) {
              if (d === e) break t;
              if (
                (m === n && ++a === l && (u = i),
                m === o && ++h === r && (s = i),
                (y = d.nextSibling) !== null)
              )
                break;
              (d = m), (m = d.parentNode);
            }
            d = y;
          }
          n = u === -1 || s === -1 ? null : { start: u, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (gi = { focusedElem: e, selectionRange: n }, Sl = !1, _ = t; _ !== null; )
    if (((t = _), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (_ = e);
    else
      for (; _ !== null; ) {
        t = _;
        try {
          var w = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var g = w.memoizedProps,
                    x = w.memoizedState,
                    f = t.stateNode,
                    c = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? g : $e(t.type, g),
                      x
                    );
                  f.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var p = t.stateNode.containerInfo;
                p.nodeType === 1
                  ? (p.textContent = "")
                  : p.nodeType === 9 &&
                    p.documentElement &&
                    p.removeChild(p.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(S(163));
            }
        } catch (E) {
          G(t, t.return, E);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (_ = e);
          break;
        }
        _ = t.return;
      }
  return (w = sa), (sa = !1), w;
}
function or(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        (l.destroy = void 0), o !== void 0 && Mi(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function bl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Di(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Lf(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Lf(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Ye], delete t[Er], delete t[Ei], delete t[ch], delete t[fh])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function zf(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function aa(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || zf(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Ii(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Cl));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ii(e, t, n), e = e.sibling; e !== null; ) Ii(e, t, n), (e = e.sibling);
}
function ji(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ji(e, t, n), e = e.sibling; e !== null; ) ji(e, t, n), (e = e.sibling);
}
var ne = null,
  Ue = !1;
function mt(e, t, n) {
  for (n = n.child; n !== null; ) Mf(e, t, n), (n = n.sibling);
}
function Mf(e, t, n) {
  if (Je && typeof Je.onCommitFiberUnmount == "function")
    try {
      Je.onCommitFiberUnmount(Ql, n);
    } catch {}
  switch (n.tag) {
    case 5:
      se || vn(n, t);
    case 6:
      var r = ne,
        l = Ue;
      (ne = null),
        mt(e, t, n),
        (ne = r),
        (Ue = l),
        ne !== null &&
          (Ue
            ? ((e = ne),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ne.removeChild(n.stateNode));
      break;
    case 18:
      ne !== null &&
        (Ue
          ? ((e = ne),
            (n = n.stateNode),
            e.nodeType === 8
              ? To(e.parentNode, n)
              : e.nodeType === 1 && To(e, n),
            mr(e))
          : To(ne, n.stateNode));
      break;
    case 4:
      (r = ne),
        (l = Ue),
        (ne = n.stateNode.containerInfo),
        (Ue = !0),
        mt(e, t, n),
        (ne = r),
        (Ue = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !se &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var o = l,
            i = o.destroy;
          (o = o.tag),
            i !== void 0 && (o & 2 || o & 4) && Mi(n, t, i),
            (l = l.next);
        } while (l !== r);
      }
      mt(e, t, n);
      break;
    case 1:
      if (
        !se &&
        (vn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          G(n, t, u);
        }
      mt(e, t, n);
      break;
    case 21:
      mt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((se = (r = se) || n.memoizedState !== null), mt(e, t, n), (se = r))
        : mt(e, t, n);
      break;
    default:
      mt(e, t, n);
  }
}
function ca(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new _h()),
      t.forEach(function (r) {
        var l = Fh.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function Fe(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var o = e,
          i = t,
          u = i;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (ne = u.stateNode), (Ue = !1);
              break e;
            case 3:
              (ne = u.stateNode.containerInfo), (Ue = !0);
              break e;
            case 4:
              (ne = u.stateNode.containerInfo), (Ue = !0);
              break e;
          }
          u = u.return;
        }
        if (ne === null) throw Error(S(160));
        Mf(o, i, l), (ne = null), (Ue = !1);
        var s = l.alternate;
        s !== null && (s.return = null), (l.return = null);
      } catch (a) {
        G(l, t, a);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Df(t, e), (t = t.sibling);
}
function Df(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Fe(t, e), Ge(e), r & 4)) {
        try {
          or(3, e, e.return), bl(3, e);
        } catch (g) {
          G(e, e.return, g);
        }
        try {
          or(5, e, e.return);
        } catch (g) {
          G(e, e.return, g);
        }
      }
      break;
    case 1:
      Fe(t, e), Ge(e), r & 512 && n !== null && vn(n, n.return);
      break;
    case 5:
      if (
        (Fe(t, e),
        Ge(e),
        r & 512 && n !== null && vn(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          fr(l, "");
        } catch (g) {
          G(e, e.return, g);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var o = e.memoizedProps,
          i = n !== null ? n.memoizedProps : o,
          u = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            u === "input" && o.type === "radio" && o.name != null && ec(l, o),
              ii(u, i);
            var a = ii(u, o);
            for (i = 0; i < s.length; i += 2) {
              var h = s[i],
                d = s[i + 1];
              h === "style"
                ? oc(l, d)
                : h === "dangerouslySetInnerHTML"
                ? rc(l, d)
                : h === "children"
                ? fr(l, d)
                : ru(l, h, d, a);
            }
            switch (u) {
              case "input":
                ti(l, o);
                break;
              case "textarea":
                tc(l, o);
                break;
              case "select":
                var m = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var y = o.value;
                y != null
                  ? wn(l, !!o.multiple, y, !1)
                  : m !== !!o.multiple &&
                    (o.defaultValue != null
                      ? wn(l, !!o.multiple, o.defaultValue, !0)
                      : wn(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[Er] = o;
          } catch (g) {
            G(e, e.return, g);
          }
      }
      break;
    case 6:
      if ((Fe(t, e), Ge(e), r & 4)) {
        if (e.stateNode === null) throw Error(S(162));
        (l = e.stateNode), (o = e.memoizedProps);
        try {
          l.nodeValue = o;
        } catch (g) {
          G(e, e.return, g);
        }
      }
      break;
    case 3:
      if (
        (Fe(t, e), Ge(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          mr(t.containerInfo);
        } catch (g) {
          G(e, e.return, g);
        }
      break;
    case 4:
      Fe(t, e), Ge(e);
      break;
    case 13:
      Fe(t, e),
        Ge(e),
        (l = e.child),
        l.flags & 8192 &&
          ((o = l.memoizedState !== null),
          (l.stateNode.isHidden = o),
          !o ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (ju = Y())),
        r & 4 && ca(e);
      break;
    case 22:
      if (
        ((h = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((se = (a = se) || h), Fe(t, e), (se = a)) : Fe(t, e),
        Ge(e),
        r & 8192)
      ) {
        if (
          ((a = e.memoizedState !== null),
          (e.stateNode.isHidden = a) && !h && e.mode & 1)
        )
          for (_ = e, h = e.child; h !== null; ) {
            for (d = _ = h; _ !== null; ) {
              switch (((m = _), (y = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  or(4, m, m.return);
                  break;
                case 1:
                  vn(m, m.return);
                  var w = m.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    (r = m), (n = m.return);
                    try {
                      (t = r),
                        (w.props = t.memoizedProps),
                        (w.state = t.memoizedState),
                        w.componentWillUnmount();
                    } catch (g) {
                      G(r, n, g);
                    }
                  }
                  break;
                case 5:
                  vn(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    da(d);
                    continue;
                  }
              }
              y !== null ? ((y.return = m), (_ = y)) : da(d);
            }
            h = h.sibling;
          }
        e: for (h = null, d = e; ; ) {
          if (d.tag === 5) {
            if (h === null) {
              h = d;
              try {
                (l = d.stateNode),
                  a
                    ? ((o = l.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((u = d.stateNode),
                      (s = d.memoizedProps.style),
                      (i =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (u.style.display = lc("display", i)));
              } catch (g) {
                G(e, e.return, g);
              }
            }
          } else if (d.tag === 6) {
            if (h === null)
              try {
                d.stateNode.nodeValue = a ? "" : d.memoizedProps;
              } catch (g) {
                G(e, e.return, g);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            h === d && (h = null), (d = d.return);
          }
          h === d && (h = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      Fe(t, e), Ge(e), r & 4 && ca(e);
      break;
    case 21:
      break;
    default:
      Fe(t, e), Ge(e);
  }
}
function Ge(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (zf(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(S(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (fr(l, ""), (r.flags &= -33));
          var o = aa(e);
          ji(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            u = aa(e);
          Ii(e, u, i);
          break;
        default:
          throw Error(S(161));
      }
    } catch (s) {
      G(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Th(e, t, n) {
  (_ = e), If(e);
}
function If(e, t, n) {
  for (var r = (e.mode & 1) !== 0; _ !== null; ) {
    var l = _,
      o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || Jr;
      if (!i) {
        var u = l.alternate,
          s = (u !== null && u.memoizedState !== null) || se;
        u = Jr;
        var a = se;
        if (((Jr = i), (se = s) && !a))
          for (_ = l; _ !== null; )
            (i = _),
              (s = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? pa(l)
                : s !== null
                ? ((s.return = i), (_ = s))
                : pa(l);
        for (; o !== null; ) (_ = o), If(o), (o = o.sibling);
        (_ = l), (Jr = u), (se = a);
      }
      fa(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (_ = o)) : fa(e);
  }
}
function fa(e) {
  for (; _ !== null; ) {
    var t = _;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              se || bl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !se)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : $e(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && Xs(t, o, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Xs(t, i, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var a = t.alternate;
                if (a !== null) {
                  var h = a.memoizedState;
                  if (h !== null) {
                    var d = h.dehydrated;
                    d !== null && mr(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(S(163));
          }
        se || (t.flags & 512 && Di(t));
      } catch (m) {
        G(t, t.return, m);
      }
    }
    if (t === e) {
      _ = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (_ = n);
      break;
    }
    _ = t.return;
  }
}
function da(e) {
  for (; _ !== null; ) {
    var t = _;
    if (t === e) {
      _ = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (_ = n);
      break;
    }
    _ = t.return;
  }
}
function pa(e) {
  for (; _ !== null; ) {
    var t = _;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            bl(4, t);
          } catch (s) {
            G(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              G(t, l, s);
            }
          }
          var o = t.return;
          try {
            Di(t);
          } catch (s) {
            G(t, o, s);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Di(t);
          } catch (s) {
            G(t, i, s);
          }
      }
    } catch (s) {
      G(t, t.return, s);
    }
    if (t === e) {
      _ = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (_ = u);
      break;
    }
    _ = t.return;
  }
}
var Oh = Math.ceil,
  Il = dt.ReactCurrentDispatcher,
  Du = dt.ReactCurrentOwner,
  ze = dt.ReactCurrentBatchConfig,
  D = 0,
  te = null,
  Z = null,
  re = 0,
  ke = 0,
  gn = jt(0),
  q = 0,
  Pr = null,
  Yt = 0,
  eo = 0,
  Iu = 0,
  ir = null,
  ve = null,
  ju = 0,
  Ln = 1 / 0,
  tt = null,
  jl = !1,
  Fi = null,
  Tt = null,
  qr = !1,
  kt = null,
  Fl = 0,
  ur = 0,
  $i = null,
  cl = -1,
  fl = 0;
function de() {
  return D & 6 ? Y() : cl !== -1 ? cl : (cl = Y());
}
function Ot(e) {
  return e.mode & 1
    ? D & 2 && re !== 0
      ? re & -re
      : ph.transition !== null
      ? (fl === 0 && (fl = gc()), fl)
      : ((e = I),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Cc(e.type))),
        e)
    : 1;
}
function He(e, t, n, r) {
  if (50 < ur) throw ((ur = 0), ($i = null), Error(S(185)));
  Or(e, n, r),
    (!(D & 2) || e !== te) &&
      (e === te && (!(D & 2) && (eo |= n), q === 4 && Et(e, re)),
      Ee(e, r),
      n === 1 && D === 0 && !(t.mode & 1) && ((Ln = Y() + 500), Zl && Ft()));
}
function Ee(e, t) {
  var n = e.callbackNode;
  pp(e, t);
  var r = El(e, e === te ? re : 0);
  if (r === 0)
    n !== null && ks(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && ks(n), t === 1))
      e.tag === 0 ? dh(ha.bind(null, e)) : Vc(ha.bind(null, e)),
        sh(function () {
          !(D & 6) && Ft();
        }),
        (n = null);
    else {
      switch (yc(r)) {
        case 1:
          n = su;
          break;
        case 4:
          n = mc;
          break;
        case 16:
          n = wl;
          break;
        case 536870912:
          n = vc;
          break;
        default:
          n = wl;
      }
      n = Vf(n, jf.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function jf(e, t) {
  if (((cl = -1), (fl = 0), D & 6)) throw Error(S(327));
  var n = e.callbackNode;
  if (Cn() && e.callbackNode !== n) return null;
  var r = El(e, e === te ? re : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = $l(e, r);
  else {
    t = r;
    var l = D;
    D |= 2;
    var o = $f();
    (te !== e || re !== t) && ((tt = null), (Ln = Y() + 500), Ht(e, t));
    do
      try {
        Mh();
        break;
      } catch (u) {
        Ff(e, u);
      }
    while (1);
    Su(),
      (Il.current = o),
      (D = l),
      Z !== null ? (t = 0) : ((te = null), (re = 0), (t = q));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = fi(e)), l !== 0 && ((r = l), (t = Ui(e, l)))), t === 1)
    )
      throw ((n = Pr), Ht(e, 0), Et(e, r), Ee(e, Y()), n);
    if (t === 6) Et(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !Lh(l) &&
          ((t = $l(e, r)),
          t === 2 && ((o = fi(e)), o !== 0 && ((r = o), (t = Ui(e, o)))),
          t === 1))
      )
        throw ((n = Pr), Ht(e, 0), Et(e, r), Ee(e, Y()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(S(345));
        case 2:
          Bt(e, ve, tt);
          break;
        case 3:
          if (
            (Et(e, r), (r & 130023424) === r && ((t = ju + 500 - Y()), 10 < t))
          ) {
            if (El(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              de(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = wi(Bt.bind(null, e, ve, tt), t);
            break;
          }
          Bt(e, ve, tt);
          break;
        case 4:
          if ((Et(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - Ve(r);
            (o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o);
          }
          if (
            ((r = l),
            (r = Y() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Oh(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = wi(Bt.bind(null, e, ve, tt), r);
            break;
          }
          Bt(e, ve, tt);
          break;
        case 5:
          Bt(e, ve, tt);
          break;
        default:
          throw Error(S(329));
      }
    }
  }
  return Ee(e, Y()), e.callbackNode === n ? jf.bind(null, e) : null;
}
function Ui(e, t) {
  var n = ir;
  return (
    e.current.memoizedState.isDehydrated && (Ht(e, t).flags |= 256),
    (e = $l(e, t)),
    e !== 2 && ((t = ve), (ve = n), t !== null && Bi(t)),
    e
  );
}
function Bi(e) {
  ve === null ? (ve = e) : ve.push.apply(ve, e);
}
function Lh(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            o = l.getSnapshot;
          l = l.value;
          try {
            if (!Qe(o(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Et(e, t) {
  for (
    t &= ~Iu,
      t &= ~eo,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Ve(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function ha(e) {
  if (D & 6) throw Error(S(327));
  Cn();
  var t = El(e, 0);
  if (!(t & 1)) return Ee(e, Y()), null;
  var n = $l(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = fi(e);
    r !== 0 && ((t = r), (n = Ui(e, r)));
  }
  if (n === 1) throw ((n = Pr), Ht(e, 0), Et(e, t), Ee(e, Y()), n);
  if (n === 6) throw Error(S(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Bt(e, ve, tt),
    Ee(e, Y()),
    null
  );
}
function Fu(e, t) {
  var n = D;
  D |= 1;
  try {
    return e(t);
  } finally {
    (D = n), D === 0 && ((Ln = Y() + 500), Zl && Ft());
  }
}
function Zt(e) {
  kt !== null && kt.tag === 0 && !(D & 6) && Cn();
  var t = D;
  D |= 1;
  var n = ze.transition,
    r = I;
  try {
    if (((ze.transition = null), (I = 1), e)) return e();
  } finally {
    (I = r), (ze.transition = n), (D = t), !(D & 6) && Ft();
  }
}
function $u() {
  (ke = gn.current), A(gn);
}
function Ht(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), uh(n)), Z !== null))
    for (n = Z.return; n !== null; ) {
      var r = n;
      switch ((yu(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Nl();
          break;
        case 3:
          Tn(), A(ye), A(ae), _u();
          break;
        case 5:
          Pu(r);
          break;
        case 4:
          Tn();
          break;
        case 13:
          A(V);
          break;
        case 19:
          A(V);
          break;
        case 10:
          ku(r.type._context);
          break;
        case 22:
        case 23:
          $u();
      }
      n = n.return;
    }
  if (
    ((te = e),
    (Z = e = Lt(e.current, null)),
    (re = ke = t),
    (q = 0),
    (Pr = null),
    (Iu = eo = Yt = 0),
    (ve = ir = null),
    Wt !== null)
  ) {
    for (t = 0; t < Wt.length; t++)
      if (((n = Wt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          o = n.pending;
        if (o !== null) {
          var i = o.next;
          (o.next = l), (r.next = i);
        }
        n.pending = r;
      }
    Wt = null;
  }
  return e;
}
function Ff(e, t) {
  do {
    var n = Z;
    try {
      if ((Su(), (ul.current = Dl), Ml)) {
        for (var r = H.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        Ml = !1;
      }
      if (
        ((Xt = 0),
        (ee = J = H = null),
        (lr = !1),
        (xr = 0),
        (Du.current = null),
        n === null || n.return === null)
      ) {
        (q = 1), (Pr = t), (Z = null);
        break;
      }
      e: {
        var o = e,
          i = n.return,
          u = n,
          s = t;
        if (
          ((t = re),
          (u.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var a = s,
            h = u,
            d = h.tag;
          if (!(h.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var m = h.alternate;
            m
              ? ((h.updateQueue = m.updateQueue),
                (h.memoizedState = m.memoizedState),
                (h.lanes = m.lanes))
              : ((h.updateQueue = null), (h.memoizedState = null));
          }
          var y = ta(i);
          if (y !== null) {
            (y.flags &= -257),
              na(y, i, u, o, t),
              y.mode & 1 && ea(o, a, t),
              (t = y),
              (s = a);
            var w = t.updateQueue;
            if (w === null) {
              var g = new Set();
              g.add(s), (t.updateQueue = g);
            } else w.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              ea(o, a, t), Uu();
              break e;
            }
            s = Error(S(426));
          }
        } else if (W && u.mode & 1) {
          var x = ta(i);
          if (x !== null) {
            !(x.flags & 65536) && (x.flags |= 256),
              na(x, i, u, o, t),
              wu(On(s, u));
            break e;
          }
        }
        (o = s = On(s, u)),
          q !== 4 && (q = 2),
          ir === null ? (ir = [o]) : ir.push(o),
          (o = i);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var f = Ef(o, s, t);
              Gs(o, f);
              break e;
            case 1:
              u = s;
              var c = o.type,
                p = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof c.getDerivedStateFromError == "function" ||
                  (p !== null &&
                    typeof p.componentDidCatch == "function" &&
                    (Tt === null || !Tt.has(p))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var E = Sf(o, u, t);
                Gs(o, E);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Bf(n);
    } catch (k) {
      (t = k), Z === n && n !== null && (Z = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function $f() {
  var e = Il.current;
  return (Il.current = Dl), e === null ? Dl : e;
}
function Uu() {
  (q === 0 || q === 3 || q === 2) && (q = 4),
    te === null || (!(Yt & 268435455) && !(eo & 268435455)) || Et(te, re);
}
function $l(e, t) {
  var n = D;
  D |= 2;
  var r = $f();
  (te !== e || re !== t) && ((tt = null), Ht(e, t));
  do
    try {
      zh();
      break;
    } catch (l) {
      Ff(e, l);
    }
  while (1);
  if ((Su(), (D = n), (Il.current = r), Z !== null)) throw Error(S(261));
  return (te = null), (re = 0), q;
}
function zh() {
  for (; Z !== null; ) Uf(Z);
}
function Mh() {
  for (; Z !== null && !lp(); ) Uf(Z);
}
function Uf(e) {
  var t = Wf(e.alternate, e, ke);
  (e.memoizedProps = e.pendingProps),
    t === null ? Bf(e) : (Z = t),
    (Du.current = null);
}
function Bf(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Ph(n, t)), n !== null)) {
        (n.flags &= 32767), (Z = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (q = 6), (Z = null);
        return;
      }
    } else if (((n = Nh(n, t, ke)), n !== null)) {
      Z = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Z = t;
      return;
    }
    Z = t = e;
  } while (t !== null);
  q === 0 && (q = 5);
}
function Bt(e, t, n) {
  var r = I,
    l = ze.transition;
  try {
    (ze.transition = null), (I = 1), Dh(e, t, n, r);
  } finally {
    (ze.transition = l), (I = r);
  }
  return null;
}
function Dh(e, t, n, r) {
  do Cn();
  while (kt !== null);
  if (D & 6) throw Error(S(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(S(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (hp(e, o),
    e === te && ((Z = te = null), (re = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      qr ||
      ((qr = !0),
      Vf(wl, function () {
        return Cn(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = ze.transition), (ze.transition = null);
    var i = I;
    I = 1;
    var u = D;
    (D |= 4),
      (Du.current = null),
      Rh(e, n),
      Df(n, e),
      eh(gi),
      (Sl = !!vi),
      (gi = vi = null),
      (e.current = n),
      Th(n),
      op(),
      (D = u),
      (I = i),
      (ze.transition = o);
  } else e.current = n;
  if (
    (qr && ((qr = !1), (kt = e), (Fl = l)),
    (o = e.pendingLanes),
    o === 0 && (Tt = null),
    sp(n.stateNode),
    Ee(e, Y()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (jl) throw ((jl = !1), (e = Fi), (Fi = null), e);
  return (
    Fl & 1 && e.tag !== 0 && Cn(),
    (o = e.pendingLanes),
    o & 1 ? (e === $i ? ur++ : ((ur = 0), ($i = e))) : (ur = 0),
    Ft(),
    null
  );
}
function Cn() {
  if (kt !== null) {
    var e = yc(Fl),
      t = ze.transition,
      n = I;
    try {
      if (((ze.transition = null), (I = 16 > e ? 16 : e), kt === null))
        var r = !1;
      else {
        if (((e = kt), (kt = null), (Fl = 0), D & 6)) throw Error(S(331));
        var l = D;
        for (D |= 4, _ = e.current; _ !== null; ) {
          var o = _,
            i = o.child;
          if (_.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var a = u[s];
                for (_ = a; _ !== null; ) {
                  var h = _;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      or(8, h, o);
                  }
                  var d = h.child;
                  if (d !== null) (d.return = h), (_ = d);
                  else
                    for (; _ !== null; ) {
                      h = _;
                      var m = h.sibling,
                        y = h.return;
                      if ((Lf(h), h === a)) {
                        _ = null;
                        break;
                      }
                      if (m !== null) {
                        (m.return = y), (_ = m);
                        break;
                      }
                      _ = y;
                    }
                }
              }
              var w = o.alternate;
              if (w !== null) {
                var g = w.child;
                if (g !== null) {
                  w.child = null;
                  do {
                    var x = g.sibling;
                    (g.sibling = null), (g = x);
                  } while (g !== null);
                }
              }
              _ = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) (i.return = o), (_ = i);
          else
            e: for (; _ !== null; ) {
              if (((o = _), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    or(9, o, o.return);
                }
              var f = o.sibling;
              if (f !== null) {
                (f.return = o.return), (_ = f);
                break e;
              }
              _ = o.return;
            }
        }
        var c = e.current;
        for (_ = c; _ !== null; ) {
          i = _;
          var p = i.child;
          if (i.subtreeFlags & 2064 && p !== null) (p.return = i), (_ = p);
          else
            e: for (i = c; _ !== null; ) {
              if (((u = _), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      bl(9, u);
                  }
                } catch (k) {
                  G(u, u.return, k);
                }
              if (u === i) {
                _ = null;
                break e;
              }
              var E = u.sibling;
              if (E !== null) {
                (E.return = u.return), (_ = E);
                break e;
              }
              _ = u.return;
            }
        }
        if (
          ((D = l), Ft(), Je && typeof Je.onPostCommitFiberRoot == "function")
        )
          try {
            Je.onPostCommitFiberRoot(Ql, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (I = n), (ze.transition = t);
    }
  }
  return !1;
}
function ma(e, t, n) {
  (t = On(n, t)),
    (t = Ef(e, t, 1)),
    (e = Rt(e, t, 1)),
    (t = de()),
    e !== null && (Or(e, 1, t), Ee(e, t));
}
function G(e, t, n) {
  if (e.tag === 3) ma(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        ma(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Tt === null || !Tt.has(r)))
        ) {
          (e = On(n, e)),
            (e = Sf(t, e, 1)),
            (t = Rt(t, e, 1)),
            (e = de()),
            t !== null && (Or(t, 1, e), Ee(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Ih(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = de()),
    (e.pingedLanes |= e.suspendedLanes & n),
    te === e &&
      (re & n) === n &&
      (q === 4 || (q === 3 && (re & 130023424) === re && 500 > Y() - ju)
        ? Ht(e, 0)
        : (Iu |= n)),
    Ee(e, t);
}
function Af(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Wr), (Wr <<= 1), !(Wr & 130023424) && (Wr = 4194304))
      : (t = 1));
  var n = de();
  (e = ct(e, t)), e !== null && (Or(e, t, n), Ee(e, n));
}
function jh(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Af(e, n);
}
function Fh(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(S(314));
  }
  r !== null && r.delete(t), Af(e, n);
}
var Wf;
Wf = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || ye.current) ge = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (ge = !1), Ch(e, t, n);
      ge = !!(e.flags & 131072);
    }
  else (ge = !1), W && t.flags & 1048576 && Hc(t, Rl, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      al(e, t), (e = t.pendingProps);
      var l = Pn(t, ae.current);
      xn(t, n), (l = Tu(null, t, r, e, l, n));
      var o = Ou();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            we(r) ? ((o = !0), Pl(t)) : (o = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            Cu(t),
            (l.updater = Jl),
            (t.stateNode = l),
            (l._reactInternals = t),
            Pi(t, r, e, n),
            (t = Ti(null, t, r, !0, o, n)))
          : ((t.tag = 0), W && o && gu(t), fe(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (al(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = Uh(r)),
          (e = $e(r, e)),
          l)
        ) {
          case 0:
            t = Ri(null, t, r, e, n);
            break e;
          case 1:
            t = oa(null, t, r, e, n);
            break e;
          case 11:
            t = ra(null, t, r, e, n);
            break e;
          case 14:
            t = la(null, t, r, $e(r.type, e), n);
            break e;
        }
        throw Error(S(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : $e(r, l)),
        Ri(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : $e(r, l)),
        oa(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((Nf(t), e === null)) throw Error(S(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (l = o.element),
          Xc(e, t),
          Ll(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (l = On(Error(S(423)), t)), (t = ia(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = On(Error(S(424)), t)), (t = ia(e, t, r, n, l));
            break e;
          } else
            for (
              xe = _t(t.stateNode.containerInfo.firstChild),
                Ce = t,
                W = !0,
                Be = null,
                n = qc(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((_n(), r === l)) {
            t = ft(e, t, n);
            break e;
          }
          fe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        bc(t),
        e === null && xi(t),
        (r = t.type),
        (l = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = l.children),
        yi(r, l) ? (i = null) : o !== null && yi(r, o) && (t.flags |= 32),
        Cf(e, t),
        fe(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && xi(t), null;
    case 13:
      return Pf(e, t, n);
    case 4:
      return (
        Nu(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Rn(t, null, r, n)) : fe(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : $e(r, l)),
        ra(e, t, r, l, n)
      );
    case 7:
      return fe(e, t, t.pendingProps, n), t.child;
    case 8:
      return fe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return fe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (o = t.memoizedProps),
          (i = l.value),
          $(Tl, r._currentValue),
          (r._currentValue = i),
          o !== null)
        )
          if (Qe(o.value, i)) {
            if (o.children === l.children && !ye.current) {
              t = ft(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var u = o.dependencies;
              if (u !== null) {
                i = o.child;
                for (var s = u.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (o.tag === 1) {
                      (s = it(-1, n & -n)), (s.tag = 2);
                      var a = o.updateQueue;
                      if (a !== null) {
                        a = a.shared;
                        var h = a.pending;
                        h === null
                          ? (s.next = s)
                          : ((s.next = h.next), (h.next = s)),
                          (a.pending = s);
                      }
                    }
                    (o.lanes |= n),
                      (s = o.alternate),
                      s !== null && (s.lanes |= n),
                      Ci(o.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((i = o.return), i === null)) throw Error(S(341));
                (i.lanes |= n),
                  (u = i.alternate),
                  u !== null && (u.lanes |= n),
                  Ci(i, n, t),
                  (i = o.sibling);
              } else i = o.child;
              if (i !== null) i.return = o;
              else
                for (i = o; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((o = i.sibling), o !== null)) {
                    (o.return = i.return), (i = o);
                    break;
                  }
                  i = i.return;
                }
              o = i;
            }
        fe(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        xn(t, n),
        (l = De(l)),
        (r = r(l)),
        (t.flags |= 1),
        fe(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = $e(r, t.pendingProps)),
        (l = $e(r.type, l)),
        la(e, t, r, l, n)
      );
    case 15:
      return kf(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : $e(r, l)),
        al(e, t),
        (t.tag = 1),
        we(r) ? ((e = !0), Pl(t)) : (e = !1),
        xn(t, n),
        Zc(t, r, l),
        Pi(t, r, l, n),
        Ti(null, t, r, !0, e, n)
      );
    case 19:
      return _f(e, t, n);
    case 22:
      return xf(e, t, n);
  }
  throw Error(S(156, t.tag));
};
function Vf(e, t) {
  return hc(e, t);
}
function $h(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Le(e, t, n, r) {
  return new $h(e, t, n, r);
}
function Bu(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Uh(e) {
  if (typeof e == "function") return Bu(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === ou)) return 11;
    if (e === iu) return 14;
  }
  return 2;
}
function Lt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Le(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function dl(e, t, n, r, l, o) {
  var i = 2;
  if (((r = e), typeof e == "function")) Bu(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case un:
        return Qt(n.children, l, o, t);
      case lu:
        (i = 8), (l |= 8);
        break;
      case Zo:
        return (
          (e = Le(12, n, t, l | 2)), (e.elementType = Zo), (e.lanes = o), e
        );
      case Jo:
        return (e = Le(13, n, t, l)), (e.elementType = Jo), (e.lanes = o), e;
      case qo:
        return (e = Le(19, n, t, l)), (e.elementType = qo), (e.lanes = o), e;
      case Ja:
        return to(n, l, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Ya:
              i = 10;
              break e;
            case Za:
              i = 9;
              break e;
            case ou:
              i = 11;
              break e;
            case iu:
              i = 14;
              break e;
            case vt:
              (i = 16), (r = null);
              break e;
          }
        throw Error(S(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Le(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function Qt(e, t, n, r) {
  return (e = Le(7, e, r, t)), (e.lanes = n), e;
}
function to(e, t, n, r) {
  return (
    (e = Le(22, e, r, t)),
    (e.elementType = Ja),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Fo(e, t, n) {
  return (e = Le(6, e, null, t)), (e.lanes = n), e;
}
function $o(e, t, n) {
  return (
    (t = Le(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Bh(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = yo(0)),
    (this.expirationTimes = yo(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = yo(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function Au(e, t, n, r, l, o, i, u, s) {
  return (
    (e = new Bh(e, t, n, u, s)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Le(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Cu(o),
    e
  );
}
function Ah(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: on,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Hf(e) {
  if (!e) return Dt;
  e = e._reactInternals;
  e: {
    if (qt(e) !== e || e.tag !== 1) throw Error(S(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (we(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(S(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (we(n)) return Wc(e, n, t);
  }
  return t;
}
function Qf(e, t, n, r, l, o, i, u, s) {
  return (
    (e = Au(n, r, !0, e, l, o, i, u, s)),
    (e.context = Hf(null)),
    (n = e.current),
    (r = de()),
    (l = Ot(n)),
    (o = it(r, l)),
    (o.callback = t ?? null),
    Rt(n, o, l),
    (e.current.lanes = l),
    Or(e, l, r),
    Ee(e, r),
    e
  );
}
function no(e, t, n, r) {
  var l = t.current,
    o = de(),
    i = Ot(l);
  return (
    (n = Hf(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = it(o, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Rt(l, t, i)),
    e !== null && (He(e, l, i, o), il(e, l, i)),
    i
  );
}
function Ul(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function va(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Wu(e, t) {
  va(e, t), (e = e.alternate) && va(e, t);
}
function Wh() {
  return null;
}
var Kf =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Vu(e) {
  this._internalRoot = e;
}
ro.prototype.render = Vu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(S(409));
  no(e, t, null, null);
};
ro.prototype.unmount = Vu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Zt(function () {
      no(null, e, null, null);
    }),
      (t[at] = null);
  }
};
function ro(e) {
  this._internalRoot = e;
}
ro.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Sc();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < wt.length && t !== 0 && t < wt[n].priority; n++);
    wt.splice(n, 0, e), n === 0 && xc(e);
  }
};
function Hu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function lo(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function ga() {}
function Vh(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var a = Ul(i);
        o.call(a);
      };
    }
    var i = Qf(t, r, e, 0, null, !1, !1, "", ga);
    return (
      (e._reactRootContainer = i),
      (e[at] = i.current),
      yr(e.nodeType === 8 ? e.parentNode : e),
      Zt(),
      i
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function () {
      var a = Ul(s);
      u.call(a);
    };
  }
  var s = Au(e, 0, !1, null, null, !1, !1, "", ga);
  return (
    (e._reactRootContainer = s),
    (e[at] = s.current),
    yr(e.nodeType === 8 ? e.parentNode : e),
    Zt(function () {
      no(t, s, n, r);
    }),
    s
  );
}
function oo(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var u = l;
      l = function () {
        var s = Ul(i);
        u.call(s);
      };
    }
    no(t, i, e, l);
  } else i = Vh(n, t, e, l, r);
  return Ul(i);
}
wc = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Zn(t.pendingLanes);
        n !== 0 &&
          (au(t, n | 1), Ee(t, Y()), !(D & 6) && ((Ln = Y() + 500), Ft()));
      }
      break;
    case 13:
      Zt(function () {
        var r = ct(e, 1);
        if (r !== null) {
          var l = de();
          He(r, e, 1, l);
        }
      }),
        Wu(e, 1);
  }
};
cu = function (e) {
  if (e.tag === 13) {
    var t = ct(e, 134217728);
    if (t !== null) {
      var n = de();
      He(t, e, 134217728, n);
    }
    Wu(e, 134217728);
  }
};
Ec = function (e) {
  if (e.tag === 13) {
    var t = Ot(e),
      n = ct(e, t);
    if (n !== null) {
      var r = de();
      He(n, e, t, r);
    }
    Wu(e, t);
  }
};
Sc = function () {
  return I;
};
kc = function (e, t) {
  var n = I;
  try {
    return (I = e), t();
  } finally {
    I = n;
  }
};
si = function (e, t, n) {
  switch (t) {
    case "input":
      if ((ti(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = Yl(r);
            if (!l) throw Error(S(90));
            ba(r), ti(r, l);
          }
        }
      }
      break;
    case "textarea":
      tc(e, n);
      break;
    case "select":
      (t = n.value), t != null && wn(e, !!n.multiple, t, !1);
  }
};
sc = Fu;
ac = Zt;
var Hh = { usingClientEntryPoint: !1, Events: [zr, fn, Yl, ic, uc, Fu] },
  Kn = {
    findFiberByHostInstance: At,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  Qh = {
    bundleType: Kn.bundleType,
    version: Kn.version,
    rendererPackageName: Kn.rendererPackageName,
    rendererConfig: Kn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: dt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = dc(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Kn.findFiberByHostInstance || Wh,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var br = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!br.isDisabled && br.supportsFiber)
    try {
      (Ql = br.inject(Qh)), (Je = br);
    } catch {}
}
_e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Hh;
_e.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Hu(t)) throw Error(S(200));
  return Ah(e, t, null, n);
};
_e.createRoot = function (e, t) {
  if (!Hu(e)) throw Error(S(299));
  var n = !1,
    r = "",
    l = Kf;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = Au(e, 1, !1, null, null, n, !1, r, l)),
    (e[at] = t.current),
    yr(e.nodeType === 8 ? e.parentNode : e),
    new Vu(t)
  );
};
_e.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(S(188))
      : ((e = Object.keys(e).join(",")), Error(S(268, e)));
  return (e = dc(t)), (e = e === null ? null : e.stateNode), e;
};
_e.flushSync = function (e) {
  return Zt(e);
};
_e.hydrate = function (e, t, n) {
  if (!lo(t)) throw Error(S(200));
  return oo(null, e, t, !0, n);
};
_e.hydrateRoot = function (e, t, n) {
  if (!Hu(e)) throw Error(S(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    o = "",
    i = Kf;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = Qf(t, null, e, 1, n ?? null, l, !1, o, i)),
    (e[at] = t.current),
    yr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new ro(t);
};
_e.render = function (e, t, n) {
  if (!lo(t)) throw Error(S(200));
  return oo(null, e, t, !1, n);
};
_e.unmountComponentAtNode = function (e) {
  if (!lo(e)) throw Error(S(40));
  return e._reactRootContainer
    ? (Zt(function () {
        oo(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[at] = null);
        });
      }),
      !0)
    : !1;
};
_e.unstable_batchedUpdates = Fu;
_e.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!lo(n)) throw Error(S(200));
  if (e == null || e._reactInternals === void 0) throw Error(S(38));
  return oo(e, t, n, !1, r);
};
_e.version = "18.2.0-next-9e3b772b8-20220608";
(function (e) {
  function t() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (n) {
        console.error(n);
      }
  }
  t(), (e.exports = _e);
})(Wd);
const yn = Fa(ml);
var ya = ml;
(Go.createRoot = ya.createRoot), (Go.hydrateRoot = ya.hydrateRoot);
/**
 * @remix-run/router v1.5.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function _r() {
  return (
    (_r = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    _r.apply(this, arguments)
  );
}
var xt;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(xt || (xt = {}));
const wa = "popstate";
function Kh(e) {
  e === void 0 && (e = {});
  function t(r, l) {
    let { pathname: o, search: i, hash: u } = r.location;
    return Ai(
      "",
      { pathname: o, search: i, hash: u },
      (l.state && l.state.usr) || null,
      (l.state && l.state.key) || "default"
    );
  }
  function n(r, l) {
    return typeof l == "string" ? l : Bl(l);
  }
  return Xh(t, n, null, e);
}
function b(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Qu(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function Gh() {
  return Math.random().toString(36).substr(2, 8);
}
function Ea(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Ai(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    _r(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? In(t) : t,
      { state: n, key: (t && t.key) || r || Gh() }
    )
  );
}
function Bl(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function In(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function Xh(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: l = document.defaultView, v5Compat: o = !1 } = r,
    i = l.history,
    u = xt.Pop,
    s = null,
    a = h();
  a == null && ((a = 0), i.replaceState(_r({}, i.state, { idx: a }), ""));
  function h() {
    return (i.state || { idx: null }).idx;
  }
  function d() {
    u = xt.Pop;
    let x = h(),
      f = x == null ? null : x - a;
    (a = x), s && s({ action: u, location: g.location, delta: f });
  }
  function m(x, f) {
    u = xt.Push;
    let c = Ai(g.location, x, f);
    n && n(c, x), (a = h() + 1);
    let p = Ea(c, a),
      E = g.createHref(c);
    try {
      i.pushState(p, "", E);
    } catch {
      l.location.assign(E);
    }
    o && s && s({ action: u, location: g.location, delta: 1 });
  }
  function y(x, f) {
    u = xt.Replace;
    let c = Ai(g.location, x, f);
    n && n(c, x), (a = h());
    let p = Ea(c, a),
      E = g.createHref(c);
    i.replaceState(p, "", E),
      o && s && s({ action: u, location: g.location, delta: 0 });
  }
  function w(x) {
    let f = l.location.origin !== "null" ? l.location.origin : l.location.href,
      c = typeof x == "string" ? x : Bl(x);
    return (
      b(
        f,
        "No window.location.(origin|href) available to create URL for href: " +
          c
      ),
      new URL(c, f)
    );
  }
  let g = {
    get action() {
      return u;
    },
    get location() {
      return e(l, i);
    },
    listen(x) {
      if (s) throw new Error("A history only accepts one active listener");
      return (
        l.addEventListener(wa, d),
        (s = x),
        () => {
          l.removeEventListener(wa, d), (s = null);
        }
      );
    },
    createHref(x) {
      return t(l, x);
    },
    createURL: w,
    encodeLocation(x) {
      let f = w(x);
      return { pathname: f.pathname, search: f.search, hash: f.hash };
    },
    push: m,
    replace: y,
    go(x) {
      return i.go(x);
    },
  };
  return g;
}
var Sa;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(Sa || (Sa = {}));
function Yh(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? In(t) : t,
    l = Ku(r.pathname || "/", n);
  if (l == null) return null;
  let o = Gf(e);
  Zh(o);
  let i = null;
  for (let u = 0; i == null && u < o.length; ++u) i = om(o[u], sm(l));
  return i;
}
function Gf(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let l = (o, i, u) => {
    let s = {
      relativePath: u === void 0 ? o.path || "" : u,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: i,
      route: o,
    };
    s.relativePath.startsWith("/") &&
      (b(
        s.relativePath.startsWith(r),
        'Absolute route path "' +
          s.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (s.relativePath = s.relativePath.slice(r.length)));
    let a = zt([r, s.relativePath]),
      h = n.concat(s);
    o.children &&
      o.children.length > 0 &&
      (b(
        o.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + a + '".')
      ),
      Gf(o.children, t, h, a)),
      !(o.path == null && !o.index) &&
        t.push({ path: a, score: rm(a, o.index), routesMeta: h });
  };
  return (
    e.forEach((o, i) => {
      var u;
      if (o.path === "" || !((u = o.path) != null && u.includes("?"))) l(o, i);
      else for (let s of Xf(o.path)) l(o, i, s);
    }),
    t
  );
}
function Xf(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    l = n.endsWith("?"),
    o = n.replace(/\?$/, "");
  if (r.length === 0) return l ? [o, ""] : [o];
  let i = Xf(r.join("/")),
    u = [];
  return (
    u.push(...i.map((s) => (s === "" ? o : [o, s].join("/")))),
    l && u.push(...i),
    u.map((s) => (e.startsWith("/") && s === "" ? "/" : s))
  );
}
function Zh(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : lm(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const Jh = /^:\w+$/,
  qh = 3,
  bh = 2,
  em = 1,
  tm = 10,
  nm = -2,
  ka = (e) => e === "*";
function rm(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(ka) && (r += nm),
    t && (r += bh),
    n
      .filter((l) => !ka(l))
      .reduce((l, o) => l + (Jh.test(o) ? qh : o === "" ? em : tm), r)
  );
}
function lm(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function om(e, t) {
  let { routesMeta: n } = e,
    r = {},
    l = "/",
    o = [];
  for (let i = 0; i < n.length; ++i) {
    let u = n[i],
      s = i === n.length - 1,
      a = l === "/" ? t : t.slice(l.length) || "/",
      h = im(
        { path: u.relativePath, caseSensitive: u.caseSensitive, end: s },
        a
      );
    if (!h) return null;
    Object.assign(r, h.params);
    let d = u.route;
    o.push({
      params: r,
      pathname: zt([l, h.pathname]),
      pathnameBase: dm(zt([l, h.pathnameBase])),
      route: d,
    }),
      h.pathnameBase !== "/" && (l = zt([l, h.pathnameBase]));
  }
  return o;
}
function im(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = um(e.path, e.caseSensitive, e.end),
    l = t.match(n);
  if (!l) return null;
  let o = l[0],
    i = o.replace(/(.)\/+$/, "$1"),
    u = l.slice(1);
  return {
    params: r.reduce((a, h, d) => {
      if (h === "*") {
        let m = u[d] || "";
        i = o.slice(0, o.length - m.length).replace(/(.)\/+$/, "$1");
      }
      return (a[h] = am(u[d] || "", h)), a;
    }, {}),
    pathname: o,
    pathnameBase: i,
    pattern: e,
  };
}
function um(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Qu(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    l =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
        .replace(/\/:(\w+)/g, (i, u) => (r.push(u), "/([^\\/]+)"));
  return (
    e.endsWith("*")
      ? (r.push("*"),
        (l += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (l += "\\/*$")
      : e !== "" && e !== "/" && (l += "(?:(?=\\/|$))"),
    [new RegExp(l, t ? void 0 : "i"), r]
  );
}
function sm(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      Qu(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function am(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return (
      Qu(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' +
            e +
            '" is a malformed URL segment. This is probably') +
          (" due to a bad percent encoding (" + n + ").")
      ),
      e
    );
  }
}
function Ku(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function cm(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: l = "",
  } = typeof e == "string" ? In(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : fm(n, t)) : t,
    search: pm(r),
    hash: hm(l),
  };
}
function fm(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((l) => {
      l === ".." ? n.length > 1 && n.pop() : l !== "." && n.push(l);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function Uo(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Yf(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function Zf(e, t, n, r) {
  r === void 0 && (r = !1);
  let l;
  typeof e == "string"
    ? (l = In(e))
    : ((l = _r({}, e)),
      b(
        !l.pathname || !l.pathname.includes("?"),
        Uo("?", "pathname", "search", l)
      ),
      b(
        !l.pathname || !l.pathname.includes("#"),
        Uo("#", "pathname", "hash", l)
      ),
      b(!l.search || !l.search.includes("#"), Uo("#", "search", "hash", l)));
  let o = e === "" || l.pathname === "",
    i = o ? "/" : l.pathname,
    u;
  if (r || i == null) u = n;
  else {
    let d = t.length - 1;
    if (i.startsWith("..")) {
      let m = i.split("/");
      for (; m[0] === ".."; ) m.shift(), (d -= 1);
      l.pathname = m.join("/");
    }
    u = d >= 0 ? t[d] : "/";
  }
  let s = cm(l, u),
    a = i && i !== "/" && i.endsWith("/"),
    h = (o || i === ".") && n.endsWith("/");
  return !s.pathname.endsWith("/") && (a || h) && (s.pathname += "/"), s;
}
const zt = (e) => e.join("/").replace(/\/\/+/g, "/"),
  dm = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  pm = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  hm = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function mm(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
/**
 * React Router v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function vm(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
const gm = typeof Object.is == "function" ? Object.is : vm,
  { useState: ym, useEffect: wm, useLayoutEffect: Em, useDebugValue: Sm } = Ko;
function km(e, t, n) {
  const r = t(),
    [{ inst: l }, o] = ym({ inst: { value: r, getSnapshot: t } });
  return (
    Em(() => {
      (l.value = r), (l.getSnapshot = t), Bo(l) && o({ inst: l });
    }, [e, r, t]),
    wm(
      () => (
        Bo(l) && o({ inst: l }),
        e(() => {
          Bo(l) && o({ inst: l });
        })
      ),
      [e]
    ),
    Sm(r),
    r
  );
}
function Bo(e) {
  const t = e.getSnapshot,
    n = e.value;
  try {
    const r = t();
    return !gm(n, r);
  } catch {
    return !0;
  }
}
function xm(e, t, n) {
  return t();
}
const Cm =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Nm = !Cm,
  Pm = Nm ? xm : km;
"useSyncExternalStore" in Ko && ((e) => e.useSyncExternalStore)(Ko);
const Jf = v.createContext(null),
  Gu = v.createContext(null),
  jn = v.createContext(null),
  io = v.createContext(null),
  Fn = v.createContext({ outlet: null, matches: [] }),
  qf = v.createContext(null);
function Wi() {
  return (
    (Wi = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Wi.apply(this, arguments)
  );
}
function _m(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  Dr() || b(!1);
  let { basename: r, navigator: l } = v.useContext(jn),
    { hash: o, pathname: i, search: u } = Xu(e, { relative: n }),
    s = i;
  return (
    r !== "/" && (s = i === "/" ? r : zt([r, i])),
    l.createHref({ pathname: s, search: u, hash: o })
  );
}
function Dr() {
  return v.useContext(io) != null;
}
function Ir() {
  return Dr() || b(!1), v.useContext(io).location;
}
function Rm() {
  Dr() || b(!1);
  let { basename: e, navigator: t } = v.useContext(jn),
    { matches: n } = v.useContext(Fn),
    { pathname: r } = Ir(),
    l = JSON.stringify(Yf(n).map((u) => u.pathnameBase)),
    o = v.useRef(!1);
  return (
    v.useEffect(() => {
      o.current = !0;
    }),
    v.useCallback(
      function (u, s) {
        if ((s === void 0 && (s = {}), !o.current)) return;
        if (typeof u == "number") {
          t.go(u);
          return;
        }
        let a = Zf(u, JSON.parse(l), r, s.relative === "path");
        e !== "/" &&
          (a.pathname = a.pathname === "/" ? e : zt([e, a.pathname])),
          (s.replace ? t.replace : t.push)(a, s.state, s);
      },
      [e, t, l, r]
    )
  );
}
function Xu(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { matches: r } = v.useContext(Fn),
    { pathname: l } = Ir(),
    o = JSON.stringify(Yf(r).map((i) => i.pathnameBase));
  return v.useMemo(() => Zf(e, JSON.parse(o), l, n === "path"), [e, o, l, n]);
}
function Tm(e, t) {
  Dr() || b(!1);
  let { navigator: n } = v.useContext(jn),
    r = v.useContext(Gu),
    { matches: l } = v.useContext(Fn),
    o = l[l.length - 1],
    i = o ? o.params : {};
  o && o.pathname;
  let u = o ? o.pathnameBase : "/";
  o && o.route;
  let s = Ir(),
    a;
  if (t) {
    var h;
    let g = typeof t == "string" ? In(t) : t;
    u === "/" || ((h = g.pathname) != null && h.startsWith(u)) || b(!1),
      (a = g);
  } else a = s;
  let d = a.pathname || "/",
    m = u === "/" ? d : d.slice(u.length) || "/",
    y = Yh(e, { pathname: m }),
    w = Mm(
      y &&
        y.map((g) =>
          Object.assign({}, g, {
            params: Object.assign({}, i, g.params),
            pathname: zt([
              u,
              n.encodeLocation
                ? n.encodeLocation(g.pathname).pathname
                : g.pathname,
            ]),
            pathnameBase:
              g.pathnameBase === "/"
                ? u
                : zt([
                    u,
                    n.encodeLocation
                      ? n.encodeLocation(g.pathnameBase).pathname
                      : g.pathnameBase,
                  ]),
          })
        ),
      l,
      r || void 0
    );
  return t && w
    ? v.createElement(
        io.Provider,
        {
          value: {
            location: Wi(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              a
            ),
            navigationType: xt.Pop,
          },
        },
        w
      )
    : w;
}
function Om() {
  let e = Fm(),
    t = mm(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    l = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" },
    o = null;
  return v.createElement(
    v.Fragment,
    null,
    v.createElement("h2", null, "Unexpected Application Error!"),
    v.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? v.createElement("pre", { style: l }, n) : null,
    o
  );
}
class Lm extends v.Component {
  constructor(t) {
    super(t), (this.state = { location: t.location, error: t.error });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location
      ? { error: t.error, location: t.location }
      : { error: t.error || n.error, location: n.location };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error
      ? v.createElement(
          Fn.Provider,
          { value: this.props.routeContext },
          v.createElement(qf.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function zm(e) {
  let { routeContext: t, match: n, children: r } = e,
    l = v.useContext(Jf);
  return (
    l &&
      l.static &&
      l.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (l.staticContext._deepestRenderedBoundaryId = n.route.id),
    v.createElement(Fn.Provider, { value: t }, r)
  );
}
function Mm(e, t, n) {
  if ((t === void 0 && (t = []), e == null))
    if (n != null && n.errors) e = n.matches;
    else return null;
  let r = e,
    l = n == null ? void 0 : n.errors;
  if (l != null) {
    let o = r.findIndex(
      (i) => i.route.id && (l == null ? void 0 : l[i.route.id])
    );
    o >= 0 || b(!1), (r = r.slice(0, Math.min(r.length, o + 1)));
  }
  return r.reduceRight((o, i, u) => {
    let s = i.route.id ? (l == null ? void 0 : l[i.route.id]) : null,
      a = null;
    n &&
      (i.route.ErrorBoundary
        ? (a = v.createElement(i.route.ErrorBoundary, null))
        : i.route.errorElement
        ? (a = i.route.errorElement)
        : (a = v.createElement(Om, null)));
    let h = t.concat(r.slice(0, u + 1)),
      d = () => {
        let m = o;
        return (
          s
            ? (m = a)
            : i.route.Component
            ? (m = v.createElement(i.route.Component, null))
            : i.route.element && (m = i.route.element),
          v.createElement(zm, {
            match: i,
            routeContext: { outlet: o, matches: h },
            children: m,
          })
        );
      };
    return n && (i.route.ErrorBoundary || i.route.errorElement || u === 0)
      ? v.createElement(Lm, {
          location: n.location,
          component: a,
          error: s,
          children: d(),
          routeContext: { outlet: null, matches: h },
        })
      : d();
  }, null);
}
var xa;
(function (e) {
  (e.UseBlocker = "useBlocker"), (e.UseRevalidator = "useRevalidator");
})(xa || (xa = {}));
var Al;
(function (e) {
  (e.UseBlocker = "useBlocker"),
    (e.UseLoaderData = "useLoaderData"),
    (e.UseActionData = "useActionData"),
    (e.UseRouteError = "useRouteError"),
    (e.UseNavigation = "useNavigation"),
    (e.UseRouteLoaderData = "useRouteLoaderData"),
    (e.UseMatches = "useMatches"),
    (e.UseRevalidator = "useRevalidator");
})(Al || (Al = {}));
function Dm(e) {
  let t = v.useContext(Gu);
  return t || b(!1), t;
}
function Im(e) {
  let t = v.useContext(Fn);
  return t || b(!1), t;
}
function jm(e) {
  let t = Im(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || b(!1), n.route.id;
}
function Fm() {
  var e;
  let t = v.useContext(qf),
    n = Dm(Al.UseRouteError),
    r = jm(Al.UseRouteError);
  return t || ((e = n.errors) == null ? void 0 : e[r]);
}
function pl(e) {
  b(!1);
}
function $m(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: l = xt.Pop,
    navigator: o,
    static: i = !1,
  } = e;
  Dr() && b(!1);
  let u = t.replace(/^\/*/, "/"),
    s = v.useMemo(() => ({ basename: u, navigator: o, static: i }), [u, o, i]);
  typeof r == "string" && (r = In(r));
  let {
      pathname: a = "/",
      search: h = "",
      hash: d = "",
      state: m = null,
      key: y = "default",
    } = r,
    w = v.useMemo(() => {
      let g = Ku(a, u);
      return g == null
        ? null
        : {
            location: { pathname: g, search: h, hash: d, state: m, key: y },
            navigationType: l,
          };
    }, [u, a, h, d, m, y, l]);
  return w == null
    ? null
    : v.createElement(
        jn.Provider,
        { value: s },
        v.createElement(io.Provider, { children: n, value: w })
      );
}
function Um(e) {
  let { children: t, location: n } = e,
    r = v.useContext(Jf),
    l = r && !t ? r.router.routes : Vi(t);
  return Tm(l, n);
}
var Ca;
(function (e) {
  (e[(e.pending = 0)] = "pending"),
    (e[(e.success = 1)] = "success"),
    (e[(e.error = 2)] = "error");
})(Ca || (Ca = {}));
new Promise(() => {});
function Vi(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    v.Children.forEach(e, (r, l) => {
      if (!v.isValidElement(r)) return;
      let o = [...t, l];
      if (r.type === v.Fragment) {
        n.push.apply(n, Vi(r.props.children, o));
        return;
      }
      r.type !== pl && b(!1), !r.props.index || !r.props.children || b(!1);
      let i = {
        id: r.props.id || o.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (i.children = Vi(r.props.children, o)), n.push(i);
    }),
    n
  );
}
/**
 * React Router DOM v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Wl() {
  return (
    (Wl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Wl.apply(this, arguments)
  );
}
function bf(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    l,
    o;
  for (o = 0; o < r.length; o++)
    (l = r[o]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
  return n;
}
function Bm(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Am(e, t) {
  return e.button === 0 && (!t || t === "_self") && !Bm(e);
}
const Wm = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
  ],
  Vm = [
    "aria-current",
    "caseSensitive",
    "className",
    "end",
    "style",
    "to",
    "children",
  ];
function Hm(e) {
  let { basename: t, children: n, window: r } = e,
    l = v.useRef();
  l.current == null && (l.current = Kh({ window: r, v5Compat: !0 }));
  let o = l.current,
    [i, u] = v.useState({ action: o.action, location: o.location });
  return (
    v.useLayoutEffect(() => o.listen(u), [o]),
    v.createElement($m, {
      basename: t,
      children: n,
      location: i.location,
      navigationType: i.action,
      navigator: o,
    })
  );
}
const Qm =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Km = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Gm = v.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: l,
        reloadDocument: o,
        replace: i,
        state: u,
        target: s,
        to: a,
        preventScrollReset: h,
      } = t,
      d = bf(t, Wm),
      { basename: m } = v.useContext(jn),
      y,
      w = !1;
    if (typeof a == "string" && Km.test(a) && ((y = a), Qm)) {
      let c = new URL(window.location.href),
        p = a.startsWith("//") ? new URL(c.protocol + a) : new URL(a),
        E = Ku(p.pathname, m);
      p.origin === c.origin && E != null
        ? (a = E + p.search + p.hash)
        : (w = !0);
    }
    let g = _m(a, { relative: l }),
      x = Xm(a, {
        replace: i,
        state: u,
        target: s,
        preventScrollReset: h,
        relative: l,
      });
    function f(c) {
      r && r(c), c.defaultPrevented || x(c);
    }
    return v.createElement(
      "a",
      Wl({}, d, { href: y || g, onClick: w || o ? r : f, ref: n, target: s })
    );
  }),
  Na = v.forwardRef(function (t, n) {
    let {
        "aria-current": r = "page",
        caseSensitive: l = !1,
        className: o = "",
        end: i = !1,
        style: u,
        to: s,
        children: a,
      } = t,
      h = bf(t, Vm),
      d = Xu(s, { relative: h.relative }),
      m = Ir(),
      y = v.useContext(Gu),
      { navigator: w } = v.useContext(jn),
      g = w.encodeLocation ? w.encodeLocation(d).pathname : d.pathname,
      x = m.pathname,
      f =
        y && y.navigation && y.navigation.location
          ? y.navigation.location.pathname
          : null;
    l ||
      ((x = x.toLowerCase()),
      (f = f ? f.toLowerCase() : null),
      (g = g.toLowerCase()));
    let c = x === g || (!i && x.startsWith(g) && x.charAt(g.length) === "/"),
      p =
        f != null &&
        (f === g || (!i && f.startsWith(g) && f.charAt(g.length) === "/")),
      E = c ? r : void 0,
      k;
    typeof o == "function"
      ? (k = o({ isActive: c, isPending: p }))
      : (k = [o, c ? "active" : null, p ? "pending" : null]
          .filter(Boolean)
          .join(" "));
    let C = typeof u == "function" ? u({ isActive: c, isPending: p }) : u;
    return v.createElement(
      Gm,
      Wl({}, h, { "aria-current": E, className: k, ref: n, style: C, to: s }),
      typeof a == "function" ? a({ isActive: c, isPending: p }) : a
    );
  });
var Pa;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmitImpl = "useSubmitImpl"),
    (e.UseFetcher = "useFetcher");
})(Pa || (Pa = {}));
var _a;
(function (e) {
  (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(_a || (_a = {}));
function Xm(e, t) {
  let {
      target: n,
      replace: r,
      state: l,
      preventScrollReset: o,
      relative: i,
    } = t === void 0 ? {} : t,
    u = Rm(),
    s = Ir(),
    a = Xu(e, { relative: i });
  return v.useCallback(
    (h) => {
      if (Am(h, n)) {
        h.preventDefault();
        let d = r !== void 0 ? r : Bl(s) === Bl(a);
        u(e, { replace: d, state: l, preventScrollReset: o, relative: i });
      }
    },
    [s, u, a, r, l, n, e, o, i]
  );
}
var Hi = {},
  Ym = {
    get exports() {
      return Hi;
    },
    set exports(e) {
      Hi = e;
    },
  };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ (function (e) {
  (function () {
    var t = {}.hasOwnProperty;
    function n() {
      for (var r = [], l = 0; l < arguments.length; l++) {
        var o = arguments[l];
        if (o) {
          var i = typeof o;
          if (i === "string" || i === "number") r.push(o);
          else if (Array.isArray(o)) {
            if (o.length) {
              var u = n.apply(null, o);
              u && r.push(u);
            }
          } else if (i === "object") {
            if (
              o.toString !== Object.prototype.toString &&
              !o.toString.toString().includes("[native code]")
            ) {
              r.push(o.toString());
              continue;
            }
            for (var s in o) t.call(o, s) && o[s] && r.push(s);
          }
        }
      }
      return r.join(" ");
    }
    e.exports ? ((n.default = n), (e.exports = n)) : (window.classNames = n);
  })();
})(Ym);
const Pe = Hi,
  Zm = ["xxl", "xl", "lg", "md", "sm", "xs"],
  Jm = "xs",
  qm = v.createContext({ prefixes: {}, breakpoints: Zm, minBreakpoint: Jm });
function pt(e, t) {
  const { prefixes: n } = v.useContext(qm);
  return e || n[t] || t;
}
const bm = { fluid: !1 },
  Yu = v.forwardRef(
    ({ bsPrefix: e, fluid: t, as: n = "div", className: r, ...l }, o) => {
      const i = pt(e, "container"),
        u = typeof t == "string" ? `-${t}` : "-fluid";
      return R(n, { ref: o, ...l, className: Pe(r, t ? `${i}${u}` : i) });
    }
  );
Yu.displayName = "Container";
Yu.defaultProps = bm;
const ev = v.createContext(null),
  tv = ev;
function Qi() {
  return (
    (Qi = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Qi.apply(this, arguments)
  );
}
function ed(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    l,
    o;
  for (o = 0; o < r.length; o++)
    (l = r[o]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
  return n;
}
function Ra(e) {
  return "default" + e.charAt(0).toUpperCase() + e.substr(1);
}
function nv(e) {
  var t = rv(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
function rv(e, t) {
  if (typeof e != "object" || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function lv(e, t, n) {
  var r = v.useRef(e !== void 0),
    l = v.useState(t),
    o = l[0],
    i = l[1],
    u = e !== void 0,
    s = r.current;
  return (
    (r.current = u),
    !u && s && o !== t && i(t),
    [
      u ? e : o,
      v.useCallback(
        function (a) {
          for (
            var h = arguments.length, d = new Array(h > 1 ? h - 1 : 0), m = 1;
            m < h;
            m++
          )
            d[m - 1] = arguments[m];
          n && n.apply(void 0, [a].concat(d)), i(a);
        },
        [n]
      ),
    ]
  );
}
function ov(e, t) {
  return Object.keys(t).reduce(function (n, r) {
    var l,
      o = n,
      i = o[Ra(r)],
      u = o[r],
      s = ed(o, [Ra(r), r].map(nv)),
      a = t[r],
      h = lv(u, i, e[a]),
      d = h[0],
      m = h[1];
    return Qi({}, s, ((l = {}), (l[r] = d), (l[a] = m), l));
  }, e);
}
function Ki(e, t) {
  return (
    (Ki = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, l) {
          return (r.__proto__ = l), r;
        }),
    Ki(e, t)
  );
}
function iv(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    Ki(e, t);
}
var uv = /-(.)/g;
function sv(e) {
  return e.replace(uv, function (t, n) {
    return n.toUpperCase();
  });
}
const av = (e) => e[0].toUpperCase() + sv(e).slice(1);
function Zu(e, { displayName: t = av(e), Component: n, defaultProps: r } = {}) {
  const l = v.forwardRef(
    ({ className: o, bsPrefix: i, as: u = n || "div", ...s }, a) => {
      const h = pt(i, e);
      return R(u, { ref: a, className: Pe(o, h), ...s });
    }
  );
  return (l.defaultProps = r), (l.displayName = t), l;
}
const td = v.forwardRef(({ bsPrefix: e, className: t, as: n, ...r }, l) => {
  e = pt(e, "navbar-brand");
  const o = n || (r.href ? "a" : "span");
  return R(o, { ...r, ref: l, className: Pe(t, e) });
});
td.displayName = "NavbarBrand";
function Ju(e) {
  return (e && e.ownerDocument) || document;
}
function cv(e) {
  var t = Ju(e);
  return (t && t.defaultView) || window;
}
function fv(e, t) {
  return cv(e).getComputedStyle(e, t);
}
var dv = /([A-Z])/g;
function pv(e) {
  return e.replace(dv, "-$1").toLowerCase();
}
var hv = /^ms-/;
function el(e) {
  return pv(e).replace(hv, "-ms-");
}
var mv =
  /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function vv(e) {
  return !!(e && mv.test(e));
}
function ut(e, t) {
  var n = "",
    r = "";
  if (typeof t == "string")
    return e.style.getPropertyValue(el(t)) || fv(e).getPropertyValue(el(t));
  Object.keys(t).forEach(function (l) {
    var o = t[l];
    !o && o !== 0
      ? e.style.removeProperty(el(l))
      : vv(l)
      ? (r += l + "(" + o + ") ")
      : (n += el(l) + ": " + o + ";");
  }),
    r && (n += "transform: " + r + ";"),
    (e.style.cssText += ";" + n);
}
var sr = {},
  gv = {
    get exports() {
      return sr;
    },
    set exports(e) {
      sr = e;
    },
  },
  yv = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  wv = yv,
  Ev = wv;
function nd() {}
function rd() {}
rd.resetWarningCache = nd;
var Sv = function () {
  function e(r, l, o, i, u, s) {
    if (s !== Ev) {
      var a = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw ((a.name = "Invariant Violation"), a);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: rd,
    resetWarningCache: nd,
  };
  return (n.PropTypes = n), n;
};
gv.exports = Sv();
const Ta = { disabled: !1 },
  ld = We.createContext(null);
var kv = function (t) {
    return t.scrollTop;
  },
  qn = "unmounted",
  yt = "exited",
  Ae = "entering",
  rt = "entered",
  Rr = "exiting",
  ht = (function (e) {
    iv(t, e);
    function t(r, l) {
      var o;
      o = e.call(this, r, l) || this;
      var i = l,
        u = i && !i.isMounting ? r.enter : r.appear,
        s;
      return (
        (o.appearStatus = null),
        r.in
          ? u
            ? ((s = yt), (o.appearStatus = Ae))
            : (s = rt)
          : r.unmountOnExit || r.mountOnEnter
          ? (s = qn)
          : (s = yt),
        (o.state = { status: s }),
        (o.nextCallback = null),
        o
      );
    }
    t.getDerivedStateFromProps = function (l, o) {
      var i = l.in;
      return i && o.status === qn ? { status: yt } : null;
    };
    var n = t.prototype;
    return (
      (n.componentDidMount = function () {
        this.updateStatus(!0, this.appearStatus);
      }),
      (n.componentDidUpdate = function (l) {
        var o = null;
        if (l !== this.props) {
          var i = this.state.status;
          this.props.in
            ? i !== Ae && i !== rt && (o = Ae)
            : (i === Ae || i === rt) && (o = Rr);
        }
        this.updateStatus(!1, o);
      }),
      (n.componentWillUnmount = function () {
        this.cancelNextCallback();
      }),
      (n.getTimeouts = function () {
        var l = this.props.timeout,
          o,
          i,
          u;
        return (
          (o = i = u = l),
          l != null &&
            typeof l != "number" &&
            ((o = l.exit),
            (i = l.enter),
            (u = l.appear !== void 0 ? l.appear : i)),
          { exit: o, enter: i, appear: u }
        );
      }),
      (n.updateStatus = function (l, o) {
        if ((l === void 0 && (l = !1), o !== null))
          if ((this.cancelNextCallback(), o === Ae)) {
            if (this.props.unmountOnExit || this.props.mountOnEnter) {
              var i = this.props.nodeRef
                ? this.props.nodeRef.current
                : yn.findDOMNode(this);
              i && kv(i);
            }
            this.performEnter(l);
          } else this.performExit();
        else
          this.props.unmountOnExit &&
            this.state.status === yt &&
            this.setState({ status: qn });
      }),
      (n.performEnter = function (l) {
        var o = this,
          i = this.props.enter,
          u = this.context ? this.context.isMounting : l,
          s = this.props.nodeRef ? [u] : [yn.findDOMNode(this), u],
          a = s[0],
          h = s[1],
          d = this.getTimeouts(),
          m = u ? d.appear : d.enter;
        if ((!l && !i) || Ta.disabled) {
          this.safeSetState({ status: rt }, function () {
            o.props.onEntered(a);
          });
          return;
        }
        this.props.onEnter(a, h),
          this.safeSetState({ status: Ae }, function () {
            o.props.onEntering(a, h),
              o.onTransitionEnd(m, function () {
                o.safeSetState({ status: rt }, function () {
                  o.props.onEntered(a, h);
                });
              });
          });
      }),
      (n.performExit = function () {
        var l = this,
          o = this.props.exit,
          i = this.getTimeouts(),
          u = this.props.nodeRef ? void 0 : yn.findDOMNode(this);
        if (!o || Ta.disabled) {
          this.safeSetState({ status: yt }, function () {
            l.props.onExited(u);
          });
          return;
        }
        this.props.onExit(u),
          this.safeSetState({ status: Rr }, function () {
            l.props.onExiting(u),
              l.onTransitionEnd(i.exit, function () {
                l.safeSetState({ status: yt }, function () {
                  l.props.onExited(u);
                });
              });
          });
      }),
      (n.cancelNextCallback = function () {
        this.nextCallback !== null &&
          (this.nextCallback.cancel(), (this.nextCallback = null));
      }),
      (n.safeSetState = function (l, o) {
        (o = this.setNextCallback(o)), this.setState(l, o);
      }),
      (n.setNextCallback = function (l) {
        var o = this,
          i = !0;
        return (
          (this.nextCallback = function (u) {
            i && ((i = !1), (o.nextCallback = null), l(u));
          }),
          (this.nextCallback.cancel = function () {
            i = !1;
          }),
          this.nextCallback
        );
      }),
      (n.onTransitionEnd = function (l, o) {
        this.setNextCallback(o);
        var i = this.props.nodeRef
            ? this.props.nodeRef.current
            : yn.findDOMNode(this),
          u = l == null && !this.props.addEndListener;
        if (!i || u) {
          setTimeout(this.nextCallback, 0);
          return;
        }
        if (this.props.addEndListener) {
          var s = this.props.nodeRef
              ? [this.nextCallback]
              : [i, this.nextCallback],
            a = s[0],
            h = s[1];
          this.props.addEndListener(a, h);
        }
        l != null && setTimeout(this.nextCallback, l);
      }),
      (n.render = function () {
        var l = this.state.status;
        if (l === qn) return null;
        var o = this.props,
          i = o.children;
        o.in,
          o.mountOnEnter,
          o.unmountOnExit,
          o.appear,
          o.enter,
          o.exit,
          o.timeout,
          o.addEndListener,
          o.onEnter,
          o.onEntering,
          o.onEntered,
          o.onExit,
          o.onExiting,
          o.onExited,
          o.nodeRef;
        var u = ed(o, [
          "children",
          "in",
          "mountOnEnter",
          "unmountOnExit",
          "appear",
          "enter",
          "exit",
          "timeout",
          "addEndListener",
          "onEnter",
          "onEntering",
          "onEntered",
          "onExit",
          "onExiting",
          "onExited",
          "nodeRef",
        ]);
        return We.createElement(
          ld.Provider,
          { value: null },
          typeof i == "function"
            ? i(l, u)
            : We.cloneElement(We.Children.only(i), u)
        );
      }),
      t
    );
  })(We.Component);
ht.contextType = ld;
ht.propTypes = {};
function nn() {}
ht.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: nn,
  onEntering: nn,
  onEntered: nn,
  onExit: nn,
  onExiting: nn,
  onExited: nn,
};
ht.UNMOUNTED = qn;
ht.EXITED = yt;
ht.ENTERING = Ae;
ht.ENTERED = rt;
ht.EXITING = Rr;
const uo = !!(
  typeof window < "u" &&
  window.document &&
  window.document.createElement
);
var Gi = !1,
  Xi = !1;
try {
  var Ao = {
    get passive() {
      return (Gi = !0);
    },
    get once() {
      return (Xi = Gi = !0);
    },
  };
  uo &&
    (window.addEventListener("test", Ao, Ao),
    window.removeEventListener("test", Ao, !0));
} catch {}
function xv(e, t, n, r) {
  if (r && typeof r != "boolean" && !Xi) {
    var l = r.once,
      o = r.capture,
      i = n;
    !Xi &&
      l &&
      ((i =
        n.__once ||
        function u(s) {
          this.removeEventListener(t, u, o), n.call(this, s);
        }),
      (n.__once = i)),
      e.addEventListener(t, i, Gi ? r : o);
  }
  e.addEventListener(t, n, r);
}
function Cv(e, t, n, r) {
  var l = r && typeof r != "boolean" ? r.capture : r;
  e.removeEventListener(t, n, l),
    n.__once && e.removeEventListener(t, n.__once, l);
}
function Vl(e, t, n, r) {
  return (
    xv(e, t, n, r),
    function () {
      Cv(e, t, n, r);
    }
  );
}
function Nv(e, t, n, r) {
  if ((n === void 0 && (n = !1), r === void 0 && (r = !0), e)) {
    var l = document.createEvent("HTMLEvents");
    l.initEvent(t, n, r), e.dispatchEvent(l);
  }
}
function Pv(e) {
  var t = ut(e, "transitionDuration") || "",
    n = t.indexOf("ms") === -1 ? 1e3 : 1;
  return parseFloat(t) * n;
}
function _v(e, t, n) {
  n === void 0 && (n = 5);
  var r = !1,
    l = setTimeout(function () {
      r || Nv(e, "transitionend", !0);
    }, t + n),
    o = Vl(
      e,
      "transitionend",
      function () {
        r = !0;
      },
      { once: !0 }
    );
  return function () {
    clearTimeout(l), o();
  };
}
function Rv(e, t, n, r) {
  n == null && (n = Pv(e) || 0);
  var l = _v(e, n, r),
    o = Vl(e, "transitionend", t);
  return function () {
    l(), o();
  };
}
function Oa(e, t) {
  const n = ut(e, t) || "",
    r = n.indexOf("ms") === -1 ? 1e3 : 1;
  return parseFloat(n) * r;
}
function qu(e, t) {
  const n = Oa(e, "transitionDuration"),
    r = Oa(e, "transitionDelay"),
    l = Rv(
      e,
      (o) => {
        o.target === e && (l(), t(o));
      },
      n + r
    );
}
function Gn(...e) {
  return e
    .filter((t) => t != null)
    .reduce((t, n) => {
      if (typeof n != "function")
        throw new Error(
          "Invalid Argument Type, must only provide functions, undefined, or null."
        );
      return t === null
        ? n
        : function (...l) {
            t.apply(this, l), n.apply(this, l);
          };
    }, null);
}
function od(e) {
  e.offsetHeight;
}
var La = function (t) {
  return !t || typeof t == "function"
    ? t
    : function (n) {
        t.current = n;
      };
};
function Tv(e, t) {
  var n = La(e),
    r = La(t);
  return function (l) {
    n && n(l), r && r(l);
  };
}
function bu(e, t) {
  return v.useMemo(
    function () {
      return Tv(e, t);
    },
    [e, t]
  );
}
function Ov(e) {
  return e && "setState" in e ? yn.findDOMNode(e) : e ?? null;
}
const es = We.forwardRef(
    (
      {
        onEnter: e,
        onEntering: t,
        onEntered: n,
        onExit: r,
        onExiting: l,
        onExited: o,
        addEndListener: i,
        children: u,
        childRef: s,
        ...a
      },
      h
    ) => {
      const d = v.useRef(null),
        m = bu(d, s),
        y = (C) => {
          m(Ov(C));
        },
        w = (C) => (P) => {
          C && d.current && C(d.current, P);
        },
        g = v.useCallback(w(e), [e]),
        x = v.useCallback(w(t), [t]),
        f = v.useCallback(w(n), [n]),
        c = v.useCallback(w(r), [r]),
        p = v.useCallback(w(l), [l]),
        E = v.useCallback(w(o), [o]),
        k = v.useCallback(w(i), [i]);
      return R(ht, {
        ref: h,
        ...a,
        onEnter: g,
        onEntered: f,
        onEntering: x,
        onExit: c,
        onExited: E,
        onExiting: p,
        addEndListener: k,
        nodeRef: d,
        children:
          typeof u == "function"
            ? (C, P) => u(C, { ...P, ref: y })
            : We.cloneElement(u, { ref: y }),
      });
    }
  ),
  Lv = {
    height: ["marginTop", "marginBottom"],
    width: ["marginLeft", "marginRight"],
  };
function id(e, t) {
  const n = `offset${e[0].toUpperCase()}${e.slice(1)}`,
    r = t[n],
    l = Lv[e];
  return r + parseInt(ut(t, l[0]), 10) + parseInt(ut(t, l[1]), 10);
}
const zv = {
    [yt]: "collapse",
    [Rr]: "collapsing",
    [Ae]: "collapsing",
    [rt]: "collapse show",
  },
  Mv = {
    in: !1,
    timeout: 300,
    mountOnEnter: !1,
    unmountOnExit: !1,
    appear: !1,
    getDimensionValue: id,
  },
  ud = We.forwardRef(
    (
      {
        onEnter: e,
        onEntering: t,
        onEntered: n,
        onExit: r,
        onExiting: l,
        className: o,
        children: i,
        dimension: u = "height",
        getDimensionValue: s = id,
        ...a
      },
      h
    ) => {
      const d = typeof u == "function" ? u() : u,
        m = v.useMemo(
          () =>
            Gn((f) => {
              f.style[d] = "0";
            }, e),
          [d, e]
        ),
        y = v.useMemo(
          () =>
            Gn((f) => {
              const c = `scroll${d[0].toUpperCase()}${d.slice(1)}`;
              f.style[d] = `${f[c]}px`;
            }, t),
          [d, t]
        ),
        w = v.useMemo(
          () =>
            Gn((f) => {
              f.style[d] = null;
            }, n),
          [d, n]
        ),
        g = v.useMemo(
          () =>
            Gn((f) => {
              (f.style[d] = `${s(d, f)}px`), od(f);
            }, r),
          [r, s, d]
        ),
        x = v.useMemo(
          () =>
            Gn((f) => {
              f.style[d] = null;
            }, l),
          [d, l]
        );
      return R(es, {
        ref: h,
        addEndListener: qu,
        ...a,
        "aria-expanded": a.role ? a.in : null,
        onEnter: m,
        onEntering: y,
        onEntered: w,
        onExit: g,
        onExiting: x,
        childRef: i.ref,
        children: (f, c) =>
          We.cloneElement(i, {
            ...c,
            className: Pe(
              o,
              i.props.className,
              zv[f],
              d === "width" && "collapse-horizontal"
            ),
          }),
      });
    }
  );
ud.defaultProps = Mv;
const $n = v.createContext(null);
$n.displayName = "NavbarContext";
const sd = v.forwardRef(({ children: e, bsPrefix: t, ...n }, r) => {
  t = pt(t, "navbar-collapse");
  const l = v.useContext($n);
  return R(ud, {
    in: !!(l && l.expanded),
    ...n,
    children: R("div", { ref: r, className: t, children: e }),
  });
});
sd.displayName = "NavbarCollapse";
function Dv(e) {
  var t = v.useRef(e);
  return (
    v.useEffect(
      function () {
        t.current = e;
      },
      [e]
    ),
    t
  );
}
function Ze(e) {
  var t = Dv(e);
  return v.useCallback(
    function () {
      return t.current && t.current.apply(t, arguments);
    },
    [t]
  );
}
const Iv = { label: "Toggle navigation" },
  ts = v.forwardRef(
    (
      {
        bsPrefix: e,
        className: t,
        children: n,
        label: r,
        as: l = "button",
        onClick: o,
        ...i
      },
      u
    ) => {
      e = pt(e, "navbar-toggler");
      const { onToggle: s, expanded: a } = v.useContext($n) || {},
        h = Ze((d) => {
          o && o(d), s && s();
        });
      return (
        l === "button" && (i.type = "button"),
        R(l, {
          ...i,
          ref: u,
          onClick: h,
          "aria-label": r,
          className: Pe(t, e, !a && "collapsed"),
          children: n || R("span", { className: `${e}-icon` }),
        })
      );
    }
  );
ts.displayName = "NavbarToggle";
ts.defaultProps = Iv;
var jv =
    typeof global < "u" &&
    global.navigator &&
    global.navigator.product === "ReactNative",
  Fv = typeof document < "u";
const Yi = Fv || jv ? v.useLayoutEffect : v.useEffect;
var Zi = new WeakMap(),
  za = function (t, n) {
    if (!(!t || !n)) {
      var r = Zi.get(n) || new Map();
      Zi.set(n, r);
      var l = r.get(t);
      return (
        l || ((l = n.matchMedia(t)), (l.refCount = 0), r.set(l.media, l)), l
      );
    }
  };
function $v(e, t) {
  t === void 0 && (t = typeof window > "u" ? void 0 : window);
  var n = za(e, t),
    r = v.useState(function () {
      return n ? n.matches : !1;
    }),
    l = r[0],
    o = r[1];
  return (
    Yi(
      function () {
        var i = za(e, t);
        if (!i) return o(!1);
        var u = Zi.get(t),
          s = function () {
            o(i.matches);
          };
        return (
          i.refCount++,
          i.addListener(s),
          s(),
          function () {
            i.removeListener(s),
              i.refCount--,
              i.refCount <= 0 && (u == null || u.delete(i.media)),
              (i = void 0);
          }
        );
      },
      [e]
    ),
    l
  );
}
function Uv(e) {
  var t = Object.keys(e);
  function n(u, s) {
    return u === s ? s : u ? u + " and " + s : s;
  }
  function r(u) {
    return t[Math.min(t.indexOf(u) + 1, t.length - 1)];
  }
  function l(u) {
    var s = r(u),
      a = e[s];
    return (
      typeof a == "number"
        ? (a = a - 0.2 + "px")
        : (a = "calc(" + a + " - 0.2px)"),
      "(max-width: " + a + ")"
    );
  }
  function o(u) {
    var s = e[u];
    return typeof s == "number" && (s = s + "px"), "(min-width: " + s + ")";
  }
  function i(u, s, a) {
    var h;
    if (typeof u == "object") (h = u), (a = s), (s = !0);
    else {
      var d;
      (s = s || !0), (h = ((d = {}), (d[u] = s), d));
    }
    var m = v.useMemo(
      function () {
        return Object.entries(h).reduce(function (y, w) {
          var g = w[0],
            x = w[1];
          return (
            (x === "up" || x === !0) && (y = n(y, o(g))),
            (x === "down" || x === !0) && (y = n(y, l(g))),
            y
          );
        }, "");
      },
      [JSON.stringify(h)]
    );
    return $v(m, a);
  }
  return i;
}
var Bv = Uv({ xs: 0, sm: 576, md: 768, lg: 992, xl: 1200, xxl: 1400 });
function Wo(e) {
  e === void 0 && (e = Ju());
  try {
    var t = e.activeElement;
    return !t || !t.nodeName ? null : t;
  } catch {
    return e.body;
  }
}
function Ma(e, t) {
  if (e.contains) return e.contains(t);
  if (e.compareDocumentPosition)
    return e === t || !!(e.compareDocumentPosition(t) & 16);
}
function Av() {
  var e = v.useRef(!0),
    t = v.useRef(function () {
      return e.current;
    });
  return (
    v.useEffect(function () {
      return (
        (e.current = !0),
        function () {
          e.current = !1;
        }
      );
    }, []),
    t.current
  );
}
function Wv(e) {
  var t = v.useRef(e);
  return (t.current = e), t;
}
function Vv(e) {
  var t = Wv(e);
  v.useEffect(function () {
    return function () {
      return t.current();
    };
  }, []);
}
function Hv(e) {
  var t = v.useRef(null);
  return (
    v.useEffect(function () {
      t.current = e;
    }),
    t.current
  );
}
const Qv = "data-rr-ui-";
function Kv(e) {
  return `${Qv}${e}`;
}
function Gv(e = document) {
  const t = e.defaultView;
  return Math.abs(t.innerWidth - e.documentElement.clientWidth);
}
const Da = Kv("modal-open");
class Xv {
  constructor({
    ownerDocument: t,
    handleContainerOverflow: n = !0,
    isRTL: r = !1,
  } = {}) {
    (this.handleContainerOverflow = n),
      (this.isRTL = r),
      (this.modals = []),
      (this.ownerDocument = t);
  }
  getScrollbarWidth() {
    return Gv(this.ownerDocument);
  }
  getElement() {
    return (this.ownerDocument || document).body;
  }
  setModalAttributes(t) {}
  removeModalAttributes(t) {}
  setContainerStyle(t) {
    const n = { overflow: "hidden" },
      r = this.isRTL ? "paddingLeft" : "paddingRight",
      l = this.getElement();
    (t.style = { overflow: l.style.overflow, [r]: l.style[r] }),
      t.scrollBarWidth &&
        (n[r] = `${parseInt(ut(l, r) || "0", 10) + t.scrollBarWidth}px`),
      l.setAttribute(Da, ""),
      ut(l, n);
  }
  reset() {
    [...this.modals].forEach((t) => this.remove(t));
  }
  removeContainerStyle(t) {
    const n = this.getElement();
    n.removeAttribute(Da), Object.assign(n.style, t.style);
  }
  add(t) {
    let n = this.modals.indexOf(t);
    return (
      n !== -1 ||
        ((n = this.modals.length),
        this.modals.push(t),
        this.setModalAttributes(t),
        n !== 0) ||
        ((this.state = { scrollBarWidth: this.getScrollbarWidth(), style: {} }),
        this.handleContainerOverflow && this.setContainerStyle(this.state)),
      n
    );
  }
  remove(t) {
    const n = this.modals.indexOf(t);
    n !== -1 &&
      (this.modals.splice(n, 1),
      !this.modals.length &&
        this.handleContainerOverflow &&
        this.removeContainerStyle(this.state),
      this.removeModalAttributes(t));
  }
  isTopModal(t) {
    return !!this.modals.length && this.modals[this.modals.length - 1] === t;
  }
}
const ns = Xv,
  ad = v.createContext(uo ? window : void 0);
ad.Provider;
function cd() {
  return v.useContext(ad);
}
const Vo = (e, t) =>
  uo
    ? e == null
      ? (t || Ju()).body
      : (typeof e == "function" && (e = e()),
        e && "current" in e && (e = e.current),
        e && ("nodeType" in e || e.getBoundingClientRect) ? e : null)
    : null;
function Yv(e, t) {
  const n = cd(),
    [r, l] = v.useState(() => Vo(e, n == null ? void 0 : n.document));
  if (!r) {
    const o = Vo(e);
    o && l(o);
  }
  return (
    v.useEffect(() => {
      t && r && t(r);
    }, [t, r]),
    v.useEffect(() => {
      const o = Vo(e);
      o !== r && l(o);
    }, [e, r]),
    r
  );
}
function Zv({
  children: e,
  in: t,
  onExited: n,
  mountOnEnter: r,
  unmountOnExit: l,
}) {
  const o = v.useRef(null),
    i = v.useRef(t),
    u = Ze(n);
  v.useEffect(() => {
    t ? (i.current = !0) : u(o.current);
  }, [t, u]);
  const s = bu(o, e.ref),
    a = v.cloneElement(e, { ref: s });
  return t ? a : l || (!i.current && r) ? null : a;
}
function Jv({ in: e, onTransition: t }) {
  const n = v.useRef(null),
    r = v.useRef(!0),
    l = Ze(t);
  return (
    Yi(() => {
      if (!n.current) return;
      let o = !1;
      return (
        l({ in: e, element: n.current, initial: r.current, isStale: () => o }),
        () => {
          o = !0;
        }
      );
    }, [e, l]),
    Yi(
      () => (
        (r.current = !1),
        () => {
          r.current = !0;
        }
      ),
      []
    ),
    n
  );
}
function qv({ children: e, in: t, onExited: n, onEntered: r, transition: l }) {
  const [o, i] = v.useState(!t);
  t && o && i(!1);
  const u = Jv({
      in: !!t,
      onTransition: (a) => {
        const h = () => {
          a.isStale() ||
            (a.in
              ? r == null || r(a.element, a.initial)
              : (i(!0), n == null || n(a.element)));
        };
        Promise.resolve(l(a)).then(h, (d) => {
          throw (a.in || i(!0), d);
        });
      },
    }),
    s = bu(u, e.ref);
  return o && !t ? null : v.cloneElement(e, { ref: s });
}
function Ia(e, t, n) {
  return e
    ? R(e, Object.assign({}, n))
    : t
    ? R(qv, Object.assign({}, n, { transition: t }))
    : R(Zv, Object.assign({}, n));
}
function bv(e) {
  return e.code === "Escape" || e.keyCode === 27;
}
const eg = [
  "show",
  "role",
  "className",
  "style",
  "children",
  "backdrop",
  "keyboard",
  "onBackdropClick",
  "onEscapeKeyDown",
  "transition",
  "runTransition",
  "backdropTransition",
  "runBackdropTransition",
  "autoFocus",
  "enforceFocus",
  "restoreFocus",
  "restoreFocusOptions",
  "renderDialog",
  "renderBackdrop",
  "manager",
  "container",
  "onShow",
  "onHide",
  "onExit",
  "onExited",
  "onExiting",
  "onEnter",
  "onEntering",
  "onEntered",
];
function tg(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    l,
    o;
  for (o = 0; o < r.length; o++)
    (l = r[o]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
  return n;
}
let Ho;
function ng(e) {
  return (
    Ho || (Ho = new ns({ ownerDocument: e == null ? void 0 : e.document })), Ho
  );
}
function rg(e) {
  const t = cd(),
    n = e || ng(t),
    r = v.useRef({ dialog: null, backdrop: null });
  return Object.assign(r.current, {
    add: () => n.add(r.current),
    remove: () => n.remove(r.current),
    isTopModal: () => n.isTopModal(r.current),
    setDialogRef: v.useCallback((l) => {
      r.current.dialog = l;
    }, []),
    setBackdropRef: v.useCallback((l) => {
      r.current.backdrop = l;
    }, []),
  });
}
const fd = v.forwardRef((e, t) => {
  let {
      show: n = !1,
      role: r = "dialog",
      className: l,
      style: o,
      children: i,
      backdrop: u = !0,
      keyboard: s = !0,
      onBackdropClick: a,
      onEscapeKeyDown: h,
      transition: d,
      runTransition: m,
      backdropTransition: y,
      runBackdropTransition: w,
      autoFocus: g = !0,
      enforceFocus: x = !0,
      restoreFocus: f = !0,
      restoreFocusOptions: c,
      renderDialog: p,
      renderBackdrop: E = (K) => R("div", Object.assign({}, K)),
      manager: k,
      container: C,
      onShow: P,
      onHide: T = () => {},
      onExit: j,
      onExited: z,
      onExiting: ce,
      onEnter: be,
      onEntering: je,
      onEntered: $t,
    } = e,
    bt = tg(e, eg);
  const Ke = Yv(C),
    X = rg(k),
    N = Av(),
    O = Hv(n),
    [L, F] = v.useState(!n),
    U = v.useRef(null);
  v.useImperativeHandle(t, () => X, [X]),
    uo && !O && n && (U.current = Wo()),
    n && L && F(!1);
  const et = Ze(() => {
      if (
        (X.add(),
        (co.current = Vl(document, "keydown", en)),
        (ao.current = Vl(document, "focus", () => setTimeout(oe), !0)),
        P && P(),
        g)
      ) {
        const K = Wo(document);
        X.dialog &&
          K &&
          !Ma(X.dialog, K) &&
          ((U.current = K), X.dialog.focus());
      }
    }),
    me = Ze(() => {
      if (
        (X.remove(),
        co.current == null || co.current(),
        ao.current == null || ao.current(),
        f)
      ) {
        var K;
        (K = U.current) == null || K.focus == null || K.focus(c),
          (U.current = null);
      }
    });
  v.useEffect(() => {
    !n || !Ke || et();
  }, [n, Ke, et]),
    v.useEffect(() => {
      L && me();
    }, [L, me]),
    Vv(() => {
      me();
    });
  const oe = Ze(() => {
      if (!x || !N() || !X.isTopModal()) return;
      const K = Wo();
      X.dialog && K && !Ma(X.dialog, K) && X.dialog.focus();
    }),
    Se = Ze((K) => {
      K.target === K.currentTarget && (a == null || a(K), u === !0 && T());
    }),
    en = Ze((K) => {
      s &&
        bv(K) &&
        X.isTopModal() &&
        (h == null || h(K), K.defaultPrevented || T());
    }),
    ao = v.useRef(),
    co = v.useRef(),
    gd = (...K) => {
      F(!0), z == null || z(...K);
    };
  if (!Ke) return null;
  const as = Object.assign(
    {
      role: r,
      ref: X.setDialogRef,
      "aria-modal": r === "dialog" ? !0 : void 0,
    },
    bt,
    { style: o, className: l, tabIndex: -1 }
  );
  let fo = p
    ? p(as)
    : R(
        "div",
        Object.assign({}, as, {
          children: v.cloneElement(i, { role: "document" }),
        })
      );
  fo = Ia(d, m, {
    unmountOnExit: !0,
    mountOnEnter: !0,
    appear: !0,
    in: !!n,
    onExit: j,
    onExiting: ce,
    onExited: gd,
    onEnter: be,
    onEntering: je,
    onEntered: $t,
    children: fo,
  });
  let jr = null;
  return (
    u &&
      ((jr = E({ ref: X.setBackdropRef, onClick: Se })),
      (jr = Ia(y, w, {
        in: !!n,
        appear: !0,
        mountOnEnter: !0,
        unmountOnExit: !0,
        children: jr,
      }))),
    R(hl, { children: yn.createPortal(Me(hl, { children: [jr, fo] }), Ke) })
  );
});
fd.displayName = "Modal";
const lg = Object.assign(fd, { Manager: ns }),
  og = {
    in: !1,
    timeout: 300,
    mountOnEnter: !1,
    unmountOnExit: !1,
    appear: !1,
  },
  ig = { [Ae]: "show", [rt]: "show" },
  rs = v.forwardRef(
    ({ className: e, children: t, transitionClasses: n = {}, ...r }, l) => {
      const o = v.useCallback(
        (i, u) => {
          od(i), r.onEnter == null || r.onEnter(i, u);
        },
        [r]
      );
      return R(es, {
        ref: l,
        addEndListener: qu,
        ...r,
        onEnter: o,
        childRef: t.ref,
        children: (i, u) =>
          v.cloneElement(t, {
            ...u,
            className: Pe("fade", e, t.props.className, ig[i], n[i]),
          }),
      });
    }
  );
rs.defaultProps = og;
rs.displayName = "Fade";
const ug = Zu("offcanvas-body"),
  sg = { in: !1, mountOnEnter: !1, unmountOnExit: !1, appear: !1 },
  ag = { [Ae]: "show", [rt]: "show" },
  ls = v.forwardRef(
    ({ bsPrefix: e, className: t, children: n, ...r }, l) => (
      (e = pt(e, "offcanvas")),
      R(es, {
        ref: l,
        addEndListener: qu,
        ...r,
        childRef: n.ref,
        children: (o, i) =>
          v.cloneElement(n, {
            ...i,
            className: Pe(
              t,
              n.props.className,
              (o === Ae || o === Rr) && `${e}-toggling`,
              ag[o]
            ),
          }),
      })
    )
  );
ls.defaultProps = sg;
ls.displayName = "OffcanvasToggling";
const dd = v.createContext({ onHide() {} }),
  cg = {
    "aria-label": sr.string,
    onClick: sr.func,
    variant: sr.oneOf(["white"]),
  },
  fg = { "aria-label": "Close" },
  so = v.forwardRef(({ className: e, variant: t, ...n }, r) =>
    R("button", {
      ref: r,
      type: "button",
      className: Pe("btn-close", t && `btn-close-${t}`, e),
      ...n,
    })
  );
so.displayName = "CloseButton";
so.propTypes = cg;
so.defaultProps = fg;
const dg = { closeLabel: "Close", closeButton: !1 },
  pd = v.forwardRef(
    (
      {
        closeLabel: e,
        closeVariant: t,
        closeButton: n,
        onHide: r,
        children: l,
        ...o
      },
      i
    ) => {
      const u = v.useContext(dd),
        s = Ze(() => {
          u == null || u.onHide(), r == null || r();
        });
      return Me("div", {
        ref: i,
        ...o,
        children: [l, n && R(so, { "aria-label": e, variant: t, onClick: s })],
      });
    }
  );
pd.defaultProps = dg;
const pg = { closeLabel: "Close", closeButton: !1 },
  os = v.forwardRef(
    ({ bsPrefix: e, className: t, ...n }, r) => (
      (e = pt(e, "offcanvas-header")),
      R(pd, { ref: r, ...n, className: Pe(t, e) })
    )
  );
os.displayName = "OffcanvasHeader";
os.defaultProps = pg;
const hg = (e) =>
    v.forwardRef((t, n) =>
      R("div", { ...t, ref: n, className: Pe(t.className, e) })
    ),
  mg = hg("h5"),
  vg = Zu("offcanvas-title", { Component: mg });
function gg(e, t) {
  return e.classList
    ? !!t && e.classList.contains(t)
    : (" " + (e.className.baseVal || e.className) + " ").indexOf(
        " " + t + " "
      ) !== -1;
}
function yg(e, t) {
  e.classList
    ? e.classList.add(t)
    : gg(e, t) ||
      (typeof e.className == "string"
        ? (e.className = e.className + " " + t)
        : e.setAttribute(
            "class",
            ((e.className && e.className.baseVal) || "") + " " + t
          ));
}
var wg = Function.prototype.bind.call(Function.prototype.call, [].slice);
function rn(e, t) {
  return wg(e.querySelectorAll(t));
}
function ja(e, t) {
  return e
    .replace(new RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1")
    .replace(/\s+/g, " ")
    .replace(/^\s*|\s*$/g, "");
}
function Eg(e, t) {
  e.classList
    ? e.classList.remove(t)
    : typeof e.className == "string"
    ? (e.className = ja(e.className, t))
    : e.setAttribute(
        "class",
        ja((e.className && e.className.baseVal) || "", t)
      );
}
const ln = {
  FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
  STICKY_CONTENT: ".sticky-top",
  NAVBAR_TOGGLER: ".navbar-toggler",
};
class hd extends ns {
  adjustAndStore(t, n, r) {
    const l = n.style[t];
    (n.dataset[t] = l), ut(n, { [t]: `${parseFloat(ut(n, t)) + r}px` });
  }
  restore(t, n) {
    const r = n.dataset[t];
    r !== void 0 && (delete n.dataset[t], ut(n, { [t]: r }));
  }
  setContainerStyle(t) {
    super.setContainerStyle(t);
    const n = this.getElement();
    if ((yg(n, "modal-open"), !t.scrollBarWidth)) return;
    const r = this.isRTL ? "paddingLeft" : "paddingRight",
      l = this.isRTL ? "marginLeft" : "marginRight";
    rn(n, ln.FIXED_CONTENT).forEach((o) =>
      this.adjustAndStore(r, o, t.scrollBarWidth)
    ),
      rn(n, ln.STICKY_CONTENT).forEach((o) =>
        this.adjustAndStore(l, o, -t.scrollBarWidth)
      ),
      rn(n, ln.NAVBAR_TOGGLER).forEach((o) =>
        this.adjustAndStore(l, o, t.scrollBarWidth)
      );
  }
  removeContainerStyle(t) {
    super.removeContainerStyle(t);
    const n = this.getElement();
    Eg(n, "modal-open");
    const r = this.isRTL ? "paddingLeft" : "paddingRight",
      l = this.isRTL ? "marginLeft" : "marginRight";
    rn(n, ln.FIXED_CONTENT).forEach((o) => this.restore(r, o)),
      rn(n, ln.STICKY_CONTENT).forEach((o) => this.restore(l, o)),
      rn(n, ln.NAVBAR_TOGGLER).forEach((o) => this.restore(l, o));
  }
}
let Qo;
function Sg(e) {
  return Qo || (Qo = new hd(e)), Qo;
}
const kg = {
  show: !1,
  backdrop: !0,
  keyboard: !0,
  scroll: !1,
  autoFocus: !0,
  enforceFocus: !0,
  restoreFocus: !0,
  placement: "start",
  renderStaticNode: !1,
};
function xg(e) {
  return R(ls, { ...e });
}
function Cg(e) {
  return R(rs, { ...e });
}
const is = v.forwardRef(
  (
    {
      bsPrefix: e,
      className: t,
      children: n,
      "aria-labelledby": r,
      placement: l,
      responsive: o,
      show: i,
      backdrop: u,
      keyboard: s,
      scroll: a,
      onEscapeKeyDown: h,
      onShow: d,
      onHide: m,
      container: y,
      autoFocus: w,
      enforceFocus: g,
      restoreFocus: x,
      restoreFocusOptions: f,
      onEntered: c,
      onExit: p,
      onExiting: E,
      onEnter: k,
      onEntering: C,
      onExited: P,
      backdropClassName: T,
      manager: j,
      renderStaticNode: z,
      ...ce
    },
    be
  ) => {
    const je = v.useRef();
    e = pt(e, "offcanvas");
    const { onToggle: $t } = v.useContext($n) || {},
      [bt, Ke] = v.useState(!1),
      X = Bv(o || "xs", "up");
    v.useEffect(() => {
      Ke(o ? i && !X : i);
    }, [i, o, X]);
    const N = Ze(() => {
        $t == null || $t(), m == null || m();
      }),
      O = v.useMemo(() => ({ onHide: N }), [N]);
    function L() {
      return (
        j ||
        (a
          ? (je.current ||
              (je.current = new hd({ handleContainerOverflow: !1 })),
            je.current)
          : Sg())
      );
    }
    const F = (oe, ...Se) => {
        oe && (oe.style.visibility = "visible"), k == null || k(oe, ...Se);
      },
      U = (oe, ...Se) => {
        oe && (oe.style.visibility = ""), P == null || P(...Se);
      },
      et = v.useCallback(
        (oe) => R("div", { ...oe, className: Pe(`${e}-backdrop`, T) }),
        [T, e]
      ),
      me = (oe) =>
        R("div", {
          ...oe,
          ...ce,
          className: Pe(t, o ? `${e}-${o}` : e, `${e}-${l}`),
          "aria-labelledby": r,
          children: n,
        });
    return Me(hl, {
      children: [
        !bt && (o || z) && me({}),
        R(dd.Provider, {
          value: O,
          children: R(lg, {
            show: bt,
            ref: be,
            backdrop: u,
            container: y,
            keyboard: s,
            autoFocus: w,
            enforceFocus: g && !a,
            restoreFocus: x,
            restoreFocusOptions: f,
            onEscapeKeyDown: h,
            onShow: d,
            onHide: N,
            onEnter: F,
            onEntering: C,
            onEntered: c,
            onExit: p,
            onExiting: E,
            onExited: U,
            manager: L(),
            transition: xg,
            backdropTransition: Cg,
            renderBackdrop: et,
            renderDialog: me,
          }),
        }),
      ],
    });
  }
);
is.displayName = "Offcanvas";
is.defaultProps = kg;
const Ng = Object.assign(is, { Body: ug, Header: os, Title: vg }),
  md = v.forwardRef((e, t) => {
    const n = v.useContext($n);
    return R(Ng, {
      ref: t,
      show: !!(n != null && n.expanded),
      ...e,
      renderStaticNode: !0,
    });
  });
md.displayName = "NavbarOffcanvas";
const Pg = Zu("navbar-text", { Component: "span" }),
  _g = { expand: !0, variant: "light", collapseOnSelect: !1 },
  us = v.forwardRef((e, t) => {
    const {
        bsPrefix: n,
        expand: r,
        variant: l,
        bg: o,
        fixed: i,
        sticky: u,
        className: s,
        as: a = "nav",
        expanded: h,
        onToggle: d,
        onSelect: m,
        collapseOnSelect: y,
        ...w
      } = ov(e, { expanded: "onToggle" }),
      g = pt(n, "navbar"),
      x = v.useCallback(
        (...p) => {
          m == null || m(...p), y && h && (d == null || d(!1));
        },
        [m, y, h, d]
      );
    w.role === void 0 && a !== "nav" && (w.role = "navigation");
    let f = `${g}-expand`;
    typeof r == "string" && (f = `${f}-${r}`);
    const c = v.useMemo(
      () => ({
        onToggle: () => (d == null ? void 0 : d(!h)),
        bsPrefix: g,
        expanded: !!h,
        expand: r,
      }),
      [g, h, r, d]
    );
    return R($n.Provider, {
      value: c,
      children: R(tv.Provider, {
        value: x,
        children: R(a, {
          ref: t,
          ...w,
          className: Pe(
            s,
            g,
            r && f,
            l && `${g}-${l}`,
            o && `bg-${o}`,
            u && `sticky-${u}`,
            i && `fixed-${i}`
          ),
        }),
      }),
    });
  });
us.defaultProps = _g;
us.displayName = "Navbar";
const Rg = Object.assign(us, {
  Brand: td,
  Collapse: sd,
  Offcanvas: md,
  Text: Pg,
  Toggle: ts,
});
function Tg() {
  return R(hl, {
    children: R(Rg, {
      bg: "dark",
      variant: "dark",
      children: Me(Yu, {
        children: [
          R(Na, {
            className: "nav-link text-light ms-5 fs-3",
            to: "/",
            children: "Imágenes",
          }),
          R(Na, {
            className: "nav-link text-light me-5 fs-3",
            to: "favorites",
            children: "Favoritos",
          }),
        ],
      }),
    }),
  });
}
const ss = v.createContext({}),
  vd = ({ color: e }) =>
    Me("svg", {
      fill: e ? "#ff0000" : "#CCCCCC",
      width: "64px",
      height: "64px",
      viewBox: "-16 -16 64.00 64.00",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      stroke: "#ff0000",
      strokeWidth: "0.00032",
      children: [
        R("g", { id: "SVGRepo_bgCarrier", strokeWidth: "0" }),
        R("g", {
          id: "SVGRepo_tracerCarrier",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          stroke: "#CCCCCC",
          strokeWidth: "0.576",
        }),
        Me("g", {
          id: "SVGRepo_iconCarrier",
          children: [
            " ",
            R("title", { children: "hearts" }),
            " ",
            R("path", {
              d: "M27.267 11.489c0.21 6.687-10.266 11.384-11.25 15.056-1.075-4.011-11.060-8.078-11.283-15.056-0.214-6.701 8.047-8.155 11.283-2.55 3.316-5.743 11.043-4.039 11.25 2.55z",
            }),
            " ",
          ],
        }),
      ],
    }),
  Og = () => {
    const { fotos: e, setFotos: t } = v.useContext(ss),
      n = (r) => {
        const l = e.findIndex((o) => o.id === r);
        (e[l].liked = !e[l].liked), t([...e]);
      };
    return Me("div", {
      className: "container",
      children: [
        R("div", {
          className: "text-center m-5",
          children: R("h2", { children: "Galeria de Fotos" }),
        }),
        R("div", {
          className: "d-flex flex-wrap justify-content-center col-sm-12",
          children: e.map((r) =>
            Me(
              "div",
              {
                style: { backgroundImage: `url(${r.src.medium})` },
                className: "foto m-3 d-flex flex-column ",
                children: [
                  R("div", {
                    onClick: () => n(r.id),
                    children: R(vd, { color: r.liked }),
                  }),
                  R("div", {
                    className: "text-light text-center",
                    children: R("p", { children: r.alt }),
                  }),
                ],
              },
              r.id
            )
          ),
        }),
      ],
    });
  },
  Lg = () => {
    const { fotos: e, setFotos: t } = v.useContext(ss),
      n = (r) => {
        const l = e.findIndex((o) => o.id === r);
        (e[l].liked = !e[l].liked), t([...e]);
      };
    return Me("div", {
      className: "container",
      children: [
        R("div", {
          className: "text-center m-5",
          children: R("h2", { children: "Favoritos" }),
        }),
        R("div", {
          className: "d-flex flex-wrap justify-content-center col-sm-12",
          children: e.map(
            (r) =>
              r.liked &&
              Me(
                "div",
                {
                  style: { backgroundImage: `url(${r.src.medium})` },
                  className: "foto m-3 d-flex flex-column ",
                  children: [
                    R("div", {
                      onClick: () => n(r.id),
                      children: R(vd, { color: r.liked }),
                    }),
                    R("div", {
                      className: "text-light text-center",
                      children: R("p", { children: r.alt }),
                    }),
                  ],
                },
                r.id
              )
          ),
        }),
      ],
    });build
  },
  zg = () => R("div", { children: "NoFound" }),
  Mg = () => {
    const [e, t] = v.useState([]),
      n = async () => {
        const l = await (await fetch("./src/data/data.json")).json(),
          { photos: o } = l;
        t(o);
      };
    return (
      v.useEffect(() => {
        n();
      }, []),
      R(ss.Provider, {
        value: { fotos: e, setFotos: t },
        children: Me(Hm, {
          children: [
            R(Tg, {}),
            Me(Um, {
              children: [
                R(pl, { path: "/", element: R(Og, {}) }),
                R(pl, { path: "/favorites", element: R(Lg, {}) }),
                R(pl, { path: "*", element: R(zg, {}) }),
              ],
            }),
          ],
        }),
      })
    );
  },
  Dg = () => R("div", { children: R(Mg, {}) });
Go.createRoot(document.getElementById("root")).render(
  R(We.StrictMode, { children: R(Dg, {}) })
);
