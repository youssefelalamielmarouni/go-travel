"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, Users, MapPin, Calendar, Mail, Phone, User } from "lucide-react";

const ContactPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    adults: 1,
    kids: 0,
    message: ""
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    let newErrors: Record<string, string> = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email.includes("@")) newErrors.email = "Valid email is required";
    if (!formData.destination) newErrors.destination = "Please select a destination";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

interface FormData {
    name: string;
    email: string;
    phone: string;
    destination: string;
    adults: number | string;
    kids: number | string;
    message: string;
}

const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (validate()) {
        setIsSubmitted(true);
        // Here you would typically send data to your backend
        setTimeout(() => setIsSubmitted(false), 5000);
    }
};

  return (
    <main className="bg-blue-100 min-h-screen pt-24">
      <div className="container mx-auto px-6 py-12">
        {/* --- HEADER --- */}
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-blue-600 font-bold tracking-widest uppercase text-xs mb-3"
          >
            Get in touch
          </motion.h2>
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter uppercase"
          >
            Plan your <br /> <span className="text-blue-600 italic">Masterpiece</span>
          </motion.h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* --- LEFT: CONTACT INFO --- */}
          <div className="lg:col-span-4 space-y-12">
            <div className="bg-blue-500 p-10 rounded-[3rem] text-slate-950 relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-blue-500/40 transition-all duration-700" />
               <h3 className="text-2xl font-bold mb-8">Our Concierge</h3>
               <div className="space-y-6">
                  <div className="flex items-center gap-4 text-slate-900 hover:text-white transition-colors">
                    <div className="p-3 bg-white/5 rounded-2xl"><Mail size={20}/></div>
                    <span>hello@gotravel.com</span>
                  </div>
                  <div className="flex items-center gap-4 text-slate-900 hover:text-white transition-colors">
                    <div className="p-3 bg-white/5 rounded-2xl"><Phone size={20}/></div>
                    <span>+1 (555) 000-TRAVEL</span>
                  </div>
                  <div className="flex items-center gap-4 text-slate-900 hover:text-white transition-colors">
                    <div className="p-3 bg-white/5 rounded-2xl"><MapPin size={20}/></div>
                    <span>Casablanca, Morocco</span>
                  </div>
               </div>
            </div>

            <div className="px-6">
                <p className="text-slate-400 text-sm leading-relaxed">
                  "Our team of travel designers is ready to craft an experience specifically for you. Expect a response within 24 hours."
                </p>
                <p className="mt-4 font-bold text-slate-900">— Youssef El alami el marouni</p>
            </div>
          </div>

          {/* --- RIGHT: THE FORM --- */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  onSubmit={handleSubmit}
                  className="space-y-8"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Name */}
                    <div className="space-y-2">
                      <label className="text-xs uppercase font-bold tracking-widest text-slate-500 ml-2">Full Name</label>
                      <div className={`flex items-center gap-3 bg-slate-50 p-4 rounded-2xl border ${errors.name ? 'border-red-400' : 'border-transparent'} focus-within:bg-white focus-within:ring-2 ring-blue-500/20 transition-all`}>
                        <User size={18} className="text-slate-400" />
                        <input 
                          type="text" placeholder="Enter your full name" 
                          className="bg-transparent outline-none w-full font-medium"
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label className="text-xs uppercase font-bold tracking-widest text-slate-500 ml-2">Email Address</label>
                      <div className={`flex items-center gap-3 bg-slate-50 p-4 rounded-2xl border ${errors.email ? 'border-red-400' : 'border-transparent'} focus-within:bg-white focus-within:ring-2 ring-blue-500/20 transition-all`}>
                        <Mail size={18} className="text-slate-400" />
                        <input 
                          type="email" placeholder="Enter your email address" 
                          className="bg-transparent outline-none w-full font-medium"
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Destination Select */}
                  <div className="space-y-2">
                    <label className="text-xs uppercase font-bold tracking-widest text-slate-500 ml-2">Select Destination</label>
                    <div className={`flex items-center gap-3 bg-slate-50 p-4 rounded-2xl border ${errors.destination ? 'border-red-400' : 'border-transparent'} focus-within:bg-white focus-within:ring-2 ring-blue-500/20 transition-all`}>
                      <MapPin size={18} className="text-slate-400" />
                      <select 
                        className="bg-transparent outline-none w-full font-medium cursor-pointer"
                        onChange={(e) => setFormData({...formData, destination: e.target.value})}
                      >
                        <option value="">Where to?</option>
                        <option value="swiss">Swiss Alps, Switzerland</option>
                        <option value="bali">Bali Shores, Indonesia</option>
                        <option value="santorini">Santorini, Greece</option>
                        <option value="kyoto">Kyoto, Japan</option>
                        <option value="paris">Paris, France</option>
                        <option value="desert">Desert, morocco</option>
                      </select>
                    </div>
                  </div>

                  {/* People Count */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-xs uppercase font-bold tracking-widest text-slate-500 ml-2">Adults</label>
                      <div className="flex items-center gap-3 bg-slate-50 p-4 rounded-2xl border border-transparent focus-within:bg-white focus-within:ring-2 ring-blue-500/20 transition-all">
                        <Users size={18} className="text-slate-400" />
                        <input 
                          type="number" min="1" placeholder="1" 
                          className="bg-transparent outline-none w-full font-medium"
                          onChange={(e) => setFormData({...formData, adults: parseInt(e.target.value) || 1})}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs uppercase font-bold tracking-widest text-slate-500 ml-2">Children</label>
                      <div className="flex items-center gap-3 bg-slate-50 p-4 rounded-2xl border border-transparent focus-within:bg-white focus-within:ring-2 ring-blue-500/20 transition-all">
                        <Users size={18} className="text-slate-400" />
                        <input 
                          type="number" min="0" placeholder="0" 
                          className="bg-transparent outline-none w-full font-medium"
                          onChange={(e) => setFormData({...formData, kids: parseInt(e.target.value) || 0})}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button 
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black uppercase tracking-[0.2em] py-6 rounded-2xl shadow-xl shadow-blue-500/20 transition-all flex items-center justify-center gap-4 group"
                  >
                    Request Itinerary
                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </motion.form>
              ) : (
                /* --- SUCCESS MESSAGE --- */
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-slate-50 border border-blue-100 p-16 rounded-[3.5rem] text-center flex flex-col items-center"
                >
                  <div className="w-24 h-24 bg-blue-600 text-white rounded-full flex items-center justify-center mb-8 shadow-2xl shadow-blue-500/40">
                    <CheckCircle2 size={48} />
                  </div>
                  <h3 className="text-4xl font-black text-slate-900 uppercase tracking-tighter mb-4">Message Sent</h3>
                  <p className="text-slate-500 text-lg max-w-sm mx-auto">
                    Thank you, <span className="text-slate-900 font-bold">{formData.name}</span>. Our experts are already looking into your trip to {formData.destination}. We'll contact you soon!
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="mt-10 text-blue-600 font-bold uppercase tracking-widest text-xs hover:underline"
                  >
                    Send another request
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* --- MINIMAL FOOTER --- */}
      <footer className="py-12 border-t border-slate-100 mt-24">
        <div className="container mx-auto px-6 text-center">
            <p className="text-slate-400 text-xs uppercase tracking-[0.2em]">
                &copy; 2026 Go Travel. Developed by Youssef El alami el marouni.
            </p>
        </div>
      </footer>
    </main>
  );
};

export default ContactPage;