import React from 'react';
import SocialLinks from './SocialLinks';

const Footer = () => (
    <div>
        <footer
            style={{
                textAlign: 'center',
                padding: '1rem 0'
            }}
        >
            &copy; 2019 by Mario Arranz. All rights reserved.
            {/*<SocialLinks includeCV={false}/>*/}
        </footer>
    </div>
);

export default Footer;
