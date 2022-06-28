import React, { useState } from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';

const ProductList: React.FC = () => {
  type CartItemType = {
    id: number;
    category: string;
    description: string;
    image: string;
    price: number;
    title: string;
  };

  const getProducts = async (): Promise<CartItemType[]> =>
    await (await fetch('https://fakestoreapi.com/products')).json();

  const { data, isLoading, error } = useQuery<CartItemType[]>('products', getProducts);
  // if (data) {
  //   return;
  // }

  if (isLoading) {
    return <h2>로딩중</h2>;
  }
  if (error) {
    return <h2>에러입니다. 다시 시도해주세요!</h2>;
  }

  return (
    <Wrapper style={{ backgroundColor: 'yellow', height: '2000px' }}>
      <Box>
        {data &&
          data.map(productInfo => (
            <ItemContainer key={productInfo.id}>
              <p>{productInfo.title}</p>
            </ItemContainer>
          ))}
      </Box>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${({ theme }) => theme.flexSet()}
`;

export default ProductList;

const Box = styled.div`
  display: flex;
  width: 1000px;
  flex-wrap: wrap;
`;

const ItemContainer = styled.div`
  width: 280px;
  height: 400px;
  margin: 20px;
  background-color: green;
`;
