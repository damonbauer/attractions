import{S as t,i as e,s as $,J as s,p as n,q as r,r as a,N as o,Z as c,u as f,v as l,w as m,x as p,z as i,k as g,h as d,y as u,A as x,o as h,f as w,g as y,j as v,l as b,n as E}from"./client.d1b23065.js";import"./button.5d4db4f4.js";import"./classes.541c5f2a.js";import"./label.ff50c1d4.js";import"./asyncToGenerator.756dab92.js";import{L as D}from"./loading.48f6451c.js";import"./copyable-code.67c9d12a.js";import{L as j,H as A,P as T}from"./layout.53586324.js";import{T as S,a as C,b as O,c as L}from"./table.1033be56.js";import{H as k}from"./h3.ee2a7d97.js";import{H as N}from"./h2.8f11ff0f.js";import{S as H}from"./showcase.5ed4c90b.js";import"./color-preview.72edcca8.js";import{C as P}from"./color-preview.6faf62c6.js";function V(t){let e;return{c(){e=u("Loading")},l(t){e=x(t,"Loading")},m(t,$){g(t,e,$)},d(t){t&&d(e)}}}function B(t){let e;return{c(){e=u("An indeterminate loading spinner.")},l(t){e=x(t,"An indeterminate loading spinner.")},m(t,$){g(t,e,$)},d(t){t&&d(e)}}}function G(t){let e,$,s,n,r,a;return{c(){e=u("Adapted from SpinKit by "),$=h("a"),s=u("@tobiasahlin"),n=u(": "),r=h("a"),a=u("https://tobiasahlin.com/spinkit/"),this.h()},l(t){e=x(t,"Adapted from SpinKit by "),$=w(t,"A",{href:!0,rel:!0});var o=y($);s=x(o,"@tobiasahlin"),o.forEach(d),n=x(t,": "),r=w(t,"A",{href:!0,rel:!0});var c=y(r);a=x(c,"https://tobiasahlin.com/spinkit/"),c.forEach(d),this.h()},h(){v($,"href","https://github.com/tobiasahlin"),v($,"rel","nofollow"),v(r,"href","https://tobiasahlin.com/spinkit/"),v(r,"rel","nofollow")},m(t,o){g(t,e,o),g(t,$,o),b($,s),g(t,n,o),g(t,r,o),b(r,a)},d(t){t&&d(e),t&&d($),t&&d(n),t&&d(r)}}}function R(t){let e,$,s;return $=new D({}),{c(){e=h("div"),n($.$$.fragment),this.h()},l(t){e=w(t,"DIV",{slot:!0,class:!0});var s=y(e);r($.$$.fragment,s),s.forEach(d),this.h()},h(){v(e,"slot","showcase"),v(e,"class","padded")},m(t,n){g(t,e,n),a($,e,null),s=!0},i(t){s||(f($.$$.fragment,t),s=!0)},o(t){l($.$$.fragment,t),s=!1},d(t){t&&d(e),m($)}}}function F(t){let e,$;return{c(){e=h("div"),$=h("pre"),this.h()},l(t){e=w(t,"DIV",{slot:!0});var s=y(e);$=w(s,"PRE",{class:!0}),y($).forEach(d),s.forEach(d),this.h()},h(){v($,"class","language-svelte"),v(e,"slot","source")},m(t,s){g(t,e,s),b(e,$),$.innerHTML='<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Loading</span> <span class="token punctuation">/></span></span></code>'},p:E,d(t){t&&d(e)}}}function I(t){let e;return{c(){e=p()},l(t){e=i(t)},m(t,$){g(t,e,$)},p:E,i:E,o:E,d(t){t&&d(e)}}}function K(t){let e;return{c(){e=u("Properties")},l(t){e=x(t,"Properties")},m(t,$){g(t,e,$)},d(t){t&&d(e)}}}function Y(t){let e;return{c(){e=u("Class Properties")},l(t){e=x(t,"Class Properties")},m(t,$){g(t,e,$)},d(t){t&&d(e)}}}function q(t){let e,$,s,n,r,a,o;return{c(){e=u("All "),$=h("code"),s=u("<Loading>"),n=u(" components use the "),r=h("code"),a=u(".spinner"),o=u(" class.")},l(t){e=x(t,"All "),$=w(t,"CODE",{});var c=y($);s=x(c,"<Loading>"),c.forEach(d),n=x(t," components use the "),r=w(t,"CODE",{});var f=y(r);a=x(f,".spinner"),f.forEach(d),o=x(t," class.")},m(t,c){g(t,e,c),g(t,$,c),b($,s),g(t,n,c),g(t,r,c),b(r,a),g(t,o,c)},d(t){t&&d(e),t&&d($),t&&d(n),t&&d(r),t&&d(o)}}}function z(t){let e;return{c(){e=u("Falsy values passed to classes will be disregarded.")},l(t){e=x(t,"Falsy values passed to classes will be disregarded.")},m(t,$){g(t,e,$)},d(t){t&&d(e)}}}function J(t){let e;return{c(){e=u("Name")},l(t){e=x(t,"Name")},m(t,$){g(t,e,$)},d(t){t&&d(e)}}}function M(t){let e;return{c(){e=u("Default")},l(t){e=x(t,"Default")},m(t,$){g(t,e,$)},d(t){t&&d(e)}}}function Z(t){let e;return{c(){e=u("Type")},l(t){e=x(t,"Type")},m(t,$){g(t,e,$)},d(t){t&&d(e)}}}function Q(t){let e;return{c(){e=u("Description")},l(t){e=x(t,"Description")},m(t,$){g(t,e,$)},d(t){t&&d(e)}}}function U(t){let e,$,s,o,c,u,x,h;return e=new O({props:{$$slots:{default:[J]},$$scope:{ctx:t}}}),s=new O({props:{$$slots:{default:[M]},$$scope:{ctx:t}}}),c=new O({props:{$$slots:{default:[Z]},$$scope:{ctx:t}}}),x=new O({props:{$$slots:{default:[Q]},$$scope:{ctx:t}}}),{c(){n(e.$$.fragment),$=p(),n(s.$$.fragment),o=p(),n(c.$$.fragment),u=p(),n(x.$$.fragment)},l(t){r(e.$$.fragment,t),$=i(t),r(s.$$.fragment,t),o=i(t),r(c.$$.fragment,t),u=i(t),r(x.$$.fragment,t)},m(t,n){a(e,t,n),g(t,$,n),a(s,t,n),g(t,o,n),a(c,t,n),g(t,u,n),a(x,t,n),h=!0},p(t,$){const n={};1&$&&(n.$$scope={dirty:$,ctx:t}),e.$set(n);const r={};1&$&&(r.$$scope={dirty:$,ctx:t}),s.$set(r);const a={};1&$&&(a.$$scope={dirty:$,ctx:t}),c.$set(a);const o={};1&$&&(o.$$scope={dirty:$,ctx:t}),x.$set(o)},i(t){h||(f(e.$$.fragment,t),f(s.$$.fragment,t),f(c.$$.fragment,t),f(x.$$.fragment,t),h=!0)},o(t){l(e.$$.fragment,t),l(s.$$.fragment,t),l(c.$$.fragment,t),l(x.$$.fragment,t),h=!1},d(t){m(e,t),t&&d($),m(s,t),t&&d(o),m(c,t),t&&d(u),m(x,t)}}}function W(t){let e,$,s;return{c(){e=h("strong"),$=h("code"),s=u("class")},l(t){e=w(t,"STRONG",{});var n=y(e);$=w(n,"CODE",{});var r=y($);s=x(r,"class"),r.forEach(d),n.forEach(d)},m(t,n){g(t,e,n),b(e,$),b($,s)},d(t){t&&d(e)}}}function X(t){let e,$;return{c(){e=h("code"),$=u("null")},l(t){e=w(t,"CODE",{});var s=y(e);$=x(s,"null"),s.forEach(d)},m(t,s){g(t,e,s),b(e,$)},d(t){t&&d(e)}}}function _(t){let e,$;return{c(){e=h("code"),$=u("string")},l(t){e=w(t,"CODE",{});var s=y(e);$=x(s,"string"),s.forEach(d)},m(t,s){g(t,e,s),b(e,$)},d(t){t&&d(e)}}}function tt(t){let e;return{c(){e=u("A class string to add to the component.")},l(t){e=x(t,"A class string to add to the component.")},m(t,$){g(t,e,$)},d(t){t&&d(e)}}}function et(t){let e,$,s,o,c,u,x,h;return e=new L({props:{$$slots:{default:[W]},$$scope:{ctx:t}}}),s=new L({props:{$$slots:{default:[X]},$$scope:{ctx:t}}}),c=new L({props:{$$slots:{default:[_]},$$scope:{ctx:t}}}),x=new L({props:{$$slots:{default:[tt]},$$scope:{ctx:t}}}),{c(){n(e.$$.fragment),$=p(),n(s.$$.fragment),o=p(),n(c.$$.fragment),u=p(),n(x.$$.fragment)},l(t){r(e.$$.fragment,t),$=i(t),r(s.$$.fragment,t),o=i(t),r(c.$$.fragment,t),u=i(t),r(x.$$.fragment,t)},m(t,n){a(e,t,n),g(t,$,n),a(s,t,n),g(t,o,n),a(c,t,n),g(t,u,n),a(x,t,n),h=!0},p(t,$){const n={};1&$&&(n.$$scope={dirty:$,ctx:t}),e.$set(n);const r={};1&$&&(r.$$scope={dirty:$,ctx:t}),s.$set(r);const a={};1&$&&(a.$$scope={dirty:$,ctx:t}),c.$set(a);const o={};1&$&&(o.$$scope={dirty:$,ctx:t}),x.$set(o)},i(t){h||(f(e.$$.fragment,t),f(s.$$.fragment,t),f(c.$$.fragment,t),f(x.$$.fragment,t),h=!0)},o(t){l(e.$$.fragment,t),l(s.$$.fragment,t),l(c.$$.fragment,t),l(x.$$.fragment,t),h=!1},d(t){m(e,t),t&&d($),m(s,t),t&&d(o),m(c,t),t&&d(u),m(x,t)}}}function $t(t){let e,$,s,o,c,u;return $=new C({props:{$$slots:{default:[U]},$$scope:{ctx:t}}}),c=new C({props:{$$slots:{default:[et]},$$scope:{ctx:t}}}),{c(){e=h("thead"),n($.$$.fragment),s=p(),o=h("tbody"),n(c.$$.fragment)},l(t){e=w(t,"THEAD",{});var n=y(e);r($.$$.fragment,n),n.forEach(d),s=i(t),o=w(t,"TBODY",{});var a=y(o);r(c.$$.fragment,a),a.forEach(d)},m(t,n){g(t,e,n),a($,e,null),g(t,s,n),g(t,o,n),a(c,o,null),u=!0},p(t,e){const s={};1&e&&(s.$$scope={dirty:e,ctx:t}),$.$set(s);const n={};1&e&&(n.$$scope={dirty:e,ctx:t}),c.$set(n)},i(t){u||(f($.$$.fragment,t),f(c.$$.fragment,t),u=!0)},o(t){l($.$$.fragment,t),l(c.$$.fragment,t),u=!1},d(t){t&&d(e),m($),t&&d(s),t&&d(o),m(c)}}}function st(t){let e;return{c(){e=u("SCSS Variables")},l(t){e=x(t,"SCSS Variables")},m(t,$){g(t,e,$)},d(t){t&&d(e)}}}function nt(t){let e;return{c(){e=u("Name")},l(t){e=x(t,"Name")},m(t,$){g(t,e,$)},d(t){t&&d(e)}}}function rt(t){let e;return{c(){e=u("Description")},l(t){e=x(t,"Description")},m(t,$){g(t,e,$)},d(t){t&&d(e)}}}function at(t){let e;return{c(){e=u("Default")},l(t){e=x(t,"Default")},m(t,$){g(t,e,$)},d(t){t&&d(e)}}}function ot(t){let e,$,s,o,c,u;return e=new O({props:{$$slots:{default:[nt]},$$scope:{ctx:t}}}),s=new O({props:{$$slots:{default:[rt]},$$scope:{ctx:t}}}),c=new O({props:{$$slots:{default:[at]},$$scope:{ctx:t}}}),{c(){n(e.$$.fragment),$=p(),n(s.$$.fragment),o=p(),n(c.$$.fragment)},l(t){r(e.$$.fragment,t),$=i(t),r(s.$$.fragment,t),o=i(t),r(c.$$.fragment,t)},m(t,n){a(e,t,n),g(t,$,n),a(s,t,n),g(t,o,n),a(c,t,n),u=!0},p(t,$){const n={};1&$&&(n.$$scope={dirty:$,ctx:t}),e.$set(n);const r={};1&$&&(r.$$scope={dirty:$,ctx:t}),s.$set(r);const a={};1&$&&(a.$$scope={dirty:$,ctx:t}),c.$set(a)},i(t){u||(f(e.$$.fragment,t),f(s.$$.fragment,t),f(c.$$.fragment,t),u=!0)},o(t){l(e.$$.fragment,t),l(s.$$.fragment,t),l(c.$$.fragment,t),u=!1},d(t){m(e,t),t&&d($),m(s,t),t&&d(o),m(c,t)}}}function ct(t){let e,$,s;return{c(){e=h("strong"),$=h("code"),s=u("$main")},l(t){e=w(t,"STRONG",{});var n=y(e);$=w(n,"CODE",{});var r=y($);s=x(r,"$main"),r.forEach(d),n.forEach(d)},m(t,n){g(t,e,n),b(e,$),b($,s)},d(t){t&&d(e)}}}function ft(t){let e;return{c(){e=u("The color of spinner dots.")},l(t){e=x(t,"The color of spinner dots.")},m(t,$){g(t,e,$)},d(t){t&&d(e)}}}function lt(t){let e,$;return e=new P({props:{value:"#4300B0"}}),{c(){n(e.$$.fragment)},l(t){r(e.$$.fragment,t)},m(t,s){a(e,t,s),$=!0},p:E,i(t){$||(f(e.$$.fragment,t),$=!0)},o(t){l(e.$$.fragment,t),$=!1},d(t){m(e,t)}}}function mt(t){let e,$,s,o,c,u;return e=new L({props:{$$slots:{default:[ct]},$$scope:{ctx:t}}}),s=new L({props:{$$slots:{default:[ft]},$$scope:{ctx:t}}}),c=new L({props:{$$slots:{default:[lt]},$$scope:{ctx:t}}}),{c(){n(e.$$.fragment),$=p(),n(s.$$.fragment),o=p(),n(c.$$.fragment)},l(t){r(e.$$.fragment,t),$=i(t),r(s.$$.fragment,t),o=i(t),r(c.$$.fragment,t)},m(t,n){a(e,t,n),g(t,$,n),a(s,t,n),g(t,o,n),a(c,t,n),u=!0},p(t,$){const n={};1&$&&(n.$$scope={dirty:$,ctx:t}),e.$set(n);const r={};1&$&&(r.$$scope={dirty:$,ctx:t}),s.$set(r);const a={};1&$&&(a.$$scope={dirty:$,ctx:t}),c.$set(a)},i(t){u||(f(e.$$.fragment,t),f(s.$$.fragment,t),f(c.$$.fragment,t),u=!0)},o(t){l(e.$$.fragment,t),l(s.$$.fragment,t),l(c.$$.fragment,t),u=!1},d(t){m(e,t),t&&d($),m(s,t),t&&d(o),m(c,t)}}}function pt(t){let e,$,s,o,c,u;return $=new C({props:{$$slots:{default:[ot]},$$scope:{ctx:t}}}),c=new C({props:{$$slots:{default:[mt]},$$scope:{ctx:t}}}),{c(){e=h("thead"),n($.$$.fragment),s=p(),o=h("tbody"),n(c.$$.fragment)},l(t){e=w(t,"THEAD",{});var n=y(e);r($.$$.fragment,n),n.forEach(d),s=i(t),o=w(t,"TBODY",{});var a=y(o);r(c.$$.fragment,a),a.forEach(d)},m(t,n){g(t,e,n),a($,e,null),g(t,s,n),g(t,o,n),a(c,o,null),u=!0},p(t,e){const s={};1&e&&(s.$$scope={dirty:e,ctx:t}),$.$set(s);const n={};1&e&&(n.$$scope={dirty:e,ctx:t}),c.$set(n)},i(t){u||(f($.$$.fragment,t),f(c.$$.fragment,t),u=!0)},o(t){l($.$$.fragment,t),l(c.$$.fragment,t),u=!1},d(t){t&&d(e),m($),t&&d(s),t&&d(o),m(c)}}}function it(t){let e,$,s,o,c,u,x,h,w,y,v,b,E,D,j,C,O,L,P,J,M,Z;return e=new A({props:{$$slots:{default:[V]},$$scope:{ctx:t}}}),s=new T({props:{$$slots:{default:[B]},$$scope:{ctx:t}}}),c=new T({props:{$$slots:{default:[G]},$$scope:{ctx:t}}}),x=new H({props:{$$slots:{default:[I],source:[F],showcase:[R]},$$scope:{ctx:t}}}),w=new N({props:{id:"properties",$$slots:{default:[K]},$$scope:{ctx:t}}}),v=new k({props:{$$slots:{default:[Y]},$$scope:{ctx:t}}}),E=new T({props:{$$slots:{default:[q]},$$scope:{ctx:t}}}),j=new T({props:{$$slots:{default:[z]},$$scope:{ctx:t}}}),O=new S({props:{$$slots:{default:[$t]},$$scope:{ctx:t}}}),P=new N({props:{id:"scss-variables",$$slots:{default:[st]},$$scope:{ctx:t}}}),M=new S({props:{$$slots:{default:[pt]},$$scope:{ctx:t}}}),{c(){n(e.$$.fragment),$=p(),n(s.$$.fragment),o=p(),n(c.$$.fragment),u=p(),n(x.$$.fragment),h=p(),n(w.$$.fragment),y=p(),n(v.$$.fragment),b=p(),n(E.$$.fragment),D=p(),n(j.$$.fragment),C=p(),n(O.$$.fragment),L=p(),n(P.$$.fragment),J=p(),n(M.$$.fragment)},l(t){r(e.$$.fragment,t),$=i(t),r(s.$$.fragment,t),o=i(t),r(c.$$.fragment,t),u=i(t),r(x.$$.fragment,t),h=i(t),r(w.$$.fragment,t),y=i(t),r(v.$$.fragment,t),b=i(t),r(E.$$.fragment,t),D=i(t),r(j.$$.fragment,t),C=i(t),r(O.$$.fragment,t),L=i(t),r(P.$$.fragment,t),J=i(t),r(M.$$.fragment,t)},m(t,n){a(e,t,n),g(t,$,n),a(s,t,n),g(t,o,n),a(c,t,n),g(t,u,n),a(x,t,n),g(t,h,n),a(w,t,n),g(t,y,n),a(v,t,n),g(t,b,n),a(E,t,n),g(t,D,n),a(j,t,n),g(t,C,n),a(O,t,n),g(t,L,n),a(P,t,n),g(t,J,n),a(M,t,n),Z=!0},p(t,$){const n={};1&$&&(n.$$scope={dirty:$,ctx:t}),e.$set(n);const r={};1&$&&(r.$$scope={dirty:$,ctx:t}),s.$set(r);const a={};1&$&&(a.$$scope={dirty:$,ctx:t}),c.$set(a);const o={};1&$&&(o.$$scope={dirty:$,ctx:t}),x.$set(o);const f={};1&$&&(f.$$scope={dirty:$,ctx:t}),w.$set(f);const l={};1&$&&(l.$$scope={dirty:$,ctx:t}),v.$set(l);const m={};1&$&&(m.$$scope={dirty:$,ctx:t}),E.$set(m);const p={};1&$&&(p.$$scope={dirty:$,ctx:t}),j.$set(p);const i={};1&$&&(i.$$scope={dirty:$,ctx:t}),O.$set(i);const g={};1&$&&(g.$$scope={dirty:$,ctx:t}),P.$set(g);const d={};1&$&&(d.$$scope={dirty:$,ctx:t}),M.$set(d)},i(t){Z||(f(e.$$.fragment,t),f(s.$$.fragment,t),f(c.$$.fragment,t),f(x.$$.fragment,t),f(w.$$.fragment,t),f(v.$$.fragment,t),f(E.$$.fragment,t),f(j.$$.fragment,t),f(O.$$.fragment,t),f(P.$$.fragment,t),f(M.$$.fragment,t),Z=!0)},o(t){l(e.$$.fragment,t),l(s.$$.fragment,t),l(c.$$.fragment,t),l(x.$$.fragment,t),l(w.$$.fragment,t),l(v.$$.fragment,t),l(E.$$.fragment,t),l(j.$$.fragment,t),l(O.$$.fragment,t),l(P.$$.fragment,t),l(M.$$.fragment,t),Z=!1},d(t){m(e,t),t&&d($),m(s,t),t&&d(o),m(c,t),t&&d(u),m(x,t),t&&d(h),m(w,t),t&&d(y),m(v,t),t&&d(b),m(E,t),t&&d(D),m(j,t),t&&d(C),m(O,t),t&&d(L),m(P,t),t&&d(J),m(M,t)}}}function gt(t){let e,$;const p=[dt];let i={$$slots:{default:[it]},$$scope:{ctx:t}};for(let t=0;t<p.length;t+=1)i=s(i,p[t]);return e=new j({props:i}),{c(){n(e.$$.fragment)},l(t){r(e.$$.fragment,t)},m(t,s){a(e,t,s),$=!0},p(t,[$]){const s=0&$?o(p,[c(dt)]):{};1&$&&(s.$$scope={dirty:$,ctx:t}),e.$set(s)},i(t){$||(f(e.$$.fragment,t),$=!0)},o(t){l(e.$$.fragment,t),$=!1},d(t){m(e,t)}}}const dt={name:"Loading"};export default class extends t{constructor(t){super(),e(this,t,null,gt,$,{})}}export{dt as metadata};
