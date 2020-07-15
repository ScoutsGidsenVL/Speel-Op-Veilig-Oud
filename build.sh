cd application

echo "Installeer adoptopenjdk-8-hotspot en gradle via 'sudo apt install adoptopenjdk-8-hotspot gradle'."
echo "Gebruik 'sudo update-java-alternatives' om adoptopenjdk-8-hotspot als standaard in te stellen."
echo "Download android studio en pak uit onder /mnt/c/dev/ ."

export JAVA_HOME=/usr/lib/jvm/adoptopenjdk-8-hotspot-amd64
export ANDROID_HOME=/mnt/c/dev/android-studio

node_modules/.bin/ionic cordova build --verbose --release android
