import{S as t,i as n,s as e,G as s,j as a,k as o,m as $,N as c,t as r,o as p,p as l,U as f,q as m,u as i,f as u,d as g,r as d,v as x,h,c as k,b as y,e as w,g as v,n as E,D,w as b,x as O,a1 as A,O as C}from"./client.4e16fa4b.js";import{L as j,H as T,P}from"./layout.916eb556.js";import{B as S}from"./button.6c1c96ef.js";import{A as N,a as B}from"./accordion-section.38cc8fa9.js";import{C as H}from"./ChevronDownIcon.f3e5bd56.js";import{S as R}from"./showcase.47d237a7.js";import{R as F}from"./related-components.043857cb.js";import{H as G}from"./h2.445d86ed.js";import{H as I}from"./h3.51610560.js";import{T as V,a as Y,b as z,c as L}from"./table.1da42adc.js";import"./classes.2453fa25.js";import"./label.1b7af2df.js";import"./copyable-code.a365102d.js";import"./card.085b8336.js";function M(t,n,e){const s=t.slice();return s[1]=n[e],s}function q(t){let n;return{c(){n=d("Accordion")},l(t){n=x(t,"Accordion")},m(t,e){u(t,n,e)},d(t){t&&g(n)}}}function K(t){let n;return{c(){n=d("A controller for multiple collapsible elements, allowing either one open panel at a time or infinite.")},l(t){n=x(t,"A controller for multiple collapsible elements, allowing either one open panel at a time or infinite.")},m(t,e){u(t,n,e)},d(t){t&&g(n)}}}function U(t){let n,e,s,c,f;return c=new H({props:{size:"20",class:"ml accordion-chevron"}}),{c(){n=d("open panel "),e=d(t[1]),s=m(),a(c.$$.fragment)},l(a){n=x(a,"open panel "),e=x(a,t[1]),s=i(a),o(c.$$.fragment,a)},m(t,a){u(t,n,a),u(t,e,a),u(t,s,a),$(c,t,a),f=!0},p:E,i(t){f||(r(c.$$.fragment,t),f=!0)},o(t){p(c.$$.fragment,t),f=!1},d(t){t&&g(n),t&&g(e),t&&g(s),l(c,t)}}}function J(t){let n,e,s;return e=new S({props:{$$slots:{default:[U]},$$scope:{ctx:t}}}),e.$on("click",(function(){C(t[4])&&t[4].apply(this,arguments)})),{c(){n=h("div"),a(e.$$.fragment),this.h()},l(t){n=k(t,"DIV",{slot:!0});var s=y(n);o(e.$$.fragment,s),s.forEach(g),this.h()},h(){w(n,"slot","handle")},m(t,a){u(t,n,a),$(e,n,null),s=!0},p(n,s){t=n;const a={};32&s&&(a.$$scope={dirty:s,ctx:t}),e.$set(a)},i(t){s||(r(e.$$.fragment,t),s=!0)},o(t){p(e.$$.fragment,t),s=!1},d(t){t&&g(n),l(e)}}}function Q(t){let n,e,s;return{c(){n=d("\n          Content of panel "),e=d(t[1]),s=m()},l(a){n=x(a,"\n          Content of panel "),e=x(a,t[1]),s=i(a)},m(t,a){u(t,n,a),u(t,e,a),u(t,s,a)},p:E,i:E,o:E,d(t){t&&g(n),t&&g(e),t&&g(s)}}}function W(t){let n,e;return n=new B({props:{$$slots:{default:[Q,({toggle:t})=>({4:t}),({toggle:t})=>t?16:0],handle:[J,({toggle:t})=>({4:t}),({toggle:t})=>t?16:0]},$$scope:{ctx:t}}}),n.$on("panel-open",(function(){C(t[0])&&t[0].apply(this,arguments)})),{c(){a(n.$$.fragment)},l(t){o(n.$$.fragment,t)},m(t,s){$(n,t,s),e=!0},p(e,s){t=e;const a={};48&s&&(a.$$scope={dirty:s,ctx:t}),n.$set(a)},i(t){e||(r(n.$$.fragment,t),e=!0)},o(t){p(n.$$.fragment,t),e=!1},d(t){l(n,t)}}}function X(t){let n,e,s=[0,1,2,3,4],a=[];for(let n=0;n<5;n+=1)a[n]=W(M(t,s,n));const o=t=>p(a[t],1,1,(()=>{a[t]=null}));return{c(){for(let t=0;t<5;t+=1)a[t].c();n=D()},l(t){for(let n=0;n<5;n+=1)a[n].l(t);n=D()},m(t,s){for(let n=0;n<5;n+=1)a[n].m(t,s);u(t,n,s),e=!0},p(t,e){if(17&e){let $;for(s=[0,1,2,3,4],$=0;$<5;$+=1){const o=M(t,s,$);a[$]?(a[$].p(o,e),r(a[$],1)):(a[$]=W(o),a[$].c(),r(a[$],1),a[$].m(n.parentNode,n))}for(b(),$=5;$<5;$+=1)o($);O()}},i(t){if(!e){for(let t=0;t<5;t+=1)r(a[t]);e=!0}},o(t){a=a.filter(Boolean);for(let t=0;t<5;t+=1)p(a[t]);e=!1},d(t){A(a,t),t&&g(n)}}}function Z(t){let n,e,s;return e=new N({props:{$$slots:{default:[X,({closeOtherPanels:t})=>({0:t}),({closeOtherPanels:t})=>t?1:0]},$$scope:{ctx:t}}}),{c(){n=h("div"),a(e.$$.fragment),this.h()},l(t){n=k(t,"DIV",{slot:!0,class:!0});var s=y(n);o(e.$$.fragment,s),s.forEach(g),this.h()},h(){w(n,"slot","showcase"),w(n,"class","svelte-elo7ub")},m(t,a){u(t,n,a),$(e,n,null),s=!0},p(t,n){const s={};33&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){s||(r(e.$$.fragment,t),s=!0)},o(t){p(e.$$.fragment,t),s=!1},d(t){t&&g(n),l(e)}}}function _(t){let n,e;return{c(){n=h("div"),e=h("pre"),this.h()},l(t){n=k(t,"DIV",{slot:!0});var s=y(n);e=k(s,"PRE",{class:!0}),y(e).forEach(g),s.forEach(g),this.h()},h(){w(e,"class","language-svelte"),w(n,"slot","source")},m(t,s){u(t,n,s),v(n,e),e.innerHTML='<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Accordion</span> <span class="token attr-name"><span class="token namespace">let:</span>closeOtherPanels</span><span class="token punctuation">></span></span>\n  <span class="token each"><span class="token punctuation">&#123;</span><span class="token keyword">#each</span> <span class="token language-javascript"><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span> </span><span class="token keyword">as</span> <span class="token language-javascript">idx<span class="token punctuation">&#125;</span></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AccordionSection</span> <span class="token attr-name"><span class="token namespace">on:</span>panel-open=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>closeOtherPanels<span class="token punctuation">&#125;</span></span> <span class="token attr-name"><span class="token namespace">let:</span>toggle</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>handle<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name"><span class="token namespace">on:</span>click=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>toggle<span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span>\n          open panel <span class="token language-javascript"><span class="token punctuation">&#123;</span>idx<span class="token punctuation">&#125;</span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ChevronDownIcon</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>20<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ml accordion-chevron<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n      Content of panel <span class="token language-javascript"><span class="token punctuation">&#123;</span>idx<span class="token punctuation">&#125;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>AccordionSection</span><span class="token punctuation">></span></span>\n  <span class="token each"><span class="token punctuation">&#123;</span><span class="token keyword">/each</span><span class="token punctuation">&#125;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Accordion</span><span class="token punctuation">></span></span></code>'},p:E,d(t){t&&g(n)}}}function tt(t){let n;return{c(){n=m()},l(t){n=i(t)},m(t,e){u(t,n,e)},p:E,i:E,o:E,d(t){t&&g(n)}}}function nt(t){let n;return{c(){n=d("Properties")},l(t){n=x(t,"Properties")},m(t,e){u(t,n,e)},d(t){t&&g(n)}}}function et(t){let n;return{c(){n=d("Functional Properties")},l(t){n=x(t,"Functional Properties")},m(t,e){u(t,n,e)},d(t){t&&g(n)}}}function st(t){let n;return{c(){n=d("Name")},l(t){n=x(t,"Name")},m(t,e){u(t,n,e)},d(t){t&&g(n)}}}function at(t){let n;return{c(){n=d("Default")},l(t){n=x(t,"Default")},m(t,e){u(t,n,e)},d(t){t&&g(n)}}}function ot(t){let n;return{c(){n=d("Type")},l(t){n=x(t,"Type")},m(t,e){u(t,n,e)},d(t){t&&g(n)}}}function $t(t){let n;return{c(){n=d("Description")},l(t){n=x(t,"Description")},m(t,e){u(t,n,e)},d(t){t&&g(n)}}}function ct(t){let n,e,s,c,f,d,x,h;return n=new z({props:{$$slots:{default:[st]},$$scope:{ctx:t}}}),s=new z({props:{$$slots:{default:[at]},$$scope:{ctx:t}}}),f=new z({props:{$$slots:{default:[ot]},$$scope:{ctx:t}}}),x=new z({props:{$$slots:{default:[$t]},$$scope:{ctx:t}}}),{c(){a(n.$$.fragment),e=m(),a(s.$$.fragment),c=m(),a(f.$$.fragment),d=m(),a(x.$$.fragment)},l(t){o(n.$$.fragment,t),e=i(t),o(s.$$.fragment,t),c=i(t),o(f.$$.fragment,t),d=i(t),o(x.$$.fragment,t)},m(t,a){$(n,t,a),u(t,e,a),$(s,t,a),u(t,c,a),$(f,t,a),u(t,d,a),$(x,t,a),h=!0},p(t,e){const a={};32&e&&(a.$$scope={dirty:e,ctx:t}),n.$set(a);const o={};32&e&&(o.$$scope={dirty:e,ctx:t}),s.$set(o);const $={};32&e&&($.$$scope={dirty:e,ctx:t}),f.$set($);const c={};32&e&&(c.$$scope={dirty:e,ctx:t}),x.$set(c)},i(t){h||(r(n.$$.fragment,t),r(s.$$.fragment,t),r(f.$$.fragment,t),r(x.$$.fragment,t),h=!0)},o(t){p(n.$$.fragment,t),p(s.$$.fragment,t),p(f.$$.fragment,t),p(x.$$.fragment,t),h=!1},d(t){l(n,t),t&&g(e),l(s,t),t&&g(c),l(f,t),t&&g(d),l(x,t)}}}function rt(t){let n,e,s;return{c(){n=h("strong"),e=h("code"),s=d("multiple")},l(t){n=k(t,"STRONG",{});var a=y(n);e=k(a,"CODE",{});var o=y(e);s=x(o,"multiple"),o.forEach(g),a.forEach(g)},m(t,a){u(t,n,a),v(n,e),v(e,s)},d(t){t&&g(n)}}}function pt(t){let n,e;return{c(){n=h("code"),e=d("false")},l(t){n=k(t,"CODE",{});var s=y(n);e=x(s,"false"),s.forEach(g)},m(t,s){u(t,n,s),v(n,e)},d(t){t&&g(n)}}}function lt(t){let n,e;return{c(){n=h("code"),e=d("boolean")},l(t){n=k(t,"CODE",{});var s=y(n);e=x(s,"boolean"),s.forEach(g)},m(t,s){u(t,n,s),v(n,e)},d(t){t&&g(n)}}}function ft(t){let n,e,s,a;return{c(){n=d("Setting this to "),e=h("code"),s=d("true"),a=d(" allows multiple panels to be open at the same time.")},l(t){n=x(t,"Setting this to "),e=k(t,"CODE",{});var o=y(e);s=x(o,"true"),o.forEach(g),a=x(t," allows multiple panels to be open at the same time.")},m(t,o){u(t,n,o),u(t,e,o),v(e,s),u(t,a,o)},d(t){t&&g(n),t&&g(e),t&&g(a)}}}function mt(t){let n,e,s,c,f,d,x,h;return n=new L({props:{$$slots:{default:[rt]},$$scope:{ctx:t}}}),s=new L({props:{$$slots:{default:[pt]},$$scope:{ctx:t}}}),f=new L({props:{$$slots:{default:[lt]},$$scope:{ctx:t}}}),x=new L({props:{$$slots:{default:[ft]},$$scope:{ctx:t}}}),{c(){a(n.$$.fragment),e=m(),a(s.$$.fragment),c=m(),a(f.$$.fragment),d=m(),a(x.$$.fragment)},l(t){o(n.$$.fragment,t),e=i(t),o(s.$$.fragment,t),c=i(t),o(f.$$.fragment,t),d=i(t),o(x.$$.fragment,t)},m(t,a){$(n,t,a),u(t,e,a),$(s,t,a),u(t,c,a),$(f,t,a),u(t,d,a),$(x,t,a),h=!0},p(t,e){const a={};32&e&&(a.$$scope={dirty:e,ctx:t}),n.$set(a);const o={};32&e&&(o.$$scope={dirty:e,ctx:t}),s.$set(o);const $={};32&e&&($.$$scope={dirty:e,ctx:t}),f.$set($);const c={};32&e&&(c.$$scope={dirty:e,ctx:t}),x.$set(c)},i(t){h||(r(n.$$.fragment,t),r(s.$$.fragment,t),r(f.$$.fragment,t),r(x.$$.fragment,t),h=!0)},o(t){p(n.$$.fragment,t),p(s.$$.fragment,t),p(f.$$.fragment,t),p(x.$$.fragment,t),h=!1},d(t){l(n,t),t&&g(e),l(s,t),t&&g(c),l(f,t),t&&g(d),l(x,t)}}}function it(t){let n,e,s;return{c(){n=h("strong"),e=h("code"),s=d("...")},l(t){n=k(t,"STRONG",{});var a=y(n);e=k(a,"CODE",{});var o=y(e);s=x(o,"..."),o.forEach(g),a.forEach(g)},m(t,a){u(t,n,a),v(n,e),v(e,s)},d(t){t&&g(n)}}}function ut(t){let n,e;return{c(){n=h("code"),e=d("any")},l(t){n=k(t,"CODE",{});var s=y(n);e=x(s,"any"),s.forEach(g)},m(t,s){u(t,n,s),v(n,e)},d(t){t&&g(n)}}}function gt(t){let n,e,s,a;return{c(){n=d("Everything else will be passed to the underlying "),e=h("code"),s=d("<ul>"),a=d(" element.")},l(t){n=x(t,"Everything else will be passed to the underlying "),e=k(t,"CODE",{});var o=y(e);s=x(o,"<ul>"),o.forEach(g),a=x(t," element.")},m(t,o){u(t,n,o),u(t,e,o),v(e,s),u(t,a,o)},d(t){t&&g(n),t&&g(e),t&&g(a)}}}function dt(t){let n,e,s,c,f,d,x,h;return n=new L({props:{$$slots:{default:[it]},$$scope:{ctx:t}}}),s=new L({}),f=new L({props:{$$slots:{default:[ut]},$$scope:{ctx:t}}}),x=new L({props:{$$slots:{default:[gt]},$$scope:{ctx:t}}}),{c(){a(n.$$.fragment),e=m(),a(s.$$.fragment),c=m(),a(f.$$.fragment),d=m(),a(x.$$.fragment)},l(t){o(n.$$.fragment,t),e=i(t),o(s.$$.fragment,t),c=i(t),o(f.$$.fragment,t),d=i(t),o(x.$$.fragment,t)},m(t,a){$(n,t,a),u(t,e,a),$(s,t,a),u(t,c,a),$(f,t,a),u(t,d,a),$(x,t,a),h=!0},p(t,e){const s={};32&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s);const a={};32&e&&(a.$$scope={dirty:e,ctx:t}),f.$set(a);const o={};32&e&&(o.$$scope={dirty:e,ctx:t}),x.$set(o)},i(t){h||(r(n.$$.fragment,t),r(s.$$.fragment,t),r(f.$$.fragment,t),r(x.$$.fragment,t),h=!0)},o(t){p(n.$$.fragment,t),p(s.$$.fragment,t),p(f.$$.fragment,t),p(x.$$.fragment,t),h=!1},d(t){l(n,t),t&&g(e),l(s,t),t&&g(c),l(f,t),t&&g(d),l(x,t)}}}function xt(t){let n,e,s,c,f,d,x,w;return e=new Y({props:{$$slots:{default:[ct]},$$scope:{ctx:t}}}),f=new Y({props:{$$slots:{default:[mt]},$$scope:{ctx:t}}}),x=new Y({props:{$$slots:{default:[dt]},$$scope:{ctx:t}}}),{c(){n=h("thead"),a(e.$$.fragment),s=m(),c=h("tbody"),a(f.$$.fragment),d=m(),a(x.$$.fragment)},l(t){n=k(t,"THEAD",{});var a=y(n);o(e.$$.fragment,a),a.forEach(g),s=i(t),c=k(t,"TBODY",{});var $=y(c);o(f.$$.fragment,$),d=i($),o(x.$$.fragment,$),$.forEach(g)},m(t,a){u(t,n,a),$(e,n,null),u(t,s,a),u(t,c,a),$(f,c,null),v(c,d),$(x,c,null),w=!0},p(t,n){const s={};32&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const a={};32&n&&(a.$$scope={dirty:n,ctx:t}),f.$set(a);const o={};32&n&&(o.$$scope={dirty:n,ctx:t}),x.$set(o)},i(t){w||(r(e.$$.fragment,t),r(f.$$.fragment,t),r(x.$$.fragment,t),w=!0)},o(t){p(e.$$.fragment,t),p(f.$$.fragment,t),p(x.$$.fragment,t),w=!1},d(t){t&&g(n),l(e),t&&g(s),t&&g(c),l(f),l(x)}}}function ht(t){let n;return{c(){n=d("Class Properties")},l(t){n=x(t,"Class Properties")},m(t,e){u(t,n,e)},d(t){t&&g(n)}}}function kt(t){let n,e,s,a,o,$,c;return{c(){n=d("All "),e=h("code"),s=d("<Accordion>"),a=d(" components use the "),o=h("code"),$=d(".accordion"),c=d(" class.")},l(t){n=x(t,"All "),e=k(t,"CODE",{});var r=y(e);s=x(r,"<Accordion>"),r.forEach(g),a=x(t," components use the "),o=k(t,"CODE",{});var p=y(o);$=x(p,".accordion"),p.forEach(g),c=x(t," class.")},m(t,r){u(t,n,r),u(t,e,r),v(e,s),u(t,a,r),u(t,o,r),v(o,$),u(t,c,r)},d(t){t&&g(n),t&&g(e),t&&g(a),t&&g(o),t&&g(c)}}}function yt(t){let n;return{c(){n=d("Falsy values passed to classes will be disregarded.")},l(t){n=x(t,"Falsy values passed to classes will be disregarded.")},m(t,e){u(t,n,e)},d(t){t&&g(n)}}}function wt(t){let n;return{c(){n=d("Name")},l(t){n=x(t,"Name")},m(t,e){u(t,n,e)},d(t){t&&g(n)}}}function vt(t){let n;return{c(){n=d("Default")},l(t){n=x(t,"Default")},m(t,e){u(t,n,e)},d(t){t&&g(n)}}}function Et(t){let n;return{c(){n=d("Type")},l(t){n=x(t,"Type")},m(t,e){u(t,n,e)},d(t){t&&g(n)}}}function Dt(t){let n;return{c(){n=d("Description")},l(t){n=x(t,"Description")},m(t,e){u(t,n,e)},d(t){t&&g(n)}}}function bt(t){let n,e,s,c,f,d,x,h;return n=new z({props:{$$slots:{default:[wt]},$$scope:{ctx:t}}}),s=new z({props:{$$slots:{default:[vt]},$$scope:{ctx:t}}}),f=new z({props:{$$slots:{default:[Et]},$$scope:{ctx:t}}}),x=new z({props:{$$slots:{default:[Dt]},$$scope:{ctx:t}}}),{c(){a(n.$$.fragment),e=m(),a(s.$$.fragment),c=m(),a(f.$$.fragment),d=m(),a(x.$$.fragment)},l(t){o(n.$$.fragment,t),e=i(t),o(s.$$.fragment,t),c=i(t),o(f.$$.fragment,t),d=i(t),o(x.$$.fragment,t)},m(t,a){$(n,t,a),u(t,e,a),$(s,t,a),u(t,c,a),$(f,t,a),u(t,d,a),$(x,t,a),h=!0},p(t,e){const a={};32&e&&(a.$$scope={dirty:e,ctx:t}),n.$set(a);const o={};32&e&&(o.$$scope={dirty:e,ctx:t}),s.$set(o);const $={};32&e&&($.$$scope={dirty:e,ctx:t}),f.$set($);const c={};32&e&&(c.$$scope={dirty:e,ctx:t}),x.$set(c)},i(t){h||(r(n.$$.fragment,t),r(s.$$.fragment,t),r(f.$$.fragment,t),r(x.$$.fragment,t),h=!0)},o(t){p(n.$$.fragment,t),p(s.$$.fragment,t),p(f.$$.fragment,t),p(x.$$.fragment,t),h=!1},d(t){l(n,t),t&&g(e),l(s,t),t&&g(c),l(f,t),t&&g(d),l(x,t)}}}function Ot(t){let n,e,s;return{c(){n=h("strong"),e=h("code"),s=d("class")},l(t){n=k(t,"STRONG",{});var a=y(n);e=k(a,"CODE",{});var o=y(e);s=x(o,"class"),o.forEach(g),a.forEach(g)},m(t,a){u(t,n,a),v(n,e),v(e,s)},d(t){t&&g(n)}}}function At(t){let n,e;return{c(){n=h("code"),e=d("null")},l(t){n=k(t,"CODE",{});var s=y(n);e=x(s,"null"),s.forEach(g)},m(t,s){u(t,n,s),v(n,e)},d(t){t&&g(n)}}}function Ct(t){let n,e;return{c(){n=h("code"),e=d("string")},l(t){n=k(t,"CODE",{});var s=y(n);e=x(s,"string"),s.forEach(g)},m(t,s){u(t,n,s),v(n,e)},d(t){t&&g(n)}}}function jt(t){let n;return{c(){n=d("A class string to add to the component.")},l(t){n=x(t,"A class string to add to the component.")},m(t,e){u(t,n,e)},d(t){t&&g(n)}}}function Tt(t){let n,e,s,c,f,d,x,h;return n=new L({props:{$$slots:{default:[Ot]},$$scope:{ctx:t}}}),s=new L({props:{$$slots:{default:[At]},$$scope:{ctx:t}}}),f=new L({props:{$$slots:{default:[Ct]},$$scope:{ctx:t}}}),x=new L({props:{$$slots:{default:[jt]},$$scope:{ctx:t}}}),{c(){a(n.$$.fragment),e=m(),a(s.$$.fragment),c=m(),a(f.$$.fragment),d=m(),a(x.$$.fragment)},l(t){o(n.$$.fragment,t),e=i(t),o(s.$$.fragment,t),c=i(t),o(f.$$.fragment,t),d=i(t),o(x.$$.fragment,t)},m(t,a){$(n,t,a),u(t,e,a),$(s,t,a),u(t,c,a),$(f,t,a),u(t,d,a),$(x,t,a),h=!0},p(t,e){const a={};32&e&&(a.$$scope={dirty:e,ctx:t}),n.$set(a);const o={};32&e&&(o.$$scope={dirty:e,ctx:t}),s.$set(o);const $={};32&e&&($.$$scope={dirty:e,ctx:t}),f.$set($);const c={};32&e&&(c.$$scope={dirty:e,ctx:t}),x.$set(c)},i(t){h||(r(n.$$.fragment,t),r(s.$$.fragment,t),r(f.$$.fragment,t),r(x.$$.fragment,t),h=!0)},o(t){p(n.$$.fragment,t),p(s.$$.fragment,t),p(f.$$.fragment,t),p(x.$$.fragment,t),h=!1},d(t){l(n,t),t&&g(e),l(s,t),t&&g(c),l(f,t),t&&g(d),l(x,t)}}}function Pt(t){let n,e,s,c,f,d;return e=new Y({props:{$$slots:{default:[bt]},$$scope:{ctx:t}}}),f=new Y({props:{$$slots:{default:[Tt]},$$scope:{ctx:t}}}),{c(){n=h("thead"),a(e.$$.fragment),s=m(),c=h("tbody"),a(f.$$.fragment)},l(t){n=k(t,"THEAD",{});var a=y(n);o(e.$$.fragment,a),a.forEach(g),s=i(t),c=k(t,"TBODY",{});var $=y(c);o(f.$$.fragment,$),$.forEach(g)},m(t,a){u(t,n,a),$(e,n,null),u(t,s,a),u(t,c,a),$(f,c,null),d=!0},p(t,n){const s={};32&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const a={};32&n&&(a.$$scope={dirty:n,ctx:t}),f.$set(a)},i(t){d||(r(e.$$.fragment,t),r(f.$$.fragment,t),d=!0)},o(t){p(e.$$.fragment,t),p(f.$$.fragment,t),d=!1},d(t){t&&g(n),l(e),t&&g(s),t&&g(c),l(f)}}}function St(t){let n;return{c(){n=d("Slots")},l(t){n=x(t,"Slots")},m(t,e){u(t,n,e)},d(t){t&&g(n)}}}function Nt(t){let n;return{c(){n=d("Default slot")},l(t){n=x(t,"Default slot")},m(t,e){u(t,n,e)},d(t){t&&g(n)}}}function Bt(t){let n,e,s,a,o,$;return{c(){n=d("The content of the Accordion. Pass one or more "),e=h("a"),s=h("mark"),a=h("code"),o=d("AccordionSection"),$=d(" components or something miscellaneous."),this.h()},l(t){n=x(t,"The content of the Accordion. Pass one or more "),e=k(t,"A",{href:!0});var c=y(e);s=k(c,"MARK",{});var r=y(s);a=k(r,"CODE",{});var p=y(a);o=x(p,"AccordionSection"),p.forEach(g),r.forEach(g),c.forEach(g),$=x(t," components or something miscellaneous."),this.h()},h(){w(e,"href","./docs/components/accordion-section")},m(t,c){u(t,n,c),u(t,e,c),v(e,s),v(s,a),v(a,o),u(t,$,c)},d(t){t&&g(n),t&&g(e),t&&g($)}}}function Ht(t){let n;return{c(){n=d("Prop Name")},l(t){n=x(t,"Prop Name")},m(t,e){u(t,n,e)},d(t){t&&g(n)}}}function Rt(t){let n;return{c(){n=d("Type")},l(t){n=x(t,"Type")},m(t,e){u(t,n,e)},d(t){t&&g(n)}}}function Ft(t){let n;return{c(){n=d("Description")},l(t){n=x(t,"Description")},m(t,e){u(t,n,e)},d(t){t&&g(n)}}}function Gt(t){let n,e,s,c,f,d;return n=new z({props:{$$slots:{default:[Ht]},$$scope:{ctx:t}}}),s=new z({props:{$$slots:{default:[Rt]},$$scope:{ctx:t}}}),f=new z({props:{$$slots:{default:[Ft]},$$scope:{ctx:t}}}),{c(){a(n.$$.fragment),e=m(),a(s.$$.fragment),c=m(),a(f.$$.fragment)},l(t){o(n.$$.fragment,t),e=i(t),o(s.$$.fragment,t),c=i(t),o(f.$$.fragment,t)},m(t,a){$(n,t,a),u(t,e,a),$(s,t,a),u(t,c,a),$(f,t,a),d=!0},p(t,e){const a={};32&e&&(a.$$scope={dirty:e,ctx:t}),n.$set(a);const o={};32&e&&(o.$$scope={dirty:e,ctx:t}),s.$set(o);const $={};32&e&&($.$$scope={dirty:e,ctx:t}),f.$set($)},i(t){d||(r(n.$$.fragment,t),r(s.$$.fragment,t),r(f.$$.fragment,t),d=!0)},o(t){p(n.$$.fragment,t),p(s.$$.fragment,t),p(f.$$.fragment,t),d=!1},d(t){l(n,t),t&&g(e),l(s,t),t&&g(c),l(f,t)}}}function It(t){let n,e,s;return{c(){n=h("strong"),e=h("code"),s=d("closeOtherPanels")},l(t){n=k(t,"STRONG",{});var a=y(n);e=k(a,"CODE",{});var o=y(e);s=x(o,"closeOtherPanels"),o.forEach(g),a.forEach(g)},m(t,a){u(t,n,a),v(n,e),v(e,s)},d(t){t&&g(n)}}}function Vt(t){let n,e;return{c(){n=h("code"),e=d("Function")},l(t){n=k(t,"CODE",{});var s=y(n);e=x(s,"Function"),s.forEach(g)},m(t,s){u(t,n,s),v(n,e)},d(t){t&&g(n)}}}function Yt(t){let n;return{c(){n=d("A callback to force-close all panels except for the calling one.")},l(t){n=x(t,"A callback to force-close all panels except for the calling one.")},m(t,e){u(t,n,e)},d(t){t&&g(n)}}}function zt(t){let n,e,s,c,f,d;return n=new L({props:{$$slots:{default:[It]},$$scope:{ctx:t}}}),s=new L({props:{$$slots:{default:[Vt]},$$scope:{ctx:t}}}),f=new L({props:{$$slots:{default:[Yt]},$$scope:{ctx:t}}}),{c(){a(n.$$.fragment),e=m(),a(s.$$.fragment),c=m(),a(f.$$.fragment)},l(t){o(n.$$.fragment,t),e=i(t),o(s.$$.fragment,t),c=i(t),o(f.$$.fragment,t)},m(t,a){$(n,t,a),u(t,e,a),$(s,t,a),u(t,c,a),$(f,t,a),d=!0},p(t,e){const a={};32&e&&(a.$$scope={dirty:e,ctx:t}),n.$set(a);const o={};32&e&&(o.$$scope={dirty:e,ctx:t}),s.$set(o);const $={};32&e&&($.$$scope={dirty:e,ctx:t}),f.$set($)},i(t){d||(r(n.$$.fragment,t),r(s.$$.fragment,t),r(f.$$.fragment,t),d=!0)},o(t){p(n.$$.fragment,t),p(s.$$.fragment,t),p(f.$$.fragment,t),d=!1},d(t){l(n,t),t&&g(e),l(s,t),t&&g(c),l(f,t)}}}function Lt(t){let n,e,s,c,f,d;return e=new Y({props:{$$slots:{default:[Gt]},$$scope:{ctx:t}}}),f=new Y({props:{$$slots:{default:[zt]},$$scope:{ctx:t}}}),{c(){n=h("thead"),a(e.$$.fragment),s=m(),c=h("tbody"),a(f.$$.fragment)},l(t){n=k(t,"THEAD",{});var a=y(n);o(e.$$.fragment,a),a.forEach(g),s=i(t),c=k(t,"TBODY",{});var $=y(c);o(f.$$.fragment,$),$.forEach(g)},m(t,a){u(t,n,a),$(e,n,null),u(t,s,a),u(t,c,a),$(f,c,null),d=!0},p(t,n){const s={};32&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const a={};32&n&&(a.$$scope={dirty:n,ctx:t}),f.$set(a)},i(t){d||(r(e.$$.fragment,t),r(f.$$.fragment,t),d=!0)},o(t){p(e.$$.fragment,t),p(f.$$.fragment,t),d=!1},d(t){t&&g(n),l(e),t&&g(s),t&&g(c),l(f)}}}function Mt(t){let n,e,s,c,f,d,x,h,k,y,w,v,E,D,b,O,A,C,j,S,N,B,H,Y,z,L,M,U,J,Q;return n=new T({props:{$$slots:{default:[q]},$$scope:{ctx:t}}}),s=new P({props:{$$slots:{default:[K]},$$scope:{ctx:t}}}),f=new F({props:{components:Jt}}),x=new R({props:{$$slots:{default:[tt],source:[_],showcase:[Z]},$$scope:{ctx:t}}}),k=new G({props:{id:"properties",$$slots:{default:[nt]},$$scope:{ctx:t}}}),w=new I({props:{$$slots:{default:[et]},$$scope:{ctx:t}}}),E=new V({props:{$$slots:{default:[xt]},$$scope:{ctx:t}}}),b=new I({props:{$$slots:{default:[ht]},$$scope:{ctx:t}}}),A=new P({props:{$$slots:{default:[kt]},$$scope:{ctx:t}}}),j=new P({props:{$$slots:{default:[yt]},$$scope:{ctx:t}}}),N=new V({props:{$$slots:{default:[Pt]},$$scope:{ctx:t}}}),H=new G({props:{id:"slots",$$slots:{default:[St]},$$scope:{ctx:t}}}),z=new I({props:{$$slots:{default:[Nt]},$$scope:{ctx:t}}}),M=new P({props:{$$slots:{default:[Bt]},$$scope:{ctx:t}}}),J=new V({props:{$$slots:{default:[Lt]},$$scope:{ctx:t}}}),{c(){a(n.$$.fragment),e=m(),a(s.$$.fragment),c=m(),a(f.$$.fragment),d=m(),a(x.$$.fragment),h=m(),a(k.$$.fragment),y=m(),a(w.$$.fragment),v=m(),a(E.$$.fragment),D=m(),a(b.$$.fragment),O=m(),a(A.$$.fragment),C=m(),a(j.$$.fragment),S=m(),a(N.$$.fragment),B=m(),a(H.$$.fragment),Y=m(),a(z.$$.fragment),L=m(),a(M.$$.fragment),U=m(),a(J.$$.fragment)},l(t){o(n.$$.fragment,t),e=i(t),o(s.$$.fragment,t),c=i(t),o(f.$$.fragment,t),d=i(t),o(x.$$.fragment,t),h=i(t),o(k.$$.fragment,t),y=i(t),o(w.$$.fragment,t),v=i(t),o(E.$$.fragment,t),D=i(t),o(b.$$.fragment,t),O=i(t),o(A.$$.fragment,t),C=i(t),o(j.$$.fragment,t),S=i(t),o(N.$$.fragment,t),B=i(t),o(H.$$.fragment,t),Y=i(t),o(z.$$.fragment,t),L=i(t),o(M.$$.fragment,t),U=i(t),o(J.$$.fragment,t)},m(t,a){$(n,t,a),u(t,e,a),$(s,t,a),u(t,c,a),$(f,t,a),u(t,d,a),$(x,t,a),u(t,h,a),$(k,t,a),u(t,y,a),$(w,t,a),u(t,v,a),$(E,t,a),u(t,D,a),$(b,t,a),u(t,O,a),$(A,t,a),u(t,C,a),$(j,t,a),u(t,S,a),$(N,t,a),u(t,B,a),$(H,t,a),u(t,Y,a),$(z,t,a),u(t,L,a),$(M,t,a),u(t,U,a),$(J,t,a),Q=!0},p(t,e){const a={};32&e&&(a.$$scope={dirty:e,ctx:t}),n.$set(a);const o={};32&e&&(o.$$scope={dirty:e,ctx:t}),s.$set(o);const $={};32&e&&($.$$scope={dirty:e,ctx:t}),x.$set($);const c={};32&e&&(c.$$scope={dirty:e,ctx:t}),k.$set(c);const r={};32&e&&(r.$$scope={dirty:e,ctx:t}),w.$set(r);const p={};32&e&&(p.$$scope={dirty:e,ctx:t}),E.$set(p);const l={};32&e&&(l.$$scope={dirty:e,ctx:t}),b.$set(l);const f={};32&e&&(f.$$scope={dirty:e,ctx:t}),A.$set(f);const m={};32&e&&(m.$$scope={dirty:e,ctx:t}),j.$set(m);const i={};32&e&&(i.$$scope={dirty:e,ctx:t}),N.$set(i);const u={};32&e&&(u.$$scope={dirty:e,ctx:t}),H.$set(u);const g={};32&e&&(g.$$scope={dirty:e,ctx:t}),z.$set(g);const d={};32&e&&(d.$$scope={dirty:e,ctx:t}),M.$set(d);const h={};32&e&&(h.$$scope={dirty:e,ctx:t}),J.$set(h)},i(t){Q||(r(n.$$.fragment,t),r(s.$$.fragment,t),r(f.$$.fragment,t),r(x.$$.fragment,t),r(k.$$.fragment,t),r(w.$$.fragment,t),r(E.$$.fragment,t),r(b.$$.fragment,t),r(A.$$.fragment,t),r(j.$$.fragment,t),r(N.$$.fragment,t),r(H.$$.fragment,t),r(z.$$.fragment,t),r(M.$$.fragment,t),r(J.$$.fragment,t),Q=!0)},o(t){p(n.$$.fragment,t),p(s.$$.fragment,t),p(f.$$.fragment,t),p(x.$$.fragment,t),p(k.$$.fragment,t),p(w.$$.fragment,t),p(E.$$.fragment,t),p(b.$$.fragment,t),p(A.$$.fragment,t),p(j.$$.fragment,t),p(N.$$.fragment,t),p(H.$$.fragment,t),p(z.$$.fragment,t),p(M.$$.fragment,t),p(J.$$.fragment,t),Q=!1},d(t){l(n,t),t&&g(e),l(s,t),t&&g(c),l(f,t),t&&g(d),l(x,t),t&&g(h),l(k,t),t&&g(y),l(w,t),t&&g(v),l(E,t),t&&g(D),l(b,t),t&&g(O),l(A,t),t&&g(C),l(j,t),t&&g(S),l(N,t),t&&g(B),l(H,t),t&&g(Y),l(z,t),t&&g(L),l(M,t),t&&g(U),l(J,t)}}}function qt(t){let n,e;const m=[Kt];let i={$$slots:{default:[Mt]},$$scope:{ctx:t}};for(let t=0;t<m.length;t+=1)i=s(i,m[t]);return n=new j({props:i}),{c(){a(n.$$.fragment)},l(t){o(n.$$.fragment,t)},m(t,s){$(n,t,s),e=!0},p(t,[e]){const s=0&e?c(m,[f(Kt)]):{};32&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s)},i(t){e||(r(n.$$.fragment,t),e=!0)},o(t){p(n.$$.fragment,t),e=!1},d(t){l(n,t)}}}const Kt={name:"Accordion",relatedComponents:[{name:"AccordionSection",link:"./docs/components/accordion-section"}]},{name:Ut,relatedComponents:Jt}=Kt;export default class extends t{constructor(t){super(),n(this,t,null,qt,e,{})}}export{Kt as metadata};
