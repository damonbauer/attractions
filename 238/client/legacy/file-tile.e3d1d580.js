import{_ as t,a as n,b as e,c as r,i,s as a,d as o,S as s,e as c,f,g as u,h as l,j as h,k as p,l as v,n as m,o as y,y as d,x as $,p as g,A as x,z as w,q as k,r as R,m as D,D as E,u as j,v as V,w as b,K as z}from"./client.b0742bc9.js";import{B}from"./button.e7a85df1.js";import{f as I}from"./format-file-size.0c5da3e0.js";function S(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,a=n(t);if(r){var o=n(this).constructor;i=Reflect.construct(a,arguments,o)}else i=a.apply(this,arguments);return e(this,i)}}function C(t){var n,e,r,i,a;return{c:function(){n=c("svg"),e=c("polyline"),r=c("path"),i=c("line"),a=c("line"),this.h()},l:function(t){n=f(t,"svg",{xmlns:!0,width:!0,height:!0,viewBox:!0,fill:!0,stroke:!0,"stroke-width":!0,"stroke-linecap":!0,"stroke-linejoin":!0},1);var o=u(n);e=f(o,"polyline",{points:!0},1),u(e).forEach(l),r=f(o,"path",{d:!0},1),u(r).forEach(l),i=f(o,"line",{x1:!0,y1:!0,x2:!0,y2:!0},1),u(i).forEach(l),a=f(o,"line",{x1:!0,y1:!0,x2:!0,y2:!0},1),u(a).forEach(l),o.forEach(l),this.h()},h:function(){h(e,"points","3 6 5 6 21 6"),h(r,"d","M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"),h(i,"x1","10"),h(i,"y1","11"),h(i,"x2","10"),h(i,"y2","17"),h(a,"x1","14"),h(a,"y1","11"),h(a,"x2","14"),h(a,"y2","17"),h(n,"xmlns","http://www.w3.org/2000/svg"),h(n,"width","24"),h(n,"height","24"),h(n,"viewBox","0 0 24 24"),h(n,"fill","none"),h(n,"stroke","currentColor"),h(n,"stroke-width","2"),h(n,"stroke-linecap","round"),h(n,"stroke-linejoin","round")},m:function(t,o){p(t,n,o),v(n,e),v(n,r),v(n,i),v(n,a)},p:m,i:m,o:m,d:function(t){t&&l(n)}}}var P=function(n){t(c,s);var e=S(c);function c(t){var n;return r(this,c),n=e.call(this),i(o(n),t,null,C,a,{}),n}return c}();function q(t){var n=t.split(".");return n[n.length-1].toUpperCase()}function A(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,a=n(t);if(r){var o=n(this).constructor;i=Reflect.construct(a,arguments,o)}else i=a.apply(this,arguments);return e(this,i)}}function F(t){var n,e;return n=new P({}),{c:function(){g(n.$$.fragment)},l:function(t){k(n.$$.fragment,t)},m:function(t,r){R(n,t,r),e=!0},i:function(t){e||(j(n.$$.fragment,t),e=!0)},o:function(t){V(n.$$.fragment,t),e=!1},d:function(t){b(n,t)}}}function H(t){var n,e,r,i,a,o,s,c,m,z,S,C,P=t[0].name+"",A=I(t[0].size)+"",H=q(t[0].name)+"";return(S=new B({props:{danger:!0,round:!0,$$slots:{default:[F]},$$scope:{ctx:t}}})).$on("click",t[2]),{c:function(){n=y("div"),e=y("div"),r=d(P),a=$(),o=y("div"),s=d(A),c=d("\n    •\n    "),m=d(H),z=$(),g(S.$$.fragment),this.h()},l:function(t){n=f(t,"DIV",{class:!0});var i=u(n);e=f(i,"DIV",{class:!0,title:!0});var h=u(e);r=x(h,P),h.forEach(l),a=w(i),o=f(i,"DIV",{class:!0});var p=u(o);s=x(p,A),c=x(p,"\n    •\n    "),m=x(p,H),p.forEach(l),z=w(i),k(S.$$.fragment,i),i.forEach(l),this.h()},h:function(){h(e,"class","filename svelte-1fssyil"),h(e,"title",i=t[0].name),h(o,"class","properties svelte-1fssyil"),h(n,"class","file-tile svelte-1fssyil")},m:function(t,i){p(t,n,i),v(n,e),v(e,r),v(n,a),v(n,o),v(o,s),v(o,c),v(o,m),v(n,z),R(S,n,null),C=!0},p:function(t,n){var a=D(n,1)[0];(!C||1&a)&&P!==(P=t[0].name+"")&&E(r,P),(!C||1&a&&i!==(i=t[0].name))&&h(e,"title",i),(!C||1&a)&&A!==(A=I(t[0].size)+"")&&E(s,A),(!C||1&a)&&H!==(H=q(t[0].name)+"")&&E(m,H);var o={};8&a&&(o.$$scope={dirty:a,ctx:t}),S.$set(o)},i:function(t){C||(j(S.$$.fragment,t),C=!0)},o:function(t){V(S.$$.fragment,t),C=!1},d:function(t){t&&l(n),b(S)}}}function K(t,n,e){var r=n.file,i=z();return t.$$set=function(t){"file"in t&&e(0,r=t.file)},[r,i,function(){return i("delete",r)}]}var M=function(n){t(c,s);var e=A(c);function c(t){var n;return r(this,c),n=e.call(this),i(o(n),t,K,H,a,{file:0}),n}return c}();export{M as F,q as f};
