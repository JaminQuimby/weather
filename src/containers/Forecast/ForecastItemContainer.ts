import styled from 'styled-components';


export const ForecastItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
  h6 {
    font-weight: 600;
    font-size: 1.125rem;
    color: #4581c5;
  }
  svg {
    width: 4rem;
    height: 4rem;
    margin: 0.7rem 0;
  }
  p {
    font-weight: 600;
    font-size: 1.125rem;
    color: #4a6fa1;
  }
  span {
    font-size: 1.125rem;
    color: #4a6fa1;
    width: 5rem;
    text-align: center;
  }
`;
