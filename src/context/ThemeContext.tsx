import React, { createContext, useContext, useEffect, useState } from 'react';

type ThemeMode = 'night' | 'day';

interface ThemeContextType {
  theme: ThemeMode;
  isDay: boolean;
  isNight: boolean;
  toggleTheme: () => void;
  setTheme: (mode: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<ThemeMode>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('zentro_theme') as ThemeMode | null;
      if (saved === 'day' || saved === 'night') {
        return saved;
      }
    }
    return 'night';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'day') {
      root.classList.add('day-mode');
      root.classList.remove('night-mode');
      root.setAttribute('data-theme', 'day');
      document.body.style.backgroundColor = '#F8FAFC';
      document.body.style.color = '#0F172A';
    } else {
      root.classList.add('night-mode');
      root.classList.remove('day-mode');
      root.setAttribute('data-theme', 'night');
      document.body.style.backgroundColor = '#071A36';
      document.body.style.color = '#F1F5F9';
    }
    localStorage.setItem('zentro_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setThemeState(prev => (prev === 'night' ? 'day' : 'night'));
  };

  const setTheme = (mode: ThemeMode) => {
    setThemeState(mode);
  };

  return (
    <ThemeContext.Provider value={{
      theme,
      isDay: theme === 'day',
      isNight: theme === 'night',
      toggleTheme,
      setTheme
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
