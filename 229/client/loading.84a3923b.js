import{S as t,i as e,s as $,E as s,j as n,k as r,m as a,I as o,t as c,o as f,p as l,U as m,q as p,u as i,f as g,d,r as u,v as h,h as x,c as w,b as y,e as v,g as E,n as b}from"./client.e84cb235.js";import"./button.e1955733.js";import"./classes.ae819103.js";import"./label.3048b4ca.js";import{L as D}from"./loading.f079749c.js";import"./copyable-code.772f5cf7.js";import{L as j,H as A,P as S}from"./layout.c94d2714.js";import{T,a as C,b as O,c as L}from"./table.8e23e9d5.js";import{H as k}from"./h3.2391d076.js";import{H}from"./h2.bff7259e.js";import{S as N}from"./showcase.577a1f1a.js";import"./color-preview.72edcca8.js";import{C as P}from"./color-preview.02463dce.js";function V(t){let e;return{c(){e=u("Loading")},l(t){e=h(t,"Loading")},m(t,$){g(t,e,$)},d(t){t&&d(e)}}}function B(t){let e;return{c(){e=u("An indeterminate loading spinner.")},l(t){e=h(t,"An indeterminate loading spinner.")},m(t,$){g(t,e,$)},d(t){t&&d(e)}}}function I(t){let e,$,s,n,r,a;return{c(){e=u("Adapted from SpinKit by "),$=x("a"),s=u("@tobiasahlin"),n=u(": "),r=x("a"),a=u("https://tobiasahlin.com/spinkit/"),this.h()},l(t){e=h(t,"Adapted from SpinKit by "),$=w(t,"A",{href:!0,rel:!0});var o=y($);s=h(o,"@tobiasahlin"),o.forEach(d),n=h(t,": "),r=w(t,"A",{href:!0,rel:!0});var c=y(r);a=h(c,"https://tobiasahlin.com/spinkit/"),c.forEach(d),this.h()},h(){v($,"href","https://github.com/tobiasahlin"),v($,"rel","nofollow"),v(r,"href","https://tobiasahlin.com/spinkit/"),v(r,"rel","nofollow")},m(t,o){g(t,e,o),g(t,$,o),E($,s),g(t,n,o),g(t,r,o),E(r,a)},d(t){t&&d(e),t&&d($),t&&d(n),t&&d(r)}}}function R(t){let e,$,s;return $=new D({}),{c(){e=x("div"),n($.$$.fragment),this.h()},l(t){e=w(t,"DIV",{slot:!0,class:!0});var s=y(e);r($.$$.fragment,s),s.forEach(d),this.h()},h(){v(e,"slot","showcase"),v(e,"class","padded")},m(t,n){g(t,e,n),a($,e,null),s=!0},i(t){s||(c($.$$.fragment,t),s=!0)},o(t){f($.$$.fragment,t),s=!1},d(t){t&&d(e),l($)}}}function F(t){let e,$;return{c(){e=x("div"),$=x("pre"),this.h()},l(t){e=w(t,"DIV",{slot:!0});var s=y(e);$=w(s,"PRE",{class:!0}),y($).forEach(d),s.forEach(d),this.h()},h(){v($,"class","language-svelte"),v(e,"slot","source")},m(t,s){g(t,e,s),E(e,$),$.innerHTML='<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Loading</span> <span class="token punctuation">/></span></span></code>'},p:b,d(t){t&&d(e)}}}function G(t){let e;return{c(){e=p()},l(t){e=i(t)},m(t,$){g(t,e,$)},p:b,i:b,o:b,d(t){t&&d(e)}}}function K(t){let e;return{c(){e=u("Properties")},l(t){e=h(t,"Properties")},m(t,$){g(t,e,$)},d(t){t&&d(e)}}}function Y(t){let e;return{c(){e=u("Class Properties")},l(t){e=h(t,"Class Properties")},m(t,$){g(t,e,$)},d(t){t&&d(e)}}}function q(t){let e,$,s,n,r,a,o;return{c(){e=u("All "),$=x("code"),s=u("<Loading>"),n=u(" components use the "),r=x("code"),a=u(".spinner"),o=u(" class.")},l(t){e=h(t,"All "),$=w(t,"CODE",{});var c=y($);s=h(c,"<Loading>"),c.forEach(d),n=h(t," components use the "),r=w(t,"CODE",{});var f=y(r);a=h(f,".spinner"),f.forEach(d),o=h(t," class.")},m(t,c){g(t,e,c),g(t,$,c),E($,s),g(t,n,c),g(t,r,c),E(r,a),g(t,o,c)},d(t){t&&d(e),t&&d($),t&&d(n),t&&d(r),t&&d(o)}}}function M(t){let e;return{c(){e=u("Falsy values passed to classes will be disregarded.")},l(t){e=h(t,"Falsy values passed to classes will be disregarded.")},m(t,$){g(t,e,$)},d(t){t&&d(e)}}}function U(t){let e;return{c(){e=u("Name")},l(t){e=h(t,"Name")},m(t,$){g(t,e,$)},d(t){t&&d(e)}}}function z(t){let e;return{c(){e=u("Default")},l(t){e=h(t,"Default")},m(t,$){g(t,e,$)},d(t){t&&d(e)}}}function J(t){let e;return{c(){e=u("Type")},l(t){e=h(t,"Type")},m(t,$){g(t,e,$)},d(t){t&&d(e)}}}function Q(t){let e;return{c(){e=u("Description")},l(t){e=h(t,"Description")},m(t,$){g(t,e,$)},d(t){t&&d(e)}}}function W(t){let e,$,s,o,m,u,h,x;return e=new O({props:{$$slots:{default:[U]},$$scope:{ctx:t}}}),s=new O({props:{$$slots:{default:[z]},$$scope:{ctx:t}}}),m=new O({props:{$$slots:{default:[J]},$$scope:{ctx:t}}}),h=new O({props:{$$slots:{default:[Q]},$$scope:{ctx:t}}}),{c(){n(e.$$.fragment),$=p(),n(s.$$.fragment),o=p(),n(m.$$.fragment),u=p(),n(h.$$.fragment)},l(t){r(e.$$.fragment,t),$=i(t),r(s.$$.fragment,t),o=i(t),r(m.$$.fragment,t),u=i(t),r(h.$$.fragment,t)},m(t,n){a(e,t,n),g(t,$,n),a(s,t,n),g(t,o,n),a(m,t,n),g(t,u,n),a(h,t,n),x=!0},p(t,$){const n={};1&$&&(n.$$scope={dirty:$,ctx:t}),e.$set(n);const r={};1&$&&(r.$$scope={dirty:$,ctx:t}),s.$set(r);const a={};1&$&&(a.$$scope={dirty:$,ctx:t}),m.$set(a);const o={};1&$&&(o.$$scope={dirty:$,ctx:t}),h.$set(o)},i(t){x||(c(e.$$.fragment,t),c(s.$$.fragment,t),c(m.$$.fragment,t),c(h.$$.fragment,t),x=!0)},o(t){f(e.$$.fragment,t),f(s.$$.fragment,t),f(m.$$.fragment,t),f(h.$$.fragment,t),x=!1},d(t){l(e,t),t&&d($),l(s,t),t&&d(o),l(m,t),t&&d(u),l(h,t)}}}function X(t){let e,$,s;return{c(){e=x("strong"),$=x("code"),s=u("class")},l(t){e=w(t,"STRONG",{});var n=y(e);$=w(n,"CODE",{});var r=y($);s=h(r,"class"),r.forEach(d),n.forEach(d)},m(t,n){g(t,e,n),E(e,$),E($,s)},d(t){t&&d(e)}}}function Z(t){let e,$;return{c(){e=x("code"),$=u("null")},l(t){e=w(t,"CODE",{});var s=y(e);$=h(s,"null"),s.forEach(d)},m(t,s){g(t,e,s),E(e,$)},d(t){t&&d(e)}}}function _(t){let e,$;return{c(){e=x("code"),$=u("string")},l(t){e=w(t,"CODE",{});var s=y(e);$=h(s,"string"),s.forEach(d)},m(t,s){g(t,e,s),E(e,$)},d(t){t&&d(e)}}}function tt(t){let e;return{c(){e=u("A class string to add to the component.")},l(t){e=h(t,"A class string to add to the component.")},m(t,$){g(t,e,$)},d(t){t&&d(e)}}}function et(t){let e,$,s,o,m,u,h,x;return e=new L({props:{$$slots:{default:[X]},$$scope:{ctx:t}}}),s=new L({props:{$$slots:{default:[Z]},$$scope:{ctx:t}}}),m=new L({props:{$$slots:{default:[_]},$$scope:{ctx:t}}}),h=new L({props:{$$slots:{default:[tt]},$$scope:{ctx:t}}}),{c(){n(e.$$.fragment),$=p(),n(s.$$.fragment),o=p(),n(m.$$.fragment),u=p(),n(h.$$.fragment)},l(t){r(e.$$.fragment,t),$=i(t),r(s.$$.fragment,t),o=i(t),r(m.$$.fragment,t),u=i(t),r(h.$$.fragment,t)},m(t,n){a(e,t,n),g(t,$,n),a(s,t,n),g(t,o,n),a(m,t,n),g(t,u,n),a(h,t,n),x=!0},p(t,$){const n={};1&$&&(n.$$scope={dirty:$,ctx:t}),e.$set(n);const r={};1&$&&(r.$$scope={dirty:$,ctx:t}),s.$set(r);const a={};1&$&&(a.$$scope={dirty:$,ctx:t}),m.$set(a);const o={};1&$&&(o.$$scope={dirty:$,ctx:t}),h.$set(o)},i(t){x||(c(e.$$.fragment,t),c(s.$$.fragment,t),c(m.$$.fragment,t),c(h.$$.fragment,t),x=!0)},o(t){f(e.$$.fragment,t),f(s.$$.fragment,t),f(m.$$.fragment,t),f(h.$$.fragment,t),x=!1},d(t){l(e,t),t&&d($),l(s,t),t&&d(o),l(m,t),t&&d(u),l(h,t)}}}function $t(t){let e,$,s,o,m,u;return $=new C({props:{$$slots:{default:[W]},$$scope:{ctx:t}}}),m=new C({props:{$$slots:{default:[et]},$$scope:{ctx:t}}}),{c(){e=x("thead"),n($.$$.fragment),s=p(),o=x("tbody"),n(m.$$.fragment)},l(t){e=w(t,"THEAD",{});var n=y(e);r($.$$.fragment,n),n.forEach(d),s=i(t),o=w(t,"TBODY",{});var a=y(o);r(m.$$.fragment,a),a.forEach(d)},m(t,n){g(t,e,n),a($,e,null),g(t,s,n),g(t,o,n),a(m,o,null),u=!0},p(t,e){const s={};1&e&&(s.$$scope={dirty:e,ctx:t}),$.$set(s);const n={};1&e&&(n.$$scope={dirty:e,ctx:t}),m.$set(n)},i(t){u||(c($.$$.fragment,t),c(m.$$.fragment,t),u=!0)},o(t){f($.$$.fragment,t),f(m.$$.fragment,t),u=!1},d(t){t&&d(e),l($),t&&d(s),t&&d(o),l(m)}}}function st(t){let e;return{c(){e=u("SCSS Variables")},l(t){e=h(t,"SCSS Variables")},m(t,$){g(t,e,$)},d(t){t&&d(e)}}}function nt(t){let e;return{c(){e=u("Name")},l(t){e=h(t,"Name")},m(t,$){g(t,e,$)},d(t){t&&d(e)}}}function rt(t){let e;return{c(){e=u("Description")},l(t){e=h(t,"Description")},m(t,$){g(t,e,$)},d(t){t&&d(e)}}}function at(t){let e;return{c(){e=u("Default")},l(t){e=h(t,"Default")},m(t,$){g(t,e,$)},d(t){t&&d(e)}}}function ot(t){let e,$,s,o,m,u;return e=new O({props:{$$slots:{default:[nt]},$$scope:{ctx:t}}}),s=new O({props:{$$slots:{default:[rt]},$$scope:{ctx:t}}}),m=new O({props:{$$slots:{default:[at]},$$scope:{ctx:t}}}),{c(){n(e.$$.fragment),$=p(),n(s.$$.fragment),o=p(),n(m.$$.fragment)},l(t){r(e.$$.fragment,t),$=i(t),r(s.$$.fragment,t),o=i(t),r(m.$$.fragment,t)},m(t,n){a(e,t,n),g(t,$,n),a(s,t,n),g(t,o,n),a(m,t,n),u=!0},p(t,$){const n={};1&$&&(n.$$scope={dirty:$,ctx:t}),e.$set(n);const r={};1&$&&(r.$$scope={dirty:$,ctx:t}),s.$set(r);const a={};1&$&&(a.$$scope={dirty:$,ctx:t}),m.$set(a)},i(t){u||(c(e.$$.fragment,t),c(s.$$.fragment,t),c(m.$$.fragment,t),u=!0)},o(t){f(e.$$.fragment,t),f(s.$$.fragment,t),f(m.$$.fragment,t),u=!1},d(t){l(e,t),t&&d($),l(s,t),t&&d(o),l(m,t)}}}function ct(t){let e,$,s;return{c(){e=x("strong"),$=x("code"),s=u("$main")},l(t){e=w(t,"STRONG",{});var n=y(e);$=w(n,"CODE",{});var r=y($);s=h(r,"$main"),r.forEach(d),n.forEach(d)},m(t,n){g(t,e,n),E(e,$),E($,s)},d(t){t&&d(e)}}}function ft(t){let e;return{c(){e=u("The color of spinner dots.")},l(t){e=h(t,"The color of spinner dots.")},m(t,$){g(t,e,$)},d(t){t&&d(e)}}}function lt(t){let e,$;return e=new P({props:{value:"#4300B0"}}),{c(){n(e.$$.fragment)},l(t){r(e.$$.fragment,t)},m(t,s){a(e,t,s),$=!0},p:b,i(t){$||(c(e.$$.fragment,t),$=!0)},o(t){f(e.$$.fragment,t),$=!1},d(t){l(e,t)}}}function mt(t){let e,$,s,o,m,u;return e=new L({props:{$$slots:{default:[ct]},$$scope:{ctx:t}}}),s=new L({props:{$$slots:{default:[ft]},$$scope:{ctx:t}}}),m=new L({props:{$$slots:{default:[lt]},$$scope:{ctx:t}}}),{c(){n(e.$$.fragment),$=p(),n(s.$$.fragment),o=p(),n(m.$$.fragment)},l(t){r(e.$$.fragment,t),$=i(t),r(s.$$.fragment,t),o=i(t),r(m.$$.fragment,t)},m(t,n){a(e,t,n),g(t,$,n),a(s,t,n),g(t,o,n),a(m,t,n),u=!0},p(t,$){const n={};1&$&&(n.$$scope={dirty:$,ctx:t}),e.$set(n);const r={};1&$&&(r.$$scope={dirty:$,ctx:t}),s.$set(r);const a={};1&$&&(a.$$scope={dirty:$,ctx:t}),m.$set(a)},i(t){u||(c(e.$$.fragment,t),c(s.$$.fragment,t),c(m.$$.fragment,t),u=!0)},o(t){f(e.$$.fragment,t),f(s.$$.fragment,t),f(m.$$.fragment,t),u=!1},d(t){l(e,t),t&&d($),l(s,t),t&&d(o),l(m,t)}}}function pt(t){let e,$,s,o,m,u;return $=new C({props:{$$slots:{default:[ot]},$$scope:{ctx:t}}}),m=new C({props:{$$slots:{default:[mt]},$$scope:{ctx:t}}}),{c(){e=x("thead"),n($.$$.fragment),s=p(),o=x("tbody"),n(m.$$.fragment)},l(t){e=w(t,"THEAD",{});var n=y(e);r($.$$.fragment,n),n.forEach(d),s=i(t),o=w(t,"TBODY",{});var a=y(o);r(m.$$.fragment,a),a.forEach(d)},m(t,n){g(t,e,n),a($,e,null),g(t,s,n),g(t,o,n),a(m,o,null),u=!0},p(t,e){const s={};1&e&&(s.$$scope={dirty:e,ctx:t}),$.$set(s);const n={};1&e&&(n.$$scope={dirty:e,ctx:t}),m.$set(n)},i(t){u||(c($.$$.fragment,t),c(m.$$.fragment,t),u=!0)},o(t){f($.$$.fragment,t),f(m.$$.fragment,t),u=!1},d(t){t&&d(e),l($),t&&d(s),t&&d(o),l(m)}}}function it(t){let e,$,s,o,m,u,h,x,w,y,v,E,b,D,j,C,O,L,P,U,z,J;return e=new A({props:{$$slots:{default:[V]},$$scope:{ctx:t}}}),s=new S({props:{$$slots:{default:[B]},$$scope:{ctx:t}}}),m=new S({props:{$$slots:{default:[I]},$$scope:{ctx:t}}}),h=new N({props:{$$slots:{default:[G],source:[F],showcase:[R]},$$scope:{ctx:t}}}),w=new H({props:{id:"properties",$$slots:{default:[K]},$$scope:{ctx:t}}}),v=new k({props:{$$slots:{default:[Y]},$$scope:{ctx:t}}}),b=new S({props:{$$slots:{default:[q]},$$scope:{ctx:t}}}),j=new S({props:{$$slots:{default:[M]},$$scope:{ctx:t}}}),O=new T({props:{$$slots:{default:[$t]},$$scope:{ctx:t}}}),P=new H({props:{id:"scss-variables",$$slots:{default:[st]},$$scope:{ctx:t}}}),z=new T({props:{$$slots:{default:[pt]},$$scope:{ctx:t}}}),{c(){n(e.$$.fragment),$=p(),n(s.$$.fragment),o=p(),n(m.$$.fragment),u=p(),n(h.$$.fragment),x=p(),n(w.$$.fragment),y=p(),n(v.$$.fragment),E=p(),n(b.$$.fragment),D=p(),n(j.$$.fragment),C=p(),n(O.$$.fragment),L=p(),n(P.$$.fragment),U=p(),n(z.$$.fragment)},l(t){r(e.$$.fragment,t),$=i(t),r(s.$$.fragment,t),o=i(t),r(m.$$.fragment,t),u=i(t),r(h.$$.fragment,t),x=i(t),r(w.$$.fragment,t),y=i(t),r(v.$$.fragment,t),E=i(t),r(b.$$.fragment,t),D=i(t),r(j.$$.fragment,t),C=i(t),r(O.$$.fragment,t),L=i(t),r(P.$$.fragment,t),U=i(t),r(z.$$.fragment,t)},m(t,n){a(e,t,n),g(t,$,n),a(s,t,n),g(t,o,n),a(m,t,n),g(t,u,n),a(h,t,n),g(t,x,n),a(w,t,n),g(t,y,n),a(v,t,n),g(t,E,n),a(b,t,n),g(t,D,n),a(j,t,n),g(t,C,n),a(O,t,n),g(t,L,n),a(P,t,n),g(t,U,n),a(z,t,n),J=!0},p(t,$){const n={};1&$&&(n.$$scope={dirty:$,ctx:t}),e.$set(n);const r={};1&$&&(r.$$scope={dirty:$,ctx:t}),s.$set(r);const a={};1&$&&(a.$$scope={dirty:$,ctx:t}),m.$set(a);const o={};1&$&&(o.$$scope={dirty:$,ctx:t}),h.$set(o);const c={};1&$&&(c.$$scope={dirty:$,ctx:t}),w.$set(c);const f={};1&$&&(f.$$scope={dirty:$,ctx:t}),v.$set(f);const l={};1&$&&(l.$$scope={dirty:$,ctx:t}),b.$set(l);const p={};1&$&&(p.$$scope={dirty:$,ctx:t}),j.$set(p);const i={};1&$&&(i.$$scope={dirty:$,ctx:t}),O.$set(i);const g={};1&$&&(g.$$scope={dirty:$,ctx:t}),P.$set(g);const d={};1&$&&(d.$$scope={dirty:$,ctx:t}),z.$set(d)},i(t){J||(c(e.$$.fragment,t),c(s.$$.fragment,t),c(m.$$.fragment,t),c(h.$$.fragment,t),c(w.$$.fragment,t),c(v.$$.fragment,t),c(b.$$.fragment,t),c(j.$$.fragment,t),c(O.$$.fragment,t),c(P.$$.fragment,t),c(z.$$.fragment,t),J=!0)},o(t){f(e.$$.fragment,t),f(s.$$.fragment,t),f(m.$$.fragment,t),f(h.$$.fragment,t),f(w.$$.fragment,t),f(v.$$.fragment,t),f(b.$$.fragment,t),f(j.$$.fragment,t),f(O.$$.fragment,t),f(P.$$.fragment,t),f(z.$$.fragment,t),J=!1},d(t){l(e,t),t&&d($),l(s,t),t&&d(o),l(m,t),t&&d(u),l(h,t),t&&d(x),l(w,t),t&&d(y),l(v,t),t&&d(E),l(b,t),t&&d(D),l(j,t),t&&d(C),l(O,t),t&&d(L),l(P,t),t&&d(U),l(z,t)}}}function gt(t){let e,$;const p=[dt];let i={$$slots:{default:[it]},$$scope:{ctx:t}};for(let t=0;t<p.length;t+=1)i=s(i,p[t]);return e=new j({props:i}),{c(){n(e.$$.fragment)},l(t){r(e.$$.fragment,t)},m(t,s){a(e,t,s),$=!0},p(t,[$]){const s=0&$?o(p,[m(dt)]):{};1&$&&(s.$$scope={dirty:$,ctx:t}),e.$set(s)},i(t){$||(c(e.$$.fragment,t),$=!0)},o(t){f(e.$$.fragment,t),$=!1},d(t){l(e,t)}}}const dt={name:"Loading"};export default class extends t{constructor(t){super(),e(this,t,null,gt,$,{})}}export{dt as metadata};