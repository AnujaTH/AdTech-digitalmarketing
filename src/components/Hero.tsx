// // import { useState, useEffect } from 'react';
// // import { Button } from '@/components/ui/button';
// // import { ChevronDown } from 'lucide-react';

// // const Hero = () => {
// //   const [isVisible, setIsVisible] = useState(false);

// //   useEffect(() => {
// //     setIsVisible(true);
// //   }, []);

// //   const scrollToAbout = () => {
// //     document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
// //   };

// //   return (
// //     <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 overflow-hidden">
// //       {/* Header */}
// //       <header className="absolute top-0 left-0 w-full px-8 py-4 flex justify-between items-center z-30 bg-white/5 backdrop-blur-sm border-b border-white/10">
// //         {/* Logo */}
// //         <div className="text-white text-2xl font-extrabold tracking-tight">
// //           <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">AdTech</span>
// //         </div>

// //         {/* Navigation */}
// //         <nav className="hidden md:flex gap-8 text-white font-medium">
// //           {['home', 'services', 'about', 'contact'].map((section) => (
// //             <button
// //               key={section}
// //               onClick={() => document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })}
// //               className="hover:text-cyan-300 transition duration-200"
// //             >
// //               {section.charAt(0).toUpperCase() + section.slice(1)}
// //             </button>
// //           ))}
// //         </nav>

// //         {/* Login/Profile Button */}
// //         <Button className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white hover:from-blue-400 hover:to-cyan-500 px-5 py-2 rounded-xl text-sm font-semibold shadow-md transition-all duration-200">
// //           Login
// //         </Button>
// //       </header>

// //       {/* Background Animation */}
// //       <div className="absolute inset-0 opacity-10 pointer-events-none">
// //         <div className="absolute top-10 left-10 w-24 h-24 border border-white/20 rounded-full animate-pulse"></div>
// //         <div className="absolute top-32 right-20 w-16 h-16 border border-white/20 rounded-lg rotate-45 animate-float delay-1000"></div>
// //         <div className="absolute bottom-20 left-24 w-12 h-12 border border-white/20 rounded-full animate-float delay-2000"></div>
// //         <div className="absolute bottom-32 right-36 w-28 h-28 border border-white/20 rounded-lg animate-float delay-500"></div>
// //       </div>

// //       {/* Hero Content */}
// //       <div className="container mx-auto px-6 text-center text-white relative z-10">
// //         <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
// //           <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
// //             Empower Your <br />
// //             <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
// //               Tech Startup
// //             </span>
// //           </h1>

// //           <p className="text-lg sm:text-xl md:text-2xl mb-10 text-blue-100 max-w-3xl mx-auto leading-relaxed">
// //             AdTech fuels the growth of innovative startups in Jaffna and beyond through cutting-edge digital marketing solutions.
// //           </p>

// //           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-14">
// //             <Button
// //               size="lg"
// //               className="bg-gradient-to-r from-white to-gray-100 text-navy-900 hover:from-blue-100 hover:to-white px-8 py-4 text-lg font-bold rounded-xl shadow-lg transition-all duration-200"
// //               onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
// //             >
// //               Let’s Grow Together
// //             </Button>
// //             <Button
// //               variant="outline"
// //               size="lg"
// //               className="border-2 border-white text-white hover:bg-white hover:text-navy-900 px-8 py-4 text-lg font-bold rounded-xl transition-all duration-200"
// //               onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
// //             >
// //               Explore Services
// //             </Button>
// //           </div>

// //           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto text-center">
// //             {[
// //               { title: '500+', subtitle: 'Startups Empowered' },
// //               { title: '300%', subtitle: 'Avg. Growth Achieved' },
// //               { title: '24/7', subtitle: 'Support & Monitoring' },
// //             ].map((card, index) => (
// //               <div
// //                 key={index}
// //                 className="bg-white/5 border border-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg hover:scale-105 transition-transform"
// //               >
// //                 <h3 className="text-3xl font-bold mb-2">{card.title}</h3>
// //                 <p className="text-blue-100">{card.subtitle}</p>
// //               </div>
// //             ))}
// //           </div>
// //         </div>

// //         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
// //           <button onClick={scrollToAbout} className="text-white hover:text-cyan-300 transition-colors">
// //             <ChevronDown size={36} />
// //           </button>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Hero;
// import { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button";
// import { ChevronDown } from "lucide-react";
// import { Navigate } from "react-router-dom";
// import { useNavigate } from 'react-router-dom';

