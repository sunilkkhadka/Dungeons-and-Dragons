import { FaHome, FaBookmark, FaRegBookmark } from 'react-icons/fa';

interface IconProps {
  name: keyof typeof ICONS_MAP;
  style?: {
    [key: string]: string | number;
  };
}

const ICONS_MAP = {
  home: FaHome,
  addBookmark: FaBookmark,
  removeBookmark: FaRegBookmark,
};

function Icon({ name, style }: IconProps) {
  const IconComponent = ICONS_MAP[name];
  return IconComponent ? <IconComponent style={style} /> : null;
}

export default Icon;
