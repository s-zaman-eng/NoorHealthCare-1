import { Truck, Shield, Pill, CreditCard, DollarSign, UserRound, Heart, Clock } from "lucide-react";

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Pharmacy Services
          </h3>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            From prescription medications to convenience services, we're here to meet all your healthcare and everyday needs.
          </p>
        </div>
        
        {/* Featured Service - Free Delivery */}
        <div className="bg-gradient-to-r from-city-electric-blue to-city-deep-blue rounded-2xl p-8 mb-12 text-white">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mr-4">
                  <Truck className="w-8 h-8" />
                </div>
                <h4 className="text-3xl font-bold">Free Pickup & Delivery</h4>
              </div>
              <p className="text-lg opacity-90 mb-6">
                Enjoy the convenience of free prescription pickup and delivery service throughout Jackson Heights. 
                Perfect for busy schedules or when you can't make it to the pharmacy.
              </p>
              <a 
                href="tel:347-396-5303" 
                className="bg-city-golden text-city-charcoal px-6 py-3 rounded-lg font-semibold hover:bg-city-sunset-orange transition-colors inline-block"
              >
                Schedule Delivery
              </a>
            </div>
            <div className="rounded-xl shadow-lg w-full h-64 bg-white/10 backdrop-blur flex items-center justify-center">
              <div className="text-center">
                <Truck className="w-16 h-16 text-white mx-auto mb-4" />
                <p className="text-lg font-medium">Professional Delivery Service</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Insurance Services */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-city-electric-blue rounded-full flex items-center justify-center mb-6">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h5 className="text-xl font-bold text-gray-900 mb-4">Insurance Accepted</h5>
            <p className="text-gray-700 mb-4">
              We accept all major insurance plans to make your medications affordable and accessible.
            </p>
            <ul className="text-sm text-gray-700 space-y-2">
              <li className="flex items-center"><span className="text-medical-green mr-2">✓</span> Medicare & Medicaid</li>
              <li className="flex items-center"><span className="text-medical-green mr-2">✓</span> BlueCross BlueShield</li>
              <li className="flex items-center"><span className="text-medical-green mr-2">✓</span> Aetna, Cigna, UnitedHealth</li>
              <li className="flex items-center"><span className="text-medical-green mr-2">✓</span> And many more</li>
            </ul>
          </div>
          
          {/* OTC Medications */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-medical-green rounded-full flex items-center justify-center mb-6">
              <Pill className="w-8 h-8 text-white" />
            </div>
            <h5 className="text-xl font-bold text-gray-900 mb-4">Over-the-Counter</h5>
            <p className="text-gray-700 mb-4">
              Wide selection of OTC medications, vitamins, supplements, and health products.
            </p>
            <ul className="text-sm text-gray-700 space-y-2">
              <li className="flex items-center"><span className="text-tech-green mr-2">✓</span> Pain Relief</li>
              <li className="flex items-center"><span className="text-tech-green mr-2">✓</span> Cold & Flu</li>
              <li className="flex items-center"><span className="text-tech-green mr-2">✓</span> Vitamins & Supplements</li>
              <li className="flex items-center"><span className="text-tech-green mr-2">✓</span> First Aid Supplies</li>
            </ul>
          </div>
          
          {/* Bill Payment Services */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-tech-orange rounded-full flex items-center justify-center mb-6">
              <CreditCard className="w-8 h-8 text-white" />
            </div>
            <h5 className="text-xl font-bold text-gray-900 mb-4">Bill Payment Services</h5>
            <p className="text-gray-700 mb-4">
              Convenient bill payment services for your phone and utility bills all in one place.
            </p>
            <ul className="text-sm text-gray-700 space-y-2">
              <li className="flex items-center"><span className="text-tech-green mr-2">✓</span> Phone Bills</li>
              <li className="flex items-center"><span className="text-tech-green mr-2">✓</span> Utility Bills</li>
              <li className="flex items-center"><span className="text-tech-green mr-2">✓</span> Quick & Secure</li>
              <li className="flex items-center"><span className="text-tech-green mr-2">✓</span> Multiple Payment Options</li>
            </ul>
          </div>
          
          {/* Money Transfer */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-tech-blue rounded-full flex items-center justify-center mb-6">
              <DollarSign className="w-8 h-8 text-white" />
            </div>
            <h5 className="text-xl font-bold text-gray-900 mb-4">Money Transfer</h5>
            <p className="text-gray-700 mb-4">
              Safe and reliable money transfer services to help you send funds domestically and internationally.
            </p>
            <ul className="text-sm text-gray-700 space-y-2">
              <li className="flex items-center"><span className="text-tech-green mr-2">✓</span> Domestic Transfers</li>
              <li className="flex items-center"><span className="text-tech-green mr-2">✓</span> International Services</li>
              <li className="flex items-center"><span className="text-tech-green mr-2">✓</span> Competitive Rates</li>
              <li className="flex items-center"><span className="text-tech-green mr-2">✓</span> Secure Transactions</li>
            </ul>
          </div>
          
          {/* Consultation Services */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-tech-green rounded-full flex items-center justify-center mb-6">
              <UserRound className="w-8 h-8 text-white" />
            </div>
            <h5 className="text-xl font-bold text-gray-900 mb-4">Consultation Services</h5>
            <p className="text-gray-700 mb-4">
              Professional pharmacy consultation to help you understand your medications and health needs.
            </p>
            <ul className="text-sm text-gray-700 space-y-2">
              <li className="flex items-center"><span className="text-tech-green mr-2">✓</span> Medication Reviews</li>
              <li className="flex items-center"><span className="text-tech-green mr-2">✓</span> Drug Interactions</li>
              <li className="flex items-center"><span className="text-tech-green mr-2">✓</span> Health Screenings</li>
              <li className="flex items-center"><span className="text-tech-green mr-2">✓</span> Expert Advice</li>
            </ul>
          </div>
          
          {/* Health Products */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-tech-purple rounded-full flex items-center justify-center mb-6">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h5 className="text-xl font-bold text-gray-900 mb-4">Health & Wellness</h5>
            <p className="text-gray-700 mb-4">
              Complete range of health and wellness products to support your overall well-being.
            </p>
            <ul className="text-sm text-gray-700 space-y-2">
              <li className="flex items-center"><span className="text-tech-green mr-2">✓</span> Medical Devices</li>
              <li className="flex items-center"><span className="text-tech-green mr-2">✓</span> Personal Care</li>
              <li className="flex items-center"><span className="text-tech-green mr-2">✓</span> Diabetic Supplies</li>
              <li className="flex items-center"><span className="text-tech-green mr-2">✓</span> Home Health Care</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
