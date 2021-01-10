import React, { Component } from "react";
// import { GoogleMap, LoadScript } from '@react-google-maps/api';

// const containerStyle = {
//   width: '400px',
//   height: '400px'
// };

// const center = {
//   lat: -3.745,
//   lng: -38.523
// };

export default class Contact extends Component {

  render() {
    return (
      <section id="contact" className="contact">
        <h4 className="title">
          Contact
        </h4>

        <form
          class="contact-form"
          action="#"
          method="POST"
        >
          <div class="contact-form-group">
            <input
              class="contact-form-group__input"
              type="text"
              placeholder=""
              name="name"
              id="name"
              required
            />
            <label class="contact-form-group__label" for="name">
              Name
            </label>
          </div>

          <div class="contact-form-group">
            <input
              class="contact-form-group__input"
              type="email"
              placeholder=""
              name="_replyto"
              id="email"
              required
            />
            <label class="contact-form-group__label" for="email">
              Email
            </label>
          </div>

          <div class="contact-form-group">
            <input
              class="contact-form-group__input"
              name="message"
              placeholder=""
              id="message"
            />
            <label class="contact-form-group__label" for="message">
              Message
            </label>
          </div>
          <button class="contact-form-button" type="submit">
            Send Email
          </button>
        </form>
      </section>
    );
  }
}
