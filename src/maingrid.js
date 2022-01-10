import React, { Component } from 'react'
import Finance from './illustration-financial.svg'
import Lifestyle from './illustration-lifestyle.svg'
import Passion from './illustration-passions.svg'
import Work from './illustration-work.svg';
import './gridcss.css';


export default class maingrid extends Component {
    render() {
        return (
            <div className="pagegrid">
                
                <div className="pass">
                    <div className="passion1">
                        <img className="thirdimg" src={Passion} alt="passion" />
                    </div>
                    <div className="passiontext1">
                        <h4>Indulge your passions</h4>
                        <p>Your passions shouldn't be just for the weekend.
                            Earn a living doing what you love.</p>
                    </div>
                </div>

                <div className="pass1">
                    <div className="passion1">
                        <img className="thirdimg" src={Finance} alt="passion" />
                    </div>
                    <div className="passiontext1">
                        <h4>
                        Gain financial freedom
                        </h4>
                        <p>Start making money work for you. There’s nothing quite like earning while you sleep.</p>
                    </div>

                </div>
                <div className="pass">
                    <div className="passion1">
                        <img className="thirdimg" src={Lifestyle} alt="passion" />
                    </div>
                    <div className="passiontext1">
                        <h4>Choose your lifestyle</h4>
                        <p>Own your daily schedule. Fancy a lie-in? Go for it! Take charge of your week.
                        </p>
                    </div>
                </div>
                <div className="pass1">
                    <div className="passion1">
                        <img className="thirdimg" src={Work} alt="passion" />
                    </div>
                    <div className="passiontext1">
                        <h4>
                            Work from anywhere
                        </h4>
                        <p>Selling online means not being pinned down. Want to work AND travel?
                            Go for it!</p>
                    </div>

                </div>
                

            </div>
            
        )
    }
}
