import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
// import { TwitterTimelineEmbed } from "react-twitter-embed"
import BackgroundImage from "gatsby-background-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import GridItem from "../components/gridItem"

import placeholder from "../images/logo-optimized.svg"
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
        <BackgroundImage
          id={"newsBanner"}
          fluid={data.newsBanner.childImageSharp.fluid}
        >
          <h1>News</h1>
        </BackgroundImage>
        <div className="newsItem">
          <div className="newsPhoto">
            <Link to="/plexishields" title="plexiglass shield info">
              <Img
                fluid={data.amdShield.childImageSharp.fluid}
                alt="faceshield image"
              />
            </Link>
          </div>
          <div className="newsCopy">
            <p>
              TLA produces and installs customized{" "}
              <Link to="/plexishields" title="plexiglass shield info">
                plexiglass shields
              </Link>{" "}
              and{" "}
              <Link to="/plexishields" title="plexiglass shield info">
                social-distancing signage
              </Link>
              .{" "}
              <a href="mailto:info@tlagraphics.com" title="contact us!">
                Contact us
              </a>{" "}
              for more details.
            </p>
          </div>
        </div>
        <div className="newsItem">
          <div className="newsPhoto">
            <Link to="/faceshields" title="faceshields info">
              <Img
                fluid={data.faceshieldImage.childImageSharp.fluid}
                alt="faceshield image"
              />
            </Link>
          </div>
          <div className="newsCopy">
            <p>
              TLA Graphics is contributing to our frontline worker's safety with
              PPE manufacturing. Click here for more info:{" "}
              <Link to="/faceshields" title="faceshields info">
                Faceshields
              </Link>
            </p>
          </div>
        </div>
        <div className="newsItem">
          <div className="newsPhoto">
            <Link to="/antimicrobial" title="antimicrobial film info">
              <img src={virus} alt="icon representing virus" />
            </Link>
          </div>
          <div className="newsCopy">
            <p>
              Keep high-traffic public areas safer with{" "}
              <Link to="/antimicrobial" title="antimicrobial film info">
                Antimicrobial Film
              </Link>
              . We customize and install.
            </p>
          </div>
        </div>

        {/* <div id="topTwitterFeed">
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="tlagraphics"
            options={{ height: "100%" }}
          />
        </div> */}
      </div>
      {/* <!-- SERVICES SECTION --> */}
      <div className="row service_row">
        <h1 className="sectionTitle">Services</h1>
        <div id="service">
          <GridItem id="merchandising">
            <h1>Merchandising</h1>
            <Img
              className="gridImg"
              fluid={data.canadaGoose.childImageSharp.fluid}
              alt="Selection of merchandising items"
            />
          </GridItem>
          <GridItem id="mark">
            <h1>Marketing Collateral</h1>
            <Img
              className="gridImg"
              fluid={data.collateral.childImageSharp.fluid}
              alt="Selection of marketing materials"
            />
          </GridItem>
          <GridItem id="dec">
            <h1>Decorative Graphic Films</h1>
            <Img
              className="gridImg"
              fluid={data.frostImage.childImageSharp.fluid}
              alt="Selection of decorative graphics"
            />
          </GridItem>
          <GridItem id="sig">
            <h1>Signage</h1>
            <Img
              className="gridImg"
              fluid={data.signageImage.childImageSharp.fluid}
              alt="Selection of signs"
            />
          </GridItem>
        </div>
      </div>

      {/* <!-- Visual Mech SECTION --> */}
      <div className="row merch_row" id="merchandisingSection">
        <h1 className="sectionTitle sectionTitleExtraSpc">
          VISUAL MERCHANDISING
        </h1>
        <div id="merch">
          <GridItem id="new">
            <Img
              className="gridImg"
              fluid={data.dentalImage.childImageSharp.fluid}
              alt="Selection of signs"
            />
            <div className="subsectionList">
              <h1>New Construction – Dental</h1>
              <ul>
                <li>Dental office wall art </li>
                <li>Dental office decals</li>
                <li>Dental window graphics</li>
                <li>Dental signage</li>
              </ul>
            </div>
          </GridItem>
          <GridItem id="manu">
            <Img
              className="gridImg"
              fluid={data.manufacturingImage.childImageSharp.fluid}
              alt="Manufacturing Custom Graphics"
            />
            <div className="subsectionList">
              <h1>MANUFACTURING PARTNERSHIPS</h1>
              <ul>
                <li>Furnishings</li>
                <li>Furniture</li>
                <li>Lectern Logos</li>
                <li>Custom podium decals</li>
                <li>Podium signs</li>
                <li>Reusable / detachable / removeable podium signs</li>
              </ul>
            </div>
          </GridItem>

          <GridItem id="ret">
            <Img
              className="gridImg"
              fluid={data.retailImage.childImageSharp.fluid}
              alt="Store front sample graphics"
            />
            <div className="subsectionList">
              <h1>Retail POP</h1>
              <ul>
                <li>POP Signage and graphics</li>
                <li>POP displays</li>
                <li>Point of sale display ideas </li>
                <li>Point of purchase examples </li>
                <li>Types of POP material / POP material examples</li>
              </ul>
            </div>
          </GridItem>
        </div>
      </div>

      {/* <!-- Marketing Collateral SECTION --> */}
      <div className="row marketing_row" id="marketingSection">
        <h1 className="sectionTitle sectionTitleExtraSpc">
          MARKETING COLLATERAL
        </h1>
        <div id="marketing">
          <GridItem id="cat">
            <Img
              className="gridImg"
              fluid={data.catalogueImage.childImageSharp.fluid}
              alt="Kodak catalogue"
            />
            <div className="subsectionList">
              <h1>Catalogues, Brochures, Flyers</h1>
              <ul>
                <li>Catalogue design and print services</li>
              </ul>
            </div>
          </GridItem>

          <GridItem id="customizedbBranding">
            <Img
              className="gridImg"
              fluid={data.philipsShield.childImageSharp.fluid}
              alt="Philips logo reception sign"
            />
            <div className="subsectionList">
              <h1>Customized Branding</h1>
              <ul>
                <li>Internal Corporate Branding</li>
                <li>Company logo design</li>
                <li>Custom award design and fabrication</li>
                <li>Custom corporate awards</li>
              </ul>
            </div>
          </GridItem>
        </div>
      </div>

      {/* <!-- Decorative SECTION --> */}
      <div className="row decorative_row" id="decorativeSection">
        <h1 className="sectionTitle sectionTitleExtraSpc">
          DECORATIVE GRAPHIC FILMS / ACCENT GRAPHICS
        </h1>
        <div id="decorative">
          <GridItem id="arc">
            <Img
              className="gridImg"
              fluid={data.glassImage.childImageSharp.fluid}
              alt="boardroom frosted film"
            />
            <div className="subsectionList">
              <h1>Architectural Frosting</h1>
              <ul>
                <li>Decorative glass finishes</li>
                <li>Architectural window film</li>
                <li>Architectural film</li>
                <li>Office glass design</li>
                <li>Office glass door design </li>
                <li>Frosted glass door design</li>
              </ul>
            </div>
          </GridItem>
          <GridItem id="decw">
            <Img
              className="gridImg"
              fluid={data.largeWallImage.childImageSharp.fluid}
              alt="Large wall graphics"
            />
            <div className="subsectionList">
              <h1>Decorative Graphics / Wall Graphics Decoration</h1>
              <ul>
                <li>Custom wall graphics</li>
                <li>Large wall graphics</li>
                <li>Custom wall wraps</li>
                <li>Wall graphics for businesses / offices</li>
                <li>Wall and floor decals</li>
              </ul>
            </div>
          </GridItem>
          <GridItem id="sec">
            <Img
              className="gridImg"
              fluid={data.securityFilmImage.childImageSharp.fluid}
              alt="Privacy film"
            />
            <div className="subsectionList">
              <h1>Privacy Films</h1>
              <ul>
                <li>Commercial safety window films</li>
                <li>Commercial window films</li>
                <li>Privacy and decorative window films</li>
                <li>Frosted window films</li>
              </ul>
            </div>
          </GridItem>

          <GridItem id="rec">
            <Img
              className="gridImg"
              fluid={data.receptionImage.childImageSharp.fluid}
              alt="reception logo"
            />
            <div className="subsectionList">
              <h1>Reception Graphics, Reception Logos</h1>
              <ul>
                <li>Reception logo design</li>
                <li>Reception logo wall</li>
                <li>Reception logo signage</li>
                <li>Reception logo sign</li>
              </ul>
            </div>
          </GridItem>
        </div>
      </div>

      {/* <!-- Signage SECTION --> */}
      <div className="row signage_row" id="signageSection">
        <h1 className="sectionTitle sectionTitleExtraSpc">SIGNAGE</h1>
        <div id="signage">
          <GridItem id="way">
            <Img
              className="gridImg"
              fluid={data.wayfindingImage.childImageSharp.fluid}
              alt="exit sign"
            />
            <div className="subsectionList">
              <h1>Way Finding</h1>
              <ul>
                <li>Wayfinding and sign design</li>
                <li>Wayfinding signage systems</li>
                <li>Digital wayfinding signage</li>
              </ul>
            </div>
          </GridItem>
          <GridItem id="saf">
            <Img
              className="gridImg"
              fluid={data.safetyImage.childImageSharp.fluid}
              alt="business poster"
            />
            <div className="subsectionList">
              <h1>Safety Signage</h1>
              <ul>
                <li>Workplace safety signage</li>
                <li>Construction safety signs</li>
                <li>Custom safety signs</li>
                <li>Custom metal / magnetic safety signs</li>
                <li>Industrial safety signs</li>
                <li>Safety signs and workplace signs</li>
              </ul>
            </div>
          </GridItem>
          <GridItem id="ins">
            <Img
              className="gridImg"
              fluid={data.installationImage.childImageSharp.fluid}
              alt="installation photo - stairs"
            />
            <div className="subsectionList">
              <h1>Installation Services</h1>
              <ul>
                <li>Pre-install preparation/cleaning</li>
                <li>Installation accessories</li>
                <li>Worry-free job completion</li>
              </ul>
            </div>
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
            <li>
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
            </li>
            <li>
              <Link to="#marketingSection">Marketing Collateral</Link>
              <ul>
                <li>
                  <Link to="#cat">Catalogues, Brochures, Flyers</Link>
                </li>
                <li>
                  <Link to="#customizedbBranding">Customized Branding</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="#decorativeSection">
                Decorative Graphic Films/Accent Graphics
              </Link>
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
                  <Link to="#sec">Privacy Films</Link>
                </li>
                <li>
                  <Link to="#rec">Reception Graphics, Reception Logos</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="#signageSection">Signage</Link>
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
            </li>
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
        <div className="footerLogo">
          {/* <TwitterTimelineEmbed
            sourceType="profile"
            screenName="tlagraphics"
            options={{ height: 600 }}
          /> */}
          <img className="placeholder" src={placeholder} alt="tla logo" />
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
        fluid(quality: 70) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    frostImage: file(relativePath: { eq: "homepage/IMG_2282-1200x800.jpg" }) {
      childImageSharp {
        fluid(quality: 70) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    collateral: file(relativePath: { eq: "homepage/collateral-1200x800.jpg" }) {
      childImageSharp {
        fluid(quality: 80) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    signageImage: file(relativePath: { eq: "homepage/signage-2400x1600.jpg" }) {
      childImageSharp {
        fluid(quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    dentalImage: file(
      relativePath: { eq: "homepage/dentistry-01-IMG_6525.jpg" }
    ) {
      childImageSharp {
        fluid(quality: 50) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    manufacturingImage: file(
      relativePath: { eq: "homepage/palmieri-navigate-infoDesk.jpg" }
    ) {
      childImageSharp {
        fluid(quality: 60) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    retailImage: file(relativePath: { eq: "homepage/IMG_7353-hd.jpg" }) {
      childImageSharp {
        fluid(quality: 60) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    catalogueImage: file(
      relativePath: { eq: "homepage/nathan-anderson-gIzUiKf4hp8-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(quality: 50) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    philipsShield: file(
      relativePath: { eq: "homepage/shield-clear-high-1000.jpg" }
    ) {
      childImageSharp {
        fluid(quality: 60) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    glassImage: file(
      relativePath: { eq: "homepage/benjamin-child-0sT9YhNgSEs-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(quality: 50) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    largeWallImage: file(
      relativePath: { eq: "homepage/scott-webb-NQymDb5XqC4-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(quality: 60) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    securityFilmImage: file(relativePath: { eq: "homepage/frosted-film.jpg" }) {
      childImageSharp {
        fluid(quality: 60) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    receptionImage: file(relativePath: { eq: "homepage/reception-01.jpg" }) {
      childImageSharp {
        fluid(quality: 95) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    wayfindingImage: file(
      relativePath: { eq: "homepage/hello-i-m-nik-mTehrY1mH-s-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(quality: 50) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    safetyImage: file(relativePath: { eq: "homepage/coronaSign.jpg" }) {
      childImageSharp {
        fluid(quality: 50) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    installationImage: file(
      relativePath: { eq: "homepage/jilbert-ebrahimi-BmDaLayzhc0-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(quality: 70) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    faceshieldImage: file(
      relativePath: { eq: "rendering-for-instructions.jpg" }
    ) {
      childImageSharp {
        fluid(quality: 50) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    amdShield: file(relativePath: { eq: "homepage/amd-shield.jpg" }) {
      childImageSharp {
        fluid(quality: 50) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    newsBanner: file(relativePath: { eq: "homepage/facebook-banner.png" }) {
      childImageSharp {
        fluid(quality: 80) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage
