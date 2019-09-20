import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Header from "../components/header"
import ArticleList from "../components/articleList"

const Article = ({ data }) => {
  console.log(data)
  const {
    mdx: { edges: articles },
  } = data

  return (
    <Layout>
      <Header />
      <ArticleList articles={articles} />
    </Layout>
  )
}

export default Article

export const query = graphql`
  query {
    articleBg: file(relativePath: { eq: "articles_bg.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    mdx: allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            slug
            date(formatString: "D MMMM YYYY")
            author
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          excerpt
        }
      }
    }
  }
`
