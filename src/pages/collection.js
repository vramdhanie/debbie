import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import styled from "styled-components"
import Modal from "../components/modal"
const Collection = ({ location, className }) => {
  return (
    <Layout>
      <SEO title={location.state.collection} />
      <Header />
      <section className={className}>
        {location.state.pieces.map((piece, index) => (
          <Modal piece={piece} key={index} />
        ))}
      </section>
    </Layout>
  )
}

export default styled(Collection)``
