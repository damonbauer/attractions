import{S as s,i as n,s as a,p as t,q as e,r as o,u as r,v as c,w as p,x as i,o as l,z as u,f as $,g as m,h as f,j as d,k as g,y as k,A as h,l as y,L as v,T as x,Z as w}from"./client.22aece01.js";import{H as S,P as E,L as b}from"./layout.eb704385.js";import{L as A}from"./layout-no-head.5845e4c2.js";import{H as O}from"./h2.80439c26.js";function j(s){let n;return{c(){n=k("Migration Guide")},l(s){n=h(s,"Migration Guide")},m(s,a){g(s,n,a)},d(s){s&&f(n)}}}function P(s){let n;return{c(){n=k("Here you may find guidance on upgrading Attractions from one major version to another.")},l(s){n=h(s,"Here you may find guidance on upgrading Attractions from one major version to another.")},m(s,a){g(s,n,a)},d(s){s&&f(n)}}}function H(s){let n;return{c(){n=k("From v2.x to v3.x")},l(s){n=h(s,"From v2.x to v3.x")},m(s,a){g(s,n,a)},d(s){s&&f(n)}}}function D(s){let n;return{c(){n=k("The main change in version 3 is the migration to Sass modules.")},l(s){n=h(s,"The main change in version 3 is the migration to Sass modules.")},m(s,a){g(s,n,a)},d(s){s&&f(n)}}}function M(s){let n,a,t,e,o,r,c;return{c(){n=k("If you have existing code that used Sass for styling and was using the old "),a=l("code"),t=k("@import"),e=k(" statements, consider using the automatic "),o=l("a"),r=k("Sass Migrator"),c=k(" tool first."),this.h()},l(s){n=h(s,"If you have existing code that used Sass for styling and was using the old "),a=$(s,"CODE",{});var p=m(a);t=h(p,"@import"),p.forEach(f),e=h(s," statements, consider using the automatic "),o=$(s,"A",{href:!0,rel:!0});var i=m(o);r=h(i,"Sass Migrator"),i.forEach(f),c=h(s," tool first."),this.h()},h(){d(o,"href","https://sass-lang.com/documentation/cli/migrator"),d(o,"rel","nofollow")},m(s,p){g(s,n,p),g(s,a,p),y(a,t),g(s,e,p),g(s,o,p),y(o,r),g(s,c,p)},d(s){s&&f(n),s&&f(a),s&&f(e),s&&f(o),s&&f(c)}}}function C(s){let n,a,t,e,o,r,c,p,i,u,d,v;return{c(){n=l("strong"),a=k("Heads up"),t=k(": if your styles used imports that relied on "),e=l("code"),o=k("includePaths"),r=k(", you can still make Sass Migrator understand them by setting the "),c=l("code"),p=k("SASS_PATH"),i=k(" environment variable to the path that you previously had in your "),u=l("code"),d=k("includePaths"),v=k(" Sass compiler option.")},l(s){n=$(s,"STRONG",{});var l=m(n);a=h(l,"Heads up"),l.forEach(f),t=h(s,": if your styles used imports that relied on "),e=$(s,"CODE",{});var g=m(e);o=h(g,"includePaths"),g.forEach(f),r=h(s,", you can still make Sass Migrator understand them by setting the "),c=$(s,"CODE",{});var k=m(c);p=h(k,"SASS_PATH"),k.forEach(f),i=h(s," environment variable to the path that you previously had in your "),u=$(s,"CODE",{});var y=m(u);d=h(y,"includePaths"),y.forEach(f),v=h(s," Sass compiler option.")},m(s,l){g(s,n,l),y(n,a),g(s,t,l),g(s,e,l),y(e,o),g(s,r,l),g(s,c,l),y(c,p),g(s,i,l),g(s,u,l),y(u,d),g(s,v,l)},d(s){s&&f(n),s&&f(t),s&&f(e),s&&f(r),s&&f(c),s&&f(i),s&&f(u),s&&f(v)}}}function T(s){let n,a,t,e,o,r,c;return{c(){n=k("Once your code is ready for Sass modules, replace Node Sass ("),a=l("code"),t=k("node-sass"),e=k(") with Dart Sass ("),o=l("code"),r=k("sass"),c=k(").")},l(s){n=h(s,"Once your code is ready for Sass modules, replace Node Sass ("),a=$(s,"CODE",{});var p=m(a);t=h(p,"node-sass"),p.forEach(f),e=h(s,") with Dart Sass ("),o=$(s,"CODE",{});var i=m(o);r=h(i,"sass"),i.forEach(f),c=h(s,").")},m(s,p){g(s,n,p),g(s,a,p),y(a,t),g(s,e,p),g(s,o,p),y(o,r),g(s,c,p)},d(s){s&&f(n),s&&f(a),s&&f(e),s&&f(o),s&&f(c)}}}function L(s){let n,a,t,e;return{c(){n=k("Update your "),a=l("code"),t=k("rollup.config.js"),e=k(" to use the new Attractions importers:")},l(s){n=h(s,"Update your "),a=$(s,"CODE",{});var o=m(a);t=h(o,"rollup.config.js"),o.forEach(f),e=h(s," to use the new Attractions importers:")},m(s,o){g(s,n,o),g(s,a,o),y(a,t),g(s,e,o)},d(s){s&&f(n),s&&f(a),s&&f(e)}}}function _(s){let n,a,t,e;return{c(){n=k("Lastly, if your "),a=l("code"),t=k("_attractions-theme.scss"),e=k(" had any variable overrides, move them to the module configuration.")},l(s){n=h(s,"Lastly, if your "),a=$(s,"CODE",{});var o=m(a);t=h(o,"_attractions-theme.scss"),o.forEach(f),e=h(s," had any variable overrides, move them to the module configuration.")},m(s,o){g(s,n,o),g(s,a,o),y(a,t),g(s,e,o)},d(s){s&&f(n),s&&f(a),s&&f(e)}}}function I(s){let n;return{c(){n=k("Before:")},l(s){n=h(s,"Before:")},m(s,a){g(s,n,a)},d(s){s&&f(n)}}}function G(s){let n;return{c(){n=k("After:")},l(s){n=h(s,"After:")},m(s,a){g(s,n,a)},d(s){s&&f(n)}}}function R(s){let n,a,k,h,y,v,x,w,b,A,R,F,N,B,U,q,z,Z,J,K,Q,V,W,X,Y,ss,ns,as;return n=new S({props:{$$slots:{default:[j]},$$scope:{ctx:s}}}),k=new E({props:{$$slots:{default:[P]},$$scope:{ctx:s}}}),y=new O({props:{$$slots:{default:[H]},$$scope:{ctx:s}}}),x=new E({props:{$$slots:{default:[D]},$$scope:{ctx:s}}}),b=new E({props:{$$slots:{default:[M]},$$scope:{ctx:s}}}),R=new E({props:{$$slots:{default:[C]},$$scope:{ctx:s}}}),N=new E({props:{$$slots:{default:[T]},$$scope:{ctx:s}}}),U=new E({props:{$$slots:{default:[L]},$$scope:{ctx:s}}}),J=new E({props:{$$slots:{default:[_]},$$scope:{ctx:s}}}),Q=new E({props:{$$slots:{default:[I]},$$scope:{ctx:s}}}),Y=new E({props:{$$slots:{default:[G]},$$scope:{ctx:s}}}),{c(){t(n.$$.fragment),a=i(),t(k.$$.fragment),h=i(),t(y.$$.fragment),v=i(),t(x.$$.fragment),w=i(),t(b.$$.fragment),A=i(),t(R.$$.fragment),F=i(),t(N.$$.fragment),B=i(),t(U.$$.fragment),q=i(),z=l("pre"),Z=i(),t(J.$$.fragment),K=i(),t(Q.$$.fragment),V=i(),W=l("pre"),X=i(),t(Y.$$.fragment),ss=i(),ns=l("pre"),this.h()},l(s){e(n.$$.fragment,s),a=u(s),e(k.$$.fragment,s),h=u(s),e(y.$$.fragment,s),v=u(s),e(x.$$.fragment,s),w=u(s),e(b.$$.fragment,s),A=u(s),e(R.$$.fragment,s),F=u(s),e(N.$$.fragment,s),B=u(s),e(U.$$.fragment,s),q=u(s),z=$(s,"PRE",{class:!0}),m(z).forEach(f),Z=u(s),e(J.$$.fragment,s),K=u(s),e(Q.$$.fragment,s),V=u(s),W=$(s,"PRE",{class:!0}),m(W).forEach(f),X=u(s),e(Y.$$.fragment,s),ss=u(s),ns=$(s,"PRE",{class:!0}),m(ns).forEach(f),this.h()},h(){d(z,"class","language-js"),d(W,"class","language-scss"),d(ns,"class","language-scss")},m(s,t){o(n,s,t),g(s,a,t),o(k,s,t),g(s,h,t),o(y,s,t),g(s,v,t),o(x,s,t),g(s,w,t),o(b,s,t),g(s,A,t),o(R,s,t),g(s,F,t),o(N,s,t),g(s,B,t),o(U,s,t),g(s,q,t),g(s,z,t),z.innerHTML='<code class="language-js"><span class="token keyword">import</span> autoPreprocess <span class="token keyword">from</span> <span class="token string">\'svelte-preprocess\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> makeAttractionsImporter <span class="token keyword">from</span> <span class="token string">\'attractions/importer.js\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> preprocessChain <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token function">autoPreprocess</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>\n    scss<span class="token operator">:</span> <span class="token punctuation">&#123;</span>\n      importer<span class="token operator">:</span> <span class="token function">makeAttractionsImporter</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>\n        <span class="token comment">// If you previously had a file that was overriding Attractions variables,</span>\n        <span class="token comment">//   provide the path to it here.</span>\n        <span class="token comment">// If it was empty, you may delete it, omit this parameter</span>\n        <span class="token comment">//   and call the function with no arguments.</span>\n        themeFile<span class="token operator">:</span> <span class="token string">\'./static/css/_attractions-theme.scss\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n\n      includePaths<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">\'./static/css\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>\n  <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span></code>',g(s,Z,t),o(J,s,t),g(s,K,t),o(Q,s,t),g(s,V,t),g(s,W,t),W.innerHTML='<code class="language-scss"><span class="token keyword">@import</span> <span class="token string">\'_attractions-theme.scss\'</span><span class="token punctuation">;</span>\n<span class="token property"><span class="token variable">$font</span></span><span class="token punctuation">:</span> <span class="token string">\'Open Sans\'</span><span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>\n<span class="token property"><span class="token variable">$main</span></span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>\n<span class="token property"><span class="token variable">$my-custom-variable</span></span><span class="token punctuation">:</span> 1px<span class="token punctuation">;</span></code>',g(s,X,t),o(Y,s,t),g(s,ss,t),g(s,ns,t),ns.innerHTML='<code class="language-scss"><span class="token keyword">@forward</span> <span class="token string">"~attractions/_variables"</span> <span class="token module-modifier keyword">with</span> <span class="token punctuation">(</span>\n  <span class="token property"><span class="token variable">$font</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token string">\'Open Sans\'</span><span class="token punctuation">,</span> sans-serif<span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token property"><span class="token variable">$main</span></span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token property"><span class="token variable">$my-custom-variable</span></span><span class="token punctuation">:</span> 1px<span class="token punctuation">;</span></code>',as=!0},p(s,a){const t={};1&a&&(t.$$scope={dirty:a,ctx:s}),n.$set(t);const e={};1&a&&(e.$$scope={dirty:a,ctx:s}),k.$set(e);const o={};1&a&&(o.$$scope={dirty:a,ctx:s}),y.$set(o);const r={};1&a&&(r.$$scope={dirty:a,ctx:s}),x.$set(r);const c={};1&a&&(c.$$scope={dirty:a,ctx:s}),b.$set(c);const p={};1&a&&(p.$$scope={dirty:a,ctx:s}),R.$set(p);const i={};1&a&&(i.$$scope={dirty:a,ctx:s}),N.$set(i);const l={};1&a&&(l.$$scope={dirty:a,ctx:s}),U.$set(l);const u={};1&a&&(u.$$scope={dirty:a,ctx:s}),J.$set(u);const $={};1&a&&($.$$scope={dirty:a,ctx:s}),Q.$set($);const m={};1&a&&(m.$$scope={dirty:a,ctx:s}),Y.$set(m)},i(s){as||(r(n.$$.fragment,s),r(k.$$.fragment,s),r(y.$$.fragment,s),r(x.$$.fragment,s),r(b.$$.fragment,s),r(R.$$.fragment,s),r(N.$$.fragment,s),r(U.$$.fragment,s),r(J.$$.fragment,s),r(Q.$$.fragment,s),r(Y.$$.fragment,s),as=!0)},o(s){c(n.$$.fragment,s),c(k.$$.fragment,s),c(y.$$.fragment,s),c(x.$$.fragment,s),c(b.$$.fragment,s),c(R.$$.fragment,s),c(N.$$.fragment,s),c(U.$$.fragment,s),c(J.$$.fragment,s),c(Q.$$.fragment,s),c(Y.$$.fragment,s),as=!1},d(s){p(n,s),s&&f(a),p(k,s),s&&f(h),p(y,s),s&&f(v),p(x,s),s&&f(w),p(b,s),s&&f(A),p(R,s),s&&f(F),p(N,s),s&&f(B),p(U,s),s&&f(q),s&&f(z),s&&f(Z),p(J,s),s&&f(K),p(Q,s),s&&f(V),s&&f(W),s&&f(X),p(Y,s),s&&f(ss),s&&f(ns)}}}function F(s){let n,a;return n=new A({props:{$$slots:{default:[R]},$$scope:{ctx:s}}}),{c(){t(n.$$.fragment)},l(s){e(n.$$.fragment,s)},m(s,t){o(n,s,t),a=!0},p(s,[a]){const t={};1&a&&(t.$$scope={dirty:a,ctx:s}),n.$set(t)},i(s){a||(r(n.$$.fragment,s),a=!0)},o(s){c(n.$$.fragment,s),a=!1},d(s){p(n,s)}}}class N extends s{constructor(s){super(),n(this,s,null,F,a,{})}}function B(s){let n,a;return n=new N({}),{c(){t(n.$$.fragment)},l(s){e(n.$$.fragment,s)},m(s,t){o(n,s,t),a=!0},i(s){a||(r(n.$$.fragment,s),a=!0)},o(s){c(n.$$.fragment,s),a=!1},d(s){p(n,s)}}}function U(s){let n,a;const i=[q];let l={$$slots:{default:[B]},$$scope:{ctx:s}};for(let s=0;s<i.length;s+=1)l=v(l,i[s]);return n=new b({props:l}),{c(){t(n.$$.fragment)},l(s){e(n.$$.fragment,s)},m(s,t){o(n,s,t),a=!0},p(s,[a]){const t=0&a?x(i,[w(q)]):{};1&a&&(t.$$scope={dirty:a,ctx:s}),n.$set(t)},i(s){a||(r(n.$$.fragment,s),a=!0)},o(s){c(n.$$.fragment,s),a=!1},d(s){p(n,s)}}}const q={name:"Migration Guide"};export default class extends s{constructor(s){super(),n(this,s,null,U,a,{})}}export{q as metadata};
