import styled from 'styled-components';


export const SearchElementContainer = styled.div`
  position: relative;
  height: 3.25rem;
  border-radius: 26px;
  background: ${({ theme }) => theme.panelBgColor};
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
  margin-bottom: 1.4rem;
  display: flex;
  align-items: center;
  z-index: 1;
`;
