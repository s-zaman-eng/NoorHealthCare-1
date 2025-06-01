import { MapPin, Phone, Mail, Clock, ExternalLink, Shield } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-slate-grey mb-4">
            Visit Us Today
          </h3>
          <p className="text-xl text-slate-grey opacity-75 max-w-3xl mx-auto">
            Located in the heart of Jackson Heights, we're here to serve all your pharmacy and healthcare needs.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            {/* Address */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-medical-green rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h6 className="font-semibold text-slate-grey mb-2">Our Location</h6>
                  <p className="text-slate-grey opacity-75 mb-3">37-03 73rd Street<br>Jackson Heights, NY 11372</p>
                  <a 
                    href="https://maps.google.com/?q=37-03+73rd+Street+Jackson+Heights+NY+11372" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-trust-blue hover:text-blue-700 font-medium flex items-center space-x-1"
                  >
                    <span>Get Directions</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Phone */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-trust-blue rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h6 className="font-semibold text-slate-grey mb-2">Call Us</h6>
                  <p className="text-slate-grey opacity-75 mb-3">For prescriptions, deliveries,<br>and general inquiries</p>
                  <a 
                    href="tel:347-396-5303" 
                    className="text-trust-blue hover:text-blue-700 font-medium text-lg"
                  >
                    347-396-5303
                  </a>
                </div>
              </div>
            </div>
            
            {/* Email */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-warm-gold rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-slate-grey" />
                </div>
                <div>
                  <h6 className="font-semibold text-slate-grey mb-2">Email Us</h6>
                  <p className="text-slate-grey opacity-75 mb-3">For questions and<br>prescription refills</p>
                  <a 
                    href="mailto:noorpharmacynycgmail.com" 
                    className="text-trust-blue hover:text-blue-700 font-medium break-all"
                  >
                    noorpharmacynycgmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Map and Hours */}
          <div className="lg:col-span-2 space-y-6">
            {/* Hours */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h6 className="text-2xl font-bold text-slate-grey mb-6 flex items-center">
                <Clock className="w-6 h-6 mr-2" />
                Store Hours
              </h6>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="font-medium text-slate-grey">Monday</span>
                    <span className="text-slate-grey opacity-75">9:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="font-medium text-slate-grey">Tuesday</span>
                    <span className="text-slate-grey opacity-75">9:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="font-medium text-slate-grey">Wednesday</span>
                    <span className="text-slate-grey opacity-75">9:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="font-medium text-slate-grey">Thursday</span>
                    <span className="text-slate-grey opacity-75">9:00 AM - 8:00 PM</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="font-medium text-slate-grey">Friday</span>
                    <span className="text-slate-grey opacity-75">9:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="font-medium text-slate-grey">Saturday</span>
                    <span className="text-slate-grey opacity-75">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="font-medium text-slate-grey">Sunday</span>
                    <span className="text-slate-grey opacity-75">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="mt-4 p-4 bg-medical-green/10 rounded-lg">
                    <p className="text-sm text-medical-green font-medium">
                      Emergency? Call us for after-hours assistance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Map Placeholder */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h6 className="text-2xl font-bold text-slate-grey mb-6">Find Us</h6>
              <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-medical-green rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-slate-grey font-medium">Interactive Map</p>
                  <p className="text-sm text-slate-grey opacity-75 mt-2">37-03 73rd Street, Jackson Heights, NY</p>
                  <a 
                    href="https://maps.google.com/?q=37-03+73rd+Street+Jackson+Heights+NY+11372" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block mt-4 bg-medical-green text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>

            {/* Insurance Information */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h6 className="text-xl font-bold text-trust-blue mb-3 flex items-center">
                <Shield className="w-5 h-5 mr-2" />
                Insurance Accepted
              </h6>
              <p className="text-trust-blue mb-3">We accept all major insurance plans including:</p>
              <div className="grid grid-cols-2 gap-2 text-sm text-trust-blue">
                <div>• Medicare</div>
                <div>• Medicaid</div>
                <div>• Aetna</div>
                <div>• Blue Cross Blue Shield</div>
                <div>• Cigna</div>
                <div>• UnitedHealthcare</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
