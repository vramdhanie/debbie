import React, { useState } from "react"
import styled from "styled-components"
import Img from "gatsby-image"

const Modal = ({ className, piece }) => {
  return (
    <div className={className}>
      <div className="backdrop">
        <div className="closebtn">x</div>
        <div className="content_wrapper">
          <Img fluid={piece.node.childImageSharp.fluid} />
        </div>
      </div>
    </div>
  )
}

export default styled(Modal)``
