import{D as ae,T as J,Y as se,d as N,E as te,i as K,c as D,k as I,l as q,p as O,m as k,s as m,f as e,q as ne,a5 as M,a6 as E,aa as _,ad as re,a1 as ie,B as j,C as X,_ as Q,bD as de,X as G,U as W,al as ue,bv as ce,e as H,y as w,bE as fe,aH as ve,w as Y,n as ye,z as pe,b as me,bF as ge,bG as Z,L as be,aF as Ce,ao as he,u as Ee,a2 as ke,j as we,bu as De,bH as Fe,v as Be,aL as Ie,bw as Te,ag as Ae}from"./index-DdIp2ATX.js";import{u as Se,a as $e,E as Le,b as Pe}from"./el-overlay-BddMkEe_.js";import{F as Re,k as Oe}from"./el-input-CHcDLTp6.js";import{i as Me}from"./isUndefined-DCTLXrZ8.js";const Ne=(...o)=>a=>{o.forEach(r=>{ae(r)?r(a):r.value=a})},x=Symbol("dialogInjectionKey"),ee=J({center:Boolean,alignCenter:Boolean,closeIcon:{type:se},draggable:Boolean,overflow:Boolean,fullscreen:Boolean,showClose:{type:Boolean,default:!0},title:{type:String,default:""},ariaLevel:{type:String,default:"2"}}),ze={close:()=>!0},Ve=["aria-level"],Ue=["aria-label"],qe=["id"],_e=N({name:"ElDialogContent"}),je=N({..._e,props:ee,emits:ze,setup(o){const a=o,{t:r}=te(),{Close:S}=de,{dialogRef:n,headerRef:c,bodyId:F,ns:t,style:g}=K(x),{focusTrapRef:i}=K(Re),f=D(()=>[t.b(),t.is("fullscreen",a.fullscreen),t.is("draggable",a.draggable),t.is("align-center",a.alignCenter),{[t.m("center")]:a.center}]),v=Ne(i,n),b=D(()=>a.draggable),u=D(()=>a.overflow);return Se(n,c,b,u),(s,B)=>(I(),q("div",{ref:e(v),class:m(e(f)),style:X(e(g)),tabindex:"-1"},[O("header",{ref_key:"headerRef",ref:c,class:m([e(t).e("header"),{"show-close":s.showClose}])},[k(s.$slots,"header",{},()=>[O("span",{role:"heading","aria-level":s.ariaLevel,class:m(e(t).e("title"))},ne(s.title),11,Ve)]),s.showClose?(I(),q("button",{key:0,"aria-label":e(r)("el.dialog.close"),class:m(e(t).e("headerbtn")),type:"button",onClick:B[0]||(B[0]=$=>s.$emit("close"))},[M(e(ie),{class:m(e(t).e("close"))},{default:E(()=>[(I(),_(re(s.closeIcon||e(S))))]),_:1},8,["class"])],10,Ue)):j("v-if",!0)],2),O("div",{id:e(F),class:m(e(t).e("body"))},[k(s.$slots,"default")],10,qe),s.$slots.footer?(I(),q("footer",{key:0,class:m(e(t).e("footer"))},[k(s.$slots,"footer")],2)):j("v-if",!0)],6))}});var Ke=Q(je,[["__file","dialog-content.vue"]]);const Ge=J({...ee,appendToBody:Boolean,appendTo:{type:G(String),default:"body"},beforeClose:{type:G(Function)},destroyOnClose:Boolean,closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},modal:{type:Boolean,default:!0},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},top:{type:String},modelValue:Boolean,modalClass:String,width:{type:[String,Number]},zIndex:{type:Number},trapFocus:{type:Boolean,default:!1},headerAriaLevel:{type:String,default:"2"}}),He={open:()=>!0,opened:()=>!0,close:()=>!0,closed:()=>!0,[W]:o=>ue(o),openAutoFocus:()=>!0,closeAutoFocus:()=>!0},Ye=(o,a)=>{var r;const n=me().emit,{nextZIndex:c}=ce();let F="";const t=H(),g=H(),i=w(!1),f=w(!1),v=w(!1),b=w((r=o.zIndex)!=null?r:c());let u,s;const B=fe("namespace",ge),$=D(()=>{const d={},h=`--${B.value}-dialog`;return o.fullscreen||(o.top&&(d[`${h}-margin-top`]=o.top),o.width&&(d[`${h}-width`]=ve(o.width))),d}),z=D(()=>o.alignCenter?{display:"flex"}:{});function L(){n("opened")}function V(){n("closed"),n(W,!1),o.destroyOnClose&&(v.value=!1)}function U(){n("close")}function P(){s==null||s(),u==null||u(),o.openDelay&&o.openDelay>0?{stop:u}=Z(()=>R(),o.openDelay):R()}function T(){u==null||u(),s==null||s(),o.closeDelay&&o.closeDelay>0?{stop:s}=Z(()=>l(),o.closeDelay):l()}function A(){function d(h){h||(f.value=!0,i.value=!1)}o.beforeClose?o.beforeClose(d):T()}function y(){o.closeOnClickModal&&A()}function R(){be&&(i.value=!0)}function l(){i.value=!1}function p(){n("openAutoFocus")}function C(){n("closeAutoFocus")}function oe(d){var h;((h=d.detail)==null?void 0:h.focusReason)==="pointer"&&d.preventDefault()}o.lockScroll&&$e(i);function le(){o.closeOnPressEscape&&A()}return Y(()=>o.modelValue,d=>{d?(f.value=!1,P(),v.value=!0,b.value=Me(o.zIndex)?c():b.value++,ye(()=>{n("open"),a.value&&(a.value.scrollTop=0)})):i.value&&T()}),Y(()=>o.fullscreen,d=>{a.value&&(d?(F=a.value.style.transform,a.value.style.transform=""):a.value.style.transform=F)}),pe(()=>{o.modelValue&&(i.value=!0,v.value=!0,P())}),{afterEnter:L,afterLeave:V,beforeLeave:U,handleClose:A,onModalClick:y,close:T,doClose:l,onOpenAutoFocus:p,onCloseAutoFocus:C,onCloseRequested:le,onFocusoutPrevented:oe,titleId:t,bodyId:g,closed:f,style:$,overlayDialogStyle:z,rendered:v,visible:i,zIndex:b}},Ze=["aria-label","aria-labelledby","aria-describedby"],Je=N({name:"ElDialog",inheritAttrs:!1}),Xe=N({...Je,props:Ge,emits:He,setup(o,{expose:a}){const r=o,S=Ce();he({scope:"el-dialog",from:"the title slot",replacement:"the header slot",version:"3.0.0",ref:"https://element-plus.org/en-US/component/dialog.html#slots"},D(()=>!!S.title));const n=Ee("dialog"),c=w(),F=w(),t=w(),{visible:g,titleId:i,bodyId:f,style:v,overlayDialogStyle:b,rendered:u,zIndex:s,afterEnter:B,afterLeave:$,beforeLeave:z,handleClose:L,onModalClick:V,onOpenAutoFocus:U,onCloseAutoFocus:P,onCloseRequested:T,onFocusoutPrevented:A}=Ye(r,c);ke(x,{dialogRef:c,headerRef:F,bodyId:f,ns:n,rendered:u,style:v});const y=Pe(V),R=D(()=>r.draggable&&!r.fullscreen);return a({visible:g,dialogContentRef:t}),(l,p)=>(I(),_(Te,{to:l.appendTo,disabled:l.appendTo!=="body"?!1:!l.appendToBody},[M(Ie,{name:"dialog-fade",onAfterEnter:e(B),onAfterLeave:e($),onBeforeLeave:e(z),persisted:""},{default:E(()=>[we(M(e(Le),{"custom-mask-event":"",mask:l.modal,"overlay-class":l.modalClass,"z-index":e(s)},{default:E(()=>[O("div",{role:"dialog","aria-modal":"true","aria-label":l.title||void 0,"aria-labelledby":l.title?void 0:e(i),"aria-describedby":e(f),class:m(`${e(n).namespace.value}-overlay-dialog`),style:X(e(b)),onClick:p[0]||(p[0]=(...C)=>e(y).onClick&&e(y).onClick(...C)),onMousedown:p[1]||(p[1]=(...C)=>e(y).onMousedown&&e(y).onMousedown(...C)),onMouseup:p[2]||(p[2]=(...C)=>e(y).onMouseup&&e(y).onMouseup(...C))},[M(e(Oe),{loop:"",trapped:e(g),"focus-start-el":"container",onFocusAfterTrapped:e(U),onFocusAfterReleased:e(P),onFocusoutPrevented:e(A),onReleaseRequested:e(T)},{default:E(()=>[e(u)?(I(),_(Ke,De({key:0,ref_key:"dialogContentRef",ref:t},l.$attrs,{center:l.center,"align-center":l.alignCenter,"close-icon":l.closeIcon,draggable:e(R),overflow:l.overflow,fullscreen:l.fullscreen,"show-close":l.showClose,title:l.title,"aria-level":l.headerAriaLevel,onClose:e(L)}),Fe({header:E(()=>[l.$slots.title?k(l.$slots,"title",{key:1}):k(l.$slots,"header",{key:0,close:e(L),titleId:e(i),titleClass:e(n).e("title")})]),default:E(()=>[k(l.$slots,"default")]),_:2},[l.$slots.footer?{name:"footer",fn:E(()=>[k(l.$slots,"footer")])}:void 0]),1040,["center","align-center","close-icon","draggable","overflow","fullscreen","show-close","title","aria-level","onClose"])):j("v-if",!0)]),_:3},8,["trapped","onFocusAfterTrapped","onFocusAfterReleased","onFocusoutPrevented","onReleaseRequested"])],46,Ze)]),_:3},8,["mask","overlay-class","z-index"]),[[Be,e(g)]])]),_:3},8,["onAfterEnter","onAfterLeave","onBeforeLeave"])],8,["to","disabled"]))}});var Qe=Q(Xe,[["__file","dialog.vue"]]);const lo=Ae(Qe);export{lo as E};
