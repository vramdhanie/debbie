import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import styled from "styled-components"
import Modal from "../components/modal"
import Title from "../components/title"

const Collection = ({ location, className }) => {
  return (
    <Layout>
      <SEO title={location.state.collection} />
      <Header />
      <Title title={location.state.collection} />
      <section className={className}>
        {location.state.pieces.map((piece, index) => (
          <Modal piece={piece} key={index} />
        ))}
      </section>
    </Layout>
  )
}

export default styled(Collection)`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 5%;
  padding: 2rem;
  height: 100vh;
  overflow: auto;

  @media screen and (min-width: 980px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`
