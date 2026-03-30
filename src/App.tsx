import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Cpu, 
  Users, 
  TrendingUp, 
  Globe, 
  Wrench, 
  Zap, 
  GraduationCap, 
  Award,
  Leaf,
  Info,
  Briefcase,
  DollarSign,
  Sparkles,
  ShieldCheck,
  BarChart3,
  Lightbulb,
  Target,
  Rocket,
  HelpCircle,
  Package,
  AlertCircle,
  Layers,
  Coins,
  ChevronRight,
  ChevronDown
} from 'lucide-react';
import { cn } from './lib/utils';

// --- Components ---

const Hero = () => (
  <section id="intro" className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative overflow-hidden">
    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-50 rounded-full -mr-96 -mt-96 blur-[120px] -z-10"></div>
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-[11px] font-black uppercase tracking-[0.2em] mb-8 border border-blue-100 shadow-sm">
          <Rocket className="w-3.5 h-3.5" />
          六赫茲 2026 企業陪跑服務計劃
        </div>
        <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black text-slate-900 leading-[1.05] mb-6 tracking-tighter">
          企業陪跑 <br />
          <span className="inline-block ml-12 sm:ml-24 text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-600 to-blue-800">服務計劃</span>
        </h1>
        <div className="mb-8 flex items-center gap-3">
          <div className="h-px w-12 bg-blue-200"></div>
          <p className="text-xl sm:text-2xl font-black text-blue-700 tracking-tight">
            只需 <span className="text-3xl sm:text-4xl text-slate-900 underline decoration-blue-500/30 underline-offset-4 font-black">1 萬</span>，啟動企業 AI 轉型
          </p>
        </div>
        <p className="text-xl text-slate-500 mb-10 leading-relaxed max-w-lg font-light">
          資深顧問團隊，對接政府專案資源，協助企業跨越數位與淨零門檻，打造永續競爭力。
        </p>
        <div className="flex flex-col sm:flex-row gap-5">
          <button 
            onClick={() => document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-blue-700 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-blue-800 transition-all shadow-2xl shadow-blue-200 flex items-center justify-center gap-3 group active:scale-95"
          >
            立即預約診斷
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button 
            onClick={() => document.getElementById('success-stories')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-10 py-5 rounded-2xl border-2 border-slate-200 bg-white font-black text-lg text-slate-700 hover:bg-slate-50 transition-all active:scale-95"
          >
            實戰成效
          </button>
        </div>
        
        <div className="mt-12 flex flex-col gap-6">
          <div className="flex items-center gap-6">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden shadow-sm">
                  <img src={`https://picsum.photos/seed/user${i}/100/100`} alt="User" referrerPolicy="no-referrer" />
                </div>
              ))}
            </div>
            <p className="text-sm text-slate-400 font-black">
              已有 <span className="text-blue-700 font-black">500+</span> 家企業完成初步診斷
            </p>
          </div>
          
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-slate-100 text-slate-600 rounded-xl text-xs font-black border border-slate-200 flex items-center gap-2">
              <Briefcase className="w-3 h-3" /> 零售業首選
            </span>
            <span className="px-4 py-2 bg-slate-100 text-slate-600 rounded-xl text-xs font-black border border-slate-200 flex items-center gap-2">
              <Users className="w-3 h-3" /> 服務業轉型
            </span>
            <span className="px-4 py-2 bg-slate-100 text-slate-600 rounded-xl text-xs font-black border border-slate-200 flex items-center gap-2">
              <Wrench className="w-3 h-3" /> 製造業升級
            </span>
          </div>
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative w-full overflow-hidden lg:overflow-visible"
      >
        <div className="min-h-[500px] lg:min-h-[700px] rounded-[2.5rem] lg:rounded-[4rem] bg-gradient-to-br from-blue-600 via-indigo-700 to-slate-900 p-1.5 sm:p-2 shadow-3xl overflow-hidden group">
          <div className="w-full h-full bg-slate-900/40 backdrop-blur-md rounded-[2.4rem] lg:rounded-[3.8rem] flex flex-col items-center justify-center p-6 sm:p-12 text-center relative">
            <div className="absolute top-10 right-10 opacity-10 group-hover:opacity-20 transition-opacity">
              <Sparkles className="w-24 h-24 sm:w-48 h-48 text-blue-400" />
            </div>
            
            <div className="mb-8 lg:mb-12">
              <div className="inline-block px-4 py-1.5 sm:px-5 sm:py-2 bg-blue-500/20 rounded-full text-blue-300 text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] mb-4 sm:mb-6 border border-blue-500/30">
                限時限量 專案補助
              </div>
              <h3 className="text-3xl sm:text-5xl font-black text-white mb-4 tracking-tight">轉型啟動超值方案</h3>
              <p className="text-blue-200/60 text-sm sm:text-base font-black">六赫茲領航，減輕企業轉型負擔</p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:gap-10 w-full max-w-md">
              <div className="bg-white/5 border border-white/10 rounded-[1.5rem] lg:rounded-[2.5rem] p-6 sm:p-10 backdrop-blur-xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-blue-500/30"></div>
                <div className="flex justify-between items-center mb-4 sm:mb-6">
                  <span className="text-blue-300 text-[10px] sm:text-xs font-black uppercase tracking-widest">政府補助 19 萬</span>
                  <span className="text-emerald-400 text-[10px] sm:text-xs font-black uppercase tracking-widest">企業僅需</span>
                </div>
                <div className="flex items-baseline justify-center gap-1 sm:gap-2">
                  <span className="text-blue-400 text-xl sm:text-3xl font-black mr-1 sm:mr-2">19 +</span>
                  <span className="text-5xl sm:text-7xl font-black text-white">1</span>
                  <span className="text-xl sm:text-3xl font-black text-white">萬元</span>
                </div>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-4 sm:mt-6 font-black tracking-wider">「19+1」方案：極小化轉型成本</p>
              </div>
              
              <div className="flex justify-center relative">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-900/50 z-10 rotate-45 group-hover:rotate-0 transition-transform duration-500">
                  <ArrowRight className="w-6 h-6 sm:w-8 sm:h-8 text-white -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 sm:w-24 sm:h-24 bg-blue-50/20 rounded-full blur-xl animate-pulse"></div>
              </div>

              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-[1.5rem] lg:rounded-[2.5rem] p-6 sm:p-10 shadow-2xl relative overflow-hidden group/card">
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/card:translate-x-[100%] transition-transform duration-1500"></div>
                <span className="block text-blue-100 text-[10px] sm:text-xs font-black uppercase tracking-widest mb-4 sm:mb-6">方案包含內容</span>
                
                <div className="space-y-6 text-left">
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-white text-base font-black">輿情口碑系統 2 個月</p>
                      <p className="text-blue-100 text-xs font-black">Asgard AI 驅動，精準掌握市場聲量</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-white text-base font-black">資深零售顧問 一對一陪跑</p>
                      <p className="text-blue-100 text-xs font-black">資深零售顧問進駐，深度診斷痛點</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <div className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-emerald-400/30 flex items-center justify-center shrink-0 mt-0.5">
                        <Sparkles className="w-4 h-4 text-emerald-300" />
                      </div>
                      <div>
                        <p className="text-white text-base font-black">4小時 深度工作坊 (三選一)</p>
                        <p className="text-emerald-200 text-xs font-black mt-1 leading-relaxed">
                          消費者訪談 / AI 基礎課 / 會員經營 4小時工作坊<br />
                          (每場 4 小時)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 flex items-center gap-3 text-blue-300/60 text-[11px] font-black uppercase tracking-widest">
              <ShieldCheck className="w-4 h-4 text-blue-400" />
              官方認證法人團隊進駐輔導
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const Challenges = () => {
  const challenges = [
    {
      icon: <AlertCircle className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "轉型困惑",
      desc: "不知產業轉型如何做起。",
      color: "bg-red-50 text-red-600 border-red-100"
    },
    {
      icon: <Layers className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "資源匱乏",
      desc: "升級產品與技術缺乏相關資源。",
      color: "bg-orange-50 text-orange-600 border-orange-100"
    },
    {
      icon: <Coins className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "資金壓力",
      desc: "因應供應鏈、市場調整需要資金支持。",
      color: "bg-amber-50 text-amber-600 border-amber-100"
    },
    {
      icon: <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "技能斷層",
      desc: "勞工缺乏轉型所需的 AI 知識與技能。",
      color: "bg-rose-50 text-rose-600 border-rose-100"
    }
  ];

  return (
    <section id="challenges" className="py-20 bg-slate-50 border-y border-slate-100 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h3 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4 tracking-tight">您的企業在轉型路上是否面臨以下挑戰？</h3>
          <p className="text-base sm:text-lg text-slate-500 font-black max-w-2xl mx-auto">六赫茲深入產業第一線，了解企業在變革中所遭遇的真實困境。</p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
          {challenges.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-white rounded-[1.5rem] sm:rounded-[3rem] shadow-sm border border-slate-100 group-hover:shadow-xl group-hover:-translate-y-2 transition-all duration-500"></div>
              <div className="relative p-5 sm:p-10 flex flex-col items-center text-center">
                <div className={`w-12 h-12 sm:w-20 sm:h-20 rounded-xl sm:rounded-[2rem] flex items-center justify-center mb-4 sm:mb-8 border-2 ${item.color} group-hover:rotate-6 transition-transform duration-500 shadow-sm`}>
                  {item.icon}
                </div>
                <h4 className="text-lg sm:text-xl font-black text-slate-900 mb-2 sm:mb-4 tracking-tight">{item.title}</h4>
                <p className="text-slate-500 text-[10px] sm:text-sm leading-relaxed font-black">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <ShieldCheck className="w-7 h-7" />,
      title: "官方認證法人團隊",
      desc: "對接政府專案資源與相關法人單位，確保計畫申請與執行之專業度與合規性。",
      tag: "權威認證",
      isFeature: false
    },
    {
      icon: <Lightbulb className="w-7 h-7" />,
      title: "客製化轉型藍圖",
      desc: "不提供套版方案，而是根據企業現狀，量身打造最適合的 AI 導入路徑與數位轉型地圖。",
      tag: "量身打造",
      isFeature: false
    },
    {
      icon: <Target className="w-7 h-7" />,
      title: "高額補助對接",
      desc: "極大化利用政府資源，讓企業以最低成本，換取最高價值的專業輔導與技術導入。",
      tag: "精準對接",
      isFeature: false
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Asgard AI 輿情系統",
      desc: "獨家對接 Asgard AI 輿情口碑系統，精準掌握市場聲量與消費者真實反饋，為品牌行銷與產品定位提供科學數據依據，讓決策不再憑感覺。",
      tag: "核心特色",
      isFeature: true
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "資深零售顧問 一對一陪跑",
      desc: "資深零售顧問團隊親自進駐廠區，進行深度實地檢測與產業現況調查。六赫茲深入一線了解真實痛點，拒絕僅靠網路資料或遠端會議的紙上談兵。",
      tag: "實戰導向",
      isFeature: true
    }
  ];

  return (
    <section className="py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">為什麼選擇六赫茲？</h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto font-black">六赫茲不僅是顧問，更是您企業轉型路上的戰略夥伴。</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
          {/* Top 3 standard items */}
          {reasons.filter(r => !r.isFeature).map((r, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="md:col-span-2 group relative p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:-translate-y-1 transition-all duration-500"
            >
              <div className="absolute top-6 right-6 text-[9px] font-black text-blue-600/30 uppercase tracking-widest group-hover:text-blue-600 transition-colors">
                {r.tag}
              </div>
              <div className="w-14 h-14 bg-white text-blue-700 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-blue-700 group-hover:text-white group-hover:shadow-blue-200 transition-all duration-300">
                {r.icon}
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-3">{r.title}</h3>
              <p className="text-slate-500 leading-relaxed text-sm font-black">{r.desc}</p>
            </motion.div>
          ))}

          {/* Bottom 2 featured items */}
          {reasons.filter(r => r.isFeature).map((r, idx) => (
            <motion.div
              key={idx + 3}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (idx + 3) * 0.1, duration: 0.6 }}
              className="md:col-span-3 group relative p-10 rounded-[3rem] bg-gradient-to-br from-slate-900 to-slate-800 text-white shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-blue-600/20 transition-colors"></div>
              <div className="absolute top-8 right-8 text-[10px] font-black text-blue-400 uppercase tracking-[0.2em]">
                {r.tag}
              </div>
              <div className="w-20 h-20 bg-blue-600 text-white rounded-3xl flex items-center justify-center mb-8 shadow-xl shadow-blue-900/40 group-hover:scale-110 transition-transform duration-500">
                {r.icon}
              </div>
              <h3 className="text-3xl font-black mb-6 tracking-tight">{r.title}</h3>
              <p className="text-slate-300 leading-relaxed text-base font-black">{r.desc}</p>
              
              <a 
                href="#apply"
                className="mt-8 inline-flex items-center gap-2 text-blue-400 font-black text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all hover:text-blue-300"
              >
                <span>了解更多細節並申請</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SuccessStories = () => {
  const stories = [
    {
      company: "某指標性購物中心",
      result: "全能整合型 App",
      desc: "整合停車、票券、點數與支付系統，打造一站式頂級會員數位體驗，提升營運效率與顧客滿意度。",
      tag: "零售轉型"
    },
    {
      company: "某上市電子零組件大廠",
      result: "AI Agent 製造業應用",
      desc: "導入 AI 代理人實現自動化批號追蹤與物料生產履歷，精準控管生產品質，將 AI 轉化為企業營運的實質「肌肉」。",
      tag: "智慧製造"
    },
    {
      company: "某連鎖影城集團",
      result: "AI 智能導購助理",
      desc: "透過 AI 驅動的導購助理，協助消費者快速查找品牌與優惠資訊，優化商場互動體驗並帶動潛在消費。",
      tag: "AI 應用"
    },
    {
      company: "某大型航空公司",
      result: "網站與 App 全面改版",
      desc: "優化訂票與報到流程，提升數位服務體驗，達成品牌形象與技術實力的雙重升級。",
      tag: "航空數位"
    },
    {
      company: "某指標性商業銀行",
      result: "數據應用平台開發",
      desc: "整合多元金融數據，實現精準客群分析與信貸申辦自動化，顯著提升業務開發效率。",
      tag: "金融科技"
    },
    {
      company: "某全球面板領導大廠",
      result: "面板控制 App 開發",
      desc: "透過 A.R.T. 技術實現遠端面板精準控制與內容管理，優化工業與商業顯示應用場景。",
      tag: "科技製造"
    }
  ];

  return (
    <section id="success-stories" className="py-32 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-blue-600 rounded-full blur-[150px]"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-[10px] font-black uppercase tracking-widest mb-6 border border-blue-500/30">
              六赫茲 Success Stories
            </div>
            <h2 className="text-3xl sm:text-5xl font-black mb-6 tracking-tight">實戰成效見證</h2>
            <p className="text-lg sm:text-xl text-slate-400 font-black">歷年來六赫茲已協助超過百家企業完成轉型升級，創造實質商業價值。</p>
          </div>
          <div className="grid grid-cols-2 sm:flex gap-4 w-full sm:w-auto">
            <div className="text-center px-4 sm:px-8 py-4 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-black text-blue-400">100+</div>
              <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mt-1">輔導企業</div>
            </div>
            <div className="text-center px-4 sm:px-8 py-4 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-black text-emerald-400">百億+</div>
              <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mt-1">累計補助金額</div>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((s, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/5 p-10 rounded-[3rem] border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all group"
            >
              <div className="text-blue-400 text-xs font-black uppercase tracking-widest mb-4">{s.tag}</div>
              <h3 className="text-xl font-black mb-2">{s.company}</h3>
              <div className="text-2xl font-black text-emerald-400 mb-6">{s.result}</div>
              <p className="text-slate-400 text-sm leading-relaxed font-black">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Measures = () => {
  const layers = [
    {
      title: "市場與資金戰略 (Growth & Capital)",
      items: [
        { icon: <Globe className="w-6 h-6" />, title: '市場拓展', desc: '利用大數據分析國際趨勢，協助企業精準定位，開拓海外商機。' },
        { icon: <TrendingUp className="w-6 h-6" />, title: '金融支持', desc: '協助對接優惠融資專案，優化財務結構，確保轉型資金無虞。' },
      ]
    },
    {
      title: "核心技術轉型 (Core Capability)",
      items: [
        { icon: <Cpu className="w-6 h-6" />, title: 'AI 數位轉型', desc: '對接 Asgard AI 輿情系統與資深零售顧問一對一陪跑，精準診斷企業痛點。' },
        { icon: <Wrench className="w-6 h-6" />, title: '技術輔導', desc: '媒合法人研發資源，解決關鍵技術瓶頸，加速產品研發週期。' },
      ]
    },
    {
      title: "營運永續基石 (Operational Foundation)",
      items: [
        { icon: <Zap className="w-6 h-6" />, title: 'ESCO 節能', desc: '導入能源管理系統與節能設備，降低營運成本，達成減碳目標。' },
        { icon: <Briefcase className="w-6 h-6" />, title: '勞動力升級', desc: '優化人力資源配置，補助辦訓費用，提升員工產值與留任率。' },
      ]
    }
  ];

  return (
    <section id="overview" className="py-32 bg-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-slate-50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-[10px] font-black uppercase tracking-widest mb-6">
            六赫茲 Strategic Architecture
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 mb-6 tracking-tight">全方位戰略支援架構</h2>
          <p className="text-xl text-slate-500 font-black max-w-2xl mx-auto">
            六赫茲構建的三層戰略體系，從底層營運到核心技術，再到市場拓展，全方位支撐企業轉型。
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical line connecting layers */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2 hidden md:block"></div>

          <div className="space-y-20 relative">
            {layers.map((layer, lIdx) => (
              <div key={lIdx} className="relative">
                {/* Layer Label */}
                <div className="flex justify-center mb-10 relative">
                  <div className="absolute top-1/2 left-0 right-0 h-px bg-slate-100 -z-10 hidden md:block"></div>
                  <div className="px-8 py-3 bg-slate-900 text-white text-[10px] sm:text-xs font-black rounded-2xl tracking-[0.2em] uppercase shadow-2xl shadow-slate-200">
                    {layer.title}
                  </div>
                </div>

                {/* Items in Layer */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {layer.items.map((m, iIdx) => (
                    <motion.div
                      key={iIdx}
                      initial={{ opacity: 0, x: iIdx === 0 ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: (lIdx * 2 + iIdx) * 0.1, duration: 0.8 }}
                      className="flex gap-6 p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 group relative"
                    >
                      <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 shrink-0 group-hover:bg-blue-700 group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-200 transition-all duration-300">
                        {m.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-black text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">{m.title}</h4>
                        <p className="text-sm text-slate-500 leading-relaxed font-black">{m.desc}</p>
                      </div>
                      
                      {/* Decorative connector dot */}
                      <div className={cn(
                        "absolute top-1/2 w-3 h-3 bg-blue-500 rounded-full border-4 border-white shadow-sm hidden md:block",
                        iIdx === 0 ? "-right-1.5 -translate-y-1/2" : "-left-1.5 -translate-y-1/2"
                      )}></div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ServiceEcosystem = () => {
  const steps = [
    { title: '線上申請', desc: '填寫企業基本需求，完成初步意願登記。', icon: <Rocket className="w-5 h-5" /> },
    { title: '資格審核', desc: '由專人確認申請資格，並指派合適資深顧問團隊。', icon: <ShieldCheck className="w-5 h-5" /> },
    { title: '實地診斷', desc: '專家團隊進駐廠區，進行深度訪談與路徑規劃。', icon: <Target className="w-5 h-5" /> },
    { title: '成效追蹤', desc: '產出結案報告，並持續對接後續政府補助資源。', icon: <TrendingUp className="w-5 h-5" /> }
  ];

  return (
    <section id="service-ecosystem" className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-[10px] font-black uppercase tracking-widest mb-6">
            Standardized Workflow
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-6 tracking-tight">標準化輔導流程</h2>
          <p className="text-lg sm:text-xl text-slate-500 max-w-3xl mx-auto font-black leading-relaxed">
            專業、透明、高效的轉型路徑，確保每一個環節都精準到位。
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connecting Line - Always Horizontal */}
          <div className="absolute top-12 left-0 right-0 h-0.5 bg-slate-100 -z-10">
            <div className="absolute top-0 left-0 h-full bg-blue-700 w-0 group-hover:w-full transition-all duration-1000"></div>
          </div>

          {/* 4-Column Grid for all sizes to show all steps at once */}
          <div className="grid grid-cols-4 gap-2 sm:gap-4 lg:gap-8">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative group flex flex-col items-center text-center"
              >
                {/* Step Circle - Scaled for mobile */}
                <div className="w-12 h-12 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-xl sm:rounded-[2rem] bg-white border-2 sm:border-4 border-slate-50 shadow-md sm:shadow-lg flex flex-col items-center justify-center mb-4 sm:mb-8 group-hover:bg-blue-700 group-hover:border-blue-50 transition-all duration-500 relative z-10">
                  <span className="absolute -top-1 -left-1 sm:-top-2 sm:-left-2 w-5 h-5 sm:w-8 sm:h-8 bg-slate-900 text-white rounded-md sm:rounded-xl flex items-center justify-center text-[10px] sm:text-xs font-black group-hover:bg-emerald-500 transition-colors shadow-lg">
                    0{idx + 1}
                  </span>
                  <div className="text-slate-300 group-hover:text-blue-200 transition-colors scale-75 sm:scale-100">
                    {step.icon}
                  </div>
                </div>

                {/* Content - Scaled for mobile */}
                <div className="px-1 sm:px-4">
                  <h4 className="text-[10px] sm:text-lg lg:text-xl font-black text-slate-900 mb-1 sm:mb-3 group-hover:text-blue-700 transition-colors leading-tight">{step.title}</h4>
                  <p className="hidden sm:block text-[10px] sm:text-xs text-slate-500 leading-relaxed font-black">{step.desc}</p>
                </div>

                {/* Arrow Indicator - Always Horizontal, hidden on very small screens if too cramped */}
                {idx < steps.length - 1 && (
                  <div className="absolute top-6 sm:top-10 lg:top-12 left-[calc(100%-0.5rem)] sm:left-[calc(100%-1rem)] -translate-y-1/2 z-20 flex items-center justify-center">
                    <div className="w-4 h-4 sm:w-8 sm:h-8 rounded-full bg-white border border-slate-100 shadow-sm flex items-center justify-center text-slate-300 group-hover:text-blue-700 group-hover:border-blue-200 transition-all duration-300">
                      <ChevronRight className="w-2 h-2 sm:w-4 h-4" />
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TrustSignals = () => (
  <section className="py-12 bg-slate-50 border-y border-slate-100 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <p className="text-center text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-8">
        合作夥伴與技術對接單位
      </p>
      <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
        {['工研院', '資策會', '金屬中心', '中衛發展中心', '生產力中心'].map((name, idx) => (
          <span key={idx} className="text-xl font-black text-slate-900 tracking-tighter">{name}</span>
        ))}
      </div>
    </div>
  </section>
);

const FloatingCTA = () => (
  <motion.button
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    onClick={() => document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' })}
    className="fixed bottom-8 right-8 z-50 bg-blue-700 text-white p-4 rounded-full shadow-2xl flex items-center gap-2 font-black text-sm group"
  >
    <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap">
      立即預約診斷
    </span>
    <Rocket className="w-6 h-6" />
  </motion.button>
);

const ApplicationForm = () => {
  return (
    <section id="apply" className="py-32 bg-slate-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2"></div>
      </div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-[10px] font-black uppercase tracking-widest mb-6 border border-blue-500/30">
            Business Diagnostic
          </div>
          <div className="flex items-center justify-center gap-2 text-blue-400 mb-6">
            <Sparkles className="w-5 h-5" />
            <span className="text-sm font-black tracking-widest uppercase">只需 1 萬，啟動 AI 升級</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-6 tracking-tight">啟動您的轉型藍圖</h2>
          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-12 font-black">
            點擊下方按鈕前往 Google 表單填寫初步診斷需求。
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 text-left">
            {[
              { title: "輿情口碑系統", desc: "Asgard AI 驅動 2 個月", icon: <Zap className="w-5 h-5 text-blue-400" /> },
              { title: "資深零售顧問 一對一陪跑", desc: "資深零售顧問深度診斷乙次", icon: <Target className="w-5 h-5 text-indigo-400" /> },
              { title: "4小時 深度工作坊", desc: "三選一專業課程 4 小時", icon: <GraduationCap className="w-5 h-5 text-emerald-400" /> }
            ].map((item, idx) => (
              <div key={idx} className="bg-white/5 p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-white/10 backdrop-blur-sm">
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h4 className="text-white font-black mb-2">{item.title}</h4>
                <p className="text-slate-400 text-sm font-black">{item.desc}</p>
              </div>
            ))}
          </div>
          
          <motion.a
            href="https://docs.google.com/forms/d/e/1FAIpQLSd4532IofkzPwtXm7Ge0IXaVJGIPjEpK4EKAI4F6bOKpCWSZg/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-4 bg-white text-slate-900 px-8 sm:px-12 py-4 sm:py-6 rounded-2xl sm:rounded-[2rem] font-black text-lg sm:text-2xl shadow-2xl hover:bg-blue-50 transition-all group"
          >
            前往填寫申請表單
            <ArrowRight className="w-6 h-6 sm:w-8 sm:h-8 group-hover:translate-x-2 transition-transform" />
          </motion.a>
          
          <p className="mt-8 text-slate-500 text-sm font-light">
            * 點擊後將開啟新分頁前往官方 Google 表單
          </p>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    { q: "企業申請六赫茲陪跑計畫需要具備什麼資格？", a: "凡在台灣合法登記之企業，且無重大違規紀錄者皆可申請。六赫茲將根據企業規模與產業別，媒合最合適的補助專案。" },
    { q: "「1 萬換 20 萬」的方案包含哪些具體服務？", a: "包含 Asgard AI 輿情口碑系統 2 個月使用權、資深零售顧問一對一陪跑，以及可從「消費者訪談」、「AI 基礎課」、「會員經營」中三選一的 4小時 深度工作坊。" },
    { q: "計畫執行週期通常需要多久？", a: "初步診斷通常在 2-4 週內完成。後續的深度輔導與技術導入則視企業需求而定，通常為 3-6 個月。" },
    { q: "除了 AI 轉型，淨零排放相關的補助也可以申請嗎？", a: "是的，六赫茲採「雙軸轉型」策略，數位與淨零資源可同步對接，協助企業達成 ESG 永續目標。" }
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="py-32 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-[10px] font-black uppercase tracking-widest mb-6">
            Common Questions
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 mb-6 tracking-tight">常見問題解答</h2>
          <p className="text-lg sm:text-xl text-slate-500 font-black">解決您的疑慮，加速轉型決策過程。</p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-2xl sm:rounded-[2rem] border border-slate-100 overflow-hidden shadow-sm">
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full px-6 sm:px-8 py-4 sm:py-6 text-left flex justify-between items-center hover:bg-slate-50 transition-colors"
              >
                <span className="font-black text-slate-900 text-sm sm:text-base">{faq.q}</span>
                <div className={cn("w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-slate-100 flex items-center justify-center transition-transform shrink-0 ml-4", openIdx === idx && "rotate-180 bg-blue-700 text-white")}>
                  <Zap className="w-3 h-3 sm:w-4 sm:h-4" />
                </div>
              </button>
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-8 text-slate-500 text-sm leading-relaxed font-black">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-24 bg-white border-t border-slate-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-4 gap-16 mb-20">
        <div className="md:col-span-1">
          <h4 className="font-black text-slate-900 uppercase tracking-[0.2em] text-xs mb-8">計畫專區</h4>
          <ul className="space-y-4 text-sm text-slate-500 font-light">
            <li><button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="hover:text-blue-700 transition-colors">計畫簡介</button></li>
            <li><button onClick={() => document.getElementById('overview')?.scrollIntoView({behavior: 'smooth'})} className="hover:text-blue-700 transition-colors">策略總覽</button></li>
            <li><button onClick={() => document.getElementById('success-stories')?.scrollIntoView({behavior: 'smooth'})} className="hover:text-blue-700 transition-colors">實戰成效</button></li>
            <li><button onClick={() => document.getElementById('service-ecosystem')?.scrollIntoView({behavior: 'smooth'})} className="hover:text-blue-700 transition-colors">服務流程</button></li>
          </ul>
        </div>

        <div className="md:col-span-1"></div>

        <div className="md:col-span-2 text-right">
          <div className="flex flex-col mb-8 items-end">
            <span className="text-sm font-light text-blue-700 uppercase tracking-[0.3em] mb-1">推動產業升級</span>
            <span className="text-sm font-light text-blue-700 uppercase tracking-[0.3em]">強化企業競爭力</span>
          </div>
          <p className="text-slate-500 text-lg leading-relaxed max-w-md font-light ml-auto">
            六赫茲 (The Hex) 致力於成為企業轉型路上的最強後盾，對接政府資源，共創產業新價值。六赫茲以專業診斷為起點，陪伴企業邁向 AI 與淨零的永續未來。
          </p>
        </div>
      </div>
      
      <div className="pt-12 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-6">
          <p className="text-slate-400 text-[10px] font-light uppercase tracking-[0.3em]">
            © 2026 六赫茲 (The Hex) 產業競爭力輔導團. All rights reserved.
          </p>
        </div>
        <div className="flex gap-8 text-[10px] font-light text-slate-300 uppercase tracking-[0.3em]">
          <button className="hover:text-blue-700 transition-colors">隱私權政策</button>
          <button className="hover:text-blue-700 transition-colors">服務條款</button>
          <button className="hover:text-blue-700 transition-colors">資訊安全</button>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900">
      <Hero />
      <WhyChooseUs />
      <Challenges />
      <Measures />
      <SuccessStories />
      <ServiceEcosystem />
      <FAQ />
      <ApplicationForm />
      <Footer />
      <FloatingCTA />
    </div>
  );
}
