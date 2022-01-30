import React from 'react';
import '../footer/footer.css';
import { Container, Row, Col } from 'react-bootstrap';
import {IoHelpBuoyOutline} from 'react-icons/io5';
import {HiOutlineMail} from 'react-icons/hi';
import {FiPhone} from 'react-icons/fi';
import Input from '../../components/Input/input';
import Button from '../../components/customButton/button';
import PlayStoreButton from '../../asset/images/playStoreBtn.png';
import AppStoreButton from '../../asset/images/appStoreBtn.png';
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import {TiSocialInstagram} from 'react-icons/ti'
export default function Footer(){
    return(
        <>
        <Row className='footereContainer'>
            <Row>
                <Col>
        <div className='frontFooterLine'></div>
        </Col>
        </Row>
        <Col xl={1} lg={1}md={2}sm={2}></Col>
            <Col xl={1} lg={1}md={2} sm={2} xs={12} style={{border:'solid none'}}>
            
        
            
                <div className='companyDetails'>
                <h6>company</h6>
                    <ul>
                        <li><a href='#'>FAQ</a></li>
                        <li><a href='#'>about</a></li>
                        <li><a href='#'>careers</a></li>
                        <li><a href='#'>blog</a></li>
                    </ul>
                    <div className='termNprivacy'>
                        <ul>
                            <li><a href='#'>term</a></li>
                            <li><a href='#'>privacy</a></li>
                        </ul>
                    </div>
                </div>
            </Col>
            <Col xl={2} lg={2} md={3} sm={3} xs={12} >
            <div className='helpnContact'>
                    <h6>help & contact</h6>
                    <ul>
                        <li>
                            <IoHelpBuoyOutline className='helpIcon'/>
                            <a href='#'> help crnter</a>
                            </li>
                            <li>
                            <HiOutlineMail className='emailIcon'/>
                            <a href='#'>email us</a>
                            </li>
                            <li>
                            <FiPhone className='phoneIcon'size={13}/>
                            <a href='#'>00023345574</a>
                            </li>
                    </ul>
                </div>
                
            </Col>
            <Col xl={2} lg={2} md={2}sm={3} xs={12} style={{border:'solid none'}}>
                <div className='moreFromUs'>
                <h6>more from us</h6>
                <ul>
                    <li><a href='#'>bulk/part order</a></li>
                    <li><a href='#'>cake order</a></li>
                    <li><a href='#'>fresh Club</a></li>
                    <li><a href='#'>offers</a></li>
                </ul>
                </div>
            </Col>
            <Col xl={5} lg={5}md={6}sm={12}xs={12}>
            <Row>
                <div className='subCribeNInput'>     
                    <p>SUBSCRIBE TO OUR DROOLWORTHY NEWSLETTER</p>
                    <Col sm={10}>
                    <div className='inputBox'>
                    <Input className='subInput' 
                    placeholder={'Enter your email'}
                    type={'text'}
                    />
                    <Button Text='subcribe' className='subButton'/>
                    </div>
                    </Col>
                    <Col>
                    <div className='storeLinks'>
                    <div className='playStore'> <a href='https://play.google.com/intl/en_us/badges/'><img src={PlayStoreButton}/></a></div>
                    <div className='appStore'><a href='https://www.apple.com/app-store/'><img src={AppStoreButton}/></a></div>
                    <div className='socialSiteLinks'>
                    <a href="https://www.facebook.com/">
                    <FaFacebookSquare
                     className="fasocialLinks"
                      size={20}
                        />
                  </a>
                  <a href="https://twitter.com/">
                    <FaTwitterSquare
                     className="twisocialLinks"
                      size={20}
                        />
                  </a>
                  <a href="https://www.instagram.com/">
                    <TiSocialInstagram
                      className="insocialLinks"
                      size={23}
                    />
                  </a>
                    </div>
                    </div>
                    </Col>
                    
                </div>
                </Row>
                
            </Col>
        </Row>
        <Row className='darkFooterContainer'>
            <Col xl={1} lg={1}md={1} sm={2}></Col>
            <Col xl={1} lg={2} md={2} sm={3} xs={12}>
            <div className='categories'>
                <h6>categories</h6>
                <ul>
                    <li><a href='#'>mains</a></li>
                    <li><a href='#'>pizzas</a></li>
                    <li><a href='#'>salads</a></li>
                    <li><a href='#'>desserts</a></li>
                    <li><a href='#'>quickbites</a></li>
                </ul>
            </div>
            </Col>
            <Col xl={2} lg={1} md={1} sm={2} xs={12}>
            <div className='cuisines'>
                <h6>cuisines</h6>
                <ul>
                    <li><a href='#'>pakistani</a></li>
                    <li><a href='#'>chinese</a></li>
                    <li><a href='#'>italian</a></li>
                    <li><a href='#'>american</a></li>
                </ul>
            </div>
            </Col>
            <Col xl={2} lg={1} md={2} sm={3} xs={12}>
            <div className='otherDishes'>
                <ul>
                    <li><a href='#'>mexican</a></li>
                    <li><a href='#'>thai</a></li>
                    <li><a href='#'>continental</a></li>
                    <li><a href='#'>mediterranean</a></li>
                </ul>
            </div>
            </Col>
            
        </Row>
        </>
    )
}

