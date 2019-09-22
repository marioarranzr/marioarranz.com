import React from 'react';
import styled from 'styled-components';
import { Box } from 'rebass';
import SocialLinkList from "./SocialLinkList"

const Social = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`

const RenponsiveCVLogo = styled.img`
	width: 75px;
	height: 40px;
`;

const LogoCV = ({ url, logo, alt = '' }) => (
    <Box>
        <a href={url} rel="noopener noreferrer" target="_blank">
            <RenponsiveCVLogo src={logo} alt={alt} />
        </a>
    </Box>
);

const SocialLinks = ({socialLinks, includeCV}) => (
  <Social>
    <div className="container">
      <div className="row center-xs">
        <SocialLinkList socialLinks={socialLinks} isResume={false} />
      </div>
      <div className="row center-xs cv">
        {includeCV &&
          <SocialLinkList socialLinks={socialLinks} isResume={true}/>
        }
      </div>
    </div>
  </Social>
)

export default SocialLinks
