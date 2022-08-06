import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"


const Header = ({ siteTitle }) =>
  <header id="header">
    <div id="logo">
      <div id="my_face">
      <StaticImage
        src="../images/my_face.png"
        loading="eager"
        width={140}
        quality={100}
        formats={["auto", "webp", "avif"]}
        alt=""
      />
      </div>
      <div id="my_name">
        <p>Isak Gerre.</p>
        <p id="my_title">Frontend Developer</p>
      </div>
    </div>
    <div id="menu">
      <p>Home</p>
      <p>About me</p>
      <p>Projects</p>
      <p>Posters</p>
      <p>Let's Talk</p>
    </div>
  </header>

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
