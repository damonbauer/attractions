import{_ as n,a as t,b as s,c as a,i as c,s as e,d as i,S as r,N as o,L as u,o as l,f,g as d,h,O as v,P as p,k as m,m as $,R as y,T as R,u as g,v as b,J as D,M as j}from"./client.2caad8a5.js";import{c as x}from"./classes.7d86155b.js";function P(n){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var c,e=t(n);if(a){var i=t(this).constructor;c=Reflect.construct(e,arguments,i)}else c=e.apply(this,arguments);return s(this,c)}}function S(n){for(var t,s,a,c=n[4].default,e=o(c,n,n[3],null),i=[{class:s=x("badge",n[0])},n[2]],r={},D=0;D<i.length;D+=1)r=u(r,i[D]);return{c:function(){t=l("div"),e&&e.c(),this.h()},l:function(n){t=f(n,"DIV",{class:!0});var s=d(t);e&&e.l(s),s.forEach(h),this.h()},h:function(){v(t,r),p(t,"hidden",n[1]),p(t,"svelte-ic6mcn",!0)},m:function(n,s){m(n,t,s),e&&e.m(t,null),a=!0},p:function(n,o){var u=$(o,1)[0];e&&e.p&&8&u&&y(e,c,n,n[3],u,null,null),v(t,r=R(i,[(!a||1&u&&s!==(s=x("badge",n[0])))&&{class:s},4&u&&n[2]])),p(t,"hidden",n[1]),p(t,"svelte-ic6mcn",!0)},i:function(n){a||(g(e,n),a=!0)},o:function(n){b(e,n),a=!1},d:function(n){n&&h(t),e&&e.d(n)}}}function k(n,t,s){var a=["class","hidden"],c=D(t,a),e=t,i=e.$$slots,r=void 0===i?{}:i,o=e.$$scope,l=t.class,f=void 0===l?null:l,d=t.hidden,h=void 0!==d&&d;return n.$$set=function(n){t=u(u({},t),j(n)),s(2,c=D(t,a)),"class"in n&&s(0,f=n.class),"hidden"in n&&s(1,h=n.hidden),"$$scope"in n&&s(3,o=n.$$scope)},[f,h,c,o,r]}var B=function(t){n(o,r);var s=P(o);function o(n){var t;return a(this,o),t=s.call(this),c(i(t),n,k,S,e,{class:0,hidden:1}),t}return o}();export{B};