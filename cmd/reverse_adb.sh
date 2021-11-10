cport=$1

adb kill-server
adb start-servercd 

if [ "$cport" == "" ]; then
   adb reverse tcp:8081 tcp:8081
else
   adb reverse tcp:${cport} tcp:${cport}
fi