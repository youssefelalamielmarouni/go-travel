"use client";
import { motion } from "framer-motion";
import { Search, MapPin, ArrowRight, SlidersHorizontal } from "lucide-react";

const DestinationsPage = () => {
  const categories = ["All", "Mountain", "Beach", "City", "Desert", "Forest"];

  const destinations = [
    { title: "Swiss Alps", loc: "Switzerland", img: "https://bt-incoming.com/wp-content/uploads/2023/10/switzerland-lauterbrunnen-village-and-waterfall-1024x769.jpeg", price: "$1,200", size: "tall" },
    { title: "Bali Shores", loc: "Indonesia", img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=800", price: "$850", size: "normal" },
    { title: "Kyoto Temples", loc: "Japan", img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=800", price: "$1,400", size: "normal" },
    { title: "Santorini Blue", loc: "Greece", img: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&q=80&w=800", price: "$2,100", size: "tall" },
    { title: "Sahara Dunes", loc: "Morocco", img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/497722350.jpg?k=176a8e748e4fa49eb897106d1986c6ce8ccc01763bb39c21681ed10d3817f7ea&o=", price: "$900", size: "normal" },
    { title: "Amalfi Coast", loc: "Italy", img: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=800", price: "$1,800", size: "normal" },
  ];

  return (
    <main className="bg-white min-h-screen font-sans overflow-hidden">
      
      {/* --- HERO HEADER --- */}
      <section className="relative h-screen flex items-center justify-center bg-slate-950">
        <motion.div 
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.7 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover"
            alt="Travel background"
          />
        </motion.div>
        
        {/* Soft elegant overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-slate-950/40 via-transparent to-white" />

        <div className="relative z-10 text-center px-6">
          <motion.span 
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            animate={{ opacity: 1, letterSpacing: "0.2em" }}
            className="text-blue-500 uppercase font-bold text-sm mb-4 block"
          >
            Curated Experiences
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-7xl md:text-9xl font-black text-white tracking-tighter"
          >
            DISCOVER
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-slate-200 text-lg md:text-xl mt-4 max-w-2xl mx-auto font-light"
          >
            Escape the ordinary and explore the world's most breathtaking hidden gems.
          </motion.p>
        </div>
      </section>

      

      {/* --- MASONRY-STYLE GRID --- */}
      <section className="py-32 container mx-auto px-6">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {destinations.map((dest, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="relative group cursor-pointer break-inside-avoid"
            >
              <div className={`relative overflow-hidden rounded-[2.5rem] shadow-2xl ${dest.size === 'tall' ? 'h-screen' : 'h-96'}`}>
                <img 
                  src={dest.img} 
                  alt={dest.title}
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110" 
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/90 via-slate-900/20 to-transparent opacity-80" />
                
                {/* Float Price Tag */}
                <div className="absolute top-8 left-8 bg-white/10 backdrop-blur-xl text-white px-5 py-2 rounded-full text-xs font-bold border border-white/20 tracking-widest uppercase">
                  {dest.price} / per trip
                </div>

                <div className="absolute bottom-10 left-10 right-10 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center gap-2 text-blue-400 mb-3 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                    <MapPin size={16} />
                    <span className="text-[10px] uppercase tracking-[0.3em] font-black">{dest.loc}</span>
                  </div>
                  <h3 className="text-4xl font-bold tracking-tight mb-4">{dest.title}</h3>
                  
                  
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- PERSONAL SIGNATURE FOOTER (Minimal Version for Destination Page) --- */}
      <section className="bg-slate-50 py-12 border-t border-slate-100">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-slate-400 text-sm">
            <p>© 2026 Go Travel. Designed by Youssef El alami el marouni</p>
            <div className="flex gap-8 mt-4 md:mt-0">
                <a href="#" className="hover:text-blue-600 transition-colors uppercase tracking-widest font-bold text-[10px]">Instagram</a>
                <a href="#" className="hover:text-blue-600 transition-colors uppercase tracking-widest font-bold text-[10px]">Facebook</a>
            </div>
        </div>
      </section>
    </main>
  );
};

export default DestinationsPage;