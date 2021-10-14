import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Logo from "../images/logo-white.svg"
import styles from "../components/plexiglass.module.css"

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
            <h1>
              Plexiglass Shield &amp; <br />
              Social Distancing signage
            </h1>
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
        fluid={data.merciShield.childImageSharp.fluid}
        alt="Plexiglass Shield installation"
      />
      <Img
        fluid={data.amdShield.childImageSharp.fluid}
        alt="Plexiglass Shield installation"
      />
      <Img
        fluid={data.beer.childImageSharp.fluid}
        alt="Plexiglass Shield design for draught cart"
      />
      <Img
        fluid={data.cafeteria_01.childImageSharp.fluid}
        alt="Plexiglass Shield installation"
      />
      <Img
        fluid={data.cafeteria_02.childImageSharp.fluid}
        alt="Plexiglass Shield installation"
      />
    </div>
  </Layout>
)
export const query = graphql`
  query {
    plexi: file(relativePath: { eq: "plexishield-01.jpg" }) {
      childImageSharp {
        fluid(quality: 60) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    beer: file(relativePath: { eq: "beerCart-01.jpg" }) {
      childImageSharp {
        fluid(quality: 80) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    amdShield: file(relativePath: { eq: "homepage/amd-shield.jpg" }) {
      childImageSharp {
        fluid(quality: 80) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    merciShield: file(relativePath: { eq: "MerciMonami-shields.jpg" }) {
      childImageSharp {
        fluid(quality: 80) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    cafeteria_01: file(relativePath: { eq: "cafeteria-01.jpg" }) {
      childImageSharp {
        fluid(quality: 80) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    cafeteria_02: file(relativePath: { eq: "cafeteria-02.jpg" }) {
      childImageSharp {
        fluid(quality: 80) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
export default ShieldPage
