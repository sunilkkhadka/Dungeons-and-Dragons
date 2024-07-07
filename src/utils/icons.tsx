import { FaHome, FaBookmark, FaRegBookmark } from 'react-icons/fa';

interface IconProps {
  name: keyof typeof ICONS_MAP;
  onClick?: () => void;
  style?: {
    [key: string]: string | number;
  };
}

const ICONS_MAP = {
  home: FaHome,
  addBookmark: FaBookmark,
  removeBookmark: FaRegBookmark,
};

function Icon(props: IconProps) {
  const { name, style, onClick } = props;

  const IconComponent = ICONS_MAP[name];

  return IconComponent ? (
    <IconComponent style={style} onClick={onClick} />
  ) : null;
}

export default Icon;
