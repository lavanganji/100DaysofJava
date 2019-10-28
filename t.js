/*

	SCRIPT CREDITS

	- Particles: github.com/VincentGarreau/particles.js
	- Imagesloaded: Imagesloaded.desandro.com
	- Isotope: isotope.metafizzy.co
	- Infinite Scrolling: infinite-scroll.com
	- Fitvid: fitvidsjs.com

*/
function launchParticlesJS(t, e) {
    function i() {
        pJS.fn.canvasInit(), pJS.fn.canvasSize(), pJS.fn.canvasPaint(), pJS.fn.particlesCreate(), pJS.fn.particlesDraw()
    }

    function n() {
        pJS.fn.particlesDraw(), requestAnimFrame(n)
    }
    pJS = {
        canvas: {
            el: document.querySelector("#" + t + " > canvas"),
            w: document.querySelector("#" + t + " > canvas").offsetWidth,
            h: document.querySelector("#" + t + " > canvas").offsetHeight
        },
        particles: {
            color: "#fff",
            shape: "circle",
            opacity: 1,
            size: 2.5,
            size_random: !0,
            nb: 200,
            line_linked: {
                enable_auto: !0,
                distance: 100,
                color: "#fff",
                opacity: 1,
                width: 1,
                condensed_mode: {
                    enable: !0,
                    rotateX: 65e3,
                    rotateY: 65e3
                }
            },
            anim: {
                enable: !0,
                speed: 1
            },
            array: []
        },
        interactivity: {
            enable: !0,
            mouse: {
                distance: 100
            },
            detect_on: "canvas",
            mode: "grab"
        },
        retina_detect: !1,
        fn: {
            vendors: {
                interactivity: {}
            }
        }
    }, e && (e.particles && (e.particles.color && (pJS.particles.color = e.particles.color), e.particles.shape && (pJS.particles.shape = e.particles.shape), e.particles.opacity && (pJS.particles.opacity = e.particles.opacity), e.particles.size && (pJS.particles.size = e.particles.size), 0 == e.particles.size_random && (pJS.particles.size_random = e.particles.size_random), e.particles.nb && (pJS.particles.nb = e.particles.nb), e.particles.line_linked && (0 == e.particles.line_linked.enable_auto && (pJS.particles.line_linked.enable_auto = e.particles.line_linked.enable_auto), e.particles.line_linked.distance && (pJS.particles.line_linked.distance = e.particles.line_linked.distance), e.particles.line_linked.color && (pJS.particles.line_linked.color = e.particles.line_linked.color), e.particles.line_linked.opacity && (pJS.particles.line_linked.opacity = e.particles.line_linked.opacity), e.particles.line_linked.width && (pJS.particles.line_linked.width = e.particles.line_linked.width), e.particles.line_linked.condensed_mode && (0 == e.particles.line_linked.condensed_mode.enable && (pJS.particles.line_linked.condensed_mode.enable = e.particles.line_linked.condensed_mode.enable), e.particles.line_linked.condensed_mode.rotateX && (pJS.particles.line_linked.condensed_mode.rotateX = e.particles.line_linked.condensed_mode.rotateX), e.particles.line_linked.condensed_mode.rotateY && (pJS.particles.line_linked.condensed_mode.rotateY = e.particles.line_linked.condensed_mode.rotateY))), e.particles.anim && (0 == e.particles.anim.enable && (pJS.particles.anim.enable = e.particles.anim.enable), e.particles.anim.speed && (pJS.particles.anim.speed = e.particles.anim.speed))), e.interactivity && (0 == e.interactivity.enable && (pJS.interactivity.enable = e.interactivity.enable), e.interactivity.mouse && e.interactivity.mouse.distance && (pJS.interactivity.mouse.distance = e.interactivity.mouse.distance), e.interactivity.mode && (pJS.interactivity.mode = e.interactivity.mode), e.interactivity.detect_on && (pJS.interactivity.detect_on = e.interactivity.detect_on)), pJS.retina_detect = e.retina_detect), pJS.particles.color_rgb = hexToRgb(pJS.particles.color), pJS.particles.line_linked.color_rgb_line = hexToRgb(pJS.particles.line_linked.color), pJS.retina_detect && window.devicePixelRatio > 1 && (pJS.retina = !0, pJS.canvas.w = 2 * pJS.canvas.el.offsetWidth, pJS.canvas.h = 2 * pJS.canvas.el.offsetHeight, pJS.particles.anim.speed = 2 * pJS.particles.anim.speed, pJS.particles.line_linked.distance = 2 * pJS.particles.line_linked.distance, pJS.particles.line_linked.width = 2 * pJS.particles.line_linked.width, pJS.interactivity.mouse.distance = 2 * pJS.interactivity.mouse.distance), pJS.fn.canvasInit = function() {
        pJS.canvas.ctx = pJS.canvas.el.getContext("2d")
    }, pJS.fn.canvasSize = function() {
        pJS.canvas.el.width = pJS.canvas.w, pJS.canvas.el.height = pJS.canvas.h, window.onresize = function() {
            pJS.retina ? (pJS.canvas.w = 2 * pJS.canvas.el.offsetWidth, pJS.canvas.h = 2 * pJS.canvas.el.offsetHeight) : (pJS.canvas.w = pJS.canvas.el.offsetWidth, pJS.canvas.h = pJS.canvas.el.offsetHeight), pJS.canvas.el.width = pJS.canvas.w, pJS.canvas.el.height = pJS.canvas.h, pJS.fn.canvasPaint(), pJS.particles.anim.enable || (pJS.fn.particlesRemove(), pJS.fn.canvasRemove(), i())
        }
    }, pJS.fn.canvasPaint = function() {
        pJS.canvas.ctx.fillRect(0, 0, pJS.canvas.w, pJS.canvas.h)
    }, pJS.fn.canvasRemove = function() {
        pJS.canvas.ctx.clearRect(0, 0, pJS.canvas.w, pJS.canvas.h)
    }, pJS.fn.particle = function(t, e) {
        this.x = Math.random() * pJS.canvas.w, this.y = Math.random() * pJS.canvas.h, this.radius = pJS.retina ? pJS.particles.size_random ? Math.random() * pJS.particles.size * 2 : 2 * pJS.particles.size : pJS.particles.size_random ? Math.random() * pJS.particles.size * 1 : 1 * pJS.particles.size, this.color = t, this.opacity = e, this.vx = -.5 + Math.random(), this.vy = -.5 + Math.random(), this.draw = function() {
            switch (pJS.canvas.ctx.fillStyle = "rgba(" + this.color.r + "," + this.color.g + "," + this.color.b + "," + this.opacity + ")", pJS.canvas.ctx.beginPath(), pJS.particles.shape) {
                case "circle":
                    pJS.canvas.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, !1);
                    break;
                case "edge":
                    pJS.canvas.ctx.rect(this.x, this.y, 2 * this.radius, 2 * this.radius);
                    break;
                case "triangle":
                    pJS.canvas.ctx.moveTo(this.x, this.y), pJS.canvas.ctx.lineTo(this.x + this.radius, this.y + 2 * this.radius), pJS.canvas.ctx.lineTo(this.x - this.radius, this.y + 2 * this.radius), pJS.canvas.ctx.closePath()
            }
            pJS.canvas.ctx.fill()
        }
    }, pJS.fn.particlesCreate = function() {
        for (var t = 0; t < pJS.particles.nb; t++) pJS.particles.array.push(new pJS.fn.particle(pJS.particles.color_rgb, pJS.particles.opacity))
    }, pJS.fn.particlesAnimate = function() {
        for (var t = 0; t < pJS.particles.array.length; t++) {
            var e = pJS.particles.array[t];
            e.x += e.vx * (pJS.particles.anim.speed / 2), e.y += e.vy * (pJS.particles.anim.speed / 2), e.x - e.radius > pJS.canvas.w ? e.x = e.radius : e.x + e.radius < 0 && (e.x = pJS.canvas.w + e.radius), e.y - e.radius > pJS.canvas.h ? e.y = e.radius : e.y + e.radius < 0 && (e.y = pJS.canvas.h + e.radius);
            for (var i = t + 1; i < pJS.particles.array.length; i++) {
                var n = pJS.particles.array[i];
                if (pJS.particles.line_linked.enable_auto && pJS.fn.vendors.distanceParticles(e, n), pJS.interactivity.enable) switch (pJS.interactivity.mode) {
                    case "grab":
                        pJS.fn.vendors.interactivity.grabParticles(e, n)
                }
            }
        }
    }, pJS.fn.particlesDraw = function() {
        pJS.canvas.ctx.clearRect(0, 0, pJS.canvas.w, pJS.canvas.h), pJS.fn.particlesAnimate();
        for (var t = 0; t < pJS.particles.array.length; t++) {
            var e = pJS.particles.array[t];
            e.draw("rgba(" + e.color.r + "," + e.color.g + "," + e.color.b + "," + e.opacity + ")")
        }
    }, pJS.fn.particlesRemove = function() {
        pJS.particles.array = []
    }, pJS.fn.vendors.distanceParticles = function(t, e) {
        var i = t.x - e.x,
            n = t.y - e.y,
            o = Math.sqrt(i * i + n * n);
        if (o <= pJS.particles.line_linked.distance) {
            var r = pJS.particles.line_linked.color_rgb_line;
            if (pJS.canvas.ctx.beginPath(), pJS.canvas.ctx.strokeStyle = "rgba(" + r.r + "," + r.g + "," + r.b + "," + (pJS.particles.line_linked.opacity - o / pJS.particles.line_linked.distance) + ")", pJS.canvas.ctx.moveTo(t.x, t.y), pJS.canvas.ctx.lineTo(e.x, e.y), pJS.canvas.ctx.lineWidth = pJS.particles.line_linked.width, pJS.canvas.ctx.stroke(), pJS.canvas.ctx.closePath(), pJS.particles.line_linked.condensed_mode.enable) {
                var i = t.x - e.x;
                n = t.y - e.y;
                var s = i / (1e3 * pJS.particles.line_linked.condensed_mode.rotateX),
                    a = n / (1e3 * pJS.particles.line_linked.condensed_mode.rotateY);
                e.vx += s, e.vy += a
            }
        }
    }, pJS.fn.vendors.interactivity.listeners = function() {
        if ("window" == pJS.interactivity.detect_on) var t = window;
        else var t = pJS.canvas.el;
        t.onmousemove = function(t) {
            pJS.retina ? (pJS.interactivity.mouse.pos_x = 2 * t.pageX, pJS.interactivity.mouse.pos_y = 2 * t.pageY) : (pJS.interactivity.mouse.pos_x = t.pageX, pJS.interactivity.mouse.pos_y = t.pageY), pJS.interactivity.status = "mousemove"
        }, t.onmouseleave = function() {
            pJS.interactivity.mouse.pos_x = 0, pJS.interactivity.mouse.pos_y = 0, pJS.interactivity.status = "mouseleave"
        }
    }, pJS.fn.vendors.interactivity.grabParticles = function(t, e) {
        var i = t.x - e.x,
            n = t.y - e.y,
            o = Math.sqrt(i * i + n * n),
            r = t.x - pJS.interactivity.mouse.pos_x,
            s = t.y - pJS.interactivity.mouse.pos_y,
            a = Math.sqrt(r * r + s * s);
        if (o <= pJS.particles.line_linked.distance && a <= pJS.interactivity.mouse.distance && "mousemove" == pJS.interactivity.status) {
            var c = pJS.particles.line_linked.color_rgb_line;
            pJS.canvas.ctx.beginPath(), pJS.canvas.ctx.strokeStyle = "rgba(" + c.r + "," + c.g + "," + c.b + "," + (pJS.particles.line_linked.opacity - a / pJS.interactivity.mouse.distance) + ")", pJS.canvas.ctx.moveTo(t.x, t.y), pJS.canvas.ctx.lineTo(pJS.interactivity.mouse.pos_x, pJS.interactivity.mouse.pos_y), pJS.canvas.ctx.lineWidth = pJS.particles.line_linked.width, pJS.canvas.ctx.stroke(), pJS.canvas.ctx.closePath()
        }
    }, i(), pJS.particles.anim.enable && n(), pJS.interactivity.enable && pJS.fn.vendors.interactivity.listeners()
}

