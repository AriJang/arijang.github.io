import{x as S,s as rt,n as j,b as Z,r as yt,o as Yt}from"../chunks/scheduler.aZHIKDCl.js";import{S as ct,i as it,e as m,s as N,c as g,d as $,h as B,g as b,n as p,j as x,k as v,o as D,A as et,r as nt,p as st,b as at,f as ut,l as Lt,m as F,B as Q,C as kt,w as vt,x as _t,y as bt,t as pt,a as mt,z as gt}from"../chunks/index.Cfc2DBzb.js";import{w as X}from"../chunks/index.Haq8omwQ.js";function Y(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}const M=21,wt=Array(M).fill().map(()=>Array(M).fill(null)),Ct=Array(M).fill().map(()=>Array(M).fill().map(()=>[])),J=X(wt),lt=X("alternate"),U=X("black"),R=X(Ct),H=X(0),L=X([]),G=X([]),$t=X(!0),Kt=X([]);function Ot(n,t){J.update(e=>{if(e[n][t]===null){e[n][t]=S(U),H.update(o=>o+1),R.update(o=>(o[n][t].push(S(H)),o));const l=Pt(n,t,e);L.update(o=>[...o,{x:n,y:t,stone:S(U),capturedStones:l,moveCount:S(H)}]),G.set([]),S(lt)==="alternate"&&U.set(S(U)==="black"?"white":"black")}else e[n][t]=null,R.update(l=>(l[n][t].pop(),l));return e})}function Pt(n,t,e){const l=S(U)==="black"?"white":"black",o=[{dx:-1,dy:0},{dx:1,dy:0},{dx:0,dy:-1},{dx:0,dy:1}],s=[];for(let{dx:c,dy:d}of o){const _=n+c,h=t+d;if(_>0&&_<M&&h>0&&h<M&&e[_][h]===l){const f=Gt(_,h,l,e);Jt(f,e)&&(s.push(...f),qt(f,e))}}return s}function Gt(n,t,e,l,o=new Set){const s=[],c=[{x:n,y:t}];o.add(`${n},${t}`);const d=[{dx:-1,dy:0},{dx:1,dy:0},{dx:0,dy:-1},{dx:0,dy:1}];for(;c.length>0;){const{x:_,y:h}=c.pop();s.push({x:_,y:h,stone:l[_][h]});for(let{dx:f,dy:a}of d){const r=_+f,u=h+a;r>0&&r<M&&u>0&&u<M&&l[r][u]===e&&!o.has(`${r},${u}`)&&(o.add(`${r},${u}`),c.push({x:r,y:u}))}}return s}function Jt(n,t){const e=[{dx:-1,dy:0},{dx:1,dy:0},{dx:0,dy:-1},{dx:0,dy:1}];for(let{x:l,y:o}of n)for(let{dx:s,dy:c}of e){const d=l+s,_=o+c;if(!(l===1&&s===-1)&&!(l===M-2&&s===1)&&!(o===1&&c===-1)&&!(o===M-2&&c===1)&&(d<=0||d>=M||_<=0||_>=M||t[d][_]===null))return!1}return!0}function qt(n,t){n.forEach(({x:e,y:l})=>{t[e][l]=null})}function Et(){if(S(L).length>0){const n=S(L).pop();G.update(o=>[n,...o]);const{x:t,y:e,capturedStones:l}=n;J.update(o=>(o[t][e]=null,R.update(s=>(s[t][e].pop(),s)),l.forEach(({x:s,y:c,stone:d})=>{o[s][c]=d}),o)),U.set(n.stone),H.update(o=>o-1)}}function Tt(){if(S(G).length>0){const n=S(G).shift(),{x:t,y:e,stone:l,moveCount:o}=n;J.update(s=>{s[t][e]=l,R.update(d=>(d[t][e].push(o),d));const c=Pt(t,e,s);return L.update(d=>[...d,{x:t,y:e,stone:l,capturedStones:c,moveCount:o}]),s}),U.set(l==="black"?"white":"black"),H.update(s=>s+1)}}function zt(){const n=S(L);G.update(t=>[...n,...t]),J.set(Array(M).fill().map(()=>Array(M).fill(null))),R.set(Array(M).fill().map(()=>Array(M).fill().map(()=>[]))),H.set(0),L.set([])}function Wt(){let n=Math.min(5,S(L).length);for(let t=0;t<n;t++)Et()}function Qt(){let n=Math.min(5,S(G).length);for(let t=0;t<n;t++)Tt()}function Ht(){for(;S(G).length>0;)Tt()}function Rt(){J.set(wt),R.set(Ct),H.set(0),L.set([]),G.set([]),U.set("black")}function Zt(){$t.update(n=>!n)}function te(){lt.set("white"),U.set("white")}function ee(){lt.set("black"),U.set("black")}function ne(){lt.set("alternate"),U.set("black")}function le(){const n=prompt("파일 이름을 입력하세요:","kibo.json");if(!n)return;const t={board:S(J),history:S(L),moveHistoryStack:S(R),moveCount:S(H)},e=JSON.stringify(t),l=new Blob([e],{type:"application/json"}),o=URL.createObjectURL(l),s=document.createElement("a");s.href=o,s.download=n,s.click(),URL.revokeObjectURL(o)}function oe(n){const t=n.target.files[0];if(console.log("loadKiboFromLocal",t),!t)return;const e=new FileReader;e.onload=l=>{const o=JSON.parse(l.target.result);Xt(o)},e.readAsText(t),n.target.value=""}function Xt(n){Rt(),J.set(n.board||wt),L.set(n.history||[]),R.set(n.moveHistoryStack||Ct),H.set(n.moveCount||0),se()}function se(){zt(),Ht()}async function re(){try{const n=await fetch("/kibo/files.json");Kt.set(await n.json())}catch(n){console.error("Error fetching kibo files:",n)}}async function ce(n){const t=n.target.value;if(console.log("loadKiboFromAssets file=",t),t)try{const l=await(await fetch(`/kibo/${t}`)).json();Xt(l)}catch(e){console.error("Error loading kibo file:",e)}}const ie=[{x:4,y:4},{x:4,y:10},{x:4,y:16},{x:10,y:4},{x:10,y:10},{x:10,y:16},{x:16,y:4},{x:16,y:10},{x:16,y:16}];function Dt(n,t,e){const l=n.slice();return l[7]=t[e],l[9]=e,l}function xt(n,t,e){const l=n.slice();return l[10]=t[e],l[12]=e,l}function ae(n,t,e){const l=n.slice();return l[13]=t[e],l[15]=e,l}function ue(n,t,e){const l=n.slice();return l[13]=t[e],l[15]=e,l}function fe(n){let t;return{c(){t=m("div"),this.h()},l(e){t=g(e,"DIV",{class:!0,style:!0}),$(t).forEach(b),this.h()},h(){p(t,"class","line horizontal svelte-v10rnh"),nt(t,"top",n[15]*(1200/18)+"px")},m(e,l){x(e,t,l)},p:j,d(e){e&&b(t)}}}function de(n){let t;return{c(){t=m("div"),this.h()},l(e){t=g(e,"DIV",{class:!0,style:!0}),$(t).forEach(b),this.h()},h(){p(t,"class","line vertical svelte-v10rnh"),nt(t,"left",n[15]*(1200/18)+"px")},m(e,l){x(e,t,l)},p:j,d(e){e&&b(t)}}}function he(n){let t;return{c(){t=m("div"),this.h()},l(e){t=g(e,"DIV",{class:!0}),$(t).forEach(b),this.h()},h(){p(t,"class","star-point svelte-v10rnh")},m(e,l){x(e,t,l)},d(e){e&&b(t)}}}function ve(n){let t;return{c(){t=m("div"),this.h()},l(e){t=g(e,"DIV",{class:!0}),$(t).forEach(b),this.h()},h(){p(t,"class","stone white svelte-v10rnh")},m(e,l){x(e,t,l)},d(e){e&&b(t)}}}function _e(n){let t;return{c(){t=m("div"),this.h()},l(e){t=g(e,"DIV",{class:!0}),$(t).forEach(b),this.h()},h(){p(t,"class","stone black svelte-v10rnh")},m(e,l){x(e,t,l)},d(e){e&&b(t)}}}function Mt(n){let t,e,l=n[1]&&At(n);return{c(){t=m("div"),l&&l.c(),this.h()},l(o){t=g(o,"DIV",{class:!0});var s=$(t);l&&l.l(s),s.forEach(b),this.h()},h(){p(t,"class",e="stone "+n[0][n[9]+1][n[12]+1]+" svelte-v10rnh")},m(o,s){x(o,t,s),l&&l.m(t,null)},p(o,s){o[1]?l?l.p(o,s):(l=At(o),l.c(),l.m(t,null)):l&&(l.d(1),l=null),s&1&&e!==(e="stone "+o[0][o[9]+1][o[12]+1]+" svelte-v10rnh")&&p(t,"class",e)},d(o){o&&b(t),l&&l.d()}}}function At(n){let t,e=n[2][n[9]+1][n[12]+1].length>0&&It(n);return{c(){e&&e.c(),t=st()},l(l){e&&e.l(l),t=st()},m(l,o){e&&e.m(l,o),x(l,t,o)},p(l,o){l[2][l[9]+1][l[12]+1].length>0?e?e.p(l,o):(e=It(l),e.c(),e.m(t.parentNode,t)):e&&(e.d(1),e=null)},d(l){l&&b(t),e&&e.d(l)}}}function It(n){let t,e=n[2][n[9]+1][n[12]+1][n[2][n[9]+1][n[12]+1].length-1]+"",l;return{c(){t=m("span"),l=at(e),this.h()},l(o){t=g(o,"SPAN",{class:!0});var s=$(t);l=ut(s,e),s.forEach(b),this.h()},h(){p(t,"class","move-number svelte-v10rnh")},m(o,s){x(o,t,s),v(t,l)},p(o,s){s&4&&e!==(e=o[2][o[9]+1][o[12]+1][o[2][o[9]+1][o[12]+1].length-1]+"")&&Lt(l,e)},d(o){o&&b(t)}}}function Ut(n){let t,e=ie.some(_),l,o,s,c,d;function _(...y){return n[4](n[9],n[12],...y)}let h=e&&he();function f(y,k){if(y[0][y[9]+1][y[12]+1]==="black")return _e;if(y[0][y[9]+1][y[12]+1]==="white")return ve}let a=f(n),r=a&&a(n),u=(n[0][n[9]+1][n[12]+1]==="black"||n[0][n[9]+1][n[12]+1]==="white")&&Mt(n);function i(){return n[5](n[9],n[12])}function A(...y){return n[6](n[9],n[12],...y)}return{c(){t=m("div"),h&&h.c(),l=N(),r&&r.c(),o=N(),u&&u.c(),s=N(),this.h()},l(y){t=g(y,"DIV",{class:!0,style:!0,role:!0,tabindex:!0});var k=$(t);h&&h.l(k),l=B(k),r&&r.l(k),o=B(k),u&&u.l(k),s=B(k),k.forEach(b),this.h()},h(){p(t,"class","cell svelte-v10rnh"),nt(t,"top",n[9]*(1200/18)-25+"px"),nt(t,"left",n[12]*(1200/18)-25+"px"),p(t,"role","button"),p(t,"tabindex","0")},m(y,k){x(y,t,k),h&&h.m(t,null),v(t,l),r&&r.m(t,null),v(t,o),u&&u.m(t,null),v(t,s),c||(d=[D(t,"click",i),D(t,"keydown",A)],c=!0)},p(y,k){n=y,a!==(a=f(n))&&(r&&r.d(1),r=a&&a(n),r&&(r.c(),r.m(t,o))),n[0][n[9]+1][n[12]+1]==="black"||n[0][n[9]+1][n[12]+1]==="white"?u?u.p(n,k):(u=Mt(n),u.c(),u.m(t,s)):u&&(u.d(1),u=null)},d(y){y&&b(t),h&&h.d(),r&&r.d(),u&&u.d(),c=!1,yt(d)}}}function Vt(n){let t,e=Y(n[7].slice(1,20)),l=[];for(let o=0;o<e.length;o+=1)l[o]=Ut(xt(n,e,o));return{c(){for(let o=0;o<l.length;o+=1)l[o].c();t=st()},l(o){for(let s=0;s<l.length;s+=1)l[s].l(o);t=st()},m(o,s){for(let c=0;c<l.length;c+=1)l[c]&&l[c].m(o,s);x(o,t,s)},p(o,s){if(s&7){e=Y(o[7].slice(1,20));let c;for(c=0;c<e.length;c+=1){const d=xt(o,e,c);l[c]?l[c].p(d,s):(l[c]=Ut(d),l[c].c(),l[c].m(t.parentNode,t))}for(;c<l.length;c+=1)l[c].d(1);l.length=e.length}},d(o){o&&b(t),et(l,o)}}}function be(n){let t,e,l,o,s,c=Y(Array(19)),d=[];for(let r=0;r<c.length;r+=1)d[r]=fe(ue(n,c,r));let _=Y(Array(19)),h=[];for(let r=0;r<_.length;r+=1)h[r]=de(ae(n,_,r));let f=Y(n[0].slice(1,20)),a=[];for(let r=0;r<f.length;r+=1)a[r]=Vt(Dt(n,f,r));return{c(){t=m("div");for(let r=0;r<d.length;r+=1)d[r].c();e=N();for(let r=0;r<h.length;r+=1)h[r].c();l=N();for(let r=0;r<a.length;r+=1)a[r].c();this.h()},l(r){t=g(r,"DIV",{class:!0});var u=$(t);for(let i=0;i<d.length;i+=1)d[i].l(u);e=B(u);for(let i=0;i<h.length;i+=1)h[i].l(u);l=B(u);for(let i=0;i<a.length;i+=1)a[i].l(u);u.forEach(b),this.h()},h(){p(t,"class","board svelte-v10rnh")},m(r,u){x(r,t,u);for(let i=0;i<d.length;i+=1)d[i]&&d[i].m(t,null);v(t,e);for(let i=0;i<h.length;i+=1)h[i]&&h[i].m(t,null);v(t,l);for(let i=0;i<a.length;i+=1)a[i]&&a[i].m(t,null);o||(s=D(t,"contextmenu",n[3]),o=!0)},p(r,[u]){if(u&7){f=Y(r[0].slice(1,20));let i;for(i=0;i<f.length;i+=1){const A=Dt(r,f,i);a[i]?a[i].p(A,u):(a[i]=Vt(A),a[i].c(),a[i].m(t,null))}for(;i<a.length;i+=1)a[i].d(1);a.length=f.length}},i:j,o:j,d(r){r&&b(t),et(d,r),et(h,r),et(a,r),o=!1,s()}}}function pe(n,t,e){let l,o,s;Z(n,J,f=>e(0,l=f)),Z(n,$t,f=>e(1,o=f)),Z(n,R,f=>e(2,s=f));function c(f){f.preventDefault(),Et()}return[l,o,s,c,(f,a,r)=>r.x===f+1&&r.y===a+1,(f,a)=>{Ot(f+1,a+1)},(f,a,r)=>{r.key==="Enter"&&Ot(f+1,a+1)}]}class me extends ct{constructor(t){super(),it(this,t,pe,be,rt,{})}}function Ft(n,t,e){const l=n.slice();return l[3]=t[e],l}function ge(n){let t;return{c(){t=at("순서보이기")},l(e){t=ut(e,"순서보이기")},m(e,l){x(e,t,l)},d(e){e&&b(t)}}}function ke(n){let t;return{c(){t=at("순서숨기기")},l(e){t=ut(e,"순서숨기기")},m(e,l){x(e,t,l)},d(e){e&&b(t)}}}function jt(n){let t,e=n[3]+"",l,o;return{c(){t=m("option"),l=at(e),this.h()},l(s){t=g(s,"OPTION",{});var c=$(t);l=ut(c,e),c.forEach(b),this.h()},h(){t.__value=o=n[3],kt(t,t.__value)},m(s,c){x(s,t,c),v(t,l)},p(s,c){c&4&&e!==(e=s[3]+"")&&Lt(l,e),c&4&&o!==(o=s[3])&&(t.__value=o,kt(t,t.__value))},d(s){s&&b(t)}}}function ye(n){let t,e,l,o,s,c,d,_,h,f,a="리셋",r,u,i,A="기보 저장",y,k,tt="기보 불러오기 (로컬)",q,V,K,C,P,Nt="기보 선택 (assets)",ft,Bt;function St(w,E){return w[1]?ke:ge}let ot=St(n),z=ot(n),W=Y(n[2]),O=[];for(let w=0;w<W.length;w+=1)O[w]=jt(Ft(n,W,w));return{c(){t=m("div"),e=m("button"),l=N(),o=m("button"),s=N(),c=m("button"),d=N(),_=m("button"),z.c(),h=N(),f=m("button"),f.textContent=a,r=N(),u=m("div"),i=m("button"),i.textContent=A,y=N(),k=m("label"),k.textContent=tt,q=N(),V=m("input"),K=N(),C=m("select"),P=m("option"),P.textContent=Nt;for(let w=0;w<O.length;w+=1)O[w].c();this.h()},l(w){t=g(w,"DIV",{class:!0});var E=$(t);e=g(E,"BUTTON",{class:!0}),$(e).forEach(b),l=B(E),o=g(E,"BUTTON",{class:!0}),$(o).forEach(b),s=B(E),c=g(E,"BUTTON",{class:!0}),$(c).forEach(b),d=B(E),_=g(E,"BUTTON",{class:!0});var T=$(_);z.l(T),T.forEach(b),h=B(E),f=g(E,"BUTTON",{class:!0,style:!0,"data-svelte-h":!0}),F(f)!=="svelte-1owoptx"&&(f.textContent=a),r=B(E),u=g(E,"DIV",{class:!0});var I=$(u);i=g(I,"BUTTON",{class:!0,"data-svelte-h":!0}),F(i)!=="svelte-5dzi3v"&&(i.textContent=A),y=B(I),k=g(I,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),F(k)!=="svelte-j9loce"&&(k.textContent=tt),q=B(I),V=g(I,"INPUT",{type:!0,id:!0,class:!0}),K=B(I),C=g(I,"SELECT",{class:!0});var dt=$(C);P=g(dt,"OPTION",{"data-svelte-h":!0}),F(P)!=="svelte-1tfg7ip"&&(P.textContent=Nt);for(let ht=0;ht<O.length;ht+=1)O[ht].l(dt);dt.forEach(b),I.forEach(b),E.forEach(b),this.h()},h(){p(e,"class","button white-button svelte-fvvgdc"),Q(e,"selected",n[0]==="white"),p(o,"class","button black-button svelte-fvvgdc"),Q(o,"selected",n[0]==="black"),p(c,"class","button alternate-button svelte-fvvgdc"),Q(c,"selected",n[0]==="alternate"),p(_,"class","button number-button svelte-fvvgdc"),p(f,"class","button number-button svelte-fvvgdc"),nt(f,"background-color","red"),p(i,"class","kibo-button save svelte-fvvgdc"),p(k,"for","kibo-file"),p(k,"class","kibo-button load svelte-fvvgdc"),p(V,"type","file"),p(V,"id","kibo-file"),p(V,"class","file-input svelte-fvvgdc"),P.__value="",kt(P,P.__value),p(C,"class","kibo-button load svelte-fvvgdc"),p(u,"class","kibo-container svelte-fvvgdc"),p(t,"class","controls-side svelte-fvvgdc")},m(w,E){x(w,t,E),v(t,e),v(t,l),v(t,o),v(t,s),v(t,c),v(t,d),v(t,_),z.m(_,null),v(t,h),v(t,f),v(t,r),v(t,u),v(u,i),v(u,y),v(u,k),v(u,q),v(u,V),v(u,K),v(u,C),v(C,P);for(let T=0;T<O.length;T+=1)O[T]&&O[T].m(C,null);ft||(Bt=[D(e,"click",te),D(o,"click",ee),D(c,"click",ne),D(_,"click",Zt),D(f,"click",Rt),D(i,"click",le),D(V,"change",oe),D(C,"change",ce)],ft=!0)},p(w,[E]){if(E&1&&Q(e,"selected",w[0]==="white"),E&1&&Q(o,"selected",w[0]==="black"),E&1&&Q(c,"selected",w[0]==="alternate"),ot!==(ot=St(w))&&(z.d(1),z=ot(w),z&&(z.c(),z.m(_,null))),E&4){W=Y(w[2]);let T;for(T=0;T<W.length;T+=1){const I=Ft(w,W,T);O[T]?O[T].p(I,E):(O[T]=jt(I),O[T].c(),O[T].m(C,null))}for(;T<O.length;T+=1)O[T].d(1);O.length=W.length}},i:j,o:j,d(w){w&&b(t),z.d(),et(O,w),ft=!1,yt(Bt)}}}function we(n,t,e){let l,o,s;return Z(n,lt,c=>e(0,l=c)),Z(n,$t,c=>e(1,o=c)),Z(n,Kt,c=>e(2,s=c)),[l,o,s]}class Ce extends ct{constructor(t){super(),it(this,t,we,ye,rt,{})}}function $e(n){let t,e,l="처음으로",o,s,c="5수 뒤로",d,_,h="한 수 뒤로",f,a,r="한 수 앞으로",u,i,A="5수 앞으로",y,k,tt="마지막으로",q,V;return{c(){t=m("div"),e=m("button"),e.textContent=l,o=N(),s=m("button"),s.textContent=c,d=N(),_=m("button"),_.textContent=h,f=N(),a=m("button"),a.textContent=r,u=N(),i=m("button"),i.textContent=A,y=N(),k=m("button"),k.textContent=tt,this.h()},l(K){t=g(K,"DIV",{class:!0});var C=$(t);e=g(C,"BUTTON",{class:!0,"data-svelte-h":!0}),F(e)!=="svelte-rj5alg"&&(e.textContent=l),o=B(C),s=g(C,"BUTTON",{class:!0,"data-svelte-h":!0}),F(s)!=="svelte-1dbxhv5"&&(s.textContent=c),d=B(C),_=g(C,"BUTTON",{class:!0,"data-svelte-h":!0}),F(_)!=="svelte-12yj6zi"&&(_.textContent=h),f=B(C),a=g(C,"BUTTON",{class:!0,"data-svelte-h":!0}),F(a)!=="svelte-1wuysru"&&(a.textContent=r),u=B(C),i=g(C,"BUTTON",{class:!0,"data-svelte-h":!0}),F(i)!=="svelte-ww2olb"&&(i.textContent=A),y=B(C),k=g(C,"BUTTON",{class:!0,"data-svelte-h":!0}),F(k)!=="svelte-y1twzw"&&(k.textContent=tt),C.forEach(b),this.h()},h(){p(e,"class","button svelte-kbxydc"),p(s,"class","button svelte-kbxydc"),p(_,"class","button svelte-kbxydc"),p(a,"class","button svelte-kbxydc"),p(i,"class","button svelte-kbxydc"),p(k,"class","button svelte-kbxydc"),p(t,"class","media-buttons svelte-kbxydc")},m(K,C){x(K,t,C),v(t,e),v(t,o),v(t,s),v(t,d),v(t,_),v(t,f),v(t,a),v(t,u),v(t,i),v(t,y),v(t,k),q||(V=[D(e,"click",zt),D(s,"click",Wt),D(_,"click",Et),D(a,"click",Tt),D(i,"click",Qt),D(k,"click",Ht)],q=!0)},p:j,i:j,o:j,d(K){K&&b(t),q=!1,yt(V)}}}class Ee extends ct{constructor(t){super(),it(this,t,null,$e,rt,{})}}function Te(n){let t,e,l,o,s,c,d,_,h,f;return o=new me({}),d=new Ee({}),h=new Ce({}),{c(){t=m("div"),e=m("div"),l=m("div"),vt(o.$$.fragment),s=N(),c=m("div"),vt(d.$$.fragment),_=N(),vt(h.$$.fragment),this.h()},l(a){t=g(a,"DIV",{class:!0});var r=$(t);e=g(r,"DIV",{class:!0});var u=$(e);l=g(u,"DIV",{class:!0});var i=$(l);_t(o.$$.fragment,i),i.forEach(b),s=B(u),c=g(u,"DIV",{class:!0});var A=$(c);_t(d.$$.fragment,A),A.forEach(b),u.forEach(b),_=B(r),_t(h.$$.fragment,r),r.forEach(b),this.h()},h(){p(l,"class","board-container svelte-4ehnv5"),p(c,"class","media-buttons-container svelte-4ehnv5"),p(e,"class","board-side-container svelte-4ehnv5"),p(t,"class","container svelte-4ehnv5")},m(a,r){x(a,t,r),v(t,e),v(e,l),bt(o,l,null),v(e,s),v(e,c),bt(d,c,null),v(t,_),bt(h,t,null),f=!0},p:j,i(a){f||(pt(o.$$.fragment,a),pt(d.$$.fragment,a),pt(h.$$.fragment,a),f=!0)},o(a){mt(o.$$.fragment,a),mt(d.$$.fragment,a),mt(h.$$.fragment,a),f=!1},d(a){a&&b(t),gt(o),gt(d),gt(h)}}}function Ne(n){return Yt(async()=>{console.log("import.meta.env.DEV = ",!1),re()}),[]}class De extends ct{constructor(t){super(),it(this,t,Ne,Te,rt,{})}}export{De as component};