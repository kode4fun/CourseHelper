const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/CExceler-Di_gTg2w.js","assets/xlsx-CIVhsdtn.js","assets/ExcelParser-C26qZoY9.js","assets/index-uDMkNMzh.js","assets/index-C8Z9hjoe.css","assets/index-Bx9ligVW.js","assets/el-loading-D5XuAxUM.css"])))=>i.map(i=>d[i]);
import{aT as k,aI as T,aJ as G,a2 as $,o as B,aK as P,V,w as j,x as D,y as i,C as s,bi as v,bj as H,A as a,H as p,aC as o,aL as f,bk as C,bl as N,Q as R,aS as L,bm as M,bn as A,bo as J,bp as K}from"./index-uDMkNMzh.js";/* empty css                   */import{E as O}from"./index-Bx9ligVW.js";const Q=c=>(J("data-v-57175492"),c=c(),K(),c),q=Q(()=>a("div",{class:"tips"},[o(" 1、请点击下方的“下载模板”按钮下载模板文件，在仔细阅读模板文件内的填写说明后填写数据；"),a("br"),o(" 2、因不同课程的指点数据、分值分配等不同，因此各门课程的模板不通用；"),a("br"),o(" 3、填写数据后，请点击下方的“导入数据”按钮，选中填写完毕的数据文件进行解析；"),a("br"),o(" 4、请保持模板文件的结构，否则可能导致数据解析失败。"),a("br")],-1)),z={class:"buttons"},F={__name:"ImportStudentInfo",setup(c){const{courseGoalCalHelperStore:u}=T(),{getCourseInfo:l,getCourseGoals:b,getKHNum:U,tblStructure:_}=G(u),{appContext:h}=$();let m=null,x=null;const d=B(null);h.config.globalProperties;async function y(){const e=O.service({fullscreen:!0,text:"正在生成模板文件...."});m||console.log("初始化 CExceler"),await v(()=>import("./CExceler-Di_gTg2w.js"),__vite__mapDeps([0,1])).then(S=>{m=S.default});let t=[l.value.majority,`专业${l.value.grade}级${l.value.banji}`,`《${l.value.coursename}》`,"填写模板"];const r=[...l.value.arrCJGC],n=new m(b.value,r,!0);await n.createExcel(),await n.setSubTitle(_==null?void 0:_.value.subTitle.replace(/&nbsp;/g," ")),await n.download(t.join("")),R(()=>e.close())}async function w(){this.files&&(x||await v(()=>import("./ExcelParser-C26qZoY9.js"),__vite__mapDeps([2,3,4,5,6])).then(e=>x=e.default),await x(this.files[0],!1).then(e=>{console.dir(e);const{readedCourseInfo:t,readedCourseGoals:r,readedStudents:n}=e;t.department||(t.department="文学与传媒学院"),u.setCourseInfo(t),u.setCourseGoals(r),n.length>0&&u.setStudents([...n.values()])}).then(()=>g.push({name:"preview-and-export",params:{automation:"mid"}})).catch(e=>{H({type:"error",message:`文件解析错误，请重试！${e.message}`})}))}const E=async()=>d.value.click(),g=P();function I(e){if(tableData.length===0){L.alert("请先导入班级学生信息！","错误",{type:"error",icon:M(A)});return}courseGoalCalHelperStore.setStudents(tableData),g.push({name:e})}return V(()=>{d.value.onchange=w}),(e,t)=>(j(),D(s(N),{style:{height:"100%"}},{default:i(()=>[q,a("input",{type:"file",id:"config_file",style:{display:"none"},ref_key:"file_selector",ref:d,accept:".json"},null,512),a("div",z,[p(s(f),{onClick:t[0]||(t[0]=r=>e.$router.push({name:"set-course-goal-details"}))},{default:i(()=>[o("上一步")]),_:1}),p(s(f),{type:"warning",icon:s(C),onClick:y},{default:i(()=>[o("下载模板")]),_:1},8,["icon"]),p(s(f),{type:"primary",icon:s(C),onClick:E},{default:i(()=>[o("导入数据")]),_:1},8,["icon"]),p(s(f),{onClick:t[1]||(t[1]=r=>I("preview-and-export"))},{default:i(()=>[o("下一步")]),_:1})]),a("input",{type:"file",id:"exam_file",style:{display:"none"},ref_key:"file_selector",ref:d,accept:".xls,.xlsx, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel"},null,512)]),_:1}))}},Z=k(F,[["__scopeId","data-v-57175492"]]);export{Z as default};
