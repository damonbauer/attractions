import{_ as n,a as t,b as c,c as r,i as o,s as u,d as i,S as e,I as a,k as f,h as l,o as s,f as h,g as v,j as p,a9 as d,x as m,z as g,l as k,t as y,aa as R,m as $,n as E,K as x,y as b,A as q,D as A}from"./client.f3694a85.js";function D(n){return n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function I(n){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var o,u=t(n);if(r){var i=t(this).constructor;o=Reflect.construct(u,arguments,i)}else o=u.apply(this,arguments);return c(this,o)}}function K(n,t,c){var r=n.slice();return r[6]=t[c],r}function N(n,t,c){var r=n.slice();return r[6]=t[c],r}function j(n){var t,c=n[6].content+"";return{c:function(){t=b(c)},l:function(n){t=q(n,c)},m:function(n,c){f(n,t,c)},p:function(n,r){1&r&&c!==(c=n[6].content+"")&&A(t,c)},d:function(n){n&&l(t)}}}function M(n){var t,c,r=n[6].content+"";return{c:function(){t=s("mark"),c=b(r),this.h()},l:function(n){t=h(n,"MARK",{class:!0});var o=v(t);c=q(o,r),o.forEach(l),this.h()},h:function(){p(t,"class","svelte-fkdvgp")},m:function(n,r){f(n,t,r),k(t,c)},p:function(n,t){1&t&&r!==(r=n[6].content+"")&&A(c,r)},d:function(n){n&&l(t)}}}function S(n){var t;function c(n,t){return n[6].marked?M:j}var r=c(n),o=r(n);return{c:function(){o.c(),t=a()},l:function(n){o.l(n),t=a()},m:function(n,c){o.m(n,c),f(n,t,c)},p:function(n,u){r===(r=c(n))&&o?o.p(n,u):(o.d(1),(o=r(n))&&(o.c(),o.m(t.parentNode,t)))},d:function(n){o.d(n),n&&l(t)}}}function T(n){for(var t,c=n[1](n[0].details),r=[],o=0;o<c.length;o+=1)r[o]=B(K(n,c,o));return{c:function(){t=s("div");for(var n=0;n<r.length;n+=1)r[n].c();this.h()},l:function(n){t=h(n,"DIV",{class:!0});for(var c=v(t),o=0;o<r.length;o+=1)r[o].l(c);c.forEach(l),this.h()},h:function(){p(t,"class","subtext svelte-fkdvgp")},m:function(n,c){f(n,t,c);for(var o=0;o<r.length;o+=1)r[o].m(t,null)},p:function(n,o){if(3&o){var u;for(c=n[1](n[0].details),u=0;u<c.length;u+=1){var i=K(n,c,u);r[u]?r[u].p(i,o):(r[u]=B(i),r[u].c(),r[u].m(t,null))}for(;u<r.length;u+=1)r[u].d(1);r.length=c.length}},d:function(n){n&&l(t),d(r,n)}}}function w(n){var t,c=n[6].content+"";return{c:function(){t=b(c)},l:function(n){t=q(n,c)},m:function(n,c){f(n,t,c)},p:function(n,r){1&r&&c!==(c=n[6].content+"")&&A(t,c)},d:function(n){n&&l(t)}}}function z(n){var t,c,r=n[6].content+"";return{c:function(){t=s("mark"),c=b(r),this.h()},l:function(n){t=h(n,"MARK",{class:!0});var o=v(t);c=q(o,r),o.forEach(l),this.h()},h:function(){p(t,"class","svelte-fkdvgp")},m:function(n,r){f(n,t,r),k(t,c)},p:function(n,t){1&t&&r!==(r=n[6].content+"")&&A(c,r)},d:function(n){n&&l(t)}}}function B(n){var t;function c(n,t){return n[6].marked?z:w}var r=c(n),o=r(n);return{c:function(){o.c(),t=a()},l:function(n){o.l(n),t=a()},m:function(n,c){o.m(n,c),f(n,t,c)},p:function(n,u){r===(r=c(n))&&o?o.p(n,u):(o.d(1),(o=r(n))&&(o.c(),o.m(t.parentNode,t)))},d:function(n){o.d(n),n&&l(t)}}}function L(n){for(var t,c,r,o,u,i=n[1](n[0].name),e=[],a=0;a<i.length;a+=1)e[a]=S(N(n,i,a));var x=n[0].details&&T(n);return{c:function(){t=s("li"),c=s("button");for(var n=0;n<e.length;n+=1)e[n].c();r=m(),x&&x.c(),this.h()},l:function(n){t=h(n,"LI",{class:!0});var o=v(t);c=h(o,"BUTTON",{type:!0,class:!0});for(var u=v(c),i=0;i<e.length;i+=1)e[i].l(u);r=g(u),x&&x.l(u),u.forEach(l),o.forEach(l),this.h()},h:function(){p(c,"type","button"),p(c,"class","svelte-fkdvgp"),p(t,"class","svelte-fkdvgp")},m:function(i,a){f(i,t,a),k(t,c);for(var l=0;l<e.length;l+=1)e[l].m(c,null);k(c,r),x&&x.m(c,null),o||(u=y(t,"click",R(n[4])),o=!0)},p:function(n,t){var o=$(t,1)[0];if(3&o){var u;for(i=n[1](n[0].name),u=0;u<i.length;u+=1){var a=N(n,i,u);e[u]?e[u].p(a,o):(e[u]=S(a),e[u].c(),e[u].m(c,r))}for(;u<e.length;u+=1)e[u].d(1);e.length=i.length}n[0].details?x?x.p(n,o):((x=T(n)).c(),x.m(c,null)):x&&(x.d(1),x=null)},i:E,o:E,d:function(n){n&&l(t),d(e,n),x&&x.d(),o=!1,u()}}}function O(n,t,c){var r,o=t.option,u=t.query,i=void 0===u?null:u;var e=x();return n.$$set=function(n){"option"in n&&c(0,o=n.option),"query"in n&&c(3,i=n.query)},n.$$.update=function(){8&n.$$.dirty&&(r=i?new RegExp("(".concat(D(i),")"),"ig"):null)},[o,function(n){return null==r?[{content:n,marked:!1}]:n.split(r).map((function(n,t){return{content:n,marked:t%2!=0}}))},e,i,function(n){return e("click",{nativeEvent:n})}]}var P=function(t){n(a,e);var c=I(a);function a(n){var t;return r(this,a),t=c.call(this),o(i(t),n,O,L,u,{option:0,query:3}),t}return a}();export{P as A,D as e};
