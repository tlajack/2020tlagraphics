import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import GridItem from "../components/gridItem"

import placeholder from "../images/logo-optimized.svg"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />

    <div className="container">
      {/* <!-- HERO SECTION --> */}
      <div className="hero">
        <img className="placeholder" src={placeholder} alt="" />
      </div>

      {/* <!-- SERVICES SECTION --> */}
      <div className="row service_row">
        <div id="service">
          <GridItem itemClass="service" id="merchandising">
            <h1>Merchandising</h1>
            <Img
              fluid={data.canadaGoose.childImageSharp.fluid}
              alt="Selection of merchandising items"
            />
          </GridItem>
          <GridItem itemClass="service" id="mark">
            <h1>
              Marketing <br />
              Collateral
            </h1>
            <Img
              fluid={data.collateral.childImageSharp.fluid}
              alt="Selection of marketing materials"
            />
          </GridItem>
          <GridItem itemClass="service" id="dec">
            <h1>
              Decorative
              <br /> Graphic Films
            </h1>
            <Img
              fluid={data.decorative.childImageSharp.fluid}
              alt="Selection of decorative graphics"
            />
          </GridItem>
          <GridItem itemClass="service" id="sig">
            <h1>Signage</h1>
            <Img
              fluid={data.signageImage.childImageSharp.fluid}
              alt="Selection of signs"
            />
          </GridItem>
        </div>
      </div>

      {/* <!-- Visual Mech SECTION --> */}
      <div className="row merch_row">
        <div id="merch">
          <GridItem itemClass="merch" id="new">
            New Construction - Dental
          </GridItem>
          <GridItem itemClass="merch" id="manu">
            Manufacturing Partnerships, Furnishings, Furniture, Lectern Logos
          </GridItem>
          <GridItem itemClass="merch" id="ret">
            Retail POP
          </GridItem>
        </div>
      </div>

      {/* <!-- Marketing Collateral SECTION --> */}
      <div className="row marketing_row">
        <div id="marketing">
          <GridItem itemClass="marketing" id="cat">
            Catalogues, Brochures, Flyers
          </GridItem>
          <GridItem itemClass="marketing" id="bac">
            Backlit / Frontlit Graphics
          </GridItem>
          <GridItem itemClass="marketing" id="cust">
            Customized Branding
          </GridItem>
          <GridItem itemClass="marketing" id="int">
            Internal Corporate Branding
          </GridItem>
        </div>
      </div>

      {/* <!-- Decorative SECTION --> */}
      <div className="row decorative_row">
        <div id="decorative">
          <GridItem itemClass="decorative" id="arc">
            Architectural Frosting
          </GridItem>
          <GridItem itemClass="decorative" id="decw">
            Decorative Graphics, Wall Graphics Decoration
          </GridItem>
          <GridItem itemClass="decorative" id="sec">
            Security Films
          </GridItem>
          <GridItem itemClass="decorative" id="rec">
            Reception Graphics, Reception Logos
          </GridItem>
        </div>
      </div>

      {/* <!-- Signage SECTION --> */}
      <div className="row signage_row">
        <div id="signage">
          <GridItem itemClass="signage" id="way">
            Way Finding
          </GridItem>
          <GridItem itemClass="signage" id="saf">
            Safety Signage
          </GridItem>
          <GridItem itemClass="signage" id="ins">
            Installation Services
          </GridItem>
        </div>
      </div>

      {/* <!-- FOOTER SECTION --> */}
      <div className="footer">
        <h3>Services</h3>
        <ul>
          <li>
            <Link to="#merch">Visual Merchandising</Link>
          </li>
          <ul>
            <li>
              <Link to="#new">New Construction - Dental</Link>
            </li>
            <li>
              <Link to="#manu">
                Manufacturing Partnerships, Furnishings, Furniture, Lectern
                Logos
              </Link>
            </li>
            <li>
              <Link to="#ret">Retail POP</Link>
            </li>
          </ul>
          <li>
            <Link to="#marketing">Marketing Collateral</Link>
          </li>
          <ul>
            <li>
              <Link to="#cat">Catalogues, Brochures, Flyers</Link>
            </li>
            <li>
              <Link to="#bac">Backlit / Frontlit Graphics</Link>
            </li>
            <li>
              <Link to="#cust">Customized Branding</Link>
            </li>
            <li>
              <Link to="#int">Internal Corporate Branding</Link>
            </li>
          </ul>
          <li>
            <Link to="#decorative">
              Decorative Graphic Films/Accent Graphics
            </Link>
          </li>
          <ul>
            <li>
              <Link to="#arc">Architectural Frosting</Link>
            </li>
            <li>
              <Link to="#decw">
                Decorative Graphics, Wall Graphics Decoration
              </Link>
            </li>
            <li>
              <Link to="#sec">Security Films</Link>
            </li>
            <li>
              <Link to="#rec">Reception Graphics, Reception Logos</Link>
            </li>
          </ul>
          <li>
            <Link to="#signage">Signage</Link>
          </li>
          <ul>
            <li>
              <Link to="#way">Way Finding</Link>
            </li>
            <li>
              <Link to="#saf">Safety Signage</Link>
            </li>
            <li>
              <Link to="#ins">Installation Services</Link>
            </li>
          </ul>
        </ul>

        <h3>Blog</h3>
        <h3>About us</h3>
        <h3>Resource Center</h3>
      </div>
    </div>
  </Layout>
)

export const query = graphql`
  query {
    canadaGoose: file(
      relativePath: { eq: "homepage/CanadaGoose-01-1200x800.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    decorative: file(relativePath: { eq: "homepage/IMG_2282-1200x800.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    collateral: file(relativePath: { eq: "homepage/collateral-1200x800.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    signageImage: file(relativePath: { eq: "homepage/signage-1200x800.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage
