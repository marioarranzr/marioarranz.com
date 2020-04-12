import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { Box } from 'rebass'

const RenponsiveLogo = styled.img`
	width: 60px;
	height: 30px;
`;

const Logo = ({ url, logo, alt = '' }) => (
  <Box>
    <a href={url} rel="noopener noreferrer" target="_blank">
      <RenponsiveLogo src={logo} alt={alt} />
    </a>
  </Box>
);


export default class SocialLinkList extends PureComponent {
  render() {
    var isResume = this.props.isResume
    const socialLinks = this.props.socialLinks.filter(function (s) {
      return s.isResume == isResume
    }).map((s, i) => (
      <Logo
        key={i}
        url={s.link_url}
        logo={s.icon_url}
        alt={s.description}
      />
    ));

    return (
      <div className="row">{socialLinks}</div>
    )
  }
}
