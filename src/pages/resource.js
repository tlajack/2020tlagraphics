import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ResourcePage = () => (
  <Layout>
    <SEO title="Resource Center" />
    <h1>Resource Center</h1>
    <p>Resource Page</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ResourcePage
