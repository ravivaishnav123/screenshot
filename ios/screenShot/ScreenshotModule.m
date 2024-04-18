//
//  ScreenshotModule.m
//  screenShot
//
//  Created by Ravi Vaishnav on 05/04/2024.
//

#import <Foundation/Foundation.h>
#import <React/RCTBundleURLProvider.h>

#import "ScreenshotModule.h"

@implementation ScreenshotModule : NSObject 

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(enableScreenshotPrevention)
{
  dispatch_async(dispatch_get_main_queue(), ^{
    [[[UIApplication sharedApplication] keyWindow] setRootViewController:[[UIViewController alloc] init]];
  });
}

intRCT_EXPORT_METHOD(disableScreenshotPrevention)
int disableScreenshotPrevention;
{
  // No need to do anything for disabling screenshot prevention on iOS
}

@end
