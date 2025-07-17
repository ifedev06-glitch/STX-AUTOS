import { TypeAnimation } from 'react-type-animation';
import { useState,useEffect } from 'react';
import {
  FaHandsHelping,
  FaOilCan,
  FaCheckCircle,
  FaCogs,
  FaCarCrash,
  FaTools,
  FaCompressArrowsAlt,
  FaCarBattery,
  FaCalendarCheck,
  FaThermometerHalf,
} from 'react-icons/fa';

const Home = () => {

const testimonials = [
  {
    name: "James Adeyemi",
    title: "Happy Customer",
    comment: "STX Autobody did an amazing job restoring my car after a crash. It looks brand new!",
    image: "/imagep1.jpg",
  },
  {
    name: "Angela Okafor",
    title: "Returning Client",
    comment: "Excellent customer service and top-notch paint job. Highly recommend them!",
    image: "/imagep2.jpg",
  },
  {
    name: "Chris Umeh",
    title: "Fleet Manager",
    comment: "Our company vehicles have never looked better. Reliable and affordable service every time.",
    image: "/imagep3.jpg",
  },
];

const [currentSlide, setCurrentSlide] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  }, 5000); // Slide every 5s

  return () => clearInterval(interval);
}, []);

  return (
    <>
      {/* Hero Section */}
      <section className="flex items-center justify-center pt-40 px-4 sm:px-8 md:px-12 lg:px-20 pb-40">
        <div className="text-white max-w-16xl text-left space-y-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
            <div className="inline-block min-h-[5rem]">
              <TypeAnimation
                sequence={[
                  'WELCOME TO STX AUTOBODY SHOP.',
                  2000,
                  'With over 25 years of experience in auto services work',
                  2000,
                  'We have a proven track record of always giving our customers the highest satisfaction.',
                  2000,
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                style={{ display: 'inline-block' }}
                speed={50}
              />
            </div>
          </h1>

          <p className=" animate-fadeUp delay-[400ms] duration-[1000ms] text-base sm:text-lg md:text-xl text-white leading-relaxed max-w-5xl text-justify">
            At STX Autobody Shop, we bring over 25 years of hands-on experience in automotive repair, detailing, and bodywork.
            Our certified technicians are committed to delivering top-quality service, ensuring every vehicle leaves our shop in peak condition.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <button className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-transparent hover:text-blue-600 border border-transparent hover:border-blue-600 transition">
              Book Appointment
            </button>
            <button className="bg-white text-gray-900 font-semibold py-2 px-6 rounded-lg hover:bg-transparent hover:text-white border border-white transition">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white py-20 px-4 sm:px-8 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="bg-blue-100 p-5 rounded-full text-blue-600 mb-6 inline-block">
              <FaHandsHelping size={40} />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-700 mb-4">
              Providing Exceptional Service to Our Customers!
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              At AutoPro Solutions, we are committed to delivering reliable, high-quality automotive services that exceed customer expectations.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mt-4">
              Our expert team is dedicated to providing innovative solutions, timely repairs, and a seamless service experience from start to finish.
            </p>
          </div>
          <div className="w-full h-[300px] md:h-[500px] overflow-hidden rounded-xl">
            <img src="/image2.jpg" alt="Car Service" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-700 mb-4">Our Featured Services</h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            From routine maintenance to complex repairs, our expert team is equipped to handle every aspect of your vehicle's care.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { icon: <FaOilCan />, title: 'Oil Change', desc: 'Quick and professional oil changes.' },
              { icon: <FaCogs />, title: 'Motor Mount Replacement', desc: 'Smooth engine performance.' },
              { icon: <FaCarCrash />, title: 'Brake Repair', desc: 'Stay safe with full brake services.' },
              { icon: <FaTools />, title: 'Transmission Repair', desc: 'Reliable rebuilds and servicing.' },
              { icon: <FaCompressArrowsAlt />, title: 'Suspension Repair', desc: 'Improve comfort and handling.' },
              { icon: <FaCarBattery />, title: 'Battery & Electrical', desc: 'Reliable power system diagnostics.' },
            ].map((item, index) => (
              <div key={index} className="p-8 bg-gray-100 rounded-xl shadow hover:shadow-lg transition">
                <div className="text-5xl text-blue-600 mb-4 mx-auto">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white py-16 px-4 md:px-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-700">Why Choose Us</h2>
          <p className="mt-2 text-gray-600 max-w-xl mx-auto">
            We deliver quality, reliability, and top-tier customer service with every visit.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {[
            { icon: <FaTools />, title: 'Expert Technicians', desc: 'Certified professionals to handle your car with precision.' },
            { icon: <FaCarCrash />, title: 'Accident Repairs', desc: 'Efficient repair services for road readiness.' },
            { icon: <FaCalendarCheck />, title: 'Flexible Scheduling', desc: 'Book appointments when it suits you.' },
            { icon: <FaThermometerHalf />, title: 'Engine Diagnostics', desc: 'Advanced diagnostics for early detection.' },
          ].map((item, index) => (
            <div key={index} className="w-64 p-6 rounded-xl bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-800 transition shadow text-center">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Banner */}
     <section
  className="relative bg-fixed bg-center bg-cover min-h-[60vh] flex items-center justify-center text-white"
  style={{ backgroundImage: "url('/image3.jpg')" }}
>
  <div className="absolute inset-0 bg-black/60"></div> {/* Overlay */}
  <div className="relative z-10 p-10 rounded-xl text-center max-w-2xl">
    <h2 className="text-4xl font-bold mb-4">Experience the Difference</h2>
    <p className="text-lg">
      Quality auto care with a passion for precision. Our tools, team, and tech ensure your car performs at its best.
    </p>
  </div>
</section>

      {/* Autobody Service Section */}
      <section className="flex flex-col md:flex-row items-center bg-white py-16 px-4 md:px-16">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <img src="/image4.png" alt="Autobody Service" className="w-full h-auto object-contain rounded-xl shadow-md" />
        </div>
        <div className="w-full md:w-1/2 md:pl-12">
          <h2 className="text-4xl font-bold text-blue-700 mb-4">AUTOBODY SERVICE</h2>
          <p className="text-gray-600 mb-6">Quality beating of vehicles, leaving them looking new.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {[
              'Aluminum Repair', 'Paintless Dent Repair', 'Auto Glass Repair', 'Auto Painting',
              'Windshield Repairs', 'Auto Paint Repair', 'Fender Repair', 'Hail Damage Repair',
              'Towing Service', 'Wheel Alignment', 'Wheel Rim Repair', 'Collision Repair',
            ].map((item, index) => (
              <div key={index} className="bg-white p-4 rounded-xl shadow flex items-center space-x-3">
                <FaCheckCircle className="text-blue-600" />
                <span className="text-blue-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
          <button className="border-2 border-blue-700 text-blue-700 px-6 py-2 rounded-md font-semibold hover:bg-blue-700 hover:text-white transition-colors">
            Book an Appointment
          </button>
        </div>
      </section>
      <section className="bg-gray-100 py-20 px-4 sm:px-8 md:px-12 lg:px-20">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-4xl font-bold text-blue-700 mb-6">What Our Customers Say</h2>
    <p className="text-lg text-gray-600 mb-12">Real experiences from satisfied clients</p>

    {/* Testimonial Carousel */}
    <div className="relative overflow-hidden max-h-4xl mx-auto">
      <div className="flex transition-transform duration-1000" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-full flex-shrink-0 px-4">
            <div className="bg-white p-8 rounded-xl shadow text-left">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="text-lg font-semibold text-blue-700">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                </div>
              </div>
              <p className="text-gray-700 text-base italic">"{testimonial.comment}"</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

<section className="bg-white py-20 px-4 sm:px-8 md:px-12 lg:px-20">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-4xl font-bold text-blue-700 mb-6 text-center">Contact Us</h2>
    <p className="text-lg text-gray-600 mb-12 text-center">Have questions or feedback? We'd love to hear from you.</p>

    <form className="space-y-6">
      <div>
        <input
          type="text"
          id="name"
          className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          placeholder="Your full name"
        />
      </div>

      <div>
        <input
          type="email"
          id="email"
          className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <textarea
          id="message"
          rows="5"
          className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          placeholder="Your message..."
        ></textarea>
      </div>

        <div className="text-center">
        <button
    type="submit"
    className="inline-block bg-blue-700 text-white font-semibold px-6 py-3 rounded-md shadow transition duration-300 hover:bg-white hover:text-blue-700 border border-blue-700"
  >
    Send Message
  </button>
      </div>
    </form>
  </div>
</section>

    </>
  );
};

export default Home;
