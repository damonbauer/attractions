import{S as t,i as e,s,I as o,D as n,f as r,N as a,U as l,w as i,o as c,p,x as f,j as m,t as u,m as h,d as $,q as d,h as T,u as g,c as b,b as k,e as v,M as D,T as E,_ as O,G as I,k as M,W as _}from"./client.59ec6143.js";import{S as w}from"./snackbar.97f8cfe8.js";var x={},L=Object.freeze({TOP_LEFT:"top left",TOP_MIDDLE:"top h-middle",TOP_RIGHT:"top right",MIDDLE_RIGHT:"v-middle right",BOTTOM_RIGHT:"bottom right",BOTTOM_MIDDLE:"bottom h-middle",BOTTOM_LEFT:"bottom left",MIDDLE_LEFT:"v-middle left"});function P(t,e,s){const o=t.slice();return o[6]=e[s],o}const S=t=>({}),j=t=>({showSnackbar:t[1]});function B(t,e){let s,o,d,T;const g=[e[6].props];var b=e[6].component;function k(t){let e={};for(let t=0;t<g.length;t+=1)e=I(e,g[t]);return{props:e}}return b&&(o=new b(k())),{key:t,first:null,c(){s=n(),o&&m(o.$$.fragment),d=n(),this.h()},l(t){s=n(),o&&M(o.$$.fragment,t),d=n(),this.h()},h(){this.first=s},m(t,e){r(t,s,e),o&&h(o,t,e),r(t,d,e),T=!0},p(t,s){e=t;const n=4&s?a(g,[l(e[6].props)]):{};if(b!==(b=e[6].component)){if(o){i();const t=o;c(t.$$.fragment,1,0,(()=>{p(t,1)})),f()}b?(o=new b(k()),m(o.$$.fragment),u(o.$$.fragment,1),h(o,d.parentNode,d)):o=null}else b&&o.$set(n)},i(t){T||(o&&u(o.$$.fragment,t),T=!0)},o(t){o&&c(o.$$.fragment,t),T=!1},d(t){t&&$(s),t&&$(d),o&&p(o,t)}}}function F(t){let e,s,n,a,l=[],p=new Map;const m=t[4].default,h=o(m,t,t[3],j);let O=[...t[2].values()];const I=t=>t[6];for(let e=0;e<O.length;e+=1){let s=P(t,O,e),o=I(s);p.set(o,l[e]=B(o,s))}return{c(){h&&h.c(),e=d(),s=T("div");for(let t=0;t<l.length;t+=1)l[t].c();this.h()},l(t){h&&h.l(t),e=g(t),s=b(t,"DIV",{class:!0});var o=k(s);for(let t=0;t<l.length;t+=1)l[t].l(o);o.forEach($),this.h()},h(){v(s,"class",n="snackbar-stack "+t[0]+" svelte-6pqri7")},m(t,o){h&&h.m(t,o),r(t,e,o),r(t,s,o);for(let t=0;t<l.length;t+=1)l[t].m(s,null);a=!0},p(t,[e]){h&&h.p&&8&e&&D(h,m,t,t[3],e,S,j),4&e&&(O=[...t[2].values()],i(),l=E(l,e,I,1,t,O,p,s,_,B,null,P),f()),(!a||1&e&&n!==(n="snackbar-stack "+t[0]+" svelte-6pqri7"))&&v(s,"class",n)},i(t){if(!a){u(h,t);for(let t=0;t<O.length;t+=1)u(l[t]);a=!0}},o(t){c(h,t);for(let t=0;t<l.length;t+=1)c(l[t]);a=!1},d(t){h&&h.d(t),t&&$(e),t&&$(s);for(let t=0;t<l.length;t+=1)l[t].d()}}}function G(t,e,s){let{$$slots:o={},$$scope:n}=e,{position:r=L.BOTTOM_LEFT}=e,a=new Set;function l(t,e){a.delete(t),"function"==typeof t.resolveExpiredPromise&&t.resolveExpiredPromise(!e),s(2,a)}function i(t){const{component:e=w,props:o={},duration:n=4e3}=t,r={component:e,props:o},i=o.closeCallback;return r.props.closeCallback=function(){clearTimeout(r.timeoutID),l(r,!0),"function"==typeof i&&i()},r.timeoutID=setTimeout(l,n,r,!1),a.add(r),s(2,a),{close:r.props.closeCallback,expired:new Promise((t=>r.resolveExpiredPromise=t))}}return O(x,i),t.$$set=t=>{"position"in t&&s(0,r=t.position),"$$scope"in t&&s(3,n=t.$$scope)},[r,i,a,n,o]}class q extends t{constructor(t){super(),e(this,t,G,F,s,{position:0,showSnackbar:1})}get showSnackbar(){return this.$$.ctx[1]}}export{q as S};
