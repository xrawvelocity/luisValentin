import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
    render() {
        return (
            <div className="home">
                <section id="top" className="home-main">
                    <div className="home-cta">
                        <div className="home-cta_text">
                            Pastor {"&"} Speaker
                        </div>
                        <Link to="/contact" className="home-cta_button">
                            Speaker Request
                        </Link>
                        <Link to="/contact" className="home-cta_button">
                            Mentorship
                        </Link>
                    </div>
                    <div className="home-main-img"></div>
                    <span class="scroll-indicator"></span>
                </section>
            </div>
        );
    }
}
