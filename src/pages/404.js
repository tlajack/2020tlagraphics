import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/404.css"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="notFound_container">
      <h1>NOT FOUND</h1>
      <p>
        This address does not exist. Feel free to contact us if you think this
        is an error.
      </p>
    </div>
  </Layout>
)

export default NotFoundPage
