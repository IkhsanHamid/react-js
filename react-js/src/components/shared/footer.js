import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faYoutube,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { styled } from "styled-components";

const Footerstyled = styled.footer`
    .social, .contactInfo{
        background-color:#F7F7F7;
        color:#222222;
        padding:1rem 1rem 0;
        text-align:center;
    }
    .social 3{
        border-bottom:solid 1px #b6e8ff;
        font-weight:400;
        padding-bottom:.25rem;
    }
    .socialIcons{
        fonst-size:200%;
        padding:1rem 0;
    }
    .socialIcons a{
        color:#223055;
        padding:0 .5rem;
    }
    .socialIcons a:hover{
        color:#ffc107;
    }
    .contactInfo{
        padding-top:0;
    }
    .contactInfo article{
        border-bottom:solid 1px #b6e8ff;
        pading:1rem 0;
    }
    .contactInfo h4{
        font-weight:400;
    }
    .contactInfo li{
        font-weight:300;
        list-style-type:none;
    }
    .copy{
        font-size:70%;
        font-weight:300;
        padding-top:1rem;
    }
`;

const Footer = (props) => {
  return (
  <Footerstyled>
    <section className="social" id="contact">
        <article>
            <h3>Let's be social connect with us</h3>
            <div className="socialIcons">
                <a href=""><FontAwesomeIcon icon={faFacebook}/></a>
                <a href=""><FontAwesomeIcon icon={faLinkedin}/></a>
                <a href=""><FontAwesomeIcon icon={faYoutube}/></a>
                <a href=""><FontAwesomeIcon icon={faInstagram}/></a>
                <a href=""><FontAwesomeIcon icon={faTwitter}/></a>
            </div>
        </article>
    </section>
    <section className="contactInfo">
        <artice>
            <h4>Contact Information</h4>
            <ul>
                <li>Phone: 081234567891</li>
                <li>Email: ikhsa.muhammad64@gmail.com</li>
                <li>Addres: Sentul City</li>
            </ul>
            <p className="copy">Ikhsan Muhammad &copy;2023</p>
        </artice>
    </section>
  </Footerstyled>
  )
};

export default Footer;
