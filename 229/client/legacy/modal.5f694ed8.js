import{_ as n,a as t,b as c,c as o,i as a,s,d as i,S as u,Q as r,k as e,m as l,B as f,v,C as p,u as d,h,R as m,I as y,o as $,f as k,g as C,j as R,W as b,L as w,M as z,t as D,a4 as g}from"./client.d1b23065.js";import{c as j}from"./classes.541c5f2a.js";function I(n){var o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var a,s=t(n);if(o){var i=t(this).constructor;a=Reflect.construct(s,arguments,i)}else a=s.apply(this,arguments);return c(this,a)}}var x=function(n){return{}},E=function(n){return{closeCallback:n[3]}},M=function(n){return{}},S=function(n){return{closeCallback:n[3]}};function V(n){var t,c,o,a=n[5].default,s=y(a,n,n[4],E);return{c:function(){t=$("div"),s&&s.c(),this.h()},l:function(n){t=k(n,"DIV",{class:!0});var c=C(t);s&&s.l(c),c.forEach(h),this.h()},h:function(){R(t,"class",c=b(j("modal-overlay",n[1]))+" svelte-11stczo"),w(t,"open",n[0])},m:function(n,c){e(n,t,c),s&&s.m(t,null),o=!0},p:function(n,i){s&&s.p&&16&i&&z(s,a,n,n[4],i,x,E),(!o||2&i&&c!==(c=b(j("modal-overlay",n[1]))+" svelte-11stczo"))&&R(t,"class",c),3&i&&w(t,"open",n[0])},i:function(n){o||(d(s,n),o=!0)},o:function(n){v(s,n),o=!1},d:function(n){n&&h(t),s&&s.d(n)}}}function B(n){var t,c,o,a,s,i=n[5].default,u=y(i,n,n[4],S);return{c:function(){t=$("div"),u&&u.c(),this.h()},l:function(n){t=k(n,"DIV",{class:!0});var c=C(t);u&&u.l(c),c.forEach(h),this.h()},h:function(){R(t,"class",c=b(j("modal-overlay",n[1]))+" svelte-11stczo"),w(t,"open",n[0])},m:function(c,i){e(c,t,i),u&&u.m(t,null),o=!0,a||(s=D(t,"click",g(n[3])),a=!0)},p:function(n,a){u&&u.p&&16&a&&z(u,i,n,n[4],a,M,S),(!o||2&a&&c!==(c=b(j("modal-overlay",n[1]))+" svelte-11stczo"))&&R(t,"class",c),3&a&&w(t,"open",n[0])},i:function(n){o||(d(u,n),o=!0)},o:function(n){v(u,n),o=!1},d:function(n){n&&h(t),u&&u.d(n),a=!1,s()}}}function L(n){var t,c,o,a,s=[B,V],i=[];function u(n,t){return n[2]?1:0}return t=u(n),c=i[t]=s[t](n),{c:function(){c.c(),o=r()},l:function(n){c.l(n),o=r()},m:function(n,c){i[t].m(n,c),e(n,o,c),a=!0},p:function(n,a){var r=l(a,1)[0],e=t;(t=u(n))===e?i[t].p(n,r):(f(),v(i[e],1,1,(function(){i[e]=null})),p(),(c=i[t])?c.p(n,r):(c=i[t]=s[t](n)).c(),d(c,1),c.m(o.parentNode,o))},i:function(n){a||(d(c),a=!0)},o:function(n){v(c),a=!1},d:function(n){i[t].d(n),n&&h(o)}}}function N(n,t,c){var o=t.$$slots,a=void 0===o?{}:o,s=t.$$scope,i=t.class,u=void 0===i?null:i,r=t.open,e=void 0!==r&&r,l=t.noClickaway,f=void 0!==l&&l;var v=m();return n.$$set=function(n){"class"in n&&c(1,u=n.class),"open"in n&&c(0,e=n.open),"noClickaway"in n&&c(2,f=n.noClickaway),"$$scope"in n&&c(4,s=n.$$scope)},n.$$.update=function(){1&n.$$.dirty&&v("change",{value:e})},[e,u,f,function(){c(0,e=!1)},s,a]}var P=function(t){n(r,u);var c=I(r);function r(n){var t;return o(this,r),t=c.call(this),a(i(t),n,N,L,s,{class:1,open:0,noClickaway:2}),t}return r}();export{P as M};
