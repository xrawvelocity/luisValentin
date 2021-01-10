import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="footer-links">
                    <a
                        href="https://www.facebook.com//"
                        className="footer-links_facebook"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a
                        href="https://www.instagram.com/luismvalentin"
                        className="footer-links_instagram"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                </div>
                <div className="footer-contact">
                    <p>Phone: (000) 000-0000</p>
                    <p>
                        Email:{" "}
                        <a href="mailto:luisvalentin39@yahoo.com">
                            luisvalentin39@yahoo.com
                        </a>
                    </p>
                    <p>
                        Website created by &nbsp;
                        <a
                            href="https://www.vic-dev.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Victor Fernandez
                        </a>
                    </p>
                </div>
            </footer>
        );
    }
}
