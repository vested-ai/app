/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

export const Colors = {
    // Brand Colors
    brandPink: '#A64D79',
    brandWhite: '#FFFFFF',
    brandGrayLightest: '#F5F5F5',
    brandGrayLighter: '#E5E5E5',
    brandGrayLight: '#D4D4D4',
    brandGray: '#A3A3A3',
    brandGrayDark: '#737373',
    brandGrayDarker: '#404040',
    brandBlack: '#000000',

    // Status Colors
    success: '#22C55E', // Green
    warning: '#F59E0B', // Yellow
    error: '#EF4444',   // Red

    // Social Colors
    facebook: '#1877F2',
    google: '#DB4437',

    // Theme Colors
    light: {
        text: 'brandBlack',
        background: 'brandWhite',
        primary: 'brandPink',
        secondary: 'brandGray',
        tint: 'brandPink',
        icon: 'brandGrayLight',
        tabIconDefault: 'brandGrayDark',
        tabIconSelected: 'brandPink',
        border: 'brandGrayLighter',
    },
    dark: {
        text: 'brandWhite',
        background: 'brandBlack',
        primary: 'brandPink',
        secondary: 'brandGray',
        tint: 'brandPink',
        icon: 'brandGrayLight',
        tabIconDefault: 'brandGrayDark',
        tabIconSelected: 'brandPink',
        border: 'brandGrayDarker',
    },
};
