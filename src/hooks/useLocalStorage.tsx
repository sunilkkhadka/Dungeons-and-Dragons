const useLocalStorage = () => {
  function getItem(key: string) {
    const data = localStorage.getItem(key);
    if (!data) return [];

    const indexList: string[] = JSON.parse(data);
    return indexList;
  }

  function setItem(key: string, spellIndex = '') {
    const indexList = getItem(key);

    if (indexList.includes(spellIndex)) {
      return;
    }

    localStorage.setItem(key, JSON.stringify([...indexList, spellIndex]));
  }

  function removeItem(key: string, spellIndex = '') {
    const indexList = getItem(key);

    if (indexList.includes(spellIndex)) {
      const filteredItem = indexList.filter(
        (item: string) => spellIndex !== item
      );
      localStorage.setItem(key, JSON.stringify(filteredItem));
    }
  }

  function verifySpellExistance(key: string, spellIndex = '') {
    const indexList = getItem(key);

    if (indexList.includes(spellIndex)) {
      return true;
    }

    return false;
  }

  return {
    setItem,
    getItem,
    removeItem,
    verifySpellExistance,
  };
};

export default useLocalStorage;
