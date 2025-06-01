import { Phone, Mail, MapPin, ExternalLink } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-grey text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-medical-green rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L13.09 8.26L16.74 9.35L13.09 10.44L12 16.7L10.91 10.44L7.26 9.35L10.91 8.26L12 2Z"/>
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-bold">NOOR PHARMACY</h2>
                <p className="text-sm opacity-75">WITH DEPT.INC.</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Your trusted local pharmacy in Jackson Heights, committed to providing exceptional healthcare 
              services and building a healthier community, one prescription at a time.
            </p>
            <div className="flex space-x-4">
              <a 
                href="tel:347-396-5303" 
                className="bg-trust-blue hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors flex items-center space-x-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </a>
              <a 
                href="mailto:noorpharmacynycgmail.com" 
                className="border border-gray-500 hover:border-white px-4 py-2 rounded-lg transition-colors flex items-center space-x-2"
              >
                <Mail className="w-4 h-4" />
                <span>Email Us</span>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h6 className="font-bold mb-4">Quick Links</h6>
            <ul className="space-y-2 text-gray-300">
              <li>
                <button 
                  onClick={() => scrollToSection('home')} 
                  className="hover:text-white transition-colors text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')} 
                  className="hover:text-white transition-colors text-left"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')} 
                  className="hover:text-white transition-colors text-left"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="hover:text-white transition-colors text-left"
                >
                  Contact
                </button>
              </li>
              <li>
                <a 
                  href="tel:347-396-5303" 
                  className="hover:text-white transition-colors"
                >
                  Schedule Delivery
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h6 className="font-bold mb-4">Contact Info</h6>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-sm">37-03 73rd Street<br>Jackson Heights, NY 11372</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a href="tel:347-396-5303" className="text-sm hover:text-white transition-colors">
                  347-396-5303
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a 
                  href="mailto:noorpharmacynycgmail.com" 
                  className="text-sm break-all hover:text-white transition-colors"
                >
                  noorpharmacynycgmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-600 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Noor Pharmacy with Dept.Inc. All rights reserved. | Licensed Pharmacy in New York State</p>
        </div>
      </div>
    </footer>
  );
}
