import{S as t,i as e,s as n,G as s,j as $,k as a,m as o,N as r,t as c,o as p,p as l,U as f,q as m,h as d,r as i,u as g,c as u,b as h,v as x,d as w,f as y,g as k,e as v,n as E,O as D}from"./client.00700382.js";import{L as b,H as T,P as O}from"./layout.495795ba.js";import{B as C}from"./button.d86b751b.js";import{D as j,a as S}from"./dropdown.d5981bea.js";import{C as N}from"./ChevronDownIcon.e73410a4.js";import{S as A}from"./showcase.89b50cac.js";import"./color-preview.72edcca8.js";import"./shadow-preview.d36d4835.js";import{R as B}from"./related-components.2e6f9cef.js";import{H as F}from"./h2.f1467d78.js";import{H}from"./h3.317310f4.js";import{T as P,a as R,b as I,c as G}from"./table.832ce55e.js";import"./classes.2453fa25.js";import"./label.52365dab.js";import"./copyable-code.97dbf36b.js";import"./card.c2c8da01.js";function Y(t){let e;return{c(){e=i("DropdownShell")},l(t){e=x(t,"DropdownShell")},m(t,n){y(t,e,n)},d(t){t&&w(e)}}}function U(t){let e,n,s,$,a;return{c(){e=i("The container for the "),n=d("a"),s=d("code"),$=i("Dropdown"),a=i(" and its activating handle."),this.h()},l(t){e=x(t,"The container for the "),n=u(t,"A",{href:!0});var o=h(n);s=u(o,"CODE",{});var r=h(s);$=x(r,"Dropdown"),r.forEach(w),o.forEach(w),a=x(t," and its activating handle."),this.h()},h(){v(n,"href","./docs/components/dropdown")},m(t,o){y(t,e,o),y(t,n,o),k(n,s),k(s,$),y(t,a,o)},d(t){t&&w(e),t&&w(n),t&&w(a)}}}function V(t){let e,n,s;return n=new N({props:{size:"24",class:"ml dropdown-chevron"}}),{c(){e=i("this is the handle\n        "),$(n.$$.fragment)},l(t){e=x(t,"this is the handle\n        "),a(n.$$.fragment,t)},m(t,$){y(t,e,$),o(n,t,$),s=!0},p:E,i(t){s||(c(n.$$.fragment,t),s=!0)},o(t){p(n.$$.fragment,t),s=!1},d(t){t&&w(e),l(n,t)}}}function z(t){let e,n;return{c(){e=d("div"),n=i("and this is the dropdown"),this.h()},l(t){e=u(t,"DIV",{class:!0});var s=h(e);n=x(s,"and this is the dropdown"),s.forEach(w),this.h()},h(){v(e,"class","padded svelte-fhk3a2")},m(t,s){y(t,e,s),k(e,n)},d(t){t&&w(e)}}}function L(t){let e,n,s,r;return e=new C({props:{$$slots:{default:[V]},$$scope:{ctx:t}}}),e.$on("click",(function(){D(t[0])&&t[0].apply(this,arguments)})),s=new S({props:{right:!0,$$slots:{default:[z]},$$scope:{ctx:t}}}),{c(){$(e.$$.fragment),n=m(),$(s.$$.fragment)},l(t){a(e.$$.fragment,t),n=g(t),a(s.$$.fragment,t)},m(t,$){o(e,t,$),y(t,n,$),o(s,t,$),r=!0},p(n,$){t=n;const a={};2&$&&(a.$$scope={dirty:$,ctx:t}),e.$set(a);const o={};2&$&&(o.$$scope={dirty:$,ctx:t}),s.$set(o)},i(t){r||(c(e.$$.fragment,t),c(s.$$.fragment,t),r=!0)},o(t){p(e.$$.fragment,t),p(s.$$.fragment,t),r=!1},d(t){l(e,t),t&&w(n),l(s,t)}}}function M(t){let e,n,s;return{c(){e=i("Useless without a "),n=d("code"),s=i("<Dropdown />")},l(t){e=x(t,"Useless without a "),n=u(t,"CODE",{});var $=h(n);s=x($,"<Dropdown />"),$.forEach(w)},m(t,$){y(t,e,$),y(t,n,$),k(n,s)},d(t){t&&w(e),t&&w(n)}}}function q(t){let e,n,s,r,f;return n=new j({props:{$$slots:{default:[L,({toggle:t})=>({0:t}),({toggle:t})=>t?1:0]},$$scope:{ctx:t}}}),r=new j({props:{$$slots:{default:[M]},$$scope:{ctx:t}}}),{c(){e=d("div"),$(n.$$.fragment),s=m(),$(r.$$.fragment),this.h()},l(t){e=u(t,"DIV",{slot:!0,class:!0});var $=h(e);a(n.$$.fragment,$),s=g($),a(r.$$.fragment,$),$.forEach(w),this.h()},h(){v(e,"slot","showcase"),v(e,"class","padded svelte-fhk3a2")},m(t,$){y(t,e,$),o(n,e,null),k(e,s),o(r,e,null),f=!0},p(t,e){const s={};3&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s);const $={};2&e&&($.$$scope={dirty:e,ctx:t}),r.$set($)},i(t){f||(c(n.$$.fragment,t),c(r.$$.fragment,t),f=!0)},o(t){p(n.$$.fragment,t),p(r.$$.fragment,t),f=!1},d(t){t&&w(e),l(n),l(r)}}}function K(t){let e,n;return{c(){e=d("div"),n=d("pre"),this.h()},l(t){e=u(t,"DIV",{slot:!0});var s=h(e);n=u(s,"PRE",{class:!0}),h(n).forEach(w),s.forEach(w),this.h()},h(){v(n,"class","language-svelte"),v(e,"slot","source")},m(t,s){y(t,e,s),k(e,n),n.innerHTML='<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DropdownShell</span> <span class="token attr-name"><span class="token namespace">let:</span>toggle</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name"><span class="token namespace">on:</span>click=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>toggle<span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span>\n    this is the handle\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ChevronDownIcon</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>24<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ml dropdown-chevron<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Dropdown</span> <span class="token attr-name">right</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>padded<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      and this is the dropdown\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Dropdown</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>DropdownShell</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DropdownShell</span><span class="token punctuation">></span></span>\n  Useless without a <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>code</span><span class="token punctuation">></span></span><span class="token entity named-entity" title="&lt;">&amp;lt;</span>Dropdown /<span class="token entity named-entity" title="&gt;">&amp;gt;</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>code</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>DropdownShell</span><span class="token punctuation">></span></span></code>'},p:E,d(t){t&&w(e)}}}function J(t){let e;return{c(){e=m()},l(t){e=g(t)},m(t,n){y(t,e,n)},p:E,i:E,o:E,d(t){t&&w(e)}}}function Q(t){let e;return{c(){e=i("Properties")},l(t){e=x(t,"Properties")},m(t,n){y(t,e,n)},d(t){t&&w(e)}}}function W(t){let e;return{c(){e=i("Functional Properties")},l(t){e=x(t,"Functional Properties")},m(t,n){y(t,e,n)},d(t){t&&w(e)}}}function X(t){let e;return{c(){e=i("Name")},l(t){e=x(t,"Name")},m(t,n){y(t,e,n)},d(t){t&&w(e)}}}function Z(t){let e;return{c(){e=i("Default")},l(t){e=x(t,"Default")},m(t,n){y(t,e,n)},d(t){t&&w(e)}}}function _(t){let e;return{c(){e=i("Type")},l(t){e=x(t,"Type")},m(t,n){y(t,e,n)},d(t){t&&w(e)}}}function tt(t){let e;return{c(){e=i("Description")},l(t){e=x(t,"Description")},m(t,n){y(t,e,n)},d(t){t&&w(e)}}}function et(t){let e,n,s,r,f,d,i,u;return e=new I({props:{$$slots:{default:[X]},$$scope:{ctx:t}}}),s=new I({props:{$$slots:{default:[Z]},$$scope:{ctx:t}}}),f=new I({props:{$$slots:{default:[_]},$$scope:{ctx:t}}}),i=new I({props:{$$slots:{default:[tt]},$$scope:{ctx:t}}}),{c(){$(e.$$.fragment),n=m(),$(s.$$.fragment),r=m(),$(f.$$.fragment),d=m(),$(i.$$.fragment)},l(t){a(e.$$.fragment,t),n=g(t),a(s.$$.fragment,t),r=g(t),a(f.$$.fragment,t),d=g(t),a(i.$$.fragment,t)},m(t,$){o(e,t,$),y(t,n,$),o(s,t,$),y(t,r,$),o(f,t,$),y(t,d,$),o(i,t,$),u=!0},p(t,n){const $={};2&n&&($.$$scope={dirty:n,ctx:t}),e.$set($);const a={};2&n&&(a.$$scope={dirty:n,ctx:t}),s.$set(a);const o={};2&n&&(o.$$scope={dirty:n,ctx:t}),f.$set(o);const r={};2&n&&(r.$$scope={dirty:n,ctx:t}),i.$set(r)},i(t){u||(c(e.$$.fragment,t),c(s.$$.fragment,t),c(f.$$.fragment,t),c(i.$$.fragment,t),u=!0)},o(t){p(e.$$.fragment,t),p(s.$$.fragment,t),p(f.$$.fragment,t),p(i.$$.fragment,t),u=!1},d(t){l(e,t),t&&w(n),l(s,t),t&&w(r),l(f,t),t&&w(d),l(i,t)}}}function nt(t){let e,n,s;return{c(){e=d("strong"),n=d("code"),s=i("open")},l(t){e=u(t,"STRONG",{});var $=h(e);n=u($,"CODE",{});var a=h(n);s=x(a,"open"),a.forEach(w),$.forEach(w)},m(t,$){y(t,e,$),k(e,n),k(n,s)},d(t){t&&w(e)}}}function st(t){let e,n;return{c(){e=d("code"),n=i("false")},l(t){e=u(t,"CODE",{});var s=h(e);n=x(s,"false"),s.forEach(w)},m(t,s){y(t,e,s),k(e,n)},d(t){t&&w(e)}}}function $t(t){let e,n;return{c(){e=d("code"),n=i("boolean")},l(t){e=u(t,"CODE",{});var s=h(e);n=x(s,"boolean"),s.forEach(w)},m(t,s){y(t,e,s),k(e,n)},d(t){t&&w(e)}}}function at(t){let e;return{c(){e=i("Controls whether the dropdown content is shown or hidden.")},l(t){e=x(t,"Controls whether the dropdown content is shown or hidden.")},m(t,n){y(t,e,n)},d(t){t&&w(e)}}}function ot(t){let e,n,s,r,f,d,i,u;return e=new G({props:{$$slots:{default:[nt]},$$scope:{ctx:t}}}),s=new G({props:{$$slots:{default:[st]},$$scope:{ctx:t}}}),f=new G({props:{$$slots:{default:[$t]},$$scope:{ctx:t}}}),i=new G({props:{$$slots:{default:[at]},$$scope:{ctx:t}}}),{c(){$(e.$$.fragment),n=m(),$(s.$$.fragment),r=m(),$(f.$$.fragment),d=m(),$(i.$$.fragment)},l(t){a(e.$$.fragment,t),n=g(t),a(s.$$.fragment,t),r=g(t),a(f.$$.fragment,t),d=g(t),a(i.$$.fragment,t)},m(t,$){o(e,t,$),y(t,n,$),o(s,t,$),y(t,r,$),o(f,t,$),y(t,d,$),o(i,t,$),u=!0},p(t,n){const $={};2&n&&($.$$scope={dirty:n,ctx:t}),e.$set($);const a={};2&n&&(a.$$scope={dirty:n,ctx:t}),s.$set(a);const o={};2&n&&(o.$$scope={dirty:n,ctx:t}),f.$set(o);const r={};2&n&&(r.$$scope={dirty:n,ctx:t}),i.$set(r)},i(t){u||(c(e.$$.fragment,t),c(s.$$.fragment,t),c(f.$$.fragment,t),c(i.$$.fragment,t),u=!0)},o(t){p(e.$$.fragment,t),p(s.$$.fragment,t),p(f.$$.fragment,t),p(i.$$.fragment,t),u=!1},d(t){l(e,t),t&&w(n),l(s,t),t&&w(r),l(f,t),t&&w(d),l(i,t)}}}function rt(t){let e,n,s,r,f,i;return n=new R({props:{$$slots:{default:[et]},$$scope:{ctx:t}}}),f=new R({props:{$$slots:{default:[ot]},$$scope:{ctx:t}}}),{c(){e=d("thead"),$(n.$$.fragment),s=m(),r=d("tbody"),$(f.$$.fragment)},l(t){e=u(t,"THEAD",{});var $=h(e);a(n.$$.fragment,$),$.forEach(w),s=g(t),r=u(t,"TBODY",{});var o=h(r);a(f.$$.fragment,o),o.forEach(w)},m(t,$){y(t,e,$),o(n,e,null),y(t,s,$),y(t,r,$),o(f,r,null),i=!0},p(t,e){const s={};2&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s);const $={};2&e&&($.$$scope={dirty:e,ctx:t}),f.$set($)},i(t){i||(c(n.$$.fragment,t),c(f.$$.fragment,t),i=!0)},o(t){p(n.$$.fragment,t),p(f.$$.fragment,t),i=!1},d(t){t&&w(e),l(n),t&&w(s),t&&w(r),l(f)}}}function ct(t){let e;return{c(){e=i("Class Properties")},l(t){e=x(t,"Class Properties")},m(t,n){y(t,e,n)},d(t){t&&w(e)}}}function pt(t){let e,n,s,$,a,o,r;return{c(){e=i("All "),n=d("code"),s=i("<DropdownShell>"),$=i(" components use the "),a=d("code"),o=i(".dropdown-shell"),r=i(" class.")},l(t){e=x(t,"All "),n=u(t,"CODE",{});var c=h(n);s=x(c,"<DropdownShell>"),c.forEach(w),$=x(t," components use the "),a=u(t,"CODE",{});var p=h(a);o=x(p,".dropdown-shell"),p.forEach(w),r=x(t," class.")},m(t,c){y(t,e,c),y(t,n,c),k(n,s),y(t,$,c),y(t,a,c),k(a,o),y(t,r,c)},d(t){t&&w(e),t&&w(n),t&&w($),t&&w(a),t&&w(r)}}}function lt(t){let e;return{c(){e=i("Falsy values passed to classes will be disregarded.")},l(t){e=x(t,"Falsy values passed to classes will be disregarded.")},m(t,n){y(t,e,n)},d(t){t&&w(e)}}}function ft(t){let e;return{c(){e=i("Name")},l(t){e=x(t,"Name")},m(t,n){y(t,e,n)},d(t){t&&w(e)}}}function mt(t){let e;return{c(){e=i("Default")},l(t){e=x(t,"Default")},m(t,n){y(t,e,n)},d(t){t&&w(e)}}}function dt(t){let e;return{c(){e=i("Type")},l(t){e=x(t,"Type")},m(t,n){y(t,e,n)},d(t){t&&w(e)}}}function it(t){let e;return{c(){e=i("Description")},l(t){e=x(t,"Description")},m(t,n){y(t,e,n)},d(t){t&&w(e)}}}function gt(t){let e,n,s,r,f,d,i,u;return e=new I({props:{$$slots:{default:[ft]},$$scope:{ctx:t}}}),s=new I({props:{$$slots:{default:[mt]},$$scope:{ctx:t}}}),f=new I({props:{$$slots:{default:[dt]},$$scope:{ctx:t}}}),i=new I({props:{$$slots:{default:[it]},$$scope:{ctx:t}}}),{c(){$(e.$$.fragment),n=m(),$(s.$$.fragment),r=m(),$(f.$$.fragment),d=m(),$(i.$$.fragment)},l(t){a(e.$$.fragment,t),n=g(t),a(s.$$.fragment,t),r=g(t),a(f.$$.fragment,t),d=g(t),a(i.$$.fragment,t)},m(t,$){o(e,t,$),y(t,n,$),o(s,t,$),y(t,r,$),o(f,t,$),y(t,d,$),o(i,t,$),u=!0},p(t,n){const $={};2&n&&($.$$scope={dirty:n,ctx:t}),e.$set($);const a={};2&n&&(a.$$scope={dirty:n,ctx:t}),s.$set(a);const o={};2&n&&(o.$$scope={dirty:n,ctx:t}),f.$set(o);const r={};2&n&&(r.$$scope={dirty:n,ctx:t}),i.$set(r)},i(t){u||(c(e.$$.fragment,t),c(s.$$.fragment,t),c(f.$$.fragment,t),c(i.$$.fragment,t),u=!0)},o(t){p(e.$$.fragment,t),p(s.$$.fragment,t),p(f.$$.fragment,t),p(i.$$.fragment,t),u=!1},d(t){l(e,t),t&&w(n),l(s,t),t&&w(r),l(f,t),t&&w(d),l(i,t)}}}function ut(t){let e,n,s;return{c(){e=d("strong"),n=d("code"),s=i("class")},l(t){e=u(t,"STRONG",{});var $=h(e);n=u($,"CODE",{});var a=h(n);s=x(a,"class"),a.forEach(w),$.forEach(w)},m(t,$){y(t,e,$),k(e,n),k(n,s)},d(t){t&&w(e)}}}function ht(t){let e,n;return{c(){e=d("code"),n=i("null")},l(t){e=u(t,"CODE",{});var s=h(e);n=x(s,"null"),s.forEach(w)},m(t,s){y(t,e,s),k(e,n)},d(t){t&&w(e)}}}function xt(t){let e,n;return{c(){e=d("code"),n=i("string")},l(t){e=u(t,"CODE",{});var s=h(e);n=x(s,"string"),s.forEach(w)},m(t,s){y(t,e,s),k(e,n)},d(t){t&&w(e)}}}function wt(t){let e,n,s,$;return{c(){e=i("A class string to add to the underlying "),n=d("code"),s=i("<div>"),$=i(" element.")},l(t){e=x(t,"A class string to add to the underlying "),n=u(t,"CODE",{});var a=h(n);s=x(a,"<div>"),a.forEach(w),$=x(t," element.")},m(t,a){y(t,e,a),y(t,n,a),k(n,s),y(t,$,a)},d(t){t&&w(e),t&&w(n),t&&w($)}}}function yt(t){let e,n,s,r,f,d,i,u;return e=new G({props:{$$slots:{default:[ut]},$$scope:{ctx:t}}}),s=new G({props:{$$slots:{default:[ht]},$$scope:{ctx:t}}}),f=new G({props:{$$slots:{default:[xt]},$$scope:{ctx:t}}}),i=new G({props:{$$slots:{default:[wt]},$$scope:{ctx:t}}}),{c(){$(e.$$.fragment),n=m(),$(s.$$.fragment),r=m(),$(f.$$.fragment),d=m(),$(i.$$.fragment)},l(t){a(e.$$.fragment,t),n=g(t),a(s.$$.fragment,t),r=g(t),a(f.$$.fragment,t),d=g(t),a(i.$$.fragment,t)},m(t,$){o(e,t,$),y(t,n,$),o(s,t,$),y(t,r,$),o(f,t,$),y(t,d,$),o(i,t,$),u=!0},p(t,n){const $={};2&n&&($.$$scope={dirty:n,ctx:t}),e.$set($);const a={};2&n&&(a.$$scope={dirty:n,ctx:t}),s.$set(a);const o={};2&n&&(o.$$scope={dirty:n,ctx:t}),f.$set(o);const r={};2&n&&(r.$$scope={dirty:n,ctx:t}),i.$set(r)},i(t){u||(c(e.$$.fragment,t),c(s.$$.fragment,t),c(f.$$.fragment,t),c(i.$$.fragment,t),u=!0)},o(t){p(e.$$.fragment,t),p(s.$$.fragment,t),p(f.$$.fragment,t),p(i.$$.fragment,t),u=!1},d(t){l(e,t),t&&w(n),l(s,t),t&&w(r),l(f,t),t&&w(d),l(i,t)}}}function kt(t){let e,n,s,r,f,i;return n=new R({props:{$$slots:{default:[gt]},$$scope:{ctx:t}}}),f=new R({props:{$$slots:{default:[yt]},$$scope:{ctx:t}}}),{c(){e=d("thead"),$(n.$$.fragment),s=m(),r=d("tbody"),$(f.$$.fragment)},l(t){e=u(t,"THEAD",{});var $=h(e);a(n.$$.fragment,$),$.forEach(w),s=g(t),r=u(t,"TBODY",{});var o=h(r);a(f.$$.fragment,o),o.forEach(w)},m(t,$){y(t,e,$),o(n,e,null),y(t,s,$),y(t,r,$),o(f,r,null),i=!0},p(t,e){const s={};2&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s);const $={};2&e&&($.$$scope={dirty:e,ctx:t}),f.$set($)},i(t){i||(c(n.$$.fragment,t),c(f.$$.fragment,t),i=!0)},o(t){p(n.$$.fragment,t),p(f.$$.fragment,t),i=!1},d(t){t&&w(e),l(n),t&&w(s),t&&w(r),l(f)}}}function vt(t){let e;return{c(){e=i("Events")},l(t){e=x(t,"Events")},m(t,n){y(t,e,n)},d(t){t&&w(e)}}}function Et(t){let e;return{c(){e=i("Name")},l(t){e=x(t,"Name")},m(t,n){y(t,e,n)},d(t){t&&w(e)}}}function Dt(t){let e;return{c(){e=i("Event Detail")},l(t){e=x(t,"Event Detail")},m(t,n){y(t,e,n)},d(t){t&&w(e)}}}function bt(t){let e;return{c(){e=i("Description")},l(t){e=x(t,"Description")},m(t,n){y(t,e,n)},d(t){t&&w(e)}}}function Tt(t){let e,n,s,r,f,d;return e=new I({props:{$$slots:{default:[Et]},$$scope:{ctx:t}}}),s=new I({props:{$$slots:{default:[Dt]},$$scope:{ctx:t}}}),f=new I({props:{$$slots:{default:[bt]},$$scope:{ctx:t}}}),{c(){$(e.$$.fragment),n=m(),$(s.$$.fragment),r=m(),$(f.$$.fragment)},l(t){a(e.$$.fragment,t),n=g(t),a(s.$$.fragment,t),r=g(t),a(f.$$.fragment,t)},m(t,$){o(e,t,$),y(t,n,$),o(s,t,$),y(t,r,$),o(f,t,$),d=!0},p(t,n){const $={};2&n&&($.$$scope={dirty:n,ctx:t}),e.$set($);const a={};2&n&&(a.$$scope={dirty:n,ctx:t}),s.$set(a);const o={};2&n&&(o.$$scope={dirty:n,ctx:t}),f.$set(o)},i(t){d||(c(e.$$.fragment,t),c(s.$$.fragment,t),c(f.$$.fragment,t),d=!0)},o(t){p(e.$$.fragment,t),p(s.$$.fragment,t),p(f.$$.fragment,t),d=!1},d(t){l(e,t),t&&w(n),l(s,t),t&&w(r),l(f,t)}}}function Ot(t){let e,n,s;return{c(){e=d("strong"),n=d("code"),s=i("change")},l(t){e=u(t,"STRONG",{});var $=h(e);n=u($,"CODE",{});var a=h(n);s=x(a,"change"),a.forEach(w),$.forEach(w)},m(t,$){y(t,e,$),k(e,n),k(n,s)},d(t){t&&w(e)}}}function Ct(t){let e,n;return{c(){e=d("code"),n=i("{ value }")},l(t){e=u(t,"CODE",{});var s=h(e);n=x(s,"{ value }"),s.forEach(w)},m(t,s){y(t,e,s),k(e,n)},d(t){t&&w(e)}}}function jt(t){let e,n,s,$,a,o,r,c,p,l;return{c(){e=i("Fired when toggling the dropdown (with "),n=d("code"),s=i("value"),$=i(" being "),a=d("code"),o=i("true"),r=i(' for "open" and '),c=d("code"),p=i("false"),l=i(' for "closed").')},l(t){e=x(t,"Fired when toggling the dropdown (with "),n=u(t,"CODE",{});var f=h(n);s=x(f,"value"),f.forEach(w),$=x(t," being "),a=u(t,"CODE",{});var m=h(a);o=x(m,"true"),m.forEach(w),r=x(t,' for "open" and '),c=u(t,"CODE",{});var d=h(c);p=x(d,"false"),d.forEach(w),l=x(t,' for "closed").')},m(t,f){y(t,e,f),y(t,n,f),k(n,s),y(t,$,f),y(t,a,f),k(a,o),y(t,r,f),y(t,c,f),k(c,p),y(t,l,f)},d(t){t&&w(e),t&&w(n),t&&w($),t&&w(a),t&&w(r),t&&w(c),t&&w(l)}}}function St(t){let e,n,s,r,f,d;return e=new G({props:{$$slots:{default:[Ot]},$$scope:{ctx:t}}}),s=new G({props:{$$slots:{default:[Ct]},$$scope:{ctx:t}}}),f=new G({props:{$$slots:{default:[jt]},$$scope:{ctx:t}}}),{c(){$(e.$$.fragment),n=m(),$(s.$$.fragment),r=m(),$(f.$$.fragment)},l(t){a(e.$$.fragment,t),n=g(t),a(s.$$.fragment,t),r=g(t),a(f.$$.fragment,t)},m(t,$){o(e,t,$),y(t,n,$),o(s,t,$),y(t,r,$),o(f,t,$),d=!0},p(t,n){const $={};2&n&&($.$$scope={dirty:n,ctx:t}),e.$set($);const a={};2&n&&(a.$$scope={dirty:n,ctx:t}),s.$set(a);const o={};2&n&&(o.$$scope={dirty:n,ctx:t}),f.$set(o)},i(t){d||(c(e.$$.fragment,t),c(s.$$.fragment,t),c(f.$$.fragment,t),d=!0)},o(t){p(e.$$.fragment,t),p(s.$$.fragment,t),p(f.$$.fragment,t),d=!1},d(t){l(e,t),t&&w(n),l(s,t),t&&w(r),l(f,t)}}}function Nt(t){let e,n,s,r,f,i;return n=new R({props:{$$slots:{default:[Tt]},$$scope:{ctx:t}}}),f=new R({props:{$$slots:{default:[St]},$$scope:{ctx:t}}}),{c(){e=d("thead"),$(n.$$.fragment),s=m(),r=d("tbody"),$(f.$$.fragment)},l(t){e=u(t,"THEAD",{});var $=h(e);a(n.$$.fragment,$),$.forEach(w),s=g(t),r=u(t,"TBODY",{});var o=h(r);a(f.$$.fragment,o),o.forEach(w)},m(t,$){y(t,e,$),o(n,e,null),y(t,s,$),y(t,r,$),o(f,r,null),i=!0},p(t,e){const s={};2&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s);const $={};2&e&&($.$$scope={dirty:e,ctx:t}),f.$set($)},i(t){i||(c(n.$$.fragment,t),c(f.$$.fragment,t),i=!0)},o(t){p(n.$$.fragment,t),p(f.$$.fragment,t),i=!1},d(t){t&&w(e),l(n),t&&w(s),t&&w(r),l(f)}}}function At(t){let e;return{c(){e=i("Slots")},l(t){e=x(t,"Slots")},m(t,n){y(t,e,n)},d(t){t&&w(e)}}}function Bt(t){let e;return{c(){e=i("Default slot")},l(t){e=x(t,"Default slot")},m(t,n){y(t,e,n)},d(t){t&&w(e)}}}function Ft(t){let e;return{c(){e=i("The shell of the dropdown. The dropdown itself must be inside it.")},l(t){e=x(t,"The shell of the dropdown. The dropdown itself must be inside it.")},m(t,n){y(t,e,n)},d(t){t&&w(e)}}}function Ht(t){let e;return{c(){e=i("Prop Name")},l(t){e=x(t,"Prop Name")},m(t,n){y(t,e,n)},d(t){t&&w(e)}}}function Pt(t){let e;return{c(){e=i("Type")},l(t){e=x(t,"Type")},m(t,n){y(t,e,n)},d(t){t&&w(e)}}}function Rt(t){let e;return{c(){e=i("Description")},l(t){e=x(t,"Description")},m(t,n){y(t,e,n)},d(t){t&&w(e)}}}function It(t){let e,n,s,r,f,d;return e=new I({props:{$$slots:{default:[Ht]},$$scope:{ctx:t}}}),s=new I({props:{$$slots:{default:[Pt]},$$scope:{ctx:t}}}),f=new I({props:{$$slots:{default:[Rt]},$$scope:{ctx:t}}}),{c(){$(e.$$.fragment),n=m(),$(s.$$.fragment),r=m(),$(f.$$.fragment)},l(t){a(e.$$.fragment,t),n=g(t),a(s.$$.fragment,t),r=g(t),a(f.$$.fragment,t)},m(t,$){o(e,t,$),y(t,n,$),o(s,t,$),y(t,r,$),o(f,t,$),d=!0},p(t,n){const $={};2&n&&($.$$scope={dirty:n,ctx:t}),e.$set($);const a={};2&n&&(a.$$scope={dirty:n,ctx:t}),s.$set(a);const o={};2&n&&(o.$$scope={dirty:n,ctx:t}),f.$set(o)},i(t){d||(c(e.$$.fragment,t),c(s.$$.fragment,t),c(f.$$.fragment,t),d=!0)},o(t){p(e.$$.fragment,t),p(s.$$.fragment,t),p(f.$$.fragment,t),d=!1},d(t){l(e,t),t&&w(n),l(s,t),t&&w(r),l(f,t)}}}function Gt(t){let e,n,s;return{c(){e=d("strong"),n=d("code"),s=i("toggle")},l(t){e=u(t,"STRONG",{});var $=h(e);n=u($,"CODE",{});var a=h(n);s=x(a,"toggle"),a.forEach(w),$.forEach(w)},m(t,$){y(t,e,$),k(e,n),k(n,s)},d(t){t&&w(e)}}}function Yt(t){let e,n;return{c(){e=d("code"),n=i("Function")},l(t){e=u(t,"CODE",{});var s=h(e);n=x(s,"Function"),s.forEach(w)},m(t,s){y(t,e,s),k(e,n)},d(t){t&&w(e)}}}function Ut(t){let e;return{c(){e=i("A callback to toggle the open state of the dropdown.")},l(t){e=x(t,"A callback to toggle the open state of the dropdown.")},m(t,n){y(t,e,n)},d(t){t&&w(e)}}}function Vt(t){let e,n,s,r,f,d;return e=new G({props:{$$slots:{default:[Gt]},$$scope:{ctx:t}}}),s=new G({props:{$$slots:{default:[Yt]},$$scope:{ctx:t}}}),f=new G({props:{$$slots:{default:[Ut]},$$scope:{ctx:t}}}),{c(){$(e.$$.fragment),n=m(),$(s.$$.fragment),r=m(),$(f.$$.fragment)},l(t){a(e.$$.fragment,t),n=g(t),a(s.$$.fragment,t),r=g(t),a(f.$$.fragment,t)},m(t,$){o(e,t,$),y(t,n,$),o(s,t,$),y(t,r,$),o(f,t,$),d=!0},p(t,n){const $={};2&n&&($.$$scope={dirty:n,ctx:t}),e.$set($);const a={};2&n&&(a.$$scope={dirty:n,ctx:t}),s.$set(a);const o={};2&n&&(o.$$scope={dirty:n,ctx:t}),f.$set(o)},i(t){d||(c(e.$$.fragment,t),c(s.$$.fragment,t),c(f.$$.fragment,t),d=!0)},o(t){p(e.$$.fragment,t),p(s.$$.fragment,t),p(f.$$.fragment,t),d=!1},d(t){l(e,t),t&&w(n),l(s,t),t&&w(r),l(f,t)}}}function zt(t){let e,n,s,r,f,i;return n=new R({props:{$$slots:{default:[It]},$$scope:{ctx:t}}}),f=new R({props:{$$slots:{default:[Vt]},$$scope:{ctx:t}}}),{c(){e=d("thead"),$(n.$$.fragment),s=m(),r=d("tbody"),$(f.$$.fragment)},l(t){e=u(t,"THEAD",{});var $=h(e);a(n.$$.fragment,$),$.forEach(w),s=g(t),r=u(t,"TBODY",{});var o=h(r);a(f.$$.fragment,o),o.forEach(w)},m(t,$){y(t,e,$),o(n,e,null),y(t,s,$),y(t,r,$),o(f,r,null),i=!0},p(t,e){const s={};2&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s);const $={};2&e&&($.$$scope={dirty:e,ctx:t}),f.$set($)},i(t){i||(c(n.$$.fragment,t),c(f.$$.fragment,t),i=!0)},o(t){p(n.$$.fragment,t),p(f.$$.fragment,t),i=!1},d(t){t&&w(e),l(n),t&&w(s),t&&w(r),l(f)}}}function Lt(t){let e;return{c(){e=i("Exported Attributes")},l(t){e=x(t,"Exported Attributes")},m(t,n){y(t,e,n)},d(t){t&&w(e)}}}function Mt(t){let e,n,s,$;return{c(){e=i("These attributes can be accessed from variables holding component instances bound using "),n=d("code"),s=i("bind:this"),$=i(" on the instance.")},l(t){e=x(t,"These attributes can be accessed from variables holding component instances bound using "),n=u(t,"CODE",{});var a=h(n);s=x(a,"bind:this"),a.forEach(w),$=x(t," on the instance.")},m(t,a){y(t,e,a),y(t,n,a),k(n,s),y(t,$,a)},d(t){t&&w(e),t&&w(n),t&&w($)}}}function qt(t){let e;return{c(){e=i("Name")},l(t){e=x(t,"Name")},m(t,n){y(t,e,n)},d(t){t&&w(e)}}}function Kt(t){let e;return{c(){e=i("Type")},l(t){e=x(t,"Type")},m(t,n){y(t,e,n)},d(t){t&&w(e)}}}function Jt(t){let e;return{c(){e=i("Description")},l(t){e=x(t,"Description")},m(t,n){y(t,e,n)},d(t){t&&w(e)}}}function Qt(t){let e,n,s,r,f,d;return e=new I({props:{$$slots:{default:[qt]},$$scope:{ctx:t}}}),s=new I({props:{$$slots:{default:[Kt]},$$scope:{ctx:t}}}),f=new I({props:{$$slots:{default:[Jt]},$$scope:{ctx:t}}}),{c(){$(e.$$.fragment),n=m(),$(s.$$.fragment),r=m(),$(f.$$.fragment)},l(t){a(e.$$.fragment,t),n=g(t),a(s.$$.fragment,t),r=g(t),a(f.$$.fragment,t)},m(t,$){o(e,t,$),y(t,n,$),o(s,t,$),y(t,r,$),o(f,t,$),d=!0},p(t,n){const $={};2&n&&($.$$scope={dirty:n,ctx:t}),e.$set($);const a={};2&n&&(a.$$scope={dirty:n,ctx:t}),s.$set(a);const o={};2&n&&(o.$$scope={dirty:n,ctx:t}),f.$set(o)},i(t){d||(c(e.$$.fragment,t),c(s.$$.fragment,t),c(f.$$.fragment,t),d=!0)},o(t){p(e.$$.fragment,t),p(s.$$.fragment,t),p(f.$$.fragment,t),d=!1},d(t){l(e,t),t&&w(n),l(s,t),t&&w(r),l(f,t)}}}function Wt(t){let e,n,s;return{c(){e=d("strong"),n=d("code"),s=i("toggle")},l(t){e=u(t,"STRONG",{});var $=h(e);n=u($,"CODE",{});var a=h(n);s=x(a,"toggle"),a.forEach(w),$.forEach(w)},m(t,$){y(t,e,$),k(e,n),k(n,s)},d(t){t&&w(e)}}}function Xt(t){let e,n;return{c(){e=d("code"),n=i("Function")},l(t){e=u(t,"CODE",{});var s=h(e);n=x(s,"Function"),s.forEach(w)},m(t,s){y(t,e,s),k(e,n)},d(t){t&&w(e)}}}function Zt(t){let e;return{c(){e=i('Toggles the dropdown\'s "open" state. In addition to being exposed as a slot prop, this function is exported to allow toggling the dropdown from same component where the shell is created.')},l(t){e=x(t,'Toggles the dropdown\'s "open" state. In addition to being exposed as a slot prop, this function is exported to allow toggling the dropdown from same component where the shell is created.')},m(t,n){y(t,e,n)},d(t){t&&w(e)}}}function _t(t){let e,n,s,r,f,d;return e=new G({props:{$$slots:{default:[Wt]},$$scope:{ctx:t}}}),s=new G({props:{$$slots:{default:[Xt]},$$scope:{ctx:t}}}),f=new G({props:{$$slots:{default:[Zt]},$$scope:{ctx:t}}}),{c(){$(e.$$.fragment),n=m(),$(s.$$.fragment),r=m(),$(f.$$.fragment)},l(t){a(e.$$.fragment,t),n=g(t),a(s.$$.fragment,t),r=g(t),a(f.$$.fragment,t)},m(t,$){o(e,t,$),y(t,n,$),o(s,t,$),y(t,r,$),o(f,t,$),d=!0},p(t,n){const $={};2&n&&($.$$scope={dirty:n,ctx:t}),e.$set($);const a={};2&n&&(a.$$scope={dirty:n,ctx:t}),s.$set(a);const o={};2&n&&(o.$$scope={dirty:n,ctx:t}),f.$set(o)},i(t){d||(c(e.$$.fragment,t),c(s.$$.fragment,t),c(f.$$.fragment,t),d=!0)},o(t){p(e.$$.fragment,t),p(s.$$.fragment,t),p(f.$$.fragment,t),d=!1},d(t){l(e,t),t&&w(n),l(s,t),t&&w(r),l(f,t)}}}function te(t){let e,n,s,r,f,i;return n=new R({props:{$$slots:{default:[Qt]},$$scope:{ctx:t}}}),f=new R({props:{$$slots:{default:[_t]},$$scope:{ctx:t}}}),{c(){e=d("thead"),$(n.$$.fragment),s=m(),r=d("tbody"),$(f.$$.fragment)},l(t){e=u(t,"THEAD",{});var $=h(e);a(n.$$.fragment,$),$.forEach(w),s=g(t),r=u(t,"TBODY",{});var o=h(r);a(f.$$.fragment,o),o.forEach(w)},m(t,$){y(t,e,$),o(n,e,null),y(t,s,$),y(t,r,$),o(f,r,null),i=!0},p(t,e){const s={};2&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s);const $={};2&e&&($.$$scope={dirty:e,ctx:t}),f.$set($)},i(t){i||(c(n.$$.fragment,t),c(f.$$.fragment,t),i=!0)},o(t){p(n.$$.fragment,t),p(f.$$.fragment,t),i=!1},d(t){t&&w(e),l(n),t&&w(s),t&&w(r),l(f)}}}function ee(t){let e,n,s,r,f,v,E,D,b,C,j,S,N,R,I,G,V,z,L,M,X,Z,_,tt,et,nt,st,$t,at,ot,ft,mt,dt,it,gt,ut,ht,xt,wt,yt,Et,Dt,bt;return e=new T({props:{$$slots:{default:[Y]},$$scope:{ctx:t}}}),s=new O({props:{$$slots:{default:[U]},$$scope:{ctx:t}}}),f=new B({props:{components:ae}}),E=new A({props:{$$slots:{default:[J],source:[K],showcase:[q]},$$scope:{ctx:t}}}),b=new F({props:{id:"properties",$$slots:{default:[Q]},$$scope:{ctx:t}}}),j=new H({props:{$$slots:{default:[W]},$$scope:{ctx:t}}}),N=new P({props:{$$slots:{default:[rt]},$$scope:{ctx:t}}}),I=new H({props:{$$slots:{default:[ct]},$$scope:{ctx:t}}}),V=new O({props:{$$slots:{default:[pt]},$$scope:{ctx:t}}}),L=new O({props:{$$slots:{default:[lt]},$$scope:{ctx:t}}}),X=new P({props:{$$slots:{default:[kt]},$$scope:{ctx:t}}}),nt=new F({props:{id:"events",$$slots:{default:[vt]},$$scope:{ctx:t}}}),$t=new P({props:{$$slots:{default:[Nt]},$$scope:{ctx:t}}}),ot=new F({props:{id:"slots",$$slots:{default:[At]},$$scope:{ctx:t}}}),mt=new H({props:{$$slots:{default:[Bt]},$$scope:{ctx:t}}}),it=new O({props:{$$slots:{default:[Ft]},$$scope:{ctx:t}}}),ut=new P({props:{$$slots:{default:[zt]},$$scope:{ctx:t}}}),xt=new F({props:{id:"exported",$$slots:{default:[Lt]},$$scope:{ctx:t}}}),yt=new O({props:{$$slots:{default:[Mt]},$$scope:{ctx:t}}}),Dt=new P({props:{$$slots:{default:[te]},$$scope:{ctx:t}}}),{c(){$(e.$$.fragment),n=m(),$(s.$$.fragment),r=m(),$(f.$$.fragment),v=m(),$(E.$$.fragment),D=m(),$(b.$$.fragment),C=m(),$(j.$$.fragment),S=m(),$(N.$$.fragment),R=m(),$(I.$$.fragment),G=m(),$(V.$$.fragment),z=m(),$(L.$$.fragment),M=m(),$(X.$$.fragment),Z=m(),_=d("mark"),tt=i("Bonus"),et=i(": use the `.dropdown-chevron` class for the chevrons on the dropdown handle to get a nice rotation animation (see showcase).\n"),$(nt.$$.fragment),st=m(),$($t.$$.fragment),at=m(),$(ot.$$.fragment),ft=m(),$(mt.$$.fragment),dt=m(),$(it.$$.fragment),gt=m(),$(ut.$$.fragment),ht=m(),$(xt.$$.fragment),wt=m(),$(yt.$$.fragment),Et=m(),$(Dt.$$.fragment)},l(t){a(e.$$.fragment,t),n=g(t),a(s.$$.fragment,t),r=g(t),a(f.$$.fragment,t),v=g(t),a(E.$$.fragment,t),D=g(t),a(b.$$.fragment,t),C=g(t),a(j.$$.fragment,t),S=g(t),a(N.$$.fragment,t),R=g(t),a(I.$$.fragment,t),G=g(t),a(V.$$.fragment,t),z=g(t),a(L.$$.fragment,t),M=g(t),a(X.$$.fragment,t),Z=g(t),_=u(t,"MARK",{});var $=h(_);tt=x($,"Bonus"),$.forEach(w),et=x(t,": use the `.dropdown-chevron` class for the chevrons on the dropdown handle to get a nice rotation animation (see showcase).\n"),a(nt.$$.fragment,t),st=g(t),a($t.$$.fragment,t),at=g(t),a(ot.$$.fragment,t),ft=g(t),a(mt.$$.fragment,t),dt=g(t),a(it.$$.fragment,t),gt=g(t),a(ut.$$.fragment,t),ht=g(t),a(xt.$$.fragment,t),wt=g(t),a(yt.$$.fragment,t),Et=g(t),a(Dt.$$.fragment,t)},m(t,$){o(e,t,$),y(t,n,$),o(s,t,$),y(t,r,$),o(f,t,$),y(t,v,$),o(E,t,$),y(t,D,$),o(b,t,$),y(t,C,$),o(j,t,$),y(t,S,$),o(N,t,$),y(t,R,$),o(I,t,$),y(t,G,$),o(V,t,$),y(t,z,$),o(L,t,$),y(t,M,$),o(X,t,$),y(t,Z,$),y(t,_,$),k(_,tt),y(t,et,$),o(nt,t,$),y(t,st,$),o($t,t,$),y(t,at,$),o(ot,t,$),y(t,ft,$),o(mt,t,$),y(t,dt,$),o(it,t,$),y(t,gt,$),o(ut,t,$),y(t,ht,$),o(xt,t,$),y(t,wt,$),o(yt,t,$),y(t,Et,$),o(Dt,t,$),bt=!0},p(t,n){const $={};2&n&&($.$$scope={dirty:n,ctx:t}),e.$set($);const a={};2&n&&(a.$$scope={dirty:n,ctx:t}),s.$set(a);const o={};2&n&&(o.$$scope={dirty:n,ctx:t}),E.$set(o);const r={};2&n&&(r.$$scope={dirty:n,ctx:t}),b.$set(r);const c={};2&n&&(c.$$scope={dirty:n,ctx:t}),j.$set(c);const p={};2&n&&(p.$$scope={dirty:n,ctx:t}),N.$set(p);const l={};2&n&&(l.$$scope={dirty:n,ctx:t}),I.$set(l);const f={};2&n&&(f.$$scope={dirty:n,ctx:t}),V.$set(f);const m={};2&n&&(m.$$scope={dirty:n,ctx:t}),L.$set(m);const d={};2&n&&(d.$$scope={dirty:n,ctx:t}),X.$set(d);const i={};2&n&&(i.$$scope={dirty:n,ctx:t}),nt.$set(i);const g={};2&n&&(g.$$scope={dirty:n,ctx:t}),$t.$set(g);const u={};2&n&&(u.$$scope={dirty:n,ctx:t}),ot.$set(u);const h={};2&n&&(h.$$scope={dirty:n,ctx:t}),mt.$set(h);const x={};2&n&&(x.$$scope={dirty:n,ctx:t}),it.$set(x);const w={};2&n&&(w.$$scope={dirty:n,ctx:t}),ut.$set(w);const y={};2&n&&(y.$$scope={dirty:n,ctx:t}),xt.$set(y);const k={};2&n&&(k.$$scope={dirty:n,ctx:t}),yt.$set(k);const v={};2&n&&(v.$$scope={dirty:n,ctx:t}),Dt.$set(v)},i(t){bt||(c(e.$$.fragment,t),c(s.$$.fragment,t),c(f.$$.fragment,t),c(E.$$.fragment,t),c(b.$$.fragment,t),c(j.$$.fragment,t),c(N.$$.fragment,t),c(I.$$.fragment,t),c(V.$$.fragment,t),c(L.$$.fragment,t),c(X.$$.fragment,t),c(nt.$$.fragment,t),c($t.$$.fragment,t),c(ot.$$.fragment,t),c(mt.$$.fragment,t),c(it.$$.fragment,t),c(ut.$$.fragment,t),c(xt.$$.fragment,t),c(yt.$$.fragment,t),c(Dt.$$.fragment,t),bt=!0)},o(t){p(e.$$.fragment,t),p(s.$$.fragment,t),p(f.$$.fragment,t),p(E.$$.fragment,t),p(b.$$.fragment,t),p(j.$$.fragment,t),p(N.$$.fragment,t),p(I.$$.fragment,t),p(V.$$.fragment,t),p(L.$$.fragment,t),p(X.$$.fragment,t),p(nt.$$.fragment,t),p($t.$$.fragment,t),p(ot.$$.fragment,t),p(mt.$$.fragment,t),p(it.$$.fragment,t),p(ut.$$.fragment,t),p(xt.$$.fragment,t),p(yt.$$.fragment,t),p(Dt.$$.fragment,t),bt=!1},d(t){l(e,t),t&&w(n),l(s,t),t&&w(r),l(f,t),t&&w(v),l(E,t),t&&w(D),l(b,t),t&&w(C),l(j,t),t&&w(S),l(N,t),t&&w(R),l(I,t),t&&w(G),l(V,t),t&&w(z),l(L,t),t&&w(M),l(X,t),t&&w(Z),t&&w(_),t&&w(et),l(nt,t),t&&w(st),l($t,t),t&&w(at),l(ot,t),t&&w(ft),l(mt,t),t&&w(dt),l(it,t),t&&w(gt),l(ut,t),t&&w(ht),l(xt,t),t&&w(wt),l(yt,t),t&&w(Et),l(Dt,t)}}}function ne(t){let e,n;const m=[se];let d={$$slots:{default:[ee]},$$scope:{ctx:t}};for(let t=0;t<m.length;t+=1)d=s(d,m[t]);return e=new b({props:d}),{c(){$(e.$$.fragment)},l(t){a(e.$$.fragment,t)},m(t,s){o(e,t,s),n=!0},p(t,[n]){const s=0&n?r(m,[f(se)]):{};2&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){n||(c(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){l(e,t)}}}const se={name:"DropdownShell",relatedComponents:[{name:"Dropdown",link:"./docs/components/dropdown"}]},{name:$e,relatedComponents:ae}=se;export default class extends t{constructor(t){super(),e(this,t,null,ne,n,{})}}export{se as metadata};
