import React from 'react';
import ReactHelmet from 'react-helmet';

const Helmet = () => (
  <ReactHelmet
      title="Mario Arranz"
      meta={[
        { name: 'description', content: 'Mario Arranz portfolio and blog' },
        { name: 'keywords', content: 'Go, Golang, Developer, Gatsby, Blog' },
      ]}
    />
)

export default Helmet 
