"use client";

import { useState } from "react";

export default function SignUp() {
  const [verify, setVerify] = useState("XXXXXXXXX");
  const [verifyFocused, setVerifyFocused] = useState(false);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center px-4 sm:px-8 md:px-16 lg:px-22 py-4 sm:py-6">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Bat.lk</h1>
        <button className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-red-600 flex items-center justify-center text-white">
          <svg
            className="w-4.5 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 mb-8 sm:mb-12 md:mb-18">
        <div className="w-full max-w-md px-2 sm:px-4">
          <div className="mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-3xl sm:text-4xl font-medium text-gray-900 mb-4">
              Check your inbox
            </h2>
            <p className="text-black text-base sm:text-lg">
              To confirm its really you, enter the 6 digit code we just sent to
              phrashmika@gmail.com
            </p>
          </div>

          {/* Form */}
          <div className="space-y-4 sm:space-y-6">
            <div className="relative">
              <input
                type="text"
                value={verify}
                onChange={(e) => setVerify(e.target.value)}
                onFocus={() => setVerifyFocused(true)}
                onBlur={() => setVerifyFocused(false)}
                className="w-full px-6 pt-6 pb-3 bg-gray-100 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500 peer"
              />
              <label
                className={`absolute left-6 transition-all duration-200 pointer-events-none ${
                  verify || verifyFocused
                    ? "top-2 text-xs text-gray-500"
                    : "top-4 text-base text-gray-500"
                }`}
              >
                Verification Code
              </label>
            </div>

            <button
              type="button"
              className="w-full bg-red-600 text-white py-4 rounded-full font-medium text-lg hover:bg-red-700 transition-colors mt-8"
            >
              Continue
            </button>
            <button
              type="button"
              onClick={() => console.log("Didn't receive code")}
              className="text-left text-gray-600 text-sm hover:text-red-600 transition-colors duration-200 underline decoration-transparent hover:decoration-red-600 underline-offset-2 relative bottom-4"
            >
              didnt receive code?
            </button>
          </div>

          <button
            type="button"
            onClick={() => console.log("Resend code")}
            className="text-left text-gray-600 text-sm hover:text-red-600 transition-colors duration-200 underline decoration-transparent hover:decoration-red-600 underline-offset-2 relative bottom-6"
          >
            resend code
          </button>
        </div>
      </main>
    </div>
  );
}
