import styled from "styled-components";
import logo from "../../imagens/logo.svg";

const LogoContainer = styled.div`
  display: flex;
  font-size: 30px;
`;

const LogoImg = styled.img`
  margin-right: 10px;
`;

function Logo() {
  return (
    <LogoContainer>
      <LogoImg className="logo-img" src={logo} alt="logo" />
      <p>
        <strong>Alura </strong>Books
      </p>
    </LogoContainer>
  );
}

export default Logo;
