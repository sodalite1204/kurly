import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';
import { HiLocationMarker, HiMenu } from 'react-icons/hi';
import { BsFillCartFill } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';

const MenuNav: React.FC = () => {
  const navigate = useNavigate();

  // const getMenuList = (category: string) => {
  //   navigate(`/products/category/${category}`);
  // };
  return (
    <NavContainer>
      <NavWrapper>
        <StickyNav>
          <CategoryBar>
            <CategoryList>
              {CATEGORY_DATA.map((category: string, index: number) => {
                const isAll: boolean = category === 'all';
                return (
                  <Link to={`/products/category/${category}`} key={category + index}>
                    <CategoryName>
                      <MenuBox>
                        {isAll && <MenuIcon isAll={category === 'all'} />}
                        {category}
                      </MenuBox>
                    </CategoryName>
                  </Link>
                );
              })}
            </CategoryList>
          </CategoryBar>
          <NavSearch>
            <SearchInput type="text" placeholder="검색어를 입력해주세요" />
            <SearchButton />
          </NavSearch>
          <NavIcon>
            <LocationIcon />
            <CartIcon />
          </NavIcon>
        </StickyNav>
      </NavWrapper>
    </NavContainer>
  );
};

const NavContainer = styled.div`
  ${({ theme }) => theme.flexSet()};
  position: sticky;
  top: 0;
  z-index: 1;
  min-width: 1050px;
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.white};
`;

const NavWrapper = styled.nav`
  width: 100%;
  max-width: 1010px;
`;

const StickyNav = styled.div`
  ${({ theme }) => theme.flexSet('space-between', 'center')};
`;

const CategoryBar = styled.div`
  ${({ theme }) => theme.flexSet()};
`;

const CategoryList = styled.ul`
  ${({ theme }) => theme.flexSet()};
`;

const CategoryName = styled.li`
  padding: 10px 20px;
  color: ${({ theme }) => theme.brown};
  font-size: 20px;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.deepIvory};
    border-bottom: 2px solid ${({ theme }) => theme.deepIvory};
  }
`;

const MenuBox = styled.div`
  ${({ theme }) => theme.flexSet()};
`;

const MenuIcon = styled(HiMenu)<{ isAll: boolean }>`
  margin-right: ${({ isAll }) => (isAll ? '10px' : '')};
`;

const NavSearch = styled.div`
  ${({ theme }) => theme.flexSet()};
  border-radius: 30px;
  background-color: ${({ theme }) => theme.ivory};
`;

const SearchInput = styled.input`
  width: 200px;
  padding: 10px 20px;
  color: ${({ theme }) => theme.brown};
  font-size: 15px;

  &::placeholder {
    color: ${({ theme }) => theme.deepIvory};
  }
`;

const SearchButton = styled(BiSearch)`
  width: 20px;
  margin-right: 10px;
  color: ${({ theme }) => theme.brown};
  font-size: 25px;
  cursor: pointer;
`;

const NavIcon = styled.div`
  ${({ theme }) => theme.flexSet()};
  font-size: 30px;
`;

const LocationIcon = styled(HiLocationMarker)`
  margin-right: 15px;
  color: ${({ theme }) => theme.brown};

  &:hover {
    color: ${({ theme }) => theme.deepIvory};
  }
`;

const CartIcon = styled(BsFillCartFill)`
  color: ${({ theme }) => theme.brown};

  &:hover {
    color: ${({ theme }) => theme.deepIvory};
  }
`;

export default MenuNav;

const CATEGORY_DATA: Array<string> = [
  'all',
  "men's clothing",
  "women's clothing",
  'jewelery',
  'electronics',
];
