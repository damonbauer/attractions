import{_ as n,a as t,b as c,c as r,i as o,s as u,d as e,S as i,I as a,k as f,h as l,o as s,f as h,g as v,j as d,a9 as p,x as m,z as g,l as k,t as y,aa as R,m as $,n as E,K as x,y as b,A as q,D as A}from"./client.238eed9c.js";function D(n){return n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function I(n){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var o,u=t(n);if(r){var e=t(this).constructor;o=Reflect.construct(u,arguments,e)}else o=u.apply(this,arguments);return c(this,o)}}function K(n,t,c){var r=n.slice();return r[6]=t[c],r}function N(n,t,c){var r=n.slice();return r[6]=t[c],r}function j(n){var t,c=n[6].content+"";return{c:function(){t=b(c)},l:function(n){t=q(n,c)},m:function(n,c){f(n,t,c)},p:function(n,r){1&r&&c!==(c=n[6].content+"")&&A(t,c)},d:function(n){n&&l(t)}}}function M(n){var t,c,r=n[6].content+"";return{c:function(){t=s("mark"),c=b(r),this.h()},l:function(n){t=h(n,"MARK",{class:!0});var o=v(t);c=q(o,r),o.forEach(l),this.h()},h:function(){d(t,"class","svelte-fkdvgp")},m:function(n,r){f(n,t,r),k(t,c)},p:function(n,t){1&t&&r!==(r=n[6].content+"")&&A(c,r)},d:function(n){n&&l(t)}}}function S(n){var t;function c(n,t){return n[6].marked?M:j}var r=c(n),o=r(n);return{c:function(){o.c(),t=a()},l:function(n){o.l(n),t=a()},m:function(n,c){o.m(n,c),f(n,t,c)},p:function(n,u){r===(r=c(n))&&o?o.p(n,u):(o.d(1),(o=r(n))&&(o.c(),o.m(t.parentNode,t)))},d:function(n){o.d(n),n&&l(t)}}}function T(n){for(var t,c=n[1](n[0].details),r=[],o=0;o<c.length;o+=1)r[o]=B(K(n,c,o));return{c:function(){t=s("div");for(var n=0;n<r.length;n+=1)r[n].c();this.h()},l:function(n){t=h(n,"DIV",{class:!0});for(var c=v(t),o=0;o<r.length;o+=1)r[o].l(c);c.forEach(l),this.h()},h:function(){d(t,"class","subtext svelte-fkdvgp")},m:function(n,c){f(n,t,c);for(var o=0;o<r.length;o+=1)r[o].m(t,null)},p:function(n,o){if(3&o){var u;for(c=n[1](n[0].details),u=0;u<c.length;u+=1){var e=K(n,c,u);r[u]?r[u].p(e,o):(r[u]=B(e),r[u].c(),r[u].m(t,null))}for(;u<r.length;u+=1)r[u].d(1);r.length=c.length}},d:function(n){n&&l(t),p(r,n)}}}function w(n){var t,c=n[6].content+"";return{c:function(){t=b(c)},l:function(n){t=q(n,c)},m:function(n,c){f(n,t,c)},p:function(n,r){1&r&&c!==(c=n[6].content+"")&&A(t,c)},d:function(n){n&&l(t)}}}function z(n){var t,c,r=n[6].content+"";return{c:function(){t=s("mark"),c=b(r),this.h()},l:function(n){t=h(n,"MARK",{class:!0});var o=v(t);c=q(o,r),o.forEach(l),this.h()},h:function(){d(t,"class","svelte-fkdvgp")},m:function(n,r){f(n,t,r),k(t,c)},p:function(n,t){1&t&&r!==(r=n[6].content+"")&&A(c,r)},d:function(n){n&&l(t)}}}function B(n){var t;function c(n,t){return n[6].marked?z:w}var r=c(n),o=r(n);return{c:function(){o.c(),t=a()},l:function(n){o.l(n),t=a()},m:function(n,c){o.m(n,c),f(n,t,c)},p:function(n,u){r===(r=c(n))&&o?o.p(n,u):(o.d(1),(o=r(n))&&(o.c(),o.m(t.parentNode,t)))},d:function(n){o.d(n),n&&l(t)}}}function L(n){for(var t,c,r,o,u,e=n[1](n[0].name),i=[],a=0;a<e.length;a+=1)i[a]=S(N(n,e,a));var x=n[0].details&&T(n);return{c:function(){t=s("li"),c=s("button");for(var n=0;n<i.length;n+=1)i[n].c();r=m(),x&&x.c(),this.h()},l:function(n){t=h(n,"LI",{class:!0});var o=v(t);c=h(o,"BUTTON",{type:!0,class:!0});for(var u=v(c),e=0;e<i.length;e+=1)i[e].l(u);r=g(u),x&&x.l(u),u.forEach(l),o.forEach(l),this.h()},h:function(){d(c,"type","button"),d(c,"class","svelte-fkdvgp"),d(t,"class","svelte-fkdvgp")},m:function(e,a){f(e,t,a),k(t,c);for(var l=0;l<i.length;l+=1)i[l].m(c,null);k(c,r),x&&x.m(c,null),o||(u=y(t,"click",R(n[4])),o=!0)},p:function(n,t){var o=$(t,1)[0];if(3&o){var u;for(e=n[1](n[0].name),u=0;u<e.length;u+=1){var a=N(n,e,u);i[u]?i[u].p(a,o):(i[u]=S(a),i[u].c(),i[u].m(c,r))}for(;u<i.length;u+=1)i[u].d(1);i.length=e.length}n[0].details?x?x.p(n,o):((x=T(n)).c(),x.m(c,null)):x&&(x.d(1),x=null)},i:E,o:E,d:function(n){n&&l(t),p(i,n),x&&x.d(),o=!1,u()}}}function O(n,t,c){var r,o=t.option,u=t.query,e=void 0===u?null:u;var i=x();return n.$$set=function(n){"option"in n&&c(0,o=n.option),"query"in n&&c(3,e=n.query)},n.$$.update=function(){8&n.$$.dirty&&(r=e?new RegExp("(".concat(D(e),")"),"ig"):null)},[o,function(n){return null==r?[{content:n,marked:!1}]:n.split(r).map((function(n,t){return{content:n,marked:t%2!=0}}))},i,e,function(n){return i("click",{nativeEvent:n})}]}var P=function(t){n(a,i);var c=I(a);function a(n){var t;return r(this,a),t=c.call(this),o(e(t),n,O,L,u,{option:0,query:3}),t}return a}();export{P as A,D as e};
