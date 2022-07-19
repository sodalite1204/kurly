import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useLocation, useSearchParams, useParams } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import Item from './Item/Item';

export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
};

const ProductList: React.FC = () => {
  const [isImageFocus, setIsImageFocus] = useState<boolean>(false);
  const { category } = useParams<{ category?: string }>();

  // const fetchByCategory = (category: string) => {
  //   return axios.get(`https://fakestoreapi.com/products/${category}`);
  // };

  const getProducts = async (category?: string): Promise<CartItemType[]> => {
    const { data } = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
    return data;
  };

  const { data, isLoading, error } = useQuery<CartItemType[]>(
    'products',
    () => getProducts(category || ''),
    { enabled: Boolean(category) }
  );
  if (data) {
    console.log('data:', data);
  }

  if (isLoading) {
    return <h2>로딩중</h2>;
  }
  if (error) {
    return <h2>에러입니다. 다시 시도해주세요!</h2>;
  }

  return (
    <Wrapper>
      <Box>
        {data?.map(productInfo => (
          <Item productInfo={productInfo} key={productInfo.id} />
        ))}
      </Box>
    </Wrapper>
  );
};

export default ProductList;

const Wrapper = styled.section`
  ${({ theme }) => theme.flexSet()}
`;

const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 1000px;
`;
// const ItemContainer = styled.article`
//   width: 293px;
//   margin: 20px;
// `;

// const ItemWrapper = styled.div`
//   height: 300px;
//   background-color: ${({ theme }) => theme.white};
//   box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
// `;

// const ItemImage = styled.img`
//   padding: 30px;
//   object-fit: contain;
// `;

// const ItemTitle = styled.h2`
//   margin: 10px 0;
//   color: ${({ theme }) => theme.brown};
//   font-size: 20px;
// `;

// const ItemPrice = styled(ItemTitle)`
//   font-size: 30px;
//   font-weight: 600;
// `;
