import React from 'react';
import Image from 'next/image';
import InputField from '../shared/InputField';
import google from '@/assets/icons/devicon_google.png'
import faceboook from '@/assets/icons/logos_facebook.png'
import github from '@/assets/icons/bi_github.png'

const LoginCard = () => {
  return (
    <div className="bg-black border border-gray-600 rounded-2xl p-8 w-[480px] h-fit">
      {/* Header */}
      <div className="mb-4 mt-12">
        <h2 className="text-white text-[36px] font-semibold">
          Welcome Back
        </h2>
        <p className="text-[16px] font-medium">
          Glad you're back!
        </p>
      </div>

      {/* Form */}
      <div className="space-y-4 mb-3">
        <InputField
          type="text"
          placeholder="Username"
        />
        
        <InputField
          type="password"
          placeholder="Password"
        />
      </div>

      {/* Remember me */}
      <div className="flex items-center mb-6">
        <input
          type="checkbox"
          id="remember"
          className="w-4 h-4 text-blue bg-transparent border-gray-600 rounded focus:ring-blue focus:ring-2"
        />
        <label htmlFor="remember" className="ml-2 text-[16px] font-medium">
          Remember me
        </label>
      </div>

      {/* Login Button */}
      <button className="w-full bg-blue text-white py-3 rounded-lg font-medium font-noto-sans hover:bg-opacity-90 transition-all mb-4">
        Login
      </button>

      {/* Forgot Password */}
      <div className="text-center mb-6">
        <a href="#" className="text-[16px] hover:text-gray">
          Forgot password ?
        </a>
      </div>

      {/* Divider */}
      <div className="flex items-center mb-3">
        <div className="flex-1 border-t border-[#4D4D4D]"></div>
        <span className="px-4 text-[16px] font-medium text-[#4D4D4D]">Or</span>
        <div className="flex-1 border-t border-[#4D4D4D]"></div>
      </div>

      {/* Social Login */}
      <div className="flex justify-center space-x-4">
        <Image src={google} alt="google" width={42} height={42}/>
        <Image src={faceboook} alt="faceboook" width={42} height={42}/>
        <Image src={github} alt="github" width={42} height={42}/>
      </div>

      {/* Footer */}
      <div className="text-center text-sm mt-16">
        <p className="text-[16px] font-medium mb-3">
          Don't have an account? <a href="#" className="hover:text-blue">Signup</a>
        </p>
        <div className="flex justify-center space-x-6 text-[16px]">
          <a href="#" className="hover:text-white">Terms & Conditions</a>
          <a href="#" className="hover:text-white">Support</a>
          <a href="#" className="hover:text-white">Customer Care</a>
        </div>
      </div>
    </div>
  );
};

export default LoginCard;
