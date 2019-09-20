import React from "react"
import CollectionCard from "./collectionCard"
import Title from "../title"
import styled from "styled-components"
import { graphql, useStaticQuery, Link } from "gatsby"

const getImages = graphql`
  query {
    landscapes: allFile(
      filter: { relativeDirectory: { eq: "paintings/landscapes" } }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(quality: 90, maxWidth: 800) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
    portraits: allFile(
      filter: { relativeDirectory: { eq: "paintings/portraits" } }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(quality: 90, maxWidth: 800) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
    jumbies: allFile(filter: { relativeDirectory: { eq: "jumbies" } }) {
      edges {
        node {
          childImageSharp {
            fluid(quality: 90, maxWidth: 800) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
    wall_hangings: allFile(
      filter: { relativeDirectory: { eq: "wall_hangings" } }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(quality: 90, maxWidth: 800) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`

const CollectionList = ({ className }) => {
  const data = useStaticQuery(getImages)
  console.log(data.landscapes)
  return (
    <section className={className}>
      <Title title="collections" />
      <div className="grid">
        <Link
          to="/collection"
          state={{ collection: "landscapes", pieces: data.landscapes.edges }}
        >
          <CollectionCard img={data.landscapes.edges[0]} title="Landscapes" />
        </Link>

        <Link
          to="/collection"
          state={{ collection: "portraits", pieces: data.portraits.edges }}
        >
          <CollectionCard img={data.portraits.edges[0]} title="Portraits" />
        </Link>

        <Link
          to="/collection"
          state={{ collection: "jumbies", pieces: data.jumbies.edges }}
        >
          <CollectionCard img={data.jumbies.edges[0]} title="Jumbies" />
        </Link>

        <Link
          to="/collection"
          state={{
            collection: "wall hangings",
            pieces: data.wall_hangings.edges,
          }}
        >
          <CollectionCard
            img={data.wall_hangings.edges[0]}
            title="Wall Hangings"
          />
        </Link>
      </div>
    </section>
  )
}

export default styled(CollectionList)`
  height: 100vh;

  @media screen and (min-width: 980px) {
    .grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }

  @media screen and (min-width: 1200px) {
    .grid {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }
`
