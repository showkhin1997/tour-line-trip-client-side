import React from 'react';
import './Footer.css';
import titleImage from '../../../images/title.png';

const Footer = () => {
    return (
        <div className="footer-container" id="contact">

            <div className="container">
                <div className="row">
                    <div className="col-sm-8">
                        <img src={titleImage} alt="" className="title-img-style" />
                    </div>
                    <div className="col-sm-4 mb-5">
                        <i className="fas fa-phone-alt contuct-icon"> +088 1858477538</i><br />
                        <i className="fas fa-map-marker-alt contuct-icon"> Dhaka, bangladesh</i><br />
                        <i className="fas fa-envelope contuct-icon"> tourlinetrip@hotline.com</i><br />
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col-sm">
                        <i className="fab fa-facebook-square social-fab-icon"></i>
                        <i className="fab fa-instagram-square social-fab-icon"></i>
                        <i className="fab fa-twitter-square social-fab-icon"></i>
                        <i className="fab fa-linkedin social-fab-icon"></i>
                    </div>
                    <div className="col-sm mt-5">
                        <label htmlFor="subscribe" className="mb-2 subcribe-text">Subscribe</label><br />
                        <input className="input-subscribe" type="text" name="" id="" placeholder="Email" />
                    </div>
                    <div className="col-sm mt-5"><small className="text-center text-mute">© 2021 Showkhin, All Rights Reserved</small></div>
                </div>
            </div>
        </div>
    );
};

export default Footer;