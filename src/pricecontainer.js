import React, { Component } from 'react'
import './pricecontainer.css'
import Free from './icon-free.svg'
import Check from './icon-check.svg'
import Paid from './icon-paid.svg'
export default class pricecontainer extends Component {
    render() {
        return (
            <div className="pricecontainer">
                <div className="contentprice">
                    <h3>Our Pricing Plans</h3>
                    <p>We only make money when our creators make money. Our plans are always
                        affordable, and it's completely free to get started.</p>
                </div>
                <div className="boxcontainer">
                    <div className="firstcontainer">
                        <div className="firstcontimg">
                            <img src={Free} alt="freeimg" />
                        </div>
                        <div className="firstright">
                            <h4 className="cardinfo">Dip your toe</h4>
                            <p className="cardinfo">Just getting started? No problem at all! Our free plan will take you a long way.</p>
                        </div>
                        <div className="products">
                            <h3 >Free</h3>
                            <ul>
                                <li className="listcl">
                                    <span>✓</span>
                                    Unlimited Products
                                </li>
                                <li className="listcl">
                                    <span>✓</span>
                                    Basic Analytics
                                </li>
                                <li className="listcl">
                                    <span>✓</span>
                                    Limited Market Exposure
                                </li>
                                <li className="listcl">
                                    <span>✓</span>
                                    10% Fee per transaction
                                </li>
                            </ul>
                        </div>
                        {/* </div> */}
                        {/* <img src={Free} alt="iconfree" />
                        <div className="firstboxcontent">
                            <h5>Dip Your Toe</h5>
                            <p>Just getting started? No problem at all! Our free plan will take you a long way.</p>

                        </div>
                        <div className="firstoption">
                            <h2>Free</h2>
                          
                            <ul>
                                <li className="listcl">
                                    <span>✓</span>
                                    Unlimited products
                                </li>
                                <li className="listcl">
                                <span>✓</span>
                                Basic Analytics
                                </li>
                                <li className="listcl">
                                <span>✓</span>
                                Limited Marketplace Exposure
                                </li>
                                <li className="listcl">
                                <span>✓</span>
                                10%fee per Transaction
                                </li>
                            </ul>
                        </div> */}
                    </div>
                    <div className="secondcontainer">
                        <div className="secondcontimg">
                            <img src={Paid} alt="paidimg" />
                        </div>
                        <div className="secondright">
                            <h4 className="cardinfo">Dive Right In</h4>
                            <p className="cardinfo">Ready for the big time? Our paid plan will help you take your business to the next level.</p>
                        </div>
                        <div className="products">
                            <h3 className="productprice">$25.00
                                <span>/month</span>
                            </h3>
                            <ul>
                                <li className="productlist">
                                    <span>✓</span>
                                    Custom Domain
                                </li>
                                <li className="productlist">
                                    <span>✓</span>
                                    Advanced analytics and reports
                                </li>
                                <li className="productlist">
                                    <span>✓</span>
                                    High Marketplace visibility
                                </li>
                                <li className="productlist">
                                    <span>✓</span>
                                    5% Fee per transaction
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
