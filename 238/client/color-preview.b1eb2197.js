import{S as s,i as e,s as a,h as r,q as o,r as c,c as d,b as t,d as l,u as i,v as n,e as u,a8 as v,K as h,f as b,g as f,y as p,n as m}from"./client.00700382.js";import"./color-preview.72edcca8.js";function g(s){let e,a,g,j;return{c(){e=r("div"),a=r("div"),g=o(),j=c(s[0]),this.h()},l(r){e=d(r,"DIV",{class:!0});var o=t(e);a=d(o,"DIV",{class:!0,style:!0}),t(a).forEach(l),g=i(o),j=n(o,s[0]),o.forEach(l),this.h()},h(){u(a,"class","color svelte-1f1cgmh"),v(a,"background",s[0]),h(a,"bordered",s[1]),u(e,"class","preview svelte-1f1cgmh")},m(s,r){b(s,e,r),f(e,a),f(e,g),f(e,j)},p(s,[e]){1&e&&v(a,"background",s[0]),2&e&&h(a,"bordered",s[1]),1&e&&p(j,s[0])},i:m,o:m,d(s){s&&l(e)}}}function j(s,e,a){let{value:r}=e,{bordered:o=!1}=e;return s.$$set=s=>{"value"in s&&a(0,r=s.value),"bordered"in s&&a(1,o=s.bordered)},[r,o]}class k extends s{constructor(s){super(),e(this,s,j,g,a,{value:0,bordered:1})}}export{k as C};