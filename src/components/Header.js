import React from 'react';
import { Image} from 'rebass';
import Link from 'gatsby-link';
import HomeIcon from './images/home.svg';

const Header = () => {
  return (
    <div
      style={{
        position: 'relative',
        backgroundColor: '#f05f40',
        animation: 'animation: secondary-section-fade 300ms ease-in-out 350ms forwards',
        height: '8vh',
        padding: '4px 10px 0px'
      }}
    >
      <Link to="/">
        <Image
          src={HomeIcon}
          width="50px"
          alt="Home"
        />
      </Link>
    </div>
  )
}

export default Header 
