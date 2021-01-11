import React, { Component, Fragment } from "react";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
// import Services from "./components/Services";
import About from "./components/About";
// import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import FAQ from "./components/Faq";
import Footer from "./components/Footer";
import { Route, Switch } from "react-router-dom";

export default class App extends Component {
    render() {
        return (
            <Switch>
                <Fragment>
                    <Navigation />
                    <Route
                        exact
                        path="/"
                        render={() => {
                            return (
                                <Fragment>
                                    <Home />
                                    <About />
                                    <FAQ />
                                </Fragment>
                            );
                        }}
                    />
                    <Route exact path="/contact" render={() => <Contact />} />
                    <Footer />
                </Fragment>
            </Switch>
        );
    }
}
