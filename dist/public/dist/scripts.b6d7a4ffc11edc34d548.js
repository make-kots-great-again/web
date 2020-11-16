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
      i = Object.getPrototypeOf,
      r = n.slice,
      o = n.flat ? function (e) {
    return n.flat.call(e);
  } : function (e) {
    return n.concat.apply([], e);
  },
      s = n.push,
      a = n.indexOf,
      l = {},
      u = l.toString,
      c = l.hasOwnProperty,
      f = c.toString,
      h = f.call(Object),
      d = {},
      p = function (e) {
    return "function" == typeof e && "number" != typeof e.nodeType;
  },
      g = function (e) {
    return null != e && e === e.window;
  },
      m = e.document,
      v = {
    type: !0,
    src: !0,
    nonce: !0,
    noModule: !0
  };

  function y(e, t, n) {
    var i,
        r,
        o = (n = n || m).createElement("script");
    if (o.text = e, t) for (i in v) (r = t[i] || t.getAttribute && t.getAttribute(i)) && o.setAttribute(i, r);
    n.head.appendChild(o).parentNode.removeChild(o);
  }

  function _(e) {
    return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[u.call(e)] || "object" : typeof e;
  }

  var b = "3.5.1",
      w = function (e, t) {
    return new w.fn.init(e, t);
  };

  function x(e) {
    var t = !!e && "length" in e && e.length,
        n = _(e);

    return !p(e) && !g(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e);
  }

  w.fn = w.prototype = {
    jquery: b,
    constructor: w,
    length: 0,
    toArray: function () {
      return r.call(this);
    },
    get: function (e) {
      return null == e ? r.call(this) : e < 0 ? this[e + this.length] : this[e];
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
      return this.pushStack(r.apply(this, arguments));
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
    push: s,
    sort: n.sort,
    splice: n.splice
  }, w.extend = w.fn.extend = function () {
    var e,
        t,
        n,
        i,
        r,
        o,
        s = arguments[0] || {},
        a = 1,
        l = arguments.length,
        u = !1;

    for ("boolean" == typeof s && (u = s, s = arguments[a] || {}, a++), "object" == typeof s || p(s) || (s = {}), a === l && (s = this, a--); a < l; a++) if (null != (e = arguments[a])) for (t in e) i = e[t], "__proto__" !== t && s !== i && (u && i && (w.isPlainObject(i) || (r = Array.isArray(i))) ? (n = s[t], o = r && !Array.isArray(n) ? [] : r || w.isPlainObject(n) ? n : {}, r = !1, s[t] = w.extend(u, o, i)) : void 0 !== i && (s[t] = i));

    return s;
  }, w.extend({
    expando: "jQuery" + (b + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function (e) {
      throw new Error(e);
    },
    noop: function () {},
    isPlainObject: function (e) {
      var t, n;
      return !(!e || "[object Object]" !== u.call(e) || (t = i(e)) && ("function" != typeof (n = c.call(t, "constructor") && t.constructor) || f.call(n) !== h));
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
          i = 0;
      if (x(e)) for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
      return e;
    },
    makeArray: function (e, t) {
      var n = t || [];
      return null != e && (x(Object(e)) ? w.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n;
    },
    inArray: function (e, t, n) {
      return null == t ? -1 : a.call(t, e, n);
    },
    merge: function (e, t) {
      for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i];

      return e.length = r, e;
    },
    grep: function (e, t, n) {
      for (var i = [], r = 0, o = e.length, s = !n; r < o; r++) !t(e[r], r) !== s && i.push(e[r]);

      return i;
    },
    map: function (e, t, n) {
      var i,
          r,
          s = 0,
          a = [];
      if (x(e)) for (i = e.length; s < i; s++) null != (r = t(e[s], s, n)) && a.push(r);else for (s in e) null != (r = t(e[s], s, n)) && a.push(r);
      return o(a);
    },
    guid: 1,
    support: d
  }), "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]), w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
    l["[object " + t + "]"] = t.toLowerCase();
  });

  var T = function (e) {
    var t,
        n,
        i,
        r,
        o,
        s,
        a,
        l,
        u,
        c,
        f,
        h,
        d,
        p,
        g,
        m,
        v,
        y,
        _,
        b = "sizzle" + 1 * new Date(),
        w = e.document,
        x = 0,
        T = 0,
        E = le(),
        C = le(),
        S = le(),
        k = le(),
        A = function (e, t) {
      return e === t && (f = !0), 0;
    },
        D = {}.hasOwnProperty,
        N = [],
        j = N.pop,
        I = N.push,
        O = N.push,
        L = N.slice,
        q = function (e, t) {
      for (var n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;

      return -1;
    },
        P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        R = "[\\x20\\t\\r\\n\\f]",
        H = "(?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
        F = "\\[[\\x20\\t\\r\\n\\f]*(" + H + ")(?:" + R + "*([*^$|!~]?=)" + R + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + H + "))|)" + R + "*\\]",
        M = ":(" + H + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + F + ")*)|.*)\\)|)",
        B = new RegExp(R + "+", "g"),
        W = new RegExp("^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$", "g"),
        Q = new RegExp("^[\\x20\\t\\r\\n\\f]*,[\\x20\\t\\r\\n\\f]*"),
        U = new RegExp("^[\\x20\\t\\r\\n\\f]*([>+~]|[\\x20\\t\\r\\n\\f])[\\x20\\t\\r\\n\\f]*"),
        $ = new RegExp(R + "|>"),
        z = new RegExp(M),
        X = new RegExp("^" + H + "$"),
        V = {
      ID: new RegExp("^#(" + H + ")"),
      CLASS: new RegExp("^\\.(" + H + ")"),
      TAG: new RegExp("^(" + H + "|[*])"),
      ATTR: new RegExp("^" + F),
      PSEUDO: new RegExp("^" + M),
      CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)", "i"),
      bool: new RegExp("^(?:" + P + ")$", "i"),
      needsContext: new RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)", "i")
    },
        Y = /HTML$/i,
        K = /^(?:input|select|textarea|button)$/i,
        G = /^h\d$/i,
        J = /^[^{]+\{\s*\[native \w/,
        Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        ee = /[+~]/,
        te = new RegExp("\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\([^\\r\\n\\f])", "g"),
        ne = function (e, t) {
      var n = "0x" + e.slice(1) - 65536;
      return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320));
    },
        ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        re = function (e, t) {
      return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
    },
        oe = function () {
      h();
    },
        se = be(function (e) {
      return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
    }, {
      dir: "parentNode",
      next: "legend"
    });

    try {
      O.apply(N = L.call(w.childNodes), w.childNodes);
    } catch (Ce) {
      O = {
        apply: N.length ? function (e, t) {
          I.apply(e, L.call(t));
        } : function (e, t) {
          for (var n = e.length, i = 0; e[n++] = t[i++];);

          e.length = n - 1;
        }
      };
    }

    function ae(e, t, i, r) {
      var o,
          a,
          u,
          c,
          f,
          p,
          v,
          y = t && t.ownerDocument,
          w = t ? t.nodeType : 9;
      if (i = i || [], "string" != typeof e || !e || 1 !== w && 9 !== w && 11 !== w) return i;

      if (!r && (h(t), t = t || d, g)) {
        if (11 !== w && (f = Z.exec(e))) if (o = f[1]) {
          if (9 === w) {
            if (!(u = t.getElementById(o))) return i;
            if (u.id === o) return i.push(u), i;
          } else if (y && (u = y.getElementById(o)) && _(t, u) && u.id === o) return i.push(u), i;
        } else {
          if (f[2]) return O.apply(i, t.getElementsByTagName(e)), i;
          if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return O.apply(i, t.getElementsByClassName(o)), i;
        }

        if (n.qsa && !k[e + " "] && (!m || !m.test(e)) && (1 !== w || "object" !== t.nodeName.toLowerCase())) {
          if (v = e, y = t, 1 === w && ($.test(e) || U.test(e))) {
            for ((y = ee.test(e) && ve(t.parentNode) || t) === t && n.scope || ((c = t.getAttribute("id")) ? c = c.replace(ie, re) : t.setAttribute("id", c = b)), a = (p = s(e)).length; a--;) p[a] = (c ? "#" + c : ":scope") + " " + _e(p[a]);

            v = p.join(",");
          }

          try {
            return O.apply(i, y.querySelectorAll(v)), i;
          } catch (x) {
            k(e, !0);
          } finally {
            c === b && t.removeAttribute("id");
          }
        }
      }

      return l(e.replace(W, "$1"), t, i, r);
    }

    function le() {
      var e = [];
      return function t(n, r) {
        return e.push(n + " ") > i.cacheLength && delete t[e.shift()], t[n + " "] = r;
      };
    }

    function ue(e) {
      return e[b] = !0, e;
    }

    function ce(e) {
      var t = d.createElement("fieldset");

      try {
        return !!e(t);
      } catch (Ce) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null;
      }
    }

    function fe(e, t) {
      for (var n = e.split("|"), r = n.length; r--;) i.attrHandle[n[r]] = t;
    }

    function he(e, t) {
      var n = t && e,
          i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
      if (i) return i;
      if (n) for (; n = n.nextSibling;) if (n === t) return -1;
      return e ? 1 : -1;
    }

    function de(e) {
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
        return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && se(t) === e : t.disabled === e : "label" in t && t.disabled === e;
      };
    }

    function me(e) {
      return ue(function (t) {
        return t = +t, ue(function (n, i) {
          for (var r, o = e([], n.length, t), s = o.length; s--;) n[r = o[s]] && (n[r] = !(i[r] = n[r]));
        });
      });
    }

    function ve(e) {
      return e && void 0 !== e.getElementsByTagName && e;
    }

    for (t in n = ae.support = {}, o = ae.isXML = function (e) {
      var t = (e.ownerDocument || e).documentElement;
      return !Y.test(e.namespaceURI || t && t.nodeName || "HTML");
    }, h = ae.setDocument = function (e) {
      var t,
          r,
          s = e ? e.ownerDocument || e : w;
      return s != d && 9 === s.nodeType && s.documentElement ? (p = (d = s).documentElement, g = !o(d), w != d && (r = d.defaultView) && r.top !== r && (r.addEventListener ? r.addEventListener("unload", oe, !1) : r.attachEvent && r.attachEvent("onunload", oe)), n.scope = ce(function (e) {
        return p.appendChild(e).appendChild(d.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length;
      }), n.attributes = ce(function (e) {
        return e.className = "i", !e.getAttribute("className");
      }), n.getElementsByTagName = ce(function (e) {
        return e.appendChild(d.createComment("")), !e.getElementsByTagName("*").length;
      }), n.getElementsByClassName = J.test(d.getElementsByClassName), n.getById = ce(function (e) {
        return p.appendChild(e).id = b, !d.getElementsByName || !d.getElementsByName(b).length;
      }), n.getById ? (i.filter.ID = function (e) {
        var t = e.replace(te, ne);
        return function (e) {
          return e.getAttribute("id") === t;
        };
      }, i.find.ID = function (e, t) {
        if (void 0 !== t.getElementById && g) {
          var n = t.getElementById(e);
          return n ? [n] : [];
        }
      }) : (i.filter.ID = function (e) {
        var t = e.replace(te, ne);
        return function (e) {
          var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
          return n && n.value === t;
        };
      }, i.find.ID = function (e, t) {
        if (void 0 !== t.getElementById && g) {
          var n,
              i,
              r,
              o = t.getElementById(e);

          if (o) {
            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];

            for (r = t.getElementsByName(e), i = 0; o = r[i++];) if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
          }

          return [];
        }
      }), i.find.TAG = n.getElementsByTagName ? function (e, t) {
        return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0;
      } : function (e, t) {
        var n,
            i = [],
            r = 0,
            o = t.getElementsByTagName(e);

        if ("*" === e) {
          for (; n = o[r++];) 1 === n.nodeType && i.push(n);

          return i;
        }

        return o;
      }, i.find.CLASS = n.getElementsByClassName && function (e, t) {
        if (void 0 !== t.getElementsByClassName && g) return t.getElementsByClassName(e);
      }, v = [], m = [], (n.qsa = J.test(d.querySelectorAll)) && (ce(function (e) {
        var t;
        p.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|" + P + ")"), e.querySelectorAll("[id~=" + b + "-]").length || m.push("~="), (t = d.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || m.push("\\[[\\x20\\t\\r\\n\\f]*name[\\x20\\t\\r\\n\\f]*=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + b + "+*").length || m.push(".#.+[+~]"), e.querySelectorAll("\\\f"), m.push("[\\r\\n\\f]");
      }), ce(function (e) {
        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
        var t = d.createElement("input");
        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), p.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:");
      })), (n.matchesSelector = J.test(y = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)) && ce(function (e) {
        n.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), v.push("!=", M);
      }), m = m.length && new RegExp(m.join("|")), v = v.length && new RegExp(v.join("|")), t = J.test(p.compareDocumentPosition), _ = t || J.test(p.contains) ? function (e, t) {
        var n = 9 === e.nodeType ? e.documentElement : e,
            i = t && t.parentNode;
        return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)));
      } : function (e, t) {
        if (t) for (; t = t.parentNode;) if (t === e) return !0;
        return !1;
      }, A = t ? function (e, t) {
        if (e === t) return f = !0, 0;
        var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
        return i || (1 & (i = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === i ? e == d || e.ownerDocument == w && _(w, e) ? -1 : t == d || t.ownerDocument == w && _(w, t) ? 1 : c ? q(c, e) - q(c, t) : 0 : 4 & i ? -1 : 1);
      } : function (e, t) {
        if (e === t) return f = !0, 0;
        var n,
            i = 0,
            r = e.parentNode,
            o = t.parentNode,
            s = [e],
            a = [t];
        if (!r || !o) return e == d ? -1 : t == d ? 1 : r ? -1 : o ? 1 : c ? q(c, e) - q(c, t) : 0;
        if (r === o) return he(e, t);

        for (n = e; n = n.parentNode;) s.unshift(n);

        for (n = t; n = n.parentNode;) a.unshift(n);

        for (; s[i] === a[i];) i++;

        return i ? he(s[i], a[i]) : s[i] == w ? -1 : a[i] == w ? 1 : 0;
      }, d) : d;
    }, ae.matches = function (e, t) {
      return ae(e, null, null, t);
    }, ae.matchesSelector = function (e, t) {
      if (h(e), n.matchesSelector && g && !k[t + " "] && (!v || !v.test(t)) && (!m || !m.test(t))) try {
        var i = y.call(e, t);
        if (i || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i;
      } catch (Ce) {
        k(t, !0);
      }
      return ae(t, d, null, [e]).length > 0;
    }, ae.contains = function (e, t) {
      return (e.ownerDocument || e) != d && h(e), _(e, t);
    }, ae.attr = function (e, t) {
      (e.ownerDocument || e) != d && h(e);
      var r = i.attrHandle[t.toLowerCase()],
          o = r && D.call(i.attrHandle, t.toLowerCase()) ? r(e, t, !g) : void 0;
      return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null;
    }, ae.escape = function (e) {
      return (e + "").replace(ie, re);
    }, ae.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }, ae.uniqueSort = function (e) {
      var t,
          i = [],
          r = 0,
          o = 0;

      if (f = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(A), f) {
        for (; t = e[o++];) t === e[o] && (r = i.push(o));

        for (; r--;) e.splice(i[r], 1);
      }

      return c = null, e;
    }, r = ae.getText = function (e) {
      var t,
          n = "",
          i = 0,
          o = e.nodeType;

      if (o) {
        if (1 === o || 9 === o || 11 === o) {
          if ("string" == typeof e.textContent) return e.textContent;

          for (e = e.firstChild; e; e = e.nextSibling) n += r(e);
        } else if (3 === o || 4 === o) return e.nodeValue;
      } else for (; t = e[i++];) n += r(t);

      return n;
    }, (i = ae.selectors = {
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
          return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ae.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ae.error(e[0]), e;
        },
        PSEUDO: function (e) {
          var t,
              n = !e[6] && e[2];
          return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && z.test(n) && (t = s(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
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
          var t = E[e + " "];
          return t || (t = new RegExp("(^|[\\x20\\t\\r\\n\\f])" + e + "(" + R + "|$)")) && E(e, function (e) {
            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "");
          });
        },
        ATTR: function (e, t, n) {
          return function (i) {
            var r = ae.attr(i, e);
            return null == r ? "!=" === t : !t || (r += "", "=" === t ? r === n : "!=" === t ? r !== n : "^=" === t ? n && 0 === r.indexOf(n) : "*=" === t ? n && r.indexOf(n) > -1 : "$=" === t ? n && r.slice(-n.length) === n : "~=" === t ? (" " + r.replace(B, " ") + " ").indexOf(n) > -1 : "|=" === t && (r === n || r.slice(0, n.length + 1) === n + "-"));
          };
        },
        CHILD: function (e, t, n, i, r) {
          var o = "nth" !== e.slice(0, 3),
              s = "last" !== e.slice(-4),
              a = "of-type" === t;
          return 1 === i && 0 === r ? function (e) {
            return !!e.parentNode;
          } : function (t, n, l) {
            var u,
                c,
                f,
                h,
                d,
                p,
                g = o !== s ? "nextSibling" : "previousSibling",
                m = t.parentNode,
                v = a && t.nodeName.toLowerCase(),
                y = !l && !a,
                _ = !1;

            if (m) {
              if (o) {
                for (; g;) {
                  for (h = t; h = h[g];) if (a ? h.nodeName.toLowerCase() === v : 1 === h.nodeType) return !1;

                  p = g = "only" === e && !p && "nextSibling";
                }

                return !0;
              }

              if (p = [s ? m.firstChild : m.lastChild], s && y) {
                for (_ = (d = (u = (c = (f = (h = m)[b] || (h[b] = {}))[h.uniqueID] || (f[h.uniqueID] = {}))[e] || [])[0] === x && u[1]) && u[2], h = d && m.childNodes[d]; h = ++d && h && h[g] || (_ = d = 0) || p.pop();) if (1 === h.nodeType && ++_ && h === t) {
                  c[e] = [x, d, _];
                  break;
                }
              } else if (y && (_ = d = (u = (c = (f = (h = t)[b] || (h[b] = {}))[h.uniqueID] || (f[h.uniqueID] = {}))[e] || [])[0] === x && u[1]), !1 === _) for (; (h = ++d && h && h[g] || (_ = d = 0) || p.pop()) && ((a ? h.nodeName.toLowerCase() !== v : 1 !== h.nodeType) || !++_ || (y && ((c = (f = h[b] || (h[b] = {}))[h.uniqueID] || (f[h.uniqueID] = {}))[e] = [x, _]), h !== t)););

              return (_ -= r) === i || _ % i == 0 && _ / i >= 0;
            }
          };
        },
        PSEUDO: function (e, t) {
          var n,
              r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || ae.error("unsupported pseudo: " + e);
          return r[b] ? r(t) : r.length > 1 ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? ue(function (e, n) {
            for (var i, o = r(e, t), s = o.length; s--;) e[i = q(e, o[s])] = !(n[i] = o[s]);
          }) : function (e) {
            return r(e, 0, n);
          }) : r;
        }
      },
      pseudos: {
        not: ue(function (e) {
          var t = [],
              n = [],
              i = a(e.replace(W, "$1"));
          return i[b] ? ue(function (e, t, n, r) {
            for (var o, s = i(e, null, r, []), a = e.length; a--;) (o = s[a]) && (e[a] = !(t[a] = o));
          }) : function (e, r, o) {
            return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop();
          };
        }),
        has: ue(function (e) {
          return function (t) {
            return ae(e, t).length > 0;
          };
        }),
        contains: ue(function (e) {
          return e = e.replace(te, ne), function (t) {
            return (t.textContent || r(t)).indexOf(e) > -1;
          };
        }),
        lang: ue(function (e) {
          return X.test(e || "") || ae.error("unsupported lang: " + e), e = e.replace(te, ne).toLowerCase(), function (t) {
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
          return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
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
          return !i.pseudos.empty(e);
        },
        header: function (e) {
          return G.test(e.nodeName);
        },
        input: function (e) {
          return K.test(e.nodeName);
        },
        button: function (e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && "button" === e.type || "button" === t;
        },
        text: function (e) {
          var t;
          return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
        },
        first: me(function () {
          return [0];
        }),
        last: me(function (e, t) {
          return [t - 1];
        }),
        eq: me(function (e, t, n) {
          return [n < 0 ? n + t : n];
        }),
        even: me(function (e, t) {
          for (var n = 0; n < t; n += 2) e.push(n);

          return e;
        }),
        odd: me(function (e, t) {
          for (var n = 1; n < t; n += 2) e.push(n);

          return e;
        }),
        lt: me(function (e, t, n) {
          for (var i = n < 0 ? n + t : n > t ? t : n; --i >= 0;) e.push(i);

          return e;
        }),
        gt: me(function (e, t, n) {
          for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);

          return e;
        })
      }
    }).pseudos.nth = i.pseudos.eq, {
      radio: !0,
      checkbox: !0,
      file: !0,
      password: !0,
      image: !0
    }) i.pseudos[t] = de(t);

    for (t in {
      submit: !0,
      reset: !0
    }) i.pseudos[t] = pe(t);

    function ye() {}

    function _e(e) {
      for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;

      return i;
    }

    function be(e, t, n) {
      var i = t.dir,
          r = t.next,
          o = r || i,
          s = n && "parentNode" === o,
          a = T++;
      return t.first ? function (t, n, r) {
        for (; t = t[i];) if (1 === t.nodeType || s) return e(t, n, r);

        return !1;
      } : function (t, n, l) {
        var u,
            c,
            f,
            h = [x, a];

        if (l) {
          for (; t = t[i];) if ((1 === t.nodeType || s) && e(t, n, l)) return !0;
        } else for (; t = t[i];) if (1 === t.nodeType || s) if (c = (f = t[b] || (t[b] = {}))[t.uniqueID] || (f[t.uniqueID] = {}), r && r === t.nodeName.toLowerCase()) t = t[i] || t;else {
          if ((u = c[o]) && u[0] === x && u[1] === a) return h[2] = u[2];
          if (c[o] = h, h[2] = e(t, n, l)) return !0;
        }

        return !1;
      };
    }

    function we(e) {
      return e.length > 1 ? function (t, n, i) {
        for (var r = e.length; r--;) if (!e[r](t, n, i)) return !1;

        return !0;
      } : e[0];
    }

    function xe(e, t, n, i, r) {
      for (var o, s = [], a = 0, l = e.length, u = null != t; a < l; a++) (o = e[a]) && (n && !n(o, i, r) || (s.push(o), u && t.push(a)));

      return s;
    }

    function Te(e, t, n, i, r, o) {
      return i && !i[b] && (i = Te(i)), r && !r[b] && (r = Te(r, o)), ue(function (o, s, a, l) {
        var u,
            c,
            f,
            h = [],
            d = [],
            p = s.length,
            g = o || function (e, t, n) {
          for (var i = 0, r = t.length; i < r; i++) ae(e, t[i], n);

          return n;
        }(t || "*", a.nodeType ? [a] : a, []),
            m = !e || !o && t ? g : xe(g, h, e, a, l),
            v = n ? r || (o ? e : p || i) ? [] : s : m;

        if (n && n(m, v, a, l), i) for (u = xe(v, d), i(u, [], a, l), c = u.length; c--;) (f = u[c]) && (v[d[c]] = !(m[d[c]] = f));

        if (o) {
          if (r || e) {
            if (r) {
              for (u = [], c = v.length; c--;) (f = v[c]) && u.push(m[c] = f);

              r(null, v = [], u, l);
            }

            for (c = v.length; c--;) (f = v[c]) && (u = r ? q(o, f) : h[c]) > -1 && (o[u] = !(s[u] = f));
          }
        } else v = xe(v === s ? v.splice(p, v.length) : v), r ? r(null, s, v, l) : O.apply(s, v);
      });
    }

    function Ee(e) {
      for (var t, n, r, o = e.length, s = i.relative[e[0].type], a = s || i.relative[" "], l = s ? 1 : 0, c = be(function (e) {
        return e === t;
      }, a, !0), f = be(function (e) {
        return q(t, e) > -1;
      }, a, !0), h = [function (e, n, i) {
        var r = !s && (i || n !== u) || ((t = n).nodeType ? c(e, n, i) : f(e, n, i));
        return t = null, r;
      }]; l < o; l++) if (n = i.relative[e[l].type]) h = [be(we(h), n)];else {
        if ((n = i.filter[e[l].type].apply(null, e[l].matches))[b]) {
          for (r = ++l; r < o && !i.relative[e[r].type]; r++);

          return Te(l > 1 && we(h), l > 1 && _e(e.slice(0, l - 1).concat({
            value: " " === e[l - 2].type ? "*" : ""
          })).replace(W, "$1"), n, l < r && Ee(e.slice(l, r)), r < o && Ee(e = e.slice(r)), r < o && _e(e));
        }

        h.push(n);
      }

      return we(h);
    }

    return ye.prototype = i.filters = i.pseudos, i.setFilters = new ye(), s = ae.tokenize = function (e, t) {
      var n,
          r,
          o,
          s,
          a,
          l,
          u,
          c = C[e + " "];
      if (c) return t ? 0 : c.slice(0);

      for (a = e, l = [], u = i.preFilter; a;) {
        for (s in n && !(r = Q.exec(a)) || (r && (a = a.slice(r[0].length) || a), l.push(o = [])), n = !1, (r = U.exec(a)) && (n = r.shift(), o.push({
          value: n,
          type: r[0].replace(W, " ")
        }), a = a.slice(n.length)), i.filter) !(r = V[s].exec(a)) || u[s] && !(r = u[s](r)) || (n = r.shift(), o.push({
          value: n,
          type: s,
          matches: r
        }), a = a.slice(n.length));

        if (!n) break;
      }

      return t ? a.length : a ? ae.error(e) : C(e, l).slice(0);
    }, a = ae.compile = function (e, t) {
      var n,
          r = [],
          o = [],
          a = S[e + " "];

      if (!a) {
        for (t || (t = s(e)), n = t.length; n--;) (a = Ee(t[n]))[b] ? r.push(a) : o.push(a);

        (a = S(e, function (e, t) {
          var n = t.length > 0,
              r = e.length > 0,
              o = function (o, s, a, l, c) {
            var f,
                p,
                m,
                v = 0,
                y = "0",
                _ = o && [],
                b = [],
                w = u,
                T = o || r && i.find.TAG("*", c),
                E = x += null == w ? 1 : Math.random() || .1,
                C = T.length;

            for (c && (u = s == d || s || c); y !== C && null != (f = T[y]); y++) {
              if (r && f) {
                for (p = 0, s || f.ownerDocument == d || (h(f), a = !g); m = e[p++];) if (m(f, s || d, a)) {
                  l.push(f);
                  break;
                }

                c && (x = E);
              }

              n && ((f = !m && f) && v--, o && _.push(f));
            }

            if (v += y, n && y !== v) {
              for (p = 0; m = t[p++];) m(_, b, s, a);

              if (o) {
                if (v > 0) for (; y--;) _[y] || b[y] || (b[y] = j.call(l));
                b = xe(b);
              }

              O.apply(l, b), c && !o && b.length > 0 && v + t.length > 1 && ae.uniqueSort(l);
            }

            return c && (x = E, u = w), _;
          };

          return n ? ue(o) : o;
        }(o, r))).selector = e;
      }

      return a;
    }, l = ae.select = function (e, t, n, r) {
      var o,
          l,
          u,
          c,
          f,
          h = "function" == typeof e && e,
          d = !r && s(e = h.selector || e);

      if (n = n || [], 1 === d.length) {
        if ((l = d[0] = d[0].slice(0)).length > 2 && "ID" === (u = l[0]).type && 9 === t.nodeType && g && i.relative[l[1].type]) {
          if (!(t = (i.find.ID(u.matches[0].replace(te, ne), t) || [])[0])) return n;
          h && (t = t.parentNode), e = e.slice(l.shift().value.length);
        }

        for (o = V.needsContext.test(e) ? 0 : l.length; o-- && !i.relative[c = (u = l[o]).type];) if ((f = i.find[c]) && (r = f(u.matches[0].replace(te, ne), ee.test(l[0].type) && ve(t.parentNode) || t))) {
          if (l.splice(o, 1), !(e = r.length && _e(l))) return O.apply(n, r), n;
          break;
        }
      }

      return (h || a(e, d))(r, t, !g, n, !t || ee.test(e) && ve(t.parentNode) || t), n;
    }, n.sortStable = b.split("").sort(A).join("") === b, n.detectDuplicates = !!f, h(), n.sortDetached = ce(function (e) {
      return 1 & e.compareDocumentPosition(d.createElement("fieldset"));
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
    }) || fe(P, function (e, t, n) {
      var i;
      if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null;
    }), ae;
  }(e);

  w.find = T, w.expr = T.selectors, w.expr[":"] = w.expr.pseudos, w.uniqueSort = w.unique = T.uniqueSort, w.text = T.getText, w.isXMLDoc = T.isXML, w.contains = T.contains, w.escapeSelector = T.escape;

  var E = function (e, t, n) {
    for (var i = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;) if (1 === e.nodeType) {
      if (r && w(e).is(n)) break;
      i.push(e);
    }

    return i;
  },
      C = function (e, t) {
    for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);

    return n;
  },
      S = w.expr.match.needsContext;

  function k(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }

  var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

  function D(e, t, n) {
    return p(t) ? w.grep(e, function (e, i) {
      return !!t.call(e, i, e) !== n;
    }) : t.nodeType ? w.grep(e, function (e) {
      return e === t !== n;
    }) : "string" != typeof t ? w.grep(e, function (e) {
      return a.call(t, e) > -1 !== n;
    }) : w.filter(t, e, n);
  }

  w.filter = function (e, t, n) {
    var i = t[0];
    return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? w.find.matchesSelector(i, e) ? [i] : [] : w.find.matches(e, w.grep(t, function (e) {
      return 1 === e.nodeType;
    }));
  }, w.fn.extend({
    find: function (e) {
      var t,
          n,
          i = this.length,
          r = this;
      if ("string" != typeof e) return this.pushStack(w(e).filter(function () {
        for (t = 0; t < i; t++) if (w.contains(r[t], this)) return !0;
      }));

      for (n = this.pushStack([]), t = 0; t < i; t++) w.find(e, r[t], n);

      return i > 1 ? w.uniqueSort(n) : n;
    },
    filter: function (e) {
      return this.pushStack(D(this, e || [], !1));
    },
    not: function (e) {
      return this.pushStack(D(this, e || [], !0));
    },
    is: function (e) {
      return !!D(this, "string" == typeof e && S.test(e) ? w(e) : e || [], !1).length;
    }
  });
  var N,
      j = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  (w.fn.init = function (e, t, n) {
    var i, r;
    if (!e) return this;

    if (n = n || N, "string" == typeof e) {
      if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : j.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);

      if (i[1]) {
        if (w.merge(this, w.parseHTML(i[1], (t = t instanceof w ? t[0] : t) && t.nodeType ? t.ownerDocument || t : m, !0)), A.test(i[1]) && w.isPlainObject(t)) for (i in t) p(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
        return this;
      }

      return (r = m.getElementById(i[2])) && (this[0] = r, this.length = 1), this;
    }

    return e.nodeType ? (this[0] = e, this.length = 1, this) : p(e) ? void 0 !== n.ready ? n.ready(e) : e(w) : w.makeArray(e, this);
  }).prototype = w.fn, N = w(m);
  var I = /^(?:parents|prev(?:Until|All))/,
      O = {
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
          i = 0,
          r = this.length,
          o = [],
          s = "string" != typeof e && w(e);
      if (!S.test(e)) for (; i < r; i++) for (n = this[i]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && w.find.matchesSelector(n, e))) {
        o.push(n);
        break;
      }
      return this.pushStack(o.length > 1 ? w.uniqueSort(o) : o);
    },
    index: function (e) {
      return e ? "string" == typeof e ? a.call(w(e), this[0]) : a.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
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
      return E(e, "parentNode");
    },
    parentsUntil: function (e, t, n) {
      return E(e, "parentNode", n);
    },
    next: function (e) {
      return L(e, "nextSibling");
    },
    prev: function (e) {
      return L(e, "previousSibling");
    },
    nextAll: function (e) {
      return E(e, "nextSibling");
    },
    prevAll: function (e) {
      return E(e, "previousSibling");
    },
    nextUntil: function (e, t, n) {
      return E(e, "nextSibling", n);
    },
    prevUntil: function (e, t, n) {
      return E(e, "previousSibling", n);
    },
    siblings: function (e) {
      return C((e.parentNode || {}).firstChild, e);
    },
    children: function (e) {
      return C(e.firstChild);
    },
    contents: function (e) {
      return null != e.contentDocument && i(e.contentDocument) ? e.contentDocument : (k(e, "template") && (e = e.content || e), w.merge([], e.childNodes));
    }
  }, function (e, t) {
    w.fn[e] = function (n, i) {
      var r = w.map(this, t, n);
      return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = w.filter(i, r)), this.length > 1 && (O[e] || w.uniqueSort(r), I.test(e) && r.reverse()), this.pushStack(r);
    };
  });
  var q = /[^\x20\t\r\n\f]+/g;

  function P(e) {
    return e;
  }

  function R(e) {
    throw e;
  }

  function H(e, t, n, i) {
    var r;

    try {
      e && p(r = e.promise) ? r.call(e).done(t).fail(n) : e && p(r = e.then) ? r.call(e, t, n) : t.apply(void 0, [e].slice(i));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }

  w.Callbacks = function (e) {
    e = "string" == typeof e ? function (e) {
      var t = {};
      return w.each(e.match(q) || [], function (e, n) {
        t[n] = !0;
      }), t;
    }(e) : w.extend({}, e);

    var t,
        n,
        i,
        r,
        o = [],
        s = [],
        a = -1,
        l = function () {
      for (r = r || e.once, i = t = !0; s.length; a = -1) for (n = s.shift(); ++a < o.length;) !1 === o[a].apply(n[0], n[1]) && e.stopOnFalse && (a = o.length, n = !1);

      e.memory || (n = !1), t = !1, r && (o = n ? [] : "");
    },
        u = {
      add: function () {
        return o && (n && !t && (a = o.length - 1, s.push(n)), function t(n) {
          w.each(n, function (n, i) {
            p(i) ? e.unique && u.has(i) || o.push(i) : i && i.length && "string" !== _(i) && t(i);
          });
        }(arguments), n && !t && l()), this;
      },
      remove: function () {
        return w.each(arguments, function (e, t) {
          for (var n; (n = w.inArray(t, o, n)) > -1;) o.splice(n, 1), n <= a && a--;
        }), this;
      },
      has: function (e) {
        return e ? w.inArray(e, o) > -1 : o.length > 0;
      },
      empty: function () {
        return o && (o = []), this;
      },
      disable: function () {
        return r = s = [], o = n = "", this;
      },
      disabled: function () {
        return !o;
      },
      lock: function () {
        return r = s = [], n || t || (o = n = ""), this;
      },
      locked: function () {
        return !!r;
      },
      fireWith: function (e, n) {
        return r || (n = [e, (n = n || []).slice ? n.slice() : n], s.push(n), t || l()), this;
      },
      fire: function () {
        return u.fireWith(this, arguments), this;
      },
      fired: function () {
        return !!i;
      }
    };

    return u;
  }, w.extend({
    Deferred: function (t) {
      var n = [["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2], ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"]],
          i = "pending",
          r = {
        state: function () {
          return i;
        },
        always: function () {
          return o.done(arguments).fail(arguments), this;
        },
        catch: function (e) {
          return r.then(null, e);
        },
        pipe: function () {
          var e = arguments;
          return w.Deferred(function (t) {
            w.each(n, function (n, i) {
              var r = p(e[i[4]]) && e[i[4]];
              o[i[1]](function () {
                var e = r && r.apply(this, arguments);
                e && p(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[i[0] + "With"](this, r ? [e] : arguments);
              });
            }), e = null;
          }).promise();
        },
        then: function (t, i, r) {
          var o = 0;

          function s(t, n, i, r) {
            return function () {
              var a = this,
                  l = arguments,
                  u = function () {
                var e, u;

                if (!(t < o)) {
                  if ((e = i.apply(a, l)) === n.promise()) throw new TypeError("Thenable self-resolution");
                  p(u = e && ("object" == typeof e || "function" == typeof e) && e.then) ? r ? u.call(e, s(o, n, P, r), s(o, n, R, r)) : (o++, u.call(e, s(o, n, P, r), s(o, n, R, r), s(o, n, P, n.notifyWith))) : (i !== P && (a = void 0, l = [e]), (r || n.resolveWith)(a, l));
                }
              },
                  c = r ? u : function () {
                try {
                  u();
                } catch (e) {
                  w.Deferred.exceptionHook && w.Deferred.exceptionHook(e, c.stackTrace), t + 1 >= o && (i !== R && (a = void 0, l = [e]), n.rejectWith(a, l));
                }
              };

              t ? c() : (w.Deferred.getStackHook && (c.stackTrace = w.Deferred.getStackHook()), e.setTimeout(c));
            };
          }

          return w.Deferred(function (e) {
            n[0][3].add(s(0, e, p(r) ? r : P, e.notifyWith)), n[1][3].add(s(0, e, p(t) ? t : P)), n[2][3].add(s(0, e, p(i) ? i : R));
          }).promise();
        },
        promise: function (e) {
          return null != e ? w.extend(e, r) : r;
        }
      },
          o = {};
      return w.each(n, function (e, t) {
        var s = t[2],
            a = t[5];
        r[t[1]] = s.add, a && s.add(function () {
          i = a;
        }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), s.add(t[3].fire), o[t[0]] = function () {
          return o[t[0] + "With"](this === o ? void 0 : this, arguments), this;
        }, o[t[0] + "With"] = s.fireWith;
      }), r.promise(o), t && t.call(o, o), o;
    },
    when: function (e) {
      var t = arguments.length,
          n = t,
          i = Array(n),
          o = r.call(arguments),
          s = w.Deferred(),
          a = function (e) {
        return function (n) {
          i[e] = this, o[e] = arguments.length > 1 ? r.call(arguments) : n, --t || s.resolveWith(i, o);
        };
      };

      if (t <= 1 && (H(e, s.done(a(n)).resolve, s.reject, !t), "pending" === s.state() || p(o[n] && o[n].then))) return s.then();

      for (; n--;) H(o[n], a(n), s.reject);

      return s.promise();
    }
  });
  var F = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  w.Deferred.exceptionHook = function (t, n) {
    e.console && e.console.warn && t && F.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
  }, w.readyException = function (t) {
    e.setTimeout(function () {
      throw t;
    });
  };
  var M = w.Deferred();

  function B() {
    m.removeEventListener("DOMContentLoaded", B), e.removeEventListener("load", B), w.ready();
  }

  w.fn.ready = function (e) {
    return M.then(e).catch(function (e) {
      w.readyException(e);
    }), this;
  }, w.extend({
    isReady: !1,
    readyWait: 1,
    ready: function (e) {
      (!0 === e ? --w.readyWait : w.isReady) || (w.isReady = !0, !0 !== e && --w.readyWait > 0 || M.resolveWith(m, [w]));
    }
  }), w.ready.then = M.then, "complete" === m.readyState || "loading" !== m.readyState && !m.documentElement.doScroll ? e.setTimeout(w.ready) : (m.addEventListener("DOMContentLoaded", B), e.addEventListener("load", B));

  var W = function (e, t, n, i, r, o, s) {
    var a = 0,
        l = e.length,
        u = null == n;
    if ("object" === _(n)) for (a in r = !0, n) W(e, t, a, n[a], !0, o, s);else if (void 0 !== i && (r = !0, p(i) || (s = !0), u && (s ? (t.call(e, i), t = null) : (u = t, t = function (e, t, n) {
      return u.call(w(e), n);
    })), t)) for (; a < l; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
    return r ? e : u ? t.call(e) : l ? t(e[0], n) : o;
  },
      Q = /^-ms-/,
      U = /-([a-z])/g;

  function $(e, t) {
    return t.toUpperCase();
  }

  function z(e) {
    return e.replace(Q, "ms-").replace(U, $);
  }

  var X = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };

  function V() {
    this.expando = w.expando + V.uid++;
  }

  V.uid = 1, V.prototype = {
    cache: function (e) {
      var t = e[this.expando];
      return t || (t = {}, X(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
        value: t,
        configurable: !0
      }))), t;
    },
    set: function (e, t, n) {
      var i,
          r = this.cache(e);
      if ("string" == typeof t) r[z(t)] = n;else for (i in t) r[z(i)] = t[i];
      return r;
    },
    get: function (e, t) {
      return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][z(t)];
    },
    access: function (e, t, n) {
      return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
    },
    remove: function (e, t) {
      var n,
          i = e[this.expando];

      if (void 0 !== i) {
        if (void 0 !== t) {
          n = (t = Array.isArray(t) ? t.map(z) : (t = z(t)) in i ? [t] : t.match(q) || []).length;

          for (; n--;) delete i[t[n]];
        }

        (void 0 === t || w.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
      }
    },
    hasData: function (e) {
      var t = e[this.expando];
      return void 0 !== t && !w.isEmptyObject(t);
    }
  };
  var Y = new V(),
      K = new V(),
      G = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      J = /[A-Z]/g;

  function Z(e, t, n) {
    var i;
    if (void 0 === n && 1 === e.nodeType) if (i = "data-" + t.replace(J, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(i))) {
      try {
        n = function (e) {
          return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : G.test(e) ? JSON.parse(e) : e);
        }(n);
      } catch (r) {}

      K.set(e, t, n);
    } else n = void 0;
    return n;
  }

  w.extend({
    hasData: function (e) {
      return K.hasData(e) || Y.hasData(e);
    },
    data: function (e, t, n) {
      return K.access(e, t, n);
    },
    removeData: function (e, t) {
      K.remove(e, t);
    },
    _data: function (e, t, n) {
      return Y.access(e, t, n);
    },
    _removeData: function (e, t) {
      Y.remove(e, t);
    }
  }), w.fn.extend({
    data: function (e, t) {
      var n,
          i,
          r,
          o = this[0],
          s = o && o.attributes;

      if (void 0 === e) {
        if (this.length && (r = K.get(o), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) {
          for (n = s.length; n--;) s[n] && 0 === (i = s[n].name).indexOf("data-") && (i = z(i.slice(5)), Z(o, i, r[i]));

          Y.set(o, "hasDataAttrs", !0);
        }

        return r;
      }

      return "object" == typeof e ? this.each(function () {
        K.set(this, e);
      }) : W(this, function (t) {
        var n;
        if (o && void 0 === t) return void 0 !== (n = K.get(o, e)) || void 0 !== (n = Z(o, e)) ? n : void 0;
        this.each(function () {
          K.set(this, e, t);
        });
      }, null, t, arguments.length > 1, null, !0);
    },
    removeData: function (e) {
      return this.each(function () {
        K.remove(this, e);
      });
    }
  }), w.extend({
    queue: function (e, t, n) {
      var i;
      if (e) return i = Y.get(e, t = (t || "fx") + "queue"), n && (!i || Array.isArray(n) ? i = Y.access(e, t, w.makeArray(n)) : i.push(n)), i || [];
    },
    dequeue: function (e, t) {
      var n = w.queue(e, t = t || "fx"),
          i = n.length,
          r = n.shift(),
          o = w._queueHooks(e, t);

      "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, function () {
        w.dequeue(e, t);
      }, o)), !i && o && o.empty.fire();
    },
    _queueHooks: function (e, t) {
      var n = t + "queueHooks";
      return Y.get(e, n) || Y.access(e, n, {
        empty: w.Callbacks("once memory").add(function () {
          Y.remove(e, [t + "queue", n]);
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
          i = 1,
          r = w.Deferred(),
          o = this,
          s = this.length,
          a = function () {
        --i || r.resolveWith(o, [o]);
      };

      for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;) (n = Y.get(o[s], e + "queueHooks")) && n.empty && (i++, n.empty.add(a));

      return a(), r.promise(t);
    }
  });

  var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
      ne = ["Top", "Right", "Bottom", "Left"],
      ie = m.documentElement,
      re = function (e) {
    return w.contains(e.ownerDocument, e);
  },
      oe = {
    composed: !0
  };

  ie.getRootNode && (re = function (e) {
    return w.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument;
  });

  var se = function (e, t) {
    return "none" === (e = t || e).style.display || "" === e.style.display && re(e) && "none" === w.css(e, "display");
  };

  function ae(e, t, n, i) {
    var r,
        o,
        s = 20,
        a = i ? function () {
      return i.cur();
    } : function () {
      return w.css(e, t, "");
    },
        l = a(),
        u = n && n[3] || (w.cssNumber[t] ? "" : "px"),
        c = e.nodeType && (w.cssNumber[t] || "px" !== u && +l) && te.exec(w.css(e, t));

    if (c && c[3] !== u) {
      for (u = u || c[3], c = +(l /= 2) || 1; s--;) w.style(e, t, c + u), (1 - o) * (1 - (o = a() / l || .5)) <= 0 && (s = 0), c /= o;

      w.style(e, t, (c *= 2) + u), n = n || [];
    }

    return n && (c = +c || +l || 0, r = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = u, i.start = c, i.end = r)), r;
  }

  var le = {};

  function ue(e) {
    var t,
        n = e.ownerDocument,
        i = e.nodeName,
        r = le[i];
    return r || (t = n.body.appendChild(n.createElement(i)), r = w.css(t, "display"), t.parentNode.removeChild(t), "none" === r && (r = "block"), le[i] = r, r);
  }

  function ce(e, t) {
    for (var n, i, r = [], o = 0, s = e.length; o < s; o++) (i = e[o]).style && (n = i.style.display, t ? ("none" === n && (r[o] = Y.get(i, "display") || null, r[o] || (i.style.display = "")), "" === i.style.display && se(i) && (r[o] = ue(i))) : "none" !== n && (r[o] = "none", Y.set(i, "display", n)));

    for (o = 0; o < s; o++) null != r[o] && (e[o].style.display = r[o]);

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
        se(this) ? w(this).show() : w(this).hide();
      });
    }
  });
  var fe,
      he,
      de = /^(?:checkbox|radio)$/i,
      pe = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
      ge = /^$|^module$|\/(?:java|ecma)script/i;
  fe = m.createDocumentFragment().appendChild(m.createElement("div")), (he = m.createElement("input")).setAttribute("type", "radio"), he.setAttribute("checked", "checked"), he.setAttribute("name", "t"), fe.appendChild(he), d.checkClone = fe.cloneNode(!0).cloneNode(!0).lastChild.checked, fe.innerHTML = "<textarea>x</textarea>", d.noCloneChecked = !!fe.cloneNode(!0).lastChild.defaultValue, fe.innerHTML = "<option></option>", d.option = !!fe.lastChild;
  var me = {
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""]
  };

  function ve(e, t) {
    var n;
    return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && k(e, t) ? w.merge([e], n) : n;
  }

  function ye(e, t) {
    for (var n = 0, i = e.length; n < i; n++) Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"));
  }

  me.tbody = me.tfoot = me.colgroup = me.caption = me.thead, me.th = me.td, d.option || (me.optgroup = me.option = [1, "<select multiple='multiple'>", "</select>"]);
  var _e = /<|&#?\w+;/;

  function be(e, t, n, i, r) {
    for (var o, s, a, l, u, c, f = t.createDocumentFragment(), h = [], d = 0, p = e.length; d < p; d++) if ((o = e[d]) || 0 === o) if ("object" === _(o)) w.merge(h, o.nodeType ? [o] : o);else if (_e.test(o)) {
      for (s = s || f.appendChild(t.createElement("div")), a = (pe.exec(o) || ["", ""])[1].toLowerCase(), s.innerHTML = (l = me[a] || me._default)[1] + w.htmlPrefilter(o) + l[2], c = l[0]; c--;) s = s.lastChild;

      w.merge(h, s.childNodes), (s = f.firstChild).textContent = "";
    } else h.push(t.createTextNode(o));

    for (f.textContent = "", d = 0; o = h[d++];) if (i && w.inArray(o, i) > -1) r && r.push(o);else if (u = re(o), s = ve(f.appendChild(o), "script"), u && ye(s), n) for (c = 0; o = s[c++];) ge.test(o.type || "") && n.push(o);

    return f;
  }

  var we = /^key/,
      xe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      Te = /^([^.]*)(?:\.(.+)|)/;

  function Ee() {
    return !0;
  }

  function Ce() {
    return !1;
  }

  function Se(e, t) {
    return e === function () {
      try {
        return m.activeElement;
      } catch (e) {}
    }() == ("focus" === t);
  }

  function ke(e, t, n, i, r, o) {
    var s, a;

    if ("object" == typeof t) {
      for (a in "string" != typeof n && (i = i || n, n = void 0), t) ke(e, a, n, i, t[a], o);

      return e;
    }

    if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = Ce;else if (!r) return e;
    return 1 === o && (s = r, (r = function (e) {
      return w().off(e), s.apply(this, arguments);
    }).guid = s.guid || (s.guid = w.guid++)), e.each(function () {
      w.event.add(this, t, r, i, n);
    });
  }

  function Ae(e, t, n) {
    n ? (Y.set(e, t, !1), w.event.add(e, t, {
      namespace: !1,
      handler: function (e) {
        var i,
            o,
            s = Y.get(this, t);

        if (1 & e.isTrigger && this[t]) {
          if (s.length) (w.event.special[t] || {}).delegateType && e.stopPropagation();else if (s = r.call(arguments), Y.set(this, t, s), i = n(this, t), this[t](), s !== (o = Y.get(this, t)) || i ? Y.set(this, t, !1) : o = {}, s !== o) return e.stopImmediatePropagation(), e.preventDefault(), o.value;
        } else s.length && (Y.set(this, t, {
          value: w.event.trigger(w.extend(s[0], w.Event.prototype), s.slice(1), this)
        }), e.stopImmediatePropagation());
      }
    })) : void 0 === Y.get(e, t) && w.event.add(e, t, Ee);
  }

  w.event = {
    global: {},
    add: function (e, t, n, i, r) {
      var o,
          s,
          a,
          l,
          u,
          c,
          f,
          h,
          d,
          p,
          g,
          m = Y.get(e);
      if (X(e)) for (n.handler && (n = (o = n).handler, r = o.selector), r && w.find.matchesSelector(ie, r), n.guid || (n.guid = w.guid++), (l = m.events) || (l = m.events = Object.create(null)), (s = m.handle) || (s = m.handle = function (t) {
        return void 0 !== w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0;
      }), u = (t = (t || "").match(q) || [""]).length; u--;) d = g = (a = Te.exec(t[u]) || [])[1], p = (a[2] || "").split(".").sort(), d && (f = w.event.special[d] || {}, f = w.event.special[d = (r ? f.delegateType : f.bindType) || d] || {}, c = w.extend({
        type: d,
        origType: g,
        data: i,
        handler: n,
        guid: n.guid,
        selector: r,
        needsContext: r && w.expr.match.needsContext.test(r),
        namespace: p.join(".")
      }, o), (h = l[d]) || ((h = l[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, i, p, s) || e.addEventListener && e.addEventListener(d, s)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), r ? h.splice(h.delegateCount++, 0, c) : h.push(c), w.event.global[d] = !0);
    },
    remove: function (e, t, n, i, r) {
      var o,
          s,
          a,
          l,
          u,
          c,
          f,
          h,
          d,
          p,
          g,
          m = Y.hasData(e) && Y.get(e);

      if (m && (l = m.events)) {
        for (u = (t = (t || "").match(q) || [""]).length; u--;) if (d = g = (a = Te.exec(t[u]) || [])[1], p = (a[2] || "").split(".").sort(), d) {
          for (f = w.event.special[d] || {}, h = l[d = (i ? f.delegateType : f.bindType) || d] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = h.length; o--;) c = h[o], !r && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (h.splice(o, 1), c.selector && h.delegateCount--, f.remove && f.remove.call(e, c));

          s && !h.length && (f.teardown && !1 !== f.teardown.call(e, p, m.handle) || w.removeEvent(e, d, m.handle), delete l[d]);
        } else for (d in l) w.event.remove(e, d + t[u], n, i, !0);

        w.isEmptyObject(l) && Y.remove(e, "handle events");
      }
    },
    dispatch: function (e) {
      var t,
          n,
          i,
          r,
          o,
          s,
          a = new Array(arguments.length),
          l = w.event.fix(e),
          u = (Y.get(this, "events") || Object.create(null))[l.type] || [],
          c = w.event.special[l.type] || {};

      for (a[0] = l, t = 1; t < arguments.length; t++) a[t] = arguments[t];

      if (l.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, l)) {
        for (s = w.event.handlers.call(this, l, u), t = 0; (r = s[t++]) && !l.isPropagationStopped();) for (l.currentTarget = r.elem, n = 0; (o = r.handlers[n++]) && !l.isImmediatePropagationStopped();) l.rnamespace && !1 !== o.namespace && !l.rnamespace.test(o.namespace) || (l.handleObj = o, l.data = o.data, void 0 !== (i = ((w.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, a)) && !1 === (l.result = i) && (l.preventDefault(), l.stopPropagation()));

        return c.postDispatch && c.postDispatch.call(this, l), l.result;
      }
    },
    handlers: function (e, t) {
      var n,
          i,
          r,
          o,
          s,
          a = [],
          l = t.delegateCount,
          u = e.target;
      if (l && u.nodeType && !("click" === e.type && e.button >= 1)) for (; u !== this; u = u.parentNode || this) if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
        for (o = [], s = {}, n = 0; n < l; n++) void 0 === s[r = (i = t[n]).selector + " "] && (s[r] = i.needsContext ? w(r, this).index(u) > -1 : w.find(r, this, null, [u]).length), s[r] && o.push(i);

        o.length && a.push({
          elem: u,
          handlers: o
        });
      }
      return u = this, l < t.length && a.push({
        elem: u,
        handlers: t.slice(l)
      }), a;
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
          return de.test(t.type) && t.click && k(t, "input") && Ae(t, "click", Ee), !1;
        },
        trigger: function (e) {
          var t = this || e;
          return de.test(t.type) && t.click && k(t, "input") && Ae(t, "click"), !0;
        },
        _default: function (e) {
          var t = e.target;
          return de.test(t.type) && t.click && k(t, "input") && Y.get(t, "click") || k(t, "a");
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
    e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ee : Ce, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && w.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[w.expando] = !0;
  }, w.Event.prototype = {
    constructor: w.Event,
    isDefaultPrevented: Ce,
    isPropagationStopped: Ce,
    isImmediatePropagationStopped: Ce,
    isSimulated: !1,
    preventDefault: function () {
      var e = this.originalEvent;
      this.isDefaultPrevented = Ee, e && !this.isSimulated && e.preventDefault();
    },
    stopPropagation: function () {
      var e = this.originalEvent;
      this.isPropagationStopped = Ee, e && !this.isSimulated && e.stopPropagation();
    },
    stopImmediatePropagation: function () {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = Ee, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
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
      return null == e.which && we.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && xe.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which;
    }
  }, w.event.addProp), w.each({
    focus: "focusin",
    blur: "focusout"
  }, function (e, t) {
    w.event.special[e] = {
      setup: function () {
        return Ae(this, e, Se), !1;
      },
      trigger: function () {
        return Ae(this, e), !0;
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
            i = this,
            r = e.relatedTarget,
            o = e.handleObj;
        return r && (r === i || w.contains(i, r)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n;
      }
    };
  }), w.fn.extend({
    on: function (e, t, n, i) {
      return ke(this, e, t, n, i);
    },
    one: function (e, t, n, i) {
      return ke(this, e, t, n, i, 1);
    },
    off: function (e, t, n) {
      var i, r;
      if (e && e.preventDefault && e.handleObj) return i = e.handleObj, w(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;

      if ("object" == typeof e) {
        for (r in e) this.off(r, t, e[r]);

        return this;
      }

      return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Ce), this.each(function () {
        w.event.remove(this, e, n, t);
      });
    }
  });
  var De = /<script|<style|<link/i,
      Ne = /checked\s*(?:[^=]|=\s*.checked.)/i,
      je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

  function Ie(e, t) {
    return k(e, "table") && k(11 !== t.nodeType ? t : t.firstChild, "tr") && w(e).children("tbody")[0] || e;
  }

  function Oe(e) {
    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
  }

  function Le(e) {
    return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e;
  }

  function qe(e, t) {
    var n, i, r, o, s, a;

    if (1 === t.nodeType) {
      if (Y.hasData(e) && (a = Y.get(e).events)) for (r in Y.remove(t, "handle events"), a) for (n = 0, i = a[r].length; n < i; n++) w.event.add(t, r, a[r][n]);
      K.hasData(e) && (o = K.access(e), s = w.extend({}, o), K.set(t, s));
    }
  }

  function Pe(e, t) {
    var n = t.nodeName.toLowerCase();
    "input" === n && de.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue);
  }

  function Re(e, t, n, i) {
    t = o(t);
    var r,
        s,
        a,
        l,
        u,
        c,
        f = 0,
        h = e.length,
        g = h - 1,
        m = t[0],
        v = p(m);
    if (v || h > 1 && "string" == typeof m && !d.checkClone && Ne.test(m)) return e.each(function (r) {
      var o = e.eq(r);
      v && (t[0] = m.call(this, r, o.html())), Re(o, t, n, i);
    });

    if (h && (s = (r = be(t, e[0].ownerDocument, !1, e, i)).firstChild, 1 === r.childNodes.length && (r = s), s || i)) {
      for (l = (a = w.map(ve(r, "script"), Oe)).length; f < h; f++) u = r, f !== g && (u = w.clone(u, !0, !0), l && w.merge(a, ve(u, "script"))), n.call(e[f], u, f);

      if (l) for (c = a[a.length - 1].ownerDocument, w.map(a, Le), f = 0; f < l; f++) ge.test((u = a[f]).type || "") && !Y.access(u, "globalEval") && w.contains(c, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? w._evalUrl && !u.noModule && w._evalUrl(u.src, {
        nonce: u.nonce || u.getAttribute("nonce")
      }, c) : y(u.textContent.replace(je, ""), u, c));
    }

    return e;
  }

  function He(e, t, n) {
    for (var i, r = t ? w.filter(t, e) : e, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || w.cleanData(ve(i)), i.parentNode && (n && re(i) && ye(ve(i, "script")), i.parentNode.removeChild(i));

    return e;
  }

  w.extend({
    htmlPrefilter: function (e) {
      return e;
    },
    clone: function (e, t, n) {
      var i,
          r,
          o,
          s,
          a = e.cloneNode(!0),
          l = re(e);
      if (!(d.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || w.isXMLDoc(e))) for (s = ve(a), i = 0, r = (o = ve(e)).length; i < r; i++) Pe(o[i], s[i]);
      if (t) if (n) for (o = o || ve(e), s = s || ve(a), i = 0, r = o.length; i < r; i++) qe(o[i], s[i]);else qe(e, a);
      return (s = ve(a, "script")).length > 0 && ye(s, !l && ve(e, "script")), a;
    },
    cleanData: function (e) {
      for (var t, n, i, r = w.event.special, o = 0; void 0 !== (n = e[o]); o++) if (X(n)) {
        if (t = n[Y.expando]) {
          if (t.events) for (i in t.events) r[i] ? w.event.remove(n, i) : w.removeEvent(n, i, t.handle);
          n[Y.expando] = void 0;
        }

        n[K.expando] && (n[K.expando] = void 0);
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
      return W(this, function (e) {
        return void 0 === e ? w.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
        });
      }, null, e, arguments.length);
    },
    append: function () {
      return Re(this, arguments, function (e) {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Ie(this, e).appendChild(e);
      });
    },
    prepend: function () {
      return Re(this, arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = Ie(this, e);
          t.insertBefore(e, t.firstChild);
        }
      });
    },
    before: function () {
      return Re(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this);
      });
    },
    after: function () {
      return Re(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
      });
    },
    empty: function () {
      for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (w.cleanData(ve(e, !1)), e.textContent = "");

      return this;
    },
    clone: function (e, t) {
      return e = null != e && e, t = null == t ? e : t, this.map(function () {
        return w.clone(this, e, t);
      });
    },
    html: function (e) {
      return W(this, function (e) {
        var t = this[0] || {},
            n = 0,
            i = this.length;
        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;

        if ("string" == typeof e && !De.test(e) && !me[(pe.exec(e) || ["", ""])[1].toLowerCase()]) {
          e = w.htmlPrefilter(e);

          try {
            for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (w.cleanData(ve(t, !1)), t.innerHTML = e);

            t = 0;
          } catch (r) {}
        }

        t && this.empty().append(e);
      }, null, e, arguments.length);
    },
    replaceWith: function () {
      var e = [];
      return Re(this, arguments, function (t) {
        var n = this.parentNode;
        w.inArray(this, e) < 0 && (w.cleanData(ve(this)), n && n.replaceChild(t, this));
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
      for (var n, i = [], r = w(e), o = r.length - 1, a = 0; a <= o; a++) n = a === o ? this : this.clone(!0), w(r[a])[t](n), s.apply(i, n.get());

      return this.pushStack(i);
    };
  });

  var Fe = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
      Me = function (t) {
    var n = t.ownerDocument.defaultView;
    return n && n.opener || (n = e), n.getComputedStyle(t);
  },
      Be = function (e, t, n) {
    var i,
        r,
        o = {};

    for (r in t) o[r] = e.style[r], e.style[r] = t[r];

    for (r in i = n.call(e), t) e.style[r] = o[r];

    return i;
  },
      We = new RegExp(ne.join("|"), "i");

  function Qe(e, t, n) {
    var i,
        r,
        o,
        s,
        a = e.style;
    return (n = n || Me(e)) && ("" !== (s = n.getPropertyValue(t) || n[t]) || re(e) || (s = w.style(e, t)), !d.pixelBoxStyles() && Fe.test(s) && We.test(t) && (i = a.width, r = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = r, a.maxWidth = o)), void 0 !== s ? s + "" : s;
  }

  function Ue(e, t) {
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
        u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ie.appendChild(u).appendChild(c);
        var t = e.getComputedStyle(c);
        i = "1%" !== t.top, l = 12 === n(t.marginLeft), c.style.right = "60%", s = 36 === n(t.right), r = 36 === n(t.width), c.style.position = "absolute", o = 12 === n(c.offsetWidth / 3), ie.removeChild(u), c = null;
      }
    }

    function n(e) {
      return Math.round(parseFloat(e));
    }

    var i,
        r,
        o,
        s,
        a,
        l,
        u = m.createElement("div"),
        c = m.createElement("div");
    c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", d.clearCloneStyle = "content-box" === c.style.backgroundClip, w.extend(d, {
      boxSizingReliable: function () {
        return t(), r;
      },
      pixelBoxStyles: function () {
        return t(), s;
      },
      pixelPosition: function () {
        return t(), i;
      },
      reliableMarginLeft: function () {
        return t(), l;
      },
      scrollboxSize: function () {
        return t(), o;
      },
      reliableTrDimensions: function () {
        var t, n, i, r;
        return null == a && (t = m.createElement("table"), n = m.createElement("tr"), i = m.createElement("div"), t.style.cssText = "position:absolute;left:-11111px", n.style.height = "1px", i.style.height = "9px", ie.appendChild(t).appendChild(n).appendChild(i), r = e.getComputedStyle(n), a = parseInt(r.height) > 3, ie.removeChild(t)), a;
      }
    }));
  }();
  var $e = ["Webkit", "Moz", "ms"],
      ze = m.createElement("div").style,
      Xe = {};

  function Ve(e) {
    return w.cssProps[e] || Xe[e] || (e in ze ? e : Xe[e] = function (e) {
      for (var t = e[0].toUpperCase() + e.slice(1), n = $e.length; n--;) if ((e = $e[n] + t) in ze) return e;
    }(e) || e);
  }

  var Ye = /^(none|table(?!-c[ea]).+)/,
      Ke = /^--/,
      Ge = {
    position: "absolute",
    visibility: "hidden",
    display: "block"
  },
      Je = {
    letterSpacing: "0",
    fontWeight: "400"
  };

  function Ze(e, t, n) {
    var i = te.exec(t);
    return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
  }

  function et(e, t, n, i, r, o) {
    var s = "width" === t ? 1 : 0,
        a = 0,
        l = 0;
    if (n === (i ? "border" : "content")) return 0;

    for (; s < 4; s += 2) "margin" === n && (l += w.css(e, n + ne[s], !0, r)), i ? ("content" === n && (l -= w.css(e, "padding" + ne[s], !0, r)), "margin" !== n && (l -= w.css(e, "border" + ne[s] + "Width", !0, r))) : (l += w.css(e, "padding" + ne[s], !0, r), "padding" !== n ? l += w.css(e, "border" + ne[s] + "Width", !0, r) : a += w.css(e, "border" + ne[s] + "Width", !0, r));

    return !i && o >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - l - a - .5)) || 0), l;
  }

  function tt(e, t, n) {
    var i = Me(e),
        r = (!d.boxSizingReliable() || n) && "border-box" === w.css(e, "boxSizing", !1, i),
        o = r,
        s = Qe(e, t, i),
        a = "offset" + t[0].toUpperCase() + t.slice(1);

    if (Fe.test(s)) {
      if (!n) return s;
      s = "auto";
    }

    return (!d.boxSizingReliable() && r || !d.reliableTrDimensions() && k(e, "tr") || "auto" === s || !parseFloat(s) && "inline" === w.css(e, "display", !1, i)) && e.getClientRects().length && (r = "border-box" === w.css(e, "boxSizing", !1, i), (o = a in e) && (s = e[a])), (s = parseFloat(s) || 0) + et(e, t, n || (r ? "border" : "content"), o, i, s) + "px";
  }

  function nt(e, t, n, i, r) {
    return new nt.prototype.init(e, t, n, i, r);
  }

  w.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = Qe(e, "opacity");
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
    style: function (e, t, n, i) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var r,
            o,
            s,
            a = z(t),
            l = Ke.test(t),
            u = e.style;
        if (l || (t = Ve(a)), s = w.cssHooks[t] || w.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (r = s.get(e, !1, i)) ? r : u[t];
        "string" == (o = typeof n) && (r = te.exec(n)) && r[1] && (n = ae(e, t, r), o = "number"), null != n && n == n && ("number" !== o || l || (n += r && r[3] || (w.cssNumber[a] ? "" : "px")), d.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (l ? u.setProperty(t, n) : u[t] = n));
      }
    },
    css: function (e, t, n, i) {
      var r,
          o,
          s,
          a = z(t);
      return Ke.test(t) || (t = Ve(a)), (s = w.cssHooks[t] || w.cssHooks[a]) && "get" in s && (r = s.get(e, !0, n)), void 0 === r && (r = Qe(e, t, i)), "normal" === r && t in Je && (r = Je[t]), "" === n || n ? (o = parseFloat(r), !0 === n || isFinite(o) ? o || 0 : r) : r;
    }
  }), w.each(["height", "width"], function (e, t) {
    w.cssHooks[t] = {
      get: function (e, n, i) {
        if (n) return !Ye.test(w.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? tt(e, t, i) : Be(e, Ge, function () {
          return tt(e, t, i);
        });
      },
      set: function (e, n, i) {
        var r,
            o = Me(e),
            s = !d.scrollboxSize() && "absolute" === o.position,
            a = (s || i) && "border-box" === w.css(e, "boxSizing", !1, o),
            l = i ? et(e, t, i, a, o) : 0;
        return a && s && (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - et(e, t, "border", !1, o) - .5)), l && (r = te.exec(n)) && "px" !== (r[3] || "px") && (e.style[t] = n, n = w.css(e, t)), Ze(0, n, l);
      }
    };
  }), w.cssHooks.marginLeft = Ue(d.reliableMarginLeft, function (e, t) {
    if (t) return (parseFloat(Qe(e, "marginLeft")) || e.getBoundingClientRect().left - Be(e, {
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
        for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[e + ne[i] + t] = o[i] || o[i - 2] || o[0];

        return r;
      }
    }, "margin" !== e && (w.cssHooks[e + t].set = Ze);
  }), w.fn.extend({
    css: function (e, t) {
      return W(this, function (e, t, n) {
        var i,
            r,
            o = {},
            s = 0;

        if (Array.isArray(t)) {
          for (i = Me(e), r = t.length; s < r; s++) o[t[s]] = w.css(e, t[s], !1, i);

          return o;
        }

        return void 0 !== n ? w.style(e, t, n) : w.css(e, t);
      }, e, t, arguments.length > 1);
    }
  }), w.Tween = nt, (nt.prototype = {
    constructor: nt,
    init: function (e, t, n, i, r, o) {
      this.elem = e, this.prop = n, this.easing = r || w.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (w.cssNumber[n] ? "" : "px");
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
  var it,
      rt,
      ot = /^(?:toggle|show|hide)$/,
      st = /queueHooks$/;

  function at() {
    rt && (!1 === m.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(at) : e.setTimeout(at, w.fx.interval), w.fx.tick());
  }

  function lt() {
    return e.setTimeout(function () {
      it = void 0;
    }), it = Date.now();
  }

  function ut(e, t) {
    var n,
        i = 0,
        r = {
      height: e
    };

    for (t = t ? 1 : 0; i < 4; i += 2 - t) r["margin" + (n = ne[i])] = r["padding" + n] = e;

    return t && (r.opacity = r.width = e), r;
  }

  function ct(e, t, n) {
    for (var i, r = (ft.tweeners[t] || []).concat(ft.tweeners["*"]), o = 0, s = r.length; o < s; o++) if (i = r[o].call(n, t, e)) return i;
  }

  function ft(e, t, n) {
    var i,
        r,
        o = 0,
        s = ft.prefilters.length,
        a = w.Deferred().always(function () {
      delete l.elem;
    }),
        l = function () {
      if (r) return !1;

      for (var t = it || lt(), n = Math.max(0, u.startTime + u.duration - t), i = 1 - (n / u.duration || 0), o = 0, s = u.tweens.length; o < s; o++) u.tweens[o].run(i);

      return a.notifyWith(e, [u, i, n]), i < 1 && s ? n : (s || a.notifyWith(e, [u, 1, 0]), a.resolveWith(e, [u]), !1);
    },
        u = a.promise({
      elem: e,
      props: w.extend({}, t),
      opts: w.extend(!0, {
        specialEasing: {},
        easing: w.easing._default
      }, n),
      originalProperties: t,
      originalOptions: n,
      startTime: it || lt(),
      duration: n.duration,
      tweens: [],
      createTween: function (t, n) {
        var i = w.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
        return u.tweens.push(i), i;
      },
      stop: function (t) {
        var n = 0,
            i = t ? u.tweens.length : 0;
        if (r) return this;

        for (r = !0; n < i; n++) u.tweens[n].run(1);

        return t ? (a.notifyWith(e, [u, 1, 0]), a.resolveWith(e, [u, t])) : a.rejectWith(e, [u, t]), this;
      }
    }),
        c = u.props;

    for (function (e, t) {
      var n, i, r, o, s;

      for (n in e) if (r = t[i = z(n)], o = e[n], Array.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), (s = w.cssHooks[i]) && ("expand" in s)) for (n in o = s.expand(o), delete e[i], o) (n in e) || (e[n] = o[n], t[n] = r);else t[i] = r;
    }(c, u.opts.specialEasing); o < s; o++) if (i = ft.prefilters[o].call(u, e, c, u.opts)) return p(i.stop) && (w._queueHooks(u.elem, u.opts.queue).stop = i.stop.bind(i)), i;

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
        return ae(n.elem, e, te.exec(t), n), n;
      }]
    },
    tweener: function (e, t) {
      p(e) ? (t = e, e = ["*"]) : e = e.match(q);

      for (var n, i = 0, r = e.length; i < r; i++) (ft.tweeners[n = e[i]] = ft.tweeners[n] || []).unshift(t);
    },
    prefilters: [function (e, t, n) {
      var i,
          r,
          o,
          s,
          a,
          l,
          u,
          c,
          f = "width" in t || "height" in t,
          h = this,
          d = {},
          p = e.style,
          g = e.nodeType && se(e),
          m = Y.get(e, "fxshow");

      for (i in n.queue || (null == (s = w._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function () {
        s.unqueued || a();
      }), s.unqueued++, h.always(function () {
        h.always(function () {
          s.unqueued--, w.queue(e, "fx").length || s.empty.fire();
        });
      })), t) if (ot.test(r = t[i])) {
        if (delete t[i], o = o || "toggle" === r, r === (g ? "hide" : "show")) {
          if ("show" !== r || !m || void 0 === m[i]) continue;
          g = !0;
        }

        d[i] = m && m[i] || w.style(e, i);
      }

      if ((l = !w.isEmptyObject(t)) || !w.isEmptyObject(d)) for (i in f && 1 === e.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], null == (u = m && m.display) && (u = Y.get(e, "display")), "none" === (c = w.css(e, "display")) && (u ? c = u : (ce([e], !0), u = e.style.display || u, c = w.css(e, "display"), ce([e]))), ("inline" === c || "inline-block" === c && null != u) && "none" === w.css(e, "float") && (l || (h.done(function () {
        p.display = u;
      }), null == u && (u = "none" === (c = p.display) ? "" : c)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", h.always(function () {
        p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2];
      })), l = !1, d) l || (m ? "hidden" in m && (g = m.hidden) : m = Y.access(e, "fxshow", {
        display: u
      }), o && (m.hidden = !g), g && ce([e], !0), h.done(function () {
        for (i in g || ce([e]), Y.remove(e, "fxshow"), d) w.style(e, i, d[i]);
      })), l = ct(g ? m[i] : 0, i, h), i in m || (m[i] = l.start, g && (l.end = l.start, l.start = 0));
    }],
    prefilter: function (e, t) {
      t ? ft.prefilters.unshift(e) : ft.prefilters.push(e);
    }
  }), w.speed = function (e, t, n) {
    var i = e && "object" == typeof e ? w.extend({}, e) : {
      complete: n || !n && t || p(e) && e,
      duration: e,
      easing: n && t || t && !p(t) && t
    };
    return w.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration = i.duration in w.fx.speeds ? w.fx.speeds[i.duration] : w.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
      p(i.old) && i.old.call(this), i.queue && w.dequeue(this, i.queue);
    }, i;
  }, w.fn.extend({
    fadeTo: function (e, t, n, i) {
      return this.filter(se).css("opacity", 0).show().end().animate({
        opacity: t
      }, e, n, i);
    },
    animate: function (e, t, n, i) {
      var r = w.isEmptyObject(e),
          o = w.speed(t, n, i),
          s = function () {
        var t = ft(this, w.extend({}, e), o);
        (r || Y.get(this, "finish")) && t.stop(!0);
      };

      return s.finish = s, r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s);
    },
    stop: function (e, t, n) {
      var i = function (e) {
        var t = e.stop;
        delete e.stop, t(n);
      };

      return "string" != typeof e && (n = t, t = e, e = void 0), t && this.queue(e || "fx", []), this.each(function () {
        var t = !0,
            r = null != e && e + "queueHooks",
            o = w.timers,
            s = Y.get(this);
        if (r) s[r] && s[r].stop && i(s[r]);else for (r in s) s[r] && s[r].stop && st.test(r) && i(s[r]);

        for (r = o.length; r--;) o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n), t = !1, o.splice(r, 1));

        !t && n || w.dequeue(this, e);
      });
    },
    finish: function (e) {
      return !1 !== e && (e = e || "fx"), this.each(function () {
        var t,
            n = Y.get(this),
            i = n[e + "queue"],
            r = n[e + "queueHooks"],
            o = w.timers,
            s = i ? i.length : 0;

        for (n.finish = !0, w.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));

        for (t = 0; t < s; t++) i[t] && i[t].finish && i[t].finish.call(this);

        delete n.finish;
      });
    }
  }), w.each(["toggle", "show", "hide"], function (e, t) {
    var n = w.fn[t];

    w.fn[t] = function (e, i, r) {
      return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ut(t, !0), e, i, r);
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
    w.fn[e] = function (e, n, i) {
      return this.animate(t, e, n, i);
    };
  }), w.timers = [], w.fx.tick = function () {
    var e,
        t = 0,
        n = w.timers;

    for (it = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);

    n.length || w.fx.stop(), it = void 0;
  }, w.fx.timer = function (e) {
    w.timers.push(e), w.fx.start();
  }, w.fx.interval = 13, w.fx.start = function () {
    rt || (rt = !0, at());
  }, w.fx.stop = function () {
    rt = null;
  }, w.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  }, w.fn.delay = function (t, n) {
    return t = w.fx && w.fx.speeds[t] || t, this.queue(n = n || "fx", function (n, i) {
      var r = e.setTimeout(n, t);

      i.stop = function () {
        e.clearTimeout(r);
      };
    });
  }, function () {
    var e = m.createElement("input"),
        t = m.createElement("select").appendChild(m.createElement("option"));
    e.type = "checkbox", d.checkOn = "" !== e.value, d.optSelected = t.selected, (e = m.createElement("input")).value = "t", e.type = "radio", d.radioValue = "t" === e.value;
  }();
  var ht,
      dt = w.expr.attrHandle;
  w.fn.extend({
    attr: function (e, t) {
      return W(this, w.attr, e, t, arguments.length > 1);
    },
    removeAttr: function (e) {
      return this.each(function () {
        w.removeAttr(this, e);
      });
    }
  }), w.extend({
    attr: function (e, t, n) {
      var i,
          r,
          o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? w.prop(e, t, n) : (1 === o && w.isXMLDoc(e) || (r = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? ht : void 0)), void 0 !== n ? null === n ? void w.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : null == (i = w.find.attr(e, t)) ? void 0 : i);
    },
    attrHooks: {
      type: {
        set: function (e, t) {
          if (!d.radioValue && "radio" === t && k(e, "input")) {
            var n = e.value;
            return e.setAttribute("type", t), n && (e.value = n), t;
          }
        }
      }
    },
    removeAttr: function (e, t) {
      var n,
          i = 0,
          r = t && t.match(q);
      if (r && 1 === e.nodeType) for (; n = r[i++];) e.removeAttribute(n);
    }
  }), ht = {
    set: function (e, t, n) {
      return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n;
    }
  }, w.each(w.expr.match.bool.source.match(/\w+/g), function (e, t) {
    var n = dt[t] || w.find.attr;

    dt[t] = function (e, t, i) {
      var r,
          o,
          s = t.toLowerCase();
      return i || (o = dt[s], dt[s] = r, r = null != n(e, t, i) ? s : null, dt[s] = o), r;
    };
  });
  var pt = /^(?:input|select|textarea|button)$/i,
      gt = /^(?:a|area)$/i;

  function mt(e) {
    return (e.match(q) || []).join(" ");
  }

  function vt(e) {
    return e.getAttribute && e.getAttribute("class") || "";
  }

  function yt(e) {
    return Array.isArray(e) ? e : "string" == typeof e && e.match(q) || [];
  }

  w.fn.extend({
    prop: function (e, t) {
      return W(this, w.prop, e, t, arguments.length > 1);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[w.propFix[e] || e];
      });
    }
  }), w.extend({
    prop: function (e, t, n) {
      var i,
          r,
          o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return 1 === o && w.isXMLDoc(e) || (r = w.propHooks[t = w.propFix[t] || t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t];
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
  }), d.optSelected || (w.propHooks.selected = {
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
          i,
          r,
          o,
          s,
          a,
          l = 0;
      if (p(e)) return this.each(function (t) {
        w(this).addClass(e.call(this, t, vt(this)));
      });
      if ((t = yt(e)).length) for (; n = this[l++];) if (r = vt(n), i = 1 === n.nodeType && " " + mt(r) + " ") {
        for (s = 0; o = t[s++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");

        r !== (a = mt(i)) && n.setAttribute("class", a);
      }
      return this;
    },
    removeClass: function (e) {
      var t,
          n,
          i,
          r,
          o,
          s,
          a,
          l = 0;
      if (p(e)) return this.each(function (t) {
        w(this).removeClass(e.call(this, t, vt(this)));
      });
      if (!arguments.length) return this.attr("class", "");
      if ((t = yt(e)).length) for (; n = this[l++];) if (r = vt(n), i = 1 === n.nodeType && " " + mt(r) + " ") {
        for (s = 0; o = t[s++];) for (; i.indexOf(" " + o + " ") > -1;) i = i.replace(" " + o + " ", " ");

        r !== (a = mt(i)) && n.setAttribute("class", a);
      }
      return this;
    },
    toggleClass: function (e, t) {
      var n = typeof e,
          i = "string" === n || Array.isArray(e);
      return "boolean" == typeof t && i ? t ? this.addClass(e) : this.removeClass(e) : p(e) ? this.each(function (n) {
        w(this).toggleClass(e.call(this, n, vt(this), t), t);
      }) : this.each(function () {
        var t, r, o, s;
        if (i) for (r = 0, o = w(this), s = yt(e); t = s[r++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);else void 0 !== e && "boolean" !== n || ((t = vt(this)) && Y.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Y.get(this, "__className__") || ""));
      });
    },
    hasClass: function (e) {
      var t,
          n,
          i = 0;

      for (t = " " + e + " "; n = this[i++];) if (1 === n.nodeType && (" " + mt(vt(n)) + " ").indexOf(t) > -1) return !0;

      return !1;
    }
  });
  var _t = /\r/g;
  w.fn.extend({
    val: function (e) {
      var t,
          n,
          i,
          r = this[0];
      return arguments.length ? (i = p(e), this.each(function (n) {
        var r;
        1 === this.nodeType && (null == (r = i ? e.call(this, n, w(this).val()) : e) ? r = "" : "number" == typeof r ? r += "" : Array.isArray(r) && (r = w.map(r, function (e) {
          return null == e ? "" : e + "";
        })), (t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r));
      })) : r ? (t = w.valHooks[r.type] || w.valHooks[r.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : "string" == typeof (n = r.value) ? n.replace(_t, "") : null == n ? "" : n : void 0;
    }
  }), w.extend({
    valHooks: {
      option: {
        get: function (e) {
          var t = w.find.attr(e, "value");
          return null != t ? t : mt(w.text(e));
        }
      },
      select: {
        get: function (e) {
          var t,
              n,
              i,
              r = e.options,
              o = e.selectedIndex,
              s = "select-one" === e.type,
              a = s ? null : [],
              l = s ? o + 1 : r.length;

          for (i = o < 0 ? l : s ? o : 0; i < l; i++) if (((n = r[i]).selected || i === o) && !n.disabled && (!n.parentNode.disabled || !k(n.parentNode, "optgroup"))) {
            if (t = w(n).val(), s) return t;
            a.push(t);
          }

          return a;
        },
        set: function (e, t) {
          for (var n, i, r = e.options, o = w.makeArray(t), s = r.length; s--;) ((i = r[s]).selected = w.inArray(w.valHooks.option.get(i), o) > -1) && (n = !0);

          return n || (e.selectedIndex = -1), o;
        }
      }
    }
  }), w.each(["radio", "checkbox"], function () {
    w.valHooks[this] = {
      set: function (e, t) {
        if (Array.isArray(t)) return e.checked = w.inArray(w(e).val(), t) > -1;
      }
    }, d.checkOn || (w.valHooks[this].get = function (e) {
      return null === e.getAttribute("value") ? "on" : e.value;
    });
  }), d.focusin = "onfocusin" in e;

  var bt = /^(?:focusinfocus|focusoutblur)$/,
      wt = function (e) {
    e.stopPropagation();
  };

  w.extend(w.event, {
    trigger: function (t, n, i, r) {
      var o,
          s,
          a,
          l,
          u,
          f,
          h,
          d,
          v = [i || m],
          y = c.call(t, "type") ? t.type : t,
          _ = c.call(t, "namespace") ? t.namespace.split(".") : [];

      if (s = d = a = i = i || m, 3 !== i.nodeType && 8 !== i.nodeType && !bt.test(y + w.event.triggered) && (y.indexOf(".") > -1 && (_ = y.split("."), y = _.shift(), _.sort()), u = y.indexOf(":") < 0 && "on" + y, (t = t[w.expando] ? t : new w.Event(y, "object" == typeof t && t)).isTrigger = r ? 2 : 3, t.namespace = _.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + _.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : w.makeArray(n, [t]), h = w.event.special[y] || {}, r || !h.trigger || !1 !== h.trigger.apply(i, n))) {
        if (!r && !h.noBubble && !g(i)) {
          for (bt.test((l = h.delegateType || y) + y) || (s = s.parentNode); s; s = s.parentNode) v.push(s), a = s;

          a === (i.ownerDocument || m) && v.push(a.defaultView || a.parentWindow || e);
        }

        for (o = 0; (s = v[o++]) && !t.isPropagationStopped();) d = s, t.type = o > 1 ? l : h.bindType || y, (f = (Y.get(s, "events") || Object.create(null))[t.type] && Y.get(s, "handle")) && f.apply(s, n), (f = u && s[u]) && f.apply && X(s) && (t.result = f.apply(s, n), !1 === t.result && t.preventDefault());

        return t.type = y, r || t.isDefaultPrevented() || h._default && !1 !== h._default.apply(v.pop(), n) || !X(i) || u && p(i[y]) && !g(i) && ((a = i[u]) && (i[u] = null), w.event.triggered = y, t.isPropagationStopped() && d.addEventListener(y, wt), i[y](), t.isPropagationStopped() && d.removeEventListener(y, wt), w.event.triggered = void 0, a && (i[u] = a)), t.result;
      }
    },
    simulate: function (e, t, n) {
      var i = w.extend(new w.Event(), n, {
        type: e,
        isSimulated: !0
      });
      w.event.trigger(i, null, t);
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
  }), d.focusin || w.each({
    focus: "focusin",
    blur: "focusout"
  }, function (e, t) {
    var n = function (e) {
      w.event.simulate(t, e.target, w.event.fix(e));
    };

    w.event.special[t] = {
      setup: function () {
        var i = this.ownerDocument || this.document || this,
            r = Y.access(i, t);
        r || i.addEventListener(e, n, !0), Y.access(i, t, (r || 0) + 1);
      },
      teardown: function () {
        var i = this.ownerDocument || this.document || this,
            r = Y.access(i, t) - 1;
        r ? Y.access(i, t, r) : (i.removeEventListener(e, n, !0), Y.remove(i, t));
      }
    };
  });
  var xt = e.location,
      Tt = {
    guid: Date.now()
  },
      Et = /\?/;

  w.parseXML = function (t) {
    var n;
    if (!t || "string" != typeof t) return null;

    try {
      n = new e.DOMParser().parseFromString(t, "text/xml");
    } catch (i) {
      n = void 0;
    }

    return n && !n.getElementsByTagName("parsererror").length || w.error("Invalid XML: " + t), n;
  };

  var Ct = /\[\]$/,
      St = /\r?\n/g,
      kt = /^(?:submit|button|image|reset|file)$/i,
      At = /^(?:input|select|textarea|keygen)/i;

  function Dt(e, t, n, i) {
    var r;
    if (Array.isArray(t)) w.each(t, function (t, r) {
      n || Ct.test(e) ? i(e, r) : Dt(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, i);
    });else if (n || "object" !== _(t)) i(e, t);else for (r in t) Dt(e + "[" + r + "]", t[r], n, i);
  }

  w.param = function (e, t) {
    var n,
        i = [],
        r = function (e, t) {
      var n = p(t) ? t() : t;
      i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
    };

    if (null == e) return "";
    if (Array.isArray(e) || e.jquery && !w.isPlainObject(e)) w.each(e, function () {
      r(this.name, this.value);
    });else for (n in e) Dt(n, e[n], t, r);
    return i.join("&");
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
        return this.name && !w(this).is(":disabled") && At.test(this.nodeName) && !kt.test(e) && (this.checked || !de.test(e));
      }).map(function (e, t) {
        var n = w(this).val();
        return null == n ? null : Array.isArray(n) ? w.map(n, function (e) {
          return {
            name: t.name,
            value: e.replace(St, "\r\n")
          };
        }) : {
          name: t.name,
          value: n.replace(St, "\r\n")
        };
      }).get();
    }
  });
  var Nt = /%20/g,
      jt = /#.*$/,
      It = /([?&])_=[^&]*/,
      Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      Lt = /^(?:GET|HEAD)$/,
      qt = /^\/\//,
      Pt = {},
      Rt = {},
      Ht = "*/".concat("*"),
      Ft = m.createElement("a");

  function Mt(e) {
    return function (t, n) {
      "string" != typeof t && (n = t, t = "*");
      var i,
          r = 0,
          o = t.toLowerCase().match(q) || [];
      if (p(n)) for (; i = o[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n);
    };
  }

  function Bt(e, t, n, i) {
    var r = {},
        o = e === Rt;

    function s(a) {
      var l;
      return r[a] = !0, w.each(e[a] || [], function (e, a) {
        var u = a(t, n, i);
        return "string" != typeof u || o || r[u] ? o ? !(l = u) : void 0 : (t.dataTypes.unshift(u), s(u), !1);
      }), l;
    }

    return s(t.dataTypes[0]) || !r["*"] && s("*");
  }

  function Wt(e, t) {
    var n,
        i,
        r = w.ajaxSettings.flatOptions || {};

    for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);

    return i && w.extend(!0, e, i), e;
  }

  Ft.href = xt.href, w.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: xt.href,
      type: "GET",
      isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(xt.protocol),
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
      return t ? Wt(Wt(e, w.ajaxSettings), t) : Wt(w.ajaxSettings, e);
    },
    ajaxPrefilter: Mt(Pt),
    ajaxTransport: Mt(Rt),
    ajax: function (t, n) {
      "object" == typeof t && (n = t, t = void 0);

      var i,
          r,
          o,
          s,
          a,
          l,
          u,
          c,
          f,
          h,
          d = w.ajaxSetup({}, n = n || {}),
          p = d.context || d,
          g = d.context && (p.nodeType || p.jquery) ? w(p) : w.event,
          v = w.Deferred(),
          y = w.Callbacks("once memory"),
          _ = d.statusCode || {},
          b = {},
          x = {},
          T = "canceled",
          E = {
        readyState: 0,
        getResponseHeader: function (e) {
          var t;

          if (u) {
            if (!s) for (s = {}; t = Ot.exec(o);) s[t[1].toLowerCase() + " "] = (s[t[1].toLowerCase() + " "] || []).concat(t[2]);
            t = s[e.toLowerCase() + " "];
          }

          return null == t ? null : t.join(", ");
        },
        getAllResponseHeaders: function () {
          return u ? o : null;
        },
        setRequestHeader: function (e, t) {
          return null == u && (e = x[e.toLowerCase()] = x[e.toLowerCase()] || e, b[e] = t), this;
        },
        overrideMimeType: function (e) {
          return null == u && (d.mimeType = e), this;
        },
        statusCode: function (e) {
          var t;
          if (e) if (u) E.always(e[E.status]);else for (t in e) _[t] = [_[t], e[t]];
          return this;
        },
        abort: function (e) {
          var t = e || T;
          return i && i.abort(t), C(0, t), this;
        }
      };

      if (v.promise(E), d.url = ((t || d.url || xt.href) + "").replace(qt, xt.protocol + "//"), d.type = n.method || n.type || d.method || d.type, d.dataTypes = (d.dataType || "*").toLowerCase().match(q) || [""], null == d.crossDomain) {
        l = m.createElement("a");

        try {
          l.href = d.url, l.href = l.href, d.crossDomain = Ft.protocol + "//" + Ft.host != l.protocol + "//" + l.host;
        } catch (S) {
          d.crossDomain = !0;
        }
      }

      if (d.data && d.processData && "string" != typeof d.data && (d.data = w.param(d.data, d.traditional)), Bt(Pt, d, n, E), u) return E;

      for (f in (c = w.event && d.global) && 0 == w.active++ && w.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !Lt.test(d.type), r = d.url.replace(jt, ""), d.hasContent ? d.data && d.processData && 0 === (d.contentType || "").indexOf("application/x-www-form-urlencoded") && (d.data = d.data.replace(Nt, "+")) : (h = d.url.slice(r.length), d.data && (d.processData || "string" == typeof d.data) && (r += (Et.test(r) ? "&" : "?") + d.data, delete d.data), !1 === d.cache && (r = r.replace(It, "$1"), h = (Et.test(r) ? "&" : "?") + "_=" + Tt.guid++ + h), d.url = r + h), d.ifModified && (w.lastModified[r] && E.setRequestHeader("If-Modified-Since", w.lastModified[r]), w.etag[r] && E.setRequestHeader("If-None-Match", w.etag[r])), (d.data && d.hasContent && !1 !== d.contentType || n.contentType) && E.setRequestHeader("Content-Type", d.contentType), E.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Ht + "; q=0.01" : "") : d.accepts["*"]), d.headers) E.setRequestHeader(f, d.headers[f]);

      if (d.beforeSend && (!1 === d.beforeSend.call(p, E, d) || u)) return E.abort();

      if (T = "abort", y.add(d.complete), E.done(d.success), E.fail(d.error), i = Bt(Rt, d, n, E)) {
        if (E.readyState = 1, c && g.trigger("ajaxSend", [E, d]), u) return E;
        d.async && d.timeout > 0 && (a = e.setTimeout(function () {
          E.abort("timeout");
        }, d.timeout));

        try {
          u = !1, i.send(b, C);
        } catch (S) {
          if (u) throw S;
          C(-1, S);
        }
      } else C(-1, "No Transport");

      function C(t, n, s, l) {
        var f,
            h,
            m,
            b,
            x,
            T = n;
        u || (u = !0, a && e.clearTimeout(a), i = void 0, o = l || "", E.readyState = t > 0 ? 4 : 0, f = t >= 200 && t < 300 || 304 === t, s && (b = function (e, t, n) {
          for (var i, r, o, s, a = e.contents, l = e.dataTypes; "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));

          if (i) for (r in a) if (a[r] && a[r].test(i)) {
            l.unshift(r);
            break;
          }
          if (l[0] in n) o = l[0];else {
            for (r in n) {
              if (!l[0] || e.converters[r + " " + l[0]]) {
                o = r;
                break;
              }

              s || (s = r);
            }

            o = o || s;
          }
          if (o) return o !== l[0] && l.unshift(o), n[o];
        }(d, E, s)), !f && w.inArray("script", d.dataTypes) > -1 && (d.converters["text script"] = function () {}), b = function (e, t, n, i) {
          var r,
              o,
              s,
              a,
              l,
              u = {},
              c = e.dataTypes.slice();
          if (c[1]) for (s in e.converters) u[s.toLowerCase()] = e.converters[s];

          for (o = c.shift(); o;) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift()) if ("*" === o) o = l;else if ("*" !== l && l !== o) {
            if (!(s = u[l + " " + o] || u["* " + o])) for (r in u) if ((a = r.split(" "))[1] === o && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
              !0 === s ? s = u[r] : !0 !== u[r] && (o = a[0], c.unshift(a[1]));
              break;
            }
            if (!0 !== s) if (s && e.throws) t = s(t);else try {
              t = s(t);
            } catch (S) {
              return {
                state: "parsererror",
                error: s ? S : "No conversion from " + l + " to " + o
              };
            }
          }

          return {
            state: "success",
            data: t
          };
        }(d, b, E, f), f ? (d.ifModified && ((x = E.getResponseHeader("Last-Modified")) && (w.lastModified[r] = x), (x = E.getResponseHeader("etag")) && (w.etag[r] = x)), 204 === t || "HEAD" === d.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = b.state, h = b.data, f = !(m = b.error))) : (m = T, !t && T || (T = "error", t < 0 && (t = 0))), E.status = t, E.statusText = (n || T) + "", f ? v.resolveWith(p, [h, T, E]) : v.rejectWith(p, [E, T, m]), E.statusCode(_), _ = void 0, c && g.trigger(f ? "ajaxSuccess" : "ajaxError", [E, d, f ? h : m]), y.fireWith(p, [E, T]), c && (g.trigger("ajaxComplete", [E, d]), --w.active || w.event.trigger("ajaxStop")));
      }

      return E;
    },
    getJSON: function (e, t, n) {
      return w.get(e, t, n, "json");
    },
    getScript: function (e, t) {
      return w.get(e, void 0, t, "script");
    }
  }), w.each(["get", "post"], function (e, t) {
    w[t] = function (e, n, i, r) {
      return p(n) && (r = r || i, i = n, n = void 0), w.ajax(w.extend({
        url: e,
        type: t,
        dataType: r,
        data: n,
        success: i
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
  var Qt = {
    0: 200,
    1223: 204
  },
      Ut = w.ajaxSettings.xhr();
  d.cors = !!Ut && "withCredentials" in Ut, d.ajax = Ut = !!Ut, w.ajaxTransport(function (t) {
    var n, i;
    if (d.cors || Ut && !t.crossDomain) return {
      send: function (r, o) {
        var s,
            a = t.xhr();
        if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (s in t.xhrFields) a[s] = t.xhrFields[s];

        for (s in t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"), r) a.setRequestHeader(s, r[s]);

        n = function (e) {
          return function () {
            n && (n = i = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(Qt[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
              binary: a.response
            } : {
              text: a.responseText
            }, a.getAllResponseHeaders()));
          };
        }, a.onload = n(), i = a.onerror = a.ontimeout = n("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function () {
          4 === a.readyState && e.setTimeout(function () {
            n && i();
          });
        }, n = n("abort");

        try {
          a.send(t.hasContent && t.data || null);
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
      send: function (i, r) {
        t = w("<script>").attr(e.scriptAttrs || {}).prop({
          charset: e.scriptCharset,
          src: e.url
        }).on("load error", n = function (e) {
          t.remove(), n = null, e && r("error" === e.type ? 404 : 200, e.type);
        }), m.head.appendChild(t[0]);
      },
      abort: function () {
        n && n();
      }
    };
  });
  var $t,
      zt = [],
      Xt = /(=)\?(?=&|$)|\?\?/;
  w.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = zt.pop() || w.expando + "_" + Tt.guid++;
      return this[e] = !0, e;
    }
  }), w.ajaxPrefilter("json jsonp", function (t, n, i) {
    var r,
        o,
        s,
        a = !1 !== t.jsonp && (Xt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Xt.test(t.data) && "data");
    if (a || "jsonp" === t.dataTypes[0]) return r = t.jsonpCallback = p(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Xt, "$1" + r) : !1 !== t.jsonp && (t.url += (Et.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function () {
      return s || w.error(r + " was not called"), s[0];
    }, t.dataTypes[0] = "json", o = e[r], e[r] = function () {
      s = arguments;
    }, i.always(function () {
      void 0 === o ? w(e).removeProp(r) : e[r] = o, t[r] && (t.jsonpCallback = n.jsonpCallback, zt.push(r)), s && p(o) && o(s[0]), s = o = void 0;
    }), "script";
  }), d.createHTMLDocument = (($t = m.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === $t.childNodes.length), w.parseHTML = function (e, t, n) {
    return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (d.createHTMLDocument ? ((i = (t = m.implementation.createHTMLDocument("")).createElement("base")).href = m.location.href, t.head.appendChild(i)) : t = m), o = !n && [], (r = A.exec(e)) ? [t.createElement(r[1])] : (r = be([e], t, o), o && o.length && w(o).remove(), w.merge([], r.childNodes)));
    var i, r, o;
  }, w.fn.load = function (e, t, n) {
    var i,
        r,
        o,
        s = this,
        a = e.indexOf(" ");
    return a > -1 && (i = mt(e.slice(a)), e = e.slice(0, a)), p(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), s.length > 0 && w.ajax({
      url: e,
      type: r || "GET",
      dataType: "html",
      data: t
    }).done(function (e) {
      o = arguments, s.html(i ? w("<div>").append(w.parseHTML(e)).find(i) : e);
    }).always(n && function (e, t) {
      s.each(function () {
        n.apply(this, o || [e.responseText, t, e]);
      });
    }), this;
  }, w.expr.pseudos.animated = function (e) {
    return w.grep(w.timers, function (t) {
      return e === t.elem;
    }).length;
  }, w.offset = {
    setOffset: function (e, t, n) {
      var i,
          r,
          o,
          s,
          a,
          l,
          u = w.css(e, "position"),
          c = w(e),
          f = {};
      "static" === u && (e.style.position = "relative"), a = c.offset(), o = w.css(e, "top"), l = w.css(e, "left"), ("absolute" === u || "fixed" === u) && (o + l).indexOf("auto") > -1 ? (s = (i = c.position()).top, r = i.left) : (s = parseFloat(o) || 0, r = parseFloat(l) || 0), p(t) && (t = t.call(e, n, w.extend({}, a))), null != t.top && (f.top = t.top - a.top + s), null != t.left && (f.left = t.left - a.left + r), "using" in t ? t.using.call(e, f) : ("number" == typeof f.top && (f.top += "px"), "number" == typeof f.left && (f.left += "px"), c.css(f));
    }
  }, w.fn.extend({
    offset: function (e) {
      if (arguments.length) return void 0 === e ? this : this.each(function (t) {
        w.offset.setOffset(this, e, t);
      });
      var t,
          n,
          i = this[0];
      return i ? i.getClientRects().length ? {
        top: (t = i.getBoundingClientRect()).top + (n = i.ownerDocument.defaultView).pageYOffset,
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
            i = this[0],
            r = {
          top: 0,
          left: 0
        };
        if ("fixed" === w.css(i, "position")) t = i.getBoundingClientRect();else {
          for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === w.css(e, "position");) e = e.parentNode;

          e && e !== i && 1 === e.nodeType && ((r = w(e).offset()).top += w.css(e, "borderTopWidth", !0), r.left += w.css(e, "borderLeftWidth", !0));
        }
        return {
          top: t.top - r.top - w.css(i, "marginTop", !0),
          left: t.left - r.left - w.css(i, "marginLeft", !0)
        };
      }
    },
    offsetParent: function () {
      return this.map(function () {
        for (var e = this.offsetParent; e && "static" === w.css(e, "position");) e = e.offsetParent;

        return e || ie;
      });
    }
  }), w.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function (e, t) {
    var n = "pageYOffset" === t;

    w.fn[e] = function (i) {
      return W(this, function (e, i, r) {
        var o;
        if (g(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === r) return o ? o[t] : e[i];
        o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : e[i] = r;
      }, e, i, arguments.length);
    };
  }), w.each(["top", "left"], function (e, t) {
    w.cssHooks[t] = Ue(d.pixelPosition, function (e, n) {
      if (n) return n = Qe(e, t), Fe.test(n) ? w(e).position()[t] + "px" : n;
    });
  }), w.each({
    Height: "height",
    Width: "width"
  }, function (e, t) {
    w.each({
      padding: "inner" + e,
      content: t,
      "": "outer" + e
    }, function (n, i) {
      w.fn[i] = function (r, o) {
        var s = arguments.length && (n || "boolean" != typeof r),
            a = n || (!0 === r || !0 === o ? "margin" : "border");
        return W(this, function (t, n, r) {
          var o;
          return g(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === r ? w.css(t, n, a) : w.style(t, n, r, a);
        }, t, s ? r : void 0, s);
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
    delegate: function (e, t, n, i) {
      return this.on(t, e, n, i);
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
    var n, i, o;
    if ("string" == typeof t && (n = e[t], t = e, e = n), p(e)) return i = r.call(arguments, 2), (o = function () {
      return e.apply(t || this, i.concat(r.call(arguments)));
    }).guid = e.guid = e.guid || w.guid++, o;
  }, w.holdReady = function (e) {
    e ? w.readyWait++ : w.ready(!0);
  }, w.isArray = Array.isArray, w.parseJSON = JSON.parse, w.nodeName = k, w.isFunction = p, w.isWindow = g, w.camelCase = z, w.type = _, w.now = Date.now, w.isNumeric = function (e) {
    var t = w.type(e);
    return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
  }, w.trim = function (e) {
    return null == e ? "" : (e + "").replace(Vt, "");
  }, "function" == typeof define && define.amd && define("jquery", [], function () {
    return w;
  });
  var Yt = e.jQuery,
      Kt = e.$;
  return w.noConflict = function (t) {
    return e.$ === w && (e.$ = Kt), t && e.jQuery === w && (e.jQuery = Yt), w;
  }, void 0 === t && (e.jQuery = e.$ = w), w;
}), function (e, t) {
  "object" == typeof exports && "undefined" != typeof module ? t(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], t) : t((e = "undefined" != typeof globalThis ? globalThis : e || self).bootstrap = {}, e.jQuery, e.Popper);
}(void 0, function (e, t, n) {
  "use strict";

  function i(e, t) {
    for (var n = 0; n < t.length; n++) {
      var i = t[n];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
    }
  }

  function r(e, t, n) {
    return t && i(e.prototype, t), n && i(e, n), e;
  }

  function o() {
    return (o = Object.assign || function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];

        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
      }

      return e;
    }).apply(this, arguments);
  }

  t = t && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t, n = n && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
  var s = "transitionend",
      a = {
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
      } catch (i) {
        return null;
      }
    },
    getTransitionDurationFromElement: function (e) {
      if (!e) return 0;
      var n = t(e).css("transition-duration"),
          i = t(e).css("transition-delay"),
          r = parseFloat(n),
          o = parseFloat(i);
      return r || o ? (n = n.split(",")[0], i = i.split(",")[0], 1e3 * (parseFloat(n) + parseFloat(i))) : 0;
    },
    reflow: function (e) {
      return e.offsetHeight;
    },
    triggerTransitionEnd: function (e) {
      t(e).trigger(s);
    },
    supportsTransitionEnd: function () {
      return Boolean(s);
    },
    isElement: function (e) {
      return (e[0] || e).nodeType;
    },
    typeCheckConfig: function (e, t, n) {
      for (var i in n) if (Object.prototype.hasOwnProperty.call(n, i)) {
        var r = n[i],
            o = t[i],
            s = o && a.isElement(o) ? "element" : null == (l = o) ? "" + l : {}.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase();
        if (!new RegExp(r).test(s)) throw new Error(e.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + r + '".');
      }

      var l;
    },
    findShadowRoot: function (e) {
      if (!document.documentElement.attachShadow) return null;

      if ("function" == typeof e.getRootNode) {
        var t = e.getRootNode();
        return t instanceof ShadowRoot ? t : null;
      }

      return e instanceof ShadowRoot ? e : e.parentNode ? a.findShadowRoot(e.parentNode) : null;
    },
    jQueryDetection: function () {
      if (void 0 === t) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
      var e = t.fn.jquery.split(" ")[0].split(".");
      if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || e[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
    }
  };
  a.jQueryDetection(), t.fn.emulateTransitionEnd = function (e) {
    var n = this,
        i = !1;
    return t(this).one(a.TRANSITION_END, function () {
      i = !0;
    }), setTimeout(function () {
      i || a.triggerTransitionEnd(n);
    }, e), this;
  }, t.event.special[a.TRANSITION_END] = {
    bindType: s,
    delegateType: s,
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
      var n = a.getSelectorFromElement(e),
          i = !1;
      return n && (i = document.querySelector(n)), i || (i = t(e).closest(".alert")[0]), i;
    }, n._triggerCloseEvent = function (e) {
      var n = t.Event("close.bs.alert");
      return t(e).trigger(n), n;
    }, n._removeElement = function (e) {
      var n = this;

      if (t(e).removeClass("show"), t(e).hasClass("fade")) {
        var i = a.getTransitionDurationFromElement(e);
        t(e).one(a.TRANSITION_END, function (t) {
          return n._destroyElement(e, t);
        }).emulateTransitionEnd(i);
      } else this._destroyElement(e);
    }, n._destroyElement = function (e) {
      t(e).detach().trigger("closed.bs.alert").remove();
    }, e._jQueryInterface = function (n) {
      return this.each(function () {
        var i = t(this),
            r = i.data(l);
        r || (r = new e(this), i.data(l, r)), "close" === n && r[n](this);
      });
    }, e._handleDismiss = function (e) {
      return function (t) {
        t && t.preventDefault(), e.close(this);
      };
    }, r(e, null, [{
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
      h = t.fn.button,
      d = "active",
      p = '[data-toggle^="button"]',
      g = 'input:not([type="hidden"])',
      m = ".btn",
      v = function () {
    function e(e) {
      this._element = e;
    }

    var n = e.prototype;
    return n.toggle = function () {
      var e = !0,
          n = !0,
          i = t(this._element).closest('[data-toggle="buttons"]')[0];

      if (i) {
        var r = this._element.querySelector(g);

        if (r) {
          if ("radio" === r.type) if (r.checked && this._element.classList.contains(d)) e = !1;else {
            var o = i.querySelector(".active");
            o && t(o).removeClass(d);
          }
          e && ("checkbox" !== r.type && "radio" !== r.type || (r.checked = !this._element.classList.contains(d)), t(r).trigger("change")), r.focus(), n = !1;
        }
      }

      this._element.hasAttribute("disabled") || this._element.classList.contains("disabled") || (n && this._element.setAttribute("aria-pressed", !this._element.classList.contains(d)), e && t(this._element).toggleClass(d));
    }, n.dispose = function () {
      t.removeData(this._element, f), this._element = null;
    }, e._jQueryInterface = function (n) {
      return this.each(function () {
        var i = t(this).data(f);
        i || (i = new e(this), t(this).data(f, i)), "toggle" === n && i[n]();
      });
    }, r(e, null, [{
      key: "VERSION",
      get: function () {
        return "4.5.2";
      }
    }]), e;
  }();

  t(document).on("click.bs.button.data-api", p, function (e) {
    var n = e.target,
        i = n;
    if (t(n).hasClass("btn") || (n = t(n).closest(m)[0]), !n || n.hasAttribute("disabled") || n.classList.contains("disabled")) e.preventDefault();else {
      var r = n.querySelector(g);
      if (r && (r.hasAttribute("disabled") || r.classList.contains("disabled"))) return void e.preventDefault();
      ("LABEL" !== i.tagName || r && "checkbox" !== r.type) && v._jQueryInterface.call(t(n), "toggle");
    }
  }).on("focus.bs.button.data-api blur.bs.button.data-api", p, function (e) {
    var n = t(e.target).closest(m)[0];
    t(n).toggleClass("focus", /^focus(in)?$/.test(e.type));
  }), t(window).on("load.bs.button.data-api", function () {
    for (var e = [].slice.call(document.querySelectorAll('[data-toggle="buttons"] .btn')), t = 0, n = e.length; t < n; t++) {
      var i = e[t],
          r = i.querySelector(g);
      r.checked || r.hasAttribute("checked") ? i.classList.add(d) : i.classList.remove(d);
    }

    for (var o = 0, s = (e = [].slice.call(document.querySelectorAll('[data-toggle="button"]'))).length; o < s; o++) {
      var a = e[o];
      "true" === a.getAttribute("aria-pressed") ? a.classList.add(d) : a.classList.remove(d);
    }
  }), t.fn.button = v._jQueryInterface, t.fn.button.Constructor = v, t.fn.button.noConflict = function () {
    return t.fn.button = h, v._jQueryInterface;
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
      x = {
    interval: "(number|boolean)",
    keyboard: "boolean",
    slide: "(boolean|string)",
    pause: "(string|boolean)",
    wrap: "boolean",
    touch: "boolean"
  },
      T = "next",
      E = "prev",
      C = "slid.bs.carousel",
      S = "active",
      k = ".active.carousel-item",
      A = {
    TOUCH: "touch",
    PEN: "pen"
  },
      D = function () {
    function e(e, t) {
      this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(t), this._element = e, this._indicatorsElement = this._element.querySelector(".carousel-indicators"), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners();
    }

    var n = e.prototype;
    return n.next = function () {
      this._isSliding || this._slide(T);
    }, n.nextWhenVisible = function () {
      !document.hidden && t(this._element).is(":visible") && "hidden" !== t(this._element).css("visibility") && this.next();
    }, n.prev = function () {
      this._isSliding || this._slide(E);
    }, n.pause = function (e) {
      e || (this._isPaused = !0), this._element.querySelector(".carousel-item-next, .carousel-item-prev") && (a.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null;
    }, n.cycle = function (e) {
      e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
    }, n.to = function (e) {
      var n = this;
      this._activeElement = this._element.querySelector(k);

      var i = this._getItemIndex(this._activeElement);

      if (!(e > this._items.length - 1 || e < 0)) if (this._isSliding) t(this._element).one(C, function () {
        return n.to(e);
      });else {
        if (i === e) return this.pause(), void this.cycle();

        this._slide(e > i ? T : E, this._items[e]);
      }
    }, n.dispose = function () {
      t(this._element).off(".bs.carousel"), t.removeData(this._element, _), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null;
    }, n._getConfig = function (e) {
      return e = o({}, w, e), a.typeCheckConfig(y, e, x), e;
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
          e._pointerEvent && A[t.originalEvent.pointerType.toUpperCase()] ? e.touchStartX = t.originalEvent.clientX : e._pointerEvent || (e.touchStartX = t.originalEvent.touches[0].clientX);
        },
            i = function (t) {
          e._pointerEvent && A[t.originalEvent.pointerType.toUpperCase()] && (e.touchDeltaX = t.originalEvent.clientX - e.touchStartX), e._handleSwipe(), "hover" === e._config.pause && (e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout(function (t) {
            return e.cycle(t);
          }, 500 + e._config.interval));
        };

        t(this._element.querySelectorAll(".carousel-item img")).on("dragstart.bs.carousel", function (e) {
          return e.preventDefault();
        }), this._pointerEvent ? (t(this._element).on("pointerdown.bs.carousel", function (e) {
          return n(e);
        }), t(this._element).on("pointerup.bs.carousel", function (e) {
          return i(e);
        }), this._element.classList.add("pointer-event")) : (t(this._element).on("touchstart.bs.carousel", function (e) {
          return n(e);
        }), t(this._element).on("touchmove.bs.carousel", function (t) {
          return function (t) {
            e.touchDeltaX = t.originalEvent.touches && t.originalEvent.touches.length > 1 ? 0 : t.originalEvent.touches[0].clientX - e.touchStartX;
          }(t);
        }), t(this._element).on("touchend.bs.carousel", function (e) {
          return i(e);
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
      var n = e === T,
          i = e === E,
          r = this._getItemIndex(t);

      if ((i && 0 === r || n && r === this._items.length - 1) && !this._config.wrap) return t;
      var o = (r + (e === E ? -1 : 1)) % this._items.length;
      return -1 === o ? this._items[this._items.length - 1] : this._items[o];
    }, n._triggerSlideEvent = function (e, n) {
      var i = this._getItemIndex(e),
          r = this._getItemIndex(this._element.querySelector(k)),
          o = t.Event("slide.bs.carousel", {
        relatedTarget: e,
        direction: n,
        from: r,
        to: i
      });

      return t(this._element).trigger(o), o;
    }, n._setActiveIndicatorElement = function (e) {
      if (this._indicatorsElement) {
        var n = [].slice.call(this._indicatorsElement.querySelectorAll(".active"));
        t(n).removeClass(S);

        var i = this._indicatorsElement.children[this._getItemIndex(e)];

        i && t(i).addClass(S);
      }
    }, n._slide = function (e, n) {
      var i,
          r,
          o,
          s = this,
          l = this._element.querySelector(k),
          u = this._getItemIndex(l),
          c = n || l && this._getItemByDirection(e, l),
          f = this._getItemIndex(c),
          h = Boolean(this._interval);

      if (e === T ? (i = "carousel-item-left", r = "carousel-item-next", o = "left") : (i = "carousel-item-right", r = "carousel-item-prev", o = "right"), c && t(c).hasClass(S)) this._isSliding = !1;else if (!this._triggerSlideEvent(c, o).isDefaultPrevented() && l && c) {
        this._isSliding = !0, h && this.pause(), this._setActiveIndicatorElement(c);
        var d = t.Event(C, {
          relatedTarget: c,
          direction: o,
          from: u,
          to: f
        });

        if (t(this._element).hasClass("slide")) {
          t(c).addClass(r), a.reflow(c), t(l).addClass(i), t(c).addClass(i);
          var p = parseInt(c.getAttribute("data-interval"), 10);
          p ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = p) : this._config.interval = this._config.defaultInterval || this._config.interval;
          var g = a.getTransitionDurationFromElement(l);
          t(l).one(a.TRANSITION_END, function () {
            t(c).removeClass(i + " " + r).addClass(S), t(l).removeClass("active " + r + " " + i), s._isSliding = !1, setTimeout(function () {
              return t(s._element).trigger(d);
            }, 0);
          }).emulateTransitionEnd(g);
        } else t(l).removeClass(S), t(c).addClass(S), this._isSliding = !1, t(this._element).trigger(d);

        h && this.cycle();
      }
    }, e._jQueryInterface = function (n) {
      return this.each(function () {
        var i = t(this).data(_),
            r = o({}, w, t(this).data());
        "object" == typeof n && (r = o({}, r, n));
        var s = "string" == typeof n ? n : r.slide;
        if (i || (i = new e(this, r), t(this).data(_, i)), "number" == typeof n) i.to(n);else if ("string" == typeof s) {
          if (void 0 === i[s]) throw new TypeError('No method named "' + s + '"');
          i[s]();
        } else r.interval && r.ride && (i.pause(), i.cycle());
      });
    }, e._dataApiClickHandler = function (n) {
      var i = a.getSelectorFromElement(this);

      if (i) {
        var r = t(i)[0];

        if (r && t(r).hasClass("carousel")) {
          var s = o({}, t(r).data(), t(this).data()),
              l = this.getAttribute("data-slide-to");
          l && (s.interval = !1), e._jQueryInterface.call(t(r), s), l && t(r).data(_).to(l), n.preventDefault();
        }
      }
    }, r(e, null, [{
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

  t(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", D._dataApiClickHandler), t(window).on("load.bs.carousel.data-api", function () {
    for (var e = [].slice.call(document.querySelectorAll('[data-ride="carousel"]')), n = 0, i = e.length; n < i; n++) {
      var r = t(e[n]);

      D._jQueryInterface.call(r, r.data());
    }
  }), t.fn[y] = D._jQueryInterface, t.fn[y].Constructor = D, t.fn[y].noConflict = function () {
    return t.fn[y] = b, D._jQueryInterface;
  };

  var N = "collapse",
      j = "bs.collapse",
      I = t.fn[N],
      O = {
    toggle: !0,
    parent: ""
  },
      L = {
    toggle: "boolean",
    parent: "(string|element)"
  },
      q = "show",
      P = "collapse",
      R = "collapsing",
      H = "collapsed",
      F = "width",
      M = '[data-toggle="collapse"]',
      B = function () {
    function e(e, t) {
      this._isTransitioning = !1, this._element = e, this._config = this._getConfig(t), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));

      for (var n = [].slice.call(document.querySelectorAll(M)), i = 0, r = n.length; i < r; i++) {
        var o = n[i],
            s = a.getSelectorFromElement(o),
            l = [].slice.call(document.querySelectorAll(s)).filter(function (t) {
          return t === e;
        });
        null !== s && l.length > 0 && (this._selector = s, this._triggerArray.push(o));
      }

      this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle();
    }

    var n = e.prototype;
    return n.toggle = function () {
      t(this._element).hasClass(q) ? this.hide() : this.show();
    }, n.show = function () {
      var n,
          i,
          r = this;

      if (!(this._isTransitioning || t(this._element).hasClass(q) || (this._parent && 0 === (n = [].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter(function (e) {
        return "string" == typeof r._config.parent ? e.getAttribute("data-parent") === r._config.parent : e.classList.contains(P);
      })).length && (n = null), n && (i = t(n).not(this._selector).data(j)) && i._isTransitioning))) {
        var o = t.Event("show.bs.collapse");

        if (t(this._element).trigger(o), !o.isDefaultPrevented()) {
          n && (e._jQueryInterface.call(t(n).not(this._selector), "hide"), i || t(n).data(j, null));

          var s = this._getDimension();

          t(this._element).removeClass(P).addClass(R), this._element.style[s] = 0, this._triggerArray.length && t(this._triggerArray).removeClass(H).attr("aria-expanded", !0), this.setTransitioning(!0);
          var l = "scroll" + (s[0].toUpperCase() + s.slice(1)),
              u = a.getTransitionDurationFromElement(this._element);
          t(this._element).one(a.TRANSITION_END, function () {
            t(r._element).removeClass(R).addClass("collapse show"), r._element.style[s] = "", r.setTransitioning(!1), t(r._element).trigger("shown.bs.collapse");
          }).emulateTransitionEnd(u), this._element.style[s] = this._element[l] + "px";
        }
      }
    }, n.hide = function () {
      var e = this;

      if (!this._isTransitioning && t(this._element).hasClass(q)) {
        var n = t.Event("hide.bs.collapse");

        if (t(this._element).trigger(n), !n.isDefaultPrevented()) {
          var i = this._getDimension();

          this._element.style[i] = this._element.getBoundingClientRect()[i] + "px", a.reflow(this._element), t(this._element).addClass(R).removeClass("collapse show");
          var r = this._triggerArray.length;
          if (r > 0) for (var o = 0; o < r; o++) {
            var s = this._triggerArray[o],
                l = a.getSelectorFromElement(s);
            null !== l && (t([].slice.call(document.querySelectorAll(l))).hasClass(q) || t(s).addClass(H).attr("aria-expanded", !1));
          }
          this.setTransitioning(!0), this._element.style[i] = "";
          var u = a.getTransitionDurationFromElement(this._element);
          t(this._element).one(a.TRANSITION_END, function () {
            e.setTransitioning(!1), t(e._element).removeClass(R).addClass(P).trigger("hidden.bs.collapse");
          }).emulateTransitionEnd(u);
        }
      }
    }, n.setTransitioning = function (e) {
      this._isTransitioning = e;
    }, n.dispose = function () {
      t.removeData(this._element, j), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null;
    }, n._getConfig = function (e) {
      return (e = o({}, O, e)).toggle = Boolean(e.toggle), a.typeCheckConfig(N, e, L), e;
    }, n._getDimension = function () {
      return t(this._element).hasClass(F) ? F : "height";
    }, n._getParent = function () {
      var n,
          i = this;
      a.isElement(this._config.parent) ? (n = this._config.parent, void 0 !== this._config.parent.jquery && (n = this._config.parent[0])) : n = document.querySelector(this._config.parent);
      var r = [].slice.call(n.querySelectorAll('[data-toggle="collapse"][data-parent="' + this._config.parent + '"]'));
      return t(r).each(function (t, n) {
        i._addAriaAndCollapsedClass(e._getTargetFromElement(n), [n]);
      }), n;
    }, n._addAriaAndCollapsedClass = function (e, n) {
      var i = t(e).hasClass(q);
      n.length && t(n).toggleClass(H, !i).attr("aria-expanded", i);
    }, e._getTargetFromElement = function (e) {
      var t = a.getSelectorFromElement(e);
      return t ? document.querySelector(t) : null;
    }, e._jQueryInterface = function (n) {
      return this.each(function () {
        var i = t(this),
            r = i.data(j),
            s = o({}, O, i.data(), "object" == typeof n && n ? n : {});

        if (!r && s.toggle && "string" == typeof n && /show|hide/.test(n) && (s.toggle = !1), r || (r = new e(this, s), i.data(j, r)), "string" == typeof n) {
          if (void 0 === r[n]) throw new TypeError('No method named "' + n + '"');
          r[n]();
        }
      });
    }, r(e, null, [{
      key: "VERSION",
      get: function () {
        return "4.5.2";
      }
    }, {
      key: "Default",
      get: function () {
        return O;
      }
    }]), e;
  }();

  t(document).on("click.bs.collapse.data-api", M, function (e) {
    "A" === e.currentTarget.tagName && e.preventDefault();
    var n = t(this),
        i = a.getSelectorFromElement(this),
        r = [].slice.call(document.querySelectorAll(i));
    t(r).each(function () {
      var e = t(this),
          i = e.data(j) ? "toggle" : n.data();

      B._jQueryInterface.call(e, i);
    });
  }), t.fn[N] = B._jQueryInterface, t.fn[N].Constructor = B, t.fn[N].noConflict = function () {
    return t.fn[N] = I, B._jQueryInterface;
  };

  var W = "dropdown",
      Q = "bs.dropdown",
      U = t.fn[W],
      $ = new RegExp("38|40|27"),
      z = "hide.bs.dropdown",
      X = "hidden.bs.dropdown",
      V = "click.bs.dropdown.data-api",
      Y = "keydown.bs.dropdown.data-api",
      K = "disabled",
      G = "show",
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
      ie = function () {
    function e(e, t) {
      this._element = e, this._popper = null, this._config = this._getConfig(t), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners();
    }

    var i = e.prototype;
    return i.toggle = function () {
      if (!this._element.disabled && !t(this._element).hasClass(K)) {
        var n = t(this._menu).hasClass(G);
        e._clearMenus(), n || this.show(!0);
      }
    }, i.show = function (i) {
      if (void 0 === i && (i = !1), !(this._element.disabled || t(this._element).hasClass(K) || t(this._menu).hasClass(G))) {
        var r = {
          relatedTarget: this._element
        },
            o = t.Event("show.bs.dropdown", r),
            s = e._getParentFromElement(this._element);

        if (t(s).trigger(o), !o.isDefaultPrevented()) {
          if (!this._inNavbar && i) {
            if (void 0 === n) throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
            var l = this._element;
            "parent" === this._config.reference ? l = s : a.isElement(this._config.reference) && (l = this._config.reference, void 0 !== this._config.reference.jquery && (l = this._config.reference[0])), "scrollParent" !== this._config.boundary && t(s).addClass("position-static"), this._popper = new n(l, this._menu, this._getPopperConfig());
          }

          "ontouchstart" in document.documentElement && 0 === t(s).closest(".navbar-nav").length && t(document.body).children().on("mouseover", null, t.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), t(this._menu).toggleClass(G), t(s).toggleClass(G).trigger(t.Event("shown.bs.dropdown", r));
        }
      }
    }, i.hide = function () {
      if (!this._element.disabled && !t(this._element).hasClass(K) && t(this._menu).hasClass(G)) {
        var n = {
          relatedTarget: this._element
        },
            i = t.Event(z, n),
            r = e._getParentFromElement(this._element);

        t(r).trigger(i), i.isDefaultPrevented() || (this._popper && this._popper.destroy(), t(this._menu).toggleClass(G), t(r).toggleClass(G).trigger(t.Event(X, n)));
      }
    }, i.dispose = function () {
      t.removeData(this._element, Q), t(this._element).off(".bs.dropdown"), this._element = null, this._menu = null, null !== this._popper && (this._popper.destroy(), this._popper = null);
    }, i.update = function () {
      this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate();
    }, i._addEventListeners = function () {
      var e = this;
      t(this._element).on("click.bs.dropdown", function (t) {
        t.preventDefault(), t.stopPropagation(), e.toggle();
      });
    }, i._getConfig = function (e) {
      return e = o({}, this.constructor.Default, t(this._element).data(), e), a.typeCheckConfig(W, e, this.constructor.DefaultType), e;
    }, i._getMenuElement = function () {
      if (!this._menu) {
        var t = e._getParentFromElement(this._element);

        t && (this._menu = t.querySelector(ee));
      }

      return this._menu;
    }, i._getPlacement = function () {
      var e = t(this._element.parentNode),
          n = "bottom-start";
      return e.hasClass("dropup") ? n = t(this._menu).hasClass(J) ? "top-end" : "top-start" : e.hasClass("dropright") ? n = "right-start" : e.hasClass("dropleft") ? n = "left-start" : t(this._menu).hasClass(J) && (n = "bottom-end"), n;
    }, i._detectNavbar = function () {
      return t(this._element).closest(".navbar").length > 0;
    }, i._getOffset = function () {
      var e = this,
          t = {};
      return "function" == typeof this._config.offset ? t.fn = function (t) {
        return t.offsets = o({}, t.offsets, e._config.offset(t.offsets, e._element) || {}), t;
      } : t.offset = this._config.offset, t;
    }, i._getPopperConfig = function () {
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
        var i = t(this).data(Q);

        if (i || (i = new e(this, "object" == typeof n ? n : null), t(this).data(Q, i)), "string" == typeof n) {
          if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
          i[n]();
        }
      });
    }, e._clearMenus = function (n) {
      if (!n || 3 !== n.which && ("keyup" !== n.type || 9 === n.which)) for (var i = [].slice.call(document.querySelectorAll(Z)), r = 0, o = i.length; r < o; r++) {
        var s = e._getParentFromElement(i[r]),
            a = t(i[r]).data(Q),
            l = {
          relatedTarget: i[r]
        };

        if (n && "click" === n.type && (l.clickEvent = n), a) {
          var u = a._menu;

          if (t(s).hasClass(G) && !(n && ("click" === n.type && /input|textarea/i.test(n.target.tagName) || "keyup" === n.type && 9 === n.which) && t.contains(s, n.target))) {
            var c = t.Event(z, l);
            t(s).trigger(c), c.isDefaultPrevented() || ("ontouchstart" in document.documentElement && t(document.body).children().off("mouseover", null, t.noop), i[r].setAttribute("aria-expanded", "false"), a._popper && a._popper.destroy(), t(u).removeClass(G), t(s).removeClass(G).trigger(t.Event(X, l)));
          }
        }
      }
    }, e._getParentFromElement = function (e) {
      var t,
          n = a.getSelectorFromElement(e);
      return n && (t = document.querySelector(n)), t || e.parentNode;
    }, e._dataApiKeydownHandler = function (n) {
      if (!(/input|textarea/i.test(n.target.tagName) ? 32 === n.which || 27 !== n.which && (40 !== n.which && 38 !== n.which || t(n.target).closest(ee).length) : !$.test(n.which)) && !this.disabled && !t(this).hasClass(K)) {
        var i = e._getParentFromElement(this),
            r = t(i).hasClass(G);

        if (r || 27 !== n.which) {
          if (n.preventDefault(), n.stopPropagation(), !r || r && (27 === n.which || 32 === n.which)) return 27 === n.which && t(i.querySelector(Z)).trigger("focus"), void t(this).trigger("click");
          var o = [].slice.call(i.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)")).filter(function (e) {
            return t(e).is(":visible");
          });

          if (0 !== o.length) {
            var s = o.indexOf(n.target);
            38 === n.which && s > 0 && s--, 40 === n.which && s < o.length - 1 && s++, s < 0 && (s = 0), o[s].focus();
          }
        }
      }
    }, r(e, null, [{
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

  t(document).on(Y, Z, ie._dataApiKeydownHandler).on(Y, ee, ie._dataApiKeydownHandler).on(V + " keyup.bs.dropdown.data-api", ie._clearMenus).on(V, Z, function (e) {
    e.preventDefault(), e.stopPropagation(), ie._jQueryInterface.call(t(this), "toggle");
  }).on(V, ".dropdown form", function (e) {
    e.stopPropagation();
  }), t.fn[W] = ie._jQueryInterface, t.fn[W].Constructor = ie, t.fn[W].noConflict = function () {
    return t.fn[W] = U, ie._jQueryInterface;
  };

  var re = "bs.modal",
      oe = t.fn.modal,
      se = {
    backdrop: !0,
    keyboard: !0,
    focus: !0,
    show: !0
  },
      ae = {
    backdrop: "(boolean|string)",
    keyboard: "boolean",
    focus: "boolean",
    show: "boolean"
  },
      le = "hidden.bs.modal",
      ue = "show.bs.modal",
      ce = "focusin.bs.modal",
      fe = "resize.bs.modal",
      he = "click.dismiss.bs.modal",
      de = "keydown.dismiss.bs.modal",
      pe = "mousedown.dismiss.bs.modal",
      ge = "modal-open",
      me = "fade",
      ve = "show",
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
        t(this._element).hasClass(me) && (this._isTransitioning = !0);
        var i = t.Event(ue, {
          relatedTarget: e
        });
        t(this._element).trigger(i), this._isShown || i.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), t(this._element).on(he, '[data-dismiss="modal"]', function (e) {
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
        var i = t.Event("hide.bs.modal");

        if (t(this._element).trigger(i), this._isShown && !i.isDefaultPrevented()) {
          this._isShown = !1;
          var r = t(this._element).hasClass(me);

          if (r && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), t(document).off(ce), t(this._element).removeClass(ve), t(this._element).off(he), t(this._dialog).off(pe), r) {
            var o = a.getTransitionDurationFromElement(this._element);
            t(this._element).one(a.TRANSITION_END, function (e) {
              return n._hideModal(e);
            }).emulateTransitionEnd(o);
          } else this._hideModal();
        }
      }
    }, n.dispose = function () {
      [window, this._element, this._dialog].forEach(function (e) {
        return t(e).off(".bs.modal");
      }), t(document).off(ce), t.removeData(this._element, re), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null;
    }, n.handleUpdate = function () {
      this._adjustDialog();
    }, n._getConfig = function (e) {
      return e = o({}, se, e), a.typeCheckConfig("modal", e, ae), e;
    }, n._triggerBackdropTransition = function () {
      var e = this;

      if ("static" === this._config.backdrop) {
        var n = t.Event("hidePrevented.bs.modal");
        if (t(this._element).trigger(n), n.defaultPrevented) return;
        var i = this._element.scrollHeight > document.documentElement.clientHeight;
        i || (this._element.style.overflowY = "hidden"), this._element.classList.add(ye);
        var r = a.getTransitionDurationFromElement(this._dialog);
        t(this._element).off(a.TRANSITION_END), t(this._element).one(a.TRANSITION_END, function () {
          e._element.classList.remove(ye), i || t(e._element).one(a.TRANSITION_END, function () {
            e._element.style.overflowY = "";
          }).emulateTransitionEnd(e._element, r);
        }).emulateTransitionEnd(r), this._element.focus();
      } else this.hide();
    }, n._showElement = function (e) {
      var n = this,
          i = t(this._element).hasClass(me),
          r = this._dialog ? this._dialog.querySelector(".modal-body") : null;
      this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), t(this._dialog).hasClass("modal-dialog-scrollable") && r ? r.scrollTop = 0 : this._element.scrollTop = 0, i && a.reflow(this._element), t(this._element).addClass(ve), this._config.focus && this._enforceFocus();

      var o = t.Event("shown.bs.modal", {
        relatedTarget: e
      }),
          s = function () {
        n._config.focus && n._element.focus(), n._isTransitioning = !1, t(n._element).trigger(o);
      };

      if (i) {
        var l = a.getTransitionDurationFromElement(this._dialog);
        t(this._dialog).one(a.TRANSITION_END, s).emulateTransitionEnd(l);
      } else s();
    }, n._enforceFocus = function () {
      var e = this;
      t(document).off(ce).on(ce, function (n) {
        document !== n.target && e._element !== n.target && 0 === t(e._element).has(n.target).length && e._element.focus();
      });
    }, n._setEscapeEvent = function () {
      var e = this;
      this._isShown ? t(this._element).on(de, function (t) {
        e._config.keyboard && 27 === t.which ? (t.preventDefault(), e.hide()) : e._config.keyboard || 27 !== t.which || e._triggerBackdropTransition();
      }) : this._isShown || t(this._element).off(de);
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
          i = t(this._element).hasClass(me) ? me : "";

      if (this._isShown && this._config.backdrop) {
        if (this._backdrop = document.createElement("div"), this._backdrop.className = "modal-backdrop", i && this._backdrop.classList.add(i), t(this._backdrop).appendTo(document.body), t(this._element).on(he, function (e) {
          n._ignoreBackdropClick ? n._ignoreBackdropClick = !1 : e.target === e.currentTarget && n._triggerBackdropTransition();
        }), i && a.reflow(this._backdrop), t(this._backdrop).addClass(ve), !e) return;
        if (!i) return void e();
        var r = a.getTransitionDurationFromElement(this._backdrop);
        t(this._backdrop).one(a.TRANSITION_END, e).emulateTransitionEnd(r);
      } else if (!this._isShown && this._backdrop) {
        t(this._backdrop).removeClass(ve);

        var o = function () {
          n._removeBackdrop(), e && e();
        };

        if (t(this._element).hasClass(me)) {
          var s = a.getTransitionDurationFromElement(this._backdrop);
          t(this._backdrop).one(a.TRANSITION_END, o).emulateTransitionEnd(s);
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
            i = [].slice.call(document.querySelectorAll(".sticky-top"));
        t(n).each(function (n, i) {
          var r = i.style.paddingRight,
              o = t(i).css("padding-right");
          t(i).data("padding-right", r).css("padding-right", parseFloat(o) + e._scrollbarWidth + "px");
        }), t(i).each(function (n, i) {
          var r = i.style.marginRight,
              o = t(i).css("margin-right");
          t(i).data("margin-right", r).css("margin-right", parseFloat(o) - e._scrollbarWidth + "px");
        });
        var r = document.body.style.paddingRight,
            o = t(document.body).css("padding-right");
        t(document.body).data("padding-right", r).css("padding-right", parseFloat(o) + this._scrollbarWidth + "px");
      }

      t(document.body).addClass(ge);
    }, n._resetScrollbar = function () {
      var e = [].slice.call(document.querySelectorAll(_e));
      t(e).each(function (e, n) {
        var i = t(n).data("padding-right");
        t(n).removeData("padding-right"), n.style.paddingRight = i || "";
      });
      var n = [].slice.call(document.querySelectorAll(".sticky-top"));
      t(n).each(function (e, n) {
        var i = t(n).data("margin-right");
        void 0 !== i && t(n).css("margin-right", i).removeData("margin-right");
      });
      var i = t(document.body).data("padding-right");
      t(document.body).removeData("padding-right"), document.body.style.paddingRight = i || "";
    }, n._getScrollbarWidth = function () {
      var e = document.createElement("div");
      e.className = "modal-scrollbar-measure", document.body.appendChild(e);
      var t = e.getBoundingClientRect().width - e.clientWidth;
      return document.body.removeChild(e), t;
    }, e._jQueryInterface = function (n, i) {
      return this.each(function () {
        var r = t(this).data(re),
            s = o({}, se, t(this).data(), "object" == typeof n && n ? n : {});

        if (r || (r = new e(this, s), t(this).data(re, r)), "string" == typeof n) {
          if (void 0 === r[n]) throw new TypeError('No method named "' + n + '"');
          r[n](i);
        } else s.show && r.show(i);
      });
    }, r(e, null, [{
      key: "VERSION",
      get: function () {
        return "4.5.2";
      }
    }, {
      key: "Default",
      get: function () {
        return se;
      }
    }]), e;
  }();

  t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (e) {
    var n,
        i = this,
        r = a.getSelectorFromElement(this);
    r && (n = document.querySelector(r));
    var s = t(n).data(re) ? "toggle" : o({}, t(n).data(), t(this).data());
    "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
    var l = t(n).one(ue, function (e) {
      e.isDefaultPrevented() || l.one(le, function () {
        t(i).is(":visible") && i.focus();
      });
    });

    be._jQueryInterface.call(t(n), s, this);
  }), t.fn.modal = be._jQueryInterface, t.fn.modal.Constructor = be, t.fn.modal.noConflict = function () {
    return t.fn.modal = oe, be._jQueryInterface;
  };
  var we = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
      xe = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,
      Te = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;

  function Ee(e, t, n) {
    if (0 === e.length) return e;
    if (n && "function" == typeof n) return n(e);

    for (var i = new window.DOMParser().parseFromString(e, "text/html"), r = Object.keys(t), o = [].slice.call(i.body.querySelectorAll("*")), s = function (e, n) {
      var i = o[e],
          s = i.nodeName.toLowerCase();
      if (-1 === r.indexOf(i.nodeName.toLowerCase())) return i.parentNode.removeChild(i), "continue";
      var a = [].slice.call(i.attributes),
          l = [].concat(t["*"] || [], t[s] || []);
      a.forEach(function (e) {
        (function (e, t) {
          var n = e.nodeName.toLowerCase();
          if (-1 !== t.indexOf(n)) return -1 === we.indexOf(n) || Boolean(e.nodeValue.match(xe) || e.nodeValue.match(Te));

          for (var i = t.filter(function (e) {
            return e instanceof RegExp;
          }), r = 0, o = i.length; r < o; r++) if (n.match(i[r])) return !0;

          return !1;
        })(e, l) || i.removeAttribute(e.nodeName);
      });
    }, a = 0, l = o.length; a < l; a++) s(a);

    return i.body.innerHTML;
  }

  var Ce = "tooltip",
      Se = "bs.tooltip",
      ke = t.fn.tooltip,
      Ae = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
      De = ["sanitize", "whiteList", "sanitizeFn"],
      Ne = {
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
      je = {
    AUTO: "auto",
    TOP: "top",
    RIGHT: "right",
    BOTTOM: "bottom",
    LEFT: "left"
  },
      Ie = {
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
      Oe = "show",
      Le = "out",
      qe = {
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
      Pe = "fade",
      Re = "show",
      He = "hover",
      Fe = "focus",
      Me = function () {
    function e(e, t) {
      if (void 0 === n) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
      this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = e, this.config = this._getConfig(t), this.tip = null, this._setListeners();
    }

    var i = e.prototype;
    return i.enable = function () {
      this._isEnabled = !0;
    }, i.disable = function () {
      this._isEnabled = !1;
    }, i.toggleEnabled = function () {
      this._isEnabled = !this._isEnabled;
    }, i.toggle = function (e) {
      if (this._isEnabled) if (e) {
        var n = this.constructor.DATA_KEY,
            i = t(e.currentTarget).data(n);
        i || (i = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(n, i)), i._activeTrigger.click = !i._activeTrigger.click, i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i);
      } else {
        if (t(this.getTipElement()).hasClass(Re)) return void this._leave(null, this);

        this._enter(null, this);
      }
    }, i.dispose = function () {
      clearTimeout(this._timeout), t.removeData(this.element, this.constructor.DATA_KEY), t(this.element).off(this.constructor.EVENT_KEY), t(this.element).closest(".modal").off("hide.bs.modal", this._hideModalHandler), this.tip && t(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null;
    }, i.show = function () {
      var e = this;
      if ("none" === t(this.element).css("display")) throw new Error("Please use show on visible elements");
      var i = t.Event(this.constructor.Event.SHOW);

      if (this.isWithContent() && this._isEnabled) {
        t(this.element).trigger(i);
        var r = a.findShadowRoot(this.element),
            o = t.contains(null !== r ? r : this.element.ownerDocument.documentElement, this.element);
        if (i.isDefaultPrevented() || !o) return;
        var s = this.getTipElement(),
            l = a.getUID(this.constructor.NAME);
        s.setAttribute("id", l), this.element.setAttribute("aria-describedby", l), this.setContent(), this.config.animation && t(s).addClass(Pe);

        var u = "function" == typeof this.config.placement ? this.config.placement.call(this, s, this.element) : this.config.placement,
            c = this._getAttachment(u);

        this.addAttachmentClass(c);

        var f = this._getContainer();

        t(s).data(this.constructor.DATA_KEY, this), t.contains(this.element.ownerDocument.documentElement, this.tip) || t(s).appendTo(f), t(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new n(this.element, s, this._getPopperConfig(c)), t(s).addClass(Re), "ontouchstart" in document.documentElement && t(document.body).children().on("mouseover", null, t.noop);

        var h = function () {
          e.config.animation && e._fixTransition();
          var n = e._hoverState;
          e._hoverState = null, t(e.element).trigger(e.constructor.Event.SHOWN), n === Le && e._leave(null, e);
        };

        if (t(this.tip).hasClass(Pe)) {
          var d = a.getTransitionDurationFromElement(this.tip);
          t(this.tip).one(a.TRANSITION_END, h).emulateTransitionEnd(d);
        } else h();
      }
    }, i.hide = function (e) {
      var n = this,
          i = this.getTipElement(),
          r = t.Event(this.constructor.Event.HIDE),
          o = function () {
        n._hoverState !== Oe && i.parentNode && i.parentNode.removeChild(i), n._cleanTipClass(), n.element.removeAttribute("aria-describedby"), t(n.element).trigger(n.constructor.Event.HIDDEN), null !== n._popper && n._popper.destroy(), e && e();
      };

      if (t(this.element).trigger(r), !r.isDefaultPrevented()) {
        if (t(i).removeClass(Re), "ontouchstart" in document.documentElement && t(document.body).children().off("mouseover", null, t.noop), this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1, t(this.tip).hasClass(Pe)) {
          var s = a.getTransitionDurationFromElement(i);
          t(i).one(a.TRANSITION_END, o).emulateTransitionEnd(s);
        } else o();

        this._hoverState = "";
      }
    }, i.update = function () {
      null !== this._popper && this._popper.scheduleUpdate();
    }, i.isWithContent = function () {
      return Boolean(this.getTitle());
    }, i.addAttachmentClass = function (e) {
      t(this.getTipElement()).addClass("bs-tooltip-" + e);
    }, i.getTipElement = function () {
      return this.tip = this.tip || t(this.config.template)[0], this.tip;
    }, i.setContent = function () {
      var e = this.getTipElement();
      this.setElementContent(t(e.querySelectorAll(".tooltip-inner")), this.getTitle()), t(e).removeClass("fade show");
    }, i.setElementContent = function (e, n) {
      "object" != typeof n || !n.nodeType && !n.jquery ? this.config.html ? (this.config.sanitize && (n = Ee(n, this.config.whiteList, this.config.sanitizeFn)), e.html(n)) : e.text(n) : this.config.html ? t(n).parent().is(e) || e.empty().append(n) : e.text(t(n).text());
    }, i.getTitle = function () {
      var e = this.element.getAttribute("data-original-title");
      return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), e;
    }, i._getPopperConfig = function (e) {
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
    }, i._getOffset = function () {
      var e = this,
          t = {};
      return "function" == typeof this.config.offset ? t.fn = function (t) {
        return t.offsets = o({}, t.offsets, e.config.offset(t.offsets, e.element) || {}), t;
      } : t.offset = this.config.offset, t;
    }, i._getContainer = function () {
      return !1 === this.config.container ? document.body : a.isElement(this.config.container) ? t(this.config.container) : t(document).find(this.config.container);
    }, i._getAttachment = function (e) {
      return je[e.toUpperCase()];
    }, i._setListeners = function () {
      var e = this;
      this.config.trigger.split(" ").forEach(function (n) {
        if ("click" === n) t(e.element).on(e.constructor.Event.CLICK, e.config.selector, function (t) {
          return e.toggle(t);
        });else if ("manual" !== n) {
          var i = n === He ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN,
              r = n === He ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;
          t(e.element).on(i, e.config.selector, function (t) {
            return e._enter(t);
          }).on(r, e.config.selector, function (t) {
            return e._leave(t);
          });
        }
      }), this._hideModalHandler = function () {
        e.element && e.hide();
      }, t(this.element).closest(".modal").on("hide.bs.modal", this._hideModalHandler), this.config.selector ? this.config = o({}, this.config, {
        trigger: "manual",
        selector: ""
      }) : this._fixTitle();
    }, i._fixTitle = function () {
      var e = typeof this.element.getAttribute("data-original-title");
      (this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""));
    }, i._enter = function (e, n) {
      var i = this.constructor.DATA_KEY;
      (n = n || t(e.currentTarget).data(i)) || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), e && (n._activeTrigger["focusin" === e.type ? Fe : He] = !0), t(n.getTipElement()).hasClass(Re) || n._hoverState === Oe ? n._hoverState = Oe : (clearTimeout(n._timeout), n._hoverState = Oe, n.config.delay && n.config.delay.show ? n._timeout = setTimeout(function () {
        n._hoverState === Oe && n.show();
      }, n.config.delay.show) : n.show());
    }, i._leave = function (e, n) {
      var i = this.constructor.DATA_KEY;
      (n = n || t(e.currentTarget).data(i)) || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), e && (n._activeTrigger["focusout" === e.type ? Fe : He] = !1), n._isWithActiveTrigger() || (clearTimeout(n._timeout), n._hoverState = Le, n.config.delay && n.config.delay.hide ? n._timeout = setTimeout(function () {
        n._hoverState === Le && n.hide();
      }, n.config.delay.hide) : n.hide());
    }, i._isWithActiveTrigger = function () {
      for (var e in this._activeTrigger) if (this._activeTrigger[e]) return !0;

      return !1;
    }, i._getConfig = function (e) {
      var n = t(this.element).data();
      return Object.keys(n).forEach(function (e) {
        -1 !== De.indexOf(e) && delete n[e];
      }), "number" == typeof (e = o({}, this.constructor.Default, n, "object" == typeof e && e ? e : {})).delay && (e.delay = {
        show: e.delay,
        hide: e.delay
      }), "number" == typeof e.title && (e.title = e.title.toString()), "number" == typeof e.content && (e.content = e.content.toString()), a.typeCheckConfig(Ce, e, this.constructor.DefaultType), e.sanitize && (e.template = Ee(e.template, e.whiteList, e.sanitizeFn)), e;
    }, i._getDelegateConfig = function () {
      var e = {};
      if (this.config) for (var t in this.config) this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
      return e;
    }, i._cleanTipClass = function () {
      var e = t(this.getTipElement()),
          n = e.attr("class").match(Ae);
      null !== n && n.length && e.removeClass(n.join(""));
    }, i._handlePopperPlacementChange = function (e) {
      this.tip = e.instance.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(e.placement));
    }, i._fixTransition = function () {
      var e = this.getTipElement(),
          n = this.config.animation;
      null === e.getAttribute("x-placement") && (t(e).removeClass(Pe), this.config.animation = !1, this.hide(), this.show(), this.config.animation = n);
    }, e._jQueryInterface = function (n) {
      return this.each(function () {
        var i = t(this).data(Se),
            r = "object" == typeof n && n;

        if ((i || !/dispose|hide/.test(n)) && (i || (i = new e(this, r), t(this).data(Se, i)), "string" == typeof n)) {
          if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
          i[n]();
        }
      });
    }, r(e, null, [{
      key: "VERSION",
      get: function () {
        return "4.5.2";
      }
    }, {
      key: "Default",
      get: function () {
        return Ie;
      }
    }, {
      key: "NAME",
      get: function () {
        return Ce;
      }
    }, {
      key: "DATA_KEY",
      get: function () {
        return Se;
      }
    }, {
      key: "Event",
      get: function () {
        return qe;
      }
    }, {
      key: "EVENT_KEY",
      get: function () {
        return ".bs.tooltip";
      }
    }, {
      key: "DefaultType",
      get: function () {
        return Ne;
      }
    }]), e;
  }();

  t.fn.tooltip = Me._jQueryInterface, t.fn.tooltip.Constructor = Me, t.fn.tooltip.noConflict = function () {
    return t.fn.tooltip = ke, Me._jQueryInterface;
  };

  var Be = "bs.popover",
      We = t.fn.popover,
      Qe = new RegExp("(^|\\s)bs-popover\\S+", "g"),
      Ue = o({}, Me.Default, {
    placement: "right",
    trigger: "click",
    content: "",
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
  }),
      $e = o({}, Me.DefaultType, {
    content: "(string|element|function)"
  }),
      ze = {
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
      Xe = function (e) {
    var n, i;

    function o() {
      return e.apply(this, arguments) || this;
    }

    i = e, (n = o).prototype = Object.create(i.prototype), n.prototype.constructor = n, n.__proto__ = i;
    var s = o.prototype;
    return s.isWithContent = function () {
      return this.getTitle() || this._getContent();
    }, s.addAttachmentClass = function (e) {
      t(this.getTipElement()).addClass("bs-popover-" + e);
    }, s.getTipElement = function () {
      return this.tip = this.tip || t(this.config.template)[0], this.tip;
    }, s.setContent = function () {
      var e = t(this.getTipElement());
      this.setElementContent(e.find(".popover-header"), this.getTitle());

      var n = this._getContent();

      "function" == typeof n && (n = n.call(this.element)), this.setElementContent(e.find(".popover-body"), n), e.removeClass("fade show");
    }, s._getContent = function () {
      return this.element.getAttribute("data-content") || this.config.content;
    }, s._cleanTipClass = function () {
      var e = t(this.getTipElement()),
          n = e.attr("class").match(Qe);
      null !== n && n.length > 0 && e.removeClass(n.join(""));
    }, o._jQueryInterface = function (e) {
      return this.each(function () {
        var n = t(this).data(Be),
            i = "object" == typeof e ? e : null;

        if ((n || !/dispose|hide/.test(e)) && (n || (n = new o(this, i), t(this).data(Be, n)), "string" == typeof e)) {
          if (void 0 === n[e]) throw new TypeError('No method named "' + e + '"');
          n[e]();
        }
      });
    }, r(o, null, [{
      key: "VERSION",
      get: function () {
        return "4.5.2";
      }
    }, {
      key: "Default",
      get: function () {
        return Ue;
      }
    }, {
      key: "NAME",
      get: function () {
        return "popover";
      }
    }, {
      key: "DATA_KEY",
      get: function () {
        return Be;
      }
    }, {
      key: "Event",
      get: function () {
        return ze;
      }
    }, {
      key: "EVENT_KEY",
      get: function () {
        return ".bs.popover";
      }
    }, {
      key: "DefaultType",
      get: function () {
        return $e;
      }
    }]), o;
  }(Me);

  t.fn.popover = Xe._jQueryInterface, t.fn.popover.Constructor = Xe, t.fn.popover.noConflict = function () {
    return t.fn.popover = We, Xe._jQueryInterface;
  };

  var Ve = "scrollspy",
      Ye = "bs.scrollspy",
      Ke = t.fn[Ve],
      Ge = {
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
      var i = this;
      this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(n), this._selector = this._config.target + " .nav-link," + this._config.target + " .list-group-item," + this._config.target + " .dropdown-item", this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, t(this._scrollElement).on("scroll.bs.scrollspy", function (e) {
        return i._process(e);
      }), this.refresh(), this._process();
    }

    var n = e.prototype;
    return n.refresh = function () {
      var e = this,
          n = "auto" === this._config.method ? this._scrollElement === this._scrollElement.window ? "offset" : tt : this._config.method,
          i = n === tt ? this._getScrollTop() : 0;
      this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map(function (e) {
        var r,
            o = a.getSelectorFromElement(e);

        if (o && (r = document.querySelector(o)), r) {
          var s = r.getBoundingClientRect();
          if (s.width || s.height) return [t(r)[n]().top + i, o];
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
      t.removeData(this._element, Ye), t(this._scrollElement).off(".bs.scrollspy"), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null;
    }, n._getConfig = function (e) {
      if ("string" != typeof (e = o({}, Ge, "object" == typeof e && e ? e : {})).target && a.isElement(e.target)) {
        var n = t(e.target).attr("id");
        n || (n = a.getUID(Ve), t(e.target).attr("id", n)), e.target = "#" + n;
      }

      return a.typeCheckConfig(Ve, e, Je), e;
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
        var i = this._targets[this._targets.length - 1];
        this._activeTarget !== i && this._activate(i);
      } else {
        if (this._activeTarget && e < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();

        for (var r = this._offsets.length; r--;) this._activeTarget !== this._targets[r] && e >= this._offsets[r] && (void 0 === this._offsets[r + 1] || e < this._offsets[r + 1]) && this._activate(this._targets[r]);
      }
    }, n._activate = function (e) {
      this._activeTarget = e, this._clear();

      var n = this._selector.split(",").map(function (t) {
        return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]';
      }),
          i = t([].slice.call(document.querySelectorAll(n.join(","))));

      i.hasClass("dropdown-item") ? (i.closest(".dropdown").find(".dropdown-toggle").addClass(Ze), i.addClass(Ze)) : (i.addClass(Ze), i.parents(et).prev(".nav-link, .list-group-item").addClass(Ze), i.parents(et).prev(".nav-item").children(".nav-link").addClass(Ze)), t(this._scrollElement).trigger("activate.bs.scrollspy", {
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
        var i = t(this).data(Ye);

        if (i || (i = new e(this, "object" == typeof n && n), t(this).data(Ye, i)), "string" == typeof n) {
          if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
          i[n]();
        }
      });
    }, r(e, null, [{
      key: "VERSION",
      get: function () {
        return "4.5.2";
      }
    }, {
      key: "Default",
      get: function () {
        return Ge;
      }
    }]), e;
  }();

  t(window).on("load.bs.scrollspy.data-api", function () {
    for (var e = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')), n = e.length; n--;) {
      var i = t(e[n]);

      nt._jQueryInterface.call(i, i.data());
    }
  }), t.fn[Ve] = nt._jQueryInterface, t.fn[Ve].Constructor = nt, t.fn[Ve].noConflict = function () {
    return t.fn[Ve] = Ke, nt._jQueryInterface;
  };

  var it = "bs.tab",
      rt = t.fn.tab,
      ot = "active",
      st = "fade",
      at = "show",
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
            i,
            r = t(this._element).closest(".nav, .list-group")[0],
            o = a.getSelectorFromElement(this._element);

        if (r) {
          var s = "UL" === r.nodeName || "OL" === r.nodeName ? ut : lt;
          i = (i = t.makeArray(t(r).find(s)))[i.length - 1];
        }

        var l = t.Event("hide.bs.tab", {
          relatedTarget: this._element
        }),
            u = t.Event("show.bs.tab", {
          relatedTarget: i
        });

        if (i && t(i).trigger(l), t(this._element).trigger(u), !u.isDefaultPrevented() && !l.isDefaultPrevented()) {
          o && (n = document.querySelector(o)), this._activate(this._element, r);

          var c = function () {
            var n = t.Event("hidden.bs.tab", {
              relatedTarget: e._element
            }),
                r = t.Event("shown.bs.tab", {
              relatedTarget: i
            });
            t(i).trigger(n), t(e._element).trigger(r);
          };

          n ? this._activate(n, n.parentNode, c) : c();
        }
      }
    }, n.dispose = function () {
      t.removeData(this._element, it), this._element = null;
    }, n._activate = function (e, n, i) {
      var r = this,
          o = (!n || "UL" !== n.nodeName && "OL" !== n.nodeName ? t(n).children(lt) : t(n).find(ut))[0],
          s = i && o && t(o).hasClass(st),
          l = function () {
        return r._transitionComplete(e, o, i);
      };

      if (o && s) {
        var u = a.getTransitionDurationFromElement(o);
        t(o).removeClass(at).one(a.TRANSITION_END, l).emulateTransitionEnd(u);
      } else l();
    }, n._transitionComplete = function (e, n, i) {
      if (n) {
        t(n).removeClass(ot);
        var r = t(n.parentNode).find("> .dropdown-menu .active")[0];
        r && t(r).removeClass(ot), "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !1);
      }

      if (t(e).addClass(ot), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), a.reflow(e), e.classList.contains(st) && e.classList.add(at), e.parentNode && t(e.parentNode).hasClass("dropdown-menu")) {
        var o = t(e).closest(".dropdown")[0];

        if (o) {
          var s = [].slice.call(o.querySelectorAll(".dropdown-toggle"));
          t(s).addClass(ot);
        }

        e.setAttribute("aria-expanded", !0);
      }

      i && i();
    }, e._jQueryInterface = function (n) {
      return this.each(function () {
        var i = t(this),
            r = i.data(it);

        if (r || (r = new e(this), i.data(it, r)), "string" == typeof n) {
          if (void 0 === r[n]) throw new TypeError('No method named "' + n + '"');
          r[n]();
        }
      });
    }, r(e, null, [{
      key: "VERSION",
      get: function () {
        return "4.5.2";
      }
    }]), e;
  }();

  t(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', function (e) {
    e.preventDefault(), ct._jQueryInterface.call(t(this), "show");
  }), t.fn.tab = ct._jQueryInterface, t.fn.tab.Constructor = ct, t.fn.tab.noConflict = function () {
    return t.fn.tab = rt, ct._jQueryInterface;
  };

  var ft = "bs.toast",
      ht = t.fn.toast,
      dt = "click.dismiss.bs.toast",
      pt = "hide",
      gt = "show",
      mt = "showing",
      vt = {
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

        var i = function () {
          e._element.classList.remove(mt), e._element.classList.add(gt), t(e._element).trigger("shown.bs.toast"), e._config.autohide && (e._timeout = setTimeout(function () {
            e.hide();
          }, e._config.delay));
        };

        if (this._element.classList.remove(pt), a.reflow(this._element), this._element.classList.add(mt), this._config.animation) {
          var r = a.getTransitionDurationFromElement(this._element);
          t(this._element).one(a.TRANSITION_END, i).emulateTransitionEnd(r);
        } else i();
      }
    }, n.hide = function () {
      if (this._element.classList.contains(gt)) {
        var e = t.Event("hide.bs.toast");
        t(this._element).trigger(e), e.isDefaultPrevented() || this._close();
      }
    }, n.dispose = function () {
      this._clearTimeout(), this._element.classList.contains(gt) && this._element.classList.remove(gt), t(this._element).off(dt), t.removeData(this._element, ft), this._element = null, this._config = null;
    }, n._getConfig = function (e) {
      return e = o({}, yt, t(this._element).data(), "object" == typeof e && e ? e : {}), a.typeCheckConfig("toast", e, this.constructor.DefaultType), e;
    }, n._setListeners = function () {
      var e = this;
      t(this._element).on(dt, '[data-dismiss="toast"]', function () {
        return e.hide();
      });
    }, n._close = function () {
      var e = this,
          n = function () {
        e._element.classList.add(pt), t(e._element).trigger("hidden.bs.toast");
      };

      if (this._element.classList.remove(gt), this._config.animation) {
        var i = a.getTransitionDurationFromElement(this._element);
        t(this._element).one(a.TRANSITION_END, n).emulateTransitionEnd(i);
      } else n();
    }, n._clearTimeout = function () {
      clearTimeout(this._timeout), this._timeout = null;
    }, e._jQueryInterface = function (n) {
      return this.each(function () {
        var i = t(this),
            r = i.data(ft);

        if (r || (r = new e(this, "object" == typeof n && n), i.data(ft, r)), "string" == typeof n) {
          if (void 0 === r[n]) throw new TypeError('No method named "' + n + '"');
          r[n](this);
        }
      });
    }, r(e, null, [{
      key: "VERSION",
      get: function () {
        return "4.5.2";
      }
    }, {
      key: "DefaultType",
      get: function () {
        return vt;
      }
    }, {
      key: "Default",
      get: function () {
        return yt;
      }
    }]), e;
  }();

  t.fn.toast = _t._jQueryInterface, t.fn.toast.Constructor = _t, t.fn.toast.noConflict = function () {
    return t.fn.toast = ht, _t._jQueryInterface;
  }, e.Alert = c, e.Button = v, e.Carousel = D, e.Collapse = B, e.Dropdown = ie, e.Modal = be, e.Popover = Xe, e.Scrollspy = nt, e.Tab = ct, e.Toast = _t, e.Tooltip = Me, e.Util = a, Object.defineProperty(e, "__esModule", {
    value: !0
  });
});