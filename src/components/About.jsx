import React, { Component } from "react";

export default class About extends Component {
    render() {
        return (
            <div id="about" className="about">
                <h4 className="title">About</h4>
                <div className="about-content">
                    <p className="about-content-text">
                        My dream is to deliver the word of God to those who need
                        it, to spread love, and to build faith. I have been a
                        pastor for over 5 years now and I feel more confident
                        than ever when I'm preaching.
                    </p>
                    <div className="about-content-image"></div>
                </div>
            </div>
        );
    }
}
