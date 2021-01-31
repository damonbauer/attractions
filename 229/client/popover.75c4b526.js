import{S as t,i as e,s as n,E as $,j as s,k as o,m as r,I as a,t as c,o as p,p as f,B as l,U as m,q as i,u as g,f as u,d,r as h,v as x,h as v,c as w,b as y,e as E,g as k,n as T}from"./client.e84cb235.js";import{B as O}from"./button.e1955733.js";import"./classes.ae819103.js";import"./card.7f90eb28.js";import"./label.3048b4ca.js";import{P as D,a as P}from"./popover.8c7d6a4f.js";import"./copyable-code.772f5cf7.js";import{L as b,H as C,P as j}from"./layout.c94d2714.js";import{M as A}from"./mark.a09af32a.js";import{T as B,a as R,b as S,c as N}from"./table.8e23e9d5.js";import{H as G}from"./h3.2391d076.js";import{H}from"./h2.bff7259e.js";import{S as F}from"./showcase.577a1f1a.js";import{R as I}from"./related-components.95bf44de.js";import{f as M}from"./fix-anchor-links.79fa91d5.js";function L(t){let e;return{c(){e=h("Popover")},l(t){e=x(t,"Popover")},m(t,n){u(t,e,n)},d(t){t&&d(e)}}}function V(t){let e;return{c(){e=h("Extra content revealed on hover or focus within.")},l(t){e=x(t,"Extra content revealed on hover or focus within.")},m(t,n){u(t,e,n)},d(t){t&&d(e)}}}function Y(t){let e;return{c(){e=h("hover or focus me")},l(t){e=x(t,"hover or focus me")},m(t,n){u(t,e,n)},d(t){t&&d(e)}}}function q(t){let e,n;return{c(){e=v("div"),n=h("To reveal extra content!"),this.h()},l(t){e=w(t,"DIV",{slot:!0});var $=y(e);n=x($,"To reveal extra content!"),$.forEach(d),this.h()},h(){E(e,"slot","popover-content")},m(t,$){u(t,e,$),k(e,n)},d(t){t&&d(e)}}}function U(t){let e,n,$;return e=new O({props:{$$slots:{default:[Y]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=i()},l(t){o(e.$$.fragment,t),n=g(t)},m(t,s){r(e,t,s),u(t,n,s),$=!0},p(t,n){const $={};1&n&&($.$$scope={dirty:n,ctx:t}),e.$set($)},i(t){$||(c(e.$$.fragment,t),$=!0)},o(t){p(e.$$.fragment,t),$=!1},d(t){f(e,t),t&&d(n)}}}function z(t){let e,n,$;return n=new D({props:{position:P.BOTTOM,$$slots:{default:[U],"popover-content":[q]},$$scope:{ctx:t}}}),{c(){e=v("div"),s(n.$$.fragment),this.h()},l(t){e=w(t,"DIV",{slot:!0,class:!0});var $=y(e);o(n.$$.fragment,$),$.forEach(d),this.h()},h(){E(e,"slot","showcase"),E(e,"class","padded")},m(t,s){u(t,e,s),r(n,e,null),$=!0},p(t,e){const $={};1&e&&($.$$scope={dirty:e,ctx:t}),n.$set($)},i(t){$||(c(n.$$.fragment,t),$=!0)},o(t){p(n.$$.fragment,t),$=!1},d(t){t&&d(e),f(n)}}}function J(t){let e,n;return{c(){e=v("div"),n=v("pre"),this.h()},l(t){e=w(t,"DIV",{slot:!0});var $=y(e);n=w($,"PRE",{class:!0}),y(n).forEach(d),$.forEach(d),this.h()},h(){E(n,"class","language-svelte"),E(e,"slot","source")},m(t,$){u(t,e,$),k(e,n),n.innerHTML='<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> PopoverPositions <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">\'attractions/popover\'</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Popover</span> <span class="token attr-name">position=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>PopoverPositions<span class="token punctuation">.</span><span class="token constant">BOTTOM</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span><span class="token punctuation">></span></span>hover or focus me<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>popover-content<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    To reveal extra content!\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Popover</span><span class="token punctuation">></span></span></code>'},p:T,d(t){t&&d(e)}}}function K(t){let e;return{c(){e=i()},l(t){e=g(t)},m(t,n){u(t,e,n)},p:T,i:T,o:T,d(t){t&&d(e)}}}function Q(t){let e;return{c(){e=h("Properties")},l(t){e=x(t,"Properties")},m(t,n){u(t,e,n)},d(t){t&&d(e)}}}function W(t){let e;return{c(){e=h("Style Properties")},l(t){e=x(t,"Style Properties")},m(t,n){u(t,e,n)},d(t){t&&d(e)}}}function X(t){let e;return{c(){e=h("Name")},l(t){e=x(t,"Name")},m(t,n){u(t,e,n)},d(t){t&&d(e)}}}function Z(t){let e;return{c(){e=h("Default")},l(t){e=x(t,"Default")},m(t,n){u(t,e,n)},d(t){t&&d(e)}}}function _(t){let e;return{c(){e=h("Type")},l(t){e=x(t,"Type")},m(t,n){u(t,e,n)},d(t){t&&d(e)}}}function tt(t){let e;return{c(){e=h("Description")},l(t){e=x(t,"Description")},m(t,n){u(t,e,n)},d(t){t&&d(e)}}}function et(t){let e,n,$,a,l,m,h,x;return e=new S({props:{$$slots:{default:[X]},$$scope:{ctx:t}}}),$=new S({props:{$$slots:{default:[Z]},$$scope:{ctx:t}}}),l=new S({props:{$$slots:{default:[_]},$$scope:{ctx:t}}}),h=new S({props:{$$slots:{default:[tt]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=i(),s($.$$.fragment),a=i(),s(l.$$.fragment),m=i(),s(h.$$.fragment)},l(t){o(e.$$.fragment,t),n=g(t),o($.$$.fragment,t),a=g(t),o(l.$$.fragment,t),m=g(t),o(h.$$.fragment,t)},m(t,s){r(e,t,s),u(t,n,s),r($,t,s),u(t,a,s),r(l,t,s),u(t,m,s),r(h,t,s),x=!0},p(t,n){const s={};1&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const o={};1&n&&(o.$$scope={dirty:n,ctx:t}),$.$set(o);const r={};1&n&&(r.$$scope={dirty:n,ctx:t}),l.$set(r);const a={};1&n&&(a.$$scope={dirty:n,ctx:t}),h.$set(a)},i(t){x||(c(e.$$.fragment,t),c($.$$.fragment,t),c(l.$$.fragment,t),c(h.$$.fragment,t),x=!0)},o(t){p(e.$$.fragment,t),p($.$$.fragment,t),p(l.$$.fragment,t),p(h.$$.fragment,t),x=!1},d(t){f(e,t),t&&d(n),f($,t),t&&d(a),f(l,t),t&&d(m),f(h,t)}}}function nt(t){let e,n,$;return{c(){e=v("strong"),n=v("code"),$=h("position")},l(t){e=w(t,"STRONG",{});var s=y(e);n=w(s,"CODE",{});var o=y(n);$=x(o,"position"),o.forEach(d),s.forEach(d)},m(t,s){u(t,e,s),k(e,n),k(n,$)},d(t){t&&d(e)}}}function $t(t){let e,n;return{c(){e=v("code"),n=h("PopoverPositions.TOP")},l(t){e=w(t,"CODE",{});var $=y(e);n=x($,"PopoverPositions.TOP"),$.forEach(d)},m(t,$){u(t,e,$),k(e,n)},d(t){t&&d(e)}}}function st(t){let e,n;return{c(){e=v("code"),n=h("PopoverPositions")},l(t){e=w(t,"CODE",{});var $=y(e);n=x($,"PopoverPositions"),$.forEach(d)},m(t,$){u(t,e,$),k(e,n)},d(t){t&&d(e)}}}function ot(t){let e,n,$;return n=new A({props:{$$slots:{default:[st]},$$scope:{ctx:t}}}),{c(){e=v("a"),s(n.$$.fragment),this.h()},l(t){e=w(t,"A",{href:!0});var $=y(e);o(n.$$.fragment,$),$.forEach(d),this.h()},h(){E(e,"href","#popover-positions")},m(t,s){u(t,e,s),r(n,e,null),$=!0},p(t,e){const $={};1&e&&($.$$scope={dirty:e,ctx:t}),n.$set($)},i(t){$||(c(n.$$.fragment,t),$=!0)},o(t){p(n.$$.fragment,t),$=!1},d(t){t&&d(e),f(n)}}}function rt(t){let e;return{c(){e=h("The position of the popover content relative to the triggering handle.")},l(t){e=x(t,"The position of the popover content relative to the triggering handle.")},m(t,n){u(t,e,n)},d(t){t&&d(e)}}}function at(t){let e,n,$,a,l,m,h,x;return e=new N({props:{$$slots:{default:[nt]},$$scope:{ctx:t}}}),$=new N({props:{$$slots:{default:[$t]},$$scope:{ctx:t}}}),l=new N({props:{$$slots:{default:[ot]},$$scope:{ctx:t}}}),h=new N({props:{$$slots:{default:[rt]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=i(),s($.$$.fragment),a=i(),s(l.$$.fragment),m=i(),s(h.$$.fragment)},l(t){o(e.$$.fragment,t),n=g(t),o($.$$.fragment,t),a=g(t),o(l.$$.fragment,t),m=g(t),o(h.$$.fragment,t)},m(t,s){r(e,t,s),u(t,n,s),r($,t,s),u(t,a,s),r(l,t,s),u(t,m,s),r(h,t,s),x=!0},p(t,n){const s={};1&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const o={};1&n&&(o.$$scope={dirty:n,ctx:t}),$.$set(o);const r={};1&n&&(r.$$scope={dirty:n,ctx:t}),l.$set(r);const a={};1&n&&(a.$$scope={dirty:n,ctx:t}),h.$set(a)},i(t){x||(c(e.$$.fragment,t),c($.$$.fragment,t),c(l.$$.fragment,t),c(h.$$.fragment,t),x=!0)},o(t){p(e.$$.fragment,t),p($.$$.fragment,t),p(l.$$.fragment,t),p(h.$$.fragment,t),x=!1},d(t){f(e,t),t&&d(n),f($,t),t&&d(a),f(l,t),t&&d(m),f(h,t)}}}function ct(t){let e,n,$,a,l,m;return n=new R({props:{$$slots:{default:[et]},$$scope:{ctx:t}}}),l=new R({props:{$$slots:{default:[at]},$$scope:{ctx:t}}}),{c(){e=v("thead"),s(n.$$.fragment),$=i(),a=v("tbody"),s(l.$$.fragment)},l(t){e=w(t,"THEAD",{});var s=y(e);o(n.$$.fragment,s),s.forEach(d),$=g(t),a=w(t,"TBODY",{});var r=y(a);o(l.$$.fragment,r),r.forEach(d)},m(t,s){u(t,e,s),r(n,e,null),u(t,$,s),u(t,a,s),r(l,a,null),m=!0},p(t,e){const $={};1&e&&($.$$scope={dirty:e,ctx:t}),n.$set($);const s={};1&e&&(s.$$scope={dirty:e,ctx:t}),l.$set(s)},i(t){m||(c(n.$$.fragment,t),c(l.$$.fragment,t),m=!0)},o(t){p(n.$$.fragment,t),p(l.$$.fragment,t),m=!1},d(t){t&&d(e),f(n),t&&d($),t&&d(a),f(l)}}}function pt(t){let e;return{c(){e=h("Class Properties")},l(t){e=x(t,"Class Properties")},m(t,n){u(t,e,n)},d(t){t&&d(e)}}}function ft(t){let e,n,$,s,o,r,a,c,p,f;return{c(){e=h("All "),n=v("code"),$=h("<Popover>"),s=h(" components use the "),o=v("code"),r=h(".popover-container"),a=h(" class for the main element and "),c=v("code"),p=h(".popover"),f=h(" for the popover itself.")},l(t){e=x(t,"All "),n=w(t,"CODE",{});var l=y(n);$=x(l,"<Popover>"),l.forEach(d),s=x(t," components use the "),o=w(t,"CODE",{});var m=y(o);r=x(m,".popover-container"),m.forEach(d),a=x(t," class for the main element and "),c=w(t,"CODE",{});var i=y(c);p=x(i,".popover"),i.forEach(d),f=x(t," for the popover itself.")},m(t,l){u(t,e,l),u(t,n,l),k(n,$),u(t,s,l),u(t,o,l),k(o,r),u(t,a,l),u(t,c,l),k(c,p),u(t,f,l)},d(t){t&&d(e),t&&d(n),t&&d(s),t&&d(o),t&&d(a),t&&d(c),t&&d(f)}}}function lt(t){let e;return{c(){e=h("Falsy values passed to classes will be disregarded.")},l(t){e=x(t,"Falsy values passed to classes will be disregarded.")},m(t,n){u(t,e,n)},d(t){t&&d(e)}}}function mt(t){let e;return{c(){e=h("Name")},l(t){e=x(t,"Name")},m(t,n){u(t,e,n)},d(t){t&&d(e)}}}function it(t){let e;return{c(){e=h("Default")},l(t){e=x(t,"Default")},m(t,n){u(t,e,n)},d(t){t&&d(e)}}}function gt(t){let e;return{c(){e=h("Type")},l(t){e=x(t,"Type")},m(t,n){u(t,e,n)},d(t){t&&d(e)}}}function ut(t){let e;return{c(){e=h("Description")},l(t){e=x(t,"Description")},m(t,n){u(t,e,n)},d(t){t&&d(e)}}}function dt(t){let e,n,$,a,l,m,h,x;return e=new S({props:{$$slots:{default:[mt]},$$scope:{ctx:t}}}),$=new S({props:{$$slots:{default:[it]},$$scope:{ctx:t}}}),l=new S({props:{$$slots:{default:[gt]},$$scope:{ctx:t}}}),h=new S({props:{$$slots:{default:[ut]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=i(),s($.$$.fragment),a=i(),s(l.$$.fragment),m=i(),s(h.$$.fragment)},l(t){o(e.$$.fragment,t),n=g(t),o($.$$.fragment,t),a=g(t),o(l.$$.fragment,t),m=g(t),o(h.$$.fragment,t)},m(t,s){r(e,t,s),u(t,n,s),r($,t,s),u(t,a,s),r(l,t,s),u(t,m,s),r(h,t,s),x=!0},p(t,n){const s={};1&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const o={};1&n&&(o.$$scope={dirty:n,ctx:t}),$.$set(o);const r={};1&n&&(r.$$scope={dirty:n,ctx:t}),l.$set(r);const a={};1&n&&(a.$$scope={dirty:n,ctx:t}),h.$set(a)},i(t){x||(c(e.$$.fragment,t),c($.$$.fragment,t),c(l.$$.fragment,t),c(h.$$.fragment,t),x=!0)},o(t){p(e.$$.fragment,t),p($.$$.fragment,t),p(l.$$.fragment,t),p(h.$$.fragment,t),x=!1},d(t){f(e,t),t&&d(n),f($,t),t&&d(a),f(l,t),t&&d(m),f(h,t)}}}function ht(t){let e,n,$;return{c(){e=v("strong"),n=v("code"),$=h("class")},l(t){e=w(t,"STRONG",{});var s=y(e);n=w(s,"CODE",{});var o=y(n);$=x(o,"class"),o.forEach(d),s.forEach(d)},m(t,s){u(t,e,s),k(e,n),k(n,$)},d(t){t&&d(e)}}}function xt(t){let e,n;return{c(){e=v("code"),n=h("null")},l(t){e=w(t,"CODE",{});var $=y(e);n=x($,"null"),$.forEach(d)},m(t,$){u(t,e,$),k(e,n)},d(t){t&&d(e)}}}function vt(t){let e,n;return{c(){e=v("code"),n=h("string")},l(t){e=w(t,"CODE",{});var $=y(e);n=x($,"string"),$.forEach(d)},m(t,$){u(t,e,$),k(e,n)},d(t){t&&d(e)}}}function wt(t){let e;return{c(){e=h("A class string to add to the component.")},l(t){e=x(t,"A class string to add to the component.")},m(t,n){u(t,e,n)},d(t){t&&d(e)}}}function yt(t){let e,n,$,a,l,m,h,x;return e=new N({props:{$$slots:{default:[ht]},$$scope:{ctx:t}}}),$=new N({props:{$$slots:{default:[xt]},$$scope:{ctx:t}}}),l=new N({props:{$$slots:{default:[vt]},$$scope:{ctx:t}}}),h=new N({props:{$$slots:{default:[wt]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=i(),s($.$$.fragment),a=i(),s(l.$$.fragment),m=i(),s(h.$$.fragment)},l(t){o(e.$$.fragment,t),n=g(t),o($.$$.fragment,t),a=g(t),o(l.$$.fragment,t),m=g(t),o(h.$$.fragment,t)},m(t,s){r(e,t,s),u(t,n,s),r($,t,s),u(t,a,s),r(l,t,s),u(t,m,s),r(h,t,s),x=!0},p(t,n){const s={};1&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const o={};1&n&&(o.$$scope={dirty:n,ctx:t}),$.$set(o);const r={};1&n&&(r.$$scope={dirty:n,ctx:t}),l.$set(r);const a={};1&n&&(a.$$scope={dirty:n,ctx:t}),h.$set(a)},i(t){x||(c(e.$$.fragment,t),c($.$$.fragment,t),c(l.$$.fragment,t),c(h.$$.fragment,t),x=!0)},o(t){p(e.$$.fragment,t),p($.$$.fragment,t),p(l.$$.fragment,t),p(h.$$.fragment,t),x=!1},d(t){f(e,t),t&&d(n),f($,t),t&&d(a),f(l,t),t&&d(m),f(h,t)}}}function Et(t){let e,n,$;return{c(){e=v("strong"),n=v("code"),$=h("popoverClass")},l(t){e=w(t,"STRONG",{});var s=y(e);n=w(s,"CODE",{});var o=y(n);$=x(o,"popoverClass"),o.forEach(d),s.forEach(d)},m(t,s){u(t,e,s),k(e,n),k(n,$)},d(t){t&&d(e)}}}function kt(t){let e,n;return{c(){e=v("code"),n=h("null")},l(t){e=w(t,"CODE",{});var $=y(e);n=x($,"null"),$.forEach(d)},m(t,$){u(t,e,$),k(e,n)},d(t){t&&d(e)}}}function Tt(t){let e,n;return{c(){e=v("code"),n=h("string")},l(t){e=w(t,"CODE",{});var $=y(e);n=x($,"string"),$.forEach(d)},m(t,$){u(t,e,$),k(e,n)},d(t){t&&d(e)}}}function Ot(t){let e;return{c(){e=h("A class string to add to the popover.")},l(t){e=x(t,"A class string to add to the popover.")},m(t,n){u(t,e,n)},d(t){t&&d(e)}}}function Dt(t){let e,n,$,a,l,m,h,x;return e=new N({props:{$$slots:{default:[Et]},$$scope:{ctx:t}}}),$=new N({props:{$$slots:{default:[kt]},$$scope:{ctx:t}}}),l=new N({props:{$$slots:{default:[Tt]},$$scope:{ctx:t}}}),h=new N({props:{$$slots:{default:[Ot]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=i(),s($.$$.fragment),a=i(),s(l.$$.fragment),m=i(),s(h.$$.fragment)},l(t){o(e.$$.fragment,t),n=g(t),o($.$$.fragment,t),a=g(t),o(l.$$.fragment,t),m=g(t),o(h.$$.fragment,t)},m(t,s){r(e,t,s),u(t,n,s),r($,t,s),u(t,a,s),r(l,t,s),u(t,m,s),r(h,t,s),x=!0},p(t,n){const s={};1&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const o={};1&n&&(o.$$scope={dirty:n,ctx:t}),$.$set(o);const r={};1&n&&(r.$$scope={dirty:n,ctx:t}),l.$set(r);const a={};1&n&&(a.$$scope={dirty:n,ctx:t}),h.$set(a)},i(t){x||(c(e.$$.fragment,t),c($.$$.fragment,t),c(l.$$.fragment,t),c(h.$$.fragment,t),x=!0)},o(t){p(e.$$.fragment,t),p($.$$.fragment,t),p(l.$$.fragment,t),p(h.$$.fragment,t),x=!1},d(t){f(e,t),t&&d(n),f($,t),t&&d(a),f(l,t),t&&d(m),f(h,t)}}}function Pt(t){let e,n,$,a,l,m,h,x;return n=new R({props:{$$slots:{default:[dt]},$$scope:{ctx:t}}}),l=new R({props:{$$slots:{default:[yt]},$$scope:{ctx:t}}}),h=new R({props:{$$slots:{default:[Dt]},$$scope:{ctx:t}}}),{c(){e=v("thead"),s(n.$$.fragment),$=i(),a=v("tbody"),s(l.$$.fragment),m=i(),s(h.$$.fragment)},l(t){e=w(t,"THEAD",{});var s=y(e);o(n.$$.fragment,s),s.forEach(d),$=g(t),a=w(t,"TBODY",{});var r=y(a);o(l.$$.fragment,r),m=g(r),o(h.$$.fragment,r),r.forEach(d)},m(t,s){u(t,e,s),r(n,e,null),u(t,$,s),u(t,a,s),r(l,a,null),k(a,m),r(h,a,null),x=!0},p(t,e){const $={};1&e&&($.$$scope={dirty:e,ctx:t}),n.$set($);const s={};1&e&&(s.$$scope={dirty:e,ctx:t}),l.$set(s);const o={};1&e&&(o.$$scope={dirty:e,ctx:t}),h.$set(o)},i(t){x||(c(n.$$.fragment,t),c(l.$$.fragment,t),c(h.$$.fragment,t),x=!0)},o(t){p(n.$$.fragment,t),p(l.$$.fragment,t),p(h.$$.fragment,t),x=!1},d(t){t&&d(e),f(n),t&&d($),t&&d(a),f(l),f(h)}}}function bt(t){let e;return{c(){e=h("Slots")},l(t){e=x(t,"Slots")},m(t,n){u(t,e,n)},d(t){t&&d(e)}}}function Ct(t){let e;return{c(){e=h("Default slot")},l(t){e=x(t,"Default slot")},m(t,n){u(t,e,n)},d(t){t&&d(e)}}}function jt(t){let e;return{c(){e=h("The handle – any content that will, on hover or focus, show a popover next to it.")},l(t){e=x(t,"The handle – any content that will, on hover or focus, show a popover next to it.")},m(t,n){u(t,e,n)},d(t){t&&d(e)}}}function At(t){let e,n,$;return{c(){e=v("code"),n=h("popover-content"),$=h(" slot")},l(t){e=w(t,"CODE",{});var s=y(e);n=x(s,"popover-content"),s.forEach(d),$=x(t," slot")},m(t,s){u(t,e,s),k(e,n),u(t,$,s)},d(t){t&&d(e),t&&d($)}}}function Bt(t){let e;return{c(){e=h("The content of the popover.")},l(t){e=x(t,"The content of the popover.")},m(t,n){u(t,e,n)},d(t){t&&d(e)}}}function Rt(t){let e;return{c(){e=h("Related Objects")},l(t){e=x(t,"Related Objects")},m(t,n){u(t,e,n)},d(t){t&&d(e)}}}function St(t){let e,n,$,s;return{c(){e=h("The following objects are available as named exports in "),n=v("code"),$=h("'attractions/popover'"),s=h(".")},l(t){e=x(t,"The following objects are available as named exports in "),n=w(t,"CODE",{});var o=y(n);$=x(o,"'attractions/popover'"),o.forEach(d),s=x(t,".")},m(t,o){u(t,e,o),u(t,n,o),k(n,$),u(t,s,o)},d(t){t&&d(e),t&&d(n),t&&d(s)}}}function Nt(t){let e,n;return{c(){e=v("code"),n=h("PopoverPositions")},l(t){e=w(t,"CODE",{});var $=y(e);n=x($,"PopoverPositions"),$.forEach(d)},m(t,$){u(t,e,$),k(e,n)},d(t){t&&d(e)}}}function Gt(t){let e,n,$,s;return{c(){e=h("An enum describing possible positions for the "),n=v("code"),$=h("Popover"),s=h(".")},l(t){e=x(t,"An enum describing possible positions for the "),n=w(t,"CODE",{});var o=y(n);$=x(o,"Popover"),o.forEach(d),s=x(t,".")},m(t,o){u(t,e,o),u(t,n,o),k(n,$),u(t,s,o)},d(t){t&&d(e),t&&d(n),t&&d(s)}}}function Ht(t){let e;return{c(){e=h("Field")},l(t){e=x(t,"Field")},m(t,n){u(t,e,n)},d(t){t&&d(e)}}}function Ft(t){let e;return{c(){e=h("Description")},l(t){e=x(t,"Description")},m(t,n){u(t,e,n)},d(t){t&&d(e)}}}function It(t){let e,n,$,a;return e=new S({props:{$$slots:{default:[Ht]},$$scope:{ctx:t}}}),$=new S({props:{$$slots:{default:[Ft]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=i(),s($.$$.fragment)},l(t){o(e.$$.fragment,t),n=g(t),o($.$$.fragment,t)},m(t,s){r(e,t,s),u(t,n,s),r($,t,s),a=!0},p(t,n){const s={};1&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const o={};1&n&&(o.$$scope={dirty:n,ctx:t}),$.$set(o)},i(t){a||(c(e.$$.fragment,t),c($.$$.fragment,t),a=!0)},o(t){p(e.$$.fragment,t),p($.$$.fragment,t),a=!1},d(t){f(e,t),t&&d(n),f($,t)}}}function Mt(t){let e,n,$;return{c(){e=v("strong"),n=v("code"),$=h("TOP")},l(t){e=w(t,"STRONG",{});var s=y(e);n=w(s,"CODE",{});var o=y(n);$=x(o,"TOP"),o.forEach(d),s.forEach(d)},m(t,s){u(t,e,s),k(e,n),k(n,$)},d(t){t&&d(e)}}}function Lt(t){let e;return{c(){e=h("Above the handle, centered with respect to it.")},l(t){e=x(t,"Above the handle, centered with respect to it.")},m(t,n){u(t,e,n)},d(t){t&&d(e)}}}function Vt(t){let e,n,$,a;return e=new N({props:{$$slots:{default:[Mt]},$$scope:{ctx:t}}}),$=new N({props:{$$slots:{default:[Lt]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=i(),s($.$$.fragment)},l(t){o(e.$$.fragment,t),n=g(t),o($.$$.fragment,t)},m(t,s){r(e,t,s),u(t,n,s),r($,t,s),a=!0},p(t,n){const s={};1&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const o={};1&n&&(o.$$scope={dirty:n,ctx:t}),$.$set(o)},i(t){a||(c(e.$$.fragment,t),c($.$$.fragment,t),a=!0)},o(t){p(e.$$.fragment,t),p($.$$.fragment,t),a=!1},d(t){f(e,t),t&&d(n),f($,t)}}}function Yt(t){let e,n,$;return{c(){e=v("strong"),n=v("code"),$=h("BOTTOM")},l(t){e=w(t,"STRONG",{});var s=y(e);n=w(s,"CODE",{});var o=y(n);$=x(o,"BOTTOM"),o.forEach(d),s.forEach(d)},m(t,s){u(t,e,s),k(e,n),k(n,$)},d(t){t&&d(e)}}}function qt(t){let e;return{c(){e=h("Below the handle, centered with respect to it.")},l(t){e=x(t,"Below the handle, centered with respect to it.")},m(t,n){u(t,e,n)},d(t){t&&d(e)}}}function Ut(t){let e,n,$,a;return e=new N({props:{$$slots:{default:[Yt]},$$scope:{ctx:t}}}),$=new N({props:{$$slots:{default:[qt]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=i(),s($.$$.fragment)},l(t){o(e.$$.fragment,t),n=g(t),o($.$$.fragment,t)},m(t,s){r(e,t,s),u(t,n,s),r($,t,s),a=!0},p(t,n){const s={};1&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const o={};1&n&&(o.$$scope={dirty:n,ctx:t}),$.$set(o)},i(t){a||(c(e.$$.fragment,t),c($.$$.fragment,t),a=!0)},o(t){p(e.$$.fragment,t),p($.$$.fragment,t),a=!1},d(t){f(e,t),t&&d(n),f($,t)}}}function zt(t){let e,n,$;return{c(){e=v("strong"),n=v("code"),$=h("LEFT")},l(t){e=w(t,"STRONG",{});var s=y(e);n=w(s,"CODE",{});var o=y(n);$=x(o,"LEFT"),o.forEach(d),s.forEach(d)},m(t,s){u(t,e,s),k(e,n),k(n,$)},d(t){t&&d(e)}}}function Jt(t){let e;return{c(){e=h("To the left of the handle, centered with respect to it.")},l(t){e=x(t,"To the left of the handle, centered with respect to it.")},m(t,n){u(t,e,n)},d(t){t&&d(e)}}}function Kt(t){let e,n,$,a;return e=new N({props:{$$slots:{default:[zt]},$$scope:{ctx:t}}}),$=new N({props:{$$slots:{default:[Jt]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=i(),s($.$$.fragment)},l(t){o(e.$$.fragment,t),n=g(t),o($.$$.fragment,t)},m(t,s){r(e,t,s),u(t,n,s),r($,t,s),a=!0},p(t,n){const s={};1&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const o={};1&n&&(o.$$scope={dirty:n,ctx:t}),$.$set(o)},i(t){a||(c(e.$$.fragment,t),c($.$$.fragment,t),a=!0)},o(t){p(e.$$.fragment,t),p($.$$.fragment,t),a=!1},d(t){f(e,t),t&&d(n),f($,t)}}}function Qt(t){let e,n,$;return{c(){e=v("strong"),n=v("code"),$=h("RIGHT")},l(t){e=w(t,"STRONG",{});var s=y(e);n=w(s,"CODE",{});var o=y(n);$=x(o,"RIGHT"),o.forEach(d),s.forEach(d)},m(t,s){u(t,e,s),k(e,n),k(n,$)},d(t){t&&d(e)}}}function Wt(t){let e;return{c(){e=h("To the right of the handle, centered with respect to it.")},l(t){e=x(t,"To the right of the handle, centered with respect to it.")},m(t,n){u(t,e,n)},d(t){t&&d(e)}}}function Xt(t){let e,n,$,a;return e=new N({props:{$$slots:{default:[Qt]},$$scope:{ctx:t}}}),$=new N({props:{$$slots:{default:[Wt]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=i(),s($.$$.fragment)},l(t){o(e.$$.fragment,t),n=g(t),o($.$$.fragment,t)},m(t,s){r(e,t,s),u(t,n,s),r($,t,s),a=!0},p(t,n){const s={};1&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const o={};1&n&&(o.$$scope={dirty:n,ctx:t}),$.$set(o)},i(t){a||(c(e.$$.fragment,t),c($.$$.fragment,t),a=!0)},o(t){p(e.$$.fragment,t),p($.$$.fragment,t),a=!1},d(t){f(e,t),t&&d(n),f($,t)}}}function Zt(t){let e,n,$,a,l,m,h,x,E,T,O,D;return n=new R({props:{$$slots:{default:[It]},$$scope:{ctx:t}}}),l=new R({props:{$$slots:{default:[Vt]},$$scope:{ctx:t}}}),h=new R({props:{$$slots:{default:[Ut]},$$scope:{ctx:t}}}),E=new R({props:{$$slots:{default:[Kt]},$$scope:{ctx:t}}}),O=new R({props:{$$slots:{default:[Xt]},$$scope:{ctx:t}}}),{c(){e=v("thead"),s(n.$$.fragment),$=i(),a=v("tbody"),s(l.$$.fragment),m=i(),s(h.$$.fragment),x=i(),s(E.$$.fragment),T=i(),s(O.$$.fragment)},l(t){e=w(t,"THEAD",{});var s=y(e);o(n.$$.fragment,s),s.forEach(d),$=g(t),a=w(t,"TBODY",{});var r=y(a);o(l.$$.fragment,r),m=g(r),o(h.$$.fragment,r),x=g(r),o(E.$$.fragment,r),T=g(r),o(O.$$.fragment,r),r.forEach(d)},m(t,s){u(t,e,s),r(n,e,null),u(t,$,s),u(t,a,s),r(l,a,null),k(a,m),r(h,a,null),k(a,x),r(E,a,null),k(a,T),r(O,a,null),D=!0},p(t,e){const $={};1&e&&($.$$scope={dirty:e,ctx:t}),n.$set($);const s={};1&e&&(s.$$scope={dirty:e,ctx:t}),l.$set(s);const o={};1&e&&(o.$$scope={dirty:e,ctx:t}),h.$set(o);const r={};1&e&&(r.$$scope={dirty:e,ctx:t}),E.$set(r);const a={};1&e&&(a.$$scope={dirty:e,ctx:t}),O.$set(a)},i(t){D||(c(n.$$.fragment,t),c(l.$$.fragment,t),c(h.$$.fragment,t),c(E.$$.fragment,t),c(O.$$.fragment,t),D=!0)},o(t){p(n.$$.fragment,t),p(l.$$.fragment,t),p(h.$$.fragment,t),p(E.$$.fragment,t),p(O.$$.fragment,t),D=!1},d(t){t&&d(e),f(n),t&&d($),t&&d(a),f(l),f(h),f(E),f(O)}}}function _t(t){let e,n,$,a,l,m,h,x,v,w,y,E,k,T,O,D,P,b,A,R,S,N,M,Y,q,U,X,Z,_,tt,et,nt,$t,st,ot,rt,at,mt,it,gt,ut,dt;return e=new C({props:{$$slots:{default:[L]},$$scope:{ctx:t}}}),$=new j({props:{$$slots:{default:[V]},$$scope:{ctx:t}}}),l=new I({props:{components:$e}}),h=new F({props:{$$slots:{default:[K],source:[J],showcase:[z]},$$scope:{ctx:t}}}),v=new H({props:{id:"properties",$$slots:{default:[Q]},$$scope:{ctx:t}}}),y=new G({props:{$$slots:{default:[W]},$$scope:{ctx:t}}}),k=new B({props:{$$slots:{default:[ct]},$$scope:{ctx:t}}}),O=new G({props:{$$slots:{default:[pt]},$$scope:{ctx:t}}}),P=new j({props:{$$slots:{default:[ft]},$$scope:{ctx:t}}}),A=new j({props:{$$slots:{default:[lt]},$$scope:{ctx:t}}}),S=new B({props:{$$slots:{default:[Pt]},$$scope:{ctx:t}}}),M=new H({props:{id:"slots",$$slots:{default:[bt]},$$scope:{ctx:t}}}),q=new G({props:{$$slots:{default:[Ct]},$$scope:{ctx:t}}}),X=new j({props:{$$slots:{default:[jt]},$$scope:{ctx:t}}}),_=new G({props:{$$slots:{default:[At]},$$scope:{ctx:t}}}),et=new j({props:{$$slots:{default:[Bt]},$$scope:{ctx:t}}}),$t=new H({props:{id:"related-objects",$$slots:{default:[Rt]},$$scope:{ctx:t}}}),ot=new j({props:{$$slots:{default:[St]},$$scope:{ctx:t}}}),at=new G({props:{id:"popover-positions",$$slots:{default:[Nt]},$$scope:{ctx:t}}}),it=new j({props:{$$slots:{default:[Gt]},$$scope:{ctx:t}}}),ut=new B({props:{$$slots:{default:[Zt]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=i(),s($.$$.fragment),a=i(),s(l.$$.fragment),m=i(),s(h.$$.fragment),x=i(),s(v.$$.fragment),w=i(),s(y.$$.fragment),E=i(),s(k.$$.fragment),T=i(),s(O.$$.fragment),D=i(),s(P.$$.fragment),b=i(),s(A.$$.fragment),R=i(),s(S.$$.fragment),N=i(),s(M.$$.fragment),Y=i(),s(q.$$.fragment),U=i(),s(X.$$.fragment),Z=i(),s(_.$$.fragment),tt=i(),s(et.$$.fragment),nt=i(),s($t.$$.fragment),st=i(),s(ot.$$.fragment),rt=i(),s(at.$$.fragment),mt=i(),s(it.$$.fragment),gt=i(),s(ut.$$.fragment)},l(t){o(e.$$.fragment,t),n=g(t),o($.$$.fragment,t),a=g(t),o(l.$$.fragment,t),m=g(t),o(h.$$.fragment,t),x=g(t),o(v.$$.fragment,t),w=g(t),o(y.$$.fragment,t),E=g(t),o(k.$$.fragment,t),T=g(t),o(O.$$.fragment,t),D=g(t),o(P.$$.fragment,t),b=g(t),o(A.$$.fragment,t),R=g(t),o(S.$$.fragment,t),N=g(t),o(M.$$.fragment,t),Y=g(t),o(q.$$.fragment,t),U=g(t),o(X.$$.fragment,t),Z=g(t),o(_.$$.fragment,t),tt=g(t),o(et.$$.fragment,t),nt=g(t),o($t.$$.fragment,t),st=g(t),o(ot.$$.fragment,t),rt=g(t),o(at.$$.fragment,t),mt=g(t),o(it.$$.fragment,t),gt=g(t),o(ut.$$.fragment,t)},m(t,s){r(e,t,s),u(t,n,s),r($,t,s),u(t,a,s),r(l,t,s),u(t,m,s),r(h,t,s),u(t,x,s),r(v,t,s),u(t,w,s),r(y,t,s),u(t,E,s),r(k,t,s),u(t,T,s),r(O,t,s),u(t,D,s),r(P,t,s),u(t,b,s),r(A,t,s),u(t,R,s),r(S,t,s),u(t,N,s),r(M,t,s),u(t,Y,s),r(q,t,s),u(t,U,s),r(X,t,s),u(t,Z,s),r(_,t,s),u(t,tt,s),r(et,t,s),u(t,nt,s),r($t,t,s),u(t,st,s),r(ot,t,s),u(t,rt,s),r(at,t,s),u(t,mt,s),r(it,t,s),u(t,gt,s),r(ut,t,s),dt=!0},p(t,n){const s={};1&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const o={};1&n&&(o.$$scope={dirty:n,ctx:t}),$.$set(o);const r={};1&n&&(r.$$scope={dirty:n,ctx:t}),h.$set(r);const a={};1&n&&(a.$$scope={dirty:n,ctx:t}),v.$set(a);const c={};1&n&&(c.$$scope={dirty:n,ctx:t}),y.$set(c);const p={};1&n&&(p.$$scope={dirty:n,ctx:t}),k.$set(p);const f={};1&n&&(f.$$scope={dirty:n,ctx:t}),O.$set(f);const l={};1&n&&(l.$$scope={dirty:n,ctx:t}),P.$set(l);const m={};1&n&&(m.$$scope={dirty:n,ctx:t}),A.$set(m);const i={};1&n&&(i.$$scope={dirty:n,ctx:t}),S.$set(i);const g={};1&n&&(g.$$scope={dirty:n,ctx:t}),M.$set(g);const u={};1&n&&(u.$$scope={dirty:n,ctx:t}),q.$set(u);const d={};1&n&&(d.$$scope={dirty:n,ctx:t}),X.$set(d);const x={};1&n&&(x.$$scope={dirty:n,ctx:t}),_.$set(x);const w={};1&n&&(w.$$scope={dirty:n,ctx:t}),et.$set(w);const E={};1&n&&(E.$$scope={dirty:n,ctx:t}),$t.$set(E);const T={};1&n&&(T.$$scope={dirty:n,ctx:t}),ot.$set(T);const D={};1&n&&(D.$$scope={dirty:n,ctx:t}),at.$set(D);const b={};1&n&&(b.$$scope={dirty:n,ctx:t}),it.$set(b);const C={};1&n&&(C.$$scope={dirty:n,ctx:t}),ut.$set(C)},i(t){dt||(c(e.$$.fragment,t),c($.$$.fragment,t),c(l.$$.fragment,t),c(h.$$.fragment,t),c(v.$$.fragment,t),c(y.$$.fragment,t),c(k.$$.fragment,t),c(O.$$.fragment,t),c(P.$$.fragment,t),c(A.$$.fragment,t),c(S.$$.fragment,t),c(M.$$.fragment,t),c(q.$$.fragment,t),c(X.$$.fragment,t),c(_.$$.fragment,t),c(et.$$.fragment,t),c($t.$$.fragment,t),c(ot.$$.fragment,t),c(at.$$.fragment,t),c(it.$$.fragment,t),c(ut.$$.fragment,t),dt=!0)},o(t){p(e.$$.fragment,t),p($.$$.fragment,t),p(l.$$.fragment,t),p(h.$$.fragment,t),p(v.$$.fragment,t),p(y.$$.fragment,t),p(k.$$.fragment,t),p(O.$$.fragment,t),p(P.$$.fragment,t),p(A.$$.fragment,t),p(S.$$.fragment,t),p(M.$$.fragment,t),p(q.$$.fragment,t),p(X.$$.fragment,t),p(_.$$.fragment,t),p(et.$$.fragment,t),p($t.$$.fragment,t),p(ot.$$.fragment,t),p(at.$$.fragment,t),p(it.$$.fragment,t),p(ut.$$.fragment,t),dt=!1},d(t){f(e,t),t&&d(n),f($,t),t&&d(a),f(l,t),t&&d(m),f(h,t),t&&d(x),f(v,t),t&&d(w),f(y,t),t&&d(E),f(k,t),t&&d(T),f(O,t),t&&d(D),f(P,t),t&&d(b),f(A,t),t&&d(R),f(S,t),t&&d(N),f(M,t),t&&d(Y),f(q,t),t&&d(U),f(X,t),t&&d(Z),f(_,t),t&&d(tt),f(et,t),t&&d(nt),f($t,t),t&&d(st),f(ot,t),t&&d(rt),f(at,t),t&&d(mt),f(it,t),t&&d(gt),f(ut,t)}}}function te(t){let e,n;const l=[ee];let i={$$slots:{default:[_t]},$$scope:{ctx:t}};for(let t=0;t<l.length;t+=1)i=$(i,l[t]);return e=new b({props:i}),{c(){s(e.$$.fragment)},l(t){o(e.$$.fragment,t)},m(t,$){r(e,t,$),n=!0},p(t,[n]){const $=0&n?a(l,[m(ee)]):{};1&n&&($.$$scope={dirty:n,ctx:t}),e.$set($)},i(t){n||(c(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){f(e,t)}}}const ee={name:"Popover",relatedComponents:[{name:"PopoverButton",link:"./docs/components/popover-button"}]},{name:ne,relatedComponents:$e}=ee;function se(t){return l(M),[]}export default class extends t{constructor(t){super(),e(this,t,se,te,n,{})}}export{ee as metadata};
