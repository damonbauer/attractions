import{_ as n,a as t,b as o,c,i,s as r,d as a,S as e,p as u,q as f,r as s,u as l,v as p,w as $,J as m,X as d,a1 as h,o as g,x as v,f as y,g as x,z as b,h as L,j as O,W as j,L as S,k as w,l as Q,m as q,B as D,C as I,N as E,Z as M,$ as R,a9 as k,O as C,R as V,P as A,a2 as B,y as P,A as T,D as z,I as J,M as N,T as U,U as W,n as X}from"./client.d1b23065.js";import{B as Z}from"./button.5d4db4f4.js";import{c as _}from"./classes.541c5f2a.js";import{p as F}from"./plural-s.31bb9da9.js";import{C as G}from"./chip.25f08563.js";import{X as H}from"./x.35eadfc8.js";import{L as K}from"./loading.48f6451c.js";import{A as Y,c as nn,M as tn}from"./autocomplete-field.bd347d9e.js";function on(n){var c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var i,r=t(n);if(c){var a=t(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return o(this,i)}}var cn=function(n){return{loadMoreOptions:131072&n}},rn=function(n){return{loadMoreOptions:n[17]}},an=function(n){return{}},en=function(n){return{slot:"loading-options"}},un=function(n){return{}},fn=function(n){return{slot:"not-enough-input"}},sn=function(n){return{}},ln=function(n){return{slot:"too-many-options"}};function pn(n,t,o){var c=n.slice();return c[18]=t[o],c}function $n(n){var t,o;return t=new H({}),{c:function(){u(t.$$.fragment)},l:function(n){f(t.$$.fragment,n)},m:function(n,c){s(t,n,c),o=!0},i:function(n){o||(l(t.$$.fragment,n),o=!0)},o:function(n){p(t.$$.fragment,n),o=!1},d:function(n){$(t,n)}}}function mn(n){var t,o,c,i,r=n[18].name+"";return(c=new Z({props:{neutral:!0,round:!0,small:!0,$$slots:{default:[$n]},$$scope:{ctx:n}}})).$on("click",(function(){return n[10](n[18])})),{c:function(){t=P(r),o=v(),u(c.$$.fragment)},l:function(n){t=T(n,r),o=b(n),f(c.$$.fragment,n)},m:function(n,r){w(n,t,r),w(n,o,r),s(c,n,r),i=!0},p:function(o,a){n=o,(!i||1&a)&&r!==(r=n[18].name+"")&&z(t,r);var e={};32768&a&&(e.$$scope={dirty:a,ctx:n}),c.$set(e)},i:function(n){i||(l(c.$$.fragment,n),i=!0)},o:function(n){p(c.$$.fragment,n),i=!1},d:function(n){n&&L(t),n&&L(o),$(c,n)}}}function dn(n){var t,o;return t=new G({props:{noPadding:!0,$$slots:{default:[mn]},$$scope:{ctx:n}}}),{c:function(){u(t.$$.fragment)},l:function(n){f(t.$$.fragment,n)},m:function(n,c){s(t,n,c),o=!0},p:function(n,o){var c={};32769&o&&(c.$$scope={dirty:o,ctx:n}),t.$set(c)},i:function(n){o||(l(t.$$.fragment,n),o=!0)},o:function(n){p(t.$$.fragment,n),o=!1},d:function(n){$(t,n)}}}function hn(n){var t,o=n[9]["too-many-options"],c=J(o,n,n[15],ln),i=c||function(n){var t,o,c,i,r,a=F(n[4])+"";return{c:function(){t=g("div"),o=P("Cannot select more than\n        "),c=P(n[4]),i=P("\n        option"),r=P(a),this.h()},l:function(e){t=y(e,"DIV",{class:!0});var u=x(t);o=T(u,"Cannot select more than\n        "),c=T(u,n[4]),i=T(u,"\n        option"),r=T(u,a),u.forEach(L),this.h()},h:function(){O(t,"class","notice svelte-fa1gq0")},m:function(n,a){w(n,t,a),Q(t,o),Q(t,c),Q(t,i),Q(t,r)},p:function(n,t){16&t&&z(c,n[4]),16&t&&a!==(a=F(n[4])+"")&&z(r,a)},d:function(n){n&&L(t)}}}(n);return{c:function(){i&&i.c()},l:function(n){i&&i.l(n)},m:function(n,o){i&&i.m(n,o),t=!0},p:function(n,t){c?c.p&&32768&t&&N(c,o,n,n[15],t,sn,ln):i&&i.p&&16&t&&i.p(n,t)},i:function(n){t||(l(i,n),t=!0)},o:function(n){p(i,n),t=!1},d:function(n){i&&i.d(n)}}}function gn(n){var t,o=n[9]["not-enough-input"],c=J(o,n,n[15],fn),i=c||function(n){var t,o,c,i,r,a,e=F(n[3])+"";return{c:function(){t=g("div"),o=P("Type\n        "),c=P(n[3]),i=P("\n        character"),r=P(e),a=P("\n        to search"),this.h()},l:function(u){t=y(u,"DIV",{class:!0});var f=x(t);o=T(f,"Type\n        "),c=T(f,n[3]),i=T(f,"\n        character"),r=T(f,e),a=T(f,"\n        to search"),f.forEach(L),this.h()},h:function(){O(t,"class","notice svelte-fa1gq0")},m:function(n,e){w(n,t,e),Q(t,o),Q(t,c),Q(t,i),Q(t,r),Q(t,a)},p:function(n,t){8&t&&z(c,n[3]),8&t&&e!==(e=F(n[3])+"")&&z(r,e)},d:function(n){n&&L(t)}}}(n);return{c:function(){i&&i.c()},l:function(n){i&&i.l(n)},m:function(n,o){i&&i.m(n,o),t=!0},p:function(n,t){c?c.p&&32768&t&&N(c,o,n,n[15],t,un,fn):i&&i.p&&8&t&&i.p(n,t)},i:function(n){t||(l(i,n),t=!0)},o:function(n){p(i,n),t=!1},d:function(n){i&&i.d(n)}}}function vn(n){var t,o=n[9]["loading-options"],c=J(o,n,n[15],en),i=c||function(n){var t,o,c,i;return o=new K({}),{c:function(){t=g("li"),u(o.$$.fragment),c=P("\n        Loading..."),this.h()},l:function(n){t=y(n,"LI",{class:!0});var i=x(t);f(o.$$.fragment,i),c=T(i,"\n        Loading..."),i.forEach(L),this.h()},h:function(){O(t,"class","loading-options svelte-fa1gq0")},m:function(n,r){w(n,t,r),s(o,t,null),Q(t,c),i=!0},i:function(n){i||(l(o.$$.fragment,n),i=!0)},o:function(n){p(o.$$.fragment,n),i=!1},d:function(n){n&&L(t),$(o)}}}();return{c:function(){i&&i.c()},l:function(n){i&&i.l(n)},m:function(n,o){i&&i.m(n,o),t=!0},p:function(n,t){c&&c.p&&32768&t&&N(c,o,n,n[15],t,an,en)},i:function(n){t||(l(i,n),t=!0)},o:function(n){p(i,n),t=!1},d:function(n){i&&i.d(n)}}}function yn(n){var t,o,c;return t=new tn({}),{c:function(){u(t.$$.fragment),o=P("\n            load more options")},l:function(n){f(t.$$.fragment,n),o=T(n,"\n            load more options")},m:function(n,i){s(t,n,i),w(n,o,i),c=!0},i:function(n){c||(l(t.$$.fragment,n),c=!0)},o:function(n){p(t.$$.fragment,n),c=!1},d:function(n){$(t,n),n&&L(o)}}}function xn(n){var t,o,c=n[9]["more-options"],i=J(c,n,n[15],rn),r=i||function(n){var t,o,c,i,r,a;return(o=new Z({props:{$$slots:{default:[yn]},$$scope:{ctx:n}}})).$on("click",(function(){W(n[17])&&n[17].apply(this,arguments)})),{c:function(){t=g("div"),u(o.$$.fragment)},l:function(n){t=y(n,"DIV",{});var c=x(t);f(o.$$.fragment,c),c.forEach(L)},m:function(e,u){w(e,t,u),s(o,t,null),i=!0,r||(a=U(c=nn.call(null,t,{callback:n[17]})),r=!0)},p:function(t,i){n=t;var r={};32768&i&&(r.$$scope={dirty:i,ctx:n}),o.$set(r),c&&W(c.update)&&131072&i&&c.update.call(null,{callback:n[17]})},i:function(n){i||(l(o.$$.fragment,n),i=!0)},o:function(n){p(o.$$.fragment,n),i=!1},d:function(n){n&&L(t),$(o),r=!1,a()}}}(n);return{c:function(){t=g("li"),r&&r.c(),this.h()},l:function(n){t=y(n,"LI",{class:!0,slot:!0});var o=x(t);r&&r.l(o),o.forEach(L),this.h()},h:function(){O(t,"class","more-options svelte-fa1gq0"),O(t,"slot","more-options")},m:function(n,c){w(n,t,c),r&&r.m(t,null),o=!0},p:function(n,t){i?i.p&&163840&t&&N(i,c,n,n[15],t,cn,rn):r&&r.p&&131072&t&&r.p(n,t)},i:function(n){o||(l(r,n),o=!0)},o:function(n){p(r,n),o=!1},d:function(n){n&&L(t),r&&r.d(n)}}}function bn(n){var t,o,c;return{c:function(){t=v(),o=v(),c=v()},l:function(n){t=b(n),o=b(n),c=b(n)},m:function(n,i){w(n,t,i),w(n,o,i),w(n,c,i)},p:X,i:X,o:X,d:function(n){n&&L(t),n&&L(o),n&&L(c)}}}function Ln(n){for(var t,o,c,i,r,a,e,C,V=n[0],A=[],B=0;B<V.length;B+=1)A[B]=dn(pn(n,V,B));var P=function(n){return p(A[n],1,1,(function(){A[n]=null}))},T=[{minSearchLength:n[3]},{maxOptions:n[4]},{disabled:n[5]},n[8]];function z(t){n[11].call(null,t)}function J(t){n[12].call(null,t)}function N(t){n[13].call(null,t)}for(var U={$$slots:{default:[bn],"more-options":[xn,function(n){return{17:n.loadMoreOptions}},function(n){return n.loadMoreOptions?131072:0}],"loading-options":[vn],"not-enough-input":[gn],"too-many-options":[hn]},$$scope:{ctx:n}},W=0;W<T.length;W+=1)U=m(U,T[W]);return void 0!==n[0]&&(U.selection=n[0]),void 0!==n[1]&&(U.searchQuery=n[1]),void 0!==n[6]&&(U.focus=n[6]),c=new Y({props:U}),d.push((function(){return h(c,"selection",z)})),d.push((function(){return h(c,"searchQuery",J)})),d.push((function(){return h(c,"focus",N)})),c.$on("change",n[14]),{c:function(){t=g("div");for(var n=0;n<A.length;n+=1)A[n].c();o=v(),u(c.$$.fragment),this.h()},l:function(n){t=y(n,"DIV",{class:!0});for(var i=x(t),r=0;r<A.length;r+=1)A[r].l(i);o=b(i),f(c.$$.fragment,i),i.forEach(L),this.h()},h:function(){O(t,"class",e=j(_("autocomplete",n[2]))+" svelte-fa1gq0"),S(t,"focus",n[6]),S(t,"disabled",n[5])},m:function(n,i){w(n,t,i);for(var r=0;r<A.length;r+=1)A[r].m(t,null);Q(t,o),s(c,t,null),C=!0},p:function(n,u){var f=q(u,1)[0];if(129&f){var s;for(V=n[0],s=0;s<V.length;s+=1){var p=pn(n,V,s);A[s]?(A[s].p(p,f),l(A[s],1)):(A[s]=dn(p),A[s].c(),l(A[s],1),A[s].m(t,o))}for(D(),s=V.length;s<A.length;s+=1)P(s);I()}var $=312&f?E(T,[8&f&&{minSearchLength:n[3]},16&f&&{maxOptions:n[4]},32&f&&{disabled:n[5]},256&f&&M(n[8])]):{};163864&f&&($.$$scope={dirty:f,ctx:n}),!i&&1&f&&(i=!0,$.selection=n[0],R((function(){return i=!1}))),!r&&2&f&&(r=!0,$.searchQuery=n[1],R((function(){return r=!1}))),!a&&64&f&&(a=!0,$.focus=n[6],R((function(){return a=!1}))),c.$set($),(!C||4&f&&e!==(e=j(_("autocomplete",n[2]))+" svelte-fa1gq0"))&&O(t,"class",e),68&f&&S(t,"focus",n[6]),36&f&&S(t,"disabled",n[5])},i:function(n){if(!C){for(var t=0;t<V.length;t+=1)l(A[t]);l(c.$$.fragment,n),C=!0}},o:function(n){A=A.filter(Boolean);for(var t=0;t<A.length;t+=1)p(A[t]);p(c.$$.fragment,n),C=!1},d:function(n){n&&L(t),k(A,n),$(c)}}}function On(n,t,o){var c=["class","selection","minSearchLength","maxOptions","searchQuery","disabled"],i=C(t,c),r=t,a=r.$$slots,e=void 0===a?{}:a,u=r.$$scope,f=t.class,s=void 0===f?null:f,l=t.selection,p=void 0===l?[]:l,$=t.minSearchLength,d=void 0===$?3:$,h=t.maxOptions,g=void 0===h?1/0:h,v=t.searchQuery,y=void 0===v?"":v,x=t.disabled,b=void 0!==x&&x,L=!1;function O(n){o(0,p=p.filter((function(t){return t!==n}))),j("change",{value:p})}var j=V();return n.$$set=function(n){t=m(m({},t),A(n)),o(8,i=C(t,c)),"class"in n&&o(2,s=n.class),"selection"in n&&o(0,p=n.selection),"minSearchLength"in n&&o(3,d=n.minSearchLength),"maxOptions"in n&&o(4,g=n.maxOptions),"searchQuery"in n&&o(1,y=n.searchQuery),"disabled"in n&&o(5,b=n.disabled),"$$scope"in n&&o(15,u=n.$$scope)},[p,y,s,d,g,b,L,O,i,e,function(n){return O(n)},function(n){o(0,p=n)},function(n){o(1,y=n)},function(n){o(6,L=n)},function(t){B(n,t)},u]}var jn=function(t){n(u,e);var o=on(u);function u(n){var t;return c(this,u),t=o.call(this),i(a(t),n,On,Ln,r,{class:2,selection:0,minSearchLength:3,maxOptions:4,searchQuery:1,disabled:5}),t}return u}();export{jn as A};
