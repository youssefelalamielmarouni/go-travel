"use client";
import { motion } from "framer-motion";
import { Sparkles, MapPin, Headset } from "lucide-react";

const Value = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const values = [
    {
      title: "Personalized Itineraries",
      desc: "We create custom travel plans tailored to your interests and preferences.",
      icon: <Sparkles className="w-8 h-8 text-blue-600" />,
    },
    {
      title: "Expert Guides",
      desc: "Our knowledgeable guides provide insider tips and local insights for an unforgettable experience.",
      icon: <MapPin className="w-8 h-8 text-blue-600" />,
    },
    {
      title: "24/7 Support",
      desc: "Our dedicated support team is available around the clock to assist you during your travels.",
      icon: <Headset className="w-8 h-8 text-blue-600" />,
    },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-3">
            The Go Travel Edge
          </h2>
          <p className="text-3xl md:text-5xl font-bold text-gray-900">
            Why travel with us?
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {values.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col items-center text-center"
            >
              <div className="mb-6 p-4 bg-blue-50 rounded-xl">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Value;