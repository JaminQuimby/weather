import styled from 'styled-components';


export const SearchInputContainer = styled.input`
  flex: 1;
  margin-left: 1rem;
  height: 3.25rem;
  border: none;
  background-color: ${({ theme }) => theme.panelBgColor};
  font-size: 1.125rem;
  color: ${({ theme }) => theme.searchInput.color};
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${({ theme }) => theme.searchInput.placeholderColor};
  }
`;