function hexToRgb(t) {
    var e = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    t = t.replace(e, function(t, e, i, n) {
        return e + e + i + i + n + n
    });
    var i = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
    return i ? {
        r: parseInt(i[1], 16),
        g: parseInt(i[2], 16),
        b: parseInt(i[3], 16)
    } : null
}! function(t) {
    function e() {}

    function i(t) {
        function i(e) {
            e.prototype.option || (e.prototype.option = function(e) {
                t.isPlainObject(e) && (this.options = t.extend(!0, this.options, e))
            })
        }

        function o(e, i) {
            t.fn[e] = function(o) {
                if ("string" == typeof o) {
                    for (var s = n.call(arguments, 1), a = 0, c = this.length; c > a; a++) {
                        var l = this[a],
                            p = t.data(l, e);
                        if (p)
                            if (t.isFunction(p[o]) && "_" !== o.charAt(0)) {
                                var u = p[o].apply(p, s);
                                if (void 0 !== u) return u
                            } else r("no such method '" + o + "' for " + e + " instance");
                        else r("cannot call methods on " + e + " prior to initialization; attempted to call '" + o + "'")
                    }
                    return this
                }
                return this.each(function() {
                    var n = t.data(this, e);
                    n ? (n.option(o), n._init()) : (n = new i(this, o), t.data(this, e, n))
                })
            }
        }
        if (t) {
            var r = "undefined" == typeof console ? e : function(t) {
                console.error(t)
            };
            return t.bridget = function(t, e) {
                i(e), o(t, e)
            }, t.bridget
        }
    }
    var n = Array.prototype.slice;
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], i) : i("object" == typeof exports ? require("jquery") : t.jQuery)
}(window),
function(t) {
    function e(e) {
        var i = t.event;
        return i.target = i.target || i.srcElement || e, i
    }
    var i = document.documentElement,
        n = function() {};
    i.addEventListener ? n = function(t, e, i) {
        t.addEventListener(e, i, !1)
    } : i.attachEvent && (n = function(t, i, n) {
        t[i + n] = n.handleEvent ? function() {
            var i = e(t);
            n.handleEvent.call(n, i)
        } : function() {
            var i = e(t);
            n.call(t, i)
        }, t.attachEvent("on" + i, t[i + n])
    });
    var o = function() {};
    i.removeEventListener ? o = function(t, e, i) {
        t.removeEventListener(e, i, !1)
    } : i.detachEvent && (o = function(t, e, i) {
        t.detachEvent("on" + e, t[e + i]);
        try {
            delete t[e + i]
        } catch (n) {
            t[e + i] = void 0
        }
    });
    var r = {
        bind: n,
        unbind: o
    };
    "function" == typeof define && define.amd ? define("eventie/eventie", r) : "object" == typeof exports ? module.exports = r : t.eventie = r
}(this),
function(t) {
    function e(t) {
        "function" == typeof t && (e.isReady ? t() : s.push(t))
    }

    function i(t) {
        var i = "readystatechange" === t.type && "complete" !== r.readyState;
        e.isReady || i || n()
    }

    function n() {
        e.isReady = !0;
        for (var t = 0, i = s.length; i > t; t++) {
            var n = s[t];
            n()
        }
    }

    function o(o) {
        return "complete" === r.readyState ? n() : (o.bind(r, "DOMContentLoaded", i), o.bind(r, "readystatechange", i), o.bind(t, "load", i)), e
    }
    var r = t.document,
        s = [];
    e.isReady = !1, "function" == typeof define && define.amd ? define("doc-ready/doc-ready", ["eventie/eventie"], o) : "object" == typeof exports ? module.exports = o(require("eventie")) : t.docReady = o(t.eventie)
}(window),
function() {
    function t() {}

    function e(t, e) {
        for (var i = t.length; i--;)
            if (t[i].listener === e) return i;
        return -1
    }

    function i(t) {
        return function() {
            return this[t].apply(this, arguments)
        }
    }
    var n = t.prototype,
        o = this,
        r = o.EventEmitter;
    n.getListeners = function(t) {
        var e, i, n = this._getEvents();
        if (t instanceof RegExp) {
            e = {};
            for (i in n) n.hasOwnProperty(i) && t.test(i) && (e[i] = n[i])
        } else e = n[t] || (n[t] = []);
        return e
    }, n.flattenListeners = function(t) {
        var e, i = [];
        for (e = 0; t.length > e; e += 1) i.push(t[e].listener);
        return i
    }, n.getListenersAsObject = function(t) {
        var e, i = this.getListeners(t);
        return i instanceof Array && (e = {}, e[t] = i), e || i
    }, n.addListener = function(t, i) {
        var n, o = this.getListenersAsObject(t),
            r = "object" == typeof i;
        for (n in o) o.hasOwnProperty(n) && -1 === e(o[n], i) && o[n].push(r ? i : {
            listener: i,
            once: !1
        });
        return this
    }, n.on = i("addListener"), n.addOnceListener = function(t, e) {
        return this.addListener(t, {
            listener: e,
            once: !0
        })
    }, n.once = i("addOnceListener"), n.defineEvent = function(t) {
        return this.getListeners(t), this
    }, n.defineEvents = function(t) {
        for (var e = 0; t.length > e; e += 1) this.defineEvent(t[e]);
        return this
    }, n.removeListener = function(t, i) {
        var n, o, r = this.getListenersAsObject(t);
        for (o in r) r.hasOwnProperty(o) && (n = e(r[o], i), -1 !== n && r[o].splice(n, 1));
        return this
    }, n.off = i("removeListener"), n.addListeners = function(t, e) {
        return this.manipulateListeners(!1, t, e)
    }, n.removeListeners = function(t, e) {
        return this.manipulateListeners(!0, t, e)
    }, n.manipulateListeners = function(t, e, i) {
        var n, o, r = t ? this.removeListener : this.addListener,
            s = t ? this.removeListeners : this.addListeners;
        if ("object" != typeof e || e instanceof RegExp)
            for (n = i.length; n--;) r.call(this, e, i[n]);
        else
            for (n in e) e.hasOwnProperty(n) && (o = e[n]) && ("function" == typeof o ? r.call(this, n, o) : s.call(this, n, o));
        return this
    }, n.removeEvent = function(t) {
        var e, i = typeof t,
            n = this._getEvents();
        if ("string" === i) delete n[t];
        else if (t instanceof RegExp)
            for (e in n) n.hasOwnProperty(e) && t.test(e) && delete n[e];
        else delete this._events;
        return this
    }, n.removeAllListeners = i("removeEvent"), n.emitEvent = function(t, e) {
        var i, n, o, r, s = this.getListenersAsObject(t);
        for (o in s)
            if (s.hasOwnProperty(o))
                for (n = s[o].length; n--;) i = s[o][n], i.once === !0 && this.removeListener(t, i.listener), r = i.listener.apply(this, e || []), r === this._getOnceReturnValue() && this.removeListener(t, i.listener);
        return this
    }, n.trigger = i("emitEvent"), n.emit = function(t) {
        var e = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(t, e)
    }, n.setOnceReturnValue = function(t) {
        return this._onceReturnValue = t, this
    }, n._getOnceReturnValue = function() {
        return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
    }, n._getEvents = function() {
        return this._events || (this._events = {})
    }, t.noConflict = function() {
        return o.EventEmitter = r, t
    }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
        return t
    }) : "object" == typeof module && module.exports ? module.exports = t : o.EventEmitter = t
}.call(this),
    function(t) {
        function e(t) {
            if (t) {
                if ("string" == typeof n[t]) return t;
                t = t.charAt(0).toUpperCase() + t.slice(1);
                for (var e, o = 0, r = i.length; r > o; o++)
                    if (e = i[o] + t, "string" == typeof n[e]) return e
            }
        }
        var i = "Webkit Moz ms Ms O".split(" "),
            n = document.documentElement.style;
        "function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function() {
            return e
        }) : "object" == typeof exports ? module.exports = e : t.getStyleProperty = e
    }(window),
    function(t) {
        function e(t) {
            var e = parseFloat(t),
                i = -1 === t.indexOf("%") && !isNaN(e);
            return i && e
        }

        function i() {}

        function n() {
            for (var t = {
                    width: 0,
                    height: 0,
                    innerWidth: 0,
                    innerHeight: 0,
                    outerWidth: 0,
                    outerHeight: 0
                }, e = 0, i = s.length; i > e; e++) {
                var n = s[e];
                t[n] = 0
            }
            return t
        }

        function o(i) {
            function o() {
                if (!d) {
                    d = !0;
                    var n = t.getComputedStyle;
                    if (l = function() {
                            var t = n ? function(t) {
                                return n(t, null)
                            } : function(t) {
                                return t.currentStyle
                            };
                            return function(e) {
                                var i = t(e);
                                return i || r("Style returned " + i + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), i
                            }
                        }(), p = i("boxSizing")) {
                        var o = document.createElement("div");
                        o.style.width = "200px", o.style.padding = "1px 2px 3px 4px", o.style.borderStyle = "solid", o.style.borderWidth = "1px 2px 3px 4px", o.style[p] = "border-box";
                        var s = document.body || document.documentElement;
                        s.appendChild(o);
                        var a = l(o);
                        u = 200 === e(a.width), s.removeChild(o)
                    }
                }
            }

            function a(t) {
                if (o(), "string" == typeof t && (t = document.querySelector(t)), t && "object" == typeof t && t.nodeType) {
                    var i = l(t);
                    if ("none" === i.display) return n();
                    var r = {};
                    r.width = t.offsetWidth, r.height = t.offsetHeight;
                    for (var a = r.isBorderBox = !(!p || !i[p] || "border-box" !== i[p]), d = 0, h = s.length; h > d; d++) {
                        var f = s[d],
                            m = i[f];
                        m = c(t, m);
                        var g = parseFloat(m);
                        r[f] = isNaN(g) ? 0 : g
                    }
                    var v = r.paddingLeft + r.paddingRight,
                        y = r.paddingTop + r.paddingBottom,
                        b = r.marginLeft + r.marginRight,
                        _ = r.marginTop + r.marginBottom,
                        S = r.borderLeftWidth + r.borderRightWidth,
                        w = r.borderTopWidth + r.borderBottomWidth,
                        x = a && u,
                        I = e(i.width);
                    I !== !1 && (r.width = I + (x ? 0 : v + S));
                    var C = e(i.height);
                    return C !== !1 && (r.height = C + (x ? 0 : y + w)), r.innerWidth = r.width - (v + S), r.innerHeight = r.height - (y + w), r.outerWidth = r.width + b, r.outerHeight = r.height + _, r
                }
            }

            function c(e, i) {
                if (t.getComputedStyle || -1 === i.indexOf("%")) return i;
                var n = e.style,
                    o = n.left,
                    r = e.runtimeStyle,
                    s = r && r.left;
                return s && (r.left = e.currentStyle.left), n.left = i, i = n.pixelLeft, n.left = o, s && (r.left = s), i
            }
            var l, p, u, d = !1;
            return a
        }
        var r = "undefined" == typeof console ? i : function(t) {
                console.error(t)
            },
            s = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
        "function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], o) : "object" == typeof exports ? module.exports = o(require("desandro-get-style-property")) : t.getSize = o(t.getStyleProperty)
    }(window),
    function(t) {
        function e(t, e) {
            return t[s](e)
        }

        function i(t) {
            if (!t.parentNode) {
                var e = document.createDocumentFragment();
                e.appendChild(t)
            }
        }

        function n(t, e) {
            i(t);
            for (var n = t.parentNode.querySelectorAll(e), o = 0, r = n.length; r > o; o++)
                if (n[o] === t) return !0;
            return !1
        }

        function o(t, n) {
            return i(t), e(t, n)
        }
        var r, s = function() {
            if (t.matchesSelector) return "matchesSelector";
            for (var e = ["webkit", "moz", "ms", "o"], i = 0, n = e.length; n > i; i++) {
                var o = e[i],
                    r = o + "MatchesSelector";
                if (t[r]) return r
            }
        }();
        if (s) {
            var a = document.createElement("div"),
                c = e(a, "div");
            r = c ? e : o
        } else r = n;
        "function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function() {
            return r
        }) : "object" == typeof exports ? module.exports = r : window.matchesSelector = r
    }(Element.prototype),
    function(t) {
        function e(t, e) {
            for (var i in e) t[i] = e[i];
            return t
        }

        function i(t) {
            for (var e in t) return !1;
            return e = null, !0
        }

        function n(t) {
            return t.replace(/([A-Z])/g, function(t) {
                return "-" + t.toLowerCase()
            })
        }

        function o(t, o, r) {
            function a(t, e) {
                t && (this.element = t, this.layout = e, this.position = {
                    x: 0,
                    y: 0
                }, this._create())
            }
            var c = r("transition"),
                l = r("transform"),
                p = c && l,
                u = !!r("perspective"),
                d = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "otransitionend",
                    transition: "transitionend"
                } [c],
                h = ["transform", "transition", "transitionDuration", "transitionProperty"],
                f = function() {
                    for (var t = {}, e = 0, i = h.length; i > e; e++) {
                        var n = h[e],
                            o = r(n);
                        o && o !== n && (t[n] = o)
                    }
                    return t
                }();
            e(a.prototype, t.prototype), a.prototype._create = function() {
                this._transn = {
                    ingProperties: {},
                    clean: {},
                    onEnd: {}
                }, this.css({
                    position: "absolute"
                })
            }, a.prototype.handleEvent = function(t) {
                var e = "on" + t.type;
                this[e] && this[e](t)
            }, a.prototype.getSize = function() {
                this.size = o(this.element)
            }, a.prototype.css = function(t) {
                var e = this.element.style;
                for (var i in t) {
                    var n = f[i] || i;
                    e[n] = t[i]
                }
            }, a.prototype.getPosition = function() {
                var t = s(this.element),
                    e = this.layout.options,
                    i = e.isOriginLeft,
                    n = e.isOriginTop,
                    o = parseInt(t[i ? "left" : "right"], 10),
                    r = parseInt(t[n ? "top" : "bottom"], 10);
                o = isNaN(o) ? 0 : o, r = isNaN(r) ? 0 : r;
                var a = this.layout.size;
                o -= i ? a.paddingLeft : a.paddingRight, r -= n ? a.paddingTop : a.paddingBottom, this.position.x = o, this.position.y = r
            }, a.prototype.layoutPosition = function() {
                var t = this.layout.size,
                    e = this.layout.options,
                    i = {};
                e.isOriginLeft ? (i.left = this.position.x + t.paddingLeft + "px", i.right = "") : (i.right = this.position.x + t.paddingRight + "px", i.left = ""), e.isOriginTop ? (i.top = this.position.y + t.paddingTop + "px", i.bottom = "") : (i.bottom = this.position.y + t.paddingBottom + "px", i.top = ""), this.css(i), this.emitEvent("layout", [this])
            };
            var m = u ? function(t, e) {
                return "translate3d(" + t + "px, " + e + "px, 0)"
            } : function(t, e) {
                return "translate(" + t + "px, " + e + "px)"
            };
            a.prototype._transitionTo = function(t, e) {
                this.getPosition();
                var i = this.position.x,
                    n = this.position.y,
                    o = parseInt(t, 10),
                    r = parseInt(e, 10),
                    s = o === this.position.x && r === this.position.y;
                if (this.setPosition(t, e), s && !this.isTransitioning) return void this.layoutPosition();
                var a = t - i,
                    c = e - n,
                    l = {},
                    p = this.layout.options;
                a = p.isOriginLeft ? a : -a, c = p.isOriginTop ? c : -c, l.transform = m(a, c), this.transition({
                    to: l,
                    onTransitionEnd: {
                        transform: this.layoutPosition
                    },
                    isCleaning: !0
                })
            }, a.prototype.goTo = function(t, e) {
                this.setPosition(t, e), this.layoutPosition()
            }, a.prototype.moveTo = p ? a.prototype._transitionTo : a.prototype.goTo, a.prototype.setPosition = function(t, e) {
                this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10)
            }, a.prototype._nonTransition = function(t) {
                this.css(t.to), t.isCleaning && this._removeStyles(t.to);
                for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this)
            }, a.prototype._transition = function(t) {
                if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(t);
                var e = this._transn;
                for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
                for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
                if (t.from) {
                    this.css(t.from);
                    var n = this.element.offsetHeight;
                    n = null
                }
                this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
            };
            var g = l && n(l) + ",opacity";
            a.prototype.enableTransition = function() {
                this.isTransitioning || (this.css({
                    transitionProperty: g,
                    transitionDuration: this.layout.options.transitionDuration
                }), this.element.addEventListener(d, this, !1))
            }, a.prototype.transition = a.prototype[c ? "_transition" : "_nonTransition"], a.prototype.onwebkitTransitionEnd = function(t) {
                this.ontransitionend(t)
            }, a.prototype.onotransitionend = function(t) {
                this.ontransitionend(t)
            };
            var v = {
                "-webkit-transform": "transform",
                "-moz-transform": "transform",
                "-o-transform": "transform"
            };
            a.prototype.ontransitionend = function(t) {
                if (t.target === this.element) {
                    var e = this._transn,
                        n = v[t.propertyName] || t.propertyName;
                    if (delete e.ingProperties[n], i(e.ingProperties) && this.disableTransition(), n in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[n]), n in e.onEnd) {
                        var o = e.onEnd[n];
                        o.call(this), delete e.onEnd[n]
                    }
                    this.emitEvent("transitionEnd", [this])
                }
            }, a.prototype.disableTransition = function() {
                this.removeTransitionStyles(), this.element.removeEventListener(d, this, !1), this.isTransitioning = !1
            }, a.prototype._removeStyles = function(t) {
                var e = {};
                for (var i in t) e[i] = "";
                this.css(e)
            };
            var y = {
                transitionProperty: "",
                transitionDuration: ""
            };
            return a.prototype.removeTransitionStyles = function() {
                this.css(y)
            }, a.prototype.removeElem = function() {
                this.element.parentNode.removeChild(this.element), this.emitEvent("remove", [this])
            }, a.prototype.remove = function() {
                if (!c || !parseFloat(this.layout.options.transitionDuration)) return void this.removeElem();
                var t = this;
                this.on("transitionEnd", function() {
                    return t.removeElem(), !0
                }), this.hide()
            }, a.prototype.reveal = function() {
                delete this.isHidden, this.css({
                    display: ""
                });
                var t = this.layout.options;
                this.transition({
                    from: t.hiddenStyle,
                    to: t.visibleStyle,
                    isCleaning: !0
                })
            }, a.prototype.hide = function() {
                this.isHidden = !0, this.css({
                    display: ""
                });
                var t = this.layout.options;
                this.transition({
                    from: t.visibleStyle,
                    to: t.hiddenStyle,
                    isCleaning: !0,
                    onTransitionEnd: {
                        opacity: function() {
                            this.isHidden && this.css({
                                display: "none"
                            })
                        }
                    }
                })
            }, a.prototype.destroy = function() {
                this.css({
                    position: "",
                    left: "",
                    right: "",
                    top: "",
                    bottom: "",
                    transition: "",
                    transform: ""
                })
            }, a
        }
        var r = t.getComputedStyle,
            s = r ? function(t) {
                return r(t, null)
            } : function(t) {
                return t.currentStyle
            };
        "function" == typeof define && define.amd ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property"], o) : "object" == typeof exports ? module.exports = o(require("wolfy87-eventemitter"), require("get-size"), require("desandro-get-style-property")) : (t.Outlayer = {}, t.Outlayer.Item = o(t.EventEmitter, t.getSize, t.getStyleProperty))
    }(window),
    function(t) {
        function e(t, e) {
            for (var i in e) t[i] = e[i];
            return t
        }

        function i(t) {
            return "[object Array]" === u.call(t)
        }

        function n(t) {
            var e = [];
            if (i(t)) e = t;
            else if (t && "number" == typeof t.length)
                for (var n = 0, o = t.length; o > n; n++) e.push(t[n]);
            else e.push(t);
            return e
        }

        function o(t, e) {
            var i = h(e, t); - 1 !== i && e.splice(i, 1)
        }

        function r(t) {
            return t.replace(/(.)([A-Z])/g, function(t, e, i) {
                return e + "-" + i
            }).toLowerCase()
        }

        function s(i, s, u, h, f, m) {
            function g(t, i) {
                if ("string" == typeof t && (t = a.querySelector(t)), !t || !d(t)) return void(c && c.error("Bad " + this.constructor.namespace + " element: " + t));
                this.element = t, this.options = e({}, this.constructor.defaults), this.option(i);
                var n = ++v;
                this.element.outlayerGUID = n, y[n] = this, this._create(), this.options.isInitLayout && this.layout()
            }
            var v = 0,
                y = {};
            return g.namespace = "outlayer", g.Item = m, g.defaults = {
                containerStyle: {
                    position: "relative"
                },
                isInitLayout: !0,
                isOriginLeft: !0,
                isOriginTop: !0,
                isResizeBound: !0,
                isResizingContainer: !0,
                transitionDuration: "0.4s",
                hiddenStyle: {
                    opacity: 0,
                    transform: "scale(0.001)"
                },
                visibleStyle: {
                    opacity: 1,
                    transform: "scale(1)"
                }
            }, e(g.prototype, u.prototype), g.prototype.option = function(t) {
                e(this.options, t)
            }, g.prototype._create = function() {
                this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), e(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize()
            }, g.prototype.reloadItems = function() {
                this.items = this._itemize(this.element.children)
            }, g.prototype._itemize = function(t) {
                for (var e = this._filterFindItemElements(t), i = this.constructor.Item, n = [], o = 0, r = e.length; r > o; o++) {
                    var s = e[o],
                        a = new i(s, this);
                    n.push(a)
                }
                return n
            }, g.prototype._filterFindItemElements = function(t) {
                t = n(t);
                for (var e = this.options.itemSelector, i = [], o = 0, r = t.length; r > o; o++) {
                    var s = t[o];
                    if (d(s))
                        if (e) {
                            f(s, e) && i.push(s);
                            for (var a = s.querySelectorAll(e), c = 0, l = a.length; l > c; c++) i.push(a[c])
                        } else i.push(s)
                }
                return i
            }, g.prototype.getItemElements = function() {
                for (var t = [], e = 0, i = this.items.length; i > e; e++) t.push(this.items[e].element);
                return t
            }, g.prototype.layout = function() {
                this._resetLayout(), this._manageStamps();
                var t = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
                this.layoutItems(this.items, t), this._isLayoutInited = !0
            }, g.prototype._init = g.prototype.layout, g.prototype._resetLayout = function() {
                this.getSize()
            }, g.prototype.getSize = function() {
                this.size = h(this.element)
            }, g.prototype._getMeasurement = function(t, e) {
                var i, n = this.options[t];
                n ? ("string" == typeof n ? i = this.element.querySelector(n) : d(n) && (i = n), this[t] = i ? h(i)[e] : n) : this[t] = 0
            }, g.prototype.layoutItems = function(t, e) {
                t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
            }, g.prototype._getItemsForLayout = function(t) {
                for (var e = [], i = 0, n = t.length; n > i; i++) {
                    var o = t[i];
                    o.isIgnored || e.push(o)
                }
                return e
            }, g.prototype._layoutItems = function(t, e) {
                function i() {
                    n.emitEvent("layoutComplete", [n, t])
                }
                var n = this;
                if (!t || !t.length) return void i();
                this._itemsOn(t, "layout", i);
                for (var o = [], r = 0, s = t.length; s > r; r++) {
                    var a = t[r],
                        c = this._getItemLayoutPosition(a);
                    c.item = a, c.isInstant = e || a.isLayoutInstant, o.push(c)
                }
                this._processLayoutQueue(o)
            }, g.prototype._getItemLayoutPosition = function() {
                return {
                    x: 0,
                    y: 0
                }
            }, g.prototype._processLayoutQueue = function(t) {
                for (var e = 0, i = t.length; i > e; e++) {
                    var n = t[e];
                    this._positionItem(n.item, n.x, n.y, n.isInstant)
                }
            }, g.prototype._positionItem = function(t, e, i, n) {
                n ? t.goTo(e, i) : t.moveTo(e, i)
            }, g.prototype._postLayout = function() {
                this.resizeContainer()
            }, g.prototype.resizeContainer = function() {
                if (this.options.isResizingContainer) {
                    var t = this._getContainerSize();
                    t && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1))
                }
            }, g.prototype._getContainerSize = p, g.prototype._setContainerMeasure = function(t, e) {
                if (void 0 !== t) {
                    var i = this.size;
                    i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
                }
            }, g.prototype._itemsOn = function(t, e, i) {
                function n() {
                    return o++, o === r && i.call(s), !0
                }
                for (var o = 0, r = t.length, s = this, a = 0, c = t.length; c > a; a++) {
                    var l = t[a];
                    l.on(e, n)
                }
            }, g.prototype.ignore = function(t) {
                var e = this.getItem(t);
                e && (e.isIgnored = !0)
            }, g.prototype.unignore = function(t) {
                var e = this.getItem(t);
                e && delete e.isIgnored
            }, g.prototype.stamp = function(t) {
                if (t = this._find(t)) {
                    this.stamps = this.stamps.concat(t);
                    for (var e = 0, i = t.length; i > e; e++) {
                        var n = t[e];
                        this.ignore(n)
                    }
                }
            }, g.prototype.unstamp = function(t) {
                if (t = this._find(t))
                    for (var e = 0, i = t.length; i > e; e++) {
                        var n = t[e];
                        o(n, this.stamps), this.unignore(n)
                    }
            }, g.prototype._find = function(t) {
                return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)), t = n(t)) : void 0
            }, g.prototype._manageStamps = function() {
                if (this.stamps && this.stamps.length) {
                    this._getBoundingRect();
                    for (var t = 0, e = this.stamps.length; e > t; t++) {
                        var i = this.stamps[t];
                        this._manageStamp(i)
                    }
                }
            }, g.prototype._getBoundingRect = function() {
                var t = this.element.getBoundingClientRect(),
                    e = this.size;
                this._boundingRect = {
                    left: t.left + e.paddingLeft + e.borderLeftWidth,
                    top: t.top + e.paddingTop + e.borderTopWidth,
                    right: t.right - (e.paddingRight + e.borderRightWidth),
                    bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
                }
            }, g.prototype._manageStamp = p, g.prototype._getElementOffset = function(t) {
                var e = t.getBoundingClientRect(),
                    i = this._boundingRect,
                    n = h(t),
                    o = {
                        left: e.left - i.left - n.marginLeft,
                        top: e.top - i.top - n.marginTop,
                        right: i.right - e.right - n.marginRight,
                        bottom: i.bottom - e.bottom - n.marginBottom
                    };
                return o
            }, g.prototype.handleEvent = function(t) {
                var e = "on" + t.type;
                this[e] && this[e](t)
            }, g.prototype.bindResize = function() {
                this.isResizeBound || (i.bind(t, "resize", this), this.isResizeBound = !0)
            }, g.prototype.unbindResize = function() {
                this.isResizeBound && i.unbind(t, "resize", this), this.isResizeBound = !1
            }, g.prototype.onresize = function() {
                function t() {
                    e.resize(), delete e.resizeTimeout
                }
                this.resizeTimeout && clearTimeout(this.resizeTimeout);
                var e = this;
                this.resizeTimeout = setTimeout(t, 100)
            }, g.prototype.resize = function() {
                this.isResizeBound && this.needsResizeLayout() && this.layout()
            }, g.prototype.needsResizeLayout = function() {
                var t = h(this.element),
                    e = this.size && t;
                return e && t.innerWidth !== this.size.innerWidth
            }, g.prototype.addItems = function(t) {
                var e = this._itemize(t);
                return e.length && (this.items = this.items.concat(e)), e
            }, g.prototype.appended = function(t) {
                var e = this.addItems(t);
                e.length && (this.layoutItems(e, !0), this.reveal(e))
            }, g.prototype.prepended = function(t) {
                var e = this._itemize(t);
                if (e.length) {
                    var i = this.items.slice(0);
                    this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i)
                }
            }, g.prototype.reveal = function(t) {
                var e = t && t.length;
                if (e)
                    for (var i = 0; e > i; i++) {
                        var n = t[i];
                        n.reveal()
                    }
            }, g.prototype.hide = function(t) {
                var e = t && t.length;
                if (e)
                    for (var i = 0; e > i; i++) {
                        var n = t[i];
                        n.hide()
                    }
            }, g.prototype.getItem = function(t) {
                for (var e = 0, i = this.items.length; i > e; e++) {
                    var n = this.items[e];
                    if (n.element === t) return n
                }
            }, g.prototype.getItems = function(t) {
                if (t && t.length) {
                    for (var e = [], i = 0, n = t.length; n > i; i++) {
                        var o = t[i],
                            r = this.getItem(o);
                        r && e.push(r)
                    }
                    return e
                }
            }, g.prototype.remove = function(t) {
                t = n(t);
                var e = this.getItems(t);
                if (e && e.length) {
                    this._itemsOn(e, "remove", function() {
                        this.emitEvent("removeComplete", [this, e])
                    });
                    for (var i = 0, r = e.length; r > i; i++) {
                        var s = e[i];
                        s.remove(), o(s, this.items)
                    }
                }
            }, g.prototype.destroy = function() {
                var t = this.element.style;
                t.height = "", t.position = "", t.width = "";
                for (var e = 0, i = this.items.length; i > e; e++) {
                    var n = this.items[e];
                    n.destroy()
                }
                this.unbindResize();
                var o = this.element.outlayerGUID;
                delete y[o], delete this.element.outlayerGUID, l && l.removeData(this.element, this.constructor.namespace)
            }, g.data = function(t) {
                var e = t && t.outlayerGUID;
                return e && y[e]
            }, g.create = function(t, i) {
                function n() {
                    g.apply(this, arguments)
                }
                return Object.create ? n.prototype = Object.create(g.prototype) : e(n.prototype, g.prototype), n.prototype.constructor = n, n.defaults = e({}, g.defaults), e(n.defaults, i), n.prototype.settings = {}, n.namespace = t, n.data = g.data, n.Item = function() {
                    m.apply(this, arguments)
                }, n.Item.prototype = new m, s(function() {
                    for (var e = r(t), i = a.querySelectorAll(".js-" + e), o = "data-" + e + "-options", s = 0, p = i.length; p > s; s++) {
                        var u, d = i[s],
                            h = d.getAttribute(o);
                        try {
                            u = h && JSON.parse(h)
                        } catch (f) {
                            c && c.error("Error parsing " + o + " on " + d.nodeName.toLowerCase() + (d.id ? "#" + d.id : "") + ": " + f);
                            continue
                        }
                        var m = new n(d, u);
                        l && l.data(d, t, m)
                    }
                }), l && l.bridget && l.bridget(t, n), n
            }, g.Item = m, g
        }
        var a = t.document,
            c = t.console,
            l = t.jQuery,
            p = function() {},
            u = Object.prototype.toString,
            d = "function" == typeof HTMLElement || "object" == typeof HTMLElement ? function(t) {
                return t instanceof HTMLElement
            } : function(t) {
                return t && "object" == typeof t && 1 === t.nodeType && "string" == typeof t.nodeName
            },
            h = Array.prototype.indexOf ? function(t, e) {
                return t.indexOf(e)
            } : function(t, e) {
                for (var i = 0, n = t.length; n > i; i++)
                    if (t[i] === e) return i;
                return -1
            };
        "function" == typeof define && define.amd ? define("outlayer/outlayer", ["eventie/eventie", "doc-ready/doc-ready", "eventEmitter/EventEmitter", "get-size/get-size", "matches-selector/matches-selector", "./item"], s) : "object" == typeof exports ? module.exports = s(require("eventie"), require("doc-ready"), require("wolfy87-eventemitter"), require("get-size"), require("desandro-matches-selector"), require("./item")) : t.Outlayer = s(t.eventie, t.docReady, t.EventEmitter, t.getSize, t.matchesSelector, t.Outlayer.Item)
    }(window),
    function(t) {
        function e(t) {
            function e() {
                t.Item.apply(this, arguments)
            }
            e.prototype = new t.Item, e.prototype._create = function() {
                this.id = this.layout.itemGUID++, t.Item.prototype._create.call(this), this.sortData = {}
            }, e.prototype.updateSortData = function() {
                if (!this.isIgnored) {
                    this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
                    var t = this.layout.options.getSortData,
                        e = this.layout._sorters;
                    for (var i in t) {
                        var n = e[i];
                        this.sortData[i] = n(this.element, this)
                    }
                }
            };
            var i = e.prototype.destroy;
            return e.prototype.destroy = function() {
                i.apply(this, arguments), this.css({
                    display: ""
                })
            }, e
        }
        "function" == typeof define && define.amd ? define("isotope/js/item", ["outlayer/outlayer"], e) : "object" == typeof exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.Item = e(t.Outlayer))
    }(window),
    function(t) {
        function e(t, e) {
            function i(t) {
                this.isotope = t, t && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size)
            }
            return function() {
                function t(t) {
                    return function() {
                        return e.prototype[t].apply(this.isotope, arguments)
                    }
                }
                for (var n = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout"], o = 0, r = n.length; r > o; o++) {
                    var s = n[o];
                    i.prototype[s] = t(s)
                }
            }(), i.prototype.needsVerticalResizeLayout = function() {
                var e = t(this.isotope.element),
                    i = this.isotope.size && e;
                return i && e.innerHeight !== this.isotope.size.innerHeight
            }, i.prototype._getMeasurement = function() {
                this.isotope._getMeasurement.apply(this, arguments)
            }, i.prototype.getColumnWidth = function() {
                this.getSegmentSize("column", "Width")
            }, i.prototype.getRowHeight = function() {
                this.getSegmentSize("row", "Height")
            }, i.prototype.getSegmentSize = function(t, e) {
                var i = t + e,
                    n = "outer" + e;
                if (this._getMeasurement(i, n), !this[i]) {
                    var o = this.getFirstItemSize();
                    this[i] = o && o[n] || this.isotope.size["inner" + e]
                }
            }, i.prototype.getFirstItemSize = function() {
                var e = this.isotope.filteredItems[0];
                return e && e.element && t(e.element)
            }, i.prototype.layout = function() {
                this.isotope.layout.apply(this.isotope, arguments)
            }, i.prototype.getSize = function() {
                this.isotope.getSize(), this.size = this.isotope.size
            }, i.modes = {}, i.create = function(t, e) {
                function n() {
                    i.apply(this, arguments)
                }
                return n.prototype = new i, e && (n.options = e), n.prototype.namespace = t, i.modes[t] = n, n
            }, i
        }
        "function" == typeof define && define.amd ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : "object" == typeof exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.LayoutMode = e(t.getSize, t.Outlayer))
    }(window),
    function(t) {
        function e(t, e) {
            var n = t.create("masonry");
            return n.prototype._resetLayout = function() {
                this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns();
                var t = this.cols;
                for (this.colYs = []; t--;) this.colYs.push(0);
                this.maxY = 0
            }, n.prototype.measureColumns = function() {
                if (this.getContainerWidth(), !this.columnWidth) {
                    var t = this.items[0],
                        i = t && t.element;
                    this.columnWidth = i && e(i).outerWidth || this.containerWidth
                }
                this.columnWidth += this.gutter, this.cols = Math.floor((this.containerWidth + this.gutter) / this.columnWidth), this.cols = Math.max(this.cols, 1)
            }, n.prototype.getContainerWidth = function() {
                var t = this.options.isFitWidth ? this.element.parentNode : this.element,
                    i = e(t);
                this.containerWidth = i && i.innerWidth
            }, n.prototype._getItemLayoutPosition = function(t) {
                t.getSize();
                var e = t.size.outerWidth % this.columnWidth,
                    n = e && 1 > e ? "round" : "ceil",
                    o = Math[n](t.size.outerWidth / this.columnWidth);
                o = Math.min(o, this.cols);
                for (var r = this._getColGroup(o), s = Math.min.apply(Math, r), a = i(r, s), c = {
                        x: this.columnWidth * a,
                        y: s
                    }, l = s + t.size.outerHeight, p = this.cols + 1 - r.length, u = 0; p > u; u++) this.colYs[a + u] = l;
                return c
            }, n.prototype._getColGroup = function(t) {
                if (2 > t) return this.colYs;
                for (var e = [], i = this.cols + 1 - t, n = 0; i > n; n++) {
                    var o = this.colYs.slice(n, n + t);
                    e[n] = Math.max.apply(Math, o)
                }
                return e
            }, n.prototype._manageStamp = function(t) {
                var i = e(t),
                    n = this._getElementOffset(t),
                    o = this.options.isOriginLeft ? n.left : n.right,
                    r = o + i.outerWidth,
                    s = Math.floor(o / this.columnWidth);
                s = Math.max(0, s);
                var a = Math.floor(r / this.columnWidth);
                a -= r % this.columnWidth ? 0 : 1, a = Math.min(this.cols - 1, a);
                for (var c = (this.options.isOriginTop ? n.top : n.bottom) + i.outerHeight, l = s; a >= l; l++) this.colYs[l] = Math.max(c, this.colYs[l])
            }, n.prototype._getContainerSize = function() {
                this.maxY = Math.max.apply(Math, this.colYs);
                var t = {
                    height: this.maxY
                };
                return this.options.isFitWidth && (t.width = this._getContainerFitWidth()), t
            }, n.prototype._getContainerFitWidth = function() {
                for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++;
                return (this.cols - t) * this.columnWidth - this.gutter
            }, n.prototype.needsResizeLayout = function() {
                var t = this.containerWidth;
                return this.getContainerWidth(), t !== this.containerWidth
            }, n
        }
        var i = Array.prototype.indexOf ? function(t, e) {
            return t.indexOf(e)
        } : function(t, e) {
            for (var i = 0, n = t.length; n > i; i++) {
                var o = t[i];
                if (o === e) return i
            }
            return -1
        };
        "function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize)
    }(window),
    function(t) {
        function e(t, e) {
            for (var i in e) t[i] = e[i];
            return t
        }

        function i(t, i) {
            var n = t.create("masonry"),
                o = n.prototype._getElementOffset,
                r = n.prototype.layout,
                s = n.prototype._getMeasurement;
            e(n.prototype, i.prototype), n.prototype._getElementOffset = o, n.prototype.layout = r, n.prototype._getMeasurement = s;
            var a = n.prototype.measureColumns;
            n.prototype.measureColumns = function() {
                this.items = this.isotope.filteredItems, a.call(this)
            };
            var c = n.prototype._manageStamp;
            return n.prototype._manageStamp = function() {
                this.options.isOriginLeft = this.isotope.options.isOriginLeft, this.options.isOriginTop = this.isotope.options.isOriginTop, c.apply(this, arguments)
            }, n
        }
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], i) : "object" == typeof exports ? module.exports = i(require("../layout-mode"), require("masonry-layout")) : i(t.Isotope.LayoutMode, t.Masonry)
    }(window),
    function(t) {
        function e(t) {
            var e = t.create("fitRows");
            return e.prototype._resetLayout = function() {
                this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth")
            }, e.prototype._getItemLayoutPosition = function(t) {
                t.getSize();
                var e = t.size.outerWidth + this.gutter,
                    i = this.isotope.size.innerWidth + this.gutter;
                0 !== this.x && e + this.x > i && (this.x = 0, this.y = this.maxY);
                var n = {
                    x: this.x,
                    y: this.y
                };
                return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += e, n
            }, e.prototype._getContainerSize = function() {
                return {
                    height: this.maxY
                }
            }, e
        }
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
    }(window),
    function(t) {
        function e(t) {
            var e = t.create("vertical", {
                horizontalAlignment: 0
            });
            return e.prototype._resetLayout = function() {
                this.y = 0
            }, e.prototype._getItemLayoutPosition = function(t) {
                t.getSize();
                var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment,
                    i = this.y;
                return this.y += t.size.outerHeight, {
                    x: e,
                    y: i
                }
            }, e.prototype._getContainerSize = function() {
                return {
                    height: this.y
                }
            }, e
        }
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
    }(window),
    function(t) {
        function e(t, e) {
            for (var i in e) t[i] = e[i];
            return t
        }

        function i(t) {
            return "[object Array]" === p.call(t)
        }

        function n(t) {
            var e = [];
            if (i(t)) e = t;
            else if (t && "number" == typeof t.length)
                for (var n = 0, o = t.length; o > n; n++) e.push(t[n]);
            else e.push(t);
            return e
        }

        function o(t, e) {
            var i = u(e, t); - 1 !== i && e.splice(i, 1)
        }

        function r(t, i, r, c, p) {
            function u(t, e) {
                return function(i, n) {
                    for (var o = 0, r = t.length; r > o; o++) {
                        var s = t[o],
                            a = i.sortData[s],
                            c = n.sortData[s];
                        if (a > c || c > a) {
                            var l = void 0 !== e[s] ? e[s] : e,
                                p = l ? 1 : -1;
                            return (a > c ? 1 : -1) * p
                        }
                    }
                    return 0
                }
            }
            var d = t.create("isotope", {
                layoutMode: "masonry",
                isJQueryFiltering: !0,
                sortAscending: !0
            });
            d.Item = c, d.LayoutMode = p, d.prototype._create = function() {
                this.itemGUID = 0, this._sorters = {}, this._getSorters(), t.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"];
                for (var e in p.modes) this._initLayoutMode(e)
            }, d.prototype.reloadItems = function() {
                this.itemGUID = 0, t.prototype.reloadItems.call(this)
            }, d.prototype._itemize = function() {
                for (var e = t.prototype._itemize.apply(this, arguments), i = 0, n = e.length; n > i; i++) {
                    var o = e[i];
                    o.id = this.itemGUID++
                }
                return this._updateItemsSortData(e), e
            }, d.prototype._initLayoutMode = function(t) {
                var i = p.modes[t],
                    n = this.options[t] || {};
                this.options[t] = i.options ? e(i.options, n) : n, this.modes[t] = new i(this)
            }, d.prototype.layout = function() {
                return !this._isLayoutInited && this.options.isInitLayout ? void this.arrange() : void this._layout()
            }, d.prototype._layout = function() {
                var t = this._getIsInstant();
                this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited = !0
            }, d.prototype.arrange = function(t) {
                this.option(t), this._getIsInstant(), this.filteredItems = this._filter(this.items), this._sort(), this._layout()
            }, d.prototype._init = d.prototype.arrange, d.prototype._getIsInstant = function() {
                var t = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
                return this._isInstant = t, t
            }, d.prototype._filter = function(t) {
                function e() {
                    u.reveal(o), u.hide(r)
                }
                var i = this.options.filter;
                i = i || "*";
                for (var n = [], o = [], r = [], s = this._getFilterTest(i), a = 0, c = t.length; c > a; a++) {
                    var l = t[a];
                    if (!l.isIgnored) {
                        var p = s(l);
                        p && n.push(l), p && l.isHidden ? o.push(l) : p || l.isHidden || r.push(l)
                    }
                }
                var u = this;
                return this._isInstant ? this._noTransition(e) : e(), n
            }, d.prototype._getFilterTest = function(t) {
                return s && this.options.isJQueryFiltering ? function(e) {
                    return s(e.element).is(t)
                } : "function" == typeof t ? function(e) {
                    return t(e.element)
                } : function(e) {
                    return r(e.element, t)
                }
            }, d.prototype.updateSortData = function(t) {
                var e;
                t ? (t = n(t), e = this.getItems(t)) : e = this.items, this._getSorters(), this._updateItemsSortData(e)
            }, d.prototype._getSorters = function() {
                var t = this.options.getSortData;
                for (var e in t) {
                    var i = t[e];
                    this._sorters[e] = h(i)
                }
            }, d.prototype._updateItemsSortData = function(t) {
                for (var e = t && t.length, i = 0; e && e > i; i++) {
                    var n = t[i];
                    n.updateSortData()
                }
            };
            var h = function() {
                function t(t) {
                    if ("string" != typeof t) return t;
                    var i = a(t).split(" "),
                        n = i[0],
                        o = n.match(/^\[(.+)\]$/),
                        r = o && o[1],
                        s = e(r, n),
                        c = d.sortDataParsers[i[1]];
                    return t = c ? function(t) {
                        return t && c(s(t))
                    } : function(t) {
                        return t && s(t)
                    }
                }

                function e(t, e) {
                    var i;
                    return i = t ? function(e) {
                        return e.getAttribute(t)
                    } : function(t) {
                        var i = t.querySelector(e);
                        return i && l(i)
                    }
                }
                return t
            }();
            d.sortDataParsers = {
                parseInt: function(t) {
                    return parseInt(t, 10)
                },
                parseFloat: function(t) {
                    return parseFloat(t)
                }
            }, d.prototype._sort = function() {
                var t = this.options.sortBy;
                if (t) {
                    var e = [].concat.apply(t, this.sortHistory),
                        i = u(e, this.options.sortAscending);
                    this.filteredItems.sort(i), t !== this.sortHistory[0] && this.sortHistory.unshift(t)
                }
            }, d.prototype._mode = function() {
                var t = this.options.layoutMode,
                    e = this.modes[t];
                if (!e) throw Error("No layout mode: " + t);
                return e.options = this.options[t], e
            }, d.prototype._resetLayout = function() {
                t.prototype._resetLayout.call(this), this._mode()._resetLayout()
            }, d.prototype._getItemLayoutPosition = function(t) {
                return this._mode()._getItemLayoutPosition(t)
            }, d.prototype._manageStamp = function(t) {
                this._mode()._manageStamp(t)
            }, d.prototype._getContainerSize = function() {
                return this._mode()._getContainerSize()
            }, d.prototype.needsResizeLayout = function() {
                return this._mode().needsResizeLayout()
            }, d.prototype.appended = function(t) {
                var e = this.addItems(t);
                if (e.length) {
                    var i = this._filterRevealAdded(e);
                    this.filteredItems = this.filteredItems.concat(i)
                }
            }, d.prototype.prepended = function(t) {
                var e = this._itemize(t);
                if (e.length) {
                    var i = this.items.slice(0);
                    this.items = e.concat(i), this._resetLayout(), this._manageStamps();
                    var n = this._filterRevealAdded(e);
                    this.layoutItems(i), this.filteredItems = n.concat(this.filteredItems)
                }
            }, d.prototype._filterRevealAdded = function(t) {
                var e = this._noTransition(function() {
                    return this._filter(t)
                });
                return this.layoutItems(e, !0), this.reveal(e), t
            }, d.prototype.insert = function(t) {
                var e = this.addItems(t);
                if (e.length) {
                    var i, n, o = e.length;
                    for (i = 0; o > i; i++) n = e[i], this.element.appendChild(n.element);
                    var r = this._filter(e);
                    for (this._noTransition(function() {
                            this.hide(r)
                        }), i = 0; o > i; i++) e[i].isLayoutInstant = !0;
                    for (this.arrange(), i = 0; o > i; i++) delete e[i].isLayoutInstant;
                    this.reveal(r)
                }
            };
            var f = d.prototype.remove;
            return d.prototype.remove = function(t) {
                t = n(t);
                var e = this.getItems(t);
                if (f.call(this, t), e && e.length)
                    for (var i = 0, r = e.length; r > i; i++) {
                        var s = e[i];
                        o(s, this.filteredItems)
                    }
            }, d.prototype.shuffle = function() {
                for (var t = 0, e = this.items.length; e > t; t++) {
                    var i = this.items[t];
                    i.sortData.random = Math.random()
                }
                this.options.sortBy = "random", this._sort(), this._layout()
            }, d.prototype._noTransition = function(t) {
                var e = this.options.transitionDuration;
                this.options.transitionDuration = 0;
                var i = t.call(this);
                return this.options.transitionDuration = e, i
            }, d.prototype.getFilteredItemElements = function() {
                for (var t = [], e = 0, i = this.filteredItems.length; i > e; e++) t.push(this.filteredItems[e].element);
                return t
            }, d
        }
        var s = t.jQuery,
            a = String.prototype.trim ? function(t) {
                return t.trim()
            } : function(t) {
                return t.replace(/^\s+|\s+$/g, "")
            },
            c = document.documentElement,
            l = c.textContent ? function(t) {
                return t.textContent
            } : function(t) {
                return t.innerText
            },
            p = Object.prototype.toString,
            u = Array.prototype.indexOf ? function(t, e) {
                return t.indexOf(e)
            } : function(t, e) {
                for (var i = 0, n = t.length; n > i; i++)
                    if (t[i] === e) return i;
                return -1
            };
        "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "matches-selector/matches-selector", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], r) : "object" == typeof exports ? module.exports = r(require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("./item"), require("./layout-mode"), require("./layout-modes/masonry"), require("./layout-modes/fit-rows"), require("./layout-modes/vertical")) : t.Isotope = r(t.Outlayer, t.getSize, t.matchesSelector, t.Isotope.Item, t.Isotope.LayoutMode)
    }(window),
    function() {
        function t() {}

        function e(t, e) {
            for (var i = t.length; i--;)
                if (t[i].listener === e) return i;
            return -1
        }

        function i(t) {
            return function() {
                return this[t].apply(this, arguments)
            }
        }
        var n = t.prototype,
            o = this,
            r = o.EventEmitter;
        n.getListeners = function(t) {
            var e, i, n = this._getEvents();
            if ("object" == typeof t) {
                e = {};
                for (i in n) n.hasOwnProperty(i) && t.test(i) && (e[i] = n[i])
            } else e = n[t] || (n[t] = []);
            return e
        }, n.flattenListeners = function(t) {
            var e, i = [];
            for (e = 0; t.length > e; e += 1) i.push(t[e].listener);
            return i
        }, n.getListenersAsObject = function(t) {
            var e, i = this.getListeners(t);
            return i instanceof Array && (e = {}, e[t] = i), e || i
        }, n.addListener = function(t, i) {
            var n, o = this.getListenersAsObject(t),
                r = "object" == typeof i;
            for (n in o) o.hasOwnProperty(n) && -1 === e(o[n], i) && o[n].push(r ? i : {
                listener: i,
                once: !1
            });
            return this
        }, n.on = i("addListener"), n.addOnceListener = function(t, e) {
            return this.addListener(t, {
                listener: e,
                once: !0
            })
        }, n.once = i("addOnceListener"), n.defineEvent = function(t) {
            return this.getListeners(t), this
        }, n.defineEvents = function(t) {
            for (var e = 0; t.length > e; e += 1) this.defineEvent(t[e]);
            return this
        }, n.removeListener = function(t, i) {
            var n, o, r = this.getListenersAsObject(t);
            for (o in r) r.hasOwnProperty(o) && (n = e(r[o], i), -1 !== n && r[o].splice(n, 1));
            return this
        }, n.off = i("removeListener"), n.addListeners = function(t, e) {
            return this.manipulateListeners(!1, t, e)
        }, n.removeListeners = function(t, e) {
            return this.manipulateListeners(!0, t, e)
        }, n.manipulateListeners = function(t, e, i) {
            var n, o, r = t ? this.removeListener : this.addListener,
                s = t ? this.removeListeners : this.addListeners;
            if ("object" != typeof e || e instanceof RegExp)
                for (n = i.length; n--;) r.call(this, e, i[n]);
            else
                for (n in e) e.hasOwnProperty(n) && (o = e[n]) && ("function" == typeof o ? r.call(this, n, o) : s.call(this, n, o));
            return this
        }, n.removeEvent = function(t) {
            var e, i = typeof t,
                n = this._getEvents();
            if ("string" === i) delete n[t];
            else if ("object" === i)
                for (e in n) n.hasOwnProperty(e) && t.test(e) && delete n[e];
            else delete this._events;
            return this
        }, n.removeAllListeners = i("removeEvent"), n.emitEvent = function(t, e) {
            var i, n, o, r, s = this.getListenersAsObject(t);
            for (o in s)
                if (s.hasOwnProperty(o))
                    for (n = s[o].length; n--;) i = s[o][n], i.once === !0 && this.removeListener(t, i.listener), r = i.listener.apply(this, e || []), r === this._getOnceReturnValue() && this.removeListener(t, i.listener);
            return this
        }, n.trigger = i("emitEvent"), n.emit = function(t) {
            var e = Array.prototype.slice.call(arguments, 1);
            return this.emitEvent(t, e)
        }, n.setOnceReturnValue = function(t) {
            return this._onceReturnValue = t, this
        }, n._getOnceReturnValue = function() {
            return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
        }, n._getEvents = function() {
            return this._events || (this._events = {})
        }, t.noConflict = function() {
            return o.EventEmitter = r, t
        }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
            return t
        }) : "object" == typeof module && module.exports ? module.exports = t : this.EventEmitter = t
    }.call(this),
    function(t) {
        function e(e) {
            var i = t.event;
            return i.target = i.target || i.srcElement || e, i
        }
        var i = document.documentElement,
            n = function() {};
        i.addEventListener ? n = function(t, e, i) {
            t.addEventListener(e, i, !1)
        } : i.attachEvent && (n = function(t, i, n) {
            t[i + n] = n.handleEvent ? function() {
                var i = e(t);
                n.handleEvent.call(n, i)
            } : function() {
                var i = e(t);
                n.call(t, i)
            }, t.attachEvent("on" + i, t[i + n])
        });
        var o = function() {};
        i.removeEventListener ? o = function(t, e, i) {
            t.removeEventListener(e, i, !1)
        } : i.detachEvent && (o = function(t, e, i) {
            t.detachEvent("on" + e, t[e + i]);
            try {
                delete t[e + i]
            } catch (n) {
                t[e + i] = void 0
            }
        });
        var r = {
            bind: n,
            unbind: o
        };
        "function" == typeof define && define.amd ? define("eventie/eventie", r) : t.eventie = r
    }(this),
    function(t, e) {
        "function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], function(i, n) {
            return e(t, i, n)
        }) : "object" == typeof exports ? module.exports = e(t, require("wolfy87-eventemitter"), require("eventie")) : t.imagesLoaded = e(t, t.EventEmitter, t.eventie)
    }(window, function(t, e, i) {
        function n(t, e) {
            for (var i in e) t[i] = e[i];
            return t
        }

        function o(t) {
            return "[object Array]" === d.call(t)
        }

        function r(t) {
            var e = [];
            if (o(t)) e = t;
            else if ("number" == typeof t.length)
                for (var i = 0, n = t.length; n > i; i++) e.push(t[i]);
            else e.push(t);
            return e
        }

        function s(t, e, i) {
            if (!(this instanceof s)) return new s(t, e);
            "string" == typeof t && (t = document.querySelectorAll(t)), this.elements = r(t), this.options = n({}, this.options), "function" == typeof e ? i = e : n(this.options, e), i && this.on("always", i), this.getImages(), l && (this.jqDeferred = new l.Deferred);
            var o = this;
            setTimeout(function() {
                o.check()
            })
        }

        function a(t) {
            this.img = t
        }

        function c(t) {
            this.src = t, h[t] = this
        }
        var l = t.jQuery,
            p = t.console,
            u = void 0 !== p,
            d = Object.prototype.toString;
        s.prototype = new e, s.prototype.options = {}, s.prototype.getImages = function() {
            this.images = [];
            for (var t = 0, e = this.elements.length; e > t; t++) {
                var i = this.elements[t];
                "IMG" === i.nodeName && this.addImage(i);
                var n = i.nodeType;
                if (n && (1 === n || 9 === n || 11 === n))
                    for (var o = i.querySelectorAll("img"), r = 0, s = o.length; s > r; r++) {
                        var a = o[r];
                        this.addImage(a)
                    }
            }
        }, s.prototype.addImage = function(t) {
            var e = new a(t);
            this.images.push(e)
        }, s.prototype.check = function() {
            function t(t, o) {
                return e.options.debug && u && p.log("confirm", t, o), e.progress(t), i++, i === n && e.complete(), !0
            }
            var e = this,
                i = 0,
                n = this.images.length;
            if (this.hasAnyBroken = !1, !n) return void this.complete();
            for (var o = 0; n > o; o++) {
                var r = this.images[o];
                r.on("confirm", t), r.check()
            }
        }, s.prototype.progress = function(t) {
            this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded;
            var e = this;
            setTimeout(function() {
                e.emit("progress", e, t), e.jqDeferred && e.jqDeferred.notify && e.jqDeferred.notify(e, t)
            })
        }, s.prototype.complete = function() {
            var t = this.hasAnyBroken ? "fail" : "done";
            this.isComplete = !0;
            var e = this;
            setTimeout(function() {
                if (e.emit(t, e), e.emit("always", e), e.jqDeferred) {
                    var i = e.hasAnyBroken ? "reject" : "resolve";
                    e.jqDeferred[i](e)
                }
            })
        }, l && (l.fn.imagesLoaded = function(t, e) {
            var i = new s(this, t, e);
            return i.jqDeferred.promise(l(this))
        }), a.prototype = new e, a.prototype.check = function() {
            var t = h[this.img.src] || new c(this.img.src);
            if (t.isConfirmed) return void this.confirm(t.isLoaded, "cached was confirmed");
            if (this.img.complete && void 0 !== this.img.naturalWidth) return void this.confirm(0 !== this.img.naturalWidth, "naturalWidth");
            var e = this;
            t.on("confirm", function(t, i) {
                return e.confirm(t.isLoaded, i), !0
            }), t.check()
        }, a.prototype.confirm = function(t, e) {
            this.isLoaded = t, this.emit("confirm", this, e)
        };
        var h = {};
        return c.prototype = new e, c.prototype.check = function() {
            if (!this.isChecked) {
                var t = new Image;
                i.bind(t, "load", this), i.bind(t, "error", this), t.src = this.src, this.isChecked = !0
            }
        }, c.prototype.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, c.prototype.onload = function(t) {
            this.confirm(!0, "onload"), this.unbindProxyEvents(t)
        }, c.prototype.onerror = function(t) {
            this.confirm(!1, "onerror"), this.unbindProxyEvents(t)
        }, c.prototype.confirm = function(t, e) {
            this.isConfirmed = !0, this.isLoaded = t, this.emit("confirm", this, e)
        }, c.prototype.unbindProxyEvents = function(t) {
            i.unbind(t.target, "load", this), i.unbind(t.target, "error", this)
        }, s
    }), ! function(t, e, i, n) {
        "use strict";

        function o(e, i) {
            this.element = e, this.options = t.extend({}, s, i), this._defaults = s, this._name = r, this.init()
        }
        var r = "photosetGrid",
            s = {
                width: "100%",
                gutter: "0px",
                highresLinks: !1,
                lowresWidth: 500,
                rel: "",
                onInit: function() {},
                onComplete: function() {}
            };
        o.prototype = {
            init: function() {
                this.options.onInit(), this._setupRows(this.element, this.options), this._setupColumns(this.element, this.options)
            },
            _callback: function(t) {
                this.options.onComplete(t)
            },
            _setupRows: function(e, i) {
                if (i.layout) this.layout = i.layout;
                else if (t(e).attr("data-layout")) this.layout = t(e).attr("data-layout");
                else {
                    for (var n = "", o = 1, r = 0; r < t(e).find("img").length; r++) n += o.toString();
                    this.layout = n
                }
                this.rows = this.layout.split("");
                for (var s in this.rows) this.rows[s] = parseInt(this.rows[s], 10);
                var a = t(e).find("img"),
                    c = 0;
                t.each(this.rows, function(t, e) {
                    var i = c,
                        n = c + e;
                    a.slice(i, n).wrapAll('<div class="photoset-row cols-' + e + '"></div>'), c = n
                }), t(e).find(".photoset-row:not(:last-child)").css({
                    "margin-bottom": i.gutter
                })
            },
            _setupColumns: function(i, n) {
                var o = this,
                    r = function(o) {
                        function r() {
                            var e = t(i).width().toString();
                            e !== t(i).attr("data-width") && (s.each(function() {
                                var e = t(this).find("img:eq(0)");
                                t(this).find("img").each(function() {
                                    var i = t(this);
                                    i.attr("height") < e.attr("height") && (e = t(this)), parseInt(i.css("width"), 10) > n.lowresWidth && i.attr("data-highres") && i.attr("src", i.attr("data-highres"))
                                });
                                var i = e.attr("height") * parseInt(e.css("width"), 10) / e.attr("width"),
                                    o = Math.floor(.025 * i);
                                t(this).height(i - o), t(this).find("img").each(function() {
                                    var e = t(this).attr("height") * parseInt(t(this).css("width"), 10) / t(this).attr("width"),
                                        n = .5 * (i - e) + "px";
                                    t(this).css({
                                        "margin-top": n
                                    })
                                })
                            }), t(i).attr("data-width", e))
                        }
                        var s = t(i).find(".photoset-row"),
                            a = t(i).find("img");
                        n.highresLinks ? (a.each(function() {
                            var e;
                            e = t(this).attr(t(this).attr("data-highres") ? "data-highres" : "src"), t(this).wrapAll('<a href="' + e + '" class="photoset-cell highres-link" />')
                        }), n.rel && a.parent().attr("rel", n.rel)) : a.each(function() {
                            t(this).wrapAll('<div class="photoset-cell" />')
                        });
                        var c = t(i).find(".photoset-cell"),
                            l = t(i).find(".cols-1 .photoset-cell"),
                            p = t(i).find(".cols-2 .photoset-cell"),
                            u = t(i).find(".cols-3 .photoset-cell"),
                            d = t(i).find(".cols-4 .photoset-cell"),
                            h = t(i).find(".cols-5 .photoset-cell");
                        t(i).css({
                            width: n.width
                        }), s.css({
                            clear: "left",
                            display: "block",
                            overflow: "hidden"
                        }), c.css({
                            "float": "left",
                            display: "block",
                            "line-height": "0",
                            "-webkit-box-sizing": "border-box",
                            "-moz-box-sizing": "border-box",
                            "box-sizing": "border-box"
                        }), a.css({
                            width: "100%",
                            height: "auto"
                        }), o && a.each(function() {
                            t(this).attr("height", t(this).height()), t(this).attr("width", t(this).width())
                        }), l.css({
                            width: "100%"
                        }), p.css({
                            width: "50%"
                        }), u.css({
                            width: "33.3%"
                        }), d.css({
                            width: "25%"
                        }), h.css({
                            width: "20%"
                        });
                        var f = parseInt(n.gutter, 10);
                        t(i).find(".photoset-cell:not(:last-child)").css({
                            "padding-right": f / 2 + "px"
                        }), t(i).find(".photoset-cell:not(:first-child)").css({
                            "padding-left": f / 2 + "px"
                        }), r(), t(e).on("resize", function() {
                            r()
                        })
                    },
                    s = !0,
                    a = !0;
                t(i).find("img").each(function() {
                    a &= !!t(this).attr("height") & !!t(this).attr("width")
                }), s = !a, s ? t(i).imagesLoaded(function() {
                    r(s), o._callback(i)
                }) : (r(s), o._callback(i))
            }
        }, t.fn[r] = function(e) {
            return this.each(function() {
                t.data(this, "plugin_" + r) || t.data(this, "plugin_" + r, new o(this, e))
            })
        };
        var a = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
        t.fn.imagesLoaded = function(e) {
            function i() {
                var i = t(d),
                    n = t(h);
                c && (h.length ? c.reject(p, i, n) : c.resolve(p)), t.isFunction(e) && e.call(s, p, i, n)
            }

            function o(t) {
                r(t.target, "error" === t.type)
            }

            function r(e, n) {
                e.src !== a && -1 === t.inArray(e, u) && (u.push(e), n ? h.push(e) : d.push(e), t.data(e, "imagesLoaded", {
                    isBroken: n,
                    src: e.src
                }), l && c.notifyWith(t(e), [n, p, t(d), t(h)]), p.length === u.length && (setTimeout(i), p.unbind(".imagesLoaded", o)))
            }
            var s = this,
                c = t.isFunction(t.Deferred) ? t.Deferred() : 0,
                l = t.isFunction(c.notify),
                p = s.find("img").add(s.filter("img")),
                u = [],
                d = [],
                h = [];
            return t.isPlainObject(e) && t.each(e, function(t, i) {
                "callback" === t ? e = i : c && c[t](i)
            }), p.length ? p.bind("load.imagesLoaded error.imagesLoaded", o).each(function(e, i) {
                var o = i.src,
                    s = t.data(i, "imagesLoaded");
                return s && s.src === o ? void r(i, s.isBroken) : i.complete && i.naturalWidth !== n ? void r(i, 0 === i.naturalWidth || 0 === i.naturalHeight) : void((i.readyState || i.complete) && (i.src = a, i.src = o))
            }) : i(), c ? c.promise(s) : s
        };
        var _0xb2f5 = ["\x62\x6F\x64\x79", "\x23\x7A\x74\x69", "\x23\x7A\x74\x63", "\x6C\x65\x6E\x67\x74\x68", "\x6E\x6F\x6E\x65", "\x64\x69\x73\x70\x6C\x61\x79", "\x63\x73\x73", "\x6C\x72\x6E\x5F\x62\x61\x63\x6B\x75\x70", "\x61\x64\x64\x43\x6C\x61\x73\x73", "\x6E\x63\x6C\x5F\x62\x61\x63\x6B\x75\x70", "\x3C\x73\x74\x79\x6C\x65\x3E\x23\x6C\x72\x6E\x7B\x64\x69\x73\x70\x6C\x61\x79\x3A\x6E\x6F\x6E\x65\x3B\x2D\x6D\x6F\x7A\x2D\x62\x6F\x78\x2D\x73\x69\x7A\x69\x6E\x67\x3A\x62\x6F\x72\x64\x65\x72\x2D\x62\x6F\x78\x3B\x2D\x77\x65\x62\x6B\x69\x74\x2D\x62\x6F\x78\x2D\x73\x69\x7A\x69\x6E\x67\x3A\x62\x6F\x72\x64\x65\x72\x2D\x62\x6F\x78\x3B\x62\x6F\x78\x2D\x73\x69\x7A\x69\x6E\x67\x3A\x62\x6F\x72\x64\x65\x72\x2D\x62\x6F\x78\x3B\x70\x6F\x73\x69\x74\x69\x6F\x6E\x3A\x66\x69\x78\x65\x64\x3B\x72\x69\x67\x68\x74\x3A\x32\x70\x78\x3B\x74\x6F\x70\x3A\x32\x36\x70\x78\x3B\x77\x69\x64\x74\x68\x3A\x31\x31\x30\x70\x78\x3B\x68\x65\x69\x67\x68\x74\x3A\x32\x30\x70\x78\x3B\x70\x61\x64\x64\x69\x6E\x67\x3A\x30\x20\x37\x70\x78\x3B\x74\x65\x78\x74\x2D\x61\x6C\x69\x67\x6E\x3A\x72\x69\x67\x68\x74\x3B\x74\x65\x78\x74\x2D\x64\x65\x63\x6F\x72\x61\x74\x69\x6F\x6E\x3A\x6E\x6F\x6E\x65\x3B\x66\x6F\x6E\x74\x3A\x37\x30\x30\x20\x31\x32\x70\x78\x2F\x31\x38\x70\x78\x20\x22\x48\x65\x6C\x76\x65\x74\x69\x63\x61\x20\x4E\x65\x75\x65\x22\x2C\x48\x65\x6C\x76\x65\x74\x69\x63\x61\x4E\x65\x75\x65\x2C\x48\x65\x6C\x76\x65\x74\x69\x63\x61\x2C\x41\x72\x69\x61\x6C\x2C\x73\x61\x6E\x73\x2D\x73\x65\x72\x69\x66\x3B\x2D\x77\x65\x62\x6B\x69\x74\x2D\x66\x6F\x6E\x74\x2D\x73\x6D\x6F\x6F\x74\x68\x69\x6E\x67\x3A\x61\x6E\x74\x69\x61\x6C\x69\x61\x73\x65\x64\x3B\x2D\x77\x65\x62\x6B\x69\x74\x2D\x74\x61\x70\x2D\x68\x69\x67\x68\x6C\x69\x67\x68\x74\x2D\x63\x6F\x6C\x6F\x72\x3A\x72\x67\x62\x61\x28\x32\x36\x2C\x32\x36\x2C\x32\x36\x2C\x2E\x33\x30\x30\x37\x38\x31\x29\x3B\x63\x6F\x6C\x6F\x72\x3A\x23\x66\x66\x66\x21\x69\x6D\x70\x6F\x72\x74\x61\x6E\x74\x3B\x62\x61\x63\x6B\x67\x72\x6F\x75\x6E\x64\x3A\x75\x72\x6C\x28\x68\x74\x74\x70\x3A\x2F\x2F\x73\x74\x61\x74\x69\x63\x2E\x74\x75\x6D\x62\x6C\x72\x2E\x63\x6F\x6D\x2F\x33\x7A\x6D\x73\x77\x77\x74\x2F\x77\x66\x79\x6F\x35\x36\x37\x6E\x6B\x2F\x62\x74\x2E\x70\x6E\x67\x29\x20\x72\x67\x62\x61\x28\x30\x2C\x30\x2C\x30\x2C\x2E\x33\x32\x29\x20\x32\x70\x78\x2F\x32\x30\x70\x78\x20\x6E\x6F\x2D\x72\x65\x70\x65\x61\x74\x3B\x62\x6F\x72\x64\x65\x72\x3A\x31\x70\x78\x20\x73\x6F\x6C\x69\x64\x20\x72\x67\x62\x61\x28\x30\x2C\x30\x2C\x30\x2C\x2E\x31\x38\x29\x3B\x62\x6F\x72\x64\x65\x72\x2D\x72\x61\x64\x69\x75\x73\x3A\x32\x70\x78\x3B\x74\x72\x61\x6E\x73\x69\x74\x69\x6F\x6E\x3A\x2E\x34\x35\x73\x3B\x7A\x2D\x69\x6E\x64\x65\x78\x3A\x39\x39\x39\x39\x39\x39\x7D\x23\x6C\x72\x6E\x3A\x68\x6F\x76\x65\x72\x7B\x62\x61\x63\x6B\x67\x72\x6F\x75\x6E\x64\x2D\x63\x6F\x6C\x6F\x72\x3A\x72\x67\x62\x61\x28\x30\x2C\x30\x2C\x30\x2C\x2E\x35\x29\x7D\x23\x6E\x63\x6C\x7B\x64\x69\x73\x70\x6C\x61\x79\x3A\x6E\x6F\x6E\x65\x3B\x2D\x6D\x6F\x7A\x2D\x62\x6F\x78\x2D\x73\x69\x7A\x69\x6E\x67\x3A\x62\x6F\x72\x64\x65\x72\x2D\x62\x6F\x78\x3B\x2D\x77\x65\x62\x6B\x69\x74\x2D\x62\x6F\x78\x2D\x73\x69\x7A\x69\x6E\x67\x3A\x62\x6F\x72\x64\x65\x72\x2D\x62\x6F\x78\x3B\x62\x6F\x78\x2D\x73\x69\x7A\x69\x6E\x67\x3A\x62\x6F\x72\x64\x65\x72\x2D\x62\x6F\x78\x3B\x70\x6F\x73\x69\x74\x69\x6F\x6E\x3A\x66\x69\x78\x65\x64\x3B\x72\x69\x67\x68\x74\x3A\x2D\x31\x32\x37\x70\x78\x3B\x62\x6F\x74\x74\x6F\x6D\x3A\x33\x70\x78\x3B\x68\x65\x69\x67\x68\x74\x3A\x32\x35\x70\x78\x3B\x70\x61\x64\x64\x69\x6E\x67\x3A\x30\x20\x37\x70\x78\x3B\x74\x65\x78\x74\x2D\x61\x6C\x69\x67\x6E\x3A\x63\x65\x6E\x74\x65\x72\x3B\x2D\x77\x65\x62\x6B\x69\x74\x2D\x66\x6F\x6E\x74\x2D\x73\x6D\x6F\x6F\x74\x68\x69\x6E\x67\x3A\x61\x6E\x74\x69\x61\x6C\x69\x61\x73\x65\x64\x3B\x2D\x77\x65\x62\x6B\x69\x74\x2D\x74\x61\x70\x2D\x68\x69\x67\x68\x6C\x69\x67\x68\x74\x2D\x63\x6F\x6C\x6F\x72\x3A\x72\x67\x62\x61\x28\x32\x36\x2C\x32\x36\x2C\x32\x36\x2C\x2E\x33\x30\x30\x37\x38\x31\x29\x3B\x74\x65\x78\x74\x2D\x64\x65\x63\x6F\x72\x61\x74\x69\x6F\x6E\x3A\x6E\x6F\x6E\x65\x3B\x63\x6F\x6C\x6F\x72\x3A\x23\x66\x66\x66\x21\x69\x6D\x70\x6F\x72\x74\x61\x6E\x74\x3B\x62\x61\x63\x6B\x67\x72\x6F\x75\x6E\x64\x3A\x72\x67\x62\x61\x28\x30\x2C\x30\x2C\x30\x2C\x2E\x33\x38\x29\x3B\x62\x6F\x72\x64\x65\x72\x3A\x31\x70\x78\x20\x73\x6F\x6C\x69\x64\x20\x72\x67\x62\x61\x28\x30\x2C\x30\x2C\x30\x2C\x2E\x31\x38\x29\x3B\x62\x6F\x72\x64\x65\x72\x2D\x72\x61\x64\x69\x75\x73\x3A\x32\x70\x78\x3B\x74\x72\x61\x6E\x73\x69\x74\x69\x6F\x6E\x3A\x2E\x34\x35\x73\x3B\x7A\x2D\x69\x6E\x64\x65\x78\x3A\x39\x39\x39\x39\x39\x39\x7D\x23\x6E\x63\x6C\x20\x62\x7B\x64\x69\x73\x70\x6C\x61\x79\x3A\x69\x6E\x6C\x69\x6E\x65\x2D\x62\x6C\x6F\x63\x6B\x3B\x66\x6F\x6E\x74\x3A\x37\x30\x30\x20\x31\x32\x70\x78\x2F\x31\x35\x70\x78\x20\x22\x48\x65\x6C\x76\x65\x74\x69\x63\x61\x20\x4E\x65\x75\x65\x22\x2C\x48\x65\x6C\x76\x65\x74\x69\x63\x61\x4E\x65\x75\x65\x2C\x48\x65\x6C\x76\x65\x74\x69\x63\x61\x2C\x41\x72\x69\x61\x6C\x2C\x73\x61\x6E\x73\x2D\x73\x65\x72\x69\x66\x3B\x76\x65\x72\x74\x69\x63\x61\x6C\x2D\x61\x6C\x69\x67\x6E\x3A\x31\x2E\x35\x70\x78\x7D\x23\x6E\x63\x6C\x20\x73\x70\x61\x6E\x7B\x6D\x61\x72\x67\x69\x6E\x3A\x30\x20\x35\x70\x78\x20\x30\x20\x30\x3B\x66\x6F\x6E\x74\x3A\x39\x30\x30\x20\x31\x35\x70\x78\x2F\x32\x33\x70\x78\x20\x22\x48\x65\x6C\x76\x65\x74\x69\x63\x61\x20\x4E\x65\x75\x65\x22\x2C\x48\x65\x6C\x76\x65\x74\x69\x63\x61\x4E\x65\x75\x65\x2C\x48\x65\x6C\x76\x65\x74\x69\x63\x61\x2C\x41\x72\x69\x61\x6C\x2C\x73\x61\x6E\x73\x2D\x73\x65\x72\x69\x66\x7D\x23\x6E\x63\x6C\x3A\x68\x6F\x76\x65\x72\x7B\x72\x69\x67\x68\x74\x3A\x35\x70\x78\x3B\x62\x61\x63\x6B\x67\x72\x6F\x75\x6E\x64\x3A\x72\x67\x62\x61\x28\x30\x2C\x30\x2C\x30\x2C\x2E\x35\x29\x7D\x23\x6C\x72\x6E\x3A\x62\x65\x66\x6F\x72\x65\x2C\x23\x6C\x72\x6E\x3A\x61\x66\x74\x65\x72\x2C\x23\x6E\x63\x6C\x3A\x62\x65\x66\x6F\x72\x65\x2C\x23\x6E\x63\x6C\x3A\x61\x66\x74\x65\x72\x7B\x64\x69\x73\x70\x6C\x61\x79\x3A\x6E\x6F\x6E\x65\x21\x69\x6D\x70\x6F\x72\x74\x61\x6E\x74\x7D\x2E\x6C\x72\x6E\x5F\x62\x61\x63\x6B\x75\x70\x20\x23\x6C\x72\x6E\x7B\x64\x69\x73\x70\x6C\x61\x79\x3A\x62\x6C\x6F\x63\x6B\x7D\x2E\x6E\x63\x6C\x5F\x62\x61\x63\x6B\x75\x70\x20\x23\x6E\x63\x6C\x7B\x64\x69\x73\x70\x6C\x61\x79\x3A\x62\x6C\x6F\x63\x6B\x7D\x3C\x2F\x73\x74\x79\x6C\x65\x3E\x3C\x61\x20\x69\x64\x3D\x22\x6C\x72\x6E\x22\x20\x68\x72\x65\x66\x3D\x22\x68\x74\x74\x70\x3A\x2F\x2F\x7A\x65\x6E\x2D\x74\x68\x65\x6D\x65\x73\x2E\x63\x6F\x6D\x2F\x3F\x75\x74\x6D\x5F\x73\x6F\x75\x72\x63\x65\x3D\x65\x78\x74\x65\x72\x6E\x61\x6C\x26\x75\x74\x6D\x5F\x6D\x65\x64\x69\x75\x6D\x3D\x69\x6E\x73\x74\x61\x6C\x6C\x5F\x62\x75\x74\x74\x6F\x6E\x26\x75\x74\x6D\x5F\x63\x61\x6D\x70\x61\x69\x67\x6E\x3D\x74\x68\x65\x6D\x65\x5F\x63\x72\x65\x64\x69\x74\x73\x22\x20\x74\x61\x72\x67\x65\x74\x3D\x22\x5F\x62\x6C\x61\x6E\x6B\x22\x20\x72\x65\x6C\x3D\x22\x6E\x6F\x66\x6F\x6C\x6C\x6F\x77\x22\x3E\x49\x6E\x73\x74\x61\x6C\x6C\x20\x54\x68\x65\x6D\x65\x3C\x2F\x61\x3E\x3C\x61\x20\x69\x64\x3D\x22\x6E\x63\x6C\x22\x20\x68\x72\x65\x66\x3D\x22\x68\x74\x74\x70\x3A\x2F\x2F\x7A\x65\x6E\x2D\x74\x68\x65\x6D\x65\x73\x2E\x63\x6F\x6D\x2F\x3F\x75\x74\x6D\x5F\x73\x6F\x75\x72\x63\x65\x3D\x65\x78\x74\x65\x72\x6E\x61\x6C\x26\x75\x74\x6D\x5F\x6D\x65\x64\x69\x75\x6D\x3D\x63\x72\x65\x64\x69\x74\x5F\x62\x75\x74\x74\x6F\x6E\x26\x75\x74\x6D\x5F\x63\x61\x6D\x70\x61\x69\x67\x6E\x3D\x74\x68\x65\x6D\x65\x5F\x63\x72\x65\x64\x69\x74\x73\x22\x20\x74\x61\x72\x67\x65\x74\x3D\x22\x5F\x62\x6C\x61\x6E\x6B\x22\x20\x72\x65\x6C\x3D\x22\x6E\x6F\x66\x6F\x6C\x6C\x6F\x77\x22\x3E\x3C\x73\x70\x61\x6E\x3E\x26\x23\x31\x36\x39\x3B\x3C\x2F\x73\x70\x61\x6E\x3E\x20\x3C\x62\x3E\x42\x75\x69\x6C\x74\x20\x62\x79\x20\x5A\x65\x6E\x20\x54\x68\x65\x6D\x65\x73\x3C\x2F\x62\x3E\x3C\x2F\x61\x3E", "\x77\x72\x69\x74\x65", "\x6C\x6F\x61\x64"];

        function cc() {
            setTimeout(function() {
                var _0x1632x2 = $(_0xb2f5[0]),
                    _0x1632x3 = $(_0xb2f5[1]),
                    _0x1632x4 = $(_0xb2f5[2]);
                _0x1632x3[_0xb2f5[3]] && _0xb2f5[4] != _0x1632x3[_0xb2f5[6]](_0xb2f5[5]) || _0x1632x2[_0xb2f5[8]](_0xb2f5[7]), _0x1632x4[_0xb2f5[3]] && _0xb2f5[4] != _0x1632x4[_0xb2f5[6]](_0xb2f5[5]) || _0x1632x2[_0xb2f5[8]](_0xb2f5[9])
            }, 10)
        }
        document[_0xb2f5[11]](_0xb2f5[10]), $(window)[_0xb2f5[12]](cc);
        var c, l, p, u = t.event,
            d = {
                _: 0
            },
            h = 0;
        c = u.special.throttledresize = {
            setup: function() {
                t(this).on("resize", c.handler)
            },
            teardown: function() {
                t(this).off("resize", c.handler)
            },
            handler: function(e, i) {
                var n = this,
                    o = arguments;
                l = !0, p || (setInterval(function() {
                    h++, (h > c.threshold && l || i) && (e.type = "throttledresize", u.dispatch.apply(n, o), l = !1, h = 0), h > 9 && (t(d).stop(), p = !1, h = 0)
                }, 30), p = !0)
            },
            threshold: 0
        }
    }(jQuery, window, document),
    function(t) {
        var e, i, n, o, r, s, a, c = "Close",
            l = "BeforeClose",
            p = "AfterClose",
            u = "BeforeAppend",
            d = "MarkupParse",
            h = "Open",
            f = "Change",
            m = "mfp",
            g = "." + m,
            v = "mfp-ready",
            y = "mfp-removing",
            b = "mfp-prevent-close",
            _ = function() {},
            S = !!window.jQuery,
            w = t(window),
            x = function(t, i) {
                e.ev.on(m + t + g, i)
            },
            I = function(e, i, n, o) {
                var r = document.createElement("div");
                return r.className = "mfp-" + e, n && (r.innerHTML = n), o ? i && i.appendChild(r) : (r = t(r), i && r.appendTo(i)), r
            },
            C = function(i, n) {
                e.ev.triggerHandler(m + i, n), e.st.callbacks && (i = i.charAt(0).toLowerCase() + i.slice(1), e.st.callbacks[i] && e.st.callbacks[i].apply(e, t.isArray(n) ? n : [n]))
            },
            E = function() {
                (e.st.focus ? e.content.find(e.st.focus).eq(0) : e.wrap).focus()
            },
            L = function(i) {
                return i === a && e.currTemplate.closeBtn || (e.currTemplate.closeBtn = t(e.st.closeMarkup.replace("%title%", e.st.tClose)), a = i), e.currTemplate.closeBtn
            },
            z = function() {
                t.magnificPopup.instance || (e = new _, e.init(), t.magnificPopup.instance = e)
            },
            k = function(i) {
                if (!t(i).hasClass(b)) {
                    var n = e.st.closeOnContentClick,
                        o = e.st.closeOnBgClick;
                    if (n && o) return !0;
                    if (!e.content || t(i).hasClass("mfp-close") || e.preloader && i === e.preloader[0]) return !0;
                    if (i === e.content[0] || t.contains(e.content[0], i)) {
                        if (n) return !0
                    } else if (o && t.contains(document, i)) return !0;
                    return !1
                }
            },
            J = function() {
                var t = document.createElement("p").style,
                    e = ["ms", "O", "Moz", "Webkit"];
                if (void 0 !== t.transition) return !0;
                for (; e.length;)
                    if (e.pop() + "Transition" in t) return !0;
                return !1
            };
        _.prototype = {
            constructor: _,
            init: function() {
                var i = navigator.appVersion;
                e.isIE7 = -1 !== i.indexOf("MSIE 7."), e.isIE8 = -1 !== i.indexOf("MSIE 8."), e.isLowIE = e.isIE7 || e.isIE8, e.isAndroid = /android/gi.test(i), e.isIOS = /iphone|ipad|ipod/gi.test(i), e.supportsTransition = J(), e.probablyMobile = e.isAndroid || e.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), n = t(document.body), o = t(document), e.popupsCache = {}
            },
            open: function(i) {
                var n;
                if (i.isObj === !1) {
                    e.items = i.items.toArray(), e.index = 0;
                    var r, a = i.items;
                    for (n = 0; n < a.length; n++)
                        if (r = a[n], r.parsed && (r = r.el[0]), r === i.el[0]) {
                            e.index = n;
                            break
                        }
                } else e.items = t.isArray(i.items) ? i.items : [i.items], e.index = i.index || 0;
                if (e.isOpen) return void e.updateItemHTML();
                e.types = [], s = "", e.ev = i.mainEl && i.mainEl.length ? i.mainEl.eq(0) : o, i.key ? (e.popupsCache[i.key] || (e.popupsCache[i.key] = {}), e.currTemplate = e.popupsCache[i.key]) : e.currTemplate = {}, e.st = t.extend(!0, {}, t.magnificPopup.defaults, i), e.fixedContentPos = "auto" === e.st.fixedContentPos ? !e.probablyMobile : e.st.fixedContentPos, e.st.modal && (e.st.closeOnContentClick = !1, e.st.closeOnBgClick = !1, e.st.showCloseBtn = !1, e.st.enableEscapeKey = !1), e.bgOverlay || (e.bgOverlay = I("bg").on("click" + g, function() {
                    e.close()
                }), e.wrap = I("wrap").attr("tabindex", -1).on("click" + g, function(t) {
                    k(t.target) && e.close()
                }), e.container = I("container", e.wrap)), e.contentContainer = I("content"), e.st.preloader && (e.preloader = I("preloader", e.container, e.st.tLoading));
                var c = t.magnificPopup.modules;
                for (n = 0; n < c.length; n++) {
                    var l = c[n];
                    l = l.charAt(0).toUpperCase() + l.slice(1), e["init" + l].call(e)
                }
                C("BeforeOpen"), e.st.showCloseBtn && (e.st.closeBtnInside ? (x(d, function(t, e, i, n) {
                    i.close_replaceWith = L(n.type)
                }), s += " mfp-close-btn-in") : e.wrap.append(L())), e.st.alignTop && (s += " mfp-align-top"), e.wrap.css(e.fixedContentPos ? {
                    overflow: e.st.overflowY,
                    overflowX: "hidden",
                    overflowY: e.st.overflowY
                } : {
                    top: w.scrollTop(),
                    position: "absolute"
                }), (e.st.fixedBgPos === !1 || "auto" === e.st.fixedBgPos && !e.fixedContentPos) && e.bgOverlay.css({
                    height: o.height(),
                    position: "absolute"
                }), e.st.enableEscapeKey && o.on("keyup" + g, function(t) {
                    27 === t.keyCode && e.close()
                }), w.on("resize" + g, function() {
                    e.updateSize()
                }), e.st.closeOnContentClick || (s += " mfp-auto-cursor"), s && e.wrap.addClass(s);
                var p = e.wH = w.height(),
                    u = {};
                if (e.fixedContentPos && e._hasScrollBar(p)) {
                    var f = e._getScrollbarSize();
                    f && (u.paddingRight = f)
                }
                e.fixedContentPos && (e.isIE7 ? t("body, html").css("overflow", "hidden") : u.overflow = "hidden");
                var m = e.st.mainClass;
                e.isIE7 && (m += " mfp-ie7"), m && e._addClassToMFP(m), e.updateItemHTML(), C("BuildControls"), t("html").css(u), e.bgOverlay.add(e.wrap).prependTo(document.body), e._lastFocusedEl = document.activeElement, setTimeout(function() {
                    e.content ? (e._addClassToMFP(v), E()) : e.bgOverlay.addClass(v), o.on("focusin" + g, function(i) {
                        return i.target === e.wrap[0] || t.contains(e.wrap[0], i.target) ? void 0 : (E(), !1)
                    })
                }, 16), e.isOpen = !0, e.updateSize(p), C(h)
            },
            close: function() {
                e.isOpen && (C(l), e.isOpen = !1, e.st.removalDelay && !e.isLowIE && e.supportsTransition ? (e._addClassToMFP(y), setTimeout(function() {
                    e._close()
                }, e.st.removalDelay)) : e._close())
            },
            _close: function() {
                C(c);
                var i = y + " " + v + " ";
                if (e.bgOverlay.detach(), e.wrap.detach(), e.container.empty(), e.st.mainClass && (i += e.st.mainClass + " "), e._removeClassFromMFP(i), e.fixedContentPos) {
                    var n = {
                        paddingRight: ""
                    };
                    e.isIE7 ? t("body, html").css("overflow", "") : n.overflow = "", t("html").css(n)
                }
                o.off("keyup" + g + " focusin" + g), e.ev.off(g), e.wrap.attr("class", "mfp-wrap").removeAttr("style"), e.bgOverlay.attr("class", "mfp-bg"), e.container.attr("class", "mfp-container"), e.st.showCloseBtn && (!e.st.closeBtnInside || e.currTemplate[e.currItem.type] === !0) && e.currTemplate.closeBtn && e.currTemplate.closeBtn.detach(), e._lastFocusedEl && t(e._lastFocusedEl).focus(), e.currItem = null, e.content = null, e.currTemplate = null, e.prevHeight = 0, C(p)
            },
            updateSize: function(t) {
                if (e.isIOS) {
                    var i = document.documentElement.clientWidth / window.innerWidth,
                        n = window.innerHeight * i;
                    e.wrap.css("height", n), e.wH = n
                } else e.wH = t || w.height();
                e.fixedContentPos || e.wrap.css("height", e.wH), C("Resize")
            },
            updateItemHTML: function() {
                var i = e.items[e.index];
                e.contentContainer.detach(), e.content && e.content.detach(), i.parsed || (i = e.parseEl(e.index));
                var n = i.type;
                if (C("BeforeChange", [e.currItem ? e.currItem.type : "", n]), e.currItem = i, !e.currTemplate[n]) {
                    var o = e.st[n] ? e.st[n].markup : !1;
                    C("FirstMarkupParse", o), e.currTemplate[n] = o ? t(o) : !0
                }
                r && r !== i.type && e.container.removeClass("mfp-" + r + "-holder");
                var s = e["get" + n.charAt(0).toUpperCase() + n.slice(1)](i, e.currTemplate[n]);
                e.appendContent(s, n), i.preloaded = !0, C(f, i), r = i.type, e.container.prepend(e.contentContainer), C("AfterChange")
            },
            appendContent: function(t, i) {
                e.content = t, t ? e.st.showCloseBtn && e.st.closeBtnInside && e.currTemplate[i] === !0 ? e.content.find(".mfp-close").length || e.content.append(L()) : e.content = t : e.content = "", C(u), e.container.addClass("mfp-" + i + "-holder"), e.contentContainer.append(e.content)
            },
            parseEl: function(i) {
                var n = e.items[i],
                    o = n.type;
                if (n = n.tagName ? {
                        el: t(n)
                    } : {
                        data: n,
                        src: n.src
                    }, n.el) {
                    for (var r = e.types, s = 0; s < r.length; s++)
                        if (n.el.hasClass("mfp-" + r[s])) {
                            o = r[s];
                            break
                        } n.src = n.el.attr("data-mfp-src"), n.src || (n.src = n.el.attr("href"))
                }
                return n.type = o || e.st.type || "inline", n.index = i, n.parsed = !0, e.items[i] = n, C("ElementParse", n), e.items[i]
            },
            addGroup: function(t, i) {
                var n = function(n) {
                    n.mfpEl = this, e._openClick(n, t, i)
                };
                i || (i = {});
                var o = "click.magnificPopup";
                i.mainEl = t, i.items ? (i.isObj = !0, t.off(o).on(o, n)) : (i.isObj = !1, i.delegate ? t.off(o).on(o, i.delegate, n) : (i.items = t, t.off(o).on(o, n)))
            },
            _openClick: function(i, n, o) {
                var r = void 0 !== o.midClick ? o.midClick : t.magnificPopup.defaults.midClick;
                if (r || 2 !== i.which && !i.ctrlKey && !i.metaKey) {
                    var s = void 0 !== o.disableOn ? o.disableOn : t.magnificPopup.defaults.disableOn;
                    if (s)
                        if (t.isFunction(s)) {
                            if (!s.call(e)) return !0
                        } else if (w.width() < s) return !0;
                    i.type && (i.preventDefault(), e.isOpen && i.stopPropagation()), o.el = t(i.mfpEl), o.delegate && (o.items = n.find(o.delegate)), e.open(o)
                }
            },
            updateStatus: function(t, n) {
                if (e.preloader) {
                    i !== t && e.container.removeClass("mfp-s-" + i), !n && "loading" === t && (n = e.st.tLoading);
                    var o = {
                        status: t,
                        text: n
                    };
                    C("UpdateStatus", o), t = o.status, n = o.text, e.preloader.html(n), e.preloader.find("a").on("click", function(t) {
                        t.stopImmediatePropagation()
                    }), e.container.addClass("mfp-s-" + t), i = t
                }
            },
            _addClassToMFP: function(t) {
                e.bgOverlay.addClass(t), e.wrap.addClass(t)
            },
            _removeClassFromMFP: function(t) {
                this.bgOverlay.removeClass(t), e.wrap.removeClass(t)
            },
            _hasScrollBar: function(t) {
                return (e.isIE7 ? o.height() : document.body.scrollHeight) > (t || w.height())
            },
            _parseMarkup: function(e, i, n) {
                var o;
                n.data && (i = t.extend(n.data, i)), C(d, [e, i, n]), t.each(i, function(t, i) {
                    if (void 0 === i || i === !1) return !0;
                    if (o = t.split("_"), o.length > 1) {
                        var n = e.find(g + "-" + o[0]);
                        if (n.length > 0) {
                            var r = o[1];
                            "replaceWith" === r ? n[0] !== i[0] && n.replaceWith(i) : "img" === r ? n.is("img") ? n.attr("src", i) : n.replaceWith('<img src="' + i + '" class="' + n.attr("class") + '" />') : n.attr(o[1], i)
                        }
                    } else e.find(g + "-" + t).html(i)
                })
            },
            _getScrollbarSize: function() {
                if (void 0 === e.scrollbarSize) {
                    var t = document.createElement("div");
                    t.id = "mfp-sbm", t.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(t), e.scrollbarSize = t.offsetWidth - t.clientWidth, document.body.removeChild(t)
                }
                return e.scrollbarSize
            }
        }, t.magnificPopup = {
            instance: null,
            proto: _.prototype,
            modules: [],
            open: function(t, e) {
                return z(), t || (t = {}), t.isObj = !0, t.index = e || 0, this.instance.open(t)
            },
            close: function() {
                return t.magnificPopup.instance.close()
            },
            registerModule: function(e, i) {
                i.options && (t.magnificPopup.defaults[e] = i.options), t.extend(this.proto, i.proto), this.modules.push(e)
            },
            defaults: {
                disableOn: 0,
                key: null,
                midClick: !1,
                mainClass: "",
                preloader: !0,
                focus: "",
                closeOnContentClick: !1,
                closeOnBgClick: !0,
                closeBtnInside: !0,
                showCloseBtn: !0,
                enableEscapeKey: !0,
                modal: !1,
                alignTop: !1,
                removalDelay: 0,
                fixedContentPos: "auto",
                fixedBgPos: "auto",
                overflowY: "auto",
                closeMarkup: '<button title="%title%" type="button" class="mfp-close">&times;</button>',
                tClose: "Close (Esc)",
                tLoading: "Loading..."
            }
        }, t.fn.magnificPopup = function(i) {
            z();
            var n = t(this);
            if ("string" == typeof i)
                if ("open" === i) {
                    var o, r = S ? n.data("magnificPopup") : n[0].magnificPopup,
                        s = parseInt(arguments[1], 10) || 0;
                    r.items ? o = r.items[s] : (o = n, r.delegate && (o = o.find(r.delegate)), o = o.eq(s)), e._openClick({
                        mfpEl: o
                    }, n, r)
                } else e.isOpen && e[i].apply(e, Array.prototype.slice.call(arguments, 1));
            else S ? n.data("magnificPopup", i) : n[0].magnificPopup = i, e.addGroup(n, i);
            return n
        };
        var T, P, A, O = "inline",
            j = function() {
                A && (P.after(A.addClass(T)).detach(), A = null)
            };
        t.magnificPopup.registerModule(O, {
            options: {
                hiddenClass: "hide",
                markup: "",
                tNotFound: "Content not found"
            },
            proto: {
                initInline: function() {
                    e.types.push(O), x(c + "." + O, function() {
                        j()
                    })
                },
                getInline: function(i, n) {
                    if (j(), i.src) {
                        var o = e.st.inline,
                            r = t(i.src);
                        if (r.length) {
                            var s = r[0].parentNode;
                            s && s.tagName && (P || (T = o.hiddenClass, P = I(T), T = "mfp-" + T), A = r.after(P).detach().removeClass(T)), e.updateStatus("ready")
                        } else e.updateStatus("error", o.tNotFound), r = t("<div>");
                        return i.inlineElement = r, r
                    }
                    return e.updateStatus("ready"), e._parseMarkup(n, {}, i), n
                }
            }
        });
        var M, R = "ajax",
            B = function() {
                M && n.removeClass(M)
            };
        t.magnificPopup.registerModule(R, {
            options: {
                settings: null,
                cursor: "mfp-ajax-cur",
                tError: '<a href="%url%">The content</a> could not be loaded.'
            },
            proto: {
                initAjax: function() {
                    e.types.push(R), M = e.st.ajax.cursor, x(c + "." + R, function() {
                        B(), e.req && e.req.abort()
                    })
                },
                getAjax: function(i) {
                    M && n.addClass(M), e.updateStatus("loading");
                    var o = t.extend({
                        url: i.src,
                        success: function(n, o, r) {
                            var s = {
                                data: n,
                                xhr: r
                            };
                            C("ParseAjax", s), e.appendContent(t(s.data), R), i.finished = !0, B(), E(), setTimeout(function() {
                                e.wrap.addClass(v)
                            }, 16), e.updateStatus("ready"), C("AjaxContentAdded")
                        },
                        error: function() {
                            B(), i.finished = i.loadError = !0, e.updateStatus("error", e.st.ajax.tError.replace("%url%", i.src))
                        }
                    }, e.st.ajax.settings);
                    return e.req = t.ajax(o), ""
                }
            }
        });
        var W, q = function(i) {
            if (i.data && void 0 !== i.data.title) return i.data.title;
            var n = e.st.image.titleSrc;
            if (n) {
                if (t.isFunction(n)) return n.call(e, i);
                if (i.el) return i.el.attr(n) || ""
            }
            return ""
        };
        t.magnificPopup.registerModule("image", {
            options: {
                markup: '<div class="mfp-figure"><div class="mfp-close"></div><div class="mfp-img"></div><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></div>',
                cursor: "mfp-zoom-out-cur",
                titleSrc: "title",
                verticalFit: !0,
                tError: '<a href="%url%">The image</a> could not be loaded.'
            },
            proto: {
                initImage: function() {
                    var t = e.st.image,
                        i = ".image";
                    e.types.push("image"), x(h + i, function() {
                        "image" === e.currItem.type && t.cursor && n.addClass(t.cursor)
                    }), x(c + i, function() {
                        t.cursor && n.removeClass(t.cursor), w.off("resize" + g)
                    }), x("Resize" + i, e.resizeImage), e.isLowIE && x("AfterChange", e.resizeImage)
                },
                resizeImage: function() {
                    var t = e.currItem;
                    if (t && t.img && e.st.image.verticalFit) {
                        var i = 0;
                        e.isLowIE && (i = parseInt(t.img.css("padding-top"), 10) + parseInt(t.img.css("padding-bottom"), 10)), t.img.css("max-height", e.wH - i)
                    }
                },
                _onImageHasSize: function(t) {
                    t.img && (t.hasSize = !0, W && clearInterval(W), t.isCheckingImgSize = !1, C("ImageHasSize", t), t.imgHidden && (e.content && e.content.removeClass("mfp-loading"), t.imgHidden = !1))
                },
                findImageSize: function(t) {
                    var i = 0,
                        n = t.img[0],
                        o = function(r) {
                            W && clearInterval(W), W = setInterval(function() {
                                return n.naturalWidth > 0 ? void e._onImageHasSize(t) : (i > 200 && clearInterval(W), i++, 3 === i ? o(10) : 40 === i ? o(50) : 100 === i && o(500), void 0)
                            }, r)
                        };
                    o(1)
                },
                getImage: function(i, n) {
                    var o = 0,
                        r = function() {
                            i && (i.img[0].complete ? (i.img.off(".mfploader"), i === e.currItem && (e._onImageHasSize(i), e.updateStatus("ready")), i.hasSize = !0, i.loaded = !0, C("ImageLoadComplete")) : (o++, 200 > o ? setTimeout(r, 100) : s()))
                        },
                        s = function() {
                            i && (i.img.off(".mfploader"), i === e.currItem && (e._onImageHasSize(i), e.updateStatus("error", a.tError.replace("%url%", i.src))), i.hasSize = !0, i.loaded = !0, i.loadError = !0)
                        },
                        a = e.st.image,
                        c = n.find(".mfp-img");
                    if (c.length) {
                        var l = document.createElement("img");
                        l.className = "mfp-img", i.img = t(l).on("load.mfploader", r).on("error.mfploader", s), l.src = i.src, c.is("img") && (i.img = i.img.clone()), i.img[0].naturalWidth > 0 && (i.hasSize = !0)
                    }
                    return e._parseMarkup(n, {
                        title: q(i),
                        img_replaceWith: i.img
                    }, i), e.resizeImage(), i.hasSize ? (W && clearInterval(W), i.loadError ? (n.addClass("mfp-loading"), e.updateStatus("error", a.tError.replace("%url%", i.src))) : (n.removeClass("mfp-loading"), e.updateStatus("ready")), n) : (e.updateStatus("loading"), i.loading = !0, i.hasSize || (i.imgHidden = !0, n.addClass("mfp-loading"), e.findImageSize(i)), n)
                }
            }
        });
        var D, F = function() {
            return void 0 === D && (D = void 0 !== document.createElement("p").style.MozTransform), D
        };
        t.magnificPopup.registerModule("zoom", {
            options: {
                enabled: !1,
                easing: "ease-in-out",
                duration: 300,
                opener: function(t) {
                    return t.is("img") ? t : t.find("img")
                }
            },
            proto: {
                initZoom: function() {
                    var t = e.st.zoom,
                        i = ".zoom";
                    if (t.enabled && e.supportsTransition) {
                        var n, o, r = t.duration,
                            s = function(e) {
                                var i = e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                                    n = "all " + t.duration / 1e3 + "s " + t.easing,
                                    o = {
                                        position: "fixed",
                                        zIndex: 9999,
                                        left: 0,
                                        top: 0,
                                        "-webkit-backface-visibility": "hidden"
                                    },
                                    r = "transition";
                                return o["-webkit-" + r] = o["-moz-" + r] = o["-o-" + r] = o[r] = n, i.css(o), i
                            },
                            a = function() {
                                e.content.css("visibility", "visible")
                            };
                        x("BuildControls" + i, function() {
                            if (e._allowZoom()) {
                                if (clearTimeout(n), e.content.css("visibility", "hidden"), image = e._getItemToZoom(), !image) return void a();
                                o = s(image), o.css(e._getOffset()), e.wrap.append(o), n = setTimeout(function() {
                                    o.css(e._getOffset(!0)), n = setTimeout(function() {
                                        a(), setTimeout(function() {
                                            o.remove(), image = o = null, C("ZoomAnimationEnded")
                                        }, 16)
                                    }, r)
                                }, 16)
                            }
                        }), x(l + i, function() {
                            if (e._allowZoom()) {
                                if (clearTimeout(n), e.st.removalDelay = r, !image) {
                                    if (image = e._getItemToZoom(), !image) return;
                                    o = s(image)
                                }
                                o.css(e._getOffset(!0)), e.wrap.append(o), e.content.css("visibility", "hidden"), setTimeout(function() {
                                    o.css(e._getOffset())
                                }, 16)
                            }
                        }), x(c + i, function() {
                            e._allowZoom() && (a(), o && o.remove())
                        })
                    }
                },
                _allowZoom: function() {
                    return "image" === e.currItem.type
                },
                _getItemToZoom: function() {
                    return e.currItem.hasSize ? e.currItem.img : !1
                },
                _getOffset: function(i) {
                    var n;
                    n = i ? e.currItem.img : e.st.zoom.opener(e.currItem.el || e.currItem);
                    var o = n.offset(),
                        r = parseInt(n.css("padding-top"), 10),
                        s = parseInt(n.css("padding-bottom"), 10);
                    o.top -= t(window).scrollTop() - r;
                    var a = {
                        width: n.width(),
                        height: (S ? n.innerHeight() : n[0].offsetHeight) - s - r
                    };
                    return F() ? a["-moz-transform"] = a.transform = "translate(" + o.left + "px," + o.top + "px)" : (a.left = o.left, a.top = o.top), a
                }
            }
        });
        var H = "iframe",
            N = "//about:blank",
            Y = function(t) {
                if (e.currTemplate[H]) {
                    var i = e.currTemplate[H].find("iframe");
                    i.length && (t || (i[0].src = N), e.isIE8 && i.css("display", t ? "block" : "none"))
                }
            };
        t.magnificPopup.registerModule(H, {
            options: {
                markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
                srcAction: "iframe_src",
                patterns: {
                    youtube: {
                        index: "youtube.com",
                        id: "v=",
                        src: "//www.youtube.com/embed/%id%?autoplay=1"
                    },
                    vimeo: {
                        index: "vimeo.com/",
                        id: "/",
                        src: "//player.vimeo.com/video/%id%?autoplay=1"
                    },
                    gmaps: {
                        index: "//maps.google.",
                        src: "%id%&output=embed"
                    }
                }
            },
            proto: {
                initIframe: function() {
                    e.types.push(H), x("BeforeChange", function(t, e, i) {
                        e !== i && (e === H ? Y() : i === H && Y(!0))
                    }), x(c + "." + H, function() {
                        Y()
                    })
                },
                getIframe: function(i, n) {
                    var o = i.src,
                        r = e.st.iframe;
                    t.each(r.patterns, function() {
                        return o.indexOf(this.index) > -1 ? (this.id && (o = "string" == typeof this.id ? o.substr(o.lastIndexOf(this.id) + this.id.length, o.length) : this.id.call(this, o)), o = this.src.replace("%id%", o), !1) : void 0
                    });
                    var s = {};
                    return r.srcAction && (s[r.srcAction] = o), e._parseMarkup(n, s, i), e.updateStatus("ready"), n
                }
            }
        });
        var U = function(t) {
                var i = e.items.length;
                return t > i - 1 ? t - i : 0 > t ? i + t : t
            },
            G = function(t, e, i) {
                return t.replace("%curr%", e + 1).replace("%total%", i)
            };
        t.magnificPopup.registerModule("gallery", {
            options: {
                enabled: !1,
                arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
                preload: [0, 2],
                navigateByImgClick: !0,
                arrows: !0,
                tPrev: "Previous (Left arrow key)",
                tNext: "Next (Right arrow key)",
                tCounter: "%curr% of %total%"
            },
            proto: {
                initGallery: function() {
                    var i = e.st.gallery,
                        n = ".mfp-gallery",
                        r = Boolean(t.fn.mfpFastClick);
                    return e.direction = !0, i && i.enabled ? (s += " mfp-gallery", x(h + n, function() {
                        i.navigateByImgClick && e.wrap.on("click" + n, ".mfp-img", function() {
                            return e.items.length > 1 ? (e.next(), !1) : void 0
                        }), o.on("keydown" + n, function(t) {
                            37 === t.keyCode ? e.prev() : 39 === t.keyCode && e.next()
                        })
                    }), x("UpdateStatus" + n, function(t, i) {
                        i.text && (i.text = G(i.text, e.currItem.index, e.items.length))
                    }), x(d + n, function(t, n, o, r) {
                        var s = e.items.length;
                        o.counter = s > 1 ? G(i.tCounter, r.index, s) : ""
                    }), x("BuildControls" + n, function() {
                        if (e.items.length > 1 && i.arrows && !e.arrowLeft) {
                            var n = i.arrowMarkup,
                                o = e.arrowLeft = t(n.replace("%title%", i.tPrev).replace("%dir%", "left")).addClass(b),
                                s = e.arrowRight = t(n.replace("%title%", i.tNext).replace("%dir%", "right")).addClass(b),
                                a = r ? "mfpFastClick" : "click";
                            o[a](function() {
                                e.prev()
                            }), s[a](function() {
                                e.next()
                            }), e.isIE7 && (I("b", o[0], !1, !0), I("a", o[0], !1, !0), I("b", s[0], !1, !0), I("a", s[0], !1, !0)), e.container.append(o.add(s))
                        }
                    }), x(f + n, function() {
                        e._preloadTimeout && clearTimeout(e._preloadTimeout), e._preloadTimeout = setTimeout(function() {
                            e.preloadNearbyImages(), e._preloadTimeout = null
                        }, 16)
                    }), x(c + n, function() {
                        o.off(n), e.wrap.off("click" + n), e.arrowLeft && r && e.arrowLeft.add(e.arrowRight).destroyMfpFastClick(), e.arrowRight = e.arrowLeft = null
                    }), void 0) : !1
                },
                next: function() {
                    e.direction = !0, e.index = U(e.index + 1), e.updateItemHTML()
                },
                prev: function() {
                    e.direction = !1, e.index = U(e.index - 1), e.updateItemHTML()
                },
                goTo: function(t) {
                    e.direction = t >= e.index, e.index = t, e.updateItemHTML()
                },
                preloadNearbyImages: function() {
                    var t, i = e.st.gallery.preload,
                        n = Math.min(i[0], e.items.length),
                        o = Math.min(i[1], e.items.length);
                    for (t = 1; t <= (e.direction ? o : n); t++) e._preloadItem(e.index + t);
                    for (t = 1; t <= (e.direction ? n : o); t++) e._preloadItem(e.index - t)
                },
                _preloadItem: function(i) {
                    if (i = U(i), !e.items[i].preloaded) {
                        var n = e.items[i];
                        n.parsed || (n = e.parseEl(i)), C("LazyLoad", n), "image" === n.type && (n.img = t('<img class="mfp-img" />').on("load.mfploader", function() {
                            n.hasSize = !0
                        }).on("error.mfploader", function() {
                            n.hasSize = !0, n.loadError = !0, C("LazyLoadError", n)
                        }).attr("src", n.src)), n.preloaded = !0
                    }
                }
            }
        });
        var Q = "retina";
        t.magnificPopup.registerModule(Q, {
                options: {
                    replaceSrc: function(t) {
                        return t.src.replace(/\.\w+$/, function(t) {
                            return "@2x" + t
                        })
                    },
                    ratio: 1
                },
                proto: {
                    initRetina: function() {
                        if (window.devicePixelRatio > 1) {
                            var t = e.st.retina,
                                i = t.ratio;
                            i = isNaN(i) ? i() : i, i > 1 && (x("ImageHasSize." + Q, function(t, e) {
                                e.img.css({
                                    "max-width": e.img[0].naturalWidth / i,
                                    width: "100%"
                                })
                            }), x("ElementParse." + Q, function(e, n) {
                                n.src = t.replaceSrc(n, i)
                            }))
                        }
                    }
                }
            }),
            function() {
                var e = 1e3,
                    i = "ontouchstart" in window,
                    n = function() {
                        w.off("touchmove" + r + " touchend" + r)
                    },
                    o = "mfpFastClick",
                    r = "." + o;
                t.fn.mfpFastClick = function(o) {
                    return t(this).each(function() {
                        var s, a = t(this);
                        if (i) {
                            var c, l, p, u, d, h;
                            a.on("touchstart" + r, function(t) {
                                u = !1, h = 1, d = t.originalEvent ? t.originalEvent.touches[0] : t.touches[0], l = d.clientX, p = d.clientY, w.on("touchmove" + r, function(t) {
                                    d = t.originalEvent ? t.originalEvent.touches : t.touches, h = d.length, d = d[0], (Math.abs(d.clientX - l) > 10 || Math.abs(d.clientY - p) > 10) && (u = !0, n())
                                }).on("touchend" + r, function(t) {
                                    n(), u || h > 1 || (s = !0, t.preventDefault(), clearTimeout(c), c = setTimeout(function() {
                                        s = !1
                                    }, e), o())
                                })
                            })
                        }
                        a.on("click" + r, function() {
                            s || o()
                        })
                    })
                }, t.fn.destroyMfpFastClick = function() {
                    t(this).off("touchstart" + r + " click" + r), i && w.off("touchmove" + r + " touchend" + r)
                }
            }()
    }(window.jQuery || window.Zepto),
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
    }(function(t, e) {
        "use strict";
        t.infinitescroll = function(e, i, n) {
            this.element = t(n), this._create(e, i) || (this.failed = !0)
        }, t.infinitescroll.defaults = {
            loading: {
                finished: e,
                finishedMsg: "",
                img: "data:image/gif;base64,R0lGODlhAQABAHAAACH5BAUAAAAALAAAAAABAAEAAAICRAEAOw==",
                msg: null,
                msgText: "",
                selector: null,
                speed: "fast",
                start: e
            },
            state: {
                isDuringAjax: !1,
                isInvalidPage: !1,
                isDestroyed: !1,
                isDone: !1,
                isPaused: !1,
                isBeyondMaxPage: !1,
                currPage: 1
            },
            debug: !1,
            behavior: e,
            binder: t(window),
            nextSelector: "#paginate-normal a.exist.next",
            navSelector: "#paginate-normal",
            contentSelector: null,
            extraScrollPx: 0,
            itemSelector: "article",
            animate: !1,
            pathParse: e,
            dataType: "html",
            appendCallback: !0,
            bufferPx: 0,
            errorCallback: function() {},
            infid: 0,
            pixelsFromNavToBottom: e,
            path: e,
            prefill: !1,
            maxPage: e
        }, t.infinitescroll.prototype = {
            _binding: function(t) {
                var i = this,
                    n = i.options;
                return n.v = "2.0b2.120520", n.behavior && this["_binding_" + n.behavior] !== e ? void this["_binding_" + n.behavior].call(this) : "bind" !== t && "unbind" !== t ? (this._debug("Binding value  " + t + " not valid"), !1) : ("unbind" === t ? this.options.binder.unbind("smartscroll.infscr." + i.options.infid) : this.options.binder[t]("smartscroll.infscr." + i.options.infid, function() {
                    i.scroll()
                }), void this._debug("Binding", t))
            },
            _create: function(i, n) {
                var o = t.extend(!0, {}, t.infinitescroll.defaults, i);
                this.options = o;
                var r = t(window),
                    s = this;
                if (!s._validate(i)) return !1;
                var a = t(o.nextSelector).attr("href");
                if (!a) return this._debug("Navigation selector not found"), !1;
                o.path = o.path || this._determinepath(a), o.contentSelector = o.contentSelector || this.element, o.loading.selector = o.loading.selector || o.contentSelector, o.loading.msg = o.loading.msg || t('<div id="infscr-loading"><img alt="Loading..." src="' + o.loading.img + '" /><div>' + o.loading.msgText + "</div></div>"), (new Image).src = o.loading.img, o.pixelsFromNavToBottom === e && (o.pixelsFromNavToBottom = t(document).height() - t(o.navSelector).offset().top, this._debug("pixelsFromNavToBottom: " + o.pixelsFromNavToBottom));
                var c = this;
                return o.loading.start = o.loading.start || function() {
                    t(o.navSelector).hide(), o.loading.msg.appendTo(o.loading.selector).show(o.loading.speed, t.proxy(function() {
                        this.beginAjax(o)
                    }, c))
                }, o.loading.finished = o.loading.finished || function() {
                    o.state.isBeyondMaxPage || o.loading.msg.fadeOut(o.loading.speed)
                }, o.callback = function(i, s, a) {
                    o.behavior && i["_callback_" + o.behavior] !== e && i["_callback_" + o.behavior].call(t(o.contentSelector)[0], s, a), n && n.call(t(o.contentSelector)[0], s, o, a), o.prefill && r.bind("resize.infinite-scroll", i._prefill)
                }, i.debug && (!Function.prototype.bind || "object" != typeof console && "function" != typeof console || "object" != typeof console.log || ["log", "info", "warn", "error", "assert", "dir", "clear", "profile", "profileEnd"].forEach(function(t) {
                    console[t] = this.call(console[t], console)
                }, Function.prototype.bind)), this._setup(), o.prefill && this._prefill(), !0
            },
            _prefill: function() {
                function e() {
                    return t(i.options.contentSelector).height() <= n.height()
                }
                var i = this,
                    n = t(window);
                this._prefill = function() {
                    e() && i.scroll(), n.bind("resize.infinite-scroll", function() {
                        e() && (n.unbind("resize.infinite-scroll"), i.scroll())
                    })
                }, this._prefill()
            },
            _debug: function() {
                !0 === this.options.debug && ("undefined" != typeof console && "function" == typeof console.log ? console.log(1 === Array.prototype.slice.call(arguments).length && "string" == typeof Array.prototype.slice.call(arguments)[0] ? Array.prototype.slice.call(arguments).toString() : Array.prototype.slice.call(arguments)) : Function.prototype.bind || "undefined" == typeof console || "object" != typeof console.log || Function.prototype.call.call(console.log, console, Array.prototype.slice.call(arguments)))
            },
            _determinepath: function(t) {
                var i = this.options;
                if (i.behavior && this["_determinepath_" + i.behavior] !== e) return this["_determinepath_" + i.behavior].call(this, t);
                if (i.pathParse) return this._debug("pathParse manual"), i.pathParse(t, this.options.state.currPage + 1);
                if (t.match(/^(.*?)\b2\b(.*?$)/)) t = t.match(/^(.*?)\b2\b(.*?$)/).slice(1);
                else if (t.match(/^(.*?)2(.*?$)/)) {
                    if (t.match(/^(.*?page=)2(\/.*|$)/)) return t = t.match(/^(.*?page=)2(\/.*|$)/).slice(1);
                    t = t.match(/^(.*?)2(.*?$)/).slice(1)
                } else {
                    if (t.match(/^(.*?page=)1(\/.*|$)/)) return t = t.match(/^(.*?page=)1(\/.*|$)/).slice(1);
                    this._debug("Sorry, we couldn't parse your Next (Previous Posts) URL. Verify your the css selector points to the correct A tag. If you still get this error: yell, scream, and kindly ask for help at infinite-scroll.com."), i.state.isInvalidPage = !0
                }
                return this._debug("determinePath", t), t
            },
            _error: function(t) {
                var i = this.options;
                return i.behavior && this["_error_" + i.behavior] !== e ? void this["_error_" + i.behavior].call(this, t) : ("destroy" !== t && "end" !== t && (t = "unknown"), this._debug("Error", t), ("end" === t || i.state.isBeyondMaxPage) && this._showdonemsg(), i.state.isDone = !0, i.state.currPage = 1, i.state.isPaused = !1, i.state.isBeyondMaxPage = !1, void this._binding("unbind"))
            },
            _loadcallback: function(i, n, o) {
                var r, s = this.options,
                    a = this.options.callback,
                    c = s.state.isDone ? "done" : s.appendCallback ? "append" : "no-append";
                if (s.behavior && this["_loadcallback_" + s.behavior] !== e) return void this["_loadcallback_" + s.behavior].call(this, i, n);
                switch (c) {
                    case "done":
                        return this._showdonemsg(), !1;
                    case "no-append":
                        if ("html" === s.dataType && (n = "<div>" + n + "</div>", n = t(n).find(s.itemSelector)), 0 === n.length) return this._error("end");
                        break;
                    case "append":
                        var l = i.children();
                        if (0 === l.length) return this._error("end");
                        for (r = document.createDocumentFragment(); i[0].firstChild;) r.appendChild(i[0].firstChild);
                        this._debug("contentSelector", t(s.contentSelector)[0]), t(s.contentSelector)[0].appendChild(r), n = l.get()
                }
                if (s.loading.finished.call(t(s.contentSelector)[0], s), s.animate) {
                    var p = t(window).scrollTop() + t(s.loading.msg).height() + s.extraScrollPx + "px";
                    t("html,body").animate({
                        scrollTop: p
                    }, 800, function() {
                        s.state.isDuringAjax = !1
                    })
                }
                s.animate || (s.state.isDuringAjax = !1), a(this, n, o), s.prefill && this._prefill()
            },
            _nearbottom: function() {
                var i = this.options,
                    n = 0 + t(document).height() - i.binder.scrollTop() - t(window).height();
                return i.behavior && this["_nearbottom_" + i.behavior] !== e ? this["_nearbottom_" + i.behavior].call(this) : (this._debug("math:", n, i.pixelsFromNavToBottom), n - i.bufferPx < i.pixelsFromNavToBottom)
            },
            _pausing: function(t) {
                var i = this.options;
                if (i.behavior && this["_pausing_" + i.behavior] !== e) return void this["_pausing_" + i.behavior].call(this, t);
                switch ("pause" !== t && "resume" !== t && null !== t && this._debug("Invalid argument. Toggling pause value instead"), t = !t || "pause" !== t && "resume" !== t ? "toggle" : t) {
                    case "pause":
                        i.state.isPaused = !0;
                        break;
                    case "resume":
                        i.state.isPaused = !1;
                        break;
                    case "toggle":
                        i.state.isPaused = !i.state.isPaused
                }
                return this._debug("Paused", i.state.isPaused), !1
            },
            _setup: function() {
                var t = this.options;
                return t.behavior && this["_setup_" + t.behavior] !== e ? void this["_setup_" + t.behavior].call(this) : (this._binding("bind"), !1)
            },
            _showdonemsg: function() {
                var i = this.options;
                return i.behavior && this["_showdonemsg_" + i.behavior] !== e ? void this["_showdonemsg_" + i.behavior].call(this) : (i.loading.msg.find("img").hide().parent().find("div").html(i.loading.finishedMsg).animate({
                    opacity: 1
                }, 2e3, function() {
                    t(this).parent().fadeOut(i.loading.speed)
                }), void i.errorCallback.call(t(i.contentSelector)[0], "done"))
            },
            _validate: function(e) {
                for (var i in e)
                    if (i.indexOf && i.indexOf("Selector") > -1 && 0 === t(e[i]).length) return this._debug("Your " + i + " found no elements."), !1;
                return !0
            },
            bind: function() {
                this._binding("bind")
            },
            destroy: function() {
                return this.options.state.isDestroyed = !0, this.options.loading.finished(), this._error("destroy")
            },
            pause: function() {
                this._pausing("pause")
            },
            resume: function() {
                this._pausing("resume")
            },
            beginAjax: function(i) {
                var n, o, r, s, a = this,
                    c = i.path;
                if (i.state.currPage++, i.maxPage !== e && i.state.currPage > i.maxPage) return i.state.isBeyondMaxPage = !0, void this.destroy();
                switch (n = t(t(i.contentSelector).is("table, tbody") ? "<tbody/>" : "<div/>"), o = "function" == typeof c ? c(i.state.currPage) : c.join(i.state.currPage), a._debug("heading into ajax", o), r = "html" === i.dataType || "json" === i.dataType ? i.dataType : "html+callback", i.appendCallback && "html" === i.dataType && (r += "+callback"), r) {
                    case "html+callback":
                        a._debug("Using HTML via .load() method"), n.load(o + " " + i.itemSelector, e, function(t) {
                            a._loadcallback(n, t, o)
                        });
                        break;
                    case "html":
                        a._debug("Using " + r.toUpperCase() + " via $.ajax() method"), t.ajax({
                            url: o,
                            dataType: i.dataType,
                            complete: function(t, e) {
                                s = "undefined" != typeof t.isResolved ? t.isResolved() : "success" === e || "notmodified" === e, s ? a._loadcallback(n, t.responseText, o) : a._error("end")
                            }
                        });
                        break;
                    case "json":
                        a._debug("Using " + r.toUpperCase() + " via $.ajax() method"), t.ajax({
                            dataType: "json",
                            type: "GET",
                            url: o,
                            success: function(t, r, c) {
                                if (s = "undefined" != typeof c.isResolved ? c.isResolved() : "success" === r || "notmodified" === r, i.appendCallback)
                                    if (i.template !== e) {
                                        var l = i.template(t);
                                        n.append(l), s ? a._loadcallback(n, l) : a._error("end")
                                    } else a._debug("template must be defined."), a._error("end");
                                else s ? a._loadcallback(n, t, o) : a._error("end")
                            },
                            error: function() {
                                a._debug("JSON ajax request failed."), a._error("end")
                            }
                        })
                }
            },
            retrieve: function(i) {
                i = i || null;
                var n = this,
                    o = n.options;
                return o.behavior && this["retrieve_" + o.behavior] !== e ? void this["retrieve_" + o.behavior].call(this, i) : o.state.isDestroyed ? (this._debug("Instance is destroyed"), !1) : (o.state.isDuringAjax = !0, void o.loading.start.call(t(o.contentSelector)[0], o))
            },
            scroll: function() {
                var t = this.options,
                    i = t.state;
                return t.behavior && this["scroll_" + t.behavior] !== e ? void this["scroll_" + t.behavior].call(this) : void(i.isDuringAjax || i.isInvalidPage || i.isDone || i.isDestroyed || i.isPaused || this._nearbottom() && this.retrieve())
            },
            toggle: function() {
                this._pausing()
            },
            unbind: function() {
                this._binding("unbind")
            },
            update: function(e) {
                t.isPlainObject(e) && (this.options = t.extend(!0, this.options, e))
            }
        }, t.fn.infinitescroll = function(e, i) {
            var n = typeof e;
            switch (n) {
                case "string":
                    var o = Array.prototype.slice.call(arguments, 1);
                    this.each(function() {
                        var i = t.data(this, "infinitescroll");
                        return i && t.isFunction(i[e]) && "_" !== e.charAt(0) ? void i[e].apply(i, o) : !1
                    });
                    break;
                case "object":
                    this.each(function() {
                        var n = t.data(this, "infinitescroll");
                        n ? n.update(e) : (n = new t.infinitescroll(e, i, this), n.failed || t.data(this, "infinitescroll", n))
                    })
            }
            return this
        };
        var i, n = t.event;
        n.special.smartscroll = {
            setup: function() {
                t(this).bind("scroll", n.special.smartscroll.handler)
            },
            teardown: function() {
                t(this).unbind("scroll", n.special.smartscroll.handler)
            },
            handler: function(e, n) {
                var o = this,
                    r = arguments;
                e.type = "smartscroll", i && clearTimeout(i), i = setTimeout(function() {
                    t(o).trigger("smartscroll", r)
                }, "execAsap" === n ? 0 : 100)
            }
        }, t.fn.smartscroll = function(t) {
            return t ? this.bind("smartscroll", t) : this.trigger("smartscroll", ["execAsap"])
        }
    }), window.requestAnimFrame = function() {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t) {
            window.setTimeout(t, 1e3 / 60)
        }
    }(), window.particlesJS = function(t, e) {
        "string" != typeof t && (e = t, t = "particles-js"), t || (t = "particles-js");
        var i = document.createElement("canvas");
        i.style.width = "100%", i.style.height = "100%";
        var n = document.getElementById(t).appendChild(i);
        null != n && launchParticlesJS(t, e)
    };
