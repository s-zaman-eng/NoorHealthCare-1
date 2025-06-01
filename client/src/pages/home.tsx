import { Phone, MapPin, Truck, Shield, Pill, CreditCard, DollarSign, Clock, Mail, ExternalLink } from "lucide-react";

export default function Home() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <div className="w-14 h-14 bg-gradient-to-br from-green-600 to-green-700 rounded-xl flex items-center justify-center shadow-lg">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 100 100">
                  {/* Mortar and Pestle Design */}
                  <path d="M75 25c-2.8 0-5 2.2-5 5v5h-5c-8.3 0-15 6.7-15 15v25c0 8.3 6.7 15 15 15h10c8.3 0 15-6.7 15-15V45c0-8.3-6.7-15-15-15h-5v-5c0-2.8-2.2-5-5-5zm-5 15h10c5.5 0 10 4.5 10 10v25c0 5.5-4.5 10-10 10h-10c-5.5 0-10-4.5-10-10V50c0-5.5 4.5-10 10-10z"/>
                  <circle cx="75" cy="60" r="8" fill="rgba(255,255,255,0.3)"/>
                  <path d="M25 40c-2.8 0-5 2.2-5 5s2.2 5 5 5h15c2.8 0 5-2.2 5-5s-2.2-5-5-5H25z"/>
                  <path d="M25 55c-2.8 0-5 2.2-5 5s2.2 5 5 5h10c2.8 0 5-2.2 5-5s-2.2-5-5-5H25z"/>
                  <path d="M25 70c-2.8 0-5 2.2-5 5s2.2 5 5 5h12c2.8 0 5-2.2 5-5s-2.2-5-5-5H25z"/>
                </svg>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-green-600">NOOR PHARMACY</h1>
                <p className="text-sm text-gray-600 opacity-75">WITH DEPT.INC.</p>
              </div>
            </div>
            
            <div className="hidden lg:flex items-center space-x-2 trust-blue">
              <Phone className="w-5 h-5" />
              <a href="tel:347-396-5303" className="font-semibold hover:text-blue-700 transition-colors">
                347-396-5303
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-6 leading-tight">
                Your Trusted <span className="text-yellow-300">Local Pharmacy</span>
              </h2>
              <p className="text-xl mb-8 opacity-90 leading-relaxed">
                Serving the Jackson Heights community with professional pharmacy services, 
                free delivery, and comprehensive healthcare solutions you can trust.
              </p>
              
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
                  onClick={() => scrollToSection('contact')}
                  className="bg-yellow-400 text-gray-800 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-colors text-center flex items-center justify-center space-x-2"
                >
                  <MapPin className="w-5 h-5" />
                  <span>Get Directions</span>
                </button>
                <a 
                  href="tel:347-396-5303" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors text-center flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Now</span>
                </a>
              </div>
            </div>
            
            <div className="relative">
              <div className="rounded-2xl shadow-2xl w-full h-96 bg-gradient-to-br from-white/20 to-white/10 backdrop-blur flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Truck className="w-12 h-12 text-white" />
                  </div>
                  <p className="text-lg font-medium opacity-90">Free Delivery Service</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold slate-grey mb-4">
              Comprehensive Pharmacy Services
            </h3>
            <p className="text-xl slate-grey opacity-75 max-w-3xl mx-auto">
              From prescription medications to convenience services, we're here to meet all your healthcare and everyday needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-6">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h5 className="text-xl font-bold slate-grey mb-4">Free Pickup & Delivery</h5>
              <p className="slate-grey opacity-75 mb-4">
                Enjoy the convenience of free prescription pickup and delivery service throughout Jackson Heights.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h5 className="text-xl font-bold slate-grey mb-4">All Major Insurance</h5>
              <p className="slate-grey opacity-75 mb-4">
                We accept all major insurance plans including Medicare, Medicaid, BlueCross BlueShield, and more.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-6">
                <Pill className="w-8 h-8 text-white" />
              </div>
              <h5 className="text-xl font-bold slate-grey mb-4">Over-the-Counter</h5>
              <p className="slate-grey opacity-75 mb-4">
                Wide selection of OTC medications, vitamins, supplements, and health products.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mb-6">
                <CreditCard className="w-8 h-8 text-gray-800" />
              </div>
              <h5 className="text-xl font-bold slate-grey mb-4">Bill Payment Services</h5>
              <p className="slate-grey opacity-75 mb-4">
                Convenient bill payment services for your phone and utility bills all in one place.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <h5 className="text-xl font-bold slate-grey mb-4">Money Transfer</h5>
              <p className="slate-grey opacity-75 mb-4">
                Safe and reliable money transfer services to help you send funds domestically and internationally.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h5 className="text-xl font-bold slate-grey mb-4">Extended Hours</h5>
              <p className="slate-grey opacity-75 mb-4">
                Open 7 days a week with extended hours to serve you when it's convenient.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold slate-grey mb-4">
              Visit Us Today
            </h3>
            <p className="text-xl slate-grey opacity-75 max-w-3xl mx-auto">
              Located in the heart of Jackson Heights, we're here to serve all your pharmacy and healthcare needs.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl shadow-lg p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h6 className="font-semibold slate-grey mb-2">Our Location</h6>
                  <p className="slate-grey opacity-75 mb-3">37-03 73rd Street<br />Jackson Heights, NY 11372</p>
                  <a 
                    href="https://maps.google.com/?q=37-03+73rd+Street+Jackson+Heights+NY+11372" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 font-medium flex items-center space-x-1"
                  >
                    <span>Get Directions</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl shadow-lg p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h6 className="font-semibold slate-grey mb-2">Call Us</h6>
                  <p className="slate-grey opacity-75 mb-3">For prescriptions, deliveries,<br />and general inquiries</p>
                  <a 
                    href="tel:347-396-5303" 
                    className="text-blue-600 hover:text-blue-700 font-medium text-lg"
                  >
                    347-396-5303
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl shadow-lg p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-gray-800" />
                </div>
                <div>
                  <h6 className="font-semibold slate-grey mb-2">Email Us</h6>
                  <p className="slate-grey opacity-75 mb-3">For questions and<br />prescription refills</p>
                  <a 
                    href="mailto:noorpharmacynycgmail.com" 
                    className="text-blue-600 hover:text-blue-700 font-medium break-all"
                  >
                    noorpharmacynycgmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-xl flex items-center justify-center shadow-lg">
                  <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 100 100">
                    {/* Mortar and Pestle Design */}
                    <path d="M75 25c-2.8 0-5 2.2-5 5v5h-5c-8.3 0-15 6.7-15 15v25c0 8.3 6.7 15 15 15h10c8.3 0 15-6.7 15-15V45c0-8.3-6.7-15-15-15h-5v-5c0-2.8-2.2-5-5-5zm-5 15h10c5.5 0 10 4.5 10 10v25c0 5.5-4.5 10-10 10h-10c-5.5 0-10-4.5-10-10V50c0-5.5 4.5-10 10-10z"/>
                    <circle cx="75" cy="60" r="8" fill="rgba(255,255,255,0.3)"/>
                    <path d="M25 40c-2.8 0-5 2.2-5 5s2.2 5 5 5h15c2.8 0 5-2.2 5-5s-2.2-5-5-5H25z"/>
                    <path d="M25 55c-2.8 0-5 2.2-5 5s2.2 5 5 5h10c2.8 0 5-2.2 5-5s-2.2-5-5-5H25z"/>
                    <path d="M25 70c-2.8 0-5 2.2-5 5s2.2 5 5 5h12c2.8 0 5-2.2 5-5s-2.2-5-5-5H25z"/>
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
            </div>
            
            <div>
              <h6 className="font-bold mb-4">Contact Info</h6>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm">37-03 73rd Street, Jackson Heights, NY 11372</span>
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
            
            <div>
              <h6 className="font-bold mb-4">Services</h6>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>Free Pickup & Delivery</li>
                <li>Insurance Accepted</li>
                <li>Over-the-Counter</li>
                <li>Bill Payments</li>
                <li>Money Transfer</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-600 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Noor Pharmacy with Dept.Inc. All rights reserved. | Licensed Pharmacy in New York State</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
