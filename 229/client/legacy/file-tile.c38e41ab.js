import{S as t,i as e,s as n,J as $,p as s,q as a,r,N as o,Z as c,u as p,v as f,w as l,G as m,x as i,o as u,y as d,z as g,f as h,g as x,A as w,h as y,j as k,k as v,l as E,B as T,C as D,n as b}from"./client.d1b23065.js";import"./button.5d4db4f4.js";import"./classes.541c5f2a.js";import"./card.b6d67ac8.js";import"./label.ff50c1d4.js";import"./popover.752f5d26.js";import"./asyncToGenerator.756dab92.js";import{F as j}from"./file-tile.52d4a712.js";import"./format-file-size.0c5da3e0.js";import"./copyable-code.67c9d12a.js";import{L as O,H as C,P as F}from"./layout.53586324.js";import{M as S}from"./mark.0db18d49.js";import{T as N,a as A,b as R,c as G}from"./table.1033be56.js";import{H as z}from"./h3.ee2a7d97.js";import{H as B}from"./h2.8f11ff0f.js";import{S as P}from"./showcase.5ed4c90b.js";import"./color-preview.72edcca8.js";import{C as H}from"./color-preview.6faf62c6.js";import{R as L}from"./related-components.2c6397a0.js";import"./shadow-preview.d36d4835.js";import{S as M}from"./shadow-preview.a599c079.js";function q(t){let e;return{c(){e=d("FileTile")},l(t){e=w(t,"FileTile")},m(t,n){v(t,e,n)},d(t){t&&y(e)}}}function I(t){let e;return{c(){e=d("A small tile displaying the name of a file, its size and format in human-readable ways.")},l(t){e=w(t,"A small tile displaying the name of a file, its size and format in human-readable ways.")},m(t,n){v(t,e,n)},d(t){t&&y(e)}}}function V(t){let e,n;return e=new j({props:{file:t[0]}}),{c(){s(e.$$.fragment)},l(t){a(e.$$.fragment,t)},m(t,$){r(e,t,$),n=!0},p(t,n){const $={};1&n&&($.file=t[0]),e.$set($)},i(t){n||(p(e.$$.fragment,t),n=!0)},o(t){f(e.$$.fragment,t),n=!1},d(t){l(e,t)}}}function Y(t){let e,n,$=null!=t[0]&&V(t);return{c(){e=u("div"),$&&$.c(),this.h()},l(t){e=h(t,"DIV",{slot:!0,class:!0});var n=x(e);$&&$.l(n),n.forEach(y),this.h()},h(){k(e,"slot","showcase"),k(e,"class","padded svelte-1h883k1")},m(t,s){v(t,e,s),$&&$.m(e,null),n=!0},p(t,n){null!=t[0]?$?($.p(t,n),1&n&&p($,1)):($=V(t),$.c(),p($,1),$.m(e,null)):$&&(T(),f($,1,1,(()=>{$=null})),D())},i(t){n||(p($),n=!0)},o(t){f($),n=!1},d(t){t&&y(e),$&&$.d()}}}function J(t){let e,n;return{c(){e=u("div"),n=u("pre"),this.h()},l(t){e=h(t,"DIV",{slot:!0});var $=x(e);n=h($,"PRE",{class:!0}),x(n).forEach(y),$.forEach(y),this.h()},h(){k(n,"class","language-svelte"),k(e,"slot","source")},m(t,$){v(t,e,$),E(e,n),n.innerHTML='<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> onMount <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">\'svelte\'</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">let</span> file <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n  <span class="token function">onMount</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>\n    file <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">""</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">"filename.txt"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token language-javascript"><span class="token punctuation">&#123;</span>#<span class="token keyword">if</span> file <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">&#125;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>FileTile</span> <span class="token language-javascript"><span class="token punctuation">&#123;</span>file<span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span>\n<span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token operator">/</span><span class="token keyword">if</span><span class="token punctuation">&#125;</span></span></code>'},p:b,d(t){t&&y(e)}}}function U(t){let e;return{c(){e=i()},l(t){e=g(t)},m(t,n){v(t,e,n)},p:b,i:b,o:b,d(t){t&&y(e)}}}function W(t){let e;return{c(){e=d("Properties")},l(t){e=w(t,"Properties")},m(t,n){v(t,e,n)},d(t){t&&y(e)}}}function Z(t){let e;return{c(){e=d("Functional Properties")},l(t){e=w(t,"Functional Properties")},m(t,n){v(t,e,n)},d(t){t&&y(e)}}}function K(t){let e;return{c(){e=d("Name")},l(t){e=w(t,"Name")},m(t,n){v(t,e,n)},d(t){t&&y(e)}}}function Q(t){let e;return{c(){e=d("Default")},l(t){e=w(t,"Default")},m(t,n){v(t,e,n)},d(t){t&&y(e)}}}function X(t){let e;return{c(){e=d("Type")},l(t){e=w(t,"Type")},m(t,n){v(t,e,n)},d(t){t&&y(e)}}}function _(t){let e;return{c(){e=d("Description")},l(t){e=w(t,"Description")},m(t,n){v(t,e,n)},d(t){t&&y(e)}}}function tt(t){let e,n,$,o,c,m,u,d;return e=new R({props:{$$slots:{default:[K]},$$scope:{ctx:t}}}),$=new R({props:{$$slots:{default:[Q]},$$scope:{ctx:t}}}),c=new R({props:{$$slots:{default:[X]},$$scope:{ctx:t}}}),u=new R({props:{$$slots:{default:[_]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=i(),s($.$$.fragment),o=i(),s(c.$$.fragment),m=i(),s(u.$$.fragment)},l(t){a(e.$$.fragment,t),n=g(t),a($.$$.fragment,t),o=g(t),a(c.$$.fragment,t),m=g(t),a(u.$$.fragment,t)},m(t,s){r(e,t,s),v(t,n,s),r($,t,s),v(t,o,s),r(c,t,s),v(t,m,s),r(u,t,s),d=!0},p(t,n){const s={};2&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const a={};2&n&&(a.$$scope={dirty:n,ctx:t}),$.$set(a);const r={};2&n&&(r.$$scope={dirty:n,ctx:t}),c.$set(r);const o={};2&n&&(o.$$scope={dirty:n,ctx:t}),u.$set(o)},i(t){d||(p(e.$$.fragment,t),p($.$$.fragment,t),p(c.$$.fragment,t),p(u.$$.fragment,t),d=!0)},o(t){f(e.$$.fragment,t),f($.$$.fragment,t),f(c.$$.fragment,t),f(u.$$.fragment,t),d=!1},d(t){l(e,t),t&&y(n),l($,t),t&&y(o),l(c,t),t&&y(m),l(u,t)}}}function et(t){let e,n,$;return{c(){e=u("strong"),n=u("code"),$=d("file")},l(t){e=h(t,"STRONG",{});var s=x(e);n=h(s,"CODE",{});var a=x(n);$=w(a,"file"),a.forEach(y),s.forEach(y)},m(t,s){v(t,e,s),E(e,n),E(n,$)},d(t){t&&y(e)}}}function nt(t){let e,n,$,o,c;return e=new S({props:{$$slots:{default:[et]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=d(" "),$=u("span"),o=d("*"),this.h()},l(t){a(e.$$.fragment,t),n=w(t," "),$=h(t,"SPAN",{class:!0});var s=x($);o=w(s,"*"),s.forEach(y),this.h()},h(){k($,"class","required")},m(t,s){r(e,t,s),v(t,n,s),v(t,$,s),E($,o),c=!0},p(t,n){const $={};2&n&&($.$$scope={dirty:n,ctx:t}),e.$set($)},i(t){c||(p(e.$$.fragment,t),c=!0)},o(t){f(e.$$.fragment,t),c=!1},d(t){l(e,t),t&&y(n),t&&y($)}}}function $t(t){let e,n,$;return{c(){e=u("a"),n=u("code"),$=d("File"),this.h()},l(t){e=h(t,"A",{href:!0,rel:!0});var s=x(e);n=h(s,"CODE",{});var a=x(n);$=w(a,"File"),a.forEach(y),s.forEach(y),this.h()},h(){k(e,"href","https://developer.mozilla.org/en-US/docs/Web/API/File"),k(e,"rel","nofollow")},m(t,s){v(t,e,s),E(e,n),E(n,$)},d(t){t&&y(e)}}}function st(t){let e;return{c(){e=d("The File object to display.")},l(t){e=w(t,"The File object to display.")},m(t,n){v(t,e,n)},d(t){t&&y(e)}}}function at(t){let e,n,$,o,c,m,u,d;return e=new G({props:{$$slots:{default:[nt]},$$scope:{ctx:t}}}),$=new G({}),c=new G({props:{$$slots:{default:[$t]},$$scope:{ctx:t}}}),u=new G({props:{$$slots:{default:[st]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=i(),s($.$$.fragment),o=i(),s(c.$$.fragment),m=i(),s(u.$$.fragment)},l(t){a(e.$$.fragment,t),n=g(t),a($.$$.fragment,t),o=g(t),a(c.$$.fragment,t),m=g(t),a(u.$$.fragment,t)},m(t,s){r(e,t,s),v(t,n,s),r($,t,s),v(t,o,s),r(c,t,s),v(t,m,s),r(u,t,s),d=!0},p(t,n){const $={};2&n&&($.$$scope={dirty:n,ctx:t}),e.$set($);const s={};2&n&&(s.$$scope={dirty:n,ctx:t}),c.$set(s);const a={};2&n&&(a.$$scope={dirty:n,ctx:t}),u.$set(a)},i(t){d||(p(e.$$.fragment,t),p($.$$.fragment,t),p(c.$$.fragment,t),p(u.$$.fragment,t),d=!0)},o(t){f(e.$$.fragment,t),f($.$$.fragment,t),f(c.$$.fragment,t),f(u.$$.fragment,t),d=!1},d(t){l(e,t),t&&y(n),l($,t),t&&y(o),l(c,t),t&&y(m),l(u,t)}}}function rt(t){let e,n,$,o,c,m;return n=new A({props:{$$slots:{default:[tt]},$$scope:{ctx:t}}}),c=new A({props:{$$slots:{default:[at]},$$scope:{ctx:t}}}),{c(){e=u("thead"),s(n.$$.fragment),$=i(),o=u("tbody"),s(c.$$.fragment)},l(t){e=h(t,"THEAD",{});var s=x(e);a(n.$$.fragment,s),s.forEach(y),$=g(t),o=h(t,"TBODY",{});var r=x(o);a(c.$$.fragment,r),r.forEach(y)},m(t,s){v(t,e,s),r(n,e,null),v(t,$,s),v(t,o,s),r(c,o,null),m=!0},p(t,e){const $={};2&e&&($.$$scope={dirty:e,ctx:t}),n.$set($);const s={};2&e&&(s.$$scope={dirty:e,ctx:t}),c.$set(s)},i(t){m||(p(n.$$.fragment,t),p(c.$$.fragment,t),m=!0)},o(t){f(n.$$.fragment,t),f(c.$$.fragment,t),m=!1},d(t){t&&y(e),l(n),t&&y($),t&&y(o),l(c)}}}function ot(t){let e;return{c(){e=d("Class Properties")},l(t){e=w(t,"Class Properties")},m(t,n){v(t,e,n)},d(t){t&&y(e)}}}function ct(t){let e,n,$,s,a,r,o;return{c(){e=d("All "),n=u("code"),$=d("<FileTile>"),s=d(" components use the "),a=u("code"),r=d(".file-tile"),o=d(" class.")},l(t){e=w(t,"All "),n=h(t,"CODE",{});var c=x(n);$=w(c,"<FileTile>"),c.forEach(y),s=w(t," components use the "),a=h(t,"CODE",{});var p=x(a);r=w(p,".file-tile"),p.forEach(y),o=w(t," class.")},m(t,c){v(t,e,c),v(t,n,c),E(n,$),v(t,s,c),v(t,a,c),E(a,r),v(t,o,c)},d(t){t&&y(e),t&&y(n),t&&y(s),t&&y(a),t&&y(o)}}}function pt(t){let e;return{c(){e=d("Events")},l(t){e=w(t,"Events")},m(t,n){v(t,e,n)},d(t){t&&y(e)}}}function ft(t){let e;return{c(){e=d("Name")},l(t){e=w(t,"Name")},m(t,n){v(t,e,n)},d(t){t&&y(e)}}}function lt(t){let e;return{c(){e=d("Event Detail")},l(t){e=w(t,"Event Detail")},m(t,n){v(t,e,n)},d(t){t&&y(e)}}}function mt(t){let e;return{c(){e=d("Description")},l(t){e=w(t,"Description")},m(t,n){v(t,e,n)},d(t){t&&y(e)}}}function it(t){let e,n,$,o,c,m;return e=new R({props:{$$slots:{default:[ft]},$$scope:{ctx:t}}}),$=new R({props:{$$slots:{default:[lt]},$$scope:{ctx:t}}}),c=new R({props:{$$slots:{default:[mt]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=i(),s($.$$.fragment),o=i(),s(c.$$.fragment)},l(t){a(e.$$.fragment,t),n=g(t),a($.$$.fragment,t),o=g(t),a(c.$$.fragment,t)},m(t,s){r(e,t,s),v(t,n,s),r($,t,s),v(t,o,s),r(c,t,s),m=!0},p(t,n){const s={};2&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const a={};2&n&&(a.$$scope={dirty:n,ctx:t}),$.$set(a);const r={};2&n&&(r.$$scope={dirty:n,ctx:t}),c.$set(r)},i(t){m||(p(e.$$.fragment,t),p($.$$.fragment,t),p(c.$$.fragment,t),m=!0)},o(t){f(e.$$.fragment,t),f($.$$.fragment,t),f(c.$$.fragment,t),m=!1},d(t){l(e,t),t&&y(n),l($,t),t&&y(o),l(c,t)}}}function ut(t){let e,n,$;return{c(){e=u("strong"),n=u("code"),$=d("delete")},l(t){e=h(t,"STRONG",{});var s=x(e);n=h(s,"CODE",{});var a=x(n);$=w(a,"delete"),a.forEach(y),s.forEach(y)},m(t,s){v(t,e,s),E(e,n),E(n,$)},d(t){t&&y(e)}}}function dt(t){let e,n;return{c(){e=u("code"),n=d("file")},l(t){e=h(t,"CODE",{});var $=x(e);n=w($,"file"),$.forEach(y)},m(t,$){v(t,e,$),E(e,n)},d(t){t&&y(e)}}}function gt(t){let e,n,$,s;return{c(){e=d("Fired when the delete button is pressed. The detail is the same "),n=u("code"),$=d("file"),s=d(" object that was passed in the property.")},l(t){e=w(t,"Fired when the delete button is pressed. The detail is the same "),n=h(t,"CODE",{});var a=x(n);$=w(a,"file"),a.forEach(y),s=w(t," object that was passed in the property.")},m(t,a){v(t,e,a),v(t,n,a),E(n,$),v(t,s,a)},d(t){t&&y(e),t&&y(n),t&&y(s)}}}function ht(t){let e,n,$,o,c,m;return e=new G({props:{$$slots:{default:[ut]},$$scope:{ctx:t}}}),$=new G({props:{$$slots:{default:[dt]},$$scope:{ctx:t}}}),c=new G({props:{$$slots:{default:[gt]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=i(),s($.$$.fragment),o=i(),s(c.$$.fragment)},l(t){a(e.$$.fragment,t),n=g(t),a($.$$.fragment,t),o=g(t),a(c.$$.fragment,t)},m(t,s){r(e,t,s),v(t,n,s),r($,t,s),v(t,o,s),r(c,t,s),m=!0},p(t,n){const s={};2&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const a={};2&n&&(a.$$scope={dirty:n,ctx:t}),$.$set(a);const r={};2&n&&(r.$$scope={dirty:n,ctx:t}),c.$set(r)},i(t){m||(p(e.$$.fragment,t),p($.$$.fragment,t),p(c.$$.fragment,t),m=!0)},o(t){f(e.$$.fragment,t),f($.$$.fragment,t),f(c.$$.fragment,t),m=!1},d(t){l(e,t),t&&y(n),l($,t),t&&y(o),l(c,t)}}}function xt(t){let e,n,$,o,c,m;return n=new A({props:{$$slots:{default:[it]},$$scope:{ctx:t}}}),c=new A({props:{$$slots:{default:[ht]},$$scope:{ctx:t}}}),{c(){e=u("thead"),s(n.$$.fragment),$=i(),o=u("tbody"),s(c.$$.fragment)},l(t){e=h(t,"THEAD",{});var s=x(e);a(n.$$.fragment,s),s.forEach(y),$=g(t),o=h(t,"TBODY",{});var r=x(o);a(c.$$.fragment,r),r.forEach(y)},m(t,s){v(t,e,s),r(n,e,null),v(t,$,s),v(t,o,s),r(c,o,null),m=!0},p(t,e){const $={};2&e&&($.$$scope={dirty:e,ctx:t}),n.$set($);const s={};2&e&&(s.$$scope={dirty:e,ctx:t}),c.$set(s)},i(t){m||(p(n.$$.fragment,t),p(c.$$.fragment,t),m=!0)},o(t){f(n.$$.fragment,t),f(c.$$.fragment,t),m=!1},d(t){t&&y(e),l(n),t&&y($),t&&y(o),l(c)}}}function wt(t){let e;return{c(){e=d("SCSS Variables")},l(t){e=w(t,"SCSS Variables")},m(t,n){v(t,e,n)},d(t){t&&y(e)}}}function yt(t){let e;return{c(){e=d("Name")},l(t){e=w(t,"Name")},m(t,n){v(t,e,n)},d(t){t&&y(e)}}}function kt(t){let e;return{c(){e=d("Description")},l(t){e=w(t,"Description")},m(t,n){v(t,e,n)},d(t){t&&y(e)}}}function vt(t){let e;return{c(){e=d("Default")},l(t){e=w(t,"Default")},m(t,n){v(t,e,n)},d(t){t&&y(e)}}}function Et(t){let e,n,$,o,c,m;return e=new R({props:{$$slots:{default:[yt]},$$scope:{ctx:t}}}),$=new R({props:{$$slots:{default:[kt]},$$scope:{ctx:t}}}),c=new R({props:{$$slots:{default:[vt]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=i(),s($.$$.fragment),o=i(),s(c.$$.fragment)},l(t){a(e.$$.fragment,t),n=g(t),a($.$$.fragment,t),o=g(t),a(c.$$.fragment,t)},m(t,s){r(e,t,s),v(t,n,s),r($,t,s),v(t,o,s),r(c,t,s),m=!0},p(t,n){const s={};2&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const a={};2&n&&(a.$$scope={dirty:n,ctx:t}),$.$set(a);const r={};2&n&&(r.$$scope={dirty:n,ctx:t}),c.$set(r)},i(t){m||(p(e.$$.fragment,t),p($.$$.fragment,t),p(c.$$.fragment,t),m=!0)},o(t){f(e.$$.fragment,t),f($.$$.fragment,t),f(c.$$.fragment,t),m=!1},d(t){l(e,t),t&&y(n),l($,t),t&&y(o),l(c,t)}}}function Tt(t){let e,n,$;return{c(){e=u("strong"),n=u("code"),$=d("$dark")},l(t){e=h(t,"STRONG",{});var s=x(e);n=h(s,"CODE",{});var a=x(n);$=w(a,"$dark"),a.forEach(y),s.forEach(y)},m(t,s){v(t,e,s),E(e,n),E(n,$)},d(t){t&&y(e)}}}function Dt(t){let e;return{c(){e=d("The text color of the tile.")},l(t){e=w(t,"The text color of the tile.")},m(t,n){v(t,e,n)},d(t){t&&y(e)}}}function bt(t){let e,n;return e=new H({props:{value:"#333333"}}),{c(){s(e.$$.fragment)},l(t){a(e.$$.fragment,t)},m(t,$){r(e,t,$),n=!0},p:b,i(t){n||(p(e.$$.fragment,t),n=!0)},o(t){f(e.$$.fragment,t),n=!1},d(t){l(e,t)}}}function jt(t){let e,n,$,o,c,m;return e=new G({props:{$$slots:{default:[Tt]},$$scope:{ctx:t}}}),$=new G({props:{$$slots:{default:[Dt]},$$scope:{ctx:t}}}),c=new G({props:{$$slots:{default:[bt]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=i(),s($.$$.fragment),o=i(),s(c.$$.fragment)},l(t){a(e.$$.fragment,t),n=g(t),a($.$$.fragment,t),o=g(t),a(c.$$.fragment,t)},m(t,s){r(e,t,s),v(t,n,s),r($,t,s),v(t,o,s),r(c,t,s),m=!0},p(t,n){const s={};2&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const a={};2&n&&(a.$$scope={dirty:n,ctx:t}),$.$set(a);const r={};2&n&&(r.$$scope={dirty:n,ctx:t}),c.$set(r)},i(t){m||(p(e.$$.fragment,t),p($.$$.fragment,t),p(c.$$.fragment,t),m=!0)},o(t){f(e.$$.fragment,t),f($.$$.fragment,t),f(c.$$.fragment,t),m=!1},d(t){l(e,t),t&&y(n),l($,t),t&&y(o),l(c,t)}}}function Ot(t){let e,n,$;return{c(){e=u("strong"),n=u("code"),$=d("$file-tile-radius")},l(t){e=h(t,"STRONG",{});var s=x(e);n=h(s,"CODE",{});var a=x(n);$=w(a,"$file-tile-radius"),a.forEach(y),s.forEach(y)},m(t,s){v(t,e,s),E(e,n),E(n,$)},d(t){t&&y(e)}}}function Ct(t){let e;return{c(){e=d("The curvature radius of the tile.")},l(t){e=w(t,"The curvature radius of the tile.")},m(t,n){v(t,e,n)},d(t){t&&y(e)}}}function Ft(t){let e,n;return{c(){e=u("code"),n=d(".625em")},l(t){e=h(t,"CODE",{});var $=x(e);n=w($,".625em"),$.forEach(y)},m(t,$){v(t,e,$),E(e,n)},d(t){t&&y(e)}}}function St(t){let e,n,$,o,c,m;return e=new G({props:{$$slots:{default:[Ot]},$$scope:{ctx:t}}}),$=new G({props:{$$slots:{default:[Ct]},$$scope:{ctx:t}}}),c=new G({props:{$$slots:{default:[Ft]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=i(),s($.$$.fragment),o=i(),s(c.$$.fragment)},l(t){a(e.$$.fragment,t),n=g(t),a($.$$.fragment,t),o=g(t),a(c.$$.fragment,t)},m(t,s){r(e,t,s),v(t,n,s),r($,t,s),v(t,o,s),r(c,t,s),m=!0},p(t,n){const s={};2&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const a={};2&n&&(a.$$scope={dirty:n,ctx:t}),$.$set(a);const r={};2&n&&(r.$$scope={dirty:n,ctx:t}),c.$set(r)},i(t){m||(p(e.$$.fragment,t),p($.$$.fragment,t),p(c.$$.fragment,t),m=!0)},o(t){f(e.$$.fragment,t),f($.$$.fragment,t),f(c.$$.fragment,t),m=!1},d(t){l(e,t),t&&y(n),l($,t),t&&y(o),l(c,t)}}}function Nt(t){let e,n,$;return{c(){e=u("strong"),n=u("code"),$=d("$shadow-1")},l(t){e=h(t,"STRONG",{});var s=x(e);n=h(s,"CODE",{});var a=x(n);$=w(a,"$shadow-1"),a.forEach(y),s.forEach(y)},m(t,s){v(t,e,s),E(e,n),E(n,$)},d(t){t&&y(e)}}}function At(t){let e;return{c(){e=d("The shadow of the tile.")},l(t){e=w(t,"The shadow of the tile.")},m(t,n){v(t,e,n)},d(t){t&&y(e)}}}function Rt(t){let e,n;return e=new M({props:{value:te}}),{c(){s(e.$$.fragment)},l(t){a(e.$$.fragment,t)},m(t,$){r(e,t,$),n=!0},p:b,i(t){n||(p(e.$$.fragment,t),n=!0)},o(t){f(e.$$.fragment,t),n=!1},d(t){l(e,t)}}}function Gt(t){let e,n,$,o,c,m;return e=new G({props:{$$slots:{default:[Nt]},$$scope:{ctx:t}}}),$=new G({props:{$$slots:{default:[At]},$$scope:{ctx:t}}}),c=new G({props:{$$slots:{default:[Rt]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=i(),s($.$$.fragment),o=i(),s(c.$$.fragment)},l(t){a(e.$$.fragment,t),n=g(t),a($.$$.fragment,t),o=g(t),a(c.$$.fragment,t)},m(t,s){r(e,t,s),v(t,n,s),r($,t,s),v(t,o,s),r(c,t,s),m=!0},p(t,n){const s={};2&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const a={};2&n&&(a.$$scope={dirty:n,ctx:t}),$.$set(a);const r={};2&n&&(r.$$scope={dirty:n,ctx:t}),c.$set(r)},i(t){m||(p(e.$$.fragment,t),p($.$$.fragment,t),p(c.$$.fragment,t),m=!0)},o(t){f(e.$$.fragment,t),f($.$$.fragment,t),f(c.$$.fragment,t),m=!1},d(t){l(e,t),t&&y(n),l($,t),t&&y(o),l(c,t)}}}function zt(t){let e,n,$;return{c(){e=u("strong"),n=u("code"),$=d("$thin-font-weight")},l(t){e=h(t,"STRONG",{});var s=x(e);n=h(s,"CODE",{});var a=x(n);$=w(a,"$thin-font-weight"),a.forEach(y),s.forEach(y)},m(t,s){v(t,e,s),E(e,n),E(n,$)},d(t){t&&y(e)}}}function Bt(t){let e;return{c(){e=d("The thinner font weight for the file details: size and type.")},l(t){e=w(t,"The thinner font weight for the file details: size and type.")},m(t,n){v(t,e,n)},d(t){t&&y(e)}}}function Pt(t){let e,n;return{c(){e=u("code"),n=d("300")},l(t){e=h(t,"CODE",{});var $=x(e);n=w($,"300"),$.forEach(y)},m(t,$){v(t,e,$),E(e,n)},d(t){t&&y(e)}}}function Ht(t){let e,n,$,o,c,m;return e=new G({props:{$$slots:{default:[zt]},$$scope:{ctx:t}}}),$=new G({props:{$$slots:{default:[Bt]},$$scope:{ctx:t}}}),c=new G({props:{$$slots:{default:[Pt]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=i(),s($.$$.fragment),o=i(),s(c.$$.fragment)},l(t){a(e.$$.fragment,t),n=g(t),a($.$$.fragment,t),o=g(t),a(c.$$.fragment,t)},m(t,s){r(e,t,s),v(t,n,s),r($,t,s),v(t,o,s),r(c,t,s),m=!0},p(t,n){const s={};2&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const a={};2&n&&(a.$$scope={dirty:n,ctx:t}),$.$set(a);const r={};2&n&&(r.$$scope={dirty:n,ctx:t}),c.$set(r)},i(t){m||(p(e.$$.fragment,t),p($.$$.fragment,t),p(c.$$.fragment,t),m=!0)},o(t){f(e.$$.fragment,t),f($.$$.fragment,t),f(c.$$.fragment,t),m=!1},d(t){l(e,t),t&&y(n),l($,t),t&&y(o),l(c,t)}}}function Lt(t){let e,n,$,s,a,r,o,c,p;return{c(){e=u("strong"),n=u("code"),$=d("$button-radius"),s=i(),a=u("small"),r=d("From "),o=u("a"),c=u("code"),p=d("Button"),this.h()},l(t){e=h(t,"STRONG",{});var f=x(e);n=h(f,"CODE",{});var l=x(n);$=w(l,"$button-radius"),l.forEach(y),f.forEach(y),s=g(t),a=h(t,"SMALL",{});var m=x(a);r=w(m,"From "),o=h(m,"A",{href:!0});var i=x(o);c=h(i,"CODE",{});var u=x(c);p=w(u,"Button"),u.forEach(y),i.forEach(y),m.forEach(y),this.h()},h(){k(o,"href","./docs/components/button")},m(t,f){v(t,e,f),E(e,n),E(n,$),v(t,s,f),v(t,a,f),E(a,r),E(a,o),E(o,c),E(c,p)},d(t){t&&y(e),t&&y(s),t&&y(a)}}}function Mt(t){let e;return{c(){e=d('The curvature radius of the "delete" button.')},l(t){e=w(t,'The curvature radius of the "delete" button.')},m(t,n){v(t,e,n)},d(t){t&&y(e)}}}function qt(t){let e,n;return{c(){e=u("code"),n=d("1.5625em")},l(t){e=h(t,"CODE",{});var $=x(e);n=w($,"1.5625em"),$.forEach(y)},m(t,$){v(t,e,$),E(e,n)},d(t){t&&y(e)}}}function It(t){let e,n,$,o,c,m;return e=new G({props:{$$slots:{default:[Lt]},$$scope:{ctx:t}}}),$=new G({props:{$$slots:{default:[Mt]},$$scope:{ctx:t}}}),c=new G({props:{$$slots:{default:[qt]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=i(),s($.$$.fragment),o=i(),s(c.$$.fragment)},l(t){a(e.$$.fragment,t),n=g(t),a($.$$.fragment,t),o=g(t),a(c.$$.fragment,t)},m(t,s){r(e,t,s),v(t,n,s),r($,t,s),v(t,o,s),r(c,t,s),m=!0},p(t,n){const s={};2&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const a={};2&n&&(a.$$scope={dirty:n,ctx:t}),$.$set(a);const r={};2&n&&(r.$$scope={dirty:n,ctx:t}),c.$set(r)},i(t){m||(p(e.$$.fragment,t),p($.$$.fragment,t),p(c.$$.fragment,t),m=!0)},o(t){f(e.$$.fragment,t),f($.$$.fragment,t),f(c.$$.fragment,t),m=!1},d(t){l(e,t),t&&y(n),l($,t),t&&y(o),l(c,t)}}}function Vt(t){let e,n,$,s,a,r,o,c,p;return{c(){e=u("strong"),n=u("code"),$=d("$danger"),s=i(),a=u("small"),r=d("From "),o=u("a"),c=u("code"),p=d("Button"),this.h()},l(t){e=h(t,"STRONG",{});var f=x(e);n=h(f,"CODE",{});var l=x(n);$=w(l,"$danger"),l.forEach(y),f.forEach(y),s=g(t),a=h(t,"SMALL",{});var m=x(a);r=w(m,"From "),o=h(m,"A",{href:!0});var i=x(o);c=h(i,"CODE",{});var u=x(c);p=w(u,"Button"),u.forEach(y),i.forEach(y),m.forEach(y),this.h()},h(){k(o,"href","./docs/components/button")},m(t,f){v(t,e,f),E(e,n),E(n,$),v(t,s,f),v(t,a,f),E(a,r),E(a,o),E(o,c),E(c,p)},d(t){t&&y(e),t&&y(s),t&&y(a)}}}function Yt(t){let e;return{c(){e=d('The color of the "delete" button.')},l(t){e=w(t,'The color of the "delete" button.')},m(t,n){v(t,e,n)},d(t){t&&y(e)}}}function Jt(t){let e,n;return e=new H({props:{value:"#B80000"}}),{c(){s(e.$$.fragment)},l(t){a(e.$$.fragment,t)},m(t,$){r(e,t,$),n=!0},p:b,i(t){n||(p(e.$$.fragment,t),n=!0)},o(t){f(e.$$.fragment,t),n=!1},d(t){l(e,t)}}}function Ut(t){let e,n,$,o,c,m;return e=new G({props:{$$slots:{default:[Vt]},$$scope:{ctx:t}}}),$=new G({props:{$$slots:{default:[Yt]},$$scope:{ctx:t}}}),c=new G({props:{$$slots:{default:[Jt]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=i(),s($.$$.fragment),o=i(),s(c.$$.fragment)},l(t){a(e.$$.fragment,t),n=g(t),a($.$$.fragment,t),o=g(t),a(c.$$.fragment,t)},m(t,s){r(e,t,s),v(t,n,s),r($,t,s),v(t,o,s),r(c,t,s),m=!0},p(t,n){const s={};2&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const a={};2&n&&(a.$$scope={dirty:n,ctx:t}),$.$set(a);const r={};2&n&&(r.$$scope={dirty:n,ctx:t}),c.$set(r)},i(t){m||(p(e.$$.fragment,t),p($.$$.fragment,t),p(c.$$.fragment,t),m=!0)},o(t){f(e.$$.fragment,t),f($.$$.fragment,t),f(c.$$.fragment,t),m=!1},d(t){l(e,t),t&&y(n),l($,t),t&&y(o),l(c,t)}}}function Wt(t){let e,n,$,o,c,m,d,w,k,T,D,b,j,O,C,F;return n=new A({props:{$$slots:{default:[Et]},$$scope:{ctx:t}}}),c=new A({props:{$$slots:{default:[jt]},$$scope:{ctx:t}}}),d=new A({props:{$$slots:{default:[St]},$$scope:{ctx:t}}}),k=new A({props:{$$slots:{default:[Gt]},$$scope:{ctx:t}}}),D=new A({props:{$$slots:{default:[Ht]},$$scope:{ctx:t}}}),j=new A({props:{$$slots:{default:[It]},$$scope:{ctx:t}}}),C=new A({props:{$$slots:{default:[Ut]},$$scope:{ctx:t}}}),{c(){e=u("thead"),s(n.$$.fragment),$=i(),o=u("tbody"),s(c.$$.fragment),m=i(),s(d.$$.fragment),w=i(),s(k.$$.fragment),T=i(),s(D.$$.fragment),b=i(),s(j.$$.fragment),O=i(),s(C.$$.fragment)},l(t){e=h(t,"THEAD",{});var s=x(e);a(n.$$.fragment,s),s.forEach(y),$=g(t),o=h(t,"TBODY",{});var r=x(o);a(c.$$.fragment,r),m=g(r),a(d.$$.fragment,r),w=g(r),a(k.$$.fragment,r),T=g(r),a(D.$$.fragment,r),b=g(r),a(j.$$.fragment,r),O=g(r),a(C.$$.fragment,r),r.forEach(y)},m(t,s){v(t,e,s),r(n,e,null),v(t,$,s),v(t,o,s),r(c,o,null),E(o,m),r(d,o,null),E(o,w),r(k,o,null),E(o,T),r(D,o,null),E(o,b),r(j,o,null),E(o,O),r(C,o,null),F=!0},p(t,e){const $={};2&e&&($.$$scope={dirty:e,ctx:t}),n.$set($);const s={};2&e&&(s.$$scope={dirty:e,ctx:t}),c.$set(s);const a={};2&e&&(a.$$scope={dirty:e,ctx:t}),d.$set(a);const r={};2&e&&(r.$$scope={dirty:e,ctx:t}),k.$set(r);const o={};2&e&&(o.$$scope={dirty:e,ctx:t}),D.$set(o);const p={};2&e&&(p.$$scope={dirty:e,ctx:t}),j.$set(p);const f={};2&e&&(f.$$scope={dirty:e,ctx:t}),C.$set(f)},i(t){F||(p(n.$$.fragment,t),p(c.$$.fragment,t),p(d.$$.fragment,t),p(k.$$.fragment,t),p(D.$$.fragment,t),p(j.$$.fragment,t),p(C.$$.fragment,t),F=!0)},o(t){f(n.$$.fragment,t),f(c.$$.fragment,t),f(d.$$.fragment,t),f(k.$$.fragment,t),f(D.$$.fragment,t),f(j.$$.fragment,t),f(C.$$.fragment,t),F=!1},d(t){t&&y(e),l(n),t&&y($),t&&y(o),l(c),l(d),l(k),l(D),l(j),l(C)}}}function Zt(t){let e,n,$,o,c,m,T,D,b,j,O,S,A,R,G,H,M,V,K,Q,X,_,tt,et,nt,$t,st,at,ft;return e=new C({props:{$$slots:{default:[q]},$$scope:{ctx:t}}}),$=new F({props:{$$slots:{default:[I]},$$scope:{ctx:t}}}),c=new L({props:{components:_t}}),T=new P({props:{$$slots:{default:[U],source:[J],showcase:[Y]},$$scope:{ctx:t}}}),b=new B({props:{id:"properties",$$slots:{default:[W]},$$scope:{ctx:t}}}),O=new z({props:{$$slots:{default:[Z]},$$scope:{ctx:t}}}),A=new N({props:{$$slots:{default:[rt]},$$scope:{ctx:t}}}),V=new z({props:{$$slots:{default:[ot]},$$scope:{ctx:t}}}),Q=new F({props:{$$slots:{default:[ct]},$$scope:{ctx:t}}}),_=new B({props:{id:"events",$$slots:{default:[pt]},$$scope:{ctx:t}}}),et=new N({props:{$$slots:{default:[xt]},$$scope:{ctx:t}}}),$t=new B({props:{id:"scss-variables",$$slots:{default:[wt]},$$scope:{ctx:t}}}),at=new N({props:{$$slots:{default:[Wt]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=i(),s($.$$.fragment),o=i(),s(c.$$.fragment),m=i(),s(T.$$.fragment),D=i(),s(b.$$.fragment),j=i(),s(O.$$.fragment),S=i(),s(A.$$.fragment),R=i(),G=u("div"),H=d("* Required"),M=i(),s(V.$$.fragment),K=i(),s(Q.$$.fragment),X=i(),s(_.$$.fragment),tt=i(),s(et.$$.fragment),nt=i(),s($t.$$.fragment),st=i(),s(at.$$.fragment),this.h()},l(t){a(e.$$.fragment,t),n=g(t),a($.$$.fragment,t),o=g(t),a(c.$$.fragment,t),m=g(t),a(T.$$.fragment,t),D=g(t),a(b.$$.fragment,t),j=g(t),a(O.$$.fragment,t),S=g(t),a(A.$$.fragment,t),R=g(t),G=h(t,"DIV",{class:!0});var s=x(G);H=w(s,"* Required"),s.forEach(y),M=g(t),a(V.$$.fragment,t),K=g(t),a(Q.$$.fragment,t),X=g(t),a(_.$$.fragment,t),tt=g(t),a(et.$$.fragment,t),nt=g(t),a($t.$$.fragment,t),st=g(t),a(at.$$.fragment,t),this.h()},h(){k(G,"class","required")},m(t,s){r(e,t,s),v(t,n,s),r($,t,s),v(t,o,s),r(c,t,s),v(t,m,s),r(T,t,s),v(t,D,s),r(b,t,s),v(t,j,s),r(O,t,s),v(t,S,s),r(A,t,s),v(t,R,s),v(t,G,s),E(G,H),v(t,M,s),r(V,t,s),v(t,K,s),r(Q,t,s),v(t,X,s),r(_,t,s),v(t,tt,s),r(et,t,s),v(t,nt,s),r($t,t,s),v(t,st,s),r(at,t,s),ft=!0},p(t,n){const s={};2&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const a={};2&n&&(a.$$scope={dirty:n,ctx:t}),$.$set(a);const r={};3&n&&(r.$$scope={dirty:n,ctx:t}),T.$set(r);const o={};2&n&&(o.$$scope={dirty:n,ctx:t}),b.$set(o);const c={};2&n&&(c.$$scope={dirty:n,ctx:t}),O.$set(c);const p={};2&n&&(p.$$scope={dirty:n,ctx:t}),A.$set(p);const f={};2&n&&(f.$$scope={dirty:n,ctx:t}),V.$set(f);const l={};2&n&&(l.$$scope={dirty:n,ctx:t}),Q.$set(l);const m={};2&n&&(m.$$scope={dirty:n,ctx:t}),_.$set(m);const i={};2&n&&(i.$$scope={dirty:n,ctx:t}),et.$set(i);const u={};2&n&&(u.$$scope={dirty:n,ctx:t}),$t.$set(u);const d={};2&n&&(d.$$scope={dirty:n,ctx:t}),at.$set(d)},i(t){ft||(p(e.$$.fragment,t),p($.$$.fragment,t),p(c.$$.fragment,t),p(T.$$.fragment,t),p(b.$$.fragment,t),p(O.$$.fragment,t),p(A.$$.fragment,t),p(V.$$.fragment,t),p(Q.$$.fragment,t),p(_.$$.fragment,t),p(et.$$.fragment,t),p($t.$$.fragment,t),p(at.$$.fragment,t),ft=!0)},o(t){f(e.$$.fragment,t),f($.$$.fragment,t),f(c.$$.fragment,t),f(T.$$.fragment,t),f(b.$$.fragment,t),f(O.$$.fragment,t),f(A.$$.fragment,t),f(V.$$.fragment,t),f(Q.$$.fragment,t),f(_.$$.fragment,t),f(et.$$.fragment,t),f($t.$$.fragment,t),f(at.$$.fragment,t),ft=!1},d(t){l(e,t),t&&y(n),l($,t),t&&y(o),l(c,t),t&&y(m),l(T,t),t&&y(D),l(b,t),t&&y(j),l(O,t),t&&y(S),l(A,t),t&&y(R),t&&y(G),t&&y(M),l(V,t),t&&y(K),l(Q,t),t&&y(X),l(_,t),t&&y(tt),l(et,t),t&&y(nt),l($t,t),t&&y(st),l(at,t)}}}function Kt(t){let e,n;const m=[Qt];let i={$$slots:{default:[Zt]},$$scope:{ctx:t}};for(let t=0;t<m.length;t+=1)i=$(i,m[t]);return e=new O({props:i}),{c(){s(e.$$.fragment)},l(t){a(e.$$.fragment,t)},m(t,$){r(e,t,$),n=!0},p(t,[n]){const $=0&n?o(m,[c(Qt)]):{};3&n&&($.$$scope={dirty:n,ctx:t}),e.$set($)},i(t){n||(p(e.$$.fragment,t),n=!0)},o(t){f(e.$$.fragment,t),n=!1},d(t){l(e,t)}}}const Qt={name:"FileTile",relatedComponents:[{name:"FileInput",link:"./docs/components/file-input"},{name:"FileDropzone",link:"./docs/components/file-dropzone"}],shadow1:"0 2px 5px rgba(0, 0, 0, .14), 0 1px 5px rgba(0, 0, 0, .12);"},{name:Xt,relatedComponents:_t,shadow1:te}=Qt;function ee(t,e,n){let $=null;return m((()=>{n(0,$=new File([""],"filename.txt"))})),[$]}export default class extends t{constructor(t){super(),e(this,t,ee,Kt,n,{})}}export{Qt as metadata};
