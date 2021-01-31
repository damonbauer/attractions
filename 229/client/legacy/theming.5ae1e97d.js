import{S as s,i as n,s as t,J as a,p as e,q as o,r as c,N as p,Z as r,u as l,v as i,w as u,x as $,z as f,k as m,h as d,y as h,A as g,o as k,f as y,g as w,l as v,j as x,n as b}from"./client.d1b23065.js";import"./button.5d4db4f4.js";import"./classes.541c5f2a.js";import"./asyncToGenerator.756dab92.js";import{C as E}from"./copyable-code.67c9d12a.js";import{L as S,H as j,P as C}from"./layout.53586324.js";import{H as T}from"./h2.8f11ff0f.js";function I(s){let n;return{c(){n=h("Theming with Sass")},l(s){n=g(s,"Theming with Sass")},m(s,t){m(s,n,t)},d(s){s&&d(n)}}}function P(s){let n,t,a,e;return{c(){n=h("If you'd like to access/customize the Sass variables of the library or your "),t=k("code"),a=h("node_modules"),e=h(" folder is not in the root of your project, then you'll need a Sass importer. No stress though! We already built one for you.")},l(s){n=g(s,"If you'd like to access/customize the Sass variables of the library or your "),t=y(s,"CODE",{});var o=w(t);a=g(o,"node_modules"),o.forEach(d),e=g(s," folder is not in the root of your project, then you'll need a Sass importer. No stress though! We already built one for you.")},m(s,o){m(s,n,o),m(s,t,o),v(t,a),m(s,e,o)},d(s){s&&d(n),s&&d(t),s&&d(e)}}}function _(s){let n,t,a,e,o,c,p,r,l,i;return{c(){n=h("In your "),t=k("code"),a=h("rollup.config.js"),e=h(" (or wherever you configured "),o=k("code"),c=h("svelte-preprocess"),p=h("), import the "),r=k("code"),l=h("makeAttractionsImporter"),i=h(" function:")},l(s){n=g(s,"In your "),t=y(s,"CODE",{});var u=w(t);a=g(u,"rollup.config.js"),u.forEach(d),e=g(s," (or wherever you configured "),o=y(s,"CODE",{});var $=w(o);c=g($,"svelte-preprocess"),$.forEach(d),p=g(s,"), import the "),r=y(s,"CODE",{});var f=w(r);l=g(f,"makeAttractionsImporter"),f.forEach(d),i=g(s," function:")},m(s,u){m(s,n,u),m(s,t,u),v(t,a),m(s,e,u),m(s,o,u),v(o,c),m(s,p,u),m(s,r,u),v(r,l),m(s,i,u)},d(s){s&&d(n),s&&d(t),s&&d(e),s&&d(o),s&&d(p),s&&d(r),s&&d(i)}}}function O(s){let n;return{c(){n=k("pre"),this.h()},l(s){n=y(s,"PRE",{class:!0}),w(n).forEach(d),this.h()},h(){x(n,"class","language-js")},m(s,t){m(s,n,t),n.innerHTML='<code class="language-js"><span class="token keyword">import</span> sveltePreprocess <span class="token keyword">from</span> <span class="token string">\'svelte-preprocess\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> makeAttractionsImporter <span class="token keyword">from</span> <span class="token string">\'attractions/importer.js\'</span><span class="token punctuation">;</span></code>'},p:b,d(s){s&&d(n)}}}function A(s){let n,t,a,e;return{c(){n=h("This function can be called with no arguments to allow importing Sass stuff from Attractions or with an option object to override the default theme and/or the "),t=k("code"),a=h("node_modules"),e=h(" path.")},l(s){n=g(s,"This function can be called with no arguments to allow importing Sass stuff from Attractions or with an option object to override the default theme and/or the "),t=y(s,"CODE",{});var o=w(t);a=g(o,"node_modules"),o.forEach(d),e=g(s," path.")},m(s,o){m(s,n,o),m(s,t,o),v(t,a),m(s,e,o)},d(s){s&&d(n),s&&d(t),s&&d(e)}}}function D(s){let n;return{c(){n=h("Importing Sass stuff")},l(s){n=g(s,"Importing Sass stuff")},m(s,t){m(s,n,t)},d(s){s&&d(n)}}}function M(s){let n;return{c(){n=h("What is there to import in Sass? Variables, mostly, however, if you ever have a need to mimic some component from Attractions with different functionality, you also have access to the mixins that are used internally. Feel free to explore the source code for more information.")},l(s){n=g(s,"What is there to import in Sass? Variables, mostly, however, if you ever have a need to mimic some component from Attractions with different functionality, you also have access to the mixins that are used internally. Feel free to explore the source code for more information.")},m(s,t){m(s,n,t)},d(s){s&&d(n)}}}function H(s){let n,t,a,e;return{c(){n=h("Create a default importer in your "),t=k("code"),a=h("rollup.config.js"),e=h(":")},l(s){n=g(s,"Create a default importer in your "),t=y(s,"CODE",{});var o=w(t);a=g(o,"rollup.config.js"),o.forEach(d),e=g(s,":")},m(s,o){m(s,n,o),m(s,t,o),v(t,a),m(s,e,o)},d(s){s&&d(n),s&&d(t),s&&d(e)}}}function L(s){let n;return{c(){n=k("pre"),this.h()},l(s){n=y(s,"PRE",{class:!0}),w(n).forEach(d),this.h()},h(){x(n,"class","language-js")},m(s,t){m(s,n,t),n.innerHTML='<code class="language-js"><span class="token keyword">const</span> preprocess <span class="token operator">=</span> <span class="token function">sveltePreprocess</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>\n  scss<span class="token operator">:</span> <span class="token punctuation">&#123;</span>\n    importer<span class="token operator">:</span> <span class="token function">makeAttractionsImporter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">&#125;</span>\n<span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code>'},p:b,d(s){s&&d(n)}}}function R(s){let n,t,a,e;return{c(){n=h("Then in SCSS files you'll have "),t=k("code"),a=h("~attractions/*"),e=h(" imports:")},l(s){n=g(s,"Then in SCSS files you'll have "),t=y(s,"CODE",{});var o=w(t);a=g(o,"~attractions/*"),o.forEach(d),e=g(s," imports:")},m(s,o){m(s,n,o),m(s,t,o),v(t,a),m(s,e,o)},d(s){s&&d(n),s&&d(t),s&&d(e)}}}function F(s){let n;return{c(){n=k("pre"),this.h()},l(s){n=y(s,"PRE",{class:!0}),w(n).forEach(d),this.h()},h(){x(n,"class","language-scss")},m(s,t){m(s,n,t),n.innerHTML='<code class="language-scss"><span class="token keyword">@use</span> <span class="token string">\'~attractions/_variables\'</span><span class="token punctuation">;</span>\n<span class="token keyword">@use</span> <span class="token string">\'~attractions/_mixins\'</span><span class="token punctuation">;</span>\n<span class="token keyword">@use</span> <span class="token string">\'~attractions/_appearances\'</span><span class="token punctuation">;</span>\n\n<span class="token selector">.something </span><span class="token punctuation">&#123;</span>\n  <span class="token property">color</span><span class="token punctuation">:</span> variables.<span class="token variable">$main</span><span class="token punctuation">;</span>\n\n  <span class="token comment">// See the source code to discover these internal mixins:</span>\n  <span class="token keyword">@include</span> appearances.button<span class="token punctuation">;</span>\n  <span class="token keyword">@include</span> mixins.<span class="token module-modifier keyword">show</span>-on-focus<span class="token punctuation">;</span>\n<span class="token punctuation">&#125;</span></code>'},p:b,d(s){s&&d(n)}}}function W(s){let n;return{c(){n=h("For a list of variables to customize, refer to the documentation of each component, there's a table with all the variables that this component uses.")},l(s){n=g(s,"For a list of variables to customize, refer to the documentation of each component, there's a table with all the variables that this component uses.")},m(s,t){m(s,n,t)},d(s){s&&d(n)}}}function z(s){let n;return{c(){n=h("Overriding Sass variables")},l(s){n=g(s,"Overriding Sass variables")},m(s,t){m(s,n,t)},d(s){s&&d(n)}}}function N(s){let n,t,a,e;return{c(){n=h("If you want to tweak the appearance of components to your liking, you can override any SCSS variable in Attractions by configuring the "),t=k("code"),a=h("_variables"),e=h(" module. We suggest you create a separate SCSS file for that.")},l(s){n=g(s,"If you want to tweak the appearance of components to your liking, you can override any SCSS variable in Attractions by configuring the "),t=y(s,"CODE",{});var o=w(t);a=g(o,"_variables"),o.forEach(d),e=g(s," module. We suggest you create a separate SCSS file for that.")},m(s,o){m(s,n,o),m(s,t,o),v(t,a),m(s,e,o)},d(s){s&&d(n),s&&d(t),s&&d(e)}}}function V(s){let n;return{c(){n=k("pre"),this.h()},l(s){n=y(s,"PRE",{class:!0}),w(n).forEach(d),this.h()},h(){x(n,"class","language-scss")},m(s,t){m(s,n,t),n.innerHTML='<code class="language-scss"><span class="token keyword">@forward</span> <span class="token string">\'~attractions/_variables\'</span> <span class="token module-modifier keyword">with</span> <span class="token punctuation">(</span>\n  <span class="token property"><span class="token variable">$main</span></span><span class="token punctuation">:</span> green<span class="token punctuation">,</span>\n  <span class="token property"><span class="token variable">$font</span></span><span class="token punctuation">:</span> <span class="token string">"\'Open Sans\', sans-serif"</span><span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token property"><span class="token variable">$something-else</span></span><span class="token punctuation">:</span> red<span class="token punctuation">;</span></code>'},p:b,d(s){s&&d(n)}}}function q(s){let n;return{c(){n=k("pre"),this.h()},l(s){n=y(s,"PRE",{class:!0}),w(n).forEach(d),this.h()},h(){x(n,"class","language-js")},m(s,t){m(s,n,t),n.innerHTML='<code class="language-js"><span class="token keyword">const</span> preprocess <span class="token operator">=</span> <span class="token function">sveltePreprocess</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>\n  scss<span class="token operator">:</span> <span class="token punctuation">&#123;</span>\n    importer<span class="token operator">:</span> <span class="token function">makeAttractionsImporter</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>\n      <span class="token comment">// specify the path to your theme file</span>\n      themeFile<span class="token operator">:</span> <span class="token string">\'./static/css/theme.scss\'</span><span class="token punctuation">,</span>\n    <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token comment">// not mandatory but nice to have for concise imports</span>\n    includePaths<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">\'./static/css\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">&#125;</span>\n<span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code>'},p:b,d(s){s&&d(n)}}}function G(s){let n;return{c(){n=k("pre"),this.h()},l(s){n=y(s,"PRE",{class:!0}),w(n).forEach(d),this.h()},h(){x(n,"class","language-svelte")},m(s,t){m(s,n,t),n.innerHTML='<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">\n  <span class="token comment">/* because the directory of &#96;theme.scss&#96; is in &#96;includePaths&#96; */</span>\n  <span class="token atrule"><span class="token rule">@use</span> <span class="token string">\'theme.scss\'</span><span class="token punctuation">;</span></span>\n\n  <span class="token selector">div</span> <span class="token punctuation">&#123;</span>\n    <span class="token property">color</span><span class="token punctuation">:</span> theme.$main<span class="token punctuation">;</span>\n  <span class="token punctuation">&#125;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></code>'},p:b,d(s){s&&d(n)}}}function J(s){let n,t,a,e;return{c(){n=h("Changing the "),t=k("code"),a=h("node_modules"),e=h(" location")},l(s){n=g(s,"Changing the "),t=y(s,"CODE",{});var o=w(t);a=g(o,"node_modules"),o.forEach(d),e=g(s," location")},m(s,o){m(s,n,o),m(s,t,o),v(t,a),m(s,e,o)},d(s){s&&d(n),s&&d(t),s&&d(e)}}}function Z(s){let n,t,a,e;return{c(){n=h("There might be cases where you would have your "),t=k("code"),a=h("node_modules"),e=h(" be in some other place than the project root (such as when you're using workspaces).")},l(s){n=g(s,"There might be cases where you would have your "),t=y(s,"CODE",{});var o=w(t);a=g(o,"node_modules"),o.forEach(d),e=g(s," be in some other place than the project root (such as when you're using workspaces).")},m(s,o){m(s,n,o),m(s,t,o),v(t,a),m(s,e,o)},d(s){s&&d(n),s&&d(t),s&&d(e)}}}function B(s){let n,t,a,e;return{c(){n=h("In that case, you should inform the importer of the correct location with the "),t=k("code"),a=h("nodeModulesPath"),e=h(" option:")},l(s){n=g(s,"In that case, you should inform the importer of the correct location with the "),t=y(s,"CODE",{});var o=w(t);a=g(o,"nodeModulesPath"),o.forEach(d),e=g(s," option:")},m(s,o){m(s,n,o),m(s,t,o),v(t,a),m(s,e,o)},d(s){s&&d(n),s&&d(t),s&&d(e)}}}function K(s){let n;return{c(){n=k("pre"),this.h()},l(s){n=y(s,"PRE",{class:!0}),w(n).forEach(d),this.h()},h(){x(n,"class","language-js")},m(s,t){m(s,n,t),n.innerHTML='<code class="language-js"><span class="token keyword">const</span> preprocess <span class="token operator">=</span> <span class="token function">sveltePreprocess</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>\n  scss<span class="token operator">:</span> <span class="token punctuation">&#123;</span>\n    importer<span class="token operator">:</span> <span class="token function">makeAttractionsImporter</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>\n      themeFile<span class="token operator">:</span> <span class="token string">\'./static/css/theme.scss\'</span><span class="token punctuation">,</span>\n      nodeModulesPath<span class="token operator">:</span> <span class="token string">\'../node_modules\'</span><span class="token punctuation">,</span>\n    <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">&#125;</span>\n<span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code>'},p:b,d(s){s&&d(n)}}}function Q(s){let n,t,a,p,r,h,g,k,y,w,v,x,b,S,Q,U,X,Y,ss,ns,ts,as,es,os,cs,ps,rs,ls,is,us,$s,fs,ms,ds,hs,gs,ks,ys,ws,vs,xs,bs;return n=new j({props:{$$slots:{default:[I]},$$scope:{ctx:s}}}),a=new C({props:{$$slots:{default:[P]},$$scope:{ctx:s}}}),r=new C({props:{$$slots:{default:[_]},$$scope:{ctx:s}}}),g=new E({props:{filename:"rollup.config.js",$$slots:{default:[O]},$$scope:{ctx:s}}}),y=new C({props:{$$slots:{default:[A]},$$scope:{ctx:s}}}),v=new T({props:{$$slots:{default:[D]},$$scope:{ctx:s}}}),b=new C({props:{$$slots:{default:[M]},$$scope:{ctx:s}}}),Q=new C({props:{$$slots:{default:[H]},$$scope:{ctx:s}}}),X=new E({props:{filename:"rollup.config.js",$$slots:{default:[L]},$$scope:{ctx:s}}}),ss=new C({props:{$$slots:{default:[R]},$$scope:{ctx:s}}}),ts=new E({props:{$$slots:{default:[F]},$$scope:{ctx:s}}}),es=new C({props:{$$slots:{default:[W]},$$scope:{ctx:s}}}),cs=new T({props:{$$slots:{default:[z]},$$scope:{ctx:s}}}),rs=new C({props:{$$slots:{default:[N]},$$scope:{ctx:s}}}),is=new E({props:{filename:"theme.scss",$$slots:{default:[V]},$$scope:{ctx:s}}}),$s=new E({props:{filename:"rollup.config.js",$$slots:{default:[q]},$$scope:{ctx:s}}}),ms=new E({props:{filename:"some-component.svelte",$$slots:{default:[G]},$$scope:{ctx:s}}}),hs=new T({props:{$$slots:{default:[J]},$$scope:{ctx:s}}}),ks=new C({props:{$$slots:{default:[Z]},$$scope:{ctx:s}}}),ws=new C({props:{$$slots:{default:[B]},$$scope:{ctx:s}}}),xs=new E({props:{filename:"rollup.config.js",$$slots:{default:[K]},$$scope:{ctx:s}}}),{c(){e(n.$$.fragment),t=$(),e(a.$$.fragment),p=$(),e(r.$$.fragment),h=$(),e(g.$$.fragment),k=$(),e(y.$$.fragment),w=$(),e(v.$$.fragment),x=$(),e(b.$$.fragment),S=$(),e(Q.$$.fragment),U=$(),e(X.$$.fragment),Y=$(),e(ss.$$.fragment),ns=$(),e(ts.$$.fragment),as=$(),e(es.$$.fragment),os=$(),e(cs.$$.fragment),ps=$(),e(rs.$$.fragment),ls=$(),e(is.$$.fragment),us=$(),e($s.$$.fragment),fs=$(),e(ms.$$.fragment),ds=$(),e(hs.$$.fragment),gs=$(),e(ks.$$.fragment),ys=$(),e(ws.$$.fragment),vs=$(),e(xs.$$.fragment)},l(s){o(n.$$.fragment,s),t=f(s),o(a.$$.fragment,s),p=f(s),o(r.$$.fragment,s),h=f(s),o(g.$$.fragment,s),k=f(s),o(y.$$.fragment,s),w=f(s),o(v.$$.fragment,s),x=f(s),o(b.$$.fragment,s),S=f(s),o(Q.$$.fragment,s),U=f(s),o(X.$$.fragment,s),Y=f(s),o(ss.$$.fragment,s),ns=f(s),o(ts.$$.fragment,s),as=f(s),o(es.$$.fragment,s),os=f(s),o(cs.$$.fragment,s),ps=f(s),o(rs.$$.fragment,s),ls=f(s),o(is.$$.fragment,s),us=f(s),o($s.$$.fragment,s),fs=f(s),o(ms.$$.fragment,s),ds=f(s),o(hs.$$.fragment,s),gs=f(s),o(ks.$$.fragment,s),ys=f(s),o(ws.$$.fragment,s),vs=f(s),o(xs.$$.fragment,s)},m(s,e){c(n,s,e),m(s,t,e),c(a,s,e),m(s,p,e),c(r,s,e),m(s,h,e),c(g,s,e),m(s,k,e),c(y,s,e),m(s,w,e),c(v,s,e),m(s,x,e),c(b,s,e),m(s,S,e),c(Q,s,e),m(s,U,e),c(X,s,e),m(s,Y,e),c(ss,s,e),m(s,ns,e),c(ts,s,e),m(s,as,e),c(es,s,e),m(s,os,e),c(cs,s,e),m(s,ps,e),c(rs,s,e),m(s,ls,e),c(is,s,e),m(s,us,e),c($s,s,e),m(s,fs,e),c(ms,s,e),m(s,ds,e),c(hs,s,e),m(s,gs,e),c(ks,s,e),m(s,ys,e),c(ws,s,e),m(s,vs,e),c(xs,s,e),bs=!0},p(s,t){const e={};1&t&&(e.$$scope={dirty:t,ctx:s}),n.$set(e);const o={};1&t&&(o.$$scope={dirty:t,ctx:s}),a.$set(o);const c={};1&t&&(c.$$scope={dirty:t,ctx:s}),r.$set(c);const p={};1&t&&(p.$$scope={dirty:t,ctx:s}),g.$set(p);const l={};1&t&&(l.$$scope={dirty:t,ctx:s}),y.$set(l);const i={};1&t&&(i.$$scope={dirty:t,ctx:s}),v.$set(i);const u={};1&t&&(u.$$scope={dirty:t,ctx:s}),b.$set(u);const $={};1&t&&($.$$scope={dirty:t,ctx:s}),Q.$set($);const f={};1&t&&(f.$$scope={dirty:t,ctx:s}),X.$set(f);const m={};1&t&&(m.$$scope={dirty:t,ctx:s}),ss.$set(m);const d={};1&t&&(d.$$scope={dirty:t,ctx:s}),ts.$set(d);const h={};1&t&&(h.$$scope={dirty:t,ctx:s}),es.$set(h);const k={};1&t&&(k.$$scope={dirty:t,ctx:s}),cs.$set(k);const w={};1&t&&(w.$$scope={dirty:t,ctx:s}),rs.$set(w);const x={};1&t&&(x.$$scope={dirty:t,ctx:s}),is.$set(x);const E={};1&t&&(E.$$scope={dirty:t,ctx:s}),$s.$set(E);const S={};1&t&&(S.$$scope={dirty:t,ctx:s}),ms.$set(S);const j={};1&t&&(j.$$scope={dirty:t,ctx:s}),hs.$set(j);const C={};1&t&&(C.$$scope={dirty:t,ctx:s}),ks.$set(C);const T={};1&t&&(T.$$scope={dirty:t,ctx:s}),ws.$set(T);const I={};1&t&&(I.$$scope={dirty:t,ctx:s}),xs.$set(I)},i(s){bs||(l(n.$$.fragment,s),l(a.$$.fragment,s),l(r.$$.fragment,s),l(g.$$.fragment,s),l(y.$$.fragment,s),l(v.$$.fragment,s),l(b.$$.fragment,s),l(Q.$$.fragment,s),l(X.$$.fragment,s),l(ss.$$.fragment,s),l(ts.$$.fragment,s),l(es.$$.fragment,s),l(cs.$$.fragment,s),l(rs.$$.fragment,s),l(is.$$.fragment,s),l($s.$$.fragment,s),l(ms.$$.fragment,s),l(hs.$$.fragment,s),l(ks.$$.fragment,s),l(ws.$$.fragment,s),l(xs.$$.fragment,s),bs=!0)},o(s){i(n.$$.fragment,s),i(a.$$.fragment,s),i(r.$$.fragment,s),i(g.$$.fragment,s),i(y.$$.fragment,s),i(v.$$.fragment,s),i(b.$$.fragment,s),i(Q.$$.fragment,s),i(X.$$.fragment,s),i(ss.$$.fragment,s),i(ts.$$.fragment,s),i(es.$$.fragment,s),i(cs.$$.fragment,s),i(rs.$$.fragment,s),i(is.$$.fragment,s),i($s.$$.fragment,s),i(ms.$$.fragment,s),i(hs.$$.fragment,s),i(ks.$$.fragment,s),i(ws.$$.fragment,s),i(xs.$$.fragment,s),bs=!1},d(s){u(n,s),s&&d(t),u(a,s),s&&d(p),u(r,s),s&&d(h),u(g,s),s&&d(k),u(y,s),s&&d(w),u(v,s),s&&d(x),u(b,s),s&&d(S),u(Q,s),s&&d(U),u(X,s),s&&d(Y),u(ss,s),s&&d(ns),u(ts,s),s&&d(as),u(es,s),s&&d(os),u(cs,s),s&&d(ps),u(rs,s),s&&d(ls),u(is,s),s&&d(us),u($s,s),s&&d(fs),u(ms,s),s&&d(ds),u(hs,s),s&&d(gs),u(ks,s),s&&d(ys),u(ws,s),s&&d(vs),u(xs,s)}}}function U(s){let n,t;const $=[X];let f={$$slots:{default:[Q]},$$scope:{ctx:s}};for(let s=0;s<$.length;s+=1)f=a(f,$[s]);return n=new S({props:f}),{c(){e(n.$$.fragment)},l(s){o(n.$$.fragment,s)},m(s,a){c(n,s,a),t=!0},p(s,[t]){const a=0&t?p($,[r(X)]):{};1&t&&(a.$$scope={dirty:t,ctx:s}),n.$set(a)},i(s){t||(l(n.$$.fragment,s),t=!0)},o(s){i(n.$$.fragment,s),t=!1},d(s){u(n,s)}}}const X={name:"Theming with Sass"};export default class extends s{constructor(s){super(),n(this,s,null,U,t,{})}}export{X as metadata};
