import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const HeaderContainer = styled.header`
  height: 76px;
  width: 100%;
  border-bottom: 1px solid #555;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div<{ src: string }>`
  background-image: url(${(props) => props.src});
  background-size: cover;
  text-align: center;
  width: 180px;
  height: 70px;
  cursor: pointer;
`;

const ButtonContainer = styled.div``;

const Button = styled.button`
  all: unset;
  height: 100%;
  margin-right: 20px;
  font-weight: 700;
  cursor: pointer;
`;

const StyledLink = styled(Link)`
  all: unset;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <StyledLink to="/">
        <Logo src={logo} />
      </StyledLink>
      <ButtonContainer>
        <StyledLink to="/signin">
          <Button>로그인</Button>
        </StyledLink>
      </ButtonContainer>
    </HeaderContainer>
  );
};

export default Header;
