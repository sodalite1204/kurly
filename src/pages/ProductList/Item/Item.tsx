import React from 'react';
import styled from 'styled-components';
import { CartItemType } from '../ProductList';

type Props = {
  productInfo: CartItemType;
};

const Item: React.FC<Props> = ({ productInfo }) => {
  const { id, image, price, title } = productInfo;
  console.log('test');

  return (
    <ItemContainer key={id}>
      <ItemWrapper>
        <ItemImage src={image} alt="상품" />
      </ItemWrapper>
      <ItemPrice>${price}</ItemPrice>
      <ItemTitle>{title}</ItemTitle>
    </ItemContainer>
  );
};

const ItemContainer = styled.article`
  width: 293px;
  margin: 20px;
`;

const ItemWrapper = styled.div`
  height: 300px;
  background-color: ${({ theme }) => theme.white};
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
`;

const ItemImage = styled.img`
  padding: 30px;
  object-fit: contain;
`;

const ItemTitle = styled.h2`
  margin: 10px 0;
  color: ${({ theme }) => theme.brown};
  font-size: 20px;
`;

const ItemPrice = styled(ItemTitle)`
  font-size: 30px;
  font-weight: 600;
`;

export default Item;
