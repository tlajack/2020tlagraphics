import React from "react"
import { graphql, StaticQuery } from "gatsby"
import styled from "styled-components"

import BackgroundImage from "gatsby-background-image"

const BgSection = ({ className, bgImage, children }) => (
  <StaticQuery
    query={graphql`
      query {
        tlaOpenerImage: file(relativePath: { eq: "Toronto-Scrapers.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        tlaWhoweareImage: file(relativePath: { eq: "bg-whoweare.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        tlaDoitImage: file(relativePath: { eq: "bg-doit.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        tlaThanksImage: file(relativePath: { eq: "bg-thanks.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      var imageData = null

      if (bgImage === "tlaOpenerImage") {
        imageData = data.tlaOpenerImage.childImageSharp.fluid
      } else if (bgImage === "tlaWhoweareImage") {
        imageData = data.tlaWhoweareImage.childImageSharp.fluid
      } else if (bgImage === "tlaDoitImage") {
        imageData = data.tlaDoitImage.childImageSharp.fluid
      } else if (bgImage === "tlaThanksImage") {
        imageData = data.tlaThanksImage.childImageSharp.fluid
      }

      return (
        <BackgroundImage
          Tag="section"
          className={className}
          fluid={imageData}
          backgroundColor={`#040e18`}
        >
          {children}
        </BackgroundImage>
      )
    }}
  />
)

const StyledBgSection = styled(BgSection)`
  background-position: bottom center;
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
`

export default StyledBgSection
