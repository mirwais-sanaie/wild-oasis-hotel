import styled from "styled-components";
import GlobalStyle from "./styles/GlobalStyles";
import { Button } from "./styles/ButtonNew";
import Header from "./ui/Header";

const H1 = styled.h1`
  color: white;
  font-size: 24px;
  text-align: center;
  margin-top: 200px;
  padding: 20px;
  background: var(--color-yellow-700);
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: background 0.3s ease, color 0.3s ease;

  &:hover {
    background: #ddd;
    color: #333;
  }
`;

// const Button = styled.button`
//   background: blue;
//   color: white;
//   padding: 10px 20px;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
//   transition: background 0.3s ease;

//   &:hover {
//     background: #333;
//   }
// `;

const Input = styled.input`
  border: 1px solid gray;
  font-size: 16px;
  padding: 10px;
`;

const ContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color-brand-200);
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <ContainerStyle>
        <H1>Hello vite</H1>
        <Header type="h1">Hello world how are you</Header>
        <Header type="h3">Hello world how are you</Header>
        <Header as={"p"}>I am not h1</Header>
        <div>
          <Button variation="green" onClick={() => alert("Hello world")}>
            Get away
          </Button>
          <Button variation="green" onClick={() => alert("Hello world")}>
            Get away
          </Button>
        </div>
        <div>
          <Input placeholder="Enter your name" />
          <Input placeholder="Enter your email" />
        </div>
      </ContainerStyle>
    </>
  );
}

export default App;
