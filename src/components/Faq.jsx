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
        paragraph:
            "Price can vary depending on the amount of people, the amount of days, and the location I would need to travel to.",
    },
    {
        title: "For how long do you offer your services?",
        paragraph: "The timeframe of my services is based on you and how you want me to serve you best.",
    },
    {
        title:
            "What if I require your services somewhere outside of Miami, FL?",
        paragraph: "I am willing to travel anywhere, that would just affect the price a little bit.",
    },
    {
        title: "Can you do Zoom meetings instead of in-person ones?",
        paragraph: "Yes, I can do Zoom meetings or any other platform to meet with you.",
    },
    {
        title: "Can you do services in Spanish too?",
        paragraph: "Yes, I can also serve in Spanish.",
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
