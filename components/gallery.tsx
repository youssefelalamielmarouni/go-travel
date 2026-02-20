"use client";
import { motion } from "framer-motion";

const Gallery = () => {
  const images = [
    "https://www.moxeemarketing.com/wp-content/uploads/2023/08/Long-boat-and-rocks-on-railay-beach-in-Krabi-Thailand.jpg",
    "https://www.moroccokeytravel.com/wp-content/uploads/2017/10/jamaa-lafna-Marrakech-Maroc-Morocco-national-Tour-Travel-Voyage-Tourisme-Tourism.jpg",
    "https://www.moxeemarketing.com/wp-content/uploads/2023/08/Long-boat-and-rocks-on-railay-beach-in-Krabi-Thailand.jpg",
    "https://media.istockphoto.com/id/2147497907/fr/photo/jeune-femme-voyageuse-se-relaxant-et-profitant-de-la-mer-tropicale-tout-en-voyageant-pour-les.jpg?s=612x612&w=0&k=20&c=wjQPFQluMUE19O__35wASD_yScugrWt0rhuCBPSkQGM=",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/39/e6/79/morocco-best-travel-is.jpg?w=1200&h=-1&s=1",
    "https://i0.wp.com/theluxurytravelexpert.com/wp-content/uploads/2019/01/hirosaki-castle-japan.jpg?ssl=1",
    "https://cdn.ama.ab.ca/amatravelinternal/pages/landing-pages/paris-france-river-cruise.jpg",
  ];

  // We double the array to create the seamless loop effect
  const duplicatedImages = [...images, ...images];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 mb-12 text-center">
        <h2 className="text-blue-600 font-bold tracking-wide uppercase text-xl mb-3">
          Our Travel Gallery
        </h2>
        <p className="text-3xl md:text-5xl font-bold text-gray-900">
          World Through Our Lens
        </p>
      </div>

      {/* Scroller Container */}
      <div className="flex overflow-hidden group">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            ease: "linear",
            duration: 25, // Adjust speed here (higher = slower)
            repeat: Infinity,
          }}
          // Optional: Pause on hover
          whileHover={{ animationPlayState: "paused" }}
        >
          {duplicatedImages.map((src, index) => (
            <div
              key={index}
              className="w-75 md:w-112.5 h-64 md:h-80 shrink-0 px-2"
            >
              <img
                src={src}
                alt={`Gallery ${index}`}
                className="w-full h-full object-cover rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;