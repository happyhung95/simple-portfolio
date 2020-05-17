import React from "react"

import Heading from "../../Shared/Heading"
import Button from "../../Shared/Button"
import "./Contact.scss"

const Contact = () => (
  <section title="contact us section" id="contact">
    <Heading id="form" title="Contact us" />
    <div className="form">
      <form className="form__container" aria-label="Send us a message">
        <label htmlFor="fullName">
          Full name
          <br />
          <input id="fullName" type="text" checked name="name" />
        </label>
        <label htmlFor="email">
          Email
          <br />
          <input id="email" type="email" checked name="email" />
          <br />
        </label>
        <label htmlFor="message">
          Message
          <br />
          <textarea id="message" />
        </label>
        <Button
          label="Submit"
          variant="form"
          ariaLabelledby="form-btn form"
          id="form-btn"
        />
      </form>
    </div>
  </section>
)

export default Contact
