import{S as t,i as e,s,h as n,j as l,q as o,c as a,b as r,k as c,u as $,d as f,e as m,Q as p,f as i,m as u,g,t as d,o as h,p as x,w as j,x as w,a1 as y,D as v,r as b,v as k,y as C}from"./client.7e5e1498.js";import{B as R}from"./button.76a3a56b.js";import{C as z}from"./card.f8762e97.js";import{L as B}from"./label.88f231ed.js";import{c as D}from"./classes.ae819103.js";function q(t,e,s){const n=t.slice();return n[2]=e[s],n}function E(t){let e,s,v,b,k;s=new B({props:{$$slots:{default:[I]},$$scope:{ctx:t}}});let C=t[1],R=[];for(let e=0;e<C.length;e+=1)R[e]=Q(q(t,C,e));const z=t=>h(R[t],1,1,(()=>{R[t]=null}));return{c(){e=n("div"),l(s.$$.fragment),v=o();for(let t=0;t<R.length;t+=1)R[t].c();this.h()},l(t){e=a(t,"DIV",{class:!0});var n=r(e);c(s.$$.fragment,n),v=$(n);for(let t=0;t<R.length;t+=1)R[t].l(n);n.forEach(f),this.h()},h(){m(e,"class",b=p(D("related-components",t[0]))+" svelte-1w8cyzt")},m(t,n){i(t,e,n),u(s,e,null),g(e,v);for(let t=0;t<R.length;t+=1)R[t].m(e,null);k=!0},p(t,n){const l={};if(32&n&&(l.$$scope={dirty:n,ctx:t}),s.$set(l),2&n){let s;for(C=t[1],s=0;s<C.length;s+=1){const l=q(t,C,s);R[s]?(R[s].p(l,n),d(R[s],1)):(R[s]=Q(l),R[s].c(),d(R[s],1),R[s].m(e,null))}for(j(),s=C.length;s<R.length;s+=1)z(s);w()}(!k||1&n&&b!==(b=p(D("related-components",t[0]))+" svelte-1w8cyzt"))&&m(e,"class",b)},i(t){if(!k){d(s.$$.fragment,t);for(let t=0;t<C.length;t+=1)d(R[t]);k=!0}},o(t){h(s.$$.fragment,t),R=R.filter(Boolean);for(let t=0;t<R.length;t+=1)h(R[t]);k=!1},d(t){t&&f(e),x(s),y(R,t)}}}function I(t){let e;return{c(){e=b("Related Components")},l(t){e=k(t,"Related Components")},m(t,s){i(t,e,s)},d(t){t&&f(e)}}}function L(t){let e,s=t[2].name+"";return{c(){e=b(s)},l(t){e=k(t,s)},m(t,s){i(t,e,s)},p(t,n){2&n&&s!==(s=t[2].name+"")&&C(e,s)},d(t){t&&f(e)}}}function N(t){let e,s,n;return e=new R({props:{href:t[2].link,$$slots:{default:[L]},$$scope:{ctx:t}}}),{c(){l(e.$$.fragment),s=o()},l(t){c(e.$$.fragment,t),s=$(t)},m(t,l){u(e,t,l),i(t,s,l),n=!0},p(t,s){const n={};2&s&&(n.href=t[2].link),34&s&&(n.$$scope={dirty:s,ctx:t}),e.$set(n)},i(t){n||(d(e.$$.fragment,t),n=!0)},o(t){h(e.$$.fragment,t),n=!1},d(t){x(e,t),t&&f(s)}}}function Q(t){let e,s;return e=new z({props:{$$slots:{default:[N]},$$scope:{ctx:t}}}),{c(){l(e.$$.fragment)},l(t){c(e.$$.fragment,t)},m(t,n){u(e,t,n),s=!0},p(t,s){const n={};34&s&&(n.$$scope={dirty:s,ctx:t}),e.$set(n)},i(t){s||(d(e.$$.fragment,t),s=!0)},o(t){h(e.$$.fragment,t),s=!1},d(t){x(e,t)}}}function S(t){let e,s,n=0!==t[1].length&&E(t);return{c(){n&&n.c(),e=v()},l(t){n&&n.l(t),e=v()},m(t,l){n&&n.m(t,l),i(t,e,l),s=!0},p(t,[s]){0!==t[1].length?n?(n.p(t,s),2&s&&d(n,1)):(n=E(t),n.c(),d(n,1),n.m(e.parentNode,e)):n&&(j(),h(n,1,1,(()=>{n=null})),w())},i(t){s||(d(n),s=!0)},o(t){h(n),s=!1},d(t){n&&n.d(t),t&&f(e)}}}function V(t,e,s){let{class:n=null}=e,{components:l}=e;return t.$$set=t=>{"class"in t&&s(0,n=t.class),"components"in t&&s(1,l=t.components)},[n,l]}class A extends t{constructor(t){super(),e(this,t,V,S,s,{class:0,components:1})}}export{A as R};