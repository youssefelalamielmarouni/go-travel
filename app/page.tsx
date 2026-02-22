import Hero from "@/components/hero";
import Value from "@/components/value";
import Gallery from "@/components/gallery";
import Testimonials from "@/components/Testimonials";
import Staps from "@/components/staps";
import Image from "next/image";

export default function Home() {
  return (
    <div>
        <Hero />
        <Value />
        <Gallery />
        <Testimonials />
        <Staps />
    </div>
  );
}
