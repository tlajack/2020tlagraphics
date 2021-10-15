/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { FaTwitter, FaFacebookF, FaLinkedin } from "react-icons/fa"

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
            <Link to="/">TLA Graphics</Link>
          </p>
          <p>
            4 Paisley Lane
            <br />
            Uxbridge, Ontario L9P 0G5
          </p>
        </div>
        <div>
          <p>
            <a href="tel:1-905-726-2600">+1 (905) 726-2600</a>
          </p>
          <p>
            <a href="mailto:info@tlagraphics.com">info@tlagraphics.com</a>
          </p>
          <p className="social_icons" alt="twitter icon">
            <a href="https://twitter.com/tlagraphics" title="twitter icon">
              <FaTwitter alt="twitter icon" />
            </a>
            <a
              href="https://www.facebook.com/tlagraphics/"
              title="facebook icon"
            >
              <FaFacebookF alt="facebook icon" />
            </a>
            <a href="https://www.linkedin.com/in/markwhite--tla/">
              <FaLinkedin />
            </a>
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
