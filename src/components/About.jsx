import React, { Component } from "react";

export default class About extends Component {
    render() {
        return (
            <div id="about" className="about">
                <h4 className="title">About</h4>
                <div className="about-content">
                    <div className="about-content-image"></div>

                    <p className="about-content-text">
                        My name is Luis Miguel Valentin and I'm a Youth Pastor
                        based in Miami, Florida. I feel the calling to be a
                        voice in our generation to preach the gospel of Jesus
                        and to serve leaders in the best way that I can.
                    </p>
                </div>
            </div>
        );
    }
}
