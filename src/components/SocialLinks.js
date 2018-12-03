import React from 'react';
import { Flex, Box } from 'rebass';
import styled from 'styled-components';
import MediumIcon from './images/medium.svg';
import GithubIcon from './images/github.svg';
import TwitterIcon from './images/twitter.svg';
import EmailIcon from './images/email.svg';

const RenponsiveLogo = styled.img`
  width: 50px;
  height: 25px;
`;

const Logo = ({ url, logo, alt = '' }) => (
  <Box>
    <a href={url} rel="noopener noreferrer" target="_blank">
      <RenponsiveLogo src={logo} alt={alt} />
    </a>
  </Box>
);

const SocialLinks = () => {
  return (
    <div
      style={{ 
        marginTop: '30px'
      }}
    >
      <Flex justifyContent="center" alignItems="center">
        <Logo
          url="https://github.com/marioarranzr/"
          logo={GithubIcon}
          alt="Github: marioarranzr"
        />
        <Logo
          url="https://medium.com/@marioarranzr/"
          logo={MediumIcon}
          alt="Medium: marioarranzr"
        />
        <Logo
          url="https://twitter.com/marioarranzr/"
          logo={TwitterIcon}
          alt="Twitter: marioarranzr"
        />
        <Logo
          url="mailto:hi@marioarranz.com/"
          logo={EmailIcon}
          alt="Email"
        />
      </Flex>
    </div>
  )
}

export default SocialLinks 
