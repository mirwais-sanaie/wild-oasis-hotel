import styled, { css } from "styled-components";

const Heading = styled.h1`
  /* ${(props) =>
    props.type === "h1"
      ? css`
          font-size: 5rem;
          font-weight: 900;
        `
      : css`
          font-size: 3rem;
        `} */

  ${(props) =>
    props.type === "h1" &&
    css`
      font-size: 5rem;
      font-weight: 900;
    `}
  ${(props) =>
    props.type == "h3" &&
    css`
      font-size: 1rem;
      font-weight: lighter;
    `}
    
    ${(props) =>
    props.type === "para" &&
    css`
      background-color: lightgreen;
      padding: 1rem;
      border-radius: 1rem;
    `}

  color: #333;
  font-weight: 900;
`;

export default Heading;
