import{S as t,i as e,s as $,G as n,j as s,k as r,m as a,N as o,t as c,o as f,p as l,U as p,q as m,h as g,r as i,u as d,c as u,b as h,v as x,d as v,e as E,f as w,g as y,R as b,X as D,V as T,n as O}from"./client.a75aff81.js";import{L as k,H as C,P as A}from"./layout.f5c77752.js";import{T as S}from"./tabs.4cae4054.js";import{S as N}from"./showcase.8c34bf70.js";import{C as j}from"./color-preview.d52eda02.js";import{R}from"./related-components.b4838f22.js";import{H as F}from"./h2.28816c31.js";import{H as L}from"./h3.5fe21350.js";import{T as M,a as G,b as H,c as P}from"./table.88851db3.js";import"./classes.2453fa25.js";import"./tab.af0e5686.js";import"./button.9d19d1c2.js";import"./label.7881e034.js";import"./copyable-code.c8343cec.js";import"./card.65e6aa8f.js";function q(t){let e;return{c(){e=i("Tabs")},l(t){e=x(t,"Tabs")},m(t,$){w(t,e,$)},d(t){t&&v(e)}}}function z(t){let e;return{c(){e=i("Tabs are used to organize content and navigate between it.")},l(t){e=x(t,"Tabs are used to organize content and navigate between it.")},m(t,$){w(t,e,$)},d(t){t&&v(e)}}}function V(t){let e,$,n,o;function p(e){t[1].call(null,e)}let m={name:"menu",items:["Appetizers","Main dishes","Drinks"]};return void 0!==t[0]&&(m.value=t[0]),$=new S({props:m}),b.push((()=>D($,"value",p))),{c(){e=g("div"),s($.$$.fragment),this.h()},l(t){e=u(t,"DIV",{slot:!0,class:!0});var n=h(e);r($.$$.fragment,n),n.forEach(v),this.h()},h(){E(e,"slot","showcase"),E(e,"class","padded")},m(t,n){w(t,e,n),a($,e,null),o=!0},p(t,e){const s={};!n&&1&e&&(n=!0,s.value=t[0],T((()=>n=!1))),$.$set(s)},i(t){o||(c($.$$.fragment,t),o=!0)},o(t){f($.$$.fragment,t),o=!1},d(t){t&&v(e),l($)}}}function B(t){let e,$;return{c(){e=g("div"),$=g("pre"),this.h()},l(t){e=u(t,"DIV",{slot:!0});var n=h(e);$=u(n,"PRE",{class:!0}),h($).forEach(v),n.forEach(v),this.h()},h(){E($,"class","language-svelte"),E(e,"slot","source")},m(t,n){w(t,e,n),y(e,$),$.innerHTML='<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">let</span> selectedTab <span class="token operator">=</span> <span class="token string">\'Main dishes\'</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tabs</span>\n  <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>menu<span class="token punctuation">"</span></span>\n  <span class="token attr-name">items=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token punctuation">[</span><span class="token string">\'Appetizers\'</span><span class="token punctuation">,</span> <span class="token string">\'Main dishes\'</span><span class="token punctuation">,</span> <span class="token string">\'Drinks\'</span><span class="token punctuation">]</span><span class="token punctuation">&#125;</span></span>\n  <span class="token attr-name"><span class="token namespace">bind:</span>value=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>selectedTab<span class="token punctuation">&#125;</span></span>\n<span class="token punctuation">/></span></span></code>'},p:O,d(t){t&&v(e)}}}function U(t){let e;return{c(){e=m()},l(t){e=d(t)},m(t,$){w(t,e,$)},p:O,i:O,o:O,d(t){t&&v(e)}}}function I(t){let e;return{c(){e=i("Properties")},l(t){e=x(t,"Properties")},m(t,$){w(t,e,$)},d(t){t&&v(e)}}}function Y(t){let e;return{c(){e=i("Functional Properties")},l(t){e=x(t,"Functional Properties")},m(t,$){w(t,e,$)},d(t){t&&v(e)}}}function K(t){let e;return{c(){e=i("Name")},l(t){e=x(t,"Name")},m(t,$){w(t,e,$)},d(t){t&&v(e)}}}function W(t){let e;return{c(){e=i("Default")},l(t){e=x(t,"Default")},m(t,$){w(t,e,$)},d(t){t&&v(e)}}}function X(t){let e;return{c(){e=i("Type")},l(t){e=x(t,"Type")},m(t,$){w(t,e,$)},d(t){t&&v(e)}}}function _(t){let e;return{c(){e=i("Description")},l(t){e=x(t,"Description")},m(t,$){w(t,e,$)},d(t){t&&v(e)}}}function J(t){let e,$,n,o,p,g,i,u;return e=new H({props:{$$slots:{default:[K]},$$scope:{ctx:t}}}),n=new H({props:{$$slots:{default:[W]},$$scope:{ctx:t}}}),p=new H({props:{$$slots:{default:[X]},$$scope:{ctx:t}}}),i=new H({props:{$$slots:{default:[_]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),$=m(),s(n.$$.fragment),o=m(),s(p.$$.fragment),g=m(),s(i.$$.fragment)},l(t){r(e.$$.fragment,t),$=d(t),r(n.$$.fragment,t),o=d(t),r(p.$$.fragment,t),g=d(t),r(i.$$.fragment,t)},m(t,s){a(e,t,s),w(t,$,s),a(n,t,s),w(t,o,s),a(p,t,s),w(t,g,s),a(i,t,s),u=!0},p(t,$){const s={};4&$&&(s.$$scope={dirty:$,ctx:t}),e.$set(s);const r={};4&$&&(r.$$scope={dirty:$,ctx:t}),n.$set(r);const a={};4&$&&(a.$$scope={dirty:$,ctx:t}),p.$set(a);const o={};4&$&&(o.$$scope={dirty:$,ctx:t}),i.$set(o)},i(t){u||(c(e.$$.fragment,t),c(n.$$.fragment,t),c(p.$$.fragment,t),c(i.$$.fragment,t),u=!0)},o(t){f(e.$$.fragment,t),f(n.$$.fragment,t),f(p.$$.fragment,t),f(i.$$.fragment,t),u=!1},d(t){l(e,t),t&&v($),l(n,t),t&&v(o),l(p,t),t&&v(g),l(i,t)}}}function Q(t){let e,$,n,s,r,a,o;return{c(){e=g("mark"),$=g("strong"),n=g("code"),s=i("name"),r=i(" "),a=g("span"),o=i("*"),this.h()},l(t){e=u(t,"MARK",{});var c=h(e);$=u(c,"STRONG",{});var f=h($);n=u(f,"CODE",{});var l=h(n);s=x(l,"name"),l.forEach(v),f.forEach(v),c.forEach(v),r=x(t," "),a=u(t,"SPAN",{class:!0});var p=h(a);o=x(p,"*"),p.forEach(v),this.h()},h(){E(a,"class","required")},m(t,c){w(t,e,c),y(e,$),y($,n),y(n,s),w(t,r,c),w(t,a,c),y(a,o)},d(t){t&&v(e),t&&v(r),t&&v(a)}}}function Z(t){let e,$;return{c(){e=g("code"),$=i("string")},l(t){e=u(t,"CODE",{});var n=h(e);$=x(n,"string"),n.forEach(v)},m(t,n){w(t,e,n),y(e,$)},d(t){t&&v(e)}}}function tt(t){let e,$,n,s,r,a,o,c,f,l,p,m;return{c(){e=i("The name passed to each of the underlying "),$=g("code"),n=i("<Tab>"),s=i("s, which in turn becomes assigned to the "),r=g("code"),a=i('<input type="radio">'),o=i("s' "),c=g("a"),f=g("code"),l=i("name"),p=i(" attribute"),m=i("."),this.h()},l(t){e=x(t,"The name passed to each of the underlying "),$=u(t,"CODE",{});var g=h($);n=x(g,"<Tab>"),g.forEach(v),s=x(t,"s, which in turn becomes assigned to the "),r=u(t,"CODE",{});var i=h(r);a=x(i,'<input type="radio">'),i.forEach(v),o=x(t,"s' "),c=u(t,"A",{href:!0,rel:!0});var d=h(c);f=u(d,"CODE",{});var E=h(f);l=x(E,"name"),E.forEach(v),p=x(d," attribute"),d.forEach(v),m=x(t,"."),this.h()},h(){E(c,"href","https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefname"),E(c,"rel","nofollow")},m(t,g){w(t,e,g),w(t,$,g),y($,n),w(t,s,g),w(t,r,g),y(r,a),w(t,o,g),w(t,c,g),y(c,f),y(f,l),y(c,p),w(t,m,g)},d(t){t&&v(e),t&&v($),t&&v(s),t&&v(r),t&&v(o),t&&v(c),t&&v(m)}}}function et(t){let e,$,n,o,p,g,i,u;return e=new P({props:{$$slots:{default:[Q]},$$scope:{ctx:t}}}),n=new P({}),p=new P({props:{$$slots:{default:[Z]},$$scope:{ctx:t}}}),i=new P({props:{$$slots:{default:[tt]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),$=m(),s(n.$$.fragment),o=m(),s(p.$$.fragment),g=m(),s(i.$$.fragment)},l(t){r(e.$$.fragment,t),$=d(t),r(n.$$.fragment,t),o=d(t),r(p.$$.fragment,t),g=d(t),r(i.$$.fragment,t)},m(t,s){a(e,t,s),w(t,$,s),a(n,t,s),w(t,o,s),a(p,t,s),w(t,g,s),a(i,t,s),u=!0},p(t,$){const n={};4&$&&(n.$$scope={dirty:$,ctx:t}),e.$set(n);const s={};4&$&&(s.$$scope={dirty:$,ctx:t}),p.$set(s);const r={};4&$&&(r.$$scope={dirty:$,ctx:t}),i.$set(r)},i(t){u||(c(e.$$.fragment,t),c(n.$$.fragment,t),c(p.$$.fragment,t),c(i.$$.fragment,t),u=!0)},o(t){f(e.$$.fragment,t),f(n.$$.fragment,t),f(p.$$.fragment,t),f(i.$$.fragment,t),u=!1},d(t){l(e,t),t&&v($),l(n,t),t&&v(o),l(p,t),t&&v(g),l(i,t)}}}function $t(t){let e,$,n,s,r,a,o;return{c(){e=g("mark"),$=g("strong"),n=g("code"),s=i("items"),r=i(" "),a=g("span"),o=i("*"),this.h()},l(t){e=u(t,"MARK",{});var c=h(e);$=u(c,"STRONG",{});var f=h($);n=u(f,"CODE",{});var l=h(n);s=x(l,"items"),l.forEach(v),f.forEach(v),c.forEach(v),r=x(t," "),a=u(t,"SPAN",{class:!0});var p=h(a);o=x(p,"*"),p.forEach(v),this.h()},h(){E(a,"class","required")},m(t,c){w(t,e,c),y(e,$),y($,n),y(n,s),w(t,r,c),w(t,a,c),y(a,o)},d(t){t&&v(e),t&&v(r),t&&v(a)}}}function nt(t){let e,$;return{c(){e=g("code"),$=i("Array")},l(t){e=u(t,"CODE",{});var n=h(e);$=x(n,"Array"),n.forEach(v)},m(t,n){w(t,e,n),y(e,$)},d(t){t&&v(e)}}}function st(t){let e;return{c(){e=i("An array of strings that act as the labels of the tabs.")},l(t){e=x(t,"An array of strings that act as the labels of the tabs.")},m(t,$){w(t,e,$)},d(t){t&&v(e)}}}function rt(t){let e,$,n,o,p,g,i,u;return e=new P({props:{$$slots:{default:[$t]},$$scope:{ctx:t}}}),n=new P({}),p=new P({props:{$$slots:{default:[nt]},$$scope:{ctx:t}}}),i=new P({props:{$$slots:{default:[st]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),$=m(),s(n.$$.fragment),o=m(),s(p.$$.fragment),g=m(),s(i.$$.fragment)},l(t){r(e.$$.fragment,t),$=d(t),r(n.$$.fragment,t),o=d(t),r(p.$$.fragment,t),g=d(t),r(i.$$.fragment,t)},m(t,s){a(e,t,s),w(t,$,s),a(n,t,s),w(t,o,s),a(p,t,s),w(t,g,s),a(i,t,s),u=!0},p(t,$){const n={};4&$&&(n.$$scope={dirty:$,ctx:t}),e.$set(n);const s={};4&$&&(s.$$scope={dirty:$,ctx:t}),p.$set(s);const r={};4&$&&(r.$$scope={dirty:$,ctx:t}),i.$set(r)},i(t){u||(c(e.$$.fragment,t),c(n.$$.fragment,t),c(p.$$.fragment,t),c(i.$$.fragment,t),u=!0)},o(t){f(e.$$.fragment,t),f(n.$$.fragment,t),f(p.$$.fragment,t),f(i.$$.fragment,t),u=!1},d(t){l(e,t),t&&v($),l(n,t),t&&v(o),l(p,t),t&&v(g),l(i,t)}}}function at(t){let e,$,n;return{c(){e=g("strong"),$=g("code"),n=i("value")},l(t){e=u(t,"STRONG",{});var s=h(e);$=u(s,"CODE",{});var r=h($);n=x(r,"value"),r.forEach(v),s.forEach(v)},m(t,s){w(t,e,s),y(e,$),y($,n)},d(t){t&&v(e)}}}function ot(t){let e,$;return{c(){e=g("code"),$=i("null")},l(t){e=u(t,"CODE",{});var n=h(e);$=x(n,"null"),n.forEach(v)},m(t,n){w(t,e,n),y(e,$)},d(t){t&&v(e)}}}function ct(t){let e,$;return{c(){e=g("code"),$=i("string")},l(t){e=u(t,"CODE",{});var n=h(e);$=x(n,"string"),n.forEach(v)},m(t,n){w(t,e,n),y(e,$)},d(t){t&&v(e)}}}function ft(t){let e;return{c(){e=i("The currently selected tab.")},l(t){e=x(t,"The currently selected tab.")},m(t,$){w(t,e,$)},d(t){t&&v(e)}}}function lt(t){let e,$,n,o,p,g,i,u;return e=new P({props:{$$slots:{default:[at]},$$scope:{ctx:t}}}),n=new P({props:{$$slots:{default:[ot]},$$scope:{ctx:t}}}),p=new P({props:{$$slots:{default:[ct]},$$scope:{ctx:t}}}),i=new P({props:{$$slots:{default:[ft]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),$=m(),s(n.$$.fragment),o=m(),s(p.$$.fragment),g=m(),s(i.$$.fragment)},l(t){r(e.$$.fragment,t),$=d(t),r(n.$$.fragment,t),o=d(t),r(p.$$.fragment,t),g=d(t),r(i.$$.fragment,t)},m(t,s){a(e,t,s),w(t,$,s),a(n,t,s),w(t,o,s),a(p,t,s),w(t,g,s),a(i,t,s),u=!0},p(t,$){const s={};4&$&&(s.$$scope={dirty:$,ctx:t}),e.$set(s);const r={};4&$&&(r.$$scope={dirty:$,ctx:t}),n.$set(r);const a={};4&$&&(a.$$scope={dirty:$,ctx:t}),p.$set(a);const o={};4&$&&(o.$$scope={dirty:$,ctx:t}),i.$set(o)},i(t){u||(c(e.$$.fragment,t),c(n.$$.fragment,t),c(p.$$.fragment,t),c(i.$$.fragment,t),u=!0)},o(t){f(e.$$.fragment,t),f(n.$$.fragment,t),f(p.$$.fragment,t),f(i.$$.fragment,t),u=!1},d(t){l(e,t),t&&v($),l(n,t),t&&v(o),l(p,t),t&&v(g),l(i,t)}}}function pt(t){let e,$,n,o,p,i,x,E,b,D;return $=new G({props:{$$slots:{default:[J]},$$scope:{ctx:t}}}),p=new G({props:{$$slots:{default:[et]},$$scope:{ctx:t}}}),x=new G({props:{$$slots:{default:[rt]},$$scope:{ctx:t}}}),b=new G({props:{$$slots:{default:[lt]},$$scope:{ctx:t}}}),{c(){e=g("thead"),s($.$$.fragment),n=m(),o=g("tbody"),s(p.$$.fragment),i=m(),s(x.$$.fragment),E=m(),s(b.$$.fragment)},l(t){e=u(t,"THEAD",{});var s=h(e);r($.$$.fragment,s),s.forEach(v),n=d(t),o=u(t,"TBODY",{});var a=h(o);r(p.$$.fragment,a),i=d(a),r(x.$$.fragment,a),E=d(a),r(b.$$.fragment,a),a.forEach(v)},m(t,s){w(t,e,s),a($,e,null),w(t,n,s),w(t,o,s),a(p,o,null),y(o,i),a(x,o,null),y(o,E),a(b,o,null),D=!0},p(t,e){const n={};4&e&&(n.$$scope={dirty:e,ctx:t}),$.$set(n);const s={};4&e&&(s.$$scope={dirty:e,ctx:t}),p.$set(s);const r={};4&e&&(r.$$scope={dirty:e,ctx:t}),x.$set(r);const a={};4&e&&(a.$$scope={dirty:e,ctx:t}),b.$set(a)},i(t){D||(c($.$$.fragment,t),c(p.$$.fragment,t),c(x.$$.fragment,t),c(b.$$.fragment,t),D=!0)},o(t){f($.$$.fragment,t),f(p.$$.fragment,t),f(x.$$.fragment,t),f(b.$$.fragment,t),D=!1},d(t){t&&v(e),l($),t&&v(n),t&&v(o),l(p),l(x),l(b)}}}function mt(t){let e;return{c(){e=i("Class Properties")},l(t){e=x(t,"Class Properties")},m(t,$){w(t,e,$)},d(t){t&&v(e)}}}function gt(t){let e;return{c(){e=i("Falsy values passed to classes will be disregarded.")},l(t){e=x(t,"Falsy values passed to classes will be disregarded.")},m(t,$){w(t,e,$)},d(t){t&&v(e)}}}function it(t){let e;return{c(){e=i("Name")},l(t){e=x(t,"Name")},m(t,$){w(t,e,$)},d(t){t&&v(e)}}}function dt(t){let e;return{c(){e=i("Default")},l(t){e=x(t,"Default")},m(t,$){w(t,e,$)},d(t){t&&v(e)}}}function ut(t){let e;return{c(){e=i("Type")},l(t){e=x(t,"Type")},m(t,$){w(t,e,$)},d(t){t&&v(e)}}}function ht(t){let e;return{c(){e=i("Description")},l(t){e=x(t,"Description")},m(t,$){w(t,e,$)},d(t){t&&v(e)}}}function xt(t){let e,$,n,o,p,g,i,u;return e=new H({props:{$$slots:{default:[it]},$$scope:{ctx:t}}}),n=new H({props:{$$slots:{default:[dt]},$$scope:{ctx:t}}}),p=new H({props:{$$slots:{default:[ut]},$$scope:{ctx:t}}}),i=new H({props:{$$slots:{default:[ht]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),$=m(),s(n.$$.fragment),o=m(),s(p.$$.fragment),g=m(),s(i.$$.fragment)},l(t){r(e.$$.fragment,t),$=d(t),r(n.$$.fragment,t),o=d(t),r(p.$$.fragment,t),g=d(t),r(i.$$.fragment,t)},m(t,s){a(e,t,s),w(t,$,s),a(n,t,s),w(t,o,s),a(p,t,s),w(t,g,s),a(i,t,s),u=!0},p(t,$){const s={};4&$&&(s.$$scope={dirty:$,ctx:t}),e.$set(s);const r={};4&$&&(r.$$scope={dirty:$,ctx:t}),n.$set(r);const a={};4&$&&(a.$$scope={dirty:$,ctx:t}),p.$set(a);const o={};4&$&&(o.$$scope={dirty:$,ctx:t}),i.$set(o)},i(t){u||(c(e.$$.fragment,t),c(n.$$.fragment,t),c(p.$$.fragment,t),c(i.$$.fragment,t),u=!0)},o(t){f(e.$$.fragment,t),f(n.$$.fragment,t),f(p.$$.fragment,t),f(i.$$.fragment,t),u=!1},d(t){l(e,t),t&&v($),l(n,t),t&&v(o),l(p,t),t&&v(g),l(i,t)}}}function vt(t){let e,$,n;return{c(){e=g("strong"),$=g("code"),n=i("class")},l(t){e=u(t,"STRONG",{});var s=h(e);$=u(s,"CODE",{});var r=h($);n=x(r,"class"),r.forEach(v),s.forEach(v)},m(t,s){w(t,e,s),y(e,$),y($,n)},d(t){t&&v(e)}}}function Et(t){let e,$;return{c(){e=g("code"),$=i("null")},l(t){e=u(t,"CODE",{});var n=h(e);$=x(n,"null"),n.forEach(v)},m(t,n){w(t,e,n),y(e,$)},d(t){t&&v(e)}}}function wt(t){let e,$;return{c(){e=g("code"),$=i("string")},l(t){e=u(t,"CODE",{});var n=h(e);$=x(n,"string"),n.forEach(v)},m(t,n){w(t,e,n),y(e,$)},d(t){t&&v(e)}}}function yt(t){let e,$,n,s;return{c(){e=i("A class string to assign to the root "),$=g("code"),n=i("<nav>"),s=i(" element.")},l(t){e=x(t,"A class string to assign to the root "),$=u(t,"CODE",{});var r=h($);n=x(r,"<nav>"),r.forEach(v),s=x(t," element.")},m(t,r){w(t,e,r),w(t,$,r),y($,n),w(t,s,r)},d(t){t&&v(e),t&&v($),t&&v(s)}}}function bt(t){let e,$,n,o,p,g,i,u;return e=new P({props:{$$slots:{default:[vt]},$$scope:{ctx:t}}}),n=new P({props:{$$slots:{default:[Et]},$$scope:{ctx:t}}}),p=new P({props:{$$slots:{default:[wt]},$$scope:{ctx:t}}}),i=new P({props:{$$slots:{default:[yt]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),$=m(),s(n.$$.fragment),o=m(),s(p.$$.fragment),g=m(),s(i.$$.fragment)},l(t){r(e.$$.fragment,t),$=d(t),r(n.$$.fragment,t),o=d(t),r(p.$$.fragment,t),g=d(t),r(i.$$.fragment,t)},m(t,s){a(e,t,s),w(t,$,s),a(n,t,s),w(t,o,s),a(p,t,s),w(t,g,s),a(i,t,s),u=!0},p(t,$){const s={};4&$&&(s.$$scope={dirty:$,ctx:t}),e.$set(s);const r={};4&$&&(r.$$scope={dirty:$,ctx:t}),n.$set(r);const a={};4&$&&(a.$$scope={dirty:$,ctx:t}),p.$set(a);const o={};4&$&&(o.$$scope={dirty:$,ctx:t}),i.$set(o)},i(t){u||(c(e.$$.fragment,t),c(n.$$.fragment,t),c(p.$$.fragment,t),c(i.$$.fragment,t),u=!0)},o(t){f(e.$$.fragment,t),f(n.$$.fragment,t),f(p.$$.fragment,t),f(i.$$.fragment,t),u=!1},d(t){l(e,t),t&&v($),l(n,t),t&&v(o),l(p,t),t&&v(g),l(i,t)}}}function Dt(t){let e,$,n;return{c(){e=g("strong"),$=g("code"),n=i("tabClass")},l(t){e=u(t,"STRONG",{});var s=h(e);$=u(s,"CODE",{});var r=h($);n=x(r,"tabClass"),r.forEach(v),s.forEach(v)},m(t,s){w(t,e,s),y(e,$),y($,n)},d(t){t&&v(e)}}}function Tt(t){let e,$;return{c(){e=g("code"),$=i("null")},l(t){e=u(t,"CODE",{});var n=h(e);$=x(n,"null"),n.forEach(v)},m(t,n){w(t,e,n),y(e,$)},d(t){t&&v(e)}}}function Ot(t){let e,$;return{c(){e=g("code"),$=i("string")},l(t){e=u(t,"CODE",{});var n=h(e);$=x(n,"string"),n.forEach(v)},m(t,n){w(t,e,n),y(e,$)},d(t){t&&v(e)}}}function kt(t){let e,$,n,s;return{c(){e=i("A class string to pass to each "),$=g("code"),n=i("<Tab>"),s=i(" component.")},l(t){e=x(t,"A class string to pass to each "),$=u(t,"CODE",{});var r=h($);n=x(r,"<Tab>"),r.forEach(v),s=x(t," component.")},m(t,r){w(t,e,r),w(t,$,r),y($,n),w(t,s,r)},d(t){t&&v(e),t&&v($),t&&v(s)}}}function Ct(t){let e,$,n,o,p,g,i,u;return e=new P({props:{$$slots:{default:[Dt]},$$scope:{ctx:t}}}),n=new P({props:{$$slots:{default:[Tt]},$$scope:{ctx:t}}}),p=new P({props:{$$slots:{default:[Ot]},$$scope:{ctx:t}}}),i=new P({props:{$$slots:{default:[kt]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),$=m(),s(n.$$.fragment),o=m(),s(p.$$.fragment),g=m(),s(i.$$.fragment)},l(t){r(e.$$.fragment,t),$=d(t),r(n.$$.fragment,t),o=d(t),r(p.$$.fragment,t),g=d(t),r(i.$$.fragment,t)},m(t,s){a(e,t,s),w(t,$,s),a(n,t,s),w(t,o,s),a(p,t,s),w(t,g,s),a(i,t,s),u=!0},p(t,$){const s={};4&$&&(s.$$scope={dirty:$,ctx:t}),e.$set(s);const r={};4&$&&(r.$$scope={dirty:$,ctx:t}),n.$set(r);const a={};4&$&&(a.$$scope={dirty:$,ctx:t}),p.$set(a);const o={};4&$&&(o.$$scope={dirty:$,ctx:t}),i.$set(o)},i(t){u||(c(e.$$.fragment,t),c(n.$$.fragment,t),c(p.$$.fragment,t),c(i.$$.fragment,t),u=!0)},o(t){f(e.$$.fragment,t),f(n.$$.fragment,t),f(p.$$.fragment,t),f(i.$$.fragment,t),u=!1},d(t){l(e,t),t&&v($),l(n,t),t&&v(o),l(p,t),t&&v(g),l(i,t)}}}function At(t){let e,$,n,o,p,i,x,E;return $=new G({props:{$$slots:{default:[xt]},$$scope:{ctx:t}}}),p=new G({props:{$$slots:{default:[bt]},$$scope:{ctx:t}}}),x=new G({props:{$$slots:{default:[Ct]},$$scope:{ctx:t}}}),{c(){e=g("thead"),s($.$$.fragment),n=m(),o=g("tbody"),s(p.$$.fragment),i=m(),s(x.$$.fragment)},l(t){e=u(t,"THEAD",{});var s=h(e);r($.$$.fragment,s),s.forEach(v),n=d(t),o=u(t,"TBODY",{});var a=h(o);r(p.$$.fragment,a),i=d(a),r(x.$$.fragment,a),a.forEach(v)},m(t,s){w(t,e,s),a($,e,null),w(t,n,s),w(t,o,s),a(p,o,null),y(o,i),a(x,o,null),E=!0},p(t,e){const n={};4&e&&(n.$$scope={dirty:e,ctx:t}),$.$set(n);const s={};4&e&&(s.$$scope={dirty:e,ctx:t}),p.$set(s);const r={};4&e&&(r.$$scope={dirty:e,ctx:t}),x.$set(r)},i(t){E||(c($.$$.fragment,t),c(p.$$.fragment,t),c(x.$$.fragment,t),E=!0)},o(t){f($.$$.fragment,t),f(p.$$.fragment,t),f(x.$$.fragment,t),E=!1},d(t){t&&v(e),l($),t&&v(n),t&&v(o),l(p),l(x)}}}function St(t){let e;return{c(){e=i("Events")},l(t){e=x(t,"Events")},m(t,$){w(t,e,$)},d(t){t&&v(e)}}}function Nt(t){let e;return{c(){e=i("Name")},l(t){e=x(t,"Name")},m(t,$){w(t,e,$)},d(t){t&&v(e)}}}function jt(t){let e;return{c(){e=i("Event Detail")},l(t){e=x(t,"Event Detail")},m(t,$){w(t,e,$)},d(t){t&&v(e)}}}function Rt(t){let e;return{c(){e=i("Description")},l(t){e=x(t,"Description")},m(t,$){w(t,e,$)},d(t){t&&v(e)}}}function Ft(t){let e,$,n,o,p,g;return e=new H({props:{$$slots:{default:[Nt]},$$scope:{ctx:t}}}),n=new H({props:{$$slots:{default:[jt]},$$scope:{ctx:t}}}),p=new H({props:{$$slots:{default:[Rt]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),$=m(),s(n.$$.fragment),o=m(),s(p.$$.fragment)},l(t){r(e.$$.fragment,t),$=d(t),r(n.$$.fragment,t),o=d(t),r(p.$$.fragment,t)},m(t,s){a(e,t,s),w(t,$,s),a(n,t,s),w(t,o,s),a(p,t,s),g=!0},p(t,$){const s={};4&$&&(s.$$scope={dirty:$,ctx:t}),e.$set(s);const r={};4&$&&(r.$$scope={dirty:$,ctx:t}),n.$set(r);const a={};4&$&&(a.$$scope={dirty:$,ctx:t}),p.$set(a)},i(t){g||(c(e.$$.fragment,t),c(n.$$.fragment,t),c(p.$$.fragment,t),g=!0)},o(t){f(e.$$.fragment,t),f(n.$$.fragment,t),f(p.$$.fragment,t),g=!1},d(t){l(e,t),t&&v($),l(n,t),t&&v(o),l(p,t)}}}function Lt(t){let e,$,n;return{c(){e=g("strong"),$=g("code"),n=i("change")},l(t){e=u(t,"STRONG",{});var s=h(e);$=u(s,"CODE",{});var r=h($);n=x(r,"change"),r.forEach(v),s.forEach(v)},m(t,s){w(t,e,s),y(e,$),y($,n)},d(t){t&&v(e)}}}function Mt(t){let e,$;return{c(){e=g("code"),$=i("{ value, nativeEvent }")},l(t){e=u(t,"CODE",{});var n=h(e);$=x(n,"{ value, nativeEvent }"),n.forEach(v)},m(t,n){w(t,e,n),y(e,$)},d(t){t&&v(e)}}}function Gt(t){let e,$,n,s,r,a,o,c,f,l,p,m,d,b,D,T;return{c(){e=i("Fired when selecting a different tab. The "),$=g("code"),n=i("value"),s=i(" contains the tab's "),r=g("code"),a=i("value"),o=i(" (from the "),c=g("code"),f=i("items"),l=i(" prop) and "),p=g("code"),m=i("nativeEvent"),d=i(" has the "),b=g("a"),D=i("native change event"),T=i("."),this.h()},l(t){e=x(t,"Fired when selecting a different tab. The "),$=u(t,"CODE",{});var g=h($);n=x(g,"value"),g.forEach(v),s=x(t," contains the tab's "),r=u(t,"CODE",{});var i=h(r);a=x(i,"value"),i.forEach(v),o=x(t," (from the "),c=u(t,"CODE",{});var E=h(c);f=x(E,"items"),E.forEach(v),l=x(t," prop) and "),p=u(t,"CODE",{});var w=h(p);m=x(w,"nativeEvent"),w.forEach(v),d=x(t," has the "),b=u(t,"A",{href:!0,rel:!0});var y=h(b);D=x(y,"native change event"),y.forEach(v),T=x(t,"."),this.h()},h(){E(b,"href","https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event"),E(b,"rel","nofollow")},m(t,g){w(t,e,g),w(t,$,g),y($,n),w(t,s,g),w(t,r,g),y(r,a),w(t,o,g),w(t,c,g),y(c,f),w(t,l,g),w(t,p,g),y(p,m),w(t,d,g),w(t,b,g),y(b,D),w(t,T,g)},d(t){t&&v(e),t&&v($),t&&v(s),t&&v(r),t&&v(o),t&&v(c),t&&v(l),t&&v(p),t&&v(d),t&&v(b),t&&v(T)}}}function Ht(t){let e,$,n,o,p,g;return e=new P({props:{$$slots:{default:[Lt]},$$scope:{ctx:t}}}),n=new P({props:{$$slots:{default:[Mt]},$$scope:{ctx:t}}}),p=new P({props:{$$slots:{default:[Gt]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),$=m(),s(n.$$.fragment),o=m(),s(p.$$.fragment)},l(t){r(e.$$.fragment,t),$=d(t),r(n.$$.fragment,t),o=d(t),r(p.$$.fragment,t)},m(t,s){a(e,t,s),w(t,$,s),a(n,t,s),w(t,o,s),a(p,t,s),g=!0},p(t,$){const s={};4&$&&(s.$$scope={dirty:$,ctx:t}),e.$set(s);const r={};4&$&&(r.$$scope={dirty:$,ctx:t}),n.$set(r);const a={};4&$&&(a.$$scope={dirty:$,ctx:t}),p.$set(a)},i(t){g||(c(e.$$.fragment,t),c(n.$$.fragment,t),c(p.$$.fragment,t),g=!0)},o(t){f(e.$$.fragment,t),f(n.$$.fragment,t),f(p.$$.fragment,t),g=!1},d(t){l(e,t),t&&v($),l(n,t),t&&v(o),l(p,t)}}}function Pt(t){let e,$,n,o,p,i;return $=new G({props:{$$slots:{default:[Ft]},$$scope:{ctx:t}}}),p=new G({props:{$$slots:{default:[Ht]},$$scope:{ctx:t}}}),{c(){e=g("thead"),s($.$$.fragment),n=m(),o=g("tbody"),s(p.$$.fragment)},l(t){e=u(t,"THEAD",{});var s=h(e);r($.$$.fragment,s),s.forEach(v),n=d(t),o=u(t,"TBODY",{});var a=h(o);r(p.$$.fragment,a),a.forEach(v)},m(t,s){w(t,e,s),a($,e,null),w(t,n,s),w(t,o,s),a(p,o,null),i=!0},p(t,e){const n={};4&e&&(n.$$scope={dirty:e,ctx:t}),$.$set(n);const s={};4&e&&(s.$$scope={dirty:e,ctx:t}),p.$set(s)},i(t){i||(c($.$$.fragment,t),c(p.$$.fragment,t),i=!0)},o(t){f($.$$.fragment,t),f(p.$$.fragment,t),i=!1},d(t){t&&v(e),l($),t&&v(n),t&&v(o),l(p)}}}function qt(t){let e;return{c(){e=i("SCSS Variables")},l(t){e=x(t,"SCSS Variables")},m(t,$){w(t,e,$)},d(t){t&&v(e)}}}function zt(t){let e;return{c(){e=i("Name")},l(t){e=x(t,"Name")},m(t,$){w(t,e,$)},d(t){t&&v(e)}}}function Vt(t){let e;return{c(){e=i("Description")},l(t){e=x(t,"Description")},m(t,$){w(t,e,$)},d(t){t&&v(e)}}}function Bt(t){let e;return{c(){e=i("Default")},l(t){e=x(t,"Default")},m(t,$){w(t,e,$)},d(t){t&&v(e)}}}function Ut(t){let e,$,n,o,p,g;return e=new H({props:{$$slots:{default:[zt]},$$scope:{ctx:t}}}),n=new H({props:{$$slots:{default:[Vt]},$$scope:{ctx:t}}}),p=new H({props:{$$slots:{default:[Bt]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),$=m(),s(n.$$.fragment),o=m(),s(p.$$.fragment)},l(t){r(e.$$.fragment,t),$=d(t),r(n.$$.fragment,t),o=d(t),r(p.$$.fragment,t)},m(t,s){a(e,t,s),w(t,$,s),a(n,t,s),w(t,o,s),a(p,t,s),g=!0},p(t,$){const s={};4&$&&(s.$$scope={dirty:$,ctx:t}),e.$set(s);const r={};4&$&&(r.$$scope={dirty:$,ctx:t}),n.$set(r);const a={};4&$&&(a.$$scope={dirty:$,ctx:t}),p.$set(a)},i(t){g||(c(e.$$.fragment,t),c(n.$$.fragment,t),c(p.$$.fragment,t),g=!0)},o(t){f(e.$$.fragment,t),f(n.$$.fragment,t),f(p.$$.fragment,t),g=!1},d(t){l(e,t),t&&v($),l(n,t),t&&v(o),l(p,t)}}}function It(t){let e,$,n,s,r,a,o,c,f;return{c(){e=g("strong"),$=g("code"),n=i("$main"),s=m(),r=g("small"),a=i("From "),o=g("a"),c=g("code"),f=i("Tab"),this.h()},l(t){e=u(t,"STRONG",{});var l=h(e);$=u(l,"CODE",{});var p=h($);n=x(p,"$main"),p.forEach(v),l.forEach(v),s=d(t),r=u(t,"SMALL",{});var m=h(r);a=x(m,"From "),o=u(m,"A",{href:!0});var g=h(o);c=u(g,"CODE",{});var i=h(c);f=x(i,"Tab"),i.forEach(v),g.forEach(v),m.forEach(v),this.h()},h(){E(o,"href","./docs/components/tab")},m(t,l){w(t,e,l),y(e,$),y($,n),w(t,s,l),w(t,r,l),y(r,a),y(r,o),y(o,c),y(c,f)},d(t){t&&v(e),t&&v(s),t&&v(r)}}}function Yt(t){let e;return{c(){e=i("Affects the color of the ripple background, border color of the selected tab, and text color.")},l(t){e=x(t,"Affects the color of the ripple background, border color of the selected tab, and text color.")},m(t,$){w(t,e,$)},d(t){t&&v(e)}}}function Kt(t){let e,$;return e=new j({props:{value:"#4300B0"}}),{c(){s(e.$$.fragment)},l(t){r(e.$$.fragment,t)},m(t,n){a(e,t,n),$=!0},p:O,i(t){$||(c(e.$$.fragment,t),$=!0)},o(t){f(e.$$.fragment,t),$=!1},d(t){l(e,t)}}}function Wt(t){let e,$,n,o,p,g;return e=new P({props:{$$slots:{default:[It]},$$scope:{ctx:t}}}),n=new P({props:{$$slots:{default:[Yt]},$$scope:{ctx:t}}}),p=new P({props:{$$slots:{default:[Kt]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),$=m(),s(n.$$.fragment),o=m(),s(p.$$.fragment)},l(t){r(e.$$.fragment,t),$=d(t),r(n.$$.fragment,t),o=d(t),r(p.$$.fragment,t)},m(t,s){a(e,t,s),w(t,$,s),a(n,t,s),w(t,o,s),a(p,t,s),g=!0},p(t,$){const s={};4&$&&(s.$$scope={dirty:$,ctx:t}),e.$set(s);const r={};4&$&&(r.$$scope={dirty:$,ctx:t}),n.$set(r);const a={};4&$&&(a.$$scope={dirty:$,ctx:t}),p.$set(a)},i(t){g||(c(e.$$.fragment,t),c(n.$$.fragment,t),c(p.$$.fragment,t),g=!0)},o(t){f(e.$$.fragment,t),f(n.$$.fragment,t),f(p.$$.fragment,t),g=!1},d(t){l(e,t),t&&v($),l(n,t),t&&v(o),l(p,t)}}}function Xt(t){let e,$,n,s,r,a,o,c,f;return{c(){e=g("strong"),$=g("code"),n=i("$disabled"),s=m(),r=g("small"),a=i("From "),o=g("a"),c=g("code"),f=i("Tab"),this.h()},l(t){e=u(t,"STRONG",{});var l=h(e);$=u(l,"CODE",{});var p=h($);n=x(p,"$disabled"),p.forEach(v),l.forEach(v),s=d(t),r=u(t,"SMALL",{});var m=h(r);a=x(m,"From "),o=u(m,"A",{href:!0});var g=h(o);c=u(g,"CODE",{});var i=h(c);f=x(i,"Tab"),i.forEach(v),g.forEach(v),m.forEach(v),this.h()},h(){E(o,"href","./docs/components/tab")},m(t,l){w(t,e,l),y(e,$),y($,n),w(t,s,l),w(t,r,l),y(r,a),y(r,o),y(o,c),y(c,f)},d(t){t&&v(e),t&&v(s),t&&v(r)}}}function _t(t){let e;return{c(){e=i("The text color of disabled tabs.")},l(t){e=x(t,"The text color of disabled tabs.")},m(t,$){w(t,e,$)},d(t){t&&v(e)}}}function Jt(t){let e,$;return e=new j({props:{value:"#888888"}}),{c(){s(e.$$.fragment)},l(t){r(e.$$.fragment,t)},m(t,n){a(e,t,n),$=!0},p:O,i(t){$||(c(e.$$.fragment,t),$=!0)},o(t){f(e.$$.fragment,t),$=!1},d(t){l(e,t)}}}function Qt(t){let e,$,n,o,p,g;return e=new P({props:{$$slots:{default:[Xt]},$$scope:{ctx:t}}}),n=new P({props:{$$slots:{default:[_t]},$$scope:{ctx:t}}}),p=new P({props:{$$slots:{default:[Jt]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),$=m(),s(n.$$.fragment),o=m(),s(p.$$.fragment)},l(t){r(e.$$.fragment,t),$=d(t),r(n.$$.fragment,t),o=d(t),r(p.$$.fragment,t)},m(t,s){a(e,t,s),w(t,$,s),a(n,t,s),w(t,o,s),a(p,t,s),g=!0},p(t,$){const s={};4&$&&(s.$$scope={dirty:$,ctx:t}),e.$set(s);const r={};4&$&&(r.$$scope={dirty:$,ctx:t}),n.$set(r);const a={};4&$&&(a.$$scope={dirty:$,ctx:t}),p.$set(a)},i(t){g||(c(e.$$.fragment,t),c(n.$$.fragment,t),c(p.$$.fragment,t),g=!0)},o(t){f(e.$$.fragment,t),f(n.$$.fragment,t),f(p.$$.fragment,t),g=!1},d(t){l(e,t),t&&v($),l(n,t),t&&v(o),l(p,t)}}}function Zt(t){let e,$,n,s,r,a,o,c,f;return{c(){e=g("strong"),$=g("code"),n=i("$off-state"),s=m(),r=g("small"),a=i("From "),o=g("a"),c=g("code"),f=i("Tab"),this.h()},l(t){e=u(t,"STRONG",{});var l=h(e);$=u(l,"CODE",{});var p=h($);n=x(p,"$off-state"),p.forEach(v),l.forEach(v),s=d(t),r=u(t,"SMALL",{});var m=h(r);a=x(m,"From "),o=u(m,"A",{href:!0});var g=h(o);c=u(g,"CODE",{});var i=h(c);f=x(i,"Tab"),i.forEach(v),g.forEach(v),m.forEach(v),this.h()},h(){E(o,"href","./docs/components/tab")},m(t,l){w(t,e,l),y(e,$),y($,n),w(t,s,l),w(t,r,l),y(r,a),y(r,o),y(o,c),y(c,f)},d(t){t&&v(e),t&&v(s),t&&v(r)}}}function te(t){let e;return{c(){e=i("Affects the background color of the tab when focused or hovered on and the default border color.")},l(t){e=x(t,"Affects the background color of the tab when focused or hovered on and the default border color.")},m(t,$){w(t,e,$)},d(t){t&&v(e)}}}function ee(t){let e,$;return e=new j({props:{value:"#AAAAAA"}}),{c(){s(e.$$.fragment)},l(t){r(e.$$.fragment,t)},m(t,n){a(e,t,n),$=!0},p:O,i(t){$||(c(e.$$.fragment,t),$=!0)},o(t){f(e.$$.fragment,t),$=!1},d(t){l(e,t)}}}function $e(t){let e,$,n,o,p,g;return e=new P({props:{$$slots:{default:[Zt]},$$scope:{ctx:t}}}),n=new P({props:{$$slots:{default:[te]},$$scope:{ctx:t}}}),p=new P({props:{$$slots:{default:[ee]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),$=m(),s(n.$$.fragment),o=m(),s(p.$$.fragment)},l(t){r(e.$$.fragment,t),$=d(t),r(n.$$.fragment,t),o=d(t),r(p.$$.fragment,t)},m(t,s){a(e,t,s),w(t,$,s),a(n,t,s),w(t,o,s),a(p,t,s),g=!0},p(t,$){const s={};4&$&&(s.$$scope={dirty:$,ctx:t}),e.$set(s);const r={};4&$&&(r.$$scope={dirty:$,ctx:t}),n.$set(r);const a={};4&$&&(a.$$scope={dirty:$,ctx:t}),p.$set(a)},i(t){g||(c(e.$$.fragment,t),c(n.$$.fragment,t),c(p.$$.fragment,t),g=!0)},o(t){f(e.$$.fragment,t),f(n.$$.fragment,t),f(p.$$.fragment,t),g=!1},d(t){l(e,t),t&&v($),l(n,t),t&&v(o),l(p,t)}}}function ne(t){let e,$,n,s,r,a,o,c,f;return{c(){e=g("strong"),$=g("code"),n=i("$font"),s=m(),r=g("small"),a=i("From "),o=g("a"),c=g("code"),f=i("Tab"),this.h()},l(t){e=u(t,"STRONG",{});var l=h(e);$=u(l,"CODE",{});var p=h($);n=x(p,"$font"),p.forEach(v),l.forEach(v),s=d(t),r=u(t,"SMALL",{});var m=h(r);a=x(m,"From "),o=u(m,"A",{href:!0});var g=h(o);c=u(g,"CODE",{});var i=h(c);f=x(i,"Tab"),i.forEach(v),g.forEach(v),m.forEach(v),this.h()},h(){E(o,"href","./docs/components/tab")},m(t,l){w(t,e,l),y(e,$),y($,n),w(t,s,l),w(t,r,l),y(r,a),y(r,o),y(o,c),y(c,f)},d(t){t&&v(e),t&&v(s),t&&v(r)}}}function se(t){let e;return{c(){e=i("The font family of the content text.")},l(t){e=x(t,"The font family of the content text.")},m(t,$){w(t,e,$)},d(t){t&&v(e)}}}function re(t){let e,$;return{c(){e=g("code"),$=i("'Ubuntu'")},l(t){e=u(t,"CODE",{});var n=h(e);$=x(n,"'Ubuntu'"),n.forEach(v)},m(t,n){w(t,e,n),y(e,$)},d(t){t&&v(e)}}}function ae(t){let e,$,n,o,p,g;return e=new P({props:{$$slots:{default:[ne]},$$scope:{ctx:t}}}),n=new P({props:{$$slots:{default:[se]},$$scope:{ctx:t}}}),p=new P({props:{$$slots:{default:[re]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),$=m(),s(n.$$.fragment),o=m(),s(p.$$.fragment)},l(t){r(e.$$.fragment,t),$=d(t),r(n.$$.fragment,t),o=d(t),r(p.$$.fragment,t)},m(t,s){a(e,t,s),w(t,$,s),a(n,t,s),w(t,o,s),a(p,t,s),g=!0},p(t,$){const s={};4&$&&(s.$$scope={dirty:$,ctx:t}),e.$set(s);const r={};4&$&&(r.$$scope={dirty:$,ctx:t}),n.$set(r);const a={};4&$&&(a.$$scope={dirty:$,ctx:t}),p.$set(a)},i(t){g||(c(e.$$.fragment,t),c(n.$$.fragment,t),c(p.$$.fragment,t),g=!0)},o(t){f(e.$$.fragment,t),f(n.$$.fragment,t),f(p.$$.fragment,t),g=!1},d(t){l(e,t),t&&v($),l(n,t),t&&v(o),l(p,t)}}}function oe(t){let e,$,n,s,r,a,o,c,f;return{c(){e=g("strong"),$=g("code"),n=i("$bold-font-weight"),s=m(),r=g("small"),a=i("From "),o=g("a"),c=g("code"),f=i("Tab"),this.h()},l(t){e=u(t,"STRONG",{});var l=h(e);$=u(l,"CODE",{});var p=h($);n=x(p,"$bold-font-weight"),p.forEach(v),l.forEach(v),s=d(t),r=u(t,"SMALL",{});var m=h(r);a=x(m,"From "),o=u(m,"A",{href:!0});var g=h(o);c=u(g,"CODE",{});var i=h(c);f=x(i,"Tab"),i.forEach(v),g.forEach(v),m.forEach(v),this.h()},h(){E(o,"href","./docs/components/tab")},m(t,l){w(t,e,l),y(e,$),y($,n),w(t,s,l),w(t,r,l),y(r,a),y(r,o),y(o,c),y(c,f)},d(t){t&&v(e),t&&v(s),t&&v(r)}}}function ce(t){let e;return{c(){e=i("The font weight of the content text.")},l(t){e=x(t,"The font weight of the content text.")},m(t,$){w(t,e,$)},d(t){t&&v(e)}}}function fe(t){let e,$;return{c(){e=g("code"),$=i("500")},l(t){e=u(t,"CODE",{});var n=h(e);$=x(n,"500"),n.forEach(v)},m(t,n){w(t,e,n),y(e,$)},d(t){t&&v(e)}}}function le(t){let e,$,n,o,p,g;return e=new P({props:{$$slots:{default:[oe]},$$scope:{ctx:t}}}),n=new P({props:{$$slots:{default:[ce]},$$scope:{ctx:t}}}),p=new P({props:{$$slots:{default:[fe]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),$=m(),s(n.$$.fragment),o=m(),s(p.$$.fragment)},l(t){r(e.$$.fragment,t),$=d(t),r(n.$$.fragment,t),o=d(t),r(p.$$.fragment,t)},m(t,s){a(e,t,s),w(t,$,s),a(n,t,s),w(t,o,s),a(p,t,s),g=!0},p(t,$){const s={};4&$&&(s.$$scope={dirty:$,ctx:t}),e.$set(s);const r={};4&$&&(r.$$scope={dirty:$,ctx:t}),n.$set(r);const a={};4&$&&(a.$$scope={dirty:$,ctx:t}),p.$set(a)},i(t){g||(c(e.$$.fragment,t),c(n.$$.fragment,t),c(p.$$.fragment,t),g=!0)},o(t){f(e.$$.fragment,t),f(n.$$.fragment,t),f(p.$$.fragment,t),g=!1},d(t){l(e,t),t&&v($),l(n,t),t&&v(o),l(p,t)}}}function pe(t){let e,$,n,o,p,i,x,E,b,D,T,O,k,C;return $=new G({props:{$$slots:{default:[Ut]},$$scope:{ctx:t}}}),p=new G({props:{$$slots:{default:[Wt]},$$scope:{ctx:t}}}),x=new G({props:{$$slots:{default:[Qt]},$$scope:{ctx:t}}}),b=new G({props:{$$slots:{default:[$e]},$$scope:{ctx:t}}}),T=new G({props:{$$slots:{default:[ae]},$$scope:{ctx:t}}}),k=new G({props:{$$slots:{default:[le]},$$scope:{ctx:t}}}),{c(){e=g("thead"),s($.$$.fragment),n=m(),o=g("tbody"),s(p.$$.fragment),i=m(),s(x.$$.fragment),E=m(),s(b.$$.fragment),D=m(),s(T.$$.fragment),O=m(),s(k.$$.fragment)},l(t){e=u(t,"THEAD",{});var s=h(e);r($.$$.fragment,s),s.forEach(v),n=d(t),o=u(t,"TBODY",{});var a=h(o);r(p.$$.fragment,a),i=d(a),r(x.$$.fragment,a),E=d(a),r(b.$$.fragment,a),D=d(a),r(T.$$.fragment,a),O=d(a),r(k.$$.fragment,a),a.forEach(v)},m(t,s){w(t,e,s),a($,e,null),w(t,n,s),w(t,o,s),a(p,o,null),y(o,i),a(x,o,null),y(o,E),a(b,o,null),y(o,D),a(T,o,null),y(o,O),a(k,o,null),C=!0},p(t,e){const n={};4&e&&(n.$$scope={dirty:e,ctx:t}),$.$set(n);const s={};4&e&&(s.$$scope={dirty:e,ctx:t}),p.$set(s);const r={};4&e&&(r.$$scope={dirty:e,ctx:t}),x.$set(r);const a={};4&e&&(a.$$scope={dirty:e,ctx:t}),b.$set(a);const o={};4&e&&(o.$$scope={dirty:e,ctx:t}),T.$set(o);const c={};4&e&&(c.$$scope={dirty:e,ctx:t}),k.$set(c)},i(t){C||(c($.$$.fragment,t),c(p.$$.fragment,t),c(x.$$.fragment,t),c(b.$$.fragment,t),c(T.$$.fragment,t),c(k.$$.fragment,t),C=!0)},o(t){f($.$$.fragment,t),f(p.$$.fragment,t),f(x.$$.fragment,t),f(b.$$.fragment,t),f(T.$$.fragment,t),f(k.$$.fragment,t),C=!1},d(t){t&&v(e),l($),t&&v(n),t&&v(o),l(p),l(x),l(b),l(T),l(k)}}}function me(t){let e,$,n,o,p,b,D,T,O,k,S,j,G,H,P,K,W,X,_,J,Q,Z,tt,et,$t,nt,st,rt,at,ot,ct;return e=new C({props:{$$slots:{default:[q]},$$scope:{ctx:t}}}),n=new A({props:{$$slots:{default:[z]},$$scope:{ctx:t}}}),p=new R({props:{components:ue}}),D=new N({props:{$$slots:{default:[U],source:[B],showcase:[V]},$$scope:{ctx:t}}}),O=new F({props:{id:"properties",$$slots:{default:[I]},$$scope:{ctx:t}}}),S=new L({props:{$$slots:{default:[Y]},$$scope:{ctx:t}}}),G=new M({props:{$$slots:{default:[pt]},$$scope:{ctx:t}}}),X=new L({props:{$$slots:{default:[mt]},$$scope:{ctx:t}}}),J=new A({props:{$$slots:{default:[gt]},$$scope:{ctx:t}}}),Z=new M({props:{$$slots:{default:[At]},$$scope:{ctx:t}}}),et=new F({props:{id:"events",$$slots:{default:[St]},$$scope:{ctx:t}}}),nt=new M({props:{$$slots:{default:[Pt]},$$scope:{ctx:t}}}),rt=new F({props:{id:"scss-variables",$$slots:{default:[qt]},$$scope:{ctx:t}}}),ot=new M({props:{$$slots:{default:[pe]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),$=m(),s(n.$$.fragment),o=m(),s(p.$$.fragment),b=m(),s(D.$$.fragment),T=m(),s(O.$$.fragment),k=m(),s(S.$$.fragment),j=m(),s(G.$$.fragment),H=m(),P=g("div"),K=i("* Required"),W=m(),s(X.$$.fragment),_=m(),s(J.$$.fragment),Q=m(),s(Z.$$.fragment),tt=m(),s(et.$$.fragment),$t=m(),s(nt.$$.fragment),st=m(),s(rt.$$.fragment),at=m(),s(ot.$$.fragment),this.h()},l(t){r(e.$$.fragment,t),$=d(t),r(n.$$.fragment,t),o=d(t),r(p.$$.fragment,t),b=d(t),r(D.$$.fragment,t),T=d(t),r(O.$$.fragment,t),k=d(t),r(S.$$.fragment,t),j=d(t),r(G.$$.fragment,t),H=d(t),P=u(t,"DIV",{class:!0});var s=h(P);K=x(s,"* Required"),s.forEach(v),W=d(t),r(X.$$.fragment,t),_=d(t),r(J.$$.fragment,t),Q=d(t),r(Z.$$.fragment,t),tt=d(t),r(et.$$.fragment,t),$t=d(t),r(nt.$$.fragment,t),st=d(t),r(rt.$$.fragment,t),at=d(t),r(ot.$$.fragment,t),this.h()},h(){E(P,"class","required")},m(t,s){a(e,t,s),w(t,$,s),a(n,t,s),w(t,o,s),a(p,t,s),w(t,b,s),a(D,t,s),w(t,T,s),a(O,t,s),w(t,k,s),a(S,t,s),w(t,j,s),a(G,t,s),w(t,H,s),w(t,P,s),y(P,K),w(t,W,s),a(X,t,s),w(t,_,s),a(J,t,s),w(t,Q,s),a(Z,t,s),w(t,tt,s),a(et,t,s),w(t,$t,s),a(nt,t,s),w(t,st,s),a(rt,t,s),w(t,at,s),a(ot,t,s),ct=!0},p(t,$){const s={};4&$&&(s.$$scope={dirty:$,ctx:t}),e.$set(s);const r={};4&$&&(r.$$scope={dirty:$,ctx:t}),n.$set(r);const a={};5&$&&(a.$$scope={dirty:$,ctx:t}),D.$set(a);const o={};4&$&&(o.$$scope={dirty:$,ctx:t}),O.$set(o);const c={};4&$&&(c.$$scope={dirty:$,ctx:t}),S.$set(c);const f={};4&$&&(f.$$scope={dirty:$,ctx:t}),G.$set(f);const l={};4&$&&(l.$$scope={dirty:$,ctx:t}),X.$set(l);const p={};4&$&&(p.$$scope={dirty:$,ctx:t}),J.$set(p);const m={};4&$&&(m.$$scope={dirty:$,ctx:t}),Z.$set(m);const g={};4&$&&(g.$$scope={dirty:$,ctx:t}),et.$set(g);const i={};4&$&&(i.$$scope={dirty:$,ctx:t}),nt.$set(i);const d={};4&$&&(d.$$scope={dirty:$,ctx:t}),rt.$set(d);const u={};4&$&&(u.$$scope={dirty:$,ctx:t}),ot.$set(u)},i(t){ct||(c(e.$$.fragment,t),c(n.$$.fragment,t),c(p.$$.fragment,t),c(D.$$.fragment,t),c(O.$$.fragment,t),c(S.$$.fragment,t),c(G.$$.fragment,t),c(X.$$.fragment,t),c(J.$$.fragment,t),c(Z.$$.fragment,t),c(et.$$.fragment,t),c(nt.$$.fragment,t),c(rt.$$.fragment,t),c(ot.$$.fragment,t),ct=!0)},o(t){f(e.$$.fragment,t),f(n.$$.fragment,t),f(p.$$.fragment,t),f(D.$$.fragment,t),f(O.$$.fragment,t),f(S.$$.fragment,t),f(G.$$.fragment,t),f(X.$$.fragment,t),f(J.$$.fragment,t),f(Z.$$.fragment,t),f(et.$$.fragment,t),f(nt.$$.fragment,t),f(rt.$$.fragment,t),f(ot.$$.fragment,t),ct=!1},d(t){l(e,t),t&&v($),l(n,t),t&&v(o),l(p,t),t&&v(b),l(D,t),t&&v(T),l(O,t),t&&v(k),l(S,t),t&&v(j),l(G,t),t&&v(H),t&&v(P),t&&v(W),l(X,t),t&&v(_),l(J,t),t&&v(Q),l(Z,t),t&&v(tt),l(et,t),t&&v($t),l(nt,t),t&&v(st),l(rt,t),t&&v(at),l(ot,t)}}}function ge(t){let e,$;const m=[ie];let g={$$slots:{default:[me]},$$scope:{ctx:t}};for(let t=0;t<m.length;t+=1)g=n(g,m[t]);return e=new k({props:g}),{c(){s(e.$$.fragment)},l(t){r(e.$$.fragment,t)},m(t,n){a(e,t,n),$=!0},p(t,[$]){const n=0&$?o(m,[p(ie)]):{};5&$&&(n.$$scope={dirty:$,ctx:t}),e.$set(n)},i(t){$||(c(e.$$.fragment,t),$=!0)},o(t){f(e.$$.fragment,t),$=!1},d(t){l(e,t)}}}const ie={name:"Tabs",relatedComponents:[{name:"Tab",link:"./docs/components/tab"}]},{name:de,relatedComponents:ue}=ie;function he(t,e,$){let n="Main dishes";return[n,function(t){n=t,$(0,n)}]}export default class extends t{constructor(t){super(),e(this,t,he,ge,$,{})}}export{ie as metadata};
