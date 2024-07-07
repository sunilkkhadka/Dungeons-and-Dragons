import { FaBookmark, FaRegBookmark } from 'react-icons/fa';

const ICONS_MAP = {
  addBookmark: FaBookmark,
  removeBookmark: FaRegBookmark,
};

function Icon({ name }: { name: keyof typeof ICONS_MAP }) {
  const IconComponent = ICONS_MAP[name];
  return IconComponent ? <IconComponent /> : null;
}

export default Icon;
