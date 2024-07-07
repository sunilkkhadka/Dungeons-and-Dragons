type Spell = {
  index: string;
  name: string;
  level: number;
  url: string;
};

export type InitialSpellState = {
  count: number;
  results: Spell[];
};
