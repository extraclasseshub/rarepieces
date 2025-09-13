import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, Clock, Globe } from 'lucide-react';

const ContactPage = () => {
  const whatsappMessage = "Hi Rare Pieces, I'd like to enquire about your credit repair services.";
  const whatsappUrl = `https://wa.me/27784306215?text=${encodeURIComponent(whatsappMessage)}`;

  const contactMethods = [
    {
      icon: <MessageCircle className="w-8 h-8 text-green-500" />,
      title: "WhatsApp",
      description: "Quick responses via WhatsApp",
      value: "+27 78 430 6215",
      action: whatsappUrl,
      actionLabel: "Send Message"
    },
    {
      icon: <Phone className="w-8 h-8 text-blue-500" />,
      title: "Phone",
      description: "Call us directly",
      value: "+27 78 430 6215",
      action: "tel:+27784306215",
      actionLabel: "Call Now"
    },
    {
      icon: <Mail className="w-8 h-8 text-amber-500" />,
      title: "Email",
      description: "Send us an email",
      value: "info@mzansilifestylemarket.com",
      value: "info@rarepieces.co.za",
      action: "mailto:info@rarepieces.co.za?subject=Credit Repair Enquiry",
      actionLabel: "Send Email"
    }
  ];

  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <div className="bg-brand-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get in touch with our credit repair specialists. We're here to help you fix your credit and secure your financial future.
          </p>
        </div>
      </div>

      {/* Contact Methods */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="p-8 text-center">
                <div className="mb-6">{method.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{method.title}</h3>
                <p className="text-gray-600 mb-4">{method.description}</p>
                <p className="text-lg font-medium text-slate-900 mb-6">{method.value}</p>
                <a
                  href={method.action}
                  target={method.action.startsWith('http') ? '_blank' : '_self'}
                  rel={method.action.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="inline-block w-full bg-brand-navy hover:bg-brand-dark-blue text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
                >
                  {method.actionLabel}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Company Information */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Address & Details */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Our Office</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-red-500 mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Address</h3>
                  <p className="text-gray-600">
                    1531 Forbes Road, Zone 9<br />
                    Meadowlands, 1852<br />
                    Gauteng, South Africa
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Globe className="w-6 h-6 text-blue-500 mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Company Registration</h3>
                  <p className="text-gray-600">2016/310023/07</p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="w-6 h-6 text-green-500 mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Business Hours</h3>
                  <div className="text-gray-600 space-y-1">
                    <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                    <p>Saturday: 9:00 AM - 2:00 PM</p>
                    <p>Sunday: Closed</p>
                    <p className="text-green-600 font-medium mt-2">WhatsApp available 24/7</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Find Us</h2>
            
            <div className="rounded-lg overflow-hidden mb-6 shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.234567890123!2d27.9123456!3d-26.2345678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950c123456789a%3A0x123456789abcdef0!2s1531%20Forbes%20Rd%2C%20Zone%209%2C%20Meadowlands%2C%201852!5e0!3m2!1sen!2sza!4v1640995200000!5m2!1sen!2sza"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Rare Pieces Credit Solutions Location"
              ></iframe>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:info@rarepieces.co.za?subject=Credit Repair Enquiry"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
              >
                View Larger Map
              </a>
              
              <p className="text-sm text-gray-600 text-center">
                Located in Meadowlands, easily accessible from Johannesburg and surrounding areas.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions about our services
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How long does the credit repair process take?",
                answer: "The timeline varies depending on the service, but most cases are completed within 30-90 days. We provide regular updates throughout the process."
              },
              {
                question: "Is your credit repair process legal?",
                answer: "Yes, all our methods are 100% legal and compliant with South African credit laws and regulations. We only use legitimate dispute processes."
              },
              {
                question: "Do you guarantee success?",
                answer: "While we have a high success rate, results depend on the specific circumstances of each case. We provide honest assessments and work diligently on every case."
              },
              {
                question: "Can I pay in installments?",
                answer: "Payment terms are typically full payment upfront, but we may consider payment arrangements for certain cases. Contact us to discuss your specific situation."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-brand-navy text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us today for a free consultation about your credit repair needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-3 bg-green-600 hover:bg-green-700 px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
            >
              <MessageCircle size={20} />
              <span>WhatsApp Us Now</span>
            </a>
            <a
              href="mailto:info@mzansilifestylemarket.com?subject=Credit Repair Enquiry"
              className="flex items-center justify-center space-x-3 bg-brand-blue hover:bg-brand-light-blue text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
            >
              <Mail size={20} />
              <span>Send Email</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;