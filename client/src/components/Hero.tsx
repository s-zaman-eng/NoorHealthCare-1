import { MapPin, Phone } from "lucide-react";
import pharmacyInteriorSvg from "../assets/pharmacy-interior.svg";

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative bg-gradient-to-r from-slate-800 to-slate-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl font-bold mb-6 leading-tight">
              Your Trusted <span className="text-warm-gold">Local Pharmacy</span>
            </h2>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Serving the Jackson Heights community with professional pharmacy services, 
              free delivery, and comprehensive healthcare solutions you can trust.
            </p>
            
            {/* Key Services Badges */}
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="bg-white/20 backdrop-blur px-4 py-2 rounded-full text-sm font-medium">
                ✓ Free Pickup & Delivery
              </span>
              <span className="bg-white/20 backdrop-blur px-4 py-2 rounded-full text-sm font-medium">
                ✓ All Major Insurance
              </span>
              <span className="bg-white/20 backdrop-blur px-4 py-2 rounded-full text-sm font-medium">
                ✓ Money Transfer
              </span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToContact}
                className="bg-warm-gold text-slate-grey px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition-colors text-center flex items-center justify-center space-x-2"
              >
                <MapPin className="w-5 h-5" />
                <span>Get Directions</span>
              </button>
              <a 
                href="tel:347-396-5303" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-medical-green transition-colors text-center flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </a>
            </div>
          </div>
          
          <div className="relative">
            {/* Modern pharmacy interior */}
            <div className="rounded-2xl shadow-2xl w-full h-96 overflow-hidden bg-white">
              <img 
                src={pharmacyInteriorSvg} 
                alt="Modern Pharmacy Interior - Professional medication shelves and service counter"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating stats card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 text-slate-grey max-w-xs">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-medical-green rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-medical-green">Jackson Heights</p>
                  <p className="text-sm opacity-75">Serving Local Community</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
