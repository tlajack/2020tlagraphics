import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Logo from "../images/logo-white.svg"
import styles from "../components/plexiglass.module.scss"

const ShieldPage = ({ data }) => (
  <Layout>
    <SEO title="Plexi Shield" />
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

    <div>
      <div className={styles.plexiPage}>
        <div className={styles.plexiRow}>
          <div>
            <h1>Plexiglass Shield</h1>
            <p>Custom size, custom shape, permanent or removable.</p>
            <ul>
              <li>Sneeze Guards</li>
              <li>Plexiglass Shields</li>
              <li>Plexiglass Screens</li>
              <li>Retail Barriers</li>
              <li>Sanitary Barriers</li>
              <li>Plexiglass Protective Workplace Barriers</li>
              <li>Plexiglass Partitions</li>
            </ul>
          </div>
          <div className={styles.plexiCol}>
            <Img
              fluid={data.plexi.childImageSharp.fluid}
              alt="Warning rendering"
            />
          </div>
        </div>
      </div>

      <Img
        fluid={data.amdShield.childImageSharp.fluid}
        alt="Plexiglass Shield installation"
      />
      <Img
        fluid={data.beer.childImageSharp.fluid}
        alt="Plexiglass Shield design for draught cart"
      />
    </div>
  </Layout>
)
export const query = graphql`
  query {
    plexi: file(relativePath: { eq: "plexishield-01.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    beer: file(relativePath: { eq: "beerCart-shield.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    amdShield: file(relativePath: { eq: "homepage/amd-shield.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
export default ShieldPage
