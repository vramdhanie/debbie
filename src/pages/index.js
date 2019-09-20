import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Banner from "../components/banner"
import Featured from "../components/home/featured"
import Title from "../components/title"
import Portrait from "../components/portrait"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { graphql } from "gatsby"
import styled from "styled-components"

const IndexPage = ({ data, className }) => (
  <Layout>
    <SEO title="Home" />
    <div className={className}>
      <Hero home="true" img={data.homeBg.childImageSharp.fluid}>
        <Portrait fluid={data.home_portrait.childImageSharp.fluid} />
        <Banner title="Debbie" info="A Gallery">
          <AniLink fade to="/articles" className="btn-white">
            explore collection
          </AniLink>
        </Banner>
      </Hero>
      <Featured title="Featured Items">
        <Title title="Featured" subtitle="Items" />
        We can place anything here
      </Featured>
    </div>
  </Layout>
)

export default styled(IndexPage)`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 980px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
  }
`

export const query = graphql`
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
