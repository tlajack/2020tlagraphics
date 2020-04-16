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
        <h1 className="sectionTitle">Services</h1>
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
              fluid={data.frostImage.childImageSharp.fluid}
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
            <h1 className="sectionTitle">Dental</h1>
            <Img
              fluid={data.dentalImage.childImageSharp.fluid}
              alt="Selection of signs"
            />
          </GridItem>
          <GridItem itemClass="merch" id="manu">
            <h1 className="sectionTitle">
              Manufacturing <br />
              Partnerships
            </h1>
            <Img
              fluid={data.dentalImage.childImageSharp.fluid}
              alt="alt text tk"
            />
          </GridItem>
          <GridItem itemClass="merch" id="ret">
            <h1 className="sectionTitle">Retail POP</h1>
            <Img
              fluid={data.dentalImage.childImageSharp.fluid}
              alt="alt text tk"
            />
          </GridItem>
        </div>
      </div>

      {/* <!-- Marketing Collateral SECTION --> */}
      <div className="row marketing_row">
        <div id="marketing">
          <GridItem itemClass="marketing" id="cat">
            <h1 className="sectionTitle">
              Catalogues, <br />
              Brochures, <br />
              Flyers
            </h1>
            <Img
              fluid={data.dentalImage.childImageSharp.fluid}
              alt="alt text tk"
            />
          </GridItem>
          <GridItem itemClass="marketing" id="bac">
            <h1 className="sectionTitle">
              Backlit / Frontlit <br />
              Graphics
            </h1>
            <Img
              fluid={data.dentalImage.childImageSharp.fluid}
              alt="alt text tk"
            />
          </GridItem>
          <GridItem itemClass="marketing" id="cust">
            <h1 className="sectionTitle">
              Customized <br />
              Branding
            </h1>
            <Img
              fluid={data.dentalImage.childImageSharp.fluid}
              alt="alt text tk"
            />
          </GridItem>
          <GridItem itemClass="marketing" id="int">
            <h1 className="sectionTitle">
              Internal Corporate <br />
              Branding
            </h1>
            <Img
              fluid={data.philipsShield.childImageSharp.fluid}
              alt="alt text tk"
            />
          </GridItem>
        </div>
      </div>

      {/* <!-- Decorative SECTION --> */}
      <div className="row decorative_row">
        <div id="decorative">
          <GridItem itemClass="decorative" id="arc">
            <h1 className="sectionTitle">
              Architectural <br />
              Frosting
            </h1>
            {/* *********************** need fix ************************ */}
            <Img
              fluid={data.frostImage.childImageSharp.fluid}
              alt="alt text tk"
              className="architecturalFrosting"
              imgStyle={{ objectFit: "contain", height: "auto !important" }}
            />
          </GridItem>
          <GridItem itemClass="decorative" id="decw">
            <h1 className="sectionTitle">
              Decorative Graphics, Wall Graphics Decoration
            </h1>
            <Img
              fluid={data.dentalImage.childImageSharp.fluid}
              alt="alt text tk"
            />
          </GridItem>
          <GridItem itemClass="decorative" id="sec">
            <h1 className="sectionTitle">Security Films</h1>
            <Img
              fluid={data.dentalImage.childImageSharp.fluid}
              alt="alt text tk"
            />
          </GridItem>
          <GridItem itemClass="decorative" id="rec">
            <h1 className="sectionTitle">
              Reception Graphics, Reception Logos
            </h1>
            <Img
              fluid={data.dentalImage.childImageSharp.fluid}
              alt="alt text tk"
            />
          </GridItem>
        </div>
      </div>

      {/* <!-- Signage SECTION --> */}
      <div className="row signage_row">
        <div id="signage">
          <GridItem itemClass="signage" id="way">
            <h1 className="sectionTitle">Way Finding</h1>
            <Img
              fluid={data.dentalImage.childImageSharp.fluid}
              alt="alt text tk"
            />
          </GridItem>
          <GridItem itemClass="signage" id="saf">
            <h1 className="sectionTitle">Safety Signage</h1>
            <Img
              fluid={data.dentalImage.childImageSharp.fluid}
              alt="alt text tk"
            />
          </GridItem>
          <GridItem itemClass="signage" id="ins">
            <h1 className="sectionTitle">Installation Services</h1>
            <Img
              fluid={data.dentalImage.childImageSharp.fluid}
              alt="alt text tk"
            />
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
    frostImage: file(relativePath: { eq: "homepage/IMG_2282-1200x800.jpg" }) {
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
    dentalImage: file(relativePath: { eq: "homepage/IMG_6546-900x1200.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    philipsShield: file(
      relativePath: { eq: "homepage/shield-clear-high-1000.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage
