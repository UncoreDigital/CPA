import React from 'react';
import { Calculator, FileText, TrendingUp, Users, DollarSign, Shield, CheckCircle } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Calculator className="w-12 h-12 text-blue-600" />,
      title: "Tax Preparation & Planning",
      description: "Comprehensive tax services to minimize your liability and maximize your savings.",
      features: [
        "Individual & Business Tax Returns",
        "Tax Planning & Strategy",
        "IRS Representation",
        "Multi-State Tax Filing",
        "Quarterly Tax Estimates"
      ],
      price: "Starting at $299"
    },
    {
      icon: <FileText className="w-12 h-12 text-blue-600" />,
      title: "Bookkeeping & Accounting",
      description: "Professional bookkeeping services to keep your financial records accurate and up-to-date.",
      features: [
        "Monthly Financial Statements",
        "Accounts Payable/Receivable",
        "Bank Reconciliation",
        "Expense Tracking",
        "QuickBooks Setup & Training"
      ],
      price: "Starting at $199/month"
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-blue-600" />,
      title: "Financial Planning",
      description: "Strategic financial planning to help you achieve your long-term business goals.",
      features: [
        "Cash Flow Analysis",
        "Budget Planning & Forecasting",
        "Investment Advisory",
        "Retirement Planning",
        "Risk Assessment"
      ],
      price: "Starting at $499"
    },
    {
      icon: <Users className="w-12 h-12 text-blue-600" />,
      title: "Business Consulting",
      description: "Expert guidance to help your business grow and operate more efficiently.",
      features: [
        "Business Structure Planning",
        "Financial Analysis",
        "Performance Metrics",
        "Growth Strategy",
        "Operational Efficiency"
      ],
      price: "Starting at $150/hour"
    },
    {
      icon: <DollarSign className="w-12 h-12 text-blue-600" />,
      title: "Payroll Services",
      description: "Complete payroll management to ensure accurate and timely employee payments.",
      features: [
        "Payroll Processing",
        "Tax Withholding & Filing",
        "Direct Deposit Setup",
        "Employee Self-Service Portal",
        "Compliance Management"
      ],
      price: "Starting at $99/month"
    },
    {
      icon: <Shield className="w-12 h-12 text-blue-600" />,
      title: "Audit & Assurance",
      description: "Professional audit services to ensure financial accuracy and compliance.",
      features: [
        "Financial Statement Audits",
        "Internal Control Reviews",
        "Compliance Audits",
        "Risk Assessment",
        "Management Letter Reports"
      ],
      price: "Custom Pricing"
    }
  ];

  const industries = [
    "Healthcare & Medical",
    "Real Estate",
    "Construction",
    "Retail & E-commerce",
    "Professional Services",
    "Manufacturing",
    "Technology",
    "Non-Profit Organizations"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Comprehensive financial services designed to meet all your business needs. 
              From basic bookkeeping to complex financial planning, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="p-8">
                  <div className="flex justify-center mb-6">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{service.title}</h3>
                  <p className="text-gray-600 mb-6 text-center leading-relaxed">{service.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="border-t pt-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600 mb-4">{service.price}</div>
                      <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
                        Get Started
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our expertise spans across multiple industries, allowing us to provide 
              specialized solutions tailored to your specific business needs.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg text-center hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 cursor-pointer">
                <div className="font-semibold">{industry}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              We follow a proven methodology to ensure you receive the best possible service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Consultation</h3>
              <p className="text-blue-100">We discuss your needs and goals to understand your unique situation.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Analysis</h3>
              <p className="text-blue-100">Our experts analyze your financial situation and identify opportunities.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Strategy</h3>
              <p className="text-blue-100">We develop a customized strategy tailored to your specific needs.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Implementation</h3>
              <p className="text-blue-100">We execute the plan and provide ongoing support and monitoring.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact us today to discuss which services are right for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
              Schedule Consultation
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-200">
              Request Quote
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;