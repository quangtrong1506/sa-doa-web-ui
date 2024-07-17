interface IHistory {
  id: string;
  keyword: string;
  date: string;
}
const getAllSearchHistory = () => {
  const history = localStorage.getItem('searchHistory');
  if (history) {
    return (JSON.parse(history) as IHistory[]).sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  }
  return [];
};
const getSearchHistory = (maxHistory: number = 10) => {
  return getAllSearchHistory().splice(0, maxHistory);
};
const createNewSearchHistory = (keyword: string) => {
  const currentHistory = getAllSearchHistory();
  const newHistory: IHistory[] = [...currentHistory];
  const itemIdex = newHistory.findIndex((history) => history.keyword === keyword);
  if (itemIdex === -1)
    newHistory.push({
      id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      keyword,
      date: new Date().toISOString(),
    });
  else newHistory.splice(itemIdex, 1);
  localStorage.setItem('searchHistory', JSON.stringify(newHistory));
};
const deleteSearchHistory = (id: string) => {
  const currentHistory = getAllSearchHistory();
  const updatedHistory = currentHistory.filter((history) => history.id !== id);
  localStorage.setItem('searchHistory', JSON.stringify(updatedHistory));
};
const getThemeMode = () => {
  return localStorage.getItem('themeMode') || 'light';
};
const setThemeMode = (mode: 'light' | 'dark') => {
  localStorage.setItem('themeMode', mode);
};
const LOCAL = {
  getSearchHistory,
  createNewSearchHistory,
  getThemeMode,
  setThemeMode,
  deleteSearchHistory,
};
export { getSearchHistory };
export type { IHistory };
export default LOCAL;
