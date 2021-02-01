import{S as t,i as e,s as n,E as $,j as s,k as a,m as o,I as r,t as c,o as p,p as f,U as l,q as m,h as i,r as g,u,c as d,b as h,v as x,d as w,e as y,f as k,g as E,n as v,w as D,x as b,a1 as O}from"./client.e84cb235.js";import"./button.e1955733.js";import"./classes.ae819103.js";import"./card.7f90eb28.js";import"./label.3048b4ca.js";import{A as T}from"./autocomplete-option.b02accc7.js";import"./copyable-code.772f5cf7.js";import{L as j,H as A,P as C}from"./layout.c94d2714.js";import{M as N}from"./mark.a09af32a.js";import{T as S,a as R,b as q,c as F}from"./table.8e23e9d5.js";import{H as G}from"./h3.2391d076.js";import{H}from"./h2.bff7259e.js";import{S as I}from"./showcase.577a1f1a.js";import"./color-preview.72edcca8.js";import{C as P}from"./color-preview.02463dce.js";import{R as B}from"./related-components.95bf44de.js";function V(t,e,n){const $=t.slice();return $[1]=e[n],$}function U(t){let e;return{c(){e=g("AutocompleteOption")},l(t){e=x(t,"AutocompleteOption")},m(t,n){k(t,e,n)},d(t){t&&w(e)}}}function Y(t){let e;return{c(){e=g("A list item representing an autocomplete suggestion.")},l(t){e=x(t,"A list item representing an autocomplete suggestion.")},m(t,n){k(t,e,n)},d(t){t&&w(e)}}}function z(t){let e,n;return{c(){e=i("code"),n=g("Autocomplete")},l(t){e=d(t,"CODE",{});var $=h(e);n=x($,"Autocomplete"),$.forEach(w)},m(t,$){k(t,e,$),E(e,n)},d(t){t&&w(e)}}}function L(t){let e,n,$,r,l;return $=new N({props:{$$slots:{default:[z]},$$scope:{ctx:t}}}),{c(){e=g("It's unlikely that this component will be used by itself, but it is a part of the larger "),n=i("a"),s($.$$.fragment),r=g(" component."),this.h()},l(t){e=x(t,"It's unlikely that this component will be used by itself, but it is a part of the larger "),n=d(t,"A",{href:!0});var s=h(n);a($.$$.fragment,s),s.forEach(w),r=x(t," component."),this.h()},h(){y(n,"href","./docs/components/autocomplete")},m(t,s){k(t,e,s),k(t,n,s),o($,n,null),k(t,r,s),l=!0},p(t,e){const n={};16&e&&(n.$$scope={dirty:e,ctx:t}),$.$set(n)},i(t){l||(c($.$$.fragment,t),l=!0)},o(t){p($.$$.fragment,t),l=!1},d(t){t&&w(e),t&&w(n),f($),t&&w(r)}}}function M(t){let e,n;return e=new T({props:{option:t[1],query:"tio"}}),{c(){s(e.$$.fragment)},l(t){a(e.$$.fragment,t)},m(t,$){o(e,t,$),n=!0},p:v,i(t){n||(c(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){f(e,t)}}}function J(t){let e,n,$=t[0],s=[];for(let e=0;e<$.length;e+=1)s[e]=M(V(t,$,e));const a=t=>p(s[t],1,1,(()=>{s[t]=null}));return{c(){e=i("div");for(let t=0;t<s.length;t+=1)s[t].c();this.h()},l(t){e=d(t,"DIV",{slot:!0,class:!0});var n=h(e);for(let t=0;t<s.length;t+=1)s[t].l(n);n.forEach(w),this.h()},h(){y(e,"slot","showcase"),y(e,"class","padded")},m(t,$){k(t,e,$);for(let t=0;t<s.length;t+=1)s[t].m(e,null);n=!0},p(t,n){if(1&n){let o;for($=t[0],o=0;o<$.length;o+=1){const a=V(t,$,o);s[o]?(s[o].p(a,n),c(s[o],1)):(s[o]=M(a),s[o].c(),c(s[o],1),s[o].m(e,null))}for(D(),o=$.length;o<s.length;o+=1)a(o);b()}},i(t){if(!n){for(let t=0;t<$.length;t+=1)c(s[t]);n=!0}},o(t){s=s.filter(Boolean);for(let t=0;t<s.length;t+=1)p(s[t]);n=!1},d(t){t&&w(e),O(s,t)}}}function K(t){let e,n;return{c(){e=i("div"),n=i("pre"),this.h()},l(t){e=d(t,"DIV",{slot:!0});var $=h(e);n=d($,"PRE",{class:!0}),h(n).forEach(w),$.forEach(w),this.h()},h(){y(n,"class","language-svelte"),y(e,"slot","source")},m(t,$){k(t,e,$),E(e,n),n.innerHTML='<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">&#123;</span> name<span class="token operator">:</span> <span class="token string">\'Test Option\'</span><span class="token punctuation">,</span> details<span class="token operator">:</span> <span class="token string">\'Description\'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>\n    <span class="token punctuation">&#123;</span> name<span class="token operator">:</span> <span class="token string">\'Another One\'</span><span class="token punctuation">,</span> details<span class="token operator">:</span> <span class="token string">\'Different\'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>\n    <span class="token punctuation">&#123;</span> name<span class="token operator">:</span> <span class="token string">\'No Description\'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token each"><span class="token punctuation">&#123;</span><span class="token keyword">#each</span> <span class="token language-javascript">options </span><span class="token keyword">as</span> <span class="token language-javascript">option<span class="token punctuation">&#125;</span></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AutocompleteOption</span> <span class="token language-javascript"><span class="token punctuation">&#123;</span>option<span class="token punctuation">&#125;</span></span> <span class="token attr-name">query</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>tio<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n<span class="token each"><span class="token punctuation">&#123;</span><span class="token keyword">/each</span><span class="token punctuation">&#125;</span></span></code>'},p:v,d(t){t&&w(e)}}}function Q(t){let e;return{c(){e=m()},l(t){e=u(t)},m(t,n){k(t,e,n)},p:v,i:v,o:v,d(t){t&&w(e)}}}function W(t){let e;return{c(){e=g("Properties")},l(t){e=x(t,"Properties")},m(t,n){k(t,e,n)},d(t){t&&w(e)}}}function X(t){let e;return{c(){e=g("Functional Properties")},l(t){e=x(t,"Functional Properties")},m(t,n){k(t,e,n)},d(t){t&&w(e)}}}function Z(t){let e;return{c(){e=g("Name")},l(t){e=x(t,"Name")},m(t,n){k(t,e,n)},d(t){t&&w(e)}}}function _(t){let e;return{c(){e=g("Default")},l(t){e=x(t,"Default")},m(t,n){k(t,e,n)},d(t){t&&w(e)}}}function tt(t){let e;return{c(){e=g("Type")},l(t){e=x(t,"Type")},m(t,n){k(t,e,n)},d(t){t&&w(e)}}}function et(t){let e;return{c(){e=g("Description")},l(t){e=x(t,"Description")},m(t,n){k(t,e,n)},d(t){t&&w(e)}}}function nt(t){let e,n,$,r,l,i,g,d;return e=new q({props:{$$slots:{default:[Z]},$$scope:{ctx:t}}}),$=new q({props:{$$slots:{default:[_]},$$scope:{ctx:t}}}),l=new q({props:{$$slots:{default:[tt]},$$scope:{ctx:t}}}),g=new q({props:{$$slots:{default:[et]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=m(),s($.$$.fragment),r=m(),s(l.$$.fragment),i=m(),s(g.$$.fragment)},l(t){a(e.$$.fragment,t),n=u(t),a($.$$.fragment,t),r=u(t),a(l.$$.fragment,t),i=u(t),a(g.$$.fragment,t)},m(t,s){o(e,t,s),k(t,n,s),o($,t,s),k(t,r,s),o(l,t,s),k(t,i,s),o(g,t,s),d=!0},p(t,n){const s={};16&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const a={};16&n&&(a.$$scope={dirty:n,ctx:t}),$.$set(a);const o={};16&n&&(o.$$scope={dirty:n,ctx:t}),l.$set(o);const r={};16&n&&(r.$$scope={dirty:n,ctx:t}),g.$set(r)},i(t){d||(c(e.$$.fragment,t),c($.$$.fragment,t),c(l.$$.fragment,t),c(g.$$.fragment,t),d=!0)},o(t){p(e.$$.fragment,t),p($.$$.fragment,t),p(l.$$.fragment,t),p(g.$$.fragment,t),d=!1},d(t){f(e,t),t&&w(n),f($,t),t&&w(r),f(l,t),t&&w(i),f(g,t)}}}function $t(t){let e,n,$;return{c(){e=i("strong"),n=i("code"),$=g("option")},l(t){e=d(t,"STRONG",{});var s=h(e);n=d(s,"CODE",{});var a=h(n);$=x(a,"option"),a.forEach(w),s.forEach(w)},m(t,s){k(t,e,s),E(e,n),E(n,$)},d(t){t&&w(e)}}}function st(t){let e,n,$,r,l;return e=new N({props:{$$slots:{default:[$t]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=g(" "),$=i("span"),r=g("*"),this.h()},l(t){a(e.$$.fragment,t),n=x(t," "),$=d(t,"SPAN",{class:!0});var s=h($);r=x(s,"*"),s.forEach(w),this.h()},h(){y($,"class","required")},m(t,s){o(e,t,s),k(t,n,s),k(t,$,s),E($,r),l=!0},p(t,n){const $={};16&n&&($.$$scope={dirty:n,ctx:t}),e.$set($)},i(t){l||(c(e.$$.fragment,t),l=!0)},o(t){p(e.$$.fragment,t),l=!1},d(t){f(e,t),t&&w(n),t&&w($)}}}function at(t){let e,n;return{c(){e=i("code"),n=g("Object")},l(t){e=d(t,"CODE",{});var $=h(e);n=x($,"Object"),$.forEach(w)},m(t,$){k(t,e,$),E(e,n)},d(t){t&&w(e)}}}function ot(t){let e,n,$,s,a,o,r;return{c(){e=g("The option object, containing a "),n=i("code"),$=g("name"),s=g(" field and, optionally, a "),a=i("code"),o=g("details"),r=g(" field, both strings.")},l(t){e=x(t,"The option object, containing a "),n=d(t,"CODE",{});var c=h(n);$=x(c,"name"),c.forEach(w),s=x(t," field and, optionally, a "),a=d(t,"CODE",{});var p=h(a);o=x(p,"details"),p.forEach(w),r=x(t," field, both strings.")},m(t,c){k(t,e,c),k(t,n,c),E(n,$),k(t,s,c),k(t,a,c),E(a,o),k(t,r,c)},d(t){t&&w(e),t&&w(n),t&&w(s),t&&w(a),t&&w(r)}}}function rt(t){let e,n,$,r,l,i,g,d;return e=new F({props:{$$slots:{default:[st]},$$scope:{ctx:t}}}),$=new F({}),l=new F({props:{$$slots:{default:[at]},$$scope:{ctx:t}}}),g=new F({props:{$$slots:{default:[ot]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=m(),s($.$$.fragment),r=m(),s(l.$$.fragment),i=m(),s(g.$$.fragment)},l(t){a(e.$$.fragment,t),n=u(t),a($.$$.fragment,t),r=u(t),a(l.$$.fragment,t),i=u(t),a(g.$$.fragment,t)},m(t,s){o(e,t,s),k(t,n,s),o($,t,s),k(t,r,s),o(l,t,s),k(t,i,s),o(g,t,s),d=!0},p(t,n){const $={};16&n&&($.$$scope={dirty:n,ctx:t}),e.$set($);const s={};16&n&&(s.$$scope={dirty:n,ctx:t}),l.$set(s);const a={};16&n&&(a.$$scope={dirty:n,ctx:t}),g.$set(a)},i(t){d||(c(e.$$.fragment,t),c($.$$.fragment,t),c(l.$$.fragment,t),c(g.$$.fragment,t),d=!0)},o(t){p(e.$$.fragment,t),p($.$$.fragment,t),p(l.$$.fragment,t),p(g.$$.fragment,t),d=!1},d(t){f(e,t),t&&w(n),f($,t),t&&w(r),f(l,t),t&&w(i),f(g,t)}}}function ct(t){let e,n,$;return{c(){e=i("strong"),n=i("code"),$=g("query")},l(t){e=d(t,"STRONG",{});var s=h(e);n=d(s,"CODE",{});var a=h(n);$=x(a,"query"),a.forEach(w),s.forEach(w)},m(t,s){k(t,e,s),E(e,n),E(n,$)},d(t){t&&w(e)}}}function pt(t){let e,n;return{c(){e=i("code"),n=g("null")},l(t){e=d(t,"CODE",{});var $=h(e);n=x($,"null"),$.forEach(w)},m(t,$){k(t,e,$),E(e,n)},d(t){t&&w(e)}}}function ft(t){let e,n;return{c(){e=i("code"),n=g("string")},l(t){e=d(t,"CODE",{});var $=h(e);n=x($,"string"),$.forEach(w)},m(t,$){k(t,e,$),E(e,n)},d(t){t&&w(e)}}}function lt(t){let e;return{c(){e=g("The substring to seek out and highlight among the name and the details.")},l(t){e=x(t,"The substring to seek out and highlight among the name and the details.")},m(t,n){k(t,e,n)},d(t){t&&w(e)}}}function mt(t){let e,n,$,r,l,i,g,d;return e=new F({props:{$$slots:{default:[ct]},$$scope:{ctx:t}}}),$=new F({props:{$$slots:{default:[pt]},$$scope:{ctx:t}}}),l=new F({props:{$$slots:{default:[ft]},$$scope:{ctx:t}}}),g=new F({props:{$$slots:{default:[lt]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=m(),s($.$$.fragment),r=m(),s(l.$$.fragment),i=m(),s(g.$$.fragment)},l(t){a(e.$$.fragment,t),n=u(t),a($.$$.fragment,t),r=u(t),a(l.$$.fragment,t),i=u(t),a(g.$$.fragment,t)},m(t,s){o(e,t,s),k(t,n,s),o($,t,s),k(t,r,s),o(l,t,s),k(t,i,s),o(g,t,s),d=!0},p(t,n){const s={};16&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const a={};16&n&&(a.$$scope={dirty:n,ctx:t}),$.$set(a);const o={};16&n&&(o.$$scope={dirty:n,ctx:t}),l.$set(o);const r={};16&n&&(r.$$scope={dirty:n,ctx:t}),g.$set(r)},i(t){d||(c(e.$$.fragment,t),c($.$$.fragment,t),c(l.$$.fragment,t),c(g.$$.fragment,t),d=!0)},o(t){p(e.$$.fragment,t),p($.$$.fragment,t),p(l.$$.fragment,t),p(g.$$.fragment,t),d=!1},d(t){f(e,t),t&&w(n),f($,t),t&&w(r),f(l,t),t&&w(i),f(g,t)}}}function it(t){let e,n,$,r,l,g,x,y;return n=new R({props:{$$slots:{default:[nt]},$$scope:{ctx:t}}}),l=new R({props:{$$slots:{default:[rt]},$$scope:{ctx:t}}}),x=new R({props:{$$slots:{default:[mt]},$$scope:{ctx:t}}}),{c(){e=i("thead"),s(n.$$.fragment),$=m(),r=i("tbody"),s(l.$$.fragment),g=m(),s(x.$$.fragment)},l(t){e=d(t,"THEAD",{});var s=h(e);a(n.$$.fragment,s),s.forEach(w),$=u(t),r=d(t,"TBODY",{});var o=h(r);a(l.$$.fragment,o),g=u(o),a(x.$$.fragment,o),o.forEach(w)},m(t,s){k(t,e,s),o(n,e,null),k(t,$,s),k(t,r,s),o(l,r,null),E(r,g),o(x,r,null),y=!0},p(t,e){const $={};16&e&&($.$$scope={dirty:e,ctx:t}),n.$set($);const s={};16&e&&(s.$$scope={dirty:e,ctx:t}),l.$set(s);const a={};16&e&&(a.$$scope={dirty:e,ctx:t}),x.$set(a)},i(t){y||(c(n.$$.fragment,t),c(l.$$.fragment,t),c(x.$$.fragment,t),y=!0)},o(t){p(n.$$.fragment,t),p(l.$$.fragment,t),p(x.$$.fragment,t),y=!1},d(t){t&&w(e),f(n),t&&w($),t&&w(r),f(l),f(x)}}}function gt(t){let e;return{c(){e=g("Events")},l(t){e=x(t,"Events")},m(t,n){k(t,e,n)},d(t){t&&w(e)}}}function ut(t){let e;return{c(){e=g("Name")},l(t){e=x(t,"Name")},m(t,n){k(t,e,n)},d(t){t&&w(e)}}}function dt(t){let e;return{c(){e=g("Event Detail")},l(t){e=x(t,"Event Detail")},m(t,n){k(t,e,n)},d(t){t&&w(e)}}}function ht(t){let e;return{c(){e=g("Description")},l(t){e=x(t,"Description")},m(t,n){k(t,e,n)},d(t){t&&w(e)}}}function xt(t){let e,n,$,r,l,i;return e=new q({props:{$$slots:{default:[ut]},$$scope:{ctx:t}}}),$=new q({props:{$$slots:{default:[dt]},$$scope:{ctx:t}}}),l=new q({props:{$$slots:{default:[ht]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=m(),s($.$$.fragment),r=m(),s(l.$$.fragment)},l(t){a(e.$$.fragment,t),n=u(t),a($.$$.fragment,t),r=u(t),a(l.$$.fragment,t)},m(t,s){o(e,t,s),k(t,n,s),o($,t,s),k(t,r,s),o(l,t,s),i=!0},p(t,n){const s={};16&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const a={};16&n&&(a.$$scope={dirty:n,ctx:t}),$.$set(a);const o={};16&n&&(o.$$scope={dirty:n,ctx:t}),l.$set(o)},i(t){i||(c(e.$$.fragment,t),c($.$$.fragment,t),c(l.$$.fragment,t),i=!0)},o(t){p(e.$$.fragment,t),p($.$$.fragment,t),p(l.$$.fragment,t),i=!1},d(t){f(e,t),t&&w(n),f($,t),t&&w(r),f(l,t)}}}function wt(t){let e,n,$;return{c(){e=i("strong"),n=i("code"),$=g("click")},l(t){e=d(t,"STRONG",{});var s=h(e);n=d(s,"CODE",{});var a=h(n);$=x(a,"click"),a.forEach(w),s.forEach(w)},m(t,s){k(t,e,s),E(e,n),E(n,$)},d(t){t&&w(e)}}}function yt(t){let e,n;return{c(){e=i("code"),n=g("{ nativeEvent }")},l(t){e=d(t,"CODE",{});var $=h(e);n=x($,"{ nativeEvent }"),$.forEach(w)},m(t,$){k(t,e,$),E(e,n)},d(t){t&&w(e)}}}function kt(t){let e,n;return{c(){e=i("code"),n=g("AutocompleteField")},l(t){e=d(t,"CODE",{});var $=h(e);n=x($,"AutocompleteField"),$.forEach(w)},m(t,$){k(t,e,$),E(e,n)},d(t){t&&w(e)}}}function Et(t){let e,n,$,r,l,m;return $=new N({props:{$$slots:{default:[kt]},$$scope:{ctx:t}}}),{c(){e=g("Fired when the element is clicked. A necessary part of conforming to the "),n=i("a"),s($.$$.fragment),r=g("'s"),l=g(" interface."),this.h()},l(t){e=x(t,"Fired when the element is clicked. A necessary part of conforming to the "),n=d(t,"A",{href:!0});var s=h(n);a($.$$.fragment,s),r=x(s,"'s"),s.forEach(w),l=x(t," interface."),this.h()},h(){y(n,"href","./docs/components/autocomplete-field")},m(t,s){k(t,e,s),k(t,n,s),o($,n,null),E(n,r),k(t,l,s),m=!0},p(t,e){const n={};16&e&&(n.$$scope={dirty:e,ctx:t}),$.$set(n)},i(t){m||(c($.$$.fragment,t),m=!0)},o(t){p($.$$.fragment,t),m=!1},d(t){t&&w(e),t&&w(n),f($),t&&w(l)}}}function vt(t){let e,n,$,r,l,i;return e=new F({props:{$$slots:{default:[wt]},$$scope:{ctx:t}}}),$=new F({props:{$$slots:{default:[yt]},$$scope:{ctx:t}}}),l=new F({props:{$$slots:{default:[Et]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=m(),s($.$$.fragment),r=m(),s(l.$$.fragment)},l(t){a(e.$$.fragment,t),n=u(t),a($.$$.fragment,t),r=u(t),a(l.$$.fragment,t)},m(t,s){o(e,t,s),k(t,n,s),o($,t,s),k(t,r,s),o(l,t,s),i=!0},p(t,n){const s={};16&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const a={};16&n&&(a.$$scope={dirty:n,ctx:t}),$.$set(a);const o={};16&n&&(o.$$scope={dirty:n,ctx:t}),l.$set(o)},i(t){i||(c(e.$$.fragment,t),c($.$$.fragment,t),c(l.$$.fragment,t),i=!0)},o(t){p(e.$$.fragment,t),p($.$$.fragment,t),p(l.$$.fragment,t),i=!1},d(t){f(e,t),t&&w(n),f($,t),t&&w(r),f(l,t)}}}function Dt(t){let e,n,$,r,l,g;return n=new R({props:{$$slots:{default:[xt]},$$scope:{ctx:t}}}),l=new R({props:{$$slots:{default:[vt]},$$scope:{ctx:t}}}),{c(){e=i("thead"),s(n.$$.fragment),$=m(),r=i("tbody"),s(l.$$.fragment)},l(t){e=d(t,"THEAD",{});var s=h(e);a(n.$$.fragment,s),s.forEach(w),$=u(t),r=d(t,"TBODY",{});var o=h(r);a(l.$$.fragment,o),o.forEach(w)},m(t,s){k(t,e,s),o(n,e,null),k(t,$,s),k(t,r,s),o(l,r,null),g=!0},p(t,e){const $={};16&e&&($.$$scope={dirty:e,ctx:t}),n.$set($);const s={};16&e&&(s.$$scope={dirty:e,ctx:t}),l.$set(s)},i(t){g||(c(n.$$.fragment,t),c(l.$$.fragment,t),g=!0)},o(t){p(n.$$.fragment,t),p(l.$$.fragment,t),g=!1},d(t){t&&w(e),f(n),t&&w($),t&&w(r),f(l)}}}function bt(t){let e;return{c(){e=g("SCSS Variables")},l(t){e=x(t,"SCSS Variables")},m(t,n){k(t,e,n)},d(t){t&&w(e)}}}function Ot(t){let e;return{c(){e=g("Name")},l(t){e=x(t,"Name")},m(t,n){k(t,e,n)},d(t){t&&w(e)}}}function Tt(t){let e;return{c(){e=g("Description")},l(t){e=x(t,"Description")},m(t,n){k(t,e,n)},d(t){t&&w(e)}}}function jt(t){let e;return{c(){e=g("Default")},l(t){e=x(t,"Default")},m(t,n){k(t,e,n)},d(t){t&&w(e)}}}function At(t){let e,n,$,r,l,i;return e=new q({props:{$$slots:{default:[Ot]},$$scope:{ctx:t}}}),$=new q({props:{$$slots:{default:[Tt]},$$scope:{ctx:t}}}),l=new q({props:{$$slots:{default:[jt]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=m(),s($.$$.fragment),r=m(),s(l.$$.fragment)},l(t){a(e.$$.fragment,t),n=u(t),a($.$$.fragment,t),r=u(t),a(l.$$.fragment,t)},m(t,s){o(e,t,s),k(t,n,s),o($,t,s),k(t,r,s),o(l,t,s),i=!0},p(t,n){const s={};16&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const a={};16&n&&(a.$$scope={dirty:n,ctx:t}),$.$set(a);const o={};16&n&&(o.$$scope={dirty:n,ctx:t}),l.$set(o)},i(t){i||(c(e.$$.fragment,t),c($.$$.fragment,t),c(l.$$.fragment,t),i=!0)},o(t){p(e.$$.fragment,t),p($.$$.fragment,t),p(l.$$.fragment,t),i=!1},d(t){f(e,t),t&&w(n),f($,t),t&&w(r),f(l,t)}}}function Ct(t){let e,n,$;return{c(){e=i("strong"),n=i("code"),$=g("$main")},l(t){e=d(t,"STRONG",{});var s=h(e);n=d(s,"CODE",{});var a=h(n);$=x(a,"$main"),a.forEach(w),s.forEach(w)},m(t,s){k(t,e,s),E(e,n),E(n,$)},d(t){t&&w(e)}}}function Nt(t){let e;return{c(){e=g("The background color on hover and the color of the highlight.")},l(t){e=x(t,"The background color on hover and the color of the highlight.")},m(t,n){k(t,e,n)},d(t){t&&w(e)}}}function St(t){let e,n;return e=new P({props:{value:"#4300B0"}}),{c(){s(e.$$.fragment)},l(t){a(e.$$.fragment,t)},m(t,$){o(e,t,$),n=!0},p:v,i(t){n||(c(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){f(e,t)}}}function Rt(t){let e,n,$,r,l,i;return e=new F({props:{$$slots:{default:[Ct]},$$scope:{ctx:t}}}),$=new F({props:{$$slots:{default:[Nt]},$$scope:{ctx:t}}}),l=new F({props:{$$slots:{default:[St]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=m(),s($.$$.fragment),r=m(),s(l.$$.fragment)},l(t){a(e.$$.fragment,t),n=u(t),a($.$$.fragment,t),r=u(t),a(l.$$.fragment,t)},m(t,s){o(e,t,s),k(t,n,s),o($,t,s),k(t,r,s),o(l,t,s),i=!0},p(t,n){const s={};16&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const a={};16&n&&(a.$$scope={dirty:n,ctx:t}),$.$set(a);const o={};16&n&&(o.$$scope={dirty:n,ctx:t}),l.$set(o)},i(t){i||(c(e.$$.fragment,t),c($.$$.fragment,t),c(l.$$.fragment,t),i=!0)},o(t){p(e.$$.fragment,t),p($.$$.fragment,t),p(l.$$.fragment,t),i=!1},d(t){f(e,t),t&&w(n),f($,t),t&&w(r),f(l,t)}}}function qt(t){let e,n,$;return{c(){e=i("strong"),n=i("code"),$=g("$font")},l(t){e=d(t,"STRONG",{});var s=h(e);n=d(s,"CODE",{});var a=h(n);$=x(a,"$font"),a.forEach(w),s.forEach(w)},m(t,s){k(t,e,s),E(e,n),E(n,$)},d(t){t&&w(e)}}}function Ft(t){let e;return{c(){e=g("The font of the component.")},l(t){e=x(t,"The font of the component.")},m(t,n){k(t,e,n)},d(t){t&&w(e)}}}function Gt(t){let e,n;return{c(){e=i("code"),n=g("'Ubuntu'")},l(t){e=d(t,"CODE",{});var $=h(e);n=x($,"'Ubuntu'"),$.forEach(w)},m(t,$){k(t,e,$),E(e,n)},d(t){t&&w(e)}}}function Ht(t){let e,n,$,r,l,i;return e=new F({props:{$$slots:{default:[qt]},$$scope:{ctx:t}}}),$=new F({props:{$$slots:{default:[Ft]},$$scope:{ctx:t}}}),l=new F({props:{$$slots:{default:[Gt]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=m(),s($.$$.fragment),r=m(),s(l.$$.fragment)},l(t){a(e.$$.fragment,t),n=u(t),a($.$$.fragment,t),r=u(t),a(l.$$.fragment,t)},m(t,s){o(e,t,s),k(t,n,s),o($,t,s),k(t,r,s),o(l,t,s),i=!0},p(t,n){const s={};16&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const a={};16&n&&(a.$$scope={dirty:n,ctx:t}),$.$set(a);const o={};16&n&&(o.$$scope={dirty:n,ctx:t}),l.$set(o)},i(t){i||(c(e.$$.fragment,t),c($.$$.fragment,t),c(l.$$.fragment,t),i=!0)},o(t){p(e.$$.fragment,t),p($.$$.fragment,t),p(l.$$.fragment,t),i=!1},d(t){f(e,t),t&&w(n),f($,t),t&&w(r),f(l,t)}}}function It(t){let e,n,$;return{c(){e=i("strong"),n=i("code"),$=g("$thin-font-weight")},l(t){e=d(t,"STRONG",{});var s=h(e);n=d(s,"CODE",{});var a=h(n);$=x(a,"$thin-font-weight"),a.forEach(w),s.forEach(w)},m(t,s){k(t,e,s),E(e,n),E(n,$)},d(t){t&&w(e)}}}function Pt(t){let e;return{c(){e=g("The thin font weight to differentiate the details from the name.")},l(t){e=x(t,"The thin font weight to differentiate the details from the name.")},m(t,n){k(t,e,n)},d(t){t&&w(e)}}}function Bt(t){let e,n;return{c(){e=i("code"),n=g("300")},l(t){e=d(t,"CODE",{});var $=h(e);n=x($,"300"),$.forEach(w)},m(t,$){k(t,e,$),E(e,n)},d(t){t&&w(e)}}}function Vt(t){let e,n,$,r,l,i;return e=new F({props:{$$slots:{default:[It]},$$scope:{ctx:t}}}),$=new F({props:{$$slots:{default:[Pt]},$$scope:{ctx:t}}}),l=new F({props:{$$slots:{default:[Bt]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=m(),s($.$$.fragment),r=m(),s(l.$$.fragment)},l(t){a(e.$$.fragment,t),n=u(t),a($.$$.fragment,t),r=u(t),a(l.$$.fragment,t)},m(t,s){o(e,t,s),k(t,n,s),o($,t,s),k(t,r,s),o(l,t,s),i=!0},p(t,n){const s={};16&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const a={};16&n&&(a.$$scope={dirty:n,ctx:t}),$.$set(a);const o={};16&n&&(o.$$scope={dirty:n,ctx:t}),l.$set(o)},i(t){i||(c(e.$$.fragment,t),c($.$$.fragment,t),c(l.$$.fragment,t),i=!0)},o(t){p(e.$$.fragment,t),p($.$$.fragment,t),p(l.$$.fragment,t),i=!1},d(t){f(e,t),t&&w(n),f($,t),t&&w(r),f(l,t)}}}function Ut(t){let e,n,$;return{c(){e=i("strong"),n=i("code"),$=g("$bold-font-weight")},l(t){e=d(t,"STRONG",{});var s=h(e);n=d(s,"CODE",{});var a=h(n);$=x(a,"$bold-font-weight"),a.forEach(w),s.forEach(w)},m(t,s){k(t,e,s),E(e,n),E(n,$)},d(t){t&&w(e)}}}function Yt(t){let e;return{c(){e=g("The bold font weight to emphasize the highight.")},l(t){e=x(t,"The bold font weight to emphasize the highight.")},m(t,n){k(t,e,n)},d(t){t&&w(e)}}}function zt(t){let e,n;return{c(){e=i("code"),n=g("500")},l(t){e=d(t,"CODE",{});var $=h(e);n=x($,"500"),$.forEach(w)},m(t,$){k(t,e,$),E(e,n)},d(t){t&&w(e)}}}function Lt(t){let e,n,$,r,l,i;return e=new F({props:{$$slots:{default:[Ut]},$$scope:{ctx:t}}}),$=new F({props:{$$slots:{default:[Yt]},$$scope:{ctx:t}}}),l=new F({props:{$$slots:{default:[zt]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=m(),s($.$$.fragment),r=m(),s(l.$$.fragment)},l(t){a(e.$$.fragment,t),n=u(t),a($.$$.fragment,t),r=u(t),a(l.$$.fragment,t)},m(t,s){o(e,t,s),k(t,n,s),o($,t,s),k(t,r,s),o(l,t,s),i=!0},p(t,n){const s={};16&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const a={};16&n&&(a.$$scope={dirty:n,ctx:t}),$.$set(a);const o={};16&n&&(o.$$scope={dirty:n,ctx:t}),l.$set(o)},i(t){i||(c(e.$$.fragment,t),c($.$$.fragment,t),c(l.$$.fragment,t),i=!0)},o(t){p(e.$$.fragment,t),p($.$$.fragment,t),p(l.$$.fragment,t),i=!1},d(t){f(e,t),t&&w(n),f($,t),t&&w(r),f(l,t)}}}function Mt(t){let e,n,$,r,l,g,x,y,v,D,b,O;return n=new R({props:{$$slots:{default:[At]},$$scope:{ctx:t}}}),l=new R({props:{$$slots:{default:[Rt]},$$scope:{ctx:t}}}),x=new R({props:{$$slots:{default:[Ht]},$$scope:{ctx:t}}}),v=new R({props:{$$slots:{default:[Vt]},$$scope:{ctx:t}}}),b=new R({props:{$$slots:{default:[Lt]},$$scope:{ctx:t}}}),{c(){e=i("thead"),s(n.$$.fragment),$=m(),r=i("tbody"),s(l.$$.fragment),g=m(),s(x.$$.fragment),y=m(),s(v.$$.fragment),D=m(),s(b.$$.fragment)},l(t){e=d(t,"THEAD",{});var s=h(e);a(n.$$.fragment,s),s.forEach(w),$=u(t),r=d(t,"TBODY",{});var o=h(r);a(l.$$.fragment,o),g=u(o),a(x.$$.fragment,o),y=u(o),a(v.$$.fragment,o),D=u(o),a(b.$$.fragment,o),o.forEach(w)},m(t,s){k(t,e,s),o(n,e,null),k(t,$,s),k(t,r,s),o(l,r,null),E(r,g),o(x,r,null),E(r,y),o(v,r,null),E(r,D),o(b,r,null),O=!0},p(t,e){const $={};16&e&&($.$$scope={dirty:e,ctx:t}),n.$set($);const s={};16&e&&(s.$$scope={dirty:e,ctx:t}),l.$set(s);const a={};16&e&&(a.$$scope={dirty:e,ctx:t}),x.$set(a);const o={};16&e&&(o.$$scope={dirty:e,ctx:t}),v.$set(o);const r={};16&e&&(r.$$scope={dirty:e,ctx:t}),b.$set(r)},i(t){O||(c(n.$$.fragment,t),c(l.$$.fragment,t),c(x.$$.fragment,t),c(v.$$.fragment,t),c(b.$$.fragment,t),O=!0)},o(t){p(n.$$.fragment,t),p(l.$$.fragment,t),p(x.$$.fragment,t),p(v.$$.fragment,t),p(b.$$.fragment,t),O=!1},d(t){t&&w(e),f(n),t&&w($),t&&w(r),f(l),f(x),f(v),f(b)}}}function Jt(t){let e,n,$,r,l,v,D,b,O,T,j,N,R,q,F,P,V,z,M,Z,_,tt,et,nt,$t,st,at;return e=new A({props:{$$slots:{default:[U]},$$scope:{ctx:t}}}),$=new C({props:{$$slots:{default:[Y]},$$scope:{ctx:t}}}),l=new C({props:{$$slots:{default:[L]},$$scope:{ctx:t}}}),D=new B({props:{components:Xt}}),O=new I({props:{$$slots:{default:[Q],source:[K],showcase:[J]},$$scope:{ctx:t}}}),j=new H({props:{id:"properties",$$slots:{default:[W]},$$scope:{ctx:t}}}),R=new G({props:{$$slots:{default:[X]},$$scope:{ctx:t}}}),F=new S({props:{$$slots:{default:[it]},$$scope:{ctx:t}}}),Z=new H({props:{id:"events",$$slots:{default:[gt]},$$scope:{ctx:t}}}),tt=new S({props:{$$slots:{default:[Dt]},$$scope:{ctx:t}}}),nt=new H({props:{id:"scss-variables",$$slots:{default:[bt]},$$scope:{ctx:t}}}),st=new S({props:{$$slots:{default:[Mt]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=m(),s($.$$.fragment),r=m(),s(l.$$.fragment),v=m(),s(D.$$.fragment),b=m(),s(O.$$.fragment),T=m(),s(j.$$.fragment),N=m(),s(R.$$.fragment),q=m(),s(F.$$.fragment),P=m(),V=i("div"),z=g("* Required"),M=m(),s(Z.$$.fragment),_=m(),s(tt.$$.fragment),et=m(),s(nt.$$.fragment),$t=m(),s(st.$$.fragment),this.h()},l(t){a(e.$$.fragment,t),n=u(t),a($.$$.fragment,t),r=u(t),a(l.$$.fragment,t),v=u(t),a(D.$$.fragment,t),b=u(t),a(O.$$.fragment,t),T=u(t),a(j.$$.fragment,t),N=u(t),a(R.$$.fragment,t),q=u(t),a(F.$$.fragment,t),P=u(t),V=d(t,"DIV",{class:!0});var s=h(V);z=x(s,"* Required"),s.forEach(w),M=u(t),a(Z.$$.fragment,t),_=u(t),a(tt.$$.fragment,t),et=u(t),a(nt.$$.fragment,t),$t=u(t),a(st.$$.fragment,t),this.h()},h(){y(V,"class","required")},m(t,s){o(e,t,s),k(t,n,s),o($,t,s),k(t,r,s),o(l,t,s),k(t,v,s),o(D,t,s),k(t,b,s),o(O,t,s),k(t,T,s),o(j,t,s),k(t,N,s),o(R,t,s),k(t,q,s),o(F,t,s),k(t,P,s),k(t,V,s),E(V,z),k(t,M,s),o(Z,t,s),k(t,_,s),o(tt,t,s),k(t,et,s),o(nt,t,s),k(t,$t,s),o(st,t,s),at=!0},p(t,n){const s={};16&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const a={};16&n&&(a.$$scope={dirty:n,ctx:t}),$.$set(a);const o={};16&n&&(o.$$scope={dirty:n,ctx:t}),l.$set(o);const r={};16&n&&(r.$$scope={dirty:n,ctx:t}),O.$set(r);const c={};16&n&&(c.$$scope={dirty:n,ctx:t}),j.$set(c);const p={};16&n&&(p.$$scope={dirty:n,ctx:t}),R.$set(p);const f={};16&n&&(f.$$scope={dirty:n,ctx:t}),F.$set(f);const m={};16&n&&(m.$$scope={dirty:n,ctx:t}),Z.$set(m);const i={};16&n&&(i.$$scope={dirty:n,ctx:t}),tt.$set(i);const g={};16&n&&(g.$$scope={dirty:n,ctx:t}),nt.$set(g);const u={};16&n&&(u.$$scope={dirty:n,ctx:t}),st.$set(u)},i(t){at||(c(e.$$.fragment,t),c($.$$.fragment,t),c(l.$$.fragment,t),c(D.$$.fragment,t),c(O.$$.fragment,t),c(j.$$.fragment,t),c(R.$$.fragment,t),c(F.$$.fragment,t),c(Z.$$.fragment,t),c(tt.$$.fragment,t),c(nt.$$.fragment,t),c(st.$$.fragment,t),at=!0)},o(t){p(e.$$.fragment,t),p($.$$.fragment,t),p(l.$$.fragment,t),p(D.$$.fragment,t),p(O.$$.fragment,t),p(j.$$.fragment,t),p(R.$$.fragment,t),p(F.$$.fragment,t),p(Z.$$.fragment,t),p(tt.$$.fragment,t),p(nt.$$.fragment,t),p(st.$$.fragment,t),at=!1},d(t){f(e,t),t&&w(n),f($,t),t&&w(r),f(l,t),t&&w(v),f(D,t),t&&w(b),f(O,t),t&&w(T),f(j,t),t&&w(N),f(R,t),t&&w(q),f(F,t),t&&w(P),t&&w(V),t&&w(M),f(Z,t),t&&w(_),f(tt,t),t&&w(et),f(nt,t),t&&w($t),f(st,t)}}}function Kt(t){let e,n;const m=[Qt];let i={$$slots:{default:[Jt]},$$scope:{ctx:t}};for(let t=0;t<m.length;t+=1)i=$(i,m[t]);return e=new j({props:i}),{c(){s(e.$$.fragment)},l(t){a(e.$$.fragment,t)},m(t,$){o(e,t,$),n=!0},p(t,[n]){const $=0&n?r(m,[l(Qt)]):{};16&n&&($.$$scope={dirty:n,ctx:t}),e.$set($)},i(t){n||(c(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){f(e,t)}}}const Qt={name:"AutocompleteOption",relatedComponents:[{name:"Autocomplete",link:"./docs/components/autocomplete"},{name:"AutocompleteField",link:"./docs/components/autocomplete-field"}]},{name:Wt,relatedComponents:Xt}=Qt;function Zt(t){return[[{name:"Test Option",details:"Description"},{name:"Another One",details:"Different"},{name:"No Description"}]]}export default class extends t{constructor(t){super(),e(this,t,Zt,Kt,n,{})}}export{Qt as metadata};