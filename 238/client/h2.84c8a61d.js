import{S as s,i as l,s as a,I as n,h as t,r as i,c,b as e,v as o,d as r,e as u,f as h,g as d,q as f,u as p,M as $,t as m,o as v,B as w}from"./client.66f74232.js";function g(s){let l,a;return{c(){l=t("a"),a=i("#"),this.h()},l(s){l=c(s,"A",{href:!0,class:!0});var n=e(l);a=o(n,"#"),n.forEach(r),this.h()},h(){u(l,"href",s[1]),u(l,"class","ml")},m(s,n){h(s,l,n),d(l,a)},p(s,a){2&a&&u(l,"href",s[1])},d(s){s&&r(l)}}}function x(s){let l,a,i;const o=s[3].default,w=n(o,s,s[2],null);let x=null!=s[1]&&g(s);return{c(){l=t("h2"),w&&w.c(),a=f(),x&&x.c(),this.h()},l(s){l=c(s,"H2",{id:!0,class:!0});var n=e(l);w&&w.l(n),a=p(n),x&&x.l(n),n.forEach(r),this.h()},h(){u(l,"id",s[0]),u(l,"class","svelte-eaesr4")},m(s,n){h(s,l,n),w&&w.m(l,null),d(l,a),x&&x.m(l,null),i=!0},p(s,[a]){w&&w.p&&4&a&&$(w,o,s,s[2],a,null,null),null!=s[1]?x?x.p(s,a):(x=g(s),x.c(),x.m(l,null)):x&&(x.d(1),x=null),(!i||1&a)&&u(l,"id",s[0])},i(s){i||(m(w,s),i=!0)},o(s){v(w,s),i=!1},d(s){s&&r(l),w&&w.d(s),x&&x.d()}}}function E(s,l,a){let{$$slots:n={},$$scope:t}=l,{id:i=null}=l,c=i&&`#${i}`;return w((function(){null!=i&&a(1,c=window.location.origin+window.location.pathname+c)})),s.$$set=s=>{"id"in s&&a(0,i=s.id),"$$scope"in s&&a(2,t=s.$$scope)},[i,c,t,n]}class H extends s{constructor(s){super(),l(this,s,E,x,a,{id:0})}}export{H};