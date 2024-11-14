import { createContext, useState, useContext, useEffect } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [language, setLanguage] = useState('en');
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('favorites');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (id) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'jp' : 'en');
  };

  return (
    <AppContext.Provider value={{
      language,
      toggleLanguage,
      favorites,
      toggleFavorite
    }}>
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => useContext(AppContext);