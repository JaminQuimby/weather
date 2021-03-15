import styled from 'styled-components';

export const CurrentTempContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 1.5rem;
  width: 25rem;

  @media (max-width: 800px) {
    margin: 2rem 0rem;
  }

  h4 {
    font-weight: 600;
    font-size: 1.25rem;
    color: #396bae;
    margin-bottom: 2rem;
  }
  span {
    font-weight: 200;
    font-size: 7rem;
    color: #4a6fa1;
    margin-left: 1.5rem;
    line-height: 1;
    sup {
      line-height: 0;
    }
  }
  h6 {
    font-size: 1.375rem;
    text-align: left;
    color: #7b98b2;
  }
`;
