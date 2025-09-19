import oe, { useState as q, useEffect as se } from "react";
import { useLocation as le, NavLink as V } from "react-router-dom";
var j = { exports: {} }, w = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var W;
function ce() {
  if (W) return w;
  W = 1;
  var o = Symbol.for("react.transitional.element"), b = Symbol.for("react.fragment");
  function f(p, s, l) {
    var c = null;
    if (l !== void 0 && (c = "" + l), s.key !== void 0 && (c = "" + s.key), "key" in s) {
      l = {};
      for (var d in s)
        d !== "key" && (l[d] = s[d]);
    } else l = s;
    return s = l.ref, {
      $$typeof: o,
      type: p,
      key: c,
      ref: s !== void 0 ? s : null,
      props: l
    };
  }
  return w.Fragment = b, w.jsx = f, w.jsxs = f, w;
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
var z;
function ie() {
  return z || (z = 1, process.env.NODE_ENV !== "production" && (function() {
    function o(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === ne ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case x:
          return "Fragment";
        case X:
          return "Profiler";
        case N:
          return "StrictMode";
        case Q:
          return "Suspense";
        case K:
          return "SuspenseList";
        case re:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case y:
            return "Portal";
          case Z:
            return (e.displayName || "Context") + ".Provider";
          case B:
            return (e._context.displayName || "Context") + ".Consumer";
          case H:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case ee:
            return r = e.displayName || null, r !== null ? r : o(e.type) || "Memo";
          case $:
            r = e._payload, e = e._init;
            try {
              return o(e(r));
            } catch {
            }
        }
      return null;
    }
    function b(e) {
      return "" + e;
    }
    function f(e) {
      try {
        b(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var a = r.error, i = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          i
        ), b(e);
      }
    }
    function p(e) {
      if (e === x) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === $)
        return "<...>";
      try {
        var r = o(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var e = A.A;
      return e === null ? null : e.getOwner();
    }
    function l() {
      return Error("react-stack-top-frame");
    }
    function c(e) {
      if (Y.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function d(e, r) {
      function a() {
        D || (D = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      a.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: a,
        configurable: !0
      });
    }
    function v() {
      var e = o(this.type);
      return F[e] || (F[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function _(e, r, a, i, g, m, S, P) {
      return a = m.ref, e = {
        $$typeof: k,
        type: e,
        key: r,
        props: m,
        _owner: g
      }, (a !== void 0 ? a : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: v
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
        value: P
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function n(e, r, a, i, g, m, S, P) {
      var u = r.children;
      if (u !== void 0)
        if (i)
          if (te(u)) {
            for (i = 0; i < u.length; i++)
              h(u[i]);
            Object.freeze && Object.freeze(u);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else h(u);
      if (Y.call(r, "key")) {
        u = o(e);
        var R = Object.keys(r).filter(function(ae) {
          return ae !== "key";
        });
        i = 0 < R.length ? "{key: someKey, " + R.join(": ..., ") + ": ...}" : "{key: someKey}", M[u + i] || (R = 0 < R.length ? "{" + R.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          i,
          u,
          R,
          u
        ), M[u + i] = !0);
      }
      if (u = null, a !== void 0 && (f(a), u = "" + a), c(r) && (f(r.key), u = "" + r.key), "key" in r) {
        a = {};
        for (var C in r)
          C !== "key" && (a[C] = r[C]);
      } else a = r;
      return u && d(
        a,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), _(
        e,
        u,
        m,
        g,
        s(),
        a,
        S,
        P
      );
    }
    function h(e) {
      typeof e == "object" && e !== null && e.$$typeof === k && e._store && (e._store.validated = 1);
    }
    var E = oe, k = Symbol.for("react.transitional.element"), y = Symbol.for("react.portal"), x = Symbol.for("react.fragment"), N = Symbol.for("react.strict_mode"), X = Symbol.for("react.profiler"), B = Symbol.for("react.consumer"), Z = Symbol.for("react.context"), H = Symbol.for("react.forward_ref"), Q = Symbol.for("react.suspense"), K = Symbol.for("react.suspense_list"), ee = Symbol.for("react.memo"), $ = Symbol.for("react.lazy"), re = Symbol.for("react.activity"), ne = Symbol.for("react.client.reference"), A = E.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Y = Object.prototype.hasOwnProperty, te = Array.isArray, O = console.createTask ? console.createTask : function() {
      return null;
    };
    E = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var D, F = {}, I = E.react_stack_bottom_frame.bind(
      E,
      l
    )(), L = O(p(l)), M = {};
    T.Fragment = x, T.jsx = function(e, r, a, i, g) {
      var m = 1e4 > A.recentlyCreatedOwnerStacks++;
      return n(
        e,
        r,
        a,
        !1,
        i,
        g,
        m ? Error("react-stack-top-frame") : I,
        m ? O(p(e)) : L
      );
    }, T.jsxs = function(e, r, a, i, g) {
      var m = 1e4 > A.recentlyCreatedOwnerStacks++;
      return n(
        e,
        r,
        a,
        !0,
        i,
        g,
        m ? Error("react-stack-top-frame") : I,
        m ? O(p(e)) : L
      );
    };
  })()), T;
}
var U;
function ue() {
  return U || (U = 1, process.env.NODE_ENV === "production" ? j.exports = ce() : j.exports = ie()), j.exports;
}
var t = ue();
function J() {
  return window.innerWidth <= 768 ? "mob" : window.innerWidth <= 1024 ? "tab" : "pc";
}
const G = ({ children: o }) => /* @__PURE__ */ t.jsx("div", { className: "flex items-center gap-2 px-2 py-1 opacity-50 cursor-not-allowed", children: o }), fe = ({ parentItem: o, items: b, isHorizontal: f, hideLabel: p }) => {
  const [s, l] = q(!1);
  return /* @__PURE__ */ t.jsxs(
    "div",
    {
      className: `relative ${f ? "inline-block" : "w-full"}`,
      onMouseEnter: () => l(!0),
      onMouseLeave: () => l(!1),
      children: [
        /* @__PURE__ */ t.jsxs(
          "div",
          {
            className: `flex items-center gap-2 px-2 py-1 cursor-pointer hover:bg-gray-200 ${f ? "inline-flex" : "w-full"}`,
            onClick: () => l(!s),
            children: [
              o?.iconpath && /* @__PURE__ */ t.jsx("i", { className: o?.iconpath }),
              !p && /* @__PURE__ */ t.jsx("span", { children: o?.label || o?.title }),
              /* @__PURE__ */ t.jsx("span", { className: "ml-auto", children: s ? "▲" : "▼" })
            ]
          }
        ),
        /* @__PURE__ */ t.jsx(
          "div",
          {
            className: `absolute z-10 bg-white shadow-md min-w-max ${s ? "block" : "hidden"} ${f ? "left-0 top-full" : "left-full top-0"} nav-dropdown`,
            children: /* @__PURE__ */ t.jsx("div", { className: "flex flex-col", children: b.map((c, d) => {
              const v = /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
                c?.iconpath && /* @__PURE__ */ t.jsx("i", { className: c?.iconpath }),
                !p && /* @__PURE__ */ t.jsx("span", { children: c?.label || c?.title })
              ] });
              return c?.blocked ? /* @__PURE__ */ t.jsx(G, { children: v }, d) : c?.target === "_blank" ? /* @__PURE__ */ t.jsx(
                "a",
                {
                  href: c?.link,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "flex items-center gap-2 px-2 py-1 hover:bg-gray-100 nav-link",
                  children: v
                },
                d
              ) : /* @__PURE__ */ t.jsx(
                V,
                {
                  to: c?.link,
                  className: ({ isActive: _ }) => `flex items-center gap-2 px-2 py-1 hover:bg-gray-100 ${_ ? "bg-action text-white link-active" : ""}`,
                  children: v
                },
                d
              );
            }) })
          }
        )
      ]
    }
  );
};
function ve({ navJson: o, hideLabel: b = !1 }) {
  const [f, p] = q(J()), s = o?.layout === "horizontal", l = s ? "flex-row" : "flex-col", c = le();
  se(() => {
    const n = () => p(J());
    return window.addEventListener("resize", n), () => window.removeEventListener("resize", n);
  }, []);
  const d = (o?.items || []).filter((n) => n.onmenu === !1 ? !1 : !n?.device || n?.device === "*" ? !0 : Array.isArray(n?.device) ? n?.device.includes(f) : n?.device === f), v = {}, _ = [];
  return d.forEach((n) => {
    n?.menugroup && n?.menugroup !== "nogroup" ? (v[n?.menugroup] || (v[n?.menugroup] = []), v[n?.menugroup].push(n)) : _.push(n);
  }), /* @__PURE__ */ t.jsx(
    "nav",
    {
      className: `navigator ${o?.className || ""} flex ${l} gap-2 text-action`,
      children: _.sort((n, h) => (n.weight || 0) - (h.weight || 0)).map((n, h) => {
        const E = v[n?.label || n?.title], k = /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
          n?.iconpath && /* @__PURE__ */ t.jsx("i", { className: n?.iconpath }),
          !b && /* @__PURE__ */ t.jsx("span", { children: n?.label || n?.title })
        ] });
        if (E && E.length > 0)
          return /* @__PURE__ */ t.jsx(
            fe,
            {
              parentItem: n,
              items: E.sort(
                (x, N) => (x.weight || 0) - (N.weight || 0)
              ),
              isHorizontal: s,
              hideLabel: b
            },
            h
          );
        if (n?.blocked)
          return /* @__PURE__ */ t.jsx(G, { children: k }, h);
        const y = n?.link && c.pathname === n?.link;
        return n?.target === "_blank" ? /* @__PURE__ */ t.jsx(
          "a",
          {
            href: n?.link,
            target: "_blank",
            rel: "noopener noreferrer",
            className: `flex items-center gap-2 px-2 py-1 hover:bg-gray-200 ${y ? "bg-action text-white link-active" : ""} nav-link`,
            children: k
          },
          h
        ) : /* @__PURE__ */ t.jsx(
          V,
          {
            to: n?.link,
            className: ({ isActive: x }) => `flex items-center gap-2 px-2 py-1 hover:bg-gray-200 ${x ? "bg-action text-white link-active" : ""} nav-link`,
            children: k
          },
          h
        );
      })
    }
  );
}
export {
  ve as LogiksNavigator
};
