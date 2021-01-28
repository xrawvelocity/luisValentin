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
        title: "How much is the cost of the mentorship program or to have you as a guest preacher?",
        paragraph:
            "Price can vary depending on the amount of people, the amount of days, and the location I would need to travel to.",
    },
    {
        title: "How long do you offer the mentorship program for?",
        paragraph: "The timeframes of the mentorship program is based on you and the goals you want to achieve. Before starting a timeframe will be discussed and a contract will be made.",
    },
    {
        title:
            "Is your service available outside of Miami, FL?",
        paragraph: "Yes, services are available outside of Miami, FL. An additional charge may be required.",
    },
    {
        title: "Are services provided virtually?",
        paragraph: "Yes, services are provided virtually through Zoom or any other virtual platform agreed to use.",
    },
    {
        title: "Besides English, are the services available in another language?",
        paragraph: "Yes, besides English the services are available in Spanish as well.",
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
