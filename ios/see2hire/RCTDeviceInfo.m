#import "RCTDeviceInfo.h"

@implementation RCTDeviceInfo

RCT_EXPORT_MODULE(DeviceInfo);

RCT_EXPORT_METHOD(getName
              getName_resolver:(RCTPromiseResolveBlock)resolve
              getName_rejecter:(RCTPromiseRejectBlock)reject) {
    resolve([[UIDevice currentDevice] name]);
}

@end