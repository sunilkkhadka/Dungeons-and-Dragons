import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch, RootState } from '../app/store';
import { fetchSpellByIndex } from '../features/spell/spellSlice';

import Icon from '../utils/icons';

function Spell() {
  const dispatch = useDispatch<AppDispatch>();
  const { index } = useParams<{ index: string }>();

  const { spellInfo } = useSelector((state: RootState) => state.spell);

  useEffect(() => {
    dispatch(fetchSpellByIndex(index));
  }, [dispatch, index]);

  console.log('spell info: ', spellInfo);

  return (
    <section>
      <Icon name="addBookmark" />
    </section>
  );
}

export default Spell;
