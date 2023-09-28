import { default as HomeIcon } from './home.svg';
import { default as SettingsIcon } from './settings.svg';

const Icons = {
  home: HomeIcon,
  settings: SettingsIcon,
};

export type IconsName = keyof typeof Icons;

export default Icons;
