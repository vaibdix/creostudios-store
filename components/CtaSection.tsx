"use client"
import React, { useState } from 'react';

interface CtaSectionProps {}

const CtaSection: React.FC<CtaSectionProps> = () => {
  const [email, setEmail] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
    } else {
      // Handle form submission here
      console.log('Submitted email:', email);
      setEmail('');
      setError('');
    }
  };

  const validateEmail = (email: string): boolean => {
    // Email validation regex pattern
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 ">
        <div className="p-6 sm:p-10 md:p-14 lg:p-8 rounded-lg bg-gray-100 dark:bg-gray-900 flex flex-col space-y-6 relative">
          <div className="absolute w-14 h-14 rounded-full bg-gradient-to-bl from-blue-600 to-violet-500 blur-2xl z-10 -top-7 -left-7 opacity-40"></div>
          <div className="absolute w-14 h-14 rounded-full bg-gradient-to-bl from-blue-600 to-violet-500 blur-2xl z-10 -bottom-7 -right-7 opacity-40"></div>
          <div className="lg:h-full flex flex-col items-center text-center justify-center space-y-8 mx-auto max-w-2xl">
            <h1 className="font-bold text-gray-900 dark:text-white text-4xl">
              Join other{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 dark:from-blue-300 dark:to-violet-400">
                600 Amazing
              </span>{' '}
              developers
            </h1>
            <p className="text-gray-700 dark:text-gray-300 text-center max-w-xl">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium eligendi, doloremque velit excepturi
            </p>
            <form onSubmit={handleSubmit} className="w-full flex flex-col sm:items-center sm:flex-row gap-y-3 gap-x-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="name@domain.com"
                value={email}
                onChange={handleChange}
                className="py-3 px-5 rounded-lg text-gray-800 dark:text-gray-200 bg-gray-200 dark:bg-gray-800 outline-none w-full placeholder:text-gray-600 dark:placeholder:text-gray-300"
              />
              <button type="submit" className="py-3 rounded-lg px-6 bg-black  text-white font-medium text-base w-full sm:w-max flex justify-center">
                Subscribe
              </button>
            </form>
            {error && <p className="text-red-500">{error}</p>}
          </div>
        </div>
      </div>
    </section>
  );
};


export default CtaSection;
