//
//  main.m
//  vibrate
//
//  Created by Arturo on 12/7/10.
//  Copyright __MyCompanyName__ 2010. All rights reserved.
//

#import <UIKit/UIKit.h>

int main(int argc, char *argv[]) {
    
    NSAutoreleasePool * pool = [[NSAutoreleasePool alloc] init];
    int retVal = UIApplicationMain(argc, argv, nil, @"vibrateAppDelegate");
    [pool release];
    return retVal;
}
