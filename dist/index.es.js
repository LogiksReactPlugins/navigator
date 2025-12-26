import H, { useState as W, useEffect as ue } from "react";
import { NavLink as O, useLocation as X } from "react-router-dom";
var C = { exports: {} }, T = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var B;
function de() {
  if (B) return T;
  B = 1;
  var t = Symbol.for("react.transitional.element"), i = Symbol.for("react.fragment");
  function u(f, l, s) {
    var d = null;
    if (s !== void 0 && (d = "" + s), l.key !== void 0 && (d = "" + l.key), "key" in l) {
      s = {};
      for (var p in l)
        p !== "key" && (s[p] = l[p]);
    } else s = l;
    return l = s.ref, {
      $$typeof: t,
      type: f,
      key: d,
      ref: l !== void 0 ? l : null,
      props: s
    };
  }
  return T.Fragment = i, T.jsx = u, T.jsxs = u, T;
}
var A = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var J;
function fe() {
  return J || (J = 1, process.env.NODE_ENV !== "production" && (function() {
    function t(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === le ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case b:
          return "Fragment";
        case K:
          return "Profiler";
        case _:
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
          case m:
            return "Portal";
          case re:
            return (e.displayName || "Context") + ".Provider";
          case ee:
            return (e._context.displayName || "Context") + ".Consumer";
          case te:
            var o = e.render;
            return e = e.displayName, e || (e = o.displayName || o.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case oe:
            return o = e.displayName || null, o !== null ? o : t(e.type) || "Memo";
          case I:
            o = e._payload, e = e._init;
            try {
              return t(e(o));
            } catch {
            }
        }
      return null;
    }
    function i(e) {
      return "" + e;
    }
    function u(e) {
      try {
        i(e);
        var o = !1;
      } catch {
        o = !0;
      }
      if (o) {
        o = console;
        var c = o.error, x = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return c.call(
          o,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          x
        ), i(e);
      }
    }
    function f(e) {
      if (e === b) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === I)
        return "<...>";
      try {
        var o = t(e);
        return o ? "<" + o + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function l() {
      var e = P.A;
      return e === null ? null : e.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function d(e) {
      if (M.call(e, "key")) {
        var o = Object.getOwnPropertyDescriptor(e, "key").get;
        if (o && o.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function p(e, o) {
      function c() {
        D || (D = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          o
        ));
      }
      c.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: c,
        configurable: !0
      });
    }
    function g() {
      var e = t(this.type);
      return z[e] || (z[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function j(e, o, c, x, k, y, $, L) {
      return c = y.ref, e = {
        $$typeof: R,
        type: e,
        key: o,
        props: y,
        _owner: k
      }, (c !== void 0 ? c : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: g
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
        value: $
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: L
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function n(e, o, c, x, k, y, $, L) {
      var h = o.children;
      if (h !== void 0)
        if (x)
          if (ce(h)) {
            for (x = 0; x < h.length; x++)
              a(h[x]);
            Object.freeze && Object.freeze(h);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else a(h);
      if (M.call(o, "key")) {
        h = t(e);
        var E = Object.keys(o).filter(function(ie) {
          return ie !== "key";
        });
        x = 0 < E.length ? "{key: someKey, " + E.join(": ..., ") + ": ...}" : "{key: someKey}", q[h + x] || (E = 0 < E.length ? "{" + E.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          x,
          h,
          E,
          h
        ), q[h + x] = !0);
      }
      if (h = null, c !== void 0 && (u(c), h = "" + c), d(o) && (u(o.key), h = "" + o.key), "key" in o) {
        c = {};
        for (var Y in o)
          Y !== "key" && (c[Y] = o[Y]);
      } else c = o;
      return h && p(
        c,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), j(
        e,
        h,
        y,
        k,
        l(),
        c,
        $,
        L
      );
    }
    function a(e) {
      typeof e == "object" && e !== null && e.$$typeof === R && e._store && (e._store.validated = 1);
    }
    var v = H, R = Symbol.for("react.transitional.element"), m = Symbol.for("react.portal"), b = Symbol.for("react.fragment"), _ = Symbol.for("react.strict_mode"), K = Symbol.for("react.profiler"), ee = Symbol.for("react.consumer"), re = Symbol.for("react.context"), te = Symbol.for("react.forward_ref"), ne = Symbol.for("react.suspense"), ae = Symbol.for("react.suspense_list"), oe = Symbol.for("react.memo"), I = Symbol.for("react.lazy"), se = Symbol.for("react.activity"), le = Symbol.for("react.client.reference"), P = v.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, M = Object.prototype.hasOwnProperty, ce = Array.isArray, S = console.createTask ? console.createTask : function() {
      return null;
    };
    v = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var D, z = {}, F = v.react_stack_bottom_frame.bind(
      v,
      s
    )(), U = S(f(s)), q = {};
    A.Fragment = b, A.jsx = function(e, o, c, x, k) {
      var y = 1e4 > P.recentlyCreatedOwnerStacks++;
      return n(
        e,
        o,
        c,
        !1,
        x,
        k,
        y ? Error("react-stack-top-frame") : F,
        y ? S(f(e)) : U
      );
    }, A.jsxs = function(e, o, c, x, k) {
      var y = 1e4 > P.recentlyCreatedOwnerStacks++;
      return n(
        e,
        o,
        c,
        !0,
        x,
        k,
        y ? Error("react-stack-top-frame") : F,
        y ? S(f(e)) : U
      );
    };
  })()), A;
}
var V;
function pe() {
  return V || (V = 1, process.env.NODE_ENV === "production" ? C.exports = de() : C.exports = fe()), C.exports;
}
var r = pe();
function G() {
  return typeof window > "u" ? "pc" : window.innerWidth <= 768 ? "mob" : window.innerWidth <= 1024 ? "tab" : "pc";
}
const N = (t) => Array.isArray(t?.children) ? t.children : [], xe = ({ children: t }) => /* @__PURE__ */ r.jsx("div", { className: "select-none pointer-events-none opacity-50", children: t }), w = (t, i = !1) => !!i || !!t?.blocked, Z = ({
  item: t,
  level: i = 0,
  isLast: u = !1,
  ancestorBlocked: f = !1
}) => {
  const l = X(), s = N(t), d = w(t, f), p = t?.link === l.pathname || s.some((a) => a?.link === l.pathname), g = i * 20, j = d ? "div" : t?.link ? O : "div", n = /* @__PURE__ */ r.jsxs(
    j,
    {
      to: d ? void 0 : t?.link,
      className: `relative z-10 flex items-center gap-2 py-1
      ${d ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100 cursor-pointer"}
      ${p ? "bg-gray-200" : ""}`,
      style: { paddingLeft: g },
      children: [
        i > 0 && /* @__PURE__ */ r.jsx(
          "span",
          {
            className: "absolute h-px bg-gray-300 pointer-events-none",
            style: {
              left: g - 10,
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
          left: g - 10,
          top: 0,
          bottom: u ? "calc(100% - 20px)" : 0
        }
      }
    ),
    d ? /* @__PURE__ */ r.jsx(xe, { children: n }) : n,
    s.map((a, v) => /* @__PURE__ */ r.jsx(
      Z,
      {
        item: a,
        level: i + 1,
        isLast: v === s.length - 1,
        ancestorBlocked: d
      },
      v
    ))
  ] });
}, he = (t = "") => t.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, ""), ve = ({ item: t }) => {
  const [i, u] = W(!1), f = N(t), l = w(t, !1);
  return /* @__PURE__ */ r.jsxs("div", { className: `relative navbar-popup navbar-popup-${he(t?.label)}`, children: [
    /* @__PURE__ */ r.jsxs(
      "div",
      {
        onClick: () => {
          l || u(!0);
        },
        className: `flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${l ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100 cursor-pointer"}`,
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
        onClick: () => u(!1),
        children: /* @__PURE__ */ r.jsxs(
          "div",
          {
            className: "bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[85vh] overflow-hidden flex flex-col",
            onClick: (s) => s.stopPropagation(),
            children: [
              /* @__PURE__ */ r.jsxs("div", { className: "flex items-center justify-between px-3 md:px-6 py-2 md:py-4 border-b border-gray-200 bg-gray-50", children: [
                /* @__PURE__ */ r.jsx("div", { children: /* @__PURE__ */ r.jsx("h3", { className: "text-xl font-semibold text-gray-800", children: t?.label || t?.title }) }),
                /* @__PURE__ */ r.jsx(
                  "button",
                  {
                    onClick: () => u(!1),
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
              /* @__PURE__ */ r.jsx("div", { className: "overflow-y-auto p-3 md:p-6 bg-gray-50", children: f.length > 0 ? /* @__PURE__ */ r.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-4", children: f.map((s, d) => {
                const p = w(s, l), g = p ? "div" : O;
                return /* @__PURE__ */ r.jsx(
                  g,
                  {
                    to: p ? void 0 : s?.link || "#",
                    className: "group nav-link",
                    onClick: () => u(!1),
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
                  d
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
}, ge = ({ item: t, children: i, isActive: u, isDisabled: f, paddingLeft: l, handleAjax: s }) => {
  const d = f ? "div" : t?.link ? O : "div";
  return /* @__PURE__ */ r.jsxs(
    d,
    {
      to: f || t?.target === "ajax" ? void 0 : t?.link,
      onClick: () => {
        !f && t?.target === "ajax" && s(t?.link);
      },
      className: ({ isActive: p }) => `relative z-10 flex items-center gap-2 px-2 py-1
        ${f ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100 cursor-pointer"}
        ${p || u ? "bg-action text-white" : ""}`,
      style: { paddingLeft: l },
      children: [
        t?.iconpath && /* @__PURE__ */ r.jsx("i", { className: t.iconpath }),
        /* @__PURE__ */ r.jsx("span", { className: "truncate", children: i })
      ]
    }
  );
}, Q = ({ parentItem: t, items: i, hideLabel: u, ancestorBlocked: f = !1, handleAjax: l }) => {
  const [s, d] = W(!1), p = X(), g = Array.isArray(i) ? i : [], j = w(t, f), n = g.some(
    (a) => a?.link === p.pathname || N(a)?.some((v) => v?.link === p.pathname)
  );
  return /* @__PURE__ */ r.jsxs("div", { className: "flex flex-col dropdown", children: [
    /* @__PURE__ */ r.jsxs(
      "div",
      {
        className: `flex items-center gap-2 px-2 py-1 cursor-pointer hover:bg-gray-200
          ${j ? "opacity-50 cursor-not-allowed" : ""}
          ${n ? "bg-action text-white" : ""}`,
        onClick: () => {
          j || d(!s);
        },
        children: [
          t?.iconpath && /* @__PURE__ */ r.jsx("i", { className: t.iconpath }),
          !u && /* @__PURE__ */ r.jsx("span", { children: t?.label || t?.title || "" }),
          /* @__PURE__ */ r.jsx("span", { className: "ml-auto", children: s ? "▲" : "▼" })
        ]
      }
    ),
    s && /* @__PURE__ */ r.jsx("div", { className: "flex flex-col pl-4", children: g.map(
      (a, v) => N(a).length ? /* @__PURE__ */ r.jsx(
        Q,
        {
          parentItem: a,
          items: a.children,
          hideLabel: u,
          ancestorBlocked: j,
          handleAjax: l
        },
        v
      ) : /* @__PURE__ */ r.jsx(
        ge,
        {
          item: a,
          paddingLeft: 10,
          isDisabled: w(a, j),
          handleAjax: l,
          isActive: a?.link === p.pathname,
          children: a?.label || a?.title
        },
        v
      )
    ) })
  ] });
};
function je({ config: t, hideLabel: i = !1, handleAjax: u, treeView: f }) {
  const [l, s] = W(G()), d = t?.layout || "vertical";
  ue(() => {
    const n = () => s(G());
    return window.addEventListener("resize", n), () => window.removeEventListener("resize", n);
  }, []);
  const g = (H.useMemo(() => {
    const n = t?.items || [];
    if (!f) return n;
    const a = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Set(), R = [];
    return n.forEach((m) => {
      const b = m?.category;
      if (!b) return;
      a.has(b) || a.set(b, {
        id: `group-${b}`,
        title: b,
        label: b,
        link: "#",
        iconpath: "fa fa-angle-right",
        onmenu: !0,
        device: "*",
        children: [],
        weight: m.weight ?? 0
      });
      const _ = a.get(b);
      _.children.push(m), v.add(b), m.weight != null && m.weight < _.weight && (_.weight = m.weight);
    }), n.forEach((m) => {
      !m?.category && !v.has(m.title) && R.push({ ...m });
    }), [...R, ...a.values()];
  }, [t?.items, f]) || []).filter((n) => {
    if (!n || n.onmenu === !1) return !1;
    const a = n.device;
    return !a || a === "*" ? !0 : Array.isArray(a) ? a.includes(l) : a === l;
  });
  if (d === "tree")
    return /* @__PURE__ */ r.jsx("nav", { className: "navigator flex flex-col gap-1", children: g.map((n, a) => /* @__PURE__ */ r.jsx(Z, { item: n }, a)) });
  if (d === "popup")
    return /* @__PURE__ */ r.jsx("nav", { className: "navigator flex flex-col gap-2", children: g.map(
      (n, a) => N(n).length ? /* @__PURE__ */ r.jsx(ve, { item: n }, a) : /* @__PURE__ */ r.jsxs(
        O,
        {
          to: n?.target === "ajax" ? void 0 : n?.link,
          onClick: () => {
            n?.target === "ajax" && u(n?.link);
          },
          className: `flex items-center nav-link gap-2 px-2 py-1 hover:bg-gray-200 ${w(n) ? "opacity-50 pointer-events-none" : ""}`,
          children: [
            n?.iconpath && /* @__PURE__ */ r.jsx("i", { className: n.iconpath }),
            /* @__PURE__ */ r.jsx("span", { children: n?.label || n?.title })
          ]
        },
        a
      )
    ) });
  const j = d === "horizontal" ? "flex-row" : "flex-col";
  return /* @__PURE__ */ r.jsx("nav", { className: `navigator flex ${j} gap-2 text-action`, style: { alignItems: "flex-start" }, children: g.sort((n, a) => (n?.weight || 0) - (a?.weight || 0)).map(
    (n, a) => N(n).length ? /* @__PURE__ */ r.jsx(Q, { parentItem: n, items: n.children, hideLabel: i, handleAjax: u }, a) : /* @__PURE__ */ r.jsxs(
      O,
      {
        to: n?.target === "ajax" ? void 0 : n?.link,
        onClick: () => {
          n?.target === "ajax" && u(n?.link);
        },
        className: `flex items-center nav-link gap-2 px-2 py-1 hover:bg-gray-200 ${w(n) ? "opacity-50 pointer-events-none" : ""}`,
        children: [
          n?.iconpath && /* @__PURE__ */ r.jsx("i", { className: n.iconpath }),
          !i && /* @__PURE__ */ r.jsx("span", { children: n?.label || n?.title || "" })
        ]
      },
      a
    )
  ) });
}
export {
  je as LogiksNavigator
};
