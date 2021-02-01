import{S as t,i as e,s as n,G as s,j as $,k as a,m as o,N as r,t as c,o as p,p as l,U as f,q as m,u as i,f as u,d as g,r as d,v as h,h as x,c as k,b as w,e as y,g as v,n as D}from"./client.c2f5b28b.js";import{L as E,H as T,P as b}from"./layout.eb7e3c15.js";import{D as O}from"./divider.faff2b12.js";import{S}from"./showcase.66534fba.js";import{C as j}from"./color-preview.2a9da09a.js";import{H as C}from"./h2.a0ad1fdb.js";import{H}from"./h3.92cd2f0c.js";import{T as N,a as F,b as P,c as A}from"./table.f1178579.js";import"./label.e9fe0336.js";import"./classes.2453fa25.js";import"./copyable-code.6ee4af26.js";import"./button.11d7bedf.js";function G(t){let e;return{c(){e=d("Divider")},l(t){e=h(t,"Divider")},m(t,n){u(t,e,n)},d(t){t&&g(e)}}}function R(t){let e;return{c(){e=d("A thin horizontal line used to separate sections and group content, with optional text to display in the middle.")},l(t){e=h(t,"A thin horizontal line used to separate sections and group content, with optional text to display in the middle.")},m(t,n){u(t,e,n)},d(t){t&&g(e)}}}function z(t){let e,n,s,r,f,E,T,b,S,j,C,H,N,F,P,A;return f=new O({props:{text:"Section 1"}}),j=new O({props:{text:"Conclusion"}}),P=new O({}),{c(){e=x("div"),n=x("p"),s=d("This is some introduction to something"),r=m(),$(f.$$.fragment),E=m(),T=x("p"),b=d("This is the 1st section. Have fun"),S=m(),$(j.$$.fragment),C=m(),H=x("p"),N=d("This ends our test"),F=m(),$(P.$$.fragment),this.h()},l(t){e=k(t,"DIV",{slot:!0,class:!0});var $=w(e);n=k($,"P",{});var o=w(n);s=h(o,"This is some introduction to something"),o.forEach(g),r=i($),a(f.$$.fragment,$),E=i($),T=k($,"P",{});var c=w(T);b=h(c,"This is the 1st section. Have fun"),c.forEach(g),S=i($),a(j.$$.fragment,$),C=i($),H=k($,"P",{});var p=w(H);N=h(p,"This ends our test"),p.forEach(g),F=i($),a(P.$$.fragment,$),$.forEach(g),this.h()},h(){y(e,"slot","showcase"),y(e,"class","padded")},m(t,$){u(t,e,$),v(e,n),v(n,s),v(e,r),o(f,e,null),v(e,E),v(e,T),v(T,b),v(e,S),o(j,e,null),v(e,C),v(e,H),v(H,N),v(e,F),o(P,e,null),A=!0},p:D,i(t){A||(c(f.$$.fragment,t),c(j.$$.fragment,t),c(P.$$.fragment,t),A=!0)},o(t){p(f.$$.fragment,t),p(j.$$.fragment,t),p(P.$$.fragment,t),A=!1},d(t){t&&g(e),l(f),l(j),l(P)}}}function V(t){let e,n;return{c(){e=x("div"),n=x("pre"),this.h()},l(t){e=k(t,"DIV",{slot:!0});var s=w(e);n=k(s,"PRE",{class:!0}),w(n).forEach(g),s.forEach(g),this.h()},h(){y(n,"class","language-svelte"),y(e,"slot","source")},m(t,s){u(t,e,s),v(e,n),n.innerHTML='<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>This is some introduction to something<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Divider</span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Section 1<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>This is the 1st section. Have fun<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Divider</span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Conclusion<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>This ends our test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Divider</span> <span class="token punctuation">/></span></span></code>'},p:D,d(t){t&&g(e)}}}function B(t){let e;return{c(){e=m()},l(t){e=i(t)},m(t,n){u(t,e,n)},p:D,i:D,o:D,d(t){t&&g(e)}}}function I(t){let e;return{c(){e=d("Properties")},l(t){e=h(t,"Properties")},m(t,n){u(t,e,n)},d(t){t&&g(e)}}}function L(t){let e;return{c(){e=d("Functional Properties")},l(t){e=h(t,"Functional Properties")},m(t,n){u(t,e,n)},d(t){t&&g(e)}}}function Y(t){let e;return{c(){e=d("Name")},l(t){e=h(t,"Name")},m(t,n){u(t,e,n)},d(t){t&&g(e)}}}function q(t){let e;return{c(){e=d("Default")},l(t){e=h(t,"Default")},m(t,n){u(t,e,n)},d(t){t&&g(e)}}}function M(t){let e;return{c(){e=d("Type")},l(t){e=h(t,"Type")},m(t,n){u(t,e,n)},d(t){t&&g(e)}}}function U(t){let e;return{c(){e=d("Description")},l(t){e=h(t,"Description")},m(t,n){u(t,e,n)},d(t){t&&g(e)}}}function J(t){let e,n,s,r,f,d,h,x;return e=new P({props:{$$slots:{default:[Y]},$$scope:{ctx:t}}}),s=new P({props:{$$slots:{default:[q]},$$scope:{ctx:t}}}),f=new P({props:{$$slots:{default:[M]},$$scope:{ctx:t}}}),h=new P({props:{$$slots:{default:[U]},$$scope:{ctx:t}}}),{c(){$(e.$$.fragment),n=m(),$(s.$$.fragment),r=m(),$(f.$$.fragment),d=m(),$(h.$$.fragment)},l(t){a(e.$$.fragment,t),n=i(t),a(s.$$.fragment,t),r=i(t),a(f.$$.fragment,t),d=i(t),a(h.$$.fragment,t)},m(t,$){o(e,t,$),u(t,n,$),o(s,t,$),u(t,r,$),o(f,t,$),u(t,d,$),o(h,t,$),x=!0},p(t,n){const $={};1&n&&($.$$scope={dirty:n,ctx:t}),e.$set($);const a={};1&n&&(a.$$scope={dirty:n,ctx:t}),s.$set(a);const o={};1&n&&(o.$$scope={dirty:n,ctx:t}),f.$set(o);const r={};1&n&&(r.$$scope={dirty:n,ctx:t}),h.$set(r)},i(t){x||(c(e.$$.fragment,t),c(s.$$.fragment,t),c(f.$$.fragment,t),c(h.$$.fragment,t),x=!0)},o(t){p(e.$$.fragment,t),p(s.$$.fragment,t),p(f.$$.fragment,t),p(h.$$.fragment,t),x=!1},d(t){l(e,t),t&&g(n),l(s,t),t&&g(r),l(f,t),t&&g(d),l(h,t)}}}function K(t){let e,n,s;return{c(){e=x("strong"),n=x("code"),s=d("text")},l(t){e=k(t,"STRONG",{});var $=w(e);n=k($,"CODE",{});var a=w(n);s=h(a,"text"),a.forEach(g),$.forEach(g)},m(t,$){u(t,e,$),v(e,n),v(n,s)},d(t){t&&g(e)}}}function Q(t){let e,n;return{c(){e=x("code"),n=d("null")},l(t){e=k(t,"CODE",{});var s=w(e);n=h(s,"null"),s.forEach(g)},m(t,s){u(t,e,s),v(e,n)},d(t){t&&g(e)}}}function W(t){let e,n;return{c(){e=x("code"),n=d("string")},l(t){e=k(t,"CODE",{});var s=w(e);n=h(s,"string"),s.forEach(g)},m(t,s){u(t,e,s),v(e,n)},d(t){t&&g(e)}}}function X(t){let e;return{c(){e=d("Adds a text to the middle of the line.")},l(t){e=h(t,"Adds a text to the middle of the line.")},m(t,n){u(t,e,n)},d(t){t&&g(e)}}}function Z(t){let e,n,s,r,f,d,h,x;return e=new A({props:{$$slots:{default:[K]},$$scope:{ctx:t}}}),s=new A({props:{$$slots:{default:[Q]},$$scope:{ctx:t}}}),f=new A({props:{$$slots:{default:[W]},$$scope:{ctx:t}}}),h=new A({props:{$$slots:{default:[X]},$$scope:{ctx:t}}}),{c(){$(e.$$.fragment),n=m(),$(s.$$.fragment),r=m(),$(f.$$.fragment),d=m(),$(h.$$.fragment)},l(t){a(e.$$.fragment,t),n=i(t),a(s.$$.fragment,t),r=i(t),a(f.$$.fragment,t),d=i(t),a(h.$$.fragment,t)},m(t,$){o(e,t,$),u(t,n,$),o(s,t,$),u(t,r,$),o(f,t,$),u(t,d,$),o(h,t,$),x=!0},p(t,n){const $={};1&n&&($.$$scope={dirty:n,ctx:t}),e.$set($);const a={};1&n&&(a.$$scope={dirty:n,ctx:t}),s.$set(a);const o={};1&n&&(o.$$scope={dirty:n,ctx:t}),f.$set(o);const r={};1&n&&(r.$$scope={dirty:n,ctx:t}),h.$set(r)},i(t){x||(c(e.$$.fragment,t),c(s.$$.fragment,t),c(f.$$.fragment,t),c(h.$$.fragment,t),x=!0)},o(t){p(e.$$.fragment,t),p(s.$$.fragment,t),p(f.$$.fragment,t),p(h.$$.fragment,t),x=!1},d(t){l(e,t),t&&g(n),l(s,t),t&&g(r),l(f,t),t&&g(d),l(h,t)}}}function _(t){let e,n,s;return{c(){e=x("strong"),n=x("code"),s=d("...")},l(t){e=k(t,"STRONG",{});var $=w(e);n=k($,"CODE",{});var a=w(n);s=h(a,"..."),a.forEach(g),$.forEach(g)},m(t,$){u(t,e,$),v(e,n),v(n,s)},d(t){t&&g(e)}}}function tt(t){let e,n;return{c(){e=x("code"),n=d("any")},l(t){e=k(t,"CODE",{});var s=w(e);n=h(s,"any"),s.forEach(g)},m(t,s){u(t,e,s),v(e,n)},d(t){t&&g(e)}}}function et(t){let e,n,s,$;return{c(){e=d("Everything else will be passed to the underlying "),n=x("code"),s=d("<hr>"),$=d(" element.")},l(t){e=h(t,"Everything else will be passed to the underlying "),n=k(t,"CODE",{});var a=w(n);s=h(a,"<hr>"),a.forEach(g),$=h(t," element.")},m(t,a){u(t,e,a),u(t,n,a),v(n,s),u(t,$,a)},d(t){t&&g(e),t&&g(n),t&&g($)}}}function nt(t){let e,n,s,r,f,d,h,x;return e=new A({props:{$$slots:{default:[_]},$$scope:{ctx:t}}}),s=new A({}),f=new A({props:{$$slots:{default:[tt]},$$scope:{ctx:t}}}),h=new A({props:{$$slots:{default:[et]},$$scope:{ctx:t}}}),{c(){$(e.$$.fragment),n=m(),$(s.$$.fragment),r=m(),$(f.$$.fragment),d=m(),$(h.$$.fragment)},l(t){a(e.$$.fragment,t),n=i(t),a(s.$$.fragment,t),r=i(t),a(f.$$.fragment,t),d=i(t),a(h.$$.fragment,t)},m(t,$){o(e,t,$),u(t,n,$),o(s,t,$),u(t,r,$),o(f,t,$),u(t,d,$),o(h,t,$),x=!0},p(t,n){const s={};1&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const $={};1&n&&($.$$scope={dirty:n,ctx:t}),f.$set($);const a={};1&n&&(a.$$scope={dirty:n,ctx:t}),h.$set(a)},i(t){x||(c(e.$$.fragment,t),c(s.$$.fragment,t),c(f.$$.fragment,t),c(h.$$.fragment,t),x=!0)},o(t){p(e.$$.fragment,t),p(s.$$.fragment,t),p(f.$$.fragment,t),p(h.$$.fragment,t),x=!1},d(t){l(e,t),t&&g(n),l(s,t),t&&g(r),l(f,t),t&&g(d),l(h,t)}}}function st(t){let e,n,s,r,f,d,h,y;return n=new F({props:{$$slots:{default:[J]},$$scope:{ctx:t}}}),f=new F({props:{$$slots:{default:[Z]},$$scope:{ctx:t}}}),h=new F({props:{$$slots:{default:[nt]},$$scope:{ctx:t}}}),{c(){e=x("thead"),$(n.$$.fragment),s=m(),r=x("tbody"),$(f.$$.fragment),d=m(),$(h.$$.fragment)},l(t){e=k(t,"THEAD",{});var $=w(e);a(n.$$.fragment,$),$.forEach(g),s=i(t),r=k(t,"TBODY",{});var o=w(r);a(f.$$.fragment,o),d=i(o),a(h.$$.fragment,o),o.forEach(g)},m(t,$){u(t,e,$),o(n,e,null),u(t,s,$),u(t,r,$),o(f,r,null),v(r,d),o(h,r,null),y=!0},p(t,e){const s={};1&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s);const $={};1&e&&($.$$scope={dirty:e,ctx:t}),f.$set($);const a={};1&e&&(a.$$scope={dirty:e,ctx:t}),h.$set(a)},i(t){y||(c(n.$$.fragment,t),c(f.$$.fragment,t),c(h.$$.fragment,t),y=!0)},o(t){p(n.$$.fragment,t),p(f.$$.fragment,t),p(h.$$.fragment,t),y=!1},d(t){t&&g(e),l(n),t&&g(s),t&&g(r),l(f),l(h)}}}function $t(t){let e;return{c(){e=d("SCSS Variables")},l(t){e=h(t,"SCSS Variables")},m(t,n){u(t,e,n)},d(t){t&&g(e)}}}function at(t){let e;return{c(){e=d("Name")},l(t){e=h(t,"Name")},m(t,n){u(t,e,n)},d(t){t&&g(e)}}}function ot(t){let e;return{c(){e=d("Description")},l(t){e=h(t,"Description")},m(t,n){u(t,e,n)},d(t){t&&g(e)}}}function rt(t){let e;return{c(){e=d("Default")},l(t){e=h(t,"Default")},m(t,n){u(t,e,n)},d(t){t&&g(e)}}}function ct(t){let e,n,s,r,f,d;return e=new P({props:{$$slots:{default:[at]},$$scope:{ctx:t}}}),s=new P({props:{$$slots:{default:[ot]},$$scope:{ctx:t}}}),f=new P({props:{$$slots:{default:[rt]},$$scope:{ctx:t}}}),{c(){$(e.$$.fragment),n=m(),$(s.$$.fragment),r=m(),$(f.$$.fragment)},l(t){a(e.$$.fragment,t),n=i(t),a(s.$$.fragment,t),r=i(t),a(f.$$.fragment,t)},m(t,$){o(e,t,$),u(t,n,$),o(s,t,$),u(t,r,$),o(f,t,$),d=!0},p(t,n){const $={};1&n&&($.$$scope={dirty:n,ctx:t}),e.$set($);const a={};1&n&&(a.$$scope={dirty:n,ctx:t}),s.$set(a);const o={};1&n&&(o.$$scope={dirty:n,ctx:t}),f.$set(o)},i(t){d||(c(e.$$.fragment,t),c(s.$$.fragment,t),c(f.$$.fragment,t),d=!0)},o(t){p(e.$$.fragment,t),p(s.$$.fragment,t),p(f.$$.fragment,t),d=!1},d(t){l(e,t),t&&g(n),l(s,t),t&&g(r),l(f,t)}}}function pt(t){let e,n,s;return{c(){e=x("strong"),n=x("code"),s=d("$light-contrast")},l(t){e=k(t,"STRONG",{});var $=w(e);n=k($,"CODE",{});var a=w(n);s=h(a,"$light-contrast"),a.forEach(g),$.forEach(g)},m(t,$){u(t,e,$),v(e,n),v(n,s)},d(t){t&&g(e)}}}function lt(t){let e;return{c(){e=d("The color of the horizontal rule")},l(t){e=h(t,"The color of the horizontal rule")},m(t,n){u(t,e,n)},d(t){t&&g(e)}}}function ft(t){let e,n;return e=new j({props:{value:"#DDDDDD"}}),{c(){$(e.$$.fragment)},l(t){a(e.$$.fragment,t)},m(t,s){o(e,t,s),n=!0},p:D,i(t){n||(c(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){l(e,t)}}}function mt(t){let e,n,s,r,f,d;return e=new A({props:{$$slots:{default:[pt]},$$scope:{ctx:t}}}),s=new A({props:{$$slots:{default:[lt]},$$scope:{ctx:t}}}),f=new A({props:{$$slots:{default:[ft]},$$scope:{ctx:t}}}),{c(){$(e.$$.fragment),n=m(),$(s.$$.fragment),r=m(),$(f.$$.fragment)},l(t){a(e.$$.fragment,t),n=i(t),a(s.$$.fragment,t),r=i(t),a(f.$$.fragment,t)},m(t,$){o(e,t,$),u(t,n,$),o(s,t,$),u(t,r,$),o(f,t,$),d=!0},p(t,n){const $={};1&n&&($.$$scope={dirty:n,ctx:t}),e.$set($);const a={};1&n&&(a.$$scope={dirty:n,ctx:t}),s.$set(a);const o={};1&n&&(o.$$scope={dirty:n,ctx:t}),f.$set(o)},i(t){d||(c(e.$$.fragment,t),c(s.$$.fragment,t),c(f.$$.fragment,t),d=!0)},o(t){p(e.$$.fragment,t),p(s.$$.fragment,t),p(f.$$.fragment,t),d=!1},d(t){l(e,t),t&&g(n),l(s,t),t&&g(r),l(f,t)}}}function it(t){let e,n,s;return{c(){e=x("strong"),n=x("code"),s=d("$background")},l(t){e=k(t,"STRONG",{});var $=w(e);n=k($,"CODE",{});var a=w(n);s=h(a,"$background"),a.forEach(g),$.forEach(g)},m(t,$){u(t,e,$),v(e,n),v(n,s)},d(t){t&&g(e)}}}function ut(t){let e;return{c(){e=d("The background color of the text.")},l(t){e=h(t,"The background color of the text.")},m(t,n){u(t,e,n)},d(t){t&&g(e)}}}function gt(t){let e,n;return e=new j({props:{value:"#FFFFFF"}}),{c(){$(e.$$.fragment)},l(t){a(e.$$.fragment,t)},m(t,s){o(e,t,s),n=!0},p:D,i(t){n||(c(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){l(e,t)}}}function dt(t){let e,n,s,r,f,d;return e=new A({props:{$$slots:{default:[it]},$$scope:{ctx:t}}}),s=new A({props:{$$slots:{default:[ut]},$$scope:{ctx:t}}}),f=new A({props:{$$slots:{default:[gt]},$$scope:{ctx:t}}}),{c(){$(e.$$.fragment),n=m(),$(s.$$.fragment),r=m(),$(f.$$.fragment)},l(t){a(e.$$.fragment,t),n=i(t),a(s.$$.fragment,t),r=i(t),a(f.$$.fragment,t)},m(t,$){o(e,t,$),u(t,n,$),o(s,t,$),u(t,r,$),o(f,t,$),d=!0},p(t,n){const $={};1&n&&($.$$scope={dirty:n,ctx:t}),e.$set($);const a={};1&n&&(a.$$scope={dirty:n,ctx:t}),s.$set(a);const o={};1&n&&(o.$$scope={dirty:n,ctx:t}),f.$set(o)},i(t){d||(c(e.$$.fragment,t),c(s.$$.fragment,t),c(f.$$.fragment,t),d=!0)},o(t){p(e.$$.fragment,t),p(s.$$.fragment,t),p(f.$$.fragment,t),d=!1},d(t){l(e,t),t&&g(n),l(s,t),t&&g(r),l(f,t)}}}function ht(t){let e,n,s,r,f,d,h,y;return n=new F({props:{$$slots:{default:[ct]},$$scope:{ctx:t}}}),f=new F({props:{$$slots:{default:[mt]},$$scope:{ctx:t}}}),h=new F({props:{$$slots:{default:[dt]},$$scope:{ctx:t}}}),{c(){e=x("thead"),$(n.$$.fragment),s=m(),r=x("tbody"),$(f.$$.fragment),d=m(),$(h.$$.fragment)},l(t){e=k(t,"THEAD",{});var $=w(e);a(n.$$.fragment,$),$.forEach(g),s=i(t),r=k(t,"TBODY",{});var o=w(r);a(f.$$.fragment,o),d=i(o),a(h.$$.fragment,o),o.forEach(g)},m(t,$){u(t,e,$),o(n,e,null),u(t,s,$),u(t,r,$),o(f,r,null),v(r,d),o(h,r,null),y=!0},p(t,e){const s={};1&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s);const $={};1&e&&($.$$scope={dirty:e,ctx:t}),f.$set($);const a={};1&e&&(a.$$scope={dirty:e,ctx:t}),h.$set(a)},i(t){y||(c(n.$$.fragment,t),c(f.$$.fragment,t),c(h.$$.fragment,t),y=!0)},o(t){p(n.$$.fragment,t),p(f.$$.fragment,t),p(h.$$.fragment,t),y=!1},d(t){t&&g(e),l(n),t&&g(s),t&&g(r),l(f),l(h)}}}function xt(t){let e,n,s,r,f,d,h,x,k,w,y,v,D,E,O,j;return e=new T({props:{$$slots:{default:[G]},$$scope:{ctx:t}}}),s=new b({props:{$$slots:{default:[R]},$$scope:{ctx:t}}}),f=new S({props:{$$slots:{default:[B],source:[V],showcase:[z]},$$scope:{ctx:t}}}),h=new C({props:{id:"properties",$$slots:{default:[I]},$$scope:{ctx:t}}}),k=new H({props:{$$slots:{default:[L]},$$scope:{ctx:t}}}),y=new N({props:{$$slots:{default:[st]},$$scope:{ctx:t}}}),D=new C({props:{id:"scss-variables",$$slots:{default:[$t]},$$scope:{ctx:t}}}),O=new N({props:{$$slots:{default:[ht]},$$scope:{ctx:t}}}),{c(){$(e.$$.fragment),n=m(),$(s.$$.fragment),r=m(),$(f.$$.fragment),d=m(),$(h.$$.fragment),x=m(),$(k.$$.fragment),w=m(),$(y.$$.fragment),v=m(),$(D.$$.fragment),E=m(),$(O.$$.fragment)},l(t){a(e.$$.fragment,t),n=i(t),a(s.$$.fragment,t),r=i(t),a(f.$$.fragment,t),d=i(t),a(h.$$.fragment,t),x=i(t),a(k.$$.fragment,t),w=i(t),a(y.$$.fragment,t),v=i(t),a(D.$$.fragment,t),E=i(t),a(O.$$.fragment,t)},m(t,$){o(e,t,$),u(t,n,$),o(s,t,$),u(t,r,$),o(f,t,$),u(t,d,$),o(h,t,$),u(t,x,$),o(k,t,$),u(t,w,$),o(y,t,$),u(t,v,$),o(D,t,$),u(t,E,$),o(O,t,$),j=!0},p(t,n){const $={};1&n&&($.$$scope={dirty:n,ctx:t}),e.$set($);const a={};1&n&&(a.$$scope={dirty:n,ctx:t}),s.$set(a);const o={};1&n&&(o.$$scope={dirty:n,ctx:t}),f.$set(o);const r={};1&n&&(r.$$scope={dirty:n,ctx:t}),h.$set(r);const c={};1&n&&(c.$$scope={dirty:n,ctx:t}),k.$set(c);const p={};1&n&&(p.$$scope={dirty:n,ctx:t}),y.$set(p);const l={};1&n&&(l.$$scope={dirty:n,ctx:t}),D.$set(l);const m={};1&n&&(m.$$scope={dirty:n,ctx:t}),O.$set(m)},i(t){j||(c(e.$$.fragment,t),c(s.$$.fragment,t),c(f.$$.fragment,t),c(h.$$.fragment,t),c(k.$$.fragment,t),c(y.$$.fragment,t),c(D.$$.fragment,t),c(O.$$.fragment,t),j=!0)},o(t){p(e.$$.fragment,t),p(s.$$.fragment,t),p(f.$$.fragment,t),p(h.$$.fragment,t),p(k.$$.fragment,t),p(y.$$.fragment,t),p(D.$$.fragment,t),p(O.$$.fragment,t),j=!1},d(t){l(e,t),t&&g(n),l(s,t),t&&g(r),l(f,t),t&&g(d),l(h,t),t&&g(x),l(k,t),t&&g(w),l(y,t),t&&g(v),l(D,t),t&&g(E),l(O,t)}}}function kt(t){let e,n;const m=[wt];let i={$$slots:{default:[xt]},$$scope:{ctx:t}};for(let t=0;t<m.length;t+=1)i=s(i,m[t]);return e=new E({props:i}),{c(){$(e.$$.fragment)},l(t){a(e.$$.fragment,t)},m(t,s){o(e,t,s),n=!0},p(t,[n]){const s=0&n?r(m,[f(wt)]):{};1&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){n||(c(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){l(e,t)}}}const wt={name:"Divider"};export default class extends t{constructor(t){super(),e(this,t,null,kt,n,{})}}export{wt as metadata};
