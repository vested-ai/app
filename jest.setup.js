// Mock react-native-vector-icons
jest.mock('react-native-vector-icons/FontAwesome6', () => 'Icon');

// Mock themed components
jest.mock('@/components/ThemedText', () => ({
  __esModule: true,
  ThemedText: function ThemedText({ children }) {
    return children;
  },
}));

jest.mock('@/components/ThemedView', () => ({
  __esModule: true,
  ThemedView: function ThemedView({ children }) {
    return children;
  },
}));

jest.mock('@/components/AppBar', () => ({
  __esModule: true,
  AppBar: function AppBar() {
    return null;
  },
}));

jest.mock('@/components/LegalDisclaimer', () => ({
  __esModule: true,
  LegalDisclaimer: function LegalDisclaimer() {
    return null;
  },
}));

// Mock TurboModuleRegistry for SettingsManager
jest.mock('react-native/Libraries/TurboModule/TurboModuleRegistry', () => ({
  get: () => ({
    AppleLocale: 'en_US',
    AppleLanguages: ['en'],
  }),
  getEnforcing: () => ({
    AppleLocale: 'en_US',
    AppleLanguages: ['en'],
  }),
}));

// Mock NativePlatformConstantsIOS
jest.mock('react-native/Libraries/Utilities/NativePlatformConstantsIOS', () => ({
  __esModule: true,
  default: {
    getConstants: () => ({
      isTesting: true,
      reactNativeVersion: {
        major: 0,
        minor: 0,
        patch: 0,
      },
    }),
  },
}));

// Mock NativeDeviceInfo
jest.mock('react-native/src/private/specs/modules/NativeDeviceInfo', () => ({
  __esModule: true,
  default: {
    getConstants: () => ({
      Dimensions: {
        window: {
          width: 375,
          height: 812,
          scale: 3,
          fontScale: 1,
        },
        screen: {
          width: 375,
          height: 812,
          scale: 3,
          fontScale: 1,
        },
      },
    }),
  },
}));

// Mock NativeModule class
class MockNativeModule {
  getConstants() {
    return {
      isTesting: true,
      reactNativeVersion: {
        major: 0,
        minor: 0,
        patch: 0,
      },
    };
  }
}

// Mock react-native with NativeModules
jest.mock('react-native', () => {
  const RN = jest.requireActual('react-native');
  
  // Add NativeModules with getConstants
  RN.NativeModules = {
    SettingsManager: {
      AppleLocale: 'en_US',
      AppleLanguages: ['en'],
    },
    PlatformConstants: new MockNativeModule(),
    DeviceInfo: {
      getConstants: () => ({
        Dimensions: {
          window: {
            width: 375,
            height: 812,
            scale: 3,
            fontScale: 1,
          },
          screen: {
            width: 375,
            height: 812,
            scale: 3,
            fontScale: 1,
          },
        },
      }),
    },
  };
  
  // Add NativeModule class
  RN.NativeModule = MockNativeModule;
  
  return RN;
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