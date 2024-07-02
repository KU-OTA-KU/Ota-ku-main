import{s as nt,u as Q,a as rt,n as st,d as He,r as ot,i as Y,c as N,h as qe,p as ae,b as ct,w as it}from"./@vue.299c8f2a.js";/*!
  * vue-router v4.4.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const z=typeof document<"u";function at(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const P=Object.assign;function le(e,t){const n={};for(const r in t){const s=t[r];n[r]=L(s)?s.map(e):e(s)}return n}const W=()=>{},L=Array.isArray,ze=/#/g,lt=/&/g,ut=/\//g,ft=/=/g,ht=/\?/g,Ge=/\+/g,dt=/%5B/g,pt=/%5D/g,Ke=/%5E/g,mt=/%60/g,Ve=/%7B/g,gt=/%7C/g,Ue=/%7D/g,vt=/%20/g;function me(e){return encodeURI(""+e).replace(gt,"|").replace(dt,"[").replace(pt,"]")}function yt(e){return me(e).replace(Ve,"{").replace(Ue,"}").replace(Ke,"^")}function he(e){return me(e).replace(Ge,"%2B").replace(vt,"+").replace(ze,"%23").replace(lt,"%26").replace(mt,"`").replace(Ve,"{").replace(Ue,"}").replace(Ke,"^")}function Rt(e){return he(e).replace(ft,"%3D")}function Et(e){return me(e).replace(ze,"%23").replace(ht,"%3F")}function wt(e){return e==null?"":Et(e).replace(ut,"%2F")}function X(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const Pt=/\/$/,St=e=>e.replace(Pt,"");function ue(e,t,n="/"){let r,s={},a="",p="";const g=t.indexOf("#");let c=t.indexOf("?");return g<c&&g>=0&&(c=-1),c>-1&&(r=t.slice(0,c),a=t.slice(c+1,g>-1?g:t.length),s=e(a)),g>-1&&(r=r||t.slice(0,g),p=t.slice(g,t.length)),r=At(r!=null?r:t,n),{fullPath:r+(a&&"?")+a+p,path:r,query:s,hash:X(p)}}function bt(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Se(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function kt(e,t,n){const r=t.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&G(t.matched[r],n.matched[s])&&De(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function G(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function De(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Ct(e[n],t[n]))return!1;return!0}function Ct(e,t){return L(e)?be(e,t):L(t)?be(t,e):e===t}function be(e,t){return L(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function At(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let a=n.length-1,p,g;for(p=0;p<r.length;p++)if(g=r[p],g!==".")if(g==="..")a>1&&a--;else break;return n.slice(0,a).join("/")+"/"+r.slice(p).join("/")}const j={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Z;(function(e){e.pop="pop",e.push="push"})(Z||(Z={}));var F;(function(e){e.back="back",e.forward="forward",e.unknown=""})(F||(F={}));function _t(e){if(!e)if(z){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),St(e)}const Ot=/^[^#]+#/;function xt(e,t){return e.replace(Ot,"#")+t}function Mt(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const te=()=>({left:window.scrollX,top:window.scrollY});function It(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=Mt(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function ke(e,t){return(history.state?history.state.position-t:-1)+e}const de=new Map;function Lt(e,t){de.set(e,t)}function Nt(e){const t=de.get(e);return de.delete(e),t}let Tt=()=>location.protocol+"//"+location.host;function Qe(e,t){const{pathname:n,search:r,hash:s}=t,a=e.indexOf("#");if(a>-1){let g=s.includes(e.slice(a))?e.slice(a).length:1,c=s.slice(g);return c[0]!=="/"&&(c="/"+c),Se(c,"")}return Se(n,e)+r+s}function $t(e,t,n,r){let s=[],a=[],p=null;const g=({state:l})=>{const u=Qe(e,location),w=n.value,S=t.value;let C=0;if(l){if(n.value=u,t.value=l,p&&p===w){p=null;return}C=S?l.position-S.position:0}else r(u);s.forEach(A=>{A(n.value,w,{delta:C,type:Z.pop,direction:C?C>0?F.forward:F.back:F.unknown})})};function c(){p=n.value}function f(l){s.push(l);const u=()=>{const w=s.indexOf(l);w>-1&&s.splice(w,1)};return a.push(u),u}function h(){const{history:l}=window;!l.state||l.replaceState(P({},l.state,{scroll:te()}),"")}function i(){for(const l of a)l();a=[],window.removeEventListener("popstate",g),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",g),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:c,listen:f,destroy:i}}function Ce(e,t,n,r=!1,s=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:s?te():null}}function jt(e){const{history:t,location:n}=window,r={value:Qe(e,n)},s={value:t.state};s.value||a(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function a(c,f,h){const i=e.indexOf("#"),l=i>-1?(n.host&&document.querySelector("base")?e:e.slice(i))+c:Tt()+e+c;try{t[h?"replaceState":"pushState"](f,"",l),s.value=f}catch(u){console.error(u),n[h?"replace":"assign"](l)}}function p(c,f){const h=P({},t.state,Ce(s.value.back,c,s.value.forward,!0),f,{position:s.value.position});a(c,h,!0),r.value=c}function g(c,f){const h=P({},s.value,t.state,{forward:c,scroll:te()});a(h.current,h,!0);const i=P({},Ce(r.value,c,null),{position:h.position+1},f);a(c,i,!1),r.value=c}return{location:r,state:s,push:g,replace:p}}function hn(e){e=_t(e);const t=jt(e),n=$t(e,t.state,t.location,t.replace);function r(a,p=!0){p||n.pauseListeners(),history.go(a)}const s=P({location:"",base:e,go:r,createHref:xt.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function Bt(e){return typeof e=="string"||e&&typeof e=="object"}function We(e){return typeof e=="string"||typeof e=="symbol"}const Fe=Symbol("");var Ae;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Ae||(Ae={}));function K(e,t){return P(new Error,{type:e,[Fe]:!0},t)}function T(e,t){return e instanceof Error&&Fe in e&&(t==null||!!(e.type&t))}const _e="[^/]+?",Ht={sensitive:!1,strict:!1,start:!0,end:!0},qt=/[.+*?^${}()[\]/\\]/g;function zt(e,t){const n=P({},Ht,t),r=[];let s=n.start?"^":"";const a=[];for(const f of e){const h=f.length?[]:[90];n.strict&&!f.length&&(s+="/");for(let i=0;i<f.length;i++){const l=f[i];let u=40+(n.sensitive?.25:0);if(l.type===0)i||(s+="/"),s+=l.value.replace(qt,"\\$&"),u+=40;else if(l.type===1){const{value:w,repeatable:S,optional:C,regexp:A}=l;a.push({name:w,repeatable:S,optional:C});const E=A||_e;if(E!==_e){u+=10;try{new RegExp(`(${E})`)}catch(I){throw new Error(`Invalid custom RegExp for param "${w}" (${E}): `+I.message)}}let b=S?`((?:${E})(?:/(?:${E}))*)`:`(${E})`;i||(b=C&&f.length<2?`(?:/${b})`:"/"+b),C&&(b+="?"),s+=b,u+=20,C&&(u+=-8),S&&(u+=-20),E===".*"&&(u+=-50)}h.push(u)}r.push(h)}if(n.strict&&n.end){const f=r.length-1;r[f][r[f].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const p=new RegExp(s,n.sensitive?"":"i");function g(f){const h=f.match(p),i={};if(!h)return null;for(let l=1;l<h.length;l++){const u=h[l]||"",w=a[l-1];i[w.name]=u&&w.repeatable?u.split("/"):u}return i}function c(f){let h="",i=!1;for(const l of e){(!i||!h.endsWith("/"))&&(h+="/"),i=!1;for(const u of l)if(u.type===0)h+=u.value;else if(u.type===1){const{value:w,repeatable:S,optional:C}=u,A=w in f?f[w]:"";if(L(A)&&!S)throw new Error(`Provided param "${w}" is an array but it is not repeatable (* or + modifiers)`);const E=L(A)?A.join("/"):A;if(!E)if(C)l.length<2&&(h.endsWith("/")?h=h.slice(0,-1):i=!0);else throw new Error(`Missing required param "${w}"`);h+=E}}return h||"/"}return{re:p,score:r,keys:a,parse:g,stringify:c}}function Gt(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function Ye(e,t){let n=0;const r=e.score,s=t.score;for(;n<r.length&&n<s.length;){const a=Gt(r[n],s[n]);if(a)return a;n++}if(Math.abs(s.length-r.length)===1){if(Oe(r))return 1;if(Oe(s))return-1}return s.length-r.length}function Oe(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Kt={type:0,value:""},Vt=/[a-zA-Z0-9_]/;function Ut(e){if(!e)return[[]];if(e==="/")return[[Kt]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(u){throw new Error(`ERR (${n})/"${f}": ${u}`)}let n=0,r=n;const s=[];let a;function p(){a&&s.push(a),a=[]}let g=0,c,f="",h="";function i(){!f||(n===0?a.push({type:0,value:f}):n===1||n===2||n===3?(a.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),a.push({type:1,value:f,regexp:h,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),f="")}function l(){f+=c}for(;g<e.length;){if(c=e[g++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(f&&i(),p()):c===":"?(i(),n=1):l();break;case 4:l(),n=r;break;case 1:c==="("?n=2:Vt.test(c)?l():(i(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&g--);break;case 2:c===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+c:n=3:h+=c;break;case 3:i(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&g--,h="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${f}"`),i(),p(),s}function Dt(e,t,n){const r=zt(Ut(e.path),n),s=P(r,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function Qt(e,t){const n=[],r=new Map;t=Ie({strict:!1,end:!0,sensitive:!1},t);function s(i){return r.get(i)}function a(i,l,u){const w=!u,S=Wt(i);S.aliasOf=u&&u.record;const C=Ie(t,i),A=[S];if("alias"in i){const I=typeof i.alias=="string"?[i.alias]:i.alias;for(const H of I)A.push(P({},S,{components:u?u.record.components:S.components,path:H,aliasOf:u?u.record:S}))}let E,b;for(const I of A){const{path:H}=I;if(l&&H[0]!=="/"){const $=l.record.path,M=$[$.length-1]==="/"?"":"/";I.path=l.record.path+(H&&M+H)}if(E=Dt(I,l,C),u?u.alias.push(E):(b=b||E,b!==E&&b.alias.push(E),w&&i.name&&!Me(E)&&p(i.name)),Xe(E)&&c(E),S.children){const $=S.children;for(let M=0;M<$.length;M++)a($[M],E,u&&u.children[M])}u=u||E}return b?()=>{p(b)}:W}function p(i){if(We(i)){const l=r.get(i);l&&(r.delete(i),n.splice(n.indexOf(l),1),l.children.forEach(p),l.alias.forEach(p))}else{const l=n.indexOf(i);l>-1&&(n.splice(l,1),i.record.name&&r.delete(i.record.name),i.children.forEach(p),i.alias.forEach(p))}}function g(){return n}function c(i){const l=Xt(i,n);n.splice(l,0,i),i.record.name&&!Me(i)&&r.set(i.record.name,i)}function f(i,l){let u,w={},S,C;if("name"in i&&i.name){if(u=r.get(i.name),!u)throw K(1,{location:i});C=u.record.name,w=P(xe(l.params,u.keys.filter(b=>!b.optional).concat(u.parent?u.parent.keys.filter(b=>b.optional):[]).map(b=>b.name)),i.params&&xe(i.params,u.keys.map(b=>b.name))),S=u.stringify(w)}else if(i.path!=null)S=i.path,u=n.find(b=>b.re.test(S)),u&&(w=u.parse(S),C=u.record.name);else{if(u=l.name?r.get(l.name):n.find(b=>b.re.test(l.path)),!u)throw K(1,{location:i,currentLocation:l});C=u.record.name,w=P({},l.params,i.params),S=u.stringify(w)}const A=[];let E=u;for(;E;)A.unshift(E.record),E=E.parent;return{name:C,path:S,params:w,matched:A,meta:Yt(A)}}e.forEach(i=>a(i));function h(){n.length=0,r.clear()}return{addRoute:a,resolve:f,removeRoute:p,clearRoutes:h,getRoutes:g,getRecordMatcher:s}}function xe(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Wt(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Ft(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Ft(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function Me(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Yt(e){return e.reduce((t,n)=>P(t,n.meta),{})}function Ie(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function Xt(e,t){let n=0,r=t.length;for(;n!==r;){const a=n+r>>1;Ye(e,t[a])<0?r=a:n=a+1}const s=Zt(e);return s&&(r=t.lastIndexOf(s,r-1)),r}function Zt(e){let t=e;for(;t=t.parent;)if(Xe(t)&&Ye(e,t)===0)return t}function Xe({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Jt(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<r.length;++s){const a=r[s].replace(Ge," "),p=a.indexOf("="),g=X(p<0?a:a.slice(0,p)),c=p<0?null:X(a.slice(p+1));if(g in t){let f=t[g];L(f)||(f=t[g]=[f]),f.push(c)}else t[g]=c}return t}function Le(e){let t="";for(let n in e){const r=e[n];if(n=Rt(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(L(r)?r.map(a=>a&&he(a)):[r&&he(r)]).forEach(a=>{a!==void 0&&(t+=(t.length?"&":"")+n,a!=null&&(t+="="+a))})}return t}function en(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=L(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return t}const tn=Symbol(""),Ne=Symbol(""),ge=Symbol(""),Ze=Symbol(""),pe=Symbol("");function D(){let e=[];function t(r){return e.push(r),()=>{const s=e.indexOf(r);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function B(e,t,n,r,s,a=p=>p()){const p=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((g,c)=>{const f=l=>{l===!1?c(K(4,{from:n,to:t})):l instanceof Error?c(l):Bt(l)?c(K(2,{from:t,to:l})):(p&&r.enterCallbacks[s]===p&&typeof l=="function"&&p.push(l),g())},h=a(()=>e.call(r&&r.instances[s],t,n,f));let i=Promise.resolve(h);e.length<3&&(i=i.then(f)),i.catch(l=>c(l))})}function fe(e,t,n,r,s=a=>a()){const a=[];for(const p of e)for(const g in p.components){let c=p.components[g];if(!(t!=="beforeRouteEnter"&&!p.instances[g]))if(nn(c)){const h=(c.__vccOpts||c)[t];h&&a.push(B(h,n,r,p,g,s))}else{let f=c();a.push(()=>f.then(h=>{if(!h)return Promise.reject(new Error(`Couldn't resolve component "${g}" at "${p.path}"`));const i=at(h)?h.default:h;p.components[g]=i;const u=(i.__vccOpts||i)[t];return u&&B(u,n,r,p,g,s)()}))}}return a}function nn(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Te(e){const t=Y(ge),n=Y(Ze),r=N(()=>{const c=Q(e.to);return t.resolve(c)}),s=N(()=>{const{matched:c}=r.value,{length:f}=c,h=c[f-1],i=n.matched;if(!h||!i.length)return-1;const l=i.findIndex(G.bind(null,h));if(l>-1)return l;const u=$e(c[f-2]);return f>1&&$e(h)===u&&i[i.length-1].path!==u?i.findIndex(G.bind(null,c[f-2])):l}),a=N(()=>s.value>-1&&cn(n.params,r.value.params)),p=N(()=>s.value>-1&&s.value===n.matched.length-1&&De(n.params,r.value.params));function g(c={}){return on(c)?t[Q(e.replace)?"replace":"push"](Q(e.to)).catch(W):Promise.resolve()}return{route:r,href:N(()=>r.value.href),isActive:a,isExactActive:p,navigate:g}}const rn=He({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Te,setup(e,{slots:t}){const n=ot(Te(e)),{options:r}=Y(ge),s=N(()=>({[je(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[je(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const a=t.default&&t.default(n);return e.custom?a:qe("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},a)}}}),sn=rn;function on(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function cn(e,t){for(const n in t){const r=t[n],s=e[n];if(typeof r=="string"){if(r!==s)return!1}else if(!L(s)||s.length!==r.length||r.some((a,p)=>a!==s[p]))return!1}return!0}function $e(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const je=(e,t,n)=>e!=null?e:t!=null?t:n,an=He({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=Y(pe),s=N(()=>e.route||r.value),a=Y(Ne,0),p=N(()=>{let f=Q(a);const{matched:h}=s.value;let i;for(;(i=h[f])&&!i.components;)f++;return f}),g=N(()=>s.value.matched[p.value]);ae(Ne,N(()=>p.value+1)),ae(tn,g),ae(pe,s);const c=ct();return it(()=>[c.value,g.value,e.name],([f,h,i],[l,u,w])=>{h&&(h.instances[i]=f,u&&u!==h&&f&&f===l&&(h.leaveGuards.size||(h.leaveGuards=u.leaveGuards),h.updateGuards.size||(h.updateGuards=u.updateGuards))),f&&h&&(!u||!G(h,u)||!l)&&(h.enterCallbacks[i]||[]).forEach(S=>S(f))},{flush:"post"}),()=>{const f=s.value,h=e.name,i=g.value,l=i&&i.components[h];if(!l)return Be(n.default,{Component:l,route:f});const u=i.props[h],w=u?u===!0?f.params:typeof u=="function"?u(f):u:null,C=qe(l,P({},w,t,{onVnodeUnmounted:A=>{A.component.isUnmounted&&(i.instances[h]=null)},ref:c}));return Be(n.default,{Component:C,route:f})||C}}});function Be(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const ln=an;function dn(e){const t=Qt(e.routes,e),n=e.parseQuery||Jt,r=e.stringifyQuery||Le,s=e.history,a=D(),p=D(),g=D(),c=nt(j);let f=j;z&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=le.bind(null,o=>""+o),i=le.bind(null,wt),l=le.bind(null,X);function u(o,m){let d,v;return We(o)?(d=t.getRecordMatcher(o),v=m):v=o,t.addRoute(v,d)}function w(o){const m=t.getRecordMatcher(o);m&&t.removeRoute(m)}function S(){return t.getRoutes().map(o=>o.record)}function C(o){return!!t.getRecordMatcher(o)}function A(o,m){if(m=P({},m||c.value),typeof o=="string"){const y=ue(n,o,m.path),O=t.resolve({path:y.path},m),U=s.createHref(y.fullPath);return P(y,O,{params:l(O.params),hash:X(y.hash),redirectedFrom:void 0,href:U})}let d;if(o.path!=null)d=P({},o,{path:ue(n,o.path,m.path).path});else{const y=P({},o.params);for(const O in y)y[O]==null&&delete y[O];d=P({},o,{params:i(y)}),m.params=i(m.params)}const v=t.resolve(d,m),k=o.hash||"";v.params=h(l(v.params));const _=bt(r,P({},o,{hash:yt(k),path:v.path})),R=s.createHref(_);return P({fullPath:_,hash:k,query:r===Le?en(o.query):o.query||{}},v,{redirectedFrom:void 0,href:R})}function E(o){return typeof o=="string"?ue(n,o,c.value.path):P({},o)}function b(o,m){if(f!==o)return K(8,{from:m,to:o})}function I(o){return M(o)}function H(o){return I(P(E(o),{replace:!0}))}function $(o){const m=o.matched[o.matched.length-1];if(m&&m.redirect){const{redirect:d}=m;let v=typeof d=="function"?d(o):d;return typeof v=="string"&&(v=v.includes("?")||v.includes("#")?v=E(v):{path:v},v.params={}),P({query:o.query,hash:o.hash,params:v.path!=null?{}:o.params},v)}}function M(o,m){const d=f=A(o),v=c.value,k=o.state,_=o.force,R=o.replace===!0,y=$(d);if(y)return M(P(E(y),{state:typeof y=="object"?P({},k,y.state):k,force:_,replace:R}),m||d);const O=d;O.redirectedFrom=m;let U;return!_&&kt(r,v,d)&&(U=K(16,{to:O,from:v}),we(v,v,!0,!1)),(U?Promise.resolve(U):ve(O,v)).catch(x=>T(x)?T(x,2)?x:oe(x):se(x,O,v)).then(x=>{if(x){if(T(x,2))return M(P({replace:R},E(x.to),{state:typeof x.to=="object"?P({},k,x.to.state):k,force:_}),m||O)}else x=Re(O,v,!0,R,k);return ye(O,v,x),x})}function Je(o,m){const d=b(o,m);return d?Promise.reject(d):Promise.resolve()}function ne(o){const m=ee.values().next().value;return m&&typeof m.runWithContext=="function"?m.runWithContext(o):o()}function ve(o,m){let d;const[v,k,_]=un(o,m);d=fe(v.reverse(),"beforeRouteLeave",o,m);for(const y of v)y.leaveGuards.forEach(O=>{d.push(B(O,o,m))});const R=Je.bind(null,o,m);return d.push(R),q(d).then(()=>{d=[];for(const y of a.list())d.push(B(y,o,m));return d.push(R),q(d)}).then(()=>{d=fe(k,"beforeRouteUpdate",o,m);for(const y of k)y.updateGuards.forEach(O=>{d.push(B(O,o,m))});return d.push(R),q(d)}).then(()=>{d=[];for(const y of _)if(y.beforeEnter)if(L(y.beforeEnter))for(const O of y.beforeEnter)d.push(B(O,o,m));else d.push(B(y.beforeEnter,o,m));return d.push(R),q(d)}).then(()=>(o.matched.forEach(y=>y.enterCallbacks={}),d=fe(_,"beforeRouteEnter",o,m,ne),d.push(R),q(d))).then(()=>{d=[];for(const y of p.list())d.push(B(y,o,m));return d.push(R),q(d)}).catch(y=>T(y,8)?y:Promise.reject(y))}function ye(o,m,d){g.list().forEach(v=>ne(()=>v(o,m,d)))}function Re(o,m,d,v,k){const _=b(o,m);if(_)return _;const R=m===j,y=z?history.state:{};d&&(v||R?s.replace(o.fullPath,P({scroll:R&&y&&y.scroll},k)):s.push(o.fullPath,k)),c.value=o,we(o,m,d,R),oe()}let V;function et(){V||(V=s.listen((o,m,d)=>{if(!Pe.listening)return;const v=A(o),k=$(v);if(k){M(P(k,{replace:!0}),v).catch(W);return}f=v;const _=c.value;z&&Lt(ke(_.fullPath,d.delta),te()),ve(v,_).catch(R=>T(R,12)?R:T(R,2)?(M(R.to,v).then(y=>{T(y,20)&&!d.delta&&d.type===Z.pop&&s.go(-1,!1)}).catch(W),Promise.reject()):(d.delta&&s.go(-d.delta,!1),se(R,v,_))).then(R=>{R=R||Re(v,_,!1),R&&(d.delta&&!T(R,8)?s.go(-d.delta,!1):d.type===Z.pop&&T(R,20)&&s.go(-1,!1)),ye(v,_,R)}).catch(W)}))}let re=D(),Ee=D(),J;function se(o,m,d){oe(o);const v=Ee.list();return v.length?v.forEach(k=>k(o,m,d)):console.error(o),Promise.reject(o)}function tt(){return J&&c.value!==j?Promise.resolve():new Promise((o,m)=>{re.add([o,m])})}function oe(o){return J||(J=!o,et(),re.list().forEach(([m,d])=>o?d(o):m()),re.reset()),o}function we(o,m,d,v){const{scrollBehavior:k}=e;if(!z||!k)return Promise.resolve();const _=!d&&Nt(ke(o.fullPath,0))||(v||!d)&&history.state&&history.state.scroll||null;return st().then(()=>k(o,m,_)).then(R=>R&&It(R)).catch(R=>se(R,o,m))}const ce=o=>s.go(o);let ie;const ee=new Set,Pe={currentRoute:c,listening:!0,addRoute:u,removeRoute:w,clearRoutes:t.clearRoutes,hasRoute:C,getRoutes:S,resolve:A,options:e,push:I,replace:H,go:ce,back:()=>ce(-1),forward:()=>ce(1),beforeEach:a.add,beforeResolve:p.add,afterEach:g.add,onError:Ee.add,isReady:tt,install(o){const m=this;o.component("RouterLink",sn),o.component("RouterView",ln),o.config.globalProperties.$router=m,Object.defineProperty(o.config.globalProperties,"$route",{enumerable:!0,get:()=>Q(c)}),z&&!ie&&c.value===j&&(ie=!0,I(s.location).catch(k=>{}));const d={};for(const k in j)Object.defineProperty(d,k,{get:()=>c.value[k],enumerable:!0});o.provide(ge,m),o.provide(Ze,rt(d)),o.provide(pe,c);const v=o.unmount;ee.add(o),o.unmount=function(){ee.delete(o),ee.size<1&&(f=j,V&&V(),V=null,c.value=j,ie=!1,J=!1),v()}}};function q(o){return o.reduce((m,d)=>m.then(()=>ne(d)),Promise.resolve())}return Pe}function un(e,t){const n=[],r=[],s=[],a=Math.max(t.matched.length,e.matched.length);for(let p=0;p<a;p++){const g=t.matched[p];g&&(e.matched.find(f=>G(f,g))?r.push(g):n.push(g));const c=e.matched[p];c&&(t.matched.find(f=>G(f,c))||s.push(c))}return[n,r,s]}export{hn as a,dn as c};
