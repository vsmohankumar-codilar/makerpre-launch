import React, { Component } from 'react'
import Logo from './makerlogo.svg'
import Leftimg from './desktop-left.svg'
import Rightimg from './desktop-right.svg'
import Squiggle from './desktop-squiggle.svg'
import Scroll from './icon-scroll.svg'
import Maker from './makerlogo.svg'
// import Main from './mainimage.png'
import './makerlanding.css'
import Grid from './maingrid'

export default class makerlanding extends Component {
    render() {
        return (
            <div className="page">

                <header className="logocontainer">
                    <div className="logo">
                        <img src={Logo} alt="logoimage" />
                    </div>
                </header>
                <div className="maincont">
                   
                    <div className="leftimage">
                        <img src={Leftimg} alt="leftimage" />
                    </div>
                    <div className="maintext">  
                        <img  className="squi"src={Squiggle} alt="suiglleimage" />
                        <h1>Get paid for the work you <span>love</span> to do.</h1>
                        <p className="paragraph">The 9-5 grind is so last century. We believe in living life on your own
                            terms. Whether you're looking to escape the rat race or set up a side
                            hustle, we've got you covered.</p>
                        <img className="scrollimg" src={Scroll} alt="scroll" />
                    </div>
                    <div className="rightimage">
                        <img src={Rightimg} alt="righhtimage" />
                    </div>
                </div>
                <Grid />
                
            </div>
        )
    }
}
