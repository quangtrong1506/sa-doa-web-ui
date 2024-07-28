import { MyHistory } from '@/data/datasource/model/MyHistory';


const HISTORY_KEY = 'searchHistory';

const getAllSearchHistory = () => {
  const history = localStorage.getItem(HISTORY_KEY);
  if (history) {
    return (JSON.parse(history) as MyHistory[]).sort((a, b) => {
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
  const newHistory: MyHistory[] = [...currentHistory];
  const itemIdex = newHistory.findIndex((history) => history.keyword === keyword);
  if (itemIdex === -1) {
    newHistory.push({
      id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      keyword,
      date: new Date().toISOString(),
    });
  } else {
    newHistory[itemIdex] = { ...newHistory[itemIdex], date: new Date().toISOString() };
  }
  localStorage.setItem(HISTORY_KEY, JSON.stringify(newHistory));
};
const deleteSearchHistory = (id: string) => {
  const currentHistory = getAllSearchHistory();
  const updatedHistory = currentHistory.filter((history) => history.id !== id);
  localStorage.setItem(HISTORY_KEY, JSON.stringify(updatedHistory));
};
const clearSearchHistory = () => {
  localStorage.removeItem(HISTORY_KEY);
};

const HistoryRepository = {
  getAllSearchHistory,
  getSearchHistory,
  createNewSearchHistory,
  deleteSearchHistory,
  clearSearchHistory,
};

export {HistoryRepository}