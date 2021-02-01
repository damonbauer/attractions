import{S as t,i as n,s as e,L as s,p as a,q as o,r as $,T as c,Z as r,u as p,v as l,w as f,x as m,z as i,k as u,h as g,y as d,A as x,o as h,f as k,g as y,j as w,l as v,n as E,I as D,B as b,C as A,a9 as O,U as C}from"./client.831ab1f6.js";import{L as j,H as T,P}from"./layout.be97799c.js";import{B as S}from"./button.a622a4d6.js";import{A as N,a as B}from"./accordion-section.c025c168.js";import{C as H}from"./ChevronDownIcon.ef413a95.js";import{S as R}from"./showcase.5ed60318.js";import{R as F}from"./related-components.4402625f.js";import{H as I}from"./h2.6d201ab2.js";import{H as G}from"./h3.2301de3c.js";import{T as z,a as L,b as V,c as Y}from"./table.6378e9c2.js";import"./classes.541c5f2a.js";import"./label.be757ee0.js";import"./copyable-code.e1d6a85d.js";import"./asyncToGenerator.756dab92.js";import"./card.d66d7f61.js";function M(t,n,e){const s=t.slice();return s[1]=n[e],s}function q(t){let n;return{c(){n=d("Accordion")},l(t){n=x(t,"Accordion")},m(t,e){u(t,n,e)},d(t){t&&g(n)}}}function K(t){let n;return{c(){n=d("A controller for multiple collapsible elements, allowing either one open panel at a time or infinite.")},l(t){n=x(t,"A controller for multiple collapsible elements, allowing either one open panel at a time or infinite.")},m(t,e){u(t,n,e)},d(t){t&&g(n)}}}function U(t){let n,e,s,c,r;return c=new H({props:{size:"20",class:"ml accordion-chevron"}}),{c(){n=d("open panel "),e=d(t[1]),s=m(),a(c.$$.fragment)},l(a){n=x(a,"open panel "),e=x(a,t[1]),s=i(a),o(c.$$.fragment,a)},m(t,a){u(t,n,a),u(t,e,a),u(t,s,a),$(c,t,a),r=!0},p:E,i(t){r||(p(c.$$.fragment,t),r=!0)},o(t){l(c.$$.fragment,t),r=!1},d(t){t&&g(n),t&&g(e),t&&g(s),f(c,t)}}}function Z(t){let n,e,s;return e=new S({props:{$$slots:{default:[U]},$$scope:{ctx:t}}}),e.$on("click",(function(){C(t[4])&&t[4].apply(this,arguments)})),{c(){n=h("div"),a(e.$$.fragment),this.h()},l(t){n=k(t,"DIV",{slot:!0});var s=y(n);o(e.$$.fragment,s),s.forEach(g),this.h()},h(){w(n,"slot","handle")},m(t,a){u(t,n,a),$(e,n,null),s=!0},p(n,s){t=n;const a={};32&s&&(a.$$scope={dirty:s,ctx:t}),e.$set(a)},i(t){s||(p(e.$$.fragment,t),s=!0)},o(t){l(e.$$.fragment,t),s=!1},d(t){t&&g(n),f(e)}}}function J(t){let n,e,s;return{c(){n=d("\n          Content of panel "),e=d(t[1]),s=m()},l(a){n=x(a,"\n          Content of panel "),e=x(a,t[1]),s=i(a)},m(t,a){u(t,n,a),u(t,e,a),u(t,s,a)},p:E,i:E,o:E,d(t){t&&g(n),t&&g(e),t&&g(s)}}}function Q(t){let n,e;return n=new B({props:{$$slots:{default:[J,({toggle:t})=>({4:t}),({toggle:t})=>t?16:0],handle:[Z,({toggle:t})=>({4:t}),({toggle:t})=>t?16:0]},$$scope:{ctx:t}}}),n.$on("panel-open",(function(){C(t[0])&&t[0].apply(this,arguments)})),{c(){a(n.$$.fragment)},l(t){o(n.$$.fragment,t)},m(t,s){$(n,t,s),e=!0},p(e,s){t=e;const a={};48&s&&(a.$$scope={dirty:s,ctx:t}),n.$set(a)},i(t){e||(p(n.$$.fragment,t),e=!0)},o(t){l(n.$$.fragment,t),e=!1},d(t){f(n,t)}}}function W(t){let n,e,s=[0,1,2,3,4],a=[];for(let n=0;n<5;n+=1)a[n]=Q(M(t,s,n));const o=t=>l(a[t],1,1,(()=>{a[t]=null}));return{c(){for(let t=0;t<5;t+=1)a[t].c();n=D()},l(t){for(let n=0;n<5;n+=1)a[n].l(t);n=D()},m(t,s){for(let n=0;n<5;n+=1)a[n].m(t,s);u(t,n,s),e=!0},p(t,e){if(17&e){let $;for(s=[0,1,2,3,4],$=0;$<5;$+=1){const o=M(t,s,$);a[$]?(a[$].p(o,e),p(a[$],1)):(a[$]=Q(o),a[$].c(),p(a[$],1),a[$].m(n.parentNode,n))}for(b(),$=5;$<5;$+=1)o($);A()}},i(t){if(!e){for(let t=0;t<5;t+=1)p(a[t]);e=!0}},o(t){a=a.filter(Boolean);for(let t=0;t<5;t+=1)l(a[t]);e=!1},d(t){O(a,t),t&&g(n)}}}function X(t){let n,e,s;return e=new N({props:{$$slots:{default:[W,({closeOtherPanels:t})=>({0:t}),({closeOtherPanels:t})=>t?1:0]},$$scope:{ctx:t}}}),{c(){n=h("div"),a(e.$$.fragment),this.h()},l(t){n=k(t,"DIV",{slot:!0,class:!0});var s=y(n);o(e.$$.fragment,s),s.forEach(g),this.h()},h(){w(n,"slot","showcase"),w(n,"class","svelte-elo7ub")},m(t,a){u(t,n,a),$(e,n,null),s=!0},p(t,n){const s={};33&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){s||(p(e.$$.fragment,t),s=!0)},o(t){l(e.$$.fragment,t),s=!1},d(t){t&&g(n),f(e)}}}function _(t){let n,e;return{c(){n=h("div"),e=h("pre"),this.h()},l(t){n=k(t,"DIV",{slot:!0});var s=y(n);e=k(s,"PRE",{class:!0}),y(e).forEach(g),s.forEach(g),this.h()},h(){w(e,"class","language-svelte"),w(n,"slot","source")},m(t,s){u(t,n,s),v(n,e),e.innerHTML='<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Accordion</span> <span class="token attr-name"><span class="token namespace">let:</span>closeOtherPanels</span><span class="token punctuation">></span></span>\n  <span class="token each"><span class="token punctuation">&#123;</span><span class="token keyword">#each</span> <span class="token language-javascript"><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span> </span><span class="token keyword">as</span> <span class="token language-javascript">idx<span class="token punctuation">&#125;</span></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AccordionSection</span> <span class="token attr-name"><span class="token namespace">on:</span>panel-open=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>closeOtherPanels<span class="token punctuation">&#125;</span></span> <span class="token attr-name"><span class="token namespace">let:</span>toggle</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>handle<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name"><span class="token namespace">on:</span>click=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>toggle<span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span>\n          open panel <span class="token language-javascript"><span class="token punctuation">&#123;</span>idx<span class="token punctuation">&#125;</span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ChevronDownIcon</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>20<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ml accordion-chevron<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n      Content of panel <span class="token language-javascript"><span class="token punctuation">&#123;</span>idx<span class="token punctuation">&#125;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>AccordionSection</span><span class="token punctuation">></span></span>\n  <span class="token each"><span class="token punctuation">&#123;</span><span class="token keyword">/each</span><span class="token punctuation">&#125;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Accordion</span><span class="token punctuation">></span></span></code>'},p:E,d(t){t&&g(n)}}}function tt(t){let n;return{c(){n=m()},l(t){n=i(t)},m(t,e){u(t,n,e)},p:E,i:E,o:E,d(t){t&&g(n)}}}function nt(t){let n;return{c(){n=d("Properties")},l(t){n=x(t,"Properties")},m(t,e){u(t,n,e)},d(t){t&&g(n)}}}function et(t){let n;return{c(){n=d("Functional Properties")},l(t){n=x(t,"Functional Properties")},m(t,e){u(t,n,e)},d(t){t&&g(n)}}}function st(t){let n;return{c(){n=d("Name")},l(t){n=x(t,"Name")},m(t,e){u(t,n,e)},d(t){t&&g(n)}}}function at(t){let n;return{c(){n=d("Default")},l(t){n=x(t,"Default")},m(t,e){u(t,n,e)},d(t){t&&g(n)}}}function ot(t){let n;return{c(){n=d("Type")},l(t){n=x(t,"Type")},m(t,e){u(t,n,e)},d(t){t&&g(n)}}}function $t(t){let n;return{c(){n=d("Description")},l(t){n=x(t,"Description")},m(t,e){u(t,n,e)},d(t){t&&g(n)}}}function ct(t){let n,e,s,c,r,d,x,h;return n=new V({props:{$$slots:{default:[st]},$$scope:{ctx:t}}}),s=new V({props:{$$slots:{default:[at]},$$scope:{ctx:t}}}),r=new V({props:{$$slots:{default:[ot]},$$scope:{ctx:t}}}),x=new V({props:{$$slots:{default:[$t]},$$scope:{ctx:t}}}),{c(){a(n.$$.fragment),e=m(),a(s.$$.fragment),c=m(),a(r.$$.fragment),d=m(),a(x.$$.fragment)},l(t){o(n.$$.fragment,t),e=i(t),o(s.$$.fragment,t),c=i(t),o(r.$$.fragment,t),d=i(t),o(x.$$.fragment,t)},m(t,a){$(n,t,a),u(t,e,a),$(s,t,a),u(t,c,a),$(r,t,a),u(t,d,a),$(x,t,a),h=!0},p(t,e){const a={};32&e&&(a.$$scope={dirty:e,ctx:t}),n.$set(a);const o={};32&e&&(o.$$scope={dirty:e,ctx:t}),s.$set(o);const $={};32&e&&($.$$scope={dirty:e,ctx:t}),r.$set($);const c={};32&e&&(c.$$scope={dirty:e,ctx:t}),x.$set(c)},i(t){h||(p(n.$$.fragment,t),p(s.$$.fragment,t),p(r.$$.fragment,t),p(x.$$.fragment,t),h=!0)},o(t){l(n.$$.fragment,t),l(s.$$.fragment,t),l(r.$$.fragment,t),l(x.$$.fragment,t),h=!1},d(t){f(n,t),t&&g(e),f(s,t),t&&g(c),f(r,t),t&&g(d),f(x,t)}}}function rt(t){let n,e,s;return{c(){n=h("strong"),e=h("code"),s=d("multiple")},l(t){n=k(t,"STRONG",{});var a=y(n);e=k(a,"CODE",{});var o=y(e);s=x(o,"multiple"),o.forEach(g),a.forEach(g)},m(t,a){u(t,n,a),v(n,e),v(e,s)},d(t){t&&g(n)}}}function pt(t){let n,e;return{c(){n=h("code"),e=d("false")},l(t){n=k(t,"CODE",{});var s=y(n);e=x(s,"false"),s.forEach(g)},m(t,s){u(t,n,s),v(n,e)},d(t){t&&g(n)}}}function lt(t){let n,e;return{c(){n=h("code"),e=d("boolean")},l(t){n=k(t,"CODE",{});var s=y(n);e=x(s,"boolean"),s.forEach(g)},m(t,s){u(t,n,s),v(n,e)},d(t){t&&g(n)}}}function ft(t){let n,e,s,a;return{c(){n=d("Setting this to "),e=h("code"),s=d("true"),a=d(" allows multiple panels to be open at the same time.")},l(t){n=x(t,"Setting this to "),e=k(t,"CODE",{});var o=y(e);s=x(o,"true"),o.forEach(g),a=x(t," allows multiple panels to be open at the same time.")},m(t,o){u(t,n,o),u(t,e,o),v(e,s),u(t,a,o)},d(t){t&&g(n),t&&g(e),t&&g(a)}}}function mt(t){let n,e,s,c,r,d,x,h;return n=new Y({props:{$$slots:{default:[rt]},$$scope:{ctx:t}}}),s=new Y({props:{$$slots:{default:[pt]},$$scope:{ctx:t}}}),r=new Y({props:{$$slots:{default:[lt]},$$scope:{ctx:t}}}),x=new Y({props:{$$slots:{default:[ft]},$$scope:{ctx:t}}}),{c(){a(n.$$.fragment),e=m(),a(s.$$.fragment),c=m(),a(r.$$.fragment),d=m(),a(x.$$.fragment)},l(t){o(n.$$.fragment,t),e=i(t),o(s.$$.fragment,t),c=i(t),o(r.$$.fragment,t),d=i(t),o(x.$$.fragment,t)},m(t,a){$(n,t,a),u(t,e,a),$(s,t,a),u(t,c,a),$(r,t,a),u(t,d,a),$(x,t,a),h=!0},p(t,e){const a={};32&e&&(a.$$scope={dirty:e,ctx:t}),n.$set(a);const o={};32&e&&(o.$$scope={dirty:e,ctx:t}),s.$set(o);const $={};32&e&&($.$$scope={dirty:e,ctx:t}),r.$set($);const c={};32&e&&(c.$$scope={dirty:e,ctx:t}),x.$set(c)},i(t){h||(p(n.$$.fragment,t),p(s.$$.fragment,t),p(r.$$.fragment,t),p(x.$$.fragment,t),h=!0)},o(t){l(n.$$.fragment,t),l(s.$$.fragment,t),l(r.$$.fragment,t),l(x.$$.fragment,t),h=!1},d(t){f(n,t),t&&g(e),f(s,t),t&&g(c),f(r,t),t&&g(d),f(x,t)}}}function it(t){let n,e,s;return{c(){n=h("strong"),e=h("code"),s=d("...")},l(t){n=k(t,"STRONG",{});var a=y(n);e=k(a,"CODE",{});var o=y(e);s=x(o,"..."),o.forEach(g),a.forEach(g)},m(t,a){u(t,n,a),v(n,e),v(e,s)},d(t){t&&g(n)}}}function ut(t){let n,e;return{c(){n=h("code"),e=d("any")},l(t){n=k(t,"CODE",{});var s=y(n);e=x(s,"any"),s.forEach(g)},m(t,s){u(t,n,s),v(n,e)},d(t){t&&g(n)}}}function gt(t){let n,e,s,a;return{c(){n=d("Everything else will be passed to the underlying "),e=h("code"),s=d("<ul>"),a=d(" element.")},l(t){n=x(t,"Everything else will be passed to the underlying "),e=k(t,"CODE",{});var o=y(e);s=x(o,"<ul>"),o.forEach(g),a=x(t," element.")},m(t,o){u(t,n,o),u(t,e,o),v(e,s),u(t,a,o)},d(t){t&&g(n),t&&g(e),t&&g(a)}}}function dt(t){let n,e,s,c,r,d,x,h;return n=new Y({props:{$$slots:{default:[it]},$$scope:{ctx:t}}}),s=new Y({}),r=new Y({props:{$$slots:{default:[ut]},$$scope:{ctx:t}}}),x=new Y({props:{$$slots:{default:[gt]},$$scope:{ctx:t}}}),{c(){a(n.$$.fragment),e=m(),a(s.$$.fragment),c=m(),a(r.$$.fragment),d=m(),a(x.$$.fragment)},l(t){o(n.$$.fragment,t),e=i(t),o(s.$$.fragment,t),c=i(t),o(r.$$.fragment,t),d=i(t),o(x.$$.fragment,t)},m(t,a){$(n,t,a),u(t,e,a),$(s,t,a),u(t,c,a),$(r,t,a),u(t,d,a),$(x,t,a),h=!0},p(t,e){const s={};32&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s);const a={};32&e&&(a.$$scope={dirty:e,ctx:t}),r.$set(a);const o={};32&e&&(o.$$scope={dirty:e,ctx:t}),x.$set(o)},i(t){h||(p(n.$$.fragment,t),p(s.$$.fragment,t),p(r.$$.fragment,t),p(x.$$.fragment,t),h=!0)},o(t){l(n.$$.fragment,t),l(s.$$.fragment,t),l(r.$$.fragment,t),l(x.$$.fragment,t),h=!1},d(t){f(n,t),t&&g(e),f(s,t),t&&g(c),f(r,t),t&&g(d),f(x,t)}}}function xt(t){let n,e,s,c,r,d,x,w;return e=new L({props:{$$slots:{default:[ct]},$$scope:{ctx:t}}}),r=new L({props:{$$slots:{default:[mt]},$$scope:{ctx:t}}}),x=new L({props:{$$slots:{default:[dt]},$$scope:{ctx:t}}}),{c(){n=h("thead"),a(e.$$.fragment),s=m(),c=h("tbody"),a(r.$$.fragment),d=m(),a(x.$$.fragment)},l(t){n=k(t,"THEAD",{});var a=y(n);o(e.$$.fragment,a),a.forEach(g),s=i(t),c=k(t,"TBODY",{});var $=y(c);o(r.$$.fragment,$),d=i($),o(x.$$.fragment,$),$.forEach(g)},m(t,a){u(t,n,a),$(e,n,null),u(t,s,a),u(t,c,a),$(r,c,null),v(c,d),$(x,c,null),w=!0},p(t,n){const s={};32&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const a={};32&n&&(a.$$scope={dirty:n,ctx:t}),r.$set(a);const o={};32&n&&(o.$$scope={dirty:n,ctx:t}),x.$set(o)},i(t){w||(p(e.$$.fragment,t),p(r.$$.fragment,t),p(x.$$.fragment,t),w=!0)},o(t){l(e.$$.fragment,t),l(r.$$.fragment,t),l(x.$$.fragment,t),w=!1},d(t){t&&g(n),f(e),t&&g(s),t&&g(c),f(r),f(x)}}}function ht(t){let n;return{c(){n=d("Class Properties")},l(t){n=x(t,"Class Properties")},m(t,e){u(t,n,e)},d(t){t&&g(n)}}}function kt(t){let n,e,s,a,o,$,c;return{c(){n=d("All "),e=h("code"),s=d("<Accordion>"),a=d(" components use the "),o=h("code"),$=d(".accordion"),c=d(" class.")},l(t){n=x(t,"All "),e=k(t,"CODE",{});var r=y(e);s=x(r,"<Accordion>"),r.forEach(g),a=x(t," components use the "),o=k(t,"CODE",{});var p=y(o);$=x(p,".accordion"),p.forEach(g),c=x(t," class.")},m(t,r){u(t,n,r),u(t,e,r),v(e,s),u(t,a,r),u(t,o,r),v(o,$),u(t,c,r)},d(t){t&&g(n),t&&g(e),t&&g(a),t&&g(o),t&&g(c)}}}function yt(t){let n;return{c(){n=d("Falsy values passed to classes will be disregarded.")},l(t){n=x(t,"Falsy values passed to classes will be disregarded.")},m(t,e){u(t,n,e)},d(t){t&&g(n)}}}function wt(t){let n;return{c(){n=d("Name")},l(t){n=x(t,"Name")},m(t,e){u(t,n,e)},d(t){t&&g(n)}}}function vt(t){let n;return{c(){n=d("Default")},l(t){n=x(t,"Default")},m(t,e){u(t,n,e)},d(t){t&&g(n)}}}function Et(t){let n;return{c(){n=d("Type")},l(t){n=x(t,"Type")},m(t,e){u(t,n,e)},d(t){t&&g(n)}}}function Dt(t){let n;return{c(){n=d("Description")},l(t){n=x(t,"Description")},m(t,e){u(t,n,e)},d(t){t&&g(n)}}}function bt(t){let n,e,s,c,r,d,x,h;return n=new V({props:{$$slots:{default:[wt]},$$scope:{ctx:t}}}),s=new V({props:{$$slots:{default:[vt]},$$scope:{ctx:t}}}),r=new V({props:{$$slots:{default:[Et]},$$scope:{ctx:t}}}),x=new V({props:{$$slots:{default:[Dt]},$$scope:{ctx:t}}}),{c(){a(n.$$.fragment),e=m(),a(s.$$.fragment),c=m(),a(r.$$.fragment),d=m(),a(x.$$.fragment)},l(t){o(n.$$.fragment,t),e=i(t),o(s.$$.fragment,t),c=i(t),o(r.$$.fragment,t),d=i(t),o(x.$$.fragment,t)},m(t,a){$(n,t,a),u(t,e,a),$(s,t,a),u(t,c,a),$(r,t,a),u(t,d,a),$(x,t,a),h=!0},p(t,e){const a={};32&e&&(a.$$scope={dirty:e,ctx:t}),n.$set(a);const o={};32&e&&(o.$$scope={dirty:e,ctx:t}),s.$set(o);const $={};32&e&&($.$$scope={dirty:e,ctx:t}),r.$set($);const c={};32&e&&(c.$$scope={dirty:e,ctx:t}),x.$set(c)},i(t){h||(p(n.$$.fragment,t),p(s.$$.fragment,t),p(r.$$.fragment,t),p(x.$$.fragment,t),h=!0)},o(t){l(n.$$.fragment,t),l(s.$$.fragment,t),l(r.$$.fragment,t),l(x.$$.fragment,t),h=!1},d(t){f(n,t),t&&g(e),f(s,t),t&&g(c),f(r,t),t&&g(d),f(x,t)}}}function At(t){let n,e,s;return{c(){n=h("strong"),e=h("code"),s=d("class")},l(t){n=k(t,"STRONG",{});var a=y(n);e=k(a,"CODE",{});var o=y(e);s=x(o,"class"),o.forEach(g),a.forEach(g)},m(t,a){u(t,n,a),v(n,e),v(e,s)},d(t){t&&g(n)}}}function Ot(t){let n,e;return{c(){n=h("code"),e=d("null")},l(t){n=k(t,"CODE",{});var s=y(n);e=x(s,"null"),s.forEach(g)},m(t,s){u(t,n,s),v(n,e)},d(t){t&&g(n)}}}function Ct(t){let n,e;return{c(){n=h("code"),e=d("string")},l(t){n=k(t,"CODE",{});var s=y(n);e=x(s,"string"),s.forEach(g)},m(t,s){u(t,n,s),v(n,e)},d(t){t&&g(n)}}}function jt(t){let n;return{c(){n=d("A class string to add to the component.")},l(t){n=x(t,"A class string to add to the component.")},m(t,e){u(t,n,e)},d(t){t&&g(n)}}}function Tt(t){let n,e,s,c,r,d,x,h;return n=new Y({props:{$$slots:{default:[At]},$$scope:{ctx:t}}}),s=new Y({props:{$$slots:{default:[Ot]},$$scope:{ctx:t}}}),r=new Y({props:{$$slots:{default:[Ct]},$$scope:{ctx:t}}}),x=new Y({props:{$$slots:{default:[jt]},$$scope:{ctx:t}}}),{c(){a(n.$$.fragment),e=m(),a(s.$$.fragment),c=m(),a(r.$$.fragment),d=m(),a(x.$$.fragment)},l(t){o(n.$$.fragment,t),e=i(t),o(s.$$.fragment,t),c=i(t),o(r.$$.fragment,t),d=i(t),o(x.$$.fragment,t)},m(t,a){$(n,t,a),u(t,e,a),$(s,t,a),u(t,c,a),$(r,t,a),u(t,d,a),$(x,t,a),h=!0},p(t,e){const a={};32&e&&(a.$$scope={dirty:e,ctx:t}),n.$set(a);const o={};32&e&&(o.$$scope={dirty:e,ctx:t}),s.$set(o);const $={};32&e&&($.$$scope={dirty:e,ctx:t}),r.$set($);const c={};32&e&&(c.$$scope={dirty:e,ctx:t}),x.$set(c)},i(t){h||(p(n.$$.fragment,t),p(s.$$.fragment,t),p(r.$$.fragment,t),p(x.$$.fragment,t),h=!0)},o(t){l(n.$$.fragment,t),l(s.$$.fragment,t),l(r.$$.fragment,t),l(x.$$.fragment,t),h=!1},d(t){f(n,t),t&&g(e),f(s,t),t&&g(c),f(r,t),t&&g(d),f(x,t)}}}function Pt(t){let n,e,s,c,r,d;return e=new L({props:{$$slots:{default:[bt]},$$scope:{ctx:t}}}),r=new L({props:{$$slots:{default:[Tt]},$$scope:{ctx:t}}}),{c(){n=h("thead"),a(e.$$.fragment),s=m(),c=h("tbody"),a(r.$$.fragment)},l(t){n=k(t,"THEAD",{});var a=y(n);o(e.$$.fragment,a),a.forEach(g),s=i(t),c=k(t,"TBODY",{});var $=y(c);o(r.$$.fragment,$),$.forEach(g)},m(t,a){u(t,n,a),$(e,n,null),u(t,s,a),u(t,c,a),$(r,c,null),d=!0},p(t,n){const s={};32&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const a={};32&n&&(a.$$scope={dirty:n,ctx:t}),r.$set(a)},i(t){d||(p(e.$$.fragment,t),p(r.$$.fragment,t),d=!0)},o(t){l(e.$$.fragment,t),l(r.$$.fragment,t),d=!1},d(t){t&&g(n),f(e),t&&g(s),t&&g(c),f(r)}}}function St(t){let n;return{c(){n=d("Slots")},l(t){n=x(t,"Slots")},m(t,e){u(t,n,e)},d(t){t&&g(n)}}}function Nt(t){let n;return{c(){n=d("Default slot")},l(t){n=x(t,"Default slot")},m(t,e){u(t,n,e)},d(t){t&&g(n)}}}function Bt(t){let n,e,s,a,o,$;return{c(){n=d("The content of the Accordion. Pass one or more "),e=h("a"),s=h("mark"),a=h("code"),o=d("AccordionSection"),$=d(" components or something miscellaneous."),this.h()},l(t){n=x(t,"The content of the Accordion. Pass one or more "),e=k(t,"A",{href:!0});var c=y(e);s=k(c,"MARK",{});var r=y(s);a=k(r,"CODE",{});var p=y(a);o=x(p,"AccordionSection"),p.forEach(g),r.forEach(g),c.forEach(g),$=x(t," components or something miscellaneous."),this.h()},h(){w(e,"href","./docs/components/accordion-section")},m(t,c){u(t,n,c),u(t,e,c),v(e,s),v(s,a),v(a,o),u(t,$,c)},d(t){t&&g(n),t&&g(e),t&&g($)}}}function Ht(t){let n;return{c(){n=d("Prop Name")},l(t){n=x(t,"Prop Name")},m(t,e){u(t,n,e)},d(t){t&&g(n)}}}function Rt(t){let n;return{c(){n=d("Type")},l(t){n=x(t,"Type")},m(t,e){u(t,n,e)},d(t){t&&g(n)}}}function Ft(t){let n;return{c(){n=d("Description")},l(t){n=x(t,"Description")},m(t,e){u(t,n,e)},d(t){t&&g(n)}}}function It(t){let n,e,s,c,r,d;return n=new V({props:{$$slots:{default:[Ht]},$$scope:{ctx:t}}}),s=new V({props:{$$slots:{default:[Rt]},$$scope:{ctx:t}}}),r=new V({props:{$$slots:{default:[Ft]},$$scope:{ctx:t}}}),{c(){a(n.$$.fragment),e=m(),a(s.$$.fragment),c=m(),a(r.$$.fragment)},l(t){o(n.$$.fragment,t),e=i(t),o(s.$$.fragment,t),c=i(t),o(r.$$.fragment,t)},m(t,a){$(n,t,a),u(t,e,a),$(s,t,a),u(t,c,a),$(r,t,a),d=!0},p(t,e){const a={};32&e&&(a.$$scope={dirty:e,ctx:t}),n.$set(a);const o={};32&e&&(o.$$scope={dirty:e,ctx:t}),s.$set(o);const $={};32&e&&($.$$scope={dirty:e,ctx:t}),r.$set($)},i(t){d||(p(n.$$.fragment,t),p(s.$$.fragment,t),p(r.$$.fragment,t),d=!0)},o(t){l(n.$$.fragment,t),l(s.$$.fragment,t),l(r.$$.fragment,t),d=!1},d(t){f(n,t),t&&g(e),f(s,t),t&&g(c),f(r,t)}}}function Gt(t){let n,e,s;return{c(){n=h("strong"),e=h("code"),s=d("closeOtherPanels")},l(t){n=k(t,"STRONG",{});var a=y(n);e=k(a,"CODE",{});var o=y(e);s=x(o,"closeOtherPanels"),o.forEach(g),a.forEach(g)},m(t,a){u(t,n,a),v(n,e),v(e,s)},d(t){t&&g(n)}}}function zt(t){let n,e;return{c(){n=h("code"),e=d("Function")},l(t){n=k(t,"CODE",{});var s=y(n);e=x(s,"Function"),s.forEach(g)},m(t,s){u(t,n,s),v(n,e)},d(t){t&&g(n)}}}function Lt(t){let n;return{c(){n=d("A callback to force-close all panels except for the calling one.")},l(t){n=x(t,"A callback to force-close all panels except for the calling one.")},m(t,e){u(t,n,e)},d(t){t&&g(n)}}}function Vt(t){let n,e,s,c,r,d;return n=new Y({props:{$$slots:{default:[Gt]},$$scope:{ctx:t}}}),s=new Y({props:{$$slots:{default:[zt]},$$scope:{ctx:t}}}),r=new Y({props:{$$slots:{default:[Lt]},$$scope:{ctx:t}}}),{c(){a(n.$$.fragment),e=m(),a(s.$$.fragment),c=m(),a(r.$$.fragment)},l(t){o(n.$$.fragment,t),e=i(t),o(s.$$.fragment,t),c=i(t),o(r.$$.fragment,t)},m(t,a){$(n,t,a),u(t,e,a),$(s,t,a),u(t,c,a),$(r,t,a),d=!0},p(t,e){const a={};32&e&&(a.$$scope={dirty:e,ctx:t}),n.$set(a);const o={};32&e&&(o.$$scope={dirty:e,ctx:t}),s.$set(o);const $={};32&e&&($.$$scope={dirty:e,ctx:t}),r.$set($)},i(t){d||(p(n.$$.fragment,t),p(s.$$.fragment,t),p(r.$$.fragment,t),d=!0)},o(t){l(n.$$.fragment,t),l(s.$$.fragment,t),l(r.$$.fragment,t),d=!1},d(t){f(n,t),t&&g(e),f(s,t),t&&g(c),f(r,t)}}}function Yt(t){let n,e,s,c,r,d;return e=new L({props:{$$slots:{default:[It]},$$scope:{ctx:t}}}),r=new L({props:{$$slots:{default:[Vt]},$$scope:{ctx:t}}}),{c(){n=h("thead"),a(e.$$.fragment),s=m(),c=h("tbody"),a(r.$$.fragment)},l(t){n=k(t,"THEAD",{});var a=y(n);o(e.$$.fragment,a),a.forEach(g),s=i(t),c=k(t,"TBODY",{});var $=y(c);o(r.$$.fragment,$),$.forEach(g)},m(t,a){u(t,n,a),$(e,n,null),u(t,s,a),u(t,c,a),$(r,c,null),d=!0},p(t,n){const s={};32&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const a={};32&n&&(a.$$scope={dirty:n,ctx:t}),r.$set(a)},i(t){d||(p(e.$$.fragment,t),p(r.$$.fragment,t),d=!0)},o(t){l(e.$$.fragment,t),l(r.$$.fragment,t),d=!1},d(t){t&&g(n),f(e),t&&g(s),t&&g(c),f(r)}}}function Mt(t){let n,e,s,c,r,d,x,h,k,y,w,v,E,D,b,A,O,C,j,S,N,B,H,L,V,Y,M,U,Z,J;return n=new T({props:{$$slots:{default:[q]},$$scope:{ctx:t}}}),s=new P({props:{$$slots:{default:[K]},$$scope:{ctx:t}}}),r=new F({props:{components:Zt}}),x=new R({props:{$$slots:{default:[tt],source:[_],showcase:[X]},$$scope:{ctx:t}}}),k=new I({props:{id:"properties",$$slots:{default:[nt]},$$scope:{ctx:t}}}),w=new G({props:{$$slots:{default:[et]},$$scope:{ctx:t}}}),E=new z({props:{$$slots:{default:[xt]},$$scope:{ctx:t}}}),b=new G({props:{$$slots:{default:[ht]},$$scope:{ctx:t}}}),O=new P({props:{$$slots:{default:[kt]},$$scope:{ctx:t}}}),j=new P({props:{$$slots:{default:[yt]},$$scope:{ctx:t}}}),N=new z({props:{$$slots:{default:[Pt]},$$scope:{ctx:t}}}),H=new I({props:{id:"slots",$$slots:{default:[St]},$$scope:{ctx:t}}}),V=new G({props:{$$slots:{default:[Nt]},$$scope:{ctx:t}}}),M=new P({props:{$$slots:{default:[Bt]},$$scope:{ctx:t}}}),Z=new z({props:{$$slots:{default:[Yt]},$$scope:{ctx:t}}}),{c(){a(n.$$.fragment),e=m(),a(s.$$.fragment),c=m(),a(r.$$.fragment),d=m(),a(x.$$.fragment),h=m(),a(k.$$.fragment),y=m(),a(w.$$.fragment),v=m(),a(E.$$.fragment),D=m(),a(b.$$.fragment),A=m(),a(O.$$.fragment),C=m(),a(j.$$.fragment),S=m(),a(N.$$.fragment),B=m(),a(H.$$.fragment),L=m(),a(V.$$.fragment),Y=m(),a(M.$$.fragment),U=m(),a(Z.$$.fragment)},l(t){o(n.$$.fragment,t),e=i(t),o(s.$$.fragment,t),c=i(t),o(r.$$.fragment,t),d=i(t),o(x.$$.fragment,t),h=i(t),o(k.$$.fragment,t),y=i(t),o(w.$$.fragment,t),v=i(t),o(E.$$.fragment,t),D=i(t),o(b.$$.fragment,t),A=i(t),o(O.$$.fragment,t),C=i(t),o(j.$$.fragment,t),S=i(t),o(N.$$.fragment,t),B=i(t),o(H.$$.fragment,t),L=i(t),o(V.$$.fragment,t),Y=i(t),o(M.$$.fragment,t),U=i(t),o(Z.$$.fragment,t)},m(t,a){$(n,t,a),u(t,e,a),$(s,t,a),u(t,c,a),$(r,t,a),u(t,d,a),$(x,t,a),u(t,h,a),$(k,t,a),u(t,y,a),$(w,t,a),u(t,v,a),$(E,t,a),u(t,D,a),$(b,t,a),u(t,A,a),$(O,t,a),u(t,C,a),$(j,t,a),u(t,S,a),$(N,t,a),u(t,B,a),$(H,t,a),u(t,L,a),$(V,t,a),u(t,Y,a),$(M,t,a),u(t,U,a),$(Z,t,a),J=!0},p(t,e){const a={};32&e&&(a.$$scope={dirty:e,ctx:t}),n.$set(a);const o={};32&e&&(o.$$scope={dirty:e,ctx:t}),s.$set(o);const $={};32&e&&($.$$scope={dirty:e,ctx:t}),x.$set($);const c={};32&e&&(c.$$scope={dirty:e,ctx:t}),k.$set(c);const r={};32&e&&(r.$$scope={dirty:e,ctx:t}),w.$set(r);const p={};32&e&&(p.$$scope={dirty:e,ctx:t}),E.$set(p);const l={};32&e&&(l.$$scope={dirty:e,ctx:t}),b.$set(l);const f={};32&e&&(f.$$scope={dirty:e,ctx:t}),O.$set(f);const m={};32&e&&(m.$$scope={dirty:e,ctx:t}),j.$set(m);const i={};32&e&&(i.$$scope={dirty:e,ctx:t}),N.$set(i);const u={};32&e&&(u.$$scope={dirty:e,ctx:t}),H.$set(u);const g={};32&e&&(g.$$scope={dirty:e,ctx:t}),V.$set(g);const d={};32&e&&(d.$$scope={dirty:e,ctx:t}),M.$set(d);const h={};32&e&&(h.$$scope={dirty:e,ctx:t}),Z.$set(h)},i(t){J||(p(n.$$.fragment,t),p(s.$$.fragment,t),p(r.$$.fragment,t),p(x.$$.fragment,t),p(k.$$.fragment,t),p(w.$$.fragment,t),p(E.$$.fragment,t),p(b.$$.fragment,t),p(O.$$.fragment,t),p(j.$$.fragment,t),p(N.$$.fragment,t),p(H.$$.fragment,t),p(V.$$.fragment,t),p(M.$$.fragment,t),p(Z.$$.fragment,t),J=!0)},o(t){l(n.$$.fragment,t),l(s.$$.fragment,t),l(r.$$.fragment,t),l(x.$$.fragment,t),l(k.$$.fragment,t),l(w.$$.fragment,t),l(E.$$.fragment,t),l(b.$$.fragment,t),l(O.$$.fragment,t),l(j.$$.fragment,t),l(N.$$.fragment,t),l(H.$$.fragment,t),l(V.$$.fragment,t),l(M.$$.fragment,t),l(Z.$$.fragment,t),J=!1},d(t){f(n,t),t&&g(e),f(s,t),t&&g(c),f(r,t),t&&g(d),f(x,t),t&&g(h),f(k,t),t&&g(y),f(w,t),t&&g(v),f(E,t),t&&g(D),f(b,t),t&&g(A),f(O,t),t&&g(C),f(j,t),t&&g(S),f(N,t),t&&g(B),f(H,t),t&&g(L),f(V,t),t&&g(Y),f(M,t),t&&g(U),f(Z,t)}}}function qt(t){let n,e;const m=[Kt];let i={$$slots:{default:[Mt]},$$scope:{ctx:t}};for(let t=0;t<m.length;t+=1)i=s(i,m[t]);return n=new j({props:i}),{c(){a(n.$$.fragment)},l(t){o(n.$$.fragment,t)},m(t,s){$(n,t,s),e=!0},p(t,[e]){const s=0&e?c(m,[r(Kt)]):{};32&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s)},i(t){e||(p(n.$$.fragment,t),e=!0)},o(t){l(n.$$.fragment,t),e=!1},d(t){f(n,t)}}}const Kt={name:"Accordion",relatedComponents:[{name:"AccordionSection",link:"./docs/components/accordion-section"}]},{name:Ut,relatedComponents:Zt}=Kt;export default class extends t{constructor(t){super(),n(this,t,null,qt,e,{})}}export{Kt as metadata};
