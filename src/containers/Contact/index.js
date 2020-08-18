import React from 'react'

import { Heading } from '../../components'
import hungProfile from '../../assets/images/Hung-2020.png'
import './Contact.scss'

export const Contact = () => (
  <section title="contact us section" id="contact">
    <Heading id="form" title="Contact me" />
    <div className="contact-container">
      <div className="contact-card">
        <div className="contact-picture">
          <img alt="Hung Nguyen avatar" src={hungProfile} />
        </div>
        <div className="contact-text">
          <p className="contact-name">Hung Nguyen</p>
          <div className="contact-details">
            <div className="contact-details-base">
              <p>Mobile</p>
              <p>Email</p>
              <p>Location</p>
              <p>Specialty</p>
            </div>
            <div className="contact-details-tail">
              <p>+358 45 696 5215</p>
              <p>happyhung@yahoo.com</p>
              <p>Helsinki, Finland</p>
              <p>Full Stack and Mobile Development</p>
              <div className="contact-logo">
                <a href="https://www.linkedin.com/in/nguyentrangiahung/" aria-label="Link to Linkedin">
                  <i className="fab fa-linkedin" aria-hidden="true" title="Link to Linkedin" />
                </a>
                <a href="https://github.com/happyhung95" aria-label="Link to Github">
                  <i className="fab fa-github" aria-hidden="true" title="Link to Github" />
                </a>
                <a href="https://drive.google.com/file/d/1BYKIpe9ZL572LFHxpquxC4vd__IVdXAM/view?usp=sharing" aria-label="Link to CV">
                  <i className="fas fa-file-alt" aria-hidden="true" title="Link to CV" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)
