import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-toastify';
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
      toast('Item Removed Successfully', { type: 'info' });
    } else {
      setDoesSpellExist((prev) => !prev);
      setItem(config.STORAGE_KEY, index);
      toast('Item Added Successfully', { type: 'success' });
    }
  };

  return (
    <section className="spell__container">
      <div className="spell__intro">
        <div className="spell__intro-header">
          <div className="spell__name"> 🚀 {spell.name}</div>
          {doesSpellExist ? (
            <Icon
              style={{
                fontSize: '2rem',
                color: 'gold',
                cursor: 'pointer',
                marginBottom: '1rem',
              }}
              name="addBookmark"
              onClick={handleToggleFavourites}
            />
          ) : (
            <Icon
              style={{
                fontSize: '2rem',
                cursor: 'pointer',
                marginBottom: '1rem',
              }}
              name="removeBookmark"
              onClick={handleToggleFavourites}
            />
          )}
        </div>
        <div className="spell__level">Level : {spell.level}</div>
        <div className="spell__description">{spell.desc?.[0]}</div>
        <div className="spell__higher-level">{spell.higher_level}</div>
      </div>
      <div className="spell__attack-info">
        <h1>🎯 Attack Info</h1>
        <div className="spell__attack-type">Type: {spell.attack_type}</div>
        <div className="spell__attack-range">Range: {spell.range}</div>
        <div className="spell__attack-casting-time">
          Casting Time: {spell.casting_time}
        </div>
        <div className="spell__attack-material">
          Spell Material: {spell.material}
        </div>
      </div>
      <div className="spell__damage-info">
        <h1>🧨 Damage Info</h1>
        {spell.damage?.damage_type && (
          <li className="spell__damage-type">
            Damage Type: {spell.damage?.damage_type?.name}
          </li>
        )}
        {spell.damage?.damage_at_slot_level && (
          <div className="spell__damage-levels">
            <h1>☢️ Damage Levels</h1>
            <ul>
              {Object.entries(spell.damage?.damage_at_slot_level).map(
                (key, value) => (
                  <li key={uuidv4()}>
                    {key}: {value}
                  </li>
                )
              )}
            </ul>
          </div>
        )}
      </div>
      <div className="spell__school">
        <h1>🏰 School Name</h1>
        {spell.school.name}
      </div>
      <div className="spell__classes">
        <h1>🔖 Classes</h1>
        <ul>
          {spell.classes.map((spellClass) => (
            <li key={uuidv4()}>{spellClass.name}</li>
          ))}
        </ul>
      </div>
      <div className="spell__subclasses">
        <h1>🔖 Sub-Classes</h1>
        <ul>
          {spell.subclasses.map((spellSubclass) => (
            <li key={uuidv4()}>{spellSubclass.name}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Spell;
