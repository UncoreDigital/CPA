import React from 'react';
import { ExternalLink, TrendingUp, Users, Award } from 'lucide-react';

const Portfolio: React.FC = () => {
  const caseStudies = [
    {
      title: "Tech Startup Growth",
      client: "InnovateTech Solutions",
      industry: "Technology",
      challenge: "Rapid scaling required sophisticated financial planning and tax optimization.",
      solution: "Implemented comprehensive financial systems and strategic tax planning.",
      results: [
        "40% reduction in tax liability",
        "Streamlined financial reporting",
        "Successful Series A funding preparation"
      ],
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Restaurant Chain Expansion",
      client: "Gourmet Bistro Group",
      industry: "Food & Beverage",
      challenge: "Multi-location expansion with complex inventory and payroll management.",
      solution: "Centralized accounting system with location-specific reporting and payroll automation.",
      results: [
        "50% reduction in administrative time",
        "Improved cash flow management",
        "Successful expansion to 12 locations"
      ],
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Manufacturing Efficiency",
      client: "Precision Parts Inc.",
      industry: "Manufacturing",
      challenge: "Cost control and financial visibility across multiple production lines.",
      solution: "Activity-based costing system and real-time financial dashboards.",
      results: [
        "25% improvement in profit margins",
        "Enhanced cost visibility",
        "Optimized production planning"
      ],
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  const testimonials = [
    {
      quote: "TrustableAcc transformed our financial operations. Their expertise in tax planning saved us thousands while their bookkeeping services gave us the clarity we needed to make informed decisions.",
      author: "Sarah Mitchell",
      company: "Mitchell Marketing Agency",
      role: "CEO"
    },
    {
      quote: "The team's attention to detail and proactive approach to financial planning has been instrumental in our company's growth. They're not just accountants, they're strategic partners.",
      author: "Robert Chen",
      company: "Chen Construction",
      role: "Owner"
    },
    {
      quote: "Professional, reliable, and always available when we need them. Their payroll services have eliminated all our HR headaches, and their financial advice has been invaluable.",
      author: "Lisa Rodriguez",
      company: "Rodriguez Dental Practice",
      role: "Practice Manager"
    }
  ];

  const achievements = [
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: "Industry Recognition",
      description: "Winner of 'Best Accounting Firm' for 3 consecutive years"
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Client Satisfaction",
      description: "98% client retention rate with 5-star average rating"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
      title: "Business Growth",
      description: "Helped clients achieve average 35% revenue growth"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Portfolio</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Discover how we've helped businesses across various industries achieve their 
              financial goals through strategic planning and expert execution.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from real clients. See how our expertise has made a difference.
            </p>
          </div>

          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <img 
                    src={study.image} 
                    alt={study.title}
                    className="rounded-lg shadow-xl w-full h-80 object-cover"
                  />
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium inline-block mb-4">
                    {study.industry}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{study.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{study.challenge}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Our Solution:</h4>
                    <p className="text-gray-600 leading-relaxed">{study.solution}</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Results:</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <span className="text-gray-700">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Achievements
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Recognition and results that speak to our commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="flex justify-center mb-4">{achievement.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{achievement.title}</h3>
                <p className="text-gray-600 leading-relaxed">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-blue-800 p-8 rounded-xl">
                <div className="text-4xl text-blue-300 mb-4">"</div>
                <p className="text-blue-100 mb-6 leading-relaxed">{testimonial.quote}</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.author}</div>
                  <div className="text-blue-300">{testimonial.role}</div>
                  <div className="text-blue-300 text-sm">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">$50M+</div>
              <div className="text-gray-600">Client Savings Generated</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-600">Years of Excellence</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how we can help your business achieve similar results.
          </p>
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 inline-flex items-center">
            Start Your Success Story
            <ExternalLink className="ml-2 w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;