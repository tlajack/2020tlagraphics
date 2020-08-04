import React from "react"
import { Link } from "gatsby"
// import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Logo from "../images/logo-white.svg"

const ContactSuccessPage = () => (
  <Layout>
    <SEO title="Contac Success" />

    <div>
      <h2 style={{ margin: `4em`, color: `teal`, lineHeight: `1.6em` }}>
        Thank you, your message has been submitted. <br />
        We will get in touch soon.
      </h2>
    </div>
  </Layout>
)

export default ContactSuccessPage
