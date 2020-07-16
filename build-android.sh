#!/usr/bin/env bash

set -e

cd "$(dirname "$0")"/application

echo "Installeer adoptopenjdk-8-hotspot en gradle via 'sudo apt install adoptopenjdk-8-hotspot gradle'."
echo "Gebruik 'sudo update-java-alternatives' om adoptopenjdk-8-hotspot als standaard in te stellen."
echo "Download android command line tools en pak uit onder /mnt/c/dev/android-home/tools ."
echo "Download android build tools via 'export ANDROID_HOME='/mnt/c/dev/android-home' ; $ANDROID_HOME/tools/bin/sdkmanager --sdk_root=$ANDROID_HOME \"build-tools;29.0.3\"'"

TARGET=SpeelOpVeilig.$(grep '<widget' config.xml | sed -e 's#.*version="\([^"]*\)".*#\1#').apk

echo ""
echo "Doel: $(pwd)/${TARGET}"

if test -f "${TARGET}"; then
    echo "Error: Dit bestand bestaat al. Pas de versie aan in $(pwd)/config.xml of verwijder het bestand (als het nog niet op de play store staat, ook niet als test)."
    exit 1
fi

export JAVA_HOME=/usr/lib/jvm/adoptopenjdk-8-hotspot-amd64
export ANDROID_HOME=/mnt/c/dev/android-home
export PATH=${PATH}:$ANDROID_HOME/tools:$ANDROID_HOME/platform_tools

node_modules/.bin/ionic cordova build --verbose --release android

jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore /mnt/s/03.\ Ondersteuning/Informatica/Staf-projecten/Speel\ op\ veilig/Google\ Play/speel-op-veilig-release-key.keystore platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk speelopveiligkey

$ANDROID_HOME/build-tools/*/zipalign -v 4 platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk "${TARGET}"
