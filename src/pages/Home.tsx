import React, { useRef, useEffect, useState } from "react";
import {
  ArrowRight,
  CheckCircle,
  Users,
  Award,
  Clock,
  Shield,
  Briefcase,
  BarChart,
  Building2,
  Utensils,
  Car,
  ClipboardList,
  Lock,
  Layers,
  Home as HomeIcon,
  Cpu,
} from "lucide-react";

// 👇 Reusable scroll animation wrapper
const FadeInSection: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const domRef = useRef<HTMLDivElement>(null);
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    if (domRef.current) observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-700 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {children}
    </div>
  );
};

const Home: React.FC = () => {
  // Services (expanded from document)
  const detailedServices = [
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Bookkeeping & Accounting Support",
      description:
        "Our expert bookkeeping and accounting services streamline your financial processes and help your firm stay organized. We provide consistent, accurate, and real-time data entry, account reconciliations, and financial record management. Our services ensure: Complete and Accurate Records: All financial transactions are entered and recorded promptly, reducing errors and improving financial clarity. Timely Reports: Generate monthly, quarterly, or annual financial statements for your firm and clients, keeping everyone up-to-date.",
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Tax Preparation & Filing Support",
      description:
        "Comprehensive support for individual, corporate, and partnership returns across the USA and Canada. We help strategize to minimize liabilities, maximize deductions, and ensure timely filing to avoid penalties.",
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      title: "Payroll Processing & Compliance",
      description:
        "Efficient payroll calculations for wages, bonuses, and deductions. Direct deposits, compliance with IRS/CRA/state rules, and complete filing support so your team is always paid accurately and on time.",
    },
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: "Financial Reporting & Analysis",
      description:
        "Balance sheets, income statements, cash flow monitoring, and forecasting. Actionable insights into profitability, liquidity, and financial health for smarter decision-making.",
    },
    {
      icon: <Briefcase className="w-8 h-8 text-blue-600" />,
      title: "Audit & Assurance Support",
      description:
        "Preparation of all audit documentation, compliance checks, and internal control reviews. We provide actionable insights to reduce risk and ensure smooth audits.",
    },
  ];
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
  // Why Partner
  const benefits = [
    {
      icon: <CheckCircle className="w-6 h-6 text-green-600" />,
      title: "Industry Expertise",
      description:
        "Years of experience serving CPA firms across tax, audit, payroll, and advisory services.",
    },
    {
      icon: <Layers className="w-6 h-6 text-green-600" />,
      title: "Customizable Solutions",
      description:
        "Every firm is unique—we design flexible solutions to fit your operational structure and client base.",
    },
    {
      icon: <ClipboardList className="w-6 h-6 text-green-600" />,
      title: "Efficiency & Cost Savings",
      description:
        "Reduce overhead for in-house staff and redirect resources toward client-facing, revenue-generating activities.",
    },
    {
      icon: <Users className="w-6 h-6 text-green-600" />,
      title: "Scalability",
      description:
        "Our services grow with your firm, allowing you to expand client bases and markets without hiring more staff.",
    },
    {
      icon: <Lock className="w-6 h-6 text-green-600" />,
      title: "Data Security & Compliance",
      description:
        "Robust encryption and compliance with GDPR, IRS, and CRA standards to safeguard sensitive data.",
    },
    {
      icon: <BarChart className="w-6 h-6 text-green-600" />,
      title: "Seamless Integration",
      description:
        "Integrates smoothly with QuickBooks, Xero, and other systems—no disruption to your current workflows.",
    },
  ];

  // Industries
  const industries = [
    {
      icon: <Building2 className="w-8 h-8 text-blue-600" />,
      title: "Corporate Accounting",
      description:
        "Support for large businesses, managing complex structures, multi-state operations, and compliance.",
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Franchise Accounting",
      description:
        "Expert handling of royalty management, franchise reporting, and local tax compliance.",
    },
    {
      icon: <HomeIcon className="w-8 h-8 text-blue-600" />,
      title: "Property Management",
      description:
        "Rent roll management, landlord reporting, and tax filing for real estate portfolios.",
    },
    {
      icon: <Utensils className="w-8 h-8 text-blue-600" />,
      title: "Restaurant Accounting",
      description:
        "Inventory tracking, COGS analysis, and compliance tailored for the restaurant industry.",
    },
    {
      icon: <Car className="w-8 h-8 text-blue-600" />,
      title: "Auto Dealerships",
      description:
        "Tracking sales, F&I operations, inventory management, and service department finances.",
    },
  ];

  // Process
  const processSteps = [
    { step: "01", title: "Initial Consultation", description: "Our engagement begins with an in-depth consultation where we analyze your firm’s needs and challenges. This allows us to fully understand your goals and provide the most effective back-office solutions." },
    { step: "02", title: "Custom Solution Design", description: "Based on your firm’s unique needs, we design a back-office solution that aligns with your operational objectives and enhances overall efficiency." },
    { step: "03", title: "Implementation & Integration", description: "We integrate our services with your firm’s existing systems and processes to ensure smooth operations. Our implementation phase is efficient, with minimal disruption to your day-to-day operations." },
    { step: "04", title: "Ongoing Support & Optimization", description: "We provide continuous support to ensure everything runs smoothly. As your business evolves, we adapt and optimize our services to match your firm’s growing needs." },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeInSection>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Welcome to CPA ONE –  
              <span className="text-blue-300"> Your Strategic Back Office</span>
              <br />Partner for CPA Firms
            </h1>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition">
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5 inline" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition">
                Learn More
              </button>
            </div>
          </FadeInSection>
          <FadeInSection>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <p className="text-xl text-blue-100 mb-6">
                At CPA ONE, we specialize in providing high-quality, reliable back-office support to CPA firms across the United States and Canada. As your trusted partner, we understand that efficient back-office operations are critical to the success of your firm. Our comprehensive services enable CPA firms to focus on client relationships, business growth, and delivering expert financial guidance, while we handle the operational complexities.
              </p>
              <p className="text-xl text-blue-100">
               With our deep expertise in accounting, tax, payroll, and financial operations, CPA ONE offers tailored back-office solutions that enhance efficiency, improve accuracy, and help your firm operate at its best. Whether your firm is small, medium-sized, or large, we have the tools and skills to support you effectively.
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

   
   

{/* Why Partner - Glow Feature Grid */}
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-6 text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Partner with Us</h2>
    <p className="text-gray-600 max-w-3xl mx-auto mt-0 mb-12">At CPA ONE, we are not just another service provider—we are a dedicated partner committed to the success of your firm. Here’s why CPA firms across the USA and Canada trust us:</p>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {[
        {
          icon: CheckCircle,
          title: "Industry Expertise and Knowledge",
          desc: "With years of experience in the accounting industry, our team has a deep understanding of the challenges and demands faced by CPA firms. We specialize in providing solutions for firms in diverse sectors, including tax, audit, payroll, and advisory."
        },
        {
          icon: Layers,
          title: "Customizable Solutions Tailored to Your Firm",
          desc: "We understand that every firm operates differently. Our solutions are designed to be flexible and customizable, ensuring that they align with your firm’s unique operational structure and client needs."
        },
        {
          icon: ClipboardList,
          title: "Efficiency and Reduced Overhead",
          desc: "By outsourcing your back-office operations to [Your Firm Name], you can reduce overhead costs associated with hiring, training, and managing in-house staff. This allows you to reallocate resources to revenue-generating activities and client-facing services."
        },
        {
          icon: Users,
          title: "Scalability",
          desc: "As your firm grows, our services grow with you. Whether you’re looking to expand your client base, enter new markets, or increase your internal capabilities, our scalable solutions ensure you can meet the demand without the hassle of hiring additional staff."
        },
        {
          icon: Lock,
          title: "Data Security and Compliance",
          desc: "We adhere to the highest standards of data security, ensuring that all sensitive financial information is protected with robust encryption and compliance with industry standards like GDPR and relevant tax laws in both the USA and Canada."
        },
        {
          icon: BarChart,
          title: "Seamless Integration",
          desc: "We understand that disruption is the last thing your firm needs. Our back-office solutions seamlessly integrate with your firm’s existing systems, including accounting software like QuickBooks, Xero, and others, ensuring that your workflow remains uninterrupted."
        }
      ].map((f, i) => (
        <FadeInSection key={i}>
          <div className="group bg-gray-50 p-8 rounded-xl shadow hover:shadow-2xl hover:bg-blue-50 transition transform hover:-translate-y-1">
            <div className="flex justify-center mb-4">
              <div className="p-4 rounded-full bg-gradient-to-br from-blue-600 to-blue-400 text-white shadow-md group-hover:scale-110 transition">
                <f.icon className="w-6 h-6" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
            <p className="text-gray-600">{f.desc}</p>
          </div>
        </FadeInSection>
      ))}
    </div>
  </div>
</section>

{/* Industries - Icon Feature Grid */}
<section className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6 text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-6">Industries We Serve</h2>
    <p className="text-gray-600 max-w-3xl mx-auto mb-12">
      We provide specialized back-office services for CPA firms in a variety of industries, helping your firm cater to clients across sectors:
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 items-stretch">
      {[
        { icon: Building2, title: "Corporate Accounting", desc: "Support for large businesses managing complex structures, multi-state/provincial operations, and compliance." },
        { icon: Users, title: "Franchise Accounting", desc: "Expertise in managing franchise finances, including royalty management, local tax filing, and more." },
        { icon: HomeIcon, title: "Property Management", desc: "Specialized support for property managers, including rent roll management, landlord reporting, and tax filing for portfolios." },
        { icon: Utensils, title: "Restaurant Accounting", desc: "Tailored services for restaurants, including inventory tracking, cost of goods sold (COGS) analysis, and tax compliance." },
        { icon: Car, title: "Auto Dealerships", desc: "Support for auto dealerships—tracking sales, finance & insurance, inventory, and service departments." },
      ].map((ind, i) => (
        <FadeInSection key={i}>
          <div className="relative bg-gradient-to-br from-white to-blue-50 p-6 rounded-2xl shadow hover:shadow-xl transition-transform hover:-translate-y-2 h-full flex flex-col">
            {/* Top strip */}
            <div className="absolute top-0 left-0 w-full h-2 bg-blue-600 rounded-t-2xl"></div>
            {/* Icon */}
            <div className="flex justify-center mb-4">
              <div className="p-4 rounded-full bg-blue-100 text-blue-600 shadow">
                <ind.icon className="w-6 h-6" />
              </div>
            </div>
            {/* Title + Description */}
            <h3 className="text-lg font-semibold mb-2">{ind.title}</h3>
            <p className="text-gray-600 text-sm flex-grow">{ind.desc}</p>
          </div>
        </FadeInSection>
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

  {/* Softwares - Single Image */}
<section className="py-20 bg-white">
  <div className="max-w-5xl mx-auto px-6 text-center">
    <FadeInSection>
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Softwares We Equiped</h2>
      {/* <p className="text-gray-600 max-w-3xl mx-auto mb-12">
        Our back-office solutions seamlessly integrate with leading accounting and business tools, 
        ensuring your workflows remain uninterrupted.
      </p> */}

      {/* Single Image */}
      <div className="flex justify-center">
        <img
          src="src/public/softwares.jpg" // replace with your actual path
          alt="Softwares We Work With"
          className="max-w-full h-auto rounded-xl shadow-lg"
        />
      </div>

 
    </FadeInSection>
  </div>
</section>



      {/* Process */}
   <section className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Process</h2>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-stretch">
      {processSteps.map((step, i) => (
        <FadeInSection key={i}>
          <div className="h-full p-6 bg-white rounded-xl shadow hover:shadow-lg transition-transform hover:-translate-y-2 flex flex-col">
            <div className="text-4xl font-bold text-blue-600 mb-2">{step.step}</div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-600 flex-grow">{step.description}</p>
          </div>
        </FadeInSection>
      ))}
    </div>
  </div>
</section>


      {/* Final CTA */}
      <section className="py-20 bg-blue-900 text-white text-center">
        <FadeInSection>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Let’s Elevate Your Firm’s Success</h2>
          <p className="text-lg text-blue-100 mb-8">
            Partner with CPA ONE and unlock the potential for increased operational efficiency, cost savings, and strategic growth. Contact us today for a free consultation, and learn how our tailored back-office solutions can help your firm thrive.
          </p>
          <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition">
            Get a Free Consultation
          </button>
        </FadeInSection>
      </section>
    </div>
  );
};

export default Home;
