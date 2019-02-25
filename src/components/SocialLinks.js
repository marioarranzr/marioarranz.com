import React from 'react';
import styled from 'styled-components';
import { Box } from 'rebass';
import MediumIcon from '../assets/images/medium.svg';
import LinkedinIcon from '../assets/images/linkedin.svg';
import GithubIcon from '../assets/images/github.svg';
import TwitterIcon from '../assets/images/twitter.svg';
import EmailIcon from '../assets/images/email.svg';
import PDFIcon from '../assets/images/pdf.svg';
import DOCIcon from '../assets/images/doc.svg';


const Social = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`

const RenponsiveLogo = styled.img`
	width: 60px;
	height: 30px;
`;

const RenponsiveCVLogo = styled.img`
	width: 75px;
	height: 40px;
`;

const Logo = ({ url, logo, alt = '' }) => (
  <Box>
    <a href={url} rel="noopener noreferrer" target="_blank">
      <RenponsiveLogo src={logo} alt={alt} />
    </a>
  </Box>
);

const LogoCV = ({ url, logo, alt = '' }) => (
    <Box>
        <a href={url} rel="noopener noreferrer" target="_blank">
            <RenponsiveCVLogo src={logo} alt={alt} />
        </a>
    </Box>
);

const SocialLinks = ({includeCV}) => {
  return (
    <Social>
      <div className="container">
        <div className="row center-xs">
          <Logo
            url="https://github.com/marioarranzr/"
            logo={GithubIcon}
            alt="Github: marioarranzr"
          />
          <Logo
            url="https://www.linkedin.com/in/marioarranz/?locale=en_US"
            logo={LinkedinIcon}
            alt="Linkedin: marioarranz"
          />
          <Logo
            url="https://twitter.com/marioarranzr/"
            logo={TwitterIcon}
            alt="Twitter: marioarranzr"
          />
          <Logo
            url="mailto:marioarranzr@gmail.com?subject=Just saw your amazing web!"
            logo={EmailIcon}
            alt="Email"
          />
          <Logo
            url="https://medium.com/@marioarranzr/"
            logo={MediumIcon}
            alt="Medium: marioarranzr"
          />
        </div>
          {includeCV &&
            <div className="row center-xs cv">
              <LogoCV
                url="https://marioarranz.ddns.net/owncloud/index.php/s/nDg5qkBeCgqS4TJ/download"
                logo={PDFIcon}
                alt="CV"
              />
              <LogoCV
                url="https://marioarranz.ddns.net/owncloud/index.php/s/EcXiO6Yk2mGlqWF/download"
                logo={DOCIcon}
                alt="CV"
              />
            </div>
          }
      </div>
    </Social>
  )
}

export default SocialLinks
