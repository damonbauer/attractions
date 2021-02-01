import{S as n,i as s,s as a,G as t,j as e,k as o,m as p,N as c,t as r,o as l,p as u,U as i,q as $,u as f,f as m,d as k,r as h,v as d,h as g,c as y,b as v,g as w,e as x,n as b}from"./client.f5dcde0b.js";import{L as E,H as S,P as j}from"./layout.249c6c6e.js";import{C as _}from"./copyable-code.967738f9.js";import{H as C}from"./h2.3a46014c.js";import"./button.56d7da01.js";import"./classes.2453fa25.js";function I(n){let s;return{c(){s=h("Theming with Sass")},l(n){s=d(n,"Theming with Sass")},m(n,a){m(n,s,a)},d(n){n&&k(s)}}}function P(n){let s,a,t,e;return{c(){s=h("If you'd like to access/customize the Sass variables of the library or your "),a=g("code"),t=h("node_modules"),e=h(" folder is not in the root of your project, then you'll need a Sass importer. No stress though! We already built one for you.")},l(n){s=d(n,"If you'd like to access/customize the Sass variables of the library or your "),a=y(n,"CODE",{});var o=v(a);t=d(o,"node_modules"),o.forEach(k),e=d(n," folder is not in the root of your project, then you'll need a Sass importer. No stress though! We already built one for you.")},m(n,o){m(n,s,o),m(n,a,o),w(a,t),m(n,e,o)},d(n){n&&k(s),n&&k(a),n&&k(e)}}}function T(n){let s,a,t,e,o,p,c,r,l,u;return{c(){s=h("In your "),a=g("code"),t=h("svelte.config.js"),e=h(" (or wherever you configured "),o=g("code"),p=h("svelte-preprocess"),c=h("), import the "),r=g("code"),l=h("makeAttractionsImporter"),u=h(" function:")},l(n){s=d(n,"In your "),a=y(n,"CODE",{});var i=v(a);t=d(i,"svelte.config.js"),i.forEach(k),e=d(n," (or wherever you configured "),o=y(n,"CODE",{});var $=v(o);p=d($,"svelte-preprocess"),$.forEach(k),c=d(n,"), import the "),r=y(n,"CODE",{});var f=v(r);l=d(f,"makeAttractionsImporter"),f.forEach(k),u=d(n," function:")},m(n,i){m(n,s,i),m(n,a,i),w(a,t),m(n,e,i),m(n,o,i),w(o,p),m(n,c,i),m(n,r,i),w(r,l),m(n,u,i)},d(n){n&&k(s),n&&k(a),n&&k(e),n&&k(o),n&&k(c),n&&k(r),n&&k(u)}}}function O(n){let s;return{c(){s=g("pre"),this.h()},l(n){s=y(n,"PRE",{class:!0}),v(s).forEach(k),this.h()},h(){x(s,"class","language-js")},m(n,a){m(n,s,a),s.innerHTML='<code class="language-js"><span class="token keyword">const</span> sveltePreprocess <span class="token operator">=</span> <span class="token function">reqiure</span><span class="token punctuation">(</span><span class="token string">\'svelte-preprocess\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> makeAttractionsImporter <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'attractions/importer.js\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code>'},p:b,d(n){n&&k(s)}}}function A(n){let s,a,t,e;return{c(){s=h("This function can be called with no arguments to create an importer that allows importing Sass stuff from Attractions or with an option object to override the default theme and/or the "),a=g("code"),t=h("node_modules"),e=h(" path.")},l(n){s=d(n,"This function can be called with no arguments to create an importer that allows importing Sass stuff from Attractions or with an option object to override the default theme and/or the "),a=y(n,"CODE",{});var o=v(a);t=d(o,"node_modules"),o.forEach(k),e=d(n," path.")},m(n,o){m(n,s,o),m(n,a,o),w(a,t),m(n,e,o)},d(n){n&&k(s),n&&k(a),n&&k(e)}}}function D(n){let s;return{c(){s=h("Importing Sass stuff")},l(n){s=d(n,"Importing Sass stuff")},m(n,a){m(n,s,a)},d(n){n&&k(s)}}}function M(n){let s;return{c(){s=h("What is there to import in Sass? Variables, mostly, however, if you ever have a need to mimic some component from Attractions with different functionality, you also have access to the mixins that are used internally. Feel free to explore the source code for more information.")},l(n){s=d(n,"What is there to import in Sass? Variables, mostly, however, if you ever have a need to mimic some component from Attractions with different functionality, you also have access to the mixins that are used internally. Feel free to explore the source code for more information.")},m(n,a){m(n,s,a)},d(n){n&&k(s)}}}function H(n){let s,a,t,e;return{c(){s=h("Create a default importer in your "),a=g("code"),t=h("svelte.config.js"),e=h(":")},l(n){s=d(n,"Create a default importer in your "),a=y(n,"CODE",{});var o=v(a);t=d(o,"svelte.config.js"),o.forEach(k),e=d(n,":")},m(n,o){m(n,s,o),m(n,a,o),w(a,t),m(n,e,o)},d(n){n&&k(s),n&&k(a),n&&k(e)}}}function L(n){let s;return{c(){s=g("pre"),this.h()},l(n){s=y(n,"PRE",{class:!0}),v(s).forEach(k),this.h()},h(){x(s,"class","language-js")},m(n,a){m(n,s,a),s.innerHTML='<code class="language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">&#123;</span>\n  preprocess<span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token function">sveltePreprocess</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>\n      scss<span class="token operator">:</span> <span class="token punctuation">&#123;</span>\n        importer<span class="token operator">:</span> <span class="token function">makeAttractionsImporter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n      <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>\n    <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">&#125;</span><span class="token punctuation">;</span></code>'},p:b,d(n){n&&k(s)}}}function R(n){let s,a,t,e;return{c(){s=h("Then in SCSS files you'll have "),a=g("code"),t=h("~attractions/*"),e=h(" imports:")},l(n){s=d(n,"Then in SCSS files you'll have "),a=y(n,"CODE",{});var o=v(a);t=d(o,"~attractions/*"),o.forEach(k),e=d(n," imports:")},m(n,o){m(n,s,o),m(n,a,o),w(a,t),m(n,e,o)},d(n){n&&k(s),n&&k(a),n&&k(e)}}}function F(n){let s;return{c(){s=g("pre"),this.h()},l(n){s=y(n,"PRE",{class:!0}),v(s).forEach(k),this.h()},h(){x(s,"class","language-scss")},m(n,a){m(n,s,a),s.innerHTML='<code class="language-scss"><span class="token keyword">@use</span> <span class="token string">\'~attractions/_variables\'</span><span class="token punctuation">;</span>\n<span class="token keyword">@use</span> <span class="token string">\'~attractions/_mixins\'</span><span class="token punctuation">;</span>\n<span class="token keyword">@use</span> <span class="token string">\'~attractions/_appearances\'</span><span class="token punctuation">;</span>\n\n<span class="token selector">.something </span><span class="token punctuation">&#123;</span>\n  <span class="token property">color</span><span class="token punctuation">:</span> variables.<span class="token variable">$main</span><span class="token punctuation">;</span>\n\n  <span class="token comment">// See the source code to discover these internal mixins:</span>\n  <span class="token keyword">@include</span> appearances.button<span class="token punctuation">;</span>\n  <span class="token keyword">@include</span> mixins.<span class="token module-modifier keyword">show</span>-on-focus<span class="token punctuation">;</span>\n<span class="token punctuation">&#125;</span></code>'},p:b,d(n){n&&k(s)}}}function W(n){let s;return{c(){s=h("For a list of variables to customize, refer to the documentation of each component, there's a table with all the variables that this component uses.")},l(n){s=d(n,"For a list of variables to customize, refer to the documentation of each component, there's a table with all the variables that this component uses.")},m(n,a){m(n,s,a)},d(n){n&&k(s)}}}function q(n){let s;return{c(){s=h("Overriding Sass variables")},l(n){s=d(n,"Overriding Sass variables")},m(n,a){m(n,s,a)},d(n){n&&k(s)}}}function z(n){let s,a,t,e;return{c(){s=h("If you want to tweak the appearance of components to your liking, you can override any SCSS variable in Attractions by configuring the "),a=g("code"),t=h("_variables"),e=h(" module. We suggest you create a separate SCSS file for that.")},l(n){s=d(n,"If you want to tweak the appearance of components to your liking, you can override any SCSS variable in Attractions by configuring the "),a=y(n,"CODE",{});var o=v(a);t=d(o,"_variables"),o.forEach(k),e=d(n," module. We suggest you create a separate SCSS file for that.")},m(n,o){m(n,s,o),m(n,a,o),w(a,t),m(n,e,o)},d(n){n&&k(s),n&&k(a),n&&k(e)}}}function N(n){let s;return{c(){s=g("pre"),this.h()},l(n){s=y(n,"PRE",{class:!0}),v(s).forEach(k),this.h()},h(){x(s,"class","language-scss")},m(n,a){m(n,s,a),s.innerHTML='<code class="language-scss"><span class="token keyword">@forward</span> <span class="token string">\'~attractions/_variables\'</span> <span class="token module-modifier keyword">with</span> <span class="token punctuation">(</span>\n  <span class="token property"><span class="token variable">$main</span></span><span class="token punctuation">:</span> green<span class="token punctuation">,</span>\n  <span class="token property"><span class="token variable">$font</span></span><span class="token punctuation">:</span> <span class="token string">"\'Open Sans\', sans-serif"</span><span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token property"><span class="token variable">$something-else</span></span><span class="token punctuation">:</span> red<span class="token punctuation">;</span></code>'},p:b,d(n){n&&k(s)}}}function V(n){let s;return{c(){s=g("pre"),this.h()},l(n){s=y(n,"PRE",{class:!0}),v(s).forEach(k),this.h()},h(){x(s,"class","language-js")},m(n,a){m(n,s,a),s.innerHTML='<code class="language-js"><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'path\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">&#123;</span>\n  preprocess<span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token function">sveltePreprocess</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>\n      scss<span class="token operator">:</span> <span class="token punctuation">&#123;</span>\n        importer<span class="token operator">:</span> <span class="token function">makeAttractionsImporter</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>\n          <span class="token comment">// specify the path to your theme file, relative to this file</span>\n          themeFile<span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">\'static/css/theme.scss\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        <span class="token comment">// not mandatory but nice to have for concise imports</span>\n        includePaths<span class="token operator">:</span> <span class="token punctuation">[</span>path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">\'./static/css\'</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>\n    <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">&#125;</span><span class="token punctuation">;</span></code>'},p:b,d(n){n&&k(s)}}}function G(n){let s;return{c(){s=g("pre"),this.h()},l(n){s=y(n,"PRE",{class:!0}),v(s).forEach(k),this.h()},h(){x(s,"class","language-svelte")},m(n,a){m(n,s,a),s.innerHTML='<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">\n  <span class="token comment">/* because the directory of &#96;theme.scss&#96; is in &#96;includePaths&#96; */</span>\n  <span class="token atrule"><span class="token rule">@use</span> <span class="token string">\'theme.scss\'</span><span class="token punctuation">;</span></span>\n\n  <span class="token selector">div</span> <span class="token punctuation">&#123;</span>\n    <span class="token property">color</span><span class="token punctuation">:</span> theme.$main<span class="token punctuation">;</span>\n  <span class="token punctuation">&#125;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></code>'},p:b,d(n){n&&k(s)}}}function U(n){let s,a,t,e;return{c(){s=h("Changing the "),a=g("code"),t=h("node_modules"),e=h(" location")},l(n){s=d(n,"Changing the "),a=y(n,"CODE",{});var o=v(a);t=d(o,"node_modules"),o.forEach(k),e=d(n," location")},m(n,o){m(n,s,o),m(n,a,o),w(a,t),m(n,e,o)},d(n){n&&k(s),n&&k(a),n&&k(e)}}}function B(n){let s,a,t,e;return{c(){s=h("There might be cases where you would have your "),a=g("code"),t=h("node_modules"),e=h(" be in some other place than the project root (such as when you're using workspaces).")},l(n){s=d(n,"There might be cases where you would have your "),a=y(n,"CODE",{});var o=v(a);t=d(o,"node_modules"),o.forEach(k),e=d(n," be in some other place than the project root (such as when you're using workspaces).")},m(n,o){m(n,s,o),m(n,a,o),w(a,t),m(n,e,o)},d(n){n&&k(s),n&&k(a),n&&k(e)}}}function J(n){let s,a,t,e;return{c(){s=h("In that case, you should inform the importer of the correct location with the "),a=g("code"),t=h("nodeModulesPath"),e=h(" option:")},l(n){s=d(n,"In that case, you should inform the importer of the correct location with the "),a=y(n,"CODE",{});var o=v(a);t=d(o,"nodeModulesPath"),o.forEach(k),e=d(n," option:")},m(n,o){m(n,s,o),m(n,a,o),w(a,t),m(n,e,o)},d(n){n&&k(s),n&&k(a),n&&k(e)}}}function K(n){let s;return{c(){s=g("pre"),this.h()},l(n){s=y(n,"PRE",{class:!0}),v(s).forEach(k),this.h()},h(){x(s,"class","language-js")},m(n,a){m(n,s,a),s.innerHTML='<code class="language-js"><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'path\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">&#123;</span>\n  preprocess<span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token function">sveltePreprocess</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>\n      scss<span class="token operator">:</span> <span class="token punctuation">&#123;</span>\n        importer<span class="token operator">:</span> <span class="token function">makeAttractionsImporter</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>\n          themeFile<span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">\'static/css/theme.scss\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n          nodeModulesPath<span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">\'../node_modules\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n      <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>\n    <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">&#125;</span><span class="token punctuation">;</span></code>'},p:b,d(n){n&&k(s)}}}function Q(n){let s,a,t,c,i,h,d,g,y,v,w,x,b,E,Q,X,Y,Z,nn,sn,an,tn,en,on,pn,cn,rn,ln,un,$n,fn,mn,kn,hn,dn,gn,yn,vn,wn,xn,bn,En;return s=new S({props:{$$slots:{default:[I]},$$scope:{ctx:n}}}),t=new j({props:{$$slots:{default:[P]},$$scope:{ctx:n}}}),i=new j({props:{$$slots:{default:[T]},$$scope:{ctx:n}}}),d=new _({props:{filename:"svelte.config.js",$$slots:{default:[O]},$$scope:{ctx:n}}}),y=new j({props:{$$slots:{default:[A]},$$scope:{ctx:n}}}),w=new C({props:{$$slots:{default:[D]},$$scope:{ctx:n}}}),b=new j({props:{$$slots:{default:[M]},$$scope:{ctx:n}}}),Q=new j({props:{$$slots:{default:[H]},$$scope:{ctx:n}}}),Y=new _({props:{filename:"svelte.config.js",$$slots:{default:[L]},$$scope:{ctx:n}}}),nn=new j({props:{$$slots:{default:[R]},$$scope:{ctx:n}}}),an=new _({props:{$$slots:{default:[F]},$$scope:{ctx:n}}}),en=new j({props:{$$slots:{default:[W]},$$scope:{ctx:n}}}),pn=new C({props:{$$slots:{default:[q]},$$scope:{ctx:n}}}),rn=new j({props:{$$slots:{default:[z]},$$scope:{ctx:n}}}),un=new _({props:{filename:"theme.scss",$$slots:{default:[N]},$$scope:{ctx:n}}}),fn=new _({props:{filename:"svelte.config.js",$$slots:{default:[V]},$$scope:{ctx:n}}}),kn=new _({props:{filename:"some-component.svelte",$$slots:{default:[G]},$$scope:{ctx:n}}}),dn=new C({props:{$$slots:{default:[U]},$$scope:{ctx:n}}}),yn=new j({props:{$$slots:{default:[B]},$$scope:{ctx:n}}}),wn=new j({props:{$$slots:{default:[J]},$$scope:{ctx:n}}}),bn=new _({props:{filename:"svelte.config.js",$$slots:{default:[K]},$$scope:{ctx:n}}}),{c(){e(s.$$.fragment),a=$(),e(t.$$.fragment),c=$(),e(i.$$.fragment),h=$(),e(d.$$.fragment),g=$(),e(y.$$.fragment),v=$(),e(w.$$.fragment),x=$(),e(b.$$.fragment),E=$(),e(Q.$$.fragment),X=$(),e(Y.$$.fragment),Z=$(),e(nn.$$.fragment),sn=$(),e(an.$$.fragment),tn=$(),e(en.$$.fragment),on=$(),e(pn.$$.fragment),cn=$(),e(rn.$$.fragment),ln=$(),e(un.$$.fragment),$n=$(),e(fn.$$.fragment),mn=$(),e(kn.$$.fragment),hn=$(),e(dn.$$.fragment),gn=$(),e(yn.$$.fragment),vn=$(),e(wn.$$.fragment),xn=$(),e(bn.$$.fragment)},l(n){o(s.$$.fragment,n),a=f(n),o(t.$$.fragment,n),c=f(n),o(i.$$.fragment,n),h=f(n),o(d.$$.fragment,n),g=f(n),o(y.$$.fragment,n),v=f(n),o(w.$$.fragment,n),x=f(n),o(b.$$.fragment,n),E=f(n),o(Q.$$.fragment,n),X=f(n),o(Y.$$.fragment,n),Z=f(n),o(nn.$$.fragment,n),sn=f(n),o(an.$$.fragment,n),tn=f(n),o(en.$$.fragment,n),on=f(n),o(pn.$$.fragment,n),cn=f(n),o(rn.$$.fragment,n),ln=f(n),o(un.$$.fragment,n),$n=f(n),o(fn.$$.fragment,n),mn=f(n),o(kn.$$.fragment,n),hn=f(n),o(dn.$$.fragment,n),gn=f(n),o(yn.$$.fragment,n),vn=f(n),o(wn.$$.fragment,n),xn=f(n),o(bn.$$.fragment,n)},m(n,e){p(s,n,e),m(n,a,e),p(t,n,e),m(n,c,e),p(i,n,e),m(n,h,e),p(d,n,e),m(n,g,e),p(y,n,e),m(n,v,e),p(w,n,e),m(n,x,e),p(b,n,e),m(n,E,e),p(Q,n,e),m(n,X,e),p(Y,n,e),m(n,Z,e),p(nn,n,e),m(n,sn,e),p(an,n,e),m(n,tn,e),p(en,n,e),m(n,on,e),p(pn,n,e),m(n,cn,e),p(rn,n,e),m(n,ln,e),p(un,n,e),m(n,$n,e),p(fn,n,e),m(n,mn,e),p(kn,n,e),m(n,hn,e),p(dn,n,e),m(n,gn,e),p(yn,n,e),m(n,vn,e),p(wn,n,e),m(n,xn,e),p(bn,n,e),En=!0},p(n,a){const e={};1&a&&(e.$$scope={dirty:a,ctx:n}),s.$set(e);const o={};1&a&&(o.$$scope={dirty:a,ctx:n}),t.$set(o);const p={};1&a&&(p.$$scope={dirty:a,ctx:n}),i.$set(p);const c={};1&a&&(c.$$scope={dirty:a,ctx:n}),d.$set(c);const r={};1&a&&(r.$$scope={dirty:a,ctx:n}),y.$set(r);const l={};1&a&&(l.$$scope={dirty:a,ctx:n}),w.$set(l);const u={};1&a&&(u.$$scope={dirty:a,ctx:n}),b.$set(u);const $={};1&a&&($.$$scope={dirty:a,ctx:n}),Q.$set($);const f={};1&a&&(f.$$scope={dirty:a,ctx:n}),Y.$set(f);const m={};1&a&&(m.$$scope={dirty:a,ctx:n}),nn.$set(m);const k={};1&a&&(k.$$scope={dirty:a,ctx:n}),an.$set(k);const h={};1&a&&(h.$$scope={dirty:a,ctx:n}),en.$set(h);const g={};1&a&&(g.$$scope={dirty:a,ctx:n}),pn.$set(g);const v={};1&a&&(v.$$scope={dirty:a,ctx:n}),rn.$set(v);const x={};1&a&&(x.$$scope={dirty:a,ctx:n}),un.$set(x);const E={};1&a&&(E.$$scope={dirty:a,ctx:n}),fn.$set(E);const S={};1&a&&(S.$$scope={dirty:a,ctx:n}),kn.$set(S);const j={};1&a&&(j.$$scope={dirty:a,ctx:n}),dn.$set(j);const _={};1&a&&(_.$$scope={dirty:a,ctx:n}),yn.$set(_);const C={};1&a&&(C.$$scope={dirty:a,ctx:n}),wn.$set(C);const I={};1&a&&(I.$$scope={dirty:a,ctx:n}),bn.$set(I)},i(n){En||(r(s.$$.fragment,n),r(t.$$.fragment,n),r(i.$$.fragment,n),r(d.$$.fragment,n),r(y.$$.fragment,n),r(w.$$.fragment,n),r(b.$$.fragment,n),r(Q.$$.fragment,n),r(Y.$$.fragment,n),r(nn.$$.fragment,n),r(an.$$.fragment,n),r(en.$$.fragment,n),r(pn.$$.fragment,n),r(rn.$$.fragment,n),r(un.$$.fragment,n),r(fn.$$.fragment,n),r(kn.$$.fragment,n),r(dn.$$.fragment,n),r(yn.$$.fragment,n),r(wn.$$.fragment,n),r(bn.$$.fragment,n),En=!0)},o(n){l(s.$$.fragment,n),l(t.$$.fragment,n),l(i.$$.fragment,n),l(d.$$.fragment,n),l(y.$$.fragment,n),l(w.$$.fragment,n),l(b.$$.fragment,n),l(Q.$$.fragment,n),l(Y.$$.fragment,n),l(nn.$$.fragment,n),l(an.$$.fragment,n),l(en.$$.fragment,n),l(pn.$$.fragment,n),l(rn.$$.fragment,n),l(un.$$.fragment,n),l(fn.$$.fragment,n),l(kn.$$.fragment,n),l(dn.$$.fragment,n),l(yn.$$.fragment,n),l(wn.$$.fragment,n),l(bn.$$.fragment,n),En=!1},d(n){u(s,n),n&&k(a),u(t,n),n&&k(c),u(i,n),n&&k(h),u(d,n),n&&k(g),u(y,n),n&&k(v),u(w,n),n&&k(x),u(b,n),n&&k(E),u(Q,n),n&&k(X),u(Y,n),n&&k(Z),u(nn,n),n&&k(sn),u(an,n),n&&k(tn),u(en,n),n&&k(on),u(pn,n),n&&k(cn),u(rn,n),n&&k(ln),u(un,n),n&&k($n),u(fn,n),n&&k(mn),u(kn,n),n&&k(hn),u(dn,n),n&&k(gn),u(yn,n),n&&k(vn),u(wn,n),n&&k(xn),u(bn,n)}}}function X(n){let s,a;const $=[Y];let f={$$slots:{default:[Q]},$$scope:{ctx:n}};for(let n=0;n<$.length;n+=1)f=t(f,$[n]);return s=new E({props:f}),{c(){e(s.$$.fragment)},l(n){o(s.$$.fragment,n)},m(n,t){p(s,n,t),a=!0},p(n,[a]){const t=0&a?c($,[i(Y)]):{};1&a&&(t.$$scope={dirty:a,ctx:n}),s.$set(t)},i(n){a||(r(s.$$.fragment,n),a=!0)},o(n){l(s.$$.fragment,n),a=!1},d(n){u(s,n)}}}const Y={name:"Theming with Sass"};export default class extends n{constructor(n){super(),s(this,n,null,X,a,{})}}export{Y as metadata};
