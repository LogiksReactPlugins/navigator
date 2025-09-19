import ae, { useState as q, useEffect as oe } from "react";
import { useLocation as se, NavLink as J } from "react-router-dom";
var T = { exports: {} }, k = {};
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
  if (M) return k;
  M = 1;
  var l = Symbol.for("react.transitional.element"), b = Symbol.for("react.fragment");
  function d(u, s, t) {
    var p = null;
    if (t !== void 0 && (p = "" + t), s.key !== void 0 && (p = "" + s.key), "key" in s) {
      t = {};
      for (var f in s)
        f !== "key" && (t[f] = s[f]);
    } else t = s;
    return s = t.ref, {
      $$typeof: l,
      type: u,
      key: p,
      ref: s !== void 0 ? s : null,
      props: t
    };
  }
  return k.Fragment = b, k.jsx = d, k.jsxs = d, k;
}
var R = {};
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
        case N:
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
          case j:
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
    function b(e) {
      return "" + e;
    }
    function d(e) {
      try {
        b(e);
        var n = !1;
      } catch {
        n = !0;
      }
      if (n) {
        n = console;
        var a = n.error, c = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a.call(
          n,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          c
        ), b(e);
      }
    }
    function u(e) {
      if (e === N) return "<>";
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
    function t() {
      return Error("react-stack-top-frame");
    }
    function p(e) {
      if ($.call(e, "key")) {
        var n = Object.getOwnPropertyDescriptor(e, "key").get;
        if (n && n.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function f(e, n) {
      function a() {
        Y || (Y = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          n
        ));
      }
      a.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: a,
        configurable: !0
      });
    }
    function w() {
      var e = l(this.type);
      return L[e] || (L[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function r(e, n, a, c, m, v, O, S) {
      return a = v.ref, e = {
        $$typeof: g,
        type: e,
        key: n,
        props: v,
        _owner: m
      }, (a !== void 0 ? a : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: w
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
    function h(e, n, a, c, m, v, O, S) {
      var i = n.children;
      if (i !== void 0)
        if (c)
          if (ne(i)) {
            for (c = 0; c < i.length; c++)
              E(i[c]);
            Object.freeze && Object.freeze(i);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else E(i);
      if ($.call(n, "key")) {
        i = l(e);
        var _ = Object.keys(n).filter(function(te) {
          return te !== "key";
        });
        c = 0 < _.length ? "{key: someKey, " + _.join(": ..., ") + ": ...}" : "{key: someKey}", F[i + c] || (_ = 0 < _.length ? "{" + _.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          c,
          i,
          _,
          i
        ), F[i + c] = !0);
      }
      if (i = null, a !== void 0 && (d(a), i = "" + a), p(n) && (d(n.key), i = "" + n.key), "key" in n) {
        a = {};
        for (var P in n)
          P !== "key" && (a[P] = n[P]);
      } else a = n;
      return i && f(
        a,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), r(
        e,
        i,
        v,
        m,
        s(),
        a,
        O,
        S
      );
    }
    function E(e) {
      typeof e == "object" && e !== null && e.$$typeof === g && e._store && (e._store.validated = 1);
    }
    var x = ae, g = Symbol.for("react.transitional.element"), j = Symbol.for("react.portal"), N = Symbol.for("react.fragment"), V = Symbol.for("react.strict_mode"), G = Symbol.for("react.profiler"), X = Symbol.for("react.consumer"), B = Symbol.for("react.context"), Z = Symbol.for("react.forward_ref"), H = Symbol.for("react.suspense"), Q = Symbol.for("react.suspense_list"), K = Symbol.for("react.memo"), C = Symbol.for("react.lazy"), ee = Symbol.for("react.activity"), re = Symbol.for("react.client.reference"), y = x.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, $ = Object.prototype.hasOwnProperty, ne = Array.isArray, A = console.createTask ? console.createTask : function() {
      return null;
    };
    x = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var Y, L = {}, D = x.react_stack_bottom_frame.bind(
      x,
      t
    )(), I = A(u(t)), F = {};
    R.Fragment = N, R.jsx = function(e, n, a, c, m) {
      var v = 1e4 > y.recentlyCreatedOwnerStacks++;
      return h(
        e,
        n,
        a,
        !1,
        c,
        m,
        v ? Error("react-stack-top-frame") : D,
        v ? A(u(e)) : I
      );
    }, R.jsxs = function(e, n, a, c, m) {
      var v = 1e4 > y.recentlyCreatedOwnerStacks++;
      return h(
        e,
        n,
        a,
        !0,
        c,
        m,
        v ? Error("react-stack-top-frame") : D,
        v ? A(u(e)) : I
      );
    };
  })()), R;
}
var z;
function ie() {
  return z || (z = 1, process.env.NODE_ENV === "production" ? T.exports = le() : T.exports = ce()), T.exports;
}
var o = ie();
function U() {
  return window.innerWidth <= 768 ? "mob" : window.innerWidth <= 1024 ? "tab" : "pc";
}
const ue = ({ parentItem: l, items: b, isHorizontal: d }) => {
  const [u, s] = q(!1);
  return /* @__PURE__ */ o.jsxs(
    "div",
    {
      className: `relative ${d ? "inline-block" : "w-full"}`,
      onMouseEnter: () => s(!0),
      onMouseLeave: () => s(!1),
      children: [
        /* @__PURE__ */ o.jsxs(
          "div",
          {
            className: `flex items-center gap-2 px-2 py-1 cursor-pointer hover:bg-gray-200 ${d ? "inline-flex" : "w-full"}`,
            onClick: () => s(!u),
            children: [
              l?.iconpath && /* @__PURE__ */ o.jsx("i", { className: l.iconpath }),
              /* @__PURE__ */ o.jsx("span", { children: l.label || l.title }),
              /* @__PURE__ */ o.jsx("span", { className: "ml-auto", children: u ? "▲" : "▼" })
            ]
          }
        ),
        /* @__PURE__ */ o.jsx(
          "div",
          {
            className: `absolute z-10 bg-white shadow-md min-w-max ${u ? "block" : "hidden"} ${d ? "left-0 top-full" : "left-full top-0"} nav-dropdown`,
            children: /* @__PURE__ */ o.jsx("div", { className: "flex flex-col", children: b.map(
              (t, p) => t.target === "_blank" ? /* @__PURE__ */ o.jsxs(
                "a",
                {
                  href: t.link,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "flex items-center gap-2 px-2 py-1 hover:bg-gray-100 nav-link",
                  children: [
                    t.iconpath && /* @__PURE__ */ o.jsx("i", { className: t.iconpath }),
                    /* @__PURE__ */ o.jsx("span", { children: t.label || t.title })
                  ]
                },
                p
              ) : /* @__PURE__ */ o.jsxs(
                J,
                {
                  to: t.link,
                  className: ({ isActive: f }) => `flex items-center gap-2 px-2 py-1 hover:bg-gray-100 ${f ? "bg-action text-white  link-active" : ""}`,
                  children: [
                    t.iconpath && /* @__PURE__ */ o.jsx("i", { className: t.iconpath }),
                    /* @__PURE__ */ o.jsx("span", { children: t.label || t.title })
                  ]
                },
                p
              )
            ) })
          }
        )
      ]
    }
  );
};
function pe({ config: l }) {
  const [b, d] = q(U()), u = l?.layout === "horizontal", s = u ? "flex-row" : "flex-col", t = se();
  oe(() => {
    const r = () => d(U());
    return window.addEventListener("resize", r), () => window.removeEventListener("resize", r);
  }, []);
  const p = (l.items || []).filter((r) => r.onmenu ? !r.device || r.device === "*" ? !0 : Array.isArray(r.device) ? r.device.includes(b) : r.device === b : !1), f = {}, w = [];
  return p.forEach((r) => {
    r.menugroup && r.menugroup !== "nogroup" ? (f[r.menugroup] || (f[r.menugroup] = []), f[r.menugroup].push(r)) : w.push(r);
  }), /* @__PURE__ */ o.jsx(
    "nav",
    {
      className: `navigator ${l?.className || ""} flex ${s} gap-2 text-action`,
      children: w.sort((r, h) => (r.weight || 0) - (h.weight || 0)).map((r, h) => {
        const E = f[r.label || r.title];
        if (E && E.length > 0)
          return /* @__PURE__ */ o.jsx(
            ue,
            {
              parentItem: r,
              items: E.sort(
                (g, j) => (g.weight || 0) - (j.weight || 0)
              ),
              isHorizontal: u
            },
            h
          );
        const x = r.link && t.pathname === r.link;
        return r?.target === "_blank" ? /* @__PURE__ */ o.jsxs(
          "a",
          {
            href: r?.link,
            target: "_blank",
            rel: "noopener noreferrer",
            className: `flex items-center gap-2 px-2 py-1 hover:bg-gray-200 ${x ? "bg-action text-white  link-active" : ""} nav-link`,
            children: [
              r?.iconpath && /* @__PURE__ */ o.jsx("i", { className: r?.iconpath }),
              /* @__PURE__ */ o.jsx("span", { children: r?.label || r?.title })
            ]
          },
          h
        ) : /* @__PURE__ */ o.jsxs(
          J,
          {
            to: r?.link,
            className: ({ isActive: g }) => `flex items-center gap-2 px-2 py-1 hover:bg-gray-200 ${g ? "bg-action text-white link-active" : ""} nav-link`,
            children: [
              r?.iconpath && /* @__PURE__ */ o.jsx("i", { className: r?.iconpath }),
              /* @__PURE__ */ o.jsx("span", { children: r?.label || r?.title })
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
