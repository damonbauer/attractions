import{S as e,i as l,s,h as a,c as t,b as c,d as n,e as o,Q as r,f as i,w as u,T as h,x as d,t as f,o as m,D as b,E as p,G as $,H as k,j as g,k as v,m as x,N as C,U as y,V as L,p as j,W as w,R as N,X as S,Y as E,q as D,u as M,r as V,v as q,y as A,g as G}from"./client.bbf09479.js";import{c as H}from"./classes.2453fa25.js";import{g as I}from"./color-picker-styles.7cf55314.js";import{p as P}from"./plural-s.31bb9da9.js";import{C as Q}from"./checkbox.755bac5f.js";function R(e,l,s){const a=e.slice();return a[13]=l[s],a[14]=l,a[15]=s,a}function T(e){let l,s,b,p=[],$=new Map,k=e[0];const g=e=>e[13].value;for(let l=0;l<k.length;l+=1){let s=R(e,k,l),a=g(s);$.set(a,p[l]=z(a,s))}return{c(){l=a("div");for(let e=0;e<p.length;e+=1)p[e].c();this.h()},l(e){l=t(e,"DIV",{class:!0,role:!0});var s=c(l);for(let e=0;e<p.length;e+=1)p[e].l(s);s.forEach(n),this.h()},h(){o(l,"class",s=r(H(e[1]))+" svelte-197wca9"),o(l,"role","group")},m(e,s){i(e,l,s);for(let e=0;e<p.length;e+=1)p[e].m(l,null);b=!0},p(e,a){2045&a&&(k=e[0],u(),p=h(p,a,g,1,e,k,$,l,w,z,null,R),d()),(!b||2&a&&s!==(s=r(H(e[1]))+" svelte-197wca9"))&&o(l,"class",s)},i(e){if(!b){for(let e=0;e<k.length;e+=1)f(p[e]);b=!0}},o(e){for(let e=0;e<p.length;e+=1)m(p[e]);b=!1},d(e){e&&n(l);for(let e=0;e<p.length;e+=1)p[e].d()}}}function U(e){let l;function s(e,l){return null!=e[3]?X:W}let a=s(e),t=a(e);return{c(){t.c(),l=b()},l(e){t.l(e),l=b()},m(e,s){t.m(e,s),i(e,l,s)},p(e,c){a===(a=s(e))&&t?t.p(e,c):(t.d(1),t=a(e),t&&(t.c(),t.m(l.parentNode,l)))},d(e){t.d(e),e&&n(l)}}}function W(e){let l,s=(e[13].label||e[13].value)+"";return{c(){l=V(s)},l(e){l=q(e,s)},m(e,s){i(e,l,s)},p(e,a){1&a&&s!==(s=(e[13].label||e[13].value)+"")&&A(l,s)},d(e){e&&n(l)}}}function X(e){let l,s,r,u=(e[13].label||e[13].value)+"";return{c(){l=a("span"),s=V(u),this.h()},l(e){l=t(e,"SPAN",{class:!0});var a=c(l);s=q(a,u),a.forEach(n),this.h()},h(){o(l,"class",r=H(e[3]))},m(e,a){i(e,l,a),G(l,s)},p(e,a){1&a&&u!==(u=(e[13].label||e[13].value)+"")&&A(s,u),8&a&&r!==(r=H(e[3]))&&o(l,"class",r)},d(e){e&&n(l)}}}function Y(e){let l,s=!e[4]&&U(e);return{c(){s&&s.c(),l=D()},l(e){s&&s.l(e),l=M(e)},m(e,a){s&&s.m(e,a),i(e,l,a)},p(e,a){e[4]?s&&(s.d(1),s=null):s?s.p(e,a):(s=U(e),s.c(),s.m(l.parentNode,l))},d(e){s&&s.d(e),e&&n(l)}}}function z(e,l){let s,a,t,c;const o=[{name:l[5]},{slotLeft:l[6]},{selectorStyle:l[4]?I(l[13].value):null},{value:l[13].value},{disabled:l[13].disabled||!l[13].checked&&l[8]>=l[7]},{class:H(l[4]&&"colored",l[2])},{title:!l[13].disabled&&!l[13].checked&&l[8]>=l[7]?l[9]:null},l[10]];function r(e){l[11].call(null,e,l[13])}let u={$$slots:{default:[Y]},$$scope:{ctx:l}};for(let e=0;e<o.length;e+=1)u=$(u,o[e]);return void 0!==l[13].checked&&(u.checked=l[13].checked),a=new Q({props:u}),N.push((()=>S(a,"checked",r))),a.$on("change",l[12]),{key:e,first:null,c(){s=b(),g(a.$$.fragment),this.h()},l(e){s=b(),v(a.$$.fragment,e),this.h()},h(){this.first=s},m(e,l){i(e,s,l),x(a,e,l),c=!0},p(e,s){l=e;const c=2037&s?C(o,[32&s&&{name:l[5]},64&s&&{slotLeft:l[6]},17&s&&{selectorStyle:l[4]?I(l[13].value):null},1&s&&{value:l[13].value},385&s&&{disabled:l[13].disabled||!l[13].checked&&l[8]>=l[7]},20&s&&{class:H(l[4]&&"colored",l[2])},897&s&&{title:!l[13].disabled&&!l[13].checked&&l[8]>=l[7]?l[9]:null},1024&s&&y(l[10])]):{};65561&s&&(c.$$scope={dirty:s,ctx:l}),!t&&1&s&&(t=!0,c.checked=l[13].checked,L((()=>t=!1))),a.$set(c)},i(e){c||(f(a.$$.fragment,e),c=!0)},o(e){m(a.$$.fragment,e),c=!1},d(e){e&&n(s),j(a,e)}}}function B(e){let l,s,a=null!=e[0]&&0!==e[0].length&&T(e);return{c(){a&&a.c(),l=b()},l(e){a&&a.l(e),l=b()},m(e,t){a&&a.m(e,t),i(e,l,t),s=!0},p(e,[s]){null!=e[0]&&0!==e[0].length?a?(a.p(e,s),1&s&&f(a,1)):(a=T(e),a.c(),f(a,1),a.m(l.parentNode,l)):a&&(u(),m(a,1,1,(()=>{a=null})),d())},i(e){s||(f(a),s=!0)},o(e){m(a),s=!1},d(e){a&&a.d(e),e&&n(l)}}}function F(e,l,s){let a,t;const c=["class","checkboxClass","labelClass","color","items","name","labelsLeft","max"];let n=p(l,c),{class:o=null}=l,{checkboxClass:r=null}=l,{labelClass:i=null}=l,{color:u=!1}=l,{items:h}=l,{name:d}=l,{labelsLeft:f=!1}=l,{max:m=1/0}=l;return h&&0!==h.length||console.error("Must have at least one item in the checkbox group"),u&&null!=i&&console.warn("labelClass has no effect: labels are not rendered for color checkbox groups"),e.$$set=e=>{l=$($({},l),k(e)),s(10,n=p(l,c)),"class"in e&&s(1,o=e.class),"checkboxClass"in e&&s(2,r=e.checkboxClass),"labelClass"in e&&s(3,i=e.labelClass),"color"in e&&s(4,u=e.color),"items"in e&&s(0,h=e.items),"name"in e&&s(5,d=e.name),"labelsLeft"in e&&s(6,f=e.labelsLeft),"max"in e&&s(7,m=e.max)},e.$$.update=()=>{1&e.$$.dirty&&s(8,a=h.reduce(((e,l)=>e+l.checked),0)),128&e.$$.dirty&&s(9,t=`Can only select ${m} value${P(m)}.`)},[h,o,r,i,u,d,f,m,a,t,n,function(e,l){l.checked=e,s(0,h)},function(l){E(e,l)}]}class J extends e{constructor(e){super(),l(this,e,F,B,s,{class:1,checkboxClass:2,labelClass:3,color:4,items:0,name:5,labelsLeft:6,max:7})}}export{J as C};
