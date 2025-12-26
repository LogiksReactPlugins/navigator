import G, { useState as Y, useEffect as ue } from "react";
import { NavLink as A, useLocation as H } from "react-router-dom";
var O = { exports: {} }, _ = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var q;
function de() {
  if (q) return _;
  q = 1;
  var n = Symbol.for("react.transitional.element"), u = Symbol.for("react.fragment");
  function d(f, l, s) {
    var c = null;
    if (s !== void 0 && (c = "" + s), l.key !== void 0 && (c = "" + l.key), "key" in l) {
      s = {};
      for (var p in l)
        p !== "key" && (s[p] = l[p]);
    } else s = l;
    return l = s.ref, {
      $$typeof: n,
      type: f,
      key: c,
      ref: l !== void 0 ? l : null,
      props: s
    };
  }
  return _.Fragment = u, _.jsx = d, _.jsxs = d, _;
}
var T = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var B;
function fe() {
  return B || (B = 1, process.env.NODE_ENV !== "production" && (function() {
    function n(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === le ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case w:
          return "Fragment";
        case K:
          return "Profiler";
        case Q:
          return "StrictMode";
        case ne:
          return "Suspense";
        case ae:
          return "SuspenseList";
        case se:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case j:
            return "Portal";
          case re:
            return (e.displayName || "Context") + ".Provider";
          case ee:
            return (e._context.displayName || "Context") + ".Consumer";
          case te:
            var a = e.render;
            return e = e.displayName, e || (e = a.displayName || a.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case oe:
            return a = e.displayName || null, a !== null ? a : n(e.type) || "Memo";
          case W:
            a = e._payload, e = e._init;
            try {
              return n(e(a));
            } catch {
            }
        }
      return null;
    }
    function u(e) {
      return "" + e;
    }
    function d(e) {
      try {
        u(e);
        var a = !1;
      } catch {
        a = !0;
      }
      if (a) {
        a = console;
        var i = a.error, h = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return i.call(
          a,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          h
        ), u(e);
      }
    }
    function f(e) {
      if (e === w) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === W)
        return "<...>";
      try {
        var a = n(e);
        return a ? "<" + a + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function l() {
      var e = C.A;
      return e === null ? null : e.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function c(e) {
      if (I.call(e, "key")) {
        var a = Object.getOwnPropertyDescriptor(e, "key").get;
        if (a && a.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function p(e, a) {
      function i() {
        M || (M = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          a
        ));
      }
      i.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: i,
        configurable: !0
      });
    }
    function x() {
      var e = n(this.type);
      return D[e] || (D[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function y(e, a, i, h, k, b, S, $) {
      return i = b.ref, e = {
        $$typeof: m,
        type: e,
        key: a,
        props: b,
        _owner: k
      }, (i !== void 0 ? i : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: x
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
        value: S
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: $
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function t(e, a, i, h, k, b, S, $) {
      var v = a.children;
      if (v !== void 0)
        if (h)
          if (ce(v)) {
            for (h = 0; h < v.length; h++)
              o(v[h]);
            Object.freeze && Object.freeze(v);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else o(v);
      if (I.call(a, "key")) {
        v = n(e);
        var E = Object.keys(a).filter(function(ie) {
          return ie !== "key";
        });
        h = 0 < E.length ? "{key: someKey, " + E.join(": ..., ") + ": ...}" : "{key: someKey}", U[v + h] || (E = 0 < E.length ? "{" + E.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          h,
          v,
          E,
          v
        ), U[v + h] = !0);
      }
      if (v = null, i !== void 0 && (d(i), v = "" + i), c(a) && (d(a.key), v = "" + a.key), "key" in a) {
        i = {};
        for (var L in a)
          L !== "key" && (i[L] = a[L]);
      } else i = a;
      return v && p(
        i,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), y(
        e,
        v,
        b,
        k,
        l(),
        i,
        S,
        $
      );
    }
    function o(e) {
      typeof e == "object" && e !== null && e.$$typeof === m && e._store && (e._store.validated = 1);
    }
    var g = G, m = Symbol.for("react.transitional.element"), j = Symbol.for("react.portal"), w = Symbol.for("react.fragment"), Q = Symbol.for("react.strict_mode"), K = Symbol.for("react.profiler"), ee = Symbol.for("react.consumer"), re = Symbol.for("react.context"), te = Symbol.for("react.forward_ref"), ne = Symbol.for("react.suspense"), ae = Symbol.for("react.suspense_list"), oe = Symbol.for("react.memo"), W = Symbol.for("react.lazy"), se = Symbol.for("react.activity"), le = Symbol.for("react.client.reference"), C = g.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, I = Object.prototype.hasOwnProperty, ce = Array.isArray, P = console.createTask ? console.createTask : function() {
      return null;
    };
    g = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var M, D = {}, z = g.react_stack_bottom_frame.bind(
      g,
      s
    )(), F = P(f(s)), U = {};
    T.Fragment = w, T.jsx = function(e, a, i, h, k) {
      var b = 1e4 > C.recentlyCreatedOwnerStacks++;
      return t(
        e,
        a,
        i,
        !1,
        h,
        k,
        b ? Error("react-stack-top-frame") : z,
        b ? P(f(e)) : F
      );
    }, T.jsxs = function(e, a, i, h, k) {
      var b = 1e4 > C.recentlyCreatedOwnerStacks++;
      return t(
        e,
        a,
        i,
        !0,
        h,
        k,
        b ? Error("react-stack-top-frame") : z,
        b ? P(f(e)) : F
      );
    };
  })()), T;
}
var J;
function pe() {
  return J || (J = 1, process.env.NODE_ENV === "production" ? O.exports = de() : O.exports = fe()), O.exports;
}
var r = pe();
function V() {
  return typeof window > "u" ? "pc" : window.innerWidth <= 768 ? "mob" : window.innerWidth <= 1024 ? "tab" : "pc";
}
const R = (n) => Array.isArray(n?.children) ? n.children : [], xe = ({ children: n }) => /* @__PURE__ */ r.jsx("div", { className: "select-none pointer-events-none opacity-50", children: n }), N = (n, u = !1) => !!u || !!n?.blocked, X = ({
  item: n,
  level: u = 0,
  isLast: d = !1,
  ancestorBlocked: f = !1
}) => {
  const l = H(), s = R(n), c = N(n, f), p = n?.link === l.pathname || s.some((o) => o?.link === l.pathname), x = u * 20, y = c ? "div" : n?.link ? A : "div", t = /* @__PURE__ */ r.jsxs(
    y,
    {
      to: c ? void 0 : n?.link,
      className: `relative z-10 flex items-center gap-2 py-1
      ${c ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100 cursor-pointer"}
      ${p ? "bg-gray-200" : ""}`,
      style: { paddingLeft: x },
      children: [
        u > 0 && /* @__PURE__ */ r.jsx(
          "span",
          {
            className: "absolute h-px bg-gray-300 pointer-events-none",
            style: {
              left: x - 10,
              width: 10,
              top: "50%"
            }
          }
        ),
        n?.iconpath && /* @__PURE__ */ r.jsx("i", { className: n.iconpath }),
        /* @__PURE__ */ r.jsx("span", { className: "truncate", children: n?.label || n?.title || "Untitled" })
      ]
    }
  );
  return /* @__PURE__ */ r.jsxs("div", { className: "relative", children: [
    u > 0 && /* @__PURE__ */ r.jsx(
      "span",
      {
        className: "absolute w-px bg-gray-300 pointer-events-none",
        style: {
          left: x - 10,
          top: 0,
          bottom: d ? "calc(100% - 20px)" : 0
        }
      }
    ),
    c ? /* @__PURE__ */ r.jsx(xe, { children: t }) : t,
    s.map((o, g) => /* @__PURE__ */ r.jsx(
      X,
      {
        item: o,
        level: u + 1,
        isLast: g === s.length - 1,
        ancestorBlocked: c
      },
      g
    ))
  ] });
}, he = (n = "") => n.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, ""), ve = ({ item: n }) => {
  const [u, d] = Y(!1), f = R(n), l = N(n, !1);
  return /* @__PURE__ */ r.jsxs("div", { className: `relative navbar-popup navbar-popup-${he(n?.label)}`, children: [
    /* @__PURE__ */ r.jsxs(
      "div",
      {
        onClick: () => {
          l || d(!0);
        },
        className: `flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${l ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100 cursor-pointer"}`,
        children: [
          n?.iconpath && /* @__PURE__ */ r.jsx("i", { className: `${n.iconpath} text-gray-600` }),
          /* @__PURE__ */ r.jsx("span", { className: "text-sm font-medium text-gray-700", children: n?.label || n?.title || "" })
        ]
      }
    ),
    u && /* @__PURE__ */ r.jsx(
      "div",
      {
        className: "fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50 p-4",
        onClick: () => d(!1),
        children: /* @__PURE__ */ r.jsxs(
          "div",
          {
            className: "bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[85vh] overflow-hidden flex flex-col",
            onClick: (s) => s.stopPropagation(),
            children: [
              /* @__PURE__ */ r.jsxs("div", { className: "flex items-center justify-between px-3 md:px-6 py-2 md:py-4 border-b border-gray-200 bg-gray-50", children: [
                /* @__PURE__ */ r.jsx("div", { children: /* @__PURE__ */ r.jsx("h3", { className: "text-xl font-semibold text-gray-800", children: n?.label || n?.title }) }),
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
              /* @__PURE__ */ r.jsx("div", { className: "overflow-y-auto p-3 md:p-6 bg-gray-50", children: f.length > 0 ? /* @__PURE__ */ r.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-4", children: f.map((s, c) => {
                const p = N(s, l), x = p ? "div" : A;
                return /* @__PURE__ */ r.jsx(
                  x,
                  {
                    to: p ? void 0 : s?.link || "#",
                    className: "group nav-link",
                    onClick: () => d(!1),
                    children: /* @__PURE__ */ r.jsxs(
                      "div",
                      {
                        className: `bg-white border border-gray-200 rounded-lg p-2 md:p-5 hover:shadow-lg transition-all duration-200 h-full flex flex-col justify-center items-center ${p ? "opacity-50 pointer-events-none" : "hover:border-action"}`,
                        children: [
                          s.iconpath && /* @__PURE__ */ r.jsx("div", { className: "flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 mb-2 md:mb-4 group-hover:from-blue-100 group-hover:to-blue-200 transition-colors", children: /* @__PURE__ */ r.jsx("i", { className: `${s.iconpath} text-2xl ` }) }),
                          /* @__PURE__ */ r.jsx("h4", { className: "text-base font-semibold text-gray-800 mb-2 group-hover:text-action transition-colors", children: s?.label || s?.title }),
                          s?.description && /* @__PURE__ */ r.jsx("p", { className: "text-sm text-gray-500 line-clamp-2 mb-3", children: s.description })
                        ]
                      }
                    )
                  },
                  c
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
}, ge = ({ item: n, children: u, isActive: d, isDisabled: f, paddingLeft: l, handleAjax: s }) => {
  const c = f ? "div" : n?.link ? A : "div";
  return /* @__PURE__ */ r.jsxs(
    c,
    {
      to: f || n?.target === "ajax" ? void 0 : n?.link,
      onClick: () => {
        !f && n?.target === "ajax" && s(n?.link);
      },
      className: ({ isActive: p }) => `relative z-10 flex items-center gap-2 px-2 py-1
        ${f ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100 cursor-pointer"}
        ${p || d ? "bg-action text-white" : ""}`,
      style: { paddingLeft: l },
      children: [
        n?.iconpath && /* @__PURE__ */ r.jsx("i", { className: n.iconpath }),
        /* @__PURE__ */ r.jsx("span", { className: "truncate", children: u })
      ]
    }
  );
}, Z = ({ parentItem: n, items: u, hideLabel: d, ancestorBlocked: f = !1 }) => {
  const [l, s] = Y(!1), c = H(), p = Array.isArray(u) ? u : [], x = N(n, f), y = p.some(
    (t) => t?.link === c.pathname || R(t)?.some((o) => o?.link === c.pathname)
  );
  return /* @__PURE__ */ r.jsxs("div", { className: "flex flex-col", children: [
    /* @__PURE__ */ r.jsxs(
      "div",
      {
        className: `flex items-center gap-2 px-2 py-1 cursor-pointer hover:bg-gray-200
          ${x ? "opacity-50 cursor-not-allowed" : ""}
          ${y ? "bg-action text-white" : ""}`,
        onClick: () => {
          x || s(!l);
        },
        children: [
          n?.iconpath && /* @__PURE__ */ r.jsx("i", { className: n.iconpath }),
          !d && /* @__PURE__ */ r.jsx("span", { children: n?.label || n?.title || "" }),
          /* @__PURE__ */ r.jsx("span", { className: "ml-auto", children: l ? "▲" : "▼" })
        ]
      }
    ),
    l && /* @__PURE__ */ r.jsx("div", { className: "flex flex-col pl-4", children: p.map(
      (t, o) => R(t).length ? /* @__PURE__ */ r.jsx(
        Z,
        {
          parentItem: t,
          items: t.children,
          hideLabel: d,
          ancestorBlocked: x
        },
        o
      ) : /* @__PURE__ */ r.jsx(
        ge,
        {
          item: t,
          paddingLeft: 10,
          isDisabled: N(t, x),
          isActive: t?.link === c.pathname,
          children: t?.label || t?.title
        },
        o
      )
    ) })
  ] });
};
function je({ config: n, hideLabel: u = !1, handleAjax: d, treeView: f }) {
  const [l, s] = Y(V()), c = n?.layout || "vertical";
  ue(() => {
    const t = () => s(V());
    return window.addEventListener("resize", t), () => window.removeEventListener("resize", t);
  }, []);
  const x = (G.useMemo(() => {
    const t = n?.items || [];
    if (!f) return t;
    const o = /* @__PURE__ */ new Map(), g = [];
    return t.forEach((m) => {
      const j = m?.category;
      if (!j) {
        g.push({ ...m });
        return;
      }
      o.has(j) || o.set(j, {
        id: `group-${j}`,
        title: j,
        label: j,
        link: "#",
        iconpath: "fa fa-angle-right",
        onmenu: !0,
        device: "*",
        children: [],
        weight: m.weight ?? 0
      });
      const w = o.get(j);
      w.children.push(m), m.weight != null && m.weight < w.weight && (w.weight = m.weight);
    }), [...g, ...o.values()];
  }, [n?.items, f]) || []).filter((t) => {
    if (!t || t.onmenu === !1) return !1;
    const o = t.device;
    return !o || o === "*" ? !0 : Array.isArray(o) ? o.includes(l) : o === l;
  });
  if (c === "tree")
    return /* @__PURE__ */ r.jsx("nav", { className: "navigator flex flex-col gap-1", children: x.map((t, o) => /* @__PURE__ */ r.jsx(X, { item: t }, o)) });
  if (c === "popup")
    return /* @__PURE__ */ r.jsx("nav", { className: "navigator flex flex-col gap-2", children: x.map(
      (t, o) => R(t).length ? /* @__PURE__ */ r.jsx(ve, { item: t }, o) : /* @__PURE__ */ r.jsxs(
        A,
        {
          to: t?.target === "ajax" ? void 0 : t?.link,
          onClick: () => {
            t?.target === "ajax" && d(t?.link);
          },
          className: `flex items-center nav-link gap-2 px-2 py-1 hover:bg-gray-200 ${N(t) ? "opacity-50 pointer-events-none" : ""}`,
          children: [
            t?.iconpath && /* @__PURE__ */ r.jsx("i", { className: t.iconpath }),
            /* @__PURE__ */ r.jsx("span", { children: t?.label || t?.title })
          ]
        },
        o
      )
    ) });
  const y = c === "horizontal" ? "flex-row" : "flex-col";
  return /* @__PURE__ */ r.jsx("nav", { className: `navigator flex ${y} gap-2 text-action`, style: { alignItems: "flex-start" }, children: x.sort((t, o) => (t?.weight || 0) - (o?.weight || 0)).map(
    (t, o) => R(t).length ? /* @__PURE__ */ r.jsx(Z, { parentItem: t, items: t.children, hideLabel: u }, o) : /* @__PURE__ */ r.jsxs(
      A,
      {
        to: t?.target === "ajax" ? void 0 : t?.link,
        onClick: () => {
          t?.target === "ajax" && d(t?.link);
        },
        className: `flex items-center nav-link gap-2 px-2 py-1 hover:bg-gray-200 ${N(t) ? "opacity-50 pointer-events-none" : ""}`,
        children: [
          t?.iconpath && /* @__PURE__ */ r.jsx("i", { className: t.iconpath }),
          !u && /* @__PURE__ */ r.jsx("span", { children: t?.label || t?.title || "" })
        ]
      },
      o
    )
  ) });
}
export {
  je as LogiksNavigator
};
