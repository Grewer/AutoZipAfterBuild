!function (e, n) {
  if ("object" == typeof exports && "object" == typeof module) module.exports = n(); else if ("function" == typeof define && define.amd) define([], n); else {
    var t = n();
    for (var o in t) ("object" == typeof exports ? exports : e)[o] = t[o]
  }
}(window, function () {
  return function (e) {
    var n = {};

    function t(o) {
      if (n[o]) return n[o].exports;
      var r = n[o] = {i: o, l: !1, exports: {}};
      return e[o].call(r.exports, r, r.exports, t), r.l = !0, r.exports
    }

    return t.m = e, t.c = n, t.d = function (e, n, o) {
      t.o(e, n) || Object.defineProperty(e, n, {
        enumerable: !0,
        get: o
      })
    }, t.r = function (e) {"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})}, t.t = function (e, n) {
      if (1 & n && (e = t(e)), 8 & n) return e;
      if (4 & n && "object" == typeof e && e && e.__esModule) return e;
      var o = Object.create(null);
      if (t.r(o), Object.defineProperty(o, "default", {
        enumerable: !0,
        value: e
      }), 2 & n && "string" != typeof e) for (var r in e) t.d(o, r, function (n) {return e[n]}.bind(null, r));
      return o
    }, t.n = function (e) {
      var n = e && e.__esModule ? function () {return e.default} : function () {return e};
      return t.d(n, "a", n), n
    }, t.o = function (e, n) {return Object.prototype.hasOwnProperty.call(e, n)}, t.p = "", t(t.s = 0)
  }([function (e, n, t) {
    "use strict";

    function o(e, n) {
      for (var t = 0; t < n.length; t++) {
        var o = n[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
      }
    }

    t.r(n);
    var r = function () {
      function e(n) {!function (e, n) {if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")}(this, e), console.log(n)}

      return function (e, n, t) {n && o(e.prototype, n), t && o(e, t)}(e, [{
        key: "apply",
        value: function (e) {e.plugin("done", function (e, n) {console.log("处于编译完成的阶段"), n()})}
      }]), e
    }();
    n.default = r
  }])
});