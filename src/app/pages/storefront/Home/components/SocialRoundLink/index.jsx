import React from 'react';

import { faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Stack } from '@mui/material';
import styled from 'styled-components';

export default function SocialRoundLink(props) {
  const SocialLink = styled.a`
    border-radius: 50%;
    width: 40px;
    height: 40px;
    font-size: 16px;
    color: #515769;
    background-color: #fff;
    padding: 11px;
    display: inline-block;
    vertical-align: middle;
    text-align: center;
    transition-duration: 0.3s;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.7, 1, 0.7, 1);

    &:hover {
      color: #fff;
      background: #515769;
    }
  `;

  const SocialIcon = styled(FontAwesomeIcon)`
    font-size: 16px;
  `;

  return (
    <Stack direction="row" spacing={1}>
      <SocialLink
        className="facebook"
        href="https://www.facebook.com/trungtmnguyen/"
        target="_blank"
      >
        <SocialIcon icon={faFacebookF} />
      </SocialLink>
      <SocialLink
        className="linkedIn"
        href="https://www.linkedin.com/in/trung-nguyen-590720192/"
        target="_blank"
      >
        <SocialIcon icon={faLinkedinIn} />
      </SocialLink>
    </Stack>
  );
}
