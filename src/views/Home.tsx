import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch, RootState } from '../app/store';
import { fetchAllSpells } from '../features/spell/spellSlice';

function Home() {
  const dispatch = useDispatch<AppDispatch>();
  const { count, results: spellsList } = useSelector(
    (state: RootState) => state.spell
  );

  useEffect(() => {
    if (spellsList.length === 0) {
      dispatch(fetchAllSpells());
    }
  }, [dispatch, spellsList.length]);

  return (
    <main>
      <h1>Total Spells = {count}</h1>
      <table>
        <thead>
          <tr>
            <td>Index</td>
            <td>Name</td>
            <td>Level</td>
            <td>URL</td>
          </tr>
        </thead>
        <tbody>
          {spellsList?.map((spell) => (
            <tr key={spell.index}>
              <td>{spell.index}</td>
              <td>
                <Link to={`/spell/${spell.index}`}>{spell.name}</Link>
              </td>
              <td>{spell.level}</td>
              <td>{spell.url}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}

export default Home;
