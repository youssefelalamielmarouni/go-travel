"use client";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Emily R.",
      location: "New York, USA",
      feedback: "Go Travel made my dream vacation a reality! The personalized itinerary was perfect, and the support team was always there.",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5
    },
    {
      name: "Liam S.",
      location: "London, UK",
      feedback: "I had an amazing experience with Go Travel. The expert guides provided incredible insights, and the destinations were breathtaking.",
      avatar: "https://randomuser.me/api/portraits/men/22.jpg",
      rating: 5
    },
    {
      name: "Sophia M.",
      location: "Sydney, Australia",
      feedback: "The 24/7 support was a lifesaver. They handled everything smoothly, allowing me to enjoy my vacation without any worries.",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Background Blur */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-3">
            Traveler Stories
          </h2>
          <p className="text-4xl md:text-5xl font-bold text-gray-900">
            Trusted by Explorers <br /> <span className="text-blue-600">Worldwide</span>
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1 }
              }}
              whileHover={{ y: -12 }}
              className="relative bg-slate-50 p-8 rounded-3xl border border-gray-100 flex flex-col h-full"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8 bg-blue-600 text-white p-3 rounded-2xl shadow-lg">
                <Quote size={20} fill="currentColor" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6 mt-2">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-700 italic leading-relaxed mb-8 grow">
                "{item.feedback}"
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-14 h-14 rounded-full object-cover ring-4 ring-white"
                />
                <div>
                  <h3 className="font-bold text-gray-900">{item.name}</h3>
                  <p className="text-sm text-blue-600 font-medium">{item.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;