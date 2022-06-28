import React from 'react';
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
  console.log(data);

  if (isLoading) {
    return <h2>로딩중</h2>;
  }
  if (error) {
    return <h2>에러입니다. 다시 시도해주세요!</h2>;
  }

  return <Wrapper style={{ backgroundColor: 'yellow', height: '2000px' }}>start</Wrapper>;
};

export default ProductList;

const Wrapper = styled.div``;
