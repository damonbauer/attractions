import{S as t,i as n,s as e,h as s,c as a,b as r,d as l,J as o,K as c,f as u,w as i,T as $,x as f,N as p,t as m,o as g,D as h,E as d,F as v,G as x,H as w,W as y,j as P,k as b,m as k,p as N,r as j,q as L,v as E,u as M,y as S,R as T,X as V,V as q}from"./client.59ec6143.js";import{B as A}from"./button.1e2a60cd.js";import{T as B}from"./text-field.9369384a.js";import{c as D}from"./classes.2453fa25.js";function F(t,n,e){const s=t.slice();return s[21]=n[e],s}function G(t){let n,e,h,d=[],v=new Map,w=t[7];const P=t=>t[21];for(let n=0;n<w.length;n+=1){let e=F(t,w,n),s=P(e);v.set(s,d[n]=Q(s,e))}let b=[{class:e=D("pagination",t[1])},t[15]],k={};for(let t=0;t<b.length;t+=1)k=x(k,b[t]);return{c(){n=s("nav");for(let t=0;t<d.length;t+=1)d[t].c();this.h()},l(t){n=a(t,"NAV",{class:!0});var e=r(n);for(let t=0;t<d.length;t+=1)d[t].l(e);e.forEach(l),this.h()},h(){o(n,k),c(n,"svelte-sbf28e",!0)},m(t,e){u(t,n,e);for(let t=0;t<d.length;t+=1)d[t].m(n,null);h=!0},p(t,s){32757&s&&(w=t[7],i(),d=$(d,s,P,1,t,w,v,n,y,Q,null,F),f()),o(n,k=p(b,[(!h||2&s&&e!==(e=D("pagination",t[1])))&&{class:e},32768&s&&t[15]])),c(n,"svelte-sbf28e",!0)},i(t){if(!h){for(let t=0;t<w.length;t+=1)m(d[t]);h=!0}},o(t){for(let t=0;t<d.length;t+=1)g(d[t]);h=!1},d(t){t&&l(n);for(let t=0;t<d.length;t+=1)d[t].d()}}}function H(t){let n,e;return n=new A({props:{neutral:t[21]!==t[0],class:D("page",t[21]===t[0]&&"current"),$$slots:{default:[K]},$$scope:{ctx:t}}}),n.$on("click",(function(){return t[18](t[21])})),{c(){P(n.$$.fragment)},l(t){b(n.$$.fragment,t)},m(t,s){k(n,t,s),e=!0},p(e,s){t=e;const a={};129&s&&(a.neutral=t[21]!==t[0]),129&s&&(a.class=D("page",t[21]===t[0]&&"current")),16777344&s&&(a.$$scope={dirty:s,ctx:t}),n.$set(a)},i(t){e||(m(n.$$.fragment,t),e=!0)},o(t){g(n.$$.fragment,t),e=!1},d(t){N(n,t)}}}function I(t){let n,e,s,a;const r=[W,R],o=[];function c(t,n){return t[6]?0:1}return n=c(t),e=o[n]=r[n](t),{c(){e.c(),s=h()},l(t){e.l(t),s=h()},m(t,e){o[n].m(t,e),u(t,s,e),a=!0},p(t,a){let l=n;n=c(t),n===l?o[n].p(t,a):(i(),g(o[l],1,1,(()=>{o[l]=null})),f(),e=o[n],e?e.p(t,a):(e=o[n]=r[n](t),e.c()),m(e,1),e.m(s.parentNode,s))},i(t){a||(m(e),a=!0)},o(t){g(e),a=!1},d(t){o[n].d(t),t&&l(s)}}}function J(t){let n,e,s,a;const r=[C,z],o=[];function c(t,n){return t[5]?0:1}return n=c(t),e=o[n]=r[n](t),{c(){e.c(),s=h()},l(t){e.l(t),s=h()},m(t,e){o[n].m(t,e),u(t,s,e),a=!0},p(t,a){let l=n;n=c(t),n===l?o[n].p(t,a):(i(),g(o[l],1,1,(()=>{o[l]=null})),f(),e=o[n],e?e.p(t,a):(e=o[n]=r[n](t),e.c()),m(e,1),e.m(s.parentNode,s))},i(t){a||(m(e),a=!0)},o(t){g(e),a=!1},d(t){o[n].d(t),t&&l(s)}}}function K(t){let n,e,s=t[21]+"";return{c(){n=j(s),e=L()},l(t){n=E(t,s),e=M(t)},m(t,s){u(t,n,s),u(t,e,s)},p(t,e){128&e&&s!==(s=t[21]+"")&&S(n,s)},d(t){t&&l(n),t&&l(e)}}}function R(t){let n,e;return n=new A({props:{class:"page",neutral:!0,$$slots:{default:[X]},$$scope:{ctx:t}}}),n.$on("click",t[14]),{c(){P(n.$$.fragment)},l(t){b(n.$$.fragment,t)},m(t,s){k(n,t,s),e=!0},p(t,e){const s={};16777216&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s)},i(t){e||(m(n.$$.fragment,t),e=!0)},o(t){g(n.$$.fragment,t),e=!1},d(t){N(n,t)}}}function W(t){let n,e,s;function a(n){t[17].call(null,n)}let r={type:"number",min:1,max:t[2],noSpinner:!0,autofocus:!0};return void 0!==t[4]&&(r.value=t[4]),n=new B({props:r}),T.push((()=>V(n,"value",a))),n.$on("blur",t[11]),n.$on("keydown",t[12]),{c(){P(n.$$.fragment)},l(t){b(n.$$.fragment,t)},m(t,e){k(n,t,e),s=!0},p(t,s){const a={};4&s&&(a.max=t[2]),!e&&16&s&&(e=!0,a.value=t[4],q((()=>e=!1))),n.$set(a)},i(t){s||(m(n.$$.fragment,t),s=!0)},o(t){g(n.$$.fragment,t),s=!1},d(t){N(n,t)}}}function X(t){let n;return{c(){n=j("...\n          ")},l(t){n=E(t,"...\n          ")},m(t,e){u(t,n,e)},d(t){t&&l(n)}}}function z(t){let n,e;return n=new A({props:{class:"page",neutral:!0,$$slots:{default:[O]},$$scope:{ctx:t}}}),n.$on("click",t[13]),{c(){P(n.$$.fragment)},l(t){b(n.$$.fragment,t)},m(t,s){k(n,t,s),e=!0},p(t,e){const s={};16777216&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s)},i(t){e||(m(n.$$.fragment,t),e=!0)},o(t){g(n.$$.fragment,t),e=!1},d(t){N(n,t)}}}function C(t){let n,e,s;function a(n){t[16].call(null,n)}let r={type:"number",min:1,max:t[2],noSpinner:!0,autofocus:!0};return void 0!==t[4]&&(r.value=t[4]),n=new B({props:r}),T.push((()=>V(n,"value",a))),n.$on("blur",t[11]),n.$on("keydown",t[12]),{c(){P(n.$$.fragment)},l(t){b(n.$$.fragment,t)},m(t,e){k(n,t,e),s=!0},p(t,s){const a={};4&s&&(a.max=t[2]),!e&&16&s&&(e=!0,a.value=t[4],q((()=>e=!1))),n.$set(a)},i(t){s||(m(n.$$.fragment,t),s=!0)},o(t){g(n.$$.fragment,t),s=!1},d(t){N(n,t)}}}function O(t){let n;return{c(){n=j("...")},l(t){n=E(t,"...")},m(t,e){u(t,n,e)},d(t){t&&l(n)}}}function Q(t,n){let e,s,a,r,o;const c=[J,I,H],$=[];function p(t,n){return t[21]===t[8]?0:t[21]===t[9]?1:2}return s=p(n),a=$[s]=c[s](n),{key:t,first:null,c(){e=h(),a.c(),r=h(),this.h()},l(t){e=h(),a.l(t),r=h(),this.h()},h(){this.first=e},m(t,n){u(t,e,n),$[s].m(t,n),u(t,r,n),o=!0},p(t,e){let l=s;s=p(n=t),s===l?$[s].p(n,e):(i(),g($[l],1,1,(()=>{$[l]=null})),f(),a=$[s],a?a.p(n,e):(a=$[s]=c[s](n),a.c()),m(a,1),a.m(r.parentNode,r))},i(t){o||(m(a),o=!0)},o(t){g(a),o=!1},d(t){t&&l(e),$[s].d(t),t&&l(r)}}}function U(t){let n,e,s=(t[2]>1||1==t[2]&&t[3])&&G(t);return{c(){s&&s.c(),n=h()},l(t){s&&s.l(t),n=h()},m(t,a){s&&s.m(t,a),u(t,n,a),e=!0},p(t,[e]){t[2]>1||1==t[2]&&t[3]?s?(s.p(t,e),12&e&&m(s,1)):(s=G(t),s.c(),m(s,1),s.m(n.parentNode,n)):s&&(i(),g(s,1,1,(()=>{s=null})),f())},i(t){e||(m(s),e=!0)},o(t){g(s),e=!1},d(t){s&&s.d(t),t&&l(n)}}}function Y(t,n,e){let s;const a=["class","pages","currentPage","showLonePage"];let r=d(n,a),{class:l=null}=n,{pages:o}=n,{currentPage:c=1}=n,{showLonePage:u=!0}=n,i=null,$=!1,f=!1;const p={},m={};function g(t){t>=1&&t<=o&&(e(5,$=!1),e(6,f=!1),e(0,c=t),y("change",{value:t}))}function h(t){const n=parseInt(i);isNaN(n)||g(n)}const y=v();return t.$$set=t=>{n=x(x({},n),w(t)),e(15,r=d(n,a)),"class"in t&&e(1,l=t.class),"pages"in t&&e(2,o=t.pages),"currentPage"in t&&e(0,c=t.currentPage),"showLonePage"in t&&e(3,u=t.showLonePage)},t.$$.update=()=>{5&t.$$.dirty&&e(0,c=Math.min(Math.max(c,1),o)),5&t.$$.dirty&&e(7,s=function(t,n=1){const e=[];return 1!==n&&e.push(1),n-1==3?e.push(n-2):n-1>3&&e.push(p),n>2&&e.push(n-1),e.push(n),n<t-1&&e.push(n+1),t-n==3?e.push(n+2):t-n>3&&e.push(m),n!==t&&e.push(t),e}(o,c))},[c,l,o,u,i,$,f,s,p,m,g,h,function({detail:t}){"Enter"===t.nativeEvent.key&&(h(),e(4,i=""))},function(){e(5,$=!0),e(6,f=!1)},function(){e(5,$=!1),e(6,f=!0)},r,function(t){i=t,e(4,i)},function(t){i=t,e(4,i)},t=>g(t)]}class Z extends t{constructor(t){super(),n(this,t,Y,U,e,{class:1,pages:2,currentPage:0,showLonePage:3})}}export{Z as P};