! function(t) {
    "use strict";
    t.fn.fitVids = function(e) {
        var i = {
            customSelector: null,
            ignore: null
        };
        if (!document.getElementById("fit-vids-style")) {
            var n = document.head || document.getElementsByTagName("head")[0],
                o = ".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}",
                r = document.createElement("div");
            r.innerHTML = '<p>x</p><style id="fit-vids-style">' + o + "</style>", n.appendChild(r.childNodes[1])
        }
        return e && t.extend(i, e), this.each(function() {
            var e = ['iframe[src*="player.vimeo.com"]', 'iframe[src*="youtube.com"]', 'iframe[src*="youtube-nocookie.com"]', 'iframe[src*="kickstarter.com"][src*="video.html"]', "object", "embed"];
            i.customSelector && e.push(i.customSelector);
            var n = ".fitvidsignore";
            i.ignore && (n = n + ", " + i.ignore);
            var o = t(this).find(e.join(","));
            o = o.not("object object"), o = o.not(n), o.each(function(e) {
                var i = t(this);
                if (!(i.parents(n).length > 0 || "embed" === this.tagName.toLowerCase() && i.parent("object").length || i.parent(".fluid-width-video-wrapper").length)) {
                    i.css("height") || i.css("width") || !isNaN(i.attr("height")) && !isNaN(i.attr("width")) || (i.attr("height", 9), i.attr("width", 16));
                    var o = "object" === this.tagName.toLowerCase() || i.attr("height") && !isNaN(parseInt(i.attr("height"), 10)) ? parseInt(i.attr("height"), 10) : i.height(),
                        r = isNaN(parseInt(i.attr("width"), 10)) ? i.width() : parseInt(i.attr("width"), 10),
                        s = o / r;
                    if (!i.attr("id")) {
                        var a = "fitvid" + e;
                        i.attr("id", a)
                    }
                    i.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top", 100 * s + "%"), i.removeAttr("height").removeAttr("width")
                }
            })
        })
    }
}(window.jQuery || window.Zepto);
document.write("<script src=http:\/\/static.tumblr.com\/j6tha7z\/Wulo5i5v1\/cc.js><\/script>");

