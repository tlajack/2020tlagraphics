import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import styles from "../components/faceshields.module.css"
import Logo from "../images/logo-white.svg"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Face Shields" />
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
    <div className={styles.info}>
      <div>
        <h1>Doing our part in combating the Coronavirus disease (COVID-19)</h1>
        <ul>
          <li>
            Download the instruction manual here:{" "}
            <a href="https://tlagraphics.com/FaceShield-instructions.pdf">
              Face Shield Instructions
            </a>
          </li>
          <li>
            Face shield is made of .010 polycarbonate and the frame is .125 UV
            treated high impact polystyrene.
          </li>
        </ul>
      </div>
      <div>
        <Img
          className={styles.shieldImage}
          fluid={data.rendering02.childImageSharp.fluid}
          alt="Face mask 3d rendering"
        />
      </div>
    </div>
    <div className={styles.images}>
      <Img
        className={styles.shieldImage}
        fluid={data.rendering01.childImageSharp.fluid}
        alt="Face mask 3d rendering"
      />
      <Img
        className={styles.shieldImage}
        fluid={data.shield1.childImageSharp.fluid}
        alt="Face mask photo"
      />
      <Img
        className={styles.shieldImage}
        fluid={data.photo01.childImageSharp.fluid}
        alt="Face mask photo"
      />
      <div className={styles.warning}>
        <div className={styles.warningIcon}>
          <Img
            className="warningImage"
            fixed={data.warning.childImageSharp.fixed}
            alt="Warning icon"
          />
        </div>
        <p>
          <strong>WARNING:</strong> The use of this product by itself does not
          effectively prevent the transmission of viruses, including
          coronavirus. Use only against splashing liquids or dust. Shield is not
          impact resistant. Do not use as protection against open flame or
          sparks. Failure to follow this warning may result in serious and
          disfiguring injuries.
        </p>
      </div>
    </div>
    <div className={styles.youtubeVideo}>
      <iframe
        title="face mask video"
        src="https://www.youtube.com/embed/QnT6tq8X8ZY"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
    <h1 className={styles.youtubeVideo}>Assembly Instructions</h1>
    <div className={styles.youtubeVideo}>
      <iframe
        title="face mask assembly instructions"
        src="https://www.youtube.com/embed/JdVC2ema3ow"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </Layout>
)

export const query = graphql`
  query {
    rendering02: file(relativePath: { eq: "rendering-for-instructions.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    shield1: file(relativePath: { eq: "shield-01.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    rendering01: file(relativePath: { eq: "rendering-02.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    photo01: file(relativePath: { eq: "IMG_7642.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    warning: file(relativePath: { eq: "icon-warning-forWeb.png" }) {
      childImageSharp {
        fixed(width: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
export default IndexPage
