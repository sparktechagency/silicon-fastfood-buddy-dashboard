/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useForm } from 'react-hook-form';

const ResetPassword = () => {
  const {
    register,
    handleSubmit,
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="w-100 mx-auto p-6 border border-[#00D4FF] rounded-lg shadow-lg">
      <h2 className="text-2xl text-[#008FFF] font-semibold mb-6 text-center">Sign in to Fastfood Buddy</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="space-y-2">
          <label className="block mb-1 text-white" htmlFor="password">Password</label>
          <input
            type="new-password"
            placeholder="Enter Password"
            {...register('password', { required: 'Password is required' })}
            className="authInputStyle"
          />
        </div>

        <div className="space-y-2">
          <label className="block mb-1 text-white" htmlFor="password">Password</label>
          <input
            type="confirm-password"
            placeholder="Enter Password"
            {...register('password', { required: 'Password is required' })}
            className="authInputStyle"
          />
        </div>

        <div className="flex items-center justify-between">
          <label className="flex items-center text-white">
            <input type="checkbox" {...register('rememberMe', { required: 'Remember me is required' })} className="mr-2" />
            Remember me
          </label>
          <a href="#" className="text-blue-300 text-sm">Forgot Password?</a>
        </div>

        <div className="mt-4 space-y-4">
          <p className="text-center text-white mt-2 text-sm">You don’t have to get it right — just check in.</p>
          <button type="submit" className="authButtonStyle">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default ResetPassword;
