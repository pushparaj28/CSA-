import { CheckCircle2, Folder, FileCode, ImageIcon, Activity, Database, Cloud, Zap, ArrowRight, Star } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useEffect, useState, useRef } from 'react';

const carouselImages = [
  { url: '/assets/images/img1.jpg', title: 'Portal Launch' },
  { url: '/assets/images/img3.jpg', title: 'Global Expansion' },
  { url: '/assets/images/img4.jpg', title: 'Future Readiness' },
  { url: '/assets/images/img5.jpg', title: 'Skill Validation' },
  { url: '/assets/images/img6.jpg', title: 'Network Infrastructure' },
  { url: '/assets/images/img8.jpg', title: 'Technical Excellence' },
];

export default function App() {
  const [scrollX, setScrollX] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const nextScroll = carouselRef.current.scrollLeft + 1;
        if (nextScroll >= carouselRef.current.scrollWidth - carouselRef.current.clientWidth) {
          carouselRef.current.scrollTo({ left: 0, behavior: 'auto' });
        } else {
          carouselRef.current.scrollBy({ left: 1, behavior: 'auto' });
        }
      }
    }, 20);
    return () => clearInterval(interval);
  }, []);

  const folders = [
    { name: 'assets/images', items: 6, icon: <ImageIcon size={18} />, color: 'bg-blue-500' },
    { name: 'components', items: 3, icon: <FileCode size={18} />, color: 'bg-emerald-500' },
    { name: 'pages', items: 7, icon: <Folder size={18} />, color: 'bg-amber-500' },
    { name: 'public/uploads', items: 1, icon: <Activity size={18} />, color: 'bg-rose-500' },
  ];

  return (
    <div className="min-h-screen bg-[#F2F2F7] text-[#1C1C1E] p-4 md:p-8 font-sans transition-colors duration-500 overflow-x-hidden selection:bg-indigo-100">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 space-y-4 md:space-y-0">
          <div>
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 mb-2"
            >
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Project Active</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-5xl font-black tracking-tighter text-slate-900"
            >
              Skill India <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">ITOT</span>
            </motion.h1>
          </div>
          <div className="flex items-center gap-4 bg-white/50 backdrop-blur-sm p-2 rounded-2xl border border-white/20">
            <div className="text-right px-4">
              <p className="text-[10px] uppercase font-bold tracking-widest text-slate-400">Deployment</p>
              <p className="text-sm font-bold text-slate-900 italic">V1.0.4-Stable</p>
            </div>
            <div className="w-12 h-12 bg-white rounded-xl shadow-lg shadow-slate-200/50 flex items-center justify-center border border-slate-100">
              <CheckCircle2 size={24} className="text-emerald-500" />
            </div>
          </div>
        </header>

        {/* Bento Grid */}
        <div className="grid grid-cols-12 auto-rows-min gap-6">
          
          {/* Hero Carousel Section */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="col-span-12 lg:col-span-8 bg-white rounded-[40px] p-2 border border-slate-200 shadow-xl shadow-slate-200/50 relative overflow-hidden"
          >
            <div 
              ref={carouselRef}
              className="flex gap-2 overflow-x-auto scrollbar-hide snap-x h-[400px] rounded-[32px]"
              style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
            >
              {carouselImages.map((img, idx) => (
                <div 
                  key={idx} 
                  className="min-w-[80%] md:min-w-[60%] lg:min-w-[50%] h-full relative snap-center group overflow-hidden first:rounded-l-[32px] last:rounded-r-[32px]"
                >
                  <img 
                    src={img.url} 
                    alt={img.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                    <p className="text-white font-bold text-xl tracking-tight">{img.title}</p>
                    <p className="text-white/70 text-xs mt-1 uppercase tracking-widest font-semibold flex items-center gap-2">
                       Internal Asset <ArrowRight size={12} />
                    </p>
                  </div>
                </div>
              ))}
              {/* Loop Duplicate for seamless scroll feel */}
              {carouselImages.map((img, idx) => (
                <div 
                  key={`dup-${idx}`} 
                  className="min-w-[80%] md:min-w-[60%] lg:min-w-[50%] h-full relative snap-center group overflow-hidden"
                >
                  <img 
                    src={img.url} 
                    alt={img.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop`;
                    }}
                  />
                </div>
              ))}
            </div>
            <div className="absolute top-8 left-8 z-10">
              <span className="px-4 py-1.5 bg-white/90 backdrop-blur-md text-slate-900 text-[10px] font-black rounded-full uppercase tracking-widest shadow-sm flex items-center gap-2">
                <Star size={10} className="fill-indigo-500 text-indigo-500" /> Live Feed
              </span>
            </div>
          </motion.div>

          {/* Metric Card */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="col-span-12 lg:col-span-4 bg-indigo-600 rounded-[40px] p-10 text-white relative overflow-hidden group cursor-pointer shadow-lg shadow-indigo-200"
          >
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] opacity-60">System Sync</h3>
                <p className="text-7xl font-black mt-4 tracking-tighter group-hover:scale-105 transition-transform origin-left">100%</p>
              </div>
              <div className="mt-8">
                <p className="text-sm font-medium leading-relaxed opacity-80">
                  Infrastructure verified. All assets mapped to ITOT specifications.
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map(i => <div key={i} className="w-8 h-8 rounded-full border-2 border-indigo-400 bg-white/20" />)}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">Architects Online</span>
                </div>
              </div>
            </div>
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-white/10 rounded-full blur-3xl transition-all group-hover:bg-white/20"></div>
          </motion.div>

          {/* Module Density Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="col-span-12 lg:col-span-4 bg-white rounded-[40px] p-10 border border-slate-200 shadow-sm flex flex-col"
          >
            <div className="flex justify-between items-center mb-8">
              <h4 className="text-lg font-black text-slate-800 tracking-tight flex items-center gap-3 italic">
                <Database size={20} className="text-indigo-600" /> Structure
              </h4>
              <Zap size={20} className="text-amber-500 animate-pulse" />
            </div>
            <div className="space-y-6 flex-grow">
              {folders.map((f) => (
                <div key={f.name} className="group">
                  <div className="flex justify-between text-[10px] font-black text-slate-400 uppercase tracking-[0.1em] mb-2 px-1">
                    <span>{f.name}</span>
                    <span className="text-slate-900">{f.items} files</span>
                  </div>
                  <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden p-0.5 border border-slate-50">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${(f.items / 10) * 100}%` }}
                      transition={{ duration: 1.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      className={`h-full ${f.color} rounded-full`}
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Folder Explorer Grid */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="col-span-12 lg:col-span-8 bg-slate-900 rounded-[40px] p-10 text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-10 opacity-10">
              <Cloud size={120} />
            </div>
            <div className="relative z-10">
              <h4 className="text-2xl font-black tracking-tight mb-8">Asset Explorer</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {folders.map((f) => (
                  <div 
                    key={f.name} 
                    className="bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-3xl hover:bg-white/10 transition-all group cursor-pointer hover:-translate-y-1"
                  >
                    <div className={`w-10 h-10 ${f.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      {f.icon}
                    </div>
                    <p className="text-[10px] font-extrabold uppercase tracking-widest text-white/40 mb-1">Module</p>
                    <p className="text-sm font-bold text-white truncate">/{f.name.split('/').pop()}</p>
                  </div>
                ))}
              </div>
              <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-8">
                <div className="flex gap-3">
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  <div className="w-3 h-3 rounded-full bg-indigo-500 opacity-50" />
                  <div className="w-3 h-3 rounded-full bg-rose-500 opacity-30" />
                </div>
                <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-indigo-400 hover:text-indigo-300 transition-colors">
                  Open Root Directory <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        <footer className="mt-20 flex flex-col md:flex-row justify-between items-center py-10 border-t border-slate-200">
          <div className="flex flex-col items-center md:items-start space-y-2">
            <h2 className="text-xl font-black italic tracking-tighter text-slate-900 uppercase">ITOT Skill India</h2>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.3em]">&copy; 2026 ARCHITECTURE PORTAL</p>
          </div>
          <div className="flex gap-3 mt-8 md:mt-0">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="h-1.5 w-8 bg-slate-200 rounded-full hover:bg-indigo-400 transition-colors cursor-pointer" />
            ))}
          </div>
        </footer>
      </div>
    </div>
  );
}


