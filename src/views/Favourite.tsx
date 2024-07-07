import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';

import config from '../utils/env';
import useLocalStorage from '../hooks/useLocalStorage';

function Favourite() {
  const { getItem } = useLocalStorage();

  const spellIndexList = getItem(config.STORAGE_KEY);

  return (
    <section className="favourite__container">
      <h1>❤️ Favourites</h1>
      {spellIndexList.length > 0 ? (
        <table className="home-page__table">
          <thead>
            <tr>
              <th>Index</th>
            </tr>
          </thead>
          <tbody>
            {spellIndexList.map((spell: string) => (
              <tr>
                <td>
                  <Link key={uuidv4()} to={`/spell/${spell}`}>
                    {spell}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h1>Nothing in the list</h1>
      )}
    </section>
  );
}

export default Favourite;
