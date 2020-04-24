import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import GridItem from "../components/gridItem"

// import placeholder from "../images/logo-optimized.svg"
import virus from "../images/icon-virus.svg"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />

    <div className="container">
      {/* <!-- HERO SECTION --> */}
      {/* <div className="hero">
        <img className="placeholder" src={placeholder} alt="" />
      </div> */}
      {/* <!-- NEWS SECTION --> */}
      <div id="news">
        <h1>News</h1>
        <div className="newsItem">
          <div className="newsPhoto">
            <Link to="/faceshields">
              <Img
                fluid={data.faceshieldImage.childImageSharp.fluid}
                alt="faceshield image"
              />
            </Link>
          </div>
          <div className="newsCopy">
            <p>
              TLA Graphics is contributing with PPE manufacturing by using the
              same tools and material we have used for years producing POP
              products and displays. Click <Link to="/faceshields">here</Link>{" "}
              for more info: <Link to="/faceshields">Faceshields</Link>
            </p>
          </div>
        </div>
        <div className="newsItem">
          <div className="newsPhoto">
            <Link to="/antimicrobial">
              <img src={virus} alt="icon representing virus" />
            </Link>
          </div>
          <div className="newsCopy">
            <p>
              Keep high-traffic public areas safer with{" "}
              <Link to="/antimicrobial">Antimicrobial Film</Link>. We customize
              and install.
            </p>
          </div>
        </div>
        <div className="newsItem">
          <div className="newsPhoto">
            <Img
              fluid={data.amdShield.childImageSharp.fluid}
              alt="faceshield image"
            />
          </div>
          <div className="newsCopy">
            <p>
              TLA produces and installs customized plexiglass shields.{" "}
              <a href="mailto:info@tlagraphics.com">Contact us</a> for more
              details.
            </p>
          </div>
        </div>
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
      <div className="row merch_row" id="merchandisingSection">
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
      <div className="row marketing_row" id="marketingSection">
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
      <div className="row decorative_row" id="decorativeSection">
        <h1 className="sectionTitle">
          DECORATIVE GRAPHIC FILMS / ACCENT GRAPHICS
        </h1>
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
            <Img
              fluid={data.securityFilmImage.childImageSharp.fluid}
              alt="alt text tk"
            />
          </GridItem>
          <GridItem itemClass="subsectionList">
            <h1>Privacy Films</h1>
            <ul>
              <li>Commercial safety window film</li>
              <li>Commercial window films</li>
              <li>Privacy and decorative window film</li>
              <li>Frosted window film</li>
            </ul>
          </GridItem>

          <GridItem itemClass="decorative" id="rec">
            <Img
              fluid={data.receptionImage.childImageSharp.fluid}
              alt="alt text tk"
            />
          </GridItem>
          <GridItem itemClass="subsectionList">
            <h1>Reception Graphics, Reception Logos</h1>
            <ul>
              <li>Reception logo design</li>
              <li>Reception logo wall</li>
              <li>Reception logo signage</li>
              <li>Reception logo sign</li>
            </ul>
          </GridItem>
        </div>
      </div>

      {/* <!-- Signage SECTION --> */}
      <div className="row signage_row" id="signageSection">
        <h1 className="sectionTitle">SIGNAGE</h1>
        <div id="signage">
          <GridItem itemClass="signage" id="way">
            <Img
              fluid={data.wayfindingImage.childImageSharp.fluid}
              alt="alt text tk"
            />
          </GridItem>
          <GridItem itemClass="subsectionList">
            <h1>Way Finding</h1>
            <ul>
              <li>Wayfinding and sign design</li>
              <li>Wayfinding signage systems</li>
              <li>Digital wayfinding signage</li>
              <li>Wayfinding signage design firms</li>
              <li>Signage and wayfinding consultants</li>
              <li>Environmental graphic design firms</li>
              <li>Wayfinding firms</li>
            </ul>
          </GridItem>
          <GridItem itemClass="signage" id="saf">
            <Img
              fluid={data.safetyImage.childImageSharp.fluid}
              alt="alt text tk"
            />
          </GridItem>
          <GridItem itemClass="subsectionList">
            <h1>Safety Signage</h1>
            <ul>
              <li>Workplace safety signage</li>
              <li>Construction safety signs</li>
              <li>Custom safety signs</li>
              <li>Custom metal / magnetic safety signs</li>
              <li>Industrial safety signs</li>
              <li>Safety signs and workplace signs</li>
            </ul>
          </GridItem>
          <GridItem itemClass="signage" id="ins">
            <Img
              fluid={data.installationImage.childImageSharp.fluid}
              alt="alt text tk"
            />
          </GridItem>
          <GridItem itemClass="subsectionList">
            <h1>Installation Services</h1>
            <ul>
              <li>Reception logo design</li>
              <li>Reception logo wall</li>
              <li>Reception logo signage</li>
              <li>Reception logo sign</li>
            </ul>
          </GridItem>
        </div>
      </div>

      {/* <!-- FOOTER SECTION --> */}
      <div className="footer">
        <div>
          <h3>Services</h3>
          <ul>
            <li>
              <Link to="#merchandisingSection">Visual Merchandising</Link>
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
              <Link to="#marketingSection">Marketing Collateral</Link>
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
              <Link to="#decorativeSection">
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
              <Link to="#signageSection">Signage</Link>
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

          {/* <h3>
            <Link to="/blog">Blog</Link>
          </h3> */}
          <h3>
            <Link to="/about">About us</Link>
          </h3>
          {/* <h3>
            <Link to="/resource">Resource Center</Link>
          </h3> */}
        </div>
        <div>
          <a
            href="https://twitter.com/tlagraphics?ref_src=twsrc%5Etfw"
            className="twitter-follow-button"
            data-show-count="false"
          >
            Follow @tlagraphics
          </a>
          <script
            async
            src="https://platform.twitter.com/widgets.js"
            charSet="utf-8"
          ></script>
        </div>
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
    securityFilmImage: file(relativePath: { eq: "homepage/frosted-film.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    receptionImage: file(relativePath: { eq: "homepage/reception.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    safetyImage: file(relativePath: { eq: "homepage/coronaSign.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    wayfindingImage: file(
      relativePath: { eq: "homepage/hello-i-m-nik-mTehrY1mH-s-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    installationImage: file(
      relativePath: { eq: "homepage/jilbert-ebrahimi-BmDaLayzhc0-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    faceshieldImage: file(
      relativePath: { eq: "rendering-for-instructions.jpg" }
    ) {
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

export default IndexPage
