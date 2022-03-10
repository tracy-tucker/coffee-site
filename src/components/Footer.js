import React from "react"
import styled from "styled-components"

const Footer = () => {
  return (
    <Wrapper>
      <p>
        &copy; {new Date().getFullYear()} Tracy Tucker. All rights reserved.
        Built with Gatsby and Airtable
      </p>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 5rem;
  display: grid;
  place-items: center;
  padding: 1rem;
  p {
    color: var(--clr-white);
    margin-bottom: 0;
    @media (max-width: 576px) {
      font-size: 0.75rem;
    }
  }
`

export default Footer
