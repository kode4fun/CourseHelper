const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/CExceler-bImqDluD.js","assets/xlsx-CIVhsdtn.js","assets/ExcelParser-qHccrVBe.js","assets/index-CsR9PVny.js","assets/index-CR3WH0Hl.css","assets/el-loading-DCNjVn9g.js","assets/el-loading-D5XuAxUM.css"])))=>i.map(i=>d[i]);
import{aT as k,aI as T,aJ as $,o as B,aK as G,V,w as j,x as P,y as n,C as l,bi as C,bj as R,A as a,H as p,aC as s,aL as f,bk as g,bl as L,Q as M,aS as N,bm as A,bn as D,bo as H,bp as J}from"./index-CsR9PVny.js";import{E as O}from"./el-loading-DCNjVn9g.js";const z=r=>(H("data-v-3464ce42"),r=r(),J(),r),K=z(()=>a("div",{class:"tips"},[s(" 1、请点击下方的“下载模板”按钮下载模板文件，在仔细阅读模板文件内的填写说明后填写数据；"),a("br"),s(" 2、因不同课程的指点数据、分值分配等不同，因此"),a("span",{style:{color:"red"}},"各门课程的模板不通用"),s("；"),a("br"),s(" 3、填写数据后，请点击下方的“导入数据”按钮，选中填写完毕的数据文件进行解析；"),a("br"),s(" 4、请保持模板文件的结构，否则可能导致数据解析失败。"),a("br")],-1)),Q={class:"buttons"},q={__name:"ImportStudentInfo",setup(r){const{courseGoalCalHelperStore:i}=T(),{getCourseInfo:c,getCourseGoals:y,getStudents:h,tblStructure:_,arrCJGC:w}=$(i);let m=null,v=null;const u=B(null);async function b(){const e=O.service({fullscreen:!0,text:"正在生成模板文件...."});m||console.log("初始化 CExceler"),await C(()=>import("./CExceler-bImqDluD.js"),__vite__mapDeps([0,1])).then(d=>{m=d.default});let t=[c.value.majority,`专业${c.value.grade}级${c.value.banji}`,`《${c.value.coursename}》`,"填写模板"];const o=new m(y.value,w.value,!0);await o.createExcel(),await o.setSubTitle(_==null?void 0:_.value.subTitle.replace(/&nbsp;/g," ")),await o.download(t.join("")),M(()=>e.close())}async function E(){this.files&&(v||await C(()=>import("./ExcelParser-qHccrVBe.js"),__vite__mapDeps([2,3,4,5,6])).then(e=>v=e.default),await v(this.files[0],!1).then(e=>{const{readedCourseInfo:t,readedCourseGoals:o,readedStudents:d}=e;t.department||(t.department="文学与传媒学院"),i.setCourseInfo(t),i.setCourseGoals(o),d.length>0&&i.setStudents([...d.values()])}).then(()=>x.push({name:"preview-and-export"})).catch(e=>{R({type:"error",message:`文件解析错误，请重试！${e.message}`})}))}const I=async()=>u.value.click(),x=G();function S(e){if(h.value.size===0){N.alert("请先导入数据再进行下一步！","错误",{type:"error",icon:A(D)});return}x.push({name:e})}return V(()=>{u.value.onchange=E}),(e,t)=>(j(),P(l(L),{style:{height:"100%"}},{default:n(()=>[K,a("input",{type:"file",id:"config_file",style:{display:"none"},ref_key:"file_selector",ref:u,accept:".json"},null,512),a("div",Q,[p(l(f),{onClick:t[0]||(t[0]=o=>e.$router.push({name:"set-course-goal-details"}))},{default:n(()=>[s("上一步")]),_:1}),p(l(f),{type:"warning",icon:l(g),onClick:b},{default:n(()=>[s("下载模板")]),_:1},8,["icon"]),p(l(f),{type:"primary",icon:l(g),onClick:I},{default:n(()=>[s("导入数据")]),_:1},8,["icon"]),p(l(f),{onClick:t[1]||(t[1]=o=>S("preview-and-export"))},{default:n(()=>[s("下一步")]),_:1})]),a("input",{type:"file",id:"exam_file",style:{display:"none"},ref_key:"file_selector",ref:u,accept:".xls,.xlsx, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel"},null,512)]),_:1}))}},W=k(q,[["__scopeId","data-v-3464ce42"]]);export{W as default};
