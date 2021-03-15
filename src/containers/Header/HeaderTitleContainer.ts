import styled from 'styled-components';

export const HeaderTitleContainer = styled.h1`
  color: ${({ theme }) => theme.appTitleColor};
  font-size: 2.2rem;
  -webkit-text-stroke: 1px #999; /* width and color */
  mix-blend-mode: difference;
  text-shadow: 2px 2px 5px #999;
`;
