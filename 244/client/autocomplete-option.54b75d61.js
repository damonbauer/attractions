import{S as t,i as e,s as n,G as $,j as s,k as a,m as o,N as r,t as c,o as p,p as f,U as l,q as m,h as i,r as g,u,c as d,b as h,v as x,d as k,e as w,f as y,g as E,n as v,w as D,x as O,a1 as b}from"./client.a75aff81.js";import{L as T,H as A,P as j}from"./layout.f5c77752.js";import{A as C}from"./autocomplete-option.1a760ff9.js";import{S as N}from"./showcase.8c34bf70.js";import{C as S}from"./color-preview.d52eda02.js";import{R}from"./related-components.b4838f22.js";import{H as q}from"./h2.28816c31.js";import{H as G}from"./h3.5fe21350.js";import{T as F,a as H,b as P,c as B}from"./table.88851db3.js";import"./label.7881e034.js";import"./classes.2453fa25.js";import"./copyable-code.c8343cec.js";import"./button.9d19d1c2.js";import"./card.65e6aa8f.js";function I(t,e,n){const $=t.slice();return $[1]=e[n],$}function V(t){let e;return{c(){e=g("AutocompleteOption")},l(t){e=x(t,"AutocompleteOption")},m(t,n){y(t,e,n)},d(t){t&&k(e)}}}function M(t){let e;return{c(){e=g("A list item representing an autocomplete suggestion.")},l(t){e=x(t,"A list item representing an autocomplete suggestion.")},m(t,n){y(t,e,n)},d(t){t&&k(e)}}}function K(t){let e,n,$,s,a,o;return{c(){e=g("It's unlikely that this component will be used by itself, but it is a part of the larger "),n=i("a"),$=i("mark"),s=i("code"),a=g("Autocomplete"),o=g(" component."),this.h()},l(t){e=x(t,"It's unlikely that this component will be used by itself, but it is a part of the larger "),n=d(t,"A",{href:!0});var r=h(n);$=d(r,"MARK",{});var c=h($);s=d(c,"CODE",{});var p=h(s);a=x(p,"Autocomplete"),p.forEach(k),c.forEach(k),r.forEach(k),o=x(t," component."),this.h()},h(){w(n,"href","./docs/components/autocomplete")},m(t,r){y(t,e,r),y(t,n,r),E(n,$),E($,s),E(s,a),y(t,o,r)},d(t){t&&k(e),t&&k(n),t&&k(o)}}}function U(t){let e,n;return e=new C({props:{option:t[1],query:"tio"}}),{c(){s(e.$$.fragment)},l(t){a(e.$$.fragment,t)},m(t,$){o(e,t,$),n=!0},p:v,i(t){n||(c(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){f(e,t)}}}function Y(t){let e,n,$=t[0],s=[];for(let e=0;e<$.length;e+=1)s[e]=U(I(t,$,e));const a=t=>p(s[t],1,1,(()=>{s[t]=null}));return{c(){e=i("div");for(let t=0;t<s.length;t+=1)s[t].c();this.h()},l(t){e=d(t,"DIV",{slot:!0,class:!0});var n=h(e);for(let t=0;t<s.length;t+=1)s[t].l(n);n.forEach(k),this.h()},h(){w(e,"slot","showcase"),w(e,"class","padded")},m(t,$){y(t,e,$);for(let t=0;t<s.length;t+=1)s[t].m(e,null);n=!0},p(t,n){if(1&n){let o;for($=t[0],o=0;o<$.length;o+=1){const a=I(t,$,o);s[o]?(s[o].p(a,n),c(s[o],1)):(s[o]=U(a),s[o].c(),c(s[o],1),s[o].m(e,null))}for(D(),o=$.length;o<s.length;o+=1)a(o);O()}},i(t){if(!n){for(let t=0;t<$.length;t+=1)c(s[t]);n=!0}},o(t){s=s.filter(Boolean);for(let t=0;t<s.length;t+=1)p(s[t]);n=!1},d(t){t&&k(e),b(s,t)}}}function z(t){let e,n;return{c(){e=i("div"),n=i("pre"),this.h()},l(t){e=d(t,"DIV",{slot:!0});var $=h(e);n=d($,"PRE",{class:!0}),h(n).forEach(k),$.forEach(k),this.h()},h(){w(n,"class","language-svelte"),w(e,"slot","source")},m(t,$){y(t,e,$),E(e,n),n.innerHTML='<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">&#123;</span> name<span class="token operator">:</span> <span class="token string">\'Test Option\'</span><span class="token punctuation">,</span> details<span class="token operator">:</span> <span class="token string">\'Description\'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>\n    <span class="token punctuation">&#123;</span> name<span class="token operator">:</span> <span class="token string">\'Another One\'</span><span class="token punctuation">,</span> details<span class="token operator">:</span> <span class="token string">\'Different\'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>\n    <span class="token punctuation">&#123;</span> name<span class="token operator">:</span> <span class="token string">\'No Description\'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token each"><span class="token punctuation">&#123;</span><span class="token keyword">#each</span> <span class="token language-javascript">options </span><span class="token keyword">as</span> <span class="token language-javascript">option<span class="token punctuation">&#125;</span></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AutocompleteOption</span> <span class="token language-javascript"><span class="token punctuation">&#123;</span>option<span class="token punctuation">&#125;</span></span> <span class="token attr-name">query</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>tio<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n<span class="token each"><span class="token punctuation">&#123;</span><span class="token keyword">/each</span><span class="token punctuation">&#125;</span></span></code>'},p:v,d(t){t&&k(e)}}}function L(t){let e;return{c(){e=m()},l(t){e=u(t)},m(t,n){y(t,e,n)},p:v,i:v,o:v,d(t){t&&k(e)}}}function J(t){let e;return{c(){e=g("Properties")},l(t){e=x(t,"Properties")},m(t,n){y(t,e,n)},d(t){t&&k(e)}}}function Q(t){let e;return{c(){e=g("Functional Properties")},l(t){e=x(t,"Functional Properties")},m(t,n){y(t,e,n)},d(t){t&&k(e)}}}function W(t){let e;return{c(){e=g("Name")},l(t){e=x(t,"Name")},m(t,n){y(t,e,n)},d(t){t&&k(e)}}}function X(t){let e;return{c(){e=g("Default")},l(t){e=x(t,"Default")},m(t,n){y(t,e,n)},d(t){t&&k(e)}}}function Z(t){let e;return{c(){e=g("Type")},l(t){e=x(t,"Type")},m(t,n){y(t,e,n)},d(t){t&&k(e)}}}function _(t){let e;return{c(){e=g("Description")},l(t){e=x(t,"Description")},m(t,n){y(t,e,n)},d(t){t&&k(e)}}}function tt(t){let e,n,$,r,l,i,g,d;return e=new P({props:{$$slots:{default:[W]},$$scope:{ctx:t}}}),$=new P({props:{$$slots:{default:[X]},$$scope:{ctx:t}}}),l=new P({props:{$$slots:{default:[Z]},$$scope:{ctx:t}}}),g=new P({props:{$$slots:{default:[_]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=m(),s($.$$.fragment),r=m(),s(l.$$.fragment),i=m(),s(g.$$.fragment)},l(t){a(e.$$.fragment,t),n=u(t),a($.$$.fragment,t),r=u(t),a(l.$$.fragment,t),i=u(t),a(g.$$.fragment,t)},m(t,s){o(e,t,s),y(t,n,s),o($,t,s),y(t,r,s),o(l,t,s),y(t,i,s),o(g,t,s),d=!0},p(t,n){const s={};16&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const a={};16&n&&(a.$$scope={dirty:n,ctx:t}),$.$set(a);const o={};16&n&&(o.$$scope={dirty:n,ctx:t}),l.$set(o);const r={};16&n&&(r.$$scope={dirty:n,ctx:t}),g.$set(r)},i(t){d||(c(e.$$.fragment,t),c($.$$.fragment,t),c(l.$$.fragment,t),c(g.$$.fragment,t),d=!0)},o(t){p(e.$$.fragment,t),p($.$$.fragment,t),p(l.$$.fragment,t),p(g.$$.fragment,t),d=!1},d(t){f(e,t),t&&k(n),f($,t),t&&k(r),f(l,t),t&&k(i),f(g,t)}}}function et(t){let e,n,$,s,a,o,r;return{c(){e=i("mark"),n=i("strong"),$=i("code"),s=g("option"),a=g(" "),o=i("span"),r=g("*"),this.h()},l(t){e=d(t,"MARK",{});var c=h(e);n=d(c,"STRONG",{});var p=h(n);$=d(p,"CODE",{});var f=h($);s=x(f,"option"),f.forEach(k),p.forEach(k),c.forEach(k),a=x(t," "),o=d(t,"SPAN",{class:!0});var l=h(o);r=x(l,"*"),l.forEach(k),this.h()},h(){w(o,"class","required")},m(t,c){y(t,e,c),E(e,n),E(n,$),E($,s),y(t,a,c),y(t,o,c),E(o,r)},d(t){t&&k(e),t&&k(a),t&&k(o)}}}function nt(t){let e,n;return{c(){e=i("code"),n=g("Object")},l(t){e=d(t,"CODE",{});var $=h(e);n=x($,"Object"),$.forEach(k)},m(t,$){y(t,e,$),E(e,n)},d(t){t&&k(e)}}}function $t(t){let e,n,$,s,a,o,r;return{c(){e=g("The option object, containing a "),n=i("code"),$=g("name"),s=g(" field and, optionally, a "),a=i("code"),o=g("details"),r=g(" field, both strings.")},l(t){e=x(t,"The option object, containing a "),n=d(t,"CODE",{});var c=h(n);$=x(c,"name"),c.forEach(k),s=x(t," field and, optionally, a "),a=d(t,"CODE",{});var p=h(a);o=x(p,"details"),p.forEach(k),r=x(t," field, both strings.")},m(t,c){y(t,e,c),y(t,n,c),E(n,$),y(t,s,c),y(t,a,c),E(a,o),y(t,r,c)},d(t){t&&k(e),t&&k(n),t&&k(s),t&&k(a),t&&k(r)}}}function st(t){let e,n,$,r,l,i,g,d;return e=new B({props:{$$slots:{default:[et]},$$scope:{ctx:t}}}),$=new B({}),l=new B({props:{$$slots:{default:[nt]},$$scope:{ctx:t}}}),g=new B({props:{$$slots:{default:[$t]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=m(),s($.$$.fragment),r=m(),s(l.$$.fragment),i=m(),s(g.$$.fragment)},l(t){a(e.$$.fragment,t),n=u(t),a($.$$.fragment,t),r=u(t),a(l.$$.fragment,t),i=u(t),a(g.$$.fragment,t)},m(t,s){o(e,t,s),y(t,n,s),o($,t,s),y(t,r,s),o(l,t,s),y(t,i,s),o(g,t,s),d=!0},p(t,n){const $={};16&n&&($.$$scope={dirty:n,ctx:t}),e.$set($);const s={};16&n&&(s.$$scope={dirty:n,ctx:t}),l.$set(s);const a={};16&n&&(a.$$scope={dirty:n,ctx:t}),g.$set(a)},i(t){d||(c(e.$$.fragment,t),c($.$$.fragment,t),c(l.$$.fragment,t),c(g.$$.fragment,t),d=!0)},o(t){p(e.$$.fragment,t),p($.$$.fragment,t),p(l.$$.fragment,t),p(g.$$.fragment,t),d=!1},d(t){f(e,t),t&&k(n),f($,t),t&&k(r),f(l,t),t&&k(i),f(g,t)}}}function at(t){let e,n,$;return{c(){e=i("strong"),n=i("code"),$=g("query")},l(t){e=d(t,"STRONG",{});var s=h(e);n=d(s,"CODE",{});var a=h(n);$=x(a,"query"),a.forEach(k),s.forEach(k)},m(t,s){y(t,e,s),E(e,n),E(n,$)},d(t){t&&k(e)}}}function ot(t){let e,n;return{c(){e=i("code"),n=g("null")},l(t){e=d(t,"CODE",{});var $=h(e);n=x($,"null"),$.forEach(k)},m(t,$){y(t,e,$),E(e,n)},d(t){t&&k(e)}}}function rt(t){let e,n;return{c(){e=i("code"),n=g("string")},l(t){e=d(t,"CODE",{});var $=h(e);n=x($,"string"),$.forEach(k)},m(t,$){y(t,e,$),E(e,n)},d(t){t&&k(e)}}}function ct(t){let e;return{c(){e=g("The substring to seek out and highlight among the name and the details.")},l(t){e=x(t,"The substring to seek out and highlight among the name and the details.")},m(t,n){y(t,e,n)},d(t){t&&k(e)}}}function pt(t){let e,n,$,r,l,i,g,d;return e=new B({props:{$$slots:{default:[at]},$$scope:{ctx:t}}}),$=new B({props:{$$slots:{default:[ot]},$$scope:{ctx:t}}}),l=new B({props:{$$slots:{default:[rt]},$$scope:{ctx:t}}}),g=new B({props:{$$slots:{default:[ct]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=m(),s($.$$.fragment),r=m(),s(l.$$.fragment),i=m(),s(g.$$.fragment)},l(t){a(e.$$.fragment,t),n=u(t),a($.$$.fragment,t),r=u(t),a(l.$$.fragment,t),i=u(t),a(g.$$.fragment,t)},m(t,s){o(e,t,s),y(t,n,s),o($,t,s),y(t,r,s),o(l,t,s),y(t,i,s),o(g,t,s),d=!0},p(t,n){const s={};16&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const a={};16&n&&(a.$$scope={dirty:n,ctx:t}),$.$set(a);const o={};16&n&&(o.$$scope={dirty:n,ctx:t}),l.$set(o);const r={};16&n&&(r.$$scope={dirty:n,ctx:t}),g.$set(r)},i(t){d||(c(e.$$.fragment,t),c($.$$.fragment,t),c(l.$$.fragment,t),c(g.$$.fragment,t),d=!0)},o(t){p(e.$$.fragment,t),p($.$$.fragment,t),p(l.$$.fragment,t),p(g.$$.fragment,t),d=!1},d(t){f(e,t),t&&k(n),f($,t),t&&k(r),f(l,t),t&&k(i),f(g,t)}}}function ft(t){let e,n,$,r,l,g,x,w;return n=new H({props:{$$slots:{default:[tt]},$$scope:{ctx:t}}}),l=new H({props:{$$slots:{default:[st]},$$scope:{ctx:t}}}),x=new H({props:{$$slots:{default:[pt]},$$scope:{ctx:t}}}),{c(){e=i("thead"),s(n.$$.fragment),$=m(),r=i("tbody"),s(l.$$.fragment),g=m(),s(x.$$.fragment)},l(t){e=d(t,"THEAD",{});var s=h(e);a(n.$$.fragment,s),s.forEach(k),$=u(t),r=d(t,"TBODY",{});var o=h(r);a(l.$$.fragment,o),g=u(o),a(x.$$.fragment,o),o.forEach(k)},m(t,s){y(t,e,s),o(n,e,null),y(t,$,s),y(t,r,s),o(l,r,null),E(r,g),o(x,r,null),w=!0},p(t,e){const $={};16&e&&($.$$scope={dirty:e,ctx:t}),n.$set($);const s={};16&e&&(s.$$scope={dirty:e,ctx:t}),l.$set(s);const a={};16&e&&(a.$$scope={dirty:e,ctx:t}),x.$set(a)},i(t){w||(c(n.$$.fragment,t),c(l.$$.fragment,t),c(x.$$.fragment,t),w=!0)},o(t){p(n.$$.fragment,t),p(l.$$.fragment,t),p(x.$$.fragment,t),w=!1},d(t){t&&k(e),f(n),t&&k($),t&&k(r),f(l),f(x)}}}function lt(t){let e;return{c(){e=g("Events")},l(t){e=x(t,"Events")},m(t,n){y(t,e,n)},d(t){t&&k(e)}}}function mt(t){let e;return{c(){e=g("Name")},l(t){e=x(t,"Name")},m(t,n){y(t,e,n)},d(t){t&&k(e)}}}function it(t){let e;return{c(){e=g("Event Detail")},l(t){e=x(t,"Event Detail")},m(t,n){y(t,e,n)},d(t){t&&k(e)}}}function gt(t){let e;return{c(){e=g("Description")},l(t){e=x(t,"Description")},m(t,n){y(t,e,n)},d(t){t&&k(e)}}}function ut(t){let e,n,$,r,l,i;return e=new P({props:{$$slots:{default:[mt]},$$scope:{ctx:t}}}),$=new P({props:{$$slots:{default:[it]},$$scope:{ctx:t}}}),l=new P({props:{$$slots:{default:[gt]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=m(),s($.$$.fragment),r=m(),s(l.$$.fragment)},l(t){a(e.$$.fragment,t),n=u(t),a($.$$.fragment,t),r=u(t),a(l.$$.fragment,t)},m(t,s){o(e,t,s),y(t,n,s),o($,t,s),y(t,r,s),o(l,t,s),i=!0},p(t,n){const s={};16&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const a={};16&n&&(a.$$scope={dirty:n,ctx:t}),$.$set(a);const o={};16&n&&(o.$$scope={dirty:n,ctx:t}),l.$set(o)},i(t){i||(c(e.$$.fragment,t),c($.$$.fragment,t),c(l.$$.fragment,t),i=!0)},o(t){p(e.$$.fragment,t),p($.$$.fragment,t),p(l.$$.fragment,t),i=!1},d(t){f(e,t),t&&k(n),f($,t),t&&k(r),f(l,t)}}}function dt(t){let e,n,$;return{c(){e=i("strong"),n=i("code"),$=g("click")},l(t){e=d(t,"STRONG",{});var s=h(e);n=d(s,"CODE",{});var a=h(n);$=x(a,"click"),a.forEach(k),s.forEach(k)},m(t,s){y(t,e,s),E(e,n),E(n,$)},d(t){t&&k(e)}}}function ht(t){let e,n;return{c(){e=i("code"),n=g("{ nativeEvent }")},l(t){e=d(t,"CODE",{});var $=h(e);n=x($,"{ nativeEvent }"),$.forEach(k)},m(t,$){y(t,e,$),E(e,n)},d(t){t&&k(e)}}}function xt(t){let e,n,$,s,a,o,r;return{c(){e=g("Fired when the element is clicked. A necessary part of conforming to the "),n=i("a"),$=i("mark"),s=i("code"),a=g("AutocompleteField"),o=g("'s"),r=g(" interface."),this.h()},l(t){e=x(t,"Fired when the element is clicked. A necessary part of conforming to the "),n=d(t,"A",{href:!0});var c=h(n);$=d(c,"MARK",{});var p=h($);s=d(p,"CODE",{});var f=h(s);a=x(f,"AutocompleteField"),f.forEach(k),p.forEach(k),o=x(c,"'s"),c.forEach(k),r=x(t," interface."),this.h()},h(){w(n,"href","./docs/components/autocomplete-field")},m(t,c){y(t,e,c),y(t,n,c),E(n,$),E($,s),E(s,a),E(n,o),y(t,r,c)},d(t){t&&k(e),t&&k(n),t&&k(r)}}}function kt(t){let e,n,$,r,l,i;return e=new B({props:{$$slots:{default:[dt]},$$scope:{ctx:t}}}),$=new B({props:{$$slots:{default:[ht]},$$scope:{ctx:t}}}),l=new B({props:{$$slots:{default:[xt]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=m(),s($.$$.fragment),r=m(),s(l.$$.fragment)},l(t){a(e.$$.fragment,t),n=u(t),a($.$$.fragment,t),r=u(t),a(l.$$.fragment,t)},m(t,s){o(e,t,s),y(t,n,s),o($,t,s),y(t,r,s),o(l,t,s),i=!0},p(t,n){const s={};16&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const a={};16&n&&(a.$$scope={dirty:n,ctx:t}),$.$set(a);const o={};16&n&&(o.$$scope={dirty:n,ctx:t}),l.$set(o)},i(t){i||(c(e.$$.fragment,t),c($.$$.fragment,t),c(l.$$.fragment,t),i=!0)},o(t){p(e.$$.fragment,t),p($.$$.fragment,t),p(l.$$.fragment,t),i=!1},d(t){f(e,t),t&&k(n),f($,t),t&&k(r),f(l,t)}}}function wt(t){let e,n,$,r,l,g;return n=new H({props:{$$slots:{default:[ut]},$$scope:{ctx:t}}}),l=new H({props:{$$slots:{default:[kt]},$$scope:{ctx:t}}}),{c(){e=i("thead"),s(n.$$.fragment),$=m(),r=i("tbody"),s(l.$$.fragment)},l(t){e=d(t,"THEAD",{});var s=h(e);a(n.$$.fragment,s),s.forEach(k),$=u(t),r=d(t,"TBODY",{});var o=h(r);a(l.$$.fragment,o),o.forEach(k)},m(t,s){y(t,e,s),o(n,e,null),y(t,$,s),y(t,r,s),o(l,r,null),g=!0},p(t,e){const $={};16&e&&($.$$scope={dirty:e,ctx:t}),n.$set($);const s={};16&e&&(s.$$scope={dirty:e,ctx:t}),l.$set(s)},i(t){g||(c(n.$$.fragment,t),c(l.$$.fragment,t),g=!0)},o(t){p(n.$$.fragment,t),p(l.$$.fragment,t),g=!1},d(t){t&&k(e),f(n),t&&k($),t&&k(r),f(l)}}}function yt(t){let e;return{c(){e=g("SCSS Variables")},l(t){e=x(t,"SCSS Variables")},m(t,n){y(t,e,n)},d(t){t&&k(e)}}}function Et(t){let e;return{c(){e=g("Name")},l(t){e=x(t,"Name")},m(t,n){y(t,e,n)},d(t){t&&k(e)}}}function vt(t){let e;return{c(){e=g("Description")},l(t){e=x(t,"Description")},m(t,n){y(t,e,n)},d(t){t&&k(e)}}}function Dt(t){let e;return{c(){e=g("Default")},l(t){e=x(t,"Default")},m(t,n){y(t,e,n)},d(t){t&&k(e)}}}function Ot(t){let e,n,$,r,l,i;return e=new P({props:{$$slots:{default:[Et]},$$scope:{ctx:t}}}),$=new P({props:{$$slots:{default:[vt]},$$scope:{ctx:t}}}),l=new P({props:{$$slots:{default:[Dt]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=m(),s($.$$.fragment),r=m(),s(l.$$.fragment)},l(t){a(e.$$.fragment,t),n=u(t),a($.$$.fragment,t),r=u(t),a(l.$$.fragment,t)},m(t,s){o(e,t,s),y(t,n,s),o($,t,s),y(t,r,s),o(l,t,s),i=!0},p(t,n){const s={};16&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const a={};16&n&&(a.$$scope={dirty:n,ctx:t}),$.$set(a);const o={};16&n&&(o.$$scope={dirty:n,ctx:t}),l.$set(o)},i(t){i||(c(e.$$.fragment,t),c($.$$.fragment,t),c(l.$$.fragment,t),i=!0)},o(t){p(e.$$.fragment,t),p($.$$.fragment,t),p(l.$$.fragment,t),i=!1},d(t){f(e,t),t&&k(n),f($,t),t&&k(r),f(l,t)}}}function bt(t){let e,n,$;return{c(){e=i("strong"),n=i("code"),$=g("$main")},l(t){e=d(t,"STRONG",{});var s=h(e);n=d(s,"CODE",{});var a=h(n);$=x(a,"$main"),a.forEach(k),s.forEach(k)},m(t,s){y(t,e,s),E(e,n),E(n,$)},d(t){t&&k(e)}}}function Tt(t){let e;return{c(){e=g("The background color on hover and the color of the highlight.")},l(t){e=x(t,"The background color on hover and the color of the highlight.")},m(t,n){y(t,e,n)},d(t){t&&k(e)}}}function At(t){let e,n;return e=new S({props:{value:"#4300B0"}}),{c(){s(e.$$.fragment)},l(t){a(e.$$.fragment,t)},m(t,$){o(e,t,$),n=!0},p:v,i(t){n||(c(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){f(e,t)}}}function jt(t){let e,n,$,r,l,i;return e=new B({props:{$$slots:{default:[bt]},$$scope:{ctx:t}}}),$=new B({props:{$$slots:{default:[Tt]},$$scope:{ctx:t}}}),l=new B({props:{$$slots:{default:[At]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=m(),s($.$$.fragment),r=m(),s(l.$$.fragment)},l(t){a(e.$$.fragment,t),n=u(t),a($.$$.fragment,t),r=u(t),a(l.$$.fragment,t)},m(t,s){o(e,t,s),y(t,n,s),o($,t,s),y(t,r,s),o(l,t,s),i=!0},p(t,n){const s={};16&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const a={};16&n&&(a.$$scope={dirty:n,ctx:t}),$.$set(a);const o={};16&n&&(o.$$scope={dirty:n,ctx:t}),l.$set(o)},i(t){i||(c(e.$$.fragment,t),c($.$$.fragment,t),c(l.$$.fragment,t),i=!0)},o(t){p(e.$$.fragment,t),p($.$$.fragment,t),p(l.$$.fragment,t),i=!1},d(t){f(e,t),t&&k(n),f($,t),t&&k(r),f(l,t)}}}function Ct(t){let e,n,$;return{c(){e=i("strong"),n=i("code"),$=g("$font")},l(t){e=d(t,"STRONG",{});var s=h(e);n=d(s,"CODE",{});var a=h(n);$=x(a,"$font"),a.forEach(k),s.forEach(k)},m(t,s){y(t,e,s),E(e,n),E(n,$)},d(t){t&&k(e)}}}function Nt(t){let e;return{c(){e=g("The font of the component.")},l(t){e=x(t,"The font of the component.")},m(t,n){y(t,e,n)},d(t){t&&k(e)}}}function St(t){let e,n;return{c(){e=i("code"),n=g("'Ubuntu'")},l(t){e=d(t,"CODE",{});var $=h(e);n=x($,"'Ubuntu'"),$.forEach(k)},m(t,$){y(t,e,$),E(e,n)},d(t){t&&k(e)}}}function Rt(t){let e,n,$,r,l,i;return e=new B({props:{$$slots:{default:[Ct]},$$scope:{ctx:t}}}),$=new B({props:{$$slots:{default:[Nt]},$$scope:{ctx:t}}}),l=new B({props:{$$slots:{default:[St]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=m(),s($.$$.fragment),r=m(),s(l.$$.fragment)},l(t){a(e.$$.fragment,t),n=u(t),a($.$$.fragment,t),r=u(t),a(l.$$.fragment,t)},m(t,s){o(e,t,s),y(t,n,s),o($,t,s),y(t,r,s),o(l,t,s),i=!0},p(t,n){const s={};16&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const a={};16&n&&(a.$$scope={dirty:n,ctx:t}),$.$set(a);const o={};16&n&&(o.$$scope={dirty:n,ctx:t}),l.$set(o)},i(t){i||(c(e.$$.fragment,t),c($.$$.fragment,t),c(l.$$.fragment,t),i=!0)},o(t){p(e.$$.fragment,t),p($.$$.fragment,t),p(l.$$.fragment,t),i=!1},d(t){f(e,t),t&&k(n),f($,t),t&&k(r),f(l,t)}}}function qt(t){let e,n,$;return{c(){e=i("strong"),n=i("code"),$=g("$thin-font-weight")},l(t){e=d(t,"STRONG",{});var s=h(e);n=d(s,"CODE",{});var a=h(n);$=x(a,"$thin-font-weight"),a.forEach(k),s.forEach(k)},m(t,s){y(t,e,s),E(e,n),E(n,$)},d(t){t&&k(e)}}}function Gt(t){let e;return{c(){e=g("The thin font weight to differentiate the details from the name.")},l(t){e=x(t,"The thin font weight to differentiate the details from the name.")},m(t,n){y(t,e,n)},d(t){t&&k(e)}}}function Ft(t){let e,n;return{c(){e=i("code"),n=g("300")},l(t){e=d(t,"CODE",{});var $=h(e);n=x($,"300"),$.forEach(k)},m(t,$){y(t,e,$),E(e,n)},d(t){t&&k(e)}}}function Ht(t){let e,n,$,r,l,i;return e=new B({props:{$$slots:{default:[qt]},$$scope:{ctx:t}}}),$=new B({props:{$$slots:{default:[Gt]},$$scope:{ctx:t}}}),l=new B({props:{$$slots:{default:[Ft]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=m(),s($.$$.fragment),r=m(),s(l.$$.fragment)},l(t){a(e.$$.fragment,t),n=u(t),a($.$$.fragment,t),r=u(t),a(l.$$.fragment,t)},m(t,s){o(e,t,s),y(t,n,s),o($,t,s),y(t,r,s),o(l,t,s),i=!0},p(t,n){const s={};16&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const a={};16&n&&(a.$$scope={dirty:n,ctx:t}),$.$set(a);const o={};16&n&&(o.$$scope={dirty:n,ctx:t}),l.$set(o)},i(t){i||(c(e.$$.fragment,t),c($.$$.fragment,t),c(l.$$.fragment,t),i=!0)},o(t){p(e.$$.fragment,t),p($.$$.fragment,t),p(l.$$.fragment,t),i=!1},d(t){f(e,t),t&&k(n),f($,t),t&&k(r),f(l,t)}}}function Pt(t){let e,n,$;return{c(){e=i("strong"),n=i("code"),$=g("$bold-font-weight")},l(t){e=d(t,"STRONG",{});var s=h(e);n=d(s,"CODE",{});var a=h(n);$=x(a,"$bold-font-weight"),a.forEach(k),s.forEach(k)},m(t,s){y(t,e,s),E(e,n),E(n,$)},d(t){t&&k(e)}}}function Bt(t){let e;return{c(){e=g("The bold font weight to emphasize the highight.")},l(t){e=x(t,"The bold font weight to emphasize the highight.")},m(t,n){y(t,e,n)},d(t){t&&k(e)}}}function It(t){let e,n;return{c(){e=i("code"),n=g("500")},l(t){e=d(t,"CODE",{});var $=h(e);n=x($,"500"),$.forEach(k)},m(t,$){y(t,e,$),E(e,n)},d(t){t&&k(e)}}}function Vt(t){let e,n,$,r,l,i;return e=new B({props:{$$slots:{default:[Pt]},$$scope:{ctx:t}}}),$=new B({props:{$$slots:{default:[Bt]},$$scope:{ctx:t}}}),l=new B({props:{$$slots:{default:[It]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=m(),s($.$$.fragment),r=m(),s(l.$$.fragment)},l(t){a(e.$$.fragment,t),n=u(t),a($.$$.fragment,t),r=u(t),a(l.$$.fragment,t)},m(t,s){o(e,t,s),y(t,n,s),o($,t,s),y(t,r,s),o(l,t,s),i=!0},p(t,n){const s={};16&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const a={};16&n&&(a.$$scope={dirty:n,ctx:t}),$.$set(a);const o={};16&n&&(o.$$scope={dirty:n,ctx:t}),l.$set(o)},i(t){i||(c(e.$$.fragment,t),c($.$$.fragment,t),c(l.$$.fragment,t),i=!0)},o(t){p(e.$$.fragment,t),p($.$$.fragment,t),p(l.$$.fragment,t),i=!1},d(t){f(e,t),t&&k(n),f($,t),t&&k(r),f(l,t)}}}function Mt(t){let e,n,$,r,l,g,x,w,v,D,O,b;return n=new H({props:{$$slots:{default:[Ot]},$$scope:{ctx:t}}}),l=new H({props:{$$slots:{default:[jt]},$$scope:{ctx:t}}}),x=new H({props:{$$slots:{default:[Rt]},$$scope:{ctx:t}}}),v=new H({props:{$$slots:{default:[Ht]},$$scope:{ctx:t}}}),O=new H({props:{$$slots:{default:[Vt]},$$scope:{ctx:t}}}),{c(){e=i("thead"),s(n.$$.fragment),$=m(),r=i("tbody"),s(l.$$.fragment),g=m(),s(x.$$.fragment),w=m(),s(v.$$.fragment),D=m(),s(O.$$.fragment)},l(t){e=d(t,"THEAD",{});var s=h(e);a(n.$$.fragment,s),s.forEach(k),$=u(t),r=d(t,"TBODY",{});var o=h(r);a(l.$$.fragment,o),g=u(o),a(x.$$.fragment,o),w=u(o),a(v.$$.fragment,o),D=u(o),a(O.$$.fragment,o),o.forEach(k)},m(t,s){y(t,e,s),o(n,e,null),y(t,$,s),y(t,r,s),o(l,r,null),E(r,g),o(x,r,null),E(r,w),o(v,r,null),E(r,D),o(O,r,null),b=!0},p(t,e){const $={};16&e&&($.$$scope={dirty:e,ctx:t}),n.$set($);const s={};16&e&&(s.$$scope={dirty:e,ctx:t}),l.$set(s);const a={};16&e&&(a.$$scope={dirty:e,ctx:t}),x.$set(a);const o={};16&e&&(o.$$scope={dirty:e,ctx:t}),v.$set(o);const r={};16&e&&(r.$$scope={dirty:e,ctx:t}),O.$set(r)},i(t){b||(c(n.$$.fragment,t),c(l.$$.fragment,t),c(x.$$.fragment,t),c(v.$$.fragment,t),c(O.$$.fragment,t),b=!0)},o(t){p(n.$$.fragment,t),p(l.$$.fragment,t),p(x.$$.fragment,t),p(v.$$.fragment,t),p(O.$$.fragment,t),b=!1},d(t){t&&k(e),f(n),t&&k($),t&&k(r),f(l),f(x),f(v),f(O)}}}function Kt(t){let e,n,$,r,l,v,D,O,b,T,C,S,H,P,B,I,U,W,X,Z,_,tt,et,nt,$t,st,at;return e=new A({props:{$$slots:{default:[V]},$$scope:{ctx:t}}}),$=new j({props:{$$slots:{default:[M]},$$scope:{ctx:t}}}),l=new j({props:{$$slots:{default:[K]},$$scope:{ctx:t}}}),D=new R({props:{components:Lt}}),b=new N({props:{$$slots:{default:[L],source:[z],showcase:[Y]},$$scope:{ctx:t}}}),C=new q({props:{id:"properties",$$slots:{default:[J]},$$scope:{ctx:t}}}),H=new G({props:{$$slots:{default:[Q]},$$scope:{ctx:t}}}),B=new F({props:{$$slots:{default:[ft]},$$scope:{ctx:t}}}),Z=new q({props:{id:"events",$$slots:{default:[lt]},$$scope:{ctx:t}}}),tt=new F({props:{$$slots:{default:[wt]},$$scope:{ctx:t}}}),nt=new q({props:{id:"scss-variables",$$slots:{default:[yt]},$$scope:{ctx:t}}}),st=new F({props:{$$slots:{default:[Mt]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=m(),s($.$$.fragment),r=m(),s(l.$$.fragment),v=m(),s(D.$$.fragment),O=m(),s(b.$$.fragment),T=m(),s(C.$$.fragment),S=m(),s(H.$$.fragment),P=m(),s(B.$$.fragment),I=m(),U=i("div"),W=g("* Required"),X=m(),s(Z.$$.fragment),_=m(),s(tt.$$.fragment),et=m(),s(nt.$$.fragment),$t=m(),s(st.$$.fragment),this.h()},l(t){a(e.$$.fragment,t),n=u(t),a($.$$.fragment,t),r=u(t),a(l.$$.fragment,t),v=u(t),a(D.$$.fragment,t),O=u(t),a(b.$$.fragment,t),T=u(t),a(C.$$.fragment,t),S=u(t),a(H.$$.fragment,t),P=u(t),a(B.$$.fragment,t),I=u(t),U=d(t,"DIV",{class:!0});var s=h(U);W=x(s,"* Required"),s.forEach(k),X=u(t),a(Z.$$.fragment,t),_=u(t),a(tt.$$.fragment,t),et=u(t),a(nt.$$.fragment,t),$t=u(t),a(st.$$.fragment,t),this.h()},h(){w(U,"class","required")},m(t,s){o(e,t,s),y(t,n,s),o($,t,s),y(t,r,s),o(l,t,s),y(t,v,s),o(D,t,s),y(t,O,s),o(b,t,s),y(t,T,s),o(C,t,s),y(t,S,s),o(H,t,s),y(t,P,s),o(B,t,s),y(t,I,s),y(t,U,s),E(U,W),y(t,X,s),o(Z,t,s),y(t,_,s),o(tt,t,s),y(t,et,s),o(nt,t,s),y(t,$t,s),o(st,t,s),at=!0},p(t,n){const s={};16&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const a={};16&n&&(a.$$scope={dirty:n,ctx:t}),$.$set(a);const o={};16&n&&(o.$$scope={dirty:n,ctx:t}),l.$set(o);const r={};16&n&&(r.$$scope={dirty:n,ctx:t}),b.$set(r);const c={};16&n&&(c.$$scope={dirty:n,ctx:t}),C.$set(c);const p={};16&n&&(p.$$scope={dirty:n,ctx:t}),H.$set(p);const f={};16&n&&(f.$$scope={dirty:n,ctx:t}),B.$set(f);const m={};16&n&&(m.$$scope={dirty:n,ctx:t}),Z.$set(m);const i={};16&n&&(i.$$scope={dirty:n,ctx:t}),tt.$set(i);const g={};16&n&&(g.$$scope={dirty:n,ctx:t}),nt.$set(g);const u={};16&n&&(u.$$scope={dirty:n,ctx:t}),st.$set(u)},i(t){at||(c(e.$$.fragment,t),c($.$$.fragment,t),c(l.$$.fragment,t),c(D.$$.fragment,t),c(b.$$.fragment,t),c(C.$$.fragment,t),c(H.$$.fragment,t),c(B.$$.fragment,t),c(Z.$$.fragment,t),c(tt.$$.fragment,t),c(nt.$$.fragment,t),c(st.$$.fragment,t),at=!0)},o(t){p(e.$$.fragment,t),p($.$$.fragment,t),p(l.$$.fragment,t),p(D.$$.fragment,t),p(b.$$.fragment,t),p(C.$$.fragment,t),p(H.$$.fragment,t),p(B.$$.fragment,t),p(Z.$$.fragment,t),p(tt.$$.fragment,t),p(nt.$$.fragment,t),p(st.$$.fragment,t),at=!1},d(t){f(e,t),t&&k(n),f($,t),t&&k(r),f(l,t),t&&k(v),f(D,t),t&&k(O),f(b,t),t&&k(T),f(C,t),t&&k(S),f(H,t),t&&k(P),f(B,t),t&&k(I),t&&k(U),t&&k(X),f(Z,t),t&&k(_),f(tt,t),t&&k(et),f(nt,t),t&&k($t),f(st,t)}}}function Ut(t){let e,n;const m=[Yt];let i={$$slots:{default:[Kt]},$$scope:{ctx:t}};for(let t=0;t<m.length;t+=1)i=$(i,m[t]);return e=new T({props:i}),{c(){s(e.$$.fragment)},l(t){a(e.$$.fragment,t)},m(t,$){o(e,t,$),n=!0},p(t,[n]){const $=0&n?r(m,[l(Yt)]):{};16&n&&($.$$scope={dirty:n,ctx:t}),e.$set($)},i(t){n||(c(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){f(e,t)}}}const Yt={name:"AutocompleteOption",relatedComponents:[{name:"Autocomplete",link:"./docs/components/autocomplete"},{name:"AutocompleteField",link:"./docs/components/autocomplete-field"}]},{name:zt,relatedComponents:Lt}=Yt;function Jt(t){return[[{name:"Test Option",details:"Description"},{name:"Another One",details:"Different"},{name:"No Description"}]]}export default class extends t{constructor(t){super(),e(this,t,Jt,Ut,n,{})}}export{Yt as metadata};
