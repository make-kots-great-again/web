"use strict";

!function (e, t) {
  "use strict";

  "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
    if (!e.document) throw new Error("jQuery requires a window with a document");
    return t(e);
  } : t(e);
}("undefined" != typeof window ? window : void 0, function (e, t) {
  "use strict";

  var n = [],
      r = Object.getPrototypeOf,
      i = n.slice,
      o = n.flat ? function (e) {
    return n.flat.call(e);
  } : function (e) {
    return n.concat.apply([], e);
  },
      a = n.push,
      s = n.indexOf,
      l = {},
      u = l.toString,
      c = l.hasOwnProperty,
      f = c.toString,
      d = f.call(Object),
      h = {},
      p = function (e) {
    return "function" == typeof e && "number" != typeof e.nodeType;
  },
      g = function (e) {
    return null != e && e === e.window;
  },
      v = e.document,
      m = {
    type: !0,
    src: !0,
    nonce: !0,
    noModule: !0
  };

  function y(e, t, n) {
    var r,
        i,
        o = (n = n || v).createElement("script");
    if (o.text = e, t) for (r in m) (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
    n.head.appendChild(o).parentNode.removeChild(o);
  }

  function _(e) {
    return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[u.call(e)] || "object" : typeof e;
  }

  var b = "3.5.1",
      w = function (e, t) {
    return new w.fn.init(e, t);
  };

  function E(e) {
    var t = !!e && "length" in e && e.length,
        n = _(e);

    return !p(e) && !g(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e);
  }

  w.fn = w.prototype = {
    jquery: b,
    constructor: w,
    length: 0,
    toArray: function () {
      return i.call(this);
    },
    get: function (e) {
      return null == e ? i.call(this) : e < 0 ? this[e + this.length] : this[e];
    },
    pushStack: function (e) {
      var t = w.merge(this.constructor(), e);
      return t.prevObject = this, t;
    },
    each: function (e) {
      return w.each(this, e);
    },
    map: function (e) {
      return this.pushStack(w.map(this, function (t, n) {
        return e.call(t, n, t);
      }));
    },
    slice: function () {
      return this.pushStack(i.apply(this, arguments));
    },
    first: function () {
      return this.eq(0);
    },
    last: function () {
      return this.eq(-1);
    },
    even: function () {
      return this.pushStack(w.grep(this, function (e, t) {
        return (t + 1) % 2;
      }));
    },
    odd: function () {
      return this.pushStack(w.grep(this, function (e, t) {
        return t % 2;
      }));
    },
    eq: function (e) {
      var t = this.length,
          n = +e + (e < 0 ? t : 0);
      return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
    },
    end: function () {
      return this.prevObject || this.constructor();
    },
    push: a,
    sort: n.sort,
    splice: n.splice
  }, w.extend = w.fn.extend = function () {
    var e,
        t,
        n,
        r,
        i,
        o,
        a = arguments[0] || {},
        s = 1,
        l = arguments.length,
        u = !1;

    for ("boolean" == typeof a && (u = a, a = arguments[s] || {}, s++), "object" == typeof a || p(a) || (a = {}), s === l && (a = this, s--); s < l; s++) if (null != (e = arguments[s])) for (t in e) r = e[t], "__proto__" !== t && a !== r && (u && r && (w.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || w.isPlainObject(n) ? n : {}, i = !1, a[t] = w.extend(u, o, r)) : void 0 !== r && (a[t] = r));

    return a;
  }, w.extend({
    expando: "jQuery" + (b + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function (e) {
      throw new Error(e);
    },
    noop: function () {},
    isPlainObject: function (e) {
      var t, n;
      return !(!e || "[object Object]" !== u.call(e) || (t = r(e)) && ("function" != typeof (n = c.call(t, "constructor") && t.constructor) || f.call(n) !== d));
    },
    isEmptyObject: function (e) {
      var t;

      for (t in e) return !1;

      return !0;
    },
    globalEval: function (e, t, n) {
      y(e, {
        nonce: t && t.nonce
      }, n);
    },
    each: function (e, t) {
      var n,
          r = 0;
      if (E(e)) for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
      return e;
    },
    makeArray: function (e, t) {
      var n = t || [];
      return null != e && (E(Object(e)) ? w.merge(n, "string" == typeof e ? [e] : e) : a.call(n, e)), n;
    },
    inArray: function (e, t, n) {
      return null == t ? -1 : s.call(t, e, n);
    },
    merge: function (e, t) {
      for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];

      return e.length = i, e;
    },
    grep: function (e, t, n) {
      for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);

      return r;
    },
    map: function (e, t, n) {
      var r,
          i,
          a = 0,
          s = [];
      if (E(e)) for (r = e.length; a < r; a++) null != (i = t(e[a], a, n)) && s.push(i);else for (a in e) null != (i = t(e[a], a, n)) && s.push(i);
      return o(s);
    },
    guid: 1,
    support: h
  }), "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]), w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
    l["[object " + t + "]"] = t.toLowerCase();
  });

  var x = function (e) {
    var t,
        n,
        r,
        i,
        o,
        a,
        s,
        l,
        u,
        c,
        f,
        d,
        h,
        p,
        g,
        v,
        m,
        y,
        _,
        b = "sizzle" + 1 * new Date(),
        w = e.document,
        E = 0,
        x = 0,
        T = le(),
        C = le(),
        O = le(),
        S = le(),
        j = function (e, t) {
      return e === t && (f = !0), 0;
    },
        A = {}.hasOwnProperty,
        k = [],
        D = k.pop,
        P = k.push,
        N = k.push,
        L = k.slice,
        I = function (e, t) {
      for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;

      return -1;
    },
        R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        M = "[\\x20\\t\\r\\n\\f]",
        H = "(?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
        q = "\\[[\\x20\\t\\r\\n\\f]*(" + H + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + H + "))|)" + M + "*\\]",
        B = ":(" + H + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + q + ")*)|.*)\\)|)",
        F = new RegExp(M + "+", "g"),
        X = new RegExp("^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$", "g"),
        W = new RegExp("^[\\x20\\t\\r\\n\\f]*,[\\x20\\t\\r\\n\\f]*"),
        z = new RegExp("^[\\x20\\t\\r\\n\\f]*([>+~]|[\\x20\\t\\r\\n\\f])[\\x20\\t\\r\\n\\f]*"),
        G = new RegExp(M + "|>"),
        U = new RegExp(B),
        $ = new RegExp("^" + H + "$"),
        V = {
      ID: new RegExp("^#(" + H + ")"),
      CLASS: new RegExp("^\\.(" + H + ")"),
      TAG: new RegExp("^(" + H + "|[*])"),
      ATTR: new RegExp("^" + q),
      PSEUDO: new RegExp("^" + B),
      CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)", "i"),
      bool: new RegExp("^(?:" + R + ")$", "i"),
      needsContext: new RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)", "i")
    },
        Q = /HTML$/i,
        Y = /^(?:input|select|textarea|button)$/i,
        K = /^h\d$/i,
        J = /^[^{]+\{\s*\[native \w/,
        Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        ee = /[+~]/,
        te = new RegExp("\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\([^\\r\\n\\f])", "g"),
        ne = function (e, t) {
      var n = "0x" + e.slice(1) - 65536;
      return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320));
    },
        re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        ie = function (e, t) {
      return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
    },
        oe = function () {
      d();
    },
        ae = be(function (e) {
      return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
    }, {
      dir: "parentNode",
      next: "legend"
    });

    try {
      N.apply(k = L.call(w.childNodes), w.childNodes);
    } catch (Ce) {
      N = {
        apply: k.length ? function (e, t) {
          P.apply(e, L.call(t));
        } : function (e, t) {
          for (var n = e.length, r = 0; e[n++] = t[r++];);

          e.length = n - 1;
        }
      };
    }

    function se(e, t, r, i) {
      var o,
          s,
          u,
          c,
          f,
          p,
          m,
          y = t && t.ownerDocument,
          w = t ? t.nodeType : 9;
      if (r = r || [], "string" != typeof e || !e || 1 !== w && 9 !== w && 11 !== w) return r;

      if (!i && (d(t), t = t || h, g)) {
        if (11 !== w && (f = Z.exec(e))) if (o = f[1]) {
          if (9 === w) {
            if (!(u = t.getElementById(o))) return r;
            if (u.id === o) return r.push(u), r;
          } else if (y && (u = y.getElementById(o)) && _(t, u) && u.id === o) return r.push(u), r;
        } else {
          if (f[2]) return N.apply(r, t.getElementsByTagName(e)), r;
          if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return N.apply(r, t.getElementsByClassName(o)), r;
        }

        if (n.qsa && !S[e + " "] && (!v || !v.test(e)) && (1 !== w || "object" !== t.nodeName.toLowerCase())) {
          if (m = e, y = t, 1 === w && (G.test(e) || z.test(e))) {
            for ((y = ee.test(e) && me(t.parentNode) || t) === t && n.scope || ((c = t.getAttribute("id")) ? c = c.replace(re, ie) : t.setAttribute("id", c = b)), s = (p = a(e)).length; s--;) p[s] = (c ? "#" + c : ":scope") + " " + _e(p[s]);

            m = p.join(",");
          }

          try {
            return N.apply(r, y.querySelectorAll(m)), r;
          } catch (E) {
            S(e, !0);
          } finally {
            c === b && t.removeAttribute("id");
          }
        }
      }

      return l(e.replace(X, "$1"), t, r, i);
    }

    function le() {
      var e = [];
      return function t(n, i) {
        return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i;
      };
    }

    function ue(e) {
      return e[b] = !0, e;
    }

    function ce(e) {
      var t = h.createElement("fieldset");

      try {
        return !!e(t);
      } catch (Ce) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null;
      }
    }

    function fe(e, t) {
      for (var n = e.split("|"), i = n.length; i--;) r.attrHandle[n[i]] = t;
    }

    function de(e, t) {
      var n = t && e,
          r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
      if (r) return r;
      if (n) for (; n = n.nextSibling;) if (n === t) return -1;
      return e ? 1 : -1;
    }

    function he(e) {
      return function (t) {
        return "input" === t.nodeName.toLowerCase() && t.type === e;
      };
    }

    function pe(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();
        return ("input" === n || "button" === n) && t.type === e;
      };
    }

    function ge(e) {
      return function (t) {
        return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ae(t) === e : t.disabled === e : "label" in t && t.disabled === e;
      };
    }

    function ve(e) {
      return ue(function (t) {
        return t = +t, ue(function (n, r) {
          for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]));
        });
      });
    }

    function me(e) {
      return e && void 0 !== e.getElementsByTagName && e;
    }

    for (t in n = se.support = {}, o = se.isXML = function (e) {
      var t = (e.ownerDocument || e).documentElement;
      return !Q.test(e.namespaceURI || t && t.nodeName || "HTML");
    }, d = se.setDocument = function (e) {
      var t,
          i,
          a = e ? e.ownerDocument || e : w;
      return a != h && 9 === a.nodeType && a.documentElement ? (p = (h = a).documentElement, g = !o(h), w != h && (i = h.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", oe, !1) : i.attachEvent && i.attachEvent("onunload", oe)), n.scope = ce(function (e) {
        return p.appendChild(e).appendChild(h.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length;
      }), n.attributes = ce(function (e) {
        return e.className = "i", !e.getAttribute("className");
      }), n.getElementsByTagName = ce(function (e) {
        return e.appendChild(h.createComment("")), !e.getElementsByTagName("*").length;
      }), n.getElementsByClassName = J.test(h.getElementsByClassName), n.getById = ce(function (e) {
        return p.appendChild(e).id = b, !h.getElementsByName || !h.getElementsByName(b).length;
      }), n.getById ? (r.filter.ID = function (e) {
        var t = e.replace(te, ne);
        return function (e) {
          return e.getAttribute("id") === t;
        };
      }, r.find.ID = function (e, t) {
        if (void 0 !== t.getElementById && g) {
          var n = t.getElementById(e);
          return n ? [n] : [];
        }
      }) : (r.filter.ID = function (e) {
        var t = e.replace(te, ne);
        return function (e) {
          var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
          return n && n.value === t;
        };
      }, r.find.ID = function (e, t) {
        if (void 0 !== t.getElementById && g) {
          var n,
              r,
              i,
              o = t.getElementById(e);

          if (o) {
            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];

            for (i = t.getElementsByName(e), r = 0; o = i[r++];) if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
          }

          return [];
        }
      }), r.find.TAG = n.getElementsByTagName ? function (e, t) {
        return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0;
      } : function (e, t) {
        var n,
            r = [],
            i = 0,
            o = t.getElementsByTagName(e);

        if ("*" === e) {
          for (; n = o[i++];) 1 === n.nodeType && r.push(n);

          return r;
        }

        return o;
      }, r.find.CLASS = n.getElementsByClassName && function (e, t) {
        if (void 0 !== t.getElementsByClassName && g) return t.getElementsByClassName(e);
      }, m = [], v = [], (n.qsa = J.test(h.querySelectorAll)) && (ce(function (e) {
        var t;
        p.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + b + "-]").length || v.push("~="), (t = h.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || v.push("\\[[\\x20\\t\\r\\n\\f]*name[\\x20\\t\\r\\n\\f]*=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + b + "+*").length || v.push(".#.+[+~]"), e.querySelectorAll("\\\f"), v.push("[\\r\\n\\f]");
      }), ce(function (e) {
        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
        var t = h.createElement("input");
        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), p.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:");
      })), (n.matchesSelector = J.test(y = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)) && ce(function (e) {
        n.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), m.push("!=", B);
      }), v = v.length && new RegExp(v.join("|")), m = m.length && new RegExp(m.join("|")), t = J.test(p.compareDocumentPosition), _ = t || J.test(p.contains) ? function (e, t) {
        var n = 9 === e.nodeType ? e.documentElement : e,
            r = t && t.parentNode;
        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
      } : function (e, t) {
        if (t) for (; t = t.parentNode;) if (t === e) return !0;
        return !1;
      }, j = t ? function (e, t) {
        if (e === t) return f = !0, 0;
        var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
        return r || (1 & (r = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e == h || e.ownerDocument == w && _(w, e) ? -1 : t == h || t.ownerDocument == w && _(w, t) ? 1 : c ? I(c, e) - I(c, t) : 0 : 4 & r ? -1 : 1);
      } : function (e, t) {
        if (e === t) return f = !0, 0;
        var n,
            r = 0,
            i = e.parentNode,
            o = t.parentNode,
            a = [e],
            s = [t];
        if (!i || !o) return e == h ? -1 : t == h ? 1 : i ? -1 : o ? 1 : c ? I(c, e) - I(c, t) : 0;
        if (i === o) return de(e, t);

        for (n = e; n = n.parentNode;) a.unshift(n);

        for (n = t; n = n.parentNode;) s.unshift(n);

        for (; a[r] === s[r];) r++;

        return r ? de(a[r], s[r]) : a[r] == w ? -1 : s[r] == w ? 1 : 0;
      }, h) : h;
    }, se.matches = function (e, t) {
      return se(e, null, null, t);
    }, se.matchesSelector = function (e, t) {
      if (d(e), n.matchesSelector && g && !S[t + " "] && (!m || !m.test(t)) && (!v || !v.test(t))) try {
        var r = y.call(e, t);
        if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r;
      } catch (Ce) {
        S(t, !0);
      }
      return se(t, h, null, [e]).length > 0;
    }, se.contains = function (e, t) {
      return (e.ownerDocument || e) != h && d(e), _(e, t);
    }, se.attr = function (e, t) {
      (e.ownerDocument || e) != h && d(e);
      var i = r.attrHandle[t.toLowerCase()],
          o = i && A.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
      return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null;
    }, se.escape = function (e) {
      return (e + "").replace(re, ie);
    }, se.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }, se.uniqueSort = function (e) {
      var t,
          r = [],
          i = 0,
          o = 0;

      if (f = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(j), f) {
        for (; t = e[o++];) t === e[o] && (i = r.push(o));

        for (; i--;) e.splice(r[i], 1);
      }

      return c = null, e;
    }, i = se.getText = function (e) {
      var t,
          n = "",
          r = 0,
          o = e.nodeType;

      if (o) {
        if (1 === o || 9 === o || 11 === o) {
          if ("string" == typeof e.textContent) return e.textContent;

          for (e = e.firstChild; e; e = e.nextSibling) n += i(e);
        } else if (3 === o || 4 === o) return e.nodeValue;
      } else for (; t = e[r++];) n += i(t);

      return n;
    }, (r = se.selectors = {
      cacheLength: 50,
      createPseudo: ue,
      match: V,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: !0
        },
        " ": {
          dir: "parentNode"
        },
        "+": {
          dir: "previousSibling",
          first: !0
        },
        "~": {
          dir: "previousSibling"
        }
      },
      preFilter: {
        ATTR: function (e) {
          return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
        },
        CHILD: function (e) {
          return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e;
        },
        PSEUDO: function (e) {
          var t,
              n = !e[6] && e[2];
          return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && U.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
        }
      },
      filter: {
        TAG: function (e) {
          var t = e.replace(te, ne).toLowerCase();
          return "*" === e ? function () {
            return !0;
          } : function (e) {
            return e.nodeName && e.nodeName.toLowerCase() === t;
          };
        },
        CLASS: function (e) {
          var t = T[e + " "];
          return t || (t = new RegExp("(^|[\\x20\\t\\r\\n\\f])" + e + "(" + M + "|$)")) && T(e, function (e) {
            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "");
          });
        },
        ATTR: function (e, t, n) {
          return function (r) {
            var i = se.attr(r, e);
            return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace(F, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"));
          };
        },
        CHILD: function (e, t, n, r, i) {
          var o = "nth" !== e.slice(0, 3),
              a = "last" !== e.slice(-4),
              s = "of-type" === t;
          return 1 === r && 0 === i ? function (e) {
            return !!e.parentNode;
          } : function (t, n, l) {
            var u,
                c,
                f,
                d,
                h,
                p,
                g = o !== a ? "nextSibling" : "previousSibling",
                v = t.parentNode,
                m = s && t.nodeName.toLowerCase(),
                y = !l && !s,
                _ = !1;

            if (v) {
              if (o) {
                for (; g;) {
                  for (d = t; d = d[g];) if (s ? d.nodeName.toLowerCase() === m : 1 === d.nodeType) return !1;

                  p = g = "only" === e && !p && "nextSibling";
                }

                return !0;
              }

              if (p = [a ? v.firstChild : v.lastChild], a && y) {
                for (_ = (h = (u = (c = (f = (d = v)[b] || (d[b] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === E && u[1]) && u[2], d = h && v.childNodes[h]; d = ++h && d && d[g] || (_ = h = 0) || p.pop();) if (1 === d.nodeType && ++_ && d === t) {
                  c[e] = [E, h, _];
                  break;
                }
              } else if (y && (_ = h = (u = (c = (f = (d = t)[b] || (d[b] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === E && u[1]), !1 === _) for (; (d = ++h && d && d[g] || (_ = h = 0) || p.pop()) && ((s ? d.nodeName.toLowerCase() !== m : 1 !== d.nodeType) || !++_ || (y && ((c = (f = d[b] || (d[b] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] = [E, _]), d !== t)););

              return (_ -= i) === r || _ % r == 0 && _ / r >= 0;
            }
          };
        },
        PSEUDO: function (e, t) {
          var n,
              i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
          return i[b] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? ue(function (e, n) {
            for (var r, o = i(e, t), a = o.length; a--;) e[r = I(e, o[a])] = !(n[r] = o[a]);
          }) : function (e) {
            return i(e, 0, n);
          }) : i;
        }
      },
      pseudos: {
        not: ue(function (e) {
          var t = [],
              n = [],
              r = s(e.replace(X, "$1"));
          return r[b] ? ue(function (e, t, n, i) {
            for (var o, a = r(e, null, i, []), s = e.length; s--;) (o = a[s]) && (e[s] = !(t[s] = o));
          }) : function (e, i, o) {
            return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop();
          };
        }),
        has: ue(function (e) {
          return function (t) {
            return se(e, t).length > 0;
          };
        }),
        contains: ue(function (e) {
          return e = e.replace(te, ne), function (t) {
            return (t.textContent || i(t)).indexOf(e) > -1;
          };
        }),
        lang: ue(function (e) {
          return $.test(e || "") || se.error("unsupported lang: " + e), e = e.replace(te, ne).toLowerCase(), function (t) {
            var n;

            do {
              if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
            } while ((t = t.parentNode) && 1 === t.nodeType);

            return !1;
          };
        }),
        target: function (t) {
          var n = e.location && e.location.hash;
          return n && n.slice(1) === t.id;
        },
        root: function (e) {
          return e === p;
        },
        focus: function (e) {
          return e === h.activeElement && (!h.hasFocus || h.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
        },
        enabled: ge(!1),
        disabled: ge(!0),
        checked: function (e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && !!e.checked || "option" === t && !!e.selected;
        },
        selected: function (e) {
          return !0 === e.selected;
        },
        empty: function (e) {
          for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;

          return !0;
        },
        parent: function (e) {
          return !r.pseudos.empty(e);
        },
        header: function (e) {
          return K.test(e.nodeName);
        },
        input: function (e) {
          return Y.test(e.nodeName);
        },
        button: function (e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && "button" === e.type || "button" === t;
        },
        text: function (e) {
          var t;
          return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
        },
        first: ve(function () {
          return [0];
        }),
        last: ve(function (e, t) {
          return [t - 1];
        }),
        eq: ve(function (e, t, n) {
          return [n < 0 ? n + t : n];
        }),
        even: ve(function (e, t) {
          for (var n = 0; n < t; n += 2) e.push(n);

          return e;
        }),
        odd: ve(function (e, t) {
          for (var n = 1; n < t; n += 2) e.push(n);

          return e;
        }),
        lt: ve(function (e, t, n) {
          for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0;) e.push(r);

          return e;
        }),
        gt: ve(function (e, t, n) {
          for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);

          return e;
        })
      }
    }).pseudos.nth = r.pseudos.eq, {
      radio: !0,
      checkbox: !0,
      file: !0,
      password: !0,
      image: !0
    }) r.pseudos[t] = he(t);

    for (t in {
      submit: !0,
      reset: !0
    }) r.pseudos[t] = pe(t);

    function ye() {}

    function _e(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;

      return r;
    }

    function be(e, t, n) {
      var r = t.dir,
          i = t.next,
          o = i || r,
          a = n && "parentNode" === o,
          s = x++;
      return t.first ? function (t, n, i) {
        for (; t = t[r];) if (1 === t.nodeType || a) return e(t, n, i);

        return !1;
      } : function (t, n, l) {
        var u,
            c,
            f,
            d = [E, s];

        if (l) {
          for (; t = t[r];) if ((1 === t.nodeType || a) && e(t, n, l)) return !0;
        } else for (; t = t[r];) if (1 === t.nodeType || a) if (c = (f = t[b] || (t[b] = {}))[t.uniqueID] || (f[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t;else {
          if ((u = c[o]) && u[0] === E && u[1] === s) return d[2] = u[2];
          if (c[o] = d, d[2] = e(t, n, l)) return !0;
        }

        return !1;
      };
    }

    function we(e) {
      return e.length > 1 ? function (t, n, r) {
        for (var i = e.length; i--;) if (!e[i](t, n, r)) return !1;

        return !0;
      } : e[0];
    }

    function Ee(e, t, n, r, i) {
      for (var o, a = [], s = 0, l = e.length, u = null != t; s < l; s++) (o = e[s]) && (n && !n(o, r, i) || (a.push(o), u && t.push(s)));

      return a;
    }

    function xe(e, t, n, r, i, o) {
      return r && !r[b] && (r = xe(r)), i && !i[b] && (i = xe(i, o)), ue(function (o, a, s, l) {
        var u,
            c,
            f,
            d = [],
            h = [],
            p = a.length,
            g = o || function (e, t, n) {
          for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);

          return n;
        }(t || "*", s.nodeType ? [s] : s, []),
            v = !e || !o && t ? g : Ee(g, d, e, s, l),
            m = n ? i || (o ? e : p || r) ? [] : a : v;

        if (n && n(v, m, s, l), r) for (u = Ee(m, h), r(u, [], s, l), c = u.length; c--;) (f = u[c]) && (m[h[c]] = !(v[h[c]] = f));

        if (o) {
          if (i || e) {
            if (i) {
              for (u = [], c = m.length; c--;) (f = m[c]) && u.push(v[c] = f);

              i(null, m = [], u, l);
            }

            for (c = m.length; c--;) (f = m[c]) && (u = i ? I(o, f) : d[c]) > -1 && (o[u] = !(a[u] = f));
          }
        } else m = Ee(m === a ? m.splice(p, m.length) : m), i ? i(null, a, m, l) : N.apply(a, m);
      });
    }

    function Te(e) {
      for (var t, n, i, o = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], l = a ? 1 : 0, c = be(function (e) {
        return e === t;
      }, s, !0), f = be(function (e) {
        return I(t, e) > -1;
      }, s, !0), d = [function (e, n, r) {
        var i = !a && (r || n !== u) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
        return t = null, i;
      }]; l < o; l++) if (n = r.relative[e[l].type]) d = [be(we(d), n)];else {
        if ((n = r.filter[e[l].type].apply(null, e[l].matches))[b]) {
          for (i = ++l; i < o && !r.relative[e[i].type]; i++);

          return xe(l > 1 && we(d), l > 1 && _e(e.slice(0, l - 1).concat({
            value: " " === e[l - 2].type ? "*" : ""
          })).replace(X, "$1"), n, l < i && Te(e.slice(l, i)), i < o && Te(e = e.slice(i)), i < o && _e(e));
        }

        d.push(n);
      }

      return we(d);
    }

    return ye.prototype = r.filters = r.pseudos, r.setFilters = new ye(), a = se.tokenize = function (e, t) {
      var n,
          i,
          o,
          a,
          s,
          l,
          u,
          c = C[e + " "];
      if (c) return t ? 0 : c.slice(0);

      for (s = e, l = [], u = r.preFilter; s;) {
        for (a in n && !(i = W.exec(s)) || (i && (s = s.slice(i[0].length) || s), l.push(o = [])), n = !1, (i = z.exec(s)) && (n = i.shift(), o.push({
          value: n,
          type: i[0].replace(X, " ")
        }), s = s.slice(n.length)), r.filter) !(i = V[a].exec(s)) || u[a] && !(i = u[a](i)) || (n = i.shift(), o.push({
          value: n,
          type: a,
          matches: i
        }), s = s.slice(n.length));

        if (!n) break;
      }

      return t ? s.length : s ? se.error(e) : C(e, l).slice(0);
    }, s = se.compile = function (e, t) {
      var n,
          i = [],
          o = [],
          s = O[e + " "];

      if (!s) {
        for (t || (t = a(e)), n = t.length; n--;) (s = Te(t[n]))[b] ? i.push(s) : o.push(s);

        (s = O(e, function (e, t) {
          var n = t.length > 0,
              i = e.length > 0,
              o = function (o, a, s, l, c) {
            var f,
                p,
                v,
                m = 0,
                y = "0",
                _ = o && [],
                b = [],
                w = u,
                x = o || i && r.find.TAG("*", c),
                T = E += null == w ? 1 : Math.random() || .1,
                C = x.length;

            for (c && (u = a == h || a || c); y !== C && null != (f = x[y]); y++) {
              if (i && f) {
                for (p = 0, a || f.ownerDocument == h || (d(f), s = !g); v = e[p++];) if (v(f, a || h, s)) {
                  l.push(f);
                  break;
                }

                c && (E = T);
              }

              n && ((f = !v && f) && m--, o && _.push(f));
            }

            if (m += y, n && y !== m) {
              for (p = 0; v = t[p++];) v(_, b, a, s);

              if (o) {
                if (m > 0) for (; y--;) _[y] || b[y] || (b[y] = D.call(l));
                b = Ee(b);
              }

              N.apply(l, b), c && !o && b.length > 0 && m + t.length > 1 && se.uniqueSort(l);
            }

            return c && (E = T, u = w), _;
          };

          return n ? ue(o) : o;
        }(o, i))).selector = e;
      }

      return s;
    }, l = se.select = function (e, t, n, i) {
      var o,
          l,
          u,
          c,
          f,
          d = "function" == typeof e && e,
          h = !i && a(e = d.selector || e);

      if (n = n || [], 1 === h.length) {
        if ((l = h[0] = h[0].slice(0)).length > 2 && "ID" === (u = l[0]).type && 9 === t.nodeType && g && r.relative[l[1].type]) {
          if (!(t = (r.find.ID(u.matches[0].replace(te, ne), t) || [])[0])) return n;
          d && (t = t.parentNode), e = e.slice(l.shift().value.length);
        }

        for (o = V.needsContext.test(e) ? 0 : l.length; o-- && !r.relative[c = (u = l[o]).type];) if ((f = r.find[c]) && (i = f(u.matches[0].replace(te, ne), ee.test(l[0].type) && me(t.parentNode) || t))) {
          if (l.splice(o, 1), !(e = i.length && _e(l))) return N.apply(n, i), n;
          break;
        }
      }

      return (d || s(e, h))(i, t, !g, n, !t || ee.test(e) && me(t.parentNode) || t), n;
    }, n.sortStable = b.split("").sort(j).join("") === b, n.detectDuplicates = !!f, d(), n.sortDetached = ce(function (e) {
      return 1 & e.compareDocumentPosition(h.createElement("fieldset"));
    }), ce(function (e) {
      return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
    }) || fe("type|href|height|width", function (e, t, n) {
      if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
    }), n.attributes && ce(function (e) {
      return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
    }) || fe("value", function (e, t, n) {
      if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
    }), ce(function (e) {
      return null == e.getAttribute("disabled");
    }) || fe(R, function (e, t, n) {
      var r;
      if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
    }), se;
  }(e);

  w.find = x, w.expr = x.selectors, w.expr[":"] = w.expr.pseudos, w.uniqueSort = w.unique = x.uniqueSort, w.text = x.getText, w.isXMLDoc = x.isXML, w.contains = x.contains, w.escapeSelector = x.escape;

  var T = function (e, t, n) {
    for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;) if (1 === e.nodeType) {
      if (i && w(e).is(n)) break;
      r.push(e);
    }

    return r;
  },
      C = function (e, t) {
    for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);

    return n;
  },
      O = w.expr.match.needsContext;

  function S(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }

  var j = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

  function A(e, t, n) {
    return p(t) ? w.grep(e, function (e, r) {
      return !!t.call(e, r, e) !== n;
    }) : t.nodeType ? w.grep(e, function (e) {
      return e === t !== n;
    }) : "string" != typeof t ? w.grep(e, function (e) {
      return s.call(t, e) > -1 !== n;
    }) : w.filter(t, e, n);
  }

  w.filter = function (e, t, n) {
    var r = t[0];
    return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? w.find.matchesSelector(r, e) ? [r] : [] : w.find.matches(e, w.grep(t, function (e) {
      return 1 === e.nodeType;
    }));
  }, w.fn.extend({
    find: function (e) {
      var t,
          n,
          r = this.length,
          i = this;
      if ("string" != typeof e) return this.pushStack(w(e).filter(function () {
        for (t = 0; t < r; t++) if (w.contains(i[t], this)) return !0;
      }));

      for (n = this.pushStack([]), t = 0; t < r; t++) w.find(e, i[t], n);

      return r > 1 ? w.uniqueSort(n) : n;
    },
    filter: function (e) {
      return this.pushStack(A(this, e || [], !1));
    },
    not: function (e) {
      return this.pushStack(A(this, e || [], !0));
    },
    is: function (e) {
      return !!A(this, "string" == typeof e && O.test(e) ? w(e) : e || [], !1).length;
    }
  });
  var k,
      D = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  (w.fn.init = function (e, t, n) {
    var r, i;
    if (!e) return this;

    if (n = n || k, "string" == typeof e) {
      if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : D.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);

      if (r[1]) {
        if (w.merge(this, w.parseHTML(r[1], (t = t instanceof w ? t[0] : t) && t.nodeType ? t.ownerDocument || t : v, !0)), j.test(r[1]) && w.isPlainObject(t)) for (r in t) p(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
        return this;
      }

      return (i = v.getElementById(r[2])) && (this[0] = i, this.length = 1), this;
    }

    return e.nodeType ? (this[0] = e, this.length = 1, this) : p(e) ? void 0 !== n.ready ? n.ready(e) : e(w) : w.makeArray(e, this);
  }).prototype = w.fn, k = w(v);
  var P = /^(?:parents|prev(?:Until|All))/,
      N = {
    children: !0,
    contents: !0,
    next: !0,
    prev: !0
  };

  function L(e, t) {
    for (; (e = e[t]) && 1 !== e.nodeType;);

    return e;
  }

  w.fn.extend({
    has: function (e) {
      var t = w(e, this),
          n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (w.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      var n,
          r = 0,
          i = this.length,
          o = [],
          a = "string" != typeof e && w(e);
      if (!O.test(e)) for (; r < i; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && w.find.matchesSelector(n, e))) {
        o.push(n);
        break;
      }
      return this.pushStack(o.length > 1 ? w.uniqueSort(o) : o);
    },
    index: function (e) {
      return e ? "string" == typeof e ? s.call(w(e), this[0]) : s.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    },
    add: function (e, t) {
      return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    }
  }), w.each({
    parent: function (e) {
      var t = e.parentNode;
      return t && 11 !== t.nodeType ? t : null;
    },
    parents: function (e) {
      return T(e, "parentNode");
    },
    parentsUntil: function (e, t, n) {
      return T(e, "parentNode", n);
    },
    next: function (e) {
      return L(e, "nextSibling");
    },
    prev: function (e) {
      return L(e, "previousSibling");
    },
    nextAll: function (e) {
      return T(e, "nextSibling");
    },
    prevAll: function (e) {
      return T(e, "previousSibling");
    },
    nextUntil: function (e, t, n) {
      return T(e, "nextSibling", n);
    },
    prevUntil: function (e, t, n) {
      return T(e, "previousSibling", n);
    },
    siblings: function (e) {
      return C((e.parentNode || {}).firstChild, e);
    },
    children: function (e) {
      return C(e.firstChild);
    },
    contents: function (e) {
      return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (S(e, "template") && (e = e.content || e), w.merge([], e.childNodes));
    }
  }, function (e, t) {
    w.fn[e] = function (n, r) {
      var i = w.map(this, t, n);
      return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = w.filter(r, i)), this.length > 1 && (N[e] || w.uniqueSort(i), P.test(e) && i.reverse()), this.pushStack(i);
    };
  });
  var I = /[^\x20\t\r\n\f]+/g;

  function R(e) {
    return e;
  }

  function M(e) {
    throw e;
  }

  function H(e, t, n, r) {
    var i;

    try {
      e && p(i = e.promise) ? i.call(e).done(t).fail(n) : e && p(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }

  w.Callbacks = function (e) {
    e = "string" == typeof e ? function (e) {
      var t = {};
      return w.each(e.match(I) || [], function (e, n) {
        t[n] = !0;
      }), t;
    }(e) : w.extend({}, e);

    var t,
        n,
        r,
        i,
        o = [],
        a = [],
        s = -1,
        l = function () {
      for (i = i || e.once, r = t = !0; a.length; s = -1) for (n = a.shift(); ++s < o.length;) !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && (s = o.length, n = !1);

      e.memory || (n = !1), t = !1, i && (o = n ? [] : "");
    },
        u = {
      add: function () {
        return o && (n && !t && (s = o.length - 1, a.push(n)), function t(n) {
          w.each(n, function (n, r) {
            p(r) ? e.unique && u.has(r) || o.push(r) : r && r.length && "string" !== _(r) && t(r);
          });
        }(arguments), n && !t && l()), this;
      },
      remove: function () {
        return w.each(arguments, function (e, t) {
          for (var n; (n = w.inArray(t, o, n)) > -1;) o.splice(n, 1), n <= s && s--;
        }), this;
      },
      has: function (e) {
        return e ? w.inArray(e, o) > -1 : o.length > 0;
      },
      empty: function () {
        return o && (o = []), this;
      },
      disable: function () {
        return i = a = [], o = n = "", this;
      },
      disabled: function () {
        return !o;
      },
      lock: function () {
        return i = a = [], n || t || (o = n = ""), this;
      },
      locked: function () {
        return !!i;
      },
      fireWith: function (e, n) {
        return i || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || l()), this;
      },
      fire: function () {
        return u.fireWith(this, arguments), this;
      },
      fired: function () {
        return !!r;
      }
    };

    return u;
  }, w.extend({
    Deferred: function (t) {
      var n = [["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2], ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"]],
          r = "pending",
          i = {
        state: function () {
          return r;
        },
        always: function () {
          return o.done(arguments).fail(arguments), this;
        },
        catch: function (e) {
          return i.then(null, e);
        },
        pipe: function () {
          var e = arguments;
          return w.Deferred(function (t) {
            w.each(n, function (n, r) {
              var i = p(e[r[4]]) && e[r[4]];
              o[r[1]](function () {
                var e = i && i.apply(this, arguments);
                e && p(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments);
              });
            }), e = null;
          }).promise();
        },
        then: function (t, r, i) {
          var o = 0;

          function a(t, n, r, i) {
            return function () {
              var s = this,
                  l = arguments,
                  u = function () {
                var e, u;

                if (!(t < o)) {
                  if ((e = r.apply(s, l)) === n.promise()) throw new TypeError("Thenable self-resolution");
                  p(u = e && ("object" == typeof e || "function" == typeof e) && e.then) ? i ? u.call(e, a(o, n, R, i), a(o, n, M, i)) : (o++, u.call(e, a(o, n, R, i), a(o, n, M, i), a(o, n, R, n.notifyWith))) : (r !== R && (s = void 0, l = [e]), (i || n.resolveWith)(s, l));
                }
              },
                  c = i ? u : function () {
                try {
                  u();
                } catch (e) {
                  w.Deferred.exceptionHook && w.Deferred.exceptionHook(e, c.stackTrace), t + 1 >= o && (r !== M && (s = void 0, l = [e]), n.rejectWith(s, l));
                }
              };

              t ? c() : (w.Deferred.getStackHook && (c.stackTrace = w.Deferred.getStackHook()), e.setTimeout(c));
            };
          }

          return w.Deferred(function (e) {
            n[0][3].add(a(0, e, p(i) ? i : R, e.notifyWith)), n[1][3].add(a(0, e, p(t) ? t : R)), n[2][3].add(a(0, e, p(r) ? r : M));
          }).promise();
        },
        promise: function (e) {
          return null != e ? w.extend(e, i) : i;
        }
      },
          o = {};
      return w.each(n, function (e, t) {
        var a = t[2],
            s = t[5];
        i[t[1]] = a.add, s && a.add(function () {
          r = s;
        }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), a.add(t[3].fire), o[t[0]] = function () {
          return o[t[0] + "With"](this === o ? void 0 : this, arguments), this;
        }, o[t[0] + "With"] = a.fireWith;
      }), i.promise(o), t && t.call(o, o), o;
    },
    when: function (e) {
      var t = arguments.length,
          n = t,
          r = Array(n),
          o = i.call(arguments),
          a = w.Deferred(),
          s = function (e) {
        return function (n) {
          r[e] = this, o[e] = arguments.length > 1 ? i.call(arguments) : n, --t || a.resolveWith(r, o);
        };
      };

      if (t <= 1 && (H(e, a.done(s(n)).resolve, a.reject, !t), "pending" === a.state() || p(o[n] && o[n].then))) return a.then();

      for (; n--;) H(o[n], s(n), a.reject);

      return a.promise();
    }
  });
  var q = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  w.Deferred.exceptionHook = function (t, n) {
    e.console && e.console.warn && t && q.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
  }, w.readyException = function (t) {
    e.setTimeout(function () {
      throw t;
    });
  };
  var B = w.Deferred();

  function F() {
    v.removeEventListener("DOMContentLoaded", F), e.removeEventListener("load", F), w.ready();
  }

  w.fn.ready = function (e) {
    return B.then(e).catch(function (e) {
      w.readyException(e);
    }), this;
  }, w.extend({
    isReady: !1,
    readyWait: 1,
    ready: function (e) {
      (!0 === e ? --w.readyWait : w.isReady) || (w.isReady = !0, !0 !== e && --w.readyWait > 0 || B.resolveWith(v, [w]));
    }
  }), w.ready.then = B.then, "complete" === v.readyState || "loading" !== v.readyState && !v.documentElement.doScroll ? e.setTimeout(w.ready) : (v.addEventListener("DOMContentLoaded", F), e.addEventListener("load", F));

  var X = function (e, t, n, r, i, o, a) {
    var s = 0,
        l = e.length,
        u = null == n;
    if ("object" === _(n)) for (s in i = !0, n) X(e, t, s, n[s], !0, o, a);else if (void 0 !== r && (i = !0, p(r) || (a = !0), u && (a ? (t.call(e, r), t = null) : (u = t, t = function (e, t, n) {
      return u.call(w(e), n);
    })), t)) for (; s < l; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
    return i ? e : u ? t.call(e) : l ? t(e[0], n) : o;
  },
      W = /^-ms-/,
      z = /-([a-z])/g;

  function G(e, t) {
    return t.toUpperCase();
  }

  function U(e) {
    return e.replace(W, "ms-").replace(z, G);
  }

  var $ = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };

  function V() {
    this.expando = w.expando + V.uid++;
  }

  V.uid = 1, V.prototype = {
    cache: function (e) {
      var t = e[this.expando];
      return t || (t = {}, $(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
        value: t,
        configurable: !0
      }))), t;
    },
    set: function (e, t, n) {
      var r,
          i = this.cache(e);
      if ("string" == typeof t) i[U(t)] = n;else for (r in t) i[U(r)] = t[r];
      return i;
    },
    get: function (e, t) {
      return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][U(t)];
    },
    access: function (e, t, n) {
      return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
    },
    remove: function (e, t) {
      var n,
          r = e[this.expando];

      if (void 0 !== r) {
        if (void 0 !== t) {
          n = (t = Array.isArray(t) ? t.map(U) : (t = U(t)) in r ? [t] : t.match(I) || []).length;

          for (; n--;) delete r[t[n]];
        }

        (void 0 === t || w.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
      }
    },
    hasData: function (e) {
      var t = e[this.expando];
      return void 0 !== t && !w.isEmptyObject(t);
    }
  };
  var Q = new V(),
      Y = new V(),
      K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      J = /[A-Z]/g;

  function Z(e, t, n) {
    var r;
    if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(J, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
      try {
        n = function (e) {
          return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : K.test(e) ? JSON.parse(e) : e);
        }(n);
      } catch (i) {}

      Y.set(e, t, n);
    } else n = void 0;
    return n;
  }

  w.extend({
    hasData: function (e) {
      return Y.hasData(e) || Q.hasData(e);
    },
    data: function (e, t, n) {
      return Y.access(e, t, n);
    },
    removeData: function (e, t) {
      Y.remove(e, t);
    },
    _data: function (e, t, n) {
      return Q.access(e, t, n);
    },
    _removeData: function (e, t) {
      Q.remove(e, t);
    }
  }), w.fn.extend({
    data: function (e, t) {
      var n,
          r,
          i,
          o = this[0],
          a = o && o.attributes;

      if (void 0 === e) {
        if (this.length && (i = Y.get(o), 1 === o.nodeType && !Q.get(o, "hasDataAttrs"))) {
          for (n = a.length; n--;) a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = U(r.slice(5)), Z(o, r, i[r]));

          Q.set(o, "hasDataAttrs", !0);
        }

        return i;
      }

      return "object" == typeof e ? this.each(function () {
        Y.set(this, e);
      }) : X(this, function (t) {
        var n;
        if (o && void 0 === t) return void 0 !== (n = Y.get(o, e)) || void 0 !== (n = Z(o, e)) ? n : void 0;
        this.each(function () {
          Y.set(this, e, t);
        });
      }, null, t, arguments.length > 1, null, !0);
    },
    removeData: function (e) {
      return this.each(function () {
        Y.remove(this, e);
      });
    }
  }), w.extend({
    queue: function (e, t, n) {
      var r;
      if (e) return r = Q.get(e, t = (t || "fx") + "queue"), n && (!r || Array.isArray(n) ? r = Q.access(e, t, w.makeArray(n)) : r.push(n)), r || [];
    },
    dequeue: function (e, t) {
      var n = w.queue(e, t = t || "fx"),
          r = n.length,
          i = n.shift(),
          o = w._queueHooks(e, t);

      "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function () {
        w.dequeue(e, t);
      }, o)), !r && o && o.empty.fire();
    },
    _queueHooks: function (e, t) {
      var n = t + "queueHooks";
      return Q.get(e, n) || Q.access(e, n, {
        empty: w.Callbacks("once memory").add(function () {
          Q.remove(e, [t + "queue", n]);
        })
      });
    }
  }), w.fn.extend({
    queue: function (e, t) {
      var n = 2;
      return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? w.queue(this[0], e) : void 0 === t ? this : this.each(function () {
        var n = w.queue(this, e, t);
        w._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e);
      });
    },
    dequeue: function (e) {
      return this.each(function () {
        w.dequeue(this, e);
      });
    },
    clearQueue: function (e) {
      return this.queue(e || "fx", []);
    },
    promise: function (e, t) {
      var n,
          r = 1,
          i = w.Deferred(),
          o = this,
          a = this.length,
          s = function () {
        --r || i.resolveWith(o, [o]);
      };

      for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) (n = Q.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));

      return s(), i.promise(t);
    }
  });

  var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
      ne = ["Top", "Right", "Bottom", "Left"],
      re = v.documentElement,
      ie = function (e) {
    return w.contains(e.ownerDocument, e);
  },
      oe = {
    composed: !0
  };

  re.getRootNode && (ie = function (e) {
    return w.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument;
  });

  var ae = function (e, t) {
    return "none" === (e = t || e).style.display || "" === e.style.display && ie(e) && "none" === w.css(e, "display");
  };

  function se(e, t, n, r) {
    var i,
        o,
        a = 20,
        s = r ? function () {
      return r.cur();
    } : function () {
      return w.css(e, t, "");
    },
        l = s(),
        u = n && n[3] || (w.cssNumber[t] ? "" : "px"),
        c = e.nodeType && (w.cssNumber[t] || "px" !== u && +l) && te.exec(w.css(e, t));

    if (c && c[3] !== u) {
      for (u = u || c[3], c = +(l /= 2) || 1; a--;) w.style(e, t, c + u), (1 - o) * (1 - (o = s() / l || .5)) <= 0 && (a = 0), c /= o;

      w.style(e, t, (c *= 2) + u), n = n || [];
    }

    return n && (c = +c || +l || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = u, r.start = c, r.end = i)), i;
  }

  var le = {};

  function ue(e) {
    var t,
        n = e.ownerDocument,
        r = e.nodeName,
        i = le[r];
    return i || (t = n.body.appendChild(n.createElement(r)), i = w.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), le[r] = i, i);
  }

  function ce(e, t) {
    for (var n, r, i = [], o = 0, a = e.length; o < a; o++) (r = e[o]).style && (n = r.style.display, t ? ("none" === n && (i[o] = Q.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && ae(r) && (i[o] = ue(r))) : "none" !== n && (i[o] = "none", Q.set(r, "display", n)));

    for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);

    return e;
  }

  w.fn.extend({
    show: function () {
      return ce(this, !0);
    },
    hide: function () {
      return ce(this);
    },
    toggle: function (e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
        ae(this) ? w(this).show() : w(this).hide();
      });
    }
  });
  var fe,
      de,
      he = /^(?:checkbox|radio)$/i,
      pe = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
      ge = /^$|^module$|\/(?:java|ecma)script/i;
  fe = v.createDocumentFragment().appendChild(v.createElement("div")), (de = v.createElement("input")).setAttribute("type", "radio"), de.setAttribute("checked", "checked"), de.setAttribute("name", "t"), fe.appendChild(de), h.checkClone = fe.cloneNode(!0).cloneNode(!0).lastChild.checked, fe.innerHTML = "<textarea>x</textarea>", h.noCloneChecked = !!fe.cloneNode(!0).lastChild.defaultValue, fe.innerHTML = "<option></option>", h.option = !!fe.lastChild;
  var ve = {
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""]
  };

  function me(e, t) {
    var n;
    return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && S(e, t) ? w.merge([e], n) : n;
  }

  function ye(e, t) {
    for (var n = 0, r = e.length; n < r; n++) Q.set(e[n], "globalEval", !t || Q.get(t[n], "globalEval"));
  }

  ve.tbody = ve.tfoot = ve.colgroup = ve.caption = ve.thead, ve.th = ve.td, h.option || (ve.optgroup = ve.option = [1, "<select multiple='multiple'>", "</select>"]);
  var _e = /<|&#?\w+;/;

  function be(e, t, n, r, i) {
    for (var o, a, s, l, u, c, f = t.createDocumentFragment(), d = [], h = 0, p = e.length; h < p; h++) if ((o = e[h]) || 0 === o) if ("object" === _(o)) w.merge(d, o.nodeType ? [o] : o);else if (_e.test(o)) {
      for (a = a || f.appendChild(t.createElement("div")), s = (pe.exec(o) || ["", ""])[1].toLowerCase(), a.innerHTML = (l = ve[s] || ve._default)[1] + w.htmlPrefilter(o) + l[2], c = l[0]; c--;) a = a.lastChild;

      w.merge(d, a.childNodes), (a = f.firstChild).textContent = "";
    } else d.push(t.createTextNode(o));

    for (f.textContent = "", h = 0; o = d[h++];) if (r && w.inArray(o, r) > -1) i && i.push(o);else if (u = ie(o), a = me(f.appendChild(o), "script"), u && ye(a), n) for (c = 0; o = a[c++];) ge.test(o.type || "") && n.push(o);

    return f;
  }

  var we = /^key/,
      Ee = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      xe = /^([^.]*)(?:\.(.+)|)/;

  function Te() {
    return !0;
  }

  function Ce() {
    return !1;
  }

  function Oe(e, t) {
    return e === function () {
      try {
        return v.activeElement;
      } catch (e) {}
    }() == ("focus" === t);
  }

  function Se(e, t, n, r, i, o) {
    var a, s;

    if ("object" == typeof t) {
      for (s in "string" != typeof n && (r = r || n, n = void 0), t) Se(e, s, n, r, t[s], o);

      return e;
    }

    if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Ce;else if (!i) return e;
    return 1 === o && (a = i, (i = function (e) {
      return w().off(e), a.apply(this, arguments);
    }).guid = a.guid || (a.guid = w.guid++)), e.each(function () {
      w.event.add(this, t, i, r, n);
    });
  }

  function je(e, t, n) {
    n ? (Q.set(e, t, !1), w.event.add(e, t, {
      namespace: !1,
      handler: function (e) {
        var r,
            o,
            a = Q.get(this, t);

        if (1 & e.isTrigger && this[t]) {
          if (a.length) (w.event.special[t] || {}).delegateType && e.stopPropagation();else if (a = i.call(arguments), Q.set(this, t, a), r = n(this, t), this[t](), a !== (o = Q.get(this, t)) || r ? Q.set(this, t, !1) : o = {}, a !== o) return e.stopImmediatePropagation(), e.preventDefault(), o.value;
        } else a.length && (Q.set(this, t, {
          value: w.event.trigger(w.extend(a[0], w.Event.prototype), a.slice(1), this)
        }), e.stopImmediatePropagation());
      }
    })) : void 0 === Q.get(e, t) && w.event.add(e, t, Te);
  }

  w.event = {
    global: {},
    add: function (e, t, n, r, i) {
      var o,
          a,
          s,
          l,
          u,
          c,
          f,
          d,
          h,
          p,
          g,
          v = Q.get(e);
      if ($(e)) for (n.handler && (n = (o = n).handler, i = o.selector), i && w.find.matchesSelector(re, i), n.guid || (n.guid = w.guid++), (l = v.events) || (l = v.events = Object.create(null)), (a = v.handle) || (a = v.handle = function (t) {
        return void 0 !== w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0;
      }), u = (t = (t || "").match(I) || [""]).length; u--;) h = g = (s = xe.exec(t[u]) || [])[1], p = (s[2] || "").split(".").sort(), h && (f = w.event.special[h] || {}, f = w.event.special[h = (i ? f.delegateType : f.bindType) || h] || {}, c = w.extend({
        type: h,
        origType: g,
        data: r,
        handler: n,
        guid: n.guid,
        selector: i,
        needsContext: i && w.expr.match.needsContext.test(i),
        namespace: p.join(".")
      }, o), (d = l[h]) || ((d = l[h] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, p, a) || e.addEventListener && e.addEventListener(h, a)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? d.splice(d.delegateCount++, 0, c) : d.push(c), w.event.global[h] = !0);
    },
    remove: function (e, t, n, r, i) {
      var o,
          a,
          s,
          l,
          u,
          c,
          f,
          d,
          h,
          p,
          g,
          v = Q.hasData(e) && Q.get(e);

      if (v && (l = v.events)) {
        for (u = (t = (t || "").match(I) || [""]).length; u--;) if (h = g = (s = xe.exec(t[u]) || [])[1], p = (s[2] || "").split(".").sort(), h) {
          for (f = w.event.special[h] || {}, d = l[h = (r ? f.delegateType : f.bindType) || h] || [], s = s[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = d.length; o--;) c = d[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (d.splice(o, 1), c.selector && d.delegateCount--, f.remove && f.remove.call(e, c));

          a && !d.length && (f.teardown && !1 !== f.teardown.call(e, p, v.handle) || w.removeEvent(e, h, v.handle), delete l[h]);
        } else for (h in l) w.event.remove(e, h + t[u], n, r, !0);

        w.isEmptyObject(l) && Q.remove(e, "handle events");
      }
    },
    dispatch: function (e) {
      var t,
          n,
          r,
          i,
          o,
          a,
          s = new Array(arguments.length),
          l = w.event.fix(e),
          u = (Q.get(this, "events") || Object.create(null))[l.type] || [],
          c = w.event.special[l.type] || {};

      for (s[0] = l, t = 1; t < arguments.length; t++) s[t] = arguments[t];

      if (l.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, l)) {
        for (a = w.event.handlers.call(this, l, u), t = 0; (i = a[t++]) && !l.isPropagationStopped();) for (l.currentTarget = i.elem, n = 0; (o = i.handlers[n++]) && !l.isImmediatePropagationStopped();) l.rnamespace && !1 !== o.namespace && !l.rnamespace.test(o.namespace) || (l.handleObj = o, l.data = o.data, void 0 !== (r = ((w.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (l.result = r) && (l.preventDefault(), l.stopPropagation()));

        return c.postDispatch && c.postDispatch.call(this, l), l.result;
      }
    },
    handlers: function (e, t) {
      var n,
          r,
          i,
          o,
          a,
          s = [],
          l = t.delegateCount,
          u = e.target;
      if (l && u.nodeType && !("click" === e.type && e.button >= 1)) for (; u !== this; u = u.parentNode || this) if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
        for (o = [], a = {}, n = 0; n < l; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? w(i, this).index(u) > -1 : w.find(i, this, null, [u]).length), a[i] && o.push(r);

        o.length && s.push({
          elem: u,
          handlers: o
        });
      }
      return u = this, l < t.length && s.push({
        elem: u,
        handlers: t.slice(l)
      }), s;
    },
    addProp: function (e, t) {
      Object.defineProperty(w.Event.prototype, e, {
        enumerable: !0,
        configurable: !0,
        get: p(t) ? function () {
          if (this.originalEvent) return t(this.originalEvent);
        } : function () {
          if (this.originalEvent) return this.originalEvent[e];
        },
        set: function (t) {
          Object.defineProperty(this, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: t
          });
        }
      });
    },
    fix: function (e) {
      return e[w.expando] ? e : new w.Event(e);
    },
    special: {
      load: {
        noBubble: !0
      },
      click: {
        setup: function (e) {
          var t = this || e;
          return he.test(t.type) && t.click && S(t, "input") && je(t, "click", Te), !1;
        },
        trigger: function (e) {
          var t = this || e;
          return he.test(t.type) && t.click && S(t, "input") && je(t, "click"), !0;
        },
        _default: function (e) {
          var t = e.target;
          return he.test(t.type) && t.click && S(t, "input") && Q.get(t, "click") || S(t, "a");
        }
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
        }
      }
    }
  }, w.removeEvent = function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n);
  }, w.Event = function (e, t) {
    if (!(this instanceof w.Event)) return new w.Event(e, t);
    e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Te : Ce, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && w.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[w.expando] = !0;
  }, w.Event.prototype = {
    constructor: w.Event,
    isDefaultPrevented: Ce,
    isPropagationStopped: Ce,
    isImmediatePropagationStopped: Ce,
    isSimulated: !1,
    preventDefault: function () {
      var e = this.originalEvent;
      this.isDefaultPrevented = Te, e && !this.isSimulated && e.preventDefault();
    },
    stopPropagation: function () {
      var e = this.originalEvent;
      this.isPropagationStopped = Te, e && !this.isSimulated && e.stopPropagation();
    },
    stopImmediatePropagation: function () {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = Te, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
    }
  }, w.each({
    altKey: !0,
    bubbles: !0,
    cancelable: !0,
    changedTouches: !0,
    ctrlKey: !0,
    detail: !0,
    eventPhase: !0,
    metaKey: !0,
    pageX: !0,
    pageY: !0,
    shiftKey: !0,
    view: !0,
    char: !0,
    code: !0,
    charCode: !0,
    key: !0,
    keyCode: !0,
    button: !0,
    buttons: !0,
    clientX: !0,
    clientY: !0,
    offsetX: !0,
    offsetY: !0,
    pointerId: !0,
    pointerType: !0,
    screenX: !0,
    screenY: !0,
    targetTouches: !0,
    toElement: !0,
    touches: !0,
    which: function (e) {
      var t = e.button;
      return null == e.which && we.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ee.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which;
    }
  }, w.event.addProp), w.each({
    focus: "focusin",
    blur: "focusout"
  }, function (e, t) {
    w.event.special[e] = {
      setup: function () {
        return je(this, e, Oe), !1;
      },
      trigger: function () {
        return je(this, e), !0;
      },
      delegateType: t
    };
  }), w.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function (e, t) {
    w.event.special[e] = {
      delegateType: t,
      bindType: t,
      handle: function (e) {
        var n,
            r = this,
            i = e.relatedTarget,
            o = e.handleObj;
        return i && (i === r || w.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n;
      }
    };
  }), w.fn.extend({
    on: function (e, t, n, r) {
      return Se(this, e, t, n, r);
    },
    one: function (e, t, n, r) {
      return Se(this, e, t, n, r, 1);
    },
    off: function (e, t, n) {
      var r, i;
      if (e && e.preventDefault && e.handleObj) return r = e.handleObj, w(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;

      if ("object" == typeof e) {
        for (i in e) this.off(i, t, e[i]);

        return this;
      }

      return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Ce), this.each(function () {
        w.event.remove(this, e, n, t);
      });
    }
  });
  var Ae = /<script|<style|<link/i,
      ke = /checked\s*(?:[^=]|=\s*.checked.)/i,
      De = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

  function Pe(e, t) {
    return S(e, "table") && S(11 !== t.nodeType ? t : t.firstChild, "tr") && w(e).children("tbody")[0] || e;
  }

  function Ne(e) {
    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
  }

  function Le(e) {
    return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e;
  }

  function Ie(e, t) {
    var n, r, i, o, a, s;

    if (1 === t.nodeType) {
      if (Q.hasData(e) && (s = Q.get(e).events)) for (i in Q.remove(t, "handle events"), s) for (n = 0, r = s[i].length; n < r; n++) w.event.add(t, i, s[i][n]);
      Y.hasData(e) && (o = Y.access(e), a = w.extend({}, o), Y.set(t, a));
    }
  }

  function Re(e, t) {
    var n = t.nodeName.toLowerCase();
    "input" === n && he.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue);
  }

  function Me(e, t, n, r) {
    t = o(t);
    var i,
        a,
        s,
        l,
        u,
        c,
        f = 0,
        d = e.length,
        g = d - 1,
        v = t[0],
        m = p(v);
    if (m || d > 1 && "string" == typeof v && !h.checkClone && ke.test(v)) return e.each(function (i) {
      var o = e.eq(i);
      m && (t[0] = v.call(this, i, o.html())), Me(o, t, n, r);
    });

    if (d && (a = (i = be(t, e[0].ownerDocument, !1, e, r)).firstChild, 1 === i.childNodes.length && (i = a), a || r)) {
      for (l = (s = w.map(me(i, "script"), Ne)).length; f < d; f++) u = i, f !== g && (u = w.clone(u, !0, !0), l && w.merge(s, me(u, "script"))), n.call(e[f], u, f);

      if (l) for (c = s[s.length - 1].ownerDocument, w.map(s, Le), f = 0; f < l; f++) ge.test((u = s[f]).type || "") && !Q.access(u, "globalEval") && w.contains(c, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? w._evalUrl && !u.noModule && w._evalUrl(u.src, {
        nonce: u.nonce || u.getAttribute("nonce")
      }, c) : y(u.textContent.replace(De, ""), u, c));
    }

    return e;
  }

  function He(e, t, n) {
    for (var r, i = t ? w.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || w.cleanData(me(r)), r.parentNode && (n && ie(r) && ye(me(r, "script")), r.parentNode.removeChild(r));

    return e;
  }

  w.extend({
    htmlPrefilter: function (e) {
      return e;
    },
    clone: function (e, t, n) {
      var r,
          i,
          o,
          a,
          s = e.cloneNode(!0),
          l = ie(e);
      if (!(h.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || w.isXMLDoc(e))) for (a = me(s), r = 0, i = (o = me(e)).length; r < i; r++) Re(o[r], a[r]);
      if (t) if (n) for (o = o || me(e), a = a || me(s), r = 0, i = o.length; r < i; r++) Ie(o[r], a[r]);else Ie(e, s);
      return (a = me(s, "script")).length > 0 && ye(a, !l && me(e, "script")), s;
    },
    cleanData: function (e) {
      for (var t, n, r, i = w.event.special, o = 0; void 0 !== (n = e[o]); o++) if ($(n)) {
        if (t = n[Q.expando]) {
          if (t.events) for (r in t.events) i[r] ? w.event.remove(n, r) : w.removeEvent(n, r, t.handle);
          n[Q.expando] = void 0;
        }

        n[Y.expando] && (n[Y.expando] = void 0);
      }
    }
  }), w.fn.extend({
    detach: function (e) {
      return He(this, e, !0);
    },
    remove: function (e) {
      return He(this, e);
    },
    text: function (e) {
      return X(this, function (e) {
        return void 0 === e ? w.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
        });
      }, null, e, arguments.length);
    },
    append: function () {
      return Me(this, arguments, function (e) {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Pe(this, e).appendChild(e);
      });
    },
    prepend: function () {
      return Me(this, arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = Pe(this, e);
          t.insertBefore(e, t.firstChild);
        }
      });
    },
    before: function () {
      return Me(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this);
      });
    },
    after: function () {
      return Me(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
      });
    },
    empty: function () {
      for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (w.cleanData(me(e, !1)), e.textContent = "");

      return this;
    },
    clone: function (e, t) {
      return e = null != e && e, t = null == t ? e : t, this.map(function () {
        return w.clone(this, e, t);
      });
    },
    html: function (e) {
      return X(this, function (e) {
        var t = this[0] || {},
            n = 0,
            r = this.length;
        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;

        if ("string" == typeof e && !Ae.test(e) && !ve[(pe.exec(e) || ["", ""])[1].toLowerCase()]) {
          e = w.htmlPrefilter(e);

          try {
            for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (w.cleanData(me(t, !1)), t.innerHTML = e);

            t = 0;
          } catch (i) {}
        }

        t && this.empty().append(e);
      }, null, e, arguments.length);
    },
    replaceWith: function () {
      var e = [];
      return Me(this, arguments, function (t) {
        var n = this.parentNode;
        w.inArray(this, e) < 0 && (w.cleanData(me(this)), n && n.replaceChild(t, this));
      }, e);
    }
  }), w.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (e, t) {
    w.fn[e] = function (e) {
      for (var n, r = [], i = w(e), o = i.length - 1, s = 0; s <= o; s++) n = s === o ? this : this.clone(!0), w(i[s])[t](n), a.apply(r, n.get());

      return this.pushStack(r);
    };
  });

  var qe = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
      Be = function (t) {
    var n = t.ownerDocument.defaultView;
    return n && n.opener || (n = e), n.getComputedStyle(t);
  },
      Fe = function (e, t, n) {
    var r,
        i,
        o = {};

    for (i in t) o[i] = e.style[i], e.style[i] = t[i];

    for (i in r = n.call(e), t) e.style[i] = o[i];

    return r;
  },
      Xe = new RegExp(ne.join("|"), "i");

  function We(e, t, n) {
    var r,
        i,
        o,
        a,
        s = e.style;
    return (n = n || Be(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || ie(e) || (a = w.style(e, t)), !h.pixelBoxStyles() && qe.test(a) && Xe.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a;
  }

  function ze(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      }
    };
  }

  !function () {
    function t() {
      if (c) {
        u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", re.appendChild(u).appendChild(c);
        var t = e.getComputedStyle(c);
        r = "1%" !== t.top, l = 12 === n(t.marginLeft), c.style.right = "60%", a = 36 === n(t.right), i = 36 === n(t.width), c.style.position = "absolute", o = 12 === n(c.offsetWidth / 3), re.removeChild(u), c = null;
      }
    }

    function n(e) {
      return Math.round(parseFloat(e));
    }

    var r,
        i,
        o,
        a,
        s,
        l,
        u = v.createElement("div"),
        c = v.createElement("div");
    c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", h.clearCloneStyle = "content-box" === c.style.backgroundClip, w.extend(h, {
      boxSizingReliable: function () {
        return t(), i;
      },
      pixelBoxStyles: function () {
        return t(), a;
      },
      pixelPosition: function () {
        return t(), r;
      },
      reliableMarginLeft: function () {
        return t(), l;
      },
      scrollboxSize: function () {
        return t(), o;
      },
      reliableTrDimensions: function () {
        var t, n, r, i;
        return null == s && (t = v.createElement("table"), n = v.createElement("tr"), r = v.createElement("div"), t.style.cssText = "position:absolute;left:-11111px", n.style.height = "1px", r.style.height = "9px", re.appendChild(t).appendChild(n).appendChild(r), i = e.getComputedStyle(n), s = parseInt(i.height) > 3, re.removeChild(t)), s;
      }
    }));
  }();
  var Ge = ["Webkit", "Moz", "ms"],
      Ue = v.createElement("div").style,
      $e = {};

  function Ve(e) {
    return w.cssProps[e] || $e[e] || (e in Ue ? e : $e[e] = function (e) {
      for (var t = e[0].toUpperCase() + e.slice(1), n = Ge.length; n--;) if ((e = Ge[n] + t) in Ue) return e;
    }(e) || e);
  }

  var Qe = /^(none|table(?!-c[ea]).+)/,
      Ye = /^--/,
      Ke = {
    position: "absolute",
    visibility: "hidden",
    display: "block"
  },
      Je = {
    letterSpacing: "0",
    fontWeight: "400"
  };

  function Ze(e, t, n) {
    var r = te.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }

  function et(e, t, n, r, i, o) {
    var a = "width" === t ? 1 : 0,
        s = 0,
        l = 0;
    if (n === (r ? "border" : "content")) return 0;

    for (; a < 4; a += 2) "margin" === n && (l += w.css(e, n + ne[a], !0, i)), r ? ("content" === n && (l -= w.css(e, "padding" + ne[a], !0, i)), "margin" !== n && (l -= w.css(e, "border" + ne[a] + "Width", !0, i))) : (l += w.css(e, "padding" + ne[a], !0, i), "padding" !== n ? l += w.css(e, "border" + ne[a] + "Width", !0, i) : s += w.css(e, "border" + ne[a] + "Width", !0, i));

    return !r && o >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - l - s - .5)) || 0), l;
  }

  function tt(e, t, n) {
    var r = Be(e),
        i = (!h.boxSizingReliable() || n) && "border-box" === w.css(e, "boxSizing", !1, r),
        o = i,
        a = We(e, t, r),
        s = "offset" + t[0].toUpperCase() + t.slice(1);

    if (qe.test(a)) {
      if (!n) return a;
      a = "auto";
    }

    return (!h.boxSizingReliable() && i || !h.reliableTrDimensions() && S(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === w.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === w.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + et(e, t, n || (i ? "border" : "content"), o, r, a) + "px";
  }

  function nt(e, t, n, r, i) {
    return new nt.prototype.init(e, t, n, r, i);
  }

  w.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = We(e, "opacity");
            return "" === n ? "1" : n;
          }
        }
      }
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {},
    style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
            o,
            a,
            s = U(t),
            l = Ye.test(t),
            u = e.style;
        if (l || (t = Ve(s)), a = w.cssHooks[t] || w.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : u[t];
        "string" == (o = typeof n) && (i = te.exec(n)) && i[1] && (n = se(e, t, i), o = "number"), null != n && n == n && ("number" !== o || l || (n += i && i[3] || (w.cssNumber[s] ? "" : "px")), h.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (l ? u.setProperty(t, n) : u[t] = n));
      }
    },
    css: function (e, t, n, r) {
      var i,
          o,
          a,
          s = U(t);
      return Ye.test(t) || (t = Ve(s)), (a = w.cssHooks[t] || w.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = We(e, t, r)), "normal" === i && t in Je && (i = Je[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i;
    }
  }), w.each(["height", "width"], function (e, t) {
    w.cssHooks[t] = {
      get: function (e, n, r) {
        if (n) return !Qe.test(w.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? tt(e, t, r) : Fe(e, Ke, function () {
          return tt(e, t, r);
        });
      },
      set: function (e, n, r) {
        var i,
            o = Be(e),
            a = !h.scrollboxSize() && "absolute" === o.position,
            s = (a || r) && "border-box" === w.css(e, "boxSizing", !1, o),
            l = r ? et(e, t, r, s, o) : 0;
        return s && a && (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - et(e, t, "border", !1, o) - .5)), l && (i = te.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = w.css(e, t)), Ze(0, n, l);
      }
    };
  }), w.cssHooks.marginLeft = ze(h.reliableMarginLeft, function (e, t) {
    if (t) return (parseFloat(We(e, "marginLeft")) || e.getBoundingClientRect().left - Fe(e, {
      marginLeft: 0
    }, function () {
      return e.getBoundingClientRect().left;
    })) + "px";
  }), w.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function (e, t) {
    w.cssHooks[e + t] = {
      expand: function (n) {
        for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + ne[r] + t] = o[r] || o[r - 2] || o[0];

        return i;
      }
    }, "margin" !== e && (w.cssHooks[e + t].set = Ze);
  }), w.fn.extend({
    css: function (e, t) {
      return X(this, function (e, t, n) {
        var r,
            i,
            o = {},
            a = 0;

        if (Array.isArray(t)) {
          for (r = Be(e), i = t.length; a < i; a++) o[t[a]] = w.css(e, t[a], !1, r);

          return o;
        }

        return void 0 !== n ? w.style(e, t, n) : w.css(e, t);
      }, e, t, arguments.length > 1);
    }
  }), w.Tween = nt, (nt.prototype = {
    constructor: nt,
    init: function (e, t, n, r, i, o) {
      this.elem = e, this.prop = n, this.easing = i || w.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (w.cssNumber[n] ? "" : "px");
    },
    cur: function () {
      var e = nt.propHooks[this.prop];
      return e && e.get ? e.get(this) : nt.propHooks._default.get(this);
    },
    run: function (e) {
      var t,
          n = nt.propHooks[this.prop];
      return this.pos = t = this.options.duration ? w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : nt.propHooks._default.set(this), this;
    }
  }).init.prototype = nt.prototype, (nt.propHooks = {
    _default: {
      get: function (e) {
        var t;
        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = w.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
      },
      set: function (e) {
        w.fx.step[e.prop] ? w.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !w.cssHooks[e.prop] && null == e.elem.style[Ve(e.prop)] ? e.elem[e.prop] = e.now : w.style(e.elem, e.prop, e.now + e.unit);
      }
    }
  }).scrollTop = nt.propHooks.scrollLeft = {
    set: function (e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
    }
  }, w.easing = {
    linear: function (e) {
      return e;
    },
    swing: function (e) {
      return .5 - Math.cos(e * Math.PI) / 2;
    },
    _default: "swing"
  }, w.fx = nt.prototype.init, w.fx.step = {};
  var rt,
      it,
      ot = /^(?:toggle|show|hide)$/,
      at = /queueHooks$/;

  function st() {
    it && (!1 === v.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(st) : e.setTimeout(st, w.fx.interval), w.fx.tick());
  }

  function lt() {
    return e.setTimeout(function () {
      rt = void 0;
    }), rt = Date.now();
  }

  function ut(e, t) {
    var n,
        r = 0,
        i = {
      height: e
    };

    for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = ne[r])] = i["padding" + n] = e;

    return t && (i.opacity = i.width = e), i;
  }

  function ct(e, t, n) {
    for (var r, i = (ft.tweeners[t] || []).concat(ft.tweeners["*"]), o = 0, a = i.length; o < a; o++) if (r = i[o].call(n, t, e)) return r;
  }

  function ft(e, t, n) {
    var r,
        i,
        o = 0,
        a = ft.prefilters.length,
        s = w.Deferred().always(function () {
      delete l.elem;
    }),
        l = function () {
      if (i) return !1;

      for (var t = rt || lt(), n = Math.max(0, u.startTime + u.duration - t), r = 1 - (n / u.duration || 0), o = 0, a = u.tweens.length; o < a; o++) u.tweens[o].run(r);

      return s.notifyWith(e, [u, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [u, 1, 0]), s.resolveWith(e, [u]), !1);
    },
        u = s.promise({
      elem: e,
      props: w.extend({}, t),
      opts: w.extend(!0, {
        specialEasing: {},
        easing: w.easing._default
      }, n),
      originalProperties: t,
      originalOptions: n,
      startTime: rt || lt(),
      duration: n.duration,
      tweens: [],
      createTween: function (t, n) {
        var r = w.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
        return u.tweens.push(r), r;
      },
      stop: function (t) {
        var n = 0,
            r = t ? u.tweens.length : 0;
        if (i) return this;

        for (i = !0; n < r; n++) u.tweens[n].run(1);

        return t ? (s.notifyWith(e, [u, 1, 0]), s.resolveWith(e, [u, t])) : s.rejectWith(e, [u, t]), this;
      }
    }),
        c = u.props;

    for (function (e, t) {
      var n, r, i, o, a;

      for (n in e) if (i = t[r = U(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = w.cssHooks[r]) && ("expand" in a)) for (n in o = a.expand(o), delete e[r], o) (n in e) || (e[n] = o[n], t[n] = i);else t[r] = i;
    }(c, u.opts.specialEasing); o < a; o++) if (r = ft.prefilters[o].call(u, e, c, u.opts)) return p(r.stop) && (w._queueHooks(u.elem, u.opts.queue).stop = r.stop.bind(r)), r;

    return w.map(c, ct, u), p(u.opts.start) && u.opts.start.call(e, u), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always), w.fx.timer(w.extend(l, {
      elem: e,
      anim: u,
      queue: u.opts.queue
    })), u;
  }

  w.Animation = w.extend(ft, {
    tweeners: {
      "*": [function (e, t) {
        var n = this.createTween(e, t);
        return se(n.elem, e, te.exec(t), n), n;
      }]
    },
    tweener: function (e, t) {
      p(e) ? (t = e, e = ["*"]) : e = e.match(I);

      for (var n, r = 0, i = e.length; r < i; r++) (ft.tweeners[n = e[r]] = ft.tweeners[n] || []).unshift(t);
    },
    prefilters: [function (e, t, n) {
      var r,
          i,
          o,
          a,
          s,
          l,
          u,
          c,
          f = "width" in t || "height" in t,
          d = this,
          h = {},
          p = e.style,
          g = e.nodeType && ae(e),
          v = Q.get(e, "fxshow");

      for (r in n.queue || (null == (a = w._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
        a.unqueued || s();
      }), a.unqueued++, d.always(function () {
        d.always(function () {
          a.unqueued--, w.queue(e, "fx").length || a.empty.fire();
        });
      })), t) if (ot.test(i = t[r])) {
        if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
          if ("show" !== i || !v || void 0 === v[r]) continue;
          g = !0;
        }

        h[r] = v && v[r] || w.style(e, r);
      }

      if ((l = !w.isEmptyObject(t)) || !w.isEmptyObject(h)) for (r in f && 1 === e.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], null == (u = v && v.display) && (u = Q.get(e, "display")), "none" === (c = w.css(e, "display")) && (u ? c = u : (ce([e], !0), u = e.style.display || u, c = w.css(e, "display"), ce([e]))), ("inline" === c || "inline-block" === c && null != u) && "none" === w.css(e, "float") && (l || (d.done(function () {
        p.display = u;
      }), null == u && (u = "none" === (c = p.display) ? "" : c)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", d.always(function () {
        p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2];
      })), l = !1, h) l || (v ? "hidden" in v && (g = v.hidden) : v = Q.access(e, "fxshow", {
        display: u
      }), o && (v.hidden = !g), g && ce([e], !0), d.done(function () {
        for (r in g || ce([e]), Q.remove(e, "fxshow"), h) w.style(e, r, h[r]);
      })), l = ct(g ? v[r] : 0, r, d), r in v || (v[r] = l.start, g && (l.end = l.start, l.start = 0));
    }],
    prefilter: function (e, t) {
      t ? ft.prefilters.unshift(e) : ft.prefilters.push(e);
    }
  }), w.speed = function (e, t, n) {
    var r = e && "object" == typeof e ? w.extend({}, e) : {
      complete: n || !n && t || p(e) && e,
      duration: e,
      easing: n && t || t && !p(t) && t
    };
    return w.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration = r.duration in w.fx.speeds ? w.fx.speeds[r.duration] : w.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
      p(r.old) && r.old.call(this), r.queue && w.dequeue(this, r.queue);
    }, r;
  }, w.fn.extend({
    fadeTo: function (e, t, n, r) {
      return this.filter(ae).css("opacity", 0).show().end().animate({
        opacity: t
      }, e, n, r);
    },
    animate: function (e, t, n, r) {
      var i = w.isEmptyObject(e),
          o = w.speed(t, n, r),
          a = function () {
        var t = ft(this, w.extend({}, e), o);
        (i || Q.get(this, "finish")) && t.stop(!0);
      };

      return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
    },
    stop: function (e, t, n) {
      var r = function (e) {
        var t = e.stop;
        delete e.stop, t(n);
      };

      return "string" != typeof e && (n = t, t = e, e = void 0), t && this.queue(e || "fx", []), this.each(function () {
        var t = !0,
            i = null != e && e + "queueHooks",
            o = w.timers,
            a = Q.get(this);
        if (i) a[i] && a[i].stop && r(a[i]);else for (i in a) a[i] && a[i].stop && at.test(i) && r(a[i]);

        for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));

        !t && n || w.dequeue(this, e);
      });
    },
    finish: function (e) {
      return !1 !== e && (e = e || "fx"), this.each(function () {
        var t,
            n = Q.get(this),
            r = n[e + "queue"],
            i = n[e + "queueHooks"],
            o = w.timers,
            a = r ? r.length : 0;

        for (n.finish = !0, w.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));

        for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);

        delete n.finish;
      });
    }
  }), w.each(["toggle", "show", "hide"], function (e, t) {
    var n = w.fn[t];

    w.fn[t] = function (e, r, i) {
      return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ut(t, !0), e, r, i);
    };
  }), w.each({
    slideDown: ut("show"),
    slideUp: ut("hide"),
    slideToggle: ut("toggle"),
    fadeIn: {
      opacity: "show"
    },
    fadeOut: {
      opacity: "hide"
    },
    fadeToggle: {
      opacity: "toggle"
    }
  }, function (e, t) {
    w.fn[e] = function (e, n, r) {
      return this.animate(t, e, n, r);
    };
  }), w.timers = [], w.fx.tick = function () {
    var e,
        t = 0,
        n = w.timers;

    for (rt = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);

    n.length || w.fx.stop(), rt = void 0;
  }, w.fx.timer = function (e) {
    w.timers.push(e), w.fx.start();
  }, w.fx.interval = 13, w.fx.start = function () {
    it || (it = !0, st());
  }, w.fx.stop = function () {
    it = null;
  }, w.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  }, w.fn.delay = function (t, n) {
    return t = w.fx && w.fx.speeds[t] || t, this.queue(n = n || "fx", function (n, r) {
      var i = e.setTimeout(n, t);

      r.stop = function () {
        e.clearTimeout(i);
      };
    });
  }, function () {
    var e = v.createElement("input"),
        t = v.createElement("select").appendChild(v.createElement("option"));
    e.type = "checkbox", h.checkOn = "" !== e.value, h.optSelected = t.selected, (e = v.createElement("input")).value = "t", e.type = "radio", h.radioValue = "t" === e.value;
  }();
  var dt,
      ht = w.expr.attrHandle;
  w.fn.extend({
    attr: function (e, t) {
      return X(this, w.attr, e, t, arguments.length > 1);
    },
    removeAttr: function (e) {
      return this.each(function () {
        w.removeAttr(this, e);
      });
    }
  }), w.extend({
    attr: function (e, t, n) {
      var r,
          i,
          o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? w.prop(e, t, n) : (1 === o && w.isXMLDoc(e) || (i = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? dt : void 0)), void 0 !== n ? null === n ? void w.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = w.find.attr(e, t)) ? void 0 : r);
    },
    attrHooks: {
      type: {
        set: function (e, t) {
          if (!h.radioValue && "radio" === t && S(e, "input")) {
            var n = e.value;
            return e.setAttribute("type", t), n && (e.value = n), t;
          }
        }
      }
    },
    removeAttr: function (e, t) {
      var n,
          r = 0,
          i = t && t.match(I);
      if (i && 1 === e.nodeType) for (; n = i[r++];) e.removeAttribute(n);
    }
  }), dt = {
    set: function (e, t, n) {
      return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n;
    }
  }, w.each(w.expr.match.bool.source.match(/\w+/g), function (e, t) {
    var n = ht[t] || w.find.attr;

    ht[t] = function (e, t, r) {
      var i,
          o,
          a = t.toLowerCase();
      return r || (o = ht[a], ht[a] = i, i = null != n(e, t, r) ? a : null, ht[a] = o), i;
    };
  });
  var pt = /^(?:input|select|textarea|button)$/i,
      gt = /^(?:a|area)$/i;

  function vt(e) {
    return (e.match(I) || []).join(" ");
  }

  function mt(e) {
    return e.getAttribute && e.getAttribute("class") || "";
  }

  function yt(e) {
    return Array.isArray(e) ? e : "string" == typeof e && e.match(I) || [];
  }

  w.fn.extend({
    prop: function (e, t) {
      return X(this, w.prop, e, t, arguments.length > 1);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[w.propFix[e] || e];
      });
    }
  }), w.extend({
    prop: function (e, t, n) {
      var r,
          i,
          o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return 1 === o && w.isXMLDoc(e) || (i = w.propHooks[t = w.propFix[t] || t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t];
    },
    propHooks: {
      tabIndex: {
        get: function (e) {
          var t = w.find.attr(e, "tabindex");
          return t ? parseInt(t, 10) : pt.test(e.nodeName) || gt.test(e.nodeName) && e.href ? 0 : -1;
        }
      }
    },
    propFix: {
      for: "htmlFor",
      class: "className"
    }
  }), h.optSelected || (w.propHooks.selected = {
    get: function (e) {
      return null;
    },
    set: function (e) {}
  }), w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    w.propFix[this.toLowerCase()] = this;
  }), w.fn.extend({
    addClass: function (e) {
      var t,
          n,
          r,
          i,
          o,
          a,
          s,
          l = 0;
      if (p(e)) return this.each(function (t) {
        w(this).addClass(e.call(this, t, mt(this)));
      });
      if ((t = yt(e)).length) for (; n = this[l++];) if (i = mt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
        for (a = 0; o = t[a++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");

        i !== (s = vt(r)) && n.setAttribute("class", s);
      }
      return this;
    },
    removeClass: function (e) {
      var t,
          n,
          r,
          i,
          o,
          a,
          s,
          l = 0;
      if (p(e)) return this.each(function (t) {
        w(this).removeClass(e.call(this, t, mt(this)));
      });
      if (!arguments.length) return this.attr("class", "");
      if ((t = yt(e)).length) for (; n = this[l++];) if (i = mt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
        for (a = 0; o = t[a++];) for (; r.indexOf(" " + o + " ") > -1;) r = r.replace(" " + o + " ", " ");

        i !== (s = vt(r)) && n.setAttribute("class", s);
      }
      return this;
    },
    toggleClass: function (e, t) {
      var n = typeof e,
          r = "string" === n || Array.isArray(e);
      return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : p(e) ? this.each(function (n) {
        w(this).toggleClass(e.call(this, n, mt(this), t), t);
      }) : this.each(function () {
        var t, i, o, a;
        if (r) for (i = 0, o = w(this), a = yt(e); t = a[i++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);else void 0 !== e && "boolean" !== n || ((t = mt(this)) && Q.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Q.get(this, "__className__") || ""));
      });
    },
    hasClass: function (e) {
      var t,
          n,
          r = 0;

      for (t = " " + e + " "; n = this[r++];) if (1 === n.nodeType && (" " + vt(mt(n)) + " ").indexOf(t) > -1) return !0;

      return !1;
    }
  });
  var _t = /\r/g;
  w.fn.extend({
    val: function (e) {
      var t,
          n,
          r,
          i = this[0];
      return arguments.length ? (r = p(e), this.each(function (n) {
        var i;
        1 === this.nodeType && (null == (i = r ? e.call(this, n, w(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = w.map(i, function (e) {
          return null == e ? "" : e + "";
        })), (t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i));
      })) : i ? (t = w.valHooks[i.type] || w.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof (n = i.value) ? n.replace(_t, "") : null == n ? "" : n : void 0;
    }
  }), w.extend({
    valHooks: {
      option: {
        get: function (e) {
          var t = w.find.attr(e, "value");
          return null != t ? t : vt(w.text(e));
        }
      },
      select: {
        get: function (e) {
          var t,
              n,
              r,
              i = e.options,
              o = e.selectedIndex,
              a = "select-one" === e.type,
              s = a ? null : [],
              l = a ? o + 1 : i.length;

          for (r = o < 0 ? l : a ? o : 0; r < l; r++) if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !S(n.parentNode, "optgroup"))) {
            if (t = w(n).val(), a) return t;
            s.push(t);
          }

          return s;
        },
        set: function (e, t) {
          for (var n, r, i = e.options, o = w.makeArray(t), a = i.length; a--;) ((r = i[a]).selected = w.inArray(w.valHooks.option.get(r), o) > -1) && (n = !0);

          return n || (e.selectedIndex = -1), o;
        }
      }
    }
  }), w.each(["radio", "checkbox"], function () {
    w.valHooks[this] = {
      set: function (e, t) {
        if (Array.isArray(t)) return e.checked = w.inArray(w(e).val(), t) > -1;
      }
    }, h.checkOn || (w.valHooks[this].get = function (e) {
      return null === e.getAttribute("value") ? "on" : e.value;
    });
  }), h.focusin = "onfocusin" in e;

  var bt = /^(?:focusinfocus|focusoutblur)$/,
      wt = function (e) {
    e.stopPropagation();
  };

  w.extend(w.event, {
    trigger: function (t, n, r, i) {
      var o,
          a,
          s,
          l,
          u,
          f,
          d,
          h,
          m = [r || v],
          y = c.call(t, "type") ? t.type : t,
          _ = c.call(t, "namespace") ? t.namespace.split(".") : [];

      if (a = h = s = r = r || v, 3 !== r.nodeType && 8 !== r.nodeType && !bt.test(y + w.event.triggered) && (y.indexOf(".") > -1 && (_ = y.split("."), y = _.shift(), _.sort()), u = y.indexOf(":") < 0 && "on" + y, (t = t[w.expando] ? t : new w.Event(y, "object" == typeof t && t)).isTrigger = i ? 2 : 3, t.namespace = _.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + _.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : w.makeArray(n, [t]), d = w.event.special[y] || {}, i || !d.trigger || !1 !== d.trigger.apply(r, n))) {
        if (!i && !d.noBubble && !g(r)) {
          for (bt.test((l = d.delegateType || y) + y) || (a = a.parentNode); a; a = a.parentNode) m.push(a), s = a;

          s === (r.ownerDocument || v) && m.push(s.defaultView || s.parentWindow || e);
        }

        for (o = 0; (a = m[o++]) && !t.isPropagationStopped();) h = a, t.type = o > 1 ? l : d.bindType || y, (f = (Q.get(a, "events") || Object.create(null))[t.type] && Q.get(a, "handle")) && f.apply(a, n), (f = u && a[u]) && f.apply && $(a) && (t.result = f.apply(a, n), !1 === t.result && t.preventDefault());

        return t.type = y, i || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(m.pop(), n) || !$(r) || u && p(r[y]) && !g(r) && ((s = r[u]) && (r[u] = null), w.event.triggered = y, t.isPropagationStopped() && h.addEventListener(y, wt), r[y](), t.isPropagationStopped() && h.removeEventListener(y, wt), w.event.triggered = void 0, s && (r[u] = s)), t.result;
      }
    },
    simulate: function (e, t, n) {
      var r = w.extend(new w.Event(), n, {
        type: e,
        isSimulated: !0
      });
      w.event.trigger(r, null, t);
    }
  }), w.fn.extend({
    trigger: function (e, t) {
      return this.each(function () {
        w.event.trigger(e, t, this);
      });
    },
    triggerHandler: function (e, t) {
      var n = this[0];
      if (n) return w.event.trigger(e, t, n, !0);
    }
  }), h.focusin || w.each({
    focus: "focusin",
    blur: "focusout"
  }, function (e, t) {
    var n = function (e) {
      w.event.simulate(t, e.target, w.event.fix(e));
    };

    w.event.special[t] = {
      setup: function () {
        var r = this.ownerDocument || this.document || this,
            i = Q.access(r, t);
        i || r.addEventListener(e, n, !0), Q.access(r, t, (i || 0) + 1);
      },
      teardown: function () {
        var r = this.ownerDocument || this.document || this,
            i = Q.access(r, t) - 1;
        i ? Q.access(r, t, i) : (r.removeEventListener(e, n, !0), Q.remove(r, t));
      }
    };
  });
  var Et = e.location,
      xt = {
    guid: Date.now()
  },
      Tt = /\?/;

  w.parseXML = function (t) {
    var n;
    if (!t || "string" != typeof t) return null;

    try {
      n = new e.DOMParser().parseFromString(t, "text/xml");
    } catch (r) {
      n = void 0;
    }

    return n && !n.getElementsByTagName("parsererror").length || w.error("Invalid XML: " + t), n;
  };

  var Ct = /\[\]$/,
      Ot = /\r?\n/g,
      St = /^(?:submit|button|image|reset|file)$/i,
      jt = /^(?:input|select|textarea|keygen)/i;

  function At(e, t, n, r) {
    var i;
    if (Array.isArray(t)) w.each(t, function (t, i) {
      n || Ct.test(e) ? r(e, i) : At(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r);
    });else if (n || "object" !== _(t)) r(e, t);else for (i in t) At(e + "[" + i + "]", t[i], n, r);
  }

  w.param = function (e, t) {
    var n,
        r = [],
        i = function (e, t) {
      var n = p(t) ? t() : t;
      r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
    };

    if (null == e) return "";
    if (Array.isArray(e) || e.jquery && !w.isPlainObject(e)) w.each(e, function () {
      i(this.name, this.value);
    });else for (n in e) At(n, e[n], t, i);
    return r.join("&");
  }, w.fn.extend({
    serialize: function () {
      return w.param(this.serializeArray());
    },
    serializeArray: function () {
      return this.map(function () {
        var e = w.prop(this, "elements");
        return e ? w.makeArray(e) : this;
      }).filter(function () {
        var e = this.type;
        return this.name && !w(this).is(":disabled") && jt.test(this.nodeName) && !St.test(e) && (this.checked || !he.test(e));
      }).map(function (e, t) {
        var n = w(this).val();
        return null == n ? null : Array.isArray(n) ? w.map(n, function (e) {
          return {
            name: t.name,
            value: e.replace(Ot, "\r\n")
          };
        }) : {
          name: t.name,
          value: n.replace(Ot, "\r\n")
        };
      }).get();
    }
  });
  var kt = /%20/g,
      Dt = /#.*$/,
      Pt = /([?&])_=[^&]*/,
      Nt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      Lt = /^(?:GET|HEAD)$/,
      It = /^\/\//,
      Rt = {},
      Mt = {},
      Ht = "*/".concat("*"),
      qt = v.createElement("a");

  function Bt(e) {
    return function (t, n) {
      "string" != typeof t && (n = t, t = "*");
      var r,
          i = 0,
          o = t.toLowerCase().match(I) || [];
      if (p(n)) for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
    };
  }

  function Ft(e, t, n, r) {
    var i = {},
        o = e === Mt;

    function a(s) {
      var l;
      return i[s] = !0, w.each(e[s] || [], function (e, s) {
        var u = s(t, n, r);
        return "string" != typeof u || o || i[u] ? o ? !(l = u) : void 0 : (t.dataTypes.unshift(u), a(u), !1);
      }), l;
    }

    return a(t.dataTypes[0]) || !i["*"] && a("*");
  }

  function Xt(e, t) {
    var n,
        r,
        i = w.ajaxSettings.flatOptions || {};

    for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);

    return r && w.extend(!0, e, r), e;
  }

  qt.href = Et.href, w.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: Et.href,
      type: "GET",
      isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": Ht,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": JSON.parse,
        "text xml": w.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function (e, t) {
      return t ? Xt(Xt(e, w.ajaxSettings), t) : Xt(w.ajaxSettings, e);
    },
    ajaxPrefilter: Bt(Rt),
    ajaxTransport: Bt(Mt),
    ajax: function (t, n) {
      "object" == typeof t && (n = t, t = void 0);

      var r,
          i,
          o,
          a,
          s,
          l,
          u,
          c,
          f,
          d,
          h = w.ajaxSetup({}, n = n || {}),
          p = h.context || h,
          g = h.context && (p.nodeType || p.jquery) ? w(p) : w.event,
          m = w.Deferred(),
          y = w.Callbacks("once memory"),
          _ = h.statusCode || {},
          b = {},
          E = {},
          x = "canceled",
          T = {
        readyState: 0,
        getResponseHeader: function (e) {
          var t;

          if (u) {
            if (!a) for (a = {}; t = Nt.exec(o);) a[t[1].toLowerCase() + " "] = (a[t[1].toLowerCase() + " "] || []).concat(t[2]);
            t = a[e.toLowerCase() + " "];
          }

          return null == t ? null : t.join(", ");
        },
        getAllResponseHeaders: function () {
          return u ? o : null;
        },
        setRequestHeader: function (e, t) {
          return null == u && (e = E[e.toLowerCase()] = E[e.toLowerCase()] || e, b[e] = t), this;
        },
        overrideMimeType: function (e) {
          return null == u && (h.mimeType = e), this;
        },
        statusCode: function (e) {
          var t;
          if (e) if (u) T.always(e[T.status]);else for (t in e) _[t] = [_[t], e[t]];
          return this;
        },
        abort: function (e) {
          var t = e || x;
          return r && r.abort(t), C(0, t), this;
        }
      };

      if (m.promise(T), h.url = ((t || h.url || Et.href) + "").replace(It, Et.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(I) || [""], null == h.crossDomain) {
        l = v.createElement("a");

        try {
          l.href = h.url, l.href = l.href, h.crossDomain = qt.protocol + "//" + qt.host != l.protocol + "//" + l.host;
        } catch (O) {
          h.crossDomain = !0;
        }
      }

      if (h.data && h.processData && "string" != typeof h.data && (h.data = w.param(h.data, h.traditional)), Ft(Rt, h, n, T), u) return T;

      for (f in (c = w.event && h.global) && 0 == w.active++ && w.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Lt.test(h.type), i = h.url.replace(Dt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(kt, "+")) : (d = h.url.slice(i.length), h.data && (h.processData || "string" == typeof h.data) && (i += (Tt.test(i) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (i = i.replace(Pt, "$1"), d = (Tt.test(i) ? "&" : "?") + "_=" + xt.guid++ + d), h.url = i + d), h.ifModified && (w.lastModified[i] && T.setRequestHeader("If-Modified-Since", w.lastModified[i]), w.etag[i] && T.setRequestHeader("If-None-Match", w.etag[i])), (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && T.setRequestHeader("Content-Type", h.contentType), T.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Ht + "; q=0.01" : "") : h.accepts["*"]), h.headers) T.setRequestHeader(f, h.headers[f]);

      if (h.beforeSend && (!1 === h.beforeSend.call(p, T, h) || u)) return T.abort();

      if (x = "abort", y.add(h.complete), T.done(h.success), T.fail(h.error), r = Ft(Mt, h, n, T)) {
        if (T.readyState = 1, c && g.trigger("ajaxSend", [T, h]), u) return T;
        h.async && h.timeout > 0 && (s = e.setTimeout(function () {
          T.abort("timeout");
        }, h.timeout));

        try {
          u = !1, r.send(b, C);
        } catch (O) {
          if (u) throw O;
          C(-1, O);
        }
      } else C(-1, "No Transport");

      function C(t, n, a, l) {
        var f,
            d,
            v,
            b,
            E,
            x = n;
        u || (u = !0, s && e.clearTimeout(s), r = void 0, o = l || "", T.readyState = t > 0 ? 4 : 0, f = t >= 200 && t < 300 || 304 === t, a && (b = function (e, t, n) {
          for (var r, i, o, a, s = e.contents, l = e.dataTypes; "*" === l[0];) l.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));

          if (r) for (i in s) if (s[i] && s[i].test(r)) {
            l.unshift(i);
            break;
          }
          if (l[0] in n) o = l[0];else {
            for (i in n) {
              if (!l[0] || e.converters[i + " " + l[0]]) {
                o = i;
                break;
              }

              a || (a = i);
            }

            o = o || a;
          }
          if (o) return o !== l[0] && l.unshift(o), n[o];
        }(h, T, a)), !f && w.inArray("script", h.dataTypes) > -1 && (h.converters["text script"] = function () {}), b = function (e, t, n, r) {
          var i,
              o,
              a,
              s,
              l,
              u = {},
              c = e.dataTypes.slice();
          if (c[1]) for (a in e.converters) u[a.toLowerCase()] = e.converters[a];

          for (o = c.shift(); o;) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift()) if ("*" === o) o = l;else if ("*" !== l && l !== o) {
            if (!(a = u[l + " " + o] || u["* " + o])) for (i in u) if ((s = i.split(" "))[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
              !0 === a ? a = u[i] : !0 !== u[i] && (o = s[0], c.unshift(s[1]));
              break;
            }
            if (!0 !== a) if (a && e.throws) t = a(t);else try {
              t = a(t);
            } catch (O) {
              return {
                state: "parsererror",
                error: a ? O : "No conversion from " + l + " to " + o
              };
            }
          }

          return {
            state: "success",
            data: t
          };
        }(h, b, T, f), f ? (h.ifModified && ((E = T.getResponseHeader("Last-Modified")) && (w.lastModified[i] = E), (E = T.getResponseHeader("etag")) && (w.etag[i] = E)), 204 === t || "HEAD" === h.type ? x = "nocontent" : 304 === t ? x = "notmodified" : (x = b.state, d = b.data, f = !(v = b.error))) : (v = x, !t && x || (x = "error", t < 0 && (t = 0))), T.status = t, T.statusText = (n || x) + "", f ? m.resolveWith(p, [d, x, T]) : m.rejectWith(p, [T, x, v]), T.statusCode(_), _ = void 0, c && g.trigger(f ? "ajaxSuccess" : "ajaxError", [T, h, f ? d : v]), y.fireWith(p, [T, x]), c && (g.trigger("ajaxComplete", [T, h]), --w.active || w.event.trigger("ajaxStop")));
      }

      return T;
    },
    getJSON: function (e, t, n) {
      return w.get(e, t, n, "json");
    },
    getScript: function (e, t) {
      return w.get(e, void 0, t, "script");
    }
  }), w.each(["get", "post"], function (e, t) {
    w[t] = function (e, n, r, i) {
      return p(n) && (i = i || r, r = n, n = void 0), w.ajax(w.extend({
        url: e,
        type: t,
        dataType: i,
        data: n,
        success: r
      }, w.isPlainObject(e) && e));
    };
  }), w.ajaxPrefilter(function (e) {
    var t;

    for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "");
  }), w._evalUrl = function (e, t, n) {
    return w.ajax({
      url: e,
      type: "GET",
      dataType: "script",
      cache: !0,
      async: !1,
      global: !1,
      converters: {
        "text script": function () {}
      },
      dataFilter: function (e) {
        w.globalEval(e, t, n);
      }
    });
  }, w.fn.extend({
    wrapAll: function (e) {
      var t;
      return this[0] && (p(e) && (e = e.call(this[0])), t = w(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
        for (var e = this; e.firstElementChild;) e = e.firstElementChild;

        return e;
      }).append(this)), this;
    },
    wrapInner: function (e) {
      return p(e) ? this.each(function (t) {
        w(this).wrapInner(e.call(this, t));
      }) : this.each(function () {
        var t = w(this),
            n = t.contents();
        n.length ? n.wrapAll(e) : t.append(e);
      });
    },
    wrap: function (e) {
      var t = p(e);
      return this.each(function (n) {
        w(this).wrapAll(t ? e.call(this, n) : e);
      });
    },
    unwrap: function (e) {
      return this.parent(e).not("body").each(function () {
        w(this).replaceWith(this.childNodes);
      }), this;
    }
  }), w.expr.pseudos.hidden = function (e) {
    return !w.expr.pseudos.visible(e);
  }, w.expr.pseudos.visible = function (e) {
    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
  }, w.ajaxSettings.xhr = function () {
    try {
      return new e.XMLHttpRequest();
    } catch (t) {}
  };
  var Wt = {
    0: 200,
    1223: 204
  },
      zt = w.ajaxSettings.xhr();
  h.cors = !!zt && "withCredentials" in zt, h.ajax = zt = !!zt, w.ajaxTransport(function (t) {
    var n, r;
    if (h.cors || zt && !t.crossDomain) return {
      send: function (i, o) {
        var a,
            s = t.xhr();
        if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (a in t.xhrFields) s[a] = t.xhrFields[a];

        for (a in t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"), i) s.setRequestHeader(a, i[a]);

        n = function (e) {
          return function () {
            n && (n = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Wt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
              binary: s.response
            } : {
              text: s.responseText
            }, s.getAllResponseHeaders()));
          };
        }, s.onload = n(), r = s.onerror = s.ontimeout = n("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function () {
          4 === s.readyState && e.setTimeout(function () {
            n && r();
          });
        }, n = n("abort");

        try {
          s.send(t.hasContent && t.data || null);
        } catch (l) {
          if (n) throw l;
        }
      },
      abort: function () {
        n && n();
      }
    };
  }), w.ajaxPrefilter(function (e) {
    e.crossDomain && (e.contents.script = !1);
  }), w.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      "text script": function (e) {
        return w.globalEval(e), e;
      }
    }
  }), w.ajaxPrefilter("script", function (e) {
    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
  }), w.ajaxTransport("script", function (e) {
    var t, n;
    if (e.crossDomain || e.scriptAttrs) return {
      send: function (r, i) {
        t = w("<script>").attr(e.scriptAttrs || {}).prop({
          charset: e.scriptCharset,
          src: e.url
        }).on("load error", n = function (e) {
          t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type);
        }), v.head.appendChild(t[0]);
      },
      abort: function () {
        n && n();
      }
    };
  });
  var Gt,
      Ut = [],
      $t = /(=)\?(?=&|$)|\?\?/;
  w.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = Ut.pop() || w.expando + "_" + xt.guid++;
      return this[e] = !0, e;
    }
  }), w.ajaxPrefilter("json jsonp", function (t, n, r) {
    var i,
        o,
        a,
        s = !1 !== t.jsonp && ($t.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && $t.test(t.data) && "data");
    if (s || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = p(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace($t, "$1" + i) : !1 !== t.jsonp && (t.url += (Tt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function () {
      return a || w.error(i + " was not called"), a[0];
    }, t.dataTypes[0] = "json", o = e[i], e[i] = function () {
      a = arguments;
    }, r.always(function () {
      void 0 === o ? w(e).removeProp(i) : e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, Ut.push(i)), a && p(o) && o(a[0]), a = o = void 0;
    }), "script";
  }), h.createHTMLDocument = ((Gt = v.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Gt.childNodes.length), w.parseHTML = function (e, t, n) {
    return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (h.createHTMLDocument ? ((r = (t = v.implementation.createHTMLDocument("")).createElement("base")).href = v.location.href, t.head.appendChild(r)) : t = v), o = !n && [], (i = j.exec(e)) ? [t.createElement(i[1])] : (i = be([e], t, o), o && o.length && w(o).remove(), w.merge([], i.childNodes)));
    var r, i, o;
  }, w.fn.load = function (e, t, n) {
    var r,
        i,
        o,
        a = this,
        s = e.indexOf(" ");
    return s > -1 && (r = vt(e.slice(s)), e = e.slice(0, s)), p(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), a.length > 0 && w.ajax({
      url: e,
      type: i || "GET",
      dataType: "html",
      data: t
    }).done(function (e) {
      o = arguments, a.html(r ? w("<div>").append(w.parseHTML(e)).find(r) : e);
    }).always(n && function (e, t) {
      a.each(function () {
        n.apply(this, o || [e.responseText, t, e]);
      });
    }), this;
  }, w.expr.pseudos.animated = function (e) {
    return w.grep(w.timers, function (t) {
      return e === t.elem;
    }).length;
  }, w.offset = {
    setOffset: function (e, t, n) {
      var r,
          i,
          o,
          a,
          s,
          l,
          u = w.css(e, "position"),
          c = w(e),
          f = {};
      "static" === u && (e.style.position = "relative"), s = c.offset(), o = w.css(e, "top"), l = w.css(e, "left"), ("absolute" === u || "fixed" === u) && (o + l).indexOf("auto") > -1 ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(l) || 0), p(t) && (t = t.call(e, n, w.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : ("number" == typeof f.top && (f.top += "px"), "number" == typeof f.left && (f.left += "px"), c.css(f));
    }
  }, w.fn.extend({
    offset: function (e) {
      if (arguments.length) return void 0 === e ? this : this.each(function (t) {
        w.offset.setOffset(this, e, t);
      });
      var t,
          n,
          r = this[0];
      return r ? r.getClientRects().length ? {
        top: (t = r.getBoundingClientRect()).top + (n = r.ownerDocument.defaultView).pageYOffset,
        left: t.left + n.pageXOffset
      } : {
        top: 0,
        left: 0
      } : void 0;
    },
    position: function () {
      if (this[0]) {
        var e,
            t,
            n,
            r = this[0],
            i = {
          top: 0,
          left: 0
        };
        if ("fixed" === w.css(r, "position")) t = r.getBoundingClientRect();else {
          for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === w.css(e, "position");) e = e.parentNode;

          e && e !== r && 1 === e.nodeType && ((i = w(e).offset()).top += w.css(e, "borderTopWidth", !0), i.left += w.css(e, "borderLeftWidth", !0));
        }
        return {
          top: t.top - i.top - w.css(r, "marginTop", !0),
          left: t.left - i.left - w.css(r, "marginLeft", !0)
        };
      }
    },
    offsetParent: function () {
      return this.map(function () {
        for (var e = this.offsetParent; e && "static" === w.css(e, "position");) e = e.offsetParent;

        return e || re;
      });
    }
  }), w.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function (e, t) {
    var n = "pageYOffset" === t;

    w.fn[e] = function (r) {
      return X(this, function (e, r, i) {
        var o;
        if (g(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i) return o ? o[t] : e[r];
        o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i;
      }, e, r, arguments.length);
    };
  }), w.each(["top", "left"], function (e, t) {
    w.cssHooks[t] = ze(h.pixelPosition, function (e, n) {
      if (n) return n = We(e, t), qe.test(n) ? w(e).position()[t] + "px" : n;
    });
  }), w.each({
    Height: "height",
    Width: "width"
  }, function (e, t) {
    w.each({
      padding: "inner" + e,
      content: t,
      "": "outer" + e
    }, function (n, r) {
      w.fn[r] = function (i, o) {
        var a = arguments.length && (n || "boolean" != typeof i),
            s = n || (!0 === i || !0 === o ? "margin" : "border");
        return X(this, function (t, n, i) {
          var o;
          return g(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? w.css(t, n, s) : w.style(t, n, i, s);
        }, t, a ? i : void 0, a);
      };
    });
  }), w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
    w.fn[t] = function (e) {
      return this.on(t, e);
    };
  }), w.fn.extend({
    bind: function (e, t, n) {
      return this.on(e, null, t, n);
    },
    unbind: function (e, t) {
      return this.off(e, null, t);
    },
    delegate: function (e, t, n, r) {
      return this.on(t, e, n, r);
    },
    undelegate: function (e, t, n) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
    },
    hover: function (e, t) {
      return this.mouseenter(e).mouseleave(t || e);
    }
  }), w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
    w.fn[t] = function (e, n) {
      return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
    };
  });
  var Vt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  w.proxy = function (e, t) {
    var n, r, o;
    if ("string" == typeof t && (n = e[t], t = e, e = n), p(e)) return r = i.call(arguments, 2), (o = function () {
      return e.apply(t || this, r.concat(i.call(arguments)));
    }).guid = e.guid = e.guid || w.guid++, o;
  }, w.holdReady = function (e) {
    e ? w.readyWait++ : w.ready(!0);
  }, w.isArray = Array.isArray, w.parseJSON = JSON.parse, w.nodeName = S, w.isFunction = p, w.isWindow = g, w.camelCase = U, w.type = _, w.now = Date.now, w.isNumeric = function (e) {
    var t = w.type(e);
    return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
  }, w.trim = function (e) {
    return null == e ? "" : (e + "").replace(Vt, "");
  }, "function" == typeof define && define.amd && define("jquery", [], function () {
    return w;
  });
  var Qt = e.jQuery,
      Yt = e.$;
  return w.noConflict = function (t) {
    return e.$ === w && (e.$ = Yt), t && e.jQuery === w && (e.jQuery = Qt), w;
  }, void 0 === t && (e.jQuery = e.$ = w), w;
}), function (e, t) {
  "object" == typeof exports && "undefined" != typeof module ? t(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], t) : t((e = "undefined" != typeof globalThis ? globalThis : e || self).bootstrap = {}, e.jQuery, e.Popper);
}(void 0, function (e, t, n) {
  "use strict";

  function r(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
    }
  }

  function i(e, t, n) {
    return t && r(e.prototype, t), n && r(e, n), e;
  }

  function o() {
    return (o = Object.assign || function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];

        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }

      return e;
    }).apply(this, arguments);
  }

  t = t && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t, n = n && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
  var a = "transitionend",
      s = {
    TRANSITION_END: "bsTransitionEnd",
    getUID: function (e) {
      do {
        e += ~~(1e6 * Math.random());
      } while (document.getElementById(e));

      return e;
    },
    getSelectorFromElement: function (e) {
      var t = e.getAttribute("data-target");

      if (!t || "#" === t) {
        var n = e.getAttribute("href");
        t = n && "#" !== n ? n.trim() : "";
      }

      try {
        return document.querySelector(t) ? t : null;
      } catch (r) {
        return null;
      }
    },
    getTransitionDurationFromElement: function (e) {
      if (!e) return 0;
      var n = t(e).css("transition-duration"),
          r = t(e).css("transition-delay"),
          i = parseFloat(n),
          o = parseFloat(r);
      return i || o ? (n = n.split(",")[0], r = r.split(",")[0], 1e3 * (parseFloat(n) + parseFloat(r))) : 0;
    },
    reflow: function (e) {
      return e.offsetHeight;
    },
    triggerTransitionEnd: function (e) {
      t(e).trigger(a);
    },
    supportsTransitionEnd: function () {
      return Boolean(a);
    },
    isElement: function (e) {
      return (e[0] || e).nodeType;
    },
    typeCheckConfig: function (e, t, n) {
      for (var r in n) if (Object.prototype.hasOwnProperty.call(n, r)) {
        var i = n[r],
            o = t[r],
            a = o && s.isElement(o) ? "element" : null == (l = o) ? "" + l : {}.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase();
        if (!new RegExp(i).test(a)) throw new Error(e.toUpperCase() + ': Option "' + r + '" provided type "' + a + '" but expected type "' + i + '".');
      }

      var l;
    },
    findShadowRoot: function (e) {
      if (!document.documentElement.attachShadow) return null;

      if ("function" == typeof e.getRootNode) {
        var t = e.getRootNode();
        return t instanceof ShadowRoot ? t : null;
      }

      return e instanceof ShadowRoot ? e : e.parentNode ? s.findShadowRoot(e.parentNode) : null;
    },
    jQueryDetection: function () {
      if (void 0 === t) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
      var e = t.fn.jquery.split(" ")[0].split(".");
      if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || e[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
    }
  };
  s.jQueryDetection(), t.fn.emulateTransitionEnd = function (e) {
    var n = this,
        r = !1;
    return t(this).one(s.TRANSITION_END, function () {
      r = !0;
    }), setTimeout(function () {
      r || s.triggerTransitionEnd(n);
    }, e), this;
  }, t.event.special[s.TRANSITION_END] = {
    bindType: a,
    delegateType: a,
    handle: function (e) {
      if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments);
    }
  };

  var l = "bs.alert",
      u = t.fn.alert,
      c = function () {
    function e(e) {
      this._element = e;
    }

    var n = e.prototype;
    return n.close = function (e) {
      var t = this._element;
      e && (t = this._getRootElement(e)), this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t);
    }, n.dispose = function () {
      t.removeData(this._element, l), this._element = null;
    }, n._getRootElement = function (e) {
      var n = s.getSelectorFromElement(e),
          r = !1;
      return n && (r = document.querySelector(n)), r || (r = t(e).closest(".alert")[0]), r;
    }, n._triggerCloseEvent = function (e) {
      var n = t.Event("close.bs.alert");
      return t(e).trigger(n), n;
    }, n._removeElement = function (e) {
      var n = this;

      if (t(e).removeClass("show"), t(e).hasClass("fade")) {
        var r = s.getTransitionDurationFromElement(e);
        t(e).one(s.TRANSITION_END, function (t) {
          return n._destroyElement(e, t);
        }).emulateTransitionEnd(r);
      } else this._destroyElement(e);
    }, n._destroyElement = function (e) {
      t(e).detach().trigger("closed.bs.alert").remove();
    }, e._jQueryInterface = function (n) {
      return this.each(function () {
        var r = t(this),
            i = r.data(l);
        i || (i = new e(this), r.data(l, i)), "close" === n && i[n](this);
      });
    }, e._handleDismiss = function (e) {
      return function (t) {
        t && t.preventDefault(), e.close(this);
      };
    }, i(e, null, [{
      key: "VERSION",
      get: function () {
        return "4.5.2";
      }
    }]), e;
  }();

  t(document).on("click.bs.alert.data-api", '[data-dismiss="alert"]', c._handleDismiss(new c())), t.fn.alert = c._jQueryInterface, t.fn.alert.Constructor = c, t.fn.alert.noConflict = function () {
    return t.fn.alert = u, c._jQueryInterface;
  };

  var f = "bs.button",
      d = t.fn.button,
      h = "active",
      p = '[data-toggle^="button"]',
      g = 'input:not([type="hidden"])',
      v = ".btn",
      m = function () {
    function e(e) {
      this._element = e;
    }

    var n = e.prototype;
    return n.toggle = function () {
      var e = !0,
          n = !0,
          r = t(this._element).closest('[data-toggle="buttons"]')[0];

      if (r) {
        var i = this._element.querySelector(g);

        if (i) {
          if ("radio" === i.type) if (i.checked && this._element.classList.contains(h)) e = !1;else {
            var o = r.querySelector(".active");
            o && t(o).removeClass(h);
          }
          e && ("checkbox" !== i.type && "radio" !== i.type || (i.checked = !this._element.classList.contains(h)), t(i).trigger("change")), i.focus(), n = !1;
        }
      }

      this._element.hasAttribute("disabled") || this._element.classList.contains("disabled") || (n && this._element.setAttribute("aria-pressed", !this._element.classList.contains(h)), e && t(this._element).toggleClass(h));
    }, n.dispose = function () {
      t.removeData(this._element, f), this._element = null;
    }, e._jQueryInterface = function (n) {
      return this.each(function () {
        var r = t(this).data(f);
        r || (r = new e(this), t(this).data(f, r)), "toggle" === n && r[n]();
      });
    }, i(e, null, [{
      key: "VERSION",
      get: function () {
        return "4.5.2";
      }
    }]), e;
  }();

  t(document).on("click.bs.button.data-api", p, function (e) {
    var n = e.target,
        r = n;
    if (t(n).hasClass("btn") || (n = t(n).closest(v)[0]), !n || n.hasAttribute("disabled") || n.classList.contains("disabled")) e.preventDefault();else {
      var i = n.querySelector(g);
      if (i && (i.hasAttribute("disabled") || i.classList.contains("disabled"))) return void e.preventDefault();
      ("LABEL" !== r.tagName || i && "checkbox" !== i.type) && m._jQueryInterface.call(t(n), "toggle");
    }
  }).on("focus.bs.button.data-api blur.bs.button.data-api", p, function (e) {
    var n = t(e.target).closest(v)[0];
    t(n).toggleClass("focus", /^focus(in)?$/.test(e.type));
  }), t(window).on("load.bs.button.data-api", function () {
    for (var e = [].slice.call(document.querySelectorAll('[data-toggle="buttons"] .btn')), t = 0, n = e.length; t < n; t++) {
      var r = e[t],
          i = r.querySelector(g);
      i.checked || i.hasAttribute("checked") ? r.classList.add(h) : r.classList.remove(h);
    }

    for (var o = 0, a = (e = [].slice.call(document.querySelectorAll('[data-toggle="button"]'))).length; o < a; o++) {
      var s = e[o];
      "true" === s.getAttribute("aria-pressed") ? s.classList.add(h) : s.classList.remove(h);
    }
  }), t.fn.button = m._jQueryInterface, t.fn.button.Constructor = m, t.fn.button.noConflict = function () {
    return t.fn.button = d, m._jQueryInterface;
  };

  var y = "carousel",
      _ = "bs.carousel",
      b = t.fn[y],
      w = {
    interval: 5e3,
    keyboard: !0,
    slide: !1,
    pause: "hover",
    wrap: !0,
    touch: !0
  },
      E = {
    interval: "(number|boolean)",
    keyboard: "boolean",
    slide: "(boolean|string)",
    pause: "(string|boolean)",
    wrap: "boolean",
    touch: "boolean"
  },
      x = "next",
      T = "prev",
      C = "slid.bs.carousel",
      O = "active",
      S = ".active.carousel-item",
      j = {
    TOUCH: "touch",
    PEN: "pen"
  },
      A = function () {
    function e(e, t) {
      this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(t), this._element = e, this._indicatorsElement = this._element.querySelector(".carousel-indicators"), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners();
    }

    var n = e.prototype;
    return n.next = function () {
      this._isSliding || this._slide(x);
    }, n.nextWhenVisible = function () {
      !document.hidden && t(this._element).is(":visible") && "hidden" !== t(this._element).css("visibility") && this.next();
    }, n.prev = function () {
      this._isSliding || this._slide(T);
    }, n.pause = function (e) {
      e || (this._isPaused = !0), this._element.querySelector(".carousel-item-next, .carousel-item-prev") && (s.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null;
    }, n.cycle = function (e) {
      e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
    }, n.to = function (e) {
      var n = this;
      this._activeElement = this._element.querySelector(S);

      var r = this._getItemIndex(this._activeElement);

      if (!(e > this._items.length - 1 || e < 0)) if (this._isSliding) t(this._element).one(C, function () {
        return n.to(e);
      });else {
        if (r === e) return this.pause(), void this.cycle();

        this._slide(e > r ? x : T, this._items[e]);
      }
    }, n.dispose = function () {
      t(this._element).off(".bs.carousel"), t.removeData(this._element, _), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null;
    }, n._getConfig = function (e) {
      return e = o({}, w, e), s.typeCheckConfig(y, e, E), e;
    }, n._handleSwipe = function () {
      var e = Math.abs(this.touchDeltaX);

      if (!(e <= 40)) {
        var t = e / this.touchDeltaX;
        this.touchDeltaX = 0, t > 0 && this.prev(), t < 0 && this.next();
      }
    }, n._addEventListeners = function () {
      var e = this;
      this._config.keyboard && t(this._element).on("keydown.bs.carousel", function (t) {
        return e._keydown(t);
      }), "hover" === this._config.pause && t(this._element).on("mouseenter.bs.carousel", function (t) {
        return e.pause(t);
      }).on("mouseleave.bs.carousel", function (t) {
        return e.cycle(t);
      }), this._config.touch && this._addTouchEventListeners();
    }, n._addTouchEventListeners = function () {
      var e = this;

      if (this._touchSupported) {
        var n = function (t) {
          e._pointerEvent && j[t.originalEvent.pointerType.toUpperCase()] ? e.touchStartX = t.originalEvent.clientX : e._pointerEvent || (e.touchStartX = t.originalEvent.touches[0].clientX);
        },
            r = function (t) {
          e._pointerEvent && j[t.originalEvent.pointerType.toUpperCase()] && (e.touchDeltaX = t.originalEvent.clientX - e.touchStartX), e._handleSwipe(), "hover" === e._config.pause && (e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout(function (t) {
            return e.cycle(t);
          }, 500 + e._config.interval));
        };

        t(this._element.querySelectorAll(".carousel-item img")).on("dragstart.bs.carousel", function (e) {
          return e.preventDefault();
        }), this._pointerEvent ? (t(this._element).on("pointerdown.bs.carousel", function (e) {
          return n(e);
        }), t(this._element).on("pointerup.bs.carousel", function (e) {
          return r(e);
        }), this._element.classList.add("pointer-event")) : (t(this._element).on("touchstart.bs.carousel", function (e) {
          return n(e);
        }), t(this._element).on("touchmove.bs.carousel", function (t) {
          return function (t) {
            e.touchDeltaX = t.originalEvent.touches && t.originalEvent.touches.length > 1 ? 0 : t.originalEvent.touches[0].clientX - e.touchStartX;
          }(t);
        }), t(this._element).on("touchend.bs.carousel", function (e) {
          return r(e);
        }));
      }
    }, n._keydown = function (e) {
      if (!/input|textarea/i.test(e.target.tagName)) switch (e.which) {
        case 37:
          e.preventDefault(), this.prev();
          break;

        case 39:
          e.preventDefault(), this.next();
      }
    }, n._getItemIndex = function (e) {
      return this._items = e && e.parentNode ? [].slice.call(e.parentNode.querySelectorAll(".carousel-item")) : [], this._items.indexOf(e);
    }, n._getItemByDirection = function (e, t) {
      var n = e === x,
          r = e === T,
          i = this._getItemIndex(t);

      if ((r && 0 === i || n && i === this._items.length - 1) && !this._config.wrap) return t;
      var o = (i + (e === T ? -1 : 1)) % this._items.length;
      return -1 === o ? this._items[this._items.length - 1] : this._items[o];
    }, n._triggerSlideEvent = function (e, n) {
      var r = this._getItemIndex(e),
          i = this._getItemIndex(this._element.querySelector(S)),
          o = t.Event("slide.bs.carousel", {
        relatedTarget: e,
        direction: n,
        from: i,
        to: r
      });

      return t(this._element).trigger(o), o;
    }, n._setActiveIndicatorElement = function (e) {
      if (this._indicatorsElement) {
        var n = [].slice.call(this._indicatorsElement.querySelectorAll(".active"));
        t(n).removeClass(O);

        var r = this._indicatorsElement.children[this._getItemIndex(e)];

        r && t(r).addClass(O);
      }
    }, n._slide = function (e, n) {
      var r,
          i,
          o,
          a = this,
          l = this._element.querySelector(S),
          u = this._getItemIndex(l),
          c = n || l && this._getItemByDirection(e, l),
          f = this._getItemIndex(c),
          d = Boolean(this._interval);

      if (e === x ? (r = "carousel-item-left", i = "carousel-item-next", o = "left") : (r = "carousel-item-right", i = "carousel-item-prev", o = "right"), c && t(c).hasClass(O)) this._isSliding = !1;else if (!this._triggerSlideEvent(c, o).isDefaultPrevented() && l && c) {
        this._isSliding = !0, d && this.pause(), this._setActiveIndicatorElement(c);
        var h = t.Event(C, {
          relatedTarget: c,
          direction: o,
          from: u,
          to: f
        });

        if (t(this._element).hasClass("slide")) {
          t(c).addClass(i), s.reflow(c), t(l).addClass(r), t(c).addClass(r);
          var p = parseInt(c.getAttribute("data-interval"), 10);
          p ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = p) : this._config.interval = this._config.defaultInterval || this._config.interval;
          var g = s.getTransitionDurationFromElement(l);
          t(l).one(s.TRANSITION_END, function () {
            t(c).removeClass(r + " " + i).addClass(O), t(l).removeClass("active " + i + " " + r), a._isSliding = !1, setTimeout(function () {
              return t(a._element).trigger(h);
            }, 0);
          }).emulateTransitionEnd(g);
        } else t(l).removeClass(O), t(c).addClass(O), this._isSliding = !1, t(this._element).trigger(h);

        d && this.cycle();
      }
    }, e._jQueryInterface = function (n) {
      return this.each(function () {
        var r = t(this).data(_),
            i = o({}, w, t(this).data());
        "object" == typeof n && (i = o({}, i, n));
        var a = "string" == typeof n ? n : i.slide;
        if (r || (r = new e(this, i), t(this).data(_, r)), "number" == typeof n) r.to(n);else if ("string" == typeof a) {
          if (void 0 === r[a]) throw new TypeError('No method named "' + a + '"');
          r[a]();
        } else i.interval && i.ride && (r.pause(), r.cycle());
      });
    }, e._dataApiClickHandler = function (n) {
      var r = s.getSelectorFromElement(this);

      if (r) {
        var i = t(r)[0];

        if (i && t(i).hasClass("carousel")) {
          var a = o({}, t(i).data(), t(this).data()),
              l = this.getAttribute("data-slide-to");
          l && (a.interval = !1), e._jQueryInterface.call(t(i), a), l && t(i).data(_).to(l), n.preventDefault();
        }
      }
    }, i(e, null, [{
      key: "VERSION",
      get: function () {
        return "4.5.2";
      }
    }, {
      key: "Default",
      get: function () {
        return w;
      }
    }]), e;
  }();

  t(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", A._dataApiClickHandler), t(window).on("load.bs.carousel.data-api", function () {
    for (var e = [].slice.call(document.querySelectorAll('[data-ride="carousel"]')), n = 0, r = e.length; n < r; n++) {
      var i = t(e[n]);

      A._jQueryInterface.call(i, i.data());
    }
  }), t.fn[y] = A._jQueryInterface, t.fn[y].Constructor = A, t.fn[y].noConflict = function () {
    return t.fn[y] = b, A._jQueryInterface;
  };

  var k = "collapse",
      D = "bs.collapse",
      P = t.fn[k],
      N = {
    toggle: !0,
    parent: ""
  },
      L = {
    toggle: "boolean",
    parent: "(string|element)"
  },
      I = "show",
      R = "collapse",
      M = "collapsing",
      H = "collapsed",
      q = "width",
      B = '[data-toggle="collapse"]',
      F = function () {
    function e(e, t) {
      this._isTransitioning = !1, this._element = e, this._config = this._getConfig(t), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));

      for (var n = [].slice.call(document.querySelectorAll(B)), r = 0, i = n.length; r < i; r++) {
        var o = n[r],
            a = s.getSelectorFromElement(o),
            l = [].slice.call(document.querySelectorAll(a)).filter(function (t) {
          return t === e;
        });
        null !== a && l.length > 0 && (this._selector = a, this._triggerArray.push(o));
      }

      this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle();
    }

    var n = e.prototype;
    return n.toggle = function () {
      t(this._element).hasClass(I) ? this.hide() : this.show();
    }, n.show = function () {
      var n,
          r,
          i = this;

      if (!(this._isTransitioning || t(this._element).hasClass(I) || (this._parent && 0 === (n = [].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter(function (e) {
        return "string" == typeof i._config.parent ? e.getAttribute("data-parent") === i._config.parent : e.classList.contains(R);
      })).length && (n = null), n && (r = t(n).not(this._selector).data(D)) && r._isTransitioning))) {
        var o = t.Event("show.bs.collapse");

        if (t(this._element).trigger(o), !o.isDefaultPrevented()) {
          n && (e._jQueryInterface.call(t(n).not(this._selector), "hide"), r || t(n).data(D, null));

          var a = this._getDimension();

          t(this._element).removeClass(R).addClass(M), this._element.style[a] = 0, this._triggerArray.length && t(this._triggerArray).removeClass(H).attr("aria-expanded", !0), this.setTransitioning(!0);
          var l = "scroll" + (a[0].toUpperCase() + a.slice(1)),
              u = s.getTransitionDurationFromElement(this._element);
          t(this._element).one(s.TRANSITION_END, function () {
            t(i._element).removeClass(M).addClass("collapse show"), i._element.style[a] = "", i.setTransitioning(!1), t(i._element).trigger("shown.bs.collapse");
          }).emulateTransitionEnd(u), this._element.style[a] = this._element[l] + "px";
        }
      }
    }, n.hide = function () {
      var e = this;

      if (!this._isTransitioning && t(this._element).hasClass(I)) {
        var n = t.Event("hide.bs.collapse");

        if (t(this._element).trigger(n), !n.isDefaultPrevented()) {
          var r = this._getDimension();

          this._element.style[r] = this._element.getBoundingClientRect()[r] + "px", s.reflow(this._element), t(this._element).addClass(M).removeClass("collapse show");
          var i = this._triggerArray.length;
          if (i > 0) for (var o = 0; o < i; o++) {
            var a = this._triggerArray[o],
                l = s.getSelectorFromElement(a);
            null !== l && (t([].slice.call(document.querySelectorAll(l))).hasClass(I) || t(a).addClass(H).attr("aria-expanded", !1));
          }
          this.setTransitioning(!0), this._element.style[r] = "";
          var u = s.getTransitionDurationFromElement(this._element);
          t(this._element).one(s.TRANSITION_END, function () {
            e.setTransitioning(!1), t(e._element).removeClass(M).addClass(R).trigger("hidden.bs.collapse");
          }).emulateTransitionEnd(u);
        }
      }
    }, n.setTransitioning = function (e) {
      this._isTransitioning = e;
    }, n.dispose = function () {
      t.removeData(this._element, D), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null;
    }, n._getConfig = function (e) {
      return (e = o({}, N, e)).toggle = Boolean(e.toggle), s.typeCheckConfig(k, e, L), e;
    }, n._getDimension = function () {
      return t(this._element).hasClass(q) ? q : "height";
    }, n._getParent = function () {
      var n,
          r = this;
      s.isElement(this._config.parent) ? (n = this._config.parent, void 0 !== this._config.parent.jquery && (n = this._config.parent[0])) : n = document.querySelector(this._config.parent);
      var i = [].slice.call(n.querySelectorAll('[data-toggle="collapse"][data-parent="' + this._config.parent + '"]'));
      return t(i).each(function (t, n) {
        r._addAriaAndCollapsedClass(e._getTargetFromElement(n), [n]);
      }), n;
    }, n._addAriaAndCollapsedClass = function (e, n) {
      var r = t(e).hasClass(I);
      n.length && t(n).toggleClass(H, !r).attr("aria-expanded", r);
    }, e._getTargetFromElement = function (e) {
      var t = s.getSelectorFromElement(e);
      return t ? document.querySelector(t) : null;
    }, e._jQueryInterface = function (n) {
      return this.each(function () {
        var r = t(this),
            i = r.data(D),
            a = o({}, N, r.data(), "object" == typeof n && n ? n : {});

        if (!i && a.toggle && "string" == typeof n && /show|hide/.test(n) && (a.toggle = !1), i || (i = new e(this, a), r.data(D, i)), "string" == typeof n) {
          if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
          i[n]();
        }
      });
    }, i(e, null, [{
      key: "VERSION",
      get: function () {
        return "4.5.2";
      }
    }, {
      key: "Default",
      get: function () {
        return N;
      }
    }]), e;
  }();

  t(document).on("click.bs.collapse.data-api", B, function (e) {
    "A" === e.currentTarget.tagName && e.preventDefault();
    var n = t(this),
        r = s.getSelectorFromElement(this),
        i = [].slice.call(document.querySelectorAll(r));
    t(i).each(function () {
      var e = t(this),
          r = e.data(D) ? "toggle" : n.data();

      F._jQueryInterface.call(e, r);
    });
  }), t.fn[k] = F._jQueryInterface, t.fn[k].Constructor = F, t.fn[k].noConflict = function () {
    return t.fn[k] = P, F._jQueryInterface;
  };

  var X = "dropdown",
      W = "bs.dropdown",
      z = t.fn[X],
      G = new RegExp("38|40|27"),
      U = "hide.bs.dropdown",
      $ = "hidden.bs.dropdown",
      V = "click.bs.dropdown.data-api",
      Q = "keydown.bs.dropdown.data-api",
      Y = "disabled",
      K = "show",
      J = "dropdown-menu-right",
      Z = '[data-toggle="dropdown"]',
      ee = ".dropdown-menu",
      te = {
    offset: 0,
    flip: !0,
    boundary: "scrollParent",
    reference: "toggle",
    display: "dynamic",
    popperConfig: null
  },
      ne = {
    offset: "(number|string|function)",
    flip: "boolean",
    boundary: "(string|element)",
    reference: "(string|element)",
    display: "string",
    popperConfig: "(null|object)"
  },
      re = function () {
    function e(e, t) {
      this._element = e, this._popper = null, this._config = this._getConfig(t), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners();
    }

    var r = e.prototype;
    return r.toggle = function () {
      if (!this._element.disabled && !t(this._element).hasClass(Y)) {
        var n = t(this._menu).hasClass(K);
        e._clearMenus(), n || this.show(!0);
      }
    }, r.show = function (r) {
      if (void 0 === r && (r = !1), !(this._element.disabled || t(this._element).hasClass(Y) || t(this._menu).hasClass(K))) {
        var i = {
          relatedTarget: this._element
        },
            o = t.Event("show.bs.dropdown", i),
            a = e._getParentFromElement(this._element);

        if (t(a).trigger(o), !o.isDefaultPrevented()) {
          if (!this._inNavbar && r) {
            if (void 0 === n) throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
            var l = this._element;
            "parent" === this._config.reference ? l = a : s.isElement(this._config.reference) && (l = this._config.reference, void 0 !== this._config.reference.jquery && (l = this._config.reference[0])), "scrollParent" !== this._config.boundary && t(a).addClass("position-static"), this._popper = new n(l, this._menu, this._getPopperConfig());
          }

          "ontouchstart" in document.documentElement && 0 === t(a).closest(".navbar-nav").length && t(document.body).children().on("mouseover", null, t.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), t(this._menu).toggleClass(K), t(a).toggleClass(K).trigger(t.Event("shown.bs.dropdown", i));
        }
      }
    }, r.hide = function () {
      if (!this._element.disabled && !t(this._element).hasClass(Y) && t(this._menu).hasClass(K)) {
        var n = {
          relatedTarget: this._element
        },
            r = t.Event(U, n),
            i = e._getParentFromElement(this._element);

        t(i).trigger(r), r.isDefaultPrevented() || (this._popper && this._popper.destroy(), t(this._menu).toggleClass(K), t(i).toggleClass(K).trigger(t.Event($, n)));
      }
    }, r.dispose = function () {
      t.removeData(this._element, W), t(this._element).off(".bs.dropdown"), this._element = null, this._menu = null, null !== this._popper && (this._popper.destroy(), this._popper = null);
    }, r.update = function () {
      this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate();
    }, r._addEventListeners = function () {
      var e = this;
      t(this._element).on("click.bs.dropdown", function (t) {
        t.preventDefault(), t.stopPropagation(), e.toggle();
      });
    }, r._getConfig = function (e) {
      return e = o({}, this.constructor.Default, t(this._element).data(), e), s.typeCheckConfig(X, e, this.constructor.DefaultType), e;
    }, r._getMenuElement = function () {
      if (!this._menu) {
        var t = e._getParentFromElement(this._element);

        t && (this._menu = t.querySelector(ee));
      }

      return this._menu;
    }, r._getPlacement = function () {
      var e = t(this._element.parentNode),
          n = "bottom-start";
      return e.hasClass("dropup") ? n = t(this._menu).hasClass(J) ? "top-end" : "top-start" : e.hasClass("dropright") ? n = "right-start" : e.hasClass("dropleft") ? n = "left-start" : t(this._menu).hasClass(J) && (n = "bottom-end"), n;
    }, r._detectNavbar = function () {
      return t(this._element).closest(".navbar").length > 0;
    }, r._getOffset = function () {
      var e = this,
          t = {};
      return "function" == typeof this._config.offset ? t.fn = function (t) {
        return t.offsets = o({}, t.offsets, e._config.offset(t.offsets, e._element) || {}), t;
      } : t.offset = this._config.offset, t;
    }, r._getPopperConfig = function () {
      var e = {
        placement: this._getPlacement(),
        modifiers: {
          offset: this._getOffset(),
          flip: {
            enabled: this._config.flip
          },
          preventOverflow: {
            boundariesElement: this._config.boundary
          }
        }
      };
      return "static" === this._config.display && (e.modifiers.applyStyle = {
        enabled: !1
      }), o({}, e, this._config.popperConfig);
    }, e._jQueryInterface = function (n) {
      return this.each(function () {
        var r = t(this).data(W);

        if (r || (r = new e(this, "object" == typeof n ? n : null), t(this).data(W, r)), "string" == typeof n) {
          if (void 0 === r[n]) throw new TypeError('No method named "' + n + '"');
          r[n]();
        }
      });
    }, e._clearMenus = function (n) {
      if (!n || 3 !== n.which && ("keyup" !== n.type || 9 === n.which)) for (var r = [].slice.call(document.querySelectorAll(Z)), i = 0, o = r.length; i < o; i++) {
        var a = e._getParentFromElement(r[i]),
            s = t(r[i]).data(W),
            l = {
          relatedTarget: r[i]
        };

        if (n && "click" === n.type && (l.clickEvent = n), s) {
          var u = s._menu;

          if (t(a).hasClass(K) && !(n && ("click" === n.type && /input|textarea/i.test(n.target.tagName) || "keyup" === n.type && 9 === n.which) && t.contains(a, n.target))) {
            var c = t.Event(U, l);
            t(a).trigger(c), c.isDefaultPrevented() || ("ontouchstart" in document.documentElement && t(document.body).children().off("mouseover", null, t.noop), r[i].setAttribute("aria-expanded", "false"), s._popper && s._popper.destroy(), t(u).removeClass(K), t(a).removeClass(K).trigger(t.Event($, l)));
          }
        }
      }
    }, e._getParentFromElement = function (e) {
      var t,
          n = s.getSelectorFromElement(e);
      return n && (t = document.querySelector(n)), t || e.parentNode;
    }, e._dataApiKeydownHandler = function (n) {
      if (!(/input|textarea/i.test(n.target.tagName) ? 32 === n.which || 27 !== n.which && (40 !== n.which && 38 !== n.which || t(n.target).closest(ee).length) : !G.test(n.which)) && !this.disabled && !t(this).hasClass(Y)) {
        var r = e._getParentFromElement(this),
            i = t(r).hasClass(K);

        if (i || 27 !== n.which) {
          if (n.preventDefault(), n.stopPropagation(), !i || i && (27 === n.which || 32 === n.which)) return 27 === n.which && t(r.querySelector(Z)).trigger("focus"), void t(this).trigger("click");
          var o = [].slice.call(r.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)")).filter(function (e) {
            return t(e).is(":visible");
          });

          if (0 !== o.length) {
            var a = o.indexOf(n.target);
            38 === n.which && a > 0 && a--, 40 === n.which && a < o.length - 1 && a++, a < 0 && (a = 0), o[a].focus();
          }
        }
      }
    }, i(e, null, [{
      key: "VERSION",
      get: function () {
        return "4.5.2";
      }
    }, {
      key: "Default",
      get: function () {
        return te;
      }
    }, {
      key: "DefaultType",
      get: function () {
        return ne;
      }
    }]), e;
  }();

  t(document).on(Q, Z, re._dataApiKeydownHandler).on(Q, ee, re._dataApiKeydownHandler).on(V + " keyup.bs.dropdown.data-api", re._clearMenus).on(V, Z, function (e) {
    e.preventDefault(), e.stopPropagation(), re._jQueryInterface.call(t(this), "toggle");
  }).on(V, ".dropdown form", function (e) {
    e.stopPropagation();
  }), t.fn[X] = re._jQueryInterface, t.fn[X].Constructor = re, t.fn[X].noConflict = function () {
    return t.fn[X] = z, re._jQueryInterface;
  };

  var ie = "bs.modal",
      oe = t.fn.modal,
      ae = {
    backdrop: !0,
    keyboard: !0,
    focus: !0,
    show: !0
  },
      se = {
    backdrop: "(boolean|string)",
    keyboard: "boolean",
    focus: "boolean",
    show: "boolean"
  },
      le = "hidden.bs.modal",
      ue = "show.bs.modal",
      ce = "focusin.bs.modal",
      fe = "resize.bs.modal",
      de = "click.dismiss.bs.modal",
      he = "keydown.dismiss.bs.modal",
      pe = "mousedown.dismiss.bs.modal",
      ge = "modal-open",
      ve = "fade",
      me = "show",
      ye = "modal-static",
      _e = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
      be = function () {
    function e(e, t) {
      this._config = this._getConfig(t), this._element = e, this._dialog = e.querySelector(".modal-dialog"), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0;
    }

    var n = e.prototype;
    return n.toggle = function (e) {
      return this._isShown ? this.hide() : this.show(e);
    }, n.show = function (e) {
      var n = this;

      if (!this._isShown && !this._isTransitioning) {
        t(this._element).hasClass(ve) && (this._isTransitioning = !0);
        var r = t.Event(ue, {
          relatedTarget: e
        });
        t(this._element).trigger(r), this._isShown || r.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), t(this._element).on(de, '[data-dismiss="modal"]', function (e) {
          return n.hide(e);
        }), t(this._dialog).on(pe, function () {
          t(n._element).one("mouseup.dismiss.bs.modal", function (e) {
            t(e.target).is(n._element) && (n._ignoreBackdropClick = !0);
          });
        }), this._showBackdrop(function () {
          return n._showElement(e);
        }));
      }
    }, n.hide = function (e) {
      var n = this;

      if (e && e.preventDefault(), this._isShown && !this._isTransitioning) {
        var r = t.Event("hide.bs.modal");

        if (t(this._element).trigger(r), this._isShown && !r.isDefaultPrevented()) {
          this._isShown = !1;
          var i = t(this._element).hasClass(ve);

          if (i && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), t(document).off(ce), t(this._element).removeClass(me), t(this._element).off(de), t(this._dialog).off(pe), i) {
            var o = s.getTransitionDurationFromElement(this._element);
            t(this._element).one(s.TRANSITION_END, function (e) {
              return n._hideModal(e);
            }).emulateTransitionEnd(o);
          } else this._hideModal();
        }
      }
    }, n.dispose = function () {
      [window, this._element, this._dialog].forEach(function (e) {
        return t(e).off(".bs.modal");
      }), t(document).off(ce), t.removeData(this._element, ie), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null;
    }, n.handleUpdate = function () {
      this._adjustDialog();
    }, n._getConfig = function (e) {
      return e = o({}, ae, e), s.typeCheckConfig("modal", e, se), e;
    }, n._triggerBackdropTransition = function () {
      var e = this;

      if ("static" === this._config.backdrop) {
        var n = t.Event("hidePrevented.bs.modal");
        if (t(this._element).trigger(n), n.defaultPrevented) return;
        var r = this._element.scrollHeight > document.documentElement.clientHeight;
        r || (this._element.style.overflowY = "hidden"), this._element.classList.add(ye);
        var i = s.getTransitionDurationFromElement(this._dialog);
        t(this._element).off(s.TRANSITION_END), t(this._element).one(s.TRANSITION_END, function () {
          e._element.classList.remove(ye), r || t(e._element).one(s.TRANSITION_END, function () {
            e._element.style.overflowY = "";
          }).emulateTransitionEnd(e._element, i);
        }).emulateTransitionEnd(i), this._element.focus();
      } else this.hide();
    }, n._showElement = function (e) {
      var n = this,
          r = t(this._element).hasClass(ve),
          i = this._dialog ? this._dialog.querySelector(".modal-body") : null;
      this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), t(this._dialog).hasClass("modal-dialog-scrollable") && i ? i.scrollTop = 0 : this._element.scrollTop = 0, r && s.reflow(this._element), t(this._element).addClass(me), this._config.focus && this._enforceFocus();

      var o = t.Event("shown.bs.modal", {
        relatedTarget: e
      }),
          a = function () {
        n._config.focus && n._element.focus(), n._isTransitioning = !1, t(n._element).trigger(o);
      };

      if (r) {
        var l = s.getTransitionDurationFromElement(this._dialog);
        t(this._dialog).one(s.TRANSITION_END, a).emulateTransitionEnd(l);
      } else a();
    }, n._enforceFocus = function () {
      var e = this;
      t(document).off(ce).on(ce, function (n) {
        document !== n.target && e._element !== n.target && 0 === t(e._element).has(n.target).length && e._element.focus();
      });
    }, n._setEscapeEvent = function () {
      var e = this;
      this._isShown ? t(this._element).on(he, function (t) {
        e._config.keyboard && 27 === t.which ? (t.preventDefault(), e.hide()) : e._config.keyboard || 27 !== t.which || e._triggerBackdropTransition();
      }) : this._isShown || t(this._element).off(he);
    }, n._setResizeEvent = function () {
      var e = this;
      this._isShown ? t(window).on(fe, function (t) {
        return e.handleUpdate(t);
      }) : t(window).off(fe);
    }, n._hideModal = function () {
      var e = this;
      this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._showBackdrop(function () {
        t(document.body).removeClass(ge), e._resetAdjustments(), e._resetScrollbar(), t(e._element).trigger(le);
      });
    }, n._removeBackdrop = function () {
      this._backdrop && (t(this._backdrop).remove(), this._backdrop = null);
    }, n._showBackdrop = function (e) {
      var n = this,
          r = t(this._element).hasClass(ve) ? ve : "";

      if (this._isShown && this._config.backdrop) {
        if (this._backdrop = document.createElement("div"), this._backdrop.className = "modal-backdrop", r && this._backdrop.classList.add(r), t(this._backdrop).appendTo(document.body), t(this._element).on(de, function (e) {
          n._ignoreBackdropClick ? n._ignoreBackdropClick = !1 : e.target === e.currentTarget && n._triggerBackdropTransition();
        }), r && s.reflow(this._backdrop), t(this._backdrop).addClass(me), !e) return;
        if (!r) return void e();
        var i = s.getTransitionDurationFromElement(this._backdrop);
        t(this._backdrop).one(s.TRANSITION_END, e).emulateTransitionEnd(i);
      } else if (!this._isShown && this._backdrop) {
        t(this._backdrop).removeClass(me);

        var o = function () {
          n._removeBackdrop(), e && e();
        };

        if (t(this._element).hasClass(ve)) {
          var a = s.getTransitionDurationFromElement(this._backdrop);
          t(this._backdrop).one(s.TRANSITION_END, o).emulateTransitionEnd(a);
        } else o();
      } else e && e();
    }, n._adjustDialog = function () {
      var e = this._element.scrollHeight > document.documentElement.clientHeight;
      !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px");
    }, n._resetAdjustments = function () {
      this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
    }, n._checkScrollbar = function () {
      var e = document.body.getBoundingClientRect();
      this._isBodyOverflowing = Math.round(e.left + e.right) < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth();
    }, n._setScrollbar = function () {
      var e = this;

      if (this._isBodyOverflowing) {
        var n = [].slice.call(document.querySelectorAll(_e)),
            r = [].slice.call(document.querySelectorAll(".sticky-top"));
        t(n).each(function (n, r) {
          var i = r.style.paddingRight,
              o = t(r).css("padding-right");
          t(r).data("padding-right", i).css("padding-right", parseFloat(o) + e._scrollbarWidth + "px");
        }), t(r).each(function (n, r) {
          var i = r.style.marginRight,
              o = t(r).css("margin-right");
          t(r).data("margin-right", i).css("margin-right", parseFloat(o) - e._scrollbarWidth + "px");
        });
        var i = document.body.style.paddingRight,
            o = t(document.body).css("padding-right");
        t(document.body).data("padding-right", i).css("padding-right", parseFloat(o) + this._scrollbarWidth + "px");
      }

      t(document.body).addClass(ge);
    }, n._resetScrollbar = function () {
      var e = [].slice.call(document.querySelectorAll(_e));
      t(e).each(function (e, n) {
        var r = t(n).data("padding-right");
        t(n).removeData("padding-right"), n.style.paddingRight = r || "";
      });
      var n = [].slice.call(document.querySelectorAll(".sticky-top"));
      t(n).each(function (e, n) {
        var r = t(n).data("margin-right");
        void 0 !== r && t(n).css("margin-right", r).removeData("margin-right");
      });
      var r = t(document.body).data("padding-right");
      t(document.body).removeData("padding-right"), document.body.style.paddingRight = r || "";
    }, n._getScrollbarWidth = function () {
      var e = document.createElement("div");
      e.className = "modal-scrollbar-measure", document.body.appendChild(e);
      var t = e.getBoundingClientRect().width - e.clientWidth;
      return document.body.removeChild(e), t;
    }, e._jQueryInterface = function (n, r) {
      return this.each(function () {
        var i = t(this).data(ie),
            a = o({}, ae, t(this).data(), "object" == typeof n && n ? n : {});

        if (i || (i = new e(this, a), t(this).data(ie, i)), "string" == typeof n) {
          if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
          i[n](r);
        } else a.show && i.show(r);
      });
    }, i(e, null, [{
      key: "VERSION",
      get: function () {
        return "4.5.2";
      }
    }, {
      key: "Default",
      get: function () {
        return ae;
      }
    }]), e;
  }();

  t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (e) {
    var n,
        r = this,
        i = s.getSelectorFromElement(this);
    i && (n = document.querySelector(i));
    var a = t(n).data(ie) ? "toggle" : o({}, t(n).data(), t(this).data());
    "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
    var l = t(n).one(ue, function (e) {
      e.isDefaultPrevented() || l.one(le, function () {
        t(r).is(":visible") && r.focus();
      });
    });

    be._jQueryInterface.call(t(n), a, this);
  }), t.fn.modal = be._jQueryInterface, t.fn.modal.Constructor = be, t.fn.modal.noConflict = function () {
    return t.fn.modal = oe, be._jQueryInterface;
  };
  var we = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
      Ee = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,
      xe = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;

  function Te(e, t, n) {
    if (0 === e.length) return e;
    if (n && "function" == typeof n) return n(e);

    for (var r = new window.DOMParser().parseFromString(e, "text/html"), i = Object.keys(t), o = [].slice.call(r.body.querySelectorAll("*")), a = function (e, n) {
      var r = o[e],
          a = r.nodeName.toLowerCase();
      if (-1 === i.indexOf(r.nodeName.toLowerCase())) return r.parentNode.removeChild(r), "continue";
      var s = [].slice.call(r.attributes),
          l = [].concat(t["*"] || [], t[a] || []);
      s.forEach(function (e) {
        (function (e, t) {
          var n = e.nodeName.toLowerCase();
          if (-1 !== t.indexOf(n)) return -1 === we.indexOf(n) || Boolean(e.nodeValue.match(Ee) || e.nodeValue.match(xe));

          for (var r = t.filter(function (e) {
            return e instanceof RegExp;
          }), i = 0, o = r.length; i < o; i++) if (n.match(r[i])) return !0;

          return !1;
        })(e, l) || r.removeAttribute(e.nodeName);
      });
    }, s = 0, l = o.length; s < l; s++) a(s);

    return r.body.innerHTML;
  }

  var Ce = "tooltip",
      Oe = "bs.tooltip",
      Se = t.fn.tooltip,
      je = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
      Ae = ["sanitize", "whiteList", "sanitizeFn"],
      ke = {
    animation: "boolean",
    template: "string",
    title: "(string|element|function)",
    trigger: "string",
    delay: "(number|object)",
    html: "boolean",
    selector: "(string|boolean)",
    placement: "(string|function)",
    offset: "(number|string|function)",
    container: "(string|element|boolean)",
    fallbackPlacement: "(string|array)",
    boundary: "(string|element)",
    sanitize: "boolean",
    sanitizeFn: "(null|function)",
    whiteList: "object",
    popperConfig: "(null|object)"
  },
      De = {
    AUTO: "auto",
    TOP: "top",
    RIGHT: "right",
    BOTTOM: "bottom",
    LEFT: "left"
  },
      Pe = {
    animation: !0,
    template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: "hover focus",
    title: "",
    delay: 0,
    html: !1,
    selector: !1,
    placement: "top",
    offset: 0,
    container: !1,
    fallbackPlacement: "flip",
    boundary: "scrollParent",
    sanitize: !0,
    sanitizeFn: null,
    whiteList: {
      "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
      a: ["target", "href", "title", "rel"],
      area: [],
      b: [],
      br: [],
      col: [],
      code: [],
      div: [],
      em: [],
      hr: [],
      h1: [],
      h2: [],
      h3: [],
      h4: [],
      h5: [],
      h6: [],
      i: [],
      img: ["src", "srcset", "alt", "title", "width", "height"],
      li: [],
      ol: [],
      p: [],
      pre: [],
      s: [],
      small: [],
      span: [],
      sub: [],
      sup: [],
      strong: [],
      u: [],
      ul: []
    },
    popperConfig: null
  },
      Ne = "show",
      Le = "out",
      Ie = {
    HIDE: "hide.bs.tooltip",
    HIDDEN: "hidden.bs.tooltip",
    SHOW: "show.bs.tooltip",
    SHOWN: "shown.bs.tooltip",
    INSERTED: "inserted.bs.tooltip",
    CLICK: "click.bs.tooltip",
    FOCUSIN: "focusin.bs.tooltip",
    FOCUSOUT: "focusout.bs.tooltip",
    MOUSEENTER: "mouseenter.bs.tooltip",
    MOUSELEAVE: "mouseleave.bs.tooltip"
  },
      Re = "fade",
      Me = "show",
      He = "hover",
      qe = "focus",
      Be = function () {
    function e(e, t) {
      if (void 0 === n) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
      this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = e, this.config = this._getConfig(t), this.tip = null, this._setListeners();
    }

    var r = e.prototype;
    return r.enable = function () {
      this._isEnabled = !0;
    }, r.disable = function () {
      this._isEnabled = !1;
    }, r.toggleEnabled = function () {
      this._isEnabled = !this._isEnabled;
    }, r.toggle = function (e) {
      if (this._isEnabled) if (e) {
        var n = this.constructor.DATA_KEY,
            r = t(e.currentTarget).data(n);
        r || (r = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(n, r)), r._activeTrigger.click = !r._activeTrigger.click, r._isWithActiveTrigger() ? r._enter(null, r) : r._leave(null, r);
      } else {
        if (t(this.getTipElement()).hasClass(Me)) return void this._leave(null, this);

        this._enter(null, this);
      }
    }, r.dispose = function () {
      clearTimeout(this._timeout), t.removeData(this.element, this.constructor.DATA_KEY), t(this.element).off(this.constructor.EVENT_KEY), t(this.element).closest(".modal").off("hide.bs.modal", this._hideModalHandler), this.tip && t(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null;
    }, r.show = function () {
      var e = this;
      if ("none" === t(this.element).css("display")) throw new Error("Please use show on visible elements");
      var r = t.Event(this.constructor.Event.SHOW);

      if (this.isWithContent() && this._isEnabled) {
        t(this.element).trigger(r);
        var i = s.findShadowRoot(this.element),
            o = t.contains(null !== i ? i : this.element.ownerDocument.documentElement, this.element);
        if (r.isDefaultPrevented() || !o) return;
        var a = this.getTipElement(),
            l = s.getUID(this.constructor.NAME);
        a.setAttribute("id", l), this.element.setAttribute("aria-describedby", l), this.setContent(), this.config.animation && t(a).addClass(Re);

        var u = "function" == typeof this.config.placement ? this.config.placement.call(this, a, this.element) : this.config.placement,
            c = this._getAttachment(u);

        this.addAttachmentClass(c);

        var f = this._getContainer();

        t(a).data(this.constructor.DATA_KEY, this), t.contains(this.element.ownerDocument.documentElement, this.tip) || t(a).appendTo(f), t(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new n(this.element, a, this._getPopperConfig(c)), t(a).addClass(Me), "ontouchstart" in document.documentElement && t(document.body).children().on("mouseover", null, t.noop);

        var d = function () {
          e.config.animation && e._fixTransition();
          var n = e._hoverState;
          e._hoverState = null, t(e.element).trigger(e.constructor.Event.SHOWN), n === Le && e._leave(null, e);
        };

        if (t(this.tip).hasClass(Re)) {
          var h = s.getTransitionDurationFromElement(this.tip);
          t(this.tip).one(s.TRANSITION_END, d).emulateTransitionEnd(h);
        } else d();
      }
    }, r.hide = function (e) {
      var n = this,
          r = this.getTipElement(),
          i = t.Event(this.constructor.Event.HIDE),
          o = function () {
        n._hoverState !== Ne && r.parentNode && r.parentNode.removeChild(r), n._cleanTipClass(), n.element.removeAttribute("aria-describedby"), t(n.element).trigger(n.constructor.Event.HIDDEN), null !== n._popper && n._popper.destroy(), e && e();
      };

      if (t(this.element).trigger(i), !i.isDefaultPrevented()) {
        if (t(r).removeClass(Me), "ontouchstart" in document.documentElement && t(document.body).children().off("mouseover", null, t.noop), this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1, t(this.tip).hasClass(Re)) {
          var a = s.getTransitionDurationFromElement(r);
          t(r).one(s.TRANSITION_END, o).emulateTransitionEnd(a);
        } else o();

        this._hoverState = "";
      }
    }, r.update = function () {
      null !== this._popper && this._popper.scheduleUpdate();
    }, r.isWithContent = function () {
      return Boolean(this.getTitle());
    }, r.addAttachmentClass = function (e) {
      t(this.getTipElement()).addClass("bs-tooltip-" + e);
    }, r.getTipElement = function () {
      return this.tip = this.tip || t(this.config.template)[0], this.tip;
    }, r.setContent = function () {
      var e = this.getTipElement();
      this.setElementContent(t(e.querySelectorAll(".tooltip-inner")), this.getTitle()), t(e).removeClass("fade show");
    }, r.setElementContent = function (e, n) {
      "object" != typeof n || !n.nodeType && !n.jquery ? this.config.html ? (this.config.sanitize && (n = Te(n, this.config.whiteList, this.config.sanitizeFn)), e.html(n)) : e.text(n) : this.config.html ? t(n).parent().is(e) || e.empty().append(n) : e.text(t(n).text());
    }, r.getTitle = function () {
      var e = this.element.getAttribute("data-original-title");
      return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), e;
    }, r._getPopperConfig = function (e) {
      var t = this;
      return o({}, {
        placement: e,
        modifiers: {
          offset: this._getOffset(),
          flip: {
            behavior: this.config.fallbackPlacement
          },
          arrow: {
            element: ".arrow"
          },
          preventOverflow: {
            boundariesElement: this.config.boundary
          }
        },
        onCreate: function (e) {
          e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e);
        },
        onUpdate: function (e) {
          return t._handlePopperPlacementChange(e);
        }
      }, this.config.popperConfig);
    }, r._getOffset = function () {
      var e = this,
          t = {};
      return "function" == typeof this.config.offset ? t.fn = function (t) {
        return t.offsets = o({}, t.offsets, e.config.offset(t.offsets, e.element) || {}), t;
      } : t.offset = this.config.offset, t;
    }, r._getContainer = function () {
      return !1 === this.config.container ? document.body : s.isElement(this.config.container) ? t(this.config.container) : t(document).find(this.config.container);
    }, r._getAttachment = function (e) {
      return De[e.toUpperCase()];
    }, r._setListeners = function () {
      var e = this;
      this.config.trigger.split(" ").forEach(function (n) {
        if ("click" === n) t(e.element).on(e.constructor.Event.CLICK, e.config.selector, function (t) {
          return e.toggle(t);
        });else if ("manual" !== n) {
          var r = n === He ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN,
              i = n === He ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;
          t(e.element).on(r, e.config.selector, function (t) {
            return e._enter(t);
          }).on(i, e.config.selector, function (t) {
            return e._leave(t);
          });
        }
      }), this._hideModalHandler = function () {
        e.element && e.hide();
      }, t(this.element).closest(".modal").on("hide.bs.modal", this._hideModalHandler), this.config.selector ? this.config = o({}, this.config, {
        trigger: "manual",
        selector: ""
      }) : this._fixTitle();
    }, r._fixTitle = function () {
      var e = typeof this.element.getAttribute("data-original-title");
      (this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""));
    }, r._enter = function (e, n) {
      var r = this.constructor.DATA_KEY;
      (n = n || t(e.currentTarget).data(r)) || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(r, n)), e && (n._activeTrigger["focusin" === e.type ? qe : He] = !0), t(n.getTipElement()).hasClass(Me) || n._hoverState === Ne ? n._hoverState = Ne : (clearTimeout(n._timeout), n._hoverState = Ne, n.config.delay && n.config.delay.show ? n._timeout = setTimeout(function () {
        n._hoverState === Ne && n.show();
      }, n.config.delay.show) : n.show());
    }, r._leave = function (e, n) {
      var r = this.constructor.DATA_KEY;
      (n = n || t(e.currentTarget).data(r)) || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(r, n)), e && (n._activeTrigger["focusout" === e.type ? qe : He] = !1), n._isWithActiveTrigger() || (clearTimeout(n._timeout), n._hoverState = Le, n.config.delay && n.config.delay.hide ? n._timeout = setTimeout(function () {
        n._hoverState === Le && n.hide();
      }, n.config.delay.hide) : n.hide());
    }, r._isWithActiveTrigger = function () {
      for (var e in this._activeTrigger) if (this._activeTrigger[e]) return !0;

      return !1;
    }, r._getConfig = function (e) {
      var n = t(this.element).data();
      return Object.keys(n).forEach(function (e) {
        -1 !== Ae.indexOf(e) && delete n[e];
      }), "number" == typeof (e = o({}, this.constructor.Default, n, "object" == typeof e && e ? e : {})).delay && (e.delay = {
        show: e.delay,
        hide: e.delay
      }), "number" == typeof e.title && (e.title = e.title.toString()), "number" == typeof e.content && (e.content = e.content.toString()), s.typeCheckConfig(Ce, e, this.constructor.DefaultType), e.sanitize && (e.template = Te(e.template, e.whiteList, e.sanitizeFn)), e;
    }, r._getDelegateConfig = function () {
      var e = {};
      if (this.config) for (var t in this.config) this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
      return e;
    }, r._cleanTipClass = function () {
      var e = t(this.getTipElement()),
          n = e.attr("class").match(je);
      null !== n && n.length && e.removeClass(n.join(""));
    }, r._handlePopperPlacementChange = function (e) {
      this.tip = e.instance.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(e.placement));
    }, r._fixTransition = function () {
      var e = this.getTipElement(),
          n = this.config.animation;
      null === e.getAttribute("x-placement") && (t(e).removeClass(Re), this.config.animation = !1, this.hide(), this.show(), this.config.animation = n);
    }, e._jQueryInterface = function (n) {
      return this.each(function () {
        var r = t(this).data(Oe),
            i = "object" == typeof n && n;

        if ((r || !/dispose|hide/.test(n)) && (r || (r = new e(this, i), t(this).data(Oe, r)), "string" == typeof n)) {
          if (void 0 === r[n]) throw new TypeError('No method named "' + n + '"');
          r[n]();
        }
      });
    }, i(e, null, [{
      key: "VERSION",
      get: function () {
        return "4.5.2";
      }
    }, {
      key: "Default",
      get: function () {
        return Pe;
      }
    }, {
      key: "NAME",
      get: function () {
        return Ce;
      }
    }, {
      key: "DATA_KEY",
      get: function () {
        return Oe;
      }
    }, {
      key: "Event",
      get: function () {
        return Ie;
      }
    }, {
      key: "EVENT_KEY",
      get: function () {
        return ".bs.tooltip";
      }
    }, {
      key: "DefaultType",
      get: function () {
        return ke;
      }
    }]), e;
  }();

  t.fn.tooltip = Be._jQueryInterface, t.fn.tooltip.Constructor = Be, t.fn.tooltip.noConflict = function () {
    return t.fn.tooltip = Se, Be._jQueryInterface;
  };

  var Fe = "bs.popover",
      Xe = t.fn.popover,
      We = new RegExp("(^|\\s)bs-popover\\S+", "g"),
      ze = o({}, Be.Default, {
    placement: "right",
    trigger: "click",
    content: "",
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
  }),
      Ge = o({}, Be.DefaultType, {
    content: "(string|element|function)"
  }),
      Ue = {
    HIDE: "hide.bs.popover",
    HIDDEN: "hidden.bs.popover",
    SHOW: "show.bs.popover",
    SHOWN: "shown.bs.popover",
    INSERTED: "inserted.bs.popover",
    CLICK: "click.bs.popover",
    FOCUSIN: "focusin.bs.popover",
    FOCUSOUT: "focusout.bs.popover",
    MOUSEENTER: "mouseenter.bs.popover",
    MOUSELEAVE: "mouseleave.bs.popover"
  },
      $e = function (e) {
    var n, r;

    function o() {
      return e.apply(this, arguments) || this;
    }

    r = e, (n = o).prototype = Object.create(r.prototype), n.prototype.constructor = n, n.__proto__ = r;
    var a = o.prototype;
    return a.isWithContent = function () {
      return this.getTitle() || this._getContent();
    }, a.addAttachmentClass = function (e) {
      t(this.getTipElement()).addClass("bs-popover-" + e);
    }, a.getTipElement = function () {
      return this.tip = this.tip || t(this.config.template)[0], this.tip;
    }, a.setContent = function () {
      var e = t(this.getTipElement());
      this.setElementContent(e.find(".popover-header"), this.getTitle());

      var n = this._getContent();

      "function" == typeof n && (n = n.call(this.element)), this.setElementContent(e.find(".popover-body"), n), e.removeClass("fade show");
    }, a._getContent = function () {
      return this.element.getAttribute("data-content") || this.config.content;
    }, a._cleanTipClass = function () {
      var e = t(this.getTipElement()),
          n = e.attr("class").match(We);
      null !== n && n.length > 0 && e.removeClass(n.join(""));
    }, o._jQueryInterface = function (e) {
      return this.each(function () {
        var n = t(this).data(Fe),
            r = "object" == typeof e ? e : null;

        if ((n || !/dispose|hide/.test(e)) && (n || (n = new o(this, r), t(this).data(Fe, n)), "string" == typeof e)) {
          if (void 0 === n[e]) throw new TypeError('No method named "' + e + '"');
          n[e]();
        }
      });
    }, i(o, null, [{
      key: "VERSION",
      get: function () {
        return "4.5.2";
      }
    }, {
      key: "Default",
      get: function () {
        return ze;
      }
    }, {
      key: "NAME",
      get: function () {
        return "popover";
      }
    }, {
      key: "DATA_KEY",
      get: function () {
        return Fe;
      }
    }, {
      key: "Event",
      get: function () {
        return Ue;
      }
    }, {
      key: "EVENT_KEY",
      get: function () {
        return ".bs.popover";
      }
    }, {
      key: "DefaultType",
      get: function () {
        return Ge;
      }
    }]), o;
  }(Be);

  t.fn.popover = $e._jQueryInterface, t.fn.popover.Constructor = $e, t.fn.popover.noConflict = function () {
    return t.fn.popover = Xe, $e._jQueryInterface;
  };

  var Ve = "scrollspy",
      Qe = "bs.scrollspy",
      Ye = t.fn[Ve],
      Ke = {
    offset: 10,
    method: "auto",
    target: ""
  },
      Je = {
    offset: "number",
    method: "string",
    target: "(string|element)"
  },
      Ze = "active",
      et = ".nav, .list-group",
      tt = "position",
      nt = function () {
    function e(e, n) {
      var r = this;
      this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(n), this._selector = this._config.target + " .nav-link," + this._config.target + " .list-group-item," + this._config.target + " .dropdown-item", this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, t(this._scrollElement).on("scroll.bs.scrollspy", function (e) {
        return r._process(e);
      }), this.refresh(), this._process();
    }

    var n = e.prototype;
    return n.refresh = function () {
      var e = this,
          n = "auto" === this._config.method ? this._scrollElement === this._scrollElement.window ? "offset" : tt : this._config.method,
          r = n === tt ? this._getScrollTop() : 0;
      this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map(function (e) {
        var i,
            o = s.getSelectorFromElement(e);

        if (o && (i = document.querySelector(o)), i) {
          var a = i.getBoundingClientRect();
          if (a.width || a.height) return [t(i)[n]().top + r, o];
        }

        return null;
      }).filter(function (e) {
        return e;
      }).sort(function (e, t) {
        return e[0] - t[0];
      }).forEach(function (t) {
        e._offsets.push(t[0]), e._targets.push(t[1]);
      });
    }, n.dispose = function () {
      t.removeData(this._element, Qe), t(this._scrollElement).off(".bs.scrollspy"), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null;
    }, n._getConfig = function (e) {
      if ("string" != typeof (e = o({}, Ke, "object" == typeof e && e ? e : {})).target && s.isElement(e.target)) {
        var n = t(e.target).attr("id");
        n || (n = s.getUID(Ve), t(e.target).attr("id", n)), e.target = "#" + n;
      }

      return s.typeCheckConfig(Ve, e, Je), e;
    }, n._getScrollTop = function () {
      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
    }, n._getScrollHeight = function () {
      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    }, n._getOffsetHeight = function () {
      return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
    }, n._process = function () {
      var e = this._getScrollTop() + this._config.offset,
          t = this._getScrollHeight(),
          n = this._config.offset + t - this._getOffsetHeight();

      if (this._scrollHeight !== t && this.refresh(), e >= n) {
        var r = this._targets[this._targets.length - 1];
        this._activeTarget !== r && this._activate(r);
      } else {
        if (this._activeTarget && e < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();

        for (var i = this._offsets.length; i--;) this._activeTarget !== this._targets[i] && e >= this._offsets[i] && (void 0 === this._offsets[i + 1] || e < this._offsets[i + 1]) && this._activate(this._targets[i]);
      }
    }, n._activate = function (e) {
      this._activeTarget = e, this._clear();

      var n = this._selector.split(",").map(function (t) {
        return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]';
      }),
          r = t([].slice.call(document.querySelectorAll(n.join(","))));

      r.hasClass("dropdown-item") ? (r.closest(".dropdown").find(".dropdown-toggle").addClass(Ze), r.addClass(Ze)) : (r.addClass(Ze), r.parents(et).prev(".nav-link, .list-group-item").addClass(Ze), r.parents(et).prev(".nav-item").children(".nav-link").addClass(Ze)), t(this._scrollElement).trigger("activate.bs.scrollspy", {
        relatedTarget: e
      });
    }, n._clear = function () {
      [].slice.call(document.querySelectorAll(this._selector)).filter(function (e) {
        return e.classList.contains(Ze);
      }).forEach(function (e) {
        return e.classList.remove(Ze);
      });
    }, e._jQueryInterface = function (n) {
      return this.each(function () {
        var r = t(this).data(Qe);

        if (r || (r = new e(this, "object" == typeof n && n), t(this).data(Qe, r)), "string" == typeof n) {
          if (void 0 === r[n]) throw new TypeError('No method named "' + n + '"');
          r[n]();
        }
      });
    }, i(e, null, [{
      key: "VERSION",
      get: function () {
        return "4.5.2";
      }
    }, {
      key: "Default",
      get: function () {
        return Ke;
      }
    }]), e;
  }();

  t(window).on("load.bs.scrollspy.data-api", function () {
    for (var e = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')), n = e.length; n--;) {
      var r = t(e[n]);

      nt._jQueryInterface.call(r, r.data());
    }
  }), t.fn[Ve] = nt._jQueryInterface, t.fn[Ve].Constructor = nt, t.fn[Ve].noConflict = function () {
    return t.fn[Ve] = Ye, nt._jQueryInterface;
  };

  var rt = "bs.tab",
      it = t.fn.tab,
      ot = "active",
      at = "fade",
      st = "show",
      lt = ".active",
      ut = "> li > .active",
      ct = function () {
    function e(e) {
      this._element = e;
    }

    var n = e.prototype;
    return n.show = function () {
      var e = this;

      if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && t(this._element).hasClass(ot) || t(this._element).hasClass("disabled"))) {
        var n,
            r,
            i = t(this._element).closest(".nav, .list-group")[0],
            o = s.getSelectorFromElement(this._element);

        if (i) {
          var a = "UL" === i.nodeName || "OL" === i.nodeName ? ut : lt;
          r = (r = t.makeArray(t(i).find(a)))[r.length - 1];
        }

        var l = t.Event("hide.bs.tab", {
          relatedTarget: this._element
        }),
            u = t.Event("show.bs.tab", {
          relatedTarget: r
        });

        if (r && t(r).trigger(l), t(this._element).trigger(u), !u.isDefaultPrevented() && !l.isDefaultPrevented()) {
          o && (n = document.querySelector(o)), this._activate(this._element, i);

          var c = function () {
            var n = t.Event("hidden.bs.tab", {
              relatedTarget: e._element
            }),
                i = t.Event("shown.bs.tab", {
              relatedTarget: r
            });
            t(r).trigger(n), t(e._element).trigger(i);
          };

          n ? this._activate(n, n.parentNode, c) : c();
        }
      }
    }, n.dispose = function () {
      t.removeData(this._element, rt), this._element = null;
    }, n._activate = function (e, n, r) {
      var i = this,
          o = (!n || "UL" !== n.nodeName && "OL" !== n.nodeName ? t(n).children(lt) : t(n).find(ut))[0],
          a = r && o && t(o).hasClass(at),
          l = function () {
        return i._transitionComplete(e, o, r);
      };

      if (o && a) {
        var u = s.getTransitionDurationFromElement(o);
        t(o).removeClass(st).one(s.TRANSITION_END, l).emulateTransitionEnd(u);
      } else l();
    }, n._transitionComplete = function (e, n, r) {
      if (n) {
        t(n).removeClass(ot);
        var i = t(n.parentNode).find("> .dropdown-menu .active")[0];
        i && t(i).removeClass(ot), "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !1);
      }

      if (t(e).addClass(ot), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), s.reflow(e), e.classList.contains(at) && e.classList.add(st), e.parentNode && t(e.parentNode).hasClass("dropdown-menu")) {
        var o = t(e).closest(".dropdown")[0];

        if (o) {
          var a = [].slice.call(o.querySelectorAll(".dropdown-toggle"));
          t(a).addClass(ot);
        }

        e.setAttribute("aria-expanded", !0);
      }

      r && r();
    }, e._jQueryInterface = function (n) {
      return this.each(function () {
        var r = t(this),
            i = r.data(rt);

        if (i || (i = new e(this), r.data(rt, i)), "string" == typeof n) {
          if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
          i[n]();
        }
      });
    }, i(e, null, [{
      key: "VERSION",
      get: function () {
        return "4.5.2";
      }
    }]), e;
  }();

  t(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', function (e) {
    e.preventDefault(), ct._jQueryInterface.call(t(this), "show");
  }), t.fn.tab = ct._jQueryInterface, t.fn.tab.Constructor = ct, t.fn.tab.noConflict = function () {
    return t.fn.tab = it, ct._jQueryInterface;
  };

  var ft = "bs.toast",
      dt = t.fn.toast,
      ht = "click.dismiss.bs.toast",
      pt = "hide",
      gt = "show",
      vt = "showing",
      mt = {
    animation: "boolean",
    autohide: "boolean",
    delay: "number"
  },
      yt = {
    animation: !0,
    autohide: !0,
    delay: 500
  },
      _t = function () {
    function e(e, t) {
      this._element = e, this._config = this._getConfig(t), this._timeout = null, this._setListeners();
    }

    var n = e.prototype;
    return n.show = function () {
      var e = this,
          n = t.Event("show.bs.toast");

      if (t(this._element).trigger(n), !n.isDefaultPrevented()) {
        this._clearTimeout(), this._config.animation && this._element.classList.add("fade");

        var r = function () {
          e._element.classList.remove(vt), e._element.classList.add(gt), t(e._element).trigger("shown.bs.toast"), e._config.autohide && (e._timeout = setTimeout(function () {
            e.hide();
          }, e._config.delay));
        };

        if (this._element.classList.remove(pt), s.reflow(this._element), this._element.classList.add(vt), this._config.animation) {
          var i = s.getTransitionDurationFromElement(this._element);
          t(this._element).one(s.TRANSITION_END, r).emulateTransitionEnd(i);
        } else r();
      }
    }, n.hide = function () {
      if (this._element.classList.contains(gt)) {
        var e = t.Event("hide.bs.toast");
        t(this._element).trigger(e), e.isDefaultPrevented() || this._close();
      }
    }, n.dispose = function () {
      this._clearTimeout(), this._element.classList.contains(gt) && this._element.classList.remove(gt), t(this._element).off(ht), t.removeData(this._element, ft), this._element = null, this._config = null;
    }, n._getConfig = function (e) {
      return e = o({}, yt, t(this._element).data(), "object" == typeof e && e ? e : {}), s.typeCheckConfig("toast", e, this.constructor.DefaultType), e;
    }, n._setListeners = function () {
      var e = this;
      t(this._element).on(ht, '[data-dismiss="toast"]', function () {
        return e.hide();
      });
    }, n._close = function () {
      var e = this,
          n = function () {
        e._element.classList.add(pt), t(e._element).trigger("hidden.bs.toast");
      };

      if (this._element.classList.remove(gt), this._config.animation) {
        var r = s.getTransitionDurationFromElement(this._element);
        t(this._element).one(s.TRANSITION_END, n).emulateTransitionEnd(r);
      } else n();
    }, n._clearTimeout = function () {
      clearTimeout(this._timeout), this._timeout = null;
    }, e._jQueryInterface = function (n) {
      return this.each(function () {
        var r = t(this),
            i = r.data(ft);

        if (i || (i = new e(this, "object" == typeof n && n), r.data(ft, i)), "string" == typeof n) {
          if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
          i[n](this);
        }
      });
    }, i(e, null, [{
      key: "VERSION",
      get: function () {
        return "4.5.2";
      }
    }, {
      key: "DefaultType",
      get: function () {
        return mt;
      }
    }, {
      key: "Default",
      get: function () {
        return yt;
      }
    }]), e;
  }();

  t.fn.toast = _t._jQueryInterface, t.fn.toast.Constructor = _t, t.fn.toast.noConflict = function () {
    return t.fn.toast = dt, _t._jQueryInterface;
  }, e.Alert = c, e.Button = m, e.Carousel = A, e.Collapse = F, e.Dropdown = re, e.Modal = be, e.Popover = $e, e.Scrollspy = nt, e.Tab = ct, e.Toast = _t, e.Tooltip = Be, e.Util = s, Object.defineProperty(e, "__esModule", {
    value: !0
  });
}), function (e) {
  var t = {};

  function n(r) {
    if (t[r]) return t[r].exports;
    var i = t[r] = {
      i: r,
      l: !1,
      exports: {}
    };
    return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
  }

  n.m = e, n.c = t, n.d = function (e, t, r) {
    n.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: r
    });
  }, n.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, n.t = function (e, t) {
    if (1 & t && (e = n(e)), 8 & t) return e;
    if (4 & t && "object" == typeof e && e && e.__esModule) return e;
    var r = Object.create(null);
    if (n.r(r), Object.defineProperty(r, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var i in e) n.d(r, i, function (t) {
      return e[t];
    }.bind(null, i));
    return r;
  }, n.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default;
    } : function () {
      return e;
    };
    return n.d(t, "a", t), t;
  }, n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, n.p = "", n(n.s = 15);
}([function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = function e(t, n) {
    !function (e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }(this, e), this.data = t, this.text = n.text || t, this.options = n;
  };
}, function (e, t, n) {
  "use strict";

  var r;

  function i(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e;
  }

  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = t.SET_A = 0,
      a = t.SET_B = 1,
      s = t.SET_C = 2,
      l = (t.SHIFT = 98, t.START_A = 103),
      u = t.START_B = 104,
      c = t.START_C = 105;
  t.MODULO = 103, t.STOP = 106, t.FNC1 = 207, t.SET_BY_CODE = (i(r = {}, l, o), i(r, u, a), i(r, c, s), r), t.SWAP = {
    101: o,
    100: a,
    99: s
  }, t.A_START_CHAR = String.fromCharCode(208), t.B_START_CHAR = String.fromCharCode(209), t.C_START_CHAR = String.fromCharCode(210), t.A_CHARS = "[\0-_\xc8-\xcf]", t.B_CHARS = "[ -\x7f\xc8-\xcf]", t.C_CHARS = "(\xcf*[0-9]{2}\xcf*)", t.BARS = [11011001100, 11001101100, 11001100110, 10010011e3, 10010001100, 10001001100, 10011001e3, 10011000100, 10001100100, 11001001e3, 11001000100, 11000100100, 10110011100, 10011011100, 10011001110, 10111001100, 10011101100, 10011100110, 11001110010, 11001011100, 11001001110, 11011100100, 11001110100, 11101101110, 11101001100, 11100101100, 11100100110, 11101100100, 11100110100, 11100110010, 11011011e3, 11011000110, 11000110110, 10100011e3, 10001011e3, 10001000110, 10110001e3, 10001101e3, 10001100010, 11010001e3, 11000101e3, 11000100010, 10110111e3, 10110001110, 10001101110, 10111011e3, 10111000110, 10001110110, 11101110110, 11010001110, 11000101110, 11011101e3, 11011100010, 11011101110, 11101011e3, 11101000110, 11100010110, 11101101e3, 11101100010, 11100011010, 11101111010, 11001000010, 11110001010, 1010011e4, 10100001100, 1001011e4, 10010000110, 10000101100, 10000100110, 1011001e4, 10110000100, 1001101e4, 10011000010, 10000110100, 10000110010, 11000010010, 1100101e4, 11110111010, 11000010100, 10001111010, 10100111100, 10010111100, 10010011110, 10111100100, 10011110100, 10011110010, 11110100100, 11110010100, 11110010010, 11011011110, 11011110110, 11110110110, 10101111e3, 10100011110, 10001011110, 10111101e3, 10111100010, 11110101e3, 11110100010, 10111011110, 10111101110, 11101011110, 11110101110, 11010000100, 1101001e4, 11010011100, 1100011101011];
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.SIDE_BIN = "101", t.MIDDLE_BIN = "01010", t.BINARIES = {
    L: ["0001101", "0011001", "0010011", "0111101", "0100011", "0110001", "0101111", "0111011", "0110111", "0001011"],
    G: ["0100111", "0110011", "0011011", "0100001", "0011101", "0111001", "0000101", "0010001", "0001001", "0010111"],
    R: ["1110010", "1100110", "1101100", "1000010", "1011100", "1001110", "1010000", "1000100", "1001000", "1110100"],
    O: ["0001101", "0011001", "0010011", "0111101", "0100011", "0110001", "0101111", "0111011", "0110111", "0001011"],
    E: ["0100111", "0110011", "0011011", "0100001", "0011101", "0111001", "0000101", "0010001", "0001001", "0010111"]
  }, t.EAN2_STRUCTURE = ["LL", "LG", "GL", "GG"], t.EAN5_STRUCTURE = ["GGLLL", "GLGLL", "GLLGL", "GLLLG", "LGGLL", "LLGGL", "LLLGG", "LGLGL", "LGLLG", "LLGLG"], t.EAN13_STRUCTURE = ["LLLLLL", "LLGLGG", "LLGGLG", "LLGGGL", "LGLLGG", "LGGLLG", "LGGGLL", "LGLGLG", "LGLGGL", "LGGLGL"];
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var r = n(2);

  t.default = function (e, t, n) {
    var i = e.split("").map(function (e, n) {
      return r.BINARIES[t[n]];
    }).map(function (t, n) {
      return t ? t[e[n]] : "";
    });

    if (n) {
      var o = e.length - 1;
      i = i.map(function (e, t) {
        return t < o ? e + n : e;
      });
    }

    return i.join("");
  };
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });

  var r,
      i = function () {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }

    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  }(),
      o = function (e) {
    function t(e, n) {
      return function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }(this, t), function (e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
      }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
    }

    return function (e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }(t, e), i(t, [{
      key: "encode",
      value: function () {
        for (var e = "110", t = 0; t < this.data.length; t++) {
          var n = parseInt(this.data[t]).toString(2);
          n = a(n, 4 - n.length);

          for (var r = 0; r < n.length; r++) e += "0" == n[r] ? "100" : "110";
        }

        return {
          data: e += "1001",
          text: this.text
        };
      }
    }, {
      key: "valid",
      value: function () {
        return -1 !== this.data.search(/^[0-9]+$/);
      }
    }]), t;
  }(((r = n(0)) && r.__esModule ? r : {
    default: r
  }).default);

  function a(e, t) {
    for (var n = 0; n < t; n++) e = "0" + e;

    return e;
  }

  t.default = o;
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });

  var r,
      i = function () {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }

    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  }(),
      o = (r = n(0)) && r.__esModule ? r : {
    default: r
  },
      a = n(1),
      s = function (e) {
    function t(e, n) {
      !function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }(this, t);

      var r = function (e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
      }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e.substring(1), n));

      return r.bytes = e.split("").map(function (e) {
        return e.charCodeAt(0);
      }), r;
    }

    return function (e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }(t, e), i(t, [{
      key: "valid",
      value: function () {
        return /^[\x00-\x7F\xC8-\xD3]+$/.test(this.data);
      }
    }, {
      key: "encode",
      value: function () {
        var e = this.bytes,
            n = e.shift() - 105,
            r = a.SET_BY_CODE[n];
        if (void 0 === r) throw new RangeError("The encoding does not start with a start character.");
        !0 === this.shouldEncodeAsEan128() && e.unshift(a.FNC1);
        var i = t.next(e, 1, r);
        return {
          text: this.text === this.data ? this.text.replace(/[^\x20-\x7E]/g, "") : this.text,
          data: t.getBar(n) + i.result + t.getBar((i.checksum + n) % a.MODULO) + t.getBar(a.STOP)
        };
      }
    }, {
      key: "shouldEncodeAsEan128",
      value: function () {
        var e = this.options.ean128 || !1;
        return "string" == typeof e && (e = "true" === e.toLowerCase()), e;
      }
    }], [{
      key: "getBar",
      value: function (e) {
        return a.BARS[e] ? a.BARS[e].toString() : "";
      }
    }, {
      key: "correctIndex",
      value: function (e, t) {
        if (t === a.SET_A) {
          var n = e.shift();
          return n < 32 ? n + 64 : n - 32;
        }

        return t === a.SET_B ? e.shift() - 32 : 10 * (e.shift() - 48) + e.shift() - 48;
      }
    }, {
      key: "next",
      value: function (e, n, r) {
        if (!e.length) return {
          result: "",
          checksum: 0
        };
        var i = void 0,
            o = void 0;

        if (e[0] >= 200) {
          o = e.shift() - 105;
          var s = a.SWAP[o];
          void 0 !== s ? i = t.next(e, n + 1, s) : (r !== a.SET_A && r !== a.SET_B || o !== a.SHIFT || (e[0] = r === a.SET_A ? e[0] > 95 ? e[0] - 96 : e[0] : e[0] < 32 ? e[0] + 96 : e[0]), i = t.next(e, n + 1, r));
        } else o = t.correctIndex(e, r), i = t.next(e, n + 1, r);

        var l = o * n;
        return {
          result: t.getBar(o) + i.result,
          checksum: l + i.checksum
        };
      }
    }]), t;
  }(o.default);

  t.default = s;
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.mod10 = function (e) {
    for (var t = 0, n = 0; n < e.length; n++) {
      var r = parseInt(e[n]);
      t += (n + e.length) % 2 == 0 ? r : 2 * r % 10 + Math.floor(2 * r / 10);
    }

    return (10 - t % 10) % 10;
  }, t.mod11 = function (e) {
    for (var t = 0, n = [2, 3, 4, 5, 6, 7], r = 0; r < e.length; r++) {
      var i = parseInt(e[e.length - 1 - r]);
      t += n[r % n.length] * i;
    }

    return (11 - t % 11) % 11;
  };
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });

  var r = Object.assign || function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];

      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }

    return e;
  };

  t.default = function (e, t) {
    return r({}, e, t);
  };
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });

  var r = function () {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }

    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  }(),
      i = n(2),
      o = a(n(3));

  function a(e) {
    return e && e.__esModule ? e : {
      default: e
    };
  }

  var s = function (e) {
    function t(e, n) {
      !function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }(this, t);

      var r = function (e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
      }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));

      return r.fontSize = !n.flat && n.fontSize > 10 * n.width ? 10 * n.width : n.fontSize, r.guardHeight = n.height + r.fontSize / 2 + n.textMargin, r;
    }

    return function (e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }(t, e), r(t, [{
      key: "encode",
      value: function () {
        return this.options.flat ? this.encodeFlat() : this.encodeGuarded();
      }
    }, {
      key: "leftText",
      value: function (e, t) {
        return this.text.substr(e, t);
      }
    }, {
      key: "leftEncode",
      value: function (e, t) {
        return (0, o.default)(e, t);
      }
    }, {
      key: "rightText",
      value: function (e, t) {
        return this.text.substr(e, t);
      }
    }, {
      key: "rightEncode",
      value: function (e, t) {
        return (0, o.default)(e, t);
      }
    }, {
      key: "encodeGuarded",
      value: function () {
        var e = {
          fontSize: this.fontSize
        },
            t = {
          height: this.guardHeight
        };
        return [{
          data: i.SIDE_BIN,
          options: t
        }, {
          data: this.leftEncode(),
          text: this.leftText(),
          options: e
        }, {
          data: i.MIDDLE_BIN,
          options: t
        }, {
          data: this.rightEncode(),
          text: this.rightText(),
          options: e
        }, {
          data: i.SIDE_BIN,
          options: t
        }];
      }
    }, {
      key: "encodeFlat",
      value: function () {
        return {
          data: [i.SIDE_BIN, this.leftEncode(), i.MIDDLE_BIN, this.rightEncode(), i.SIDE_BIN].join(""),
          text: this.text
        };
      }
    }]), t;
  }(a(n(0)).default);

  t.default = s;
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });

  var r = function () {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }

    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  }();

  t.checksum = s;
  var i = o(n(3));

  function o(e) {
    return e && e.__esModule ? e : {
      default: e
    };
  }

  var a = function (e) {
    function t(e, n) {
      !function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }(this, t), -1 !== e.search(/^[0-9]{11}$/) && (e += s(e));

      var r = function (e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
      }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));

      return r.displayValue = n.displayValue, r.fontSize = n.fontSize > 10 * n.width ? 10 * n.width : n.fontSize, r.guardHeight = n.height + r.fontSize / 2 + n.textMargin, r;
    }

    return function (e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }(t, e), r(t, [{
      key: "valid",
      value: function () {
        return -1 !== this.data.search(/^[0-9]{12}$/) && this.data[11] == s(this.data);
      }
    }, {
      key: "encode",
      value: function () {
        return this.options.flat ? this.flatEncoding() : this.guardedEncoding();
      }
    }, {
      key: "flatEncoding",
      value: function () {
        var e = "";
        return e += "101", e += (0, i.default)(this.data.substr(0, 6), "LLLLLL"), e += "01010", e += (0, i.default)(this.data.substr(6, 6), "RRRRRR"), {
          data: e += "101",
          text: this.text
        };
      }
    }, {
      key: "guardedEncoding",
      value: function () {
        var e = [];
        return this.displayValue && e.push({
          data: "00000000",
          text: this.text.substr(0, 1),
          options: {
            textAlign: "left",
            fontSize: this.fontSize
          }
        }), e.push({
          data: "101" + (0, i.default)(this.data[0], "L"),
          options: {
            height: this.guardHeight
          }
        }), e.push({
          data: (0, i.default)(this.data.substr(1, 5), "LLLLL"),
          text: this.text.substr(1, 5),
          options: {
            fontSize: this.fontSize
          }
        }), e.push({
          data: "01010",
          options: {
            height: this.guardHeight
          }
        }), e.push({
          data: (0, i.default)(this.data.substr(6, 5), "RRRRR"),
          text: this.text.substr(6, 5),
          options: {
            fontSize: this.fontSize
          }
        }), e.push({
          data: (0, i.default)(this.data[11], "R") + "101",
          options: {
            height: this.guardHeight
          }
        }), this.displayValue && e.push({
          data: "00000000",
          text: this.text.substr(11, 1),
          options: {
            textAlign: "right",
            fontSize: this.fontSize
          }
        }), e;
      }
    }]), t;
  }(o(n(0)).default);

  function s(e) {
    var t,
        n = 0;

    for (t = 1; t < 11; t += 2) n += parseInt(e[t]);

    for (t = 0; t < 11; t += 2) n += 3 * parseInt(e[t]);

    return (10 - n % 10) % 10;
  }

  t.default = a;
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });

  var r,
      i = function () {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }

    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  }(),
      o = n(31);

  function a(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }

  function s(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" != typeof t && "function" != typeof t ? e : t;
  }

  var l = function (e) {
    function t() {
      return a(this, t), s(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
    }

    return function (e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }(t, e), i(t, [{
      key: "valid",
      value: function () {
        return -1 !== this.data.search(/^([0-9]{2})+$/);
      }
    }, {
      key: "encode",
      value: function () {
        var e = this,
            t = this.data.match(/.{2}/g).map(function (t) {
          return e.encodePair(t);
        }).join("");
        return {
          data: o.START_BIN + t + o.END_BIN,
          text: this.text
        };
      }
    }, {
      key: "encodePair",
      value: function (e) {
        var t = o.BINARIES[e[1]];
        return o.BINARIES[e[0]].split("").map(function (e, n) {
          return ("1" === e ? "111" : "1") + ("1" === t[n] ? "000" : "0");
        }).join("");
      }
    }]), t;
  }(((r = n(0)) && r.__esModule ? r : {
    default: r
  }).default);

  t.default = l;
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = function (e) {
    var t = ["width", "height", "textMargin", "fontSize", "margin", "marginTop", "marginBottom", "marginLeft", "marginRight"];

    for (var n in t) t.hasOwnProperty(n) && "string" == typeof e[n = t[n]] && (e[n] = parseInt(e[n], 10));

    return "string" == typeof e.displayValue && (e.displayValue = "false" != e.displayValue), e;
  };
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = {
    width: 2,
    height: 100,
    format: "auto",
    displayValue: !0,
    fontOptions: "",
    font: "monospace",
    text: void 0,
    textAlign: "center",
    textPosition: "bottom",
    textMargin: 2,
    fontSize: 20,
    background: "#ffffff",
    lineColor: "#000000",
    margin: 10,
    marginTop: void 0,
    marginBottom: void 0,
    marginLeft: void 0,
    marginRight: void 0,
    valid: function () {}
  };
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.getTotalWidthOfEncodings = t.calculateEncodingAttributes = t.getBarcodePadding = t.getEncodingHeight = t.getMaximumHeightOfEncodings = void 0;
  var r,
      i = (r = n(7)) && r.__esModule ? r : {
    default: r
  };

  function o(e, t) {
    return t.height + (t.displayValue && e.text.length > 0 ? t.fontSize + t.textMargin : 0) + t.marginTop + t.marginBottom;
  }

  function a(e, t, n) {
    if (n.displayValue && t < e) {
      if ("center" == n.textAlign) return Math.floor((e - t) / 2);
      if ("left" == n.textAlign) return 0;
      if ("right" == n.textAlign) return Math.floor(e - t);
    }

    return 0;
  }

  function s(e, t, n) {
    var r;
    if (n) r = n;else {
      if ("undefined" == typeof document) return 0;
      r = document.createElement("canvas").getContext("2d");
    }
    return r.font = t.fontOptions + " " + t.fontSize + "px " + t.font, r.measureText(e).width;
  }

  t.getMaximumHeightOfEncodings = function (e) {
    for (var t = 0, n = 0; n < e.length; n++) e[n].height > t && (t = e[n].height);

    return t;
  }, t.getEncodingHeight = o, t.getBarcodePadding = a, t.calculateEncodingAttributes = function (e, t, n) {
    for (var r = 0; r < e.length; r++) {
      var l,
          u = e[r],
          c = (0, i.default)(t, u.options);
      l = c.displayValue ? s(u.text, c, n) : 0;
      var f = u.data.length * c.width;
      u.width = Math.ceil(Math.max(l, f)), u.height = o(u, c), u.barcodePadding = a(l, f, c);
    }
  }, t.getTotalWidthOfEncodings = function (e) {
    for (var t = 0, n = 0; n < e.length; n++) t += e[n].width;

    return t;
  };
}, function (e, t, n) {
  "use strict";

  function r(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }

  function i(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" != typeof t && "function" != typeof t ? e : t;
  }

  function o(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
      constructor: {
        value: e,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
  }

  Object.defineProperty(t, "__esModule", {
    value: !0
  });

  var a = function (e) {
    function t(e, n) {
      r(this, t);
      var o = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
      return o.name = "InvalidInputException", o.symbology = e, o.input = n, o.message = '"' + o.input + '" is not a valid input for ' + o.symbology, o;
    }

    return o(t, Error), t;
  }(),
      s = function (e) {
    function t() {
      r(this, t);
      var e = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
      return e.name = "InvalidElementException", e.message = "Not supported type to render on", e;
    }

    return o(t, Error), t;
  }(),
      l = function (e) {
    function t() {
      r(this, t);
      var e = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
      return e.name = "NoElementException", e.message = "No element to render on.", e;
    }

    return o(t, Error), t;
  }();

  t.InvalidInputException = a, t.InvalidElementException = s, t.NoElementException = l;
}, function (e, t, n) {
  "use strict";

  var r = d(n(16)),
      i = d(n(7)),
      o = d(n(41)),
      a = d(n(42)),
      s = d(n(43)),
      l = d(n(11)),
      u = d(n(49)),
      c = n(14),
      f = d(n(12));

  function d(e) {
    return e && e.__esModule ? e : {
      default: e
    };
  }

  var h = function () {},
      p = function (e, t, n) {
    var r = new h();
    if (void 0 === e) throw Error("No element to render on was provided.");
    return r._renderProperties = (0, s.default)(e), r._encodings = [], r._options = f.default, r._errorHandler = new u.default(r), void 0 !== t && ((n = n || {}).format || (n.format = y()), r.options(n)[n.format](t, n).render()), r;
  };

  for (var g in p.getModule = function (e) {
    return r.default[e];
  }, r.default) r.default.hasOwnProperty(g) && v(r.default, g);

  function v(e, t) {
    h.prototype[t] = h.prototype[t.toUpperCase()] = h.prototype[t.toLowerCase()] = function (n, r) {
      var o = this;
      return o._errorHandler.wrapBarcodeCall(function () {
        r.text = void 0 === r.text ? void 0 : "" + r.text;
        var a = (0, i.default)(o._options, r);
        a = (0, l.default)(a);
        var s = m(n, e[t], a);
        return o._encodings.push(s), o;
      });
    };
  }

  function m(e, t, n) {
    var r = new t(e = "" + e, n);
    if (!r.valid()) throw new c.InvalidInputException(r.constructor.name, e);
    var a = r.encode();
    a = (0, o.default)(a);

    for (var s = 0; s < a.length; s++) a[s].options = (0, i.default)(n, a[s].options);

    return a;
  }

  function y() {
    return r.default.CODE128 ? "CODE128" : Object.keys(r.default)[0];
  }

  function _(e, t, n) {
    t = (0, o.default)(t);

    for (var r = 0; r < t.length; r++) t[r].options = (0, i.default)(n, t[r].options), (0, a.default)(t[r].options);

    (0, a.default)(n), new (0, e.renderer)(e.element, t, n).render(), e.afterRender && e.afterRender();
  }

  h.prototype.options = function (e) {
    return this._options = (0, i.default)(this._options, e), this;
  }, h.prototype.blank = function (e) {
    var t = new Array(e + 1).join("0");
    return this._encodings.push({
      data: t
    }), this;
  }, h.prototype.init = function () {
    var e;
    if (this._renderProperties) for (var t in Array.isArray(this._renderProperties) || (this._renderProperties = [this._renderProperties]), this._renderProperties) {
      var n = (0, i.default)(this._options, (e = this._renderProperties[t]).options);
      "auto" == n.format && (n.format = y()), this._errorHandler.wrapBarcodeCall(function () {
        var t = m(n.value, r.default[n.format.toUpperCase()], n);

        _(e, t, n);
      });
    }
  }, h.prototype.render = function () {
    if (!this._renderProperties) throw new c.NoElementException();
    if (Array.isArray(this._renderProperties)) for (var e = 0; e < this._renderProperties.length; e++) _(this._renderProperties[e], this._encodings, this._options);else _(this._renderProperties, this._encodings, this._options);
    return this;
  }, h.prototype._defaults = f.default, "undefined" != typeof window && (window.JsBarcode = p), "undefined" != typeof jQuery && (jQuery.fn.JsBarcode = function (e, t) {
    var n = [];
    return jQuery(this).each(function () {
      n.push(this);
    }), p(n, e, t);
  }), e.exports = p;
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var r = n(17),
      i = n(18),
      o = n(24),
      a = n(30),
      s = n(33),
      l = n(38),
      u = n(39),
      c = n(40);
  t.default = {
    CODE39: r.CODE39,
    CODE128: i.CODE128,
    CODE128A: i.CODE128A,
    CODE128B: i.CODE128B,
    CODE128C: i.CODE128C,
    EAN13: o.EAN13,
    EAN8: o.EAN8,
    EAN5: o.EAN5,
    EAN2: o.EAN2,
    UPC: o.UPC,
    UPCE: o.UPCE,
    ITF14: a.ITF14,
    ITF: a.ITF,
    MSI: s.MSI,
    MSI10: s.MSI10,
    MSI11: s.MSI11,
    MSI1010: s.MSI1010,
    MSI1110: s.MSI1110,
    pharmacode: l.pharmacode,
    codabar: u.codabar,
    GenericBarcode: c.GenericBarcode
  };
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.CODE39 = void 0;

  var r,
      i = function () {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }

    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  }(),
      o = function (e) {
    function t(e, n) {
      return function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }(this, t), e = e.toUpperCase(), n.mod43 && (e += function (e) {
        return a[e];
      }(function (e) {
        for (var t = 0, n = 0; n < e.length; n++) t += u(e[n]);

        return t % 43;
      }(e))), function (e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
      }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
    }

    return function (e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }(t, e), i(t, [{
      key: "encode",
      value: function () {
        for (var e = l("*"), t = 0; t < this.data.length; t++) e += l(this.data[t]) + "0";

        return {
          data: e += l("*"),
          text: this.text
        };
      }
    }, {
      key: "valid",
      value: function () {
        return -1 !== this.data.search(/^[0-9A-Z\-\.\ \$\/\+\%]+$/);
      }
    }]), t;
  }(((r = n(0)) && r.__esModule ? r : {
    default: r
  }).default),
      a = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "-", ".", " ", "$", "/", "+", "%", "*"],
      s = [20957, 29783, 23639, 30485, 20951, 29813, 23669, 20855, 29789, 23645, 29975, 23831, 30533, 22295, 30149, 24005, 21623, 29981, 23837, 22301, 30023, 23879, 30545, 22343, 30161, 24017, 21959, 30065, 23921, 22385, 29015, 18263, 29141, 17879, 29045, 18293, 17783, 29021, 18269, 17477, 17489, 17681, 20753, 35770];

  function l(e) {
    return function (e) {
      return s[e].toString(2);
    }(u(e));
  }

  function u(e) {
    return a.indexOf(e);
  }

  t.CODE39 = o;
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.CODE128C = t.CODE128B = t.CODE128A = t.CODE128 = void 0;
  var r = s(n(19)),
      i = s(n(21)),
      o = s(n(22)),
      a = s(n(23));

  function s(e) {
    return e && e.__esModule ? e : {
      default: e
    };
  }

  t.CODE128 = r.default, t.CODE128A = i.default, t.CODE128B = o.default, t.CODE128C = a.default;
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var r = o(n(5)),
      i = o(n(20));

  function o(e) {
    return e && e.__esModule ? e : {
      default: e
    };
  }

  function a(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" != typeof t && "function" != typeof t ? e : t;
  }

  var s = function (e) {
    function t(e, n) {
      if (function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }(this, t), /^[\x00-\x7F\xC8-\xD3]+$/.test(e)) var r = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, (0, i.default)(e), n));else r = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
      return a(r);
    }

    return function (e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }(t, e), t;
  }(r.default);

  t.default = s;
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });

  var r = n(1),
      i = function (e) {
    return e.match(new RegExp("^" + r.A_CHARS + "*"))[0].length;
  },
      o = function (e) {
    return e.match(new RegExp("^" + r.B_CHARS + "*"))[0].length;
  },
      a = function (e) {
    return e.match(new RegExp("^" + r.C_CHARS + "*"))[0];
  };

  function s(e, t) {
    var n = t ? r.A_CHARS : r.B_CHARS,
        i = e.match(new RegExp("^(" + n + "+?)(([0-9]{2}){2,})([^0-9]|$)"));
    if (i) return i[1] + String.fromCharCode(204) + l(e.substring(i[1].length));
    var o = e.match(new RegExp("^" + n + "+"))[0];
    return o.length === e.length ? e : o + String.fromCharCode(t ? 205 : 206) + s(e.substring(o.length), !t);
  }

  function l(e) {
    var t = a(e),
        n = t.length;
    if (n === e.length) return e;
    e = e.substring(n);
    var r = i(e) >= o(e);
    return t + String.fromCharCode(r ? 206 : 205) + s(e, r);
  }

  t.default = function (e) {
    var t = void 0;
    if (a(e).length >= 2) t = r.C_START_CHAR + l(e);else {
      var n = i(e) > o(e);
      t = (n ? r.A_START_CHAR : r.B_START_CHAR) + s(e, n);
    }
    return t.replace(/[\xCD\xCE]([^])[\xCD\xCE]/, function (e, t) {
      return String.fromCharCode(203) + t;
    });
  };
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });

  var r,
      i = function () {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }

    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  }(),
      o = (r = n(5)) && r.__esModule ? r : {
    default: r
  },
      a = n(1),
      s = function (e) {
    function t(e, n) {
      return function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }(this, t), function (e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
      }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, a.A_START_CHAR + e, n));
    }

    return function (e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }(t, e), i(t, [{
      key: "valid",
      value: function () {
        return new RegExp("^" + a.A_CHARS + "+$").test(this.data);
      }
    }]), t;
  }(o.default);

  t.default = s;
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });

  var r,
      i = function () {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }

    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  }(),
      o = (r = n(5)) && r.__esModule ? r : {
    default: r
  },
      a = n(1),
      s = function (e) {
    function t(e, n) {
      return function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }(this, t), function (e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
      }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, a.B_START_CHAR + e, n));
    }

    return function (e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }(t, e), i(t, [{
      key: "valid",
      value: function () {
        return new RegExp("^" + a.B_CHARS + "+$").test(this.data);
      }
    }]), t;
  }(o.default);

  t.default = s;
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });

  var r,
      i = function () {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }

    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  }(),
      o = (r = n(5)) && r.__esModule ? r : {
    default: r
  },
      a = n(1),
      s = function (e) {
    function t(e, n) {
      return function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }(this, t), function (e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
      }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, a.C_START_CHAR + e, n));
    }

    return function (e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }(t, e), i(t, [{
      key: "valid",
      value: function () {
        return new RegExp("^" + a.C_CHARS + "+$").test(this.data);
      }
    }]), t;
  }(o.default);

  t.default = s;
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.UPCE = t.UPC = t.EAN2 = t.EAN5 = t.EAN8 = t.EAN13 = void 0;
  var r = u(n(25)),
      i = u(n(26)),
      o = u(n(27)),
      a = u(n(28)),
      s = u(n(9)),
      l = u(n(29));

  function u(e) {
    return e && e.__esModule ? e : {
      default: e
    };
  }

  t.EAN13 = r.default, t.EAN8 = i.default, t.EAN5 = o.default, t.EAN2 = a.default, t.UPC = s.default, t.UPCE = l.default;
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });

  var r,
      i = function () {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }

    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  }(),
      o = function e(t, n, r) {
    null === t && (t = Function.prototype);
    var i = Object.getOwnPropertyDescriptor(t, n);

    if (void 0 === i) {
      var o = Object.getPrototypeOf(t);
      return null === o ? void 0 : e(o, n, r);
    }

    if ("value" in i) return i.value;
    var a = i.get;
    return void 0 !== a ? a.call(r) : void 0;
  },
      a = n(2),
      s = (r = n(8)) && r.__esModule ? r : {
    default: r
  },
      l = function (e) {
    return (10 - e.substr(0, 12).split("").map(function (e) {
      return +e;
    }).reduce(function (e, t, n) {
      return n % 2 ? e + 3 * t : e + t;
    }, 0) % 10) % 10;
  },
      u = function (e) {
    function t(e, n) {
      !function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }(this, t), -1 !== e.search(/^[0-9]{12}$/) && (e += l(e));

      var r = function (e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
      }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));

      return r.lastChar = n.lastChar, r;
    }

    return function (e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }(t, e), i(t, [{
      key: "valid",
      value: function () {
        return -1 !== this.data.search(/^[0-9]{13}$/) && +this.data[12] === l(this.data);
      }
    }, {
      key: "leftText",
      value: function () {
        return o(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "leftText", this).call(this, 1, 6);
      }
    }, {
      key: "leftEncode",
      value: function () {
        var e = this.data.substr(1, 6),
            n = a.EAN13_STRUCTURE[this.data[0]];
        return o(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "leftEncode", this).call(this, e, n);
      }
    }, {
      key: "rightText",
      value: function () {
        return o(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "rightText", this).call(this, 7, 6);
      }
    }, {
      key: "rightEncode",
      value: function () {
        var e = this.data.substr(7, 6);
        return o(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "rightEncode", this).call(this, e, "RRRRRR");
      }
    }, {
      key: "encodeGuarded",
      value: function () {
        var e = o(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "encodeGuarded", this).call(this);
        return this.options.displayValue && (e.unshift({
          data: "000000000000",
          text: this.text.substr(0, 1),
          options: {
            textAlign: "left",
            fontSize: this.fontSize
          }
        }), this.options.lastChar && (e.push({
          data: "00"
        }), e.push({
          data: "00000",
          text: this.options.lastChar,
          options: {
            fontSize: this.fontSize
          }
        }))), e;
      }
    }]), t;
  }(s.default);

  t.default = u;
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });

  var r,
      i = function () {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }

    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  }(),
      o = function e(t, n, r) {
    null === t && (t = Function.prototype);
    var i = Object.getOwnPropertyDescriptor(t, n);

    if (void 0 === i) {
      var o = Object.getPrototypeOf(t);
      return null === o ? void 0 : e(o, n, r);
    }

    if ("value" in i) return i.value;
    var a = i.get;
    return void 0 !== a ? a.call(r) : void 0;
  },
      a = (r = n(8)) && r.__esModule ? r : {
    default: r
  },
      s = function (e) {
    return (10 - e.substr(0, 7).split("").map(function (e) {
      return +e;
    }).reduce(function (e, t, n) {
      return n % 2 ? e + t : e + 3 * t;
    }, 0) % 10) % 10;
  },
      l = function (e) {
    function t(e, n) {
      return function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }(this, t), -1 !== e.search(/^[0-9]{7}$/) && (e += s(e)), function (e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
      }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
    }

    return function (e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }(t, e), i(t, [{
      key: "valid",
      value: function () {
        return -1 !== this.data.search(/^[0-9]{8}$/) && +this.data[7] === s(this.data);
      }
    }, {
      key: "leftText",
      value: function () {
        return o(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "leftText", this).call(this, 0, 4);
      }
    }, {
      key: "leftEncode",
      value: function () {
        var e = this.data.substr(0, 4);
        return o(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "leftEncode", this).call(this, e, "LLLL");
      }
    }, {
      key: "rightText",
      value: function () {
        return o(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "rightText", this).call(this, 4, 4);
      }
    }, {
      key: "rightEncode",
      value: function () {
        var e = this.data.substr(4, 4);
        return o(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "rightEncode", this).call(this, e, "RRRR");
      }
    }]), t;
  }(a.default);

  t.default = l;
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });

  var r = function () {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }

    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  }(),
      i = n(2),
      o = a(n(3));

  function a(e) {
    return e && e.__esModule ? e : {
      default: e
    };
  }

  var s = function (e) {
    function t(e, n) {
      return function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }(this, t), function (e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
      }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
    }

    return function (e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }(t, e), r(t, [{
      key: "valid",
      value: function () {
        return -1 !== this.data.search(/^[0-9]{5}$/);
      }
    }, {
      key: "encode",
      value: function () {
        var e,
            t = i.EAN5_STRUCTURE[(e = this.data, e.split("").map(function (e) {
          return +e;
        }).reduce(function (e, t, n) {
          return n % 2 ? e + 9 * t : e + 3 * t;
        }, 0) % 10)];
        return {
          data: "1011" + (0, o.default)(this.data, t, "01"),
          text: this.text
        };
      }
    }]), t;
  }(a(n(0)).default);

  t.default = s;
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });

  var r = function () {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }

    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  }(),
      i = n(2),
      o = a(n(3));

  function a(e) {
    return e && e.__esModule ? e : {
      default: e
    };
  }

  var s = function (e) {
    function t(e, n) {
      return function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }(this, t), function (e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
      }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
    }

    return function (e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }(t, e), r(t, [{
      key: "valid",
      value: function () {
        return -1 !== this.data.search(/^[0-9]{2}$/);
      }
    }, {
      key: "encode",
      value: function () {
        var e = i.EAN2_STRUCTURE[parseInt(this.data) % 4];
        return {
          data: "1011" + (0, o.default)(this.data, e, "01"),
          text: this.text
        };
      }
    }]), t;
  }(a(n(0)).default);

  t.default = s;
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });

  var r = function () {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }

    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  }(),
      i = s(n(3)),
      o = s(n(0)),
      a = n(9);

  function s(e) {
    return e && e.__esModule ? e : {
      default: e
    };
  }

  function l(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" != typeof t && "function" != typeof t ? e : t;
  }

  var u = ["XX00000XXX", "XX10000XXX", "XX20000XXX", "XXX00000XX", "XXXX00000X", "XXXXX00005", "XXXXX00006", "XXXXX00007", "XXXXX00008", "XXXXX00009"],
      c = [["EEEOOO", "OOOEEE"], ["EEOEOO", "OOEOEE"], ["EEOOEO", "OOEEOE"], ["EEOOOE", "OOEEEO"], ["EOEEOO", "OEOOEE"], ["EOOEEO", "OEEOOE"], ["EOOOEE", "OEEEOO"], ["EOEOEO", "OEOEOE"], ["EOEOOE", "OEOEEO"], ["EOOEOE", "OEEOEO"]],
      f = function (e) {
    function t(e, n) {
      !function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }(this, t);
      var r = l(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
      if (r.isValid = !1, -1 !== e.search(/^[0-9]{6}$/)) r.middleDigits = e, r.upcA = d(e, "0"), r.text = n.text || "" + r.upcA[0] + e + r.upcA[r.upcA.length - 1], r.isValid = !0;else {
        if (-1 === e.search(/^[01][0-9]{7}$/)) return l(r);
        if (r.middleDigits = e.substring(1, e.length - 1), r.upcA = d(r.middleDigits, e[0]), r.upcA[r.upcA.length - 1] !== e[e.length - 1]) return l(r);
        r.isValid = !0;
      }
      return r.displayValue = n.displayValue, r.fontSize = n.fontSize > 10 * n.width ? 10 * n.width : n.fontSize, r.guardHeight = n.height + r.fontSize / 2 + n.textMargin, r;
    }

    return function (e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }(t, e), r(t, [{
      key: "valid",
      value: function () {
        return this.isValid;
      }
    }, {
      key: "encode",
      value: function () {
        return this.options.flat ? this.flatEncoding() : this.guardedEncoding();
      }
    }, {
      key: "flatEncoding",
      value: function () {
        var e = "";
        return e += "101", e += this.encodeMiddleDigits(), {
          data: e += "010101",
          text: this.text
        };
      }
    }, {
      key: "guardedEncoding",
      value: function () {
        var e = [];
        return this.displayValue && e.push({
          data: "00000000",
          text: this.text[0],
          options: {
            textAlign: "left",
            fontSize: this.fontSize
          }
        }), e.push({
          data: "101",
          options: {
            height: this.guardHeight
          }
        }), e.push({
          data: this.encodeMiddleDigits(),
          text: this.text.substring(1, 7),
          options: {
            fontSize: this.fontSize
          }
        }), e.push({
          data: "010101",
          options: {
            height: this.guardHeight
          }
        }), this.displayValue && e.push({
          data: "00000000",
          text: this.text[7],
          options: {
            textAlign: "right",
            fontSize: this.fontSize
          }
        }), e;
      }
    }, {
      key: "encodeMiddleDigits",
      value: function () {
        var e = this.upcA[0],
            t = c[parseInt(this.upcA[this.upcA.length - 1])][parseInt(e)];
        return (0, i.default)(this.middleDigits, t);
      }
    }]), t;
  }(o.default);

  function d(e, t) {
    for (var n = parseInt(e[e.length - 1]), r = u[n], i = "", o = 0, s = 0; s < r.length; s++) {
      var l = r[s];
      i += "X" === l ? e[o++] : l;
    }

    return (i = "" + t + i) + (0, a.checksum)(i);
  }

  t.default = f;
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.ITF14 = t.ITF = void 0;
  var r = o(n(10)),
      i = o(n(32));

  function o(e) {
    return e && e.__esModule ? e : {
      default: e
    };
  }

  t.ITF = r.default, t.ITF14 = i.default;
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.START_BIN = "1010", t.END_BIN = "11101", t.BINARIES = ["00110", "10001", "01001", "11000", "00101", "10100", "01100", "00011", "10010", "01010"];
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });

  var r,
      i = function () {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }

    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  }(),
      o = (r = n(10)) && r.__esModule ? r : {
    default: r
  },
      a = function (e) {
    var t = e.substr(0, 13).split("").map(function (e) {
      return parseInt(e, 10);
    }).reduce(function (e, t, n) {
      return e + t * (3 - n % 2 * 2);
    }, 0);
    return 10 * Math.ceil(t / 10) - t;
  },
      s = function (e) {
    function t(e, n) {
      return function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }(this, t), -1 !== e.search(/^[0-9]{13}$/) && (e += a(e)), function (e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
      }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
    }

    return function (e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }(t, e), i(t, [{
      key: "valid",
      value: function () {
        return -1 !== this.data.search(/^[0-9]{14}$/) && +this.data[13] === a(this.data);
      }
    }]), t;
  }(o.default);

  t.default = s;
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.MSI1110 = t.MSI1010 = t.MSI11 = t.MSI10 = t.MSI = void 0;
  var r = l(n(4)),
      i = l(n(34)),
      o = l(n(35)),
      a = l(n(36)),
      s = l(n(37));

  function l(e) {
    return e && e.__esModule ? e : {
      default: e
    };
  }

  t.MSI = r.default, t.MSI10 = i.default, t.MSI11 = o.default, t.MSI1010 = a.default, t.MSI1110 = s.default;
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });

  var r,
      i = (r = n(4)) && r.__esModule ? r : {
    default: r
  },
      o = n(6),
      a = function (e) {
    function t(e, n) {
      return function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }(this, t), function (e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
      }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e + (0, o.mod10)(e), n));
    }

    return function (e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }(t, e), t;
  }(i.default);

  t.default = a;
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });

  var r,
      i = (r = n(4)) && r.__esModule ? r : {
    default: r
  },
      o = n(6),
      a = function (e) {
    function t(e, n) {
      return function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }(this, t), function (e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
      }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e + (0, o.mod11)(e), n));
    }

    return function (e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }(t, e), t;
  }(i.default);

  t.default = a;
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });

  var r,
      i = (r = n(4)) && r.__esModule ? r : {
    default: r
  },
      o = n(6),
      a = function (e) {
    function t(e, n) {
      return function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }(this, t), e += (0, o.mod10)(e), e += (0, o.mod10)(e), function (e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
      }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
    }

    return function (e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }(t, e), t;
  }(i.default);

  t.default = a;
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });

  var r,
      i = (r = n(4)) && r.__esModule ? r : {
    default: r
  },
      o = n(6),
      a = function (e) {
    function t(e, n) {
      return function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }(this, t), e += (0, o.mod11)(e), e += (0, o.mod10)(e), function (e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
      }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
    }

    return function (e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }(t, e), t;
  }(i.default);

  t.default = a;
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.pharmacode = void 0;

  var r,
      i = function () {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }

    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  }(),
      o = function (e) {
    function t(e, n) {
      !function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }(this, t);

      var r = function (e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
      }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));

      return r.number = parseInt(e, 10), r;
    }

    return function (e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }(t, e), i(t, [{
      key: "encode",
      value: function () {
        for (var e = this.number, t = ""; !isNaN(e) && 0 != e;) e % 2 == 0 ? (t = "11100" + t, e = (e - 2) / 2) : (t = "100" + t, e = (e - 1) / 2);

        return {
          data: t = t.slice(0, -2),
          text: this.text
        };
      }
    }, {
      key: "valid",
      value: function () {
        return this.number >= 3 && this.number <= 131070;
      }
    }]), t;
  }(((r = n(0)) && r.__esModule ? r : {
    default: r
  }).default);

  t.pharmacode = o;
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.codabar = void 0;

  var r,
      i = function () {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }

    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  }(),
      o = function (e) {
    function t(e, n) {
      !function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }(this, t), 0 === e.search(/^[0-9\-\$\:\.\+\/]+$/) && (e = "A" + e + "A");

      var r = function (e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
      }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e.toUpperCase(), n));

      return r.text = r.options.text || r.text.replace(/[A-D]/g, ""), r;
    }

    return function (e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }(t, e), i(t, [{
      key: "valid",
      value: function () {
        return -1 !== this.data.search(/^[A-D][0-9\-\$\:\.\+\/]+[A-D]$/);
      }
    }, {
      key: "encode",
      value: function () {
        for (var e = [], t = this.getEncodings(), n = 0; n < this.data.length; n++) e.push(t[this.data.charAt(n)]), n !== this.data.length - 1 && e.push("0");

        return {
          text: this.text,
          data: e.join("")
        };
      }
    }, {
      key: "getEncodings",
      value: function () {
        return {
          0: "101010011",
          1: "101011001",
          2: "101001011",
          3: "110010101",
          4: "101101001",
          5: "110101001",
          6: "100101011",
          7: "100101101",
          8: "100110101",
          9: "110100101",
          "-": "101001101",
          $: "101100101",
          ":": "1101011011",
          "/": "1101101011",
          ".": "1101101101",
          "+": "101100110011",
          A: "1011001001",
          B: "1001001011",
          C: "1010010011",
          D: "1010011001"
        };
      }
    }]), t;
  }(((r = n(0)) && r.__esModule ? r : {
    default: r
  }).default);

  t.codabar = o;
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.GenericBarcode = void 0;

  var r,
      i = function () {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }

    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  }(),
      o = function (e) {
    function t(e, n) {
      return function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }(this, t), function (e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
      }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
    }

    return function (e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }(t, e), i(t, [{
      key: "encode",
      value: function () {
        return {
          data: "10101010101010101010101010101010101010101",
          text: this.text
        };
      }
    }, {
      key: "valid",
      value: function () {
        return !0;
      }
    }]), t;
  }(((r = n(0)) && r.__esModule ? r : {
    default: r
  }).default);

  t.GenericBarcode = o;
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = function (e) {
    var t = [];
    return function e(n) {
      if (Array.isArray(n)) for (var r = 0; r < n.length; r++) e(n[r]);else n.text = n.text || "", n.data = n.data || "", t.push(n);
    }(e), t;
  };
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = function (e) {
    return e.marginTop = e.marginTop || e.margin, e.marginBottom = e.marginBottom || e.margin, e.marginRight = e.marginRight || e.margin, e.marginLeft = e.marginLeft || e.margin, e;
  };
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  },
      i = s(n(44)),
      o = s(n(45)),
      a = n(14);

  function s(e) {
    return e && e.__esModule ? e : {
      default: e
    };
  }

  t.default = function e(t) {
    if ("string" == typeof t) return function (t) {
      var n = document.querySelectorAll(t);

      if (0 !== n.length) {
        for (var r = [], i = 0; i < n.length; i++) r.push(e(n[i]));

        return r;
      }
    }(t);

    if (Array.isArray(t)) {
      for (var n = [], s = 0; s < t.length; s++) n.push(e(t[s]));

      return n;
    }

    if ("undefined" != typeof HTMLCanvasElement && t instanceof HTMLImageElement) return l = t, {
      element: u = document.createElement("canvas"),
      options: (0, i.default)(l),
      renderer: o.default.CanvasRenderer,
      afterRender: function () {
        l.setAttribute("src", u.toDataURL());
      }
    };
    if (t && t.nodeName && "svg" === t.nodeName.toLowerCase() || "undefined" != typeof SVGElement && t instanceof SVGElement) return {
      element: t,
      options: (0, i.default)(t),
      renderer: o.default.SVGRenderer
    };
    if ("undefined" != typeof HTMLCanvasElement && t instanceof HTMLCanvasElement) return {
      element: t,
      options: (0, i.default)(t),
      renderer: o.default.CanvasRenderer
    };
    if (t && t.getContext) return {
      element: t,
      renderer: o.default.CanvasRenderer
    };
    if (t && "object" === (void 0 === t ? "undefined" : r(t)) && !t.nodeName) return {
      element: t,
      renderer: o.default.ObjectRenderer
    };
    throw new a.InvalidElementException();
    var l, u;
  };
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var r = o(n(11)),
      i = o(n(12));

  function o(e) {
    return e && e.__esModule ? e : {
      default: e
    };
  }

  t.default = function (e) {
    var t = {};

    for (var n in i.default) i.default.hasOwnProperty(n) && (e.hasAttribute("jsbarcode-" + n.toLowerCase()) && (t[n] = e.getAttribute("jsbarcode-" + n.toLowerCase())), e.hasAttribute("data-" + n.toLowerCase()) && (t[n] = e.getAttribute("data-" + n.toLowerCase())));

    return t.value = e.getAttribute("jsbarcode-value") || e.getAttribute("data-value"), (0, r.default)(t);
  };
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var r = a(n(46)),
      i = a(n(47)),
      o = a(n(48));

  function a(e) {
    return e && e.__esModule ? e : {
      default: e
    };
  }

  t.default = {
    CanvasRenderer: r.default,
    SVGRenderer: i.default,
    ObjectRenderer: o.default
  };
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });

  var r,
      i = function () {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }

    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  }(),
      o = (r = n(7)) && r.__esModule ? r : {
    default: r
  },
      a = n(13),
      s = function () {
    function e(t, n, r) {
      !function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }(this, e), this.canvas = t, this.encodings = n, this.options = r;
    }

    return i(e, [{
      key: "render",
      value: function () {
        if (!this.canvas.getContext) throw new Error("The browser does not support canvas.");
        this.prepareCanvas();

        for (var e = 0; e < this.encodings.length; e++) {
          var t = (0, o.default)(this.options, this.encodings[e].options);
          this.drawCanvasBarcode(t, this.encodings[e]), this.drawCanvasText(t, this.encodings[e]), this.moveCanvasDrawing(this.encodings[e]);
        }

        this.restoreCanvas();
      }
    }, {
      key: "prepareCanvas",
      value: function () {
        var e = this.canvas.getContext("2d");
        e.save(), (0, a.calculateEncodingAttributes)(this.encodings, this.options, e);
        var t = (0, a.getTotalWidthOfEncodings)(this.encodings),
            n = (0, a.getMaximumHeightOfEncodings)(this.encodings);
        this.canvas.width = t + this.options.marginLeft + this.options.marginRight, this.canvas.height = n, e.clearRect(0, 0, this.canvas.width, this.canvas.height), this.options.background && (e.fillStyle = this.options.background, e.fillRect(0, 0, this.canvas.width, this.canvas.height)), e.translate(this.options.marginLeft, 0);
      }
    }, {
      key: "drawCanvasBarcode",
      value: function (e, t) {
        var n,
            r = this.canvas.getContext("2d"),
            i = t.data;
        n = "top" == e.textPosition ? e.marginTop + e.fontSize + e.textMargin : e.marginTop, r.fillStyle = e.lineColor;

        for (var o = 0; o < i.length; o++) {
          var a = o * e.width + t.barcodePadding;
          "1" === i[o] ? r.fillRect(a, n, e.width, e.height) : i[o] && r.fillRect(a, n, e.width, e.height * i[o]);
        }
      }
    }, {
      key: "drawCanvasText",
      value: function (e, t) {
        var n,
            r,
            i = this.canvas.getContext("2d");
        e.displayValue && (r = "top" == e.textPosition ? e.marginTop + e.fontSize - e.textMargin : e.height + e.textMargin + e.marginTop + e.fontSize, i.font = e.fontOptions + " " + e.fontSize + "px " + e.font, "left" == e.textAlign || t.barcodePadding > 0 ? (n = 0, i.textAlign = "left") : "right" == e.textAlign ? (n = t.width - 1, i.textAlign = "right") : (n = t.width / 2, i.textAlign = "center"), i.fillText(t.text, n, r));
      }
    }, {
      key: "moveCanvasDrawing",
      value: function (e) {
        this.canvas.getContext("2d").translate(e.width, 0);
      }
    }, {
      key: "restoreCanvas",
      value: function () {
        this.canvas.getContext("2d").restore();
      }
    }]), e;
  }();

  t.default = s;
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });

  var r,
      i = function () {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }

    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  }(),
      o = (r = n(7)) && r.__esModule ? r : {
    default: r
  },
      a = n(13),
      s = "http://www.w3.org/2000/svg",
      l = function () {
    function e(t, n, r) {
      !function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }(this, e), this.svg = t, this.encodings = n, this.options = r, this.document = r.xmlDocument || document;
    }

    return i(e, [{
      key: "render",
      value: function () {
        var e = this.options.marginLeft;
        this.prepareSVG();

        for (var t = 0; t < this.encodings.length; t++) {
          var n = this.encodings[t],
              r = (0, o.default)(this.options, n.options),
              i = this.createGroup(e, r.marginTop, this.svg);
          this.setGroupOptions(i, r), this.drawSvgBarcode(i, r, n), this.drawSVGText(i, r, n), e += n.width;
        }
      }
    }, {
      key: "prepareSVG",
      value: function () {
        for (; this.svg.firstChild;) this.svg.removeChild(this.svg.firstChild);

        (0, a.calculateEncodingAttributes)(this.encodings, this.options);
        var e = (0, a.getTotalWidthOfEncodings)(this.encodings),
            t = (0, a.getMaximumHeightOfEncodings)(this.encodings),
            n = e + this.options.marginLeft + this.options.marginRight;
        this.setSvgAttributes(n, t), this.options.background && this.drawRect(0, 0, n, t, this.svg).setAttribute("style", "fill:" + this.options.background + ";");
      }
    }, {
      key: "drawSvgBarcode",
      value: function (e, t, n) {
        var r,
            i = n.data;
        r = "top" == t.textPosition ? t.fontSize + t.textMargin : 0;

        for (var o = 0, a = 0, s = 0; s < i.length; s++) a = s * t.width + n.barcodePadding, "1" === i[s] ? o++ : o > 0 && (this.drawRect(a - t.width * o, r, t.width * o, t.height, e), o = 0);

        o > 0 && this.drawRect(a - t.width * (o - 1), r, t.width * o, t.height, e);
      }
    }, {
      key: "drawSVGText",
      value: function (e, t, n) {
        var r,
            i,
            o = this.document.createElementNS(s, "text");
        t.displayValue && (o.setAttribute("style", "font:" + t.fontOptions + " " + t.fontSize + "px " + t.font), i = "top" == t.textPosition ? t.fontSize - t.textMargin : t.height + t.textMargin + t.fontSize, "left" == t.textAlign || n.barcodePadding > 0 ? (r = 0, o.setAttribute("text-anchor", "start")) : "right" == t.textAlign ? (r = n.width - 1, o.setAttribute("text-anchor", "end")) : (r = n.width / 2, o.setAttribute("text-anchor", "middle")), o.setAttribute("x", r), o.setAttribute("y", i), o.appendChild(this.document.createTextNode(n.text)), e.appendChild(o));
      }
    }, {
      key: "setSvgAttributes",
      value: function (e, t) {
        var n = this.svg;
        n.setAttribute("width", e + "px"), n.setAttribute("height", t + "px"), n.setAttribute("x", "0px"), n.setAttribute("y", "0px"), n.setAttribute("viewBox", "0 0 " + e + " " + t), n.setAttribute("xmlns", s), n.setAttribute("version", "1.1"), n.setAttribute("style", "transform: translate(0,0)");
      }
    }, {
      key: "createGroup",
      value: function (e, t, n) {
        var r = this.document.createElementNS(s, "g");
        return r.setAttribute("transform", "translate(" + e + ", " + t + ")"), n.appendChild(r), r;
      }
    }, {
      key: "setGroupOptions",
      value: function (e, t) {
        e.setAttribute("style", "fill:" + t.lineColor + ";");
      }
    }, {
      key: "drawRect",
      value: function (e, t, n, r, i) {
        var o = this.document.createElementNS(s, "rect");
        return o.setAttribute("x", e), o.setAttribute("y", t), o.setAttribute("width", n), o.setAttribute("height", r), i.appendChild(o), o;
      }
    }]), e;
  }();

  t.default = l;
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });

  var r = function () {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }

    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  }(),
      i = function () {
    function e(t, n, r) {
      !function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }(this, e), this.object = t, this.encodings = n, this.options = r;
    }

    return r(e, [{
      key: "render",
      value: function () {
        this.object.encodings = this.encodings;
      }
    }]), e;
  }();

  t.default = i;
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });

  var r = function () {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }

    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  }(),
      i = function () {
    function e(t) {
      !function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }(this, e), this.api = t;
    }

    return r(e, [{
      key: "handleCatch",
      value: function (e) {
        if ("InvalidInputException" !== e.name) throw e;
        if (this.api._options.valid === this.api._defaults.valid) throw e.message;
        this.api._options.valid(!1), this.api.render = function () {};
      }
    }, {
      key: "wrapBarcodeCall",
      value: function (e) {
        try {
          var t = e.apply(void 0, arguments);
          return this.api._options.valid(!0), t;
        } catch (e) {
          return this.handleCatch(e), this.api;
        }
      }
    }]), e;
  }();

  t.default = i;
}]);