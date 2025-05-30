import React from "react";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FooterContainer, IconLink, Icon } from "./footerStyles";

const Footer = () => {
  return (
    <FooterContainer>
      <IconLink
        href="https://instagram.com/chamilila_"
        target="_blank"
        rel="noopener"
        aria-label="LinkedIn"
      >
        <Icon icon={faInstagram} />
      </IconLink>
      <IconLink
        href="https://www.linkedin.com/in/lilachami/"
        target="_blank"
        rel="noopener"
        aria-label="LinkedIn"
      >
        <Icon icon={faLinkedin} />
      </IconLink>
    </FooterContainer>
  );
};

export default Footer;
