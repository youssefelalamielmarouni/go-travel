"use client";
import { motion } from "framer-motion";
import { Map, Compass, Mountain, Tent } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative w-full h-[100vh] flex items-center justify-center overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 5, ease: "easeOut" }}
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=2000" 
          alt="Mountains"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay to ensure text contrast */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10 text-white">
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Explore the World <br /> 
          <span className="text-blue-400">with Go Travel</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Your adventure starts here. Discover new destinations, plan your trips, and create unforgettable memories.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <button className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/30 font-semibold rounded-full hover:bg-white/20 transition-all">
            <a href="/about">Learn More</a>
          </button>
        </motion.div>
      </div>

      {/* Floating Icons */}
      <motion.div
        className="absolute bottom-10 left-0 right-0 flex justify-center space-x-10 text-white/70"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        {[Map, Compass, Mountain, Tent].map((Icon, index) => (
          <motion.div 
            key={index}
            whileHover={{ y: -5, color: "#60a5fa" }}
            className="cursor-pointer"
          >
            <Icon size={28} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Hero;