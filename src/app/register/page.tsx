import React from 'react';
import Image from 'next/image';
import InputField from '@/components/shared/InputField';
import Button from '@/components/shared/Button';
import google from '@/assets/icons/devicon_google.png'
import faceboook from '@/assets/icons/logos_facebook.png'
import github from '@/assets/icons/bi_github.png'


export default function Register() {
  return (
    <div className="flex items-center justify-center py-10">
      <div className="bg-black border border-gray-600 rounded-2xl p-8 w-[480px] h-fit">
      {/* Header */}
      <div className="mb-4 mt-12">
        <h2 className="text-white text-[36px] font-semibold">
          Open New Account
        </h2>
        <p className="text-[16px] font-medium">
        Enjoy your new spirit world
        </p>
      </div>

      {/* Form */}
      <div className="space-y-4 mb-3">
        <InputField
          type="text"
          placeholder="Username"
        />

        <InputField
          type="text"
          placeholder="Email"
        />
        
        <InputField
          type="password"
          placeholder="Password"
        />

        <InputField
          type="password"
          placeholder="Confirm Password"
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
          Agree our policy
        </label>
      </div>

      {/* Register Button */}
      <Button 
        type="submit" 
        fullWidth 
        className="mb-4"
      >
        Create New Account
      </Button>

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
      <div className="flex justify-center space-x-4 mb-6">
        <Image src={google} alt="google" width={42} height={42}/>
        <Image src={faceboook} alt="faceboook" width={42} height={42}/>
        <Image src={github} alt="github" width={42} height={42}/>
      </div>

    </div>
    </div>
  );
}
