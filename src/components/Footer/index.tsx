import React from 'react';
import { FooterStyle, Image } from './Footer.style'


export const Footer = () => {
  return (
    <FooterStyle>
      <ul>
        <li>
          <Image data-testid='image' src='./images/facebook.svg' alt='facebook' width={'25px'} height={'25px'}/>
        </li>
        <li>
          <Image src='./images/instagram.svg' alt='instagram' width={'25px'} height={'25px'}/>
        </li>
        <li>
          <Image src='./images/linkedin.svg' alt='linkedin' width={'25px'} height={'25px'}/>
        </li>
      </ul>
    </FooterStyle>
  )
}
