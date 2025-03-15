'use client';
import React, { useState, FormEvent, useEffect } from 'react';
import { MapPin, DollarSign, Clock, Bell } from 'lucide-react';
import Navigation from './Navigation';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import FeaturesSection from './FeaturesSection';
import SignUpSection from './SignUpSection';
import Footer from './Footer';
import { Feature } from '@/types';
import Loading from '../components/Loading';

const TravelBlog: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);

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

      setMessage('感謝您的註冊！');
      setEmail('');
    } catch (_) {
      setMessage('發生錯誤，請稍後再試。');
    } finally {
      setLoading(false);
    }
  };
  // 模擬加載過程
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2秒後隱藏加載效果

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {' '}
      {isLoading && <Loading message='網站載入中...' />}
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
    </>
  );
};

export default TravelBlog;
