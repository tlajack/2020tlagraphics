import React from "react"
import { Link } from "gatsby"

import Logo from "../images/logo-white.svg"
import headerStyles from "./header.module.css"

const clickHandler = () => {
  document.getElementById("nav").classList.toggle(headerStyles.active)
}

const activeStyle = {
  backgroundColor: "teal",
  borderRadius: "10px",
}

const Header = () => (
  <header className={headerStyles.header}>
    <div className={headerStyles.container}>
      <nav id="nav" className={headerStyles.nav}>
        <div
          className={headerStyles.menuIcons}
          role="button"
          tabIndex={0}
          onClick={clickHandler}
          onKeyDown={clickHandler}
          aria-label="mobile menu open and close"
        >
          <i id="iconMenu" className={headerStyles.icon_menu}>
            &#10010;
          </i>
          <i id="iconClose" className={headerStyles.icon_close}>
            &#10006;
          </i>
        </div>
        <div className={headerStyles.logo}>
          <Link to="/">
            <img src={Logo} alt="TLA Graphics Logo" />
          </Link>
        </div>
        <ul id="navList" className={headerStyles.nav_list}>
          <li>
            <Link to="/" activeStyle={activeStyle}>
              Home
              {/* <i className="icon icon-dropdown">&#10167;</i> */}
            </Link>
            {/* <ul className="sub-menu">
              <li>
                <Link to="#merchandisingSection">
                  Visual Merchandising
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
                <Link to="#marketingSection">
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
                <Link to="#decorativeSection">
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
                <Link to="#signageSection">
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
            </ul> */}
          </li>
          {/* <li>
            <Link to="/blog" activeStyle={activeStyle}>
              Blog
            </Link>
          </li> */}
          <li>
            <Link to="/about" activeStyle={activeStyle}>
              About us
            </Link>
          </li>
          {/* <li>
            <Link to="/resource" activeStyle={activeStyle}>
              Resource Center
            </Link>
          </li> */}
          <li>
            <Link to="/contact" activeStyle={activeStyle}>
              Contact us
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
)

export default Header
