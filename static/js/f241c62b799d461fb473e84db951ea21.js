// Copyright 2012 Google Inc. All rights reserved.
(function() {

    var data = {
        "resource": {
            "version": "1",
            "macros": [],
            "tags": [],
            "predicates": [],
            "rules": []
        },
        "runtime": [
            [],
            []
        ]
    };

    var ba = this,
        fa = function() {
            if (null === da) {
                var a;
                a: {
                    var b = ba.document,
                        c = b.querySelector && b.querySelector("script[nonce]");
                    if (c) { var d = c.nonce || c.getAttribute("nonce"); if (d && ea.test(d)) { a = d; break a } }
                    a = null
                }
                da = a || ""
            }
            return da
        },
        ea = /^[\w+/_-]+[=]{0,2}$/,
        da = null,
        ha = function(a, b) {
            function c() {}
            c.prototype = b.prototype;
            a.$e = b.prototype;
            a.prototype = new c;
            a.prototype.constructor = a;
            a.Ie = function(a, c, f) {
                for (var d = Array(arguments.length - 2), e = 2; e < arguments.length; e++) d[e - 2] = arguments[e];
                return b.prototype[c].apply(a,
                    d)
            }
        };
    var g = function(a, b) {
        this.w = a;
        this.md = b
    };
    g.prototype.zd = function() { return this.w };
    g.prototype.getType = g.prototype.zd;
    g.prototype.getData = function() { return this.md };
    g.prototype.getData = g.prototype.getData;
    var ka = function(a) { return "number" === typeof a && 0 <= a && isFinite(a) && 0 === a % 1 || "string" === typeof a && "-" !== a[0] && a === "" + parseInt(a, 10) },
        la = function() {
            this.ja = {};
            this.Aa = !1
        };
    la.prototype.get = function(a) { return this.ja["dust." + a] };
    la.prototype.set = function(a, b) {!this.Aa && (this.ja["dust." + a] = b) };
    la.prototype.has = function(a) { return this.ja.hasOwnProperty("dust." + a) };
    var ma = function(a) {
        var b = [],
            c;
        for (c in a.ja) a.ja.hasOwnProperty(c) && b.push(c.substr(5));
        return b
    };
    la.prototype.remove = function(a) {!this.Aa && delete this.ja["dust." + a] };
    la.prototype.J = function() { this.Aa = !0 };
    var v = function(a) {
        this.ma = new la;
        this.h = [];
        a = a || [];
        for (var b in a) a.hasOwnProperty(b) && (ka(b) ? this.h[Number(b)] = a[Number(b)] : this.ma.set(b, a[b]))
    };
    v.prototype.toString = function() {
        for (var a = [], b = 0; b < this.h.length; b++) {
            var c = this.h[b];
            null === c || void 0 === c ? a.push("") : a.push(c.toString())
        }
        return a.join(",")
    };
    v.prototype.set = function(a, b) {
        if ("length" == a) {
            if (!ka(b)) throw "RangeError: Length property must be a valid integer.";
            this.h.length = Number(b)
        } else ka(a) ? this.h[Number(a)] = b : this.ma.set(a, b)
    };
    v.prototype.set = v.prototype.set;
    v.prototype.get = function(a) { return "length" == a ? this.length() : ka(a) ? this.h[Number(a)] : this.ma.get(a) };
    v.prototype.get = v.prototype.get;
    v.prototype.length = function() { return this.h.length };
    v.prototype.P = function() { for (var a = ma(this.ma), b = 0; b < this.h.length; b++) a.push(b + ""); return new v(a) };
    v.prototype.getKeys = v.prototype.P;
    v.prototype.remove = function(a) { ka(a) ? delete this.h[Number(a)] : this.ma.remove(a) };
    v.prototype.remove = v.prototype.remove;
    v.prototype.pop = function() { return this.h.pop() };
    v.prototype.pop = v.prototype.pop;
    v.prototype.push = function(a) { return this.h.push.apply(this.h, Array.prototype.slice.call(arguments)) };
    v.prototype.push = v.prototype.push;
    v.prototype.shift = function() { return this.h.shift() };
    v.prototype.shift = v.prototype.shift;
    v.prototype.splice = function(a, b, c) { return new v(this.h.splice.apply(this.h, arguments)) };
    v.prototype.splice = v.prototype.splice;
    v.prototype.unshift = function(a) { return this.h.unshift.apply(this.h, Array.prototype.slice.call(arguments)) };
    v.prototype.unshift = v.prototype.unshift;
    v.prototype.has = function(a) { return ka(a) && this.h.hasOwnProperty(a) || this.ma.has(a) };
    var na = function() {
        function a(a, b) { c[a] = b }

        function b() { c = {} }
        var c = {},
            d = {
                add: a,
                reset: b,
                create: function(d) {
                    var e = { add: a, request: function(a, b) { return c[a] ? c[a].apply(d, Array.prototype.slice.call(arguments, 1)) : !1 }, reset: b };
                    e.add = e.add;
                    e.request = e.request;
                    e.reset = e.reset;
                    return e
                }
            };
        d.add = d.add;
        d.reset = d.reset;
        return d
    };
    var oa = function() {
        function a(a, c) {
            if (b[a]) {
                if (b[a].Oa + c > b[a].max) throw Error("Quota exceeded");
                b[a].Oa += c
            }
        }
        var b = {},
            c = void 0,
            d = void 0,
            e = {
                Wd: function(a) { c = a },
                Tb: function() { c && a(c, 1) },
                Xd: function(a) { d = a },
                T: function(b) { d && a(d, b) },
                se: function(a, c) {
                    b[a] = b[a] || { Oa: 0 };
                    b[a].max = c
                },
                yd: function(a) { return b[a] && b[a].Oa || 0 },
                reset: function() { b = {} },
                fd: a
            };
        e.onFnConsume = e.Wd;
        e.consumeFn = e.Tb;
        e.onStorageConsume = e.Xd;
        e.consumeStorage = e.T;
        e.setMax = e.se;
        e.getConsumed = e.yd;
        e.reset = e.reset;
        e.consume = e.fd;
        return e
    };
    var pa = function(a, b, c) {
        this.K = a;
        this.Z = b;
        this.Y = c;
        this.h = new la
    };
    pa.prototype.add = function(a, b) { this.h.Aa || (this.K.T(("string" === typeof a ? a.length : 1) + ("string" === typeof b ? b.length : 1)), this.h.set(a, b)) };
    pa.prototype.add = pa.prototype.add;
    pa.prototype.set = function(a, b) { this.h.Aa || (this.Y && this.Y.has(a) ? this.Y.set(a, b) : (this.K.T(("string" === typeof a ? a.length : 1) + ("string" === typeof b ? b.length : 1)), this.h.set(a, b))) };
    pa.prototype.set = pa.prototype.set;
    pa.prototype.get = function(a) { return this.h.has(a) ? this.h.get(a) : this.Y ? this.Y.get(a) : void 0 };
    pa.prototype.get = pa.prototype.get;
    pa.prototype.has = function(a) { return !!this.h.has(a) || !(!this.Y || !this.Y.has(a)) };
    pa.prototype.has = pa.prototype.has;
    pa.prototype.H = function() { return this.K };
    pa.prototype.J = function() { this.h.J() };
    var qa = function(a) { return "[object Array]" == Object.prototype.toString.call(Object(a)) },
        ra = function(a, b) {
            if (Array.prototype.indexOf) { var c = a.indexOf(b); return "number" == typeof c ? c : -1 }
            for (var d = 0; d < a.length; d++)
                if (a[d] === b) return d;
            return -1
        };
    var w = function(a, b) {
        la.call(this);
        this.jc = a;
        this.wd = b
    };
    ha(w, la);
    var ua = function(a, b) { for (var c, d = 0; d < b.length && !(c = ta(a, b[d]), c instanceof g); d++); return c },
        ta = function(a, b) { var c = a.get(String(b[0])); if (!(c && c instanceof w)) throw "Attempting to execute non-function " + b[0] + "."; return c.m.apply(c, [a].concat(b.slice(1))) };
    w.prototype.toString = function() { return this.jc };
    w.prototype.getName = function() { return this.jc };
    w.prototype.getName = w.prototype.getName;
    w.prototype.P = function() { return new v(ma(this)) };
    w.prototype.getKeys = w.prototype.P;
    w.prototype.m = function(a, b) {
        var c, d = { B: function() { return a }, evaluate: function(b) { var c = a; return qa(b) ? ta(c, b) : b }, wa: function(b) { return ua(a, b) }, H: function() { return a.H() }, Oe: function() { c || (c = a.Z.create(d)); return c } };
        a.H().Tb();
        return this.wd.apply(d, Array.prototype.slice.call(arguments, 1))
    };
    w.prototype.invoke = w.prototype.m;
    var va = function() { la.call(this) };
    ha(va, la);
    va.prototype.P = function() { return new v(ma(this)) };
    va.prototype.getKeys = va.prototype.P;
    /*
     jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
    var wa = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
        xa = function(a) { if (null == a) return String(a); var b = wa.exec(Object.prototype.toString.call(Object(a))); return b ? b[1].toLowerCase() : "object" },
        ya = function(a, b) { return Object.prototype.hasOwnProperty.call(Object(a), b) },
        za = function(a) {
            if (!a || "object" != xa(a) || a.nodeType || a == a.window) return !1;
            try { if (a.constructor && !ya(a, "constructor") && !ya(a.constructor.prototype, "isPrototypeOf")) return !1 } catch (c) { return !1 }
            for (var b in a);
            return void 0 ===
                b || ya(a, b)
        },
        x = function(a, b) {
            var c = b || ("array" == xa(a) ? [] : {}),
                d;
            for (d in a)
                if (ya(a, d)) { var e = a[d]; "array" == xa(e) ? ("array" != xa(c[d]) && (c[d] = []), c[d] = x(e, c[d])) : za(e) ? (za(c[d]) || (c[d] = {}), c[d] = x(e, c[d])) : c[d] = e }
            return c
        };
    var Aa = function(a) { if (a instanceof v) { for (var b = [], c = a.length(), d = 0; d < c; d++) a.has(d) && (b[d] = Aa(a.get(d))); return b } if (a instanceof va) { for (var e = {}, f = a.P(), h = f.length(), k = 0; k < h; k++) e[f.get(k)] = Aa(a.get(f.get(k))); return e } return a instanceof w ? function() { for (var b = Array.prototype.slice.call(arguments, 0), c = 0; c < b.length; c++) b[c] = Ca(b[c]); var d = new pa(oa(), na()); return Aa(a.m.apply(a, [d].concat(b))) } : a },
        Ca = function(a) {
            if (qa(a)) { for (var b = [], c = 0; c < a.length; c++) a.hasOwnProperty(c) && (b[c] = Ca(a[c])); return new v(b) }
            if (za(a)) {
                var d =
                    new va,
                    e;
                for (e in a) a.hasOwnProperty(e) && d.set(e, Ca(a[e]));
                return d
            }
            if ("function" === typeof a) return new w("", function(b) { for (var c = Array.prototype.slice.call(arguments, 0), d = 0; d < c.length; d++) c[d] = Aa(this.evaluate(c[d])); return Ca(a.apply(a, c)) });
            var f = typeof a;
            if (null === a || "string" === f || "number" === f || "boolean" === f) return a
        };
    var Da = {
        control: function(a, b) { return new g(a, this.evaluate(b)) },
        fn: function(a, b, c) {
            var d = this.B(),
                e = this.evaluate(b);
            if (!(e instanceof v)) throw "Error: non-List value given for Fn argument names.";
            var f = Array.prototype.slice.call(arguments, 2);
            this.H().T(a.length + f.length);
            return new w(a, function() {
                return function(a) {
                    for (var b = new pa(d.K, d.Z, d), c = Array.prototype.slice.call(arguments, 0), h = 0; h < c.length; h++)
                        if (c[h] = this.evaluate(c[h]), c[h] instanceof g) return c[h];
                    for (var n = e.get("length"), p = 0; p < n; p++) p <
                        c.length ? b.set(e.get(p), c[p]) : b.set(e.get(p), void 0);
                    b.set("arguments", new v(c));
                    var q = ua(b, f);
                    if (q instanceof g) return "return" === q.w ? q.getData() : q
                }
            }())
        },
        list: function(a) {
            var b = this.H();
            b.T(arguments.length);
            for (var c = new v, d = 0; d < arguments.length; d++) {
                var e = this.evaluate(arguments[d]);
                "string" === typeof e && b.T(e.length ? e.length - 1 : 0);
                c.push(e)
            }
            return c
        },
        map: function(a) {
            for (var b = this.H(), c = new va, d = 0; d < arguments.length - 1; d += 2) {
                var e = this.evaluate(arguments[d]) + "",
                    f = this.evaluate(arguments[d + 1]),
                    h = e.length;
                h += "string" === typeof f ? f.length : 1;
                b.T(h);
                c.set(e, f)
            }
            return c
        },
        undefined: function() {}
    };
    var y = function() {
        this.K = oa();
        this.Z = na();
        this.ya = new pa(this.K, this.Z)
    };
    y.prototype.S = function(a, b) {
        var c = new w(a, b);
        c.J();
        this.ya.set(a, c)
    };
    y.prototype.addInstruction = y.prototype.S;
    y.prototype.Sb = function(a, b) { Da.hasOwnProperty(a) && this.S(b || a, Da[a]) };
    y.prototype.addNativeInstruction = y.prototype.Sb;
    y.prototype.H = function() { return this.K };
    y.prototype.getQuota = y.prototype.H;
    y.prototype.Va = function() {
        this.K = oa();
        this.ya.K = this.K
    };
    y.prototype.resetQuota = y.prototype.Va;
    y.prototype.ne = function() {
        this.Z = na();
        this.ya.Z = this.Z
    };
    y.prototype.resetPermissions = y.prototype.ne;
    y.prototype.N = function(a, b) { var c = Array.prototype.slice.call(arguments, 0); return this.wb(c) };
    y.prototype.execute = y.prototype.N;
    y.prototype.wb = function(a) {
        for (var b, c = 0; c < arguments.length; c++) {
            var d = ta(this.ya, arguments[c]);
            b = d instanceof g || d instanceof w || d instanceof v || d instanceof va || null === d || void 0 === d || "string" === typeof d || "number" === typeof d || "boolean" === typeof d ? d : void 0
        }
        return b
    };
    y.prototype.run = y.prototype.wb;
    y.prototype.J = function() { this.ya.J() };
    y.prototype.makeImmutable = y.prototype.J;
    var Ea = function(a) { for (var b = [], c = 0; c < a.length(); c++) a.has(c) && (b[c] = a.get(c)); return b };
    var Fa = {
        we: "concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),
        concat: function(a, b) {
            for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
            for (d = 1; d < arguments.length; d++)
                if (arguments[d] instanceof v)
                    for (var e = arguments[d], f = 0; f < e.length(); f++) c.push(e.get(f));
                else c.push(arguments[d]);
            return new v(c)
        },
        every: function(a, b) {
            for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
                if (this.has(d) &&
                    !b.m(a, this.get(d), d, this)) return !1;
            return !0
        },
        filter: function(a, b) { for (var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++) this.has(e) && b.m(a, this.get(e), e, this) && d.push(this.get(e)); return new v(d) },
        forEach: function(a, b) { for (var c = this.length(), d = 0; d < this.length() && d < c; d++) this.has(d) && b.m(a, this.get(d), d, this) },
        hasOwnProperty: function(a, b) { return this.has(b) },
        indexOf: function(a, b, c) {
            var d = this.length(),
                e = void 0 === c ? 0 : Number(c);
            0 > e && (e = Math.max(d + e, 0));
            for (var f = e; f < d; f++)
                if (this.has(f) && this.get(f) ===
                    b) return f;
            return -1
        },
        join: function(a, b) { for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d)); return c.join(b) },
        lastIndexOf: function(a, b, c) {
            var d = this.length(),
                e = d - 1;
            void 0 !== c && (e = 0 > c ? d + c : Math.min(c, e));
            for (var f = e; 0 <= f; f--)
                if (this.has(f) && this.get(f) === b) return f;
            return -1
        },
        map: function(a, b) { for (var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++) this.has(e) && (d[e] = b.m(a, this.get(e), e, this)); return new v(d) },
        pop: function() { return this.pop() },
        push: function(a, b) {
            return this.push.apply(this, Array.prototype.slice.call(arguments,
                1))
        },
        reduce: function(a, b, c) {
            var d = this.length(),
                e, f;
            if (void 0 !== c) e = c, f = 0;
            else {
                if (0 == d) throw "TypeError: Reduce on List with no elements.";
                for (var h = 0; h < d; h++)
                    if (this.has(h)) {
                        e = this.get(h);
                        f = h + 1;
                        break
                    }
                if (h == d) throw "TypeError: Reduce on List with no elements.";
            }
            for (h = f; h < d; h++) this.has(h) && (e = b.m(a, e, this.get(h), h, this));
            return e
        },
        reduceRight: function(a, b, c) {
            var d = this.length(),
                e, f;
            if (void 0 !== c) e = c, f = d - 1;
            else {
                if (0 == d) throw "TypeError: ReduceRight on List with no elements.";
                for (var h = 1; h <= d; h++)
                    if (this.has(d -
                            h)) {
                        e = this.get(d - h);
                        f = d - (h + 1);
                        break
                    }
                if (h > d) throw "TypeError: ReduceRight on List with no elements.";
            }
            for (h = f; 0 <= h; h--) this.has(h) && (e = b.m(a, e, this.get(h), h, this));
            return e
        },
        reverse: function() { for (var a = Ea(this), b = a.length - 1, c = 0; 0 <= b; b--, c++) a.hasOwnProperty(b) ? this.set(c, a[b]) : this.remove(c); return this },
        shift: function() { return this.shift() },
        slice: function(a, b, c) {
            var d = this.length();
            void 0 === b && (b = 0);
            b = 0 > b ? Math.max(d + b, 0) : Math.min(b, d);
            c = void 0 === c ? d : 0 > c ? Math.max(d + c, 0) : Math.min(c, d);
            c = Math.max(b,
                c);
            for (var e = [], f = b; f < c; f++) e.push(this.get(f));
            return new v(e)
        },
        some: function(a, b) {
            for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
                if (this.has(d) && b.m(a, this.get(d), d, this)) return !0;
            return !1
        },
        sort: function(a, b) {
            var c = Ea(this);
            void 0 === b ? c.sort() : c.sort(function(c, d) { return Number(b.m(a, c, d)) });
            for (var d = 0; d < c.length; d++) c.hasOwnProperty(d) ? this.set(d, c[d]) : this.remove(d)
        },
        splice: function(a, b, c, d) { return this.splice.apply(this, Array.prototype.splice.call(arguments, 1, arguments.length - 1)) },
        toString: function() { return this.toString() },
        unshift: function(a, b) { return this.unshift.apply(this, Array.prototype.slice.call(arguments, 1)) }
    };
    var z = {
            fc: {
                ADD: 0,
                AND: 1,
                APPLY: 2,
                ASSIGN: 3,
                BREAK: 4,
                CASE: 5,
                CONTINUE: 6,
                CONTROL: 49,
                CREATE_ARRAY: 7,
                CREATE_OBJECT: 8,
                DEFAULT: 9,
                DEFN: 50,
                DIVIDE: 10,
                DO: 11,
                EQUALS: 12,
                EXPRESSION_LIST: 13,
                FN: 51,
                FOR: 14,
                FOR_IN: 47,
                GET: 15,
                GET_CONTAINER_VARIABLE: 48,
                GET_INDEX: 16,
                GET_PROPERTY: 17,
                GREATER_THAN: 18,
                GREATER_THAN_EQUALS: 19,
                IDENTITY_EQUALS: 20,
                IDENTITY_NOT_EQUALS: 21,
                IF: 22,
                LESS_THAN: 23,
                LESS_THAN_EQUALS: 24,
                MODULUS: 25,
                MULTIPLY: 26,
                NEGATE: 27,
                NOT: 28,
                NOT_EQUALS: 29,
                NULL: 45,
                OR: 30,
                PLUS_EQUALS: 31,
                POST_DECREMENT: 32,
                POST_INCREMENT: 33,
                PRE_DECREMENT: 34,
                PRE_INCREMENT: 35,
                QUOTE: 46,
                RETURN: 36,
                SET_PROPERTY: 43,
                SUBTRACT: 37,
                SWITCH: 38,
                TERNARY: 39,
                TYPEOF: 40,
                UNDEFINED: 44,
                VAR: 41,
                WHILE: 42
            }
        },
        Ga = "charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(" "),
        Ha = new g("break"),
        Ia = new g("continue");
    z.add = function(a, b) { return this.evaluate(a) + this.evaluate(b) };
    z.and = function(a, b) { return this.evaluate(a) && this.evaluate(b) };
    z.apply = function(a, b, c) {
        a = this.evaluate(a);
        b = this.evaluate(b);
        c = this.evaluate(c);
        if (!(c instanceof v)) throw "Error: Non-List argument given to Apply instruction.";
        if (null === a || void 0 === a) throw "TypeError: Can't read property " + b + " of " + a + ".";
        if ("boolean" == typeof a || "number" == typeof a) { if ("toString" == b) return a.toString(); throw "TypeError: " + a + "." + b + " is not a function."; }
        if ("string" == typeof a) { if (0 <= ra(Ga, b)) return Ca(a[b].apply(a, Ea(c))); throw "TypeError: " + b + " is not a function"; }
        if (a instanceof v) {
            if (a.has(b)) {
                var d =
                    a.get(b);
                if (d instanceof w) {
                    var e = Ea(c);
                    e.unshift(this.B());
                    return d.m.apply(d, e)
                }
                throw "TypeError: " + b + " is not a function";
            }
            if (0 <= ra(Fa.we, b)) return e = Ea(c), e.unshift(this.B()), Fa[b].apply(a, e)
        }
        if (a instanceof w || a instanceof va) { if (a.has(b)) { d = a.get(b); if (d instanceof w) return e = Ea(c), e.unshift(this.B()), d.m.apply(d, e); throw "TypeError: " + b + " is not a function"; } if ("toString" == b) return a instanceof w ? a.getName() : a.toString(); if ("hasOwnProperty" == b) return a.has.apply(a, Ea(c)) }
        throw "TypeError: Object has no '" +
            b + "' property.";
    };
    z.assign = function(a, b) {
        a = this.evaluate(a);
        if ("string" != typeof a) throw "Invalid key name given for assignment.";
        var c = this.B();
        if (!c.has(a)) throw "Attempting to assign to undefined value " + b;
        var d = this.evaluate(b);
        c.set(a, d);
        return d
    };
    z["break"] = function() { return Ha };
    z["case"] = function(a) { for (var b = this.evaluate(a), c = 0; c < b.length; c++) { var d = this.evaluate(b[c]); if (d instanceof g) return d } };
    z["continue"] = function() { return Ia };
    z.nd = function(a, b, c) {
        var d = new v;
        b = this.evaluate(b);
        for (var e = 0; e < b.length; e++) d.push(b[e]);
        var f = [z.fc.FN, a, d].concat(Array.prototype.splice.call(arguments, 2, arguments.length - 2));
        this.B().set(a, this.evaluate(f))
    };
    z.qd = function(a, b) { return this.evaluate(a) / this.evaluate(b) };
    z.td = function(a, b) { return this.evaluate(a) == this.evaluate(b) };
    z.ud = function(a) { for (var b, c = 0; c < arguments.length; c++) b = this.evaluate(arguments[c]); return b };
    z.xd = function(a, b, c) {
        a = this.evaluate(a);
        b = this.evaluate(b);
        c = this.evaluate(c);
        var d = this.B();
        if ("string" == typeof b)
            for (var e = 0; e < b.length; e++) { d.set(a, e); var f = this.wa(c); if (f instanceof g) { if ("break" == f.w) break; if ("return" == f.w) return f } } else if (b instanceof va || b instanceof v || b instanceof w) {
                var h = b.P(),
                    k = h.length();
                for (e = 0; e < k; e++)
                    if (d.set(a, h.get(e)), f = this.wa(c), f instanceof g) { if ("break" == f.w) break; if ("return" == f.w) return f }
            }
    };
    z.get = function(a) { return this.B().get(this.evaluate(a)) };
    z.cc = function(a, b) {
        var c;
        a = this.evaluate(a);
        b = this.evaluate(b);
        if (void 0 === a || null === a) throw "TypeError: cannot access property of " + a + ".";
        a instanceof va || a instanceof v || a instanceof w ? c = a.get(b) : "string" == typeof a && ("length" == b ? c = a.length : ka(b) && (c = a[b]));
        return c
    };
    z.Ad = function(a, b) { return this.evaluate(a) > this.evaluate(b) };
    z.Bd = function(a, b) { return this.evaluate(a) >= this.evaluate(b) };
    z.Fd = function(a, b) { return this.evaluate(a) === this.evaluate(b) };
    z.Gd = function(a, b) { return this.evaluate(a) !== this.evaluate(b) };
    z["if"] = function(a, b, c) {
        var d = [];
        this.evaluate(a) ? d = this.evaluate(b) : c && (d = this.evaluate(c));
        var e = this.wa(d);
        if (e instanceof g) return e
    };
    z.Od = function(a, b) { return this.evaluate(a) < this.evaluate(b) };
    z.Pd = function(a, b) { return this.evaluate(a) <= this.evaluate(b) };
    z.Rd = function(a, b) { return this.evaluate(a) % this.evaluate(b) };
    z.multiply = function(a, b) { return this.evaluate(a) * this.evaluate(b) };
    z.Sd = function(a) { return -this.evaluate(a) };
    z.Td = function(a) { return !this.evaluate(a) };
    z.Ud = function(a, b) { return this.evaluate(a) != this.evaluate(b) };
    z["null"] = function() { return null };
    z.or = function(a, b) { return this.evaluate(a) || this.evaluate(b) };
    z.sc = function(a, b) {
        var c = this.evaluate(a);
        this.evaluate(b);
        return c
    };
    z.uc = function(a) { return this.evaluate(a) };
    z.quote = function(a) { return Array.prototype.slice.apply(arguments) };
    z["return"] = function(a) { return new g("return", this.evaluate(a)) };
    z.setProperty = function(a, b, c) {
        a = this.evaluate(a);
        b = this.evaluate(b);
        c = this.evaluate(c);
        if (null === a || void 0 === a) throw "TypeError: Can't set property " + b + " of " + a + ".";
        (a instanceof w || a instanceof v || a instanceof va) && a.set(b, c);
        return c
    };
    z.ve = function(a, b) { return this.evaluate(a) - this.evaluate(b) };
    z["switch"] = function(a, b, c) {
        a = this.evaluate(a);
        b = this.evaluate(b);
        c = this.evaluate(c);
        if (!qa(b) || !qa(c)) throw "Error: Malformed switch instruction.";
        for (var d, e = !1, f = 0; f < b.length; f++)
            if (e || a === this.evaluate(b[f]))
                if (d = this.evaluate(c[f]), d instanceof g) { var h = d.w; if ("break" == h) return; if ("return" == h || "continue" == h) return d } else e = !0;
        if (c.length == b.length + 1 && (d = this.evaluate(c[c.length - 1]), d instanceof g && ("return" == d.w || "continue" == d.w))) return d
    };
    z.xe = function(a, b, c) { return this.evaluate(a) ? this.evaluate(b) : this.evaluate(c) };
    z["typeof"] = function(a) { a = this.evaluate(a); return a instanceof w ? "function" : typeof a };
    z.undefined = function() {};
    z["var"] = function(a) { for (var b = this.B(), c = 0; c < arguments.length; c++) { var d = arguments[c]; "string" != typeof d || b.add(d, void 0) } };
    z["while"] = function(a, b, c, d) {
        var e, f = this.evaluate(d);
        if (this.evaluate(c) && (e = this.wa(f), e instanceof g)) { if ("break" == e.w) return; if ("return" == e.w) return e }
        for (; this.evaluate(a);) {
            e = this.wa(f);
            if (e instanceof g) { if ("break" == e.w) break; if ("return" == e.w) return e }
            this.evaluate(b)
        }
    };
    var Ka = function() {
        this.ec = !1;
        this.U = new y;
        Ja(this);
        this.ec = !0
    };
    Ka.prototype.Ld = function() { return this.ec };
    Ka.prototype.isInitialized = Ka.prototype.Ld;
    Ka.prototype.N = function(a) { return this.U.wb(a) };
    Ka.prototype.execute = Ka.prototype.N;
    Ka.prototype.J = function() { this.U.J() };
    Ka.prototype.makeImmutable = Ka.prototype.J;
    var Ja = function(a) {
        function b(a, b) { e.U.Sb(a, String(b)) }

        function c(a, b) { e.U.S(String(d[a]), b) }
        var d = z.fc,
            e = a;
        b("control", d.CONTROL);
        b("fn", d.FN);
        b("list", d.CREATE_ARRAY);
        b("map", d.CREATE_OBJECT);
        b("undefined", d.UNDEFINED);
        c("ADD", z.add);
        c("AND", z.and);
        c("APPLY", z.apply);
        c("ASSIGN", z.assign);
        c("BREAK", z["break"]);
        c("CASE", z["case"]);
        c("CONTINUE", z["continue"]);
        c("DEFAULT", z["case"]);
        c("DEFN", z.nd);
        c("DIVIDE", z.qd);
        c("EQUALS", z.td);
        c("EXPRESSION_LIST", z.ud);
        c("FOR_IN", z.xd);
        c("GET", z.get);
        c("GET_INDEX",
            z.cc);
        c("GET_PROPERTY", z.cc);
        c("GREATER_THAN", z.Ad);
        c("GREATER_THAN_EQUALS", z.Bd);
        c("IDENTITY_EQUALS", z.Fd);
        c("IDENTITY_NOT_EQUALS", z.Gd);
        c("IF", z["if"]);
        c("LESS_THAN", z.Od);
        c("LESS_THAN_EQUALS", z.Pd);
        c("MODULUS", z.Rd);
        c("MULTIPLY", z.multiply);
        c("NEGATE", z.Sd);
        c("NOT", z.Td);
        c("NOT_EQUALS", z.Ud);
        c("NULL", z["null"]);
        c("OR", z.or);
        c("POST_DECREMENT", z.sc);
        c("POST_INCREMENT", z.sc);
        c("PRE_DECREMENT", z.uc);
        c("PRE_INCREMENT", z.uc);
        c("QUOTE", z.quote);
        c("RETURN", z["return"]);
        c("SET_PROPERTY", z.setProperty);
        c("SUBTRACT", z.ve);
        c("SWITCH", z["switch"]);
        c("TERNARY", z.xe);
        c("TYPEOF", z["typeof"]);
        c("VAR", z["var"]);
        c("WHILE", z["while"])
    };
    Ka.prototype.S = function(a, b) { this.U.S(a, b) };
    Ka.prototype.addInstruction = Ka.prototype.S;
    Ka.prototype.H = function() { return this.U.H() };
    Ka.prototype.getQuota = Ka.prototype.H;
    Ka.prototype.Va = function() { this.U.Va() };
    Ka.prototype.resetQuota = Ka.prototype.Va;
    var La = function() { this.Ra = {} };
    La.prototype.get = function(a) { return this.Ra.hasOwnProperty(a) ? this.Ra[a] : void 0 };
    La.prototype.add = function(a, b) {
        if (this.Ra.hasOwnProperty(a)) throw "Attempting to add a function which already exists: " + a + ".";
        var c = new w(a, function() { for (var a = Array.prototype.slice.call(arguments, 0), c = 0; c < a.length; c++) a[c] = this.evaluate(a[c]); return b.apply(this, a) });
        c.J();
        this.Ra[a] = c
    };
    La.prototype.addAll = function(a) { for (var b in a) a.hasOwnProperty(b) && this.add(b, a[b]) };
    var C = window,
        D = document,
        Ma = navigator,
        Na = function(a, b) {
            var c = C[a];
            C[a] = void 0 === c ? b : c;
            return C[a]
        },
        Oa = function(a, b) { b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function() { a.readyState in { loaded: 1, complete: 1 } && (a.onreadystatechange = null, b()) }) },
        G = function(a, b, c) {
            var d = D.createElement("script");
            d.type = "text/javascript";
            d.async = !0;
            d.src = a;
            Oa(d, b);
            c && (d.onerror = c);
            fa() && d.setAttribute("nonce", fa());
            var e = D.getElementsByTagName("script")[0] || D.body || D.head;
            e.parentNode.insertBefore(d, e);
            return d
        },
        Pa = function(a, b) {
            var c = D.createElement("iframe");
            c.height = "0";
            c.width = "0";
            c.style.display = "none";
            c.style.visibility = "hidden";
            var d = D.body && D.body.lastChild || D.body || D.head;
            d.parentNode.insertBefore(c, d);
            Oa(c, b);
            void 0 !== a && (c.src = a);
            return c
        },
        K = function(a, b, c) {
            var d = new Image(1, 1);
            d.onload = function() {
                d.onload = null;
                b && b()
            };
            d.onerror = function() {
                d.onerror = null;
                c && c()
            };
            d.src = a
        },
        Qa = function(a, b, c, d) { a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c) },
        Ra = function(a, b,
            c) { a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c) },
        N = function(a) { C.setTimeout(a, 0) },
        Ta = function(a) {
            var b = D.getElementById(a);
            if (b && Sa(b, "id") != a)
                for (var c = 1; c < document.all[a].length; c++)
                    if (Sa(document.all[a][c], "id") == a) return document.all[a][c];
            return b
        },
        Sa = function(a, b) { return a && b && a.attributes && a.attributes[b] ? a.attributes[b].value : null },
        Ua = function(a) {
            var b = a.innerText || a.textContent || "";
            b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
            b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g,
                " "));
            return b
        },
        Va = function(a) {
            var b = D.createElement("div");
            b.innerHTML = "A<div>" + a + "</div>";
            b = b.lastChild;
            for (var c = []; b.firstChild;) c.push(b.removeChild(b.firstChild));
            return c
        },
        Wa = function(a) { Ma.sendBeacon && Ma.sendBeacon(a) || K(a) };
    var Xa = function(a, b) { for (var c = a.split("&"), d = 0; d < c.length; d++) { var e = c[d].split("="); if (decodeURIComponent(e[0]).replace(/\+/g, " ") == b) return decodeURIComponent(e.slice(1).join("=")).replace(/\+/g, " ") } },
        P = function(a, b, c, d, e) {
            var f, h = function(a) { return a ? a.replace(":", "").toLowerCase() : "" },
                k = h(a.protocol) || h(C.location.protocol);
            b && (b = String(b).toLowerCase());
            switch (b) {
                case "protocol":
                    f = k;
                    break;
                case "host":
                    f = (a.hostname || C.location.hostname).split(":")[0].toLowerCase();
                    if (c) {
                        var l = /^www\d*\./.exec(f);
                        l && l[0] && (f = f.substr(l[0].length))
                    }
                    break;
                case "port":
                    f = String(1 * (a.hostname ? a.port : C.location.port) || ("http" == k ? 80 : "https" == k ? 443 : ""));
                    break;
                case "path":
                    f = "/" == a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
                    var m = f.split("/");
                    0 <= ra(d || [], m[m.length - 1]) && (m[m.length - 1] = "");
                    f = m.join("/");
                    break;
                case "query":
                    f = a.search.replace("?", "");
                    e && (f = Xa(f, e));
                    break;
                case "extension":
                    var n = a.pathname.split(".");
                    f = 1 < n.length ? n[n.length - 1] : "";
                    f = f.split("/")[0];
                    break;
                case "fragment":
                    f = a.hash.replace("#", "");
                    break;
                default:
                    f = a && a.href
            }
            return f
        },
        Ya = function(a) {
            var b = "";
            a && a.href && (b = a.hash ? a.href.replace(a.hash, "") : a.href);
            return b
        },
        Q = function(a) {
            var b = D.createElement("a");
            a && (b.href = a);
            return b
        };
    var ab = function() {
            this.qc = new Ka;
            var a = new La;
            a.addAll(Za());
            $a(this, function(b) { return a.get(b) })
        },
        Za = function() { return { callInWindow: bb, getCurrentUrl: cb, getInWindow: eb, getReferrer: fb, getUrlComponent: gb, getUrlFragment: hb, isPlainObject: ib, loadIframe: jb, loadJavaScript: kb, removeUrlFragment: mb, replaceAll: nb, sendTrackingBeacon: ob, setInWindow: pb } };
    ab.prototype.N = function(a) { return this.qc.N(a) };
    ab.prototype.execute = ab.prototype.N;
    var $a = function(a, b) { a.qc.S("require", b) };

    function bb(a, b) {
        for (var c = a.split("."), d = C, e = d[c[0]], f = 1; e && f < c.length; f++) d = e, e = e[c[f]];
        if ("function" == xa(e)) {
            var h = [];
            for (f = 1; f < arguments.length; f++) h.push(Aa(arguments[f]));
            e.apply(d, h)
        }
    }

    function cb() { return C.location.href }

    function eb(a, b, c) {
        for (var d = a.split("."), e = C, f = 0; f < d.length - 1; f++)
            if (e = e[d[f]], void 0 === e || null === e) return;
        b && (void 0 === e[d[f]] || c && !e[d[f]]) && (e[d[f]] = Aa(b));
        return Ca(e[d[f]])
    }

    function fb() { return D.referrer }

    function gb(a, b, c, d, e) { var f; if (d && d instanceof v) { f = []; for (var h = 0; h < d.length(); h++) { var k = d.get(h); "string" == typeof k && f.push(k) } } return P(Q(a), b, c, f, e) }

    function hb(a) { return P(Q(a), "fragment") }

    function ib(a) { return a instanceof va }

    function jb(a, b) {
        var c = this.B();
        Pa(a, function() { b instanceof w && b.m(c) })
    }
    var qb = {};

    function kb(a, b, c, d) {
        var e = this.B(),
            f = function() { b instanceof w && b.m(e) },
            h = function() { c instanceof w && c.m(e) };
        d ? qb[d] ? (qb[d].onSuccess.push(f), qb[d].onFailure.push(h)) : (qb[d] = { onSuccess: [f], onFailure: [h] }, f = function() {
            for (var a = qb[d].onSuccess, b = 0; b < a.length; b++) N(a[b]);
            a.push = function(a) { N(a); return 0 }
        }, h = function() {
            for (var a = qb[d].onFailure, b = 0; b < a.length; b++) N(a[b]);
            qb[d] = null
        }, G(a, f, h)) : G(a, f, h)
    }

    function mb(a) { return Ya(Q(a)) }

    function nb(a, b, c) { return a.replace(new RegExp(b, "g"), c) }

    function ob(a, b, c) {
        var d = this.B();
        K(a, function() { b instanceof w && b.m(d) }, function() { c instanceof w && c.m(d) })
    }

    function pb(a, b, c) {
        for (var d = a.split("."), e = C, f = 0; f < d.length - 1; f++)
            if (e = e[d[f]], void 0 === e) return !1;
        return void 0 === e[d[f]] || c ? (e[d[f]] = Aa(b), !0) : !1
    };
    var Ob, Pb = [],
        Qb = [],
        Rb = [],
        Sb = [],
        Tb = [],
        Ub = {},
        Vb, Wb, Xb, Yb = function(a) {
            var b = a["function"];
            if (!b) throw "Error: No function name given for function call.";
            var c = !!Ub[b],
                d = {},
                e;
            for (e in a) a.hasOwnProperty(e) && 0 === e.indexOf("vtp_") && (d[c ? e : e.substr(4)] = a[e]);
            return c ? Ub[b](d) : Ob(b, d)
        },
        cc = function(a, b, c) {
            c = c || [];
            var d = {},
                e;
            for (e in a) a.hasOwnProperty(e) && (d[e] = bc(a[e], b, c));
            return d
        },
        bc = function(a, b, c) {
            if (qa(a)) {
                var d;
                switch (a[0]) {
                    case "function_id":
                        return a[1];
                    case "list":
                        d = [];
                        for (var e = 1; e < a.length; e++) d.push(bc(a[e],
                            b, c));
                        return d;
                    case "macro":
                        var f = a[1];
                        if (c[f]) return;
                        var h = Pb[f];
                        if (!h || b(h)) return;
                        c[f] = !0;
                        try {
                            var k = cc(h, b, c);
                            d = Yb(k);
                            Xb && (d = Xb.hd(d, k))
                        } catch (t) { d = !1 }
                        c[f] = !1;
                        return d;
                    case "map":
                        d = {};
                        for (var l = 1; l < a.length; l += 2) d[bc(a[l], b, c)] = bc(a[l + 1], b, c);
                        return d;
                    case "template":
                        d = [];
                        for (var m = !1, n = 1; n < a.length; n++) {
                            var p = bc(a[n], b, c);
                            Wb && (m = m || p === Wb.Ia);
                            d.push(p)
                        }
                        return Wb && m ? Wb.jd(d) : d.join("");
                    case "escape":
                        d = bc(a[1], b, c);
                        if (Wb && qa(a[1]) && "macro" === a[1][0] && Wb.Md(a)) return Wb.ae(d);
                        d = String(d);
                        for (var q =
                                2; q < a.length; q++) rb[a[q]] && (d = rb[a[q]](d));
                        return d;
                    case "tag":
                        var r = a[1];
                        if (!Sb[r]) throw Error("Unable to resolve tag reference " + r + ".");
                        return d = { Zb: a[2], index: r };
                    case "zb":
                        var u = dc({ "function": a[1], arg0: a[2], arg1: a[3], ignore_case: a[5] }, b, c);
                        a[4] && (u = !u);
                        return u;
                    default:
                        throw Error("Attempting to expand unknown Value type: " + a[0] + ".");
                }
            }
            return a
        },
        dc = function(a, b, c) { try { return Vb(cc(a, b, c)) } catch (d) { JSON.stringify(a) } return null };
    var ec = null,
        hc = function(a) {
            function b(a) { for (var b = 0; b < a.length; b++) d[a[b]] = !0 }
            var c = [],
                d = [];
            ec = fc(a);
            for (var e = 0; e < Qb.length; e++) {
                var f = Qb[e],
                    h = gc(f);
                if (h) {
                    for (var k = f.add || [], l = 0; l < k.length; l++) c[k[l]] = !0;
                    b(f.block || [])
                } else null === h && b(f.block || [])
            }
            var m = [];
            for (e = 0; e < Sb.length; e++) c[e] && !d[e] && (m[e] = !0);
            return m
        },
        gc = function(a) { for (var b = a["if"] || [], c = 0; c < b.length; c++) { var d = ec(b[c]); if (!d) return null === d ? null : !1 } var e = a.unless || []; for (c = 0; c < e.length; c++) { d = ec(e[c]); if (null === d) return null; if (d) return !1 } return !0 };
    var fc = function(a) { var b = []; return function(c) { void 0 === b[c] && (b[c] = dc(Rb[c], a)); return b[c] } };
    /*
     Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
    var kc = {},
        lc = null;
    kc.o = "UA-112287779-1";
    var mc = null,
        nc = "//www.googletagmanager.com/a?id=" + kc.o + "&cv=1",
        oc = {},
        pc = {},
        qc = D.currentScript ? D.currentScript.src : void 0;
    var rc = function() {},
        sc = function(a) { return "function" == typeof a },
        tc = function(a) { return "string" == xa(a) },
        uc = function(a) { return "number" == xa(a) && !isNaN(a) },
        vc = function(a) { return Math.round(Number(a)) || 0 },
        wc = function(a) { return "false" == String(a).toLowerCase() ? !1 : !!a },
        xc = function(a) {
            var b = [];
            if (qa(a))
                for (var c = 0; c < a.length; c++) b.push(String(a[c]));
            return b
        },
        yc = function(a) { return a ? a.replace(/^\s+|\s+$/g, "") : "" },
        zc = function(a, b) {
            if (!uc(a) || !uc(b) || a > b) a = 0, b = 2147483647;
            return Math.floor(Math.random() * (b - a + 1) +
                a)
        },
        Ac = function() {
            this.prefix = "gtm.";
            this.values = {}
        };
    Ac.prototype.set = function(a, b) { this.values[this.prefix + a] = b };
    Ac.prototype.get = function(a) { return this.values[this.prefix + a] };
    Ac.prototype.contains = function(a) { return void 0 !== this.get(a) };
    var Bc = function() {
            var a = lc.sequence || 0;
            lc.sequence = a + 1;
            return a
        },
        Cc = function(a, b, c) { return a && a.hasOwnProperty(b) ? a[b] : c },
        Dc = function(a) {
            var b = !1;
            return function() {
                if (!b) try { a() } catch (c) {}
                b = !0
            }
        };
    var R = function() { var a = function(a) { return { toString: function() { return a } } }; return { Hb: a("convert_case_to"), Ib: a("convert_false_to"), Jb: a("convert_null_to"), Kb: a("convert_true_to"), Lb: a("convert_undefined_to"), L: a("function"), Ac: a("instance_name"), Bc: a("live_only"), Cc: a("malware_disabled"), Dc: a("once_per_event"), Nb: a("once_per_load"), Ob: a("setup_tags"), Ec: a("tag_id"), Pb: a("teardown_tags") } }();
    var Ec = new Ac,
        Fc = {},
        Ic = {
            set: function(a, b) { x(Gc(a, b), Fc) },
            get: function(a) { return Hc(a, 2) },
            reset: function() {
                Ec = new Ac;
                Fc = {}
            }
        },
        Hc = function(a, b) { return 2 != b ? Ec.get(a) : Jc(a) },
        Jc = function(a, b, c) {
            var d = a.split(".");
            var e = function(a, b) {
                for (var c = 0; void 0 !== a && c < d.length; c++) {
                    if (null === a) return !1;
                    a = a[d[c]]
                }
                return void 0 !== a || 1 < c ? a : b.length ? e(Kc(b.pop()), b) : Lc(d)
            };
            return e(Fc.eventModel, [b, c]);
            return Lc(d)
        },
        Lc = function(a) {
            for (var b = Fc, c = 0; c < a.length; c++) {
                if (null ===
                    b) return !1;
                if (void 0 === b) break;
                b = b[a[c]]
            }
            return b
        };
    var Kc = function(a) { if (a) { var b = Lc(["gtag", "targets", a]); return za(b) ? b : void 0 } },
        Mc = function(a, b) {
            function c(a) {
                if (a)
                    for (var b in a) a.hasOwnProperty(b) && (d[b] = null)
            }
            var d = {};
            c(Fc);
            delete d.eventModel;
            c(Kc(a));
            c(Kc(b));
            c(Fc.eventModel);
            var e = [],
                f;
            for (f in d) d.hasOwnProperty(f) && e.push(f);
            return e
        };
    var Nc = function(a, b) {
            Ec.set(a, b);
            x(Gc(a, b), Fc)
        },
        Gc = function(a, b) {
            for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++) d = d[e[f]] = {};
            d[e[e.length - 1]] = b;
            return c
        };
    var Oc = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),
        Pc = { customPixels: ["nonGooglePixels"], html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"], customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"], nonGooglePixels: [], nonGoogleScripts: ["nonGooglePixels"], nonGoogleIframes: ["nonGooglePixels"] },
        Qc = {
            customPixels: ["customScripts", "html"],
            html: ["customScripts"],
            customScripts: ["html"],
            nonGooglePixels: ["customPixels",
                "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"
            ],
            nonGoogleScripts: ["customScripts", "html"],
            nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
        },
        Rc = function(a, b) { for (var c = [], d = 0; d < a.length; d++) c.push(a[d]), c.push.apply(c, b[a[d]] || []); return c };
    var Sc = function(a) {
        var b = Hc("gtm.whitelist");
        b = ["google", "gtagfl", "oid", "op"];
        var c = b && Rc(xc(b), Pc),
            d = Hc("gtm.blacklist") || Hc("tagTypeBlacklist") || [];
        Oc.test(C.location && C.location.hostname) && (d = xc(d), d.push("nonGooglePixels", "nonGoogleScripts"));
        var e = d && Rc(xc(d), Qc),
            f = {};
        return function(h) {
            var k = h && h[R.L];
            if (!k || "string" != typeof k) return !0;
            k = k.replace(/^_*/, "");
            if (void 0 !== f[k]) return f[k];
            var l = pc[k] || [],
                m = a(k);
            if (b) {
                var n;
                if (n = m) a: {
                    if (0 > ra(c, k))
                        if (l && 0 < l.length)
                            for (var p = 0; p < l.length; p++) { if (0 > ra(c, l[p])) { n = !1; break a } } else { n = !1; break a }
                    n = !0
                }
                m = n
            }
            var q = !1;
            if (d) {
                var r;
                if (!(r = 0 <=
                        ra(e, k))) a: {
                    for (var u = l || [], t = new Ac, A = 0; A < e.length; A++) t.set(e[A], !0);
                    for (A = 0; A < u.length; A++)
                        if (t.get(u[A])) { r = !0; break a }
                    r = !1
                }
                q = r
            }
            return f[k] = !m || q
        }
    };
    var Tc = {
        hd: function(a, b) {
            b[R.Hb] && "string" === typeof a && (a = 1 == b[R.Hb] ? a.toLowerCase() : a.toUpperCase());
            b.hasOwnProperty(R.Jb) && null === a && (a = b[R.Jb]);
            b.hasOwnProperty(R.Lb) && void 0 === a && (a = b[R.Lb]);
            b.hasOwnProperty(R.Kb) && !0 === a && (a = b[R.Kb]);
            b.hasOwnProperty(R.Ib) && !1 === a && (a = b[R.Ib]);
            return a
        }
    };
    var Wc = function(a) { var b = lc.zones;!b && a && (b = lc.zones = a()); return b },
        Xc = { active: !0, isWhitelisted: function() { return !0 } };
    var Yc = !1,
        Zc = 0,
        $c = [];

    function ad(a) {
        if (!Yc) {
            var b = D.createEventObject,
                c = "complete" == D.readyState,
                d = "interactive" == D.readyState;
            if (!a || "readystatechange" != a.type || c || !b && d) { Yc = !0; for (var e = 0; e < $c.length; e++) N($c[e]) }
            $c.push = function() { for (var a = 0; a < arguments.length; a++) N(arguments[a]); return 0 }
        }
    }

    function bd() { if (!Yc && 140 > Zc) { Zc++; try { D.documentElement.doScroll("left"), ad() } catch (a) { C.setTimeout(bd, 50) } } }
    var cd = function(a) { Yc ? a() : $c.push(a) };
    var dd = !1,
        ed = function() { return C.GoogleAnalyticsObject && C[C.GoogleAnalyticsObject] };
    var fd = function(a) {
            C.GoogleAnalyticsObject || (C.GoogleAnalyticsObject = a || "ga");
            var b = C.GoogleAnalyticsObject;
            if (!C[b]) {
                var c = function() {
                    c.q = c.q || [];
                    c.q.push(arguments)
                };
                c.l = Number(new Date);
                C[b] = c
            }
            return C[b]
        },
        gd = function(a, b, c, d) {
            b = String(b).replace(/\s+/g, "").split(",");
            var e = ed();
            e(a + "require", "linker");
            e(a + "linker:autoLink", b, c, d)
        };
    var kd = function() { return "&tc=" + Sb.filter(function(a) { return a }).length },
        ld = "0.005000" > Math.random(),
        md = function() {
            var a = 0,
                b = 0;
            return {
                Nd: function() {
                    if (2 > a) return !1;
                    1E3 <= (new Date).getTime() - b && (a = 0);
                    return 2 <= a
                },
                ie: function() {
                    1E3 <= (new Date).getTime() - b && (a = 0);
                    a++;
                    b = (new Date).getTime()
                }
            }
        },
        nd = "",
        od = function() { nd = [nc, "&v=3&t=t", "&pid=" + zc(), "&rv=7n"].join("") },
        pd = {},
        qd = "",
        rd = void 0,
        sd = {},
        td = {},
        ud = void 0,
        vd = null,
        wd = 1E3,
        xd = function() {
            var a = rd;
            return void 0 === a ? "" : [nd,
                pd[a] ? "" : "&es=1", sd[a], kd(), qd, "&z=0"
            ].join("")
        },
        yd = function() {
            ud && (C.clearTimeout(ud), ud = void 0);
            void 0 === rd || pd[rd] && !qd || (td[rd] || vd.Nd() || 0 >= wd-- ? td[rd] = !0 : (vd.ie(), K(xd()), pd[rd] = !0, qd = ""))
        },
        zd = function(a, b, c) {
            if (ld && !td[a] && b) {
                a !== rd && (yd(), rd = a);
                var d = c + String(b[R.L] || "").replace(/_/g, "");
                qd = qd ? qd + "." + d : "&tr=" + d;
                ud || (ud = C.setTimeout(yd, 500));
                2022 <= xd().length && yd()
            }
        };

    function Ad(a, b, c, d, e, f) {
        var h = Sb[a],
            k = Bd(a, b, c, d, e, f);
        if (!k) return null;
        var l = bc(h[R.Ob], f.X, []);
        if (l && l.length) {
            var m = l[0];
            k = Ad(m.index, b, k, 1 === m.Zb ? e : k, e, f)
        }
        return k
    }

    function Bd(a, b, c, d, e, f) {
        function h() {
            var b = cc(k, f.X);
            b.vtp_gtmOnSuccess = function() {
                zd(f.id, Sb[a], "5");
                c()
            };
            b.vtp_gtmOnFailure = function() {
                zd(f.id, Sb[a], "6");
                d()
            };
            b.vtp_gtmTagId = k.tag_id;
            if (k[R.Cc]) d();
            else {
                zd(f.id, k, "1");
                try { Yb(b) } catch (A) {
                    zd(f.id,
                        k, "7");
                    e()
                }
            }
        }
        var k = Sb[a];
        if (f.X(k)) return null;
        var l = bc(k[R.Pb], f.X, []);
        if (l && l.length) {
            var m = l[0],
                n = Ad(m.index, b, c, d, e, f);
            if (!n) return null;
            c = n;
            d = 2 === m.Zb ? e : n
        }
        if (k[R.Nb] || k[R.Dc]) {
            var p = k[R.Nb] ? Tb : b,
                q = c,
                r = d;
            if (!p[a]) {
                h = Dc(h);
                var u = Cd(a, p, h);
                c = u.R;
                d = u.ka
            }
            return function() { p[a](q, r) }
        }
        return h
    }

    function Cd(a, b, c) {
        var d = [],
            e = [];
        b[a] = Dd(d, e, c);
        return { R: function() { b[a] = Ed; for (var c = 0; c < d.length; c++) d[c]() }, ka: function() { b[a] = Fd; for (var c = 0; c < e.length; c++) e[c]() } }
    }

    function Dd(a, b, c) {
        return function(d, e) {
            a.push(d);
            b.push(e);
            c()
        }
    }

    function Ed(a) { a() }

    function Fd(a, b) { b() };

    function Gd(a) {
        var b = 0,
            c = 0,
            d = !1;
        return {
            add: function() {
                c++;
                return Dc(function() {
                    b++;
                    d && b >= c && a()
                })
            },
            Pc: function() {
                d = !0;
                b >= c && a()
            }
        }
    }

    function Hd(a, b) {
        if (!ld) return;
        var c = function(a) {
            var d = b.X(Sb[a]) ? "3" : "4",
                f = bc(Sb[a][R.Ob], b.X, []);
            f && f.length && c(f[0].index);
            zd(b.id, Sb[a], d);
            var h = bc(Sb[a][R.Pb], b.X, []);
            h && h.length && c(h[0].index)
        };
        c(a);
    }
    var Id = !1;
    var Jd = function(a, b) {
        var c = {};
        c[R.L] = "__" + a;
        for (var d in b) b.hasOwnProperty(d) && (c["vtp_" + d] = b[d]);
        for (d in void 0)(void 0).hasOwnProperty(d) && (c[d] = (void 0)[d]);
        Sb.push(c);
        return Sb.length - 1
    };
    var Kd = "allow_ad_personalization_signals cookie_domain cookie_expires cookie_name cookie_path custom_params event_callback event_timeout groups send_to send_page_view session_duration user_properties".split(" ");
    var Ld = /[A-Z]+/,
        Md = /\s/,
        Nd = function(a) {
            if (tc(a) && (a = a.trim(), !Md.test(a))) {
                var b = a.indexOf("-");
                if (!(0 > b)) {
                    var c = a.substring(0, b);
                    if (Ld.test(c)) {
                        for (var d = a.substring(b + 1).split("/"), e = 0; e < d.length; e++)
                            if (!d[e]) return;
                        return { id: a, prefix: c, containerId: c + "-" + d[0], ia: d }
                    }
                }
            }
        };
    var Od = null,
        Pd = {},
        Qd = {},
        Rd;

    function Sd() {
        Od = Od || !lc.gtagRegistered;
        lc.gtagRegistered = !0;
        return Od
    }
    var Td = function(a, b) {
        var c = { event: a };
        b && (c.eventModel = x(b, void 0), b.event_callback && (c.eventCallback = b.event_callback), b.event_timeout && (c.eventTimeout = b.event_timeout));
        return c
    };

    function Ud(a) {
        if (void 0 === Qd[a.id]) {
            var b;
            if ("UA" == a.prefix) b = Jd("gtagua", { trackingId: a.id });
            else if ("AW" == a.prefix) b = Jd("gtagaw", { conversionId: a });
            else if ("DC" == a.prefix) b = Jd("gtagfl", { targetId: a.id });
            else if ("GF" == a.prefix) b = Jd("gtaggf", { conversionId: a });
            else if ("G" == a.prefix) b = Jd("get", { trackingId: a.id, isAutoTag: !0 });
            else return;
            if (!Rd) {
                var c = { name: "send_to", dataLayerVersion: 2 },
                    d = {};
                d[R.L] = "__v";
                for (var e in c) c.hasOwnProperty(e) && (d["vtp_" + e] = c[e]);
                Pb.push(d);
                Rd = ["macro", Pb.length - 1]
            }
            var f = {
                arg0: Rd,
                arg1: a.id,
                ignore_case: !1
            };
            f[R.L] = "_lc";
            Rb.push(f);
            var h = { "if": [Rb.length - 1], add: [b] };
            h["if"] && (h.add || h.block) && Qb.push(h);
            Qd[a.id] = b
        }
    }
    var Wd = {
            event: function(a) {
                var b = a[1];
                if (tc(b) && !(3 < a.length)) {
                    var c;
                    if (2 < a.length) {
                        if (!za(a[2])) return;
                        c = a[2]
                    }
                    var d = Td(b, c);
                    var e;
                    var f = c,
                        h = Hc("gtag.fields.send_to", 2);
                    tc(h) || (h = "send_to");
                    var k = f && f[h];
                    void 0 === k && (k = Hc(h, 2), void 0 === k && (k = "default"));
                    if (tc(k) || qa(k)) {
                        for (var l, m = k.toString().replace(/\s+/g, "").split(","), n = [], p = 0; p < m.length; p++) 0 <= m[p].indexOf("-") ? n.push(m[p]) : n = n.concat(Pd[m[p]] || []);
                        l = n;
                        for (var q = {}, r = 0; r < l.length; ++r) {
                            var u = Nd(l[r]);
                            u && (q[u.id] =
                                u)
                        }
                        var t = [],
                            A;
                        for (A in q)
                            if (q.hasOwnProperty(A)) { var J = q[A]; "AW" === J.prefix && J.ia[1] && t.push(J.containerId) }
                        for (var E = 0; E < t.length; ++E) delete q[t[E]];
                        var B = [],
                            O;
                        for (O in q) q.hasOwnProperty(O) && B.push(q[O]);
                        e = B
                    } else e = void 0;
                    if (!e) return;
                    var F = Sd();
                    F || Vd();
                    for (var L = [], I = 0; F && I < e.length; I++) {
                        var M = e[I];
                        L.push(M.id);
                        Ud(M)
                    }
                    d.eventModel = d.eventModel || {};
                    0 < e.length ? d.eventModel.send_to = L.join() : delete d.eventModel.send_to;
                    return d
                }
            },
            set: function(a) {
                var b;
                2 == a.length && za(a[1]) ?
                    b = x(a[1], void 0) : 3 == a.length && tc(a[1]) && (b = {}, b[a[1]] = a[2]);
                if (b) return b.eventModel = x(b, void 0), b.event = "gtag.set", b._clear = !0, b
            },
            js: function(a) { if (2 == a.length && a[1].getTime) return { event: "gtm.js", "gtm.start": a[1].getTime() } },
            config: function(a) {
                var b = a[2] || {};
                if (2 > a.length || !tc(a[1]) || !za(b)) return;
                var c = Nd(a[1]);
                if (!c) return;
                Sd() ? Ud(c) : Vd();
                var d = c.id,
                    e;
                for (e in Pd)
                    if (Pd.hasOwnProperty(e)) {
                        var f = ra(Pd[e], d);
                        0 <= f && Pd[e].splice(f, 1)
                    }
                var h = c.id,
                    k = b.groups || "default";
                k =
                    k.toString().split(",");
                for (var l = 0; l < k.length; l++) Pd[k[l]] = Pd[k[l]] || [], Pd[k[l]].push(h);
                delete b.groups;
                Nc("gtag.targets." + c.id, void 0);
                Nc("gtag.targets." + c.id, x(b, void 0));
                var m = {};
                m.send_to = c.id;
                return Td("gtag.config", m);
            }
        },
        Vd = Dc(function() {});
    var Xd = !1,
        Yd = [];

    function Zd() { if (!Xd) { Xd = !0; for (var a = 0; a < Yd.length; a++) N(Yd[a]) } };
    var $d = [],
        ae = !1,
        be = function(a) {
            var b = a.eventCallback,
                c = Dc(function() { sc(b) && N(function() { b(kc.o) }) }),
                d = a.eventTimeout;
            d && C.setTimeout(c, Number(d));
            return c
        },
        ce = function() {
            for (var a = !1; !ae && 0 < $d.length;) {
                ae = !0;
                delete Fc.eventModel;
                var b = $d.shift();
                if (sc(b)) try { b.call(Ic) } catch (de) {} else if (qa(b)) {
                        var c = b;
                        if (tc(c[0])) {
                            var d = c[0].split("."),
                                e = d.pop(),
                                f = c.slice(1),
                                h = Hc(d.join("."), 2);
                            if (void 0 !== h && null !== h) try { h[e].apply(h, f) } catch (de) {}
                        }
                    } else {
                        var k = b;
                        if (k && ("[object Arguments]" == Object.prototype.toString.call(k) ||
                                Object.prototype.hasOwnProperty.call(k, "callee"))) {
                            a: {
                                var l = b;
                                if (l.length && tc(l[0])) { var m = Wd[l[0]]; if (m) { b = m(l); break a } }
                                b = void 0
                            }
                            if (!b) { ae = !1; continue }
                        }
                        var n;
                        var p = void 0,
                            q = b,
                            r = q._clear;
                        for (p in q) q.hasOwnProperty(p) && "_clear" !== p && (r && Nc(p, void 0), Nc(p, q[p]));
                        var u = q.event;
                        if (u) {
                            var t = q["gtm.uniqueEventId"];
                            t || (t = Bc(), q["gtm.uniqueEventId"] = t, Nc("gtm.uniqueEventId", t));
                            mc = u;
                            var A;
                            var J, E, B = q,
                                O = B.event,
                                F = B["gtm.uniqueEventId"],
                                L = lc.zones;
                            E = L ? L.checkState(kc.o, F) : Xc;
                            if (E.active) {
                                var I = be(B);
                                c: {
                                    var M =
                                        E.isWhitelisted;
                                    if ("gtm.js" == O) {
                                        if (Id) { J = !1; break c }
                                        Id = !0
                                    }
                                    var W = F,
                                        S = O;
                                    if (ld && !td[W] && rd !== W) {
                                        yd();
                                        rd = W;
                                        qd = "";
                                        var H = sd,
                                            X = W,
                                            ca, sa = S;
                                        ca = 0 === sa.indexOf("gtm.") ? encodeURIComponent(sa) : "*";
                                        H[X] = "&e=" + ca + "&eid=" + W;
                                        ud || (ud = C.setTimeout(yd, 500))
                                    }
                                    var ia = Sc(M),
                                        aa = { id: F, name: O, ad: I || rc, X: ia, Wa: hc(ia) };
                                    for (var Uc, Zb = aa, ee = Gd(Zb.ad), Sf = [], $b = [], lb = 0; lb < Sb.length; lb++)
                                        if (Zb.Wa[lb]) {
                                            var Tf = Sb[lb];
                                            var Bb = ee.add();
                                            try {
                                                var fe = Ad(lb, Sf, Bb, Bb, Bb, Zb);
                                                fe ? $b.push(fe) : (Hd(lb, Zb), Bb())
                                            } catch (de) { Bb() }
                                        }
                                    ee.Pc();
                                    for (var Vc = 0; Vc < $b.length; Vc++) $b[Vc]();Uc = 0 < $b.length;
                                    if ("gtm.js" === O || "gtm.sync" === O) d: {}
                                    if (Uc) {
                                        for (var Uf = { __cl: !0, __evl: !0, __fsl: !0, __hl: !0, __jel: !0, __lcl: !0, __sdl: !0, __tl: !0, __ytl: !0 }, ac = 0; ac < aa.Wa.length; ac++)
                                            if (aa.Wa[ac]) { var he = Sb[ac]; if (he && !Uf[he[R.L]]) { J = !0; break c } }
                                        J = !1
                                    } else J = Uc
                                }
                                A = J ? !0 : !1
                            } else A = !1;
                            mc = null;
                            n = A
                        } else n = !1;
                        a = n || a
                    }
                ae = !1
            }
            return !a
        },
        ie = function() {
            var a = ce();
            try {
                var b = C["dataLayer"].hide;
                if (b && void 0 !== b[kc.o] && b.end) {
                    b[kc.o] = !1;
                    var c = !0,
                        d;
                    for (d in b)
                        if (b.hasOwnProperty(d) &&
                            !0 === b[d]) { c = !1; break }
                    c && (b.end(), b.end = null)
                }
            } catch (e) {}
            return a
        },
        je = function() {
            var a = Na("dataLayer", []),
                b = Na("google_tag_manager", {});
            b = b["dataLayer"] = b["dataLayer"] || {};
            $c.push(function() { b.gtmDom || (b.gtmDom = !0, a.push({ event: "gtm.dom" })) });
            Yd.push(function() { b.gtmLoad || (b.gtmLoad = !0, a.push({ event: "gtm.load" })) });
            var c = a.push;
            a.push = function() {
                var b = [].slice.call(arguments, 0);
                c.apply(a, b);
                for ($d.push.apply($d, b); 300 < this.length;) this.shift();
                return ce()
            };
            $d.push.apply($d, a.slice(0));
            N(ie)
        };
    var ke = {};
    ke.Ia = new String("undefined");
    ke.ab = {};
    var le = function(a) { this.resolve = function(b) { for (var c = [], d = 0; d < a.length; d++) c.push(a[d] === ke.Ia ? b : a[d]); return c.join("") } };
    le.prototype.toString = function() { return this.resolve("undefined") };
    le.prototype.valueOf = le.prototype.toString;
    ke.jd = function(a) { return new le(a) };
    var me = {};
    ke.je = function(a, b) {
        var c = Bc();
        me[c] = [a, b];
        return c
    };
    ke.Ub = function(a) {
        var b = a ? 0 : 1;
        return function(a) {
            var c = me[a];
            if (c && "function" === typeof c[b]) c[b]();
            me[a] = void 0
        }
    };
    ke.Md = function(a) { for (var b = !1, c = !1, d = 2; d < a.length; d++) b = b || 8 === a[d], c = c || 16 === a[d]; return b && c };
    ke.ae = function(a) {
        if (a === ke.Ia) return a;
        var b = Bc();
        ke.ab[b] = a;
        return 'google_tag_manager["' + kc.o + '"].macro(' + b + ")"
    };
    ke.Fc = le;
    var ne = new Ac,
        oe = function(a, b) {
            function c(a) {
                var b = Q(a),
                    c = P(b, "protocol"),
                    d = P(b, "host", !0),
                    e = P(b, "port"),
                    f = P(b, "path").toLowerCase().replace(/\/$/, "");
                if (void 0 === c || "http" == c && "80" == e || "https" == c && "443" == e) c = "web", e = "default";
                return [c, d, e, f]
            }
            for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
                if (d[f] !== e[f]) return !1;
            return !0
        };

    function pe(a) {
        var b = a.arg0,
            c = a.arg1;
        switch (a["function"]) {
            case "_cn":
                return 0 <= String(b).indexOf(String(c));
            case "_css":
                var d;
                a: {
                    if (b) {
                        var e = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"];
                        try {
                            for (var f = 0; f < e.length; f++)
                                if (b[e[f]]) { d = b[e[f]](c); break a }
                        } catch (u) {}
                    }
                    d = !1
                }
                return d;
            case "_ew":
                var h, k;
                h = String(b);
                k = String(c);
                var l = h.length - k.length;
                return 0 <= l && h.indexOf(k, l) == l;
            case "_eq":
                return String(b) == String(c);
            case "_ge":
                return Number(b) >= Number(c);
            case "_gt":
                return Number(b) > Number(c);
            case "_lc":
                var m;
                m = String(b).split(",");
                return 0 <= ra(m, String(c));
            case "_le":
                return Number(b) <= Number(c);
            case "_lt":
                return Number(b) < Number(c);
            case "_re":
                var n;
                var p = a.ignore_case ? "i" : void 0;
                try {
                    var q = String(c) + p,
                        r = ne.get(q);
                    r || (r = new RegExp(c, p), ne.set(q, r));
                    n = r.test(b)
                } catch (u) { n = !1 }
                return n;
            case "_sw":
                return 0 == String(b).indexOf(String(c));
            case "_um":
                return oe(b, c)
        }
        return !1
    };

    function qe(a, b, c, d) { return (d || "https:" == C.location.protocol ? a : b) + c }

    function re(a, b) {
        for (var c = b || (a instanceof v ? new v : new va), d = a.P(), e = 0; e < d.length(); e++) {
            var f = d.get(e);
            if (a.has(f)) {
                var h = a.get(f);
                h instanceof v ? (c.get(f) instanceof v || c.set(f, new v), re(h, c.get(f))) : h instanceof va ? (c.get(f) instanceof va || c.set(f, new va), re(h, c.get(f))) : c.set(f, h)
            }
        }
        return c
    }

    function se() { return kc.o }

    function te() { return (new Date).getTime() }

    function ue(a, b) { return Ca(Hc(a, b || 2)) }

    function ve() { return mc }

    function we(a) { return Va('<a href="' + a + '"></a>')[0].href }

    function xe(a) { return vc(Aa(a)) }

    function ye(a) { return null === a ? "null" : void 0 === a ? "undefined" : a.toString() }

    function ze(a, b) { return zc(a, b) }

    function Ae(a, b, c) {
        if (!(a instanceof v)) return null;
        for (var d = new va, e = !1, f = 0; f < a.length(); f++) {
            var h = a.get(f);
            h instanceof va && h.has(b) && h.has(c) && (d.set(h.get(b), h.get(c)), e = !0)
        }
        return e ? d : null
    }
    var Be = function() {
        var a = new La;
        a.addAll(Za());
        a.addAll({ buildSafeUrl: qe, decodeHtmlUrl: we, copy: re, generateUniqueNumber: Bc, getContainerId: se, getCurrentTime: te, getDataLayerValue: ue, getEventName: ve, makeInteger: xe, makeString: ye, randomInteger: ze, tableToMap: Ae });
        return function(b) { return a.get(b) }
    };
    var Ce = new ab,
        De = function() {
            var a = data.runtime || [];
            Ob = function(a, b) {
                var c = new va,
                    d;
                for (d in b) b.hasOwnProperty(d) && c.set(d, Ca(b[d]));
                var e = Ce.N([a, c]);
                e instanceof g && "return" === e.w && (e = e.getData());
                return Aa(e)
            };
            Vb = pe;
            $a(Ce, Be());
            for (var b = 0; b < a.length; b++) {
                var c = a[b];
                if (!qa(c) || 3 > c.length) { if (0 == c.length) continue; break }
                Ce.N(c)
            }
        };
    var Ee = function(a, b) {
        var c = function() {};
        c.prototype = a.prototype;
        var d = new c;
        a.apply(d, Array.prototype.slice.call(arguments, 1));
        return d
    };
    var Fe = function(a) { return encodeURIComponent(a) },
        Ge = function(a) {
            var b = ["veinteractive.com", "ve-interactive.cn"];
            if (!a) return !1;
            var c = P(Q(a), "host");
            if (!c) return !1;
            for (var d = 0; b && d < b.length; d++) {
                var e = b[d] && b[d].toLowerCase();
                if (e) {
                    var f = c.length - e.length;
                    0 < f && "." != e.charAt(0) && (f--, e = "." + e);
                    if (0 <= f && c.indexOf(e, f) == f) return !0
                }
            }
            return !1
        };
    var T = function(a, b, c) { for (var d = {}, e = !1, f = 0; a && f < a.length; f++) a[f] && a[f].hasOwnProperty(b) && a[f].hasOwnProperty(c) && (d[a[f][b]] = a[f][c], e = !0); return e ? d : null },
        He = function(a, b) { x(a, b) },
        Ie = function(a) { return vc(a) },
        Je = function(a, b) { return ra(a, b) };
    var Ke = function(a) {
            var b = { "gtm.element": a, "gtm.elementClasses": a.className, "gtm.elementId": a["for"] || Sa(a, "id") || "", "gtm.elementTarget": a.formTarget || a.target || "" };
            b["gtm.elementUrl"] = (a.attributes && a.attributes.formaction ? a.formAction : "") || a.action || a.href || a.src || a.code || a.codebase || "";
            return b
        },
        Le = function(a) {
            lc.hasOwnProperty("autoEventsSettings") || (lc.autoEventsSettings = {});
            var b = lc.autoEventsSettings;
            b.hasOwnProperty(a) || (b[a] = {});
            return b[a]
        },
        Me = function(a, b, c, d) {
            var e = Le(a),
                f = Cc(e, b, d);
            e[b] =
                c(f)
        },
        Ne = function(a, b, c) { var d = Le(a); return Cc(d, b, c) };
    var Oe = /(^|\.)doubleclick\.net$/i,
        Pe = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
        Qe = function(a, b, c) {
            for (var d = String(b || D.cookie).split(";"), e = [], f = 0; f < d.length; f++) {
                var h = d[f].split("="),
                    k = yc(h[0]);
                if (k && k == a) {
                    var l = yc(h.slice(1).join("="));
                    l && !1 !== c && (l = decodeURIComponent(l));
                    e.push(l)
                }
            }
            return e
        },
        Re = function(a, b, c, d, e, f) {
            f && (b = encodeURIComponent(b));
            var h = a + "=" + b + "; ";
            c && (h += "path=" + c + "; ");
            e && (h += "expires=" + e.toGMTString() + "; ");
            var k, l;
            if ("auto" == d) {
                var m = P(C.location, "host", !0).split(".");
                if (4 ==
                    m.length && /^[0-9]*$/.exec(m[3])) l = ["none"];
                else {
                    for (var n = [], p = m.length - 2; 0 <= p; p--) n.push(m.slice(p).join("."));
                    n.push("none");
                    l = n
                }
            } else l = [d || "none"];
            k = l;
            for (var q = D.cookie, r = 0; r < k.length; r++) {
                var u = h,
                    t = k[r],
                    A = c;
                if (Oe.test(C.location.hostname) || "/" == A && Pe.test(t)) break;
                "none" != k[r] && (u += "domain=" + k[r] + ";");
                D.cookie = u;
                if (q != D.cookie || 0 <= ra(Qe(a), b)) break
            }
        };
    var Se = !1;
    if (D.querySelectorAll) try {
        var Te = D.querySelectorAll(":root");
        Te && 1 == Te.length && Te[0] == D.documentElement && (Se = !0)
    } catch (a) {}
    var Ue = Se;
    var Ve = function(a) {
            for (var b = [], c = document.cookie.split(";"), d = new RegExp("^\\s*" + a + "=\\s*(.*?)\\s*$"), e = 0; e < c.length; e++) {
                var f = c[e].match(d);
                f && b.push(f[1])
            }
            return b
        },
        Ye = function(a, b, c, d) {
            var e = We(a, d);
            if (1 === e.length) return e[0].id;
            if (0 !== e.length) {
                e = Xe(e, function(a) { return a.rd }, b);
                if (1 === e.length) return e[0].id;
                e = Xe(e, function(a) { return a.Zd }, c);
                return e[0] ? e[0].id : void 0
            }
        },
        af = function(a, b, c, d, e) {
            c = void 0 === c ? "/" : c;
            var f = d = void 0 === d ? "auto" : d,
                h = c;
            if (Ze.test(document.location.hostname) || "/" ===
                h && $e.test(f)) return !1;
            var k = b;
            k && 1200 < k.length && (k = k.substring(0, 1200));
            b = k;
            var l = a + "=" + b + "; path=" + c + "; ";
            void 0 !== e && (l += "expires=" + (new Date((new Date).getTime() + e)).toGMTString() + "; ");
            if ("auto" === d) {
                var m = !1,
                    n;
                a: {
                    var p = [],
                        q = document.location.hostname.split(".");
                    if (4 === q.length) { var r = q[q.length - 1]; if (parseInt(r, 10).toString() === r) { n = ["none"]; break a } }
                    for (var u = q.length - 2; 0 <= u; u--) p.push(q.slice(u).join("."));p.push("none");n = p
                }
                for (var t = n, A = 0; A < t.length && !m; A++) m = af(a, b, c, t[A], e);
                return m
            }
            d &&
                "none" !== d && (l += "domain=" + d + ";");
            var J = document.cookie;
            document.cookie = l;
            return J != document.cookie || 0 <= Ve(a).indexOf(b)
        };

    function Xe(a, b, c) {
        for (var d = [], e = [], f, h = 0; h < a.length; h++) {
            var k = a[h],
                l = b(k);
            l === c ? d.push(k) : void 0 === f || l < f ? (e = [k], f = l) : l === f && e.push(k)
        }
        return 0 < d.length ? d : e
    }

    function We(a, b) {
        for (var c = [], d = Ve(a), e = 0; e < d.length; e++) {
            var f = d[e].split("."),
                h = f.shift();
            if (!b || -1 !== b.indexOf(h)) {
                var k = f.shift();
                k && (k = k.split("-"), c.push({ id: f.join("."), rd: 1 * k[0] || 1, Zd: 1 * k[1] || 1 }))
            }
        }
        return c
    }
    var $e = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
        Ze = /(^|\.)doubleclick\.net$/i;
    var bf = window,
        cf = document;
    var ff = function(a) {
            for (var b = bf.navigator.userAgent + (cf.cookie || "") + (cf.referrer || ""), c = b.length, d = bf.history.length; 0 < d;) b += d-- ^ c++;
            var e = 1,
                f, h, k;
            if (b)
                for (e = 0, h = b.length - 1; 0 <= h; h--) k = b.charCodeAt(h), e = (e << 6 & 268435455) + k + (k << 14), f = e & 266338304, e = 0 != f ? e ^ f >> 21 : e;
            var l = [Math.round(2147483647 * Math.random()) ^ e & 2147483647, Math.round(Date.now() / 1E3)].join("."),
                m = "" + df(void 0),
                n = ef(void 0);
            1 < n && (m += "-" + n);
            return [a, m, l].join(".")
        },
        gf = function(a, b, c, d) { var e = df(b); return Ye(a, e, ef(c), d) };

    function df(a) {
        if (!a) return 1;
        a = 0 === a.indexOf(".") ? a.substr(1) : a;
        return a.split(".").length
    }

    function ef(a) { if (!a || "/" === a) return 1; "/" !== a[0] && (a = "/" + a); "/" !== a[a.length - 1] && (a += "/"); return a.split("/").length - 1 };
    var hf = ["1"],
        jf = {},
        mf = function(a, b, c) {
            b = void 0 === b ? "auto" : b;
            c = void 0 === c ? "/" : c;
            var d = kf(void 0 === a ? "_gcl" : a);
            if (!jf[d] && !lf(d, b, c)) {
                var e = ff("1");
                af(d, e, c, b, 7776E6);
                lf(d, b, c)
            }
        };

    function lf(a, b, c) {
        var d = gf(a, b, c, hf);
        d && (jf[a] = d);
        return d
    }

    function kf(a) { return (void 0 === a ? "_gcl" : a) + "_au" };
    var nf = function(a) {
        for (var b = [], c = D.cookie.split(";"), d = new RegExp("^\\s*" + a + "=\\s*(.*?)\\s*$"), e = 0; e < c.length; e++) {
            var f = c[e].match(d);
            f && b.push(f[1])
        }
        var h = [];
        if (!b || 0 == b.length) return h;
        for (var k = 0; k < b.length; k++) {
            var l = b[k].split(".");
            3 == l.length && "GCL" == l[0] && l[1] && h.push(l[2])
        }
        return h
    };
    var of = /^\w+$/,
        pf = /^[\w-]+$/,
        qf = /^\d+\.fls\.doubleclick\.net$/;

    function rf(a) { return a && "string" == typeof a && a.match(of) ? a : "_gcl" }

    function sf(a) { if (a) { if ("string" == typeof a) { var b = rf(a); return { sa: b, ra: b, xa: b } } if (a && "object" == typeof a) return { sa: rf(a.dc), ra: rf(a.aw), xa: rf(a.gf) } } return { sa: "_gcl", ra: "_gcl", xa: "_gcl" } }

    function tf(a) {
        var b = Q(C.location.href),
            c = P(b, "host", !1);
        if (c && c.match(qf)) { var d = P(b, "path").split(a + "="); if (1 < d.length) return d[1].split(";")[0].split("?")[0] }
    }

    function uf(a) { return a.filter(function(a) { return pf.test(a) }) }
    var wf = function(a) { var b = tf("gclaw"); if (b) return b.split("."); var c = sf(a); if ("_gcl" == c.ra) { var d = vf(); if (d && (null == d.D || "aw.ds" == d.D)) return [d.W] } return uf(nf(c.ra + "_aw")) },
        xf = function(a) { var b = tf("gcldc"); if (b) return b.split("."); var c = sf(a); if ("_gcl" == c.sa) { var d = vf(); if (d && ("ds" == d.D || "aw.ds" == d.D)) return [d.W] } return uf(nf(c.sa + "_dc")) };

    function vf() {
        var a = Q(C.location.href),
            b = P(a, "query", !1, void 0, "gclid"),
            c = P(a, "query", !1, void 0, "gclsrc");
        if (!b || !c) {
            var d = P(a, "fragment");
            b = b || Xa(d, "gclid");
            c = c || Xa(d, "gclsrc")
        }
        return void 0 !== b && b.match(pf) ? { W: b, D: c } : null
    }
    var yf = function() {
            var a = tf("gac");
            if (a) return decodeURIComponent(a);
            for (var b = [], c = D.cookie.split(";"), d = /^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/, e = 0; e < c.length; e++) {
                var f = c[e].match(d);
                f && b.push({ zb: f[1], value: f[2] })
            }
            var h = {};
            if (b && b.length)
                for (var k = 0; k < b.length; k++) { var l = b[k].value.split("."); "1" == l[0] && 3 == l.length && l[1] && (h[b[k].zb] || (h[b[k].zb] = []), h[b[k].zb].push({ timestamp: l[1], W: l[2] })) }
            var m = [],
                n;
            for (n in h)
                if (h.hasOwnProperty(n)) {
                    for (var p = [], q = h[n], r = 0; r < q.length; r++) p.push(q[r].W);
                    p = uf(p);
                    p.length && m.push(n + ":" + p.join(","))
                }
            return m.join(";")
        },
        zf = function(a, b, c) {};
    var Af;
    a: { Af = "g"; break a;Af = "G" }
    var Bf = { "": "n", UA: "u", AW: "a", DC: "d", G: "e", GTM: Af },
        Cf = function(a) {
            var b = kc.o.split("-"),
                c = b[0].toUpperCase();
            return (Bf[c] || "i") + "7n" + (a && "GTM" === c ? b[1] : "")
        };
    var Df = function(a) { return !(void 0 === a || null === a || 0 === (a + "").length) },
        Ef = function(a, b) {
            var c;
            if (2 === b.C) return a("ord", zc(1E11, 1E13)), !0;
            if (3 === b.C) return a("ord", "1"), a("num", zc(1E11, 1E13)), !0;
            if (4 === b.C) return Df(b.sessionId) && a("ord", b.sessionId), !0;
            if (5 === b.C) c = "1";
            else if (6 === b.C) c = b.vc;
            else return !1;
            Df(c) && a("qty", c);
            Df(b.gb) && a("cost", b.gb);
            Df(b.Ab) && a("ord", b.Ab);
            return !0
        },
        Ff = encodeURIComponent,
        Gf = function(a, b) {
            function c(a, b, c) { f.hasOwnProperty(a) || (b += "", e += ";" + a + "=" + (c ? b : Ff(b))) }
            var d = a.ib,
                e = a.protocol;
            e += a.Xa ? "//" + d + ".fls.doubleclick.net/activityi" : "//ad.doubleclick.net/activity";
            e += ";src=" + Ff(d) + (";type=" + Ff(a.jb)) + (";cat=" + Ff(a.qa));
            var f = a.ld || {},
                h;
            for (h in f) f.hasOwnProperty(h) && (e += ";" + Ff(h) + "=" + Ff(f[h] + ""));
            if (Ef(c, a)) {
                Df(a.Cb) && c("u", a.Cb);
                Df(a.tran) && c("tran", a.tran);
                c("gtm", Cf());
                !1 === a.Nc && c("npa", "1");
                if (a.fb) {
                    var k = xf(a.fa);
                    k && k.length && c("gcldc", k.join("."));
                    var l = wf(a.fa);
                    l && l.length && c("gclaw", l.join("."));
                    var m = yf();
                    m && c("gac", m);
                }
                Df(a.sb) && c("prd", a.sb, !0);
                for (var p in a.Fa) a.Fa.hasOwnProperty(p) && c(p, a.Fa[p]);
                e += b || "";
                Df(a.Ta) && c("~oref", a.Ta);
                a.Xa ? Pa(e + "?", a.R) : K(e + "?", a.R, a.ka)
            } else N(a.ka)
        };
    var If = function(a) {
            if (a) try {
                if (a.conversion_id && a.conversion_data) {
                    var b = "/pagead/conversion/" + Hf(a.conversion_id) + "/?",
                        c = Hf(JSON.stringify(a.conversion_data)),
                        d = "https://www.googletraveladservices.com/travel/flights/clk" + b + "conversion_data=" + c;
                    if (a.conversionLinkerEnabled) {
                        var e;
                        a: {
                            var f = sf(a.conversionPrefix);
                            if ("_gcl" == f.xa) { var h = vf(); if (h && "gf" == h.D) { e = [h.W]; break a } }
                            e = uf(nf(f.xa + "_gf"))
                        }
                        var k = e;
                        k && k.length && (d += "&gclgf=" + Hf(k.join(".")))
                    }
                    K(d, a.onSuccess, a.onFailure)
                }
            } catch (l) {}
        },
        Hf = function(a) {
            return null ===
                a || void 0 === a || 0 === String(a).length ? "" : encodeURIComponent(String(a))
        };
    var Jf = !!C.MutationObserver,
        Kf = void 0,
        Lf = function(a) {
            if (!Kf) {
                var b = function() {
                    var a = D.body;
                    if (a)
                        if (Jf)(new MutationObserver(function() { for (var a = 0; a < Kf.length; a++) N(Kf[a]) })).observe(a, { childList: !0, subtree: !0 });
                        else {
                            var b = !1;
                            Qa(a, "DOMNodeInserted", function() { b || (b = !0, N(function() { b = !1; for (var a = 0; a < Kf.length; a++) N(Kf[a]) })) })
                        }
                };
                Kf = [];
                D.body ? b() : N(b)
            }
            Kf.push(a)
        };
    var Yf = "www.googletagmanager.com/gtm.js";
    Yf = "www.googletagmanager.com/gtag/js";
    var Zf = Yf,
        $f = function(a, b, c, d) { Qa(a, b, c, d) },
        ag = function(a, b) { return C.setTimeout(a, b) },
        bg = function(a, b, c) { G(a, b, c) },
        cg = {},
        dg = function(a, b, c) {
            var d = cg[a];
            if (void 0 === d) {
                var e = function(a, b) { return function() { a.status = b; for (var c = 2 == b ? a.yc : a.Yb, d = 0; d < c.length; d++) C.setTimeout(c[d], 0) } };
                d = { status: 1, yc: [], Yb: [], pe: void 0 };
                d.Xe = G(a, e(d, 2), e(d, 3));
                cg[a] = d
            }
            0 === d.status && (d.pe(), d.status = 2);
            2 === d.status ? b && b() : 3 === d.status ? c && c() : 1 === d.status && (b && d.yc.push(b), c && d.Yb.push(c))
        },
        eg = function() { return C.location.href },
        fg = function(a) { return P(Q(a), "fragment") },
        U = function(a, b) { return Hc(a, b || 2) },
        gg = function(a, b, c) { b && (a.eventCallback = b, c && (a.eventTimeout = c)); return C["dataLayer"].push(a) },
        hg = function(a, b) { C[a] = b },
        V = function(a, b, c) { b && (void 0 === C[a] || c && !C[a]) && (C[a] = b); return C[a] },
        ig = function(a, b, c) {
            var d = b,
                e = c,
                f = sf(a);
            e = e || "auto";
            d = d || "/";
            var h = vf();
            if (null != h) {
                var k = (new Date).getTime(),
                    l = new Date(k + 7776E6),
                    m = ["GCL", Math.round(k / 1E3), h.W].join(".");
                h.D && "aw.ds" != h.D || Re(f.ra + "_aw", m, d, e, l, !0);
                "aw.ds" != h.D &&
                    "ds" != h.D || Re(f.sa + "_dc", m, d, e, l, !0);
                "gf" == h.D && Re(f.xa + "_gf", m, d, e, l, !0)
            }
        },
        jg = function(a, b) {
            var c;
            a: {
                var d;d = 100;
                for (var e = {}, f = 0; f < b.length; f++) e[b[f]] = !0;
                for (var h = a, k = 0; h && k <= d; k++) {
                    if (e[String(h.tagName).toLowerCase()]) { c = h; break a }
                    h = h.parentElement
                }
                c = null
            }
            return c
        },
        Y = function(a, b, c, d) {
            var e = !d && "http:" == C.location.protocol;
            e && (e = 2 !== kg());
            return (e ? b : a) + c
        };
    var lg = function(a) { var b = 0; return b },
        mg = function(a) {},
        ng = function(a) { var b = !1; return b },
        og = function(a, b) {
            var c;
            a: {
                if (a &&
                    qa(a))
                    for (var d = 0; d < a.length; d++)
                        if (a[d] && b(a[d])) { c = a[d]; break a }
                c = void 0
            }
            return c
        },
        pg = function(a, b, c, d) { Me(a, b, c, d) },
        qg = function(a, b, c) { return Ne(a, b, c) },
        rg = function(a) { return !!Ne(a, "init", !1) },
        sg = function(a) { Le(a).init = !0 };
    var kg = function() {
        var a = Zf;
        if (qc) { if (0 === qc.toLowerCase().indexOf("https://")) return 2; if (0 === qc.toLowerCase().indexOf("http://")) return 3 }
        a = a.toLowerCase();
        for (var b = "https://" + a, c = "http://" + a, d = 1, e = D.getElementsByTagName("script"), f = 0; f < e.length && 100 > f; f++) {
            var h = e[f].src;
            if (h) {
                h = h.toLowerCase();
                if (0 === h.indexOf(c)) return 3;
                1 === d && 0 === h.indexOf(b) && (d = 2)
            }
        }
        return d
    };
    var ug = function(a, b) { return Jc(a, b, void 0) };
    var vg = function(a, b, c) {
        var d = (void 0 === c ? 0 : c) ? "www.googletagmanager.com/gtag/js" : Zf;
        d += "?id=" + encodeURIComponent(a) + "&l=dataLayer";
        if (b)
            for (var e in b) b[e] && b.hasOwnProperty(e) && (d += "&" + e + "=" + encodeURIComponent(b[e]));
        var f = Y("https://", "http://", d);
        G(f, void 0, void 0)
    };
    var xg = function(a, b, c) { a instanceof ke.Fc && (a = a.resolve(ke.je(b, c)), b = rc); return { kb: a, R: b } };
    var yg = function(a, b, c) {
            this.n = a;
            this.t = b;
            this.p = c
        },
        zg = function() {
            this.c = 1;
            this.e = [];
            this.p = null
        };

    function Ag(a) {
        var b = lc,
            c = b.gss = b.gss || {};
        return c[a] = c[a] || new zg
    }
    var Bg = function(a, b) { Ag(a).p = b },
        Cg = function(a, b, c) {
            var d = Math.floor((new Date).getTime() / 1E3);
            Ag(a).e.push(new yg(b, d, c))
        },
        Dg = function(a) {};
    var Mg = window,
        Ng = document,
        Og = function(a) {
            var b = Mg._gaUserPrefs;
            if (b && b.ioo && b.ioo() || a && !0 === Mg["ga-disable-" + a]) return !0;
            try { var c = Mg.external; if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0 } catch (m) {}
            for (var d = [], e = Ng.cookie.split(";"), f = /^\s*AMP_TOKEN=\s*(.*?)\s*$/, h = 0; h < e.length; h++) {
                var k = e[h].match(f);
                k && d.push(k[1])
            }
            for (var l = 0; l < d.length; l++)
                if ("$OPT_OUT" == decodeURIComponent(d[l])) return !0;
            return !1
        };
    var Rg = function(a) {
            if (1 === Ag(a).c) {
                Ag(a).c = 2;
                var b = encodeURIComponent(a);
                G(("http:" != C.location.protocol ? "https:" : "http:") + ("//www.googletagmanager.com/gtag/js?id=" + b + "&l=dataLayer&cx=c"))
            }
        },
        Sg = function(a, b) {};
    var Z = { a: {} };
    Z.a.e = ["google"],
        function() {
            (function(a) {
                Z.__e = a;
                Z.__e.b = "e";
                Z.__e.g = !0
            })(function() { return mc })
        }();

    Z.a.v = ["google"],
        function() {
            (function(a) {
                Z.__v = a;
                Z.__v.b = "v";
                Z.__v.g = !0
            })(function(a) { var b = a.vtp_name; if (!b || !b.replace) return !1; var c = U(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1); return void 0 !== c ? c : a.vtp_defaultValue })
        }();


    Z.a.gtagaw = ["google"],
        function() {
            var a = !1,
                b = !1,
                c = [],
                d = "send_to aw_remarketing aw_remarketing_only custom_params send_page_view language value currency transaction_id user_id conversion_linker conversion_cookie_prefix page_location page_referrer phone_conversion_number phone_conversion_callback phone_conversion_css_class items aw_merchant_id aw_feed_country aw_feed_language discount disable_merchant_reported_purchases allow_ad_personalization_signals".split(" "),
                e = function(a) {
                    var b = V("google_trackConversion"),
                        c = a.gtm_onFailure;
                    "function" == typeof b ? b(a) || c() : c()
                },
                f = function() { for (; 0 < c.length;) e(c.shift()) },
                h = function() {
                    a || (a = !0, bg(Y("https://", "http://", "www.googleadservices.com/pagead/conversion_async.js"), function() {
                        f();
                        c = { push: e }
                    }, function() {
                        f();
                        a = !1
                    }))
                },
                k = function(a, c, d, e) {
                    if (c) {
                        var f = a.ia[0],
                            h = a.ia[1],
                            k = V("_googWcmImpl", function() {
                                k.q = k.q || [];
                                k.q.push(arguments)
                            });
                        V("_googWcmAk", f);
                        b || (b = !0, bg(Y("https://", "http://", "www.gstatic.com/wcm/loader.js")));
                        var l = { ak: f, cl: h };
                        void 0 === d && (l.autoreplace = c);
                        k(2, d, l, c, e, new Date, e)
                    }
                },
                l = function(a) {
                    if (a) {
                        for (var b = [], c = 0; c < a.length; ++c) {
                            var d = a[c];
                            d && b.push({ item_id: d.id, quantity: d.quantity, value: d.price })
                        }
                        return b
                    }
                },
                m = function(a) {
                    var b = a.vtp_conversionId,
                        e = mc,
                        f = "gtag.config" == e,
                        m = b.ia[0],
                        n = b.ia[1],
                        A = void 0 !== n,
                        J = b.containerId,
                        E = A ? b.id : void 0,
                        B = function(a) { return Jc(a, J, E) },
                        O = !1 !== B("conversion_linker"),
                        F = B("conversion_cookie_prefix");
                    f && O && ig(F);
                    if (f && A) {
                        var L = B("phone_conversion_number"),
                            I = B("phone_conversion_callback"),
                            M = B("phone_conversion_css_class"),
                            W = B("phone_conversion_options");
                        k(b, L, I || M, W)
                    }
                    var S = !1 === B("aw_remarketing") || !1 === B("send_page_view") || !1 === B("allow_ad_personalization_signals");
                    if (!f || !A && !S) {
                        !0 === B("aw_remarketing_only") && (A = !1);
                        var H = {
                            google_conversion_id: m,
                            google_remarketing_only: !A,
                            onload_callback: a.vtp_gtmOnSuccess,
                            gtm_onFailure: a.vtp_gtmOnFailure,
                            google_conversion_format: "3",
                            google_conversion_color: "ffffff",
                            google_conversion_domain: "",
                            google_conversion_label: n,
                            google_conversion_language: B("language"),
                            google_conversion_value: B("value"),
                            google_conversion_currency: B("currency"),
                            google_conversion_order_id: B("transaction_id"),
                            google_user_id: B("user_id"),
                            google_conversion_page_url: B("page_location"),
                            google_conversion_referrer_url: B("page_referrer"),
                            google_gtm: Cf(void 0)
                        };
                        !1 === B("allow_ad_personalization_signals") && (H.google_allow_ad_personalization_signals = !1);
                        H.google_read_gcl_cookie_opt_out = !O;
                        O && F && (za(F) ? H.google_gcl_cookie_prefix = F.aw : H.google_gcl_cookie_prefix = F);
                        var X = function() {
                            var a = B("custom_params"),
                                b = { event: e };
                            if (qa(a)) {
                                for (var c =
                                        0; c < a.length; ++c) {
                                    var f = a[c],
                                        h = B(f);
                                    void 0 !== h && (b[f] = h)
                                }
                                return b
                            }
                            var k = B("eventModel");
                            if (!k) return null;
                            x(k, b);
                            for (var l = 0; l < d.length; ++l) delete b[d[l]];
                            return b
                        }();
                        X && (H.google_custom_params = X);
                        !A && B("items") && (H.google_gtag_event_data = { items: B("items"), value: B("value") });
                        if (A && "purchase" == e && B("aw_merchant_id")) {
                            H.google_conversion_merchant_id = B("aw_merchant_id");
                            H.google_basket_feed_country = B("aw_feed_country");
                            H.google_basket_feed_language = B("aw_feed_language");
                            H.google_basket_discount = B("discount");
                            H.google_basket_transaction_type = e;
                            H.google_disable_merchant_reported_conversions = !0 === B("disable_merchant_reported_purchases");
                            var ca = l(B("items"));
                            ca && (H.google_conversion_items = ca)
                        }
                        c.push(H)
                    }
                    h()
                };
            Z.__gtagaw = m;
            Z.__gtagaw.b = "gtagaw";
            Z.__gtagaw.g = !0
        }();

    Z.a.get = ["google"],
        function() {
            (function(a) {
                Z.__get = a;
                Z.__get.b = "get";
                Z.__get.g = !0
            })(function(a) {
                if (a.vtp_isAutoTag) {
                    for (var b = String(a.vtp_trackingId), c = mc || "", d = {}, e = 0; e < Kd.length; e++) {
                        var f = ug(Kd[e], b);
                        void 0 !== f && (d[Kd[e]] = f)
                    }
                    var h = ug("custom_params", b);
                    if (qa(h))
                        for (var k = 0; k < h.length; k++) {
                            var l = h[k],
                                m = ug(l, b);
                            void 0 !== m && (d[l] = m)
                        } else {
                            var n = U("eventModel");
                            x(n, d)
                        }
                    var p = x(d, void 0);
                    Rg(b);
                    Cg(b, c, p);
                    Dg(b)
                } else {
                    var q = a.vtp_settings,
                        r = q.eventParameters,
                        u = q.userProperties,
                        t = T(a.vtp_eventParameters,
                            "name", "value");
                    x(t, r);
                    var A = T(a.vtp_userProperties, "name", "value");
                    x(A, u);
                    r.user_properties = u;
                    var J = String(q.streamId),
                        E = String(a.vtp_eventName);
                    Rg(J);
                    Cg(J, E, r);
                    Dg(J)
                }
                a.vtp_gtmOnSuccess()
            })
        }();


    Z.a.gtagfl = [],
        function() {
            function a(a) { var b = /^DC-(\d+)(\/([\w-]+)\/([\w-]+)\+(\w+))?$/.exec(a); if (b) { var c = { standard: 2, unique: 3, per_session: 4, transactions: 5, items_sold: 6, "": 1 }[(b[5] || "").toLowerCase()]; if (c) return { containerId: "DC-" + b[1], zc: b[3] ? a : "", Ic: b[1], Hc: b[3] || "", qa: b[4] || "", C: c } } }

            function b(a, b) {
                function c(b, c, e) { void 0 !== e && 0 !== (e + "").length && d.push(b + c + ":" + a(e + "")) }
                var d = [],
                    e = b("items") || [];
                if (qa(e))
                    for (var l = 0; l < e.length; l++) {
                        var m = e[l],
                            n = l + 1;
                        c("i", n, m.id);
                        c("p", n, m.price);
                        c("q", n, m.quantity);
                        c("c", n, b("country"));
                        c("l", n, b("language"))
                    }
                return d.join("|")
            }

            function c(a, b, c) {
                var d = /^u([1-9]\d?|100)$/,
                    e = a("custom_map") || {},
                    f = Mc(b, c),
                    m = {},
                    n = {};
                if (za(e))
                    for (var p in e)
                        if (e.hasOwnProperty(p) && d.test(p)) {
                            var q = e[p];
                            tc(q) && (m[p] = q)
                        }
                for (var r = 0; r < f.length; r++) {
                    var u = f[r];
                    d.test(u) && (m[u] = u)
                }
                for (var t in m) m.hasOwnProperty(t) && (n[t] = a(m[t]));
                return n
            }(function(a) {
                Z.__gtagfl = a;
                Z.__gtagfl.b = "gtagfl";
                Z.__gtagfl.g = !0
            })(function(d) {
                var e = d.vtp_gtmOnSuccess,
                    f = d.vtp_gtmOnFailure,
                    h = a(d.vtp_targetId);
                if (h) {
                    var k =
                        function(a) { return Jc(a, h.containerId, h.zc || void 0) },
                        l = !1 !== k("conversion_linker"),
                        m = k("conversion_cookie_prefix");
                    if ("gtag.config" === mc) l && (ig(m), zf(m, void 0, void 0)), N(e);
                    else {
                        var n = {},
                            p = k("dc_custom_params");
                        if (za(p))
                            for (var q in p)
                                if (p.hasOwnProperty(q)) {
                                    var r = p[q];
                                    void 0 !== r && null !== r && (n[q] = r)
                                }
                        var u = "";
                        if (5 === h.C || 6 === h.C) u = b(Fe, k);
                        var t = c(k, h.containerId, h.zc),
                            A = 3 === kg(),
                            J = !0 === k("allow_custom_scripts"),
                            E = {
                                qa: h.qa,
                                fb: l,
                                fa: m,
                                gb: k("value"),
                                C: h.C,
                                ld: n,
                                ib: h.Ic,
                                jb: h.Hc,
                                ka: f,
                                R: e,
                                Ta: Ya(Q(eg())),
                                sb: u,
                                protocol: A ? "http:" : "https:",
                                vc: k("quantity"),
                                Xa: J,
                                sessionId: k("session_id"),
                                Ab: k("transaction_id"),
                                Fa: t,
                                Nc: !1 !== k("allow_ad_personalization_signals")
                            };
                        Gf(E, void 0)
                    }
                } else N(f)
            })
        }();
    Z.a.gtaggf = ["google"],
        function() {
            var a = /.*\.google\.com\/booking\/flights.*/,
                b = function(a) { if (a) { for (var b = [], c = 0, f = 0; f < a.length; ++f) { var h = a[f];!h || void 0 !== h.category && "" !== h.category && "FlightSegment" !== h.category || (b[c] = { cabin: h.travel_class, fare_product: h.fare_product, booking_code: h.booking_code, flight_number: h.flight_number, origin: h.origin, destination: h.destination, departure_date: h.start_date }, c++) } return b } };
            (function(a) {
                Z.__gtaggf = a;
                Z.__gtaggf.b = "gtaggf";
                Z.__gtaggf.g = !0
            })(function(c) {
                var d =
                    mc,
                    e = c.vtp_gtmOnSuccess,
                    f = c.vtp_gtmOnFailure,
                    h = c.vtp_conversionId,
                    k = h.ia[0],
                    l = h.containerId,
                    m = function(a) { return Jc(a, l, h.id) },
                    n = !1 !== m("conversion_linker"),
                    p = m("conversion_cookie_prefix");
                if ("gtag.config" === d) n && ig(p), N(e);
                else {
                    var q = { conversion_id: k, onFailure: f, onSuccess: e, conversionLinkerEnabled: n, conversionPrefix: p };
                    if ("purchase" === d) {
                        var r = a.test(eg()),
                            u = { partner_id: k, trip_type: m("trip_type"), total_price: m("value"), currency: m("currency"), is_direct_booking: r, flight_segment: b(m("items")) },
                            t = m("passengers");
                        t && "object" === typeof t && (u.passengers_total = t.total, u.passengers_adult = t.adult, u.passengers_child = t.child, u.passengers_infant_in_seat = t.infant_in_seat, u.passengers_infant_in_lap = t.infant_in_lap, u.passengers_senior = t.senior);
                        q.conversion_data = u
                    }
                    If(q)
                }
            })
        }();


    Z.a.gtagua = ["google"],
        function() {
            var a, b = { client_id: 1, client_storage: "storage", cookie_name: 1, cookie_domain: 1, cookie_expires: 1, cookie_path: 1, cookie_update: 1, sample_rate: 1, site_speed_sample_rate: 1, use_amp_client_id: 1, store_gac: 1, conversion_linker: "storeGac" },
                c = {
                    anonymize_ip: 1,
                    app_id: 1,
                    app_installer_id: 1,
                    app_name: 1,
                    app_version: 1,
                    campaign: { name: "campaignName", source: "campaignSource", medium: "campaignMedium", term: "campaignTerm", content: "campaignContent", id: "campaignId" },
                    currency: "currencyCode",
                    description: "exDescription",
                    fatal: "exFatal",
                    language: 1,
                    non_interaction: 1,
                    page_hostname: "hostname",
                    page_referrer: "referrer",
                    page_path: "page",
                    page_location: "location",
                    page_title: "title",
                    screen_name: 1,
                    transport_type: "transport",
                    user_id: 1
                },
                d = { content_id: 1, event_category: 1, event_action: 1, event_label: 1, link_attribution: 1, linker: 1, method: 1, name: 1, send_page_view: 1, value: 1 },
                e = { cookie_name: 1, cookie_expires: "duration", levels: 1 },
                f = { anonymize_ip: 1, fatal: 1, non_interaction: 1, use_amp_client_id: 1, send_page_view: 1, store_gac: 1, conversion_linker: 1 },
                h = function(a, b, c, d) {
                    if (void 0 !== c)
                        if (f[b] && (c = wc(c)), "anonymize_ip" != b || c || (c = void 0), 1 === a) d[k(b)] = c;
                        else if (tc(a)) d[a] = c;
                    else
                        for (var e in a) a.hasOwnProperty(e) && void 0 !== c[e] && (d[a[e]] = c[e])
                },
                k = function(a) { return a && tc(a) ? a.replace(/(_[a-z])/g, function(a) { return a[1].toUpperCase() }) : a },
                l = function(a, b, c) { a.hasOwnProperty(b) || (a[b] = c) },
                m = function(a, e, f) {
                    var k = {},
                        m = {},
                        n = {},
                        p;
                    var q = ug("experiments", a);
                    if (qa(q)) {
                        for (var t = [], r = 0; r < q.length; r++) {
                            var u = q[r];
                            if (void 0 != u) {
                                var A = u.id,
                                    S = u.variant;
                                void 0 !=
                                    A && void 0 != S && t.push(String(A) + "." + String(S))
                            }
                        }
                        p = 0 < t.length ? t.join("!") : void 0
                    } else p = void 0;
                    p && l(m, "exp", p);
                    var H = ug("custom_map", a);
                    if (za(H))
                        for (var X in H)
                            if (H.hasOwnProperty(X) && /^(dimension|metric)\d+$/.test(X)) {
                                var ca = ug(H[X], a);
                                void 0 !== ca && l(m, X, ca)
                            }
                    for (var sa = Mc(a, void 0), ia = 0; ia < sa.length; ++ia) {
                        var aa = sa[ia],
                            Ba = ug(aa, a);
                        d.hasOwnProperty(aa) ? h(d[aa], aa, Ba, k) : c.hasOwnProperty(aa) ? h(c[aa], aa, Ba, m) : b.hasOwnProperty(aa) ? h(b[aa], aa, Ba, n) : /^(dimension|metric|content_group)\d+$/.test(aa) && h(1, aa,
                            Ba, m)
                    }
                    var ja = String(mc);
                    l(n, "cookieDomain", "auto");
                    l(m, "forceSSL", !0);
                    var db = "general";
                    0 <= Je("add_payment_info add_to_cart add_to_wishlist begin_checkout checkout_progress purchase refund remove_from_cart set_checkout_option".split(" "), ja) ? db = "ecommerce" : 0 <= Je("generate_lead login search select_content share sign_up view_item view_item_list view_promotion view_search_results".split(" "), ja) ? db = "engagement" : "exception" == ja && (db = "error");
                    l(k, "eventCategory", db);
                    0 <= Je(["view_item", "view_item_list",
                        "view_promotion", "view_search_results"
                    ], ja) && l(m, "nonInteraction", !0);
                    "login" == ja || "sign_up" == ja || "share" == ja ? l(k, "eventLabel", ug("method", a)) : "search" == ja || "view_search_results" == ja ? l(k, "eventLabel", ug("search_term", a)) : "select_content" == ja && l(k, "eventLabel", ug("content_type", a));
                    var Ab = k.linker || {};
                    if (Ab.accept_incoming || 0 != Ab.accept_incoming && Ab.domains) n.allowLinker = !0;
                    if (!1 === ug("allow_display_features", a) || !1 === ug("allow_ad_personalization_signals", a)) m.allowAdFeatures = !1;
                    n.name = e;
                    m["&gtm"] =
                        Cf(!0);
                    m.hitCallback = f;
                    k.O = m;
                    k.Wb = n;
                    return k
                },
                n = function(a) {
                    function b(a) {
                        var b = x(a, void 0);
                        b.list = a.list_name;
                        b.listPosition = a.list_position;
                        b.position = a.list_position || a.creative_slot;
                        b.creative = a.creative_name;
                        return b
                    }

                    function c(a) { for (var c = [], d = 0; a && d < a.length; d++) a[d] && c.push(b(a[d])); return c.length ? c : void 0 }

                    function d(a) { return { id: e("transaction_id"), affiliation: e("affiliation"), revenue: e("value"), tax: e("tax"), shipping: e("shipping"), coupon: e("coupon"), list: e("list_name") || a } }
                    for (var e = function(b) {
                            return Jc(b,
                                a, void 0)
                        }, f = e("items"), h, k = 0; f && k < f.length && !(h = f[k].list_name); k++);
                    var m = e("custom_map");
                    if (za(m))
                        for (k = 0; f && k < f.length; ++k) {
                            var n = f[k],
                                p;
                            for (p in m) m.hasOwnProperty(p) && /^(dimension|metric)\d+$/.test(p) && l(n, p, n[m[p]])
                        }
                    var q = null,
                        r = mc,
                        u = e("promotions");
                    "purchase" == r || "refund" == r ? q = { action: r, oa: d(), la: c(f) } : "add_to_cart" == r ? q = { action: "add", la: c(f) } : "remove_from_cart" == r ? q = { action: "remove", la: c(f) } : "view_item" == r ? q = { action: "detail", oa: d(h), la: c(f) } : "view_item_list" == r ? q = { action: "impressions", Hd: c(f) } :
                        "view_promotion" == r ? q = { action: "promo_view", tb: c(u) } : "select_content" == r && u && 0 < u.length ? q = { action: "promo_click", tb: c(u) } : "select_content" == r ? q = { action: "click", oa: { list: e("list_name") || h }, la: c(f) } : "begin_checkout" == r || "checkout_progress" == r ? q = { action: "checkout", la: c(f), oa: { step: "begin_checkout" == r ? 1 : e("checkout_step"), option: e("checkout_option") } } : "set_checkout_option" == r && (q = { action: "checkout_option", oa: { step: e("checkout_step"), option: e("checkout_option") } });
                    q && (q.Le = e("currency"));
                    return q
                },
                p = {},
                q = function(a, b) {
                    var c = p[a];
                    p[a] = x(b, void 0);
                    if (!c) return !1;
                    for (var d in b)
                        if (b.hasOwnProperty(d) && b[d] !== c[d]) return !0;
                    for (d in c)
                        if (c.hasOwnProperty(d) && c[d] !== b[d]) return !0;
                    return !1
                },
                r = function(b) {
                    var c = b.vtp_trackingId,
                        d = fd(void 0),
                        f = "gtag_" + c.split("-").join("_"),
                        p = function(a) {
                            var b = [].slice.call(arguments, 0);
                            b[0] = f + "." + b[0];
                            d.apply(window, b)
                        },
                        r = function() {
                            var a = function(a, b) { for (var c = 0; b && c < b.length; c++) p(a, b[c]) },
                                b = n(c);
                            if (b) {
                                var d = b.action;
                                if ("impressions" == d) a("ec:addImpression", b.Hd);
                                else if ("promo_click" ==
                                    d || "promo_view" == d) {
                                    var e = b.tb;
                                    a("ec:addPromo", b.tb);
                                    e && 0 < e.length && "promo_click" == d && p("ec:setAction", d)
                                } else a("ec:addProduct", b.la), p("ec:setAction", d, b.oa)
                            }
                        },
                        u = function() {
                            var a = ug("optimize_id", c);
                            a && (p("require", a, { dataLayer: "dataLayer" }), p("require", "render"))
                        },
                        F = m(c, f, b.vtp_gtmOnSuccess);
                    q(f, F.Wb) && d(function() { ed() && ed().remove(f) });
                    d("create", c, F.Wb);
                    (function() {
                        var a = ug("custom_map", c);
                        d(function() {
                            if (za(a)) {
                                var b = F.O,
                                    c = ed().getByName(f),
                                    d;
                                for (d in a)
                                    if (a.hasOwnProperty(d) && /^(dimension|metric)\d+$/.test(d)) {
                                        var e =
                                            c.get(k(a[d]));
                                        l(b, d, e)
                                    }
                            }
                        })
                    })();
                    (function(a) {
                        if (a) {
                            var b = {};
                            if (za(a))
                                for (var c in e) e.hasOwnProperty(c) && h(e[c], c, a[c], b);
                            p("require", "linkid", b)
                        }
                    })(F.linkAttribution);
                    var L = F.linker;
                    L && L.domains && gd(f + ".", L.domains, !!L.use_anchor, !!L.decorate_forms);
                    var I = function(a, b, c) {
                            c && (b = "" + b);
                            F.O[a] = b
                        },
                        M = mc;
                    "page_view" == M ? (u(), p("send", "pageview", F.O)) : "gtag.config" == M ? (u(), 0 != F.sendPageView && p("send", "pageview", F.O)) : "screen_view" == M ? p("send", "screenview", F.O) : "timing_complete" == M ? (I("timingCategory", F.eventCategory, !0), I("timingVar", F.name, !0), I("timingValue", vc(F.value)), void 0 !== F.eventLabel && I("timingLabel", F.eventLabel, !0), p("send", "timing", F.O)) : "exception" == M ? p("send", "exception", F.O) : (0 <= Je("view_item_list select_content view_item add_to_cart remove_from_cart begin_checkout set_checkout_option purchase refund view_promotion checkout_progress".split(" "), M) && (p("require", "ec", "ec.js"), r()), I("eventCategory", F.eventCategory, !0), I("eventAction", F.eventAction || M, !0), void 0 !== F.eventLabel && I("eventLabel",
                        F.eventLabel, !0), void 0 !== F.value && I("eventValue", vc(F.value)), p("send", "event", F.O));
                    a || (a = !0, bg("https://www.google-analytics.com/analytics.js", function() { ed().loaded || b.vtp_gtmOnFailure() }, b.vtp_gtmOnFailure))
                };
            Z.__gtagua = r;
            Z.__gtagua.b = "gtagua";
            Z.__gtagua.g = !0
        }();

    var Tg = { macro: function(a) { if (ke.ab.hasOwnProperty(a)) return ke.ab[a] } };
    Tg.dataLayer = Ic;
    Tg.onHtmlSuccess = ke.Ub(!0);
    Tg.onHtmlFailure = ke.Ub(!1);
    Tg.callback = function(a) {
        oc.hasOwnProperty(a) && sc(oc[a]) && oc[a]();
        delete oc[a]
    };
    Tg.Uc = function() {
        lc[kc.o] = Tg;
        pc = Z.a;
        Wb = Wb || ke;
        Xb = Tc
    };
    Tg.Id = function() {
        lc = C.google_tag_manager = C.google_tag_manager || {};
        if (lc[kc.o]) {
            var a = lc.zones;
            a && a.unregisterChild(kc.o)
        } else {
            for (var b = data.resource || {}, c = b.macros || [], d = 0; d < c.length; d++) Pb.push(c[d]);
            for (var e = b.tags || [], f = 0; f < e.length; f++) Sb.push(e[f]);
            for (var h = b.predicates || [], k = 0; k < h.length; k++) Rb.push(h[k]);
            for (var l = b.rules || [], m = 0; m < l.length; m++) {
                for (var n = l[m], p = {}, q = 0; q < n.length; q++) p[n[q][0]] = Array.prototype.slice.call(n[q], 1);
                Qb.push(p)
            }
            Ub = Z;
            De();
            Tg.Uc();
            je();
            Yc = !1;
            Zc = 0;
            if ("interactive" ==
                D.readyState && !D.createEventObject || "complete" == D.readyState) ad();
            else {
                Qa(D, "DOMContentLoaded", ad);
                Qa(D, "readystatechange", ad);
                if (D.createEventObject && D.documentElement.doScroll) {
                    var r = !0;
                    try { r = !C.frameElement } catch (t) {}
                    r && bd()
                }
                Qa(C, "load", ad)
            }
            Xd = !1;
            "complete" === D.readyState ? Zd() : Qa(C, "load", Zd);
            a: {
                if (!ld) break a;od();rd = void 0;sd = {};pd = {};ud = void 0;td = {};qd = "";vd = md();C.setInterval(od, 864E5);
            }
        }
    };
    Tg.Id();

})()