import{S as s,i as l,s as t,j as a,k as n,m as e,t as c,o as i,p as o,h as r,q as d,r as u,c as $,b as m,u as p,v as f,d as g,e as h,Q as x,f as v,g as C,M as b,y as k,I as j,K as w,w as W,x as y,O as D}from"./client.59ec6143.js";import{B as I}from"./button.1e2a60cd.js";import{X as E}from"./x.ef9d4552.js";import{c as V}from"./classes.2453fa25.js";const q=s=>({}),B=s=>({}),K=s=>({}),M=s=>({});function O(s){let l,t;return l=new I({props:{neutral:!0,round:!0,class:"close",$$slots:{default:[Q]},$$scope:{ctx:s}}}),l.$on("click",(function(){D(s[3])&&s[3].apply(this,arguments)})),{c(){a(l.$$.fragment)},l(s){n(l.$$.fragment,s)},m(s,a){e(l,s,a),t=!0},p(t,a){s=t;const n={};128&a&&(n.$$scope={dirty:a,ctx:s}),l.$set(n)},i(s){t||(c(l.$$.fragment,s),t=!0)},o(s){i(l.$$.fragment,s),t=!1},d(s){o(l,s)}}}function Q(s){let l;const t=s[6]["close-icon"],r=j(t,s,s[7],M),d=r||function(s){let l,t;return l=new E({}),{c(){a(l.$$.fragment)},l(s){n(l.$$.fragment,s)},m(s,a){e(l,s,a),t=!0},i(s){t||(c(l.$$.fragment,s),t=!0)},o(s){i(l.$$.fragment,s),t=!1},d(s){o(l,s)}}}();return{c(){d&&d.c()},l(s){d&&d.l(s)},m(s,t){d&&d.m(s,t),l=!0},p(s,l){r&&r.p&&128&l&&b(r,t,s,s[7],l,K,M)},i(s){l||(c(d,s),l=!0)},o(s){i(d,s),l=!1},d(s){d&&d.d(s)}}}function S(s){let l,t,a,n,e;const o=s[6]["title-icon"],w=j(o,s,s[7],B);return{c(){l=r("div"),w&&w.c(),t=d(),a=u(s[4]),this.h()},l(n){l=$(n,"DIV",{class:!0});var e=m(l);w&&w.l(e),t=p(e),a=f(e,s[4]),e.forEach(g),this.h()},h(){h(l,"class",n=x(V("title",null!=s[3]&&"close-padded",s[1]))+" svelte-1a6g8xi")},m(s,n){v(s,l,n),w&&w.m(l,null),C(l,t),C(l,a),e=!0},p(s,t){w&&w.p&&128&t&&b(w,o,s,s[7],t,q,B),(!e||16&t)&&k(a,s[4]),(!e||10&t&&n!==(n=x(V("title",null!=s[3]&&"close-padded",s[1]))+" svelte-1a6g8xi"))&&h(l,"class",n)},i(s){e||(c(w,s),e=!0)},o(s){i(w,s),e=!1},d(s){s&&g(l),w&&w.d(s)}}}function z(s){let l,t,a,n,e,o=null!=s[3]&&O(s),u=null!=s[4]&&S(s);const f=s[6].default,k=j(f,s,s[7],null);return{c(){l=r("div"),o&&o.c(),t=d(),u&&u.c(),a=d(),k&&k.c(),this.h()},l(s){l=$(s,"DIV",{class:!0});var n=m(l);o&&o.l(n),t=p(n),u&&u.l(n),a=p(n),k&&k.l(n),n.forEach(g),this.h()},h(){h(l,"class",n=x(V("dialog",s[0]))+" svelte-1a6g8xi"),w(l,"danger",s[2]),w(l,"constrain-width",s[5])},m(s,n){v(s,l,n),o&&o.m(l,null),C(l,t),u&&u.m(l,null),C(l,a),k&&k.m(l,null),e=!0},p(s,[r]){null!=s[3]?o?(o.p(s,r),8&r&&c(o,1)):(o=O(s),o.c(),c(o,1),o.m(l,t)):o&&(W(),i(o,1,1,(()=>{o=null})),y()),null!=s[4]?u?(u.p(s,r),16&r&&c(u,1)):(u=S(s),u.c(),c(u,1),u.m(l,a)):u&&(W(),i(u,1,1,(()=>{u=null})),y()),k&&k.p&&128&r&&b(k,f,s,s[7],r,null,null),(!e||1&r&&n!==(n=x(V("dialog",s[0]))+" svelte-1a6g8xi"))&&h(l,"class",n),5&r&&w(l,"danger",s[2]),33&r&&w(l,"constrain-width",s[5])},i(s){e||(c(o),c(u),c(k,s),e=!0)},o(s){i(o),i(u),i(k,s),e=!1},d(s){s&&g(l),o&&o.d(),u&&u.d(),k&&k.d(s)}}}function A(s,l,t){let{$$slots:a={},$$scope:n}=l,{class:e=null}=l,{titleClass:c=null}=l,{danger:i=!1}=l,{closeCallback:o=null}=l,{title:r=null}=l,{constrainWidth:d=!1}=l;return s.$$set=s=>{"class"in s&&t(0,e=s.class),"titleClass"in s&&t(1,c=s.titleClass),"danger"in s&&t(2,i=s.danger),"closeCallback"in s&&t(3,o=s.closeCallback),"title"in s&&t(4,r=s.title),"constrainWidth"in s&&t(5,d=s.constrainWidth),"$$scope"in s&&t(7,n=s.$$scope)},[e,c,i,o,r,d,a,n]}class F extends s{constructor(s){super(),l(this,s,A,z,t,{class:0,titleClass:1,danger:2,closeCallback:3,title:4,constrainWidth:5})}}export{F as D};
