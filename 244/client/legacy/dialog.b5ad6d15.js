import{_ as n,a as t,b as c,c as i,i as o,s,d as a,S as l,p as u,q as r,r as e,u as f,v as d,w as $,o as p,x as v,y as m,f as h,g,z as x,A as y,h as C,j as b,W as k,k as D,l as R,R as j,D as w,N as W,P as B,m as E,B as I,C as P,U as S}from"./client.b984ce07.js";import{B as V}from"./button.19e4008a.js";import{X as q}from"./x.90555218.js";import{c as z}from"./classes.7d86155b.js";function A(n){var i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var o,s=t(n);if(i){var a=t(this).constructor;o=Reflect.construct(s,arguments,a)}else o=s.apply(this,arguments);return c(this,o)}}var N=function(n){return{}},U=function(n){return{}},_=function(n){return{}},F=function(n){return{}};function G(n){var t,c;return(t=new V({props:{neutral:!0,round:!0,class:"close",$$slots:{default:[H]},$$scope:{ctx:n}}})).$on("click",(function(){S(n[3])&&n[3].apply(this,arguments)})),{c:function(){u(t.$$.fragment)},l:function(n){r(t.$$.fragment,n)},m:function(n,i){e(t,n,i),c=!0},p:function(c,i){n=c;var o={};128&i&&(o.$$scope={dirty:i,ctx:n}),t.$set(o)},i:function(n){c||(f(t.$$.fragment,n),c=!0)},o:function(n){d(t.$$.fragment,n),c=!1},d:function(n){$(t,n)}}}function H(n){var t,c=n[6]["close-icon"],i=W(c,n,n[7],F),o=i||function(n){var t,c;return t=new q({}),{c:function(){u(t.$$.fragment)},l:function(n){r(t.$$.fragment,n)},m:function(n,i){e(t,n,i),c=!0},i:function(n){c||(f(t.$$.fragment,n),c=!0)},o:function(n){d(t.$$.fragment,n),c=!1},d:function(n){$(t,n)}}}();return{c:function(){o&&o.c()},l:function(n){o&&o.l(n)},m:function(n,c){o&&o.m(n,c),t=!0},p:function(n,t){i&&i.p&&128&t&&j(i,c,n,n[7],t,_,F)},i:function(n){t||(f(o,n),t=!0)},o:function(n){d(o,n),t=!1},d:function(n){o&&o.d(n)}}}function J(n){var t,c,i,o,s,a=n[6]["title-icon"],l=W(a,n,n[7],U);return{c:function(){t=p("div"),l&&l.c(),c=v(),i=m(n[4]),this.h()},l:function(o){t=h(o,"DIV",{class:!0});var s=g(t);l&&l.l(s),c=x(s),i=y(s,n[4]),s.forEach(C),this.h()},h:function(){b(t,"class",o=k(z("title",null!=n[3]&&"close-padded",n[1]))+" svelte-1a6g8xi")},m:function(n,o){D(n,t,o),l&&l.m(t,null),R(t,c),R(t,i),s=!0},p:function(n,c){l&&l.p&&128&c&&j(l,a,n,n[7],c,N,U),(!s||16&c)&&w(i,n[4]),(!s||10&c&&o!==(o=k(z("title",null!=n[3]&&"close-padded",n[1]))+" svelte-1a6g8xi"))&&b(t,"class",o)},i:function(n){s||(f(l,n),s=!0)},o:function(n){d(l,n),s=!1},d:function(n){n&&C(t),l&&l.d(n)}}}function K(n){var t,c,i,o,s,a=null!=n[3]&&G(n),l=null!=n[4]&&J(n),u=n[6].default,r=W(u,n,n[7],null);return{c:function(){t=p("div"),a&&a.c(),c=v(),l&&l.c(),i=v(),r&&r.c(),this.h()},l:function(n){t=h(n,"DIV",{class:!0});var o=g(t);a&&a.l(o),c=x(o),l&&l.l(o),i=x(o),r&&r.l(o),o.forEach(C),this.h()},h:function(){b(t,"class",o=k(z("dialog",n[0]))+" svelte-1a6g8xi"),B(t,"danger",n[2]),B(t,"constrain-width",n[5])},m:function(n,o){D(n,t,o),a&&a.m(t,null),R(t,c),l&&l.m(t,null),R(t,i),r&&r.m(t,null),s=!0},p:function(n,e){var $=E(e,1)[0];null!=n[3]?a?(a.p(n,$),8&$&&f(a,1)):((a=G(n)).c(),f(a,1),a.m(t,c)):a&&(I(),d(a,1,1,(function(){a=null})),P()),null!=n[4]?l?(l.p(n,$),16&$&&f(l,1)):((l=J(n)).c(),f(l,1),l.m(t,i)):l&&(I(),d(l,1,1,(function(){l=null})),P()),r&&r.p&&128&$&&j(r,u,n,n[7],$,null,null),(!s||1&$&&o!==(o=k(z("dialog",n[0]))+" svelte-1a6g8xi"))&&b(t,"class",o),5&$&&B(t,"danger",n[2]),33&$&&B(t,"constrain-width",n[5])},i:function(n){s||(f(a),f(l),f(r,n),s=!0)},o:function(n){d(a),d(l),d(r,n),s=!1},d:function(n){n&&C(t),a&&a.d(),l&&l.d(),r&&r.d(n)}}}function L(n,t,c){var i=t.$$slots,o=void 0===i?{}:i,s=t.$$scope,a=t.class,l=void 0===a?null:a,u=t.titleClass,r=void 0===u?null:u,e=t.danger,f=void 0!==e&&e,d=t.closeCallback,$=void 0===d?null:d,p=t.title,v=void 0===p?null:p,m=t.constrainWidth,h=void 0!==m&&m;return n.$$set=function(n){"class"in n&&c(0,l=n.class),"titleClass"in n&&c(1,r=n.titleClass),"danger"in n&&c(2,f=n.danger),"closeCallback"in n&&c(3,$=n.closeCallback),"title"in n&&c(4,v=n.title),"constrainWidth"in n&&c(5,h=n.constrainWidth),"$$scope"in n&&c(7,s=n.$$scope)},[l,r,f,$,v,h,o,s]}var M=function(t){n(u,l);var c=A(u);function u(n){var t;return i(this,u),t=c.call(this),o(a(t),n,L,K,s,{class:0,titleClass:1,danger:2,closeCallback:3,title:4,constrainWidth:5}),t}return u}();export{M as D};
