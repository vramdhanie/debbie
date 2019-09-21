import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

const CollectionCard = ({ className, img, title }) => {
  return (
    <div className={className}>
      <Img className="img" fluid={img.node.childImageSharp.fluid} />
      <div className="title">{title}</div>
    </div>
  )
}

export default styled(CollectionCard)`
  width: 90%;
  margin: 0 auto;
  position: relative;
  margin-top: 2rem;
  .img {
    height: 200px;
    width: 100%;
    background-position: center;
    background-size: cover;
    opacity: 1 !important;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    box-shadow: var(--lightShadow);
  }
  .img:hover {
    box-shadow: var(--darkShadow);
  }

  .title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-decoration: none;
    font-size: 2rem;
    font-weight: bold;
    color: var(--primaryDark);
    text-shadow: 2px 2px 9px rgba(255, 255, 255, 1);
  }

  .title:hover {
    color: var(--secondaryDark);
  }
`
