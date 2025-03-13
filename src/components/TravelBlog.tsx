'use client';
import React, { useState, FormEvent } from 'react';
import {
  // 移除未使用的导入
  MapPin,
  DollarSign,
  Clock,
  Bell,
} from 'lucide-react';
import Navigation from './Navigation';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
// import TestimonialsSection from './TestimonialsSection
import FeaturesSection from './FeaturesSection';
import SignUpSection from './SignUpSection';
import Footer from './Footer';
import { Feature } from '@/types';

const TravelBlog: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');

  const features: Feature[] = [
    { icon: <MapPin size={32} />, title: '在地攻略', desc: '深度探索當地文化' },
    { icon: <Clock size={32} />, title: '路線規劃', desc: '智能推薦最佳路線' },
    {
      icon: <DollarSign size={32} />,
      title: '預算控制',
      desc: '詳細的花費分析',
    },
    { icon: <Bell size={32} />, title: '即時更新', desc: '最新旅遊資訊' },
  ];

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
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
      // 使用下划线前缀表示有意忽略的变量
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
      <FeaturesSection features={features} />
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
