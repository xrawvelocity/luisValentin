import React, { Component } from "react";

export default class Home extends Component {
    render() {
        return (
            <div className="home">
                <section id="top" className="home-main">
                    <div className="home-cta">
                        <div className="home-cta_text">Pastor and speaker</div>
                        {/* <div className="home-cta_text">
                            with over 6 years of experience based on Miami, FL
                        </div> */}
                        <a href="#contact" className="home-cta_button">
                            Contact Me
                        </a>
                    </div>
                    <div className="home-main-img"></div>
                    <span class="scroll-indicator"></span>
                </section>
            </div>
        );
    }
}
