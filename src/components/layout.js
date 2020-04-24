/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header id="top" />

      <main>{children}</main>
      <footer>
        <div>
          © {new Date().getFullYear()}, Built by
          {` `}
          <a href="https://www.tlagraphics.com">TLA Graphics</a>
        </div>
        <div>
          <p>
            <a href="tel:1-905-726-2600">+1 (905) 726-2600</a>
          </p>
          <p>
            <a href="mailto:info@tlagraphics.com">info@tlagraphics.com</a>
          </p>
        </div>
        <div>
          <a href="#top">
            <span className="to-the-top-long">
              To the top{" "}
              <span className="arrow" aria-hidden="true">
                ↑
              </span>
            </span>
          </a>
        </div>{" "}
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
