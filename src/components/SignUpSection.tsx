import React from 'react';

interface SignUpSectionProps {
  email: string;
  setEmail: (email: string) => void;
  loading: boolean;
  message: string;
  onSubmit: (e: React.FormEvent) => Promise<void>;
}

const SignUpSection: React.FC<SignUpSectionProps> = ({
  email,
  setEmail,
  loading,
  message,
  onSubmit,
}) => {
  return (
    <section id='signup' className='section-padding'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-8 text-center'>
            <h2 className='text-primary-custom mb-4'>訂閱我們的最新消息</h2>
            <p className='lead mb-5'>獲取最新的旅遊資訊和獨家優惠</p>
            <form onSubmit={onSubmit}>
              <div className='row justify-content-center'>
                <div className='col-md-8'>
                  <div className='input-group mb-3'>
                    <input
                      type='email'
                      className='form-control'
                      placeholder='輸入您的電子郵件'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <button
                      className='btn btn-custom btn-primary'
                      type='submit'
                      disabled={loading}
                    >
                      {loading ? '處理中...' : '立即訂閱'}
                    </button>
                  </div>
                  {message && (
                    <div className='alert alert-info mt-3'>{message}</div>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUpSection;
