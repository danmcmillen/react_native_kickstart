import React, { createContext, useContext, useEffect, useState } from 'react';
import { useColorScheme } from 'react-native';
import { lightTheme, darkTheme, Theme } from './themes';

interface ThemeContextType {
  theme: Theme;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: lightTheme,
});

export const useTheme = () => useContext(ThemeContext);

interface ThemeProviderProps {
  children: React.ReactNode;
  testID?: string;
}
export const ThemeProvider = (props: ThemeProviderProps) => {
  const colorScheme = useColorScheme();
  const [theme, setTheme] = useState<Theme>(
    colorScheme === 'dark' ? darkTheme : lightTheme
  );

  useEffect(() => {
    setTheme(colorScheme === 'dark' ? darkTheme : lightTheme);
  }, [colorScheme]);

  return (
    <ThemeContext.Provider value={{ theme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
