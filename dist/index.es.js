import ie, { useState as $, useEffect as ue } from "react";
import { NavLink as R, useLocation as V } from "react-router-dom";
var _ = { exports: {} }, E = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var U;
function de() {
  if (U) return E;
  U = 1;
  var t = Symbol.for("react.transitional.element"), i = Symbol.for("react.fragment");
  function d(f, s, o) {
    var l = null;
    if (o !== void 0 && (l = "" + o), s.key !== void 0 && (l = "" + s.key), "key" in s) {
      o = {};
      for (var p in s)
        p !== "key" && (o[p] = s[p]);
    } else o = s;
    return s = o.ref, {
      $$typeof: t,
      type: f,
      key: l,
      ref: s !== void 0 ? s : null,
      props: o
    };
  }
  return E.Fragment = i, E.jsx = d, E.jsxs = d, E;
}
var w = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var q;
function fe() {
  return q || (q = 1, process.env.NODE_ENV !== "production" && (function() {
    function t(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === se ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case T:
          return "Fragment";
        case Q:
          return "Profiler";
        case Z:
          return "StrictMode";
        case te:
          return "Suspense";
        case ne:
          return "SuspenseList";
        case oe:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case X:
            return "Portal";
          case ee:
            return (e.displayName || "Context") + ".Provider";
          case K:
            return (e._context.displayName || "Context") + ".Consumer";
          case re:
            var a = e.render;
            return e = e.displayName, e || (e = a.displayName || a.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case ae:
            return a = e.displayName || null, a !== null ? a : t(e.type) || "Memo";
          case Y:
            a = e._payload, e = e._init;
            try {
              return t(e(a));
            } catch {
            }
        }
      return null;
    }
    function i(e) {
      return "" + e;
    }
    function d(e) {
      try {
        i(e);
        var a = !1;
      } catch {
        a = !0;
      }
      if (a) {
        a = console;
        var c = a.error, v = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return c.call(
          a,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          v
        ), i(e);
      }
    }
    function f(e) {
      if (e === T) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === Y)
        return "<...>";
      try {
        var a = t(e);
        return a ? "<" + a + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var e = A.A;
      return e === null ? null : e.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function l(e) {
      if (W.call(e, "key")) {
        var a = Object.getOwnPropertyDescriptor(e, "key").get;
        if (a && a.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function p(e, a) {
      function c() {
        I || (I = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          a
        ));
      }
      c.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: c,
        configurable: !0
      });
    }
    function n() {
      var e = t(this.type);
      return D[e] || (D[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function u(e, a, c, v, b, g, C, P) {
      return c = g.ref, e = {
        $$typeof: L,
        type: e,
        key: a,
        props: g,
        _owner: b
      }, (c !== void 0 ? c : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: n
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: C
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: P
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function x(e, a, c, v, b, g, C, P) {
      var h = a.children;
      if (h !== void 0)
        if (v)
          if (le(h)) {
            for (v = 0; v < h.length; v++)
              m(h[v]);
            Object.freeze && Object.freeze(h);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else m(h);
      if (W.call(a, "key")) {
        h = t(e);
        var y = Object.keys(a).filter(function(ce) {
          return ce !== "key";
        });
        v = 0 < y.length ? "{key: someKey, " + y.join(": ..., ") + ": ...}" : "{key: someKey}", F[h + v] || (y = 0 < y.length ? "{" + y.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          v,
          h,
          y,
          h
        ), F[h + v] = !0);
      }
      if (h = null, c !== void 0 && (d(c), h = "" + c), l(a) && (d(a.key), h = "" + a.key), "key" in a) {
        c = {};
        for (var S in a)
          S !== "key" && (c[S] = a[S]);
      } else c = a;
      return h && p(
        c,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), u(
        e,
        h,
        g,
        b,
        s(),
        c,
        C,
        P
      );
    }
    function m(e) {
      typeof e == "object" && e !== null && e.$$typeof === L && e._store && (e._store.validated = 1);
    }
    var j = ie, L = Symbol.for("react.transitional.element"), X = Symbol.for("react.portal"), T = Symbol.for("react.fragment"), Z = Symbol.for("react.strict_mode"), Q = Symbol.for("react.profiler"), K = Symbol.for("react.consumer"), ee = Symbol.for("react.context"), re = Symbol.for("react.forward_ref"), te = Symbol.for("react.suspense"), ne = Symbol.for("react.suspense_list"), ae = Symbol.for("react.memo"), Y = Symbol.for("react.lazy"), oe = Symbol.for("react.activity"), se = Symbol.for("react.client.reference"), A = j.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, W = Object.prototype.hasOwnProperty, le = Array.isArray, O = console.createTask ? console.createTask : function() {
      return null;
    };
    j = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var I, D = {}, M = j.react_stack_bottom_frame.bind(
      j,
      o
    )(), z = O(f(o)), F = {};
    w.Fragment = T, w.jsx = function(e, a, c, v, b) {
      var g = 1e4 > A.recentlyCreatedOwnerStacks++;
      return x(
        e,
        a,
        c,
        !1,
        v,
        b,
        g ? Error("react-stack-top-frame") : M,
        g ? O(f(e)) : z
      );
    }, w.jsxs = function(e, a, c, v, b) {
      var g = 1e4 > A.recentlyCreatedOwnerStacks++;
      return x(
        e,
        a,
        c,
        !0,
        v,
        b,
        g ? Error("react-stack-top-frame") : M,
        g ? O(f(e)) : z
      );
    };
  })()), w;
}
var B;
function pe() {
  return B || (B = 1, process.env.NODE_ENV === "production" ? _.exports = de() : _.exports = fe()), _.exports;
}
var r = pe();
function J() {
  return typeof window > "u" ? "pc" : window.innerWidth <= 768 ? "mob" : window.innerWidth <= 1024 ? "tab" : "pc";
}
const N = (t) => Array.isArray(t?.children) ? t.children : [], xe = ({ children: t }) => /* @__PURE__ */ r.jsx("div", { className: "select-none pointer-events-none opacity-50", children: t }), k = (t, i = !1) => !!i || !!t?.blocked, G = ({
  item: t,
  level: i = 0,
  isLast: d = !1,
  ancestorBlocked: f = !1
}) => {
  const s = V(), o = N(t), l = k(t, f), p = t?.link === s.pathname || o.some((m) => m?.link === s.pathname), n = i * 20, u = l ? "div" : t?.link ? R : "div", x = /* @__PURE__ */ r.jsxs(
    u,
    {
      to: l ? void 0 : t?.link,
      className: `relative z-10 flex items-center gap-2 py-1
      ${l ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100 cursor-pointer"}
      ${p ? "bg-gray-200" : ""}`,
      style: { paddingLeft: n },
      children: [
        i > 0 && /* @__PURE__ */ r.jsx(
          "span",
          {
            className: "absolute h-px bg-gray-300 pointer-events-none",
            style: {
              left: n - 10,
              width: 10,
              top: "50%"
            }
          }
        ),
        t?.iconpath && /* @__PURE__ */ r.jsx("i", { className: t.iconpath }),
        /* @__PURE__ */ r.jsx("span", { className: "truncate", children: t?.label || t?.title || "Untitled" })
      ]
    }
  );
  return /* @__PURE__ */ r.jsxs("div", { className: "relative", children: [
    i > 0 && /* @__PURE__ */ r.jsx(
      "span",
      {
        className: "absolute w-px bg-gray-300 pointer-events-none",
        style: {
          left: n - 10,
          top: 0,
          bottom: d ? "calc(100% - 20px)" : 0
        }
      }
    ),
    l ? /* @__PURE__ */ r.jsx(xe, { children: x }) : x,
    o.map((m, j) => /* @__PURE__ */ r.jsx(
      G,
      {
        item: m,
        level: i + 1,
        isLast: j === o.length - 1,
        ancestorBlocked: l
      },
      j
    ))
  ] });
}, ve = (t = "") => t.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, ""), he = ({ item: t }) => {
  const [i, d] = $(!1), f = N(t), s = k(t, !1);
  return /* @__PURE__ */ r.jsxs("div", { className: `relative navbar-popup navbar-popup-${ve(t?.label)}`, children: [
    /* @__PURE__ */ r.jsxs(
      "div",
      {
        onClick: () => {
          s || d(!0);
        },
        className: `flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${s ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100 cursor-pointer"}`,
        children: [
          t?.iconpath && /* @__PURE__ */ r.jsx("i", { className: `${t.iconpath} text-gray-600` }),
          /* @__PURE__ */ r.jsx("span", { className: "text-sm font-medium text-gray-700", children: t?.label || t?.title || "" })
        ]
      }
    ),
    i && /* @__PURE__ */ r.jsx(
      "div",
      {
        className: "fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50 p-4",
        onClick: () => d(!1),
        children: /* @__PURE__ */ r.jsxs(
          "div",
          {
            className: "bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[85vh] overflow-hidden flex flex-col",
            onClick: (o) => o.stopPropagation(),
            children: [
              /* @__PURE__ */ r.jsxs("div", { className: "flex items-center justify-between px-3 md:px-6 py-2 md:py-4 border-b border-gray-200 bg-gray-50", children: [
                /* @__PURE__ */ r.jsx("div", { children: /* @__PURE__ */ r.jsx("h3", { className: "text-xl font-semibold text-gray-800", children: t?.label || t?.title }) }),
                /* @__PURE__ */ r.jsx(
                  "button",
                  {
                    onClick: () => d(!1),
                    className: "p-2 rounded-lg cursor-pointer hover:bg-gray-200 transition-colors group",
                    "aria-label": "Close",
                    children: /* @__PURE__ */ r.jsx(
                      "svg",
                      {
                        className: "w-5 h-5 text-gray-600 group-hover:text-gray-800",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: /* @__PURE__ */ r.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" })
                      }
                    )
                  }
                )
              ] }),
              /* @__PURE__ */ r.jsx("div", { className: "overflow-y-auto p-3 md:p-6 bg-gray-50", children: f.length > 0 ? /* @__PURE__ */ r.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-4", children: f.map((o, l) => {
                const p = k(o, s), n = p ? "div" : R;
                return /* @__PURE__ */ r.jsx(
                  n,
                  {
                    to: p ? void 0 : o?.link || "#",
                    className: "group nav-link",
                    onClick: () => d(!1),
                    children: /* @__PURE__ */ r.jsxs(
                      "div",
                      {
                        className: `bg-white border border-gray-200 rounded-lg p-2 md:p-5 hover:shadow-lg transition-all duration-200 h-full flex flex-col justify-center items-center ${p ? "opacity-50 pointer-events-none" : "hover:border-action"}`,
                        children: [
                          o.iconpath && /* @__PURE__ */ r.jsx("div", { className: "flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 mb-2 md:mb-4 group-hover:from-blue-100 group-hover:to-blue-200 transition-colors", children: /* @__PURE__ */ r.jsx("i", { className: `${o.iconpath} text-2xl ` }) }),
                          /* @__PURE__ */ r.jsx("h4", { className: "text-base font-semibold text-gray-800 mb-2 group-hover:text-action transition-colors", children: o?.label || o?.title }),
                          o?.description && /* @__PURE__ */ r.jsx("p", { className: "text-sm text-gray-500 line-clamp-2 mb-3", children: o.description })
                        ]
                      }
                    )
                  },
                  l
                );
              }) }) : /* @__PURE__ */ r.jsxs("div", { className: "flex flex-col items-center justify-center py-16", children: [
                /* @__PURE__ */ r.jsx("div", { className: "w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4", children: /* @__PURE__ */ r.jsx("svg", { className: "w-8 h-8 text-gray-400", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ r.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" }) }) }),
                /* @__PURE__ */ r.jsx("p", { className: "text-gray-500 font-medium", children: "No items available" }),
                /* @__PURE__ */ r.jsx("p", { className: "text-sm text-gray-400 mt-1", children: "Check back later for updates" })
              ] }) })
            ]
          }
        )
      }
    )
  ] });
}, me = ({ item: t, children: i, isActive: d, isDisabled: f, paddingLeft: s, handleAjax: o }) => {
  const l = f ? "div" : t?.link ? R : "div";
  return /* @__PURE__ */ r.jsxs(
    l,
    {
      to: f || t?.target === "ajax" ? void 0 : t?.link,
      onClick: () => {
        !f && t?.target === "ajax" && o(t?.link);
      },
      className: ({ isActive: p }) => `relative z-10 flex items-center gap-2 px-2 py-1
        ${f ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100 cursor-pointer"}
        ${p || d ? "bg-action text-white" : ""}`,
      style: { paddingLeft: s },
      children: [
        t?.iconpath && /* @__PURE__ */ r.jsx("i", { className: t.iconpath }),
        /* @__PURE__ */ r.jsx("span", { className: "truncate", children: i })
      ]
    }
  );
}, H = ({ parentItem: t, items: i, hideLabel: d, ancestorBlocked: f = !1 }) => {
  const [s, o] = $(!1), l = V(), p = Array.isArray(i) ? i : [], n = k(t, f), u = p.some(
    (x) => x?.link === l.pathname || N(x)?.some((m) => m?.link === l.pathname)
  );
  return /* @__PURE__ */ r.jsxs("div", { className: "flex flex-col", children: [
    /* @__PURE__ */ r.jsxs(
      "div",
      {
        className: `flex items-center gap-2 px-2 py-1 cursor-pointer hover:bg-gray-200
          ${n ? "opacity-50 cursor-not-allowed" : ""}
          ${u ? "bg-action text-white" : ""}`,
        onClick: () => {
          n || o(!s);
        },
        children: [
          t?.iconpath && /* @__PURE__ */ r.jsx("i", { className: t.iconpath }),
          !d && /* @__PURE__ */ r.jsx("span", { children: t?.label || t?.title || "" }),
          /* @__PURE__ */ r.jsx("span", { className: "ml-auto", children: s ? "▲" : "▼" })
        ]
      }
    ),
    s && /* @__PURE__ */ r.jsx("div", { className: "flex flex-col pl-4", children: p.map(
      (x, m) => N(x).length ? /* @__PURE__ */ r.jsx(
        H,
        {
          parentItem: x,
          items: x.children,
          hideLabel: d,
          ancestorBlocked: n
        },
        m
      ) : /* @__PURE__ */ r.jsx(
        me,
        {
          item: x,
          paddingLeft: 10,
          isDisabled: k(x, n),
          isActive: x?.link === l.pathname,
          children: x?.label || x?.title
        },
        m
      )
    ) })
  ] });
};
function je({ config: t, hideLabel: i = !1, handleAjax: d }) {
  const [f, s] = $(J()), o = t?.layout || "vertical";
  ue(() => {
    const n = () => s(J());
    return window.addEventListener("resize", n), () => window.removeEventListener("resize", n);
  }, []);
  const l = (t?.items || []).filter((n) => {
    if (!n || n.onmenu === !1) return !1;
    const u = n.device;
    return !u || u === "*" ? !0 : Array.isArray(u) ? u.includes(f) : u === f;
  });
  if (o === "tree")
    return /* @__PURE__ */ r.jsx("nav", { className: "navigator flex flex-col gap-1", children: l.map((n, u) => /* @__PURE__ */ r.jsx(G, { item: n }, u)) });
  if (o === "popup")
    return /* @__PURE__ */ r.jsx("nav", { className: "navigator flex flex-col gap-2", children: l.map(
      (n, u) => N(n).length ? /* @__PURE__ */ r.jsx(he, { item: n }, u) : /* @__PURE__ */ r.jsxs(
        R,
        {
          to: n?.target === "ajax" ? void 0 : n?.link,
          onClick: () => {
            n?.target === "ajax" && d(n?.link);
          },
          className: `flex items-center nav-link gap-2 px-2 py-1 hover:bg-gray-200 ${k(n) ? "opacity-50 pointer-events-none" : ""}`,
          children: [
            n?.iconpath && /* @__PURE__ */ r.jsx("i", { className: n.iconpath }),
            /* @__PURE__ */ r.jsx("span", { children: n?.label || n?.title })
          ]
        },
        u
      )
    ) });
  const p = o === "horizontal" ? "flex-row" : "flex-col";
  return /* @__PURE__ */ r.jsx("nav", { className: `navigator flex ${p} gap-2 text-action`, style: { alignItems: "flex-start" }, children: l.sort((n, u) => (n?.weight || 0) - (u?.weight || 0)).map(
    (n, u) => N(n).length ? /* @__PURE__ */ r.jsx(H, { parentItem: n, items: n.children, hideLabel: i }, u) : /* @__PURE__ */ r.jsxs(
      R,
      {
        to: n?.target === "ajax" ? void 0 : n?.link,
        onClick: () => {
          n?.target === "ajax" && d(n?.link);
        },
        className: `flex items-center nav-link gap-2 px-2 py-1 hover:bg-gray-200 ${k(n) ? "opacity-50 pointer-events-none" : ""}`,
        children: [
          n?.iconpath && /* @__PURE__ */ r.jsx("i", { className: n.iconpath }),
          !i && /* @__PURE__ */ r.jsx("span", { children: n?.label || n?.title || "" })
        ]
      },
      u
    )
  ) });
}
export {
  je as LogiksNavigator
};
