import{S as s,i as l,s as e,D as a,E as t,h as n,c,b as o,d as p,F as r,G as u,f as i,H as $,I as m,t as f,o as h,J as d,K as g,j as v,k as b,m as j,p as x,q as E,u as k,e as q,Q as I,M as y,r as L,v as O,y as S}from"./client.e84cb235.js";import{B as w}from"./button.e1955733.js";import{c as A}from"./classes.ae819103.js";const B=s=>({}),C=s=>({closeOtherPanels:s[1]});function D(s){let l,e,d;const g=s[5].default,v=a(g,s,s[4],C);let b=[{class:e=A("accordion",s[0])},s[2]],j={};for(let s=0;s<b.length;s+=1)j=t(j,b[s]);return{c(){l=n("ul"),v&&v.c(),this.h()},l(s){l=c(s,"UL",{class:!0});var e=o(l);v&&v.l(e),e.forEach(p),this.h()},h(){r(l,j),u(l,"svelte-vpk305",!0)},m(s,e){i(s,l,e),v&&v.m(l,null),d=!0},p(s,[a]){v&&v.p&&16&a&&$(v,g,s,s[4],a,B,C),r(l,j=m(b,[(!d||1&a&&e!==(e=A("accordion",s[0])))&&{class:e},4&a&&s[2]])),u(l,"svelte-vpk305",!0)},i(s){d||(f(v,s),d=!0)},o(s){h(v,s),d=!1},d(s){s&&p(l),v&&v.d(s)}}}function F(s,l,e){const a=["class","multiple"];let n=d(l,a),{$$slots:c={},$$scope:o}=l,{class:p=null}=l,{multiple:r=!1}=l,u=null;return s.$$set=s=>{l=t(t({},l),g(s)),e(2,n=d(l,a)),"class"in s&&e(0,p=s.class),"multiple"in s&&e(3,r=s.multiple),"$$scope"in s&&e(4,o=s.$$scope)},[p,function({detail:s}){null==u||u===s||r||u.close(),u=s},n,r,o,c]}class G extends s{constructor(s){super(),l(this,s,F,D,e,{class:0,multiple:3})}}const H=s=>({}),J=s=>({toggle:s[3].toggle});function K(s){let l;return{c(){l=L(s[2])},l(e){l=O(e,s[2])},m(s,e){i(s,l,e)},p(s,e){4&e&&S(l,s[2])},d(s){s&&p(l)}}}function M(s){let l,e,t,r,m;const d=s[4].handle,g=a(d,s,s[5],J),y=g||function(s){let l,e;return l=new w({props:{$$slots:{default:[K]},$$scope:{ctx:s}}}),l.$on("click",s[3].toggle),{c(){v(l.$$.fragment)},l(s){b(l.$$.fragment,s)},m(s,a){j(l,s,a),e=!0},p(s,e){const a={};36&e&&(a.$$scope={dirty:e,ctx:s}),l.$set(a)},i(s){e||(f(l.$$.fragment,s),e=!0)},o(s){h(l.$$.fragment,s),e=!1},d(s){x(l,s)}}}(s),L=s[4].default,O=a(L,s,s[5],null);return{c(){l=n("li"),y&&y.c(),t=E(),r=n("section"),O&&O.c(),this.h()},l(s){l=c(s,"LI",{class:!0});var e=o(l);y&&y.l(e),e.forEach(p),t=k(s),r=c(s,"SECTION",{class:!0});var a=o(r);O&&O.l(a),a.forEach(p),this.h()},h(){q(l,"class",e=I(A("panel",s[1]))+" svelte-16quehj"),u(l,"open",s[0]),q(r,"class","svelte-16quehj")},m(s,e){i(s,l,e),y&&y.m(l,null),i(s,t,e),i(s,r,e),O&&O.m(r,null),m=!0},p(s,[a]){g?g.p&&32&a&&$(g,d,s,s[5],a,H,J):y&&y.p&&4&a&&y.p(s,a),(!m||2&a&&e!==(e=I(A("panel",s[1]))+" svelte-16quehj"))&&q(l,"class",e),3&a&&u(l,"open",s[0]),O&&O.p&&32&a&&$(O,L,s,s[5],a,null,null)},i(s){m||(f(y,s),f(O,s),m=!0)},o(s){h(y,s),h(O,s),m=!1},d(s){s&&p(l),y&&y.d(s),s&&p(t),s&&p(r),O&&O.d(s)}}}function N(s,l,e){let{$$slots:a={},$$scope:t}=l,{class:n=null}=l,{label:c=null}=l,{open:o=!1}=l;const p={close(){e(0,o=!1)},toggle(){r(o?"panel-close":"panel-open",p),e(0,o=!o)}},r=y();return s.$$set=s=>{"class"in s&&e(1,n=s.class),"label"in s&&e(2,c=s.label),"open"in s&&e(0,o=s.open),"$$scope"in s&&e(5,t=s.$$scope)},[o,n,c,p,a,t]}class P extends s{constructor(s){super(),l(this,s,N,M,e,{class:1,label:2,open:0})}}export{G as A,P as a};
