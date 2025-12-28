"use client";

import { useForm } from "react-hook-form";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";

// Type for form data
type ContactUsFormValues = {
  verifyOtp: string;
};

const defaultValues: Partial<ContactUsFormValues> = {
  verifyOtp: "",
};

const VerifyOtp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }, // To handle validation errors
  } = useForm<ContactUsFormValues>({
    defaultValues,
    mode: "onChange", // Enable real-time validation
  });

  // Handle form submission
  const onSubmit = (data: ContactUsFormValues) => {
    console.log("OTP submitted:", data);
    // You can replace this with your logic to verify OTP
  };

  return (
    <div  className="w-100 mx-auto p-6 border border-[#00D4FF] rounded-lg shadow-lg">
      <h2  className="text-2xl text-[#008FFF] font-semibold mb-4 text-center">
        Verify OTP
      </h2>
      <p  className="text-sm text-white mb-6 text-center">Enter your verification code that we have sent your email sh********123@gmail.com</p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* OTP Field */}
        <div className="space-y-2">
          <label className="block text-white" htmlFor="verifyOtp">
            Enter OTP
          </label>
          <InputOTP maxLength={6} {...register("verifyOtp", { required: "OTP is required" })}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
          {/* Display error message */}
          {errors.verifyOtp && <p className="text-red-500 text-sm">{errors.verifyOtp.message}</p>}
        </div>

        {/* Submit Button */}
        <button type="submit" className="authButtonStyle">
          Verify OTP
        </button>
      </form>
    </div>
  );
};

export default VerifyOtp;
