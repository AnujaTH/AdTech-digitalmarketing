
const 
Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">AdTech</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Empowering tech startups and software companies with cutting-edge digital marketing strategies 
              that drive real growth and sustainable success.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">
                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-cyan-400 transition-colors">
                  <span className="text-sm font-bold">f</span>
                </div>
              </a>
              <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">
                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-cyan-400 transition-colors">
                  <span className="text-sm font-bold">in</span>
                </div>
              </a>
              {/* <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">
                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-cyan-400 transition-colors">
                  <span className="text-sm font-bold">tw</span>
                </div>
              </a>
              <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">
                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-cyan-400 transition-colors">
                  <span className="text-sm font-bold">ig</span>
                </div>
              </a> */}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  SEO & Technical SEO
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  Content Marketing
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  Social Media Strategy
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  Paid Advertising
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  Lead Generation
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  Strategy Consulting
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#case-studies" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#blog" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  Partners
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div>
                <p className="text-gray-300">
                  Jaffna, Northern Province<br />
                  Sri Lanka 40000
                </p>
              </div>
              <div>
                <p className="text-gray-300">
                  Phone: +94 766584872<br />
                  Email: hello@adtech.lk
                </p>
              </div>
              <div>
                <p className="text-gray-300">
                  Mon-Fri: 9:00 AM - 6:00 PM<br />
                  Sat: 10:00 AM - 4:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-300 mb-4 md:mb-0">
              <p>&copy; 2024 AdTech. All rights reserved.</p>
            </div>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6">
              <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
