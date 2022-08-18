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
      <Link to="/" className="active-link nav-link">Home <span></span></Link>
      <Link to="/about" className="nav-link">About me <span></span></Link>
      <Link to="/projects" className="nav-link">Projects <span></span></Link>
      <Link to="/posters" className="nav-link">Posters <span></span></Link>
      <Link to="/contact" className="nav-link">Let's Talk✌🏼 <span></span></Link>
    </div>
  </header>

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
