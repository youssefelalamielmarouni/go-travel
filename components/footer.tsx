"use client";
import { motion } from "framer-motion";
import { Sparkles, MapPin, Headset } from "lucide-react";

const footer = () => {
    return (
        <footer className="bg-gray-800 text-gray-300 py-12 mt-24">
            <div className="container mx-auto px-6 text-center">
                <div className="mb-6">
                    <h2 className="text-2xl font-bold mb-2">Go Travel</h2>
                    <p className="text-sm">© 2024 Go Travel. All rights reserved.</p>
                </div>
                <div className="flex justify-center space-x-6 mb-6">
                    <a href="#" className="hover:text-white transition-colors"> 
                        <Sparkles size={24} />
                    </a>
                    <a href="#" className="hover:text-white transition-colors">
                        <MapPin size={24} />
                    </a>
                    <a href="#" className="hover:text-white transition-colors">
                        <Headset size={24} />
                    </a>
                </div>
                <div className="text-sm">
                    <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                    <span className="mx-2">|</span>
                    <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
}

export default footer;