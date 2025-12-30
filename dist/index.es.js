import H, { useState as Y, useEffect as ue } from "react";
import { NavLink as A, useLocation as X } from "react-router-dom";
var C = { exports: {} }, _ = {};
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
  var n = Symbol.for("react.transitional.element"), i = Symbol.for("react.fragment");
  function u(f, l, s) {
    var d = null;
    if (s !== void 0 && (d = "" + s), l.key !== void 0 && (d = "" + l.key), "key" in l) {
      s = {};
      for (var p in l)
        p !== "key" && (s[p] = l[p]);
    } else s = l;
    return l = s.ref, {
      $$typeof: n,
      type: f,
      key: d,
      ref: l !== void 0 ? l : null,
      props: s
    };
  }
  return _.Fragment = i, _.jsx = u, _.jsxs = u, _;
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
var J;
function fe() {
  return J || (J = 1, process.env.NODE_ENV !== "production" && (function() {
    function n(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === le ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case x:
          return "Fragment";
        case K:
          return "Profiler";
        case E:
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
          case O:
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
          case I:
            a = e._payload, e = e._init;
            try {
              return n(e(a));
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
        var a = !1;
      } catch {
        a = !0;
      }
      if (a) {
        a = console;
        var c = a.error, h = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return c.call(
          a,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          h
        ), i(e);
      }
    }
    function f(e) {
      if (e === x) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === I)
        return "<...>";
      try {
        var a = n(e);
        return a ? "<" + a + ">" : "<...>";
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
        var a = Object.getOwnPropertyDescriptor(e, "key").get;
        if (a && a.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function p(e, a) {
      function c() {
        z || (z = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          a
        ));
      }
      c.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: c,
        configurable: !0
      });
    }
    function m() {
      var e = n(this.type);
      return D[e] || (D[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function g(e, a, c, h, y, b, $, L) {
      return c = b.ref, e = {
        $$typeof: k,
        type: e,
        key: a,
        props: b,
        _owner: y
      }, (c !== void 0 ? c : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: m
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
    function j(e, a, c, h, y, b, $, L) {
      var v = a.children;
      if (v !== void 0)
        if (h)
          if (ce(v)) {
            for (h = 0; h < v.length; h++)
              r(v[h]);
            Object.freeze && Object.freeze(v);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else r(v);
      if (M.call(a, "key")) {
        v = n(e);
        var N = Object.keys(a).filter(function(ie) {
          return ie !== "key";
        });
        h = 0 < N.length ? "{key: someKey, " + N.join(": ..., ") + ": ...}" : "{key: someKey}", B[v + h] || (N = 0 < N.length ? "{" + N.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          h,
          v,
          N,
          v
        ), B[v + h] = !0);
      }
      if (v = null, c !== void 0 && (u(c), v = "" + c), d(a) && (u(a.key), v = "" + a.key), "key" in a) {
        c = {};
        for (var W in a)
          W !== "key" && (c[W] = a[W]);
      } else c = a;
      return v && p(
        c,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), g(
        e,
        v,
        b,
        y,
        l(),
        c,
        $,
        L
      );
    }
    function r(e) {
      typeof e == "object" && e !== null && e.$$typeof === k && e._store && (e._store.validated = 1);
    }
    var o = H, k = Symbol.for("react.transitional.element"), O = Symbol.for("react.portal"), x = Symbol.for("react.fragment"), E = Symbol.for("react.strict_mode"), K = Symbol.for("react.profiler"), ee = Symbol.for("react.consumer"), re = Symbol.for("react.context"), te = Symbol.for("react.forward_ref"), ne = Symbol.for("react.suspense"), ae = Symbol.for("react.suspense_list"), oe = Symbol.for("react.memo"), I = Symbol.for("react.lazy"), se = Symbol.for("react.activity"), le = Symbol.for("react.client.reference"), P = o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, M = Object.prototype.hasOwnProperty, ce = Array.isArray, S = console.createTask ? console.createTask : function() {
      return null;
    };
    o = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var z, D = {}, F = o.react_stack_bottom_frame.bind(
      o,
      s
    )(), U = S(f(s)), B = {};
    T.Fragment = x, T.jsx = function(e, a, c, h, y) {
      var b = 1e4 > P.recentlyCreatedOwnerStacks++;
      return j(
        e,
        a,
        c,
        !1,
        h,
        y,
        b ? Error("react-stack-top-frame") : F,
        b ? S(f(e)) : U
      );
    }, T.jsxs = function(e, a, c, h, y) {
      var b = 1e4 > P.recentlyCreatedOwnerStacks++;
      return j(
        e,
        a,
        c,
        !0,
        h,
        y,
        b ? Error("react-stack-top-frame") : F,
        b ? S(f(e)) : U
      );
    };
  })()), T;
}
var V;
function pe() {
  return V || (V = 1, process.env.NODE_ENV === "production" ? C.exports = de() : C.exports = fe()), C.exports;
}
var t = pe();
function G() {
  return typeof window > "u" ? "pc" : window.innerWidth <= 768 ? "mob" : window.innerWidth <= 1024 ? "tab" : "pc";
}
const R = (n) => Array.isArray(n?.children) ? n.children : [], xe = ({ children: n }) => /* @__PURE__ */ t.jsx("div", { className: "select-none pointer-events-none opacity-50", children: n }), w = (n, i = !1) => !!i || !!n?.blocked, Z = ({
  item: n,
  level: i = 0,
  isLast: u = !1,
  ancestorBlocked: f = !1
}) => {
  const l = X(), s = R(n), d = w(n, f), p = n?.link === l.pathname || s.some((r) => r?.link === l.pathname), m = i * 20, g = d ? "div" : n?.link ? A : "div", j = /* @__PURE__ */ t.jsxs(
    g,
    {
      to: d ? void 0 : n?.link,
      className: `relative z-10 flex items-center gap-2 py-1
      ${d ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100 cursor-pointer"}
      ${p ? "bg-gray-200" : ""}`,
      style: { paddingLeft: m },
      children: [
        i > 0 && /* @__PURE__ */ t.jsx(
          "span",
          {
            className: "absolute h-px bg-gray-300 pointer-events-none",
            style: {
              left: m - 10,
              width: 10,
              top: "50%"
            }
          }
        ),
        n?.iconpath && /* @__PURE__ */ t.jsx("i", { className: n.iconpath }),
        /* @__PURE__ */ t.jsx("span", { className: "truncate", children: n?.label || n?.title || "Untitled" })
      ]
    }
  );
  return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
    i > 0 && /* @__PURE__ */ t.jsx(
      "span",
      {
        className: "absolute w-px bg-gray-300 pointer-events-none",
        style: {
          left: m - 10,
          top: 0,
          bottom: u ? "calc(100% - 20px)" : 0
        }
      }
    ),
    d ? /* @__PURE__ */ t.jsx(xe, { children: j }) : j,
    s.map((r, o) => /* @__PURE__ */ t.jsx(
      Z,
      {
        item: r,
        level: i + 1,
        isLast: o === s.length - 1,
        ancestorBlocked: d
      },
      o
    ))
  ] });
}, he = (n = "") => n.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, ""), ve = ({ item: n }) => {
  const [i, u] = Y(!1), f = R(n), l = w(n, !1);
  return /* @__PURE__ */ t.jsxs("div", { className: `relative navbar-popup navbar-popup-${he(n?.label)}`, children: [
    /* @__PURE__ */ t.jsxs(
      "div",
      {
        onClick: () => {
          l || u(!0);
        },
        className: `flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${l ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100 cursor-pointer"}`,
        children: [
          n?.iconpath && /* @__PURE__ */ t.jsx("i", { className: `${n.iconpath} text-gray-600` }),
          /* @__PURE__ */ t.jsx("span", { className: "text-sm font-medium text-gray-700", children: n?.label || n?.title || "" })
        ]
      }
    ),
    i && /* @__PURE__ */ t.jsx(
      "div",
      {
        className: "fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50 p-4",
        onClick: () => u(!1),
        children: /* @__PURE__ */ t.jsxs(
          "div",
          {
            className: "bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[85vh] overflow-hidden flex flex-col",
            onClick: (s) => s.stopPropagation(),
            children: [
              /* @__PURE__ */ t.jsxs("div", { className: "flex items-center justify-between px-3 md:px-6 py-2 md:py-4 border-b border-gray-200 bg-gray-50", children: [
                /* @__PURE__ */ t.jsx("div", { children: /* @__PURE__ */ t.jsx("h3", { className: "text-xl font-semibold text-gray-800", children: n?.label || n?.title }) }),
                /* @__PURE__ */ t.jsx(
                  "button",
                  {
                    onClick: () => u(!1),
                    className: "p-2 rounded-lg cursor-pointer hover:bg-gray-200 transition-colors group",
                    "aria-label": "Close",
                    children: /* @__PURE__ */ t.jsx(
                      "svg",
                      {
                        className: "w-5 h-5 text-gray-600 group-hover:text-gray-800",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: /* @__PURE__ */ t.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" })
                      }
                    )
                  }
                )
              ] }),
              /* @__PURE__ */ t.jsx("div", { className: "overflow-y-auto p-3 md:p-6 bg-gray-50", children: f.length > 0 ? /* @__PURE__ */ t.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-4", children: f.map((s, d) => {
                const p = w(s, l), m = p ? "div" : A;
                return /* @__PURE__ */ t.jsx(
                  m,
                  {
                    to: p ? void 0 : s?.link || "#",
                    className: "group nav-link",
                    onClick: () => u(!1),
                    children: /* @__PURE__ */ t.jsxs(
                      "div",
                      {
                        className: `bg-white border border-gray-200 rounded-lg p-2 md:p-5 hover:shadow-lg transition-all duration-200 h-full flex flex-col justify-center items-center ${p ? "opacity-50 pointer-events-none" : "hover:border-action"}`,
                        children: [
                          s.iconpath && /* @__PURE__ */ t.jsx("div", { className: "flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 mb-2 md:mb-4 group-hover:from-blue-100 group-hover:to-blue-200 transition-colors", children: /* @__PURE__ */ t.jsx("i", { className: `${s.iconpath} text-2xl ` }) }),
                          /* @__PURE__ */ t.jsx("h4", { className: "text-base font-semibold text-gray-800 mb-2 group-hover:text-action transition-colors", children: s?.label || s?.title }),
                          s?.description && /* @__PURE__ */ t.jsx("p", { className: "text-sm text-gray-500 line-clamp-2 mb-3", children: s.description })
                        ]
                      }
                    )
                  },
                  d
                );
              }) }) : /* @__PURE__ */ t.jsxs("div", { className: "flex flex-col items-center justify-center py-16", children: [
                /* @__PURE__ */ t.jsx("div", { className: "w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4", children: /* @__PURE__ */ t.jsx("svg", { className: "w-8 h-8 text-gray-400", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ t.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" }) }) }),
                /* @__PURE__ */ t.jsx("p", { className: "text-gray-500 font-medium", children: "No items available" }),
                /* @__PURE__ */ t.jsx("p", { className: "text-sm text-gray-400 mt-1", children: "Check back later for updates" })
              ] }) })
            ]
          }
        )
      }
    )
  ] });
}, ge = ({ item: n, children: i, isActive: u, isDisabled: f, paddingLeft: l, handleAjax: s }) => {
  const d = f ? "div" : n?.link ? A : "div";
  return /* @__PURE__ */ t.jsxs(
    d,
    {
      to: f || n?.target === "ajax" ? void 0 : n?.link,
      onClick: () => {
        !f && n?.target === "ajax" && s(n?.link);
      },
      className: ({ isActive: p }) => `relative z-10 flex items-center gap-2 px-2 py-1
        ${f ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100 cursor-pointer"}
        ${p || u ? "bg-action text-white" : ""}`,
      style: { paddingLeft: l },
      children: [
        n?.iconpath && /* @__PURE__ */ t.jsx("i", { className: n.iconpath }),
        /* @__PURE__ */ t.jsx("span", { className: "truncate", children: i })
      ]
    }
  );
}, Q = ({ parentItem: n, items: i, hideLabel: u, ancestorBlocked: f = !1, handleAjax: l }) => {
  const [s, d] = Y(!1), p = X(), m = Array.isArray(i) ? i : [], g = w(n, f);
  console.log({ parentItem: n });
  const j = m.some(
    (r) => r?.link === p.pathname || R(r)?.some((o) => o?.link === p.pathname)
  );
  return /* @__PURE__ */ t.jsxs("div", { className: "flex flex-col dropdown", children: [
    /* @__PURE__ */ t.jsxs(
      "div",
      {
        className: `flex items-center gap-2 px-2 py-1 cursor-pointer hover:bg-gray-200 ${s ? "active" : ""}
          ${g ? "opacity-50 cursor-not-allowed" : ""}
          ${j ? "bg-action text-white" : ""}`,
        onClick: () => {
          g || d(!s);
        },
        children: [
          n?.iconpath && /* @__PURE__ */ t.jsx("i", { className: n.iconpath }),
          !u && /* @__PURE__ */ t.jsx("span", { children: n?.label || n?.title || "" }),
          /* @__PURE__ */ t.jsx("span", { className: "ml-auto", children: /* @__PURE__ */ t.jsx(
            "i",
            {
              className: `fa-solid ${s ? "fa-chevron-up" : "fa-chevron-down"}`,
              "aria-hidden": "true"
            }
          ) })
        ]
      }
    ),
    s && /* @__PURE__ */ t.jsx("div", { className: "flex flex-col pl-4", children: m.map(
      (r, o) => R(r).length ? /* @__PURE__ */ t.jsx(
        Q,
        {
          parentItem: r,
          items: r.children,
          hideLabel: u,
          ancestorBlocked: g,
          handleAjax: l
        },
        o
      ) : /* @__PURE__ */ t.jsx(
        ge,
        {
          item: r,
          paddingLeft: 10,
          isDisabled: w(r, g),
          handleAjax: l,
          isActive: r?.link === p.pathname,
          children: r?.label || r?.title
        },
        o
      )
    ) })
  ] });
};
function je({ config: n, hideLabel: i = !1, handleAjax: u, treeView: f }) {
  const [l, s] = Y(G()), d = n?.layout || "vertical";
  ue(() => {
    const r = () => s(G());
    return window.addEventListener("resize", r), () => window.removeEventListener("resize", r);
  }, []);
  const p = (r) => {
    if (!r) return "fa fa-angle-right";
    const o = r.trim();
    return /^(fa|fas|far|fab|fa-solid|fa-regular|fa-brands)\s/.test(o) ? o : `fa-solid ${o.replace(/^fa-/, "")}`;
  }, g = (H.useMemo(() => {
    const r = n?.items || [];
    if (!f) return r;
    const o = /* @__PURE__ */ new Map(), k = [];
    r.forEach((x) => {
      o.set(x.title, {
        ...x,
        iconpath: p(x.iconpath),
        children: []
      });
    }), r.forEach((x) => {
      if (x.category) {
        const E = o.get(x.category);
        E && E.children.push(o.get(x.title));
      }
    }), r.forEach((x) => {
      x.category || k.push(o.get(x.title));
    });
    const O = (x, E) => (x.weight ?? 0) - (E.weight ?? 0);
    return k.forEach((x) => x.children.sort(O)), k.sort(O), k;
  }, [n?.items, f]) || []).filter((r) => {
    if (!r || r.onmenu === !1) return !1;
    const o = r.device;
    return !o || o === "*" ? !0 : Array.isArray(o) ? o.includes(l) : o === l;
  });
  if (d === "tree")
    return /* @__PURE__ */ t.jsx("nav", { className: "navigator flex flex-col gap-1", children: g.map((r, o) => /* @__PURE__ */ t.jsx(Z, { item: r }, o)) });
  if (d === "popup")
    return /* @__PURE__ */ t.jsx("nav", { className: "navigator flex flex-col gap-2", children: g.map(
      (r, o) => R(r).length ? /* @__PURE__ */ t.jsx(ve, { item: r }, o) : /* @__PURE__ */ t.jsxs(
        A,
        {
          to: r?.target === "ajax" ? void 0 : r?.link,
          onClick: () => {
            r?.target === "ajax" && u(r?.link);
          },
          className: `flex items-center nav-link gap-2 px-2 py-1 hover:bg-gray-200 ${w(r) ? "opacity-50 pointer-events-none" : ""}`,
          children: [
            r?.iconpath && /* @__PURE__ */ t.jsx("i", { className: r.iconpath }),
            /* @__PURE__ */ t.jsx("span", { children: r?.label || r?.title })
          ]
        },
        o
      )
    ) });
  const j = d === "horizontal" ? "flex-row" : "flex-col";
  return /* @__PURE__ */ t.jsx("nav", { className: `navigator flex ${j} gap-2 text-action`, style: { alignItems: "flex-start" }, children: g.sort((r, o) => (r?.weight || 0) - (o?.weight || 0)).map(
    (r, o) => R(r).length ? /* @__PURE__ */ t.jsx(Q, { parentItem: r, items: r.children, hideLabel: i, handleAjax: u }, o) : /* @__PURE__ */ t.jsxs(
      A,
      {
        to: r?.target === "ajax" ? void 0 : r?.link,
        onClick: () => {
          r?.target === "ajax" && u(r?.link);
        },
        className: `flex items-center nav-link gap-2 px-2 py-1 hover:bg-gray-200 ${w(r) ? "opacity-50 pointer-events-none" : ""}`,
        children: [
          r?.iconpath && /* @__PURE__ */ t.jsx("i", { className: r.iconpath }),
          !i && /* @__PURE__ */ t.jsx("span", { children: r?.label || r?.title || "" })
        ]
      },
      o
    )
  ) });
}
export {
  je as LogiksNavigator
};
