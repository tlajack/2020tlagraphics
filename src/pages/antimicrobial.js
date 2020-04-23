import React from "react"
import { graphql } from "gatsby"
// import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/antimicrobial.css"
import virus from "../images/icon-virus.svg"
import shield from "../images/icon-shield.svg"
import snap from "../images/icon-snap.svg"
import Logo from "../images/logo-white.svg"

const IndexPage = ({ data }) => (
  <Layout id="antimicrobialMain">
    <SEO title="Antimicrobial Film" />
    <div
      style={{
        background: `teal`,
        marginBottom: `1.45rem`,
      }}
    >
      <a href="https://tlagraphics.com/">
        <img className="topLogo" src={Logo} alt="TLA Graphics Logo" />
      </a>
    </div>

    <div className="antimicrobial_infoRow">
      <h1>Antimicrobial Film</h1>
      <h2>Characteristics of Antimicrobial Film</h2>
      <p>
        According to research, including copper and copper alloy, 'antimicrobial
        copper' rapidly deactivated the coronavirus within a couple minutes when
        the coronavirus touched the surface of the copper.
      </p>
      <h2>Touch with Confidence</h2>
      <div className="antimicrobial_images">
        <div>
          <img src={virus} alt="antimicrobial icon" />
          <h3>Antimicrobial</h3>
        </div>

        <div>
          <img src={snap} alt="easy-to-use icon" />
          <h3>Easy to Use</h3>
        </div>

        <div>
          <img src={shield} alt="shield icon" />
          <h3>Safe & Effective</h3>
        </div>
      </div>
      <h2>Semi-permanent period of use</h2>
      <p>
        The antimicrobial effect is everlasting (Please change the product
        depending on the damage of the film, such as holes, scratches and
        abrasion).
      </p>
      <h2>Superior bacteria extermination effect</h2>
      <p>
        It continuously exterminates the infectious viruses and refrains the
        division and dissemination of the viruses.
      </p>
    </div>

    <div className="antimicrobial_infoRow antimicrobial_section_construction">
      <h2>Construction & Characteristics</h2>
      <p>
        Providing an optimal antibacterial solution by applying a special
        antibacterial process to PO film.
      </p>
      <h3>Characteristics</h3>
      <p>Softness, low transparancy, non adhesive</p>
    </div>

    <div className="antimicrobial_infoRow antimicrobial_section_application">
      <h2>Application Examples for Antimicrobial Film</h2>
      <ul>
        <li>Public transit handles</li>
        <li>Toilet handles and building door knobs</li>
        <li>Elevators</li>
        <li>Common front door areas</li>
        <li>Card Readers</li>
        <li>Shopping carts</li>
      </ul>
    </div>

    <div className="antimicrobial_infoRow antimicrobial_section_productInfo">
      <h2>Product Information</h2>
      <ul>
        <li>Specifications: 15.748 in. x 32.80 ft. (400mm x 10m)</li>
        <li>Type: Non-adhesive film with adhesive back</li>
        <li>Materials: PO, Antimicrobial Nano Copper</li>
        <li>
          Antimicrobial Copper film is the “one and only” material approved by
          U.S. Environmental Protection Agency (US EPA)
        </li>
      </ul>
    </div>
    <div className="antimicrobial_iframe">
      <iframe
        title="antimicrobial video"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/jj-70azNjlo"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </Layout>
)

export const query = graphql`
  query {
    antimicrobialImage: file(relativePath: { eq: "icon-virus.svg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    snapImage: file(relativePath: { eq: "icon-snap.svg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    shieldImage: file(relativePath: { eq: "icon-shield.svg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
export default IndexPage
