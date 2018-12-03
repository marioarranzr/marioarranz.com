import React from 'react';
import LandingHeader from '../components/LandingHeader';
import SubpageHeader from '../components/SubpageHeader';

export const Landing = ({ children, location }) => {
  return (
    <div>
      {location.pathname === '/' &&
        <LandingHeader />
      }
      {location.pathname.substring(0, 5) === '/blog' &&
        <SubpageHeader />
      }
      <main 
        style={{ 
          marginTop: '80px'
        }}
      >
        {children()}
      </main>
    </div>
  );
}

export default Landing;
