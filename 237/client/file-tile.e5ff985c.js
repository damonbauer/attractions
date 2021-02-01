import{S as t,i as e,s as n,G as $,j as s,k as a,m as r,N as o,t as c,o as f,p as l,B as p,U as m,q as i,h as u,r as g,u as d,c as h,b as x,v as w,d as y,e as k,f as v,g as E,w as b,x as D,n as T}from"./client.45bcfa78.js";import{L as O,H as j,P as C}from"./layout.194e5dc9.js";import{F}from"./file-tile.0899e05f.js";import{S}from"./showcase.988611f7.js";import{C as N}from"./color-preview.6fda4883.js";import{S as A}from"./shadow-preview.c1b084ac.js";import{R}from"./related-components.4f98296c.js";import{H as B}from"./h2.7df0c44a.js";import{H as G}from"./h3.94d03d23.js";import{T as P,a as z,b as H,c as L}from"./table.f0226895.js";import"./button.b8b59652.js";import"./classes.ae819103.js";import"./format-file-size.22bb7c0a.js";import"./label.5dec4fb9.js";import"./copyable-code.e2908df0.js";import"./popover.fb4819b8.js";import"./card.1aa878d7.js";function M(t){let e;return{c(){e=g("FileTile")},l(t){e=w(t,"FileTile")},m(t,n){v(t,e,n)},d(t){t&&y(e)}}}function q(t){let e;return{c(){e=g("A small tile displaying the name of a file, its size and format in human-readable ways.")},l(t){e=w(t,"A small tile displaying the name of a file, its size and format in human-readable ways.")},m(t,n){v(t,e,n)},d(t){t&&y(e)}}}function I(t){let e,n;return e=new F({props:{file:t[0]}}),{c(){s(e.$$.fragment)},l(t){a(e.$$.fragment,t)},m(t,$){r(e,t,$),n=!0},p(t,n){const $={};1&n&&($.file=t[0]),e.$set($)},i(t){n||(c(e.$$.fragment,t),n=!0)},o(t){f(e.$$.fragment,t),n=!1},d(t){l(e,t)}}}function V(t){let e,n,$=null!=t[0]&&I(t);return{c(){e=u("div"),$&&$.c(),this.h()},l(t){e=h(t,"DIV",{slot:!0,class:!0});var n=x(e);$&&$.l(n),n.forEach(y),this.h()},h(){k(e,"slot","showcase"),k(e,"class","padded svelte-1h883k1")},m(t,s){v(t,e,s),$&&$.m(e,null),n=!0},p(t,n){null!=t[0]?$?($.p(t,n),1&n&&c($,1)):($=I(t),$.c(),c($,1),$.m(e,null)):$&&(b(),f($,1,1,(()=>{$=null})),D())},i(t){n||(c($),n=!0)},o(t){f($),n=!1},d(t){t&&y(e),$&&$.d()}}}function Y(t){let e,n;return{c(){e=u("div"),n=u("pre"),this.h()},l(t){e=h(t,"DIV",{slot:!0});var $=x(e);n=h($,"PRE",{class:!0}),x(n).forEach(y),$.forEach(y),this.h()},h(){k(n,"class","language-svelte"),k(e,"slot","source")},m(t,$){v(t,e,$),E(e,n),n.innerHTML='<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> onMount <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">\'svelte\'</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">let</span> file <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n  <span class="token function">onMount</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>\n    file <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">""</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">"filename.txt"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token language-javascript"><span class="token punctuation">&#123;</span>#<span class="token keyword">if</span> file <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">&#125;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>FileTile</span> <span class="token language-javascript"><span class="token punctuation">&#123;</span>file<span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span>\n<span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token operator">/</span><span class="token keyword">if</span><span class="token punctuation">&#125;</span></span></code>'},p:T,d(t){t&&y(e)}}}function U(t){let e;return{c(){e=i()},l(t){e=d(t)},m(t,n){v(t,e,n)},p:T,i:T,o:T,d(t){t&&y(e)}}}function K(t){let e;return{c(){e=g("Properties")},l(t){e=w(t,"Properties")},m(t,n){v(t,e,n)},d(t){t&&y(e)}}}function W(t){let e;return{c(){e=g("Functional Properties")},l(t){e=w(t,"Functional Properties")},m(t,n){v(t,e,n)},d(t){t&&y(e)}}}function J(t){let e;return{c(){e=g("Name")},l(t){e=w(t,"Name")},m(t,n){v(t,e,n)},d(t){t&&y(e)}}}function Q(t){let e;return{c(){e=g("Default")},l(t){e=w(t,"Default")},m(t,n){v(t,e,n)},d(t){t&&y(e)}}}function X(t){let e;return{c(){e=g("Type")},l(t){e=w(t,"Type")},m(t,n){v(t,e,n)},d(t){t&&y(e)}}}function Z(t){let e;return{c(){e=g("Description")},l(t){e=w(t,"Description")},m(t,n){v(t,e,n)},d(t){t&&y(e)}}}function _(t){let e,n,$,o,p,m,u,g;return e=new H({props:{$$slots:{default:[J]},$$scope:{ctx:t}}}),$=new H({props:{$$slots:{default:[Q]},$$scope:{ctx:t}}}),p=new H({props:{$$slots:{default:[X]},$$scope:{ctx:t}}}),u=new H({props:{$$slots:{default:[Z]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=i(),s($.$$.fragment),o=i(),s(p.$$.fragment),m=i(),s(u.$$.fragment)},l(t){a(e.$$.fragment,t),n=d(t),a($.$$.fragment,t),o=d(t),a(p.$$.fragment,t),m=d(t),a(u.$$.fragment,t)},m(t,s){r(e,t,s),v(t,n,s),r($,t,s),v(t,o,s),r(p,t,s),v(t,m,s),r(u,t,s),g=!0},p(t,n){const s={};2&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const a={};2&n&&(a.$$scope={dirty:n,ctx:t}),$.$set(a);const r={};2&n&&(r.$$scope={dirty:n,ctx:t}),p.$set(r);const o={};2&n&&(o.$$scope={dirty:n,ctx:t}),u.$set(o)},i(t){g||(c(e.$$.fragment,t),c($.$$.fragment,t),c(p.$$.fragment,t),c(u.$$.fragment,t),g=!0)},o(t){f(e.$$.fragment,t),f($.$$.fragment,t),f(p.$$.fragment,t),f(u.$$.fragment,t),g=!1},d(t){l(e,t),t&&y(n),l($,t),t&&y(o),l(p,t),t&&y(m),l(u,t)}}}function tt(t){let e,n,$,s,a,r,o;return{c(){e=u("mark"),n=u("strong"),$=u("code"),s=g("file"),a=g(" "),r=u("span"),o=g("*"),this.h()},l(t){e=h(t,"MARK",{});var c=x(e);n=h(c,"STRONG",{});var f=x(n);$=h(f,"CODE",{});var l=x($);s=w(l,"file"),l.forEach(y),f.forEach(y),c.forEach(y),a=w(t," "),r=h(t,"SPAN",{class:!0});var p=x(r);o=w(p,"*"),p.forEach(y),this.h()},h(){k(r,"class","required")},m(t,c){v(t,e,c),E(e,n),E(n,$),E($,s),v(t,a,c),v(t,r,c),E(r,o)},d(t){t&&y(e),t&&y(a),t&&y(r)}}}function et(t){let e,n,$;return{c(){e=u("a"),n=u("code"),$=g("File"),this.h()},l(t){e=h(t,"A",{href:!0,rel:!0});var s=x(e);n=h(s,"CODE",{});var a=x(n);$=w(a,"File"),a.forEach(y),s.forEach(y),this.h()},h(){k(e,"href","https://developer.mozilla.org/en-US/docs/Web/API/File"),k(e,"rel","nofollow")},m(t,s){v(t,e,s),E(e,n),E(n,$)},d(t){t&&y(e)}}}function nt(t){let e;return{c(){e=g("The File object to display.")},l(t){e=w(t,"The File object to display.")},m(t,n){v(t,e,n)},d(t){t&&y(e)}}}function $t(t){let e,n,$,o,p,m,u,g;return e=new L({props:{$$slots:{default:[tt]},$$scope:{ctx:t}}}),$=new L({}),p=new L({props:{$$slots:{default:[et]},$$scope:{ctx:t}}}),u=new L({props:{$$slots:{default:[nt]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=i(),s($.$$.fragment),o=i(),s(p.$$.fragment),m=i(),s(u.$$.fragment)},l(t){a(e.$$.fragment,t),n=d(t),a($.$$.fragment,t),o=d(t),a(p.$$.fragment,t),m=d(t),a(u.$$.fragment,t)},m(t,s){r(e,t,s),v(t,n,s),r($,t,s),v(t,o,s),r(p,t,s),v(t,m,s),r(u,t,s),g=!0},p(t,n){const $={};2&n&&($.$$scope={dirty:n,ctx:t}),e.$set($);const s={};2&n&&(s.$$scope={dirty:n,ctx:t}),p.$set(s);const a={};2&n&&(a.$$scope={dirty:n,ctx:t}),u.$set(a)},i(t){g||(c(e.$$.fragment,t),c($.$$.fragment,t),c(p.$$.fragment,t),c(u.$$.fragment,t),g=!0)},o(t){f(e.$$.fragment,t),f($.$$.fragment,t),f(p.$$.fragment,t),f(u.$$.fragment,t),g=!1},d(t){l(e,t),t&&y(n),l($,t),t&&y(o),l(p,t),t&&y(m),l(u,t)}}}function st(t){let e,n,$,o,p,m;return n=new z({props:{$$slots:{default:[_]},$$scope:{ctx:t}}}),p=new z({props:{$$slots:{default:[$t]},$$scope:{ctx:t}}}),{c(){e=u("thead"),s(n.$$.fragment),$=i(),o=u("tbody"),s(p.$$.fragment)},l(t){e=h(t,"THEAD",{});var s=x(e);a(n.$$.fragment,s),s.forEach(y),$=d(t),o=h(t,"TBODY",{});var r=x(o);a(p.$$.fragment,r),r.forEach(y)},m(t,s){v(t,e,s),r(n,e,null),v(t,$,s),v(t,o,s),r(p,o,null),m=!0},p(t,e){const $={};2&e&&($.$$scope={dirty:e,ctx:t}),n.$set($);const s={};2&e&&(s.$$scope={dirty:e,ctx:t}),p.$set(s)},i(t){m||(c(n.$$.fragment,t),c(p.$$.fragment,t),m=!0)},o(t){f(n.$$.fragment,t),f(p.$$.fragment,t),m=!1},d(t){t&&y(e),l(n),t&&y($),t&&y(o),l(p)}}}function at(t){let e;return{c(){e=g("Class Properties")},l(t){e=w(t,"Class Properties")},m(t,n){v(t,e,n)},d(t){t&&y(e)}}}function rt(t){let e,n,$,s,a,r,o;return{c(){e=g("All "),n=u("code"),$=g("<FileTile>"),s=g(" components use the "),a=u("code"),r=g(".file-tile"),o=g(" class.")},l(t){e=w(t,"All "),n=h(t,"CODE",{});var c=x(n);$=w(c,"<FileTile>"),c.forEach(y),s=w(t," components use the "),a=h(t,"CODE",{});var f=x(a);r=w(f,".file-tile"),f.forEach(y),o=w(t," class.")},m(t,c){v(t,e,c),v(t,n,c),E(n,$),v(t,s,c),v(t,a,c),E(a,r),v(t,o,c)},d(t){t&&y(e),t&&y(n),t&&y(s),t&&y(a),t&&y(o)}}}function ot(t){let e;return{c(){e=g("Events")},l(t){e=w(t,"Events")},m(t,n){v(t,e,n)},d(t){t&&y(e)}}}function ct(t){let e;return{c(){e=g("Name")},l(t){e=w(t,"Name")},m(t,n){v(t,e,n)},d(t){t&&y(e)}}}function ft(t){let e;return{c(){e=g("Event Detail")},l(t){e=w(t,"Event Detail")},m(t,n){v(t,e,n)},d(t){t&&y(e)}}}function lt(t){let e;return{c(){e=g("Description")},l(t){e=w(t,"Description")},m(t,n){v(t,e,n)},d(t){t&&y(e)}}}function pt(t){let e,n,$,o,p,m;return e=new H({props:{$$slots:{default:[ct]},$$scope:{ctx:t}}}),$=new H({props:{$$slots:{default:[ft]},$$scope:{ctx:t}}}),p=new H({props:{$$slots:{default:[lt]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=i(),s($.$$.fragment),o=i(),s(p.$$.fragment)},l(t){a(e.$$.fragment,t),n=d(t),a($.$$.fragment,t),o=d(t),a(p.$$.fragment,t)},m(t,s){r(e,t,s),v(t,n,s),r($,t,s),v(t,o,s),r(p,t,s),m=!0},p(t,n){const s={};2&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const a={};2&n&&(a.$$scope={dirty:n,ctx:t}),$.$set(a);const r={};2&n&&(r.$$scope={dirty:n,ctx:t}),p.$set(r)},i(t){m||(c(e.$$.fragment,t),c($.$$.fragment,t),c(p.$$.fragment,t),m=!0)},o(t){f(e.$$.fragment,t),f($.$$.fragment,t),f(p.$$.fragment,t),m=!1},d(t){l(e,t),t&&y(n),l($,t),t&&y(o),l(p,t)}}}function mt(t){let e,n,$;return{c(){e=u("strong"),n=u("code"),$=g("delete")},l(t){e=h(t,"STRONG",{});var s=x(e);n=h(s,"CODE",{});var a=x(n);$=w(a,"delete"),a.forEach(y),s.forEach(y)},m(t,s){v(t,e,s),E(e,n),E(n,$)},d(t){t&&y(e)}}}function it(t){let e,n;return{c(){e=u("code"),n=g("file")},l(t){e=h(t,"CODE",{});var $=x(e);n=w($,"file"),$.forEach(y)},m(t,$){v(t,e,$),E(e,n)},d(t){t&&y(e)}}}function ut(t){let e,n,$,s;return{c(){e=g("Fired when the delete button is pressed. The detail is the same "),n=u("code"),$=g("file"),s=g(" object that was passed in the property.")},l(t){e=w(t,"Fired when the delete button is pressed. The detail is the same "),n=h(t,"CODE",{});var a=x(n);$=w(a,"file"),a.forEach(y),s=w(t," object that was passed in the property.")},m(t,a){v(t,e,a),v(t,n,a),E(n,$),v(t,s,a)},d(t){t&&y(e),t&&y(n),t&&y(s)}}}function gt(t){let e,n,$,o,p,m;return e=new L({props:{$$slots:{default:[mt]},$$scope:{ctx:t}}}),$=new L({props:{$$slots:{default:[it]},$$scope:{ctx:t}}}),p=new L({props:{$$slots:{default:[ut]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=i(),s($.$$.fragment),o=i(),s(p.$$.fragment)},l(t){a(e.$$.fragment,t),n=d(t),a($.$$.fragment,t),o=d(t),a(p.$$.fragment,t)},m(t,s){r(e,t,s),v(t,n,s),r($,t,s),v(t,o,s),r(p,t,s),m=!0},p(t,n){const s={};2&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const a={};2&n&&(a.$$scope={dirty:n,ctx:t}),$.$set(a);const r={};2&n&&(r.$$scope={dirty:n,ctx:t}),p.$set(r)},i(t){m||(c(e.$$.fragment,t),c($.$$.fragment,t),c(p.$$.fragment,t),m=!0)},o(t){f(e.$$.fragment,t),f($.$$.fragment,t),f(p.$$.fragment,t),m=!1},d(t){l(e,t),t&&y(n),l($,t),t&&y(o),l(p,t)}}}function dt(t){let e,n,$,o,p,m;return n=new z({props:{$$slots:{default:[pt]},$$scope:{ctx:t}}}),p=new z({props:{$$slots:{default:[gt]},$$scope:{ctx:t}}}),{c(){e=u("thead"),s(n.$$.fragment),$=i(),o=u("tbody"),s(p.$$.fragment)},l(t){e=h(t,"THEAD",{});var s=x(e);a(n.$$.fragment,s),s.forEach(y),$=d(t),o=h(t,"TBODY",{});var r=x(o);a(p.$$.fragment,r),r.forEach(y)},m(t,s){v(t,e,s),r(n,e,null),v(t,$,s),v(t,o,s),r(p,o,null),m=!0},p(t,e){const $={};2&e&&($.$$scope={dirty:e,ctx:t}),n.$set($);const s={};2&e&&(s.$$scope={dirty:e,ctx:t}),p.$set(s)},i(t){m||(c(n.$$.fragment,t),c(p.$$.fragment,t),m=!0)},o(t){f(n.$$.fragment,t),f(p.$$.fragment,t),m=!1},d(t){t&&y(e),l(n),t&&y($),t&&y(o),l(p)}}}function ht(t){let e;return{c(){e=g("SCSS Variables")},l(t){e=w(t,"SCSS Variables")},m(t,n){v(t,e,n)},d(t){t&&y(e)}}}function xt(t){let e;return{c(){e=g("Name")},l(t){e=w(t,"Name")},m(t,n){v(t,e,n)},d(t){t&&y(e)}}}function wt(t){let e;return{c(){e=g("Description")},l(t){e=w(t,"Description")},m(t,n){v(t,e,n)},d(t){t&&y(e)}}}function yt(t){let e;return{c(){e=g("Default")},l(t){e=w(t,"Default")},m(t,n){v(t,e,n)},d(t){t&&y(e)}}}function kt(t){let e,n,$,o,p,m;return e=new H({props:{$$slots:{default:[xt]},$$scope:{ctx:t}}}),$=new H({props:{$$slots:{default:[wt]},$$scope:{ctx:t}}}),p=new H({props:{$$slots:{default:[yt]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=i(),s($.$$.fragment),o=i(),s(p.$$.fragment)},l(t){a(e.$$.fragment,t),n=d(t),a($.$$.fragment,t),o=d(t),a(p.$$.fragment,t)},m(t,s){r(e,t,s),v(t,n,s),r($,t,s),v(t,o,s),r(p,t,s),m=!0},p(t,n){const s={};2&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const a={};2&n&&(a.$$scope={dirty:n,ctx:t}),$.$set(a);const r={};2&n&&(r.$$scope={dirty:n,ctx:t}),p.$set(r)},i(t){m||(c(e.$$.fragment,t),c($.$$.fragment,t),c(p.$$.fragment,t),m=!0)},o(t){f(e.$$.fragment,t),f($.$$.fragment,t),f(p.$$.fragment,t),m=!1},d(t){l(e,t),t&&y(n),l($,t),t&&y(o),l(p,t)}}}function vt(t){let e,n,$;return{c(){e=u("strong"),n=u("code"),$=g("$dark")},l(t){e=h(t,"STRONG",{});var s=x(e);n=h(s,"CODE",{});var a=x(n);$=w(a,"$dark"),a.forEach(y),s.forEach(y)},m(t,s){v(t,e,s),E(e,n),E(n,$)},d(t){t&&y(e)}}}function Et(t){let e;return{c(){e=g("The text color of the tile.")},l(t){e=w(t,"The text color of the tile.")},m(t,n){v(t,e,n)},d(t){t&&y(e)}}}function bt(t){let e,n;return e=new N({props:{value:"#333333"}}),{c(){s(e.$$.fragment)},l(t){a(e.$$.fragment,t)},m(t,$){r(e,t,$),n=!0},p:T,i(t){n||(c(e.$$.fragment,t),n=!0)},o(t){f(e.$$.fragment,t),n=!1},d(t){l(e,t)}}}function Dt(t){let e,n,$,o,p,m;return e=new L({props:{$$slots:{default:[vt]},$$scope:{ctx:t}}}),$=new L({props:{$$slots:{default:[Et]},$$scope:{ctx:t}}}),p=new L({props:{$$slots:{default:[bt]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=i(),s($.$$.fragment),o=i(),s(p.$$.fragment)},l(t){a(e.$$.fragment,t),n=d(t),a($.$$.fragment,t),o=d(t),a(p.$$.fragment,t)},m(t,s){r(e,t,s),v(t,n,s),r($,t,s),v(t,o,s),r(p,t,s),m=!0},p(t,n){const s={};2&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const a={};2&n&&(a.$$scope={dirty:n,ctx:t}),$.$set(a);const r={};2&n&&(r.$$scope={dirty:n,ctx:t}),p.$set(r)},i(t){m||(c(e.$$.fragment,t),c($.$$.fragment,t),c(p.$$.fragment,t),m=!0)},o(t){f(e.$$.fragment,t),f($.$$.fragment,t),f(p.$$.fragment,t),m=!1},d(t){l(e,t),t&&y(n),l($,t),t&&y(o),l(p,t)}}}function Tt(t){let e,n,$;return{c(){e=u("strong"),n=u("code"),$=g("$file-tile-radius")},l(t){e=h(t,"STRONG",{});var s=x(e);n=h(s,"CODE",{});var a=x(n);$=w(a,"$file-tile-radius"),a.forEach(y),s.forEach(y)},m(t,s){v(t,e,s),E(e,n),E(n,$)},d(t){t&&y(e)}}}function Ot(t){let e;return{c(){e=g("The curvature radius of the tile.")},l(t){e=w(t,"The curvature radius of the tile.")},m(t,n){v(t,e,n)},d(t){t&&y(e)}}}function jt(t){let e,n;return{c(){e=u("code"),n=g(".625em")},l(t){e=h(t,"CODE",{});var $=x(e);n=w($,".625em"),$.forEach(y)},m(t,$){v(t,e,$),E(e,n)},d(t){t&&y(e)}}}function Ct(t){let e,n,$,o,p,m;return e=new L({props:{$$slots:{default:[Tt]},$$scope:{ctx:t}}}),$=new L({props:{$$slots:{default:[Ot]},$$scope:{ctx:t}}}),p=new L({props:{$$slots:{default:[jt]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=i(),s($.$$.fragment),o=i(),s(p.$$.fragment)},l(t){a(e.$$.fragment,t),n=d(t),a($.$$.fragment,t),o=d(t),a(p.$$.fragment,t)},m(t,s){r(e,t,s),v(t,n,s),r($,t,s),v(t,o,s),r(p,t,s),m=!0},p(t,n){const s={};2&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const a={};2&n&&(a.$$scope={dirty:n,ctx:t}),$.$set(a);const r={};2&n&&(r.$$scope={dirty:n,ctx:t}),p.$set(r)},i(t){m||(c(e.$$.fragment,t),c($.$$.fragment,t),c(p.$$.fragment,t),m=!0)},o(t){f(e.$$.fragment,t),f($.$$.fragment,t),f(p.$$.fragment,t),m=!1},d(t){l(e,t),t&&y(n),l($,t),t&&y(o),l(p,t)}}}function Ft(t){let e,n,$;return{c(){e=u("strong"),n=u("code"),$=g("$shadow-1")},l(t){e=h(t,"STRONG",{});var s=x(e);n=h(s,"CODE",{});var a=x(n);$=w(a,"$shadow-1"),a.forEach(y),s.forEach(y)},m(t,s){v(t,e,s),E(e,n),E(n,$)},d(t){t&&y(e)}}}function St(t){let e;return{c(){e=g("The shadow of the tile.")},l(t){e=w(t,"The shadow of the tile.")},m(t,n){v(t,e,n)},d(t){t&&y(e)}}}function Nt(t){let e,n;return e=new A({props:{value:Zt}}),{c(){s(e.$$.fragment)},l(t){a(e.$$.fragment,t)},m(t,$){r(e,t,$),n=!0},p:T,i(t){n||(c(e.$$.fragment,t),n=!0)},o(t){f(e.$$.fragment,t),n=!1},d(t){l(e,t)}}}function At(t){let e,n,$,o,p,m;return e=new L({props:{$$slots:{default:[Ft]},$$scope:{ctx:t}}}),$=new L({props:{$$slots:{default:[St]},$$scope:{ctx:t}}}),p=new L({props:{$$slots:{default:[Nt]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=i(),s($.$$.fragment),o=i(),s(p.$$.fragment)},l(t){a(e.$$.fragment,t),n=d(t),a($.$$.fragment,t),o=d(t),a(p.$$.fragment,t)},m(t,s){r(e,t,s),v(t,n,s),r($,t,s),v(t,o,s),r(p,t,s),m=!0},p(t,n){const s={};2&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const a={};2&n&&(a.$$scope={dirty:n,ctx:t}),$.$set(a);const r={};2&n&&(r.$$scope={dirty:n,ctx:t}),p.$set(r)},i(t){m||(c(e.$$.fragment,t),c($.$$.fragment,t),c(p.$$.fragment,t),m=!0)},o(t){f(e.$$.fragment,t),f($.$$.fragment,t),f(p.$$.fragment,t),m=!1},d(t){l(e,t),t&&y(n),l($,t),t&&y(o),l(p,t)}}}function Rt(t){let e,n,$;return{c(){e=u("strong"),n=u("code"),$=g("$thin-font-weight")},l(t){e=h(t,"STRONG",{});var s=x(e);n=h(s,"CODE",{});var a=x(n);$=w(a,"$thin-font-weight"),a.forEach(y),s.forEach(y)},m(t,s){v(t,e,s),E(e,n),E(n,$)},d(t){t&&y(e)}}}function Bt(t){let e;return{c(){e=g("The thinner font weight for the file details: size and type.")},l(t){e=w(t,"The thinner font weight for the file details: size and type.")},m(t,n){v(t,e,n)},d(t){t&&y(e)}}}function Gt(t){let e,n;return{c(){e=u("code"),n=g("300")},l(t){e=h(t,"CODE",{});var $=x(e);n=w($,"300"),$.forEach(y)},m(t,$){v(t,e,$),E(e,n)},d(t){t&&y(e)}}}function Pt(t){let e,n,$,o,p,m;return e=new L({props:{$$slots:{default:[Rt]},$$scope:{ctx:t}}}),$=new L({props:{$$slots:{default:[Bt]},$$scope:{ctx:t}}}),p=new L({props:{$$slots:{default:[Gt]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=i(),s($.$$.fragment),o=i(),s(p.$$.fragment)},l(t){a(e.$$.fragment,t),n=d(t),a($.$$.fragment,t),o=d(t),a(p.$$.fragment,t)},m(t,s){r(e,t,s),v(t,n,s),r($,t,s),v(t,o,s),r(p,t,s),m=!0},p(t,n){const s={};2&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const a={};2&n&&(a.$$scope={dirty:n,ctx:t}),$.$set(a);const r={};2&n&&(r.$$scope={dirty:n,ctx:t}),p.$set(r)},i(t){m||(c(e.$$.fragment,t),c($.$$.fragment,t),c(p.$$.fragment,t),m=!0)},o(t){f(e.$$.fragment,t),f($.$$.fragment,t),f(p.$$.fragment,t),m=!1},d(t){l(e,t),t&&y(n),l($,t),t&&y(o),l(p,t)}}}function zt(t){let e,n,$,s,a,r,o,c,f;return{c(){e=u("strong"),n=u("code"),$=g("$button-radius"),s=i(),a=u("small"),r=g("From "),o=u("a"),c=u("code"),f=g("Button"),this.h()},l(t){e=h(t,"STRONG",{});var l=x(e);n=h(l,"CODE",{});var p=x(n);$=w(p,"$button-radius"),p.forEach(y),l.forEach(y),s=d(t),a=h(t,"SMALL",{});var m=x(a);r=w(m,"From "),o=h(m,"A",{href:!0});var i=x(o);c=h(i,"CODE",{});var u=x(c);f=w(u,"Button"),u.forEach(y),i.forEach(y),m.forEach(y),this.h()},h(){k(o,"href","./docs/components/button")},m(t,l){v(t,e,l),E(e,n),E(n,$),v(t,s,l),v(t,a,l),E(a,r),E(a,o),E(o,c),E(c,f)},d(t){t&&y(e),t&&y(s),t&&y(a)}}}function Ht(t){let e;return{c(){e=g('The curvature radius of the "delete" button.')},l(t){e=w(t,'The curvature radius of the "delete" button.')},m(t,n){v(t,e,n)},d(t){t&&y(e)}}}function Lt(t){let e,n;return{c(){e=u("code"),n=g("1.5625em")},l(t){e=h(t,"CODE",{});var $=x(e);n=w($,"1.5625em"),$.forEach(y)},m(t,$){v(t,e,$),E(e,n)},d(t){t&&y(e)}}}function Mt(t){let e,n,$,o,p,m;return e=new L({props:{$$slots:{default:[zt]},$$scope:{ctx:t}}}),$=new L({props:{$$slots:{default:[Ht]},$$scope:{ctx:t}}}),p=new L({props:{$$slots:{default:[Lt]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=i(),s($.$$.fragment),o=i(),s(p.$$.fragment)},l(t){a(e.$$.fragment,t),n=d(t),a($.$$.fragment,t),o=d(t),a(p.$$.fragment,t)},m(t,s){r(e,t,s),v(t,n,s),r($,t,s),v(t,o,s),r(p,t,s),m=!0},p(t,n){const s={};2&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const a={};2&n&&(a.$$scope={dirty:n,ctx:t}),$.$set(a);const r={};2&n&&(r.$$scope={dirty:n,ctx:t}),p.$set(r)},i(t){m||(c(e.$$.fragment,t),c($.$$.fragment,t),c(p.$$.fragment,t),m=!0)},o(t){f(e.$$.fragment,t),f($.$$.fragment,t),f(p.$$.fragment,t),m=!1},d(t){l(e,t),t&&y(n),l($,t),t&&y(o),l(p,t)}}}function qt(t){let e,n,$,s,a,r,o,c,f;return{c(){e=u("strong"),n=u("code"),$=g("$danger"),s=i(),a=u("small"),r=g("From "),o=u("a"),c=u("code"),f=g("Button"),this.h()},l(t){e=h(t,"STRONG",{});var l=x(e);n=h(l,"CODE",{});var p=x(n);$=w(p,"$danger"),p.forEach(y),l.forEach(y),s=d(t),a=h(t,"SMALL",{});var m=x(a);r=w(m,"From "),o=h(m,"A",{href:!0});var i=x(o);c=h(i,"CODE",{});var u=x(c);f=w(u,"Button"),u.forEach(y),i.forEach(y),m.forEach(y),this.h()},h(){k(o,"href","./docs/components/button")},m(t,l){v(t,e,l),E(e,n),E(n,$),v(t,s,l),v(t,a,l),E(a,r),E(a,o),E(o,c),E(c,f)},d(t){t&&y(e),t&&y(s),t&&y(a)}}}function It(t){let e;return{c(){e=g('The color of the "delete" button.')},l(t){e=w(t,'The color of the "delete" button.')},m(t,n){v(t,e,n)},d(t){t&&y(e)}}}function Vt(t){let e,n;return e=new N({props:{value:"#B80000"}}),{c(){s(e.$$.fragment)},l(t){a(e.$$.fragment,t)},m(t,$){r(e,t,$),n=!0},p:T,i(t){n||(c(e.$$.fragment,t),n=!0)},o(t){f(e.$$.fragment,t),n=!1},d(t){l(e,t)}}}function Yt(t){let e,n,$,o,p,m;return e=new L({props:{$$slots:{default:[qt]},$$scope:{ctx:t}}}),$=new L({props:{$$slots:{default:[It]},$$scope:{ctx:t}}}),p=new L({props:{$$slots:{default:[Vt]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=i(),s($.$$.fragment),o=i(),s(p.$$.fragment)},l(t){a(e.$$.fragment,t),n=d(t),a($.$$.fragment,t),o=d(t),a(p.$$.fragment,t)},m(t,s){r(e,t,s),v(t,n,s),r($,t,s),v(t,o,s),r(p,t,s),m=!0},p(t,n){const s={};2&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const a={};2&n&&(a.$$scope={dirty:n,ctx:t}),$.$set(a);const r={};2&n&&(r.$$scope={dirty:n,ctx:t}),p.$set(r)},i(t){m||(c(e.$$.fragment,t),c($.$$.fragment,t),c(p.$$.fragment,t),m=!0)},o(t){f(e.$$.fragment,t),f($.$$.fragment,t),f(p.$$.fragment,t),m=!1},d(t){l(e,t),t&&y(n),l($,t),t&&y(o),l(p,t)}}}function Ut(t){let e,n,$,o,p,m,g,w,k,b,D,T,O,j,C,F;return n=new z({props:{$$slots:{default:[kt]},$$scope:{ctx:t}}}),p=new z({props:{$$slots:{default:[Dt]},$$scope:{ctx:t}}}),g=new z({props:{$$slots:{default:[Ct]},$$scope:{ctx:t}}}),k=new z({props:{$$slots:{default:[At]},$$scope:{ctx:t}}}),D=new z({props:{$$slots:{default:[Pt]},$$scope:{ctx:t}}}),O=new z({props:{$$slots:{default:[Mt]},$$scope:{ctx:t}}}),C=new z({props:{$$slots:{default:[Yt]},$$scope:{ctx:t}}}),{c(){e=u("thead"),s(n.$$.fragment),$=i(),o=u("tbody"),s(p.$$.fragment),m=i(),s(g.$$.fragment),w=i(),s(k.$$.fragment),b=i(),s(D.$$.fragment),T=i(),s(O.$$.fragment),j=i(),s(C.$$.fragment)},l(t){e=h(t,"THEAD",{});var s=x(e);a(n.$$.fragment,s),s.forEach(y),$=d(t),o=h(t,"TBODY",{});var r=x(o);a(p.$$.fragment,r),m=d(r),a(g.$$.fragment,r),w=d(r),a(k.$$.fragment,r),b=d(r),a(D.$$.fragment,r),T=d(r),a(O.$$.fragment,r),j=d(r),a(C.$$.fragment,r),r.forEach(y)},m(t,s){v(t,e,s),r(n,e,null),v(t,$,s),v(t,o,s),r(p,o,null),E(o,m),r(g,o,null),E(o,w),r(k,o,null),E(o,b),r(D,o,null),E(o,T),r(O,o,null),E(o,j),r(C,o,null),F=!0},p(t,e){const $={};2&e&&($.$$scope={dirty:e,ctx:t}),n.$set($);const s={};2&e&&(s.$$scope={dirty:e,ctx:t}),p.$set(s);const a={};2&e&&(a.$$scope={dirty:e,ctx:t}),g.$set(a);const r={};2&e&&(r.$$scope={dirty:e,ctx:t}),k.$set(r);const o={};2&e&&(o.$$scope={dirty:e,ctx:t}),D.$set(o);const c={};2&e&&(c.$$scope={dirty:e,ctx:t}),O.$set(c);const f={};2&e&&(f.$$scope={dirty:e,ctx:t}),C.$set(f)},i(t){F||(c(n.$$.fragment,t),c(p.$$.fragment,t),c(g.$$.fragment,t),c(k.$$.fragment,t),c(D.$$.fragment,t),c(O.$$.fragment,t),c(C.$$.fragment,t),F=!0)},o(t){f(n.$$.fragment,t),f(p.$$.fragment,t),f(g.$$.fragment,t),f(k.$$.fragment,t),f(D.$$.fragment,t),f(O.$$.fragment,t),f(C.$$.fragment,t),F=!1},d(t){t&&y(e),l(n),t&&y($),t&&y(o),l(p),l(g),l(k),l(D),l(O),l(C)}}}function Kt(t){let e,n,$,o,p,m,b,D,T,O,F,N,A,z,H,L,I,J,Q,X,Z,_,tt,et,nt,$t,ct,ft,lt;return e=new j({props:{$$slots:{default:[M]},$$scope:{ctx:t}}}),$=new C({props:{$$slots:{default:[q]},$$scope:{ctx:t}}}),p=new R({props:{components:Xt}}),b=new S({props:{$$slots:{default:[U],source:[Y],showcase:[V]},$$scope:{ctx:t}}}),T=new B({props:{id:"properties",$$slots:{default:[K]},$$scope:{ctx:t}}}),F=new G({props:{$$slots:{default:[W]},$$scope:{ctx:t}}}),A=new P({props:{$$slots:{default:[st]},$$scope:{ctx:t}}}),J=new G({props:{$$slots:{default:[at]},$$scope:{ctx:t}}}),X=new C({props:{$$slots:{default:[rt]},$$scope:{ctx:t}}}),_=new B({props:{id:"events",$$slots:{default:[ot]},$$scope:{ctx:t}}}),et=new P({props:{$$slots:{default:[dt]},$$scope:{ctx:t}}}),$t=new B({props:{id:"scss-variables",$$slots:{default:[ht]},$$scope:{ctx:t}}}),ft=new P({props:{$$slots:{default:[Ut]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=i(),s($.$$.fragment),o=i(),s(p.$$.fragment),m=i(),s(b.$$.fragment),D=i(),s(T.$$.fragment),O=i(),s(F.$$.fragment),N=i(),s(A.$$.fragment),z=i(),H=u("div"),L=g("* Required"),I=i(),s(J.$$.fragment),Q=i(),s(X.$$.fragment),Z=i(),s(_.$$.fragment),tt=i(),s(et.$$.fragment),nt=i(),s($t.$$.fragment),ct=i(),s(ft.$$.fragment),this.h()},l(t){a(e.$$.fragment,t),n=d(t),a($.$$.fragment,t),o=d(t),a(p.$$.fragment,t),m=d(t),a(b.$$.fragment,t),D=d(t),a(T.$$.fragment,t),O=d(t),a(F.$$.fragment,t),N=d(t),a(A.$$.fragment,t),z=d(t),H=h(t,"DIV",{class:!0});var s=x(H);L=w(s,"* Required"),s.forEach(y),I=d(t),a(J.$$.fragment,t),Q=d(t),a(X.$$.fragment,t),Z=d(t),a(_.$$.fragment,t),tt=d(t),a(et.$$.fragment,t),nt=d(t),a($t.$$.fragment,t),ct=d(t),a(ft.$$.fragment,t),this.h()},h(){k(H,"class","required")},m(t,s){r(e,t,s),v(t,n,s),r($,t,s),v(t,o,s),r(p,t,s),v(t,m,s),r(b,t,s),v(t,D,s),r(T,t,s),v(t,O,s),r(F,t,s),v(t,N,s),r(A,t,s),v(t,z,s),v(t,H,s),E(H,L),v(t,I,s),r(J,t,s),v(t,Q,s),r(X,t,s),v(t,Z,s),r(_,t,s),v(t,tt,s),r(et,t,s),v(t,nt,s),r($t,t,s),v(t,ct,s),r(ft,t,s),lt=!0},p(t,n){const s={};2&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const a={};2&n&&(a.$$scope={dirty:n,ctx:t}),$.$set(a);const r={};3&n&&(r.$$scope={dirty:n,ctx:t}),b.$set(r);const o={};2&n&&(o.$$scope={dirty:n,ctx:t}),T.$set(o);const c={};2&n&&(c.$$scope={dirty:n,ctx:t}),F.$set(c);const f={};2&n&&(f.$$scope={dirty:n,ctx:t}),A.$set(f);const l={};2&n&&(l.$$scope={dirty:n,ctx:t}),J.$set(l);const p={};2&n&&(p.$$scope={dirty:n,ctx:t}),X.$set(p);const m={};2&n&&(m.$$scope={dirty:n,ctx:t}),_.$set(m);const i={};2&n&&(i.$$scope={dirty:n,ctx:t}),et.$set(i);const u={};2&n&&(u.$$scope={dirty:n,ctx:t}),$t.$set(u);const g={};2&n&&(g.$$scope={dirty:n,ctx:t}),ft.$set(g)},i(t){lt||(c(e.$$.fragment,t),c($.$$.fragment,t),c(p.$$.fragment,t),c(b.$$.fragment,t),c(T.$$.fragment,t),c(F.$$.fragment,t),c(A.$$.fragment,t),c(J.$$.fragment,t),c(X.$$.fragment,t),c(_.$$.fragment,t),c(et.$$.fragment,t),c($t.$$.fragment,t),c(ft.$$.fragment,t),lt=!0)},o(t){f(e.$$.fragment,t),f($.$$.fragment,t),f(p.$$.fragment,t),f(b.$$.fragment,t),f(T.$$.fragment,t),f(F.$$.fragment,t),f(A.$$.fragment,t),f(J.$$.fragment,t),f(X.$$.fragment,t),f(_.$$.fragment,t),f(et.$$.fragment,t),f($t.$$.fragment,t),f(ft.$$.fragment,t),lt=!1},d(t){l(e,t),t&&y(n),l($,t),t&&y(o),l(p,t),t&&y(m),l(b,t),t&&y(D),l(T,t),t&&y(O),l(F,t),t&&y(N),l(A,t),t&&y(z),t&&y(H),t&&y(I),l(J,t),t&&y(Q),l(X,t),t&&y(Z),l(_,t),t&&y(tt),l(et,t),t&&y(nt),l($t,t),t&&y(ct),l(ft,t)}}}function Wt(t){let e,n;const p=[Jt];let i={$$slots:{default:[Kt]},$$scope:{ctx:t}};for(let t=0;t<p.length;t+=1)i=$(i,p[t]);return e=new O({props:i}),{c(){s(e.$$.fragment)},l(t){a(e.$$.fragment,t)},m(t,$){r(e,t,$),n=!0},p(t,[n]){const $=0&n?o(p,[m(Jt)]):{};3&n&&($.$$scope={dirty:n,ctx:t}),e.$set($)},i(t){n||(c(e.$$.fragment,t),n=!0)},o(t){f(e.$$.fragment,t),n=!1},d(t){l(e,t)}}}const Jt={name:"FileTile",relatedComponents:[{name:"FileInput",link:"./docs/components/file-input"},{name:"FileDropzone",link:"./docs/components/file-dropzone"}],shadow1:"0 2px 5px rgba(0, 0, 0, .14), 0 1px 5px rgba(0, 0, 0, .12);"},{name:Qt,relatedComponents:Xt,shadow1:Zt}=Jt;function _t(t,e,n){let $=null;return p((()=>{n(0,$=new File([""],"filename.txt"))})),[$]}export default class extends t{constructor(t){super(),e(this,t,_t,Wt,n,{})}}export{Jt as metadata};
