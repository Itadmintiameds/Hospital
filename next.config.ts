import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      { source: '/cureplus-disha-hospital', destination: '/hospital/1' },
      { source: '/cureplus-dharani-hospital', destination: '/hospital/2' },
      { source: '/cureplus-kaveri-hospital', destination: '/hospital/3' },
      { source: '/cureplus-krishna-hospital', destination: '/hospital/4' },
      { source: '/cureplus-narasegowda-memorial-hospital', destination: '/hospital/5' },
      { source: '/cureplus-hospital-shanivarasanthe', destination: '/hospital/6' },
      { source: '/cureplus-hospital-ramapura', destination: '/hospital/7' },
      { source: '/cureplus-hospital-terakanambi', destination: '/hospital/8' },
      { source: '/cureplus-hospital-bherya', destination: '/hospital/9' },
      { source: '/cureplus-hospital-t-narasipura', destination: '/hospital/10' },
      { source: '/cureplus-hospital-handpost', destination: '/hospital/11' },
      { source: '/cureplus-hospital-hosuru', destination: '/hospital/12' },
      { source: '/cureplus-hospital-halli-mysuru', destination: '/hospital/13' },
    ];
  },
};

export default nextConfig;
