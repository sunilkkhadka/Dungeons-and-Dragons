type Spell = {
  index: string;
  name: string;
  level: number;
  url: string;
};

export interface SpellInfo extends Spell {
  desc: string[];
  higher_level: string[];
  range: string;
  components: string[];
  material: string;
  ritual: boolean;
  duration: string;
  concentration: boolean;
  casting_time: string;
  attack_type: string;
  damage: {
    damage_type: {
      index: string;
      name: string;
      url: string;
    };
    damage_at_slot_level: {
      [key: string]: string;
    };
  };
  school: {
    index: string;
    name: string;
    url: string;
  };
  classes: {
    index: string;
    name: string;
    url: string;
  }[];
  subclasses: {
    index: string;
    name: string;
    url: string;
  }[];
}

export type InitialSpellState = {
  count: number;
  results: Spell[];
  spellInfo: SpellInfo;
};
