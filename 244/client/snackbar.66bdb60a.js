import{S as t,i as s,s as n,j as a,k as l,m as o,t as i,o as c,p as e,h as r,r as u,q as f,c as p,b as $,v as x,d,u as m,e as h,Q as b,f as C,g as y,y as k,w as g,x as v,$ as O,a0 as A}from"./client.111d88f4.js";import{B as j}from"./button.f5185675.js";import{c as S}from"./classes.2453fa25.js";function w(t){const s=t-1;return s*s*s+1}function E(t,{delay:s=0,duration:n=400,easing:a=w,x:l=0,y:o=0,opacity:i=0}={}){const c=getComputedStyle(t),e=+c.opacity,r="none"===c.transform?"":c.transform,u=e*(1-i);return{delay:s,duration:n,easing:a,css:(t,s)=>`\n\t\t\ttransform: ${r} translate(${(1-t)*l}px, ${(1-t)*o}px);\n\t\t\topacity: ${e-u*s}`}}function q(t,{transition:s=null,options:n=null}){return null===s?{delay:0,duration:0,css:()=>""}:s(t,n)}function B(t){let s,n;return s=new j({props:{class:S(t[2]),$$slots:{default:[D]},$$scope:{ctx:t}}}),s.$on("click",t[9]),{c(){a(s.$$.fragment)},l(t){l(s.$$.fragment,t)},m(t,a){o(s,t,a),n=!0},p(t,n){const a={};4&n&&(a.class=S(t[2])),1040&n&&(a.$$scope={dirty:n,ctx:t}),s.$set(a)},i(t){n||(i(s.$$.fragment,t),n=!0)},o(t){c(s.$$.fragment,t),n=!1},d(t){e(s,t)}}}function D(t){let s,n=t[4].text+"";return{c(){s=u(n)},l(t){s=x(t,n)},m(t,n){C(t,s,n)},p(t,a){16&a&&n!==(n=t[4].text+"")&&k(s,n)},d(t){t&&d(s)}}}function I(t){let s,n,a,l,o,e,j,w,E=null!=t[4]&&B(t);return{c(){s=r("div"),n=r("span"),a=u(t[3]),o=f(),E&&E.c(),this.h()},l(l){s=p(l,"DIV",{class:!0});var i=$(s);n=p(i,"SPAN",{class:!0});var c=$(n);a=x(c,t[3]),c.forEach(d),o=m(i),E&&E.l(i),i.forEach(d),this.h()},h(){h(n,"class",l=b(S("text",t[1]))+" svelte-1fhhann"),h(s,"class",e=b(S("snackbar",t[0]))+" svelte-1fhhann")},m(t,l){C(t,s,l),y(s,n),y(n,a),y(s,o),E&&E.m(s,null),w=!0},p(o,[r]){t=o,(!w||8&r)&&k(a,t[3]),(!w||2&r&&l!==(l=b(S("text",t[1]))+" svelte-1fhhann"))&&h(n,"class",l),null!=t[4]?E?(E.p(t,r),16&r&&i(E,1)):(E=B(t),E.c(),i(E,1),E.m(s,null)):E&&(g(),c(E,1,1,(()=>{E=null})),v()),(!w||1&r&&e!==(e=b(S("snackbar",t[0]))+" svelte-1fhhann"))&&h(s,"class",e)},i(n){w||(i(E),O((()=>{j||(j=A(s,q,{transition:t[7],options:t[8]},!0)),j.run(1)})),w=!0)},o(n){c(E),j||(j=A(s,q,{transition:t[7],options:t[8]},!1)),j.run(0),w=!1},d(t){t&&d(s),E&&E.d(),t&&j&&j.end()}}}function N(t,s,n){let{class:a=null}=s,{textClass:l=null}=s,{buttonClass:o=null}=s,{text:i}=s,{action:c=null}=s,{closeOnAction:e=!0}=s,{closeCallback:r}=s,{transition:u=E}=s,{transitionOptions:f={x:-20,duration:150}}=s;return t.$$set=t=>{"class"in t&&n(0,a=t.class),"textClass"in t&&n(1,l=t.textClass),"buttonClass"in t&&n(2,o=t.buttonClass),"text"in t&&n(3,i=t.text),"action"in t&&n(4,c=t.action),"closeOnAction"in t&&n(5,e=t.closeOnAction),"closeCallback"in t&&n(6,r=t.closeCallback),"transition"in t&&n(7,u=t.transition),"transitionOptions"in t&&n(8,f=t.transitionOptions)},[a,l,o,i,c,e,r,u,f,()=>{"function"==typeof c.callback&&c.callback(),e&&r()}]}class P extends t{constructor(t){super(),s(this,t,N,I,n,{class:0,textClass:1,buttonClass:2,text:3,action:4,closeOnAction:5,closeCallback:6,transition:7,transitionOptions:8})}}export{P as S,q as d};
