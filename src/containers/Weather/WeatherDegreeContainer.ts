import styled from 'styled-components';

export const WeatherDegreeContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 1.25rem;
  color: #3a86ca;
  margin-top: 0.8rem;
  margin-right: 2.5rem;
  svg {
    fill: ${({ theme }) => theme.smallIconColor};
    margin-right: 1rem;
  }
`;
