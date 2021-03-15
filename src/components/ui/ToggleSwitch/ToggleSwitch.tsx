import React from 'react';
import { SliderContainer } from './SliderContainer';
import { SwitchContainer } from './SwitchContainer';

interface IToggleSwitchProps {
  onClick: Function;
}

const ToggleSwitch: React.FC<IToggleSwitchProps> = (props) => {
  const [toggled, setToggled] = React.useState(false);

  return (
    <SwitchContainer
      onClick={() => {
        setToggled((checked) => !checked);
        props.onClick();
      }}
    >
      {toggled && <span className="on">C</span>}
      {!toggled && <span className="off">F</span>}
      <SliderContainer style={{ transform: toggled ? ' translateX(28px)' : ' translateX(0px)' }}></SliderContainer>
    </SwitchContainer>
  );
};

export default ToggleSwitch;
