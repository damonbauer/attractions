import{S as e,i as s,s as l,h as a,c as t,b as c,d as n,e as o,Q as r,f as i,w as h,T as u,x as d,t as m,o as f,D as p,E as $,G as b,H as k,j as g,k as v,m as x,N as C,U as y,V as j,p as N,W as w,R as E,X as z,Y as D,q as M,u as S,r as V,v as q,y as A,g as G}from"./client.5603f272.js";import{p as H}from"./plural-s.31bb9da9.js";import{c as I}from"./classes.2453fa25.js";import{C as P}from"./checkbox-chip.c0e7c60c.js";function Q(e,s,l){const a=e.slice();return a[11]=s[l],a[12]=s,a[13]=l,a}function R(e){let s,l,p,$=[],b=new Map,k=e[0];const g=e=>e[11].value;for(let s=0;s<k.length;s+=1){let l=Q(e,k,s),a=g(l);b.set(a,$[s]=X(a,l))}return{c(){s=a("div");for(let e=0;e<$.length;e+=1)$[e].c();this.h()},l(e){s=t(e,"DIV",{class:!0,role:!0});var l=c(s);for(let e=0;e<$.length;e+=1)$[e].l(l);l.forEach(n),this.h()},h(){o(s,"class",l=r(I(e[1]))+" svelte-17zkpip"),o(s,"role","group")},m(e,l){i(e,s,l);for(let e=0;e<$.length;e+=1)$[e].m(s,null);p=!0},p(e,a){509&a&&(k=e[0],h(),$=u($,a,g,1,e,k,b,s,w,X,null,Q),d()),(!p||2&a&&l!==(l=r(I(e[1]))+" svelte-17zkpip"))&&o(s,"class",l)},i(e){if(!p){for(let e=0;e<k.length;e+=1)m($[e]);p=!0}},o(e){for(let e=0;e<$.length;e+=1)f($[e]);p=!1},d(e){e&&n(s);for(let e=0;e<$.length;e+=1)$[e].d()}}}function T(e){let s,l=(e[11].label||e[11].value)+"";return{c(){s=V(l)},l(e){s=q(e,l)},m(e,l){i(e,s,l)},p(e,a){1&a&&l!==(l=(e[11].label||e[11].value)+"")&&A(s,l)},d(e){e&&n(s)}}}function U(e){let s,l,r,h=(e[11].label||e[11].value)+"";return{c(){s=a("span"),l=V(h),this.h()},l(e){s=t(e,"SPAN",{class:!0});var a=c(s);l=q(a,h),a.forEach(n),this.h()},h(){o(s,"class",r=I(e[3]))},m(e,a){i(e,s,a),G(s,l)},p(e,a){1&a&&h!==(h=(e[11].label||e[11].value)+"")&&A(l,h),8&a&&r!==(r=I(e[3]))&&o(s,"class",r)},d(e){e&&n(s)}}}function W(e){let s;function l(e,s){return null!=e[3]?U:T}let a=l(e),t=a(e);return{c(){t.c(),s=M()},l(e){t.l(e),s=S(e)},m(e,l){t.m(e,l),i(e,s,l)},p(e,c){a===(a=l(e))&&t?t.p(e,c):(t.d(1),t=a(e),t&&(t.c(),t.m(s.parentNode,s)))},d(e){t.d(e),e&&n(s)}}}function X(e,s){let l,a,t,c;const o=[{name:s[4]},{value:s[11].value},{disabled:s[11].disabled||!s[11].checked&&s[6]>=s[5]},{class:I(s[2])},{title:!s[11].disabled&&!s[11].checked&&s[6]>=s[5]?s[7]:null},s[8]];function r(e){s[9].call(null,e,s[11])}let h={$$slots:{default:[W]},$$scope:{ctx:s}};for(let e=0;e<o.length;e+=1)h=b(h,o[e]);return void 0!==s[11].checked&&(h.checked=s[11].checked),a=new P({props:h}),E.push((()=>z(a,"checked",r))),a.$on("change",s[10]),{key:e,first:null,c(){l=p(),g(a.$$.fragment),this.h()},l(e){l=p(),v(a.$$.fragment,e),this.h()},h(){this.first=l},m(e,s){i(e,l,s),x(a,e,s),c=!0},p(e,l){s=e;const c=501&l?C(o,[16&l&&{name:s[4]},1&l&&{value:s[11].value},97&l&&{disabled:s[11].disabled||!s[11].checked&&s[6]>=s[5]},4&l&&{class:I(s[2])},225&l&&{title:!s[11].disabled&&!s[11].checked&&s[6]>=s[5]?s[7]:null},256&l&&y(s[8])]):{};16393&l&&(c.$$scope={dirty:l,ctx:s}),!t&&1&l&&(t=!0,c.checked=s[11].checked,j((()=>t=!1))),a.$set(c)},i(e){c||(m(a.$$.fragment,e),c=!0)},o(e){f(a.$$.fragment,e),c=!1},d(e){e&&n(l),N(a,e)}}}function Y(e){let s,l,a=null!=e[0]&&0!==e[0].length&&R(e);return{c(){a&&a.c(),s=p()},l(e){a&&a.l(e),s=p()},m(e,t){a&&a.m(e,t),i(e,s,t),l=!0},p(e,[l]){null!=e[0]&&0!==e[0].length?a?(a.p(e,l),1&l&&m(a,1)):(a=R(e),a.c(),m(a,1),a.m(s.parentNode,s)):a&&(h(),f(a,1,1,(()=>{a=null})),d())},i(e){l||(m(a),l=!0)},o(e){f(a),l=!1},d(e){a&&a.d(e),e&&n(s)}}}function B(e,s,l){let a,t;const c=["class","checkboxClass","labelClass","items","name","max"];let n=$(s,c),{class:o=null}=s,{checkboxClass:r=null}=s,{labelClass:i=null}=s,{items:h}=s,{name:u}=s,{max:d=1/0}=s;return h&&0!==h.length||console.error("Must have at least one item in the checkbox chip group"),e.$$set=e=>{s=b(b({},s),k(e)),l(8,n=$(s,c)),"class"in e&&l(1,o=e.class),"checkboxClass"in e&&l(2,r=e.checkboxClass),"labelClass"in e&&l(3,i=e.labelClass),"items"in e&&l(0,h=e.items),"name"in e&&l(4,u=e.name),"max"in e&&l(5,d=e.max)},e.$$.update=()=>{1&e.$$.dirty&&l(6,a=h.reduce(((e,s)=>e+s.checked),0)),32&e.$$.dirty&&l(7,t=`Can only select ${d} value${H(d)}.`)},[h,o,r,i,u,d,a,t,n,function(e,s){s.checked=e,l(0,h)},function(s){D(e,s)}]}class F extends e{constructor(e){super(),s(this,e,B,Y,l,{class:1,checkboxClass:2,labelClass:3,items:0,name:4,max:5})}}export{F as C};
