import ae, { useState as U, useEffect as oe } from "react";
import { NavLink as q } from "react-router-dom";
var T = { exports: {} }, R = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var F;
function se() {
  if (F) return R;
  F = 1;
  var l = Symbol.for("react.transitional.element"), v = Symbol.for("react.fragment");
  function d(f, s, n) {
    var u = null;
    if (n !== void 0 && (u = "" + n), s.key !== void 0 && (u = "" + s.key), "key" in s) {
      n = {};
      for (var p in s)
        p !== "key" && (n[p] = s[p]);
    } else n = s;
    return s = n.ref, {
      $$typeof: l,
      type: f,
      key: u,
      ref: s !== void 0 ? s : null,
      props: n
    };
  }
  return R.Fragment = v, R.jsx = d, R.jsxs = d, R;
}
var k = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var M;
function le() {
  return M || (M = 1, process.env.NODE_ENV !== "production" && (function() {
    function l(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === re ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case w:
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
          case J:
            return "Portal";
          case B:
            return (e.displayName || "Context") + ".Provider";
          case X:
            return (e._context.displayName || "Context") + ".Consumer";
          case Z:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case K:
            return r = e.displayName || null, r !== null ? r : l(e.type) || "Memo";
          case P:
            r = e._payload, e = e._init;
            try {
              return l(e(r));
            } catch {
            }
        }
      return null;
    }
    function v(e) {
      return "" + e;
    }
    function d(e) {
      try {
        v(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var a = r.error, c = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          c
        ), v(e);
      }
    }
    function f(e) {
      if (e === w) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === P)
        return "<...>";
      try {
        var r = l(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var e = j.A;
      return e === null ? null : e.getOwner();
    }
    function n() {
      return Error("react-stack-top-frame");
    }
    function u(e) {
      if (C.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function p(e, r) {
      function a() {
        $ || ($ = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      a.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: a,
        configurable: !0
      });
    }
    function t() {
      var e = l(this.type);
      return Y[e] || (Y[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function h(e, r, a, c, m, b, y, O) {
      return a = b.ref, e = {
        $$typeof: S,
        type: e,
        key: r,
        props: b,
        _owner: m
      }, (a !== void 0 ? a : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: t
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
        value: y
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: O
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function E(e, r, a, c, m, b, y, O) {
      var i = r.children;
      if (i !== void 0)
        if (c)
          if (te(i)) {
            for (c = 0; c < i.length; c++)
              x(i[c]);
            Object.freeze && Object.freeze(i);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else x(i);
      if (C.call(r, "key")) {
        i = l(e);
        var g = Object.keys(r).filter(function(ne) {
          return ne !== "key";
        });
        c = 0 < g.length ? "{key: someKey, " + g.join(": ..., ") + ": ...}" : "{key: someKey}", L[i + c] || (g = 0 < g.length ? "{" + g.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          c,
          i,
          g,
          i
        ), L[i + c] = !0);
      }
      if (i = null, a !== void 0 && (d(a), i = "" + a), u(r) && (d(r.key), i = "" + r.key), "key" in r) {
        a = {};
        for (var A in r)
          A !== "key" && (a[A] = r[A]);
      } else a = r;
      return i && p(
        a,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), h(
        e,
        i,
        b,
        m,
        s(),
        a,
        y,
        O
      );
    }
    function x(e) {
      typeof e == "object" && e !== null && e.$$typeof === S && e._store && (e._store.validated = 1);
    }
    var _ = ae, S = Symbol.for("react.transitional.element"), J = Symbol.for("react.portal"), w = Symbol.for("react.fragment"), V = Symbol.for("react.strict_mode"), G = Symbol.for("react.profiler"), X = Symbol.for("react.consumer"), B = Symbol.for("react.context"), Z = Symbol.for("react.forward_ref"), H = Symbol.for("react.suspense"), Q = Symbol.for("react.suspense_list"), K = Symbol.for("react.memo"), P = Symbol.for("react.lazy"), ee = Symbol.for("react.activity"), re = Symbol.for("react.client.reference"), j = _.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, C = Object.prototype.hasOwnProperty, te = Array.isArray, N = console.createTask ? console.createTask : function() {
      return null;
    };
    _ = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var $, Y = {}, D = _.react_stack_bottom_frame.bind(
      _,
      n
    )(), I = N(f(n)), L = {};
    k.Fragment = w, k.jsx = function(e, r, a, c, m) {
      var b = 1e4 > j.recentlyCreatedOwnerStacks++;
      return E(
        e,
        r,
        a,
        !1,
        c,
        m,
        b ? Error("react-stack-top-frame") : D,
        b ? N(f(e)) : I
      );
    }, k.jsxs = function(e, r, a, c, m) {
      var b = 1e4 > j.recentlyCreatedOwnerStacks++;
      return E(
        e,
        r,
        a,
        !0,
        c,
        m,
        b ? Error("react-stack-top-frame") : D,
        b ? N(f(e)) : I
      );
    };
  })()), k;
}
var W;
function ce() {
  return W || (W = 1, process.env.NODE_ENV === "production" ? T.exports = se() : T.exports = le()), T.exports;
}
var o = ce();
function z() {
  return window.innerWidth <= 768 ? "mob" : window.innerWidth <= 1024 ? "tab" : "pc";
}
const ie = ({ parentItem: l, items: v, isHorizontal: d }) => {
  const [f, s] = U(!1);
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
            onClick: () => s(!f),
            children: [
              l?.iconpath && /* @__PURE__ */ o.jsx("i", { className: l.iconpath }),
              /* @__PURE__ */ o.jsx("span", { children: l.label || l.title }),
              /* @__PURE__ */ o.jsx("span", { className: "ml-auto", children: f ? "▲" : "▼" })
            ]
          }
        ),
        /* @__PURE__ */ o.jsx(
          "div",
          {
            className: `absolute z-10 bg-white shadow-md min-w-max ${f ? "block" : "hidden"} ${d ? "left-0 top-full" : "left-full top-0"}`,
            children: /* @__PURE__ */ o.jsx("div", { className: "flex flex-col", children: v.map(
              (n, u) => n.target === "_blank" ? /* @__PURE__ */ o.jsxs(
                "a",
                {
                  href: n.link,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "flex items-center gap-2 px-2 py-1 hover:bg-gray-100",
                  children: [
                    n.iconpath && /* @__PURE__ */ o.jsx("i", { className: n.iconpath }),
                    /* @__PURE__ */ o.jsx("span", { children: n.label || n.title })
                  ]
                },
                u
              ) : /* @__PURE__ */ o.jsxs(
                q,
                {
                  to: n.link,
                  className: ({ isActive: p }) => `flex items-center gap-2 px-2 py-1 hover:bg-gray-100 ${p ? "bg-action text-white" : ""}`,
                  children: [
                    n.iconpath && /* @__PURE__ */ o.jsx("i", { className: n.iconpath }),
                    /* @__PURE__ */ o.jsx("span", { children: n.label || n.title })
                  ]
                },
                u
              )
            ) })
          }
        )
      ]
    }
  );
};
function de({ config: l }) {
  const [v, d] = U(z()), f = l.layout === "horizontal", s = f ? "flex-row" : "flex-col";
  oe(() => {
    const t = () => d(z());
    return window.addEventListener("resize", t), () => window.removeEventListener("resize", t);
  }, []);
  const n = (l.items || []).filter((t) => t.onmenu ? !t.device || t.device === "*" ? !0 : Array.isArray(t.device) ? t.device.includes(v) : t.device === v : !1), u = {}, p = [];
  return n.forEach((t) => {
    t.menugroup && t.menugroup !== "nogroup" ? (u[t.menugroup] || (u[t.menugroup] = []), u[t.menugroup].push(t)) : p.push(t);
  }), /* @__PURE__ */ o.jsx(
    "nav",
    {
      className: `navigator ${l.className || ""} flex ${s} gap-2 text-action`,
      children: p.sort((t, h) => (t.weight || 0) - (h.weight || 0)).map((t, h) => {
        const E = u[t.label || t.title];
        return E && E.length > 0 ? /* @__PURE__ */ o.jsx(
          ie,
          {
            parentItem: t,
            items: E.sort(
              (x, _) => (x.weight || 0) - (_.weight || 0)
            ),
            isHorizontal: f
          },
          h
        ) : t?.target === "_blank" ? /* @__PURE__ */ o.jsxs(
          "a",
          {
            href: t?.link,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "flex items-center gap-2 px-2 py-1 hover:bg-gray-200",
            children: [
              t?.iconpath && /* @__PURE__ */ o.jsx("i", { className: t?.iconpath }),
              /* @__PURE__ */ o.jsx("span", { children: t?.label || t?.title })
            ]
          },
          h
        ) : /* @__PURE__ */ o.jsxs(
          q,
          {
            to: t?.link,
            className: ({ isActive: x }) => `flex items-center gap-2 px-2 py-1 hover:bg-gray-200 ${x ? "bg-action text-white" : ""}`,
            children: [
              t?.iconpath && /* @__PURE__ */ o.jsx("i", { className: t?.iconpath }),
              /* @__PURE__ */ o.jsx("span", { children: t?.label || t?.title })
            ]
          },
          h
        );
      })
    }
  );
}
export {
  de as LogiksNavigator
};
