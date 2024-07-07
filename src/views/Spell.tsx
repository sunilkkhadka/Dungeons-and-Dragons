import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { AppDispatch, RootState } from '../app/store';
import { fetchSpellByIndex } from '../features/spell/spellSlice';

function Spell() {
  const dispatch = useDispatch<AppDispatch>();
  const { index } = useParams<{ index: string }>();

  const { spellInfo } = useSelector((state: RootState) => state.spell);

  useEffect(() => {
    dispatch(fetchSpellByIndex(index));
  }, [dispatch, index]);

  console.log('spell info: ', spellInfo);
  console.log('index: ', index);

  return <div>Spell</div>;
}

export default Spell;
