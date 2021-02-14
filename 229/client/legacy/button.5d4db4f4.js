import{_ as e,a as t,b as n,c as l,i as r,s as i,d as o,S as a,Q as s,k as u,m as d,B as c,v as f,C as p,u as h,h as v,O as m,R as y,J as b,P as g,I as R,o as x,f as E,g as T,K as L,L as w,t as C,T as S,M as $,N as A,U as I,V as N}from"./client.d1b23065.js";import{c as k}from"./classes.541c5f2a.js";function B(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n={event:t.event||"click",transition:t.transition||150,zIndex:t.zIndex||"100",bg:t.rippleColor||null,disabled:t.disabled||!1},l=function(t){return r(t,e,n)};function r(e,t,n){var l=n.bg,r=n.zIndex,i=n.transition,o=parseInt(getComputedStyle(t).borderWidth.replace("px","")),a=t.getBoundingClientRect(),s=a.left,u=a.top,d=t.offsetWidth,c=t.offsetHeight,f=e.clientX-s,p=e.clientY-u,h=Math.max(f,d-f),v=Math.max(p,c-p),m=window.getComputedStyle(t),y=Math.sqrt(h*h+v*v),b=o>0?o:0,g=document.createElement("div"),R=document.createElement("div");R.className="ripple-container",g.className="ripple",g.style.marginTop="0px",g.style.marginLeft="0px",g.style.width="1px",g.style.height="1px",g.style.transition="all ".concat(i,"ms cubic-bezier(0.4, 0, 0.2, 1)"),g.style.borderRadius="50%",g.style.pointerEvents="none",g.style.position="relative",g.style.zIndex=r,null!==l&&(g.style.backgroundColor=l),R.style.position="absolute",R.style.left=0-b+"px",R.style.top=0-b+"px",R.style.height="0",R.style.width="0",R.style.pointerEvents="none",R.style.overflow="hidden";var x=t.style.position.length>0?t.style.position:getComputedStyle(t).position;"relative"!==x&&"absolute"!==x&&(t.style.position="relative"),R.appendChild(g),t.appendChild(R),g.style.marginLeft=f+"px",g.style.marginTop=p+"px",R.style.width=d+"px",R.style.height=c+"px",R.style.borderTopLeftRadius=m.borderTopLeftRadius,R.style.borderTopRightRadius=m.borderTopRightRadius,R.style.borderBottomLeftRadius=m.borderBottomLeftRadius,R.style.borderBottomRightRadius=m.borderBottomRightRadius,R.style.direction="ltr",setTimeout((function(){g.style.width=2*y+"px",g.style.height=2*y+"px",g.style.marginLeft=f-y+"px",g.style.marginTop=p-y+"px"}),0),setTimeout((function(){g.style.backgroundColor="rgba(0, 0, 0, 0)"}),250),setTimeout((function(){R.parentNode.removeChild(R)}),i+250),setTimeout((function(){for(var e=!0,n=0;n<t.childNodes.length;n++)"ripple-container"===t.childNodes[n].className&&(e=!1);e&&(t.style.position="static"!==x?x:"")}),i+250)}return n.disabled||e.addEventListener(n.event,l),{destroy:function(){e.removeEventListener(n.event,l)},update:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t.disabled?e.removeEventListener(n.event,l):e.addEventListener(n.event,l)}}}function P(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return j(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return j(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var l=0,r=function(){};return{s:r,n:function(){return l>=e.length?{done:!0}:{done:!1,value:e[l++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,a=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return o=e.done,e},e:function(e){a=!0,i=e},f:function(){try{o||null==n.return||n.return()}finally{if(a)throw i}}}}function j(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,l=new Array(t);n<t;n++)l[n]=e[n];return l}function z(e,t){if(null!=t){var n,l=P(t);try{for(l.s();!(n=l.n()).done;){var r=n.value;e.addEventListener(r.name,r.handler)}}catch(e){l.e(e)}finally{l.f()}}return{destroy:function(){if(null!=t){var n,l=P(t);try{for(l.s();!(n=l.n()).done;){var r=n.value;e.removeEventListener(r.name,r.handler)}}catch(e){l.e(e)}finally{l.f()}}}}}function M(e){var l=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,i=t(e);if(l){var o=t(this).constructor;r=Reflect.construct(i,arguments,o)}else r=i.apply(this,arguments);return n(this,r)}}function O(e){for(var t,n,l,r,i,o,a,s=e[17].default,d=R(s,e,e[16],null),c=[{type:"button"},{disabled:e[10]},{class:n=k("btn",e[0])},e[15]],p={},m=0;m<c.length;m+=1)p=b(p,c[m]);return{c:function(){t=x("button"),d&&d.c(),this.h()},l:function(e){t=E(e,"BUTTON",{type:!0,disabled:!0,class:!0});var n=T(t);d&&d.l(n),n.forEach(v),this.h()},h:function(){L(t,p),w(t,"filled",e[1]),w(t,"outline",e[2]),w(t,"danger",e[3]),w(t,"round",e[5]),w(t,"neutral",e[4]),w(t,"rectangle",e[6]),w(t,"small",e[7]),w(t,"selected",e[8]),w(t,"svelte-1ddmah7",!0)},m:function(n,s){u(n,t,s),d&&d.m(t,null),i=!0,o||(a=[C(t,"click",e[19]),S(l=B.call(null,t,{disabled:e[9]||e[10]})),S(r=z.call(null,t,e[13]))],o=!0)},p:function(e,o){d&&d.p&&65536&o&&$(d,s,e,e[16],o,null,null),L(t,p=A(c,[{type:"button"},(!i||1024&o)&&{disabled:e[10]},(!i||1&o&&n!==(n=k("btn",e[0])))&&{class:n},32768&o&&e[15]])),l&&I(l.update)&&1536&o&&l.update.call(null,{disabled:e[9]||e[10]}),r&&I(r.update)&&8192&o&&r.update.call(null,e[13]),w(t,"filled",e[1]),w(t,"outline",e[2]),w(t,"danger",e[3]),w(t,"round",e[5]),w(t,"neutral",e[4]),w(t,"rectangle",e[6]),w(t,"small",e[7]),w(t,"selected",e[8]),w(t,"svelte-1ddmah7",!0)},i:function(e){i||(h(d,e),i=!0)},o:function(e){f(d,e),i=!1},d:function(e){e&&v(t),d&&d.d(e),o=!1,N(a)}}}function U(e){for(var t,n,l,r,i,o,a,s,d,c,p=e[17].default,m=R(p,e,e[16],null),y=[{href:n=e[10]?null:e[11]},{rel:l=e[12]?null:"prefetch"},{disabled:r=!!e[10]||null},{class:i=k("btn",e[0])},e[15]],g={},P=0;P<y.length;P+=1)g=b(g,y[P]);return{c:function(){t=x("a"),m&&m.c(),this.h()},l:function(e){t=E(e,"A",{href:!0,rel:!0,disabled:!0,class:!0});var n=T(t);m&&m.l(n),n.forEach(v),this.h()},h:function(){L(t,g),w(t,"filled",e[1]),w(t,"outline",e[2]),w(t,"danger",e[3]),w(t,"round",e[5]),w(t,"neutral",e[4]),w(t,"rectangle",e[6]),w(t,"small",e[7]),w(t,"selected",e[8]),w(t,"svelte-1ddmah7",!0)},m:function(n,l){u(n,t,l),m&&m.m(t,null),s=!0,d||(c=[C(t,"click",e[18]),S(o=z.call(null,t,e[13])),S(a=B.call(null,t,{disabled:e[9]||e[10]}))],d=!0)},p:function(e,u){m&&m.p&&65536&u&&$(m,p,e,e[16],u,null,null),L(t,g=A(y,[(!s||3072&u&&n!==(n=e[10]?null:e[11]))&&{href:n},(!s||4096&u&&l!==(l=e[12]?null:"prefetch"))&&{rel:l},(!s||1024&u&&r!==(r=!!e[10]||null))&&{disabled:r},(!s||1&u&&i!==(i=k("btn",e[0])))&&{class:i},32768&u&&e[15]])),o&&I(o.update)&&8192&u&&o.update.call(null,e[13]),a&&I(a.update)&&1536&u&&a.update.call(null,{disabled:e[9]||e[10]}),w(t,"filled",e[1]),w(t,"outline",e[2]),w(t,"danger",e[3]),w(t,"round",e[5]),w(t,"neutral",e[4]),w(t,"rectangle",e[6]),w(t,"small",e[7]),w(t,"selected",e[8]),w(t,"svelte-1ddmah7",!0)},i:function(e){s||(h(m,e),s=!0)},o:function(e){f(m,e),s=!1},d:function(e){e&&v(t),m&&m.d(e),d=!1,N(c)}}}function D(e){var t,n,l,r,i=[U,O],o=[];function a(e,t){return e[11]?0:1}return t=a(e),n=o[t]=i[t](e),{c:function(){n.c(),l=s()},l:function(e){n.l(e),l=s()},m:function(e,n){o[t].m(e,n),u(e,l,n),r=!0},p:function(e,r){var s=d(r,1)[0],u=t;(t=a(e))===u?o[t].p(e,s):(c(),f(o[u],1,1,(function(){o[u]=null})),p(),(n=o[t])?n.p(e,s):(n=o[t]=i[t](e)).c(),h(n,1),n.m(l.parentNode,l))},i:function(e){r||(h(n),r=!0)},o:function(e){f(n),r=!1},d:function(e){o[t].d(e),e&&v(l)}}}function W(e,t,n){var l=["class","filled","outline","danger","neutral","round","rectangle","small","selected","noRipple","disabled","href","noPrefetch","events"],r=m(t,l),i=t,o=i.$$slots,a=void 0===o?{}:o,s=i.$$scope,u=t.class,d=void 0===u?null:u,c=t.filled,f=void 0!==c&&c,p=t.outline,h=void 0!==p&&p,v=t.danger,R=void 0!==v&&v,x=t.neutral,E=void 0!==x&&x,T=t.round,L=void 0!==T&&T,w=t.rectangle,C=void 0!==w&&w,S=t.small,$=void 0!==S&&S,A=t.selected,I=void 0!==A&&A,N=t.noRipple,k=void 0!==N&&N,B=t.disabled,P=void 0!==B&&B,j=t.href,z=void 0===j?null:j,M=t.noPrefetch,O=void 0!==M&&M,U=t.events,D=void 0===U?[]:U;f&&h&&console.error("A button may not be filled and outlined at the same time"),R&&E&&console.error("A button may not be danger and neutral at the same time"),f&&I&&console.error("A button may not be filled and selected at the same time");var W=y();return e.$$set=function(e){t=b(b({},t),g(e)),n(15,r=m(t,l)),"class"in e&&n(0,d=e.class),"filled"in e&&n(1,f=e.filled),"outline"in e&&n(2,h=e.outline),"danger"in e&&n(3,R=e.danger),"neutral"in e&&n(4,E=e.neutral),"round"in e&&n(5,L=e.round),"rectangle"in e&&n(6,C=e.rectangle),"small"in e&&n(7,$=e.small),"selected"in e&&n(8,I=e.selected),"noRipple"in e&&n(9,k=e.noRipple),"disabled"in e&&n(10,P=e.disabled),"href"in e&&n(11,z=e.href),"noPrefetch"in e&&n(12,O=e.noPrefetch),"events"in e&&n(13,D=e.events),"$$scope"in e&&n(16,s=e.$$scope)},[d,f,h,R,E,L,C,$,I,k,P,z,O,D,W,r,s,a,function(e){return W("click",{nativeEvent:e})},function(e){return W("click",{nativeEvent:e})}]}var q=function(t){e(s,a);var n=M(s);function s(e){var t;return l(this,s),t=n.call(this),r(o(t),e,W,D,i,{class:0,filled:1,outline:2,danger:3,neutral:4,round:5,rectangle:6,small:7,selected:8,noRipple:9,disabled:10,href:11,noPrefetch:12,events:13}),t}return s}();export{q as B,z as e,B as r};