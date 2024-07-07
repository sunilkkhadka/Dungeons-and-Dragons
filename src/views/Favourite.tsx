import { Link } from 'react-router-dom';

import config from '../utils/env';
import useLocalStorage from '../hooks/useLocalStorage';

function Favourite() {
  const { getItem } = useLocalStorage();

  const spellIndexList = getItem(config.STORAGE_KEY);

  console.log(spellIndexList);

  return (
    <section>
      {spellIndexList.length > 0 ? (
        spellIndexList.map((spell: string) => (
          <Link to={`/spell/${spell}`}>{spell}</Link>
        ))
      ) : (
        <h1>Nothing in the list</h1>
      )}
    </section>
  );
}

export default Favourite;
