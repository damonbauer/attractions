import{_ as n,a as t,b as a,c as s,i as o,s as i,d as c,S as r,p as l,q as e,r as u,u as f,v,w as d,o as p,y as h,x as m,f as x,g as $,A as y,h as b,z as C,j as g,W as k,k as O,l as A,m as R,D as S,B as j,C as D,a7 as w,a8 as B}from"./client.238eed9c.js";import{B as E}from"./button.5833a6f7.js";import{c as P}from"./classes.7d86155b.js";function q(n){var t=n-1;return t*t*t+1}function z(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.delay,s=void 0===a?0:a,o=t.duration,i=void 0===o?400:o,c=t.easing,r=void 0===c?q:c,l=t.x,e=void 0===l?0:l,u=t.y,f=void 0===u?0:u,v=t.opacity,d=void 0===v?0:v,p=getComputedStyle(n),h=+p.opacity,m="none"===p.transform?"":p.transform,x=h*(1-d);return{delay:s,duration:i,easing:r,css:function(n,t){return"\n\t\t\ttransform: ".concat(m," translate(").concat((1-n)*e,"px, ").concat((1-n)*f,"px);\n\t\t\topacity: ").concat(h-x*t)}}}function I(n,t){var a=t.transition,s=void 0===a?null:a,o=t.options;return null===s?{delay:0,duration:0,css:function(){return""}}:s(n,void 0===o?null:o)}function N(n){var s=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var o,i=t(n);if(s){var c=t(this).constructor;o=Reflect.construct(i,arguments,c)}else o=i.apply(this,arguments);return a(this,o)}}function V(n){var t,a;return(t=new E({props:{class:P(n[2]),$$slots:{default:[W]},$$scope:{ctx:n}}})).$on("click",n[9]),{c:function(){l(t.$$.fragment)},l:function(n){e(t.$$.fragment,n)},m:function(n,s){u(t,n,s),a=!0},p:function(n,a){var s={};4&a&&(s.class=P(n[2])),1040&a&&(s.$$scope={dirty:a,ctx:n}),t.$set(s)},i:function(n){a||(f(t.$$.fragment,n),a=!0)},o:function(n){v(t.$$.fragment,n),a=!1},d:function(n){d(t,n)}}}function W(n){var t,a=n[4].text+"";return{c:function(){t=h(a)},l:function(n){t=y(n,a)},m:function(n,a){O(n,t,a)},p:function(n,s){16&s&&a!==(a=n[4].text+"")&&S(t,a)},d:function(n){n&&b(t)}}}function _(n){var t,a,s,o,i,c,r,l,e=null!=n[4]&&V(n);return{c:function(){t=p("div"),a=p("span"),s=h(n[3]),i=m(),e&&e.c(),this.h()},l:function(o){t=x(o,"DIV",{class:!0});var c=$(t);a=x(c,"SPAN",{class:!0});var r=$(a);s=y(r,n[3]),r.forEach(b),i=C(c),e&&e.l(c),c.forEach(b),this.h()},h:function(){g(a,"class",o=k(P("text",n[1]))+" svelte-1fhhann"),g(t,"class",c=k(P("snackbar",n[0]))+" svelte-1fhhann")},m:function(n,o){O(n,t,o),A(t,a),A(a,s),A(t,i),e&&e.m(t,null),l=!0},p:function(i,r){var u=R(r,1)[0];n=i,(!l||8&u)&&S(s,n[3]),(!l||2&u&&o!==(o=k(P("text",n[1]))+" svelte-1fhhann"))&&g(a,"class",o),null!=n[4]?e?(e.p(n,u),16&u&&f(e,1)):((e=V(n)).c(),f(e,1),e.m(t,null)):e&&(j(),v(e,1,1,(function(){e=null})),D()),(!l||1&u&&c!==(c=k(P("snackbar",n[0]))+" svelte-1fhhann"))&&g(t,"class",c)},i:function(a){l||(f(e),w((function(){r||(r=B(t,I,{transition:n[7],options:n[8]},!0)),r.run(1)})),l=!0)},o:function(a){v(e),r||(r=B(t,I,{transition:n[7],options:n[8]},!1)),r.run(0),l=!1},d:function(n){n&&b(t),e&&e.d(),n&&r&&r.end()}}}function F(n,t,a){var s=t.class,o=void 0===s?null:s,i=t.textClass,c=void 0===i?null:i,r=t.buttonClass,l=void 0===r?null:r,e=t.text,u=t.action,f=void 0===u?null:u,v=t.closeOnAction,d=void 0===v||v,p=t.closeCallback,h=t.transition,m=void 0===h?z:h,x=t.transitionOptions,$=void 0===x?{x:-20,duration:150}:x;return n.$$set=function(n){"class"in n&&a(0,o=n.class),"textClass"in n&&a(1,c=n.textClass),"buttonClass"in n&&a(2,l=n.buttonClass),"text"in n&&a(3,e=n.text),"action"in n&&a(4,f=n.action),"closeOnAction"in n&&a(5,d=n.closeOnAction),"closeCallback"in n&&a(6,p=n.closeCallback),"transition"in n&&a(7,m=n.transition),"transitionOptions"in n&&a(8,$=n.transitionOptions)},[o,c,l,e,f,d,p,m,$,function(){"function"==typeof f.callback&&f.callback(),d&&p()}]}var G=function(t){n(l,r);var a=N(l);function l(n){var t;return s(this,l),t=a.call(this),o(c(t),n,F,_,i,{class:0,textClass:1,buttonClass:2,text:3,action:4,closeOnAction:5,closeCallback:6,transition:7,transitionOptions:8}),t}return l}();export{G as S,I as d};
