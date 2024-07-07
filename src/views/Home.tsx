import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch, RootState } from '../app/store';
import { fetchAllSpells } from '../features/spell/spellSlice';

function Home() {
  const dispatch = useDispatch<AppDispatch>();
  const data = useSelector((state: RootState) => state.spell);

  console.log(data);

  useEffect(() => {
    dispatch(fetchAllSpells());
  }, [dispatch]);

  return <h1>Home Page</h1>;
}

export default Home;
