import { Heart, Shield, Clock, CheckCircle, UserCheck } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-4xl font-bold text-slate-grey mb-6">
              Committed to Your <span className="text-medical-green">Health & Community</span>
            </h3>
            <p className="text-lg text-slate-grey opacity-75 mb-8 leading-relaxed">
              Noor Pharmacy has been proudly serving the Jackson Heights community with personalized 
              pharmaceutical care and exceptional service. Our team of licensed pharmacists and healthcare 
              professionals is dedicated to ensuring you receive the best possible care and attention.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-medical-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h6 className="font-semibold text-slate-grey mb-2">Licensed Professional Staff</h6>
                  <p className="text-slate-grey opacity-75">Our experienced pharmacists provide expert guidance and personalized care for all your medication needs.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-trust-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h6 className="font-semibold text-slate-grey mb-2">Community Focused</h6>
                  <p className="text-slate-grey opacity-75">We understand the unique healthcare needs of Jackson Heights and are committed to serving our neighbors with compassion.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-warm-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-4 h-4 text-slate-grey" />
                </div>
                <div>
                  <h6 className="font-semibold text-slate-grey mb-2">Convenience & Accessibility</h6>
                  <p className="text-slate-grey opacity-75">From free delivery to extended services, we make healthcare accessible and convenient for everyone.</p>
                </div>
              </div>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-medical-green">5+</div>
                <div className="text-sm text-slate-grey opacity-75">Years Serving</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-trust-blue">1000+</div>
                <div className="text-sm text-slate-grey opacity-75">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-warm-gold">24/7</div>
                <div className="text-sm text-slate-grey opacity-75">Support Available</div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            {/* Healthcare consultation placeholder */}
            <div className="rounded-xl shadow-lg w-full h-64 bg-gradient-to-br from-medical-green/10 to-trust-blue/10 flex items-center justify-center">
              <div className="text-center">
                <UserCheck className="w-16 h-16 text-medical-green mx-auto mb-4" />
                <p className="text-lg font-medium text-slate-grey">Healthcare Professional Consultation</p>
              </div>
            </div>
            
            {/* Community healthcare placeholder */}
            <div className="rounded-xl shadow-lg w-full h-48 bg-gradient-to-br from-warm-gold/10 to-medical-green/10 flex items-center justify-center">
              <div className="text-center">
                <Heart className="w-12 h-12 text-trust-blue mx-auto mb-4" />
                <p className="text-lg font-medium text-slate-grey">Community Healthcare Service</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
