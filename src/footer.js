import React, { Component } from 'react'
import './footer.css'
import Bgfooter from './bg-footer.svg'

export default class footer extends Component {
    render() {
        return (
            <div>
                <footer>
                    <div>
                        <h4>Get Notified when we launch</h4>
                    </div>
                    <form>
                    {/* <img className="footerimage" src={Bgfooter} alt="footerimg"/> */}

                        
                        <label for="email">
                            <input type="email"  className="email_input" id="email address" placeholder="Email address" required />
                        </label>
                        <button type="submit" className="submit_btn">Get Notified</button>
                    </form>
                </footer>
            </div>
        )
    }
}
