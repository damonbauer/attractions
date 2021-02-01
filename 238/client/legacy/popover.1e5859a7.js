import{S as t,i as e,s as n,L as $,p as s,q as o,r,T as a,Z as c,u as p,v as f,w as l,G as m,x as i,z as g,k as d,h as u,y as h,A as x,o as v,f as w,g as y,j as E,l as k,n as T}from"./client.44f80013.js";import{L as O,H as D,P}from"./layout.f84f7e2b.js";import{B as b}from"./button.e93db9cb.js";import{P as C,a as j}from"./popover.4cf569f4.js";import{S as A}from"./showcase.2b742bf1.js";import{R}from"./related-components.601a0414.js";import{f as B}from"./fix-anchor-links.7d2d1154.js";import{H as S}from"./h2.ac1be0c5.js";import{H as G}from"./h3.61c9dd07.js";import{T as N,a as H,b as F,c as M}from"./table.317e77b5.js";import"./classes.7d86155b.js";import"./label.420a374b.js";import"./copyable-code.d8f9eed7.js";import"./asyncToGenerator.756dab92.js";import"./card.512efdd5.js";function I(t){let e;return{c(){e=h("Popover")},l(t){e=x(t,"Popover")},m(t,n){d(t,e,n)},d(t){t&&u(e)}}}function L(t){let e;return{c(){e=h("Extra content revealed on hover or focus within.")},l(t){e=x(t,"Extra content revealed on hover or focus within.")},m(t,n){d(t,e,n)},d(t){t&&u(e)}}}function V(t){let e;return{c(){e=h("hover or focus me")},l(t){e=x(t,"hover or focus me")},m(t,n){d(t,e,n)},d(t){t&&u(e)}}}function Y(t){let e,n;return{c(){e=v("div"),n=h("To reveal extra content!"),this.h()},l(t){e=w(t,"DIV",{slot:!0});var $=y(e);n=x($,"To reveal extra content!"),$.forEach(u),this.h()},h(){E(e,"slot","popover-content")},m(t,$){d(t,e,$),k(e,n)},d(t){t&&u(e)}}}function q(t){let e,n,$;return e=new b({props:{$$slots:{default:[V]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=i()},l(t){o(e.$$.fragment,t),n=g(t)},m(t,s){r(e,t,s),d(t,n,s),$=!0},p(t,n){const $={};1&n&&($.$$scope={dirty:n,ctx:t}),e.$set($)},i(t){$||(p(e.$$.fragment,t),$=!0)},o(t){f(e.$$.fragment,t),$=!1},d(t){l(e,t),t&&u(n)}}}function z(t){let e,n,$;return n=new C({props:{position:j.BOTTOM,$$slots:{default:[q],"popover-content":[Y]},$$scope:{ctx:t}}}),{c(){e=v("div"),s(n.$$.fragment),this.h()},l(t){e=w(t,"DIV",{slot:!0,class:!0});var $=y(e);o(n.$$.fragment,$),$.forEach(u),this.h()},h(){E(e,"slot","showcase"),E(e,"class","padded")},m(t,s){d(t,e,s),r(n,e,null),$=!0},p(t,e){const $={};1&e&&($.$$scope={dirty:e,ctx:t}),n.$set($)},i(t){$||(p(n.$$.fragment,t),$=!0)},o(t){f(n.$$.fragment,t),$=!1},d(t){t&&u(e),l(n)}}}function K(t){let e,n;return{c(){e=v("div"),n=v("pre"),this.h()},l(t){e=w(t,"DIV",{slot:!0});var $=y(e);n=w($,"PRE",{class:!0}),y(n).forEach(u),$.forEach(u),this.h()},h(){E(n,"class","language-svelte"),E(e,"slot","source")},m(t,$){d(t,e,$),k(e,n),n.innerHTML='<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> PopoverPositions <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">\'attractions/popover\'</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Popover</span> <span class="token attr-name">position=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>PopoverPositions<span class="token punctuation">.</span><span class="token constant">BOTTOM</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span><span class="token punctuation">></span></span>hover or focus me<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>popover-content<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    To reveal extra content!\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Popover</span><span class="token punctuation">></span></span></code>'},p:T,d(t){t&&u(e)}}}function Z(t){let e;return{c(){e=i()},l(t){e=g(t)},m(t,n){d(t,e,n)},p:T,i:T,o:T,d(t){t&&u(e)}}}function J(t){let e;return{c(){e=h("Properties")},l(t){e=x(t,"Properties")},m(t,n){d(t,e,n)},d(t){t&&u(e)}}}function Q(t){let e;return{c(){e=h("Style Properties")},l(t){e=x(t,"Style Properties")},m(t,n){d(t,e,n)},d(t){t&&u(e)}}}function U(t){let e;return{c(){e=h("Name")},l(t){e=x(t,"Name")},m(t,n){d(t,e,n)},d(t){t&&u(e)}}}function W(t){let e;return{c(){e=h("Default")},l(t){e=x(t,"Default")},m(t,n){d(t,e,n)},d(t){t&&u(e)}}}function X(t){let e;return{c(){e=h("Type")},l(t){e=x(t,"Type")},m(t,n){d(t,e,n)},d(t){t&&u(e)}}}function _(t){let e;return{c(){e=h("Description")},l(t){e=x(t,"Description")},m(t,n){d(t,e,n)},d(t){t&&u(e)}}}function tt(t){let e,n,$,a,c,m,h,x;return e=new F({props:{$$slots:{default:[U]},$$scope:{ctx:t}}}),$=new F({props:{$$slots:{default:[W]},$$scope:{ctx:t}}}),c=new F({props:{$$slots:{default:[X]},$$scope:{ctx:t}}}),h=new F({props:{$$slots:{default:[_]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=i(),s($.$$.fragment),a=i(),s(c.$$.fragment),m=i(),s(h.$$.fragment)},l(t){o(e.$$.fragment,t),n=g(t),o($.$$.fragment,t),a=g(t),o(c.$$.fragment,t),m=g(t),o(h.$$.fragment,t)},m(t,s){r(e,t,s),d(t,n,s),r($,t,s),d(t,a,s),r(c,t,s),d(t,m,s),r(h,t,s),x=!0},p(t,n){const s={};1&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const o={};1&n&&(o.$$scope={dirty:n,ctx:t}),$.$set(o);const r={};1&n&&(r.$$scope={dirty:n,ctx:t}),c.$set(r);const a={};1&n&&(a.$$scope={dirty:n,ctx:t}),h.$set(a)},i(t){x||(p(e.$$.fragment,t),p($.$$.fragment,t),p(c.$$.fragment,t),p(h.$$.fragment,t),x=!0)},o(t){f(e.$$.fragment,t),f($.$$.fragment,t),f(c.$$.fragment,t),f(h.$$.fragment,t),x=!1},d(t){l(e,t),t&&u(n),l($,t),t&&u(a),l(c,t),t&&u(m),l(h,t)}}}function et(t){let e,n,$;return{c(){e=v("strong"),n=v("code"),$=h("position")},l(t){e=w(t,"STRONG",{});var s=y(e);n=w(s,"CODE",{});var o=y(n);$=x(o,"position"),o.forEach(u),s.forEach(u)},m(t,s){d(t,e,s),k(e,n),k(n,$)},d(t){t&&u(e)}}}function nt(t){let e,n;return{c(){e=v("code"),n=h("PopoverPositions.TOP")},l(t){e=w(t,"CODE",{});var $=y(e);n=x($,"PopoverPositions.TOP"),$.forEach(u)},m(t,$){d(t,e,$),k(e,n)},d(t){t&&u(e)}}}function $t(t){let e,n,$,s;return{c(){e=v("a"),n=v("mark"),$=v("code"),s=h("PopoverPositions"),this.h()},l(t){e=w(t,"A",{href:!0});var o=y(e);n=w(o,"MARK",{});var r=y(n);$=w(r,"CODE",{});var a=y($);s=x(a,"PopoverPositions"),a.forEach(u),r.forEach(u),o.forEach(u),this.h()},h(){E(e,"href","#popover-positions")},m(t,o){d(t,e,o),k(e,n),k(n,$),k($,s)},d(t){t&&u(e)}}}function st(t){let e;return{c(){e=h("The position of the popover content relative to the triggering handle.")},l(t){e=x(t,"The position of the popover content relative to the triggering handle.")},m(t,n){d(t,e,n)},d(t){t&&u(e)}}}function ot(t){let e,n,$,a,c,m,h,x;return e=new M({props:{$$slots:{default:[et]},$$scope:{ctx:t}}}),$=new M({props:{$$slots:{default:[nt]},$$scope:{ctx:t}}}),c=new M({props:{$$slots:{default:[$t]},$$scope:{ctx:t}}}),h=new M({props:{$$slots:{default:[st]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=i(),s($.$$.fragment),a=i(),s(c.$$.fragment),m=i(),s(h.$$.fragment)},l(t){o(e.$$.fragment,t),n=g(t),o($.$$.fragment,t),a=g(t),o(c.$$.fragment,t),m=g(t),o(h.$$.fragment,t)},m(t,s){r(e,t,s),d(t,n,s),r($,t,s),d(t,a,s),r(c,t,s),d(t,m,s),r(h,t,s),x=!0},p(t,n){const s={};1&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const o={};1&n&&(o.$$scope={dirty:n,ctx:t}),$.$set(o);const r={};1&n&&(r.$$scope={dirty:n,ctx:t}),c.$set(r);const a={};1&n&&(a.$$scope={dirty:n,ctx:t}),h.$set(a)},i(t){x||(p(e.$$.fragment,t),p($.$$.fragment,t),p(c.$$.fragment,t),p(h.$$.fragment,t),x=!0)},o(t){f(e.$$.fragment,t),f($.$$.fragment,t),f(c.$$.fragment,t),f(h.$$.fragment,t),x=!1},d(t){l(e,t),t&&u(n),l($,t),t&&u(a),l(c,t),t&&u(m),l(h,t)}}}function rt(t){let e,n,$,a,c,m;return n=new H({props:{$$slots:{default:[tt]},$$scope:{ctx:t}}}),c=new H({props:{$$slots:{default:[ot]},$$scope:{ctx:t}}}),{c(){e=v("thead"),s(n.$$.fragment),$=i(),a=v("tbody"),s(c.$$.fragment)},l(t){e=w(t,"THEAD",{});var s=y(e);o(n.$$.fragment,s),s.forEach(u),$=g(t),a=w(t,"TBODY",{});var r=y(a);o(c.$$.fragment,r),r.forEach(u)},m(t,s){d(t,e,s),r(n,e,null),d(t,$,s),d(t,a,s),r(c,a,null),m=!0},p(t,e){const $={};1&e&&($.$$scope={dirty:e,ctx:t}),n.$set($);const s={};1&e&&(s.$$scope={dirty:e,ctx:t}),c.$set(s)},i(t){m||(p(n.$$.fragment,t),p(c.$$.fragment,t),m=!0)},o(t){f(n.$$.fragment,t),f(c.$$.fragment,t),m=!1},d(t){t&&u(e),l(n),t&&u($),t&&u(a),l(c)}}}function at(t){let e;return{c(){e=h("Class Properties")},l(t){e=x(t,"Class Properties")},m(t,n){d(t,e,n)},d(t){t&&u(e)}}}function ct(t){let e,n,$,s,o,r,a,c,p,f;return{c(){e=h("All "),n=v("code"),$=h("<Popover>"),s=h(" components use the "),o=v("code"),r=h(".popover-container"),a=h(" class for the main element and "),c=v("code"),p=h(".popover"),f=h(" for the popover itself.")},l(t){e=x(t,"All "),n=w(t,"CODE",{});var l=y(n);$=x(l,"<Popover>"),l.forEach(u),s=x(t," components use the "),o=w(t,"CODE",{});var m=y(o);r=x(m,".popover-container"),m.forEach(u),a=x(t," class for the main element and "),c=w(t,"CODE",{});var i=y(c);p=x(i,".popover"),i.forEach(u),f=x(t," for the popover itself.")},m(t,l){d(t,e,l),d(t,n,l),k(n,$),d(t,s,l),d(t,o,l),k(o,r),d(t,a,l),d(t,c,l),k(c,p),d(t,f,l)},d(t){t&&u(e),t&&u(n),t&&u(s),t&&u(o),t&&u(a),t&&u(c),t&&u(f)}}}function pt(t){let e;return{c(){e=h("Falsy values passed to classes will be disregarded.")},l(t){e=x(t,"Falsy values passed to classes will be disregarded.")},m(t,n){d(t,e,n)},d(t){t&&u(e)}}}function ft(t){let e;return{c(){e=h("Name")},l(t){e=x(t,"Name")},m(t,n){d(t,e,n)},d(t){t&&u(e)}}}function lt(t){let e;return{c(){e=h("Default")},l(t){e=x(t,"Default")},m(t,n){d(t,e,n)},d(t){t&&u(e)}}}function mt(t){let e;return{c(){e=h("Type")},l(t){e=x(t,"Type")},m(t,n){d(t,e,n)},d(t){t&&u(e)}}}function it(t){let e;return{c(){e=h("Description")},l(t){e=x(t,"Description")},m(t,n){d(t,e,n)},d(t){t&&u(e)}}}function gt(t){let e,n,$,a,c,m,h,x;return e=new F({props:{$$slots:{default:[ft]},$$scope:{ctx:t}}}),$=new F({props:{$$slots:{default:[lt]},$$scope:{ctx:t}}}),c=new F({props:{$$slots:{default:[mt]},$$scope:{ctx:t}}}),h=new F({props:{$$slots:{default:[it]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=i(),s($.$$.fragment),a=i(),s(c.$$.fragment),m=i(),s(h.$$.fragment)},l(t){o(e.$$.fragment,t),n=g(t),o($.$$.fragment,t),a=g(t),o(c.$$.fragment,t),m=g(t),o(h.$$.fragment,t)},m(t,s){r(e,t,s),d(t,n,s),r($,t,s),d(t,a,s),r(c,t,s),d(t,m,s),r(h,t,s),x=!0},p(t,n){const s={};1&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const o={};1&n&&(o.$$scope={dirty:n,ctx:t}),$.$set(o);const r={};1&n&&(r.$$scope={dirty:n,ctx:t}),c.$set(r);const a={};1&n&&(a.$$scope={dirty:n,ctx:t}),h.$set(a)},i(t){x||(p(e.$$.fragment,t),p($.$$.fragment,t),p(c.$$.fragment,t),p(h.$$.fragment,t),x=!0)},o(t){f(e.$$.fragment,t),f($.$$.fragment,t),f(c.$$.fragment,t),f(h.$$.fragment,t),x=!1},d(t){l(e,t),t&&u(n),l($,t),t&&u(a),l(c,t),t&&u(m),l(h,t)}}}function dt(t){let e,n,$;return{c(){e=v("strong"),n=v("code"),$=h("class")},l(t){e=w(t,"STRONG",{});var s=y(e);n=w(s,"CODE",{});var o=y(n);$=x(o,"class"),o.forEach(u),s.forEach(u)},m(t,s){d(t,e,s),k(e,n),k(n,$)},d(t){t&&u(e)}}}function ut(t){let e,n;return{c(){e=v("code"),n=h("null")},l(t){e=w(t,"CODE",{});var $=y(e);n=x($,"null"),$.forEach(u)},m(t,$){d(t,e,$),k(e,n)},d(t){t&&u(e)}}}function ht(t){let e,n;return{c(){e=v("code"),n=h("string")},l(t){e=w(t,"CODE",{});var $=y(e);n=x($,"string"),$.forEach(u)},m(t,$){d(t,e,$),k(e,n)},d(t){t&&u(e)}}}function xt(t){let e;return{c(){e=h("A class string to add to the component.")},l(t){e=x(t,"A class string to add to the component.")},m(t,n){d(t,e,n)},d(t){t&&u(e)}}}function vt(t){let e,n,$,a,c,m,h,x;return e=new M({props:{$$slots:{default:[dt]},$$scope:{ctx:t}}}),$=new M({props:{$$slots:{default:[ut]},$$scope:{ctx:t}}}),c=new M({props:{$$slots:{default:[ht]},$$scope:{ctx:t}}}),h=new M({props:{$$slots:{default:[xt]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=i(),s($.$$.fragment),a=i(),s(c.$$.fragment),m=i(),s(h.$$.fragment)},l(t){o(e.$$.fragment,t),n=g(t),o($.$$.fragment,t),a=g(t),o(c.$$.fragment,t),m=g(t),o(h.$$.fragment,t)},m(t,s){r(e,t,s),d(t,n,s),r($,t,s),d(t,a,s),r(c,t,s),d(t,m,s),r(h,t,s),x=!0},p(t,n){const s={};1&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const o={};1&n&&(o.$$scope={dirty:n,ctx:t}),$.$set(o);const r={};1&n&&(r.$$scope={dirty:n,ctx:t}),c.$set(r);const a={};1&n&&(a.$$scope={dirty:n,ctx:t}),h.$set(a)},i(t){x||(p(e.$$.fragment,t),p($.$$.fragment,t),p(c.$$.fragment,t),p(h.$$.fragment,t),x=!0)},o(t){f(e.$$.fragment,t),f($.$$.fragment,t),f(c.$$.fragment,t),f(h.$$.fragment,t),x=!1},d(t){l(e,t),t&&u(n),l($,t),t&&u(a),l(c,t),t&&u(m),l(h,t)}}}function wt(t){let e,n,$;return{c(){e=v("strong"),n=v("code"),$=h("popoverClass")},l(t){e=w(t,"STRONG",{});var s=y(e);n=w(s,"CODE",{});var o=y(n);$=x(o,"popoverClass"),o.forEach(u),s.forEach(u)},m(t,s){d(t,e,s),k(e,n),k(n,$)},d(t){t&&u(e)}}}function yt(t){let e,n;return{c(){e=v("code"),n=h("null")},l(t){e=w(t,"CODE",{});var $=y(e);n=x($,"null"),$.forEach(u)},m(t,$){d(t,e,$),k(e,n)},d(t){t&&u(e)}}}function Et(t){let e,n;return{c(){e=v("code"),n=h("string")},l(t){e=w(t,"CODE",{});var $=y(e);n=x($,"string"),$.forEach(u)},m(t,$){d(t,e,$),k(e,n)},d(t){t&&u(e)}}}function kt(t){let e;return{c(){e=h("A class string to add to the popover.")},l(t){e=x(t,"A class string to add to the popover.")},m(t,n){d(t,e,n)},d(t){t&&u(e)}}}function Tt(t){let e,n,$,a,c,m,h,x;return e=new M({props:{$$slots:{default:[wt]},$$scope:{ctx:t}}}),$=new M({props:{$$slots:{default:[yt]},$$scope:{ctx:t}}}),c=new M({props:{$$slots:{default:[Et]},$$scope:{ctx:t}}}),h=new M({props:{$$slots:{default:[kt]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=i(),s($.$$.fragment),a=i(),s(c.$$.fragment),m=i(),s(h.$$.fragment)},l(t){o(e.$$.fragment,t),n=g(t),o($.$$.fragment,t),a=g(t),o(c.$$.fragment,t),m=g(t),o(h.$$.fragment,t)},m(t,s){r(e,t,s),d(t,n,s),r($,t,s),d(t,a,s),r(c,t,s),d(t,m,s),r(h,t,s),x=!0},p(t,n){const s={};1&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const o={};1&n&&(o.$$scope={dirty:n,ctx:t}),$.$set(o);const r={};1&n&&(r.$$scope={dirty:n,ctx:t}),c.$set(r);const a={};1&n&&(a.$$scope={dirty:n,ctx:t}),h.$set(a)},i(t){x||(p(e.$$.fragment,t),p($.$$.fragment,t),p(c.$$.fragment,t),p(h.$$.fragment,t),x=!0)},o(t){f(e.$$.fragment,t),f($.$$.fragment,t),f(c.$$.fragment,t),f(h.$$.fragment,t),x=!1},d(t){l(e,t),t&&u(n),l($,t),t&&u(a),l(c,t),t&&u(m),l(h,t)}}}function Ot(t){let e,n,$,a,c,m,h,x;return n=new H({props:{$$slots:{default:[gt]},$$scope:{ctx:t}}}),c=new H({props:{$$slots:{default:[vt]},$$scope:{ctx:t}}}),h=new H({props:{$$slots:{default:[Tt]},$$scope:{ctx:t}}}),{c(){e=v("thead"),s(n.$$.fragment),$=i(),a=v("tbody"),s(c.$$.fragment),m=i(),s(h.$$.fragment)},l(t){e=w(t,"THEAD",{});var s=y(e);o(n.$$.fragment,s),s.forEach(u),$=g(t),a=w(t,"TBODY",{});var r=y(a);o(c.$$.fragment,r),m=g(r),o(h.$$.fragment,r),r.forEach(u)},m(t,s){d(t,e,s),r(n,e,null),d(t,$,s),d(t,a,s),r(c,a,null),k(a,m),r(h,a,null),x=!0},p(t,e){const $={};1&e&&($.$$scope={dirty:e,ctx:t}),n.$set($);const s={};1&e&&(s.$$scope={dirty:e,ctx:t}),c.$set(s);const o={};1&e&&(o.$$scope={dirty:e,ctx:t}),h.$set(o)},i(t){x||(p(n.$$.fragment,t),p(c.$$.fragment,t),p(h.$$.fragment,t),x=!0)},o(t){f(n.$$.fragment,t),f(c.$$.fragment,t),f(h.$$.fragment,t),x=!1},d(t){t&&u(e),l(n),t&&u($),t&&u(a),l(c),l(h)}}}function Dt(t){let e;return{c(){e=h("Slots")},l(t){e=x(t,"Slots")},m(t,n){d(t,e,n)},d(t){t&&u(e)}}}function Pt(t){let e;return{c(){e=h("Default slot")},l(t){e=x(t,"Default slot")},m(t,n){d(t,e,n)},d(t){t&&u(e)}}}function bt(t){let e;return{c(){e=h("The handle – any content that will, on hover or focus, show a popover next to it.")},l(t){e=x(t,"The handle – any content that will, on hover or focus, show a popover next to it.")},m(t,n){d(t,e,n)},d(t){t&&u(e)}}}function Ct(t){let e,n,$;return{c(){e=v("code"),n=h("popover-content"),$=h(" slot")},l(t){e=w(t,"CODE",{});var s=y(e);n=x(s,"popover-content"),s.forEach(u),$=x(t," slot")},m(t,s){d(t,e,s),k(e,n),d(t,$,s)},d(t){t&&u(e),t&&u($)}}}function jt(t){let e;return{c(){e=h("The content of the popover.")},l(t){e=x(t,"The content of the popover.")},m(t,n){d(t,e,n)},d(t){t&&u(e)}}}function At(t){let e;return{c(){e=h("Related Objects")},l(t){e=x(t,"Related Objects")},m(t,n){d(t,e,n)},d(t){t&&u(e)}}}function Rt(t){let e,n,$,s;return{c(){e=h("The following objects are available as named exports in "),n=v("code"),$=h("'attractions/popover'"),s=h(".")},l(t){e=x(t,"The following objects are available as named exports in "),n=w(t,"CODE",{});var o=y(n);$=x(o,"'attractions/popover'"),o.forEach(u),s=x(t,".")},m(t,o){d(t,e,o),d(t,n,o),k(n,$),d(t,s,o)},d(t){t&&u(e),t&&u(n),t&&u(s)}}}function Bt(t){let e,n;return{c(){e=v("code"),n=h("PopoverPositions")},l(t){e=w(t,"CODE",{});var $=y(e);n=x($,"PopoverPositions"),$.forEach(u)},m(t,$){d(t,e,$),k(e,n)},d(t){t&&u(e)}}}function St(t){let e,n,$,s;return{c(){e=h("An enum describing possible positions for the "),n=v("code"),$=h("Popover"),s=h(".")},l(t){e=x(t,"An enum describing possible positions for the "),n=w(t,"CODE",{});var o=y(n);$=x(o,"Popover"),o.forEach(u),s=x(t,".")},m(t,o){d(t,e,o),d(t,n,o),k(n,$),d(t,s,o)},d(t){t&&u(e),t&&u(n),t&&u(s)}}}function Gt(t){let e;return{c(){e=h("Field")},l(t){e=x(t,"Field")},m(t,n){d(t,e,n)},d(t){t&&u(e)}}}function Nt(t){let e;return{c(){e=h("Description")},l(t){e=x(t,"Description")},m(t,n){d(t,e,n)},d(t){t&&u(e)}}}function Ht(t){let e,n,$,a;return e=new F({props:{$$slots:{default:[Gt]},$$scope:{ctx:t}}}),$=new F({props:{$$slots:{default:[Nt]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=i(),s($.$$.fragment)},l(t){o(e.$$.fragment,t),n=g(t),o($.$$.fragment,t)},m(t,s){r(e,t,s),d(t,n,s),r($,t,s),a=!0},p(t,n){const s={};1&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const o={};1&n&&(o.$$scope={dirty:n,ctx:t}),$.$set(o)},i(t){a||(p(e.$$.fragment,t),p($.$$.fragment,t),a=!0)},o(t){f(e.$$.fragment,t),f($.$$.fragment,t),a=!1},d(t){l(e,t),t&&u(n),l($,t)}}}function Ft(t){let e,n,$;return{c(){e=v("strong"),n=v("code"),$=h("TOP")},l(t){e=w(t,"STRONG",{});var s=y(e);n=w(s,"CODE",{});var o=y(n);$=x(o,"TOP"),o.forEach(u),s.forEach(u)},m(t,s){d(t,e,s),k(e,n),k(n,$)},d(t){t&&u(e)}}}function Mt(t){let e;return{c(){e=h("Above the handle, centered with respect to it.")},l(t){e=x(t,"Above the handle, centered with respect to it.")},m(t,n){d(t,e,n)},d(t){t&&u(e)}}}function It(t){let e,n,$,a;return e=new M({props:{$$slots:{default:[Ft]},$$scope:{ctx:t}}}),$=new M({props:{$$slots:{default:[Mt]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=i(),s($.$$.fragment)},l(t){o(e.$$.fragment,t),n=g(t),o($.$$.fragment,t)},m(t,s){r(e,t,s),d(t,n,s),r($,t,s),a=!0},p(t,n){const s={};1&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const o={};1&n&&(o.$$scope={dirty:n,ctx:t}),$.$set(o)},i(t){a||(p(e.$$.fragment,t),p($.$$.fragment,t),a=!0)},o(t){f(e.$$.fragment,t),f($.$$.fragment,t),a=!1},d(t){l(e,t),t&&u(n),l($,t)}}}function Lt(t){let e,n,$;return{c(){e=v("strong"),n=v("code"),$=h("BOTTOM")},l(t){e=w(t,"STRONG",{});var s=y(e);n=w(s,"CODE",{});var o=y(n);$=x(o,"BOTTOM"),o.forEach(u),s.forEach(u)},m(t,s){d(t,e,s),k(e,n),k(n,$)},d(t){t&&u(e)}}}function Vt(t){let e;return{c(){e=h("Below the handle, centered with respect to it.")},l(t){e=x(t,"Below the handle, centered with respect to it.")},m(t,n){d(t,e,n)},d(t){t&&u(e)}}}function Yt(t){let e,n,$,a;return e=new M({props:{$$slots:{default:[Lt]},$$scope:{ctx:t}}}),$=new M({props:{$$slots:{default:[Vt]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=i(),s($.$$.fragment)},l(t){o(e.$$.fragment,t),n=g(t),o($.$$.fragment,t)},m(t,s){r(e,t,s),d(t,n,s),r($,t,s),a=!0},p(t,n){const s={};1&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const o={};1&n&&(o.$$scope={dirty:n,ctx:t}),$.$set(o)},i(t){a||(p(e.$$.fragment,t),p($.$$.fragment,t),a=!0)},o(t){f(e.$$.fragment,t),f($.$$.fragment,t),a=!1},d(t){l(e,t),t&&u(n),l($,t)}}}function qt(t){let e,n,$;return{c(){e=v("strong"),n=v("code"),$=h("LEFT")},l(t){e=w(t,"STRONG",{});var s=y(e);n=w(s,"CODE",{});var o=y(n);$=x(o,"LEFT"),o.forEach(u),s.forEach(u)},m(t,s){d(t,e,s),k(e,n),k(n,$)},d(t){t&&u(e)}}}function zt(t){let e;return{c(){e=h("To the left of the handle, centered with respect to it.")},l(t){e=x(t,"To the left of the handle, centered with respect to it.")},m(t,n){d(t,e,n)},d(t){t&&u(e)}}}function Kt(t){let e,n,$,a;return e=new M({props:{$$slots:{default:[qt]},$$scope:{ctx:t}}}),$=new M({props:{$$slots:{default:[zt]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=i(),s($.$$.fragment)},l(t){o(e.$$.fragment,t),n=g(t),o($.$$.fragment,t)},m(t,s){r(e,t,s),d(t,n,s),r($,t,s),a=!0},p(t,n){const s={};1&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const o={};1&n&&(o.$$scope={dirty:n,ctx:t}),$.$set(o)},i(t){a||(p(e.$$.fragment,t),p($.$$.fragment,t),a=!0)},o(t){f(e.$$.fragment,t),f($.$$.fragment,t),a=!1},d(t){l(e,t),t&&u(n),l($,t)}}}function Zt(t){let e,n,$;return{c(){e=v("strong"),n=v("code"),$=h("RIGHT")},l(t){e=w(t,"STRONG",{});var s=y(e);n=w(s,"CODE",{});var o=y(n);$=x(o,"RIGHT"),o.forEach(u),s.forEach(u)},m(t,s){d(t,e,s),k(e,n),k(n,$)},d(t){t&&u(e)}}}function Jt(t){let e;return{c(){e=h("To the right of the handle, centered with respect to it.")},l(t){e=x(t,"To the right of the handle, centered with respect to it.")},m(t,n){d(t,e,n)},d(t){t&&u(e)}}}function Qt(t){let e,n,$,a;return e=new M({props:{$$slots:{default:[Zt]},$$scope:{ctx:t}}}),$=new M({props:{$$slots:{default:[Jt]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=i(),s($.$$.fragment)},l(t){o(e.$$.fragment,t),n=g(t),o($.$$.fragment,t)},m(t,s){r(e,t,s),d(t,n,s),r($,t,s),a=!0},p(t,n){const s={};1&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const o={};1&n&&(o.$$scope={dirty:n,ctx:t}),$.$set(o)},i(t){a||(p(e.$$.fragment,t),p($.$$.fragment,t),a=!0)},o(t){f(e.$$.fragment,t),f($.$$.fragment,t),a=!1},d(t){l(e,t),t&&u(n),l($,t)}}}function Ut(t){let e,n,$,a,c,m,h,x,E,T,O,D;return n=new H({props:{$$slots:{default:[Ht]},$$scope:{ctx:t}}}),c=new H({props:{$$slots:{default:[It]},$$scope:{ctx:t}}}),h=new H({props:{$$slots:{default:[Yt]},$$scope:{ctx:t}}}),E=new H({props:{$$slots:{default:[Kt]},$$scope:{ctx:t}}}),O=new H({props:{$$slots:{default:[Qt]},$$scope:{ctx:t}}}),{c(){e=v("thead"),s(n.$$.fragment),$=i(),a=v("tbody"),s(c.$$.fragment),m=i(),s(h.$$.fragment),x=i(),s(E.$$.fragment),T=i(),s(O.$$.fragment)},l(t){e=w(t,"THEAD",{});var s=y(e);o(n.$$.fragment,s),s.forEach(u),$=g(t),a=w(t,"TBODY",{});var r=y(a);o(c.$$.fragment,r),m=g(r),o(h.$$.fragment,r),x=g(r),o(E.$$.fragment,r),T=g(r),o(O.$$.fragment,r),r.forEach(u)},m(t,s){d(t,e,s),r(n,e,null),d(t,$,s),d(t,a,s),r(c,a,null),k(a,m),r(h,a,null),k(a,x),r(E,a,null),k(a,T),r(O,a,null),D=!0},p(t,e){const $={};1&e&&($.$$scope={dirty:e,ctx:t}),n.$set($);const s={};1&e&&(s.$$scope={dirty:e,ctx:t}),c.$set(s);const o={};1&e&&(o.$$scope={dirty:e,ctx:t}),h.$set(o);const r={};1&e&&(r.$$scope={dirty:e,ctx:t}),E.$set(r);const a={};1&e&&(a.$$scope={dirty:e,ctx:t}),O.$set(a)},i(t){D||(p(n.$$.fragment,t),p(c.$$.fragment,t),p(h.$$.fragment,t),p(E.$$.fragment,t),p(O.$$.fragment,t),D=!0)},o(t){f(n.$$.fragment,t),f(c.$$.fragment,t),f(h.$$.fragment,t),f(E.$$.fragment,t),f(O.$$.fragment,t),D=!1},d(t){t&&u(e),l(n),t&&u($),t&&u(a),l(c),l(h),l(E),l(O)}}}function Wt(t){let e,n,$,a,c,m,h,x,v,w,y,E,k,T,O,b,C,j,B,H,F,M,V,Y,q,U,W,X,_,tt,et,nt,$t,st,ot,ft,lt,mt,it,gt,dt,ut;return e=new D({props:{$$slots:{default:[I]},$$scope:{ctx:t}}}),$=new P({props:{$$slots:{default:[L]},$$scope:{ctx:t}}}),c=new R({props:{components:ee}}),h=new A({props:{$$slots:{default:[Z],source:[K],showcase:[z]},$$scope:{ctx:t}}}),v=new S({props:{id:"properties",$$slots:{default:[J]},$$scope:{ctx:t}}}),y=new G({props:{$$slots:{default:[Q]},$$scope:{ctx:t}}}),k=new N({props:{$$slots:{default:[rt]},$$scope:{ctx:t}}}),O=new G({props:{$$slots:{default:[at]},$$scope:{ctx:t}}}),C=new P({props:{$$slots:{default:[ct]},$$scope:{ctx:t}}}),B=new P({props:{$$slots:{default:[pt]},$$scope:{ctx:t}}}),F=new N({props:{$$slots:{default:[Ot]},$$scope:{ctx:t}}}),V=new S({props:{id:"slots",$$slots:{default:[Dt]},$$scope:{ctx:t}}}),q=new G({props:{$$slots:{default:[Pt]},$$scope:{ctx:t}}}),W=new P({props:{$$slots:{default:[bt]},$$scope:{ctx:t}}}),_=new G({props:{$$slots:{default:[Ct]},$$scope:{ctx:t}}}),et=new P({props:{$$slots:{default:[jt]},$$scope:{ctx:t}}}),$t=new S({props:{id:"related-objects",$$slots:{default:[At]},$$scope:{ctx:t}}}),ot=new P({props:{$$slots:{default:[Rt]},$$scope:{ctx:t}}}),lt=new G({props:{id:"popover-positions",$$slots:{default:[Bt]},$$scope:{ctx:t}}}),it=new P({props:{$$slots:{default:[St]},$$scope:{ctx:t}}}),dt=new N({props:{$$slots:{default:[Ut]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=i(),s($.$$.fragment),a=i(),s(c.$$.fragment),m=i(),s(h.$$.fragment),x=i(),s(v.$$.fragment),w=i(),s(y.$$.fragment),E=i(),s(k.$$.fragment),T=i(),s(O.$$.fragment),b=i(),s(C.$$.fragment),j=i(),s(B.$$.fragment),H=i(),s(F.$$.fragment),M=i(),s(V.$$.fragment),Y=i(),s(q.$$.fragment),U=i(),s(W.$$.fragment),X=i(),s(_.$$.fragment),tt=i(),s(et.$$.fragment),nt=i(),s($t.$$.fragment),st=i(),s(ot.$$.fragment),ft=i(),s(lt.$$.fragment),mt=i(),s(it.$$.fragment),gt=i(),s(dt.$$.fragment)},l(t){o(e.$$.fragment,t),n=g(t),o($.$$.fragment,t),a=g(t),o(c.$$.fragment,t),m=g(t),o(h.$$.fragment,t),x=g(t),o(v.$$.fragment,t),w=g(t),o(y.$$.fragment,t),E=g(t),o(k.$$.fragment,t),T=g(t),o(O.$$.fragment,t),b=g(t),o(C.$$.fragment,t),j=g(t),o(B.$$.fragment,t),H=g(t),o(F.$$.fragment,t),M=g(t),o(V.$$.fragment,t),Y=g(t),o(q.$$.fragment,t),U=g(t),o(W.$$.fragment,t),X=g(t),o(_.$$.fragment,t),tt=g(t),o(et.$$.fragment,t),nt=g(t),o($t.$$.fragment,t),st=g(t),o(ot.$$.fragment,t),ft=g(t),o(lt.$$.fragment,t),mt=g(t),o(it.$$.fragment,t),gt=g(t),o(dt.$$.fragment,t)},m(t,s){r(e,t,s),d(t,n,s),r($,t,s),d(t,a,s),r(c,t,s),d(t,m,s),r(h,t,s),d(t,x,s),r(v,t,s),d(t,w,s),r(y,t,s),d(t,E,s),r(k,t,s),d(t,T,s),r(O,t,s),d(t,b,s),r(C,t,s),d(t,j,s),r(B,t,s),d(t,H,s),r(F,t,s),d(t,M,s),r(V,t,s),d(t,Y,s),r(q,t,s),d(t,U,s),r(W,t,s),d(t,X,s),r(_,t,s),d(t,tt,s),r(et,t,s),d(t,nt,s),r($t,t,s),d(t,st,s),r(ot,t,s),d(t,ft,s),r(lt,t,s),d(t,mt,s),r(it,t,s),d(t,gt,s),r(dt,t,s),ut=!0},p(t,n){const s={};1&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const o={};1&n&&(o.$$scope={dirty:n,ctx:t}),$.$set(o);const r={};1&n&&(r.$$scope={dirty:n,ctx:t}),h.$set(r);const a={};1&n&&(a.$$scope={dirty:n,ctx:t}),v.$set(a);const c={};1&n&&(c.$$scope={dirty:n,ctx:t}),y.$set(c);const p={};1&n&&(p.$$scope={dirty:n,ctx:t}),k.$set(p);const f={};1&n&&(f.$$scope={dirty:n,ctx:t}),O.$set(f);const l={};1&n&&(l.$$scope={dirty:n,ctx:t}),C.$set(l);const m={};1&n&&(m.$$scope={dirty:n,ctx:t}),B.$set(m);const i={};1&n&&(i.$$scope={dirty:n,ctx:t}),F.$set(i);const g={};1&n&&(g.$$scope={dirty:n,ctx:t}),V.$set(g);const d={};1&n&&(d.$$scope={dirty:n,ctx:t}),q.$set(d);const u={};1&n&&(u.$$scope={dirty:n,ctx:t}),W.$set(u);const x={};1&n&&(x.$$scope={dirty:n,ctx:t}),_.$set(x);const w={};1&n&&(w.$$scope={dirty:n,ctx:t}),et.$set(w);const E={};1&n&&(E.$$scope={dirty:n,ctx:t}),$t.$set(E);const T={};1&n&&(T.$$scope={dirty:n,ctx:t}),ot.$set(T);const D={};1&n&&(D.$$scope={dirty:n,ctx:t}),lt.$set(D);const P={};1&n&&(P.$$scope={dirty:n,ctx:t}),it.$set(P);const b={};1&n&&(b.$$scope={dirty:n,ctx:t}),dt.$set(b)},i(t){ut||(p(e.$$.fragment,t),p($.$$.fragment,t),p(c.$$.fragment,t),p(h.$$.fragment,t),p(v.$$.fragment,t),p(y.$$.fragment,t),p(k.$$.fragment,t),p(O.$$.fragment,t),p(C.$$.fragment,t),p(B.$$.fragment,t),p(F.$$.fragment,t),p(V.$$.fragment,t),p(q.$$.fragment,t),p(W.$$.fragment,t),p(_.$$.fragment,t),p(et.$$.fragment,t),p($t.$$.fragment,t),p(ot.$$.fragment,t),p(lt.$$.fragment,t),p(it.$$.fragment,t),p(dt.$$.fragment,t),ut=!0)},o(t){f(e.$$.fragment,t),f($.$$.fragment,t),f(c.$$.fragment,t),f(h.$$.fragment,t),f(v.$$.fragment,t),f(y.$$.fragment,t),f(k.$$.fragment,t),f(O.$$.fragment,t),f(C.$$.fragment,t),f(B.$$.fragment,t),f(F.$$.fragment,t),f(V.$$.fragment,t),f(q.$$.fragment,t),f(W.$$.fragment,t),f(_.$$.fragment,t),f(et.$$.fragment,t),f($t.$$.fragment,t),f(ot.$$.fragment,t),f(lt.$$.fragment,t),f(it.$$.fragment,t),f(dt.$$.fragment,t),ut=!1},d(t){l(e,t),t&&u(n),l($,t),t&&u(a),l(c,t),t&&u(m),l(h,t),t&&u(x),l(v,t),t&&u(w),l(y,t),t&&u(E),l(k,t),t&&u(T),l(O,t),t&&u(b),l(C,t),t&&u(j),l(B,t),t&&u(H),l(F,t),t&&u(M),l(V,t),t&&u(Y),l(q,t),t&&u(U),l(W,t),t&&u(X),l(_,t),t&&u(tt),l(et,t),t&&u(nt),l($t,t),t&&u(st),l(ot,t),t&&u(ft),l(lt,t),t&&u(mt),l(it,t),t&&u(gt),l(dt,t)}}}function Xt(t){let e,n;const m=[_t];let i={$$slots:{default:[Wt]},$$scope:{ctx:t}};for(let t=0;t<m.length;t+=1)i=$(i,m[t]);return e=new O({props:i}),{c(){s(e.$$.fragment)},l(t){o(e.$$.fragment,t)},m(t,$){r(e,t,$),n=!0},p(t,[n]){const $=0&n?a(m,[c(_t)]):{};1&n&&($.$$scope={dirty:n,ctx:t}),e.$set($)},i(t){n||(p(e.$$.fragment,t),n=!0)},o(t){f(e.$$.fragment,t),n=!1},d(t){l(e,t)}}}const _t={name:"Popover",relatedComponents:[{name:"PopoverButton",link:"./docs/components/popover-button"}]},{name:te,relatedComponents:ee}=_t;function ne(t){return m(B),[]}export default class extends t{constructor(t){super(),e(this,t,ne,Xt,n,{})}}export{_t as metadata};
