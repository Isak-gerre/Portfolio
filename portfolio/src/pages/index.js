import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <main id="index">
      <div id="hello">
        <div id="greeting">Hello <span id="wave">👋🏼</span></div>
        <div id="short-about">I'm Isak Gerre & an aspiring <span>web developer</span></div>
        <div id="short-description">I'm currently studying web development at Malmö University and looking for somewhere to work when I graduate in 2023</div>
        <div className="read-more">
          <Link to="/about">Read More about me 👉🏼</Link>
          <Link to="/contact" id="contact">Let's Talk ✌🏼</Link>
        </div>
      </div>
      <div id="me-image">
        <StaticImage
        src="../images/me.png"
        loading="eager"
        width={660}
        quality={100}
        formats={["auto", "webp", "avif"]}
        alt=""
        />
      </div>
    </main>
    <div id="social-links">
      <div id="social-with-text">
        <p>See my Projects 👉🏼</p>
        <a href="https://www.github.com">
          <StaticImage
          src="../images/github.png"
          loading="eager"
          width={30}
          quality={100}
          formats={["auto", "webp", "avif"]}
          alt=""
          id="github"
          />
        </a>
      </div>
      <div id="linkedin">
        <a href="https://www.linkedin.com">
          <StaticImage
          src="../images/linkedin-rect.png"
          loading="eager"
          width={30}
          quality={100}
          formats={["auto", "webp", "avif"]}
          alt=""
        />
        </a>
      </div>
      
      
    </div>
    <div id="poster-preview">
      <Link to="/posters">
      <StaticImage
          src="../images/WhyBother.jpg"
          loading="eager"
          width={150}
          quality={100}
          formats={["auto", "webp", "avif"]}
          alt=""
          />
      </Link>
        <p>👈🏼 See my Posters</p>

    </div>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
