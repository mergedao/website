import React, { useEffect } from 'react';

// 为 window.adsbygoogle 声明类型
declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

const AdBanner = () => {
  useEffect(() => {
    try {
      // 尝试加载广告
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error('AdSense error:', err);
    }
  }, []);

  return (
    <div className="ad-container">
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-1530405841616000"
        data-ad-slot="YOUR_AD_SLOT_ID" // 替换为您的广告位ID
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
};

export default AdBanner; 