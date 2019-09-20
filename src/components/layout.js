import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Hero from "../components/hero"
import Banner from "../components/banner"
import Portrait from "../components/portrait"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Footer from "../components/footer"

import "./layout.css"
import styled from "styled-components"
import classnames from "classnames"

import social from "../constants/social"

const getImages = graphql`
  query {
    homeBg: file(
      relativePath: { eq: "paintings/landscapes/landscape_025.jpg" }
    ) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    home_portrait: file(relativePath: { eq: "home_portrait.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 500) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const Layout = ({ children, className, home }) => {
  const data = useStaticQuery(getImages)

  return (
    <div className={classnames(className, { home: home })}>
      <Hero home={home} img={data.homeBg.childImageSharp.fluid}>
        <Portrait fluid={data.home_portrait.childImageSharp.fluid} />
        <Banner title="Debbie" info="A Gallery">
          <AniLink fade to="/collections" className="btn-white">
            explore collection
          </AniLink>
        </Banner>
        <div className="icons">
          {social.map((item, index) => (
            <a
              href={item.url}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </Hero>
      <main className="main">
        {children}
        <Footer />
      </main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default styled(Layout)`
  display: flex;
  flex-direction: column;

  .main {
    overflow: scroll;
    height: 100vh;
    background: var(--secondaryDark);
  }

  .icons a {
    display: inline-block;
    margin: 1rem;
    font-size: 1.2rem;
    color: var(--primaryText);
    transition: var(--mainTransition);
  }
  .icons a:hover {
    color: var(--primary);
  }

  .home {
    display: flex;
  }

  @media screen and (min-width: 980px) {
    display: grid;
    grid-template-columns: ${props => (props.home ? "2fr 1fr" : "1fr 2fr")};
  }
`
