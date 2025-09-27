import React from 'react';
import { Users, Target, Award, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8 text-blue-600" />,
      title: "Our Mission",
      description: "To provide exceptional financial services that empower businesses to achieve sustainable growth and success."
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Our Vision",
      description: "To be the most trusted financial partner for businesses, known for our expertise, integrity, and client-focused approach."
    },
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: "Our Values",
      description: "Integrity, excellence, innovation, and client satisfaction are at the core of everything we do."
    }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "Managing Partner & CPA",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "15+ years of experience in corporate accounting and tax planning."
    },
    {
      name: "Michael Chen",
      role: "Senior Financial Advisor",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Specializes in business consulting and financial strategy development."
    },
    {
      name: "Emily Rodriguez",
      role: "Tax Director",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Expert in complex tax matters and compliance for businesses of all sizes."
    },
    {
      name: "David Thompson",
      role: "Audit Manager",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Certified auditor with extensive experience in financial assurance services."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Trusted Book Pro</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              For over 15 years, we've been helping businesses navigate their financial challenges 
              with expert guidance, innovative solutions, and unwavering commitment to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                 At Trusted Book Pro, we specialize in providing high-quality, reliable back-office support to CPA firms across the United States and Canada. As your trusted partner, we understand that efficient back-office operations are critical to the success of your firm. Our comprehensive services enable CPA firms to focus on client relationships, business growth, and delivering expert financial guidance, while we handle the operational complexities.


                </p>
                <p>
                 With our deep expertise in accounting, tax, payroll, and financial operations, Trusted Book Pro offers tailored back-office solutions that enhance efficiency, improve accuracy, and help your firm operate at its best. Whether your firm is small, medium-sized, or large, we have the tools and skills to support you effectively.
                </p>
               
              </div>
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                  <div className="text-gray-600">Clients Served</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Office team meeting"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-6 rounded-lg shadow-lg">
                <TrendingUp className="w-8 h-8 mb-2" />
                <div className="text-sm font-semibold">Growing Strong</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Mission, Vision & Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core principles guide everything we do and shape our commitment to our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our certified professionals bring decades of combined experience to help 
              your business succeed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Work with Our Team?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how we can help your business achieve its financial goals.
          </p>
          <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200">
            Schedule a Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
