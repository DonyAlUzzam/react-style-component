import React from 'react'
import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
import {Button} from '../../globalStyles'
import {
    FooterContainer, 
    FooterSubscription, 
    FooterSubHeading, 
    FooterSubText,
    Form,
    FormInput,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinksItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcon,
    WebsiteRights,
    SocialIcons,
    SocialIconLink,
} from './Footer.elements'

const Footer = () => {
    return (
       <FooterContainer>
           <FooterSubscription>
               <FooterSubHeading>
                   Join our exclusive membership to receive the latest news and trends
               </FooterSubHeading>
               <FooterSubText>
                   You can unsubscribe any time.
               </FooterSubText>
               <Form>
                   <FormInput name="email" type="email" placeholder="Your email"></FormInput>
                   <Button fontBig>Subscribe</Button>
               </Form>
           </FooterSubscription>
           <FooterLinksContainer>
               <FooterLinksWrapper>
                   <FooterLinksItems>
                       <FooterLinkTitle>About Us</FooterLinkTitle>
                       <FooterLink to="/sign-up">How it works</FooterLink>
                       <FooterLink to="/">Testimonial</FooterLink>
                       <FooterLink to="/">Careers</FooterLink>
                       <FooterLink to="/">Investors</FooterLink>
                       <FooterLink to="/">Term of Service</FooterLink>
                   </FooterLinksItems>
                   <FooterLinksItems>
                       <FooterLinkTitle>Contact Us</FooterLinkTitle>
                       <FooterLink to="/sign-up">How it works</FooterLink>
                       <FooterLink to="/">Testimonial</FooterLink>
                       <FooterLink to="/">Careers</FooterLink>
                       <FooterLink to="/">Investors</FooterLink>
                       <FooterLink to="/">Term of Service</FooterLink>
                   </FooterLinksItems>
                   </FooterLinksWrapper>
                   <FooterLinksWrapper>
                   <FooterLinksItems>
                       <FooterLinkTitle>Videos</FooterLinkTitle>
                       <FooterLink to="/sign-up">How it works</FooterLink>
                       <FooterLink to="/">Testimonial</FooterLink>
                       <FooterLink to="/">Careers</FooterLink>
                       <FooterLink to="/">Investors</FooterLink>
                       <FooterLink to="/">Term of Service</FooterLink>
                   </FooterLinksItems>
                   <FooterLinksItems>
                       <FooterLinkTitle>Social Media</FooterLinkTitle>
                       <FooterLink to="/sign-up">How it works</FooterLink>
                       <FooterLink to="/">Testimonial</FooterLink>
                       <FooterLink to="/">Careers</FooterLink>
                       <FooterLink to="/">Investors</FooterLink>
                       <FooterLink to="/">Term of Service</FooterLink>
                   </FooterLinksItems>
               </FooterLinksWrapper>
           </FooterLinksContainer>
           <SocialMedia>
               <SocialMediaWrap>
                   <SocialLogo to="/">
                       <SocialIcon />
                        VALEY
                   </SocialLogo>
                   <WebsiteRights>VALEY © 2020</WebsiteRights>
                   <SocialIcons>
                       <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                           <FaFacebook />
                       </SocialIconLink>
                       <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                           <FaInstagram />
                       </SocialIconLink>
                       <SocialIconLink href="/" target="_blank" aria-label="LinkedIn">
                           <FaLinkedin />
                       </SocialIconLink>
                   </SocialIcons>
               </SocialMediaWrap>
           </SocialMedia>
       </FooterContainer>
    )
}

export default Footer
