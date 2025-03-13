import React from 'react';
import { ChevronRight } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id='about' className='section-padding'>
      <div className='container'>
        <h2 className='text-center text-primary-custom mb-5'>關於我們</h2>
        <div className='row'>
          <div className='col-md-6'>
            <div className='mb-4'>
              <p className='lead'>
                我們是一群熱愛旅行的探險家，致力於分享最真實的旅行體驗。
              </p>
              <p className='lead'>
                從在地文化到隱藏美食，我們用專業的視角，為您帶來最完整的旅遊資訊。
              </p>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='missionBox'>
              <h3 className='mb-4'>我們的使命</h3>
              <ul className='list-unstyled'>
                {[
                  '提供最真實的旅遊體驗',
                  '分享專業的旅遊知識',
                  '創造難忘的旅行回憶',
                ].map((item, index) => (
                  <li key={index} className='d-flex align-items-center mb-3'>
                    <ChevronRight className='me-2' />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
