! function (e) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = e();
    else if ("function" == typeof define && define.amd) define([], e);
    else {
        var t;
        t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, t.Cocoen = e()
    }
}(function () {
    return function e(t, n, i) {
        function s(o, a) {
            if (!n[o]) {
                if (!t[o]) {
                    var l = "function" == typeof require && require;
                    if (!a && l) return l(o, !0);
                    if (r) return r(o, !0);
                    var d = new Error("Cannot find module '" + o + "'");
                    throw d.code = "MODULE_NOT_FOUND", d
                }
                var h = n[o] = {
                    exports: {}
                };
                t[o][0].call(h.exports, function (e) {
                    var n = t[o][1][e];
                    return s(n ? n : e)
                }, h, h.exports, e, t, n, i)
            }
            return n[o].exports
        }
        for (var r = "function" == typeof require && require, o = 0; o < i.length; o++) s(i[o]);
        return s
    }({
        1: [function (e, t, n) {
            "use strict";

            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            var s = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                }
                return e
            },
                r = function () {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function (t, n, i) {
                        return n && e(t.prototype, n), i && e(t, i), t
                    }
                }(),
                o = function () {
                    function e(t, n) {
                        i(this, e), this.options = s({}, e.defaults, n), this.element = t || document.querySelector(".cocoen"), this.init()
                    }
                    return r(e, [{
                        key: "init",
                        value: function () {
                            this.createElements(), this.addEventListeners(), this.dimensions()
                        }
                    }, {
                        key: "createElements",
                        value: function () {
                            var e = document.createElement("span");
                            e.className = this.options.dragElementSelector.replace(".", ""), this.element.appendChild(e);
                            var t = document.createElement("div"),
                                n = this.element.querySelector("img:first-child");
                            t.appendChild(n.cloneNode(!0)), n.parentNode.replaceChild(t, n), this.dragElement = this.element.querySelector(this.options.dragElementSelector), this.beforeElement = this.element.querySelector("div:first-child"), this.beforeImage = this.beforeElement.querySelector("img")
                        }
                    }, {
                        key: "addEventListeners",
                        value: function () {
                            this.element.addEventListener("click", this.onTap.bind(this)), this.element.addEventListener("mousemove", this.onDrag.bind(this)), this.element.addEventListener("touchmove", this.onDrag.bind(this)), this.dragElement.addEventListener("mousedown", this.onDragStart.bind(this)), this.dragElement.addEventListener("touchstart", this.onDragStart.bind(this)), window.addEventListener("mouseup", this.onDragEnd.bind(this)), window.addEventListener("resize", this.dimensions.bind(this))
                        }
                    }, {
                        key: "dimensions",
                        value: function () {
                            this.elementWidth = parseInt(window.getComputedStyle(this.element).width, 10), this.elementOffsetLeft = this.element.getBoundingClientRect().left + document.body.scrollLeft, this.beforeImage.style.width = this.elementWidth + "px", this.dragElementWidth = parseInt(window.getComputedStyle(this.dragElement).width, 10), this.minLeftPos = this.elementOffsetLeft + 10, this.maxLeftPos = this.elementOffsetLeft + this.elementWidth - this.dragElementWidth - 10
                        }
                    }, {
                        key: "onTap",
                        value: function (e) {
                            e.preventDefault(), this.leftPos = e.pageX ? e.pageX : e.touches[0].pageX, this.requestDrag()
                        }
                    }, {
                        key: "onDragStart",
                        value: function (e) {
                            e.preventDefault();
                            var t = e.pageX ? e.pageX : e.touches[0].pageX,
                                n = this.dragElement.getBoundingClientRect().left + document.body.scrollLeft;
                            this.posX = n + this.dragElementWidth - t, this.isDragging = !0
                        }
                    }, {
                        key: "onDragEnd",
                        value: function (e) {
                            e.preventDefault(), this.isDragging = !1
                        }
                    }, {
                        key: "onDrag",
                        value: function (e) {
                            e.preventDefault(), this.isDragging && (this.moveX = e.pageX ? e.pageX : e.touches[0].pageX, this.leftPos = this.moveX + this.posX - this.dragElementWidth, this.requestDrag())
                        }
                    }, {
                        key: "drag",
                        value: function () {
                            this.leftPos < this.minLeftPos ? this.leftPos = this.minLeftPos : this.leftPos > this.maxLeftPos && (this.leftPos = this.maxLeftPos);
                            var e = this.leftPos + this.dragElementWidth / 2 - this.elementOffsetLeft;
                            e /= this.elementWidth;
                            var t = 100 * e + "%";
                            this.dragElement.style.left = t, this.beforeElement.style.width = t, this.options.dragCallback && this.options.dragCallback(e)
                        }
                    }, {
                        key: "requestDrag",
                        value: function () {
                            window.requestAnimationFrame(this.drag.bind(this))
                        }
                    }]), e
                }();
            o.defaults = {
                dragElementSelector: ".cocoen-drag",
                dragCallback: null
            }, t.exports = o
        }, {}]
    }, {}, [1])(1)
});
! function r(n, e, t) {
    function o(i, f) {
        if (!e[i]) {
            if (!n[i]) {
                var c = "function" == typeof require && require;
                if (!f && c) return c(i, !0);
                if (u) return u(i, !0);
                var a = new Error("Cannot find module '" + i + "'");
                throw a.code = "MODULE_NOT_FOUND", a
            }
            var s = e[i] = {
                exports: {}
            };
            n[i][0].call(s.exports, function (r) {
                var e = n[i][1][r];
                return o(e ? e : r)
            }, s, s.exports, r, n, e, t)
        }
        return e[i].exports
    }
    for (var u = "function" == typeof require && require, i = 0; i < t.length; i++) o(t[i]);
    return o
}({
    1: [function (r, n, e) {
        "use strict";
        ! function (r, n) {
            r && n && (r.fn.cocoen = function (e) {
                function t() {
                    return new n(this, r.extend({}, n.defaults, e))
                }
                return this.each(t)
            })
        }(window.jQuery, window.Cocoen)
    }, {}]
}, {}, [1]);