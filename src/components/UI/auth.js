"use client";

import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import Input from "./input";

export default function AuthCard({ isLogin = true }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle auth logic here
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        {/* Gold gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        
        {/* White card container */}
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          {/* Auth form */}
          <div className="max-w-md mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-800">
                {isLogin ? "Welcome Back" : "Create Account"}
              </h1>
              <p className="text-gray-600 mt-2">
                {isLogin ? "Login to your account" : "Get started with us"}
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {!isLogin && (
                <Input
                  id="name"
                  label="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              )}
              
              <Input
                id="email"
                label="Email Address"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              
              <Input
                id="password"
                label="Password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              
              {!isLogin && (
                <Input
                  id="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              )}
              
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-4 rounded-lg shadow-md transition duration-300"
                >
                  {isLogin ? "Login" : "Sign Up"}
                </button>
              </div>
            </form>
            
            {/* Divider */}
            <div className="flex items-center my-6">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="flex-shrink mx-4 text-gray-500">or</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>
            
            {/* Google Login */}
            <div className="w-full flex justify-center">
              <button
                type="button"
                className="flex items-center justify-center bg-white border border-gray-300 rounded-lg shadow-md px-6 py-3 text-sm font-medium text-gray-800 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition w-full"
              >
                <FaGoogle className="h-5 w-5 mr-3 text-red-500" />
                <span>Continue with Google</span>
              </button>
            </div>
            
            {/* Switch auth mode link */}
            <div className="text-center mt-6">
              <p className="text-gray-600">
                {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
                <a 
                  href={isLogin ? "/account/signup" : "/account/login"} 
                  className="text-amber-600 hover:text-amber-700 font-medium"
                >
                  {isLogin ? "Sign up" : "Login"}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}