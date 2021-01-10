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
        title: "Question goes here",
        paragraph: "Answer goes here",
    },
    {
        title: "Lorem ipsum dolor sit amet?",
        paragraph: "Answer goes here",
    },
    {
        title: "Lorem ipsum dolor sit amet, consectetur adipisicing?",
        paragraph: "Answer goes here",
    },
    {
        title: "Question?",
        paragraph: "Answer goes here",
    },
    {
        title: "Question goes here as well",
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
