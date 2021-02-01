import React from 'react';
import styled from "styled-components";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMapMarkerAlt, faPhone, faEnvelopeOpen} from "@fortawesome/free-solid-svg-icons";
import {faFacebook, faTelegram, faInstagram} from "@fortawesome/free-brands-svg-icons";
import {Link} from 'react-router-dom';

const Footer = () => {
    return (
        <Container>
            <footer className="footer-section">
                <div className="container">
                    <div className="footer-cta pt-5 pb-5">
                        <div className="row">
                            <div className="col-xl-4 col-md-4 mb-30">
                                <div className="single-cta">
                                    <FontAwesomeIcon icon={faMapMarkerAlt}/>
                                    <div className="cta-text">
                                        <h4>Наша адреса</h4>
                                        <span>01011 м. Київ вул. Московська 45/1</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-4 mb-30">
                                <div className="single-cta">
                                    <FontAwesomeIcon icon={faPhone}/>
                                    <div className="cta-text">
                                        <h4>Телефон</h4>
                                        <span>+380974567123</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-4 mb-30">
                                <div className="single-cta">
                                    <FontAwesomeIcon icon={faEnvelopeOpen}/>
                                    <div className="cta-text">
                                        <h4>Email</h4>
                                        <span>some.example@info.com</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-content pt-5 pb-5">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 mb-50">
                                <div className="footer-widget">
                                    <div className="footer-text">
                                        <p>Розроблено курсанткою Військового інституту телекомунікацій та інформатизації імені Героїв Крут Савенок Олександрою</p>
                                    </div>
                                    <div className="footer-social-icon">
                                        <span>Стежте за нами в соціальних мережах</span>
                                        <a href="https://www.facebook.com/profile.php?id=100007910527778"><FontAwesomeIcon icon={faFacebook}/></a>
                                        <a href="https://t.me/aleksandrasavenok9"><FontAwesomeIcon icon={faTelegram}/></a>
                                        <a href="#"><FontAwesomeIcon icon={faInstagram}/></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 mb-30">
                                <div className="footer-widget">
                                    <div className="footer-widget-heading">
                                        <h3>Мапа сайту</h3>
                                    </div>
                                    <ul>
                                        <li><Link to="/">На головну</Link></li>
                                        <li><Link to="/news">Новини</Link></li>
                                        <li><Link to="/vvnz">ВВНЗ</Link></li>
                                        <li><Link to="/collage">Коледжі</Link></li>
                                        <li><Link to="/lyceum">Ліцеї</Link></li>
                                        <li><Link to="/question">Задати запитання</Link></li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </footer>
        </Container>
    );
}

export default Footer;

const Container = styled.div`
  ul {
    margin: 0;
    padding: 0;
  }

  .footer-section {
    background: #151414;
    position: relative;
  }

  .footer-cta {
    border-bottom: 1px solid #373636;
  }

  .single-cta {
    display: flex;
    align-items: center;
  }
  
  .single-cta path {
    fill: rgb(44,166,39) !important;
  }

  .single-cta svg {
    height: 30px !important;
    width: 30px !important;
  }

  .cta-text {
    padding-left: 15px;
    display: inline-block;
  }

  .cta-text h4 {
    color: #fff;
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 2px;
  }

  .cta-text span {
    color: #757575;
    font-size: 15px;
  }

  .footer-content {
    position: relative;
    z-index: 2;
  }

  .footer-pattern img {
    position: absolute;
    top: 0;
    left: 0;
    height: 330px;
    background-size: cover;
    background-position: 100% 100%;
  }

  .footer-logo {
    margin-bottom: 30px;
  }

  .footer-logo img {
    max-width: 200px;
  }

  .footer-text p {
    margin-bottom: 14px;
    font-size: 14px;
    color: #7e7e7e;
    line-height: 28px;
  }

  .footer-social-icon span {
    color: #fff;
    display: block;
    font-size: 20px;
    font-weight: 700;
    font-family: 'Poppins', sans-serif;
    margin-bottom: 20px;
  }

  .footer-social-icon a {
    color: #fff;
    font-size: 16px;
    margin-right: 15px;
  }

  .footer-social-icon svg {
    height: 40px;
    width: 40px;
    text-align: center;
    line-height: 38px;
    border-radius: 50%;
  }

  .footer-widget-heading h3 {
    color: #fff;
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 40px;
    position: relative;
  }

  .footer-widget-heading h3::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: -15px;
    height: 2px;
    width: 50px;
    background: rgb(44,166,39);
  }

  .footer-widget ul li {
    display: inline-block;
    float: left;
    width: 50%;
    margin-bottom: 12px;
  }

  .footer-widget ul li a:hover {
    color: rgb(44,166,39);
  }

  .footer-widget ul li a {
    color: #878787;
    text-transform: capitalize;
  }

  .subscribe-form {
    position: relative;
    overflow: hidden;
  }

  .subscribe-form input {
    width: 100%;
    padding: 14px 28px;
    background: #2E2E2E;
    border: 1px solid #2E2E2E;
    color: #fff;
  }

  .subscribe-form button {
    position: absolute;
    right: 0;
    background: rgb(44,166,39);
    padding: 13px 20px;
    border: 1px solid rgb(44,166,39);
    top: 0;
  }

  .subscribe-form button i {
    color: #fff;
    font-size: 22px;
    transform: rotate(-6deg);
  }

  .copyright-area {
    background: #202020;
    padding: 25px 0;
  }

  .copyright-text p {
    margin: 0;
    font-size: 14px;
    color: #878787;
  }

  .copyright-text p a {
    color: rgb(44,166,39);
  }

  .footer-menu li {
    display: inline-block;
    margin-left: 20px;
  }

  .footer-menu li:hover a {
    color: rgb(44,166,39);
  }

  .footer-menu li a {
    font-size: 14px;
    color: #878787;
  }
`;