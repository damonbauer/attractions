import{S as s,i as l,s as t,j as a,k as n,m as c,t as e,o as i,p as o,h as r,q as d,r as u,c as $,b as m,u as f,v as p,d as g,e as h,Q as x,f as v,g as C,M as b,y as k,I as j,K as w,w as W,x as y,O as D}from"./client.5603f272.js";import{B as I}from"./button.d55ccd35.js";import{X as E}from"./x.27df57e4.js";import{c as V}from"./classes.2453fa25.js";const q=s=>({}),B=s=>({}),K=s=>({}),M=s=>({});function O(s){let l,t;return l=new I({props:{neutral:!0,round:!0,class:"close",$$slots:{default:[Q]},$$scope:{ctx:s}}}),l.$on("click",(function(){D(s[3])&&s[3].apply(this,arguments)})),{c(){a(l.$$.fragment)},l(s){n(l.$$.fragment,s)},m(s,a){c(l,s,a),t=!0},p(t,a){s=t;const n={};128&a&&(n.$$scope={dirty:a,ctx:s}),l.$set(n)},i(s){t||(e(l.$$.fragment,s),t=!0)},o(s){i(l.$$.fragment,s),t=!1},d(s){o(l,s)}}}function Q(s){let l;const t=s[6]["close-icon"],r=j(t,s,s[7],M),d=r||function(s){let l,t;return l=new E({}),{c(){a(l.$$.fragment)},l(s){n(l.$$.fragment,s)},m(s,a){c(l,s,a),t=!0},i(s){t||(e(l.$$.fragment,s),t=!0)},o(s){i(l.$$.fragment,s),t=!1},d(s){o(l,s)}}}();return{c(){d&&d.c()},l(s){d&&d.l(s)},m(s,t){d&&d.m(s,t),l=!0},p(s,l){r&&r.p&&128&l&&b(r,t,s,s[7],l,K,M)},i(s){l||(e(d,s),l=!0)},o(s){i(d,s),l=!1},d(s){d&&d.d(s)}}}function S(s){let l,t,a,n,c;const o=s[6]["title-icon"],w=j(o,s,s[7],B);return{c(){l=r("div"),w&&w.c(),t=d(),a=u(s[4]),this.h()},l(n){l=$(n,"DIV",{class:!0});var c=m(l);w&&w.l(c),t=f(c),a=p(c,s[4]),c.forEach(g),this.h()},h(){h(l,"class",n=x(V("title",null!=s[3]&&"close-padded",s[1]))+" svelte-1a6g8xi")},m(s,n){v(s,l,n),w&&w.m(l,null),C(l,t),C(l,a),c=!0},p(s,t){w&&w.p&&128&t&&b(w,o,s,s[7],t,q,B),(!c||16&t)&&k(a,s[4]),(!c||10&t&&n!==(n=x(V("title",null!=s[3]&&"close-padded",s[1]))+" svelte-1a6g8xi"))&&h(l,"class",n)},i(s){c||(e(w,s),c=!0)},o(s){i(w,s),c=!1},d(s){s&&g(l),w&&w.d(s)}}}function z(s){let l,t,a,n,c,o=null!=s[3]&&O(s),u=null!=s[4]&&S(s);const p=s[6].default,k=j(p,s,s[7],null);return{c(){l=r("div"),o&&o.c(),t=d(),u&&u.c(),a=d(),k&&k.c(),this.h()},l(s){l=$(s,"DIV",{class:!0});var n=m(l);o&&o.l(n),t=f(n),u&&u.l(n),a=f(n),k&&k.l(n),n.forEach(g),this.h()},h(){h(l,"class",n=x(V("dialog",s[0]))+" svelte-1a6g8xi"),w(l,"danger",s[2]),w(l,"constrain-width",s[5])},m(s,n){v(s,l,n),o&&o.m(l,null),C(l,t),u&&u.m(l,null),C(l,a),k&&k.m(l,null),c=!0},p(s,[r]){null!=s[3]?o?(o.p(s,r),8&r&&e(o,1)):(o=O(s),o.c(),e(o,1),o.m(l,t)):o&&(W(),i(o,1,1,(()=>{o=null})),y()),null!=s[4]?u?(u.p(s,r),16&r&&e(u,1)):(u=S(s),u.c(),e(u,1),u.m(l,a)):u&&(W(),i(u,1,1,(()=>{u=null})),y()),k&&k.p&&128&r&&b(k,p,s,s[7],r,null,null),(!c||1&r&&n!==(n=x(V("dialog",s[0]))+" svelte-1a6g8xi"))&&h(l,"class",n),5&r&&w(l,"danger",s[2]),33&r&&w(l,"constrain-width",s[5])},i(s){c||(e(o),e(u),e(k,s),c=!0)},o(s){i(o),i(u),i(k,s),c=!1},d(s){s&&g(l),o&&o.d(),u&&u.d(),k&&k.d(s)}}}function A(s,l,t){let{$$slots:a={},$$scope:n}=l,{class:c=null}=l,{titleClass:e=null}=l,{danger:i=!1}=l,{closeCallback:o=null}=l,{title:r=null}=l,{constrainWidth:d=!1}=l;return s.$$set=s=>{"class"in s&&t(0,c=s.class),"titleClass"in s&&t(1,e=s.titleClass),"danger"in s&&t(2,i=s.danger),"closeCallback"in s&&t(3,o=s.closeCallback),"title"in s&&t(4,r=s.title),"constrainWidth"in s&&t(5,d=s.constrainWidth),"$$scope"in s&&t(7,n=s.$$scope)},[c,e,i,o,r,d,a,n]}class F extends s{constructor(s){super(),l(this,s,A,z,t,{class:0,titleClass:1,danger:2,closeCallback:3,title:4,constrainWidth:5})}}export{F as D};
