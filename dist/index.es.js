import ae, { useState as J, useEffect as oe } from "react";
import { useLocation as se, NavLink as q } from "react-router-dom";
var N = { exports: {} }, R = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var M;
function le() {
  if (M) return R;
  M = 1;
  var l = Symbol.for("react.transitional.element"), p = Symbol.for("react.fragment");
  function f(d, s, c) {
    var o = null;
    if (c !== void 0 && (o = "" + c), s.key !== void 0 && (o = "" + s.key), "key" in s) {
      c = {};
      for (var v in s)
        v !== "key" && (c[v] = s[v]);
    } else c = s;
    return s = c.ref, {
      $$typeof: l,
      type: d,
      key: o,
      ref: s !== void 0 ? s : null,
      props: c
    };
  }
  return R.Fragment = p, R.jsx = f, R.jsxs = f, R;
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
var W;
function ce() {
  return W || (W = 1, process.env.NODE_ENV !== "production" && (function() {
    function l(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === re ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case k:
          return "Fragment";
        case G:
          return "Profiler";
        case V:
          return "StrictMode";
        case H:
          return "Suspense";
        case Q:
          return "SuspenseList";
        case ee:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case _:
            return "Portal";
          case B:
            return (e.displayName || "Context") + ".Provider";
          case X:
            return (e._context.displayName || "Context") + ".Consumer";
          case Z:
            var n = e.render;
            return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case K:
            return n = e.displayName || null, n !== null ? n : l(e.type) || "Memo";
          case C:
            n = e._payload, e = e._init;
            try {
              return l(e(n));
            } catch {
            }
        }
      return null;
    }
    function p(e) {
      return "" + e;
    }
    function f(e) {
      try {
        p(e);
        var n = !1;
      } catch {
        n = !0;
      }
      if (n) {
        n = console;
        var t = n.error, i = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t.call(
          n,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          i
        ), p(e);
      }
    }
    function d(e) {
      if (e === k) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === C)
        return "<...>";
      try {
        var n = l(e);
        return n ? "<" + n + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var e = y.A;
      return e === null ? null : e.getOwner();
    }
    function c() {
      return Error("react-stack-top-frame");
    }
    function o(e) {
      if ($.call(e, "key")) {
        var n = Object.getOwnPropertyDescriptor(e, "key").get;
        if (n && n.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function v(e, n) {
      function t() {
        Y || (Y = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          n
        ));
      }
      t.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: t,
        configurable: !0
      });
    }
    function m() {
      var e = l(this.type);
      return D[e] || (D[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function T(e, n, t, i, x, b, O, S) {
      return t = b.ref, e = {
        $$typeof: j,
        type: e,
        key: n,
        props: b,
        _owner: x
      }, (t !== void 0 ? t : null) !== null ? Object.defineProperty(e, "ref", {
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
        value: O
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: S
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function r(e, n, t, i, x, b, O, S) {
      var u = n.children;
      if (u !== void 0)
        if (i)
          if (ne(u)) {
            for (i = 0; i < u.length; i++)
              h(u[i]);
            Object.freeze && Object.freeze(u);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else h(u);
      if ($.call(n, "key")) {
        u = l(e);
        var g = Object.keys(n).filter(function(te) {
          return te !== "key";
        });
        i = 0 < g.length ? "{key: someKey, " + g.join(": ..., ") + ": ...}" : "{key: someKey}", L[u + i] || (g = 0 < g.length ? "{" + g.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          i,
          u,
          g,
          u
        ), L[u + i] = !0);
      }
      if (u = null, t !== void 0 && (f(t), u = "" + t), o(n) && (f(n.key), u = "" + n.key), "key" in n) {
        t = {};
        for (var P in n)
          P !== "key" && (t[P] = n[P]);
      } else t = n;
      return u && v(
        t,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), T(
        e,
        u,
        b,
        x,
        s(),
        t,
        O,
        S
      );
    }
    function h(e) {
      typeof e == "object" && e !== null && e.$$typeof === j && e._store && (e._store.validated = 1);
    }
    var E = ae, j = Symbol.for("react.transitional.element"), _ = Symbol.for("react.portal"), k = Symbol.for("react.fragment"), V = Symbol.for("react.strict_mode"), G = Symbol.for("react.profiler"), X = Symbol.for("react.consumer"), B = Symbol.for("react.context"), Z = Symbol.for("react.forward_ref"), H = Symbol.for("react.suspense"), Q = Symbol.for("react.suspense_list"), K = Symbol.for("react.memo"), C = Symbol.for("react.lazy"), ee = Symbol.for("react.activity"), re = Symbol.for("react.client.reference"), y = E.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, $ = Object.prototype.hasOwnProperty, ne = Array.isArray, A = console.createTask ? console.createTask : function() {
      return null;
    };
    E = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var Y, D = {}, I = E.react_stack_bottom_frame.bind(
      E,
      c
    )(), F = A(d(c)), L = {};
    w.Fragment = k, w.jsx = function(e, n, t, i, x) {
      var b = 1e4 > y.recentlyCreatedOwnerStacks++;
      return r(
        e,
        n,
        t,
        !1,
        i,
        x,
        b ? Error("react-stack-top-frame") : I,
        b ? A(d(e)) : F
      );
    }, w.jsxs = function(e, n, t, i, x) {
      var b = 1e4 > y.recentlyCreatedOwnerStacks++;
      return r(
        e,
        n,
        t,
        !0,
        i,
        x,
        b ? Error("react-stack-top-frame") : I,
        b ? A(d(e)) : F
      );
    };
  })()), w;
}
var z;
function ie() {
  return z || (z = 1, process.env.NODE_ENV === "production" ? N.exports = le() : N.exports = ce()), N.exports;
}
var a = ie();
function U() {
  return window.innerWidth <= 768 ? "mob" : window.innerWidth <= 1024 ? "tab" : "pc";
}
const ue = ({ parentItem: l, items: p, isHorizontal: f, hideLabel: d }) => {
  const [s, c] = J(!1);
  return /* @__PURE__ */ a.jsxs(
    "div",
    {
      className: `relative ${f ? "inline-block" : "w-full"}`,
      onMouseEnter: () => c(!0),
      onMouseLeave: () => c(!1),
      children: [
        /* @__PURE__ */ a.jsxs(
          "div",
          {
            className: `flex items-center gap-2 px-2 py-1 cursor-pointer hover:bg-gray-200 ${f ? "inline-flex" : "w-full"}`,
            onClick: () => c(!s),
            children: [
              l?.iconpath && /* @__PURE__ */ a.jsx("i", { className: l?.iconpath }),
              !d && /* @__PURE__ */ a.jsx("span", { children: l?.label || l?.title }),
              /* @__PURE__ */ a.jsx("span", { className: "ml-auto", children: s ? "▲" : "▼" })
            ]
          }
        ),
        /* @__PURE__ */ a.jsx(
          "div",
          {
            className: `absolute z-10 bg-white shadow-md min-w-max ${s ? "block" : "hidden"} ${f ? "left-0 top-full" : "left-full top-0"} nav-dropdown`,
            children: /* @__PURE__ */ a.jsx("div", { className: "flex flex-col", children: p.map(
              (o, v) => o?.target === "_blank" ? /* @__PURE__ */ a.jsxs(
                "a",
                {
                  href: o?.link,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "flex items-center gap-2 px-2 py-1 hover:bg-gray-100 nav-link",
                  children: [
                    o?.iconpath && /* @__PURE__ */ a.jsx("i", { className: o?.iconpath }),
                    !d && /* @__PURE__ */ a.jsx("span", { children: o?.label || o?.title })
                  ]
                },
                v
              ) : /* @__PURE__ */ a.jsxs(
                q,
                {
                  to: o?.link,
                  className: ({ isActive: m }) => `flex items-center gap-2 px-2 py-1 hover:bg-gray-100 ${m ? "bg-action text-white  link-active" : ""}`,
                  children: [
                    o?.iconpath && /* @__PURE__ */ a.jsx("i", { className: o?.iconpath }),
                    !d && /* @__PURE__ */ a.jsx("span", { children: o?.label || o?.title })
                  ]
                },
                v
              )
            ) })
          }
        )
      ]
    }
  );
};
function pe({ navJson: l, hideLabel: p = !1 }) {
  const [f, d] = J(U()), s = l?.layout === "horizontal", c = s ? "flex-row" : "flex-col", o = se();
  oe(() => {
    const r = () => d(U());
    return window.addEventListener("resize", r), () => window.removeEventListener("resize", r);
  }, []);
  const v = (l?.items || []).filter((r) => r?.onmenu ? !r?.device || r?.device === "*" ? !0 : Array.isArray(r?.device) ? r?.device.includes(f) : r?.device === f : !1), m = {}, T = [];
  return v.forEach((r) => {
    r?.menugroup && r?.menugroup !== "nogroup" ? (m[r?.menugroup] || (m[r?.menugroup] = []), m[r?.menugroup].push(r)) : T.push(r);
  }), /* @__PURE__ */ a.jsx(
    "nav",
    {
      className: `navigator ${l?.className || ""} flex ${c} gap-2 text-action`,
      children: T.sort((r, h) => (r.weight || 0) - (h.weight || 0)).map((r, h) => {
        const E = m[r?.label || r?.title];
        if (E && E.length > 0)
          return /* @__PURE__ */ a.jsx(
            ue,
            {
              parentItem: r,
              items: E.sort(
                (_, k) => (_.weight || 0) - (k.weight || 0)
              ),
              isHorizontal: s,
              hideLabel: p
            },
            h
          );
        const j = r?.link && o.pathname === r?.link;
        return r?.target === "_blank" ? /* @__PURE__ */ a.jsxs(
          "a",
          {
            href: r?.link,
            target: "_blank",
            rel: "noopener noreferrer",
            className: `flex items-center gap-2 px-2 py-1 hover:bg-gray-200 ${j ? "bg-action text-white  link-active" : ""} nav-link`,
            children: [
              r?.iconpath && /* @__PURE__ */ a.jsx("i", { className: r?.iconpath }),
              !p && /* @__PURE__ */ a.jsx("span", { children: r?.label || r?.title })
            ]
          },
          h
        ) : /* @__PURE__ */ a.jsxs(
          q,
          {
            to: r?.link,
            className: ({ isActive: _ }) => `flex items-center gap-2 px-2 py-1 hover:bg-gray-200 ${_ ? "bg-action text-white link-active" : ""} nav-link`,
            children: [
              r?.iconpath && /* @__PURE__ */ a.jsx("i", { className: r?.iconpath }),
              !p && /* @__PURE__ */ a.jsx("span", { children: r?.label || r?.title })
            ]
          },
          h
        );
      })
    }
  );
}
export {
  pe as LogiksNavigator
};