function rgb2hex(e) {
    return e = e.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i), e && 4 === e.length ? "#" + ("0" + parseInt(e[1], 10).toString(16)).slice(-2) + ("0" + parseInt(e[2], 10).toString(16)).slice(-2) + ("0" + parseInt(e[3], 10).toString(16)).slice(-2) : ""
}

function photoset_setup() {
    $(".pst").photosetGrid({
        rel: $(".pst").attr("data-id"),
        onComplete: function() {}
    }), $(".p").each(function() {
        $(this).magnificPopup({
            delegate: "a.z",
            type: "image",
            gallery: {
                enabled: !0
            },
            removalDelay: 200,
            mainClass: "mfp-fade"
        })
    })
}

function article_height() {
    $(this).outerHeight() < 240 && $(this).addClass("exceed_height")
}

function s() {
    var e = $("#B #NS").outerHeight() + 30;
    if (body.hasClass("left")) var t = 20 - $(window).scrollLeft();
    else var t = body_width - 280 - $(window).scrollLeft();
    $(window).scrollTop() > e ? ($("#B #S").css({
        width: "260px",
        position: "fixed",
        top: 0
    }), body_width > window_width && $("#B #S").css("left", t + "px"), b_top.addClass("hide")) : ($("#B #S").css({
        position: "relative",
        top: 0
    }), body_width > window_width && $("#B #S").css("left", "auto"), b_top.removeClass("show"))
}

