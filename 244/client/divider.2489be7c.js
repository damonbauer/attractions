import{S as t,i as n,s as e,G as s,j as $,k as a,m as o,N as r,t as c,o as p,p as l,U as f,q as m,u as i,f as u,d as g,r as d,v as h,h as x,c as k,b as w,e as y,g as v,n as D}from"./client.111d88f4.js";import{L as E,H as T,P as b}from"./layout.2c730bcf.js";import{D as O}from"./divider.f0c09549.js";import{S}from"./showcase.25e3833d.js";import{C as j}from"./color-preview.883f1003.js";import{H as C}from"./h2.83acc14c.js";import{H}from"./h3.99a7c064.js";import{T as N,a as F,b as P,c as A}from"./table.366e9b99.js";import"./label.03b23dce.js";import"./classes.2453fa25.js";import"./copyable-code.004d4631.js";import"./button.f5185675.js";function G(t){let n;return{c(){n=d("Divider")},l(t){n=h(t,"Divider")},m(t,e){u(t,n,e)},d(t){t&&g(n)}}}function R(t){let n;return{c(){n=d("A thin horizontal line used to separate sections and group content, with optional text to display in the middle.")},l(t){n=h(t,"A thin horizontal line used to separate sections and group content, with optional text to display in the middle.")},m(t,e){u(t,n,e)},d(t){t&&g(n)}}}function z(t){let n,e,s,r,f,E,T,b,S,j,C,H,N,F,P,A;return f=new O({props:{text:"Section 1"}}),j=new O({props:{text:"Conclusion"}}),P=new O({}),{c(){n=x("div"),e=x("p"),s=d("This is some introduction to something"),r=m(),$(f.$$.fragment),E=m(),T=x("p"),b=d("This is the 1st section. Have fun"),S=m(),$(j.$$.fragment),C=m(),H=x("p"),N=d("This ends our test"),F=m(),$(P.$$.fragment),this.h()},l(t){n=k(t,"DIV",{slot:!0,class:!0});var $=w(n);e=k($,"P",{});var o=w(e);s=h(o,"This is some introduction to something"),o.forEach(g),r=i($),a(f.$$.fragment,$),E=i($),T=k($,"P",{});var c=w(T);b=h(c,"This is the 1st section. Have fun"),c.forEach(g),S=i($),a(j.$$.fragment,$),C=i($),H=k($,"P",{});var p=w(H);N=h(p,"This ends our test"),p.forEach(g),F=i($),a(P.$$.fragment,$),$.forEach(g),this.h()},h(){y(n,"slot","showcase"),y(n,"class","padded")},m(t,$){u(t,n,$),v(n,e),v(e,s),v(n,r),o(f,n,null),v(n,E),v(n,T),v(T,b),v(n,S),o(j,n,null),v(n,C),v(n,H),v(H,N),v(n,F),o(P,n,null),A=!0},p:D,i(t){A||(c(f.$$.fragment,t),c(j.$$.fragment,t),c(P.$$.fragment,t),A=!0)},o(t){p(f.$$.fragment,t),p(j.$$.fragment,t),p(P.$$.fragment,t),A=!1},d(t){t&&g(n),l(f),l(j),l(P)}}}function V(t){let n,e;return{c(){n=x("div"),e=x("pre"),this.h()},l(t){n=k(t,"DIV",{slot:!0});var s=w(n);e=k(s,"PRE",{class:!0}),w(e).forEach(g),s.forEach(g),this.h()},h(){y(e,"class","language-svelte"),y(n,"slot","source")},m(t,s){u(t,n,s),v(n,e),e.innerHTML='<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>This is some introduction to something<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Divider</span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Section 1<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>This is the 1st section. Have fun<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Divider</span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Conclusion<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>This ends our test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Divider</span> <span class="token punctuation">/></span></span></code>'},p:D,d(t){t&&g(n)}}}function B(t){let n;return{c(){n=m()},l(t){n=i(t)},m(t,e){u(t,n,e)},p:D,i:D,o:D,d(t){t&&g(n)}}}function I(t){let n;return{c(){n=d("Properties")},l(t){n=h(t,"Properties")},m(t,e){u(t,n,e)},d(t){t&&g(n)}}}function L(t){let n;return{c(){n=d("Functional Properties")},l(t){n=h(t,"Functional Properties")},m(t,e){u(t,n,e)},d(t){t&&g(n)}}}function Y(t){let n;return{c(){n=d("Name")},l(t){n=h(t,"Name")},m(t,e){u(t,n,e)},d(t){t&&g(n)}}}function q(t){let n;return{c(){n=d("Default")},l(t){n=h(t,"Default")},m(t,e){u(t,n,e)},d(t){t&&g(n)}}}function M(t){let n;return{c(){n=d("Type")},l(t){n=h(t,"Type")},m(t,e){u(t,n,e)},d(t){t&&g(n)}}}function U(t){let n;return{c(){n=d("Description")},l(t){n=h(t,"Description")},m(t,e){u(t,n,e)},d(t){t&&g(n)}}}function J(t){let n,e,s,r,f,d,h,x;return n=new P({props:{$$slots:{default:[Y]},$$scope:{ctx:t}}}),s=new P({props:{$$slots:{default:[q]},$$scope:{ctx:t}}}),f=new P({props:{$$slots:{default:[M]},$$scope:{ctx:t}}}),h=new P({props:{$$slots:{default:[U]},$$scope:{ctx:t}}}),{c(){$(n.$$.fragment),e=m(),$(s.$$.fragment),r=m(),$(f.$$.fragment),d=m(),$(h.$$.fragment)},l(t){a(n.$$.fragment,t),e=i(t),a(s.$$.fragment,t),r=i(t),a(f.$$.fragment,t),d=i(t),a(h.$$.fragment,t)},m(t,$){o(n,t,$),u(t,e,$),o(s,t,$),u(t,r,$),o(f,t,$),u(t,d,$),o(h,t,$),x=!0},p(t,e){const $={};1&e&&($.$$scope={dirty:e,ctx:t}),n.$set($);const a={};1&e&&(a.$$scope={dirty:e,ctx:t}),s.$set(a);const o={};1&e&&(o.$$scope={dirty:e,ctx:t}),f.$set(o);const r={};1&e&&(r.$$scope={dirty:e,ctx:t}),h.$set(r)},i(t){x||(c(n.$$.fragment,t),c(s.$$.fragment,t),c(f.$$.fragment,t),c(h.$$.fragment,t),x=!0)},o(t){p(n.$$.fragment,t),p(s.$$.fragment,t),p(f.$$.fragment,t),p(h.$$.fragment,t),x=!1},d(t){l(n,t),t&&g(e),l(s,t),t&&g(r),l(f,t),t&&g(d),l(h,t)}}}function K(t){let n,e,s;return{c(){n=x("strong"),e=x("code"),s=d("text")},l(t){n=k(t,"STRONG",{});var $=w(n);e=k($,"CODE",{});var a=w(e);s=h(a,"text"),a.forEach(g),$.forEach(g)},m(t,$){u(t,n,$),v(n,e),v(e,s)},d(t){t&&g(n)}}}function Q(t){let n,e;return{c(){n=x("code"),e=d("null")},l(t){n=k(t,"CODE",{});var s=w(n);e=h(s,"null"),s.forEach(g)},m(t,s){u(t,n,s),v(n,e)},d(t){t&&g(n)}}}function W(t){let n,e;return{c(){n=x("code"),e=d("string")},l(t){n=k(t,"CODE",{});var s=w(n);e=h(s,"string"),s.forEach(g)},m(t,s){u(t,n,s),v(n,e)},d(t){t&&g(n)}}}function X(t){let n;return{c(){n=d("Adds a text to the middle of the line.")},l(t){n=h(t,"Adds a text to the middle of the line.")},m(t,e){u(t,n,e)},d(t){t&&g(n)}}}function Z(t){let n,e,s,r,f,d,h,x;return n=new A({props:{$$slots:{default:[K]},$$scope:{ctx:t}}}),s=new A({props:{$$slots:{default:[Q]},$$scope:{ctx:t}}}),f=new A({props:{$$slots:{default:[W]},$$scope:{ctx:t}}}),h=new A({props:{$$slots:{default:[X]},$$scope:{ctx:t}}}),{c(){$(n.$$.fragment),e=m(),$(s.$$.fragment),r=m(),$(f.$$.fragment),d=m(),$(h.$$.fragment)},l(t){a(n.$$.fragment,t),e=i(t),a(s.$$.fragment,t),r=i(t),a(f.$$.fragment,t),d=i(t),a(h.$$.fragment,t)},m(t,$){o(n,t,$),u(t,e,$),o(s,t,$),u(t,r,$),o(f,t,$),u(t,d,$),o(h,t,$),x=!0},p(t,e){const $={};1&e&&($.$$scope={dirty:e,ctx:t}),n.$set($);const a={};1&e&&(a.$$scope={dirty:e,ctx:t}),s.$set(a);const o={};1&e&&(o.$$scope={dirty:e,ctx:t}),f.$set(o);const r={};1&e&&(r.$$scope={dirty:e,ctx:t}),h.$set(r)},i(t){x||(c(n.$$.fragment,t),c(s.$$.fragment,t),c(f.$$.fragment,t),c(h.$$.fragment,t),x=!0)},o(t){p(n.$$.fragment,t),p(s.$$.fragment,t),p(f.$$.fragment,t),p(h.$$.fragment,t),x=!1},d(t){l(n,t),t&&g(e),l(s,t),t&&g(r),l(f,t),t&&g(d),l(h,t)}}}function _(t){let n,e,s;return{c(){n=x("strong"),e=x("code"),s=d("...")},l(t){n=k(t,"STRONG",{});var $=w(n);e=k($,"CODE",{});var a=w(e);s=h(a,"..."),a.forEach(g),$.forEach(g)},m(t,$){u(t,n,$),v(n,e),v(e,s)},d(t){t&&g(n)}}}function tt(t){let n,e;return{c(){n=x("code"),e=d("any")},l(t){n=k(t,"CODE",{});var s=w(n);e=h(s,"any"),s.forEach(g)},m(t,s){u(t,n,s),v(n,e)},d(t){t&&g(n)}}}function nt(t){let n,e,s,$;return{c(){n=d("Everything else will be passed to the underlying "),e=x("code"),s=d("<hr>"),$=d(" element.")},l(t){n=h(t,"Everything else will be passed to the underlying "),e=k(t,"CODE",{});var a=w(e);s=h(a,"<hr>"),a.forEach(g),$=h(t," element.")},m(t,a){u(t,n,a),u(t,e,a),v(e,s),u(t,$,a)},d(t){t&&g(n),t&&g(e),t&&g($)}}}function et(t){let n,e,s,r,f,d,h,x;return n=new A({props:{$$slots:{default:[_]},$$scope:{ctx:t}}}),s=new A({}),f=new A({props:{$$slots:{default:[tt]},$$scope:{ctx:t}}}),h=new A({props:{$$slots:{default:[nt]},$$scope:{ctx:t}}}),{c(){$(n.$$.fragment),e=m(),$(s.$$.fragment),r=m(),$(f.$$.fragment),d=m(),$(h.$$.fragment)},l(t){a(n.$$.fragment,t),e=i(t),a(s.$$.fragment,t),r=i(t),a(f.$$.fragment,t),d=i(t),a(h.$$.fragment,t)},m(t,$){o(n,t,$),u(t,e,$),o(s,t,$),u(t,r,$),o(f,t,$),u(t,d,$),o(h,t,$),x=!0},p(t,e){const s={};1&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s);const $={};1&e&&($.$$scope={dirty:e,ctx:t}),f.$set($);const a={};1&e&&(a.$$scope={dirty:e,ctx:t}),h.$set(a)},i(t){x||(c(n.$$.fragment,t),c(s.$$.fragment,t),c(f.$$.fragment,t),c(h.$$.fragment,t),x=!0)},o(t){p(n.$$.fragment,t),p(s.$$.fragment,t),p(f.$$.fragment,t),p(h.$$.fragment,t),x=!1},d(t){l(n,t),t&&g(e),l(s,t),t&&g(r),l(f,t),t&&g(d),l(h,t)}}}function st(t){let n,e,s,r,f,d,h,y;return e=new F({props:{$$slots:{default:[J]},$$scope:{ctx:t}}}),f=new F({props:{$$slots:{default:[Z]},$$scope:{ctx:t}}}),h=new F({props:{$$slots:{default:[et]},$$scope:{ctx:t}}}),{c(){n=x("thead"),$(e.$$.fragment),s=m(),r=x("tbody"),$(f.$$.fragment),d=m(),$(h.$$.fragment)},l(t){n=k(t,"THEAD",{});var $=w(n);a(e.$$.fragment,$),$.forEach(g),s=i(t),r=k(t,"TBODY",{});var o=w(r);a(f.$$.fragment,o),d=i(o),a(h.$$.fragment,o),o.forEach(g)},m(t,$){u(t,n,$),o(e,n,null),u(t,s,$),u(t,r,$),o(f,r,null),v(r,d),o(h,r,null),y=!0},p(t,n){const s={};1&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const $={};1&n&&($.$$scope={dirty:n,ctx:t}),f.$set($);const a={};1&n&&(a.$$scope={dirty:n,ctx:t}),h.$set(a)},i(t){y||(c(e.$$.fragment,t),c(f.$$.fragment,t),c(h.$$.fragment,t),y=!0)},o(t){p(e.$$.fragment,t),p(f.$$.fragment,t),p(h.$$.fragment,t),y=!1},d(t){t&&g(n),l(e),t&&g(s),t&&g(r),l(f),l(h)}}}function $t(t){let n;return{c(){n=d("SCSS Variables")},l(t){n=h(t,"SCSS Variables")},m(t,e){u(t,n,e)},d(t){t&&g(n)}}}function at(t){let n;return{c(){n=d("Name")},l(t){n=h(t,"Name")},m(t,e){u(t,n,e)},d(t){t&&g(n)}}}function ot(t){let n;return{c(){n=d("Description")},l(t){n=h(t,"Description")},m(t,e){u(t,n,e)},d(t){t&&g(n)}}}function rt(t){let n;return{c(){n=d("Default")},l(t){n=h(t,"Default")},m(t,e){u(t,n,e)},d(t){t&&g(n)}}}function ct(t){let n,e,s,r,f,d;return n=new P({props:{$$slots:{default:[at]},$$scope:{ctx:t}}}),s=new P({props:{$$slots:{default:[ot]},$$scope:{ctx:t}}}),f=new P({props:{$$slots:{default:[rt]},$$scope:{ctx:t}}}),{c(){$(n.$$.fragment),e=m(),$(s.$$.fragment),r=m(),$(f.$$.fragment)},l(t){a(n.$$.fragment,t),e=i(t),a(s.$$.fragment,t),r=i(t),a(f.$$.fragment,t)},m(t,$){o(n,t,$),u(t,e,$),o(s,t,$),u(t,r,$),o(f,t,$),d=!0},p(t,e){const $={};1&e&&($.$$scope={dirty:e,ctx:t}),n.$set($);const a={};1&e&&(a.$$scope={dirty:e,ctx:t}),s.$set(a);const o={};1&e&&(o.$$scope={dirty:e,ctx:t}),f.$set(o)},i(t){d||(c(n.$$.fragment,t),c(s.$$.fragment,t),c(f.$$.fragment,t),d=!0)},o(t){p(n.$$.fragment,t),p(s.$$.fragment,t),p(f.$$.fragment,t),d=!1},d(t){l(n,t),t&&g(e),l(s,t),t&&g(r),l(f,t)}}}function pt(t){let n,e,s;return{c(){n=x("strong"),e=x("code"),s=d("$light-contrast")},l(t){n=k(t,"STRONG",{});var $=w(n);e=k($,"CODE",{});var a=w(e);s=h(a,"$light-contrast"),a.forEach(g),$.forEach(g)},m(t,$){u(t,n,$),v(n,e),v(e,s)},d(t){t&&g(n)}}}function lt(t){let n;return{c(){n=d("The color of the horizontal rule")},l(t){n=h(t,"The color of the horizontal rule")},m(t,e){u(t,n,e)},d(t){t&&g(n)}}}function ft(t){let n,e;return n=new j({props:{value:"#DDDDDD"}}),{c(){$(n.$$.fragment)},l(t){a(n.$$.fragment,t)},m(t,s){o(n,t,s),e=!0},p:D,i(t){e||(c(n.$$.fragment,t),e=!0)},o(t){p(n.$$.fragment,t),e=!1},d(t){l(n,t)}}}function mt(t){let n,e,s,r,f,d;return n=new A({props:{$$slots:{default:[pt]},$$scope:{ctx:t}}}),s=new A({props:{$$slots:{default:[lt]},$$scope:{ctx:t}}}),f=new A({props:{$$slots:{default:[ft]},$$scope:{ctx:t}}}),{c(){$(n.$$.fragment),e=m(),$(s.$$.fragment),r=m(),$(f.$$.fragment)},l(t){a(n.$$.fragment,t),e=i(t),a(s.$$.fragment,t),r=i(t),a(f.$$.fragment,t)},m(t,$){o(n,t,$),u(t,e,$),o(s,t,$),u(t,r,$),o(f,t,$),d=!0},p(t,e){const $={};1&e&&($.$$scope={dirty:e,ctx:t}),n.$set($);const a={};1&e&&(a.$$scope={dirty:e,ctx:t}),s.$set(a);const o={};1&e&&(o.$$scope={dirty:e,ctx:t}),f.$set(o)},i(t){d||(c(n.$$.fragment,t),c(s.$$.fragment,t),c(f.$$.fragment,t),d=!0)},o(t){p(n.$$.fragment,t),p(s.$$.fragment,t),p(f.$$.fragment,t),d=!1},d(t){l(n,t),t&&g(e),l(s,t),t&&g(r),l(f,t)}}}function it(t){let n,e,s;return{c(){n=x("strong"),e=x("code"),s=d("$background")},l(t){n=k(t,"STRONG",{});var $=w(n);e=k($,"CODE",{});var a=w(e);s=h(a,"$background"),a.forEach(g),$.forEach(g)},m(t,$){u(t,n,$),v(n,e),v(e,s)},d(t){t&&g(n)}}}function ut(t){let n;return{c(){n=d("The background color of the text.")},l(t){n=h(t,"The background color of the text.")},m(t,e){u(t,n,e)},d(t){t&&g(n)}}}function gt(t){let n,e;return n=new j({props:{value:"#FFFFFF"}}),{c(){$(n.$$.fragment)},l(t){a(n.$$.fragment,t)},m(t,s){o(n,t,s),e=!0},p:D,i(t){e||(c(n.$$.fragment,t),e=!0)},o(t){p(n.$$.fragment,t),e=!1},d(t){l(n,t)}}}function dt(t){let n,e,s,r,f,d;return n=new A({props:{$$slots:{default:[it]},$$scope:{ctx:t}}}),s=new A({props:{$$slots:{default:[ut]},$$scope:{ctx:t}}}),f=new A({props:{$$slots:{default:[gt]},$$scope:{ctx:t}}}),{c(){$(n.$$.fragment),e=m(),$(s.$$.fragment),r=m(),$(f.$$.fragment)},l(t){a(n.$$.fragment,t),e=i(t),a(s.$$.fragment,t),r=i(t),a(f.$$.fragment,t)},m(t,$){o(n,t,$),u(t,e,$),o(s,t,$),u(t,r,$),o(f,t,$),d=!0},p(t,e){const $={};1&e&&($.$$scope={dirty:e,ctx:t}),n.$set($);const a={};1&e&&(a.$$scope={dirty:e,ctx:t}),s.$set(a);const o={};1&e&&(o.$$scope={dirty:e,ctx:t}),f.$set(o)},i(t){d||(c(n.$$.fragment,t),c(s.$$.fragment,t),c(f.$$.fragment,t),d=!0)},o(t){p(n.$$.fragment,t),p(s.$$.fragment,t),p(f.$$.fragment,t),d=!1},d(t){l(n,t),t&&g(e),l(s,t),t&&g(r),l(f,t)}}}function ht(t){let n,e,s,r,f,d,h,y;return e=new F({props:{$$slots:{default:[ct]},$$scope:{ctx:t}}}),f=new F({props:{$$slots:{default:[mt]},$$scope:{ctx:t}}}),h=new F({props:{$$slots:{default:[dt]},$$scope:{ctx:t}}}),{c(){n=x("thead"),$(e.$$.fragment),s=m(),r=x("tbody"),$(f.$$.fragment),d=m(),$(h.$$.fragment)},l(t){n=k(t,"THEAD",{});var $=w(n);a(e.$$.fragment,$),$.forEach(g),s=i(t),r=k(t,"TBODY",{});var o=w(r);a(f.$$.fragment,o),d=i(o),a(h.$$.fragment,o),o.forEach(g)},m(t,$){u(t,n,$),o(e,n,null),u(t,s,$),u(t,r,$),o(f,r,null),v(r,d),o(h,r,null),y=!0},p(t,n){const s={};1&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const $={};1&n&&($.$$scope={dirty:n,ctx:t}),f.$set($);const a={};1&n&&(a.$$scope={dirty:n,ctx:t}),h.$set(a)},i(t){y||(c(e.$$.fragment,t),c(f.$$.fragment,t),c(h.$$.fragment,t),y=!0)},o(t){p(e.$$.fragment,t),p(f.$$.fragment,t),p(h.$$.fragment,t),y=!1},d(t){t&&g(n),l(e),t&&g(s),t&&g(r),l(f),l(h)}}}function xt(t){let n,e,s,r,f,d,h,x,k,w,y,v,D,E,O,j;return n=new T({props:{$$slots:{default:[G]},$$scope:{ctx:t}}}),s=new b({props:{$$slots:{default:[R]},$$scope:{ctx:t}}}),f=new S({props:{$$slots:{default:[B],source:[V],showcase:[z]},$$scope:{ctx:t}}}),h=new C({props:{id:"properties",$$slots:{default:[I]},$$scope:{ctx:t}}}),k=new H({props:{$$slots:{default:[L]},$$scope:{ctx:t}}}),y=new N({props:{$$slots:{default:[st]},$$scope:{ctx:t}}}),D=new C({props:{id:"scss-variables",$$slots:{default:[$t]},$$scope:{ctx:t}}}),O=new N({props:{$$slots:{default:[ht]},$$scope:{ctx:t}}}),{c(){$(n.$$.fragment),e=m(),$(s.$$.fragment),r=m(),$(f.$$.fragment),d=m(),$(h.$$.fragment),x=m(),$(k.$$.fragment),w=m(),$(y.$$.fragment),v=m(),$(D.$$.fragment),E=m(),$(O.$$.fragment)},l(t){a(n.$$.fragment,t),e=i(t),a(s.$$.fragment,t),r=i(t),a(f.$$.fragment,t),d=i(t),a(h.$$.fragment,t),x=i(t),a(k.$$.fragment,t),w=i(t),a(y.$$.fragment,t),v=i(t),a(D.$$.fragment,t),E=i(t),a(O.$$.fragment,t)},m(t,$){o(n,t,$),u(t,e,$),o(s,t,$),u(t,r,$),o(f,t,$),u(t,d,$),o(h,t,$),u(t,x,$),o(k,t,$),u(t,w,$),o(y,t,$),u(t,v,$),o(D,t,$),u(t,E,$),o(O,t,$),j=!0},p(t,e){const $={};1&e&&($.$$scope={dirty:e,ctx:t}),n.$set($);const a={};1&e&&(a.$$scope={dirty:e,ctx:t}),s.$set(a);const o={};1&e&&(o.$$scope={dirty:e,ctx:t}),f.$set(o);const r={};1&e&&(r.$$scope={dirty:e,ctx:t}),h.$set(r);const c={};1&e&&(c.$$scope={dirty:e,ctx:t}),k.$set(c);const p={};1&e&&(p.$$scope={dirty:e,ctx:t}),y.$set(p);const l={};1&e&&(l.$$scope={dirty:e,ctx:t}),D.$set(l);const m={};1&e&&(m.$$scope={dirty:e,ctx:t}),O.$set(m)},i(t){j||(c(n.$$.fragment,t),c(s.$$.fragment,t),c(f.$$.fragment,t),c(h.$$.fragment,t),c(k.$$.fragment,t),c(y.$$.fragment,t),c(D.$$.fragment,t),c(O.$$.fragment,t),j=!0)},o(t){p(n.$$.fragment,t),p(s.$$.fragment,t),p(f.$$.fragment,t),p(h.$$.fragment,t),p(k.$$.fragment,t),p(y.$$.fragment,t),p(D.$$.fragment,t),p(O.$$.fragment,t),j=!1},d(t){l(n,t),t&&g(e),l(s,t),t&&g(r),l(f,t),t&&g(d),l(h,t),t&&g(x),l(k,t),t&&g(w),l(y,t),t&&g(v),l(D,t),t&&g(E),l(O,t)}}}function kt(t){let n,e;const m=[wt];let i={$$slots:{default:[xt]},$$scope:{ctx:t}};for(let t=0;t<m.length;t+=1)i=s(i,m[t]);return n=new E({props:i}),{c(){$(n.$$.fragment)},l(t){a(n.$$.fragment,t)},m(t,s){o(n,t,s),e=!0},p(t,[e]){const s=0&e?r(m,[f(wt)]):{};1&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s)},i(t){e||(c(n.$$.fragment,t),e=!0)},o(t){p(n.$$.fragment,t),e=!1},d(t){l(n,t)}}}const wt={name:"Divider"};export default class extends t{constructor(t){super(),n(this,t,null,kt,e,{})}}export{wt as metadata};
