import{S as s,i as l,s as a,M as t,t as e,o as c,G as n,h as u,q as i,c as o,b as r,u as d,d as h,J as f,K as p,e as b,Q as m,f as v,g as C,l as k,w as $,x as L,N as g,P as E,E as x,F as I,H as w,I as y}from"./client.bbf09479.js";import{c as j}from"./classes.2453fa25.js";function D(s){let l;const a=s[10].default,n=y(a,s,s[9],null);return{c(){n&&n.c()},l(s){n&&n.l(s)},m(s,a){n&&n.m(s,a),l=!0},p(s,l){n&&n.p&&512&l&&t(n,a,s,s[9],l,null,null)},i(s){l||(e(n,s),l=!0)},o(s){c(n,s),l=!1},d(s){n&&n.d(s)}}}function N(s){let l;const a=s[10].default,n=y(a,s,s[9],null);return{c(){n&&n.c()},l(s){n&&n.l(s)},m(s,a){n&&n.m(s,a),l=!0},p(s,l){n&&n.p&&512&l&&t(n,a,s,s[9],l,null,null)},i(s){l||(e(n,s),l=!0)},o(s){c(n,s),l=!1},d(s){n&&n.d(s)}}}function P(s){let l,a,t,x,I,w,y,P,S,V,q,A,B,F,G=s[6]&&D(s),H=[{type:"checkbox"},{class:x=j(s[2])},{disabled:s[5]},s[8]],J={};for(let s=0;s<H.length;s+=1)J=n(J,H[s]);let K=!s[6]&&N(s);return{c(){l=u("label"),G&&G.c(),a=i(),t=u("input"),I=i(),w=u("div"),y=u("div"),V=i(),K&&K.c(),this.h()},l(s){l=o(s,"LABEL",{class:!0});var e=r(l);G&&G.l(e),a=d(e),t=o(e,"INPUT",{type:!0,class:!0,disabled:!0}),I=d(e),w=o(e,"DIV",{class:!0});var c=r(w);y=o(c,"DIV",{class:!0}),r(y).forEach(h),c.forEach(h),V=d(e),K&&K.l(e),e.forEach(h),this.h()},h(){f(t,J),p(t,"svelte-trf1oe",!0),b(y,"class",P=m(j("thumb",s[4]))+" svelte-trf1oe"),b(w,"class",S=m(j("track",s[3]))+" svelte-trf1oe"),b(l,"class",q=m(j("switch",s[1]))+" svelte-trf1oe")},m(e,c){v(e,l,c),G&&G.m(l,null),C(l,a),C(l,t),t.checked=s[0],C(l,I),C(l,w),C(w,y),C(l,V),K&&K.m(l,null),A=!0,B||(F=[k(t,"change",s[11]),k(t,"change",s[12])],B=!0)},p(s,[n]){s[6]?G?(G.p(s,n),64&n&&e(G,1)):(G=D(s),G.c(),e(G,1),G.m(l,a)):G&&($(),c(G,1,1,(()=>{G=null})),L()),f(t,J=g(H,[{type:"checkbox"},(!A||4&n&&x!==(x=j(s[2])))&&{class:x},(!A||32&n)&&{disabled:s[5]},256&n&&s[8]])),1&n&&(t.checked=s[0]),p(t,"svelte-trf1oe",!0),(!A||16&n&&P!==(P=m(j("thumb",s[4]))+" svelte-trf1oe"))&&b(y,"class",P),(!A||8&n&&S!==(S=m(j("track",s[3]))+" svelte-trf1oe"))&&b(w,"class",S),s[6]?K&&($(),c(K,1,1,(()=>{K=null})),L()):K?(K.p(s,n),64&n&&e(K,1)):(K=N(s),K.c(),e(K,1),K.m(l,null)),(!A||2&n&&q!==(q=m(j("switch",s[1]))+" svelte-trf1oe"))&&b(l,"class",q)},i(s){A||(e(G),e(K),A=!0)},o(s){c(G),c(K),A=!1},d(s){s&&h(l),G&&G.d(),K&&K.d(),B=!1,E(F)}}}function S(s,l,a){const t=["class","inputClass","trackClass","thumbClass","value","disabled","slotLeft"];let e=x(l,t),{$$slots:c={},$$scope:u}=l,{class:i=null}=l,{inputClass:o=null}=l,{trackClass:r=null}=l,{thumbClass:d=null}=l,{value:h=!1}=l,{disabled:f=!1}=l,{slotLeft:p=!1}=l;const b=I();return s.$$set=s=>{l=n(n({},l),w(s)),a(8,e=x(l,t)),"class"in s&&a(1,i=s.class),"inputClass"in s&&a(2,o=s.inputClass),"trackClass"in s&&a(3,r=s.trackClass),"thumbClass"in s&&a(4,d=s.thumbClass),"value"in s&&a(0,h=s.value),"disabled"in s&&a(5,f=s.disabled),"slotLeft"in s&&a(6,p=s.slotLeft),"$$scope"in s&&a(9,u=s.$$scope)},[h,i,o,r,d,f,p,b,e,u,c,function(){h=this.checked,a(0,h)},s=>b("change",{value:s.target.checked,nativeEvent:s})]}class V extends s{constructor(s){super(),l(this,s,S,P,a,{class:1,inputClass:2,trackClass:3,thumbClass:4,value:0,disabled:5,slotLeft:6})}}export{V as S};
