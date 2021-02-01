import{S as t,i as n,s as e,L as s,p as a,q as $,r as o,T as r,Z as c,u as p,v as l,w as f,x as m,z as d,k as g,h as u,y as i,A as h,o as x,f as w,g as k,j as y,l as v,n as D,U as E}from"./client.831ab1f6.js";import{L as b,H as T,P as C}from"./layout.be97799c.js";import{B as O}from"./button.a622a4d6.js";import{D as S,a as j}from"./dropdown.f308e9e4.js";import{C as A}from"./ChevronDownIcon.ef413a95.js";import{S as I}from"./showcase.5ed60318.js";import{C as N}from"./color-preview.85193119.js";import{S as R}from"./shadow-preview.b8669e2c.js";import{R as B}from"./related-components.4402625f.js";import{H as F}from"./h2.6d201ab2.js";import{H as G}from"./h3.2301de3c.js";import{T as H,a as P,b as V,c as z}from"./table.6378e9c2.js";import"./classes.541c5f2a.js";import"./label.be757ee0.js";import"./copyable-code.e1d6a85d.js";import"./asyncToGenerator.756dab92.js";import"./popover.ede68326.js";import"./card.d66d7f61.js";function L(t){let n;return{c(){n=i("Dropdown")},l(t){n=h(t,"Dropdown")},m(t,e){g(t,n,e)},d(t){t&&u(n)}}}function M(t){let n,e,s,a,$;return{c(){n=i("Toggleable, contextual overlays for displaying additional details or actions. Must be wrapped with a "),e=x("a"),s=x("code"),a=i("DropdownShell"),$=i(" for correct behavior."),this.h()},l(t){n=h(t,"Toggleable, contextual overlays for displaying additional details or actions. Must be wrapped with a "),e=w(t,"A",{href:!0});var o=k(e);s=w(o,"CODE",{});var r=k(s);a=h(r,"DropdownShell"),r.forEach(u),o.forEach(u),$=h(t," for correct behavior."),this.h()},h(){y(e,"href","./docs/components/dropdown-shell")},m(t,o){g(t,n,o),g(t,e,o),v(e,s),v(s,a),g(t,$,o)},d(t){t&&u(n),t&&u(e),t&&u($)}}}function Y(t){let n,e,s;return e=new A({props:{size:"24",class:"ml dropdown-chevron"}}),{c(){n=i("I toggle a dropdown\n        "),a(e.$$.fragment)},l(t){n=h(t,"I toggle a dropdown\n        "),$(e.$$.fragment,t)},m(t,a){g(t,n,a),o(e,t,a),s=!0},p:D,i(t){s||(p(e.$$.fragment,t),s=!0)},o(t){l(e.$$.fragment,t),s=!1},d(t){t&&u(n),f(e,t)}}}function q(t){let n,e;return{c(){n=x("div"),e=i("and I am the dropdown content"),this.h()},l(t){n=w(t,"DIV",{class:!0});var s=k(n);e=h(s,"and I am the dropdown content"),s.forEach(u),this.h()},h(){y(n,"class","padded svelte-fhk3a2")},m(t,s){g(t,n,s),v(n,e)},d(t){t&&u(n)}}}function U(t){let n,e,s,r;return n=new O({props:{$$slots:{default:[Y]},$$scope:{ctx:t}}}),n.$on("click",(function(){E(t[0])&&t[0].apply(this,arguments)})),s=new j({props:{$$slots:{default:[q]},$$scope:{ctx:t}}}),{c(){a(n.$$.fragment),e=m(),a(s.$$.fragment)},l(t){$(n.$$.fragment,t),e=d(t),$(s.$$.fragment,t)},m(t,a){o(n,t,a),g(t,e,a),o(s,t,a),r=!0},p(e,a){t=e;const $={};2&a&&($.$$scope={dirty:a,ctx:t}),n.$set($);const o={};2&a&&(o.$$scope={dirty:a,ctx:t}),s.$set(o)},i(t){r||(p(n.$$.fragment,t),p(s.$$.fragment,t),r=!0)},o(t){l(n.$$.fragment,t),l(s.$$.fragment,t),r=!1},d(t){f(n,t),t&&u(e),f(s,t)}}}function Z(t){let n;return{c(){n=i("look up there")},l(t){n=h(t,"look up there")},m(t,e){g(t,n,e)},d(t){t&&u(n)}}}function J(t){let n,e;return{c(){n=x("div"),e=i("right here"),this.h()},l(t){n=w(t,"DIV",{class:!0});var s=k(n);e=h(s,"right here"),s.forEach(u),this.h()},h(){y(n,"class","padded svelte-fhk3a2")},m(t,s){g(t,n,s),v(n,e)},d(t){t&&u(n)}}}function K(t){let n,e,s,r;return n=new O({props:{$$slots:{default:[Z]},$$scope:{ctx:t}}}),n.$on("click",(function(){E(t[0])&&t[0].apply(this,arguments)})),s=new j({props:{top:!0,$$slots:{default:[J]},$$scope:{ctx:t}}}),{c(){a(n.$$.fragment),e=m(),a(s.$$.fragment)},l(t){$(n.$$.fragment,t),e=d(t),$(s.$$.fragment,t)},m(t,a){o(n,t,a),g(t,e,a),o(s,t,a),r=!0},p(e,a){t=e;const $={};2&a&&($.$$scope={dirty:a,ctx:t}),n.$set($);const o={};2&a&&(o.$$scope={dirty:a,ctx:t}),s.$set(o)},i(t){r||(p(n.$$.fragment,t),p(s.$$.fragment,t),r=!0)},o(t){l(n.$$.fragment,t),l(s.$$.fragment,t),r=!1},d(t){f(n,t),t&&u(e),f(s,t)}}}function Q(t){let n,e,s,r,c;return e=new S({props:{$$slots:{default:[U,({toggle:t})=>({0:t}),({toggle:t})=>t?1:0]},$$scope:{ctx:t}}}),r=new S({props:{$$slots:{default:[K,({toggle:t})=>({0:t}),({toggle:t})=>t?1:0]},$$scope:{ctx:t}}}),{c(){n=x("div"),a(e.$$.fragment),s=m(),a(r.$$.fragment),this.h()},l(t){n=w(t,"DIV",{slot:!0,class:!0});var a=k(n);$(e.$$.fragment,a),s=d(a),$(r.$$.fragment,a),a.forEach(u),this.h()},h(){y(n,"slot","showcase"),y(n,"class","padded svelte-fhk3a2")},m(t,a){g(t,n,a),o(e,n,null),v(n,s),o(r,n,null),c=!0},p(t,n){const s={};3&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const a={};3&n&&(a.$$scope={dirty:n,ctx:t}),r.$set(a)},i(t){c||(p(e.$$.fragment,t),p(r.$$.fragment,t),c=!0)},o(t){l(e.$$.fragment,t),l(r.$$.fragment,t),c=!1},d(t){t&&u(n),f(e),f(r)}}}function W(t){let n,e;return{c(){n=x("div"),e=x("pre"),this.h()},l(t){n=w(t,"DIV",{slot:!0});var s=k(n);e=w(s,"PRE",{class:!0}),k(e).forEach(u),s.forEach(u),this.h()},h(){y(e,"class","language-svelte"),y(n,"slot","source")},m(t,s){g(t,n,s),v(n,e),e.innerHTML='<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DropdownShell</span> <span class="token attr-name"><span class="token namespace">let:</span>toggle</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name"><span class="token namespace">on:</span>click=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>toggle<span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span>\n    I toggle a dropdown\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ChevronDownIcon</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>24<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ml dropdown-chevron<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Dropdown</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>padded<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      and I am the dropdown content\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Dropdown</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>DropdownShell</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DropdownShell</span> <span class="token attr-name"><span class="token namespace">let:</span>toggle</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name"><span class="token namespace">on:</span>click=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>toggle<span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span>\n    look up there\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Dropdown</span> <span class="token attr-name">top</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>padded<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      right here\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Dropdown</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>DropdownShell</span><span class="token punctuation">></span></span></code>'},p:D,d(t){t&&u(n)}}}function X(t){let n;return{c(){n=m()},l(t){n=d(t)},m(t,e){g(t,n,e)},p:D,i:D,o:D,d(t){t&&u(n)}}}function _(t){let n;return{c(){n=i("Properties")},l(t){n=h(t,"Properties")},m(t,e){g(t,n,e)},d(t){t&&u(n)}}}function tt(t){let n;return{c(){n=i("Style Properties")},l(t){n=h(t,"Style Properties")},m(t,e){g(t,n,e)},d(t){t&&u(n)}}}function nt(t){let n;return{c(){n=i("Name")},l(t){n=h(t,"Name")},m(t,e){g(t,n,e)},d(t){t&&u(n)}}}function et(t){let n;return{c(){n=i("Default")},l(t){n=h(t,"Default")},m(t,e){g(t,n,e)},d(t){t&&u(n)}}}function st(t){let n;return{c(){n=i("Type")},l(t){n=h(t,"Type")},m(t,e){g(t,n,e)},d(t){t&&u(n)}}}function at(t){let n;return{c(){n=i("Description")},l(t){n=h(t,"Description")},m(t,e){g(t,n,e)},d(t){t&&u(n)}}}function $t(t){let n,e,s,r,c,i,h,x;return n=new V({props:{$$slots:{default:[nt]},$$scope:{ctx:t}}}),s=new V({props:{$$slots:{default:[et]},$$scope:{ctx:t}}}),c=new V({props:{$$slots:{default:[st]},$$scope:{ctx:t}}}),h=new V({props:{$$slots:{default:[at]},$$scope:{ctx:t}}}),{c(){a(n.$$.fragment),e=m(),a(s.$$.fragment),r=m(),a(c.$$.fragment),i=m(),a(h.$$.fragment)},l(t){$(n.$$.fragment,t),e=d(t),$(s.$$.fragment,t),r=d(t),$(c.$$.fragment,t),i=d(t),$(h.$$.fragment,t)},m(t,a){o(n,t,a),g(t,e,a),o(s,t,a),g(t,r,a),o(c,t,a),g(t,i,a),o(h,t,a),x=!0},p(t,e){const a={};2&e&&(a.$$scope={dirty:e,ctx:t}),n.$set(a);const $={};2&e&&($.$$scope={dirty:e,ctx:t}),s.$set($);const o={};2&e&&(o.$$scope={dirty:e,ctx:t}),c.$set(o);const r={};2&e&&(r.$$scope={dirty:e,ctx:t}),h.$set(r)},i(t){x||(p(n.$$.fragment,t),p(s.$$.fragment,t),p(c.$$.fragment,t),p(h.$$.fragment,t),x=!0)},o(t){l(n.$$.fragment,t),l(s.$$.fragment,t),l(c.$$.fragment,t),l(h.$$.fragment,t),x=!1},d(t){f(n,t),t&&u(e),f(s,t),t&&u(r),f(c,t),t&&u(i),f(h,t)}}}function ot(t){let n,e,s;return{c(){n=x("strong"),e=x("code"),s=i("right")},l(t){n=w(t,"STRONG",{});var a=k(n);e=w(a,"CODE",{});var $=k(e);s=h($,"right"),$.forEach(u),a.forEach(u)},m(t,a){g(t,n,a),v(n,e),v(e,s)},d(t){t&&u(n)}}}function rt(t){let n,e;return{c(){n=x("code"),e=i("false")},l(t){n=w(t,"CODE",{});var s=k(n);e=h(s,"false"),s.forEach(u)},m(t,s){g(t,n,s),v(n,e)},d(t){t&&u(n)}}}function ct(t){let n,e;return{c(){n=x("code"),e=i("boolean")},l(t){n=w(t,"CODE",{});var s=k(n);e=h(s,"boolean"),s.forEach(u)},m(t,s){g(t,n,s),v(n,e)},d(t){t&&u(n)}}}function pt(t){let n;return{c(){n=i("Aligns the dropdown content with the right edge of the shell.")},l(t){n=h(t,"Aligns the dropdown content with the right edge of the shell.")},m(t,e){g(t,n,e)},d(t){t&&u(n)}}}function lt(t){let n,e,s,r,c,i,h,x;return n=new z({props:{$$slots:{default:[ot]},$$scope:{ctx:t}}}),s=new z({props:{$$slots:{default:[rt]},$$scope:{ctx:t}}}),c=new z({props:{$$slots:{default:[ct]},$$scope:{ctx:t}}}),h=new z({props:{$$slots:{default:[pt]},$$scope:{ctx:t}}}),{c(){a(n.$$.fragment),e=m(),a(s.$$.fragment),r=m(),a(c.$$.fragment),i=m(),a(h.$$.fragment)},l(t){$(n.$$.fragment,t),e=d(t),$(s.$$.fragment,t),r=d(t),$(c.$$.fragment,t),i=d(t),$(h.$$.fragment,t)},m(t,a){o(n,t,a),g(t,e,a),o(s,t,a),g(t,r,a),o(c,t,a),g(t,i,a),o(h,t,a),x=!0},p(t,e){const a={};2&e&&(a.$$scope={dirty:e,ctx:t}),n.$set(a);const $={};2&e&&($.$$scope={dirty:e,ctx:t}),s.$set($);const o={};2&e&&(o.$$scope={dirty:e,ctx:t}),c.$set(o);const r={};2&e&&(r.$$scope={dirty:e,ctx:t}),h.$set(r)},i(t){x||(p(n.$$.fragment,t),p(s.$$.fragment,t),p(c.$$.fragment,t),p(h.$$.fragment,t),x=!0)},o(t){l(n.$$.fragment,t),l(s.$$.fragment,t),l(c.$$.fragment,t),l(h.$$.fragment,t),x=!1},d(t){f(n,t),t&&u(e),f(s,t),t&&u(r),f(c,t),t&&u(i),f(h,t)}}}function ft(t){let n,e,s;return{c(){n=x("strong"),e=x("code"),s=i("top")},l(t){n=w(t,"STRONG",{});var a=k(n);e=w(a,"CODE",{});var $=k(e);s=h($,"top"),$.forEach(u),a.forEach(u)},m(t,a){g(t,n,a),v(n,e),v(e,s)},d(t){t&&u(n)}}}function mt(t){let n,e;return{c(){n=x("code"),e=i("false")},l(t){n=w(t,"CODE",{});var s=k(n);e=h(s,"false"),s.forEach(u)},m(t,s){g(t,n,s),v(n,e)},d(t){t&&u(n)}}}function dt(t){let n,e;return{c(){n=x("code"),e=i("boolean")},l(t){n=w(t,"CODE",{});var s=k(n);e=h(s,"boolean"),s.forEach(u)},m(t,s){g(t,n,s),v(n,e)},d(t){t&&u(n)}}}function gt(t){let n;return{c(){n=i("Aligns the dropdown content such that it opens to the top of the shell, extending up.")},l(t){n=h(t,"Aligns the dropdown content such that it opens to the top of the shell, extending up.")},m(t,e){g(t,n,e)},d(t){t&&u(n)}}}function ut(t){let n,e,s,r,c,i,h,x;return n=new z({props:{$$slots:{default:[ft]},$$scope:{ctx:t}}}),s=new z({props:{$$slots:{default:[mt]},$$scope:{ctx:t}}}),c=new z({props:{$$slots:{default:[dt]},$$scope:{ctx:t}}}),h=new z({props:{$$slots:{default:[gt]},$$scope:{ctx:t}}}),{c(){a(n.$$.fragment),e=m(),a(s.$$.fragment),r=m(),a(c.$$.fragment),i=m(),a(h.$$.fragment)},l(t){$(n.$$.fragment,t),e=d(t),$(s.$$.fragment,t),r=d(t),$(c.$$.fragment,t),i=d(t),$(h.$$.fragment,t)},m(t,a){o(n,t,a),g(t,e,a),o(s,t,a),g(t,r,a),o(c,t,a),g(t,i,a),o(h,t,a),x=!0},p(t,e){const a={};2&e&&(a.$$scope={dirty:e,ctx:t}),n.$set(a);const $={};2&e&&($.$$scope={dirty:e,ctx:t}),s.$set($);const o={};2&e&&(o.$$scope={dirty:e,ctx:t}),c.$set(o);const r={};2&e&&(r.$$scope={dirty:e,ctx:t}),h.$set(r)},i(t){x||(p(n.$$.fragment,t),p(s.$$.fragment,t),p(c.$$.fragment,t),p(h.$$.fragment,t),x=!0)},o(t){l(n.$$.fragment,t),l(s.$$.fragment,t),l(c.$$.fragment,t),l(h.$$.fragment,t),x=!1},d(t){f(n,t),t&&u(e),f(s,t),t&&u(r),f(c,t),t&&u(i),f(h,t)}}}function it(t){let n,e,s,r,c,i,h,y;return e=new P({props:{$$slots:{default:[$t]},$$scope:{ctx:t}}}),c=new P({props:{$$slots:{default:[lt]},$$scope:{ctx:t}}}),h=new P({props:{$$slots:{default:[ut]},$$scope:{ctx:t}}}),{c(){n=x("thead"),a(e.$$.fragment),s=m(),r=x("tbody"),a(c.$$.fragment),i=m(),a(h.$$.fragment)},l(t){n=w(t,"THEAD",{});var a=k(n);$(e.$$.fragment,a),a.forEach(u),s=d(t),r=w(t,"TBODY",{});var o=k(r);$(c.$$.fragment,o),i=d(o),$(h.$$.fragment,o),o.forEach(u)},m(t,a){g(t,n,a),o(e,n,null),g(t,s,a),g(t,r,a),o(c,r,null),v(r,i),o(h,r,null),y=!0},p(t,n){const s={};2&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const a={};2&n&&(a.$$scope={dirty:n,ctx:t}),c.$set(a);const $={};2&n&&($.$$scope={dirty:n,ctx:t}),h.$set($)},i(t){y||(p(e.$$.fragment,t),p(c.$$.fragment,t),p(h.$$.fragment,t),y=!0)},o(t){l(e.$$.fragment,t),l(c.$$.fragment,t),l(h.$$.fragment,t),y=!1},d(t){t&&u(n),f(e),t&&u(s),t&&u(r),f(c),f(h)}}}function ht(t){let n;return{c(){n=i("Class Properties")},l(t){n=h(t,"Class Properties")},m(t,e){g(t,n,e)},d(t){t&&u(n)}}}function xt(t){let n,e,s,a,$,o,r;return{c(){n=i("All "),e=x("code"),s=i("<Dropdown>"),a=i(" components use the "),$=x("code"),o=i(".dropdown"),r=i(" class.")},l(t){n=h(t,"All "),e=w(t,"CODE",{});var c=k(e);s=h(c,"<Dropdown>"),c.forEach(u),a=h(t," components use the "),$=w(t,"CODE",{});var p=k($);o=h(p,".dropdown"),p.forEach(u),r=h(t," class.")},m(t,c){g(t,n,c),g(t,e,c),v(e,s),g(t,a,c),g(t,$,c),v($,o),g(t,r,c)},d(t){t&&u(n),t&&u(e),t&&u(a),t&&u($),t&&u(r)}}}function wt(t){let n;return{c(){n=i("Falsy values passed to classes will be disregarded.")},l(t){n=h(t,"Falsy values passed to classes will be disregarded.")},m(t,e){g(t,n,e)},d(t){t&&u(n)}}}function kt(t){let n;return{c(){n=i("Name")},l(t){n=h(t,"Name")},m(t,e){g(t,n,e)},d(t){t&&u(n)}}}function yt(t){let n;return{c(){n=i("Default")},l(t){n=h(t,"Default")},m(t,e){g(t,n,e)},d(t){t&&u(n)}}}function vt(t){let n;return{c(){n=i("Type")},l(t){n=h(t,"Type")},m(t,e){g(t,n,e)},d(t){t&&u(n)}}}function Dt(t){let n;return{c(){n=i("Description")},l(t){n=h(t,"Description")},m(t,e){g(t,n,e)},d(t){t&&u(n)}}}function Et(t){let n,e,s,r,c,i,h,x;return n=new V({props:{$$slots:{default:[kt]},$$scope:{ctx:t}}}),s=new V({props:{$$slots:{default:[yt]},$$scope:{ctx:t}}}),c=new V({props:{$$slots:{default:[vt]},$$scope:{ctx:t}}}),h=new V({props:{$$slots:{default:[Dt]},$$scope:{ctx:t}}}),{c(){a(n.$$.fragment),e=m(),a(s.$$.fragment),r=m(),a(c.$$.fragment),i=m(),a(h.$$.fragment)},l(t){$(n.$$.fragment,t),e=d(t),$(s.$$.fragment,t),r=d(t),$(c.$$.fragment,t),i=d(t),$(h.$$.fragment,t)},m(t,a){o(n,t,a),g(t,e,a),o(s,t,a),g(t,r,a),o(c,t,a),g(t,i,a),o(h,t,a),x=!0},p(t,e){const a={};2&e&&(a.$$scope={dirty:e,ctx:t}),n.$set(a);const $={};2&e&&($.$$scope={dirty:e,ctx:t}),s.$set($);const o={};2&e&&(o.$$scope={dirty:e,ctx:t}),c.$set(o);const r={};2&e&&(r.$$scope={dirty:e,ctx:t}),h.$set(r)},i(t){x||(p(n.$$.fragment,t),p(s.$$.fragment,t),p(c.$$.fragment,t),p(h.$$.fragment,t),x=!0)},o(t){l(n.$$.fragment,t),l(s.$$.fragment,t),l(c.$$.fragment,t),l(h.$$.fragment,t),x=!1},d(t){f(n,t),t&&u(e),f(s,t),t&&u(r),f(c,t),t&&u(i),f(h,t)}}}function bt(t){let n,e,s;return{c(){n=x("strong"),e=x("code"),s=i("class")},l(t){n=w(t,"STRONG",{});var a=k(n);e=w(a,"CODE",{});var $=k(e);s=h($,"class"),$.forEach(u),a.forEach(u)},m(t,a){g(t,n,a),v(n,e),v(e,s)},d(t){t&&u(n)}}}function Tt(t){let n,e;return{c(){n=x("code"),e=i("null")},l(t){n=w(t,"CODE",{});var s=k(n);e=h(s,"null"),s.forEach(u)},m(t,s){g(t,n,s),v(n,e)},d(t){t&&u(n)}}}function Ct(t){let n,e;return{c(){n=x("code"),e=i("string")},l(t){n=w(t,"CODE",{});var s=k(n);e=h(s,"string"),s.forEach(u)},m(t,s){g(t,n,s),v(n,e)},d(t){t&&u(n)}}}function Ot(t){let n,e,s,a;return{c(){n=i("A class string to add to the underlying "),e=x("code"),s=i("<div>"),a=i(" element.")},l(t){n=h(t,"A class string to add to the underlying "),e=w(t,"CODE",{});var $=k(e);s=h($,"<div>"),$.forEach(u),a=h(t," element.")},m(t,$){g(t,n,$),g(t,e,$),v(e,s),g(t,a,$)},d(t){t&&u(n),t&&u(e),t&&u(a)}}}function St(t){let n,e,s,r,c,i,h,x;return n=new z({props:{$$slots:{default:[bt]},$$scope:{ctx:t}}}),s=new z({props:{$$slots:{default:[Tt]},$$scope:{ctx:t}}}),c=new z({props:{$$slots:{default:[Ct]},$$scope:{ctx:t}}}),h=new z({props:{$$slots:{default:[Ot]},$$scope:{ctx:t}}}),{c(){a(n.$$.fragment),e=m(),a(s.$$.fragment),r=m(),a(c.$$.fragment),i=m(),a(h.$$.fragment)},l(t){$(n.$$.fragment,t),e=d(t),$(s.$$.fragment,t),r=d(t),$(c.$$.fragment,t),i=d(t),$(h.$$.fragment,t)},m(t,a){o(n,t,a),g(t,e,a),o(s,t,a),g(t,r,a),o(c,t,a),g(t,i,a),o(h,t,a),x=!0},p(t,e){const a={};2&e&&(a.$$scope={dirty:e,ctx:t}),n.$set(a);const $={};2&e&&($.$$scope={dirty:e,ctx:t}),s.$set($);const o={};2&e&&(o.$$scope={dirty:e,ctx:t}),c.$set(o);const r={};2&e&&(r.$$scope={dirty:e,ctx:t}),h.$set(r)},i(t){x||(p(n.$$.fragment,t),p(s.$$.fragment,t),p(c.$$.fragment,t),p(h.$$.fragment,t),x=!0)},o(t){l(n.$$.fragment,t),l(s.$$.fragment,t),l(c.$$.fragment,t),l(h.$$.fragment,t),x=!1},d(t){f(n,t),t&&u(e),f(s,t),t&&u(r),f(c,t),t&&u(i),f(h,t)}}}function jt(t){let n,e,s,r,c,i;return e=new P({props:{$$slots:{default:[Et]},$$scope:{ctx:t}}}),c=new P({props:{$$slots:{default:[St]},$$scope:{ctx:t}}}),{c(){n=x("thead"),a(e.$$.fragment),s=m(),r=x("tbody"),a(c.$$.fragment)},l(t){n=w(t,"THEAD",{});var a=k(n);$(e.$$.fragment,a),a.forEach(u),s=d(t),r=w(t,"TBODY",{});var o=k(r);$(c.$$.fragment,o),o.forEach(u)},m(t,a){g(t,n,a),o(e,n,null),g(t,s,a),g(t,r,a),o(c,r,null),i=!0},p(t,n){const s={};2&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const a={};2&n&&(a.$$scope={dirty:n,ctx:t}),c.$set(a)},i(t){i||(p(e.$$.fragment,t),p(c.$$.fragment,t),i=!0)},o(t){l(e.$$.fragment,t),l(c.$$.fragment,t),i=!1},d(t){t&&u(n),f(e),t&&u(s),t&&u(r),f(c)}}}function At(t){let n;return{c(){n=i("Slots")},l(t){n=h(t,"Slots")},m(t,e){g(t,n,e)},d(t){t&&u(n)}}}function It(t){let n;return{c(){n=i("Default slot")},l(t){n=h(t,"Default slot")},m(t,e){g(t,n,e)},d(t){t&&u(n)}}}function Nt(t){let n;return{c(){n=i("The content of the dropdown.")},l(t){n=h(t,"The content of the dropdown.")},m(t,e){g(t,n,e)},d(t){t&&u(n)}}}function Rt(t){let n;return{c(){n=i("SCSS Variables")},l(t){n=h(t,"SCSS Variables")},m(t,e){g(t,n,e)},d(t){t&&u(n)}}}function Bt(t){let n;return{c(){n=i("Name")},l(t){n=h(t,"Name")},m(t,e){g(t,n,e)},d(t){t&&u(n)}}}function Ft(t){let n;return{c(){n=i("Description")},l(t){n=h(t,"Description")},m(t,e){g(t,n,e)},d(t){t&&u(n)}}}function Gt(t){let n;return{c(){n=i("Default")},l(t){n=h(t,"Default")},m(t,e){g(t,n,e)},d(t){t&&u(n)}}}function Ht(t){let n,e,s,r,c,i;return n=new V({props:{$$slots:{default:[Bt]},$$scope:{ctx:t}}}),s=new V({props:{$$slots:{default:[Ft]},$$scope:{ctx:t}}}),c=new V({props:{$$slots:{default:[Gt]},$$scope:{ctx:t}}}),{c(){a(n.$$.fragment),e=m(),a(s.$$.fragment),r=m(),a(c.$$.fragment)},l(t){$(n.$$.fragment,t),e=d(t),$(s.$$.fragment,t),r=d(t),$(c.$$.fragment,t)},m(t,a){o(n,t,a),g(t,e,a),o(s,t,a),g(t,r,a),o(c,t,a),i=!0},p(t,e){const a={};2&e&&(a.$$scope={dirty:e,ctx:t}),n.$set(a);const $={};2&e&&($.$$scope={dirty:e,ctx:t}),s.$set($);const o={};2&e&&(o.$$scope={dirty:e,ctx:t}),c.$set(o)},i(t){i||(p(n.$$.fragment,t),p(s.$$.fragment,t),p(c.$$.fragment,t),i=!0)},o(t){l(n.$$.fragment,t),l(s.$$.fragment,t),l(c.$$.fragment,t),i=!1},d(t){f(n,t),t&&u(e),f(s,t),t&&u(r),f(c,t)}}}function Pt(t){let n,e,s;return{c(){n=x("strong"),e=x("code"),s=i("$background")},l(t){n=w(t,"STRONG",{});var a=k(n);e=w(a,"CODE",{});var $=k(e);s=h($,"$background"),$.forEach(u),a.forEach(u)},m(t,a){g(t,n,a),v(n,e),v(e,s)},d(t){t&&u(n)}}}function Vt(t){let n;return{c(){n=i("The background color of the dropdown content")},l(t){n=h(t,"The background color of the dropdown content")},m(t,e){g(t,n,e)},d(t){t&&u(n)}}}function zt(t){let n,e;return n=new N({props:{value:"#FFFFFF",bordered:!0}}),{c(){a(n.$$.fragment)},l(t){$(n.$$.fragment,t)},m(t,s){o(n,t,s),e=!0},p:D,i(t){e||(p(n.$$.fragment,t),e=!0)},o(t){l(n.$$.fragment,t),e=!1},d(t){f(n,t)}}}function Lt(t){let n,e,s,r,c,i;return n=new z({props:{$$slots:{default:[Pt]},$$scope:{ctx:t}}}),s=new z({props:{$$slots:{default:[Vt]},$$scope:{ctx:t}}}),c=new z({props:{$$slots:{default:[zt]},$$scope:{ctx:t}}}),{c(){a(n.$$.fragment),e=m(),a(s.$$.fragment),r=m(),a(c.$$.fragment)},l(t){$(n.$$.fragment,t),e=d(t),$(s.$$.fragment,t),r=d(t),$(c.$$.fragment,t)},m(t,a){o(n,t,a),g(t,e,a),o(s,t,a),g(t,r,a),o(c,t,a),i=!0},p(t,e){const a={};2&e&&(a.$$scope={dirty:e,ctx:t}),n.$set(a);const $={};2&e&&($.$$scope={dirty:e,ctx:t}),s.$set($);const o={};2&e&&(o.$$scope={dirty:e,ctx:t}),c.$set(o)},i(t){i||(p(n.$$.fragment,t),p(s.$$.fragment,t),p(c.$$.fragment,t),i=!0)},o(t){l(n.$$.fragment,t),l(s.$$.fragment,t),l(c.$$.fragment,t),i=!1},d(t){f(n,t),t&&u(e),f(s,t),t&&u(r),f(c,t)}}}function Mt(t){let n,e,s;return{c(){n=x("strong"),e=x("code"),s=i("$shadow-raised")},l(t){n=w(t,"STRONG",{});var a=k(n);e=w(a,"CODE",{});var $=k(e);s=h($,"$shadow-raised"),$.forEach(u),a.forEach(u)},m(t,a){g(t,n,a),v(n,e),v(e,s)},d(t){t&&u(n)}}}function Yt(t){let n;return{c(){n=i("The shadow of the dropdown.")},l(t){n=h(t,"The shadow of the dropdown.")},m(t,e){g(t,n,e)},d(t){t&&u(n)}}}function qt(t){let n,e;return n=new R({props:{value:sn}}),{c(){a(n.$$.fragment)},l(t){$(n.$$.fragment,t)},m(t,s){o(n,t,s),e=!0},p:D,i(t){e||(p(n.$$.fragment,t),e=!0)},o(t){l(n.$$.fragment,t),e=!1},d(t){f(n,t)}}}function Ut(t){let n,e,s,r,c,i;return n=new z({props:{$$slots:{default:[Mt]},$$scope:{ctx:t}}}),s=new z({props:{$$slots:{default:[Yt]},$$scope:{ctx:t}}}),c=new z({props:{$$slots:{default:[qt]},$$scope:{ctx:t}}}),{c(){a(n.$$.fragment),e=m(),a(s.$$.fragment),r=m(),a(c.$$.fragment)},l(t){$(n.$$.fragment,t),e=d(t),$(s.$$.fragment,t),r=d(t),$(c.$$.fragment,t)},m(t,a){o(n,t,a),g(t,e,a),o(s,t,a),g(t,r,a),o(c,t,a),i=!0},p(t,e){const a={};2&e&&(a.$$scope={dirty:e,ctx:t}),n.$set(a);const $={};2&e&&($.$$scope={dirty:e,ctx:t}),s.$set($);const o={};2&e&&(o.$$scope={dirty:e,ctx:t}),c.$set(o)},i(t){i||(p(n.$$.fragment,t),p(s.$$.fragment,t),p(c.$$.fragment,t),i=!0)},o(t){l(n.$$.fragment,t),l(s.$$.fragment,t),l(c.$$.fragment,t),i=!1},d(t){f(n,t),t&&u(e),f(s,t),t&&u(r),f(c,t)}}}function Zt(t){let n,e,s;return{c(){n=x("strong"),e=x("code"),s=i("$card-radius")},l(t){n=w(t,"STRONG",{});var a=k(n);e=w(a,"CODE",{});var $=k(e);s=h($,"$card-radius"),$.forEach(u),a.forEach(u)},m(t,a){g(t,n,a),v(n,e),v(e,s)},d(t){t&&u(n)}}}function Jt(t){let n;return{c(){n=i("The curvature radius of the dropdown.")},l(t){n=h(t,"The curvature radius of the dropdown.")},m(t,e){g(t,n,e)},d(t){t&&u(n)}}}function Kt(t){let n,e;return{c(){n=x("code"),e=i("1.25em")},l(t){n=w(t,"CODE",{});var s=k(n);e=h(s,"1.25em"),s.forEach(u)},m(t,s){g(t,n,s),v(n,e)},d(t){t&&u(n)}}}function Qt(t){let n,e,s,r,c,i;return n=new z({props:{$$slots:{default:[Zt]},$$scope:{ctx:t}}}),s=new z({props:{$$slots:{default:[Jt]},$$scope:{ctx:t}}}),c=new z({props:{$$slots:{default:[Kt]},$$scope:{ctx:t}}}),{c(){a(n.$$.fragment),e=m(),a(s.$$.fragment),r=m(),a(c.$$.fragment)},l(t){$(n.$$.fragment,t),e=d(t),$(s.$$.fragment,t),r=d(t),$(c.$$.fragment,t)},m(t,a){o(n,t,a),g(t,e,a),o(s,t,a),g(t,r,a),o(c,t,a),i=!0},p(t,e){const a={};2&e&&(a.$$scope={dirty:e,ctx:t}),n.$set(a);const $={};2&e&&($.$$scope={dirty:e,ctx:t}),s.$set($);const o={};2&e&&(o.$$scope={dirty:e,ctx:t}),c.$set(o)},i(t){i||(p(n.$$.fragment,t),p(s.$$.fragment,t),p(c.$$.fragment,t),i=!0)},o(t){l(n.$$.fragment,t),l(s.$$.fragment,t),l(c.$$.fragment,t),i=!1},d(t){f(n,t),t&&u(e),f(s,t),t&&u(r),f(c,t)}}}function Wt(t){let n,e,s,r,c,i,h,y,D,E;return e=new P({props:{$$slots:{default:[Ht]},$$scope:{ctx:t}}}),c=new P({props:{$$slots:{default:[Lt]},$$scope:{ctx:t}}}),h=new P({props:{$$slots:{default:[Ut]},$$scope:{ctx:t}}}),D=new P({props:{$$slots:{default:[Qt]},$$scope:{ctx:t}}}),{c(){n=x("thead"),a(e.$$.fragment),s=m(),r=x("tbody"),a(c.$$.fragment),i=m(),a(h.$$.fragment),y=m(),a(D.$$.fragment)},l(t){n=w(t,"THEAD",{});var a=k(n);$(e.$$.fragment,a),a.forEach(u),s=d(t),r=w(t,"TBODY",{});var o=k(r);$(c.$$.fragment,o),i=d(o),$(h.$$.fragment,o),y=d(o),$(D.$$.fragment,o),o.forEach(u)},m(t,a){g(t,n,a),o(e,n,null),g(t,s,a),g(t,r,a),o(c,r,null),v(r,i),o(h,r,null),v(r,y),o(D,r,null),E=!0},p(t,n){const s={};2&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const a={};2&n&&(a.$$scope={dirty:n,ctx:t}),c.$set(a);const $={};2&n&&($.$$scope={dirty:n,ctx:t}),h.$set($);const o={};2&n&&(o.$$scope={dirty:n,ctx:t}),D.$set(o)},i(t){E||(p(e.$$.fragment,t),p(c.$$.fragment,t),p(h.$$.fragment,t),p(D.$$.fragment,t),E=!0)},o(t){l(e.$$.fragment,t),l(c.$$.fragment,t),l(h.$$.fragment,t),l(D.$$.fragment,t),E=!1},d(t){t&&u(n),f(e),t&&u(s),t&&u(r),f(c),f(h),f(D)}}}function Xt(t){let n,e,s,r,c,i,h,x,w,k,y,v,D,E,b,O,S,j,A,N,R,P,V,z,Y,q,U,Z,J,K,nt,et;return n=new T({props:{$$slots:{default:[L]},$$scope:{ctx:t}}}),s=new C({props:{$$slots:{default:[M]},$$scope:{ctx:t}}}),c=new B({props:{components:en}}),h=new I({props:{$$slots:{default:[X],source:[W],showcase:[Q]},$$scope:{ctx:t}}}),w=new F({props:{id:"properties",$$slots:{default:[_]},$$scope:{ctx:t}}}),y=new G({props:{$$slots:{default:[tt]},$$scope:{ctx:t}}}),D=new H({props:{$$slots:{default:[it]},$$scope:{ctx:t}}}),b=new G({props:{$$slots:{default:[ht]},$$scope:{ctx:t}}}),S=new C({props:{$$slots:{default:[xt]},$$scope:{ctx:t}}}),A=new C({props:{$$slots:{default:[wt]},$$scope:{ctx:t}}}),R=new H({props:{$$slots:{default:[jt]},$$scope:{ctx:t}}}),V=new F({props:{id:"slots",$$slots:{default:[At]},$$scope:{ctx:t}}}),Y=new G({props:{$$slots:{default:[It]},$$scope:{ctx:t}}}),U=new C({props:{$$slots:{default:[Nt]},$$scope:{ctx:t}}}),J=new F({props:{id:"scss-variables",$$slots:{default:[Rt]},$$scope:{ctx:t}}}),nt=new H({props:{$$slots:{default:[Wt]},$$scope:{ctx:t}}}),{c(){a(n.$$.fragment),e=m(),a(s.$$.fragment),r=m(),a(c.$$.fragment),i=m(),a(h.$$.fragment),x=m(),a(w.$$.fragment),k=m(),a(y.$$.fragment),v=m(),a(D.$$.fragment),E=m(),a(b.$$.fragment),O=m(),a(S.$$.fragment),j=m(),a(A.$$.fragment),N=m(),a(R.$$.fragment),P=m(),a(V.$$.fragment),z=m(),a(Y.$$.fragment),q=m(),a(U.$$.fragment),Z=m(),a(J.$$.fragment),K=m(),a(nt.$$.fragment)},l(t){$(n.$$.fragment,t),e=d(t),$(s.$$.fragment,t),r=d(t),$(c.$$.fragment,t),i=d(t),$(h.$$.fragment,t),x=d(t),$(w.$$.fragment,t),k=d(t),$(y.$$.fragment,t),v=d(t),$(D.$$.fragment,t),E=d(t),$(b.$$.fragment,t),O=d(t),$(S.$$.fragment,t),j=d(t),$(A.$$.fragment,t),N=d(t),$(R.$$.fragment,t),P=d(t),$(V.$$.fragment,t),z=d(t),$(Y.$$.fragment,t),q=d(t),$(U.$$.fragment,t),Z=d(t),$(J.$$.fragment,t),K=d(t),$(nt.$$.fragment,t)},m(t,a){o(n,t,a),g(t,e,a),o(s,t,a),g(t,r,a),o(c,t,a),g(t,i,a),o(h,t,a),g(t,x,a),o(w,t,a),g(t,k,a),o(y,t,a),g(t,v,a),o(D,t,a),g(t,E,a),o(b,t,a),g(t,O,a),o(S,t,a),g(t,j,a),o(A,t,a),g(t,N,a),o(R,t,a),g(t,P,a),o(V,t,a),g(t,z,a),o(Y,t,a),g(t,q,a),o(U,t,a),g(t,Z,a),o(J,t,a),g(t,K,a),o(nt,t,a),et=!0},p(t,e){const a={};2&e&&(a.$$scope={dirty:e,ctx:t}),n.$set(a);const $={};2&e&&($.$$scope={dirty:e,ctx:t}),s.$set($);const o={};2&e&&(o.$$scope={dirty:e,ctx:t}),h.$set(o);const r={};2&e&&(r.$$scope={dirty:e,ctx:t}),w.$set(r);const c={};2&e&&(c.$$scope={dirty:e,ctx:t}),y.$set(c);const p={};2&e&&(p.$$scope={dirty:e,ctx:t}),D.$set(p);const l={};2&e&&(l.$$scope={dirty:e,ctx:t}),b.$set(l);const f={};2&e&&(f.$$scope={dirty:e,ctx:t}),S.$set(f);const m={};2&e&&(m.$$scope={dirty:e,ctx:t}),A.$set(m);const d={};2&e&&(d.$$scope={dirty:e,ctx:t}),R.$set(d);const g={};2&e&&(g.$$scope={dirty:e,ctx:t}),V.$set(g);const u={};2&e&&(u.$$scope={dirty:e,ctx:t}),Y.$set(u);const i={};2&e&&(i.$$scope={dirty:e,ctx:t}),U.$set(i);const x={};2&e&&(x.$$scope={dirty:e,ctx:t}),J.$set(x);const k={};2&e&&(k.$$scope={dirty:e,ctx:t}),nt.$set(k)},i(t){et||(p(n.$$.fragment,t),p(s.$$.fragment,t),p(c.$$.fragment,t),p(h.$$.fragment,t),p(w.$$.fragment,t),p(y.$$.fragment,t),p(D.$$.fragment,t),p(b.$$.fragment,t),p(S.$$.fragment,t),p(A.$$.fragment,t),p(R.$$.fragment,t),p(V.$$.fragment,t),p(Y.$$.fragment,t),p(U.$$.fragment,t),p(J.$$.fragment,t),p(nt.$$.fragment,t),et=!0)},o(t){l(n.$$.fragment,t),l(s.$$.fragment,t),l(c.$$.fragment,t),l(h.$$.fragment,t),l(w.$$.fragment,t),l(y.$$.fragment,t),l(D.$$.fragment,t),l(b.$$.fragment,t),l(S.$$.fragment,t),l(A.$$.fragment,t),l(R.$$.fragment,t),l(V.$$.fragment,t),l(Y.$$.fragment,t),l(U.$$.fragment,t),l(J.$$.fragment,t),l(nt.$$.fragment,t),et=!1},d(t){f(n,t),t&&u(e),f(s,t),t&&u(r),f(c,t),t&&u(i),f(h,t),t&&u(x),f(w,t),t&&u(k),f(y,t),t&&u(v),f(D,t),t&&u(E),f(b,t),t&&u(O),f(S,t),t&&u(j),f(A,t),t&&u(N),f(R,t),t&&u(P),f(V,t),t&&u(z),f(Y,t),t&&u(q),f(U,t),t&&u(Z),f(J,t),t&&u(K),f(nt,t)}}}function _t(t){let n,e;const m=[tn];let d={$$slots:{default:[Xt]},$$scope:{ctx:t}};for(let t=0;t<m.length;t+=1)d=s(d,m[t]);return n=new b({props:d}),{c(){a(n.$$.fragment)},l(t){$(n.$$.fragment,t)},m(t,s){o(n,t,s),e=!0},p(t,[e]){const s=0&e?r(m,[c(tn)]):{};2&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s)},i(t){e||(p(n.$$.fragment,t),e=!0)},o(t){l(n.$$.fragment,t),e=!1},d(t){f(n,t)}}}const tn={name:"Dropdown",relatedComponents:[{name:"DropdownShell",link:"./docs/components/dropdown-shell"}],shadowRaised:"0 2px 4px -1px rgba(0, 0, 0, .2), 0 3px 5px 0 rgba(0, 0, 0, .14), 0 1px 10px 0 rgba(0, 0, 0, .12);"},{name:nn,relatedComponents:en,shadowRaised:sn}=tn;export default class extends t{constructor(t){super(),n(this,t,null,_t,e,{})}}export{tn as metadata};
