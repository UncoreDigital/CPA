import React from 'react';
import { Calculator, FileText, TrendingUp, Users, DollarSign, Shield, CheckCircle, } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Calculator className="w-12 h-12 text-blue-600" />,
      title: "Tax Preparation & Planning",
      description: "Our expert bookkeeping and accounting services streamline your financial processes and help your firm stay organized. We provide consistent, accurate, and real-time data entry, account reconciliations, and financial record management.",
      features: [
        "Complete and Accurate Records: All financial transactions are entered and recorded promptly, reducing errors and improving financial clarity.",
        "Timely Reports: Generate monthly, quarterly, or annual financial statements for your firm and clients, keeping everyone up-to-date.",
        "Customized Solutions: Whether it’s cash or accrual accounting, we tailor our bookkeeping processes to meet your firm’s specific needs."
      ],
      
    },
    {
      icon: <FileText className="w-12 h-12 text-blue-600" />,
      title: "Tax Preparation & Filing Support",
      description: "Tax season can be a stressful time for any CPA firm. Our back-office tax services ensure that your firm is prepared and that your clients’ filings are completed accurately and on time. We offer:",
      features: [
        "Tax Return Preparation: Comprehensive support for individual, corporate, and partnership tax returns, ensuring compliance with tax laws in the USA and Canada.",
        "Tax Strategy Consultation: We work with your firm to strategize and optimize your clients’ tax positions, helping them minimize liabilities and maximize deductions.",
        "Timely Filing: From federal to state/provincial returns, we assist in filing on time to avoid penalties."
      ],
      
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-blue-600" />,
      title: "Payroll Processing & Compliance",
      description: "Managing payroll can be cumbersome and time-consuming. We offer seamless payroll processing services that ensure timely and accurate employee payments.",
      features: [
        "Payroll Calculations: We manage employee wages, bonuses, and commissions, calculating federal and state/provincial taxes and deductions.",
        "Direct Deposit: Efficient direct deposit services for employees, ensuring timely and hassle-free payments.",
        "Compliance Assurance: We ensure that all payroll taxes and filings are completed in full compliance with IRS, CRA, and state/provincial regulations."
      ],
      
    },
    {
      icon: <Users className="w-12 h-12 text-blue-600" />,
      title: "Financial Reporting & Analysis",
      description: "In today’s fast-paced business environment, insightful financial reporting is crucial for strategic decision-making. We provide in-depth financial reports that give your firm a clear understanding of both internal and client-specific financial health.",
      features: [
        "Balance Sheets & Income Statements: We generate accurate and timely reports that allow you to assess profitability, financial standing, and performance metrics.",
        "Cash Flow Statements: We help you monitor and manage cash flow, ensuring liquidity and operational stability.",
        "Financial Forecasting & Budgeting: We assist in preparing financial forecasts and budgets, helping your firm and clients plan for future growth."
      ],
      
    },
    {
      icon: <DollarSign className="w-12 h-12 text-blue-600" />,
      title: "Audit & Assurance Support",
      description: "Auditing is a critical part of many accounting services. Our experienced team provides full audit support to ensure that all documentation, financial statements, and compliance aspects are thoroughly organized and ready for review.",
      features: [
        "Audit Preparation: We organize and prepare all necessary documentation for audit reviews, ensuring compliance with accounting standards and regulations.",
        "Internal Controls & Risk Management: We assess and implement internal controls to prevent errors and fraud, safeguarding your clients’ financial data.",
        "Comprehensive Reporting: We assist with detailed audit reports, identifying potential issues and offering actionable insights."
      ],
    
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
        We provide specialized back-office services for CPA firms in a variety of industries, 
        helping your firm cater to clients across sectors:
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
      {[
        {
          title: "Corporate Accounting",
          desc: "Support for large businesses managing complex structures, multi-state/provincial operations, and compliance."
        },
        {
          title: "Franchise Accounting",
          desc: "Expertise in managing franchise finances, royalty management, local tax filing, and reporting."
        },
        {
          title: "Property Management",
          desc: "Specialized support for property managers, including rent roll management, landlord reporting, and tax filing."
        },
        {
          title: "Restaurant Accounting",
          desc: "Tailored services for restaurants, including inventory tracking, cost of goods sold (COGS) analysis, and compliance."
        },
        {
          title: "Auto Dealerships",
          desc: "Support for dealerships including vehicle sales, F&I, inventory, and service department finances."
        }
      ].map((industry, index) => (
        <div
          key={index}
          className="bg-gray-50 p-6 rounded-lg text-center hover:bg-blue-50 hover:shadow-lg transition duration-200"
        >
          <div className="font-semibold text-lg mb-2">{industry.title}</div>
          <p className="text-sm text-gray-600">{industry.desc}</p>
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