import{S as t,i as e,s as n,L as $,p as s,q as o,r as a,T as r,Z as c,u as p,v as f,w as l,x as m,z as u,k as g,h as i,y as d,A as x,o as h,f as w,g as y,j as v,l as k,n as E}from"./client.831ab1f6.js";import{L as b,H as D,P as T}from"./layout.be97799c.js";import{B as O}from"./button.a622a4d6.js";import{P,a as C}from"./popover.ede68326.js";import{P as j}from"./popover-button.dea596a3.js";import{S}from"./showcase.5ed60318.js";import{S as B}from"./shadow-preview.b8669e2c.js";import{R as N}from"./related-components.4402625f.js";import{H as A}from"./h2.6d201ab2.js";import{H as R}from"./h3.2301de3c.js";import{T as H,a as G,b as F,c as V}from"./table.6378e9c2.js";import"./classes.541c5f2a.js";import"./label.be757ee0.js";import"./copyable-code.e1d6a85d.js";import"./asyncToGenerator.756dab92.js";import"./card.d66d7f61.js";function M(t){let e;return{c(){e=d("PopoverButton")},l(t){e=x(t,"PopoverButton")},m(t,n){g(t,e,n)},d(t){t&&i(e)}}}function Y(t){let e,n,$,s,o,a;return{c(){e=d("A button designed to be used as the "),n=h("a"),$=h("mark"),s=h("code"),o=d("Popover"),a=d(" content."),this.h()},l(t){e=x(t,"A button designed to be used as the "),n=w(t,"A",{href:!0});var r=y(n);$=w(r,"MARK",{});var c=y($);s=w(c,"CODE",{});var p=y(s);o=x(p,"Popover"),p.forEach(i),c.forEach(i),r.forEach(i),a=x(t," content."),this.h()},h(){v(n,"href","./docs/components/popover")},m(t,r){g(t,e,r),g(t,n,r),k(n,$),k($,s),k(s,o),g(t,a,r)},d(t){t&&i(e),t&&i(n),t&&i(a)}}}function I(t){let e;return{c(){e=d("hover or focus me")},l(t){e=x(t,"hover or focus me")},m(t,n){g(t,e,n)},d(t){t&&i(e)}}}function L(t){let e;return{c(){e=d("copy")},l(t){e=x(t,"copy")},m(t,n){g(t,e,n)},d(t){t&&i(e)}}}function U(t){let e,n,$;return n=new j({props:{$$slots:{default:[L]},$$scope:{ctx:t}}}),{c(){e=h("div"),s(n.$$.fragment),this.h()},l(t){e=w(t,"DIV",{slot:!0});var $=y(e);o(n.$$.fragment,$),$.forEach(i),this.h()},h(){v(e,"slot","popover-content")},m(t,s){g(t,e,s),a(n,e,null),$=!0},p(t,e){const $={};1&e&&($.$$scope={dirty:e,ctx:t}),n.$set($)},i(t){$||(p(n.$$.fragment,t),$=!0)},o(t){f(n.$$.fragment,t),$=!1},d(t){t&&i(e),l(n)}}}function q(t){let e,n,$;return e=new O({props:{$$slots:{default:[I]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=m()},l(t){o(e.$$.fragment,t),n=u(t)},m(t,s){a(e,t,s),g(t,n,s),$=!0},p(t,n){const $={};1&n&&($.$$scope={dirty:n,ctx:t}),e.$set($)},i(t){$||(p(e.$$.fragment,t),$=!0)},o(t){f(e.$$.fragment,t),$=!1},d(t){l(e,t),t&&i(n)}}}function z(t){let e,n,$;return n=new P({props:{position:C.BOTTOM,$$slots:{default:[q],"popover-content":[U]},$$scope:{ctx:t}}}),{c(){e=h("div"),s(n.$$.fragment),this.h()},l(t){e=w(t,"DIV",{slot:!0,class:!0});var $=y(e);o(n.$$.fragment,$),$.forEach(i),this.h()},h(){v(e,"slot","showcase"),v(e,"class","padded")},m(t,s){g(t,e,s),a(n,e,null),$=!0},p(t,e){const $={};1&e&&($.$$scope={dirty:e,ctx:t}),n.$set($)},i(t){$||(p(n.$$.fragment,t),$=!0)},o(t){f(n.$$.fragment,t),$=!1},d(t){t&&i(e),l(n)}}}function K(t){let e,n;return{c(){e=h("div"),n=h("pre"),this.h()},l(t){e=w(t,"DIV",{slot:!0});var $=y(e);n=w($,"PRE",{class:!0}),y(n).forEach(i),$.forEach(i),this.h()},h(){v(n,"class","language-svelte"),v(e,"slot","source")},m(t,$){g(t,e,$),k(e,n),n.innerHTML='<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> PopoverPositions <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">\'attractions/popover\'</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Popover</span> <span class="token attr-name">position=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>PopoverPositions<span class="token punctuation">.</span><span class="token constant">BOTTOM</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span><span class="token punctuation">></span></span>hover or focus me<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>popover-content<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PopoverButton</span><span class="token punctuation">></span></span>copy<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>PopoverButton</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Popover</span><span class="token punctuation">></span></span></code>'},p:E,d(t){t&&i(e)}}}function Z(t){let e;return{c(){e=m()},l(t){e=u(t)},m(t,n){g(t,e,n)},p:E,i:E,o:E,d(t){t&&i(e)}}}function J(t){let e;return{c(){e=d("Properties")},l(t){e=x(t,"Properties")},m(t,n){g(t,e,n)},d(t){t&&i(e)}}}function Q(t){let e;return{c(){e=d("Functional Properties")},l(t){e=x(t,"Functional Properties")},m(t,n){g(t,e,n)},d(t){t&&i(e)}}}function W(t){let e;return{c(){e=d("Name")},l(t){e=x(t,"Name")},m(t,n){g(t,e,n)},d(t){t&&i(e)}}}function X(t){let e;return{c(){e=d("Default")},l(t){e=x(t,"Default")},m(t,n){g(t,e,n)},d(t){t&&i(e)}}}function _(t){let e;return{c(){e=d("Type")},l(t){e=x(t,"Type")},m(t,n){g(t,e,n)},d(t){t&&i(e)}}}function tt(t){let e;return{c(){e=d("Description")},l(t){e=x(t,"Description")},m(t,n){g(t,e,n)},d(t){t&&i(e)}}}function et(t){let e,n,$,r,c,d,x,h;return e=new F({props:{$$slots:{default:[W]},$$scope:{ctx:t}}}),$=new F({props:{$$slots:{default:[X]},$$scope:{ctx:t}}}),c=new F({props:{$$slots:{default:[_]},$$scope:{ctx:t}}}),x=new F({props:{$$slots:{default:[tt]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=m(),s($.$$.fragment),r=m(),s(c.$$.fragment),d=m(),s(x.$$.fragment)},l(t){o(e.$$.fragment,t),n=u(t),o($.$$.fragment,t),r=u(t),o(c.$$.fragment,t),d=u(t),o(x.$$.fragment,t)},m(t,s){a(e,t,s),g(t,n,s),a($,t,s),g(t,r,s),a(c,t,s),g(t,d,s),a(x,t,s),h=!0},p(t,n){const s={};1&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const o={};1&n&&(o.$$scope={dirty:n,ctx:t}),$.$set(o);const a={};1&n&&(a.$$scope={dirty:n,ctx:t}),c.$set(a);const r={};1&n&&(r.$$scope={dirty:n,ctx:t}),x.$set(r)},i(t){h||(p(e.$$.fragment,t),p($.$$.fragment,t),p(c.$$.fragment,t),p(x.$$.fragment,t),h=!0)},o(t){f(e.$$.fragment,t),f($.$$.fragment,t),f(c.$$.fragment,t),f(x.$$.fragment,t),h=!1},d(t){l(e,t),t&&i(n),l($,t),t&&i(r),l(c,t),t&&i(d),l(x,t)}}}function nt(t){let e,n,$;return{c(){e=h("strong"),n=h("code"),$=d("...")},l(t){e=w(t,"STRONG",{});var s=y(e);n=w(s,"CODE",{});var o=y(n);$=x(o,"..."),o.forEach(i),s.forEach(i)},m(t,s){g(t,e,s),k(e,n),k(n,$)},d(t){t&&i(e)}}}function $t(t){let e,n;return{c(){e=h("code"),n=d("any")},l(t){e=w(t,"CODE",{});var $=y(e);n=x($,"any"),$.forEach(i)},m(t,$){g(t,e,$),k(e,n)},d(t){t&&i(e)}}}function st(t){let e,n,$,s;return{c(){e=d("Everything will be passed to the underlying "),n=h("code"),$=d("<button>"),s=d(" element.")},l(t){e=x(t,"Everything will be passed to the underlying "),n=w(t,"CODE",{});var o=y(n);$=x(o,"<button>"),o.forEach(i),s=x(t," element.")},m(t,o){g(t,e,o),g(t,n,o),k(n,$),g(t,s,o)},d(t){t&&i(e),t&&i(n),t&&i(s)}}}function ot(t){let e,n,$,r,c,d,x,h;return e=new V({props:{$$slots:{default:[nt]},$$scope:{ctx:t}}}),$=new V({}),c=new V({props:{$$slots:{default:[$t]},$$scope:{ctx:t}}}),x=new V({props:{$$slots:{default:[st]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=m(),s($.$$.fragment),r=m(),s(c.$$.fragment),d=m(),s(x.$$.fragment)},l(t){o(e.$$.fragment,t),n=u(t),o($.$$.fragment,t),r=u(t),o(c.$$.fragment,t),d=u(t),o(x.$$.fragment,t)},m(t,s){a(e,t,s),g(t,n,s),a($,t,s),g(t,r,s),a(c,t,s),g(t,d,s),a(x,t,s),h=!0},p(t,n){const $={};1&n&&($.$$scope={dirty:n,ctx:t}),e.$set($);const s={};1&n&&(s.$$scope={dirty:n,ctx:t}),c.$set(s);const o={};1&n&&(o.$$scope={dirty:n,ctx:t}),x.$set(o)},i(t){h||(p(e.$$.fragment,t),p($.$$.fragment,t),p(c.$$.fragment,t),p(x.$$.fragment,t),h=!0)},o(t){f(e.$$.fragment,t),f($.$$.fragment,t),f(c.$$.fragment,t),f(x.$$.fragment,t),h=!1},d(t){l(e,t),t&&i(n),l($,t),t&&i(r),l(c,t),t&&i(d),l(x,t)}}}function at(t){let e,n,$,r,c,d;return n=new G({props:{$$slots:{default:[et]},$$scope:{ctx:t}}}),c=new G({props:{$$slots:{default:[ot]},$$scope:{ctx:t}}}),{c(){e=h("thead"),s(n.$$.fragment),$=m(),r=h("tbody"),s(c.$$.fragment)},l(t){e=w(t,"THEAD",{});var s=y(e);o(n.$$.fragment,s),s.forEach(i),$=u(t),r=w(t,"TBODY",{});var a=y(r);o(c.$$.fragment,a),a.forEach(i)},m(t,s){g(t,e,s),a(n,e,null),g(t,$,s),g(t,r,s),a(c,r,null),d=!0},p(t,e){const $={};1&e&&($.$$scope={dirty:e,ctx:t}),n.$set($);const s={};1&e&&(s.$$scope={dirty:e,ctx:t}),c.$set(s)},i(t){d||(p(n.$$.fragment,t),p(c.$$.fragment,t),d=!0)},o(t){f(n.$$.fragment,t),f(c.$$.fragment,t),d=!1},d(t){t&&i(e),l(n),t&&i($),t&&i(r),l(c)}}}function rt(t){let e;return{c(){e=d("Class Properties")},l(t){e=x(t,"Class Properties")},m(t,n){g(t,e,n)},d(t){t&&i(e)}}}function ct(t){let e,n,$,s,o,a,r;return{c(){e=d("All "),n=h("code"),$=d("<PopoverButton>"),s=d(" components use the "),o=h("code"),a=d(".popover-button"),r=d(" class.")},l(t){e=x(t,"All "),n=w(t,"CODE",{});var c=y(n);$=x(c,"<PopoverButton>"),c.forEach(i),s=x(t," components use the "),o=w(t,"CODE",{});var p=y(o);a=x(p,".popover-button"),p.forEach(i),r=x(t," class.")},m(t,c){g(t,e,c),g(t,n,c),k(n,$),g(t,s,c),g(t,o,c),k(o,a),g(t,r,c)},d(t){t&&i(e),t&&i(n),t&&i(s),t&&i(o),t&&i(r)}}}function pt(t){let e;return{c(){e=d("Falsy values passed to classes will be disregarded.")},l(t){e=x(t,"Falsy values passed to classes will be disregarded.")},m(t,n){g(t,e,n)},d(t){t&&i(e)}}}function ft(t){let e;return{c(){e=d("Name")},l(t){e=x(t,"Name")},m(t,n){g(t,e,n)},d(t){t&&i(e)}}}function lt(t){let e;return{c(){e=d("Default")},l(t){e=x(t,"Default")},m(t,n){g(t,e,n)},d(t){t&&i(e)}}}function mt(t){let e;return{c(){e=d("Type")},l(t){e=x(t,"Type")},m(t,n){g(t,e,n)},d(t){t&&i(e)}}}function ut(t){let e;return{c(){e=d("Description")},l(t){e=x(t,"Description")},m(t,n){g(t,e,n)},d(t){t&&i(e)}}}function gt(t){let e,n,$,r,c,d,x,h;return e=new F({props:{$$slots:{default:[ft]},$$scope:{ctx:t}}}),$=new F({props:{$$slots:{default:[lt]},$$scope:{ctx:t}}}),c=new F({props:{$$slots:{default:[mt]},$$scope:{ctx:t}}}),x=new F({props:{$$slots:{default:[ut]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=m(),s($.$$.fragment),r=m(),s(c.$$.fragment),d=m(),s(x.$$.fragment)},l(t){o(e.$$.fragment,t),n=u(t),o($.$$.fragment,t),r=u(t),o(c.$$.fragment,t),d=u(t),o(x.$$.fragment,t)},m(t,s){a(e,t,s),g(t,n,s),a($,t,s),g(t,r,s),a(c,t,s),g(t,d,s),a(x,t,s),h=!0},p(t,n){const s={};1&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const o={};1&n&&(o.$$scope={dirty:n,ctx:t}),$.$set(o);const a={};1&n&&(a.$$scope={dirty:n,ctx:t}),c.$set(a);const r={};1&n&&(r.$$scope={dirty:n,ctx:t}),x.$set(r)},i(t){h||(p(e.$$.fragment,t),p($.$$.fragment,t),p(c.$$.fragment,t),p(x.$$.fragment,t),h=!0)},o(t){f(e.$$.fragment,t),f($.$$.fragment,t),f(c.$$.fragment,t),f(x.$$.fragment,t),h=!1},d(t){l(e,t),t&&i(n),l($,t),t&&i(r),l(c,t),t&&i(d),l(x,t)}}}function it(t){let e,n,$;return{c(){e=h("strong"),n=h("code"),$=d("class")},l(t){e=w(t,"STRONG",{});var s=y(e);n=w(s,"CODE",{});var o=y(n);$=x(o,"class"),o.forEach(i),s.forEach(i)},m(t,s){g(t,e,s),k(e,n),k(n,$)},d(t){t&&i(e)}}}function dt(t){let e,n;return{c(){e=h("code"),n=d("null")},l(t){e=w(t,"CODE",{});var $=y(e);n=x($,"null"),$.forEach(i)},m(t,$){g(t,e,$),k(e,n)},d(t){t&&i(e)}}}function xt(t){let e,n;return{c(){e=h("code"),n=d("string")},l(t){e=w(t,"CODE",{});var $=y(e);n=x($,"string"),$.forEach(i)},m(t,$){g(t,e,$),k(e,n)},d(t){t&&i(e)}}}function ht(t){let e;return{c(){e=d("A class string to add to the component.")},l(t){e=x(t,"A class string to add to the component.")},m(t,n){g(t,e,n)},d(t){t&&i(e)}}}function wt(t){let e,n,$,r,c,d,x,h;return e=new V({props:{$$slots:{default:[it]},$$scope:{ctx:t}}}),$=new V({props:{$$slots:{default:[dt]},$$scope:{ctx:t}}}),c=new V({props:{$$slots:{default:[xt]},$$scope:{ctx:t}}}),x=new V({props:{$$slots:{default:[ht]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=m(),s($.$$.fragment),r=m(),s(c.$$.fragment),d=m(),s(x.$$.fragment)},l(t){o(e.$$.fragment,t),n=u(t),o($.$$.fragment,t),r=u(t),o(c.$$.fragment,t),d=u(t),o(x.$$.fragment,t)},m(t,s){a(e,t,s),g(t,n,s),a($,t,s),g(t,r,s),a(c,t,s),g(t,d,s),a(x,t,s),h=!0},p(t,n){const s={};1&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const o={};1&n&&(o.$$scope={dirty:n,ctx:t}),$.$set(o);const a={};1&n&&(a.$$scope={dirty:n,ctx:t}),c.$set(a);const r={};1&n&&(r.$$scope={dirty:n,ctx:t}),x.$set(r)},i(t){h||(p(e.$$.fragment,t),p($.$$.fragment,t),p(c.$$.fragment,t),p(x.$$.fragment,t),h=!0)},o(t){f(e.$$.fragment,t),f($.$$.fragment,t),f(c.$$.fragment,t),f(x.$$.fragment,t),h=!1},d(t){l(e,t),t&&i(n),l($,t),t&&i(r),l(c,t),t&&i(d),l(x,t)}}}function yt(t){let e,n,$,r,c,d;return n=new G({props:{$$slots:{default:[gt]},$$scope:{ctx:t}}}),c=new G({props:{$$slots:{default:[wt]},$$scope:{ctx:t}}}),{c(){e=h("thead"),s(n.$$.fragment),$=m(),r=h("tbody"),s(c.$$.fragment)},l(t){e=w(t,"THEAD",{});var s=y(e);o(n.$$.fragment,s),s.forEach(i),$=u(t),r=w(t,"TBODY",{});var a=y(r);o(c.$$.fragment,a),a.forEach(i)},m(t,s){g(t,e,s),a(n,e,null),g(t,$,s),g(t,r,s),a(c,r,null),d=!0},p(t,e){const $={};1&e&&($.$$scope={dirty:e,ctx:t}),n.$set($);const s={};1&e&&(s.$$scope={dirty:e,ctx:t}),c.$set(s)},i(t){d||(p(n.$$.fragment,t),p(c.$$.fragment,t),d=!0)},o(t){f(n.$$.fragment,t),f(c.$$.fragment,t),d=!1},d(t){t&&i(e),l(n),t&&i($),t&&i(r),l(c)}}}function vt(t){let e;return{c(){e=d("Events")},l(t){e=x(t,"Events")},m(t,n){g(t,e,n)},d(t){t&&i(e)}}}function kt(t){let e;return{c(){e=d("Name")},l(t){e=x(t,"Name")},m(t,n){g(t,e,n)},d(t){t&&i(e)}}}function Et(t){let e;return{c(){e=d("Event Detail")},l(t){e=x(t,"Event Detail")},m(t,n){g(t,e,n)},d(t){t&&i(e)}}}function bt(t){let e;return{c(){e=d("Description")},l(t){e=x(t,"Description")},m(t,n){g(t,e,n)},d(t){t&&i(e)}}}function Dt(t){let e,n,$,r,c,d;return e=new F({props:{$$slots:{default:[kt]},$$scope:{ctx:t}}}),$=new F({props:{$$slots:{default:[Et]},$$scope:{ctx:t}}}),c=new F({props:{$$slots:{default:[bt]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=m(),s($.$$.fragment),r=m(),s(c.$$.fragment)},l(t){o(e.$$.fragment,t),n=u(t),o($.$$.fragment,t),r=u(t),o(c.$$.fragment,t)},m(t,s){a(e,t,s),g(t,n,s),a($,t,s),g(t,r,s),a(c,t,s),d=!0},p(t,n){const s={};1&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const o={};1&n&&(o.$$scope={dirty:n,ctx:t}),$.$set(o);const a={};1&n&&(a.$$scope={dirty:n,ctx:t}),c.$set(a)},i(t){d||(p(e.$$.fragment,t),p($.$$.fragment,t),p(c.$$.fragment,t),d=!0)},o(t){f(e.$$.fragment,t),f($.$$.fragment,t),f(c.$$.fragment,t),d=!1},d(t){l(e,t),t&&i(n),l($,t),t&&i(r),l(c,t)}}}function Tt(t){let e,n,$;return{c(){e=h("strong"),n=h("code"),$=d("click")},l(t){e=w(t,"STRONG",{});var s=y(e);n=w(s,"CODE",{});var o=y(n);$=x(o,"click"),o.forEach(i),s.forEach(i)},m(t,s){g(t,e,s),k(e,n),k(n,$)},d(t){t&&i(e)}}}function Ot(t){let e,n;return{c(){e=h("code"),n=d("{ nativeEvent }")},l(t){e=w(t,"CODE",{});var $=y(e);n=x($,"{ nativeEvent }"),$.forEach(i)},m(t,$){g(t,e,$),k(e,n)},d(t){t&&i(e)}}}function Pt(t){let e;return{c(){e=d("Fired when the button is clicked.")},l(t){e=x(t,"Fired when the button is clicked.")},m(t,n){g(t,e,n)},d(t){t&&i(e)}}}function Ct(t){let e,n,$,r,c,d;return e=new V({props:{$$slots:{default:[Tt]},$$scope:{ctx:t}}}),$=new V({props:{$$slots:{default:[Ot]},$$scope:{ctx:t}}}),c=new V({props:{$$slots:{default:[Pt]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=m(),s($.$$.fragment),r=m(),s(c.$$.fragment)},l(t){o(e.$$.fragment,t),n=u(t),o($.$$.fragment,t),r=u(t),o(c.$$.fragment,t)},m(t,s){a(e,t,s),g(t,n,s),a($,t,s),g(t,r,s),a(c,t,s),d=!0},p(t,n){const s={};1&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const o={};1&n&&(o.$$scope={dirty:n,ctx:t}),$.$set(o);const a={};1&n&&(a.$$scope={dirty:n,ctx:t}),c.$set(a)},i(t){d||(p(e.$$.fragment,t),p($.$$.fragment,t),p(c.$$.fragment,t),d=!0)},o(t){f(e.$$.fragment,t),f($.$$.fragment,t),f(c.$$.fragment,t),d=!1},d(t){l(e,t),t&&i(n),l($,t),t&&i(r),l(c,t)}}}function jt(t){let e,n,$,r,c,d;return n=new G({props:{$$slots:{default:[Dt]},$$scope:{ctx:t}}}),c=new G({props:{$$slots:{default:[Ct]},$$scope:{ctx:t}}}),{c(){e=h("thead"),s(n.$$.fragment),$=m(),r=h("tbody"),s(c.$$.fragment)},l(t){e=w(t,"THEAD",{});var s=y(e);o(n.$$.fragment,s),s.forEach(i),$=u(t),r=w(t,"TBODY",{});var a=y(r);o(c.$$.fragment,a),a.forEach(i)},m(t,s){g(t,e,s),a(n,e,null),g(t,$,s),g(t,r,s),a(c,r,null),d=!0},p(t,e){const $={};1&e&&($.$$scope={dirty:e,ctx:t}),n.$set($);const s={};1&e&&(s.$$scope={dirty:e,ctx:t}),c.$set(s)},i(t){d||(p(n.$$.fragment,t),p(c.$$.fragment,t),d=!0)},o(t){f(n.$$.fragment,t),f(c.$$.fragment,t),d=!1},d(t){t&&i(e),l(n),t&&i($),t&&i(r),l(c)}}}function St(t){let e;return{c(){e=d("Slots")},l(t){e=x(t,"Slots")},m(t,n){g(t,e,n)},d(t){t&&i(e)}}}function Bt(t){let e;return{c(){e=d("Default slot")},l(t){e=x(t,"Default slot")},m(t,n){g(t,e,n)},d(t){t&&i(e)}}}function Nt(t){let e;return{c(){e=d("The content of the button.")},l(t){e=x(t,"The content of the button.")},m(t,n){g(t,e,n)},d(t){t&&i(e)}}}function At(t){let e;return{c(){e=d("SCSS Variables")},l(t){e=x(t,"SCSS Variables")},m(t,n){g(t,e,n)},d(t){t&&i(e)}}}function Rt(t){let e;return{c(){e=d("Name")},l(t){e=x(t,"Name")},m(t,n){g(t,e,n)},d(t){t&&i(e)}}}function Ht(t){let e;return{c(){e=d("Description")},l(t){e=x(t,"Description")},m(t,n){g(t,e,n)},d(t){t&&i(e)}}}function Gt(t){let e;return{c(){e=d("Default")},l(t){e=x(t,"Default")},m(t,n){g(t,e,n)},d(t){t&&i(e)}}}function Ft(t){let e,n,$,r,c,d;return e=new F({props:{$$slots:{default:[Rt]},$$scope:{ctx:t}}}),$=new F({props:{$$slots:{default:[Ht]},$$scope:{ctx:t}}}),c=new F({props:{$$slots:{default:[Gt]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=m(),s($.$$.fragment),r=m(),s(c.$$.fragment)},l(t){o(e.$$.fragment,t),n=u(t),o($.$$.fragment,t),r=u(t),o(c.$$.fragment,t)},m(t,s){a(e,t,s),g(t,n,s),a($,t,s),g(t,r,s),a(c,t,s),d=!0},p(t,n){const s={};1&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const o={};1&n&&(o.$$scope={dirty:n,ctx:t}),$.$set(o);const a={};1&n&&(a.$$scope={dirty:n,ctx:t}),c.$set(a)},i(t){d||(p(e.$$.fragment,t),p($.$$.fragment,t),p(c.$$.fragment,t),d=!0)},o(t){f(e.$$.fragment,t),f($.$$.fragment,t),f(c.$$.fragment,t),d=!1},d(t){l(e,t),t&&i(n),l($,t),t&&i(r),l(c,t)}}}function Vt(t){let e,n,$;return{c(){e=h("strong"),n=h("code"),$=d("$font")},l(t){e=w(t,"STRONG",{});var s=y(e);n=w(s,"CODE",{});var o=y(n);$=x(o,"$font"),o.forEach(i),s.forEach(i)},m(t,s){g(t,e,s),k(e,n),k(n,$)},d(t){t&&i(e)}}}function Mt(t){let e;return{c(){e=d("The font family used for the button.")},l(t){e=x(t,"The font family used for the button.")},m(t,n){g(t,e,n)},d(t){t&&i(e)}}}function Yt(t){let e,n;return{c(){e=h("code"),n=d("'Ubuntu'")},l(t){e=w(t,"CODE",{});var $=y(e);n=x($,"'Ubuntu'"),$.forEach(i)},m(t,$){g(t,e,$),k(e,n)},d(t){t&&i(e)}}}function It(t){let e,n,$,r,c,d;return e=new V({props:{$$slots:{default:[Vt]},$$scope:{ctx:t}}}),$=new V({props:{$$slots:{default:[Mt]},$$scope:{ctx:t}}}),c=new V({props:{$$slots:{default:[Yt]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=m(),s($.$$.fragment),r=m(),s(c.$$.fragment)},l(t){o(e.$$.fragment,t),n=u(t),o($.$$.fragment,t),r=u(t),o(c.$$.fragment,t)},m(t,s){a(e,t,s),g(t,n,s),a($,t,s),g(t,r,s),a(c,t,s),d=!0},p(t,n){const s={};1&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const o={};1&n&&(o.$$scope={dirty:n,ctx:t}),$.$set(o);const a={};1&n&&(a.$$scope={dirty:n,ctx:t}),c.$set(a)},i(t){d||(p(e.$$.fragment,t),p($.$$.fragment,t),p(c.$$.fragment,t),d=!0)},o(t){f(e.$$.fragment,t),f($.$$.fragment,t),f(c.$$.fragment,t),d=!1},d(t){l(e,t),t&&i(n),l($,t),t&&i(r),l(c,t)}}}function Lt(t){let e,n,$;return{c(){e=h("strong"),n=h("code"),$=d("$shadow-raised")},l(t){e=w(t,"STRONG",{});var s=y(e);n=w(s,"CODE",{});var o=y(n);$=x(o,"$shadow-raised"),o.forEach(i),s.forEach(i)},m(t,s){g(t,e,s),k(e,n),k(n,$)},d(t){t&&i(e)}}}function Ut(t){let e;return{c(){e=d("The shadow of the button.")},l(t){e=x(t,"The shadow of the button.")},m(t,n){g(t,e,n)},d(t){t&&i(e)}}}function qt(t){let e,n;return e=new B({props:{value:$e}}),{c(){s(e.$$.fragment)},l(t){o(e.$$.fragment,t)},m(t,$){a(e,t,$),n=!0},p:E,i(t){n||(p(e.$$.fragment,t),n=!0)},o(t){f(e.$$.fragment,t),n=!1},d(t){l(e,t)}}}function zt(t){let e,n,$,r,c,d;return e=new V({props:{$$slots:{default:[Lt]},$$scope:{ctx:t}}}),$=new V({props:{$$slots:{default:[Ut]},$$scope:{ctx:t}}}),c=new V({props:{$$slots:{default:[qt]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=m(),s($.$$.fragment),r=m(),s(c.$$.fragment)},l(t){o(e.$$.fragment,t),n=u(t),o($.$$.fragment,t),r=u(t),o(c.$$.fragment,t)},m(t,s){a(e,t,s),g(t,n,s),a($,t,s),g(t,r,s),a(c,t,s),d=!0},p(t,n){const s={};1&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const o={};1&n&&(o.$$scope={dirty:n,ctx:t}),$.$set(o);const a={};1&n&&(a.$$scope={dirty:n,ctx:t}),c.$set(a)},i(t){d||(p(e.$$.fragment,t),p($.$$.fragment,t),p(c.$$.fragment,t),d=!0)},o(t){f(e.$$.fragment,t),f($.$$.fragment,t),f(c.$$.fragment,t),d=!1},d(t){l(e,t),t&&i(n),l($,t),t&&i(r),l(c,t)}}}function Kt(t){let e,n,$;return{c(){e=h("strong"),n=h("code"),$=d("$bold-font-weight")},l(t){e=w(t,"STRONG",{});var s=y(e);n=w(s,"CODE",{});var o=y(n);$=x(o,"$bold-font-weight"),o.forEach(i),s.forEach(i)},m(t,s){g(t,e,s),k(e,n),k(n,$)},d(t){t&&i(e)}}}function Zt(t){let e;return{c(){e=d("The bold font weight of the button.")},l(t){e=x(t,"The bold font weight of the button.")},m(t,n){g(t,e,n)},d(t){t&&i(e)}}}function Jt(t){let e,n;return{c(){e=h("code"),n=d("500")},l(t){e=w(t,"CODE",{});var $=y(e);n=x($,"500"),$.forEach(i)},m(t,$){g(t,e,$),k(e,n)},d(t){t&&i(e)}}}function Qt(t){let e,n,$,r,c,d;return e=new V({props:{$$slots:{default:[Kt]},$$scope:{ctx:t}}}),$=new V({props:{$$slots:{default:[Zt]},$$scope:{ctx:t}}}),c=new V({props:{$$slots:{default:[Jt]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=m(),s($.$$.fragment),r=m(),s(c.$$.fragment)},l(t){o(e.$$.fragment,t),n=u(t),o($.$$.fragment,t),r=u(t),o(c.$$.fragment,t)},m(t,s){a(e,t,s),g(t,n,s),a($,t,s),g(t,r,s),a(c,t,s),d=!0},p(t,n){const s={};1&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const o={};1&n&&(o.$$scope={dirty:n,ctx:t}),$.$set(o);const a={};1&n&&(a.$$scope={dirty:n,ctx:t}),c.$set(a)},i(t){d||(p(e.$$.fragment,t),p($.$$.fragment,t),p(c.$$.fragment,t),d=!0)},o(t){f(e.$$.fragment,t),f($.$$.fragment,t),f(c.$$.fragment,t),d=!1},d(t){l(e,t),t&&i(n),l($,t),t&&i(r),l(c,t)}}}function Wt(t){let e,n,$,r,c,d,x,v,E,b;return n=new G({props:{$$slots:{default:[Ft]},$$scope:{ctx:t}}}),c=new G({props:{$$slots:{default:[It]},$$scope:{ctx:t}}}),x=new G({props:{$$slots:{default:[zt]},$$scope:{ctx:t}}}),E=new G({props:{$$slots:{default:[Qt]},$$scope:{ctx:t}}}),{c(){e=h("thead"),s(n.$$.fragment),$=m(),r=h("tbody"),s(c.$$.fragment),d=m(),s(x.$$.fragment),v=m(),s(E.$$.fragment)},l(t){e=w(t,"THEAD",{});var s=y(e);o(n.$$.fragment,s),s.forEach(i),$=u(t),r=w(t,"TBODY",{});var a=y(r);o(c.$$.fragment,a),d=u(a),o(x.$$.fragment,a),v=u(a),o(E.$$.fragment,a),a.forEach(i)},m(t,s){g(t,e,s),a(n,e,null),g(t,$,s),g(t,r,s),a(c,r,null),k(r,d),a(x,r,null),k(r,v),a(E,r,null),b=!0},p(t,e){const $={};1&e&&($.$$scope={dirty:e,ctx:t}),n.$set($);const s={};1&e&&(s.$$scope={dirty:e,ctx:t}),c.$set(s);const o={};1&e&&(o.$$scope={dirty:e,ctx:t}),x.$set(o);const a={};1&e&&(a.$$scope={dirty:e,ctx:t}),E.$set(a)},i(t){b||(p(n.$$.fragment,t),p(c.$$.fragment,t),p(x.$$.fragment,t),p(E.$$.fragment,t),b=!0)},o(t){f(n.$$.fragment,t),f(c.$$.fragment,t),f(x.$$.fragment,t),f(E.$$.fragment,t),b=!1},d(t){t&&i(e),l(n),t&&i($),t&&i(r),l(c),l(x),l(E)}}}function Xt(t){let e,n,$,r,c,d,x,h,w,y,v,k,E,b,O,P,C,j,B,G,F,V,I,L,U,q,W,X,_,tt,et,nt,$t,st,ot,ft;return e=new D({props:{$$slots:{default:[M]},$$scope:{ctx:t}}}),$=new T({props:{$$slots:{default:[Y]},$$scope:{ctx:t}}}),c=new N({props:{components:ne}}),x=new S({props:{$$slots:{default:[Z],source:[K],showcase:[z]},$$scope:{ctx:t}}}),w=new A({props:{id:"properties",$$slots:{default:[J]},$$scope:{ctx:t}}}),v=new R({props:{$$slots:{default:[Q]},$$scope:{ctx:t}}}),E=new H({props:{$$slots:{default:[at]},$$scope:{ctx:t}}}),O=new R({props:{$$slots:{default:[rt]},$$scope:{ctx:t}}}),C=new T({props:{$$slots:{default:[ct]},$$scope:{ctx:t}}}),B=new T({props:{$$slots:{default:[pt]},$$scope:{ctx:t}}}),F=new H({props:{$$slots:{default:[yt]},$$scope:{ctx:t}}}),I=new A({props:{id:"events",$$slots:{default:[vt]},$$scope:{ctx:t}}}),U=new H({props:{$$slots:{default:[jt]},$$scope:{ctx:t}}}),W=new A({props:{id:"slots",$$slots:{default:[St]},$$scope:{ctx:t}}}),_=new R({props:{$$slots:{default:[Bt]},$$scope:{ctx:t}}}),et=new T({props:{$$slots:{default:[Nt]},$$scope:{ctx:t}}}),$t=new A({props:{id:"scss-variables",$$slots:{default:[At]},$$scope:{ctx:t}}}),ot=new H({props:{$$slots:{default:[Wt]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=m(),s($.$$.fragment),r=m(),s(c.$$.fragment),d=m(),s(x.$$.fragment),h=m(),s(w.$$.fragment),y=m(),s(v.$$.fragment),k=m(),s(E.$$.fragment),b=m(),s(O.$$.fragment),P=m(),s(C.$$.fragment),j=m(),s(B.$$.fragment),G=m(),s(F.$$.fragment),V=m(),s(I.$$.fragment),L=m(),s(U.$$.fragment),q=m(),s(W.$$.fragment),X=m(),s(_.$$.fragment),tt=m(),s(et.$$.fragment),nt=m(),s($t.$$.fragment),st=m(),s(ot.$$.fragment)},l(t){o(e.$$.fragment,t),n=u(t),o($.$$.fragment,t),r=u(t),o(c.$$.fragment,t),d=u(t),o(x.$$.fragment,t),h=u(t),o(w.$$.fragment,t),y=u(t),o(v.$$.fragment,t),k=u(t),o(E.$$.fragment,t),b=u(t),o(O.$$.fragment,t),P=u(t),o(C.$$.fragment,t),j=u(t),o(B.$$.fragment,t),G=u(t),o(F.$$.fragment,t),V=u(t),o(I.$$.fragment,t),L=u(t),o(U.$$.fragment,t),q=u(t),o(W.$$.fragment,t),X=u(t),o(_.$$.fragment,t),tt=u(t),o(et.$$.fragment,t),nt=u(t),o($t.$$.fragment,t),st=u(t),o(ot.$$.fragment,t)},m(t,s){a(e,t,s),g(t,n,s),a($,t,s),g(t,r,s),a(c,t,s),g(t,d,s),a(x,t,s),g(t,h,s),a(w,t,s),g(t,y,s),a(v,t,s),g(t,k,s),a(E,t,s),g(t,b,s),a(O,t,s),g(t,P,s),a(C,t,s),g(t,j,s),a(B,t,s),g(t,G,s),a(F,t,s),g(t,V,s),a(I,t,s),g(t,L,s),a(U,t,s),g(t,q,s),a(W,t,s),g(t,X,s),a(_,t,s),g(t,tt,s),a(et,t,s),g(t,nt,s),a($t,t,s),g(t,st,s),a(ot,t,s),ft=!0},p(t,n){const s={};1&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const o={};1&n&&(o.$$scope={dirty:n,ctx:t}),$.$set(o);const a={};1&n&&(a.$$scope={dirty:n,ctx:t}),x.$set(a);const r={};1&n&&(r.$$scope={dirty:n,ctx:t}),w.$set(r);const c={};1&n&&(c.$$scope={dirty:n,ctx:t}),v.$set(c);const p={};1&n&&(p.$$scope={dirty:n,ctx:t}),E.$set(p);const f={};1&n&&(f.$$scope={dirty:n,ctx:t}),O.$set(f);const l={};1&n&&(l.$$scope={dirty:n,ctx:t}),C.$set(l);const m={};1&n&&(m.$$scope={dirty:n,ctx:t}),B.$set(m);const u={};1&n&&(u.$$scope={dirty:n,ctx:t}),F.$set(u);const g={};1&n&&(g.$$scope={dirty:n,ctx:t}),I.$set(g);const i={};1&n&&(i.$$scope={dirty:n,ctx:t}),U.$set(i);const d={};1&n&&(d.$$scope={dirty:n,ctx:t}),W.$set(d);const h={};1&n&&(h.$$scope={dirty:n,ctx:t}),_.$set(h);const y={};1&n&&(y.$$scope={dirty:n,ctx:t}),et.$set(y);const k={};1&n&&(k.$$scope={dirty:n,ctx:t}),$t.$set(k);const b={};1&n&&(b.$$scope={dirty:n,ctx:t}),ot.$set(b)},i(t){ft||(p(e.$$.fragment,t),p($.$$.fragment,t),p(c.$$.fragment,t),p(x.$$.fragment,t),p(w.$$.fragment,t),p(v.$$.fragment,t),p(E.$$.fragment,t),p(O.$$.fragment,t),p(C.$$.fragment,t),p(B.$$.fragment,t),p(F.$$.fragment,t),p(I.$$.fragment,t),p(U.$$.fragment,t),p(W.$$.fragment,t),p(_.$$.fragment,t),p(et.$$.fragment,t),p($t.$$.fragment,t),p(ot.$$.fragment,t),ft=!0)},o(t){f(e.$$.fragment,t),f($.$$.fragment,t),f(c.$$.fragment,t),f(x.$$.fragment,t),f(w.$$.fragment,t),f(v.$$.fragment,t),f(E.$$.fragment,t),f(O.$$.fragment,t),f(C.$$.fragment,t),f(B.$$.fragment,t),f(F.$$.fragment,t),f(I.$$.fragment,t),f(U.$$.fragment,t),f(W.$$.fragment,t),f(_.$$.fragment,t),f(et.$$.fragment,t),f($t.$$.fragment,t),f(ot.$$.fragment,t),ft=!1},d(t){l(e,t),t&&i(n),l($,t),t&&i(r),l(c,t),t&&i(d),l(x,t),t&&i(h),l(w,t),t&&i(y),l(v,t),t&&i(k),l(E,t),t&&i(b),l(O,t),t&&i(P),l(C,t),t&&i(j),l(B,t),t&&i(G),l(F,t),t&&i(V),l(I,t),t&&i(L),l(U,t),t&&i(q),l(W,t),t&&i(X),l(_,t),t&&i(tt),l(et,t),t&&i(nt),l($t,t),t&&i(st),l(ot,t)}}}function _t(t){let e,n;const m=[te];let u={$$slots:{default:[Xt]},$$scope:{ctx:t}};for(let t=0;t<m.length;t+=1)u=$(u,m[t]);return e=new b({props:u}),{c(){s(e.$$.fragment)},l(t){o(e.$$.fragment,t)},m(t,$){a(e,t,$),n=!0},p(t,[n]){const $=0&n?r(m,[c(te)]):{};1&n&&($.$$scope={dirty:n,ctx:t}),e.$set($)},i(t){n||(p(e.$$.fragment,t),n=!0)},o(t){f(e.$$.fragment,t),n=!1},d(t){l(e,t)}}}const te={name:"PopoverButton",relatedComponents:[{name:"Popover",link:"./docs/components/popover"}],shadowRaised:"0 2px 4px -1px rgba(0, 0, 0, .2), 0 3px 5px 0 rgba(0, 0, 0, .14), 0 1px 10px 0 rgba(0, 0, 0, .12);"},{name:ee,relatedComponents:ne,shadowRaised:$e}=te;export default class extends t{constructor(t){super(),e(this,t,null,_t,n,{})}}export{te as metadata};
