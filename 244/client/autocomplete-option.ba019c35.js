import{S as t,i as n,s as e,D as l,f as s,d as c,h as r,c as o,b as a,e as i,a1 as u,q as h,u as f,g as d,l as p,a2 as m,n as g,F as v,r as k,v as $,y}from"./client.5603f272.js";function E(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function q(t,n,e){const l=t.slice();return l[6]=n[e],l}function b(t,n,e){const l=t.slice();return l[6]=n[e],l}function x(t){let n,e=t[6].content+"";return{c(){n=k(e)},l(t){n=$(t,e)},m(t,e){s(t,n,e)},p(t,l){1&l&&e!==(e=t[6].content+"")&&y(n,e)},d(t){t&&c(n)}}}function A(t){let n,e,l=t[6].content+"";return{c(){n=r("mark"),e=k(l),this.h()},l(t){n=o(t,"MARK",{class:!0});var s=a(n);e=$(s,l),s.forEach(c),this.h()},h(){i(n,"class","svelte-fkdvgp")},m(t,l){s(t,n,l),d(n,e)},p(t,n){1&n&&l!==(l=t[6].content+"")&&y(e,l)},d(t){t&&c(n)}}}function N(t){let n;function e(t,n){return t[6].marked?A:x}let r=e(t),o=r(t);return{c(){o.c(),n=l()},l(t){o.l(t),n=l()},m(t,e){o.m(t,e),s(t,n,e)},p(t,l){r===(r=e(t))&&o?o.p(t,l):(o.d(1),o=r(t),o&&(o.c(),o.m(n.parentNode,n)))},d(t){o.d(t),t&&c(n)}}}function R(t){let n,e=t[1](t[0].details),l=[];for(let n=0;n<e.length;n+=1)l[n]=K(q(t,e,n));return{c(){n=r("div");for(let t=0;t<l.length;t+=1)l[t].c();this.h()},l(t){n=o(t,"DIV",{class:!0});var e=a(n);for(let t=0;t<l.length;t+=1)l[t].l(e);e.forEach(c),this.h()},h(){i(n,"class","subtext svelte-fkdvgp")},m(t,e){s(t,n,e);for(let t=0;t<l.length;t+=1)l[t].m(n,null)},p(t,s){if(3&s){let c;for(e=t[1](t[0].details),c=0;c<e.length;c+=1){const r=q(t,e,c);l[c]?l[c].p(r,s):(l[c]=K(r),l[c].c(),l[c].m(n,null))}for(;c<l.length;c+=1)l[c].d(1);l.length=e.length}},d(t){t&&c(n),u(l,t)}}}function D(t){let n,e=t[6].content+"";return{c(){n=k(e)},l(t){n=$(t,e)},m(t,e){s(t,n,e)},p(t,l){1&l&&e!==(e=t[6].content+"")&&y(n,e)},d(t){t&&c(n)}}}function I(t){let n,e,l=t[6].content+"";return{c(){n=r("mark"),e=k(l),this.h()},l(t){n=o(t,"MARK",{class:!0});var s=a(n);e=$(s,l),s.forEach(c),this.h()},h(){i(n,"class","svelte-fkdvgp")},m(t,l){s(t,n,l),d(n,e)},p(t,n){1&n&&l!==(l=t[6].content+"")&&y(e,l)},d(t){t&&c(n)}}}function K(t){let n;function e(t,n){return t[6].marked?I:D}let r=e(t),o=r(t);return{c(){o.c(),n=l()},l(t){o.l(t),n=l()},m(t,e){o.m(t,e),s(t,n,e)},p(t,l){r===(r=e(t))&&o?o.p(t,l):(o.d(1),o=r(t),o&&(o.c(),o.m(n.parentNode,n)))},d(t){o.d(t),t&&c(n)}}}function M(t){let n,e,l,v,k,$=t[1](t[0].name),y=[];for(let n=0;n<$.length;n+=1)y[n]=N(b(t,$,n));let E=t[0].details&&R(t);return{c(){n=r("li"),e=r("button");for(let t=0;t<y.length;t+=1)y[t].c();l=h(),E&&E.c(),this.h()},l(t){n=o(t,"LI",{class:!0});var s=a(n);e=o(s,"BUTTON",{type:!0,class:!0});var r=a(e);for(let t=0;t<y.length;t+=1)y[t].l(r);l=f(r),E&&E.l(r),r.forEach(c),s.forEach(c),this.h()},h(){i(e,"type","button"),i(e,"class","svelte-fkdvgp"),i(n,"class","svelte-fkdvgp")},m(c,r){s(c,n,r),d(n,e);for(let t=0;t<y.length;t+=1)y[t].m(e,null);d(e,l),E&&E.m(e,null),v||(k=p(n,"click",m(t[4])),v=!0)},p(t,[n]){if(3&n){let s;for($=t[1](t[0].name),s=0;s<$.length;s+=1){const c=b(t,$,s);y[s]?y[s].p(c,n):(y[s]=N(c),y[s].c(),y[s].m(e,l))}for(;s<y.length;s+=1)y[s].d(1);y.length=$.length}t[0].details?E?E.p(t,n):(E=R(t),E.c(),E.m(e,null)):E&&(E.d(1),E=null)},i:g,o:g,d(t){t&&c(n),u(y,t),E&&E.d(),v=!1,k()}}}function T(t,n,e){let l,{option:s}=n,{query:c=null}=n;const r=v();return t.$$set=t=>{"option"in t&&e(0,s=t.option),"query"in t&&e(3,c=t.query)},t.$$.update=()=>{8&t.$$.dirty&&(l=c?new RegExp(`(${E(c)})`,"ig"):null)},[s,function(t){return null==l?[{content:t,marked:!1}]:t.split(l).map(((t,n)=>({content:t,marked:n%2!=0})))},r,c,t=>r("click",{nativeEvent:t})]}class j extends t{constructor(t){super(),n(this,t,T,M,e,{option:0,query:3})}}export{j as A,E as e};
