import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Form from "../components/contact/form"
import Header from "../components/header"

const Contact = ({ data }) => (
  <Layout>
    <SEO title="Contact" />
    <Header />
    <Form />
  </Layout>
)

export default Contact
