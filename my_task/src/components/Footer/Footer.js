import React from 'react';
import './Fotter.css'

const Footer = () => {
    return (
        <div className='footer__style' style={{background:"#2A3B8F",borderTopLeftRadius:"10px",borderTopRightRadius:"10px"}}>
            
            <div className="container text-light py-4 ">
                <div className="row">
                    <div className="col">
                        <ul  className={`d-flex justify-content-center list-unstyled `}>
                            <li className='mx-2'>About Company</li>
                            <li className='mx-2'>Privacy Policy</li>
                            <li className='mx-2'>Terms & Conditions</li>
                            <li className='mx-2'>Blog</li>
                            <li className='mx-2'>Contact Us</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;