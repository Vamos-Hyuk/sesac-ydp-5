import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
`;

export default function StyledComponent() {
  return (
    <StyledContainer>
      <div></div>
      <div></div>
      <div></div>
    </StyledContainer>
  );
}
