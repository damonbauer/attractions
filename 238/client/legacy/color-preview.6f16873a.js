import{_ as t,a as r,b as e,c as a,i as n,s,d as c,S as o,o as i,x as u,y as f,f as l,g as d,h as v,z as h,A as p,j as b,ah as m,P as y,k as g,l as D,m as R,D as j,n as k}from"./client.f3694a85.js";import"./color-preview.72edcca8.js";function x(t){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,s=r(t);if(a){var c=r(this).constructor;n=Reflect.construct(s,arguments,c)}else n=s.apply(this,arguments);return e(this,n)}}function w(t){var r,e,a,n;return{c:function(){r=i("div"),e=i("div"),a=u(),n=f(t[0]),this.h()},l:function(s){r=l(s,"DIV",{class:!0});var c=d(r);e=l(c,"DIV",{class:!0,style:!0}),d(e).forEach(v),a=h(c),n=p(c,t[0]),c.forEach(v),this.h()},h:function(){b(e,"class","color svelte-1f1cgmh"),m(e,"background",t[0]),y(e,"bordered",t[1]),b(r,"class","preview svelte-1f1cgmh")},m:function(t,s){g(t,r,s),D(r,e),D(r,a),D(r,n)},p:function(t,r){var a=R(r,1)[0];1&a&&m(e,"background",t[0]),2&a&&y(e,"bordered",t[1]),1&a&&j(n,t[0])},i:k,o:k,d:function(t){t&&v(r)}}}function E(t,r,e){var a=r.value,n=r.bordered,s=void 0!==n&&n;return t.$$set=function(t){"value"in t&&e(0,a=t.value),"bordered"in t&&e(1,s=t.bordered)},[a,s]}var I=function(r){t(i,o);var e=x(i);function i(t){var r;return a(this,i),r=e.call(this),n(c(r),t,E,w,s,{value:0,bordered:1}),r}return i}();export{I as C};
