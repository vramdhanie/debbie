import React from "react"
import styled from "styled-components"

const Logo = ({ className }) => {
  return (
    <div className={className}>
      <div className="main_Text">
        Deborah
        <span className="main_highlight">Eckert</span>
      </div>
      <div className="sub_text">Artist</div>
    </div>
  )
}

export default styled(Logo)`
  text-decoration: none !important;
  color: var(--primaryLight);
  font-weight: 400;
  font-size: 2rem;

  .sub_text {
    font-size: 1rem;
    font-weight: 300;
    text-align: right;
    text-decoration: none;
  }

  .main_highlight {
    color: var(--secondary);
  }
`
