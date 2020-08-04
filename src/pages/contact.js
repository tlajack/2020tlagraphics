import React from "react"
import { Link } from "gatsby"
// import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "../components/contact.module.scss"
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
      <p>Use the form below to get in touch with us:</p>
      <form
        name="webContact"
        method="POST"
        data-netlify="true"
        action="/contactSuccess"
      >
        <ul>
          <li>
            <label for="name">Full name: </label>
            <abbr title="required" aria-label="required">
              *
            </abbr>
            <input type="text" name="name" />
          </li>
          <li>
            <label for="email">email: </label>
            <abbr title="required" aria-label="required">
              *
            </abbr>
            <input type="text" name="email" />
          </li>
          <li>
            <label for="phone">phone: </label>
            <input type="text" name="phone" />
          </li>

          <li>
            <label for="message">Message: </label>
            <textarea name="message"></textarea>
          </li>
          <li>
            <button type="submit">Send Message</button>
          </li>
        </ul>
      </form>
    </div>
  </Layout>
)

export default ContactPage
