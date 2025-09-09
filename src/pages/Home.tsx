import React from 'react';
import { ArrowRight, CheckCircle, Users, Award, Clock, Shield } from 'lucide-react';

const Home: React.FC = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Trusted & Secure",
      description: "Your financial data is protected with bank-level security and confidentiality."
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Expert Team",
      description: "Certified professionals with years of experience in accounting and finance."
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      title: "24/7 Support",
      description: "Round-the-clock assistance to help you with all your financial needs."
    },
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: "Award Winning",
      description: "Recognized for excellence in client service and financial expertise."
    }
  ];

  const services = [
    "Tax Preparation & Planning",
    "Bookkeeping & Accounting",
    "Financial Consulting",
    "Business Advisory",
    "Payroll Management",
    "Audit & Assurance"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                Your Trusted
                <span className="text-blue-300"> Financial</span>
                <br />Partner
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Professional accounting and financial services tailored to help your business thrive. 
                From tax preparation to strategic financial planning, we've got you covered.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 flex items-center justify-center">
                  Get Started Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors duration-200">
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6">Why Choose Us?</h3>
                <div className="space-y-4">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-blue-100">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Businesses Trust Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine expertise, technology, and personalized service to deliver 
              exceptional financial solutions for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-blue-300 mb-2">500+</div>
              <div className="text-blue-100">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-blue-300 mb-2">15+</div>
              <div className="text-blue-100">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-blue-300 mb-2">98%</div>
              <div className="text-blue-100">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-blue-300 mb-2">24/7</div>
              <div className="text-blue-100">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Financial Future?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let our expert team help you achieve your financial goals with personalized solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
              Schedule Consultation
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-200">
              View Our Services
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;