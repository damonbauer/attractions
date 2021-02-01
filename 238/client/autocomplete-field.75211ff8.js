import{S as t,i as n,s as e,a as o,c as l,b as s,d as c,e as r,f as i,g as a,n as u,j as h,k as f,m as p,t as m,o as $,p as d,E as g,F as v,G as b,H as k,h as x,q as w,u as y,J as E,K as O,a5 as L,l as j,N as C,P as I,R as N,D as S,w as D,x as M,r as P,v as Q,A as T,T as q,W as A,I as B,y as V,M as R,L as U}from"./client.00700382.js";import{D as F,a as G}from"./dropdown.d5981bea.js";import{B as H}from"./button.d86b751b.js";import{L as J}from"./loading.e0429bd0.js";import{A as K}from"./autocomplete-option.e05b01d1.js";import{p as W}from"./plural-s.31bb9da9.js";import{c as z}from"./classes.2453fa25.js";function X(t){let n,e,h,f;return{c(){n=o("svg"),e=o("circle"),h=o("circle"),f=o("circle"),this.h()},l(t){n=l(t,"svg",{xmlns:!0,width:!0,height:!0,viewBox:!0,fill:!0,stroke:!0,"stroke-width":!0,"stroke-linecap":!0,"stroke-linejoin":!0},1);var o=s(n);e=l(o,"circle",{cx:!0,cy:!0,r:!0},1),s(e).forEach(c),h=l(o,"circle",{cx:!0,cy:!0,r:!0},1),s(h).forEach(c),f=l(o,"circle",{cx:!0,cy:!0,r:!0},1),s(f).forEach(c),o.forEach(c),this.h()},h(){r(e,"cx","12"),r(e,"cy","12"),r(e,"r","1"),r(h,"cx","19"),r(h,"cy","12"),r(h,"r","1"),r(f,"cx","5"),r(f,"cy","12"),r(f,"r","1"),r(n,"xmlns","http://www.w3.org/2000/svg"),r(n,"width","24"),r(n,"height","24"),r(n,"viewBox","0 0 24 24"),r(n,"fill","none"),r(n,"stroke","currentColor"),r(n,"stroke-width","2"),r(n,"stroke-linecap","round"),r(n,"stroke-linejoin","round")},m(t,o){i(t,n,o),a(n,e),a(n,h),a(n,f)},p:u,i:u,o:u,d(t){t&&c(n)}}}class Y extends t{constructor(t){super(),n(this,t,null,X,e,{})}}function Z(t,{callback:n,args:e=[]}){let o=null;return"undefined"!=typeof IntersectionObserver&&(o=new IntersectionObserver((function(t,o){t.forEach((t=>{t.isIntersecting&&n(...e)}))}),{root:null,threshold:.5}),o.observe(t)),{destroy(){null!=o&&o.disconnect()}}}const _=t=>({}),tt=t=>({loadMoreOptions:t[13]});function nt(t,n,e){const o=t.slice();return o[28]=n[e],o}function et(t,n,e){const o=t.slice();return o[32]=n[e],o}const ot=t=>({}),lt=t=>({}),st=t=>({}),ct=t=>({}),rt=t=>({}),it=t=>({});function at(t){let n;return{c(){n=P("close the options")},l(t){n=Q(t,"close the options")},m(t,e){i(t,n,e)},d(t){t&&c(n)}}}function ut(t){let n,e,o,u=[],h=new Map,f=t[9];const p=t=>t[28];for(let n=0;n<f.length;n+=1){let e=nt(t,f,n),o=p(e);h.set(o,u[n]=gt(o,e))}let d=t[8]&&null!=t[10]&&vt(t);return{c(){n=x("ul");for(let t=0;t<u.length;t+=1)u[t].c();e=w(),d&&d.c(),this.h()},l(t){n=l(t,"UL",{class:!0});var o=s(n);for(let t=0;t<u.length;t+=1)u[t].l(o);e=y(o),d&&d.l(o),o.forEach(c),this.h()},h(){r(n,"class","options-list svelte-mnwm0g")},m(t,l){i(t,n,l);for(let t=0;t<u.length;t+=1)u[t].m(n,null);a(n,e),d&&d.m(n,null),o=!0},p(t,o){16798273&o[0]&&(f=t[9],D(),u=q(u,o,p,1,t,f,h,n,A,gt,e,nt),M()),t[8]&&null!=t[10]?d?(d.p(t,o),1280&o[0]&&m(d,1)):(d=vt(t),d.c(),m(d,1),d.m(n,null)):d&&(D(),$(d,1,1,(()=>{d=null})),M())},i(t){if(!o){for(let t=0;t<f.length;t+=1)m(u[t]);m(d),o=!0}},o(t){for(let t=0;t<u.length;t+=1)$(u[t]);$(d),o=!1},d(t){t&&c(n);for(let t=0;t<u.length;t+=1)u[t].d();d&&d.d()}}}function ht(t){let n;const e=t[18]["not-enough-input"],o=B(e,t,t[24],ct),u=o||function(t){let n,e,o,u,h,f,p=W(t[4])+"";return{c(){n=x("div"),e=P("Type\n          "),o=P(t[4]),u=P("\n          character"),h=P(p),f=P("\n          to search"),this.h()},l(r){n=l(r,"DIV",{class:!0});var i=s(n);e=Q(i,"Type\n          "),o=Q(i,t[4]),u=Q(i,"\n          character"),h=Q(i,p),f=Q(i,"\n          to search"),i.forEach(c),this.h()},h(){r(n,"class","notice svelte-mnwm0g")},m(t,l){i(t,n,l),a(n,e),a(n,o),a(n,u),a(n,h),a(n,f)},p(t,n){16&n[0]&&V(o,t[4]),16&n[0]&&p!==(p=W(t[4])+"")&&V(h,p)},d(t){t&&c(n)}}}(t);return{c(){u&&u.c()},l(t){u&&u.l(t)},m(t,e){u&&u.m(t,e),n=!0},p(t,n){o?o.p&&16777216&n[0]&&R(o,e,t,t[24],n,st,ct):u&&u.p&&16&n[0]&&u.p(t,n)},i(t){n||(m(u,t),n=!0)},o(t){$(u,t),n=!1},d(t){u&&u.d(t)}}}function ft(t){let n;const e=t[18]["too-many-options"],o=B(e,t,t[24],it),u=o||function(t){let n,e,o,u,h,f=W(t[5])+"";return{c(){n=x("div"),e=P("Cannot select more than\n          "),o=P(t[5]),u=P("\n          option"),h=P(f),this.h()},l(r){n=l(r,"DIV",{class:!0});var i=s(n);e=Q(i,"Cannot select more than\n          "),o=Q(i,t[5]),u=Q(i,"\n          option"),h=Q(i,f),i.forEach(c),this.h()},h(){r(n,"class","notice svelte-mnwm0g")},m(t,l){i(t,n,l),a(n,e),a(n,o),a(n,u),a(n,h)},p(t,n){32&n[0]&&V(o,t[5]),32&n[0]&&f!==(f=W(t[5])+"")&&V(h,f)},d(t){t&&c(n)}}}(t);return{c(){u&&u.c()},l(t){u&&u.l(t)},m(t,e){u&&u.m(t,e),n=!0},p(t,n){o?o.p&&16777216&n[0]&&R(o,e,t,t[24],n,rt,it):u&&u.p&&32&n[0]&&u.p(t,n)},i(t){n||(m(u,t),n=!0)},o(t){$(u,t),n=!1},d(t){u&&u.d(t)}}}function pt(t){return{c:u,l:u,m:u,p:u,i:u,o:u,d:u}}function mt(t){let n,e,o=[],l=new Map,s=t[12](t[31]);const r=t=>t[32];for(let n=0;n<s.length;n+=1){let e=et(t,s,n),c=r(e);l.set(c,o[n]=$t(c,e))}return{c(){for(let t=0;t<o.length;t+=1)o[t].c();n=S()},l(t){for(let n=0;n<o.length;n+=1)o[n].l(t);n=S()},m(t,l){for(let n=0;n<o.length;n+=1)o[n].m(t,l);i(t,n,l),e=!0},p(t,e){21057&e[0]&&(s=t[12](t[31]),D(),o=q(o,e,r,1,t,s,l,n.parentNode,A,$t,n,et),M())},i(t){if(!e){for(let t=0;t<s.length;t+=1)m(o[t]);e=!0}},o(t){for(let t=0;t<o.length;t+=1)$(o[t]);e=!1},d(t){for(let n=0;n<o.length;n+=1)o[n].d(t);t&&c(n)}}}function $t(t,n){let e,o,l,s;function r(){return n[22](n[32])}var a=n[6];function u(t){return{props:{option:t[32],query:t[0]}}}return a&&(o=new a(u(n)),o.$on("click",r)),{key:t,first:null,c(){e=S(),o&&h(o.$$.fragment),l=S(),this.h()},l(t){e=S(),o&&f(o.$$.fragment,t),l=S(),this.h()},h(){this.first=e},m(t,n){i(t,e,n),o&&p(o,t,n),i(t,l,n),s=!0},p(t,e){n=t;const s={};if(512&e[0]&&(s.option=n[32]),1&e[0]&&(s.query=n[0]),a!==(a=n[6])){if(o){D();const t=o;$(t.$$.fragment,1,0,(()=>{d(t,1)})),M()}a?(o=new a(u(n)),o.$on("click",r),h(o.$$.fragment),m(o.$$.fragment,1),p(o,l.parentNode,l)):o=null}else a&&o.$set(s)},i(t){s||(o&&m(o.$$.fragment,t),s=!0)},o(t){o&&$(o.$$.fragment,t),s=!1},d(t){t&&c(e),t&&c(l),o&&d(o,t)}}}function dt(t){let n;const e=t[18]["loading-options"],o=B(e,t,t[24],lt),u=o||function(t){let n,e,o,u;return e=new J({}),{c(){n=x("li"),h(e.$$.fragment),o=P("\n                Loading..."),this.h()},l(t){n=l(t,"LI",{class:!0});var r=s(n);f(e.$$.fragment,r),o=Q(r,"\n                Loading..."),r.forEach(c),this.h()},h(){r(n,"class","loading-options svelte-mnwm0g")},m(t,l){i(t,n,l),p(e,n,null),a(n,o),u=!0},i(t){u||(m(e.$$.fragment,t),u=!0)},o(t){$(e.$$.fragment,t),u=!1},d(t){t&&c(n),d(e)}}}();return{c(){u&&u.c()},l(t){u&&u.l(t)},m(t,e){u&&u.m(t,e),n=!0},p(t,n){o&&o.p&&16777216&n[0]&&R(o,e,t,t[24],n,ot,lt)},i(t){n||(m(u,t),n=!0)},o(t){$(u,t),n=!1},d(t){u&&u.d(t)}}}function gt(t,n){let e,o,l,s,r={ctx:n,current:null,token:null,hasCatch:!1,pending:dt,then:mt,catch:pt,value:31,blocks:[,,,]};return T(l=n[28],r),{key:t,first:null,c(){e=S(),o=S(),r.block.c(),this.h()},l(t){e=S(),o=S(),r.block.l(t),this.h()},h(){this.first=e},m(t,n){i(t,e,n),i(t,o,n),r.block.m(t,r.anchor=n),r.mount=()=>o.parentNode,r.anchor=o,s=!0},p(t,e){if(n=t,r.ctx=n,512&e[0]&&l!==(l=n[28])&&T(l,r));else{const t=n.slice();t[31]=r.resolved,r.block.p(t,e)}},i(t){s||(m(r.block),s=!0)},o(t){for(let t=0;t<3;t+=1){const n=r.blocks[t];$(n)}s=!1},d(t){t&&c(e),t&&c(o),r.block.d(t),r.token=null,r=null}}}function vt(t){let n,e,o,l={ctx:t,current:null,token:null,hasCatch:!1,pending:wt,then:kt,catch:bt,value:27,blocks:[,,,]};return T(e=Promise.all(t[9]),l),{c(){n=S(),l.block.c()},l(t){n=S(),l.block.l(t)},m(t,e){i(t,n,e),l.block.m(t,l.anchor=e),l.mount=()=>n.parentNode,l.anchor=n,o=!0},p(n,o){if(t=n,l.ctx=t,512&o[0]&&e!==(e=Promise.all(t[9]))&&T(e,l));else{const n=t.slice();n[27]=l.resolved,l.block.p(n,o)}},i(t){o||(m(l.block),o=!0)},o(t){for(let t=0;t<3;t+=1){const n=l.blocks[t];$(n)}o=!1},d(t){t&&c(n),l.block.d(t),l.token=null,l=null}}}function bt(t){return{c:u,l:u,m:u,p:u,i:u,o:u,d:u}}function kt(t){let n;const e=t[18]["more-options"],o=B(e,t,t[24],tt),a=o||function(t){let n,e,o,a,u;return e=new H({props:{$$slots:{default:[xt]},$$scope:{ctx:t}}}),e.$on("click",t[13]),{c(){n=x("li"),h(e.$$.fragment),this.h()},l(t){n=l(t,"LI",{class:!0});var o=s(n);f(e.$$.fragment,o),o.forEach(c),this.h()},h(){r(n,"class","more-options svelte-mnwm0g")},m(l,s){i(l,n,s),p(e,n,null),o=!0,a||(u=U(Z.call(null,n,{callback:t[13]})),a=!0)},p(t,n){const o={};16777216&n[0]&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){o||(m(e.$$.fragment,t),o=!0)},o(t){$(e.$$.fragment,t),o=!1},d(t){t&&c(n),d(e),a=!1,u()}}}(t);return{c(){a&&a.c()},l(t){a&&a.l(t)},m(t,e){a&&a.m(t,e),n=!0},p(t,n){o&&o.p&&16777216&n[0]&&R(o,e,t,t[24],n,_,tt)},i(t){n||(m(a,t),n=!0)},o(t){$(a,t),n=!1},d(t){a&&a.d(t)}}}function xt(t){let n,e,o;return n=new Y({}),{c(){h(n.$$.fragment),e=P("\n                  load more options")},l(t){f(n.$$.fragment,t),e=Q(t,"\n                  load more options")},m(t,l){p(n,t,l),i(t,e,l),o=!0},i(t){o||(m(n.$$.fragment,t),o=!0)},o(t){$(n.$$.fragment,t),o=!1},d(t){d(n,t),t&&c(e)}}}function wt(t){return{c:u,l:u,m:u,p:u,i:u,o:u,d:u}}function yt(t){let n,e,o,a,u,g,v;e=new H({props:{noRipple:!0,$$slots:{default:[at]},$$scope:{ctx:t}}}),e.$on("click",t[21]);const b=[ft,ht,ut],k=[];function E(t,n){return t[1].length>=t[5]?0:t[4]>0&&(null==t[0]||t[0].length<t[4])?1:2}return a=E(t),u=k[a]=b[a](t),{c(){n=x("div"),h(e.$$.fragment),o=w(),u.c(),g=S(),this.h()},l(t){n=l(t,"DIV",{class:!0});var r=s(n);f(e.$$.fragment,r),r.forEach(c),o=y(t),u.l(t),g=S(),this.h()},h(){r(n,"class","shown-on-focus svelte-mnwm0g")},m(t,l){i(t,n,l),p(e,n,null),i(t,o,l),k[a].m(t,l),i(t,g,l),v=!0},p(t,n){const o={};16777216&n[0]&&(o.$$scope={dirty:n,ctx:t}),e.$set(o);let l=a;a=E(t),a===l?k[a].p(t,n):(D(),$(k[l],1,1,(()=>{k[l]=null})),M(),u=k[a],u?u.p(t,n):(u=k[a]=b[a](t),u.c()),m(u,1),u.m(g.parentNode,g))},i(t){v||(m(e.$$.fragment,t),m(u),v=!0)},o(t){$(e.$$.fragment,t),$(u),v=!1},d(t){t&&c(n),d(e),t&&c(o),k[a].d(t),t&&c(g)}}}function Et(t){let n,e,o,s,r,a,u=[{disabled:t[7]},t[16]],g={};for(let t=0;t<u.length;t+=1)g=b(g,u[t]);return o=new G({props:{$$slots:{default:[yt]},$$scope:{ctx:t}}}),{c(){n=x("input"),e=w(),h(o.$$.fragment),this.h()},l(t){n=l(t,"INPUT",{disabled:!0}),e=y(t),f(o.$$.fragment,t),this.h()},h(){E(n,g),O(n,"svelte-mnwm0g",!0)},m(l,c){i(l,n,c),t[19](n),L(n,t[0]),i(l,e,c),p(o,l,c),s=!0,r||(a=[j(n,"input",t[20]),j(n,"focus",t[15])],r=!0)},p(t,e){E(n,g=C(u,[(!s||128&e[0])&&{disabled:t[7]},65536&e[0]&&t[16]])),1&e[0]&&n.value!==t[0]&&L(n,t[0]),O(n,"svelte-mnwm0g",!0);const l={};16779127&e[0]&&(l.$$scope={dirty:e,ctx:t}),o.$set(l)},i(t){s||(m(o.$$.fragment,t),s=!0)},o(t){$(o.$$.fragment,t),s=!1},d(l){l&&c(n),t[19](null),l&&c(e),d(o,l),r=!1,I(a)}}}function Ot(t){let n,e;return n=new F({props:{class:z("autocomplete-field",t[3]),open:t[2],$$slots:{default:[Et]},$$scope:{ctx:t}}}),n.$on("change",t[23]),{c(){h(n.$$.fragment)},l(t){f(n.$$.fragment,t)},m(t,o){p(n,t,o),e=!0},p(t,e){const o={};8&e[0]&&(o.class=z("autocomplete-field",t[3])),4&e[0]&&(o.open=t[2]),16846839&e[0]&&(o.$$scope={dirty:e,ctx:t}),n.$set(o)},i(t){e||(m(n.$$.fragment,t),e=!0)},o(t){$(n.$$.fragment,t),e=!1},d(t){d(n,t)}}}function Lt(t,n,e){const o=["class","getOptions","selection","minSearchLength","maxOptions","searchQuery","optionComponent","disabled","focus"];let l=g(n,o),{$$slots:s={},$$scope:c}=n,{class:r=null}=n,{getOptions:i}=n,{selection:a=[]}=n,{minSearchLength:u=3}=n,{maxOptions:h=1/0}=n,{searchQuery:f=""}=n,{optionComponent:p=K}=n,{disabled:m=!1}=n,{focus:$=!1}=n,d=!1,x=[],w=null,y=null;function E(t){a.push(t),e(1,a),e(0,f=""),O("change",{value:a}),a.length<h?y.focus():e(2,$=!1)}const O=v();return t.$$set=t=>{n=b(b({},n),k(t)),e(16,l=g(n,o)),"class"in t&&e(3,r=t.class),"getOptions"in t&&e(17,i=t.getOptions),"selection"in t&&e(1,a=t.selection),"minSearchLength"in t&&e(4,u=t.minSearchLength),"maxOptions"in t&&e(5,h=t.maxOptions),"searchQuery"in t&&e(0,f=t.searchQuery),"optionComponent"in t&&e(6,p=t.optionComponent),"disabled"in t&&e(7,m=t.disabled),"focus"in t&&e(2,$=t.focus),"$$scope"in t&&e(24,c=t.$$scope)},t.$$.update=()=>{var n;1&t.$$.dirty[0]&&((n=f).length>=u?e(10,w=i(n)):e(10,w=null),e(9,x=[]),null!=w&&x.push(w.next()))},[f,a,$,r,u,h,p,m,d,x,w,y,function(t){return e(8,d=!t.done),null==t.value?[]:t.value.filter((t=>null==a.find((n=>n===t))))},function(t){x.push(w.next()),e(9,x),null!=t&&t.detail.nativeEvent.stopPropagation()},E,function(){e(9,x),e(2,$=!0)},l,i,s,function(t){N[t?"unshift":"push"]((()=>{y=t,e(11,y)}))},function(){f=this.value,e(0,f)},()=>e(2,$=!1),t=>E(t),({detail:t})=>e(2,$=t.value),c]}class jt extends t{constructor(t){super(),n(this,t,Lt,Ot,e,{class:3,getOptions:17,selection:1,minSearchLength:4,maxOptions:5,searchQuery:0,optionComponent:6,disabled:7,focus:2},[-1,-1])}}export{jt as A,Y as M,Z as c};
