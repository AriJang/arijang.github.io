import{s as ve,n as oe,r as pe}from"../chunks/scheduler.BvLojk_z.js";import{S as ke,i as me,e as j,s as B,c as E,d as D,h as M,g as h,m as se,n as p,p as F,q as Z,j as z,k as v,o as J,r as ne,u as ue,b as ce,f as ie,l as ye}from"../chunks/index.B4gDkw2S.js";function W(l){return(l==null?void 0:l.length)!==void 0?l:Array.from(l)}function ae(l,e,t){const n=l.slice();return n[24]=e[t],n[26]=t,n}function fe(l,e,t){const n=l.slice();return n[27]=e[t],n[29]=t,n}function xe(l,e,t){const n=l.slice();return n[30]=e[t],n[32]=t,n}function ge(l,e,t){const n=l.slice();return n[30]=e[t],n[32]=t,n}function we(l){let e;return{c(){e=j("div"),this.h()},l(t){e=E(t,"DIV",{class:!0,style:!0}),D(e).forEach(h),this.h()},h(){p(e,"class","line horizontal svelte-1j0xx1x"),Z(e,"top",l[32]*(1200/18)+"px")},m(t,n){z(t,e,n)},p:oe,d(t){t&&h(e)}}}function je(l){let e;return{c(){e=j("div"),this.h()},l(t){e=E(t,"DIV",{class:!0,style:!0}),D(e).forEach(h),this.h()},h(){p(e,"class","line vertical svelte-1j0xx1x"),Z(e,"left",l[32]*(1200/18)+"px")},m(t,n){z(t,e,n)},p:oe,d(t){t&&h(e)}}}function Ee(l){let e;return{c(){e=j("div"),this.h()},l(t){e=E(t,"DIV",{class:!0}),D(e).forEach(h),this.h()},h(){p(e,"class","star-point svelte-1j0xx1x")},m(t,n){z(t,e,n)},d(t){t&&h(e)}}}function Ae(l){let e;return{c(){e=j("div"),this.h()},l(t){e=E(t,"DIV",{class:!0}),D(e).forEach(h),this.h()},h(){p(e,"class","stone white svelte-1j0xx1x")},m(t,n){z(t,e,n)},d(t){t&&h(e)}}}function Ne(l){let e;return{c(){e=j("div"),this.h()},l(t){e=E(t,"DIV",{class:!0}),D(e).forEach(h),this.h()},h(){p(e,"class","stone black svelte-1j0xx1x")},m(t,n){z(t,e,n)},d(t){t&&h(e)}}}function de(l){let e,t,n=l[3]&&he(l);return{c(){e=j("div"),n&&n.c(),this.h()},l(o){e=E(o,"DIV",{class:!0});var s=D(e);n&&n.l(s),s.forEach(h),this.h()},h(){p(e,"class",t="stone "+l[1][l[26]+1][l[29]+1]+" svelte-1j0xx1x")},m(o,s){z(o,e,s),n&&n.m(e,null)},p(o,s){o[3]?n?n.p(o,s):(n=he(o),n.c(),n.m(e,null)):n&&(n.d(1),n=null),s[0]&2&&t!==(t="stone "+o[1][o[26]+1][o[29]+1]+" svelte-1j0xx1x")&&p(e,"class",t)},d(o){o&&h(e),n&&n.d()}}}function he(l){let e,t=l[2][l[26]+1][l[29]+1]+"",n;return{c(){e=j("span"),n=ce(t),this.h()},l(o){e=E(o,"SPAN",{class:!0});var s=D(e);n=ie(s,t),s.forEach(h),this.h()},h(){p(e,"class","move-number svelte-1j0xx1x")},m(o,s){z(o,e,s),v(e,n)},p(o,s){s[0]&4&&t!==(t=o[2][o[26]+1][o[29]+1]+"")&&ye(n,t)},d(o){o&&h(e)}}}function be(l){let e,t=l[4].some(R),n,o,s,i,k;function R(...m){return l[14](l[26],l[29],...m)}let g=t&&Ee();function q(m,N){if(m[1][m[26]+1][m[29]+1]==="black")return Ne;if(m[1][m[26]+1][m[29]+1]==="white")return Ae}let S=q(l),y=S&&S(l),b=(l[1][l[26]+1][l[29]+1]==="black"||l[1][l[26]+1][l[29]+1]==="white")&&de(l);function H(){return l[15](l[26],l[29])}function U(...m){return l[16](l[26],l[29],...m)}return{c(){e=j("div"),g&&g.c(),n=B(),y&&y.c(),o=B(),b&&b.c(),s=B(),this.h()},l(m){e=E(m,"DIV",{class:!0,style:!0,role:!0,tabindex:!0});var N=D(e);g&&g.l(N),n=M(N),y&&y.l(N),o=M(N),b&&b.l(N),s=M(N),N.forEach(h),this.h()},h(){p(e,"class","cell svelte-1j0xx1x"),Z(e,"top",l[26]*(1200/18)-25+"px"),Z(e,"left",l[29]*(1200/18)-25+"px"),p(e,"role","button"),p(e,"tabindex","0")},m(m,N){z(m,e,N),g&&g.m(e,null),v(e,n),y&&y.m(e,null),v(e,o),b&&b.m(e,null),v(e,s),i||(k=[J(e,"click",H),J(e,"keydown",U)],i=!0)},p(m,N){l=m,S!==(S=q(l))&&(y&&y.d(1),y=S&&S(l),y&&(y.c(),y.m(e,o))),l[1][l[26]+1][l[29]+1]==="black"||l[1][l[26]+1][l[29]+1]==="white"?b?b.p(l,N):(b=de(l),b.c(),b.m(e,s)):b&&(b.d(1),b=null)},d(m){m&&h(e),g&&g.d(),y&&y.d(),b&&b.d(),i=!1,pe(k)}}}function _e(l){let e,t=W(l[24].slice(1,20)),n=[];for(let o=0;o<t.length;o+=1)n[o]=be(fe(l,t,o));return{c(){for(let o=0;o<n.length;o+=1)n[o].c();e=ue()},l(o){for(let s=0;s<n.length;s+=1)n[s].l(o);e=ue()},m(o,s){for(let i=0;i<n.length;i+=1)n[i]&&n[i].m(o,s);z(o,e,s)},p(o,s){if(s[0]&94){t=W(o[24].slice(1,20));let i;for(i=0;i<t.length;i+=1){const k=fe(o,t,i);n[i]?n[i].p(k,s):(n[i]=be(k),n[i].c(),n[i].m(e.parentNode,e))}for(;i<n.length;i+=1)n[i].d(1);n.length=t.length}},d(o){o&&h(e),ne(n,o)}}}function Se(l){let e;return{c(){e=ce("순서보이기")},l(t){e=ie(t,"순서보이기")},m(t,n){z(t,e,n)},d(t){t&&h(e)}}}function Te(l){let e;return{c(){e=ce("순서숨기기")},l(t){e=ie(t,"순서숨기기")},m(t,n){z(t,e,n)},d(t){t&&h(e)}}}function Ce(l){let e,t,n,o,s,i,k,R,g,q,S,y,b,H,U,m="리셋",N,L,Y,$="기보 저장",Q,P,ee="기보 불러오기",te,G,le,a,f=W(Array(19)),u=[];for(let c=0;c<f.length;c+=1)u[c]=we(ge(l,f,c));let A=W(Array(19)),d=[];for(let c=0;c<A.length;c+=1)d[c]=je(xe(l,A,c));let x=W(l[1].slice(1,20)),_=[];for(let c=0;c<x.length;c+=1)_[c]=_e(ae(l,x,c));function T(c,w){return c[3]?Te:Se}let V=T(l),I=V(l);return{c(){e=j("div"),t=j("div");for(let c=0;c<u.length;c+=1)u[c].c();n=B();for(let c=0;c<d.length;c+=1)d[c].c();o=B();for(let c=0;c<_.length;c+=1)_[c].c();s=B(),i=j("div"),k=j("button"),R=B(),g=j("button"),q=B(),S=j("button"),y=B(),b=j("button"),I.c(),H=B(),U=j("button"),U.textContent=m,N=B(),L=j("div"),Y=j("button"),Y.textContent=$,Q=B(),P=j("label"),P.textContent=ee,te=B(),G=j("input"),this.h()},l(c){e=E(c,"DIV",{class:!0});var w=D(e);t=E(w,"DIV",{class:!0});var r=D(t);for(let X=0;X<u.length;X+=1)u[X].l(r);n=M(r);for(let X=0;X<d.length;X+=1)d[X].l(r);o=M(r);for(let X=0;X<_.length;X+=1)_[X].l(r);r.forEach(h),s=M(w),i=E(w,"DIV",{class:!0});var O=D(i);k=E(O,"BUTTON",{class:!0}),D(k).forEach(h),R=M(O),g=E(O,"BUTTON",{class:!0}),D(g).forEach(h),q=M(O),S=E(O,"BUTTON",{class:!0}),D(S).forEach(h),y=M(O),b=E(O,"BUTTON",{class:!0});var re=D(b);I.l(re),re.forEach(h),H=M(O),U=E(O,"BUTTON",{class:!0,style:!0,"data-svelte-h":!0}),se(U)!=="svelte-ib7ad3"&&(U.textContent=m),N=M(O),L=E(O,"DIV",{class:!0});var K=D(L);Y=E(K,"BUTTON",{class:!0,"data-svelte-h":!0}),se(Y)!=="svelte-5dzi3v"&&(Y.textContent=$),Q=M(K),P=E(K,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),se(P)!=="svelte-zk6zwl"&&(P.textContent=ee),te=M(K),G=E(K,"INPUT",{type:!0,id:!0,class:!0}),K.forEach(h),O.forEach(h),w.forEach(h),this.h()},h(){p(t,"class","board svelte-1j0xx1x"),p(k,"class","button white-button svelte-1j0xx1x"),F(k,"selected",l[0]==="white"),p(g,"class","button black-button svelte-1j0xx1x"),F(g,"selected",l[0]==="black"),p(S,"class","button alternate-button svelte-1j0xx1x"),F(S,"selected",l[0]==="alternate"),p(b,"class","button number-button svelte-1j0xx1x"),p(U,"class","button number-button svelte-1j0xx1x"),Z(U,"background-color","red"),p(Y,"class","kibo-button save svelte-1j0xx1x"),p(P,"for","kibo-file"),p(P,"class","kibo-button load svelte-1j0xx1x"),p(G,"type","file"),p(G,"id","kibo-file"),p(G,"class","file-input svelte-1j0xx1x"),p(L,"class","kibo-container svelte-1j0xx1x"),p(i,"class","controls svelte-1j0xx1x"),p(e,"class","board-container svelte-1j0xx1x")},m(c,w){z(c,e,w),v(e,t);for(let r=0;r<u.length;r+=1)u[r]&&u[r].m(t,null);v(t,n);for(let r=0;r<d.length;r+=1)d[r]&&d[r].m(t,null);v(t,o);for(let r=0;r<_.length;r+=1)_[r]&&_[r].m(t,null);v(e,s),v(e,i),v(i,k),v(i,R),v(i,g),v(i,q),v(i,S),v(i,y),v(i,b),I.m(b,null),v(i,H),v(i,U),v(i,N),v(i,L),v(L,Y),v(L,Q),v(L,P),v(L,te),v(L,G),le||(a=[J(t,"contextmenu",l[7]),J(k,"click",l[9]),J(g,"click",l[10]),J(S,"click",l[11]),J(b,"click",l[5]),J(U,"click",l[8]),J(Y,"click",l[12]),J(G,"change",l[13])],le=!0)},p(c,w){if(w[0]&94){x=W(c[1].slice(1,20));let r;for(r=0;r<x.length;r+=1){const O=ae(c,x,r);_[r]?_[r].p(O,w):(_[r]=_e(O),_[r].c(),_[r].m(t,null))}for(;r<_.length;r+=1)_[r].d(1);_.length=x.length}w[0]&1&&F(k,"selected",c[0]==="white"),w[0]&1&&F(g,"selected",c[0]==="black"),w[0]&1&&F(S,"selected",c[0]==="alternate"),V!==(V=T(c))&&(I.d(1),I=V(c),I&&(I.c(),I.m(b,null)))},i:oe,o:oe,d(c){c&&h(e),ne(u,c),ne(d,c),ne(_,c),I.d(),le=!1,pe(a)}}}const C=21;function De(l,e,t){let n="alternate",o="black",s=Array(C).fill().map(()=>Array(C).fill(null)),i=0,k=Array(C).fill().map(()=>Array(C).fill(null)),R=[],g=!0;const q=[{x:4,y:4},{x:4,y:10},{x:4,y:16},{x:10,y:4},{x:10,y:10},{x:10,y:16},{x:16,y:4},{x:16,y:10},{x:16,y:16}];function S(){t(3,g=!g)}function y(a,f){if(s[a][f]===null){t(1,s[a][f]=o,s),i++,t(2,k[a][f]=i,k);const u=H(a,f);R.push({x:a,y:f,stone:o,capturedStones:u}),n==="alternate"&&(o=o==="black"?"white":"black")}else t(1,s[a][f]=null,s)}function b(a){if(a.preventDefault(),R.length>0){const f=R.pop(),{x:u,y:A,capturedStones:d}=f;t(1,s[u][A]=null,s),t(2,k[u][A]=null,k),i--;for(let{x,y:_,stone:T}of d)t(1,s[x][_]=T,s);o=f.stone}}function H(a,f){const u=o==="black"?"white":"black",A=[{dx:-1,dy:0},{dx:1,dy:0},{dx:0,dy:-1},{dx:0,dy:1}],d=[];for(let{dx:x,dy:_}of A){const T=a+x,V=f+_;if(T>0&&T<C&&V>0&&V<C&&s[T][V]===u){const I=U(T,V,u);m(I)&&(d.push(...I),N(I))}}return d}function U(a,f,u,A=new Set){const d=[],x=[{x:a,y:f}];A.add(`${a},${f}`);const _=[{dx:-1,dy:0},{dx:1,dy:0},{dx:0,dy:-1},{dx:0,dy:1}];for(;x.length>0;){const{x:T,y:V}=x.pop();d.push({x:T,y:V,stone:s[T][V]});for(let{dx:I,dy:c}of _){const w=T+I,r=V+c;w>0&&w<C&&r>0&&r<C&&s[w][r]===u&&!A.has(`${w},${r}`)&&(A.add(`${w},${r}`),x.push({x:w,y:r}))}}return d}function m(a){const f=[{dx:-1,dy:0},{dx:1,dy:0},{dx:0,dy:-1},{dx:0,dy:1}];for(let{x:u,y:A}of a)for(let{dx:d,dy:x}of f){const _=u+d,T=A+x;if(!(u===1&&d===-1)&&!(u===C-2&&d===1)&&!(A===1&&x===-1)&&!(A===C-2&&x===1)&&(_<=0||_>=C||T<=0||T>=C||s[_][T]===null))return!1}return!0}function N(a){for(let{x:f,y:u}of a)t(1,s[f][u]=null,s)}function L(){t(1,s=Array(C).fill().map(()=>Array(C).fill(null))),t(2,k=Array(C).fill().map(()=>Array(C).fill(null))),i=0}function Y(){t(0,n="white"),o="white"}function $(){t(0,n="black"),o="black"}function Q(){t(0,n="alternate")}function P(){let a=prompt("파일 이름을 입력하세요:","kibo.json");a||(a="kibo.json");const u=JSON.stringify({board:s,history:R,moveHistory:k,moveCount:i}),A=new Blob([u],{type:"application/json"}),d=URL.createObjectURL(A),x=document.createElement("a");x.href=d,x.download=a,x.click(),URL.revokeObjectURL(d)}function ee(a){const f=a.target.files[0],u=new FileReader;u.onload=function(A){const d=JSON.parse(A.target.result);t(1,s=d.board),R=d.history,t(2,k=d.moveHistory),i=d.moveCount},u.readAsText(f)}return[n,s,k,g,q,S,y,b,L,Y,$,Q,P,ee,(a,f,u)=>u.x===a+1&&u.y===f+1,(a,f)=>y(a+1,f+1),(a,f,u)=>{u.key==="Enter"&&y(a+1,f+1)}]}class Ue extends ke{constructor(e){super(),me(this,e,De,Ce,ve,{},null,[-1,-1])}}export{Ue as component};
