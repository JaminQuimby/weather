import styled from 'styled-components';

export const SliderContainer = styled.div`
  position: absolute;
  height: 16px;
  width: 18px;
  left: 2px;
  top: 2px;
  background-color: ${({ theme }) => theme.temperatureSwitch.sliderColor};
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 44px;
`;
