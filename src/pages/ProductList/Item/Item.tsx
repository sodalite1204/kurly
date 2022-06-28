import React from 'react';
import styled from 'styled-components';

const Item: React.FC = () => {
  return <ItemContainer>item</ItemContainer>;
};

const ItemContainer = styled.div`
  width: 400px;
  height: 500px;
  margin: 20px;
  background-color: green;
`;

export default Item;
