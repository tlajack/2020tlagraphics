import React from "react"
import { FaTwitter, FaFacebookF, FaLinkedin } from "react-icons/fa"

import styled from "styled-components"

const TLAfooter = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: lightgray;
  color: #333;
  text-align: center;
  /* font-size: small; */
  .mainFooter {
    box-sizing: border-box;
    background-color: gray;
    font-size: 0.8em;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    color: white;
    line-height: 1.6em;
    padding: 2em;
    flex: 1;
    flex-shrink: 0;
  }
  * {
    font-family: var(--bodyFont);
  }
  a {
    color: white;
  }
  a:hover {
    color: var(--secondary-light);
  }
  .social_icons a {
    padding: 1em;
  }
`

const Footer = () => {
  return (
    <TLAfooter>
      <div className="mainFooter">
        <div>
          <p>
            <strong>TLA Graphics Ltd.</strong>
            <br />
            4 Paisley Lane <br />
            Uxbridge, ON L9P 0G5
          </p>
        </div>
        <div>
          <p>
            <a href="tel:1-905-726-2600">+1 (905) 726-2600</a>
            <br />
            <a href="mailto:info@tlagraphics.com">info@tlagraphics.com</a>
          </p>
          <p className="social_icons" alt="twitter icon">
            <a
              href="https://www.facebook.com/tlagraphics/"
              title="facebook icon"
            >
              <FaFacebookF alt="facebook" />
            </a>
            <a href="https://www.linkedin.com/company/tla-graphics">
              <FaLinkedin alt="linkedin" />
            </a>
          </p>
          <p>
            <a href="https://www.dropbox.com/request/FL93CCTD7UCysvFI2Pp6">
              File upload
            </a>
          </p>
        </div>
        <div>
          <p>
            <a href="#top">
              <span class="to-the-top-long">
                To the top{" "}
                <span class="arrow" aria-hidden="true">
                  ↑
                </span>
              </span>
            </a>
          </p>
        </div>
      </div>
      <div>
        <p>
          Copyright &copy; {new Date().getFullYear()} TLA Graphics · All rights
          reserved
        </p>
      </div>
    </TLAfooter>
  )
}

export default Footer
