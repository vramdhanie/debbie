import React from "react"
import styled from "styled-components"
const Featured = ({ className, children }) => {
  return (
    <section className={className}>
      <div className="centre">
        <div className="content">{children}</div>
      </div>
    </section>
  )
}

export default styled(Featured)`
  height: 100vh;
  padding-top: 2rem;
  color: var(--primaryText);
  overflow: auto;
  .centre {
    width: 90%;
    max-width: 800px;
    margin: 0 auto;
  }

  .content {
    font-size: 1.2rem;
  }

  .author {
    text-align: right;
  }

  @media screen and (min-width: 980px) {
    flex: 1;
  }
`
