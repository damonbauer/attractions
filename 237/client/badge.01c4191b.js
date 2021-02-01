import{S as t,i as e,s as n,a as s,c as a,b as $,d as o,e as r,f as c,g as p,n as l,G as f,j as m,k as i,m as d,N as g,t as u,o as h,p as x,U as k,q as w,h as y,r as v,u as b,v as E}from"./client.45bcfa78.js";import{L as D,H as T,P as B}from"./layout.194e5dc9.js";import{B as j}from"./button.b8b59652.js";import{B as O}from"./badge.6148118d.js";import{S as C}from"./showcase.988611f7.js";import{C as S}from"./color-preview.6fda4883.js";import{S as A}from"./shadow-preview.c1b084ac.js";import{H as N}from"./h2.7df0c44a.js";import{H as R}from"./h3.94d03d23.js";import{T as H,a as P,b as z,c as F}from"./table.f0226895.js";import"./classes.ae819103.js";import"./label.5dec4fb9.js";import"./copyable-code.e2908df0.js";import"./popover.fb4819b8.js";function M(t){let e,n,f,m;return{c(){e=s("svg"),n=s("path"),f=s("path"),this.h()},l(t){e=a(t,"svg",{xmlns:!0,width:!0,height:!0,fill:!0,viewBox:!0,stroke:!0,"stroke-width":!0,"stroke-linecap":!0,"stroke-linejoin":!0,class:!0},1);var s=$(e);n=a(s,"path",{d:!0},1),$(n).forEach(o),f=a(s,"path",{d:!0},1),$(f).forEach(o),s.forEach(o),this.h()},h(){r(n,"d","M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"),r(f,"d","M13.73 21a2 2 0 0 1-3.46 0"),r(e,"xmlns","http://www.w3.org/2000/svg"),r(e,"width",t[0]),r(e,"height",t[0]),r(e,"fill","none"),r(e,"viewBox","0 0 24 24"),r(e,"stroke","currentColor"),r(e,"stroke-width",t[1]),r(e,"stroke-linecap","round"),r(e,"stroke-linejoin","round"),r(e,"class",m="feather feather-bell "+t[2])},m(t,s){c(t,e,s),p(e,n),p(e,f)},p(t,[n]){1&n&&r(e,"width",t[0]),1&n&&r(e,"height",t[0]),2&n&&r(e,"stroke-width",t[1]),4&n&&m!==(m="feather feather-bell "+t[2])&&r(e,"class",m)},i:l,o:l,d(t){t&&o(e)}}}function W(t,e,n){let{size:s="100%"}=e,{strokeWidth:a=2}=e,{class:$=""}=e;return"100%"!==s&&(s="x"===s.slice(-1)?s.slice(0,s.length-1)+"em":parseInt(s)+"px"),t.$$set=t=>{"size"in t&&n(0,s=t.size),"strokeWidth"in t&&n(1,a=t.strokeWidth),"class"in t&&n(2,$=t.class)},[s,a,$]}class G extends t{constructor(t){super(),e(this,t,W,M,n,{size:0,strokeWidth:1,class:2})}}function I(t){let e;return{c(){e=v("Badge")},l(t){e=E(t,"Badge")},m(t,n){c(t,e,n)},d(t){t&&o(e)}}}function V(t){let e;return{c(){e=v("A distinctive colored circle to bring attention to an element.")},l(t){e=E(t,"A distinctive colored circle to bring attention to an element.")},m(t,n){c(t,e,n)},d(t){t&&o(e)}}}function U(t){let e;return{c(){e=v("used on some text")},l(t){e=E(t,"used on some text")},m(t,n){c(t,e,n)},d(t){t&&o(e)}}}function Y(t){let e,n;return e=new G({props:{size:"20",class:"icon"}}),{c(){m(e.$$.fragment)},l(t){i(e.$$.fragment,t)},m(t,s){d(e,t,s),n=!0},p:l,i(t){n||(u(e.$$.fragment,t),n=!0)},o(t){h(e.$$.fragment,t),n=!1},d(t){x(e,t)}}}function L(t){let e,n;return e=new O({props:{hidden:t[0],$$slots:{default:[Y]},$$scope:{ctx:t}}}),{c(){m(e.$$.fragment)},l(t){i(e.$$.fragment,t)},m(t,s){d(e,t,s),n=!0},p(t,n){const s={};1&n&&(s.hidden=t[0]),4&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){n||(u(e.$$.fragment,t),n=!0)},o(t){h(e.$$.fragment,t),n=!1},d(t){x(e,t)}}}function q(t){let e,n,s,l,f;return n=new O({props:{$$slots:{default:[U]},$$scope:{ctx:t}}}),l=new j({props:{round:!0,$$slots:{default:[L]},$$scope:{ctx:t}}}),l.$on("click",t[1]),{c(){e=y("div"),m(n.$$.fragment),s=w(),m(l.$$.fragment),this.h()},l(t){e=a(t,"DIV",{slot:!0,class:!0});var r=$(e);i(n.$$.fragment,r),s=b(r),i(l.$$.fragment,r),r.forEach(o),this.h()},h(){r(e,"slot","showcase"),r(e,"class","padded")},m(t,a){c(t,e,a),d(n,e,null),p(e,s),d(l,e,null),f=!0},p(t,e){const s={};4&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s);const a={};5&e&&(a.$$scope={dirty:e,ctx:t}),l.$set(a)},i(t){f||(u(n.$$.fragment,t),u(l.$$.fragment,t),f=!0)},o(t){h(n.$$.fragment,t),h(l.$$.fragment,t),f=!1},d(t){t&&o(e),x(n),x(l)}}}function K(t){let e,n;return{c(){e=y("div"),n=y("pre"),this.h()},l(t){e=a(t,"DIV",{slot:!0});var s=$(e);n=a(s,"PRE",{class:!0}),$(n).forEach(o),s.forEach(o),this.h()},h(){r(n,"class","language-svelte"),r(e,"slot","source")},m(t,s){c(t,e,s),p(e,n),n.innerHTML='<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">let</span> hidden <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span><span class="token punctuation">></span></span>used on some text<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Badge</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">round</span> <span class="token attr-name"><span class="token namespace">on:</span>click=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> hidden <span class="token operator">=</span> <span class="token operator">!</span>hidden<span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token language-javascript"><span class="token punctuation">&#123;</span>hidden<span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BellIcon</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>20<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>icon<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Badge</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span></code>'},p:l,d(t){t&&o(e)}}}function J(t){let e;return{c(){e=w()},l(t){e=b(t)},m(t,n){c(t,e,n)},p:l,i:l,o:l,d(t){t&&o(e)}}}function Q(t){let e;return{c(){e=v("Properties")},l(t){e=E(t,"Properties")},m(t,n){c(t,e,n)},d(t){t&&o(e)}}}function X(t){let e;return{c(){e=v("Functional Properties")},l(t){e=E(t,"Functional Properties")},m(t,n){c(t,e,n)},d(t){t&&o(e)}}}function Z(t){let e;return{c(){e=v("Name")},l(t){e=E(t,"Name")},m(t,n){c(t,e,n)},d(t){t&&o(e)}}}function _(t){let e;return{c(){e=v("Default")},l(t){e=E(t,"Default")},m(t,n){c(t,e,n)},d(t){t&&o(e)}}}function tt(t){let e;return{c(){e=v("Type")},l(t){e=E(t,"Type")},m(t,n){c(t,e,n)},d(t){t&&o(e)}}}function et(t){let e;return{c(){e=v("Description")},l(t){e=E(t,"Description")},m(t,n){c(t,e,n)},d(t){t&&o(e)}}}function nt(t){let e,n,s,a,$,r,p,l;return e=new z({props:{$$slots:{default:[Z]},$$scope:{ctx:t}}}),s=new z({props:{$$slots:{default:[_]},$$scope:{ctx:t}}}),$=new z({props:{$$slots:{default:[tt]},$$scope:{ctx:t}}}),p=new z({props:{$$slots:{default:[et]},$$scope:{ctx:t}}}),{c(){m(e.$$.fragment),n=w(),m(s.$$.fragment),a=w(),m($.$$.fragment),r=w(),m(p.$$.fragment)},l(t){i(e.$$.fragment,t),n=b(t),i(s.$$.fragment,t),a=b(t),i($.$$.fragment,t),r=b(t),i(p.$$.fragment,t)},m(t,o){d(e,t,o),c(t,n,o),d(s,t,o),c(t,a,o),d($,t,o),c(t,r,o),d(p,t,o),l=!0},p(t,n){const a={};4&n&&(a.$$scope={dirty:n,ctx:t}),e.$set(a);const o={};4&n&&(o.$$scope={dirty:n,ctx:t}),s.$set(o);const r={};4&n&&(r.$$scope={dirty:n,ctx:t}),$.$set(r);const c={};4&n&&(c.$$scope={dirty:n,ctx:t}),p.$set(c)},i(t){l||(u(e.$$.fragment,t),u(s.$$.fragment,t),u($.$$.fragment,t),u(p.$$.fragment,t),l=!0)},o(t){h(e.$$.fragment,t),h(s.$$.fragment,t),h($.$$.fragment,t),h(p.$$.fragment,t),l=!1},d(t){x(e,t),t&&o(n),x(s,t),t&&o(a),x($,t),t&&o(r),x(p,t)}}}function st(t){let e,n,s;return{c(){e=y("strong"),n=y("code"),s=v("hidden")},l(t){e=a(t,"STRONG",{});var r=$(e);n=a(r,"CODE",{});var c=$(n);s=E(c,"hidden"),c.forEach(o),r.forEach(o)},m(t,a){c(t,e,a),p(e,n),p(n,s)},d(t){t&&o(e)}}}function at(t){let e,n;return{c(){e=y("code"),n=v("false")},l(t){e=a(t,"CODE",{});var s=$(e);n=E(s,"false"),s.forEach(o)},m(t,s){c(t,e,s),p(e,n)},d(t){t&&o(e)}}}function $t(t){let e,n;return{c(){e=y("code"),n=v("boolean")},l(t){e=a(t,"CODE",{});var s=$(e);n=E(s,"boolean"),s.forEach(o)},m(t,s){c(t,e,s),p(e,n)},d(t){t&&o(e)}}}function ot(t){let e;return{c(){e=v("Whether the badge is shown or hidden. Useful for controlling its appearance without modifying the DOM tree.")},l(t){e=E(t,"Whether the badge is shown or hidden. Useful for controlling its appearance without modifying the DOM tree.")},m(t,n){c(t,e,n)},d(t){t&&o(e)}}}function rt(t){let e,n,s,a,$,r,p,l;return e=new F({props:{$$slots:{default:[st]},$$scope:{ctx:t}}}),s=new F({props:{$$slots:{default:[at]},$$scope:{ctx:t}}}),$=new F({props:{$$slots:{default:[$t]},$$scope:{ctx:t}}}),p=new F({props:{$$slots:{default:[ot]},$$scope:{ctx:t}}}),{c(){m(e.$$.fragment),n=w(),m(s.$$.fragment),a=w(),m($.$$.fragment),r=w(),m(p.$$.fragment)},l(t){i(e.$$.fragment,t),n=b(t),i(s.$$.fragment,t),a=b(t),i($.$$.fragment,t),r=b(t),i(p.$$.fragment,t)},m(t,o){d(e,t,o),c(t,n,o),d(s,t,o),c(t,a,o),d($,t,o),c(t,r,o),d(p,t,o),l=!0},p(t,n){const a={};4&n&&(a.$$scope={dirty:n,ctx:t}),e.$set(a);const o={};4&n&&(o.$$scope={dirty:n,ctx:t}),s.$set(o);const r={};4&n&&(r.$$scope={dirty:n,ctx:t}),$.$set(r);const c={};4&n&&(c.$$scope={dirty:n,ctx:t}),p.$set(c)},i(t){l||(u(e.$$.fragment,t),u(s.$$.fragment,t),u($.$$.fragment,t),u(p.$$.fragment,t),l=!0)},o(t){h(e.$$.fragment,t),h(s.$$.fragment,t),h($.$$.fragment,t),h(p.$$.fragment,t),l=!1},d(t){x(e,t),t&&o(n),x(s,t),t&&o(a),x($,t),t&&o(r),x(p,t)}}}function ct(t){let e,n,s,r,p,l;return n=new P({props:{$$slots:{default:[nt]},$$scope:{ctx:t}}}),p=new P({props:{$$slots:{default:[rt]},$$scope:{ctx:t}}}),{c(){e=y("thead"),m(n.$$.fragment),s=w(),r=y("tbody"),m(p.$$.fragment)},l(t){e=a(t,"THEAD",{});var c=$(e);i(n.$$.fragment,c),c.forEach(o),s=b(t),r=a(t,"TBODY",{});var l=$(r);i(p.$$.fragment,l),l.forEach(o)},m(t,a){c(t,e,a),d(n,e,null),c(t,s,a),c(t,r,a),d(p,r,null),l=!0},p(t,e){const s={};4&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s);const a={};4&e&&(a.$$scope={dirty:e,ctx:t}),p.$set(a)},i(t){l||(u(n.$$.fragment,t),u(p.$$.fragment,t),l=!0)},o(t){h(n.$$.fragment,t),h(p.$$.fragment,t),l=!1},d(t){t&&o(e),x(n),t&&o(s),t&&o(r),x(p)}}}function pt(t){let e;return{c(){e=v("Class Properties")},l(t){e=E(t,"Class Properties")},m(t,n){c(t,e,n)},d(t){t&&o(e)}}}function lt(t){let e,n,s,r,l,f,m;return{c(){e=v("All "),n=y("code"),s=v("<Badge>"),r=v(" components use the "),l=y("code"),f=v(".badge"),m=v(" class.")},l(t){e=E(t,"All "),n=a(t,"CODE",{});var c=$(n);s=E(c,"<Badge>"),c.forEach(o),r=E(t," components use the "),l=a(t,"CODE",{});var p=$(l);f=E(p,".badge"),p.forEach(o),m=E(t," class.")},m(t,a){c(t,e,a),c(t,n,a),p(n,s),c(t,r,a),c(t,l,a),p(l,f),c(t,m,a)},d(t){t&&o(e),t&&o(n),t&&o(r),t&&o(l),t&&o(m)}}}function ft(t){let e;return{c(){e=v("Falsy values passed to classes will be disregarded.")},l(t){e=E(t,"Falsy values passed to classes will be disregarded.")},m(t,n){c(t,e,n)},d(t){t&&o(e)}}}function mt(t){let e;return{c(){e=v("Name")},l(t){e=E(t,"Name")},m(t,n){c(t,e,n)},d(t){t&&o(e)}}}function it(t){let e;return{c(){e=v("Default")},l(t){e=E(t,"Default")},m(t,n){c(t,e,n)},d(t){t&&o(e)}}}function dt(t){let e;return{c(){e=v("Type")},l(t){e=E(t,"Type")},m(t,n){c(t,e,n)},d(t){t&&o(e)}}}function gt(t){let e;return{c(){e=v("Description")},l(t){e=E(t,"Description")},m(t,n){c(t,e,n)},d(t){t&&o(e)}}}function ut(t){let e,n,s,a,$,r,p,l;return e=new z({props:{$$slots:{default:[mt]},$$scope:{ctx:t}}}),s=new z({props:{$$slots:{default:[it]},$$scope:{ctx:t}}}),$=new z({props:{$$slots:{default:[dt]},$$scope:{ctx:t}}}),p=new z({props:{$$slots:{default:[gt]},$$scope:{ctx:t}}}),{c(){m(e.$$.fragment),n=w(),m(s.$$.fragment),a=w(),m($.$$.fragment),r=w(),m(p.$$.fragment)},l(t){i(e.$$.fragment,t),n=b(t),i(s.$$.fragment,t),a=b(t),i($.$$.fragment,t),r=b(t),i(p.$$.fragment,t)},m(t,o){d(e,t,o),c(t,n,o),d(s,t,o),c(t,a,o),d($,t,o),c(t,r,o),d(p,t,o),l=!0},p(t,n){const a={};4&n&&(a.$$scope={dirty:n,ctx:t}),e.$set(a);const o={};4&n&&(o.$$scope={dirty:n,ctx:t}),s.$set(o);const r={};4&n&&(r.$$scope={dirty:n,ctx:t}),$.$set(r);const c={};4&n&&(c.$$scope={dirty:n,ctx:t}),p.$set(c)},i(t){l||(u(e.$$.fragment,t),u(s.$$.fragment,t),u($.$$.fragment,t),u(p.$$.fragment,t),l=!0)},o(t){h(e.$$.fragment,t),h(s.$$.fragment,t),h($.$$.fragment,t),h(p.$$.fragment,t),l=!1},d(t){x(e,t),t&&o(n),x(s,t),t&&o(a),x($,t),t&&o(r),x(p,t)}}}function ht(t){let e,n,s;return{c(){e=y("strong"),n=y("code"),s=v("class")},l(t){e=a(t,"STRONG",{});var r=$(e);n=a(r,"CODE",{});var c=$(n);s=E(c,"class"),c.forEach(o),r.forEach(o)},m(t,a){c(t,e,a),p(e,n),p(n,s)},d(t){t&&o(e)}}}function xt(t){let e,n;return{c(){e=y("code"),n=v("null")},l(t){e=a(t,"CODE",{});var s=$(e);n=E(s,"null"),s.forEach(o)},m(t,s){c(t,e,s),p(e,n)},d(t){t&&o(e)}}}function kt(t){let e,n;return{c(){e=y("code"),n=v("string")},l(t){e=a(t,"CODE",{});var s=$(e);n=E(s,"string"),s.forEach(o)},m(t,s){c(t,e,s),p(e,n)},d(t){t&&o(e)}}}function wt(t){let e;return{c(){e=v("A class string to add to the handle.")},l(t){e=E(t,"A class string to add to the handle.")},m(t,n){c(t,e,n)},d(t){t&&o(e)}}}function yt(t){let e,n,s,a,$,r,p,l;return e=new F({props:{$$slots:{default:[ht]},$$scope:{ctx:t}}}),s=new F({props:{$$slots:{default:[xt]},$$scope:{ctx:t}}}),$=new F({props:{$$slots:{default:[kt]},$$scope:{ctx:t}}}),p=new F({props:{$$slots:{default:[wt]},$$scope:{ctx:t}}}),{c(){m(e.$$.fragment),n=w(),m(s.$$.fragment),a=w(),m($.$$.fragment),r=w(),m(p.$$.fragment)},l(t){i(e.$$.fragment,t),n=b(t),i(s.$$.fragment,t),a=b(t),i($.$$.fragment,t),r=b(t),i(p.$$.fragment,t)},m(t,o){d(e,t,o),c(t,n,o),d(s,t,o),c(t,a,o),d($,t,o),c(t,r,o),d(p,t,o),l=!0},p(t,n){const a={};4&n&&(a.$$scope={dirty:n,ctx:t}),e.$set(a);const o={};4&n&&(o.$$scope={dirty:n,ctx:t}),s.$set(o);const r={};4&n&&(r.$$scope={dirty:n,ctx:t}),$.$set(r);const c={};4&n&&(c.$$scope={dirty:n,ctx:t}),p.$set(c)},i(t){l||(u(e.$$.fragment,t),u(s.$$.fragment,t),u($.$$.fragment,t),u(p.$$.fragment,t),l=!0)},o(t){h(e.$$.fragment,t),h(s.$$.fragment,t),h($.$$.fragment,t),h(p.$$.fragment,t),l=!1},d(t){x(e,t),t&&o(n),x(s,t),t&&o(a),x($,t),t&&o(r),x(p,t)}}}function vt(t){let e,n,s,r,p,l;return n=new P({props:{$$slots:{default:[ut]},$$scope:{ctx:t}}}),p=new P({props:{$$slots:{default:[yt]},$$scope:{ctx:t}}}),{c(){e=y("thead"),m(n.$$.fragment),s=w(),r=y("tbody"),m(p.$$.fragment)},l(t){e=a(t,"THEAD",{});var c=$(e);i(n.$$.fragment,c),c.forEach(o),s=b(t),r=a(t,"TBODY",{});var l=$(r);i(p.$$.fragment,l),l.forEach(o)},m(t,a){c(t,e,a),d(n,e,null),c(t,s,a),c(t,r,a),d(p,r,null),l=!0},p(t,e){const s={};4&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s);const a={};4&e&&(a.$$scope={dirty:e,ctx:t}),p.$set(a)},i(t){l||(u(n.$$.fragment,t),u(p.$$.fragment,t),l=!0)},o(t){h(n.$$.fragment,t),h(p.$$.fragment,t),l=!1},d(t){t&&o(e),x(n),t&&o(s),t&&o(r),x(p)}}}function bt(t){let e;return{c(){e=v("Slots")},l(t){e=E(t,"Slots")},m(t,n){c(t,e,n)},d(t){t&&o(e)}}}function Et(t){let e;return{c(){e=v("Default slot")},l(t){e=E(t,"Default slot")},m(t,n){c(t,e,n)},d(t){t&&o(e)}}}function Dt(t){let e;return{c(){e=v("The element to attach a badge to.")},l(t){e=E(t,"The element to attach a badge to.")},m(t,n){c(t,e,n)},d(t){t&&o(e)}}}function Tt(t){let e;return{c(){e=v("SCSS Variables")},l(t){e=E(t,"SCSS Variables")},m(t,n){c(t,e,n)},d(t){t&&o(e)}}}function Bt(t){let e;return{c(){e=v("Name")},l(t){e=E(t,"Name")},m(t,n){c(t,e,n)},d(t){t&&o(e)}}}function jt(t){let e;return{c(){e=v("Description")},l(t){e=E(t,"Description")},m(t,n){c(t,e,n)},d(t){t&&o(e)}}}function Ot(t){let e;return{c(){e=v("Default")},l(t){e=E(t,"Default")},m(t,n){c(t,e,n)},d(t){t&&o(e)}}}function Ct(t){let e,n,s,a,$,r;return e=new z({props:{$$slots:{default:[Bt]},$$scope:{ctx:t}}}),s=new z({props:{$$slots:{default:[jt]},$$scope:{ctx:t}}}),$=new z({props:{$$slots:{default:[Ot]},$$scope:{ctx:t}}}),{c(){m(e.$$.fragment),n=w(),m(s.$$.fragment),a=w(),m($.$$.fragment)},l(t){i(e.$$.fragment,t),n=b(t),i(s.$$.fragment,t),a=b(t),i($.$$.fragment,t)},m(t,o){d(e,t,o),c(t,n,o),d(s,t,o),c(t,a,o),d($,t,o),r=!0},p(t,n){const a={};4&n&&(a.$$scope={dirty:n,ctx:t}),e.$set(a);const o={};4&n&&(o.$$scope={dirty:n,ctx:t}),s.$set(o);const r={};4&n&&(r.$$scope={dirty:n,ctx:t}),$.$set(r)},i(t){r||(u(e.$$.fragment,t),u(s.$$.fragment,t),u($.$$.fragment,t),r=!0)},o(t){h(e.$$.fragment,t),h(s.$$.fragment,t),h($.$$.fragment,t),r=!1},d(t){x(e,t),t&&o(n),x(s,t),t&&o(a),x($,t)}}}function St(t){let e,n,s;return{c(){e=y("strong"),n=y("code"),s=v("$shadow-raised")},l(t){e=a(t,"STRONG",{});var r=$(e);n=a(r,"CODE",{});var c=$(n);s=E(c,"$shadow-raised"),c.forEach(o),r.forEach(o)},m(t,a){c(t,e,a),p(e,n),p(n,s)},d(t){t&&o(e)}}}function At(t){let e;return{c(){e=v("The shadow of the badge.")},l(t){e=E(t,"The shadow of the badge.")},m(t,n){c(t,e,n)},d(t){t&&o(e)}}}function Nt(t){let e,n;return e=new A({props:{value:Ut}}),{c(){m(e.$$.fragment)},l(t){i(e.$$.fragment,t)},m(t,s){d(e,t,s),n=!0},p:l,i(t){n||(u(e.$$.fragment,t),n=!0)},o(t){h(e.$$.fragment,t),n=!1},d(t){x(e,t)}}}function Rt(t){let e,n,s,a,$,r;return e=new F({props:{$$slots:{default:[St]},$$scope:{ctx:t}}}),s=new F({props:{$$slots:{default:[At]},$$scope:{ctx:t}}}),$=new F({props:{$$slots:{default:[Nt]},$$scope:{ctx:t}}}),{c(){m(e.$$.fragment),n=w(),m(s.$$.fragment),a=w(),m($.$$.fragment)},l(t){i(e.$$.fragment,t),n=b(t),i(s.$$.fragment,t),a=b(t),i($.$$.fragment,t)},m(t,o){d(e,t,o),c(t,n,o),d(s,t,o),c(t,a,o),d($,t,o),r=!0},p(t,n){const a={};4&n&&(a.$$scope={dirty:n,ctx:t}),e.$set(a);const o={};4&n&&(o.$$scope={dirty:n,ctx:t}),s.$set(o);const r={};4&n&&(r.$$scope={dirty:n,ctx:t}),$.$set(r)},i(t){r||(u(e.$$.fragment,t),u(s.$$.fragment,t),u($.$$.fragment,t),r=!0)},o(t){h(e.$$.fragment,t),h(s.$$.fragment,t),h($.$$.fragment,t),r=!1},d(t){x(e,t),t&&o(n),x(s,t),t&&o(a),x($,t)}}}function Ht(t){let e,n,s;return{c(){e=y("strong"),n=y("code"),s=v("$badge-default")},l(t){e=a(t,"STRONG",{});var r=$(e);n=a(r,"CODE",{});var c=$(n);s=E(c,"$badge-default"),c.forEach(o),r.forEach(o)},m(t,a){c(t,e,a),p(e,n),p(n,s)},d(t){t&&o(e)}}}function Pt(t){let e;return{c(){e=v("The default color of the badge.")},l(t){e=E(t,"The default color of the badge.")},m(t,n){c(t,e,n)},d(t){t&&o(e)}}}function zt(t){let e,n;return e=new S({props:{value:"#FF5757"}}),{c(){m(e.$$.fragment)},l(t){i(e.$$.fragment,t)},m(t,s){d(e,t,s),n=!0},p:l,i(t){n||(u(e.$$.fragment,t),n=!0)},o(t){h(e.$$.fragment,t),n=!1},d(t){x(e,t)}}}function Ft(t){let e,n,s,a,$,r;return e=new F({props:{$$slots:{default:[Ht]},$$scope:{ctx:t}}}),s=new F({props:{$$slots:{default:[Pt]},$$scope:{ctx:t}}}),$=new F({props:{$$slots:{default:[zt]},$$scope:{ctx:t}}}),{c(){m(e.$$.fragment),n=w(),m(s.$$.fragment),a=w(),m($.$$.fragment)},l(t){i(e.$$.fragment,t),n=b(t),i(s.$$.fragment,t),a=b(t),i($.$$.fragment,t)},m(t,o){d(e,t,o),c(t,n,o),d(s,t,o),c(t,a,o),d($,t,o),r=!0},p(t,n){const a={};4&n&&(a.$$scope={dirty:n,ctx:t}),e.$set(a);const o={};4&n&&(o.$$scope={dirty:n,ctx:t}),s.$set(o);const r={};4&n&&(r.$$scope={dirty:n,ctx:t}),$.$set(r)},i(t){r||(u(e.$$.fragment,t),u(s.$$.fragment,t),u($.$$.fragment,t),r=!0)},o(t){h(e.$$.fragment,t),h(s.$$.fragment,t),h($.$$.fragment,t),r=!1},d(t){x(e,t),t&&o(n),x(s,t),t&&o(a),x($,t)}}}function Mt(t){let e,n,s,r,l,f,g,k;return n=new P({props:{$$slots:{default:[Ct]},$$scope:{ctx:t}}}),l=new P({props:{$$slots:{default:[Rt]},$$scope:{ctx:t}}}),g=new P({props:{$$slots:{default:[Ft]},$$scope:{ctx:t}}}),{c(){e=y("thead"),m(n.$$.fragment),s=w(),r=y("tbody"),m(l.$$.fragment),f=w(),m(g.$$.fragment)},l(t){e=a(t,"THEAD",{});var c=$(e);i(n.$$.fragment,c),c.forEach(o),s=b(t),r=a(t,"TBODY",{});var p=$(r);i(l.$$.fragment,p),f=b(p),i(g.$$.fragment,p),p.forEach(o)},m(t,a){c(t,e,a),d(n,e,null),c(t,s,a),c(t,r,a),d(l,r,null),p(r,f),d(g,r,null),k=!0},p(t,e){const s={};4&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s);const a={};4&e&&(a.$$scope={dirty:e,ctx:t}),l.$set(a);const $={};4&e&&($.$$scope={dirty:e,ctx:t}),g.$set($)},i(t){k||(u(n.$$.fragment,t),u(l.$$.fragment,t),u(g.$$.fragment,t),k=!0)},o(t){h(n.$$.fragment,t),h(l.$$.fragment,t),h(g.$$.fragment,t),k=!1},d(t){t&&o(e),x(n),t&&o(s),t&&o(r),x(l),x(g)}}}function Wt(t){let e,n,s,r,l,f,g,k,D,j,O,S,A,P,z,F,M,W,G,U,Y,L,Z,_,tt,et,nt,st,at,$t,ot,rt,mt;return e=new T({props:{$$slots:{default:[I]},$$scope:{ctx:t}}}),s=new B({props:{$$slots:{default:[V]},$$scope:{ctx:t}}}),l=new C({props:{$$slots:{default:[J],source:[K],showcase:[q]},$$scope:{ctx:t}}}),g=new N({props:{id:"properties",$$slots:{default:[Q]},$$scope:{ctx:t}}}),D=new R({props:{$$slots:{default:[X]},$$scope:{ctx:t}}}),O=new H({props:{$$slots:{default:[ct]},$$scope:{ctx:t}}}),A=new R({props:{$$slots:{default:[pt]},$$scope:{ctx:t}}}),z=new B({props:{$$slots:{default:[lt]},$$scope:{ctx:t}}}),M=new B({props:{$$slots:{default:[ft]},$$scope:{ctx:t}}}),G=new H({props:{$$slots:{default:[vt]},$$scope:{ctx:t}}}),_=new N({props:{id:"slots",$$slots:{default:[bt]},$$scope:{ctx:t}}}),et=new R({props:{$$slots:{default:[Et]},$$scope:{ctx:t}}}),st=new B({props:{$$slots:{default:[Dt]},$$scope:{ctx:t}}}),$t=new N({props:{id:"scss-variables",$$slots:{default:[Tt]},$$scope:{ctx:t}}}),rt=new H({props:{$$slots:{default:[Mt]},$$scope:{ctx:t}}}),{c(){m(e.$$.fragment),n=w(),m(s.$$.fragment),r=w(),m(l.$$.fragment),f=w(),m(g.$$.fragment),k=w(),m(D.$$.fragment),j=w(),m(O.$$.fragment),S=w(),m(A.$$.fragment),P=w(),m(z.$$.fragment),F=w(),m(M.$$.fragment),W=w(),m(G.$$.fragment),U=w(),Y=y("mark"),L=v("Bonus"),Z=v(": use the `.icon` class for the icons inside the badge to set `display: block` on them and avoid unexpected space at the bottom.\n"),m(_.$$.fragment),tt=w(),m(et.$$.fragment),nt=w(),m(st.$$.fragment),at=w(),m($t.$$.fragment),ot=w(),m(rt.$$.fragment)},l(t){i(e.$$.fragment,t),n=b(t),i(s.$$.fragment,t),r=b(t),i(l.$$.fragment,t),f=b(t),i(g.$$.fragment,t),k=b(t),i(D.$$.fragment,t),j=b(t),i(O.$$.fragment,t),S=b(t),i(A.$$.fragment,t),P=b(t),i(z.$$.fragment,t),F=b(t),i(M.$$.fragment,t),W=b(t),i(G.$$.fragment,t),U=b(t),Y=a(t,"MARK",{});var c=$(Y);L=E(c,"Bonus"),c.forEach(o),Z=E(t,": use the `.icon` class for the icons inside the badge to set `display: block` on them and avoid unexpected space at the bottom.\n"),i(_.$$.fragment,t),tt=b(t),i(et.$$.fragment,t),nt=b(t),i(st.$$.fragment,t),at=b(t),i($t.$$.fragment,t),ot=b(t),i(rt.$$.fragment,t)},m(t,a){d(e,t,a),c(t,n,a),d(s,t,a),c(t,r,a),d(l,t,a),c(t,f,a),d(g,t,a),c(t,k,a),d(D,t,a),c(t,j,a),d(O,t,a),c(t,S,a),d(A,t,a),c(t,P,a),d(z,t,a),c(t,F,a),d(M,t,a),c(t,W,a),d(G,t,a),c(t,U,a),c(t,Y,a),p(Y,L),c(t,Z,a),d(_,t,a),c(t,tt,a),d(et,t,a),c(t,nt,a),d(st,t,a),c(t,at,a),d($t,t,a),c(t,ot,a),d(rt,t,a),mt=!0},p(t,n){const a={};4&n&&(a.$$scope={dirty:n,ctx:t}),e.$set(a);const $={};4&n&&($.$$scope={dirty:n,ctx:t}),s.$set($);const o={};5&n&&(o.$$scope={dirty:n,ctx:t}),l.$set(o);const r={};4&n&&(r.$$scope={dirty:n,ctx:t}),g.$set(r);const c={};4&n&&(c.$$scope={dirty:n,ctx:t}),D.$set(c);const p={};4&n&&(p.$$scope={dirty:n,ctx:t}),O.$set(p);const f={};4&n&&(f.$$scope={dirty:n,ctx:t}),A.$set(f);const m={};4&n&&(m.$$scope={dirty:n,ctx:t}),z.$set(m);const i={};4&n&&(i.$$scope={dirty:n,ctx:t}),M.$set(i);const d={};4&n&&(d.$$scope={dirty:n,ctx:t}),G.$set(d);const u={};4&n&&(u.$$scope={dirty:n,ctx:t}),_.$set(u);const h={};4&n&&(h.$$scope={dirty:n,ctx:t}),et.$set(h);const x={};4&n&&(x.$$scope={dirty:n,ctx:t}),st.$set(x);const k={};4&n&&(k.$$scope={dirty:n,ctx:t}),$t.$set(k);const w={};4&n&&(w.$$scope={dirty:n,ctx:t}),rt.$set(w)},i(t){mt||(u(e.$$.fragment,t),u(s.$$.fragment,t),u(l.$$.fragment,t),u(g.$$.fragment,t),u(D.$$.fragment,t),u(O.$$.fragment,t),u(A.$$.fragment,t),u(z.$$.fragment,t),u(M.$$.fragment,t),u(G.$$.fragment,t),u(_.$$.fragment,t),u(et.$$.fragment,t),u(st.$$.fragment,t),u($t.$$.fragment,t),u(rt.$$.fragment,t),mt=!0)},o(t){h(e.$$.fragment,t),h(s.$$.fragment,t),h(l.$$.fragment,t),h(g.$$.fragment,t),h(D.$$.fragment,t),h(O.$$.fragment,t),h(A.$$.fragment,t),h(z.$$.fragment,t),h(M.$$.fragment,t),h(G.$$.fragment,t),h(_.$$.fragment,t),h(et.$$.fragment,t),h(st.$$.fragment,t),h($t.$$.fragment,t),h(rt.$$.fragment,t),mt=!1},d(t){x(e,t),t&&o(n),x(s,t),t&&o(r),x(l,t),t&&o(f),x(g,t),t&&o(k),x(D,t),t&&o(j),x(O,t),t&&o(S),x(A,t),t&&o(P),x(z,t),t&&o(F),x(M,t),t&&o(W),x(G,t),t&&o(U),t&&o(Y),t&&o(Z),x(_,t),t&&o(tt),x(et,t),t&&o(nt),x(st,t),t&&o(at),x($t,t),t&&o(ot),x(rt,t)}}}function Gt(t){let e,n;const s=[It];let a={$$slots:{default:[Wt]},$$scope:{ctx:t}};for(let t=0;t<s.length;t+=1)a=f(a,s[t]);return e=new D({props:a}),{c(){m(e.$$.fragment)},l(t){i(e.$$.fragment,t)},m(t,s){d(e,t,s),n=!0},p(t,[n]){const a=0&n?g(s,[k(It)]):{};5&n&&(a.$$scope={dirty:n,ctx:t}),e.$set(a)},i(t){n||(u(e.$$.fragment,t),n=!0)},o(t){h(e.$$.fragment,t),n=!1},d(t){x(e,t)}}}const It={name:"Badge",shadowRaised:"0 2px 4px -1px rgba(0, 0, 0, .2), 0 3px 5px 0 rgba(0, 0, 0, .14), 0 1px 10px 0 rgba(0, 0, 0, .12);"},{name:Vt,shadowRaised:Ut}=It;function Yt(t,e,n){let s=!1;return[s,()=>n(0,s=!s)]}export default class extends t{constructor(t){super(),e(this,t,Yt,Gt,n,{})}}export{It as metadata};
