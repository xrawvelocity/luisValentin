import React, { Component } from "react";

export default class FAQ extends Component {
    render() {
        return (
            <div id="FAQ" className="faq">
                <h4 className="title">Frequently Asked Questions</h4>
                <Accordion />
            </div>
        );
    }
}

const data = [
    {
        title: "How much do you charge?",
        paragraph: "Answer goes here",
    },
    {
        title: "For how long do you offer your services?",
        paragraph: "Answer goes here",
    },
    {
        title: "What if I require your services somewhere outside of Miami, FL?",
        paragraph: "Answer goes here",
    },
    {
        title: "Can you do Zoom meetings instead of in-person ones?",
        paragraph: "Answer goes here",
    },
    {
        title: "Can you do services in Spanish too?",
        paragraph: "Answer goes here",
    },
];

class Accordion extends React.Component {
    render() {
        return (
            <div {...{ className: "wrapper" }}>
                <ul {...{ className: "accordion-list" }}>
                    {data.map((data, key) => {
                        return (
                            <li {...{ className: "accordion-list__item", key }}>
                                <AccordionItem {...data} />
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

class AccordionItem extends React.Component {
    state = {
        opened: false,
    };

    render() {
        const {
            props: { paragraph, title },
            state: { opened },
        } = this;

        return (
            <div
                {...{
                    className: `accordion-item, ${
                        opened && "accordion-item--opened"
                    }`,
                    onClick: () => {
                        this.setState({ opened: !opened });
                    },
                }}
            >
                <div {...{ className: "accordion-item__line" }}>
                    <h3 {...{ className: "accordion-item__title" }}>{title}</h3>
                    <span {...{ className: "accordion-item__icon" }} />
                </div>
                <div {...{ className: "accordion-item__inner" }}>
                    <div {...{ className: "accordion-item__content" }}>
                        <p {...{ className: "accordion-item__paragraph" }}>
                            {paragraph}
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}
