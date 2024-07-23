const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/CExceler-bImqDluD.js","assets/xlsx-CIVhsdtn.js"])))=>i.map(i=>d[i]);
import{aT as re,a2 as ce,aI as ue,aJ as ie,aK as fe,U as X,bq as de,V as pe,aS as V,bm as F,bj as S,Q as me,w as i,G as f,A as r,H as v,y as w,C as n,I as g,br as he,aB as y,aC as H,a6 as m,aL as G,bn as J,bi as ge,B as L,bs as _e,bo as ve,bp as ye}from"./index-CsR9PVny.js";import{E as we,a as be}from"./el-col-BsG2uQXY.js";import"./el-tooltip-l0sNRNKZ.js";/* empty css                  */import{E as Q}from"./el-input-number-BDlx3VMq.js";import{E as Te,d as W}from"./el-form-item-CERnoCUZ.js";import{E as $e}from"./el-loading-DCNjVn9g.js";const h=N=>(ve("data-v-5bca5f1c"),N=N(),ye(),N),Ee={style:{overflow:"auto"}},Ce={cellspacing:"0",width:"100%;"},je={class:"tbl-title"},ke=["colspan","innerHTML"],Me=["colspan","innerHTML"],Ie=h(()=>r("td",{rowspan:"5",class:"mw20"}," 序号 ",-1)),Se=h(()=>r("td",{rowspan:"5",class:"mw60"}," 学号 ",-1)),He=h(()=>r("td",{rowspan:"5",class:"mw60"}," 学生姓名 ",-1)),Le=["colspan","innerHTML"],Ne=h(()=>r("td",{colspan:"3"}," 总评成绩",-1)),Be=["colspan"],Pe=h(()=>r("td",{class:"mw60"}," 过程",-1)),Ae=h(()=>r("td",{class:"mw60"}," 期末考试",-1)),Oe=h(()=>r("td",{class:"mw90"}," 总分",-1)),Re=["innerHTML"],Ve=h(()=>r("td",{rowspan:"3"},"100",-1)),Fe=h(()=>r("td",{rowspan:"3"},"100",-1)),Ge={rowspan:"3"},Ue=h(()=>r("br",null,null,-1)),ze=h(()=>r("td",{colspan:"3",rowspan:"2"},"平均分",-1)),De=h(()=>r("td",{colspan:"3"},"课程分目标达成度",-1)),xe=["colspan"],Ke=h(()=>r("td",{colspan:"3"},"课程目标达成度",-1)),Xe=["colspan"],Je=["colspan"],Qe=10,We=10,qe={__name:"PreviewAndExport",setup(N){const{appContext:q}=ce(),{toNumber:Y,delay:Z}=q.config.globalProperties,{courseGoalCalHelperStore:U}=ue(),{getCourseInfo:C,getCourseGoals:M,getStudents:u,tblStructure:p,arrTestTypes:_,arrTestNames:A,arrPointsPerTest:I,arrCJGC:$,indexPerTestType:z,assignedPointsPerTestType:ee}=ie(U),D=[...M.value.keys()].map(s=>s.reduce((a,e)=>e.weight+a,0)),te=fe(),O=X(new Map),B=(s,a)=>{if(!u.value.has(s))throw Error(`找不到学号为 ${s} 的学生信息`);O.get(s)[a].value=R(s,a)};for(let[s,a]of u.value)O.set(s,a.scores.map((e,t)=>({type:"danger",value:R(s,t)})));const b=X({});async function se(){const s=[];return await Promise.allSettled([...u.value.values()].map(a=>x(a))).then(a=>{for(let e of a)e.status!=="fulfilled"&&s.push(e.value)}).catch(a=>console.dir(a)),{code:s?0:-1}}async function x(s,a=[]){await Z(Math.random()*100+100);let e=[],t=!0;const o={};if(a.length===0)Object.assign(o,z.value);else for(let l of a)o[l]=z.value[l];for await(let[l,c]of Object.entries(o)){const d=s.scores[l];let E=0,j=!1;for(;E<We&&j===!1;)E++,await Promise.any([...new Array(Qe)].map(()=>oe(d,ee.value[l]))).then(k=>{for(let T=0;T<k.length;T++)e[c[T]]=k[T];j=!0}).catch(k=>{});if(!j){t=!1;break}}if(t)return Object.assign(u.value.get(s.stdId).points,e),s.scores.forEach((l,c)=>B(s.stdId,c)),s.stdId;throw Error(s.stdId)}async function oe(s,a,e=0){const t=[];let o=0;t.length=0;for(let l=0;l<a.length;l++){const c=Math.random()>.5?-1:1,d=Math.round((s/100+c*.05*Math.random())*a[l]);if(d>a[l]){l--;continue}t.push(d),o=d+o}if(Math.abs(o-s)<.8)return t;throw Error(`Fail to create ${s} use [${a.join(",")}]`)}async function ae(s,a,e){if(!(!s||!s.target.className.includes("el-badge__content")))return await x(u.value.get(a),[e]).then(()=>B(a,e)).then(()=>Object.assign(b,P()))}const le=()=>{V.confirm("进入新课程后，本次填入的数据将会丢失。<br>请确定已导出数据后再进入新课程录入！","警告",{dangerouslyUseHTMLString:!0,confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",icon:F(J),duration:0}).then(async()=>te.push({name:"index"})).catch(()=>{})};async function K(s,a,e,t){if(!u.value.has(a))throw new Error(`找不到学号为 ${a} 的学生！`);const o=u.value.get(a);e==="points"&&s>I.value[t]?S({message:`考核项 ${A.value[t]} 的分数不能超过 ${I.value[t]}!`,type:"error"}):s<0&&S({message:`考核项 ${A.value[t]} 的分数不能小于 0!`,type:"error"}),o[e][t]=s;const l=e==="scores"?t:_.value[t];e==="scores"&&(o.stdHecheng=Math.round($.value.map((c,d)=>c*o.scores[d]).reduce((c,d)=>c+d,0))),B(a,l),Object.assign(b,P())}const P=()=>{const s={pjf1:[],pjf2:[],fmbdcd:[],dcd:0};for(let[o,l]of u.value){let c=[...l.points,...l.scores,l.stdHecheng];for(let d in c)s.pjf1[d]=c[d]+(s.pjf1[d]===void 0?0:Math.round(s.pjf1[d]))}const a=[...s.pjf1];for(let o=0;o<s.pjf1.length;o++){s.pjf1[o]=Math.round(s.pjf1[o]/u.value.size);const l=$.value[_.value[o]];o<p.value.nColMid&&(s.pjf2[o]=(l*a[o]/u.value.size).toFixed(1))}let e=0,t=0;for(let[o,l]of M.value){let c=0,d=0,E=0,j=0;for(let T of l)T.type===0?(c+=a[e],E+=T.points):(d+=a[e],j+=T.points),e++;const k=Number.parseFloat((($.value[0]*c/E+$.value[1]*d/j)/u.value.size).toFixed(3));s.dcd=s.dcd+k*D[t],s.fmbdcd.push(k),t++}return s.dcd=s.dcd.toFixed(3),s};async function ne(){let s=!0;for(let[o,l]of u.value){for(let c of[0,1])if(R(o,c)!==""&&l.points.reduce((d,E)=>d+E,0)!==0){s=!1;break}if(s===!1)break}if(s===!1){V.alert("请确保所有过程项都有数据、数据无红点后再导出！<br>提示：可使用模拟计算快速填入数据，单击红点消除一致性问题。","错误",{type:"error",dangerouslyUseHTMLString:!0,icon:F(J)});return}const{CExceler:a}=await ge(async()=>{const{CExceler:o}=await import("./CExceler-bImqDluD.js");return{CExceler:o}},__vite__mapDeps([0,1]));let e=[`${C.value.seminar}学期`,C.value.majority,`专业${C.value.grade}级${C.value.banji}`,`《${C.value.coursename}》`,"课程目标、毕业要求达成度计算表"];const t=await new a(M.value,$.value,!1,u.value);await t.createExcel(),await t.setTitle(p==null?void 0:p.value.title.replace(/\<.+?\>/g,"")),await t.setSubTitle(p==null?void 0:p.value.subTitle.replace(/&nbsp;/g," ")),await t.download(e)}function R(s,a){let e=0;for(let o=0;o<_.value.length;o++)_.value[o]===a&&(e+=u.value.get(s).points[o]);const t=u.value.get(s).scores[a];return e-t<-.4?`${e}<`:e-t>.4?`${e}>`:""}return de(),pe(async()=>{Object.assign(b,P());let s=0,a=[...new Array(2)].fill(0);for(let[e,t]of u.value){for(let o of t.points)s+=o;t.scores.forEach((o,l)=>a[l]+=o)}if(s===0&&a.reduce((e,t)=>e+t,0)>0){let e=null;V.confirm("系统检测到您未分配各分项成绩，是否需要自动设置？","提示",{dangerouslyUseHTMLString:!0,confirmButtonText:"好的，请帮我设置",cancelButtonText:"谢谢，不用了",type:"info",icon:F(he),duration:0}).then(async()=>(e=$e.service({fullscreen:!0,text:"正在生成数据...."}),await se())).then(t=>t.code===0?S({type:"success",center:!0,message:"计算顺利完成"}):(t.code,S({type:"error",center:!0,message:"计算完成但遇到错误，请重新计算。"}))).catch(t=>{console.log(t.message)}).finally(()=>{me(()=>e&&e.close())})}else if(s!==0&&a.reduce((e,t)=>e+t,0)===0){for(let[e,t]of u.value){let o=new Array(2).fill(0);for(let[l,c]of Object.entries(t.points))o[_.value[l]]+=c;Object.assign(u.value.get(e).scores,o)}S({message:"已自动更新汇总字段数据！",type:"success"})}for(let[e,t]of u.value)t.scores.forEach((o,l)=>B(e,l));Object.assign(b,P())}),(s,a)=>(i(),f(g,null,[r("div",Ee,[v(n(Te),{model:n(u),ref:"formRef","validate-on-rule-change":!1},{default:w(()=>[r("table",Ce,[r("tr",je,[r("td",{colspan:n(p).nColNumTotal,innerHTML:n(p).title},null,8,ke)]),r("tr",null,[r("td",{colspan:n(p).nColNumTotal,class:"tbl-subtitle",innerHTML:n(p).subTitle},null,8,Me)]),r("tr",null,[Ie,Se,He,(i(!0),f(g,null,y(n(M),(e,t)=>(i(),f("td",{colspan:e[1].length,innerHTML:e[0].map(o=>`毕业要求指标点${o.code}（*${o.weight}）`).join("<br>"),key:`checkpoints--${t}`,class:"mw170"},null,8,Le))),128)),Ne]),r("tr",null,[(i(!0),f(g,null,y(n(M),(e,t)=>(i(),f("td",{colspan:e[1].length,key:`coursegoal-${t}`}," 课程目标"+m(t+1)+"（*"+m(n(D)[t])+"） ",9,Be))),128)),Pe,Ae,Oe]),r("tr",null,[(i(!0),f(g,null,y(n(A),(e,t)=>(i(),f("td",{class:L(["mw60",n(_)[t]===0?"guochengfen":"kaoshifen"]),key:`${e}-${t}`,innerHTML:(n(_)[t]===0?"过程":"考试")+"<br>（"+e+"）"},null,10,Re))),128)),Ve,Fe,r("td",Ge,[H("100"),Ue,H("（"+m(n(U).INGREDIENTS[n(C).cjgc])+"）",1)])]),r("tr",null,[(i(!0),f(g,null,y(n(I),(e,t)=>(i(),f("td",{key:`${e}-${t}`,class:L(n(_)[t]===0?"guochengfen":"kaoshifen")},m(e),3))),128))]),r("tr",null,[(i(!0),f(g,null,y(n(I),(e,t)=>(i(),f("td",{key:`${e}-${t}`,class:L(n(_)[t]===0?"guochengfen":"kaoshifen")},m(n(Y)(e*(n(_)[t]===0?n($)[0]:n($)[1]),0)),3))),128))]),(i(!0),f(g,null,y(n(u),(e,t)=>(i(),f("tr",{key:`${e[0]}-${t}`},[r("td",null,m(t+1),1),r("td",null,m(e[0]),1),r("td",null,m(e[1].stdName),1),(i(!0),f(g,null,y(e[1].points,(o,l)=>(i(),f("td",{key:`${e[0]}-${l}`,class:L(n(_)[l]===0?"guochengfen":"kaoshifen")},[v(n(W),null,{default:w(()=>[v(n(Q),{size:"small",type:"number",controls:!1,style:{width:"100%"},step:1,"step-strictly":!0,min:0,max:n(I)[l],precision:0,modelValue:n(u).get(e[0]).points[l],"onUpdate:modelValue":c=>n(u).get(e[0]).points[l]=c,onInput:c=>K(c,e[0],"points",l)},null,8,["max","modelValue","onUpdate:modelValue","onInput"])]),_:2},1024)],2))),128)),(i(!0),f(g,null,y(e[1].scores,(o,l)=>(i(),f("td",{key:`${e[0]}-scores-${l}`},[v(n(W),{class:L(o)},{default:w(()=>[v(n(_e),{value:O.get(e[0])[l].value,offset:[-75,0],onClick:c=>ae(c,e[0],l),style:{cursor:"pointer"}},{default:w(()=>[v(n(Q),{size:"small",type:"number",controls:!1,style:{width:"80px"},"step-strictly":!0,min:0,max:100,precision:0,modelValue:e[1].scores[l],"onUpdate:modelValue":c=>e[1].scores[l]=c,step:1,ref_for:!0,ref:`${e[0]}-${o}`,onInput:c=>K(c,e[0],"scores",l)},null,8,["modelValue","onUpdate:modelValue","onInput"])]),_:2},1032,["value","onClick"])]),_:2},1032,["class"])]))),128)),r("td",null,m(e[1].stdHecheng),1)]))),128)),r("tr",null,[ze,(i(!0),f(g,null,y(b.pjf1,(e,t)=>(i(),f("td",{key:`${e}-${t}`},m(e),1))),128))]),r("tr",null,[(i(!0),f(g,null,y(b.pjf2,(e,t)=>(i(),f("td",{key:`${e}-${t}`},m(e),1))),128))]),r("tr",null,[De,(i(!0),f(g,null,y(b.fmbdcd,(e,t)=>(i(),f("td",{key:`${e}-${t}-${Math.random()}`,colspan:n(p).nSpaned[t]},m(e),9,xe))),128))]),r("tr",null,[Ke,r("td",{colspan:n(p).nColMid},m(b.dcd),9,Xe)]),r("tr",null,[r("td",{colspan:n(p).nColNumTotal,style:{"text-align":"left","padding-left":"1rem"}}," 注：此表一式二份，一份随试卷存档，一份由任课教师所在学院统一保管。",8,Je)])])]),_:1},8,["model"])]),v(n(be),{justify:"center",style:{"margin-top":"2rem"}},{default:w(()=>[v(n(we),{offset:14,span:10},{default:w(()=>[v(n(G),{type:"primary",onClick:ne},{default:w(()=>[H("导出Excel数据")]),_:1}),v(n(G),{onClick:a[0]||(a[0]=e=>s.$router.push({name:"import-student-info"}))},{default:w(()=>[H("上一步")]),_:1}),v(n(G),{onClick:le},{default:w(()=>[H("录入新课程")]),_:1})]),_:1})]),_:1})],64))}},lt=re(qe,[["__scopeId","data-v-5bca5f1c"]]);export{lt as default};
