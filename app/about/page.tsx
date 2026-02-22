"use client";
import { motion } from "framer-motion";
import { Globe, Heart, Award, Users } from "lucide-react";

const AboutPage = () => {
  const stats = [
    { label: "Destinations", value: "150+" },
    { label: "Happy Travelers", value: "25k" },
    { label: "Expert Guides", value: "100+" },
    { label: "Years Experience", value: "12" },
  ];

  return (
    <main className="bg-white min-h-screen">
      {/* --- CINEMATIC HERO --- */}
      <section className="relative h-[60vh] flex items-center bg-slate-950 overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover"
            alt="Old map and camera"
          />
        </motion.div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-7xl md:text-9xl font-black text-white tracking-tighter uppercase"
          >
            Our <span className="text-blue-500 italic">Story</span>
          </motion.h1>
        </div>
      </section>

      {/* --- THE MANIFESTO SECTION --- */}
      <section className="py-32 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-blue-600 font-bold tracking-widest uppercase text-xs mb-6">
              Who we are
            </h2>
            <p className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-8">
              We believe travel is the only thing you buy that makes you <span className="text-blue-600 underline decoration-4 underline-offset-8">richer.</span>
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Founded in 2014, Go Travel was born out of a simple passion: to help people discover the world's most hidden corners with ease, safety, and a touch of luxury. We don't just book trips; we craft life-changing memories.
            </p>
            
            {/* Signature Area */}
            <div className="border-l-4 border-blue-500 pl-6 py-2">
              <p className="text-slate-900 font-bold text-xl italic">
                "We treat every itinerary as if it were our own."
              </p>
              <p className="text-slate-500 text-sm mt-2 uppercase tracking-widest font-bold">
                — Youssef El alami el marouni, developer & founder
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-96 rounded-[3rem] overflow-hidden shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&q=80&w=800" 
              className="w-full h-full object-cover" 
              alt="Traveler looking at mountains"
            />
          </motion.div>
        </div>
      </section>

      {/* --- STATS COUNTER --- */}
      <section className="py-24 bg-slate-950 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
            <h2 className="text-[20vw] font-black text-white whitespace-nowrap -translate-x-1/4 translate-y-1/4">GO TRAVEL</h2>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {stats.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <p className="text-6xl font-black text-blue-500 mb-2">{stat.value}</p>
                <p className="text-gray-400 uppercase tracking-widest text-xs font-bold">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CORE VALUES GRID --- */}
      <section className="py-32 container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Our Foundation
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: <Globe />, title: "Authenticity", desc: "Real experiences in real places with local hearts." },
            { icon: <Heart />, title: "Passion", desc: "Our team lives and breathes adventure." },
            { icon: <Award />, title: "Quality", desc: "Handpicked stays that define luxury." },
            { icon: <Users />, title: "Community", desc: "Traveling together to make the world smaller." },
          ].map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:bg-white hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- THE SIGNATURE FOOTER (Matching Style) --- */}
      <footer className="bg-slate-950 py-12">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
            <p>© 2026 Go Travel. Designed by Youssef El alami el marouni</p>
            <div className="flex gap-8 mt-4 md:mt-0 uppercase tracking-widest font-bold text-[10px]">
                <a href="/contact" className="hover:text-blue-500">Contact Us</a>
                <a href="/" className="hover:text-blue-500">Home</a>
            </div>
        </div>
      </footer>
    </main>
  );
};

export default AboutPage;