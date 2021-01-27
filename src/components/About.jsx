import React, { Component } from "react";

export default class About extends Component {
    render() {
        return (
            <div id="about" className="about">
                <h4 className="title">About</h4>
                <div className="about-content">
                    <div className="about-content-image"></div>

                    <p className="about-content-text">
                        My name is Luis Miguel Valentin and I'm a youth pastor
                        down in Miami, Florida. My vision to serve this
                        generation is to fill, build, and release. My goal is to
                        help you become the best leader you can be in every
                        aspect of your character as a leader and your ministry
                        as a whole. Hope to connect with you soon.
                    </p>
                </div>
            </div>
        );
    }
}
