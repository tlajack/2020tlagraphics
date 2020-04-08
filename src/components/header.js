import React from "react"
import { Link } from "gatsby"

import Logo from "../images/logo-white.svg"

const clickHandler = e => {
  document.getElementById("nav").classList.toggle("active")
}

const activeStyle = {
  color: "rgb(0, 182, 182)",
}

const Header = () => (
  <header id="header">
    <div className="container">
      <nav id="nav">
        <div
          className="menu-icons"
          role="button"
          tabIndex={0}
          onClick={clickHandler}
          onKeyDown={clickHandler}
        >
          <i className="icon icon-menu">&#10010;</i>
          <i className="icon icon-close">&#10006;</i>
        </div>
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="TLA Graphics Logo" />
          </Link>
        </div>
        <ul className="nav-list">
          <li>
            <Link to="/">
              Services
              <i className="icon icon-dropdown">&#10167;</i>
            </Link>
            <ul className="sub-menu">
              <li>
                <Link to="/">
                  Visual Merchandizing
                  <i className="icon icon-dropdown">&#10167;</i>
                </Link>
                <ul className="sub-menu">
                  <li>
                    <Link to="/">New Construction - Dental</Link>
                  </li>
                  <li>
                    <Link to="/">
                      Manufacturing Partnerships, Furnishings, Furniture,
                      Lectern Logos
                    </Link>
                  </li>
                  <li>
                    <Link to="/">Retail POP</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/">
                  Marketing Collateral
                  <i className="icon icon-dropdown">&#10167;</i>
                </Link>
                <ul className="sub-menu">
                  <li>
                    <Link to="/">Catalogues, Brochures, Flyers</Link>
                  </li>
                  <li>
                    <Link to="/">Backlit / Frontlit Graphics</Link>
                  </li>
                  <li>
                    <Link to="/">Customized Branding</Link>
                  </li>
                  <li>
                    <Link to="/">Internal Corporate Branding</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/">
                  Decorative Graphic Films/Accent Graphics
                  <i className="icon icon-dropdown">&#10167;</i>
                </Link>
                <ul className="sub-menu">
                  <li>
                    <Link to="/">Architectural Frosting</Link>
                  </li>
                  <li>
                    <Link to="/">
                      Decorative Graphics, Wall Graphics Decoration
                    </Link>
                  </li>
                  <li>
                    <Link to="/">Security Films</Link>
                  </li>
                  <li>
                    <Link to="/">Reception Graphics, Reception Logos</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/">
                  Signage
                  <i className="icon icon-dropdown">&#10167;</i>
                </Link>
                <ul className="sub-menu">
                  <li>
                    <Link to="/">Way Finding</Link>
                  </li>
                  <li>
                    <Link to="/">Safety Signage</Link>
                  </li>
                  <li>
                    <Link to="/">Installation Services</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/blog" activeStyle={activeStyle}>
              Blog
            </Link>
          </li>
          <li>
            <Link to="/about" activeStyle={activeStyle}>
              About us
            </Link>
          </li>
          <li>
            <Link to="/resource" activeStyle={activeStyle}>
              Resource Center
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
)

export default Header
