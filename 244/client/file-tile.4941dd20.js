import{S as s,i as e,s as t,a,c as n,b as i,d as r,e as o,f as l,g as c,n as f,h,r as m,q as p,j as $,v as d,u,k as v,m as g,y as x,t as y,o as w,p as k,F as E}from"./client.bbf09479.js";import{B as b}from"./button.dbf8022e.js";import{f as j}from"./format-file-size.22bb7c0a.js";function V(s){let e,t,h,m,p;return{c(){e=a("svg"),t=a("polyline"),h=a("path"),m=a("line"),p=a("line"),this.h()},l(s){e=n(s,"svg",{xmlns:!0,width:!0,height:!0,viewBox:!0,fill:!0,stroke:!0,"stroke-width":!0,"stroke-linecap":!0,"stroke-linejoin":!0},1);var a=i(e);t=n(a,"polyline",{points:!0},1),i(t).forEach(r),h=n(a,"path",{d:!0},1),i(h).forEach(r),m=n(a,"line",{x1:!0,y1:!0,x2:!0,y2:!0},1),i(m).forEach(r),p=n(a,"line",{x1:!0,y1:!0,x2:!0,y2:!0},1),i(p).forEach(r),a.forEach(r),this.h()},h(){o(t,"points","3 6 5 6 21 6"),o(h,"d","M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"),o(m,"x1","10"),o(m,"y1","11"),o(m,"x2","10"),o(m,"y2","17"),o(p,"x1","14"),o(p,"y1","11"),o(p,"x2","14"),o(p,"y2","17"),o(e,"xmlns","http://www.w3.org/2000/svg"),o(e,"width","24"),o(e,"height","24"),o(e,"viewBox","0 0 24 24"),o(e,"fill","none"),o(e,"stroke","currentColor"),o(e,"stroke-width","2"),o(e,"stroke-linecap","round"),o(e,"stroke-linejoin","round")},m(s,a){l(s,e,a),c(e,t),c(e,h),c(e,m),c(e,p)},p:f,i:f,o:f,d(s){s&&r(e)}}}class z extends s{constructor(s){super(),e(this,s,null,V,t,{})}}function B(s){const e=s.split(".");return e[e.length-1].toUpperCase()}function D(s){let e,t;return e=new z({}),{c(){$(e.$$.fragment)},l(s){v(e.$$.fragment,s)},m(s,a){g(e,s,a),t=!0},i(s){t||(y(e.$$.fragment,s),t=!0)},o(s){w(e.$$.fragment,s),t=!1},d(s){k(e,s)}}}function I(s){let e,t,a,f,E,V,z,I,C,F,q,H,M=s[0].name+"",S=j(s[0].size)+"",U=B(s[0].name)+"";return q=new b({props:{danger:!0,round:!0,$$slots:{default:[D]},$$scope:{ctx:s}}}),q.$on("click",s[2]),{c(){e=h("div"),t=h("div"),a=m(M),E=p(),V=h("div"),z=m(S),I=m("\n    •\n    "),C=m(U),F=p(),$(q.$$.fragment),this.h()},l(s){e=n(s,"DIV",{class:!0});var o=i(e);t=n(o,"DIV",{class:!0,title:!0});var l=i(t);a=d(l,M),l.forEach(r),E=u(o),V=n(o,"DIV",{class:!0});var c=i(V);z=d(c,S),I=d(c,"\n    •\n    "),C=d(c,U),c.forEach(r),F=u(o),v(q.$$.fragment,o),o.forEach(r),this.h()},h(){o(t,"class","filename svelte-1fssyil"),o(t,"title",f=s[0].name),o(V,"class","properties svelte-1fssyil"),o(e,"class","file-tile svelte-1fssyil")},m(s,n){l(s,e,n),c(e,t),c(t,a),c(e,E),c(e,V),c(V,z),c(V,I),c(V,C),c(e,F),g(q,e,null),H=!0},p(s,[e]){(!H||1&e)&&M!==(M=s[0].name+"")&&x(a,M),(!H||1&e&&f!==(f=s[0].name))&&o(t,"title",f),(!H||1&e)&&S!==(S=j(s[0].size)+"")&&x(z,S),(!H||1&e)&&U!==(U=B(s[0].name)+"")&&x(C,U);const n={};8&e&&(n.$$scope={dirty:e,ctx:s}),q.$set(n)},i(s){H||(y(q.$$.fragment,s),H=!0)},o(s){w(q.$$.fragment,s),H=!1},d(s){s&&r(e),k(q)}}}function C(s,e,t){let{file:a}=e;const n=E();return s.$$set=s=>{"file"in s&&t(0,a=s.file)},[a,n,()=>n("delete",a)]}class F extends s{constructor(s){super(),e(this,s,C,I,t,{file:0})}}export{F,B as f};
