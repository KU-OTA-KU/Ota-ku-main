import{p as ee,I as H,e as te,bn as le,x as oe,aq as ne,g as se,ap as ae,aR as ie,ar as re,s as z,a as S,aQ as D,bo as ue,aV as q,w as ce,f as fe,h as g,bp as L,a2 as B,aD as ve}from"./index.2d5d37a1.js";function de(l){let{selectedElement:n,containerElement:o,isRtl:i,isHorizontal:v}=l;const d=b(v,o),a=$(v,i,o),p=b(v,n),c=K(v,n),x=p*.4;return a>c?c-x:a+d<c+p?c-d+p+x:a}function pe(l){let{selectedElement:n,containerElement:o,isHorizontal:i}=l;const v=b(i,o),d=K(i,n),a=b(i,n);return d-v/2+a/2}function N(l,n){const o=l?"scrollWidth":"scrollHeight";return(n==null?void 0:n[o])||0}function he(l,n){const o=l?"clientWidth":"clientHeight";return(n==null?void 0:n[o])||0}function $(l,n,o){if(!o)return 0;const{scrollLeft:i,offsetWidth:v,scrollWidth:d}=o;return l?n?d-v+i:i:o.scrollTop}function b(l,n){const o=l?"offsetWidth":"offsetHeight";return(n==null?void 0:n[o])||0}function K(l,n){const o=l?"offsetLeft":"offsetTop";return(n==null?void 0:n[o])||0}const ge=Symbol.for("vuetify:v-slide-group"),Se=ee({centerActive:Boolean,direction:{type:String,default:"horizontal"},symbol:{type:null,default:ge},nextIcon:{type:H,default:"$next"},prevIcon:{type:H,default:"$prev"},showArrows:{type:[Boolean,String],validator:l=>typeof l=="boolean"||["always","desktop","mobile"].includes(l)},...te(),...le({mobile:null}),...oe(),...ne({selectedClass:"v-slide-group-item--active"})},"VSlideGroup"),xe=se()({name:"VSlideGroup",props:Se(),emits:{"update:modelValue":l=>!0},setup(l,n){let{slots:o}=n;const{isRtl:i}=ae(),{displayClasses:v,mobile:d}=ie(l),a=re(l,l.symbol),p=z(!1),c=z(0),x=z(0),V=z(0),r=S(()=>l.direction==="horizontal"),{resizeRef:u,contentRect:w}=D(),{resizeRef:f,contentRect:R}=D(),_=ue(),A=S(()=>({container:u.el,duration:200,easing:"easeOutQuart"})),Q=S(()=>a.selected.value.length?a.items.value.findIndex(e=>e.id===a.selected.value[0]):-1),U=S(()=>a.selected.value.length?a.items.value.findIndex(e=>e.id===a.selected.value[a.selected.value.length-1]):-1);if(q){let e=-1;ce(()=>[a.selected.value,w.value,R.value,r.value],()=>{cancelAnimationFrame(e),e=requestAnimationFrame(()=>{if(w.value&&R.value){const t=r.value?"width":"height";x.value=w.value[t],V.value=R.value[t],p.value=x.value+1<V.value}if(Q.value>=0&&f.el){const t=f.el.children[U.value];C(t,l.centerActive)}})})}const k=z(!1);function C(e,t){let s=0;t?s=pe({containerElement:u.el,isHorizontal:r.value,selectedElement:e}):s=de({containerElement:u.el,isHorizontal:r.value,isRtl:i.value,selectedElement:e}),O(s)}function O(e){if(!q||!u.el)return;const t=b(r.value,u.el),s=$(r.value,i.value,u.el);if(!(N(r.value,u.el)<=t||Math.abs(e-s)<16)){if(r.value&&i.value&&u.el){const{scrollWidth:y,offsetWidth:P}=u.el;e=y-P-e}r.value?_.horizontal(e,A.value):_(e,A.value)}}function j(e){const{scrollTop:t,scrollLeft:s}=e.target;c.value=r.value?s:t}function J(e){if(k.value=!0,!(!p.value||!f.el)){for(const t of e.composedPath())for(const s of f.el.children)if(s===t){C(s);return}}}function X(e){k.value=!1}let E=!1;function Y(e){var t;!E&&!k.value&&!(e.relatedTarget&&((t=f.el)==null?void 0:t.contains(e.relatedTarget)))&&m(),E=!1}function W(){E=!0}function Z(e){if(!f.el)return;function t(s){e.preventDefault(),m(s)}r.value?e.key==="ArrowRight"?t(i.value?"prev":"next"):e.key==="ArrowLeft"&&t(i.value?"next":"prev"):e.key==="ArrowDown"?t("next"):e.key==="ArrowUp"&&t("prev"),e.key==="Home"?t("first"):e.key==="End"&&t("last")}function m(e){var s,h;if(!f.el)return;let t;if(!e)t=ve(f.el)[0];else if(e==="next"){if(t=(s=f.el.querySelector(":focus"))==null?void 0:s.nextElementSibling,!t)return m("first")}else if(e==="prev"){if(t=(h=f.el.querySelector(":focus"))==null?void 0:h.previousElementSibling,!t)return m("last")}else e==="first"?t=f.el.firstElementChild:e==="last"&&(t=f.el.lastElementChild);t&&t.focus({preventScroll:!0})}function T(e){const t=r.value&&i.value?-1:1,s=(e==="prev"?-t:t)*x.value;let h=c.value+s;if(r.value&&i.value&&u.el){const{scrollWidth:y,offsetWidth:P}=u.el;h+=y-P}O(h)}const F=S(()=>({next:a.next,prev:a.prev,select:a.select,isSelected:a.isSelected})),I=S(()=>{switch(l.showArrows){case"always":return!0;case"desktop":return!d.value;case!0:return p.value||Math.abs(c.value)>0;case"mobile":return d.value||p.value||Math.abs(c.value)>0;default:return!d.value&&(p.value||Math.abs(c.value)>0)}}),M=S(()=>Math.abs(c.value)>1),G=S(()=>{if(!u.value)return!1;const e=N(r.value,u.el),t=he(r.value,u.el);return e-t-Math.abs(c.value)>1});return fe(()=>g(l.tag,{class:["v-slide-group",{"v-slide-group--vertical":!r.value,"v-slide-group--has-affixes":I.value,"v-slide-group--is-overflowing":p.value},v.value,l.class],style:l.style,tabindex:k.value||a.selected.value.length?-1:0,onFocus:Y},{default:()=>{var e,t,s,h,y;return[I.value&&g("div",{key:"prev",class:["v-slide-group__prev",{"v-slide-group__prev--disabled":!M.value}],onMousedown:W,onClick:()=>M.value&&T("prev")},[(t=(e=o.prev)==null?void 0:e.call(o,F.value))!=null?t:g(L,null,{default:()=>[g(B,{icon:i.value?l.nextIcon:l.prevIcon},null)]})]),g("div",{key:"container",ref:u,class:"v-slide-group__container",onScroll:j},[g("div",{ref:f,class:"v-slide-group__content",onFocusin:J,onFocusout:X,onKeydown:Z},[(s=o.default)==null?void 0:s.call(o,F.value)])]),I.value&&g("div",{key:"next",class:["v-slide-group__next",{"v-slide-group__next--disabled":!G.value}],onMousedown:W,onClick:()=>G.value&&T("next")},[(y=(h=o.next)==null?void 0:h.call(o,F.value))!=null?y:g(L,null,{default:()=>[g(B,{icon:i.value?l.prevIcon:l.nextIcon},null)]})])]}})),{selected:a.selected,scrollTo:T,scrollOffset:c,focus:m}}});export{xe as V,ge as a,Se as m};