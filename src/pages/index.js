import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Featured from "../components/home/featured"
import Title from "../components/title"
import styled from "styled-components"

const IndexPage = ({ className }) => (
  <Layout home="true">
    <SEO title="Home" />

    <Featured title="Featured Items">
      <Title title="Welcome" subtitle="" />
      <blockquote>
        As I look around my studio and survey the sculpture, paintings and
        wall-hangings produced over the years, I realize that my unconscious
        motivation has always been to share with the world all the love I feel
        for people, for nature, for all of God’s creation. When I look at the
        pieces, I am filled with gratitude for the privilege of expressing that
        love in this way, and I remember again that ‘gifts’ are meant to be
        shared. Embarking upon this website/blogging venture is one way to do
        that. I hope visitors here will feel rested or intrigued or joyful —
        however the work may affect you. It is all still such a mysterious
        process and language of the soul, as are all the arts, and that is one
        reason why they are vital to our human experience.
        <div className="author">- Enjoy</div>
      </blockquote>
    </Featured>
  </Layout>
)

export default styled(IndexPage)`
  font-size: 1.4rem;
`
