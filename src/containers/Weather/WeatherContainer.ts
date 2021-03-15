import styled from 'styled-components';

export const WeatherContainer = styled.div`
    background-color: ${({ theme }) => theme.panelBgColor};
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    padding: 1.5rem 2rem;
    display: flex;
    flex-direction: column;
`;
