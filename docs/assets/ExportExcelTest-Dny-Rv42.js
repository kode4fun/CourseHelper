import{ai as W,aj as V,y as D,k as P,l as Y,a5 as Z,a6 as q,f as Q,p as ee,a7 as te,a9 as se,al as le}from"./index-caqPvEdC.js";import{x as B}from"./xlsx-BW3ajqOG.js";import{u as h}from"./xlsx-Z1u5aRAB.js";const{courseGoalCalHelperStore:oe}=W(),{getCourseInfo:d,getCourseGoals:F,getStudents:L,tblStructure:E}=V(oe),ie=(S=0,s=-1)=>{const t=Number.parseFloat(S),o=Number.isNaN(t)?0:t;return s===-1?o:s===0?Math.round(o):Number.parseFloat(o.toFixed(s))},l=Symbol("workSheet"),$=Symbol("courseGoals"),O=Symbol("mergedCells"),k=Symbol("namedCells"),a=Symbol("nColTotal"),f=Symbol("nRowTotal"),R=Symbol("goalSpans"),I=Symbol("stdNum"),U=Symbol("kaoheNum"),x=Symbol("setMerged"),X=Symbol("initSheetFramework"),z=new Map;z.set([{code:1,weight:.18}],[{khlx:0,fenzhi:10,title:"考勤、课堂讨论"},{khlx:1,fenzhi:12,title:"期末考试"}]);z.set([{code:1,weight:.1},{code:1,weight:.14}],[{khlx:0,fenzhi:20,title:"作业、课堂实践"},{khlx:1,fenzhi:30,title:"期末考试"}]);z.set([{code:1,weight:.32}],[{khlx:0,fenzhi:25,title:"平时作业"},{khlx:1,fenzhi:30,title:"期末考试"}]);z.set([{code:1,weight:.26}],[{khlx:0,fenzhi:20,title:"课堂问答"},{khlx:0,fenzhi:25,title:"综合作业"},{khlx:1,fenzhi:28,title:"期末考试"}]);class ne{constructor(s=5,t=z){this[I]=ie(s,0),this[$]=t,this[R]=[],console.dir(this[$]);for(let o of this[$].values())this[R].push(o.length);this[U]=this[R].reduce((o,r)=>o+r,0),this[a]=this[U]+6,this[f]=this[I]+12,this[l]=[],this[O]=new Map,this[k]=new Map,this[l]["!ref"]=h.encode_range({s:{c:0,r:0},e:{c:this[a]-1,r:this[f]-1}}),this[l]["!merges"]=[],this.fillGuocheng={fgColor:{rgb:"fffff2"}},this.fillKaoshi={fgColor:{rgb:"f4fff4"}},this.defaultCellStyle={numFmt:"General",font:{sz:"10",color:{theme:"1",rgb:"FFFFFF"},name:"Microsoft YaHei UI"},border:{top:{style:"thin",color:{auto:"1"}},right:{style:"thin",color:{auto:"1"}},bottom:{style:"thin",color:{auto:"1"}},left:{style:"thin",color:{auto:"1"}}},alignment:{vertical:"center",horizontal:"center",wrapText:"1"}},Promise.resolve().then(()=>this.setColWidth()).then(()=>this.setRowHeight).then(()=>this[X]()).then(()=>{console.log("mergedCells ==> %o，namedCells ==> %o",this[O],this[k]),console.log("workSheet ==> %o",this[l]),this.setTitle("主标题信息"),this.setSubTitle("副标题信息"),this.setCaptions()}).then(()=>{this.download()})}setCellContent(s,t,o,r,m){const c=h.encode_cell({c:t-1,r:s-1});c in this[l]||(this[l][c]={t:r||"s",s:this.getCellStyle(m||{}),v:"",w:""}),this[l][c].v=this[l][c].w=o}async setNamedCellContent(s,t){if(!this[k].has(s))throw Error(`单元格名称 ${s} 未定义`);const o=this[k].get(s).ref;this[l][o].v=t.toString()}setTitle(s="主标题"){this.setNamedCellContent("title",s)}setSubTitle(s="副标题"){this.setNamedCellContent("subTitle",s)}async setCaptions(){for(let[s,t]of Object.entries(["过程","期末考试","总分"]))this.setCellContent(4,this[a]-2+Number(s),t);this.setNamedCellContent("shuoming","注：此表一式二份，一份随试卷存档，一份由任课教师所在学院统一保管。")}async download(){for(let o=1;o<=this[f];o++)for(let r=1;r<=this[a];r++){const m=h.encode_cell({c:r-1,r:o-1});m in this[l]||(this[l][m]={s:this.getCellStyle(),v:"",w:"",t:"s"})}const s=h.book_new();h.book_append_sheet(s,this[l],"Sheet1");const t=new Blob([this.s2ab(B.write(s,{bookType:"xlsx",type:"binary",cellFormula:!0,cellStyles:!0}))]);J(t,"test.xlsx")}[x](s,t,o=1,r=1,m=null,c="s",p={},g=""){const b=h.encode_cell({c:t-1,r:s-1}),C={s:{c:t-1,r:s-1},e:{c:t+r-2,r:s+o-2}},_=h.encode_range({s:{c:t-1,r:s-1},e:{c:t+r-2,r:s+o-2}});return this[O].set(_,{ref:b,range:C,rangeReadable:_,rowStart:s,colStart:t,rowSpan:o,colSpan:r,type:c,name:m}),this[l]["!merges"].push(C),m&&this[k].set(m,{ref:b,range:C,rangeReadable:_}),this[l][b]={v:g.toString(),w:g.toString(),t:c,s:this.getCellStyle(p)},!0}async setColWidth(s=100){this[l]["!cols"]=[...new Array(this[a])].map(()=>({wpx:s})),this[l]["!cols"][0].wpx=50,this[l]["!cols"][1].wpx=this[l]["!cols"][2].wpx=80}async setRowHeight(s){this[l]["!rows"]=[...new Array(this[f])].map(()=>({hpx:s})),this[l]["!rows"][0].hpx=150}async[X](){console.log(`init worksheet to ${this[a]} cols ${this[f]}`),this[x](1,1,1,this[a],"title","s",{},"主标题"),this[x](2,1,1,this[a],"subTitle","s",{font:{sz:"9"},alignment:{horizontal:"left"}},"副标题");for(let[o,r]of Object.entries([{name:"xuhao",text:"序号"},{name:"xuehao",text:"学号"},{name:"xingming",text:"学生姓名"}]))this[x](3,Number(o)+1,5,1,r.name,"s",{},r.text);let s=3,t=0;console.dir(this[$]);for(let[o,r]of this[$]){console.log("abcd",o.map(c=>`毕业要求指标点${c.code}(*${c.weight})`).join(`\r
`));const m=[{rangeName:`zbdTitleField-${t}`,row:3,content:o.map(c=>`毕业要求指标点${c.code}(*${c.weight})`).join(`\r
`)},{rangeName:`goalTitle-${t}`,row:4,content:`课程目标${t+1}`},{rangeName:`fmbdcdField-${t}`,row:this[f]-2,content:"0",type:"z",style:{numFmt:"0.000"}}];for(let c of m)this[x](c.row,s+1,1,r.length,c.rangeName,c.type?c.type:"s",this.getCellStyle(c.style?c.style:{}),c.content?c.content:"");for(let[c,p]of Object.entries(r))for(let[g,b]of Object.entries([p.title,p.fenzhi,p.fenzhi]))this.setCellContent(5+Number(g),s+Number(c)+1,b,g===0?"s":"n");s=s+r.length,t++}this[x](3,this[a]-2,1,3,"zpcjTitle","s",{},"总评成绩"),this[x](this[f]-4,1,2,3,"pjfTitle","s",{},"平均分"),this[x](this[f]-2,1,1,3,"fmbdcdTitle","s",{},"课程分目标达成度"),this[x](this[f]-1,1,1,3,"mbdcdTitle","s",{},"课程目标达成度"),this[x](this[f]-1,4,1,this[a]-3-3,"mbdcdField","n",{numFmt:"0.000"},0);for(let[o,r]of Object.entries(["过程","期末考试","总分"]))o=Number(o),this[x](5,this[a]-2+o,3,1,`cjlxSubTitle-${o}`,"s",this.getCellStyle(),"100");this[x](this[f]-3,this[a]-2,3,3,"blank"),this[x](this[f],1,1,this[a],"shuoming","s",{alignment:{vertical:"center",horizontal:"left"}})}setDefaultCellStyle(){return Object.assign(this.defaultCellStyle,override)}getCellStyle(s={}){return Object.assign({},this.defaultCellStyle,s)}async doExport(s="a-excel-test"){await this.initWorkSheet(this[l]);const t=h.book_new();h.book_append_sheet(t,this[l],"Sheet1");let o=1,r=0;for(let[c,p]of L.value){for(let[g,b]of Object.entries([o,p.stdId,p.stdName,...p.scores,p.stdGuocheng,p.stdKaoshi])){g=Number.parseInt(g);const C=h.encode_cell({c:0+g,r:r+7});this[l][C].t=g<3?"s":"n",g===p.scores.length+3?this[l][C].s.fill=this.fillGuocheng:g===p.scores.length+4?this[l][C].s.fill=this.fillKaoshi:g>=3&&(d.value.arrKHLX[g-3]===0?this[l][C].s.fill=this.fillGuocheng:this[l][C].s.fill=this.fillKaoshi),this[l][C].v=this[l][C].w=b.toString()}r++,o++}const m=new Blob([this.s2ab(B.write(t,{bookType:"xlsx",type:"binary",cellFormula:!0,cellStyles:!0}))]);J(m,`${s}.xlsx`)}async initWorkSheet(){var p,g,b,C,_,K;L.value.size,this[l]["!ref"]=h.encode_range({s:{c:0,r:0},e:{c:this[a]-1,r:h.decode_row(this[f].toString())}}),this[l]["!cols"]=[...new Array(this[a])].map(()=>({wpx:100})),this[l]["!cols"][0].wpx=40,this[l]["!cols"][1].wpx=this[l]["!cols"][2].wpx=80,this[l]["!rows"]=[...new Array(this[f])].map(()=>({hpx:100})),this[l]["!rows"][0].hpx=150;const s=[],t=new Map;for(let[e,n]of Object.entries(["序号","学号","学生姓名"])){const i=`${h.encode_col(e)}3:${h.encode_col(e)}7`,u=i.split(":")[0];t.set(u,{ref:i,topLeft:u,type:"s",text:n,style:this.getCellStyle()})}for(let[e,n]of Object.entries(["100","100",`100\r
（${E.value.CJGCLabel}）`])){const i=`${h.encode_col(this[a]-3+Number.parseInt(e))}5:${h.encode_col(this[a]-3+Number.parseInt(e))}7`,u=i.split(":")[0];t.set(u,{ref:i,topLeft:u,type:"s",text:n,style:this.getCellStyle()})}let o=3;const r=[];for(let[e,n]of Object.entries([...F.value,{kaohes:["","",""]}])){e=Number.parseInt(e);let i=o+n.kaohes.length-1,u="";for(let y of"zhibiaodians"in n?[3,4,this[f]-3+1]:[3]){const w=`${h.encode_col(o)}${y}:${h.encode_col(i)}${y}`,v=w.split(":")[0];e<F.value.length?y===3?u=E.value.zbdLables[e].replace(/<br>/g,`\r
`):y===4?u=`${F.value[e].title}（* ${d.value.arrWeightsSum[e]} ）`:(u="课程分目标达成度在后面设置",r.push(v)):u="总评成绩",t.set(v,{ref:w,topLeft:v,type:"z",text:u,style:this.getCellStyle()})}o=i+1}for(let[e,n]of Object.entries(["平均分","课程分目标达成度","课程目标达成度"])){const i=Number.parseInt(e),u=i===0?0:1,y=`A${this[f]-4+u+i}:C${this[f]-3+i+u+(i===0?0:-1)}`,w=y.split(":")[0];t.set(w,{ref:y,topLeft:w,type:"s",text:n,style:this.getCellStyle()})}{const e=`${h.encode_col(this[a]-3)}${this[f]-3}:${h.encode_col(this[a]-1)}${this[f]-1}`,n=e.split(":")[0];t.set(n,{ref:e,topLeft:n,type:"s",text:"",style:this.getCellStyle()})}{const e=`D${this[f]-1}:${h.encode_col(this[a]-4)}${this[f]-1}`,n=e.split(":")[0];t.set(n,{ref:e,topLeft:n,type:"s",text:"达成度",style:this.getCellStyle()})}{const e=`A${this[f]}:${h.encode_col(this[a]-1)}${this[f]}`,n=e.split(":")[0];t.set(n,{ref:e,topLeft:n,type:"s",text:"注：此表一式二份，一份随试卷存档，一份由任课教师所在学院统一保管。",style:this.getCellStyle({font:{sz:"9"},alignment:{horizontal:"left"}})})}this[l]["!merges"]=await this.makeMerges([...t.values()].map(e=>e.ref));const m=[...t.keys()];for(let e=4;e<4+d.value.arrFenzhi.length;e++)for(let n=5;n<=7;n++){const i=h.encode_cell({c:e-1,r:n-1});if(n===5){const u=`${d.value.arrKHLX[e-4]===0?"过程":"考试"} \r
（${d.value.arrKHMC[e-4]}）`;this[l][i]={v:u,w:u,t:"s",s:this.getCellStyle({fill:d.value.arrKHLX[e-4]===0?this.fillGuocheng:this.fillKaoshi,alignment:{vertical:"center",horizontal:"center",wrapText:"1"}})}}else if(n===6)this[l][i]={v:d.value.arrFenzhi[e-4].toString(),w:d.value.arrFenzhi[e-4].toString(),t:"n",s:this.getCellStyle({fill:d.value.arrKHLX[e-4]===0?this.fillGuocheng:this.fillKaoshi})};else{const u=d.value.arrKHLX[e-4],y=d.value.arrCJGC[u];this[l][i]={v:Math.round(d.value.arrFenzhi[e-4]*y).toString(),w:Math.round(d.value.arrFenzhi[e-4]*y).toString(),t:"n",s:this.getCellStyle({fill:d.value.arrKHLX[e-4]===0?this.fillGuocheng:this.fillKaoshi})}}s.push(i)}for(let e=this[a]-3;e<this[a];e++){const i=h.encode_cell({c:e,r:3}),u=e===this[a]-3?"过程":e===this[a]-2?"期末考试":"总分";this[l][i]={v:u,w:u,t:"s",s:this.getCellStyle()},s.push(i)}const c=[];for(let e=7;e<7+L.value.size;e++){const n=h.encode_cell({c:this[a]-1,r:e}),i=h.encode_cell({c:this[a]-2,r:e}),u=h.encode_cell({c:this[a]-3,r:e}),y=`${d.value.arrCJGC[0]}*${u}+${d.value.arrCJGC[1]}*${i}`;this[l][n]={v:0,w:0,f:y,t:"n",s:this.getCellStyle({numFmt:"0"})},c.push(n)}for(let e=4;e<=this[a];e++){const n=h.encode_cell({c:e-1,r:this[f]-5}),i=h.encode_range({s:{c:e-1,r:7},e:{c:e-1,r:this[f]-6}});this[l][n]={v:0,w:0,f:`AVERAGE(${i})`,t:"n",s:this.getCellStyle({numFmt:"0"})},c.push(n)}for(let e=4;e<=this[a]-3;e++){const n=h.encode_cell({c:e-1,r:this[f]-5}),i=h.encode_cell({c:e-1,r:this[f]-4});this[l][i]={v:0,w:0,f:`${n}*${d.value.arrCJGC[d.value.arrKHLX[e-4]]}`,t:"n",s:this.getCellStyle({numFmt:"0.0"})},c.push(i)}{const e={fenshu:[],fenzhi:[]},n={fenshu:[],fenzhi:[]},i=[];let u=0;for(let[v,j]of Object.entries(F.value)){const N=r[v];for(let[G,T]of Object.entries(j.kaohes)){const H=h.encode_cell({c:3+u,r:5}),A=h.encode_cell({c:3+u,r:this[f]-5});T.kaoheleixing===0?(e.fenzhi.push(H),e.fenshu.push(A)):(n.fenzhi.push(H),n.fenshu.push(A)),u++}const M=[e,n].map((G,T)=>`${d.value.arrCJGC[T]}*SUM(${G.fenshu.join(",")})/SUM(${G.fenzhi.join(",")})`).join("+");console.log(`${N} 课程分目标达成度公式：${M}`),this[l][N]={t:"n",f:M,s:this.getCellStyle({numFmt:"0.000"})},e.fenshu.length=e.fenzhi.length=0,n.fenshu.length=n.fenzhi.length=0,c.push(N),i.push(N)}const y="SUM("+i.map((v,j)=>`${d.value.arrWeightsSum[j]}*${v}`).join(",")+")",w=h.encode_cell({c:3,r:this[f]-2});console.log(w,y),this[l][w]={t:"n",f:y,s:this.getCellStyle({numFmt:"0.000"})},c.push(w)}for(let e=0;e<this[a];e++)for(let n=0;n<this[f];n++){const i=h.encode_cell({c:e,r:n});s.includes(i)||c.includes(i)||(m.includes(i)?this[l][i]={v:(p=t.get(i))==null?void 0:p.text,w:(g=t.get(i))==null?void 0:g.text,t:(b=t.get(i))!=null&&b.type?(C=t.get(i))==null?void 0:C.type:"s",s:(_=t.get(i))!=null&&_.style?(K=t.get(i))==null?void 0:K.style:this.getCellStyle()}:this[l][i]={v:0,w:0,t:"n",s:this.getCellStyle()})}return console.dir(this[l]),this[l]}async makeMerges(s){const t=[];for(let o of s)t.push(h.decode_range(o));return t}s2ab(s){if(typeof ArrayBuffer<"u"){const t=new ArrayBuffer(s.length),o=new Uint8Array(t);for(let r=0;r!=s.length;++r)o[r]=s.charCodeAt(r)&255;return t}else{const t=new Array(s.length);for(let o=0;o!=s.length;++o)t[o]=s.charCodeAt(o)&255;return t}}}function J(S,s){const t=document.createElement("a");t.download=s,"msSaveOrOpenBlob"in navigator?window.navigator.msSaveOrOpenBlob(S,s):t.href=URL.createObjectURL(S),t.click(),setTimeout(()=>URL.revokeObjectURL(S),2e3)}const ae={__name:"ExportExcelTest",setup(S){const{courseGoalCalHelperStore:s}=W();V(s);const t=D(null);async function o(){new ne(5)}return(r,m)=>(P(),Y(te,null,[Z(Q(le),{onClick:o},{default:q(()=>[se("解析模板")]),_:1}),ee("input",{type:"file",id:"exam_file",style:{display:"none"},ref_key:"file_selector",ref:t,accept:".xls,.xlsx, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel"},null,512)],64))}};export{ae as default};
