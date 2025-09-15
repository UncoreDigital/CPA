import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-blue-600" />,
      title: "Phone",
      details: ["+1 (555) 123-4567", "+1 (555) 123-4568"],
      description: "Call us during business hours"
    },
    {
      icon: <Mail className="w-6 h-6 text-blue-600" />,
      title: "Email",
      details: ["info@cpaone.com", "support@cpaone.com"],
      description: "We'll respond within 24 hours"
    },
    {
      icon: <MapPin className="w-6 h-6 text-blue-600" />,
      title: "Office",
      details: ["123 Business Ave, Suite 100", "New York, NY 10001"],
      description: "Visit us for in-person consultations"
    },
    {
      icon: <Clock className="w-6 h-6 text-blue-600" />,
      title: "Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 2:00 PM"],
      description: "Emergency support available 24/7"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Ready to take your business to the next level? Get in touch with our expert team 
              for a free consultation and discover how we can help you succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Replaced Form with Iframe */}
            <div className="bg-white rounded-xl shadow-lg p-0 overflow-hidden">
              <iframe
                src="https://kaironixsolution.com/contact-form-cpa/"
                className="w-full h-[900px] border-0"
                title="Contact Form"
              ></iframe>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  Get in Touch
                </h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  We're here to help you succeed. Whether you have questions about our services, 
                  need a quote, or want to schedule a consultation, we'd love to hear from you.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                    <div className="flex items-center space-x-3 mb-4">
                      {info.icon}
                      <h3 className="text-lg font-semibold text-gray-900">{info.title}</h3>
                    </div>
                    <div className="space-y-1 mb-3">
                      {info.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="text-gray-700 font-medium">{detail}</div>
                      ))}
                    </div>
                    <p className="text-gray-600 text-sm">{info.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions about our services.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                How quickly can you respond to my inquiry?
              </h3>
              <p className="text-gray-600">
                We typically respond to all inquiries within 24 hours during business days. 
                For urgent matters, please call us directly.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Do you offer free consultations?
              </h3>
              <p className="text-gray-600">
                Yes! We offer a complimentary 30-minute consultation to discuss your needs 
                and how we can help your business.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What information should I prepare for our first meeting?
              </h3>
              <p className="text-gray-600">
                Bring your recent financial statements, tax returns, and any specific questions 
                or concerns you have about your business finances.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
