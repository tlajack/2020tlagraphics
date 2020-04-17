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
        <h1 className="sectionTitle">VISUAL MERCHANDISING</h1>
        <div id="merch">
          <GridItem itemClass="merch" id="new">
            <Img
              fluid={data.dentalImage.childImageSharp.fluid}
              alt="Selection of signs"
            />
          </GridItem>

          {/* ###########################################   Subsection */}
          <GridItem itemClass="subsectionList">
            <h1>New Construction – Dental</h1>
            <ul>
              <li>Dental office wall art </li>
              <li>Dental office decals</li>
              <li>Dental window graphics</li>
              <li>Dental signage</li>
            </ul>
          </GridItem>
          <GridItem itemClass="merch" id="manu">
            <Img
              fluid={data.manufacturingImage.childImageSharp.fluid}
              alt="alt text tk"
            />
          </GridItem>

          <GridItem itemClass="subsectionList">
            <h1>MANUFACTURING PARTNERSHIPS</h1>
            <ul>
              <li>Furnishings</li>
              <li>Furniture</li>
              <li>Lectern Logos</li>
              <li>Custom podium decal</li>
              <li>Podium sign</li>
              <li>Reusable / detachable / removeable podium sign</li>
            </ul>
          </GridItem>

          <GridItem itemClass="merch" id="ret">
            <Img
              fluid={data.retailImage.childImageSharp.fluid}
              alt="alt text tk"
            />
          </GridItem>
          <GridItem itemClass="subsectionList">
            <h1>Retail POP</h1>
            <ul>
              <li>POP Signage and graphics</li>
              <li>POP display / POP displays</li>
              <li>Point of sale display ideas </li>
              <li>Point of purchase examples </li>
              <li>Types of POP material / POP material examples</li>
            </ul>
          </GridItem>
        </div>
      </div>

      {/* <!-- Marketing Collateral SECTION --> */}
      <div className="row marketing_row">
        <h1 className="sectionTitle">MARKETING COLLATERAL</h1>
        <div id="marketing">
          <GridItem itemClass="marketing" id="cat">
            <Img
              fluid={data.catalogueImage.childImageSharp.fluid}
              alt="alt text tk"
            />
          </GridItem>
          <GridItem itemClass="subsectionList">
            <h1>Catalogues, Brochures, Flyers</h1>
            <ul>
              <li>Catalogue design and print</li>
              <li>Catalogue design and print services</li>
              <li>Catalogue design services</li>
            </ul>
          </GridItem>

          <GridItem itemClass="marketing" id="int">
            <Img
              fluid={data.philipsShield.childImageSharp.fluid}
              alt="alt text tk"
            />
          </GridItem>

          <GridItem itemClass="subsectionList">
            <h1>Customized Branding</h1>
            <ul>
              <li>Internal Corporate Branding</li>
              <li>Company logo design</li>
              <li>Custom award design and fabrication</li>
              <li>Custom corporate awards</li>
            </ul>
          </GridItem>
        </div>
      </div>

      {/* <!-- Decorative SECTION --> */}
      <div className="row decorative_row">
        <div id="decorative">
          <GridItem itemClass="decorative" id="arc">
            {/* *********************** need fix ************************ */}
            <Img
              fluid={data.glassImage.childImageSharp.fluid}
              alt="alt text tk"
              className="architecturalFrosting"
              imgStyle={{ objectFit: "contain", height: "auto !important" }}
            />
          </GridItem>
          <GridItem itemClass="subsectionList">
            <h1>Architectural Frosting</h1>
            <ul>
              <li>Decorative glass finishes</li>
              <li>Architectural window film</li>
              <li>Architectural film</li>
              <li>Office glass design</li>
              <li>Office glass door design / Best office glass design </li>
              <li>Frosted glass door design</li>
            </ul>
          </GridItem>
          <GridItem itemClass="decorative" id="decw">
            <Img
              fluid={data.largeWallImage.childImageSharp.fluid}
              alt="alt text tk"
            />
          </GridItem>
          <GridItem itemClass="subsectionList">
            <h1>Decorative Graphics / Wall Graphics Decoration</h1>
            <ul>
              <li>Custom wall graphics</li>
              <li>Large wall graphics</li>
              <li>Custom wall wrap</li>
              <li>Wall graphics for business / office</li>
              <li>Wall and floor decals</li>
            </ul>
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
    manufacturingImage: file(
      relativePath: { eq: "homepage/palmieri-navigate-infoDesk.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    retailImage: file(relativePath: { eq: "homepage/IMG_7353-hd.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    catalogueImage: file(
      relativePath: { eq: "homepage/nathan-anderson-gIzUiKf4hp8-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    glassImage: file(
      relativePath: { eq: "homepage/benjamin-child-0sT9YhNgSEs-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    largeWallImage: file(
      relativePath: { eq: "homepage/scott-webb-NQymDb5XqC4-unsplash.jpg" }
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
