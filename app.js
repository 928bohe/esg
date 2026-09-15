/* ============ data ============ */
const agents = [
  {icon:"🧮",name:"碳盘查 Agent",desc:"自动核算范围 1/2/3 排放，生成可审计碳账本",tag:"E 维度"},
  {icon:"⚡",name:"能效优化 Agent",desc:"负载预测 + 运行策略建议（空调/照明/储能），量化 kWh 与碳减排",tag:"节能"},
  {icon:"📊",name:"ESG 指标 Agent",desc:"对照 GRI/ISSB 自动打分、差距分析、评级映射",tag:"合规"},
  {icon:"🚨",name:"风险预警 Agent",desc:"能耗异常、设备劣化、合规缺口自动预警并派单",tag:"风控"},
  {icon:"📝",name:"报告生成 Agent",desc:"一键产出 ESG 报告章节、董事会摘要、对外披露文本",tag:"披露"},
];

const refs = [
  {repo:"datadrivenconstruction/DDC_Skills_for_AI_Agents_in_Construction",stars:"⭐ 312",note:"238 个 AI 技能模块，SKILL.md 结构可直接参考；与工友/建筑/运营赛道高度吻合。",url:"https://github.com/datadrivenconstruction/DDC_Skills_for_AI_Agents_in_Construction"},
  {repo:"datadrivenconstruction/OpenConstructionEstimate-DDC-CWICR",stars:"⭐ 234",note:"55,000+ 清单项 + Qdrant 语义搜索，投资赛道投标/风险预警参考。",url:"https://github.com/datadrivenconstruction/OpenConstructionEstimate-DDC-CWICR"},
  {repo:"CODE-BULIAO/smoking-detection-agent",stars:"⭐ 1",note:"四级漏斗视觉 Agent，工友安全保障方向可直接复用扩展。",url:"https://github.com/CODE-BULIAO/smoking-detection-agent"},
  {repo:"weakogeek/Build-Smart-AI",stars:"",note:"多智能体协作施工助手，参考多 Agent 编排设计思路。",url:"https://github.com/weakogeek/Build-Smart-AI"},
];

const road = [
  {t:"POC · 1 个月",d:"单一楼栋能耗 + 碳排自动核算",o:"碳账本看板"},
  {t:"阶段一 · 3 个月",d:"多指标 Agent + 预警 + 报告生成",o:"可交付 MVP"},
  {t:"阶段二 · 6 个月",d:"多项目、多框架评级、租户/员工侧",o:"平台化产品"},
];

const tabs=[
 {id:"nl",label:"💬 自然语言问数"},
 {id:"carbon",label:"🧮 碳账本"},
 {id:"eff",label:"⚡ 能效优化"},
 {id:"risk",label:"🚨 风险预警"},
 {id:"report",label:"📝 ESG 报告"},
];

const nlQ=[
 {q:"本月碳排放环比为什么涨了 8%？",a:"主因 3 号楼冷机 COP 下降（-12%），叠加 7 月气温升高 2.1℃。建议切换夜谷电价运行 + 提高送风温度 1℃，预计月碳排回落 5.6 t。数据来源：IoT 表计 + 气象 API。"},
 {q:"上季度保障房 3 号楼能耗与碳排？",a:"能耗 412,300 kWh（-3.2% 环比），碳排 231 tCO₂e，强度 0.41 t/㎡·年。绿电占比 31%，高于园区均值 8 个百分点。"},
 {q:"哪些楼栋安全工单闭环率低于 90%？",a:"5 号楼（83%）与 7 号楼（88%）。主因夜间报修响应超时。建议调整值班排班并纳入 S 维度考核。"},
];

const risks=[
 {lv:"高",t:"3 号楼冷机 COP 异常下降",d:"COP 3.8→3.3，疑似制冷剂不足或冷凝器结垢",src:"能效优化 Agent",time:"2 小时前"},
 {lv:"高",t:"范围 3 数据缺口 12%",d:"供应商运输排放未纳入，合规缺口",src:"ESG 指标 Agent",time:"昨天"},
 {lv:"中",t:"5 号楼夜间报修响应超时",d:"闭环率 83%，影响 S 维度得分",src:"风险预警 Agent",time:"3 小时前"},
 {lv:"中",t:"充电桩负载接近上限",d:"峰值利用率 96%，建议错峰策略",src:"能效优化 Agent",time:"今天"},
];

const workOrders=[
 {no:"WO-2026-0914-03",type:"节能",title:"3 号楼冷机冷凝器清洗",status:"处理中",owner:"维保组",prio:"高"},
 {no:"WO-2026-0914-02",type:"安全",title:"5 号楼夜间值班排班调整",status:"已派发",owner:"物业",prio:"中"},
 {no:"WO-2026-0913-07",type:"合规",title:"范围 3 供应商数据补采",status:"待处理",owner:"ESG 专员",prio:"高"},
 {no:"WO-2026-0912-05",type:"节能",title:"充电桩错峰策略上线",status:"已完成",owner:"能效组",prio:"低"},
];

/* ============ render ============ */
document.getElementById("agentGrid").innerHTML = agents.map(a=>`
  <div class="panel p-4 card-h flex flex-col gap-2">
    <div class="text-2xl">${a.icon}</div>
    <div class="font-bold">${a.name}</div>
    <span class="badge brand bg-emerald-400/10 text-emerald-300 self-start">${a.tag}</span>
    <p class="text-xs text-white/50 mt-auto">${a.desc}</p>
  </div>`).join("");

document.getElementById("refGrid").innerHTML = refs.map(r=>`
  <a href="${r.url}" target="_blank" class="panel p-5 card-h block">
    <div class="flex items-center justify-between gap-2">
      <div class="font-mono text-sm text-white/90 break-all">${r.repo}</div>
      <span class="chip">${r.stars||"参考"}</span>
    </div>
    <p class="text-sm text-white/55 mt-2">${r.note}</p>
    <div class="text-xs brand mt-3">查看仓库 ↗</div>
  </a>`).join("");

document.getElementById("roadGrid").innerHTML = road.map((r,i)=>`
  <div class="panel p-5 card-h">
    <div class="flex items-center gap-2 mb-2"><span class="badge bg-white/10 text-white/80">阶段 ${i+1}</span><span class="text-xs text-white/40">${r.t}</span></div>
    <div class="font-bold text-lg">${r.d}</div>
    <p class="text-sm text-white/50 mt-1">输出：${r.o}</p>
  </div>`).join("");

const tabEl=document.getElementById("tabs");
tabEl.innerHTML=tabs.map((t,i)=>`<button data-i="${i}" class="tabbtn px-4 py-2 rounded-lg text-sm whitespace-nowrap ${i===0?"tab-active":""}">${t.label}</button>`).join("");
tabEl.querySelectorAll(".tabbtn").forEach(b=>b.addEventListener("click",()=>{
  tabEl.querySelectorAll(".tabbtn").forEach(x=>x.classList.remove("tab-active"));
  b.classList.add("tab-active");
  renderTab(tabs[+b.dataset.i].id);
}));

let carbonChart=null,effChart=null;
function renderTab(id){
  const body=document.getElementById("tabBody");
  if(id==="nl"){
    body.innerHTML=`
      <div class="grid md:grid-cols-2 gap-4">
        <div class="panel p-4">
          <div class="font-bold mb-3">提问</div>
          <div class="space-y-2" id="nlList"></div>
        </div>
        <div class="panel p-4">
          <div class="font-bold mb-3">智能体回答（含数据来源）</div>
          <div id="nlAns" class="text-sm leading-relaxed text-white/80">${nlQ[0].a}</div>
          <div class="mt-4 panel p-3 text-xs text-white/45">推理链路：IoT 表计 → 能效优化 Agent → 归因模型 → 可执行建议。每一步数据与结论可追溯。</div>
        </div>
      </div>`;
    const list=document.getElementById("nlList");
    const ans=document.getElementById("nlAns");
    list.innerHTML=nlQ.map((x,i)=>`<button data-i="${i}" class="nlbtn w-full text-left panel p-3 text-sm card-h ${i===0?"border-emerald-400/50":""}">${x.q}</button>`).join("");
    list.querySelectorAll(".nlbtn").forEach(b=>b.addEventListener("click",()=>{
      list.querySelectorAll(".nlbtn").forEach(x=>x.style.borderColor="");
      b.style.borderColor="rgba(34,211,170,.5)";
      ans.textContent="";
      const q=nlQ[+b.dataset.i];
      let j=0;const full=q.a;
      const iv=setInterval(()=>{ans.textContent=full.slice(0,j+=2);if(j>=full.length)clearInterval(iv);},18);
    }));
  }
  if(id==="carbon"){
    body.innerHTML=`
      <div class="grid md:grid-cols-3 gap-4">
        <div class="panel p-4"><div class="text-xs text-white/40">月碳排</div><div class="text-2xl font-black brand">68.4 t</div><div class="text-xs text-white/40">-5.6 t 环比</div></div>
        <div class="panel p-4"><div class="text-xs text-white/40">碳强度</div><div class="text-2xl font-black">0.42</div><div class="text-xs text-white/40">tCO₂e/㎡·年</div></div>
        <div class="panel p-4"><div class="text-xs text-white/40">绿电占比</div><div class="text-2xl font-black brand">31%</div><div class="text-xs text-white/40">+8% vs 园区</div></div>
      </div>
      <div class="panel p-4 mt-4"><div class="font-bold mb-2">范围 1/2/3 排放（近 12 月）</div><div id="carbonChart" style="height:300px"></div></div>`;
    carbonChart=echarts.init(document.getElementById("carbonChart"));
    const m=["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"];
    carbonChart.setOption({
      tooltip:{trigger:"axis"},legend:{textStyle:{color:"#93a4c3"},data:["范围1","范围2","范围3"]},
      grid:{left:40,right:20,top:40,bottom:30},
      xAxis:{type:"category",data:m,axisLine:{lineStyle:{color:"#2a3a5e"}}},
      yAxis:{type:"value",name:"tCO₂e",axisLine:{lineStyle:{color:"#2a3a5e"}}},
      series:[
        {name:"范围1",type:"bar",stack:"a",data:[12,11,10,12,15,18,20,19,16,13,11,12],itemStyle:{color:"#22d3aa"}},
        {name:"范围2",type:"bar",stack:"a",data:[30,28,25,27,33,40,46,43,36,30,27,29],itemStyle:{color:"#37b3ff"}},
        {name:"范围3",type:"bar",stack:"a",data:[15,14,13,15,17,20,22,21,18,15,14,15],itemStyle:{color:"#7c6cff"}},
      ]
    });
  }
  if(id==="eff"){
    body.innerHTML=`
      <div class="grid md:grid-cols-2 gap-4">
        <div class="panel p-4"><div class="font-bold mb-2">近 30 天负荷曲线（模拟）</div><div id="effChart" style="height:260px"></div></div>
        <div class="panel p-4">
          <div class="font-bold mb-3">智能体建议</div>
          <ul class="space-y-3 text-sm text-white/70">
            <li class="flex gap-2"><span class="badge bg-amber-400/15 text-amber-300">高收益</span><span>夜谷电价运行冷机预冷，预计月省 8,400 kWh（-9% 碳排）</span></li>
            <li class="flex gap-2"><span class="badge bg-sky-400/15 text-sky-300">中收益</span><span>办公区照明分时段策略，预计月省 2,100 kWh</span></li>
            <li class="flex gap-2"><span class="badge bg-emerald-400/15 text-emerald-300">持续</span><span>增加 BIPV 光伏 120 kW，年绿电占比可升至 38%</span></li>
          </ul>
        </div>
      </div>`;
    effChart=echarts.init(document.getElementById("effChart"));
    const days=Array.from({length:30},(_,i)=>i+1);
    effChart.setOption({
      tooltip:{trigger:"axis"},grid:{left:40,right:20,top:20,bottom:30},
      xAxis:{type:"category",data:days,axisLine:{lineStyle:{color:"#2a3a5e"}}},
      yAxis:{type:"value",name:"kWh",axisLine:{lineStyle:{color:"#2a3a5e"}}},
      series:[{name:"负荷",type:"line",smooth:true,data:days.map(d=>600+Math.sin(d/3)*180+Math.random()*60),areaStyle:{color:"rgba(34,211,170,.15)"},lineStyle:{color:"#22d3aa",width:2},itemStyle:{color:"#22d3aa"}}]
    });
  }
  if(id==="risk"){
    body.innerHTML=`
      <div class="grid md:grid-cols-2 gap-4">
        <div>
          <div class="font-bold mb-3">预警事件</div>
          <div class="space-y-3">${risks.map(r=>`
            <div class="panel p-4">
              <div class="flex items-center justify-between"><span class="badge ${r.lv==="高"?"bg-red-400/15 text-red-300":"bg-amber-400/15 text-amber-300"}">${r.lv}优先级</span><span class="text-xs text-white/40">${r.time}</span></div>
              <div class="font-bold mt-2">${r.t}</div>
              <p class="text-sm text-white/55 mt-1">${r.d}</p>
              <div class="text-xs text-white/35 mt-2">来源：${r.src}</div>
            </div>`).join("")}
          </div>
        </div>
        <div>
          <div class="font-bold mb-3">关联工单（自动派发）</div>
          <div class="space-y-3">${workOrders.map(w=>`
            <div class="panel p-4 flex items-center justify-between gap-3">
              <div><div class="text-xs text-white/40 font-mono">${w.no}</div><div class="font-bold text-sm">${w.title}</div></div>
              <span class="badge ${w.status==="已完成"?"bg-emerald-400/15 text-emerald-300":w.status==="处理中"?"bg-sky-400/15 text-sky-300":"bg-white/10 text-white/60"}">${w.status}</span>
            </div>`).join("")}
          </div>
        </div>
      </div>`;
  }
  if(id==="report"){
    body.innerHTML=`
      <div class="panel p-5">
        <div class="flex items-center justify-between mb-4"><div class="font-bold text-lg">ESG 报告章节（自动生成 · 摘要）</div><span class="chip"><span class="dot" style="background:var(--brand)"></span> GRI 305/306 映射</span></div>
        <div class="space-y-4 text-sm leading-relaxed text-white/75">
          <p><b class="text-white">环境 E：</b>本园区年度碳排放强度 0.42 tCO₂e/㎡·年，同比下降 8%。绿电占比 31%，较园区均值高 8 个百分点；BIPV 光伏贡献可再生电力约 14%。</p>
          <p><b class="text-white">社会 S：</b>员工安全工单闭环率 94%，培训人均时长 12.5 小时（+2 小时）。租户满意度 91%，社区服务响应中位时间 47 分钟。</p>
          <p><b class="text-white">治理 G：</b>ESG 数据接入 8 类来源，报告可审计链路完整；范围 3 数据缺口 12% 已列入整改，预计下一披露周期补齐。</p>
        </div>
        <div class="flex gap-3 mt-5">
          <button class="px-4 py-2 rounded-lg bg-gradient-to-r from-emerald-400 to-sky-400 text-slate-900 font-bold text-sm" onclick="alert('演示：导出 Markdown / PDF')">导出报告</button>
          <button class="px-4 py-2 rounded-lg border border-white/15 text-white/70 text-sm" onclick="alert('演示：生成绩别差距分析')">差距分析</button>
        </div>
      </div>`;
  }
}
renderTab("nl");
window.addEventListener("resize",()=>{carbonChart&&carbonChart.resize();effChart&&effChart.resize();});
