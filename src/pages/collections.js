import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import styled from "styled-components"
import CollectionList from "../components/collections/collectionList"

const Collections = ({ className }) => (
  <Layout>
    <SEO title="Collections" />
    <Header />
    <CollectionList />
  </Layout>
)

export default styled(Collections)``
