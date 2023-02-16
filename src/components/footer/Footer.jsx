import React from "react";
import "./footer.css";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";

const Footer = () => {
    return (
        <div className="container-fluid footer">
            <div className="container">
              
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                            <div className="footer-about-section">
                                <h6 style={{ color: "white", marginTop: "20px" }}>About</h6>
                                <p>
                                    It is a long established fact that a reader will be distracted
                                    by the readable content of a page when looking at its layout.
                                    The point of using Lorem Ipsum is that it has a more-or-less
                                    normal distribution of letters
                                </p>

                                <div className="footer-social-icons">
                                    <p>
                                        <FaFacebookF size={25} />
                                    </p>
                                    <p>
                                        <FaLinkedinIn size={25} />
                                    </p>
                                    <p>
                                        <AiOutlineTwitter size={25} />
                                    </p>
                                    <p>
                                        <AiOutlineInstagram size={25} />
                                    </p>
                                </div>
                                {/* <span className="footer-social-icons">
                <p>
                  <FaFacebookSquare size={30} />
                </p>
                <p>
                  <AiFillTwitterSquare size={30} />
                </p>
                <p>
                  <FaInstagramSquare size={30} />
                </p>
                <p>
                  <BsLinkedin size={30} />
                </p>
              </span> */}
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                            <div className="footer-service">
                                <h6 style={{ color: "white", marginTop: "20px" }}>Services</h6>
                                <div className="footer-item">
                                    <li>Product Sort</li>
                                    <li>Media Marketing</li>

                                    <li>Innovation</li>

                                    <li>Technology</li>

                                    <li>Environment</li>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                            <div className="footer-service">
                                <h6 style={{ color: "white", marginTop: "20px" }}>
                                    Customer care
                                </h6>
                                <div className="footer-item">
                                    <li>Log In</li>
                                    <li>Media Marketing</li>

                                    <li>My Account</li>

                                    <li>Wish List</li>

                                    <li>FAQ</li>
                                </div>
                            </div>
                        </div>
                    </div>
              
            </div>
        </div>
    );
};

export default Footer;
