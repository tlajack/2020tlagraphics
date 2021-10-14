import React from "react"
import { Link } from "gatsby"
// import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "../components/contact.module.css"
import Logo from "../images/logo-white.svg"

const ContactPage = () => (
  <Layout id="antimicrobialMain">
    <SEO title="Contac Us" />
    <div
      style={{
        background: `teal`,
        marginBottom: `1.45rem`,
      }}
    >
      <Link to="/">
        <img className="topLogo" src={Logo} alt="TLA Graphics Logo" />
      </Link>
    </div>

    <div className={styles.contactContainer}>
      <h1>Contact Form</h1>
      <p>Use the form below to get in touch with us:</p>
      <form
        name="webContact"
        method="post"
        data-netlify="true"
        action="/contactSuccess"
        netlify-honeypot="bot-field"
      >
        {/* hidden input for netlify */}
        <input type="hidden" name="form-name" value="webContact" />

        <ul>
          <li style={{ visibility: `hidden`, display: `none` }}>
            <label htmlFor="bot-field">
              <input name="bot-field" />
            </label>
          </li>
          <li>
            <label htmlFor="name">Full name: </label>
            <abbr title="required" aria-label="required">
              *
            </abbr>
            <input type="text" name="name" />
          </li>
          <li>
            <label htmlFor="email">email: </label>
            <abbr title="required" aria-label="required">
              *
            </abbr>
            <input type="text" name="email" />
          </li>
          <li>
            <label htmlFor="phone">phone: </label>
            <input type="text" name="phone" />
          </li>
          <li>
            <label htmlFor="subject">Subject: </label>
            <input type="text" name="subject" />
          </li>
          <li>
            <label htmlFor="message">Message: </label>
            <textarea name="message"></textarea>
          </li>
          <li>
            <button type="submit">Send Message</button>
          </li>
        </ul>
      </form>
      <h1>File Upload</h1>
      <p>
        <a href="https://www.dropbox.com/request/FL93CCTD7UCysvFI2Pp6">
          Click here
        </a>{" "}
        to upload files to us.
      </p>
    </div>
  </Layout>
)

export default ContactPage
