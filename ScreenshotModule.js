import { NativeModules } from 'react-native';

const { ScreenshotModule } = NativeModules;

export default {
  enableScreenshotPrevention: () => ScreenshotModule.enableScreenshotPrevention(),
  disableScreenshotPrevention: () => ScreenshotModule.disableScreenshotPrevention(),
};