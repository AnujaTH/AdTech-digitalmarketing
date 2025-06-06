import React, { useState, FormEvent } from 'react';

const AuthPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-black text-white">
      {/* Left side - Image or Branding */}
      <div className="md:flex-1 bg-gradient-to-br from-blue-700 to-cyan-500 flex flex-col justify-center items-center p-12">
        <h1 className="text-4xl font-extrabold mb-6">Welcome to AdTech</h1>
        <p className="text-blue-100 max-w-md text-center">
          Empower your startup with our innovative digital solutions.
        </p>
      </div>

      {/* Right side - Form */}
      <div className="md:flex-1 bg-black p-10 flex flex-col justify-center">
        <div className="max-w-md w-full mx-auto">
          <div className="flex justify-center mb-8 space-x-6">
            <button
              type="button"
              onClick={() => setIsLogin(true)}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                isLogin ? 'bg-blue-600 text-white shadow-lg' : 'bg-gray-800 text-gray-400'
              }`}
            >
              Login
            </button>
            <button
              type="button"
              onClick={() => setIsLogin(false)}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                !isLogin ? 'bg-blue-600 text-white shadow-lg' : 'bg-gray-800 text-gray-400'
              }`}
            >
              Signup
            </button>
          </div>

          {isLogin ? (
            // Login form
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block mb-2 font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-cyan-400 outline-none text-white"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 font-medium">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-cyan-400 outline-none text-white"
                  placeholder="password"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-400 to-blue-600 hover:from-blue-600 hover:to-cyan-400 py-3 rounded-lg font-bold transition"
              >
                Login
              </button>
            </form>
          ) : (
            // Signup form
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block mb-2 font-medium">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-cyan-400 outline-none text-white"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="email-signup" className="block mb-2 font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email-signup"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-cyan-400 outline-none text-white"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="password-signup" className="block mb-2 font-medium">
                  Password
                </label>
                <input
                  type="password"
                  id="password-signup"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-cyan-400 outline-none text-white"
                  placeholder="Create a password"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-400 to-blue-600 hover:from-blue-600 hover:to-cyan-400 py-3 rounded-lg font-bold transition"
              >
                Signup
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
