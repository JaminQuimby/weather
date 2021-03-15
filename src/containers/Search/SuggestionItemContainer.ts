import styled from 'styled-components';

export const SuggestionItemContainer = styled.a`
  color: #2079c9;
  text-decoration: none;
  padding: 0.6rem 1rem;
  display: block;
  text-align: left;
  border-bottom: 1px dotted ${({ theme }) => theme.searchSuggestion.seperatorLineColor};
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.searchSuggestion.hoverBackgroundColor};
  }
`;
