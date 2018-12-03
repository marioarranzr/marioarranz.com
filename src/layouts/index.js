import React, {Fragment} from 'react';
import Helmet from '../components/Helmet';
import Header from '../components/Header';
import Footer from '../components/Footer';

import Landing from '../sections/Landing';

// TemplateWrapper is a wrapper og the complete website
// children is the content in every case
const TemplateWrapper = ({ children, location }) => {
  return (
  <div 
    style={{
      margin: '0%',
      fontFamily: "'Calibri', 'Segoe UI Emoji', sans-serif"  
    }}>
    <Fragment>
      <Helmet />
      <Header />
      <Landing children={children} location={location} />
      <Footer />
    </Fragment>
  </div>
  );
};

export default TemplateWrapper;
