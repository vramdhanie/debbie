import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

const Portrait = ({ className, fluid }) => {
  return <Img fluid={fluid} className={className} />
}

export default styled(Portrait)`
  width: 20%;
  border-radius: 100%;
  box-shadow: var(--lightShadow);
`
