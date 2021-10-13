var app = function () {
    "use strict";
    function t() {}
    function n(t) {
        return t()
    }
    function e() {
        return Object.create(null)
    }
    function o(t) {
        t.forEach(n)
    }
    function r(t) {
        return "function" == typeof t
    }
    function c(t, n) {
        return t != t ? n == n : t !== n || t && "object" == typeof t || "function" == typeof t
    }
    function s(t, n) {
        t.appendChild(n)
    }
    function u(t, n, e) {
        t.insertBefore(n, e || null)
    }
    function i(t) {
        t.parentNode.removeChild(t)
    }
    function a(t) {
        return document.createElement(t)
    }
    function f(t) {
        return document.createTextNode(t)
    }
    function l() {
        return f(" ")
    }
    function d(t, n, e, o) {
        return t.addEventListener(n, e, o),
        () => t.removeEventListener(n, e, o)
    }
    function h(t) {
        const n = {};
        for (const e of t) 
            n[e.name] = e.value;
        
        return n
    }
    let $;
    function m(t) {
        $ = t
    }
    const p = [],
        g = [],
        b = [],
        x = [],
        _ = Promise.resolve();
    let y = !1;
    function E(t) {
        b.push(t)
    }
    let w = !1;
    const k = new Set;
    function C() {
        if (! w) {
            w = !0;
            do {
                for (let t = 0; t < p.length; t += 1) {
                    const n = p[t];
                    m(n),
                    v(n.$$)
                }
                for (m(null), p.length = 0; g.length;) 
                    g.pop()();
                
                for (let t = 0; t < b.length; t += 1) {
                    const n = b[t];
                    k.has(n) || (k.add(n), n())
                }
                b.length = 0
            } while (p.length);
            for (; x.length;) 
                x.pop()();
            
            y = !1,
            w = !1,
            k.clear()
        }
    }
    function v(t) {
        if (null !== t.fragment) {
            t.update(),
            o(t.before_update);
            const n = t.dirty;
            t.dirty = [-1],
            t.fragment && t.fragment.p(t.ctx, n),
            t.after_update.forEach(E)
        }
    }
    const T = new Set;
    let L;
    function R(t, n) {
        t && t.i && (T.delete(t), t.i(n))
    }
    function S(t, n, e, o) {
        if (t && t.o) {
            if (T.has(t)) 
                return;
            
            T.add(t),
            undefined.c.push((() => {
                T.delete(t),
                o && (e && t.d(1), o())
            })),
            t.o(n)
        }
    }
    function j(t) {
        t && t.c()
    }
    function M(t, e, c, s) {
        const {fragment: u, on_mount: i, on_destroy: a, after_update: f} = t.$$;
        u && u.m(e, c),
        s || E((() => {
            const e = i.map(n).filter(r);
            a ? a.push(... e) : o(e),
            t.$$.on_mount = []
        })),
        f.forEach(E)
    }
    function N(t, n) {
        const e = t.$$;
        null !== e.fragment && (o(e.on_destroy), e.fragment && e.fragment.d(n), e.on_destroy = e.fragment = null, e.ctx =[])
    }
    function O(t, n) {
        -1 === t.$$.dirty[0] && (p.push(t), y || (y =! 0, _.then(C)), t.$$.dirty.fill(0)),
        t.$$.dirty[n / 31 | 0] |= 1 << n % 31
    }
    function z(n, r, c, s, u, a, f, l =[-1]) {
        const d = $;
        m(n);
        const h = n.$$ = {
            fragment: null,
            ctx: null,
            props: a,
            update: t,
            not_equal: u,
            bound: e(),
            on_mount: [],
            on_destroy: [],
            on_disconnect: [],
            before_update: [],
            after_update: [],
            context: new Map(r.context || (d ? d.$$.context : [])),
            callbacks: e(),
            dirty: l,
            skip_bound: !1,
            root: r.target || d.$$.root
        };
        f && f(h.root);
        let p = !1;
        if (h.ctx = c ? c(n, r.props || {}, ((t, e, ... o) => {
            const r = o.length ? o[0] : e;
            return h.ctx && u(h.ctx[t], h.ctx[t] = r) && (! h.skip_bound && h.bound[t] && h.bound[t](r), p && O(n, t)),
            e
        })) : [], h.update(), p =! 0, o(h.before_update), h.fragment =!! s && s(h.ctx), r.target) {
            if (r.hydrate) {
                const t = function (t) {
                    return Array.from(t.childNodes)
                }(r.target);
                h.fragment && h.fragment.l(t),
                t.forEach(i)
            } else 
                h.fragment && h.fragment.c();
             r.intro && R(n.$$.fragment),
            M(n, r.target, r.anchor, r.customElement),
            C()
        }
        m(d)
    }
    "function" == typeof HTMLElement && (L = class extends HTMLElement {
        constructor() {
            super(),
            this.attachShadow({mode: "open"})
        }
        connectedCallback() {
            const {on_mount: t} = this.$$;
            this.$$.on_disconnect = t.map(n).filter(r);
            for (const t in this.$$.slotted) 
                this.appendChild(this.$$.slotted[t])
            
        }
        attributeChangedCallback(t, n, e) {
            this[t] = e
        }
        disconnectedCallback() {
            o(this.$$.on_disconnect)
        }
        $destroy() {
            N(this, 1),
            this.$destroy = t
        }
        $on(t, n) {
            const e = this.$$.callbacks[t] || (this.$$.callbacks[t] =[]);
            return e.push(n),
            () => {
                const t = e.indexOf(n);
                -1 !== t && e.splice(t, 1)
            }
        }
        $set(t) {
            var n;
            this.$$set && (n = t, 0 !== Object.keys(n).length) && (this.$$.skip_bound =! 0, this.$$set(t), this.$$.skip_bound =! 1)
        }
    });
    const H = [];
    const q = function (n, e = t) {
        let o;
        const r = new Set;
        function s(t) {
            if (c(n, t) && (n = t, o)) {
                const t = ! H.length;
                for (const t of r) 
                    t[1](),
                    H.push(t, n);
                
                if (t) {
                    for (let t = 0; t < H.length; t += 2) 
                        H[t][0](H[t + 1]);
                    
                    H.length = 0
                }
            }
        }
        return {
            set: s,
            update: function (t) {
                s(t(n))
            },
            subscribe: function (c, u = t) {
                const i = [c, u];
                return r.add(i),
                1 === r.size && (o = e(s) || t),
                c(n),
                () => {
                    r.delete(i),
                    0 === r.size && (o(), o = null)
                }
            }
        }
    }(0);
    function A(n) {
        let e,
            o,
            r;
        return {
            c() {
                e = a("button"),
                e.textContent = "+",
                this.c = t
            },
            m(t, c) {
                u(t, e, c),
                o || (r = d(e, "click", n[0]), o =! 0)
            },
            p: t,
            i: t,
            o: t,
            d(t) {
                t && i(e),
                o = !1,
                r()
            }
        }
    }
    function B(t) {
        return [function () {
                q.update((t => t + 1))
            }
        ]
    }
    class P extends L {
        constructor(t) {
            super(),
            z(this, {
                target: this.shadowRoot,
                props: h(this.attributes),
                customElement: !0
            }, B, A, c, {}, null),
            t && t.target && u(t.target, this, t.anchor)
        }
    }
    function D(n) {
        let e,
            o,
            r;
        return {
            c() {
                e = a("button"),
                e.textContent = "-",
                this.c = t
            },
            m(t, c) {
                u(t, e, c),
                o || (r = d(e, "click", n[0]), o =! 0)
            },
            p: t,
            i: t,
            o: t,
            d(t) {
                t && i(e),
                o = !1,
                r()
            }
        }
    }
    function F(t) {
        return [function () {
                q.update((t => t - 1))
            }
        ]
    }
    customElements.define("bundle-file-add", P);
    class G extends L {
        constructor(t) {
            super(),
            z(this, {
                target: this.shadowRoot,
                props: h(this.attributes),
                customElement: !0
            }, F, D, c, {}, null),
            t && t.target && u(t.target, this, t.anchor)
        }
    }
    function I(n) {
        let e,
            o,
            r;
        return {
            c() {
                e = a("button"),
                e.textContent = "reset",
                this.c = t
            },
            m(t, c) {
                u(t, e, c),
                o || (r = d(e, "click", n[0]), o =! 0)
            },
            p: t,
            i: t,
            o: t,
            d(t) {
                t && i(e),
                o = !1,
                r()
            }
        }
    }
    function J(t) {
        return [function () {
                q.set(0)
            }
        ]
    }
    customElements.define("bundle-file-dec", G);
    class K extends L {
        constructor(t) {
            super(),
            z(this, {
                target: this.shadowRoot,
                props: h(this.attributes),
                customElement: !0
            }, J, I, c, {}, null),
            t && t.target && u(t.target, this, t.anchor)
        }
    }
    function Q(n) {
        let e,
            o,
            r,
            c,
            d,
            h,
            $,
            m,
            p,
            g;
        return d = new P({}),
        $ = new G({}),
        p = new K({}), {
            c() {
                e = a("h1"),
                o = f("The count is "),
                r = f(n[0]),
                c = l(),
                j(d.$$.fragment),
                h = l(),
                j($.$$.fragment),
                m = l(),
                j(p.$$.fragment),
                this.c = t
            },
            m(t, n) {
                u(t, e, n),
                s(e, o),
                s(e, r),
                u(t, c, n),
                M(d, t, n),
                u(t, h, n),
                M($, t, n),
                u(t, m, n),
                M(p, t, n),
                g = !0
            },
            p(t, [n]) {
                (! g || 1 & n) && function (t, n) {
                    n = "" + n,
                    t.wholeText !== n && (t.data = n)
                }(r, t[0])
            },
            i(t) {
                g || (R(d.$$.fragment, t), R($.$$.fragment, t), R(p.$$.fragment, t), g =! 0)
            },
            o(t) {
                S(d.$$.fragment, t),
                S($.$$.fragment, t),
                S(p.$$.fragment, t),
                g = !1
            },
            d(t) {
                t && i(e),
                t && i(c),
                N(d, t),
                t && i(h),
                N($, t),
                t && i(m),
                N(p, t)
            }
        }
    }
    function U(t, n, e) {
        let o;
        return q.subscribe((t => {
            e(0, o = t)
        })),
        [o]
    }
    customElements.define("bundle-file-stores", K);
    class V extends L {
        constructor(t) {
            super(),
            z(this, {
                target: this.shadowRoot,
                props: h(this.attributes),
                customElement: !0
            }, U, Q, c, {}, null),
            t && t.target && u(t.target, this, t.anchor)
        }
    }
    customElements.define("bundle-file", V);
    return new V
}();
// # sourceMappingURL=bundle.js.map

