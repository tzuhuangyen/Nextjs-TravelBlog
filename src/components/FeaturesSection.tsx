import React from 'react';
import { MapPin, Clock, DollarSign, Bell } from 'lucide-react';

interface Feature {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

const FeaturesSection: React.FC = () => {
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

  return (
    <section id='features' className='features section-padding'>
      <div className='container'>
        <h2 className='text-center text-white mb-5'>特色服務</h2>
        <div className='row'>
          {features.map((feature, index) => (
            <div key={index} className='col-md-3 mb-4'>
              <div className='featureCard'>
                <div className='text-center mb-3'>{feature.icon}</div>
                <h3 className='h5 text-center mb-2'>{feature.title}</h3>
                <p className='text-center mb-0'>{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
