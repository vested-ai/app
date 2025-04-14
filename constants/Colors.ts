/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

export const Colors = {
    brandPink: '#a64d79',
    brandWhite: '#FFFFFF',
    brandGrayLightest: '#F5F5F5',
    brandGrayLighter: '#E5E5E5',
    brandGrayLight: '#9BA1A6',
    brandGray: '#666666',
    brandGrayDark: '#333333',
    brandGrayDarker: '#111111',
    brandBlack: '#000000',
    light: {
        text: 'brandBlack',
        background: 'brandWhite',
        primary: 'brandPink',
        secondary: 'brandGray',
        tint: 'brandGrayLight',
        icon: 'brandGrayLight',
        tabIconDefault: 'brandGrayLight',
        tabIconSelected: 'brandColorLight',
    },
    dark: {
        text: 'brandWhite',
        background: 'brandBlack',
        primary: 'brandPink',
        secondary: 'brandGray',
        tint: 'brandGrayLight',
        icon: 'brandGrayLight',
        tabIconDefault: 'brandGrayLight',
        tabIconSelected: 'brandColorDark',
    },
};
