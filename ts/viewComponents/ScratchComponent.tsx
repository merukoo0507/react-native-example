import React, { useEffect, useRef, useState } from 'react'
import {View, Image, StyleSheet, Modal, TouchableWithoutFeedback, Text } from 'react-native'
import WebView from 'react-native-webview'

//模擬刮刮樂
const ScratchComponent = () => {
    const webRef = useRef(null)
    const [webMove, setWebMove] = useState('')
    const [scratchOff, setScratchOff] = useState(false)
    const [alertVisible, setAlertVisible] = useState(true)

    useEffect(() => {
        if (webMove.length <= 0) return
        const clientResponseCode = `window.postMessage('`+ webMove +`');`
        webRef?.current?.injectJavaScript(clientResponseCode)
        //console.log(webMove)
    }, [webMove])

    useEffect(() => {
        console.log('scratchOff =', scratchOff)
    }, [scratchOff, alertVisible])
    
    return(
        <View>
            <Modal transparent={true} visible={alertVisible}>
            <View style={{ width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.4)', alignItems: 'center', justifyContent: 'center', padding: 35,  }} >
            <Text style={[styles.text, { fontSize: 20, marginBottom: 20 }]}>特码已开出，请刮开特码体验开奖新乐趣。</Text>
            <View
                style={{ width: 300, height: 150, backgroundColor: 'transparent'}}
                onTouchMove={(e) => {
                    setWebMove(e.nativeEvent.locationX + ',' + e.nativeEvent.locationY )
                }} >
                <WebView
                    ref={webRef}
                    scalesPageToFit={false}
                    scrollEnabled={false}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    automaticallyAdjustContentInsets={false}
                    pullToRefreshEnabled={false}
                    onMessage={(event) => {
                        const { data } = event.nativeEvent
                        //console.log('data', data)
                        if (!scratchOff && data) {
                            setScratchOff(data)
                        }
                    }}
                source={{ html: `
                    <body style="
                    height: 150px; width: 300px; "
                    onload="load()" style="position: fixed; margin-top: 0; margin-left: 0;background-color: #000";>

                    <img id="canvasImg" crossorigin="anonymous" src="https://cdn09.fhptstatic02.com/images/lhc/mipai_2.png" alt="The Scream" style="height: 100%; width: 100%;
                    border:5px solid blue; display: none;">

                    <div style="position: absolute; 
                    height: 100%; width: 100%; 
                    background-position: center;
                    background-repeat: no-repeat;
                    background-size: 100% 100%;
                    background-image: url(https://cdn09.fhptstatic02.com/images/lhc/mipai_2.png);">

                    <div style="position: absolute; 
                        height: 90%; width: 95%;
                        left: 2.5%; top: 5%; background-position: center; background-color: #fcfaae;">
                        <div id="numImg" style="
                            margin: auto; margin-top: 10%; height: 150px; width: 150px;
                            background-repeat: no-repeat;
                            background-size: 150px 150px;
                            background-image: url(https://appstatic.fhptstatic01.com/assets/ball/ball_red.png);">
                            <p2 id="openNum" style="text-align: center; position: absolute; top: 25%; left: 48%; font-size:80px;">0</p2>
                        </div>
                        
                        <p id="openAnimal" style="text-align: center; margin-left: 5px; margin-top: 20px;  font-size:80px;">雞</p>
                        </div>
                        <div style="position: absolute; 
                        left: 0; top: 0;
                        height: 100%; width: 100%; ">
                            <canvas 
                            id="myCanvas"
                            style="position: absolute; 
                            left: 0; top: 0;
                            height: 100%; width: 100%; 
                                background-position: center;
                                background-repeat: no-repeat;
                                background-size: 100% 100%;"></canvas>
                        </div>

                    <script>

                    var canvas = document.getElementById("myCanvas");
                    var ctx = canvas.getContext("2d");
                    var mouseMoveP = document.getElementById("mouseMoveP")
                    var mouseDownP = document.getElementById("mouseDownP")
                    var log = document.getElementById("log")
                    var isMouseDown = false
                    var openNum = document.getElementById("openNum")

                    function writeMessage(mousePos) {
                        if (isMouseDown) {
                        cutCircle(ctx, mousePos.x, mousePos.y, 20)
                        }
                    }

                    window.addEventListener("message", message => {
                        //log.innerHTML = 'x:' + message.data.split(',')[0] + ', y: ' + message.data.split(',')[1];
                        var x = message.data.split(',')[0];
                        var y = message.data.split(',')[1];
                        cutCircle(ctx, x, y, 20);
                        log.innerHTML = check;
                    });

                    function load() { 
                        var img = document.getElementById("canvasImg");
                        ctx.drawImage(img,0,0, 300, 150);

                        mouseMoveP.innerHTML = "111";
                        mouseDownP.innerHTML = "111";
                        log.innerHTML = "AAA";
                    }

                    function checkData() {
                        var data = ctx.getImageData(125, 30, 50, 80).data
                        var check = true
                        Array.from(data, x => {
                            if (x != 0) check = false
                        })
                        log.innerHTML = check;
                        if (check) {
                            window.ReactNativeWebView.postMessage(check);
                        }
                    }

                    function cutCircle(context, x, y, radius){
                        context.globalCompositeOperation = 'destination-out'
                        context.arc(x, y, radius, 0, Math.PI*2, true);
                        context.fill();
                        checkData();
                    }


                    </script>

                    </body>
                    `}}
                />
            </View>
                <TouchableWithoutFeedback onPress={() => { setAlertVisible(false) }}>
                    <Text style={[styles.text, {marginTop: 20}]}>X</Text>
                </TouchableWithoutFeedback>
            </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color: '#fff', 
        fontSize: 28,
    }
})

export default ScratchComponent