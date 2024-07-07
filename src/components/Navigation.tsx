import { Link } from 'react-router-dom';

import dndLogo from '../../public/dnd-logo.png';

import Icon from '../utils/icons';

function Navigation() {
  return (
    <nav className="navigation__container">
      <div className="navigation__logo">
        <img src={dndLogo} alt="Dungeons and dragons logo" />
      </div>
      <ul className="navigation__links">
        <li>
          <Link to="/" className="navigation__link">
            {window.innerWidth < 768 ? (
              <Icon name="home" style={{ fontSize: 20 }} />
            ) : (
              'Spell List'
            )}
          </Link>
        </li>
        <li>
          <Link to="/favourites" className="navigation__link">
            {window.innerWidth < 768 ? (
              <Icon style={{ fontSize: 20 }} name="addBookmark" />
            ) : (
              'My Favourite Spells'
            )}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
