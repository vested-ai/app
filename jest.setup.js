// Mock react-native-vector-icons
jest.mock('react-native-vector-icons/FontAwesome6', () => 'Icon');

// Mock expo-font
jest.mock('expo-font', () => {
  const mockModule = {
    loadAsync: jest.fn(() => Promise.resolve()),
    isLoaded: jest.fn(() => true),
    useFonts: jest.fn(() => [true, null]),
  };
  
  // Add loadedNativeFonts as a property with a getter
  Object.defineProperty(mockModule, 'loadedNativeFonts', {
    get: () => [],
  });
  
  return mockModule;
});

// Mock expo-asset
jest.mock('expo-asset', () => ({
  Asset: {
    loadAsync: jest.fn(() => Promise.resolve()),
  },
}));

// Mock expo-splash-screen
jest.mock('expo-splash-screen', () => ({
  preventAutoHideAsync: jest.fn(() => Promise.resolve()),
  hideAsync: jest.fn(() => Promise.resolve()),
}));

// Mock expo-router
jest.mock('expo-router', () => ({
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
  }),
  router: {
    push: jest.fn(),
    replace: jest.fn(),
  },
}));

// Mock react-native
jest.mock('react-native', () => {
  const RN = jest.requireActual('react-native');
  return {
    ...RN,
    Platform: {
      ...RN.Platform,
      OS: 'ios',
      select: jest.fn(obj => obj.ios),
    },
  };
});

// Mock themed components
jest.mock('@/components/ThemedText', () => {
  return function ThemedText({ children }) {
    return children;
  };
});

jest.mock('@/components/ThemedView', () => {
  return function ThemedView({ children }) {
    return children;
  };
});

jest.mock('@/components/AppBar', () => {
  return function AppBar() {
    return null;
  };
});

jest.mock('@/components/LegalDisclaimer', () => {
  return function LegalDisclaimer() {
    return null;
  };
});

// Global mock for loadedNativeFonts
global.loadedNativeFonts = [];

// Patch the loadedNativeFonts property on the expo-font module
const expoFont = require('expo-font');
if (expoFont && !expoFont.loadedNativeFonts) {
  Object.defineProperty(expoFont, 'loadedNativeFonts', {
    get: () => [],
  });
} 