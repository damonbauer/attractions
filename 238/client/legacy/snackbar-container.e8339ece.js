import{_ as t,a as n,b as o,c as r,i as e,s as a,d as s,a3 as i,S as c,N as f,a5 as u,I as l,k as p,T as v,Z as h,B as m,v as d,w as $,C as g,p as T,u as b,r as k,h as D,x as E,o as O,z as I,f as y,g as _,j as w,m as L,R as M,Y as R,a6 as x,L as P,q as S,a0 as B}from"./client.6c1c26f0.js";import{S as j}from"./snackbar.ec078dc8.js";var C={},F=Object.freeze({TOP_LEFT:"top left",TOP_MIDDLE:"top h-middle",TOP_RIGHT:"top right",MIDDLE_RIGHT:"v-middle right",BOTTOM_RIGHT:"bottom right",BOTTOM_MIDDLE:"bottom h-middle",BOTTOM_LEFT:"bottom left",MIDDLE_LEFT:"v-middle left"});function q(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,a=n(t);if(r){var s=n(this).constructor;e=Reflect.construct(a,arguments,s)}else e=a.apply(this,arguments);return o(this,e)}}function G(t,n,o){var r=t.slice();return r[6]=n[o],r}var H=function(t){return{}},z=function(t){return{showSnackbar:t[1]}};function N(t,n){var o,r,e,a,s=[n[6].props],i=n[6].component;function c(t){for(var n={},o=0;o<s.length;o+=1)n=P(n,s[o]);return{props:n}}return i&&(r=new i(c())),{key:t,first:null,c:function(){o=l(),r&&T(r.$$.fragment),e=l(),this.h()},l:function(t){o=l(),r&&S(r.$$.fragment,t),e=l(),this.h()},h:function(){this.first=o},m:function(t,n){p(t,o,n),r&&k(r,t,n),p(t,e,n),a=!0},p:function(t,o){n=t;var a=4&o?v(s,[h(n[6].props)]):{};if(i!==(i=n[6].component)){if(r){m();var f=r;d(f.$$.fragment,1,0,(function(){$(f,1)})),g()}i?(r=new i(c()),T(r.$$.fragment),b(r.$$.fragment,1),k(r,e.parentNode,e)):r=null}else i&&r.$set(a)},i:function(t){a||(r&&b(r.$$.fragment,t),a=!0)},o:function(t){r&&d(r.$$.fragment,t),a=!1},d:function(t){t&&D(o),t&&D(e),r&&$(r,t)}}}function V(t){for(var n,o,r,e,a=[],s=new Map,i=t[4].default,c=f(i,t,t[3],z),l=u(t[2].values()),v=function(t){return t[6]},h=0;h<l.length;h+=1){var $=G(t,l,h),T=v($);s.set(T,a[h]=N(T,$))}return{c:function(){c&&c.c(),n=E(),o=O("div");for(var t=0;t<a.length;t+=1)a[t].c();this.h()},l:function(t){c&&c.l(t),n=I(t),o=y(t,"DIV",{class:!0});for(var r=_(o),e=0;e<a.length;e+=1)a[e].l(r);r.forEach(D),this.h()},h:function(){w(o,"class",r="snackbar-stack "+t[0]+" svelte-6pqri7")},m:function(t,r){c&&c.m(t,r),p(t,n,r),p(t,o,r);for(var s=0;s<a.length;s+=1)a[s].m(o,null);e=!0},p:function(t,n){var f=L(n,1)[0];c&&c.p&&8&f&&M(c,i,t,t[3],f,H,z),4&f&&(l=u(t[2].values()),m(),a=R(a,f,v,1,t,l,s,o,B,N,null,G),g()),(!e||1&f&&r!==(r="snackbar-stack "+t[0]+" svelte-6pqri7"))&&w(o,"class",r)},i:function(t){if(!e){b(c,t);for(var n=0;n<l.length;n+=1)b(a[n]);e=!0}},o:function(t){d(c,t);for(var n=0;n<a.length;n+=1)d(a[n]);e=!1},d:function(t){c&&c.d(t),t&&D(n),t&&D(o);for(var r=0;r<a.length;r+=1)a[r].d()}}}function Y(t,n,o){var r=n.$$slots,e=void 0===r?{}:r,a=n.$$scope,s=n.position,i=void 0===s?F.BOTTOM_LEFT:s,c=new Set;function f(t,n){c.delete(t),"function"==typeof t.resolveExpiredPromise&&t.resolveExpiredPromise(!n),o(2,c)}function u(t){var n=t.component,r=void 0===n?j:n,e=t.props,a=void 0===e?{}:e,s=t.duration,i=void 0===s?4e3:s,u={component:r,props:a},l=a.closeCallback;return u.props.closeCallback=function(){clearTimeout(u.timeoutID),f(u,!0),"function"==typeof l&&l()},u.timeoutID=setTimeout(f,i,u,!1),c.add(u),o(2,c),{close:u.props.closeCallback,expired:new Promise((function(t){return u.resolveExpiredPromise=t}))}}return x(C,u),t.$$set=function(t){"position"in t&&o(0,i=t.position),"$$scope"in t&&o(3,a=t.$$scope)},[i,u,c,a,e]}var Z=function(n){t(f,c);var o=q(f);function f(t){var n;return r(this,f),n=o.call(this),e(s(n),t,Y,V,a,{position:0,showSnackbar:1}),n}return i(f,[{key:"showSnackbar",get:function(){return this.$$.ctx[1]}}]),f}();export{Z as S};
