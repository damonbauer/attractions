import{S as s,i as a,s as n,G as t,h as e,c,b as o,d as i,J as l,K as r,f,N as d,n as u,E as h,H as m}from"./client.c2f5b28b.js";import{c as g}from"./classes.2453fa25.js";function p(s){let a,n,h=[{class:n=g("dot",s[0])},s[6]],m={};for(let s=0;s<h.length;s+=1)m=t(m,h[s]);return{c(){a=e("div"),this.h()},l(s){a=c(s,"DIV",{class:!0}),o(a).forEach(i),this.h()},h(){l(a,m),r(a,"info",s[1]),r(a,"attention",s[2]),r(a,"success",s[4]),r(a,"danger",s[3]),r(a,"small",s[5]),r(a,"svelte-wssaih",!0)},m(s,n){f(s,a,n)},p(s,[t]){l(a,m=d(h,[1&t&&n!==(n=g("dot",s[0]))&&{class:n},64&t&&s[6]])),r(a,"info",s[1]),r(a,"attention",s[2]),r(a,"success",s[4]),r(a,"danger",s[3]),r(a,"small",s[5]),r(a,"svelte-wssaih",!0)},i:u,o:u,d(s){s&&i(a)}}}function b(s,a,n){const e=["class","info","attention","danger","success","small"];let c=h(a,e),{class:o=null}=a,{info:i=!1}=a,{attention:l=!1}=a,{danger:r=!1}=a,{success:f=!1}=a,{small:d=!1}=a;return i+l+r+f>1&&console.warn("A dot can either be info, attention, danger or success, not several of them"),s.$$set=s=>{a=t(t({},a),m(s)),n(6,c=h(a,e)),"class"in s&&n(0,o=s.class),"info"in s&&n(1,i=s.info),"attention"in s&&n(2,l=s.attention),"danger"in s&&n(3,r=s.danger),"success"in s&&n(4,f=s.success),"small"in s&&n(5,d=s.small)},[o,i,l,r,f,d,c]}class v extends s{constructor(s){super(),a(this,s,b,p,n,{class:0,info:1,attention:2,danger:3,success:4,small:5})}}export{v as D};
