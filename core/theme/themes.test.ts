import {
  lightTheme,
  darkTheme,
  paletteLight,
  paletteDark,
  fontSizes,
  spacing,
} from './themes';

describe('Theme', () => {
  describe('lightTheme', () => {
    it('should have correct palette colors', () => {
      expect(lightTheme.background).toBe(paletteLight.background);
      expect(lightTheme.primary).toBe(paletteLight.primary);
      expect(lightTheme.secondary).toBe(paletteLight.secondary);
      expect(lightTheme.danger).toBe(paletteLight.danger);
      expect(lightTheme.dangerText).toBe(paletteLight.dangerText);
    });

    it('should have correct font sizes and spacing', () => {
      expect(lightTheme.fontSizes).toEqual(fontSizes);
      expect(lightTheme.spacing).toEqual(spacing);
    });

    it('should have correct container properties', () => {
      expect(lightTheme.container.backgroundColor).toBe(
        paletteLight.background
      );
    });

    it('should have correct h1 properties', () => {
      expect(lightTheme.h1.color).toBe(paletteLight.primary);
    });

    it('should have correct h2 properties', () => {
      expect(lightTheme.h2.color).toBe(paletteLight.primary);
    });

    it('should have correct textInput properties', () => {
      expect(lightTheme.textInput.color).toBe(paletteLight.primary);
      expect(lightTheme.textInput.borderColor).toBe(paletteLight.primary);
    });
  });

  describe('darkTheme', () => {
    it('should have correct palette colors', () => {
      expect(darkTheme.background).toBe(paletteDark.background);
      expect(darkTheme.primary).toBe(paletteDark.primary);
      expect(darkTheme.secondary).toBe(paletteDark.secondary);
      expect(darkTheme.danger).toBe(paletteDark.danger);
      expect(darkTheme.dangerText).toBe(paletteDark.dangerText);
    });

    it('should have correct font sizes and spacing', () => {
      expect(darkTheme.fontSizes).toEqual(fontSizes);
      expect(darkTheme.spacing).toEqual(spacing);
    });

    it('should have correct container properties', () => {
      expect(darkTheme.container.backgroundColor).toBe(paletteDark.background);
    });

    it('should have correct h1 properties', () => {
      expect(darkTheme.h1.color).toBe(paletteDark.primary);
    });

    it('should have correct h2 properties', () => {
      expect(darkTheme.h2.color).toBe(paletteDark.primary);
    });

    it('should have correct textInput properties', () => {
      expect(darkTheme.textInput.color).toBe(paletteDark.primary);
      expect(darkTheme.textInput.borderColor).toBe(paletteDark.primary);
    });
  });
});
