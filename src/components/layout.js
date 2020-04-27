/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
require("./layout.css")

const Layout = ({ children }) => {
  return (
    <>
      <Header id="top" />

      <main>{children}</main>
      <footer>
        <div>
          <p>
            © {new Date().getFullYear()}, Built by
            {` `}
            <a href="https://www.tlagraphics.com">TLA Graphics</a>
          </p>
          <p>158 Don Hillock Dr. Unit 11, Aurora, ON L4G 0G9</p>
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
