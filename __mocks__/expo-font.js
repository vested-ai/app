// Mock for expo-font
const mockModule = {
  loadAsync: jest.fn(() => Promise.resolve()),
  isLoaded: jest.fn(() => true),
  useFonts: jest.fn(() => [true, null]),
};

// Add loadedNativeFonts as a property with a getter
Object.defineProperty(mockModule, 'loadedNativeFonts', {
  get: () => [],
});

module.exports = mockModule; 