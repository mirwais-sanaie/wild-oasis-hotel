import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";
import Uploader from "../data/Uploader.jsx";

const StyledSideBar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 20px;
  grid-row: 1 / -1;
  border-right: 1px solid var(--color-grey-100);

  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

function Sidebar() {
  return (
    <StyledSideBar>
      <Logo />
      <MainNav />

      <Uploader />
    </StyledSideBar>
  );
}

export default Sidebar;
