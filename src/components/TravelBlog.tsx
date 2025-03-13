'use client';
import React, { useState, FormEvent } from 'react';
import { MapPin, DollarSign, Clock, Bell } from 'lucide-react';
import Navigation from './Navigation';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import FeaturesSection from './FeaturesSection';
import SignUpSection from './SignUpSection';
import Footer from './Footer';
import { Feature } from '@/types';

const TravelBlog: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');

  // 修改 handleSubmit 函数的参数类型
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      setMessage('感謝您的訂閱！');
      setEmail('');
    } catch (_) {
      setMessage('發生錯誤，請稍後再試。');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='min-h-screen bg-[#faf5e4]'>
      <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <SignUpSection
        email={email}
        setEmail={setEmail}
        loading={loading}
        message={message}
        onSubmit={handleSubmit}
      />
      <Footer />
    </div>
  );
};

export default TravelBlog;
