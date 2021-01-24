import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navigation extends Component {
    state = {
        active: false,
        close: false,
    };

    render() {
        return (
            <nav className="navigation">
                <a
                    onClick={() => {
                        this.setState({
                            active: false,
                            close: true,
                        });
                    }}
                    href="/#top"
                    className="navigation-logo"
                >
                    <img
                        src="../images/luisValentinLogo.png"
                        alt="logo"
                        className="navigation-logo_image"
                    />
                </a>
                <div className="navigation-links">
                    <a href="/#about" className={`navigation-links_about`}>
                        About
                    </a>
                    <Link to="/contact" className={`navigation-links_contact`}>
                        Contact
                    </Link>
                    <a href="/#FAQ" className={`navigation-links_FAQ`}>
                        FAQ
                    </a>
                </div>
                <div
                    onClick={async () => {
                        await this.setState({
                            active: !this.state.active,
                            close: this.state.active ? true : false,
                        });
                    }}
                    className={
                        !this.state.active ? "hamburger" : "hamburger_open"
                    }
                >
                    <span
                        className={
                            !this.state.active
                                ? "hamburger-one"
                                : "hamburger-one_open"
                        }
                    ></span>
                    <span
                        className={
                            !this.state.active
                                ? "hamburger-two"
                                : "hamburger-two_open"
                        }
                    ></span>
                    <span
                        className={
                            !this.state.active
                                ? "hamburger-three"
                                : "hamburger-three_open"
                        }
                    ></span>
                </div>
                <div
                    className={
                        !this.state.active
                            ? `navigation-hamburger ${
                                  this.state.close
                                      ? "navigation-hamburger_close"
                                      : ""
                              }`
                            : "navigation-hamburger_active"
                    }
                >
                    <a
                        onClick={() => {
                            this.setState({ active: false, close: true });
                        }}
                        href="/#about"
                        className="navigation-hamburger_about"
                    >
                        About
                    </a>
                    <Link
                        onClick={() => {
                            this.setState({ active: false, close: true });
                        }}
                        to="/contact"
                        className="navigation-hamburger_contact"
                    >
                        Contact
                    </Link>
                    <a
                        onClick={() => {
                            this.setState({ active: false, close: true });
                        }}
                        href="/#FAQ"
                        className="navigation-hamburger_FAQ"
                    >
                        FAQ
                    </a>
                </div>
            </nav>
        );
    }
}
