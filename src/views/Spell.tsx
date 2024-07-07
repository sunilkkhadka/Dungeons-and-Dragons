import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch, RootState } from '../app/store';
import { fetchSpellByIndex } from '../features/spell/spellSlice';

import config from '../utils/env';
import Icon from '../utils/icons';
import useLocalStorage from '../hooks/useLocalStorage';

function Spell() {
  const dispatch = useDispatch<AppDispatch>();
  const { index } = useParams<{ index: string }>();
  const { setItem, verifySpellExistance, removeItem } = useLocalStorage();

  const [doesSpellExist, setDoesSpellExist] = useState(() => {
    return verifySpellExistance(config.STORAGE_KEY, index);
  });

  const { spellInfo: spell } = useSelector((state: RootState) => state.spell);

  useEffect(() => {
    dispatch(fetchSpellByIndex(index));
  }, [dispatch, index]);

  const handleToggleFavourites = () => {
    if (doesSpellExist) {
      setDoesSpellExist((prev) => !prev);
      removeItem(config.STORAGE_KEY, index);
    } else {
      setDoesSpellExist((prev) => !prev);
      setItem(config.STORAGE_KEY, index);
    }
  };

  return (
    <section className="spell__container">
      <div className="spell__intro">
        <div className="spell__intro-header">
          <div className="spell__name">{spell.name}</div>
          {doesSpellExist ? (
            <Icon name="addBookmark" onClick={handleToggleFavourites} />
          ) : (
            <Icon name="removeBookmark" onClick={handleToggleFavourites} />
          )}
        </div>
        <div className="spell__description">{spell.desc?.[0]}</div>
        <div className="spell__level">{spell.level}</div>
        <div className="spell__higher-level">{spell.higher_level}</div>
      </div>
      <div className="spell__attack-info">
        <div className="spell__attack-type">{spell.attack_type}</div>
        <div className="spell__attack-range">{spell.range}</div>
        <div className="spell__attack-casting-time">{spell.casting_time}</div>
        <div className="spell__attack-material">{spell.material}</div>
      </div>
      <div className="spell__damage-info">
        {spell.damage?.damage_type && (
          <div className="spell__damage-type">
            {spell.damage?.damage_type?.name}
          </div>
        )}
        {spell.damage?.damage_at_slot_level && (
          <div className="spell__damage-levels">
            {Object.entries(spell.damage?.damage_at_slot_level).map(
              (key, value) => (
                <p key={uuidv4()}>
                  {key}: {value}
                </p>
              )
            )}
          </div>
        )}
      </div>
      <div className="spell__school">{spell.school.name}</div>
      <div className="spell__classes">
        {spell.classes.map((spellClass) => (
          <p key={uuidv4()}>{spellClass.name}</p>
        ))}
      </div>
      <div className="spell__subclasses">
        {spell.subclasses.map((spellSubclass) => (
          <p key={uuidv4()}>{spellSubclass.name}</p>
        ))}
      </div>
    </section>
  );
}

export default Spell;
