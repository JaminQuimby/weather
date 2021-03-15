import styled from 'styled-components';

export const SwitchContainer = styled.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 20px;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: 0.4s;
  border-radius: 55px;
  background-color: ${({ theme }) => theme.temperatureSwitch.backgroundColor};
  .on,
  .off {
    color: ${({ theme }) => theme.temperatureSwitch.textColor};
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    font-size: 1rem;
    font-weight: 500;
    display: flex;
    svg {
      width: 20px;
      fill: white;
    }
  }
  .on {
    padding-right: 15px;
  }
  .off {
    padding-left: 15px;
  }
`;
