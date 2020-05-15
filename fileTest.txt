"detox": {
"test-runner": "jest",
"configurations": {
"ios.sim.debug": {
"binaryPath": "ios/build/loginExample/Build/Products/Debug-iphonesimulator/loginExample.app",
"build": "xcodebuild -workspace ios/loginExample.xcworkspace -scheme loginExample -configuration Debug -sdk iphonesimulator -derivedDataPath ios/build",
"type": "ios.simulator",
"name": "iPhone 11 Pro"
},
"ios.release": {
"binaryPath": "./ios/build/Build/Products/Release-iphonesimulator/loginExample.app",
"build": "xcodebuild -workspace ios/loginExample.xcworkspace -configuration release -scheme loginExample -sdk iphonesimulator -derivedDataPath ios/build",
"type": "ios.simulator",
"name": "iPhone 11 Pro"
}
}
}

---

If you want to create .apk then run command :

cd android
./gradlew assembleRelease
./gradlew assembleAndroidTest

//Esto borrra lo q esta en outputs.. ->
./gradlew clean && ./gradlew :app:bundleRelease

It will generate release apk here :
android/app/build/output/apk/release/app-release.apk

If you want to generate a buldle (.aab) to upload to play store:
cd android
./gradlew bundleRelease
