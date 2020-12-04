import styled from "styled-components";
import Logo from "./Logo";
import Searchbar from "./Searchbar";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 2em;
`;

function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <Searchbar />
    </HeaderContainer>
  );
}

export default Header;
