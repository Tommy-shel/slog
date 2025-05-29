import React, { useState } from "react";
import { User, Code, BarChart3, Globe, Download, Facebook, Twitter, Instagram, Linkedin, Mail, Rss, Video, Palette, MessageCircle } from 'lucide-react';
import secImg from './secImg.png'; 
import Spline from "@splinetool/react-spline";
import webdesign from './webdesign.png';
import ecom1 from './ecom1.png';
import ecom2 from './ecom2.png';
function App() {

const projects = [
  {
    id: 1,
    title: 'Web Design Project',
    url: 'https://portal1234.my.canva.site/dagoxeuuhe0',
    img: webdesign, 
    icon: Code
  },
  {
    id: 2,
    title: 'ecommerce website Project',
    url: 'https://riva7.odoo.com/',
    img: ecom1, 
    icon: Code
  },
  {
    id: 3,
    title: 'Web development Project',
    url: 'https://www.orra.co.in/?srsltid=AfmBOoqEnvSksYtXU_SSDMtZhrQzMROM8_7ISJHuMV6q4YOMeF29F0Qq',
    img: ecom2, 
    icon: Code
  }
];


   const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };


  return (
    <div className="min-h-screen  text-gray-800 font-sans">
      {/* Navigation */}
        
     <nav className="relative bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-3xl shadow-lg m-4">
      <div className="flex justify-between items-center px-8 py-4">
        <div className="text-2xl font-bold">SLOG</div>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li className="hover:text-purple-400 cursor-pointer">
            <a href="#home">Home</a>
          </li>
          <li className="hover:text-purple-400 cursor-pointer">
            <a href="#aboutus">About us</a>
          </li>
          <li className="hover:text-purple-400 cursor-pointer">
            <a href="#projects">Projects</a>
          </li>
          <li className="hover:text-purple-400 cursor-pointer">
            <a href="#testimonials">Testimonials</a>
          </li>
          <li className="hover:text-purple-400 cursor-pointer">
            <a href="#contactus">Contact us</a>
          </li>
        </ul>
        
        {/* Mobile Menu Button */}
        <div 
          className="md:hidden text-2xl cursor-pointer hover:text-purple-300 transition-colors"
          onClick={toggleMenu}
        >
          {isMenuOpen ? '✕' : '☰'}
        </div>
      </div>
      
      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-b-3xl shadow-lg z-50">
          <ul className="flex flex-col py-4">
            <li className="hover:bg-purple-700 cursor-pointer">
              <a 
                href="#home" 
                className="block px-8 py-3 hover:text-purple-300 transition-colors"
                onClick={closeMenu}
              >
                Home
              </a>
            </li>
            <li className="hover:bg-purple-700 cursor-pointer">
              <a 
                href="#aboutus" 
                className="block px-8 py-3 hover:text-purple-300 transition-colors"
                onClick={closeMenu}
              >
                About us
              </a>
            </li>
            <li className="hover:bg-purple-700 cursor-pointer">
              <a 
                href="#projects" 
                className="block px-8 py-3 hover:text-purple-300 transition-colors"
                onClick={closeMenu}
              >
                Projects
              </a>
            </li>
            <li className="hover:bg-purple-700 cursor-pointer">
              <a 
                href="#testimonials" 
                className="block px-8 py-3 hover:text-purple-300 transition-colors"
                onClick={closeMenu}
              >
                Testimonials
              </a>
            </li>
            <li className="hover:bg-purple-700 cursor-pointer">
              <a 
                href="#contactus" 
                className="block px-8 py-3 hover:text-purple-300 transition-colors"
                onClick={closeMenu}
              >
                Contact us
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>

      {/* Hero Section */}
     <section className="text-center py-12 md:py-24 px-4 flex flex-col lg:flex-row min-h-screen lg:h-screen" id="home">
  <div className="w-full lg:w-1/2 flex flex-col justify-center items-center mb-8 lg:mb-0">
    <h3 className="text-2xl md:text-3xl font-bold text-gray-700 mb-2">HI!</h3>
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-800 leading-tight">We Are Team</h1>
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-800 mb-6">Slog</h1>
    
    <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-8 rounded-full font-semibold hover:bg-purple-700 transition">
      <a href="#projects">Visit our Works</a>
    </button>
  </div>
  <div className="robot w-full lg:w-1/2 h-64 md:h-96 lg:h-full">
    <Spline
      scene="https://prod.spline.design/v6sI3ywtWJm3xqFg/scene.splinecode" 
    />
  </div>
</section>

      {/* About Section */}
      <section className="min-h-screen bg-gray-50 flex items-center justify-center p-8" id="aboutus">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Image placeholder */}
          <div className="flex justify-center">
            <div className="w-96 h-96 bg-gradient-to-br from-purple-200 to-blue-200 rounded-2xl flex items-center justify-center">
              <div className="text-6xl text-purple-600"><img src={secImg} alt="" /></div>
            </div>
          </div>
          
          {/* Content Section */}
          <div className="p-8 lg:p-12">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-5xl font-bold text-purple-600 mb-6">About us</h1>
              
              <div className="text-gray-600 text-lg leading-relaxed mb-8 space-y-4">
                <p>
                  At Slog, we're a full-service creative agency driven by innovation, design, and results. Our team specializes in building responsive websites, managing social media presence, editing impactful videos, and crafting stunning graphic designs. Whether you're a startup or an established brand, we help you stand out online with tailored digital solutions that reflect your unique vision.
                </p>
                <p>
                  We believe in combining creativity with strategy to deliver content that not only looks great but performs even better.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-gray-600 text-lg mb-4">What We Do ?</p>
            <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Services
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Code, title: 'Web Development', desc: 'Full-stack development with modern technologies' },
              { icon: Video, title: 'Video Editing', desc: 'We will edit your simple videos to an aesthetic looking video' },
              { icon: Palette, title: 'Graphic Designing', desc: 'We can provide you great logos, banners for your businesses' },
              { icon: MessageCircle, title: 'Social Media Management', desc: 'We will help you to create your social media presence' }
            ].map((service, index) => (
              <div 
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl border border-gray-100 hover:border-purple-200 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

  <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-gray-600 text-lg mb-4">What We Did ?</p>
            <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Portfolio
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8" id="projects">
            {projects.map((project) => (
              <div 
                key={project.id}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Main container with background image */}
                <div 
                  className="aspect-square relative overflow-hidden bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url(${project.img})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  {/* Dark overlay for better contrast */}
                  <div className="absolute inset-0 bg-black/30"></div>
                  
                  {/* Content overlay that shows on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-600/90 via-purple-600/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center p-6">
                    <div className="text-center text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl mx-auto mb-4 flex items-center justify-center">
                        <project.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-4">{project.title}</h3>
                      <a 
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-purple-600 px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors inline-block"
                      >
                        View Project
                      </a>
                    </div>
                  </div>
                  
                  {/* Title overlay always visible at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                    <h3 className="text-white font-semibold text-lg">{project.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white" id='testimonials'>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-gray-600 text-lg mb-4">What Think Clients About Us?</p>
            <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Testimonials
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                  <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                    <User className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    "SLOG transformed our online presence completely. Their web development skills are outstanding and the team is very professional. Highly recommended!"
                  </p>
                  <h4 className="text-purple-600 font-semibold text-lg">Shirish Korade</h4>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                  <div className="w-full h-full bg-gradient-to-br from-blue-300 to-teal-400 flex items-center justify-center">
                    <User className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    "Amazing video editing and social media management services. They helped us grow our brand significantly. Great work!"
                  </p>
                  <h4 className="text-purple-600 font-semibold text-lg">Hardik More</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    
      {/* Footer */}
      <footer className="bg-gray-50  py-12 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
       <div className="text-gray-500 text-sm text-center md:text-left">
  <p>Copyright © 2025 Slog | All rights reserved.</p>
  <p>Contact No: 8591883398 | Gmail: Slogagency1@gmail.com</p>
</div>

            
           <div className="flex items-center gap-4">
  {[
    { icon: Twitter, href: 'https://twitter.com/yourprofile' },
    { icon: Linkedin, href: 'https://linkedin.com/in/yourprofile' },
    { icon: Instagram, href: 'https://instagram.com/yourprofile' },
    { icon: Rss, href: '/rss-feed.xml' }
  ].map((social, index) => (
    <a
      key={index}
      href={social.href}
      target={social.href.startsWith('http') || social.href.startsWith('mailto') ? "_blank" : undefined}
      rel={social.href.startsWith('http') ? "noopener noreferrer" : undefined}
      className="w-10 h-10 bg-gray-100 hover:bg-purple-100 rounded-full flex items-center justify-center text-gray-600 hover:text-purple-600 transition-all duration-300 hover:transform hover:-translate-y-1"
    >
      <social.icon className="w-5 h-5" />
    </a>
  ))}
</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
