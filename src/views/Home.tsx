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
    <section className="home-page__container">
      <h1 className="home-page__count">Total Spells = {count}</h1>
      <div className="home-page__table-container">
        <table className="home-page__table">
          <thead>
            <tr>
              <th>Index</th>
              <th>Name</th>
              <th>Level</th>
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Home;
