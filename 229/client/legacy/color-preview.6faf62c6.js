import{_ as t,a as r,b as e,c as a,i as n,s,d as o,S as c,o as i,x as u,y as f,f as l,g as d,h as v,z as h,A as p,j as b,ag as y,L as g,k as x,l as m,m as D,D as R,n as j}from"./client.d1b23065.js";import"./color-preview.72edcca8.js";function k(t){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,s=r(t);if(a){var o=r(this).constructor;n=Reflect.construct(s,arguments,o)}else n=s.apply(this,arguments);return e(this,n)}}function w(t){var r,e,a,n;return{c:function(){r=i("div"),e=i("div"),a=u(),n=f(t[0]),this.h()},l:function(s){r=l(s,"DIV",{class:!0});var o=d(r);e=l(o,"DIV",{class:!0,style:!0}),d(e).forEach(v),a=h(o),n=p(o,t[0]),o.forEach(v),this.h()},h:function(){b(e,"class","color svelte-x4ogxp"),y(e,"background",t[0]),g(e,"bordered",t[1]),b(r,"class","preview svelte-x4ogxp")},m:function(t,s){x(t,r,s),m(r,e),m(r,a),m(r,n)},p:function(t,r){var a=D(r,1)[0];1&a&&y(e,"background",t[0]),2&a&&g(e,"bordered",t[1]),1&a&&R(n,t[0])},i:j,o:j,d:function(t){t&&v(r)}}}function E(t,r,e){var a=r.value,n=r.bordered,s=void 0!==n&&n;return t.$$set=function(t){"value"in t&&e(0,a=t.value),"bordered"in t&&e(1,s=t.bordered)},[a,s]}var I=function(r){t(i,c);var e=k(i);function i(t){var r;return a(this,i),r=e.call(this),n(o(r),t,E,w,s,{value:0,bordered:1}),r}return i}();export{I as C};
