import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <ul>
        <li>
          <Link to="/">Spell List</Link>
          <Link to="/favourites">My Favourite Spells</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
