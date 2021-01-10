import React, { Component, Fragment } from "react";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
// import Services from "./components/Services";
import About from "./components/About";
// import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import FAQ from "./components/Faq";
import Footer from "./components/Footer";

export default class App extends Component {

    render() {
        return (
            <Fragment>
                <Navigation />
                <Home />
                {/* <Services /> */}
                <About />
                {/* <Reviews /> */}
                <Contact />
                <FAQ />
                <Footer />
            </Fragment>
        );
    }
}
