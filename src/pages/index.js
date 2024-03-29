import * as React from "react"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Carousel from "../components/Carousel"
import TlaServices from "../components/TlaServices"
import styled from "styled-components"

const HomeContent = styled.div`
  h1 {
    /* box-sizing: border-box; */
    display: inline-block;
    margin: 2em 0 1em 1em;
    background-image: linear-gradient(
      45deg,
      hsl(177deg 100% 22%) 0%,
      hsl(172deg 100% 26%) 11%,
      hsl(167deg 100% 29%) 22%,
      hsl(156deg 67% 38%) 33%,
      hsl(140deg 46% 48%) 44%,
      hsl(115deg 44% 55%) 56%,
      hsl(93deg 56% 55%) 67%,
      hsl(77deg 67% 54%) 78%,
      hsl(65deg 77% 51%) 89%,
      hsl(55deg 100% 50%) 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }
  h2 {
    /* box-sizing: border-box; */
    display: inline-block;
    margin: 1em;
    background-image: linear-gradient(
      00deg,
      hsl(177deg 59% 58%) 0%,
      hsl(176deg 57% 64%) 11%,
      hsl(176deg 57% 69%) 22%,
      hsl(176deg 56% 74%) 33%,
      hsl(175deg 56% 79%) 44%,
      hsl(175deg 56% 83%) 56%,
      hsl(175deg 56% 88%) 67%,
      hsl(174deg 56% 92%) 78%,
      hsl(174deg 56% 96%) 89%,
      hsl(0deg 0% 100%) 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }
  h3 {
    /* box-sizing: border-box; */
    display: inline-block;
    margin: 1em 0 0;
    background-image: linear-gradient(
      00deg,
      hsl(60deg 100% 72%) 0%,
      hsl(60deg 100% 76%) 12%,
      hsl(60deg 100% 79%) 24%,
      hsl(60deg 100% 82%) 35%,
      hsl(60deg 100% 85%) 46%,
      hsl(60deg 100% 88%) 57%,
      hsl(60deg 100% 91%) 68%,
      hsl(60deg 100% 94%) 78%,
      hsl(60deg 100% 97%) 89%,
      hsl(0deg 0% 100%) 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }
  .sliderContainer {
    display: block;
    width: 100vw;
    overflow: hidden;
  }
  .row {
    padding: 1rem 10px;
  }

  .merch_row {
    background-color: teal;
    color: white;
  }
  .marketing_row {
    background-color: #2f4f4f;
    color: white;
  }
  .decorative_row {
    background-color: grey;
    color: white;
  }
  .signage_row {
    background-color: #556b2f;
    color: white;
  }

  .gridItemsContainer {
    display: grid;
    margin-bottom: 2rem;
  }

  .gridItems {
    margin-bottom: 2rem;
  }
  ul {
    padding-inline-start: 25px;
  }

  /* .subsectionList {
    line-height: 1.4em;
  } */

  @media only screen and (min-width: 800px) {
    .gridItemsContainer {
      gap: 0.5em;
    }

    .merch_row .gridItemsContainer {
      grid-template-columns: 1fr 1fr 1fr;
    }
    .marketing_row .gridItemsContainer {
      grid-template-columns: 1fr 1fr;
    }
    .decorative_row .gridItemsContainer {
      grid-template-columns: 1fr 1fr;
    }
    .signage_row .gridItemsContainer {
      grid-template-columns: 1fr 1fr 1fr;
    }
    .gridItems {
      margin-bottom: 0;
    }
  }
`

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <HomeContent>
        <div className="sliderContainer">
          <Carousel />
        </div>

        {/* <!-- SERVICES SECTION --> */}

        <h1>Services</h1>
        <div className="sliderContainer">
          <TlaServices />
        </div>

        {/* <!-- Visual Merch SECTION --> */}
        <div className="row merch_row" id="merchandisingSection">
          <h2 className="sectionTitle sectionTitleExtraSpc">
            VISUAL MERCHANDISING
          </h2>
          <div className="gridItemsContainer" id="merch">
            <div className="gridItems">
              <StaticImage
                className="gridImg"
                src="../images/homepage/dentistry-01-IMG_6525.jpg"
                alt="Selection of signs"
              />
              <div className="subsectionList">
                <h3>New Construction – Dental</h3>
                <ul>
                  <li>Dental office wall art </li>
                  <li>Dental office decals</li>
                  <li>Dental window graphics</li>
                  <li>Dental signage</li>
                </ul>
              </div>
            </div>
            <div className="gridItems">
              <StaticImage
                className="gridImg"
                src="../images/homepage/palmieri-navigate-infoDesk.jpg"
                alt="Manufacturing Custom Graphics"
              />
              <div className="subsectionList">
                <h3>MANUFACTURING PARTNERSHIPS</h3>
                <ul>
                  <li>Furnishings</li>
                  <li>Furniture</li>
                  <li>Lectern Logos</li>
                  <li>Custom podium decals</li>
                  <li>Podium signs</li>
                  <li>Reusable / detachable / removeable podium signs</li>
                </ul>
              </div>
            </div>

            <div className="gridItems">
              <StaticImage
                className="gridImg"
                src="../images/homepage/IMG_7353-hd.jpg"
                alt="Store front sample graphics"
              />
              <div className="subsectionList">
                <h3>Retail POP</h3>
                <ul>
                  <li>POP Signage and graphics</li>
                  <li>POP displays</li>
                  <li>Point of sale display ideas </li>
                  <li>Point of purchase examples </li>
                  <li>Types of POP material / POP material examples</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Marketing Collateral SECTION --> */}
        <div className="row marketing_row" id="marketingSection">
          <h2 className="sectionTitle sectionTitleExtraSpc">
            MARKETING COLLATERAL
          </h2>
          <div className="gridItemsContainer" id="marketing">
            <div className="gridItems" id="cat">
              <StaticImage
                className="gridImg"
                src="../images/homepage/decals.jpg"
                alt="Kodak catalogue"
              />
              <div className="subsectionList">
                <h3>Print production</h3>
                <ul>
                  <li>Catalogue design and print services</li>
                  <li>Catalogues, brochures, decals, posters, tags, coupons</li>
                  <li>Industrial decals</li>
                </ul>
              </div>
            </div>

            <div className="gridItems" id="customizedbBranding">
              <StaticImage
                className="gridImg"
                src="../images/homepage/shield-clear-high-1000.jpg"
                alt="Philips logo reception sign"
              />
              <div className="subsectionList">
                <h3>Customized Branding</h3>
                <ul>
                  <li>Internal Corporate Branding</li>
                  <li>Company logo design</li>
                  <li>Custom award design and fabrication</li>
                  <li>Custom corporate awards</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Decorative SECTION --> */}
        <div className="row decorative_row" id="decorativeSection">
          <h2 className="sectionTitle sectionTitleExtraSpc">
            DECORATIVE GRAPHIC FILMS / ACCENT GRAPHICS
          </h2>
          <div className="gridItemsContainer" id="decorative">
            <div className="gridItems" id="arc">
              <StaticImage
                className="gridImg"
                src="../images/homepage/benjamin-child-0sT9YhNgSEs-unsplash.jpg"
                alt="boardroom frosted film"
              />
              <div className="subsectionList">
                <h3>Architectural Frosting</h3>
                <ul>
                  <li>Decorative glass finishes</li>
                  <li>Architectural window film</li>
                  <li>Architectural film</li>
                  <li>Office glass design</li>
                  <li>Office glass door design </li>
                  <li>Frosted glass door design</li>
                </ul>
              </div>
            </div>
            <div className="gridItems" id="decw">
              <StaticImage
                className="gridImg"
                src="../images/homepage/wallgraphics.jpg"
                alt="Large wall graphics"
              />
              <div className="subsectionList">
                <h3>Decorative Graphics / Wall Graphics Decoration</h3>
                <ul>
                  <li>Custom wall graphics</li>
                  <li>Large wall graphics</li>
                  <li>Custom wall wraps</li>
                  <li>Wall graphics for businesses / offices</li>
                  <li>Wall and floor decals</li>
                  <li>Photo Tex™ fabric prints</li>
                </ul>
              </div>
            </div>
            <div className="gridItems" id="sec">
              <StaticImage
                className="gridImg"
                src="../images/homepage/frosted-film.jpg"
                alt="Privacy film"
              />
              <div className="subsectionList">
                <h3>Privacy Films</h3>
                <ul>
                  <li>Commercial safety window films</li>
                  <li>Commercial window films</li>
                  <li>Privacy and decorative window films</li>
                  <li>Frosted window films</li>
                </ul>
              </div>
            </div>

            <div className="gridItems" id="rec">
              <StaticImage
                className="gridImg"
                src="../images/homepage/reception-01.jpg"
                alt="reception logo"
              />
              <div className="subsectionList">
                <h3>Reception Graphics, Reception Logos</h3>
                <ul>
                  <li>Reception logo design</li>
                  <li>Reception logo wall</li>
                  <li>Reception logo signage</li>
                  <li>Reception logo sign</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Signage SECTION --> */}
        <div className="row signage_row" id="signageSection">
          <h2 className="sectionTitle sectionTitleExtraSpc">SIGNAGE</h2>
          <div className="gridItemsContainer" id="signage">
            <div className="gridItems" id="way">
              <StaticImage
                className="gridImg"
                src="../images/homepage/hello-i-m-nik-mTehrY1mH-s-unsplash.jpg"
                alt="exit sign"
              />
              <div className="subsectionList">
                <h3>Way Finding</h3>
                <ul>
                  <li>Wayfinding and sign design</li>
                  <li>Wayfinding signage systems</li>
                  <li>Digital wayfinding signage</li>
                </ul>
              </div>
            </div>
            <div className="gridItems" id="saf">
              <StaticImage
                className="gridImg"
                src="../images/homepage/safetySignage.png"
                alt="business poster"
              />
              <div className="subsectionList">
                <h3>Safety Signage</h3>
                <ul>
                  <li>Workplace safety signage</li>
                  <li>Construction safety signs</li>
                  <li>Custom safety signs</li>
                  <li>Custom metal / magnetic safety signs</li>
                  <li>Industrial safety signs</li>
                  <li>Safety signs and workplace signs</li>
                </ul>
              </div>
            </div>
            <div className="gridItems" id="ins">
              <StaticImage
                className="gridImg"
                src="../images/homepage/jilbert-ebrahimi-BmDaLayzhc0-unsplash.jpg"
                alt="installation photo - stairs"
              />
              <div className="subsectionList">
                <h3>Installation Services</h3>
                <ul>
                  <li>Pre-install preparation/cleaning</li>
                  <li>Installation accessories</li>
                  <li>Worry-free job completion</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </HomeContent>
    </Layout>
  )
}

export default IndexPage
