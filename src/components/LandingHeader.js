import React from 'react';
import { Heading, Flex, Box } from 'rebass';
import styled from 'styled-components';
import MarioImage from './images/mario_arranz.png';
import MediumIcon from './images/medium.svg';
import GithubIcon from './images/github.svg';
import TwitterIcon from './images/twitter.svg';
import EmailIcon from './images/email.svg';

const Image = styled.img`
  width: 200px;
  height: 200px;
`;

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

const LandingHeader = () => {
  return (
    <div>
      <Heading
        display= 'flex'
        flexDirection= 'column'
        justifyContent= 'center'
        alignItems= 'center'
        textAlign="center"
        fontSize= '30px'
      >
        <div>
          <h1>Hi, I&apos;m Mario Arranz 👋</h1>
          <Flex justifyContent="center" alignItems="center">
            <Box>
              <a href="#">
                <Image src={MarioImage} alt="Mario Arranz" />
              </a>
            </Box>
          </Flex>
          <p
            style={{ 
              marginTop: '50px',
            }}
          >
            Backend Developer
          </p>
          {/* <p
            style={{ 
              fontSize: '15px'
            }}
          >
            Mario Arranz IT Solutions
          </p> */}
        </div>
      </Heading>
      <span/>
      <div
        style={{ 
          marginTop: '60px'
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
    </div>
  )
}

export default LandingHeader 
