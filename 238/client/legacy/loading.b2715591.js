import{S as t,i as e,s as $,L as s,p as n,q as r,r as a,T as o,Z as c,u as f,v as l,w as m,x as p,z as i,k as g,h as d,y as u,A as x,o as h,f as y,g as w,j as b,l as v,n as E}from"./client.6c1c26f0.js";import{L as D,H as j,P as T}from"./layout.c5c65b59.js";import{L as A}from"./loading.90a103c1.js";import{S}from"./showcase.ffd9b8bb.js";import{C}from"./color-preview.72ff4d45.js";import{H as L}from"./h2.9ec5554a.js";import{H as O}from"./h3.2771e0bd.js";import{T as k,a as H,b as N,c as P}from"./table.680ba7ae.js";import"./classes.7d86155b.js";import"./label.4dd6f886.js";import"./copyable-code.ee1e9fe6.js";import"./asyncToGenerator.756dab92.js";import"./button.122cb09e.js";function V(t){let e;return{c(){e=u("Loading")},l(t){e=x(t,"Loading")},m(t,$){g(t,e,$)},d(t){t&&d(e)}}}function B(t){let e;return{c(){e=u("An indeterminate loading spinner.")},l(t){e=x(t,"An indeterminate loading spinner.")},m(t,$){g(t,e,$)},d(t){t&&d(e)}}}function G(t){let e,$,s,n,r,a;return{c(){e=u("Adapted from SpinKit by "),$=h("a"),s=u("@tobiasahlin"),n=u(": "),r=h("a"),a=u("https://tobiasahlin.com/spinkit/"),this.h()},l(t){e=x(t,"Adapted from SpinKit by "),$=y(t,"A",{href:!0,rel:!0});var o=w($);s=x(o,"@tobiasahlin"),o.forEach(d),n=x(t,": "),r=y(t,"A",{href:!0,rel:!0});var c=w(r);a=x(c,"https://tobiasahlin.com/spinkit/"),c.forEach(d),this.h()},h(){b($,"href","https://github.com/tobiasahlin"),b($,"rel","nofollow"),b(r,"href","https://tobiasahlin.com/spinkit/"),b(r,"rel","nofollow")},m(t,o){g(t,e,o),g(t,$,o),v($,s),g(t,n,o),g(t,r,o),v(r,a)},d(t){t&&d(e),t&&d($),t&&d(n),t&&d(r)}}}function R(t){let e,$,s;return $=new A({}),{c(){e=h("div"),n($.$$.fragment),this.h()},l(t){e=y(t,"DIV",{slot:!0,class:!0});var s=w(e);r($.$$.fragment,s),s.forEach(d),this.h()},h(){b(e,"slot","showcase"),b(e,"class","padded")},m(t,n){g(t,e,n),a($,e,null),s=!0},i(t){s||(f($.$$.fragment,t),s=!0)},o(t){l($.$$.fragment,t),s=!1},d(t){t&&d(e),m($)}}}function F(t){let e,$;return{c(){e=h("div"),$=h("pre"),this.h()},l(t){e=y(t,"DIV",{slot:!0});var s=w(e);$=y(s,"PRE",{class:!0}),w($).forEach(d),s.forEach(d),this.h()},h(){b($,"class","language-svelte"),b(e,"slot","source")},m(t,s){g(t,e,s),v(e,$),$.innerHTML='<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Loading</span> <span class="token punctuation">/></span></span></code>'},p:E,d(t){t&&d(e)}}}function I(t){let e;return{c(){e=p()},l(t){e=i(t)},m(t,$){g(t,e,$)},p:E,i:E,o:E,d(t){t&&d(e)}}}function K(t){let e;return{c(){e=u("Properties")},l(t){e=x(t,"Properties")},m(t,$){g(t,e,$)},d(t){t&&d(e)}}}function Y(t){let e;return{c(){e=u("Class Properties")},l(t){e=x(t,"Class Properties")},m(t,$){g(t,e,$)},d(t){t&&d(e)}}}function q(t){let e,$,s,n,r,a,o;return{c(){e=u("All "),$=h("code"),s=u("<Loading>"),n=u(" components use the "),r=h("code"),a=u(".spinner"),o=u(" class.")},l(t){e=x(t,"All "),$=y(t,"CODE",{});var c=w($);s=x(c,"<Loading>"),c.forEach(d),n=x(t," components use the "),r=y(t,"CODE",{});var f=w(r);a=x(f,".spinner"),f.forEach(d),o=x(t," class.")},m(t,c){g(t,e,c),g(t,$,c),v($,s),g(t,n,c),g(t,r,c),v(r,a),g(t,o,c)},d(t){t&&d(e),t&&d($),t&&d(n),t&&d(r),t&&d(o)}}}function z(t){let e;return{c(){e=u("Falsy values passed to classes will be disregarded.")},l(t){e=x(t,"Falsy values passed to classes will be disregarded.")},m(t,$){g(t,e,$)},d(t){t&&d(e)}}}function M(t){let e;return{c(){e=u("Name")},l(t){e=x(t,"Name")},m(t,$){g(t,e,$)},d(t){t&&d(e)}}}function Z(t){let e;return{c(){e=u("Default")},l(t){e=x(t,"Default")},m(t,$){g(t,e,$)},d(t){t&&d(e)}}}function J(t){let e;return{c(){e=u("Type")},l(t){e=x(t,"Type")},m(t,$){g(t,e,$)},d(t){t&&d(e)}}}function Q(t){let e;return{c(){e=u("Description")},l(t){e=x(t,"Description")},m(t,$){g(t,e,$)},d(t){t&&d(e)}}}function U(t){let e,$,s,o,c,u,x,h;return e=new N({props:{$$slots:{default:[M]},$$scope:{ctx:t}}}),s=new N({props:{$$slots:{default:[Z]},$$scope:{ctx:t}}}),c=new N({props:{$$slots:{default:[J]},$$scope:{ctx:t}}}),x=new N({props:{$$slots:{default:[Q]},$$scope:{ctx:t}}}),{c(){n(e.$$.fragment),$=p(),n(s.$$.fragment),o=p(),n(c.$$.fragment),u=p(),n(x.$$.fragment)},l(t){r(e.$$.fragment,t),$=i(t),r(s.$$.fragment,t),o=i(t),r(c.$$.fragment,t),u=i(t),r(x.$$.fragment,t)},m(t,n){a(e,t,n),g(t,$,n),a(s,t,n),g(t,o,n),a(c,t,n),g(t,u,n),a(x,t,n),h=!0},p(t,$){const n={};1&$&&(n.$$scope={dirty:$,ctx:t}),e.$set(n);const r={};1&$&&(r.$$scope={dirty:$,ctx:t}),s.$set(r);const a={};1&$&&(a.$$scope={dirty:$,ctx:t}),c.$set(a);const o={};1&$&&(o.$$scope={dirty:$,ctx:t}),x.$set(o)},i(t){h||(f(e.$$.fragment,t),f(s.$$.fragment,t),f(c.$$.fragment,t),f(x.$$.fragment,t),h=!0)},o(t){l(e.$$.fragment,t),l(s.$$.fragment,t),l(c.$$.fragment,t),l(x.$$.fragment,t),h=!1},d(t){m(e,t),t&&d($),m(s,t),t&&d(o),m(c,t),t&&d(u),m(x,t)}}}function W(t){let e,$,s;return{c(){e=h("strong"),$=h("code"),s=u("class")},l(t){e=y(t,"STRONG",{});var n=w(e);$=y(n,"CODE",{});var r=w($);s=x(r,"class"),r.forEach(d),n.forEach(d)},m(t,n){g(t,e,n),v(e,$),v($,s)},d(t){t&&d(e)}}}function X(t){let e,$;return{c(){e=h("code"),$=u("null")},l(t){e=y(t,"CODE",{});var s=w(e);$=x(s,"null"),s.forEach(d)},m(t,s){g(t,e,s),v(e,$)},d(t){t&&d(e)}}}function _(t){let e,$;return{c(){e=h("code"),$=u("string")},l(t){e=y(t,"CODE",{});var s=w(e);$=x(s,"string"),s.forEach(d)},m(t,s){g(t,e,s),v(e,$)},d(t){t&&d(e)}}}function tt(t){let e;return{c(){e=u("A class string to add to the component.")},l(t){e=x(t,"A class string to add to the component.")},m(t,$){g(t,e,$)},d(t){t&&d(e)}}}function et(t){let e,$,s,o,c,u,x,h;return e=new P({props:{$$slots:{default:[W]},$$scope:{ctx:t}}}),s=new P({props:{$$slots:{default:[X]},$$scope:{ctx:t}}}),c=new P({props:{$$slots:{default:[_]},$$scope:{ctx:t}}}),x=new P({props:{$$slots:{default:[tt]},$$scope:{ctx:t}}}),{c(){n(e.$$.fragment),$=p(),n(s.$$.fragment),o=p(),n(c.$$.fragment),u=p(),n(x.$$.fragment)},l(t){r(e.$$.fragment,t),$=i(t),r(s.$$.fragment,t),o=i(t),r(c.$$.fragment,t),u=i(t),r(x.$$.fragment,t)},m(t,n){a(e,t,n),g(t,$,n),a(s,t,n),g(t,o,n),a(c,t,n),g(t,u,n),a(x,t,n),h=!0},p(t,$){const n={};1&$&&(n.$$scope={dirty:$,ctx:t}),e.$set(n);const r={};1&$&&(r.$$scope={dirty:$,ctx:t}),s.$set(r);const a={};1&$&&(a.$$scope={dirty:$,ctx:t}),c.$set(a);const o={};1&$&&(o.$$scope={dirty:$,ctx:t}),x.$set(o)},i(t){h||(f(e.$$.fragment,t),f(s.$$.fragment,t),f(c.$$.fragment,t),f(x.$$.fragment,t),h=!0)},o(t){l(e.$$.fragment,t),l(s.$$.fragment,t),l(c.$$.fragment,t),l(x.$$.fragment,t),h=!1},d(t){m(e,t),t&&d($),m(s,t),t&&d(o),m(c,t),t&&d(u),m(x,t)}}}function $t(t){let e,$,s,o,c,u;return $=new H({props:{$$slots:{default:[U]},$$scope:{ctx:t}}}),c=new H({props:{$$slots:{default:[et]},$$scope:{ctx:t}}}),{c(){e=h("thead"),n($.$$.fragment),s=p(),o=h("tbody"),n(c.$$.fragment)},l(t){e=y(t,"THEAD",{});var n=w(e);r($.$$.fragment,n),n.forEach(d),s=i(t),o=y(t,"TBODY",{});var a=w(o);r(c.$$.fragment,a),a.forEach(d)},m(t,n){g(t,e,n),a($,e,null),g(t,s,n),g(t,o,n),a(c,o,null),u=!0},p(t,e){const s={};1&e&&(s.$$scope={dirty:e,ctx:t}),$.$set(s);const n={};1&e&&(n.$$scope={dirty:e,ctx:t}),c.$set(n)},i(t){u||(f($.$$.fragment,t),f(c.$$.fragment,t),u=!0)},o(t){l($.$$.fragment,t),l(c.$$.fragment,t),u=!1},d(t){t&&d(e),m($),t&&d(s),t&&d(o),m(c)}}}function st(t){let e;return{c(){e=u("SCSS Variables")},l(t){e=x(t,"SCSS Variables")},m(t,$){g(t,e,$)},d(t){t&&d(e)}}}function nt(t){let e;return{c(){e=u("Name")},l(t){e=x(t,"Name")},m(t,$){g(t,e,$)},d(t){t&&d(e)}}}function rt(t){let e;return{c(){e=u("Description")},l(t){e=x(t,"Description")},m(t,$){g(t,e,$)},d(t){t&&d(e)}}}function at(t){let e;return{c(){e=u("Default")},l(t){e=x(t,"Default")},m(t,$){g(t,e,$)},d(t){t&&d(e)}}}function ot(t){let e,$,s,o,c,u;return e=new N({props:{$$slots:{default:[nt]},$$scope:{ctx:t}}}),s=new N({props:{$$slots:{default:[rt]},$$scope:{ctx:t}}}),c=new N({props:{$$slots:{default:[at]},$$scope:{ctx:t}}}),{c(){n(e.$$.fragment),$=p(),n(s.$$.fragment),o=p(),n(c.$$.fragment)},l(t){r(e.$$.fragment,t),$=i(t),r(s.$$.fragment,t),o=i(t),r(c.$$.fragment,t)},m(t,n){a(e,t,n),g(t,$,n),a(s,t,n),g(t,o,n),a(c,t,n),u=!0},p(t,$){const n={};1&$&&(n.$$scope={dirty:$,ctx:t}),e.$set(n);const r={};1&$&&(r.$$scope={dirty:$,ctx:t}),s.$set(r);const a={};1&$&&(a.$$scope={dirty:$,ctx:t}),c.$set(a)},i(t){u||(f(e.$$.fragment,t),f(s.$$.fragment,t),f(c.$$.fragment,t),u=!0)},o(t){l(e.$$.fragment,t),l(s.$$.fragment,t),l(c.$$.fragment,t),u=!1},d(t){m(e,t),t&&d($),m(s,t),t&&d(o),m(c,t)}}}function ct(t){let e,$,s;return{c(){e=h("strong"),$=h("code"),s=u("$main")},l(t){e=y(t,"STRONG",{});var n=w(e);$=y(n,"CODE",{});var r=w($);s=x(r,"$main"),r.forEach(d),n.forEach(d)},m(t,n){g(t,e,n),v(e,$),v($,s)},d(t){t&&d(e)}}}function ft(t){let e;return{c(){e=u("The color of spinner dots.")},l(t){e=x(t,"The color of spinner dots.")},m(t,$){g(t,e,$)},d(t){t&&d(e)}}}function lt(t){let e,$;return e=new C({props:{value:"#4300B0"}}),{c(){n(e.$$.fragment)},l(t){r(e.$$.fragment,t)},m(t,s){a(e,t,s),$=!0},p:E,i(t){$||(f(e.$$.fragment,t),$=!0)},o(t){l(e.$$.fragment,t),$=!1},d(t){m(e,t)}}}function mt(t){let e,$,s,o,c,u;return e=new P({props:{$$slots:{default:[ct]},$$scope:{ctx:t}}}),s=new P({props:{$$slots:{default:[ft]},$$scope:{ctx:t}}}),c=new P({props:{$$slots:{default:[lt]},$$scope:{ctx:t}}}),{c(){n(e.$$.fragment),$=p(),n(s.$$.fragment),o=p(),n(c.$$.fragment)},l(t){r(e.$$.fragment,t),$=i(t),r(s.$$.fragment,t),o=i(t),r(c.$$.fragment,t)},m(t,n){a(e,t,n),g(t,$,n),a(s,t,n),g(t,o,n),a(c,t,n),u=!0},p(t,$){const n={};1&$&&(n.$$scope={dirty:$,ctx:t}),e.$set(n);const r={};1&$&&(r.$$scope={dirty:$,ctx:t}),s.$set(r);const a={};1&$&&(a.$$scope={dirty:$,ctx:t}),c.$set(a)},i(t){u||(f(e.$$.fragment,t),f(s.$$.fragment,t),f(c.$$.fragment,t),u=!0)},o(t){l(e.$$.fragment,t),l(s.$$.fragment,t),l(c.$$.fragment,t),u=!1},d(t){m(e,t),t&&d($),m(s,t),t&&d(o),m(c,t)}}}function pt(t){let e,$,s,o,c,u;return $=new H({props:{$$slots:{default:[ot]},$$scope:{ctx:t}}}),c=new H({props:{$$slots:{default:[mt]},$$scope:{ctx:t}}}),{c(){e=h("thead"),n($.$$.fragment),s=p(),o=h("tbody"),n(c.$$.fragment)},l(t){e=y(t,"THEAD",{});var n=w(e);r($.$$.fragment,n),n.forEach(d),s=i(t),o=y(t,"TBODY",{});var a=w(o);r(c.$$.fragment,a),a.forEach(d)},m(t,n){g(t,e,n),a($,e,null),g(t,s,n),g(t,o,n),a(c,o,null),u=!0},p(t,e){const s={};1&e&&(s.$$scope={dirty:e,ctx:t}),$.$set(s);const n={};1&e&&(n.$$scope={dirty:e,ctx:t}),c.$set(n)},i(t){u||(f($.$$.fragment,t),f(c.$$.fragment,t),u=!0)},o(t){l($.$$.fragment,t),l(c.$$.fragment,t),u=!1},d(t){t&&d(e),m($),t&&d(s),t&&d(o),m(c)}}}function it(t){let e,$,s,o,c,u,x,h,y,w,b,v,E,D,A,C,H,N,P,M,Z,J;return e=new j({props:{$$slots:{default:[V]},$$scope:{ctx:t}}}),s=new T({props:{$$slots:{default:[B]},$$scope:{ctx:t}}}),c=new T({props:{$$slots:{default:[G]},$$scope:{ctx:t}}}),x=new S({props:{$$slots:{default:[I],source:[F],showcase:[R]},$$scope:{ctx:t}}}),y=new L({props:{id:"properties",$$slots:{default:[K]},$$scope:{ctx:t}}}),b=new O({props:{$$slots:{default:[Y]},$$scope:{ctx:t}}}),E=new T({props:{$$slots:{default:[q]},$$scope:{ctx:t}}}),A=new T({props:{$$slots:{default:[z]},$$scope:{ctx:t}}}),H=new k({props:{$$slots:{default:[$t]},$$scope:{ctx:t}}}),P=new L({props:{id:"scss-variables",$$slots:{default:[st]},$$scope:{ctx:t}}}),Z=new k({props:{$$slots:{default:[pt]},$$scope:{ctx:t}}}),{c(){n(e.$$.fragment),$=p(),n(s.$$.fragment),o=p(),n(c.$$.fragment),u=p(),n(x.$$.fragment),h=p(),n(y.$$.fragment),w=p(),n(b.$$.fragment),v=p(),n(E.$$.fragment),D=p(),n(A.$$.fragment),C=p(),n(H.$$.fragment),N=p(),n(P.$$.fragment),M=p(),n(Z.$$.fragment)},l(t){r(e.$$.fragment,t),$=i(t),r(s.$$.fragment,t),o=i(t),r(c.$$.fragment,t),u=i(t),r(x.$$.fragment,t),h=i(t),r(y.$$.fragment,t),w=i(t),r(b.$$.fragment,t),v=i(t),r(E.$$.fragment,t),D=i(t),r(A.$$.fragment,t),C=i(t),r(H.$$.fragment,t),N=i(t),r(P.$$.fragment,t),M=i(t),r(Z.$$.fragment,t)},m(t,n){a(e,t,n),g(t,$,n),a(s,t,n),g(t,o,n),a(c,t,n),g(t,u,n),a(x,t,n),g(t,h,n),a(y,t,n),g(t,w,n),a(b,t,n),g(t,v,n),a(E,t,n),g(t,D,n),a(A,t,n),g(t,C,n),a(H,t,n),g(t,N,n),a(P,t,n),g(t,M,n),a(Z,t,n),J=!0},p(t,$){const n={};1&$&&(n.$$scope={dirty:$,ctx:t}),e.$set(n);const r={};1&$&&(r.$$scope={dirty:$,ctx:t}),s.$set(r);const a={};1&$&&(a.$$scope={dirty:$,ctx:t}),c.$set(a);const o={};1&$&&(o.$$scope={dirty:$,ctx:t}),x.$set(o);const f={};1&$&&(f.$$scope={dirty:$,ctx:t}),y.$set(f);const l={};1&$&&(l.$$scope={dirty:$,ctx:t}),b.$set(l);const m={};1&$&&(m.$$scope={dirty:$,ctx:t}),E.$set(m);const p={};1&$&&(p.$$scope={dirty:$,ctx:t}),A.$set(p);const i={};1&$&&(i.$$scope={dirty:$,ctx:t}),H.$set(i);const g={};1&$&&(g.$$scope={dirty:$,ctx:t}),P.$set(g);const d={};1&$&&(d.$$scope={dirty:$,ctx:t}),Z.$set(d)},i(t){J||(f(e.$$.fragment,t),f(s.$$.fragment,t),f(c.$$.fragment,t),f(x.$$.fragment,t),f(y.$$.fragment,t),f(b.$$.fragment,t),f(E.$$.fragment,t),f(A.$$.fragment,t),f(H.$$.fragment,t),f(P.$$.fragment,t),f(Z.$$.fragment,t),J=!0)},o(t){l(e.$$.fragment,t),l(s.$$.fragment,t),l(c.$$.fragment,t),l(x.$$.fragment,t),l(y.$$.fragment,t),l(b.$$.fragment,t),l(E.$$.fragment,t),l(A.$$.fragment,t),l(H.$$.fragment,t),l(P.$$.fragment,t),l(Z.$$.fragment,t),J=!1},d(t){m(e,t),t&&d($),m(s,t),t&&d(o),m(c,t),t&&d(u),m(x,t),t&&d(h),m(y,t),t&&d(w),m(b,t),t&&d(v),m(E,t),t&&d(D),m(A,t),t&&d(C),m(H,t),t&&d(N),m(P,t),t&&d(M),m(Z,t)}}}function gt(t){let e,$;const p=[dt];let i={$$slots:{default:[it]},$$scope:{ctx:t}};for(let t=0;t<p.length;t+=1)i=s(i,p[t]);return e=new D({props:i}),{c(){n(e.$$.fragment)},l(t){r(e.$$.fragment,t)},m(t,s){a(e,t,s),$=!0},p(t,[$]){const s=0&$?o(p,[c(dt)]):{};1&$&&(s.$$scope={dirty:$,ctx:t}),e.$set(s)},i(t){$||(f(e.$$.fragment,t),$=!0)},o(t){l(e.$$.fragment,t),$=!1},d(t){m(e,t)}}}const dt={name:"Loading"};export default class extends t{constructor(t){super(),e(this,t,null,gt,$,{})}}export{dt as metadata};
