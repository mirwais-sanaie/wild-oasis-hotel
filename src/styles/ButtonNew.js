import styled from "styled-components";

export const Button = styled.button`
  background-color: ${(props) =>
    props.variation === "green" ? "#2ecc71" : "#e74c3c"};

  color: ${(props) => (props.variation === "green" ? "#fff" : "black")};
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: ${(props) =>
      props.variation === "green" ? "#27ae60" : "#c0392b"};
  }
`;
