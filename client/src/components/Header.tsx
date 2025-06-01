import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logoSvg from "../assets/noor-pharmacy-logo.svg";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/src/assets/noor-pharmacy-logo.svg" 
              alt="Noor Pharmacy Logo" 
              className="h-12 w-auto"
            />
            <div>
              <h1 className="text-2xl font-bold text-medical-green">NOOR PHARMACY</h1>
              <p className="text-sm text-slate-grey opacity-75">WITH DEPT.INC.</p>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('home')} 
              className="text-slate-grey hover:text-medical-green font-medium transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="text-slate-grey hover:text-medical-green font-medium transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-slate-grey hover:text-medical-green font-medium transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-slate-grey hover:text-medical-green font-medium transition-colors"
            >
              Contact
            </button>
          </nav>
          
          {/* Emergency Contact - Desktop */}
          <div className="hidden lg:flex items-center space-x-2 text-trust-blue">
            <Phone className="w-5 h-5" />
            <a href="tel:347-396-5303" className="font-semibold hover:text-blue-700 transition-colors">
              347-396-5303
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-slate-grey p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('home')} 
                className="text-left text-slate-grey hover:text-medical-green font-medium transition-colors py-2"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('services')} 
                className="text-left text-slate-grey hover:text-medical-green font-medium transition-colors py-2"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="text-left text-slate-grey hover:text-medical-green font-medium transition-colors py-2"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-left text-slate-grey hover:text-medical-green font-medium transition-colors py-2"
              >
                Contact
              </button>
              <a 
                href="tel:347-396-5303" 
                className="flex items-center space-x-2 text-trust-blue font-semibold py-2"
              >
                <Phone className="w-5 h-5" />
                <span>347-396-5303</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
