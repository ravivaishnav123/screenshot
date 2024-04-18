package com.screenshot;

import android.view.WindowManager;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class ScreenshotModule extends ReactContextBaseJavaModule {
    private static ReactApplicationContext reactContext;

    public ScreenshotModule(ReactApplicationContext context) {
        super(context);
        reactContext = context;
    }

    @Override
    public String getName() {
        return "ScreenshotModule";
    }

    @ReactMethod
    public void enableScreenshotPrevention() {
        getCurrentActivity().getWindow().setFlags(WindowManager.LayoutParams.FLAG_SECURE, WindowManager.LayoutParams.FLAG_SECURE);
    }

    @ReactMethod
    public void disableScreenshotPrevention() {
        getCurrentActivity().getWindow().clearFlags(WindowManager.LayoutParams.FLAG_SECURE);
    }
}