import styled from "styled-components";
import Link from "next/link";
import DropDownMenu from "../dropDown/dropDownExample";
const Nav = styled.nav`
  background-color: black;
  width: 100%;
  height: 80px;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledLink = styled.a`
  font-weight: bold;
  padding: 0 2rem;
  font-size: 20px;
  margin: 0 20px;
  width: auto;
`;
const Navbar = () => {
  return (
    <Nav>
      <Link href={"/"}>
        <StyledLink>Home</StyledLink>
      </Link>

      <div>
        <Link href={"/Design"}>
          <StyledLink>Design</StyledLink>
        </Link>
        <Link href={"/"}>
          <StyledLink>About</StyledLink>
        </Link>
        <Link href={"/"}>
          <StyledLink>Docs</StyledLink>
        </Link>
      </div>
    </Nav>
  );
};

export default Navbar;
