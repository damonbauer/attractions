import{S as t,i as n,s,j as e,k as o,m as a,t as l,o as c,p as r,G as i,R as m,X as u,h as f,q as $,c as p,b as h,u as d,d as g,e as v,Q as x,K as y,f as b,g as L,w as O,x as j,N as Q,U as w,V as S,a1 as E,E as I,F as M,H as k,Y as V,r as D,v as C,y as A,I as B,M as T,L as q,O as F,n as G}from"./client.00700382.js";import{B as H}from"./button.d86b751b.js";import{C as K}from"./chip.18ac9000.js";import{A as N,c as P,M as R}from"./autocomplete-field.75211ff8.js";import{X as U}from"./x.5527f7fc.js";import{L as X}from"./loading.e0429bd0.js";import{c as Y}from"./classes.2453fa25.js";import{p as z}from"./plural-s.31bb9da9.js";const J=t=>({loadMoreOptions:131072&t}),W=t=>({loadMoreOptions:t[17]}),Z=t=>({}),_=t=>({slot:"loading-options"}),tt=t=>({}),nt=t=>({slot:"not-enough-input"}),st=t=>({}),et=t=>({slot:"too-many-options"});function ot(t,n,s){const e=t.slice();return e[18]=n[s],e}function at(t){let n,s;return n=new U({}),{c(){e(n.$$.fragment)},l(t){o(n.$$.fragment,t)},m(t,e){a(n,t,e),s=!0},i(t){s||(l(n.$$.fragment,t),s=!0)},o(t){c(n.$$.fragment,t),s=!1},d(t){r(n,t)}}}function lt(t){let n,s,i,m,u=t[18].name+"";return i=new H({props:{neutral:!0,round:!0,small:!0,$$slots:{default:[at]},$$scope:{ctx:t}}}),i.$on("click",(function(){return t[10](t[18])})),{c(){n=D(u),s=$(),e(i.$$.fragment)},l(t){n=C(t,u),s=d(t),o(i.$$.fragment,t)},m(t,e){b(t,n,e),b(t,s,e),a(i,t,e),m=!0},p(s,e){t=s,(!m||1&e)&&u!==(u=t[18].name+"")&&A(n,u);const o={};32768&e&&(o.$$scope={dirty:e,ctx:t}),i.$set(o)},i(t){m||(l(i.$$.fragment,t),m=!0)},o(t){c(i.$$.fragment,t),m=!1},d(t){t&&g(n),t&&g(s),r(i,t)}}}function ct(t){let n,s;return n=new K({props:{noPadding:!0,$$slots:{default:[lt]},$$scope:{ctx:t}}}),{c(){e(n.$$.fragment)},l(t){o(n.$$.fragment,t)},m(t,e){a(n,t,e),s=!0},p(t,s){const e={};32769&s&&(e.$$scope={dirty:s,ctx:t}),n.$set(e)},i(t){s||(l(n.$$.fragment,t),s=!0)},o(t){c(n.$$.fragment,t),s=!1},d(t){r(n,t)}}}function rt(t){let n;const s=t[9]["too-many-options"],e=B(s,t,t[15],et),o=e||function(t){let n,s,e,o,a,l=z(t[4])+"";return{c(){n=f("div"),s=D("Cannot select more than\n        "),e=D(t[4]),o=D("\n        option"),a=D(l),this.h()},l(c){n=p(c,"DIV",{class:!0});var r=h(n);s=C(r,"Cannot select more than\n        "),e=C(r,t[4]),o=C(r,"\n        option"),a=C(r,l),r.forEach(g),this.h()},h(){v(n,"class","notice svelte-1503aum")},m(t,l){b(t,n,l),L(n,s),L(n,e),L(n,o),L(n,a)},p(t,n){16&n&&A(e,t[4]),16&n&&l!==(l=z(t[4])+"")&&A(a,l)},d(t){t&&g(n)}}}(t);return{c(){o&&o.c()},l(t){o&&o.l(t)},m(t,s){o&&o.m(t,s),n=!0},p(t,n){e?e.p&&32768&n&&T(e,s,t,t[15],n,st,et):o&&o.p&&16&n&&o.p(t,n)},i(t){n||(l(o,t),n=!0)},o(t){c(o,t),n=!1},d(t){o&&o.d(t)}}}function it(t){let n;const s=t[9]["not-enough-input"],e=B(s,t,t[15],nt),o=e||function(t){let n,s,e,o,a,l,c=z(t[3])+"";return{c(){n=f("div"),s=D("Type\n        "),e=D(t[3]),o=D("\n        character"),a=D(c),l=D("\n        to search"),this.h()},l(r){n=p(r,"DIV",{class:!0});var i=h(n);s=C(i,"Type\n        "),e=C(i,t[3]),o=C(i,"\n        character"),a=C(i,c),l=C(i,"\n        to search"),i.forEach(g),this.h()},h(){v(n,"class","notice svelte-1503aum")},m(t,c){b(t,n,c),L(n,s),L(n,e),L(n,o),L(n,a),L(n,l)},p(t,n){8&n&&A(e,t[3]),8&n&&c!==(c=z(t[3])+"")&&A(a,c)},d(t){t&&g(n)}}}(t);return{c(){o&&o.c()},l(t){o&&o.l(t)},m(t,s){o&&o.m(t,s),n=!0},p(t,n){e?e.p&&32768&n&&T(e,s,t,t[15],n,tt,nt):o&&o.p&&8&n&&o.p(t,n)},i(t){n||(l(o,t),n=!0)},o(t){c(o,t),n=!1},d(t){o&&o.d(t)}}}function mt(t){let n;const s=t[9]["loading-options"],i=B(s,t,t[15],_),m=i||function(t){let n,s,i,m;return s=new X({}),{c(){n=f("li"),e(s.$$.fragment),i=D("\n        Loading..."),this.h()},l(t){n=p(t,"LI",{class:!0});var e=h(n);o(s.$$.fragment,e),i=C(e,"\n        Loading..."),e.forEach(g),this.h()},h(){v(n,"class","loading-options svelte-1503aum")},m(t,e){b(t,n,e),a(s,n,null),L(n,i),m=!0},i(t){m||(l(s.$$.fragment,t),m=!0)},o(t){c(s.$$.fragment,t),m=!1},d(t){t&&g(n),r(s)}}}();return{c(){m&&m.c()},l(t){m&&m.l(t)},m(t,s){m&&m.m(t,s),n=!0},p(t,n){i&&i.p&&32768&n&&T(i,s,t,t[15],n,Z,_)},i(t){n||(l(m,t),n=!0)},o(t){c(m,t),n=!1},d(t){m&&m.d(t)}}}function ut(t){let n,s,i;return n=new R({}),{c(){e(n.$$.fragment),s=D("\n            load more options")},l(t){o(n.$$.fragment,t),s=C(t,"\n            load more options")},m(t,e){a(n,t,e),b(t,s,e),i=!0},i(t){i||(l(n.$$.fragment,t),i=!0)},o(t){c(n.$$.fragment,t),i=!1},d(t){r(n,t),t&&g(s)}}}function ft(t){let n,s;const i=t[9]["more-options"],m=B(i,t,t[15],W),u=m||function(t){let n,s,i,m,u,$;return s=new H({props:{$$slots:{default:[ut]},$$scope:{ctx:t}}}),s.$on("click",(function(){F(t[17])&&t[17].apply(this,arguments)})),{c(){n=f("div"),e(s.$$.fragment)},l(t){n=p(t,"DIV",{});var e=h(n);o(s.$$.fragment,e),e.forEach(g)},m(e,o){b(e,n,o),a(s,n,null),m=!0,u||($=q(i=P.call(null,n,{callback:t[17]})),u=!0)},p(n,e){t=n;const o={};32768&e&&(o.$$scope={dirty:e,ctx:t}),s.$set(o),i&&F(i.update)&&131072&e&&i.update.call(null,{callback:t[17]})},i(t){m||(l(s.$$.fragment,t),m=!0)},o(t){c(s.$$.fragment,t),m=!1},d(t){t&&g(n),r(s),u=!1,$()}}}(t);return{c(){n=f("li"),u&&u.c(),this.h()},l(t){n=p(t,"LI",{class:!0,slot:!0});var s=h(n);u&&u.l(s),s.forEach(g),this.h()},h(){v(n,"class","more-options svelte-1503aum"),v(n,"slot","more-options")},m(t,e){b(t,n,e),u&&u.m(n,null),s=!0},p(t,n){m?m.p&&163840&n&&T(m,i,t,t[15],n,J,W):u&&u.p&&131072&n&&u.p(t,n)},i(t){s||(l(u,t),s=!0)},o(t){c(u,t),s=!1},d(t){t&&g(n),u&&u.d(t)}}}function $t(t){let n,s,e;return{c(){n=$(),s=$(),e=$()},l(t){n=d(t),s=d(t),e=d(t)},m(t,o){b(t,n,o),b(t,s,o),b(t,e,o)},p:G,i:G,o:G,d(t){t&&g(n),t&&g(s),t&&g(e)}}}function pt(t){let n,s,I,M,k,V,D,C,A=t[0],B=[];for(let n=0;n<A.length;n+=1)B[n]=ct(ot(t,A,n));const T=t=>c(B[t],1,1,(()=>{B[t]=null})),q=[{minSearchLength:t[3]},{maxOptions:t[4]},{disabled:t[5]},t[8]];function F(n){t[11].call(null,n)}function G(n){t[12].call(null,n)}function H(n){t[13].call(null,n)}let K={$$slots:{default:[$t],"more-options":[ft,({loadMoreOptions:t})=>({17:t}),({loadMoreOptions:t})=>t?131072:0],"loading-options":[mt],"not-enough-input":[it],"too-many-options":[rt]},$$scope:{ctx:t}};for(let t=0;t<q.length;t+=1)K=i(K,q[t]);return void 0!==t[0]&&(K.selection=t[0]),void 0!==t[1]&&(K.searchQuery=t[1]),void 0!==t[6]&&(K.focus=t[6]),I=new N({props:K}),m.push((()=>u(I,"selection",F))),m.push((()=>u(I,"searchQuery",G))),m.push((()=>u(I,"focus",H))),I.$on("change",t[14]),{c(){n=f("div");for(let t=0;t<B.length;t+=1)B[t].c();s=$(),e(I.$$.fragment),this.h()},l(t){n=p(t,"DIV",{class:!0});var e=h(n);for(let t=0;t<B.length;t+=1)B[t].l(e);s=d(e),o(I.$$.fragment,e),e.forEach(g),this.h()},h(){v(n,"class",D=x(Y("autocomplete",t[2]))+" svelte-1503aum"),y(n,"focus",t[6]),y(n,"disabled",t[5])},m(t,e){b(t,n,e);for(let t=0;t<B.length;t+=1)B[t].m(n,null);L(n,s),a(I,n,null),C=!0},p(t,[e]){if(129&e){let o;for(A=t[0],o=0;o<A.length;o+=1){const a=ot(t,A,o);B[o]?(B[o].p(a,e),l(B[o],1)):(B[o]=ct(a),B[o].c(),l(B[o],1),B[o].m(n,s))}for(O(),o=A.length;o<B.length;o+=1)T(o);j()}const o=312&e?Q(q,[8&e&&{minSearchLength:t[3]},16&e&&{maxOptions:t[4]},32&e&&{disabled:t[5]},256&e&&w(t[8])]):{};163864&e&&(o.$$scope={dirty:e,ctx:t}),!M&&1&e&&(M=!0,o.selection=t[0],S((()=>M=!1))),!k&&2&e&&(k=!0,o.searchQuery=t[1],S((()=>k=!1))),!V&&64&e&&(V=!0,o.focus=t[6],S((()=>V=!1))),I.$set(o),(!C||4&e&&D!==(D=x(Y("autocomplete",t[2]))+" svelte-1503aum"))&&v(n,"class",D),68&e&&y(n,"focus",t[6]),36&e&&y(n,"disabled",t[5])},i(t){if(!C){for(let t=0;t<A.length;t+=1)l(B[t]);l(I.$$.fragment,t),C=!0}},o(t){B=B.filter(Boolean);for(let t=0;t<B.length;t+=1)c(B[t]);c(I.$$.fragment,t),C=!1},d(t){t&&g(n),E(B,t),r(I)}}}function ht(t,n,s){const e=["class","selection","minSearchLength","maxOptions","searchQuery","disabled"];let o=I(n,e),{$$slots:a={},$$scope:l}=n,{class:c=null}=n,{selection:r=[]}=n,{minSearchLength:m=3}=n,{maxOptions:u=1/0}=n,{searchQuery:f=""}=n,{disabled:$=!1}=n,p=!1;function h(t){s(0,r=r.filter((n=>n!==t))),d("change",{value:r})}const d=M();return t.$$set=t=>{n=i(i({},n),k(t)),s(8,o=I(n,e)),"class"in t&&s(2,c=t.class),"selection"in t&&s(0,r=t.selection),"minSearchLength"in t&&s(3,m=t.minSearchLength),"maxOptions"in t&&s(4,u=t.maxOptions),"searchQuery"in t&&s(1,f=t.searchQuery),"disabled"in t&&s(5,$=t.disabled),"$$scope"in t&&s(15,l=t.$$scope)},[r,f,c,m,u,$,p,h,o,a,t=>h(t),function(t){r=t,s(0,r)},function(t){f=t,s(1,f)},function(t){p=t,s(6,p)},function(n){V(t,n)},l]}class dt extends t{constructor(t){super(),n(this,t,ht,pt,s,{class:2,selection:0,minSearchLength:3,maxOptions:4,searchQuery:1,disabled:5})}}export{dt as A};
