import{S as t,i as $,s as e,G as s,j as n,k as r,m as a,N as o,t as c,o as f,p as l,U as m,q as p,u as i,f as g,d,r as u,v as h,h as x,c as w,b as y,e as v,g as E,n as b}from"./client.66f74232.js";import{L as D,H as j,P as A}from"./layout.857dc450.js";import{L as S}from"./loading.260685c2.js";import{S as T}from"./showcase.b3512a31.js";import{C}from"./color-preview.4191b593.js";import{H as O}from"./h2.84c8a61d.js";import{H as L}from"./h3.6c76429f.js";import{T as k,a as N,b as H,c as P}from"./table.653c4886.js";import"./classes.2453fa25.js";import"./label.87802cd7.js";import"./copyable-code.64b7fc40.js";import"./button.01af3c6c.js";function V(t){let $;return{c(){$=u("Loading")},l(t){$=h(t,"Loading")},m(t,e){g(t,$,e)},d(t){t&&d($)}}}function B(t){let $;return{c(){$=u("An indeterminate loading spinner.")},l(t){$=h(t,"An indeterminate loading spinner.")},m(t,e){g(t,$,e)},d(t){t&&d($)}}}function G(t){let $,e,s,n,r,a;return{c(){$=u("Adapted from SpinKit by "),e=x("a"),s=u("@tobiasahlin"),n=u(": "),r=x("a"),a=u("https://tobiasahlin.com/spinkit/"),this.h()},l(t){$=h(t,"Adapted from SpinKit by "),e=w(t,"A",{href:!0,rel:!0});var o=y(e);s=h(o,"@tobiasahlin"),o.forEach(d),n=h(t,": "),r=w(t,"A",{href:!0,rel:!0});var c=y(r);a=h(c,"https://tobiasahlin.com/spinkit/"),c.forEach(d),this.h()},h(){v(e,"href","https://github.com/tobiasahlin"),v(e,"rel","nofollow"),v(r,"href","https://tobiasahlin.com/spinkit/"),v(r,"rel","nofollow")},m(t,o){g(t,$,o),g(t,e,o),E(e,s),g(t,n,o),g(t,r,o),E(r,a)},d(t){t&&d($),t&&d(e),t&&d(n),t&&d(r)}}}function R(t){let $,e,s;return e=new S({}),{c(){$=x("div"),n(e.$$.fragment),this.h()},l(t){$=w(t,"DIV",{slot:!0,class:!0});var s=y($);r(e.$$.fragment,s),s.forEach(d),this.h()},h(){v($,"slot","showcase"),v($,"class","padded")},m(t,n){g(t,$,n),a(e,$,null),s=!0},i(t){s||(c(e.$$.fragment,t),s=!0)},o(t){f(e.$$.fragment,t),s=!1},d(t){t&&d($),l(e)}}}function F(t){let $,e;return{c(){$=x("div"),e=x("pre"),this.h()},l(t){$=w(t,"DIV",{slot:!0});var s=y($);e=w(s,"PRE",{class:!0}),y(e).forEach(d),s.forEach(d),this.h()},h(){v(e,"class","language-svelte"),v($,"slot","source")},m(t,s){g(t,$,s),E($,e),e.innerHTML='<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Loading</span> <span class="token punctuation">/></span></span></code>'},p:b,d(t){t&&d($)}}}function I(t){let $;return{c(){$=p()},l(t){$=i(t)},m(t,e){g(t,$,e)},p:b,i:b,o:b,d(t){t&&d($)}}}function K(t){let $;return{c(){$=u("Properties")},l(t){$=h(t,"Properties")},m(t,e){g(t,$,e)},d(t){t&&d($)}}}function Y(t){let $;return{c(){$=u("Class Properties")},l(t){$=h(t,"Class Properties")},m(t,e){g(t,$,e)},d(t){t&&d($)}}}function q(t){let $,e,s,n,r,a,o;return{c(){$=u("All "),e=x("code"),s=u("<Loading>"),n=u(" components use the "),r=x("code"),a=u(".spinner"),o=u(" class.")},l(t){$=h(t,"All "),e=w(t,"CODE",{});var c=y(e);s=h(c,"<Loading>"),c.forEach(d),n=h(t," components use the "),r=w(t,"CODE",{});var f=y(r);a=h(f,".spinner"),f.forEach(d),o=h(t," class.")},m(t,c){g(t,$,c),g(t,e,c),E(e,s),g(t,n,c),g(t,r,c),E(r,a),g(t,o,c)},d(t){t&&d($),t&&d(e),t&&d(n),t&&d(r),t&&d(o)}}}function M(t){let $;return{c(){$=u("Falsy values passed to classes will be disregarded.")},l(t){$=h(t,"Falsy values passed to classes will be disregarded.")},m(t,e){g(t,$,e)},d(t){t&&d($)}}}function U(t){let $;return{c(){$=u("Name")},l(t){$=h(t,"Name")},m(t,e){g(t,$,e)},d(t){t&&d($)}}}function z(t){let $;return{c(){$=u("Default")},l(t){$=h(t,"Default")},m(t,e){g(t,$,e)},d(t){t&&d($)}}}function J(t){let $;return{c(){$=u("Type")},l(t){$=h(t,"Type")},m(t,e){g(t,$,e)},d(t){t&&d($)}}}function Q(t){let $;return{c(){$=u("Description")},l(t){$=h(t,"Description")},m(t,e){g(t,$,e)},d(t){t&&d($)}}}function W(t){let $,e,s,o,m,u,h,x;return $=new H({props:{$$slots:{default:[U]},$$scope:{ctx:t}}}),s=new H({props:{$$slots:{default:[z]},$$scope:{ctx:t}}}),m=new H({props:{$$slots:{default:[J]},$$scope:{ctx:t}}}),h=new H({props:{$$slots:{default:[Q]},$$scope:{ctx:t}}}),{c(){n($.$$.fragment),e=p(),n(s.$$.fragment),o=p(),n(m.$$.fragment),u=p(),n(h.$$.fragment)},l(t){r($.$$.fragment,t),e=i(t),r(s.$$.fragment,t),o=i(t),r(m.$$.fragment,t),u=i(t),r(h.$$.fragment,t)},m(t,n){a($,t,n),g(t,e,n),a(s,t,n),g(t,o,n),a(m,t,n),g(t,u,n),a(h,t,n),x=!0},p(t,e){const n={};1&e&&(n.$$scope={dirty:e,ctx:t}),$.$set(n);const r={};1&e&&(r.$$scope={dirty:e,ctx:t}),s.$set(r);const a={};1&e&&(a.$$scope={dirty:e,ctx:t}),m.$set(a);const o={};1&e&&(o.$$scope={dirty:e,ctx:t}),h.$set(o)},i(t){x||(c($.$$.fragment,t),c(s.$$.fragment,t),c(m.$$.fragment,t),c(h.$$.fragment,t),x=!0)},o(t){f($.$$.fragment,t),f(s.$$.fragment,t),f(m.$$.fragment,t),f(h.$$.fragment,t),x=!1},d(t){l($,t),t&&d(e),l(s,t),t&&d(o),l(m,t),t&&d(u),l(h,t)}}}function X(t){let $,e,s;return{c(){$=x("strong"),e=x("code"),s=u("class")},l(t){$=w(t,"STRONG",{});var n=y($);e=w(n,"CODE",{});var r=y(e);s=h(r,"class"),r.forEach(d),n.forEach(d)},m(t,n){g(t,$,n),E($,e),E(e,s)},d(t){t&&d($)}}}function Z(t){let $,e;return{c(){$=x("code"),e=u("null")},l(t){$=w(t,"CODE",{});var s=y($);e=h(s,"null"),s.forEach(d)},m(t,s){g(t,$,s),E($,e)},d(t){t&&d($)}}}function _(t){let $,e;return{c(){$=x("code"),e=u("string")},l(t){$=w(t,"CODE",{});var s=y($);e=h(s,"string"),s.forEach(d)},m(t,s){g(t,$,s),E($,e)},d(t){t&&d($)}}}function tt(t){let $;return{c(){$=u("A class string to add to the component.")},l(t){$=h(t,"A class string to add to the component.")},m(t,e){g(t,$,e)},d(t){t&&d($)}}}function $t(t){let $,e,s,o,m,u,h,x;return $=new P({props:{$$slots:{default:[X]},$$scope:{ctx:t}}}),s=new P({props:{$$slots:{default:[Z]},$$scope:{ctx:t}}}),m=new P({props:{$$slots:{default:[_]},$$scope:{ctx:t}}}),h=new P({props:{$$slots:{default:[tt]},$$scope:{ctx:t}}}),{c(){n($.$$.fragment),e=p(),n(s.$$.fragment),o=p(),n(m.$$.fragment),u=p(),n(h.$$.fragment)},l(t){r($.$$.fragment,t),e=i(t),r(s.$$.fragment,t),o=i(t),r(m.$$.fragment,t),u=i(t),r(h.$$.fragment,t)},m(t,n){a($,t,n),g(t,e,n),a(s,t,n),g(t,o,n),a(m,t,n),g(t,u,n),a(h,t,n),x=!0},p(t,e){const n={};1&e&&(n.$$scope={dirty:e,ctx:t}),$.$set(n);const r={};1&e&&(r.$$scope={dirty:e,ctx:t}),s.$set(r);const a={};1&e&&(a.$$scope={dirty:e,ctx:t}),m.$set(a);const o={};1&e&&(o.$$scope={dirty:e,ctx:t}),h.$set(o)},i(t){x||(c($.$$.fragment,t),c(s.$$.fragment,t),c(m.$$.fragment,t),c(h.$$.fragment,t),x=!0)},o(t){f($.$$.fragment,t),f(s.$$.fragment,t),f(m.$$.fragment,t),f(h.$$.fragment,t),x=!1},d(t){l($,t),t&&d(e),l(s,t),t&&d(o),l(m,t),t&&d(u),l(h,t)}}}function et(t){let $,e,s,o,m,u;return e=new N({props:{$$slots:{default:[W]},$$scope:{ctx:t}}}),m=new N({props:{$$slots:{default:[$t]},$$scope:{ctx:t}}}),{c(){$=x("thead"),n(e.$$.fragment),s=p(),o=x("tbody"),n(m.$$.fragment)},l(t){$=w(t,"THEAD",{});var n=y($);r(e.$$.fragment,n),n.forEach(d),s=i(t),o=w(t,"TBODY",{});var a=y(o);r(m.$$.fragment,a),a.forEach(d)},m(t,n){g(t,$,n),a(e,$,null),g(t,s,n),g(t,o,n),a(m,o,null),u=!0},p(t,$){const s={};1&$&&(s.$$scope={dirty:$,ctx:t}),e.$set(s);const n={};1&$&&(n.$$scope={dirty:$,ctx:t}),m.$set(n)},i(t){u||(c(e.$$.fragment,t),c(m.$$.fragment,t),u=!0)},o(t){f(e.$$.fragment,t),f(m.$$.fragment,t),u=!1},d(t){t&&d($),l(e),t&&d(s),t&&d(o),l(m)}}}function st(t){let $;return{c(){$=u("SCSS Variables")},l(t){$=h(t,"SCSS Variables")},m(t,e){g(t,$,e)},d(t){t&&d($)}}}function nt(t){let $;return{c(){$=u("Name")},l(t){$=h(t,"Name")},m(t,e){g(t,$,e)},d(t){t&&d($)}}}function rt(t){let $;return{c(){$=u("Description")},l(t){$=h(t,"Description")},m(t,e){g(t,$,e)},d(t){t&&d($)}}}function at(t){let $;return{c(){$=u("Default")},l(t){$=h(t,"Default")},m(t,e){g(t,$,e)},d(t){t&&d($)}}}function ot(t){let $,e,s,o,m,u;return $=new H({props:{$$slots:{default:[nt]},$$scope:{ctx:t}}}),s=new H({props:{$$slots:{default:[rt]},$$scope:{ctx:t}}}),m=new H({props:{$$slots:{default:[at]},$$scope:{ctx:t}}}),{c(){n($.$$.fragment),e=p(),n(s.$$.fragment),o=p(),n(m.$$.fragment)},l(t){r($.$$.fragment,t),e=i(t),r(s.$$.fragment,t),o=i(t),r(m.$$.fragment,t)},m(t,n){a($,t,n),g(t,e,n),a(s,t,n),g(t,o,n),a(m,t,n),u=!0},p(t,e){const n={};1&e&&(n.$$scope={dirty:e,ctx:t}),$.$set(n);const r={};1&e&&(r.$$scope={dirty:e,ctx:t}),s.$set(r);const a={};1&e&&(a.$$scope={dirty:e,ctx:t}),m.$set(a)},i(t){u||(c($.$$.fragment,t),c(s.$$.fragment,t),c(m.$$.fragment,t),u=!0)},o(t){f($.$$.fragment,t),f(s.$$.fragment,t),f(m.$$.fragment,t),u=!1},d(t){l($,t),t&&d(e),l(s,t),t&&d(o),l(m,t)}}}function ct(t){let $,e,s;return{c(){$=x("strong"),e=x("code"),s=u("$main")},l(t){$=w(t,"STRONG",{});var n=y($);e=w(n,"CODE",{});var r=y(e);s=h(r,"$main"),r.forEach(d),n.forEach(d)},m(t,n){g(t,$,n),E($,e),E(e,s)},d(t){t&&d($)}}}function ft(t){let $;return{c(){$=u("The color of spinner dots.")},l(t){$=h(t,"The color of spinner dots.")},m(t,e){g(t,$,e)},d(t){t&&d($)}}}function lt(t){let $,e;return $=new C({props:{value:"#4300B0"}}),{c(){n($.$$.fragment)},l(t){r($.$$.fragment,t)},m(t,s){a($,t,s),e=!0},p:b,i(t){e||(c($.$$.fragment,t),e=!0)},o(t){f($.$$.fragment,t),e=!1},d(t){l($,t)}}}function mt(t){let $,e,s,o,m,u;return $=new P({props:{$$slots:{default:[ct]},$$scope:{ctx:t}}}),s=new P({props:{$$slots:{default:[ft]},$$scope:{ctx:t}}}),m=new P({props:{$$slots:{default:[lt]},$$scope:{ctx:t}}}),{c(){n($.$$.fragment),e=p(),n(s.$$.fragment),o=p(),n(m.$$.fragment)},l(t){r($.$$.fragment,t),e=i(t),r(s.$$.fragment,t),o=i(t),r(m.$$.fragment,t)},m(t,n){a($,t,n),g(t,e,n),a(s,t,n),g(t,o,n),a(m,t,n),u=!0},p(t,e){const n={};1&e&&(n.$$scope={dirty:e,ctx:t}),$.$set(n);const r={};1&e&&(r.$$scope={dirty:e,ctx:t}),s.$set(r);const a={};1&e&&(a.$$scope={dirty:e,ctx:t}),m.$set(a)},i(t){u||(c($.$$.fragment,t),c(s.$$.fragment,t),c(m.$$.fragment,t),u=!0)},o(t){f($.$$.fragment,t),f(s.$$.fragment,t),f(m.$$.fragment,t),u=!1},d(t){l($,t),t&&d(e),l(s,t),t&&d(o),l(m,t)}}}function pt(t){let $,e,s,o,m,u;return e=new N({props:{$$slots:{default:[ot]},$$scope:{ctx:t}}}),m=new N({props:{$$slots:{default:[mt]},$$scope:{ctx:t}}}),{c(){$=x("thead"),n(e.$$.fragment),s=p(),o=x("tbody"),n(m.$$.fragment)},l(t){$=w(t,"THEAD",{});var n=y($);r(e.$$.fragment,n),n.forEach(d),s=i(t),o=w(t,"TBODY",{});var a=y(o);r(m.$$.fragment,a),a.forEach(d)},m(t,n){g(t,$,n),a(e,$,null),g(t,s,n),g(t,o,n),a(m,o,null),u=!0},p(t,$){const s={};1&$&&(s.$$scope={dirty:$,ctx:t}),e.$set(s);const n={};1&$&&(n.$$scope={dirty:$,ctx:t}),m.$set(n)},i(t){u||(c(e.$$.fragment,t),c(m.$$.fragment,t),u=!0)},o(t){f(e.$$.fragment,t),f(m.$$.fragment,t),u=!1},d(t){t&&d($),l(e),t&&d(s),t&&d(o),l(m)}}}function it(t){let $,e,s,o,m,u,h,x,w,y,v,E,b,D,S,C,N,H,P,U,z,J;return $=new j({props:{$$slots:{default:[V]},$$scope:{ctx:t}}}),s=new A({props:{$$slots:{default:[B]},$$scope:{ctx:t}}}),m=new A({props:{$$slots:{default:[G]},$$scope:{ctx:t}}}),h=new T({props:{$$slots:{default:[I],source:[F],showcase:[R]},$$scope:{ctx:t}}}),w=new O({props:{id:"properties",$$slots:{default:[K]},$$scope:{ctx:t}}}),v=new L({props:{$$slots:{default:[Y]},$$scope:{ctx:t}}}),b=new A({props:{$$slots:{default:[q]},$$scope:{ctx:t}}}),S=new A({props:{$$slots:{default:[M]},$$scope:{ctx:t}}}),N=new k({props:{$$slots:{default:[et]},$$scope:{ctx:t}}}),P=new O({props:{id:"scss-variables",$$slots:{default:[st]},$$scope:{ctx:t}}}),z=new k({props:{$$slots:{default:[pt]},$$scope:{ctx:t}}}),{c(){n($.$$.fragment),e=p(),n(s.$$.fragment),o=p(),n(m.$$.fragment),u=p(),n(h.$$.fragment),x=p(),n(w.$$.fragment),y=p(),n(v.$$.fragment),E=p(),n(b.$$.fragment),D=p(),n(S.$$.fragment),C=p(),n(N.$$.fragment),H=p(),n(P.$$.fragment),U=p(),n(z.$$.fragment)},l(t){r($.$$.fragment,t),e=i(t),r(s.$$.fragment,t),o=i(t),r(m.$$.fragment,t),u=i(t),r(h.$$.fragment,t),x=i(t),r(w.$$.fragment,t),y=i(t),r(v.$$.fragment,t),E=i(t),r(b.$$.fragment,t),D=i(t),r(S.$$.fragment,t),C=i(t),r(N.$$.fragment,t),H=i(t),r(P.$$.fragment,t),U=i(t),r(z.$$.fragment,t)},m(t,n){a($,t,n),g(t,e,n),a(s,t,n),g(t,o,n),a(m,t,n),g(t,u,n),a(h,t,n),g(t,x,n),a(w,t,n),g(t,y,n),a(v,t,n),g(t,E,n),a(b,t,n),g(t,D,n),a(S,t,n),g(t,C,n),a(N,t,n),g(t,H,n),a(P,t,n),g(t,U,n),a(z,t,n),J=!0},p(t,e){const n={};1&e&&(n.$$scope={dirty:e,ctx:t}),$.$set(n);const r={};1&e&&(r.$$scope={dirty:e,ctx:t}),s.$set(r);const a={};1&e&&(a.$$scope={dirty:e,ctx:t}),m.$set(a);const o={};1&e&&(o.$$scope={dirty:e,ctx:t}),h.$set(o);const c={};1&e&&(c.$$scope={dirty:e,ctx:t}),w.$set(c);const f={};1&e&&(f.$$scope={dirty:e,ctx:t}),v.$set(f);const l={};1&e&&(l.$$scope={dirty:e,ctx:t}),b.$set(l);const p={};1&e&&(p.$$scope={dirty:e,ctx:t}),S.$set(p);const i={};1&e&&(i.$$scope={dirty:e,ctx:t}),N.$set(i);const g={};1&e&&(g.$$scope={dirty:e,ctx:t}),P.$set(g);const d={};1&e&&(d.$$scope={dirty:e,ctx:t}),z.$set(d)},i(t){J||(c($.$$.fragment,t),c(s.$$.fragment,t),c(m.$$.fragment,t),c(h.$$.fragment,t),c(w.$$.fragment,t),c(v.$$.fragment,t),c(b.$$.fragment,t),c(S.$$.fragment,t),c(N.$$.fragment,t),c(P.$$.fragment,t),c(z.$$.fragment,t),J=!0)},o(t){f($.$$.fragment,t),f(s.$$.fragment,t),f(m.$$.fragment,t),f(h.$$.fragment,t),f(w.$$.fragment,t),f(v.$$.fragment,t),f(b.$$.fragment,t),f(S.$$.fragment,t),f(N.$$.fragment,t),f(P.$$.fragment,t),f(z.$$.fragment,t),J=!1},d(t){l($,t),t&&d(e),l(s,t),t&&d(o),l(m,t),t&&d(u),l(h,t),t&&d(x),l(w,t),t&&d(y),l(v,t),t&&d(E),l(b,t),t&&d(D),l(S,t),t&&d(C),l(N,t),t&&d(H),l(P,t),t&&d(U),l(z,t)}}}function gt(t){let $,e;const p=[dt];let i={$$slots:{default:[it]},$$scope:{ctx:t}};for(let t=0;t<p.length;t+=1)i=s(i,p[t]);return $=new D({props:i}),{c(){n($.$$.fragment)},l(t){r($.$$.fragment,t)},m(t,s){a($,t,s),e=!0},p(t,[e]){const s=0&e?o(p,[m(dt)]):{};1&e&&(s.$$scope={dirty:e,ctx:t}),$.$set(s)},i(t){e||(c($.$$.fragment,t),e=!0)},o(t){f($.$$.fragment,t),e=!1},d(t){l($,t)}}}const dt={name:"Loading"};export default class extends t{constructor(t){super(),$(this,t,null,gt,e,{})}}export{dt as metadata};
