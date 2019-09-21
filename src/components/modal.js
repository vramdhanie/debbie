import React, { useState } from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import classnames from "classnames"
import { MdClose } from "react-icons/md"

const Modal = ({ className, piece }) => {
  const [open, setOpen] = useState(false)

  const clickImage = value => {
    setOpen(value)
  }

  return (
    <div className={className}>
      <div
        className={classnames("backdrop", { open: open })}
        onClick={e => {
          e.stopPropagation()
          clickImage(false)
        }}
      >
        <div className="closebtn">
          <MdClose />
        </div>
        <div
          className="content_wrapper"
          onClick={e => {
            e.stopPropagation()
            clickImage(true)
          }}
        >
          <Img fluid={piece.node.childImageSharp.fluid} />
        </div>
      </div>
    </div>
  )
}

export default styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  .backdrop {
    width: 100%;
    height: 100%;
  }

  .closebtn {
    display: none;
  }

  .content_wrapper {
    position: relative;
    cursor: pointer;
    z-index: 1;
  }

  .content_wrapper img {
    width: 100%;
    display: block;
    box-shadow: var(--lightShadow);
    border-radius: 6px;
  }
  .content_wrapper div {
    box-shadow: var(--lightShadow);
  }

  .content_wrapper div:hover {
    box-shadow: var(--darkShadow);
  }

  .open {
    background: rgba(0, 0, 0, 0.8);
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
  }

  .open .content_wrapper {
    width: 50%;
    z-index: 1000;
  }

  .open .closebtn {
    display: block;
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    font-size: 3rem;
    color: var(--primaryLight);
    border: solid 2px var(--primaryLight);
    border-radius: 100%;
    z-index: 1000;
    text-shadow: 2px 2px 5px rgba(255, 255, 255, 0.8);
  }
`