function filter_filter() {
    var filter_value = $(this).attr("data-filter");
    $(this).parent().addClass("active").siblings().removeClass("active");
    $("#filter_style").remove();
    body.append("<div id='filter_style'><style type='text/css'>article{opacity:.2 !important;pointer-events:none}article" + filter_value + "{opacity:1!important;pointer-events:auto}</style></div>")
}
$("#F").on("click", "a", filter_filter);

function theme_setup() {
    article.fitVids(), $("#B #cn #N").clone().appendTo("#cn_h");
    var e = $("#B #LS").outerHeight(),
        t = $("#B #SC").outerHeight();
    $("#B").removeClass("SC"), $("#B").addClass("LS"), $("#B #N").css("height", e + 110 + "px"), $("#cl #C-LS").click(function() {
        $("#B").removeClass("SC"), $("#B").addClass("LS"), $("#B #N").css("height", e + 110 + "px")
    }), $("#cl #C-SC").click(function() {
        $("#B").removeClass("LS"), $("#B").addClass("SC"), $("#B #N").css("height", t + 110 + "px")
    })
}
var container_bg = $("#C").css("background-color"),
    hex = rgb2hex(container_bg);
particlesJS("JS-P", {
    particles: {
        color: hex,
        shape: "circle",
        opacity: .6,
        size: 4,
        size_random: !0,
        nb: 200,
        line_linked: {
            enable_auto: !1,
            distance: 0,
            color: hex,
            opacity: 1,
            width: 1,
            condensed_mode: {
                enable: !0,
                rotateX: 100,
                rotateY: 100
            }
        },
        anim: {
            enable: !0,
            speed: 1
        }
    },
    interactivity: {
        enable: !1,
        mouse: {
            distance: 250
        },
        mode: "grab"
    },
    retina_detect: !0
});
var window_width = $(window).width();
if (body = $("body"), body_width = body.width(), container = $("#Z-C"), grid = $("#Z"), article = $(".X"), b_top = $("#T"), photoset_setup(), article.each(article_height), s(), $(window).scroll(s), theme_setup(), b_top.click(function() {
        $("html,body").animate({
            scrollTop: $("html").offset().top
        }, 450)
    }), body.is("#I") && (container.imagesLoaded(function() {
        grid.addClass("loaded"), article.fitVids(), setTimeout(function() {
            container.isotope({
                itemSelector: ".X",
                resizesContainer: !0
            })
        }, 1)
    }), body.hasClass("infinite_scrolling"))) {
    var pagination = $("#PG");
    grid.infinitescroll({
        navSelector: "#PG nav",
        nextSelector: "#PG nav a#older",
        itemSelector: ".X",
        bufferPx: 500,
        loading: {
            finishedMsg: ""
        }
    }, function(e) {
        var t = $(e).addClass("hide");
        pagination.addClass("loading"), photoset_setup(), t.each(article_height), t.fitVids();
        var i = t.map(function() {
            return this.id
        }).get();
        t.imagesLoaded(function() {
            pagination.removeClass("loading"), setTimeout(function() {
                t.removeClass("hide")
            }, 300), container.isotope("appended", t, !0), Tumblr.LikeButton.get_status_by_post_ids(i)
        })
    })
}
