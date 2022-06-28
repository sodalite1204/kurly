import React from 'react';
import styled from 'styled-components';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <div>
        <LoginBox>
          <p>로그인</p>
        </LoginBox>
        <Logo>kurly</Logo>
      </div>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  ${({ theme }) => theme.flexSet()}
  padding: 20px;
  background-color: ${({ theme }) => theme.white};
`;

const LoginBox = styled.div`
  width: 1000px;
  text-align: right;
`;

const Logo = styled.h1`
  color: ${({ theme }) => theme.deepIvory};
  text-align: center;
  font-size: 50px;
`;

export default Header;
