import{S as t,i as e,s,h as n,j as l,q as o,c as a,b as r,k as c,u as $,d as f,e as m,Q as i,f as p,m as u,g as d,t as g,o as h,p as x,w as b,x as j,a1 as v,L as w,r as y,v as k,y as C}from"./client.e84cb235.js";import{B as R}from"./button.e1955733.js";import{c as B}from"./classes.ae819103.js";import{C as L}from"./card.7f90eb28.js";import{L as q}from"./label.3048b4ca.js";function D(t,e,s){const n=t.slice();return n[2]=e[s],n}function E(t){let e,s,w,y,k;s=new q({props:{$$slots:{default:[I]},$$scope:{ctx:t}}});let C=t[1],R=[];for(let e=0;e<C.length;e+=1)R[e]=S(D(t,C,e));const L=t=>h(R[t],1,1,(()=>{R[t]=null}));return{c(){e=n("div"),l(s.$$.fragment),w=o();for(let t=0;t<R.length;t+=1)R[t].c();this.h()},l(t){e=a(t,"DIV",{class:!0});var n=r(e);c(s.$$.fragment,n),w=$(n);for(let t=0;t<R.length;t+=1)R[t].l(n);n.forEach(f),this.h()},h(){m(e,"class",y=i(B("related-components",t[0]))+" svelte-1ieb9od")},m(t,n){p(t,e,n),u(s,e,null),d(e,w);for(let t=0;t<R.length;t+=1)R[t].m(e,null);k=!0},p(t,n){const l={};if(32&n&&(l.$$scope={dirty:n,ctx:t}),s.$set(l),2&n){let s;for(C=t[1],s=0;s<C.length;s+=1){const l=D(t,C,s);R[s]?(R[s].p(l,n),g(R[s],1)):(R[s]=S(l),R[s].c(),g(R[s],1),R[s].m(e,null))}for(b(),s=C.length;s<R.length;s+=1)L(s);j()}(!k||1&n&&y!==(y=i(B("related-components",t[0]))+" svelte-1ieb9od"))&&m(e,"class",y)},i(t){if(!k){g(s.$$.fragment,t);for(let t=0;t<C.length;t+=1)g(R[t]);k=!0}},o(t){h(s.$$.fragment,t),R=R.filter(Boolean);for(let t=0;t<R.length;t+=1)h(R[t]);k=!1},d(t){t&&f(e),x(s),v(R,t)}}}function I(t){let e;return{c(){e=y("Related Components")},l(t){e=k(t,"Related Components")},m(t,s){p(t,e,s)},d(t){t&&f(e)}}}function N(t){let e,s=t[2].name+"";return{c(){e=y(s)},l(t){e=k(t,s)},m(t,s){p(t,e,s)},p(t,n){2&n&&s!==(s=t[2].name+"")&&C(e,s)},d(t){t&&f(e)}}}function Q(t){let e,s,n;return e=new R({props:{href:t[2].link,$$slots:{default:[N]},$$scope:{ctx:t}}}),{c(){l(e.$$.fragment),s=o()},l(t){c(e.$$.fragment,t),s=$(t)},m(t,l){u(e,t,l),p(t,s,l),n=!0},p(t,s){const n={};2&s&&(n.href=t[2].link),34&s&&(n.$$scope={dirty:s,ctx:t}),e.$set(n)},i(t){n||(g(e.$$.fragment,t),n=!0)},o(t){h(e.$$.fragment,t),n=!1},d(t){x(e,t),t&&f(s)}}}function S(t){let e,s;return e=new L({props:{$$slots:{default:[Q]},$$scope:{ctx:t}}}),{c(){l(e.$$.fragment)},l(t){c(e.$$.fragment,t)},m(t,n){u(e,t,n),s=!0},p(t,s){const n={};34&s&&(n.$$scope={dirty:s,ctx:t}),e.$set(n)},i(t){s||(g(e.$$.fragment,t),s=!0)},o(t){h(e.$$.fragment,t),s=!1},d(t){x(e,t)}}}function V(t){let e,s,n=0!==t[1].length&&E(t);return{c(){n&&n.c(),e=w()},l(t){n&&n.l(t),e=w()},m(t,l){n&&n.m(t,l),p(t,e,l),s=!0},p(t,[s]){0!==t[1].length?n?(n.p(t,s),2&s&&g(n,1)):(n=E(t),n.c(),g(n,1),n.m(e.parentNode,e)):n&&(b(),h(n,1,1,(()=>{n=null})),j())},i(t){s||(g(n),s=!0)},o(t){h(n),s=!1},d(t){n&&n.d(t),t&&f(e)}}}function z(t,e,s){let{class:n=null}=e,{components:l}=e;return t.$$set=t=>{"class"in t&&s(0,n=t.class),"components"in t&&s(1,l=t.components)},[n,l]}class A extends t{constructor(t){super(),e(this,t,z,V,s,{class:0,components:1})}}export{A as R};