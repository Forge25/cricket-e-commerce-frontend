"use client";

import { useState } from "react";

export default function SignUp() {
  const [email, setEmail] = useState("rashmika@gmail.com");
  const [password, setPassword] = useState("");
  const [emailFocused, setEmailFocused] = useState(false);

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
            <h2 className="text-3xl sm:text-4xl font-medium text-gray-900 mb-1">
              Sign Up
            </h2>
            <p className="text-gray-600 text-base sm:text-lg">
              Create a password for your account.
            </p>
          </div>

          {/* Form */}
          <div className="space-y-4 sm:space-y-6">
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setEmailFocused(true)}
                onBlur={() => setEmailFocused(false)}
                className="w-full px-6 pt-6 pb-3 bg-gray-100 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500 peer"
              />
              <label
                className={`absolute left-6 transition-all duration-200 pointer-events-none ${
                  email || emailFocused
                    ? "top-2 text-xs text-gray-500"
                    : "top-4 text-base text-gray-500"
                }`}
              >
                Email
              </label>
            </div>

            <div className="relative">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full px-6 py-4 bg-gray-100 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div className="flex items-center gap-3 px-2">
              <input
                type="checkbox"
                id="privacy"
                className="w-5 h-5 rounded border-gray-300 text-red-600 focus:ring-red-500"
              />
              <label htmlFor="privacy" className="text-gray-700 text-sm">
                I agree with{" "}
                <span className="font-semibold">Privacy Policy</span> the{" "}
                <span className="font-semibold">stay log in</span>
              </label>
            </div>

            <button
              type="button"
              className="w-full bg-red-600 text-white py-4 rounded-full font-medium text-lg hover:bg-red-700 transition-colors mt-8"
            >
              Continue
            </button>

            <div className="flex items-center gap-4 py-4">
              <div className="flex-1 h-px bg-gray-300"></div>
              <span className="text-gray-500 text-sm">or</span>
              <div className="flex-1 h-px bg-gray-300"></div>
            </div>

            <button
              type="button"
              className="w-full bg-white border border-gray-300 py-4 rounded-full font-medium text-gray-700 hover:bg-gray-50 transition-colors flex items-center justify-center gap-3"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              <span className="text-blue-600 font-medium">Google</span>
            </button>
          </div>

          <button
            type="button"
            onClick={() => console.log("")}
            className="text-left text-gray-600 text-sm mt-2 hover:text-red-600 transition-colors duration-200 underline decoration-transparent hover:decoration-red-600 underline-offset-2"
          >
            allready have an account
          </button>
        </div>
      </main>
    </div>
  );
}
