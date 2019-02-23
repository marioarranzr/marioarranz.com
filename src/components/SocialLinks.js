import React from 'react';
import { Flex, Box } from 'rebass';
import styled from 'styled-components';
import MediumIcon from './images/medium.svg';
import LinkedinIcon from './images/linkedin.svg';
import GithubIcon from './images/github.svg';
import TwitterIcon from './images/twitter.svg';
import EmailIcon from './images/email.svg';
import PDFIcon from './images/pdf.svg';
import DOCIcon from './images/doc.svg';

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

const SocialLinks = ({includeCV}) => {
    return (
        <div
            style={{
                marginTop: '30px'
            }}
        >
            <div>
                <Flex justifyContent="center" alignItems="center">
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
                </Flex>
            </div>

            {includeCV &&
            <div
                style={{
                    marginTop: '20px'
                }}
            >
                <Flex justifyContent="center" alignItems="center">
                    <Logo
                        url="https://marioarranz.ddns.net/owncloud/index.php/s/nDg5qkBeCgqS4TJ/download"
                        logo={PDFIcon}
                        alt="CV"
                    />
                    <Logo
                        url="https://marioarranz.ddns.net/owncloud/index.php/s/EcXiO6Yk2mGlqWF/download"
                        logo={DOCIcon}
                        alt="CV"
                    />
                </Flex>
            </div>
            }
        </div>
    )
}

export default SocialLinks 
