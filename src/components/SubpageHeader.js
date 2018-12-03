import React from 'react';
import { Box } from 'rebass';
import styled from 'styled-components';

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

const SubpageHeader = () => {
  return (
    <div></div>
  )
}

export default SubpageHeader 
