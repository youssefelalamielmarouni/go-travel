"use client";
import { motion } from "framer-motion";
import { Sparkles, MapPin, Headset } from "lucide-react";

const Steps = () => {
  const steps = [
    {
      title: "Choose Your Destination",
      desc: "Explore our curated list of destinations and select the one that excites you the most.",
      icon: <MapPin className="w-8 h-8" />,
      color: "bg-blue-600",
    },
    {
      title: "Customize Your Itinerary",
      desc: "Work with our travel experts to create a personalized itinerary that suits your interests.",
      icon: <Sparkles className="w-8 h-8" />,
      color: "bg-indigo-600",
    },
    {
      title: "Enjoy Your Trip",
      desc: "Embark on your adventure with the confidence that we are here to support you 24/7.",
      icon: <Headset className="w-8 h-8" />,
      color: "bg-cyan-600",
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/world-map.png')]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-blue-600 font-bold tracking-widest uppercase text-xs mb-3">
            The Process
          </h2>
          <p className="text-4xl md:text-5xl font-extrabold text-gray-900">
            How It <span className="text-blue-600">Works</span>
          </p>
        </motion.div>

        <div className="relative">
          {/* Desktop Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 border-t-2 border-dashed border-gray-200 -translate-y-12" />

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.3 } },
            }}
          >
            {steps.map((item, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="relative group flex flex-col items-center text-center"
              >
                {/* Step Number Background */}
                <span className="absolute -top-10 text-8xl font-black text-gray-80 z-0 select-none group-hover:text-blue-300 transition-colors duration-500">
                  0{index + 1}
                </span>

                {/* Icon Container */}
                <div className={`relative z-10 w-20 h-20 ${item.color} text-white rounded-3xl flex items-center justify-center shadow-2xl mb-8 transform group-hover:rotate-12 transition-transform duration-300`}>
                  {item.icon}
                </div>

                {/* Content */}
                <div className="relative z-10 bg-white/50 backdrop-blur-sm p-4 rounded-xl">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed max-w-xs mx-auto">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Steps;