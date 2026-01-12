'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Scale,
  Eye,
  EyeOff,
  Shield,
  DollarSign,
  Clock,
  CheckCircle,
} from 'lucide-react';

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Register submitted:', formData);
  };

  const features = [
    { icon: CheckCircle, text: 'Specialist Professionals (CA & CS)' },
    { icon: Shield, text: '100% Transparency' },
    { icon: DollarSign, text: 'Value for Money' },
    { icon: Clock, text: 'Fast & Responsive Support' },
  ];

  return (
    <div className="min-h-screen flex flex-col lg:flex-row overflow-hidden">
      <section className="relative lg:w-1/2 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white px-6 sm:px-10 lg:px-16 py-14 lg:py-0 flex items-center overflow-hidden">

        <div className="absolute -top-24 right-0 w-80 h-80 bg-blue-600/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 left-0 w-80 h-80 bg-teal-500/20 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-xl">

          <div className="flex items-center gap-3 mb-8">
            <Scale className="w-9 h-9 text-teal-400" />
            <h1 className="text-3xl font-bold tracking-tight">LegaloAI</h1>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
            Build Your Future
          </h2>
          <p className="text-base sm:text-lg text-blue-200 mb-8">
            Legal • Accounting • Tax • Business
          </p>

          <div className="hidden sm:block space-y-4">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <div key={i} className="flex items-center gap-4">
                  <div className="p-2 bg-white/10 rounded-lg backdrop-blur">
                    <Icon className="w-5 h-5 text-teal-400" />
                  </div>
                  <p className="text-base">{f.text}</p>
                </div>
              );
            })}
          </div>

          <p className="hidden sm:block mt-10 pt-6 border-t border-white/20 text-sm text-gray-300">
            Empowering businesses with expert legal & financial solutions
          </p>
        </div>
      </section>


      <section className="lg:w-1/2 flex items-center justify-center bg-white px-6 sm:px-10">
        <div className="w-full max-w-md py-16">

          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Create your account
            </h1>
            <p className="text-gray-600">
              Get started with LegaloAI today
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="John Doe"
                required
              />
            </div>


            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="you@company.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 pr-12 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="Create a strong password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 pr-12 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="Re-enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword(!showConfirmPassword)
                  }
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-start gap-3 pt-2">
              <input
                type="checkbox"
                required
                className="mt-1 w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
              />
              <p className="text-sm text-gray-600">
                I agree to the{' '}
                <Link href="#" className="text-blue-600 font-medium">
                  Terms
                </Link>{' '}
                &{' '}
                <Link href="#" className="text-blue-600 font-medium">
                  Privacy Policy
                </Link>
              </p>
            </div>


            <button
              type="submit"
              className="w-full bg-slate-900 text-white py-3.5 rounded-lg font-semibold hover:bg-slate-800 transition active:scale-[0.98]"
            >
              Create Account
            </button>


            <div className="relative text-center">
              <span className="bg-white px-3 text-sm text-gray-500 relative z-10">
                or
              </span>
              <div className="absolute inset-x-0 top-1/2 border-t border-gray-300" />
            </div>

            <button
              type="button"
              className="w-full flex items-center justify-center gap-3 border border-gray-300 py-3 rounded-lg font-medium hover:bg-gray-50 transition"
            ><svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Continue with Google
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-gray-600">
            Already have an account?{' '}
            <Link href="/login" className="font-semibold text-blue-600">
              Sign in
            </Link>
          </p>

          <p className="mt-4 text-xs text-center text-gray-400">
            🔒 Secured with industry-standard encryption
          </p>
        </div>
      </section>
    </div>
  );
}
