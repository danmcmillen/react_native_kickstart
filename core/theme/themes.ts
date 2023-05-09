export type Theme = typeof lightTheme;

export const paletteDark = {
  background: '#000000',
  primary: '#FFFFFF',
  secondary: '#9C9C9C',
  danger: '#FF0000',
  dangerText: '#FFFFFF',
};

export const paletteLight = {
  background: '#FFFFFF',
  primary: '#000000',
  secondary: '#9C9C9C',
  danger: '#FF0000',
  dangerText: '#FFFFFF',
};

export const fontSizes = {
  small: 22,
  medium: 32,
  large: 42,
};

export const spacing = {
  small: 8,
  medium: 16,
  large: 24,
};

const container = {
  flex: 1,
  paddingHorizontal: spacing.medium,
};

const h1 = {
  fontSize: fontSizes.large,
  fontWeight: 'bold',
};

const h2 = {
  fontSize: fontSizes.medium,
};

const textInput = {
  fontSize: fontSizes.small,
  width: '60%',
  borderWidth: 1,
  borderRadius: 5,
  padding: spacing.small,
};

export const lightTheme = {
  ...paletteLight,
  fontSizes,
  spacing,
  container: { ...container, backgroundColor: paletteLight.background },
  h1: { ...h1, color: paletteLight.primary },
  h2: { ...h2, color: paletteLight.primary },
  textInput: {
    ...textInput,
    color: paletteLight.primary,
    borderColor: paletteLight.primary,
  },
};

export const darkTheme = {
  ...paletteDark,
  fontSizes,
  spacing,
  container: { ...container, backgroundColor: paletteDark.background },
  h1: { ...h1, color: paletteDark.primary },
  h2: { ...h2, color: paletteDark.primary },
  textInput: {
    ...textInput,
    color: paletteDark.primary,
    borderColor: paletteDark.primary,
  },
};
