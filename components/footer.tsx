"use client";
import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter, Youtube, Globe, ArrowUpRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-950 text-white min-h-[80vh] flex flex-col justify-between overflow-hidden pt-32 pb-12">
      
      {/* 1. Background "Grandeur" Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none">
        <h2 className="text-[18vw] font-black text-white/2 whitespace-nowrap uppercase tracking-tighter">
          Go Travel
        </h2>
      </div>

      <div className="container mx-auto px-6 relative z-10 grow flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-32">
          
          {/* 2. Left Side: Massive Heading */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-6xl md:text-8xl font-bold mb-4 leading-none tracking-tight">
              Ready for your <br />
              <span className="text-blue-500 italic">next adventure?</span>
            </h2>
          </motion.div>

          {/* 3. Right Side: Premium Contact Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex lg:justify-end"
          >
            <button className="group relative flex items-center gap-4 bg-white text-slate-950 px-12 py-8 rounded-full font-bold text-2xl hover:bg-blue-500 hover:text-white transition-all duration-500">
              <a href="/contact">Contact Us </a>
              <div className="bg-slate-950 text-white p-2 rounded-full group-hover:bg-white group-hover:text-blue-500 transition-colors">
                <ArrowUpRight size={15} />
              </div>
            </button>
          </motion.div>
        </div>

        {/* 4. Designer Tag (The "Signature") */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mb-12 border-l-2 border-blue-500 pl-6 py-2"
        >
          <p className="text-gray-500 text-sm uppercase tracking-[0.2em] mb-1">Developed by</p>
          <p className="text-xl font-medium text-gray-300">
            Youssef El Alami El Marouni
          </p>
        </motion.div>
      </div>

      {/* 5. Social & Bottom Info */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-500/10 rounded-lg">
                <Globe className="text-blue-500" size={24} />
            </div>
            <span className="text-2xl font-black tracking-tighter uppercase">Go Travel</span>
          </div>
          
          <div className="flex space-x-10">
            {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
              <a key={i} href="https://www.instagram.com/you_ssefelalami/" 
               className="text-gray-500 hover:text-white transform hover:-translate-y-1 transition-all duration-300">
                <Icon size={22} />
              </a>
            ))}
          </div>

          <div className="flex flex-col items-end gap-2">
            
            <p className="text-gray-600 text-[10px] uppercase tracking-widest">
              &copy; {currentYear} Go Travel. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;