// const Hero = () => {
//   const [isVisible, setIsVisible] = useState(false);
//  const navigate = useNavigate();
//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   const scrollToAbout = () => {
//     document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-black via-blue-950 to-black text-white overflow-hidden">
//       {/* Header */}
//       <header className="absolute top-0 left-0 w-full px-8 py-4 flex justify-between items-center z-30 bg-white/5 backdrop-blur-sm border-b border-white/10">
//         <div className="text-2xl font-extrabold tracking-tight">
//           <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
//             AdTech
//           </span>
//         </div>

//         {/* <nav className="hidden md:flex gap-8 font-medium">
//           {['home', 'services', 'about', 'contact'].map((section) => (
//             <button
//               key={section}
//               onClick={() => document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })}
//               className="hover:text-cyan-300 transition duration-200 capitalize"
//             >
//               {section}
//             </button>
//           ))}
//         </nav> */}
//         {/* <div className="hidden md:block">
//         <nav className="hidden md:flex gap-8 font-medium">
//       {['home', 'services', 'about', 'contact'].map((section) => (
//         <button
//           key={section}
//           onClick={() => document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })}
//           className="hover:text-cyan-300 transition duration-200 capitalize"
//         >
//           {section}
//         </button>
//       ))} */}
//     {/* </nav>
//   </div> */}

//   {/* Company Nav (horizontal) */}
//   <div className="hidden md:flex gap-8 text-sm font-medium">
//     {[
//       { href: "#about", label: "About Us" },
//       // { href: "#case-studies", label: "Case Studies" },
//       { href: "#blog", label: "Blog" },
//       { href: "#contact", label: "Contact" },
//       { href: "#", label: "Careers" },
//       { href: "#", label: "Partners" },
//     ].map((item, idx) => (
//       <a
//         key={idx}
//         href={item.href}
//         className="text-gray-300 hover:text-cyan-400 transition-colors capitalize"
//       >
//         {item.label}
//       </a>
//     ))}
//   </div>
        
// {/* 
//         <Button className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white hover:from-blue-400 hover:to-cyan-500 px-5 py-2 rounded-xl text-sm font-semibold shadow-md transition-all duration-200">
//           Login/SignUp
//         </Button> */}
//          <button
//         onClick={() => Navigate('/AuthPage')}
//         className="bg-gradient-to-r from-cyan-400 to-blue-600 text-white font-bold px-6 py-3 rounded-xl shadow-lg hover:from-blue-600 hover:to-cyan-400 transition-all"
//       >
//         Get Started
//       </button>
//       </header>

//       {/* Animated Background */}
//       <div className="absolute inset-0 opacity-10 pointer-events-none">
//         <div className="absolute top-10 left-10 w-24 h-24 border border-white/20 rounded-full animate-ping"></div>
//         <div className="absolute top-32 right-20 w-16 h-16 border border-white/20 rounded-lg rotate-45 animate-float delay-1000"></div>
//         <div className="absolute bottom-20 left-24 w-12 h-12 border border-white/20 rounded-full animate-float delay-2000"></div>
//         <div className="absolute bottom-32 right-36 w-28 h-28 border border-white/20 rounded-lg animate-float delay-500"></div>
//       </div>

//       {/* Hero Content */}
//       <div className="container mx-auto px-6 text-center relative z-10">
//         <div
//           className={`transition-all duration-1000 ease-out ${
//             isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//           }`}
//         >
//           <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
//             Empower Your <br />
//             <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
//               Tech Startup
//             </span>
//           </h1>

//           <p className="text-lg sm:text-xl md:text-2xl mb-10 text-blue-100 max-w-3xl mx-auto leading-relaxed">
//             AdTech fuels the growth of innovative startups in Jaffna and beyond
//             through cutting-edge digital marketing solutions.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-14">
//             <Button
//               size="lg"
//               className="bg-white text-gray-900 hover:bg-blue-100 px-8 py-4 text-lg font-bold rounded-xl shadow-xl transition-all duration-200"
//               onClick={() =>
//                 document
//                   .getElementById("contact")
//                   ?.scrollIntoView({ behavior: "smooth" })
//               }
//             >
//               Let’s Grow Together
//             </Button>
//             <Button
//               variant="outline"
//               size="lg"
//               className="bg-white text-gray-900 hover:bg-blue-100 px-8 py-4 text-lg font-bold rounded-xl shadow-xl transition-all duration-200"
//               onClick={() =>
//                 document
//                   .getElementById("services")
//                   ?.scrollIntoView({ behavior: "smooth" })
//               }
//             >
//               Explore Services
//             </Button>
//           </div>

