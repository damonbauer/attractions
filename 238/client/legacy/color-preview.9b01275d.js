import{_ as t,a as r,b as n,c as a,i as e,s,d as c,S as o,o as i,x as u,y as f,f as l,g as d,h as v,z as h,A as b,j as p,ah as y,P as m,k as g,l as D,m as R,D as k,n as x}from"./client.b0742bc9.js";function j(t){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,s=r(t);if(a){var c=r(this).constructor;e=Reflect.construct(s,arguments,c)}else e=s.apply(this,arguments);return n(this,e)}}function E(t){var r,n,a,e;return{c:function(){r=i("div"),n=i("div"),a=u(),e=f(t[0]),this.h()},l:function(s){r=l(s,"DIV",{class:!0});var c=d(r);n=l(c,"DIV",{class:!0,style:!0}),d(n).forEach(v),a=h(c),e=b(c,t[0]),c.forEach(v),this.h()},h:function(){p(n,"class","color svelte-1f1cgmh"),y(n,"background",t[0]),m(n,"bordered",t[1]),p(r,"class","preview svelte-1f1cgmh")},m:function(t,s){g(t,r,s),D(r,n),D(r,a),D(r,e)},p:function(t,r){var a=R(r,1)[0];1&a&&y(n,"background",t[0]),2&a&&m(n,"bordered",t[1]),1&a&&k(e,t[0])},i:x,o:x,d:function(t){t&&v(r)}}}function I(t,r,n){var a=r.value,e=r.bordered,s=void 0!==e&&e;return t.$$set=function(t){"value"in t&&n(0,a=t.value),"bordered"in t&&n(1,s=t.bordered)},[a,s]}var P=function(r){t(i,o);var n=j(i);function i(t){var r;return a(this,i),r=n.call(this),e(c(r),t,I,E,s,{value:0,bordered:1}),r}return i}();export{P as C};