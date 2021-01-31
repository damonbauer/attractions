import{S as n,i as s,s as a,E as t,j as p,k as o,m as e,I as c,t as l,o as u,p as i,U as k,q as r,h as g,u as m,c as d,b as $,d as h,e as f,f as y,r as w,v,g as b}from"./client.e84cb235.js";import{L as E,H as x,P as C}from"./layout.c94d2714.js";function q(n){let s;return{c(){s=w("Custom Elements")},l(n){s=v(n,"Custom Elements")},m(n,a){y(n,s,a)},d(n){n&&h(s)}}}function A(n){let s,a,t,p,o,e,c;return{c(){s=w("Attractions components can also be used as Web Components directly using the "),a=g("a"),t=w("Custom Elements API"),p=w(". This use case is most convenient when a quick prototype is needed without including any frameworks or bundlers, where you just need to include a "),o=g("code"),e=w("script"),c=w(" tag and then use the components right away.\nAn example usage is as follows:"),this.h()},l(n){s=v(n,"Attractions components can also be used as Web Components directly using the "),a=d(n,"A",{href:!0,rel:!0});var l=$(a);t=v(l,"Custom Elements API"),l.forEach(h),p=v(n,". This use case is most convenient when a quick prototype is needed without including any frameworks or bundlers, where you just need to include a "),o=d(n,"CODE",{});var u=$(o);e=v(u,"script"),u.forEach(h),c=v(n," tag and then use the components right away.\nAn example usage is as follows:"),this.h()},h(){f(a,"href","https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements"),f(a,"rel","nofollow")},m(n,l){y(n,s,l),y(n,a,l),b(a,t),y(n,p,l),y(n,o,l),b(o,e),y(n,c,l)},d(n){n&&h(s),n&&h(a),n&&h(p),n&&h(o),n&&h(c)}}}function L(n){let s,a,t,p,o,e,c,l,u,i;return{c(){s=w("As shown in the example above, events must be listened to using "),a=g("code"),t=w("$on"),p=w(" and not "),o=g("code"),e=w("addEventListener"),c=w(". Additionally, props that are passed in the HTML are only limited to props with lowercase string names. For any other props, use "),l=g("code"),u=w("$$set"),i=w(".")},l(n){s=v(n,"As shown in the example above, events must be listened to using "),a=d(n,"CODE",{});var k=$(a);t=v(k,"$on"),k.forEach(h),p=v(n," and not "),o=d(n,"CODE",{});var r=$(o);e=v(r,"addEventListener"),r.forEach(h),c=v(n,". Additionally, props that are passed in the HTML are only limited to props with lowercase string names. For any other props, use "),l=d(n,"CODE",{});var g=$(l);u=v(g,"$$set"),g.forEach(h),i=v(n,".")},m(n,k){y(n,s,k),y(n,a,k),b(a,t),y(n,p,k),y(n,o,k),b(o,e),y(n,c,k),y(n,l,k),b(l,u),y(n,i,k)},d(n){n&&h(s),n&&h(a),n&&h(p),n&&h(o),n&&h(c),n&&h(l),n&&h(i)}}}function j(n){let s,a,t,c,k,w,v,b;return s=new x({props:{$$slots:{default:[q]},$$scope:{ctx:n}}}),t=new C({props:{$$slots:{default:[A]},$$scope:{ctx:n}}}),v=new C({props:{$$slots:{default:[L]},$$scope:{ctx:n}}}),{c(){p(s.$$.fragment),a=r(),p(t.$$.fragment),c=r(),k=g("pre"),w=r(),p(v.$$.fragment),this.h()},l(n){o(s.$$.fragment,n),a=m(n),o(t.$$.fragment,n),c=m(n),k=d(n,"PRE",{class:!0}),$(k).forEach(h),w=m(n),o(v.$$.fragment,n),this.h()},h(){f(k,"class","language-html")},m(n,p){e(s,n,p),y(n,a,p),e(t,n,p),y(n,c,p),y(n,k,p),k.innerHTML='<code class="language-html"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://unpkg.com/attractions<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-card</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-button</span> <span class="token attr-name">filled</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span> <span class="token attr-name">danger</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      Alert\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-dot</span> <span class="token style-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token style language-css"><span class="token property">margin-left</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span> <span class="token attr-name">attention</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>attention<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-button</span><span class="token punctuation">></span></span>\n\n    <span class="token comment">&lt;!-- camelCase props do not work (HTML is case-insensitive) --\x3e</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-switch</span> <span class="token attr-name">slotLeft</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      On?\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-switch</span><span class="token punctuation">></span></span>\n\n    <span class="token comment">&lt;!-- Cannot use the self-closing syntax! --\x3e</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-divider</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-divider</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-calendar</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>calendar<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-calendar</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-card</span><span class="token punctuation">></span></span>\n\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token comment">&lt;!-- more elements will be injected here --\x3e</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n    <span class="token comment">// Or using the normal constructor</span>\n    <span class="token keyword">const</span> <span class="token punctuation">&#123;</span> Button <span class="token punctuation">&#125;</span> <span class="token operator">=</span> attractions<span class="token punctuation">;</span>\n    <span class="token keyword">new</span> <span class="token class-name">Button</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>\n      target<span class="token operator">:</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">\'container\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n      props<span class="token operator">:</span> <span class="token punctuation">&#123;</span>\n        filled<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n      <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>\n    <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">const</span> calendar <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">\'calendar\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token comment">// Setting props that aren\'t string</span>\n    calendar<span class="token punctuation">.</span><span class="token function">$$set</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>\n      year<span class="token operator">:</span> <span class="token number">2020</span><span class="token punctuation">,</span>\n      month<span class="token operator">:</span> <span class="token number">11</span><span class="token punctuation">,</span>\n    <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token comment">// Listening to events</span>\n    calendar<span class="token punctuation">.</span><span class="token function">$on</span><span class="token punctuation">(</span><span class="token string">\'day-select\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>\n      <span class="token function">alert</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">You selected </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>e<span class="token punctuation">.</span>detail<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token comment">// Utils are also exposed</span>\n    <span class="token keyword">const</span> <span class="token punctuation">&#123;</span> range <span class="token punctuation">&#125;</span> <span class="token operator">=</span> attractions<span class="token punctuation">.</span>utils<span class="token punctuation">;</span>\n    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> val <span class="token keyword">of</span> <span class="token function">range</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">&#125;</span>\n  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></code>',y(n,w,p),e(v,n,p),b=!0},p(n,a){const p={};1&a&&(p.$$scope={dirty:a,ctx:n}),s.$set(p);const o={};1&a&&(o.$$scope={dirty:a,ctx:n}),t.$set(o);const e={};1&a&&(e.$$scope={dirty:a,ctx:n}),v.$set(e)},i(n){b||(l(s.$$.fragment,n),l(t.$$.fragment,n),l(v.$$.fragment,n),b=!0)},o(n){u(s.$$.fragment,n),u(t.$$.fragment,n),u(v.$$.fragment,n),b=!1},d(n){i(s,n),n&&h(a),i(t,n),n&&h(c),n&&h(k),n&&h(w),i(v,n)}}}function O(n){let s,a;const r=[T];let g={$$slots:{default:[j]},$$scope:{ctx:n}};for(let n=0;n<r.length;n+=1)g=t(g,r[n]);return s=new E({props:g}),{c(){p(s.$$.fragment)},l(n){o(s.$$.fragment,n)},m(n,t){e(s,n,t),a=!0},p(n,[a]){const t=0&a?c(r,[k(T)]):{};1&a&&(t.$$scope={dirty:a,ctx:n}),s.$set(t)},i(n){a||(l(s.$$.fragment,n),a=!0)},o(n){u(s.$$.fragment,n),a=!1},d(n){i(s,n)}}}const T={name:"Custom Elements"};export default class extends n{constructor(n){super(),s(this,n,null,O,a,{})}}export{T as metadata};
