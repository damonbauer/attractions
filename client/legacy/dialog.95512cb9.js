import{_ as n,a as t,b as c,c as i,i as a,s as o,d as s,S as l,p as u,q as r,r as e,u as f,v as d,w as $,o as p,x as v,y as m,f as h,g,z as x,A as y,h as C,j as b,W as k,k as D,l as R,R as j,D as w,N as W,P as B,m as E,B as I,C as P,U as S}from"./client.5a6af996.js";import{B as V}from"./button.823a17b1.js";import{X as q}from"./x.33d59eb2.js";import{c as z}from"./classes.541c5f2a.js";function A(n){var i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var a,o=t(n);if(i){var s=t(this).constructor;a=Reflect.construct(o,arguments,s)}else a=o.apply(this,arguments);return c(this,a)}}var N=function(n){return{}},U=function(n){return{}},_=function(n){return{}},F=function(n){return{}};function G(n){var t,c;return(t=new V({props:{neutral:!0,round:!0,class:"close",$$slots:{default:[H]},$$scope:{ctx:n}}})).$on("click",(function(){S(n[3])&&n[3].apply(this,arguments)})),{c:function(){u(t.$$.fragment)},l:function(n){r(t.$$.fragment,n)},m:function(n,i){e(t,n,i),c=!0},p:function(c,i){n=c;var a={};128&i&&(a.$$scope={dirty:i,ctx:n}),t.$set(a)},i:function(n){c||(f(t.$$.fragment,n),c=!0)},o:function(n){d(t.$$.fragment,n),c=!1},d:function(n){$(t,n)}}}function H(n){var t,c=n[6]["close-icon"],i=W(c,n,n[7],F),a=i||function(n){var t,c;return t=new q({}),{c:function(){u(t.$$.fragment)},l:function(n){r(t.$$.fragment,n)},m:function(n,i){e(t,n,i),c=!0},i:function(n){c||(f(t.$$.fragment,n),c=!0)},o:function(n){d(t.$$.fragment,n),c=!1},d:function(n){$(t,n)}}}();return{c:function(){a&&a.c()},l:function(n){a&&a.l(n)},m:function(n,c){a&&a.m(n,c),t=!0},p:function(n,t){i&&i.p&&128&t&&j(i,c,n,n[7],t,_,F)},i:function(n){t||(f(a,n),t=!0)},o:function(n){d(a,n),t=!1},d:function(n){a&&a.d(n)}}}function J(n){var t,c,i,a,o,s=n[6]["title-icon"],l=W(s,n,n[7],U);return{c:function(){t=p("div"),l&&l.c(),c=v(),i=m(n[4]),this.h()},l:function(a){t=h(a,"DIV",{class:!0});var o=g(t);l&&l.l(o),c=x(o),i=y(o,n[4]),o.forEach(C),this.h()},h:function(){b(t,"class",a=k(z("title",null!=n[3]&&"close-padded",n[1]))+" svelte-1a6g8xi")},m:function(n,a){D(n,t,a),l&&l.m(t,null),R(t,c),R(t,i),o=!0},p:function(n,c){l&&l.p&&128&c&&j(l,s,n,n[7],c,N,U),(!o||16&c)&&w(i,n[4]),(!o||10&c&&a!==(a=k(z("title",null!=n[3]&&"close-padded",n[1]))+" svelte-1a6g8xi"))&&b(t,"class",a)},i:function(n){o||(f(l,n),o=!0)},o:function(n){d(l,n),o=!1},d:function(n){n&&C(t),l&&l.d(n)}}}function K(n){var t,c,i,a,o,s=null!=n[3]&&G(n),l=null!=n[4]&&J(n),u=n[6].default,r=W(u,n,n[7],null);return{c:function(){t=p("div"),s&&s.c(),c=v(),l&&l.c(),i=v(),r&&r.c(),this.h()},l:function(n){t=h(n,"DIV",{class:!0});var a=g(t);s&&s.l(a),c=x(a),l&&l.l(a),i=x(a),r&&r.l(a),a.forEach(C),this.h()},h:function(){b(t,"class",a=k(z("dialog",n[0]))+" svelte-1a6g8xi"),B(t,"danger",n[2]),B(t,"constrain-width",n[5])},m:function(n,a){D(n,t,a),s&&s.m(t,null),R(t,c),l&&l.m(t,null),R(t,i),r&&r.m(t,null),o=!0},p:function(n,e){var $=E(e,1)[0];null!=n[3]?s?(s.p(n,$),8&$&&f(s,1)):((s=G(n)).c(),f(s,1),s.m(t,c)):s&&(I(),d(s,1,1,(function(){s=null})),P()),null!=n[4]?l?(l.p(n,$),16&$&&f(l,1)):((l=J(n)).c(),f(l,1),l.m(t,i)):l&&(I(),d(l,1,1,(function(){l=null})),P()),r&&r.p&&128&$&&j(r,u,n,n[7],$,null,null),(!o||1&$&&a!==(a=k(z("dialog",n[0]))+" svelte-1a6g8xi"))&&b(t,"class",a),5&$&&B(t,"danger",n[2]),33&$&&B(t,"constrain-width",n[5])},i:function(n){o||(f(s),f(l),f(r,n),o=!0)},o:function(n){d(s),d(l),d(r,n),o=!1},d:function(n){n&&C(t),s&&s.d(),l&&l.d(),r&&r.d(n)}}}function L(n,t,c){var i=t.$$slots,a=void 0===i?{}:i,o=t.$$scope,s=t.class,l=void 0===s?null:s,u=t.titleClass,r=void 0===u?null:u,e=t.danger,f=void 0!==e&&e,d=t.closeCallback,$=void 0===d?null:d,p=t.title,v=void 0===p?null:p,m=t.constrainWidth,h=void 0!==m&&m;return n.$$set=function(n){"class"in n&&c(0,l=n.class),"titleClass"in n&&c(1,r=n.titleClass),"danger"in n&&c(2,f=n.danger),"closeCallback"in n&&c(3,$=n.closeCallback),"title"in n&&c(4,v=n.title),"constrainWidth"in n&&c(5,h=n.constrainWidth),"$$scope"in n&&c(7,o=n.$$scope)},[l,r,f,$,v,h,a,o]}var M=function(t){n(u,l);var c=A(u);function u(n){var t;return i(this,u),t=c.call(this),a(s(t),n,L,K,o,{class:0,titleClass:1,danger:2,closeCallback:3,title:4,constrainWidth:5}),t}return u}();export{M as D};
