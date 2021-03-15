import React from 'react';
import { ReactComponent as GithubIcon } from '../../assets/github.svg';
import { GithubButton } from "../../containers/Header/HeaderButtons";
import { HeaderTitleContainer } from "../../containers/Header/HeaderTitleContainer";
import { HeaderIconsContainer } from "../../containers/Header/HeaderIconsContainer";
import { HeaderContainer } from "../../containers/Header/HeaderContainer";
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from '../../store/actions/app';
import DarkModeToggle from 'react-dark-mode-toggle';
import { AppStore } from '../../store/appStore';

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state: AppStore) => state.app.darkMode);

  return (
    <HeaderContainer>
      <HeaderTitleContainer>Just Another Weather App</HeaderTitleContainer>
      <HeaderIconsContainer>
        <DarkModeToggle checked={isDarkMode} onChange={() => dispatch(toggleDarkMode())} size={60} />
        <GithubButton href="http://www.github.com/jaminquimby">
          <GithubIcon />
        </GithubButton>
      </HeaderIconsContainer>
    </HeaderContainer>
  );
};

export default Header;
