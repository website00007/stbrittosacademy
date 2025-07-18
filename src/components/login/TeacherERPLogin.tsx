import React, { useEffect, useState } from 'react';
import { Mail, Lock } from 'lucide-react';

const TeacherERPLogin = () => {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const today = new Date();
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    setCurrentDate(today.toLocaleDateString(undefined, options));
  }, []);

  return (
    <div 
      className="min-h-screen flex flex-col justify-center items-center bg-sky-500 bg-cover bg-center text-white p-4 pt-20"
      style={{ backgroundImage: 'url("/SBA Building.jpg")' }}
    >
      <div className="relative w-full max-w-7xl h-[600px] bg-sky-700 bg-opacity-75 rounded-lg overflow-hidden shadow-2xl flex">
        {/* Left Section - Login Form */}
        <div className="w-full lg:w-2/5 p-10 flex flex-col justify-center items-center z-10">
          <div className="flex items-center justify-center mb-10">
            <img src="/LOGOS/SBA.png" alt="SBA Logo" className="h-24 mr-3" />
            <div className="flex flex-col text-center">
              <h3 className="text-white text-base font-bold">ST BRITTO'S ACADEMY</h3>
              <p className="text-sky-200 text-sm">eVarsity ERP for Education</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-2 text-center">Teacher Login</h2>
          <p className="text-sky-300 text-center mb-8">{currentDate}</p>
          <form 
            action="https://erp.stbrittosacademy.edu.in/evarsitysbi/usermanager/loginManager/youLogin.jsp"
            method="POST"
            className="space-y-6"
          >
            <div>
              <label htmlFor="userid" className="block text-sm font-medium text-sky-200 mb-2">User ID</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-sky-400" />
                <input
                  type="text"
                  id="userid"
                  name="userid"
                  className="w-full px-4 pl-10 py-3 bg-sky-800 border border-sky-700 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Enter your User ID"
                  required
                  autoComplete="username"
                />
              </div>
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-sky-200 mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-sky-400" />
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full px-4 pl-10 py-3 bg-sky-800 border border-sky-700 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Enter your password"
                  required
                  autoComplete="current-password"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
            >
              Login
            </button>
          </form>
          <div className="mt-8 text-center text-sky-300">
            <p>Don't have an account yet? <a href="#" className="font-medium text-orange-500 hover:text-orange-400">Register</a></p>
            <p className="mt-2"><a href="#" className="font-medium text-sky-300 hover:text-sky-200">Help</a></p>
          </div>
        </div>
        {/* Right Section - Image Background (hidden on small screens) */}
        <div className="hidden lg:block lg:w-3/5 bg-cover bg-center bg-sky-800 bg-opacity-50 rounded-r-lg" style={{ backgroundImage: 'url("/GROUP.JPG")' }}>
        </div>
      </div>
      {/* Top Left Login Text */}
      <div className="absolute top-10 left-10 text-white text-9xl font-bold opacity-10">
        Log in
      </div>
      <div className="absolute top-20 left-10 mt-20 text-white">
        <h3 className="text-4xl font-bold">ST BRITTO'S ACADEMY</h3>
        <p className="text-xl">eVarsity ERP for Education</p>
      </div>
    </div>
  );
};

export default TeacherERPLogin; 