//           {/* Stats */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto text-center">
//             {[
//               {
//                 title: "100+",
//                 subtitle: "Ideas Turned Into Prototypes",
//               },
//               {
//                 title: "99%",
//                 subtitle: "Uptime & Service Reliability",
//               },
//               {
//                 title: "24/7",
//                 subtitle: "Dedicated Tech Support",
//               },
//             ].map((card, index) => (
//               <div
//                 key={index}
//                 className="bg-white/10 border border-white/20 backdrop-blur-md rounded-xl p-6 shadow-xl hover:scale-105 transition-transform duration-300"
//               >
//                 <h3 className="text-3xl font-bold mb-2 text-white">
//                   {card.title}
//                 </h3>
//                 <p className="text-blue-100">{card.subtitle}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Scroll Down */}
//         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
//           <button
//             onClick={scrollToAbout}
//             className="text-white hover:text-cyan-400 transition-colors duration-200"
//           >
//             <ChevronDown size={36} className="drop-shadow-lg" />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-black via-blue-950 to-black text-white overflow-hidden">
      {/* Header */}
      <header className="absolute top-0 left-0 w-full px-8 py-4 flex justify-between items-center z-30 bg-white/5 backdrop-blur-sm border-b border-white/10">
        <div className="text-2xl font-extrabold tracking-tight">
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            AdTech
          </span>
        </div>

        {/* Company Nav */}
        <div className="hidden md:flex gap-8 text-sm font-medium">
          {[
            { href: "#about", label: "About Us" },
            { href: "#blog", label: "Blog" },
            { href: "#contact", label: "Contact" },
            { href: "#", label: "Careers" },
            { href: "#", label: "Partners" },
          ].map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className="text-gray-300 hover:text-cyan-400 transition-colors capitalize"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Get Started Button */}
        <button
          onClick={() => navigate("/adtech-growth-hub-main/src/components/login.tsx")}
          className="bg-gradient-to-r from-cyan-400 to-blue-600 text-white font-bold px-6 py-3 rounded-xl shadow-lg hover:from-blue-600 hover:to-cyan-400 transition-all"
        >
          Login/Signup
        </button>
      </header>

      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-24 h-24 border border-white/20 rounded-full animate-ping"></div>
        <div className="absolute top-32 right-20 w-16 h-16 border border-white/20 rounded-lg rotate-45 animate-float delay-1000"></div>
        <div className="absolute bottom-20 left-24 w-12 h-12 border border-white/20 rounded-full animate-float delay-2000"></div>
        <div className="absolute bottom-32 right-36 w-28 h-28 border border-white/20 rounded-lg animate-float delay-500"></div>
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-6 text-center relative z-10">
        <div
          className={`transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
            Empower Your <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Tech Startup
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl mb-10 text-blue-100 max-w-3xl mx-auto leading-relaxed">
            AdTech fuels the growth of innovative startups in Jaffna and beyond
            through cutting-edge digital marketing solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-14">
            <Button
              size="lg"
              className="bg-white text-gray-900 hover:bg-blue-100 px-8 py-4 text-lg font-bold rounded-xl shadow-xl transition-all duration-200"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Let’s Grow Together
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-white text-gray-900 hover:bg-blue-100 px-8 py-4 text-lg font-bold rounded-xl shadow-xl transition-all duration-200"
              onClick={() =>
                document
                  .getElementById("services")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Explore Services
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto text-center">
            {[
              { title: "100+", subtitle: "Ideas Turned Into Prototypes" },
              { title: "99%", subtitle: "Uptime & Service Reliability" },
              { title: "24/7", subtitle: "Dedicated Tech Support" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white/10 border border-white/20 backdrop-blur-md rounded-xl p-6 shadow-xl hover:scale-105 transition-transform duration-300"
              >
                <h3 className="text-3xl font-bold mb-2 text-white">
                  {stat.title}
                </h3>
                <p className="text-blue-100">{stat.subtitle}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Down Icon */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={scrollToAbout}
            className="text-white hover:text-cyan-400 transition-colors duration-200"
          >
            <ChevronDown size={36} className="drop-shadow-lg" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
