import{T as g,d as f,u as _,c as n,a2 as R,k as $,aa as h,a6 as v,m as w,s as N,f as c,C as j,ad as C,_ as x,ag as E,X as u,bI as r,i as S,N as b,a as K}from"./index-DdIp2ATX.js";const O=Symbol("rowContextKey"),k=["start","center","end","space-around","space-between","space-evenly"],P=["top","middle","bottom"],B=g({tag:{type:String,default:"div"},gutter:{type:Number,default:0},justify:{type:String,values:k,default:"start"},align:{type:String,values:P}}),I=f({name:"ElRow"}),L=f({...I,props:B,setup(p){const e=p,l=_("row"),a=n(()=>e.gutter);R(O,{gutter:a});const i=n(()=>{const t={};return e.gutter&&(t.marginRight=t.marginLeft=`-${e.gutter/2}px`),t}),d=n(()=>[l.b(),l.is(`justify-${e.justify}`,e.justify!=="start"),l.is(`align-${e.align}`,!!e.align)]);return(t,m)=>($(),h(C(t.tag),{class:N(c(d)),style:j(c(i))},{default:v(()=>[w(t.$slots,"default")]),_:3},8,["class","style"]))}});var T=x(L,[["__file","row.vue"]]);const G=E(T),A=g({tag:{type:String,default:"div"},span:{type:Number,default:24},offset:{type:Number,default:0},pull:{type:Number,default:0},push:{type:Number,default:0},xs:{type:u([Number,Object]),default:()=>r({})},sm:{type:u([Number,Object]),default:()=>r({})},md:{type:u([Number,Object]),default:()=>r({})},lg:{type:u([Number,Object]),default:()=>r({})},xl:{type:u([Number,Object]),default:()=>r({})}}),D=f({name:"ElCol"}),J=f({...D,props:A,setup(p){const e=p,{gutter:l}=S(O,{gutter:n(()=>0)}),a=_("col"),i=n(()=>{const t={};return l.value&&(t.paddingLeft=t.paddingRight=`${l.value/2}px`),t}),d=n(()=>{const t=[];return["span","offset","pull","push"].forEach(s=>{const o=e[s];b(o)&&(s==="span"?t.push(a.b(`${e[s]}`)):o>0&&t.push(a.b(`${s}-${e[s]}`)))}),["xs","sm","md","lg","xl"].forEach(s=>{b(e[s])?t.push(a.b(`${s}-${e[s]}`)):K(e[s])&&Object.entries(e[s]).forEach(([o,y])=>{t.push(o!=="span"?a.b(`${s}-${o}-${y}`):a.b(`${s}-${y}`))})}),l.value&&t.push(a.is("guttered")),[a.b(),t]});return(t,m)=>($(),h(C(t.tag),{class:N(c(d)),style:j(c(i))},{default:v(()=>[w(t.$slots,"default")]),_:3},8,["class","style"]))}});var X=x(J,[["__file","col.vue"]]);const H=E(X);export{H as E,G as a};
