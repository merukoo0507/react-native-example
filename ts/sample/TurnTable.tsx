import React, { useState, useEffect, useRef } from 'react'
import { View, Image, ListRenderItemInfo, StyleProp, ViewStyle, TouchableWithoutFeedback, Modal, TouchableOpacity,
  StyleSheet, FlatList,
  ImageBackground,
  Text} from "react-native"
import { Image as SvgImg } from 'react-native-svg'
import {Text as SvgText} from 'react-native-svg'
import Svg, { Circle, G, Line, Path, Rect, TextPath, TSpan, Defs, ClipPath } from 'react-native-svg'
import Animated, { Easing } from 'react-native-reanimated'


export interface TurnTable {
  show?: (value: boolean) => void;
}

interface TurnTableProps {
  c_ref?: TurnTable,
  style?: StyleProp<ViewStyle>
}

//用來當作客服的彈跳視窗
export const TurnTable = () => {
  const data = {
    "code": 0,
    "msg": "获取转盘活动数据成功",
    "data": [
      {
        "id": "337",
        "param": {
          "buy": "1",
          "buy_amount": 10,
          "check_in_user_levels": "-1,1,2,4,3,5,7",
          "content_turntable": [
            "大转盘浮动金额",
            "大转盘浮动金额",
            "大转盘浮动金额",
            "大转盘浮动金额",
            "大转盘浮动金额",
            "大转盘浮动金额1",
            "大转盘浮动金额",
            "大转盘浮动金额",
            "大转盘浮动金额2",
            "大转盘浮动金额",
            "大转盘浮动金额",
            "大转盘浮动金额3",
            "大转盘浮动金额",
            "大转盘浮动金额",
            "大转盘浮动金额4"
          ],
          "membergame": "",
          "prize_time": 5,
          "scrath_buy_type": "2",
          "visitor_show": "0",
          "prizeArr": [
            {
              "prizeId": 0,
              "prizeIcon": "https://cdn05.fhptstatic07.com/upload/t061/customise/images/162410400571prizeIconNew.jpg?v=1624104005",
              "prizeIconName": "162410400571prizeIconNew",
              "prizeName": "下次再来",
              "prizeType": "4",
              "prizeAmount": ""
            },
            {
              "prizeId": 1,
              "prizeIcon": "https://cdn05.fhptstatic07.com/upload/t061/customise/images/162410404479prizeIconNew.jpg?v=1624104044",
              "prizeIconName": "162410404479prizeIconNew",
              "prizeName": "1元彩金",
              "prizeType": "1",
              "prizeAmount": "1",
              "prizeAmount2": "1"
            },
            {
              "prizeId": 2,
              "prizeIcon": "https://cdn05.fhptstatic07.com/upload/t061/customise/images/162410406476prizeIconNew.jpg?v=1624104064",
              "prizeIconName": "162410406476prizeIconNew",
              "prizeName": "50-51元彩金",
              "prizeType": "1",
              "prizeAmount": "50",
              "prizeAmount2": "51"
            },
            {
              "prizeId": 3,
              "prizeIcon": "https://cdn05.fhptstatic07.com/upload/t061/customise/images/162410410425prizeIconNew.jpg?v=1624104104",
              "prizeIconName": "162410410425prizeIconNew",
              "prizeName": "5-10元彩金",
              "prizeType": "1",
              "prizeAmount": "5",
              "prizeAmount2": "10"
            },
            {
              "prizeId": 4,
              "prizeIcon": "https://cdn05.fhptstatic07.com/upload/t061/customise/images/162410413255prizeIconNew.jpg?v=1624104132",
              "prizeIconName": "162410413255prizeIconNew",
              "prizeName": "100积分",
              "prizeType": "2",
              "prizeAmount": "100",
              "prizeAmount2": "100"
            },
            {
              "prizeId": 5,
              "prizeIcon": "https://cdn05.fhptstatic07.com/upload/t061/customise/images/162410416264prizeIconNew.jpg?v=1624104162",
              "prizeIconName": "162410416264prizeIconNew",
              "prizeName": "40-50积分",
              "prizeType": "2",
              "prizeAmount": "40",
              "prizeAmount2": "50"
            },
            {
              "prizeId": 6,
              "prizeIcon": "https://cdn05.fhptstatic07.com/upload/t061/customise/images/162411029050prizeIconNew.jpg?v=1624110290",
              "prizeIconName": "162411029050prizeIconNew",
              "prizeName": "10-11积分",
              "prizeType": "2",
              "prizeAmount": "10",
              "prizeAmount2": "11"
            },
            {
              "prizeId": 7,
              "prizeIcon": "https://cdn05.fhptstatic07.com/upload/t061/customise/images/16241041859prizeIconNew.jpg?v=1624104185",
              "prizeIconName": "16241041859prizeIconNew",
              "prizeName": "iPhone一部",
              "prizeType": "3",
              "prizeAmount": "1"
            }
          ],
          "activity_buy_type_model": "1",
          "arcArr": [
            {
              "arcPid": 0,
              "condition": "100",
              "arcTimes": "1",
              "arcGetTimes": null
            },
            {
              "arcPid": 1,
              "condition": "300",
              "arcTimes": "3",
              "arcGetTimes": null
            },
            {
              "arcPid": 2,
              "condition": "500",
              "arcTimes": "5",
              "arcGetTimes": null
            }
          ]
        },
        "type": "turntable",
        "start": "2021-07-04 11:58:29",
        "end": "2025-06-19 23:59:59",
        "freeNum": "8",
        "integral": 2586
      }
    ],
  }
  var awards = {"integral": 2586, "integralOld": 2576, "prizeAmount": 1, "prizeAmount2": "1", "prizeIcon": "https://cdn05.fhptstatic07.com/upload/t061/customise/images/162410404479prizeIconNew.jpg?v=1624104044", "prizeIconName": "162410404479prizeIconNew", "prizeId": 1, "prizeMsg": "中奖", "prizeName": "1元彩金", "prizeType": "1", "prizeflag": 1}
  
  const [show, setShow] = useState(true)
  const [showWinDialog, setShowWinDialog] = useState(false)
  const [winData, setWinData] = useState(awards)

  const [turntableList, setTurntableList] = useState<any>(data)
  const [numberOfSlice, setNumberOfSlice] = useState(data.data?.[0].param.prizeArr.length) //number for slice

  const [spinValue, setSpinValue] = useState(new Animated.Value(0))
  const [winSpinValue, setWinSpinValue] = useState(new Animated.Value(0))
  const spinDeg = spinValue.interpolate({
    inputRange: [0, 360],
    outputRange: ['0deg', '360deg'],
  })
  const winSpin = winSpinValue.interpolate({
    inputRange: [0, 360],
    outputRange: ['0deg', '360deg'],
  })

  const radii = 100
  const plateBg = ''
  const btnImg = ''
  const decorateImg = ''
  const winBg = ''
  const winTitleImg = ''

  // 初始化
  useEffect(() => {
    // c_ref && (c_ref.show = (value) => {
    //   console.log('触发事件')
    //   setShow(value)
    // });
  }, []);

  useEffect(() => {
    // console.log('spinValue', spinValue)
  }, [turntableList, show, numberOfSlice, spinValue])

  function showWin() {
    var winIdx = 0
    turntableList?.data?.[0].param.prizeArr.map((item, index) => {
      if (item.prizeId == winData?.prizeId) {
        console.log("抽中第" + index + "個")
        winIdx = index
      }
    })
    //第0個是90度, 設定初始是第numberOfSlice/4-0.5個
    //因為順時鐘轉，會指到逆向的資料所以要加負號
    var spin: number = -(numberOfSlice/4+0.5+winIdx)*(360/numberOfSlice)
    console.log('spin =', spin) 
    Animated.timing(spinValue, {
      toValue: spin+5*360,
      duration: 3000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => {
      setSpinValue(new Animated.Value(spin))
      setShowWinDialog(true)
      setTimeout(() => {
        setShowWinDialog(false)
      }, 3000)

      Animated.timing(winSpinValue, {
        toValue: 3*360,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start(() => {
        setWinSpinValue(new Animated.Value(0))
      })
    })
  }

  function getCoordinatesForPercent(percent) {
    const x = Math.cos(2 * Math.PI * percent)*radii
    const y = Math.sin(2 * Math.PI * percent)*radii
    return [x, y];
  }
  
  function getSlices() {
    console.log('numberOfSlice', numberOfSlice)
    var slices = [];
    for (let i = 0; i < numberOfSlice; i++) {
         slices.push({percent: 1 / numberOfSlice, color: i%3 == 0 ? 'rgba(0,0,0,0)': i%3 == 1 ? 'rgba(0,0,0,0.1)': 'rgba(0,0,0,0.2)'});
    }

    var cumulativePercent = 0
    var imgPercent = 0
    var arr = []

    //靜態參數
    var imgWidth = 0.25*radii //獎項圖片大小

    arr = slices.map((slice, index) => {
      const [startX, startY] = getCoordinatesForPercent(cumulativePercent);
      const [iStartX, iStartY] = getCoordinatesForPercent(cumulativePercent+slice.percent/4); //圖片座標，
      imgPercent = (cumulativePercent + slice.percent/2)
      cumulativePercent += slice.percent;
      const [endX, endY] = getCoordinatesForPercent(cumulativePercent);
      const largeArcFlag = slice.percent > 0.5 ? 1 : 0;
      const startOff = isNaN(turntableList?.data?.[0].param?.prizeArr?.[index].prizeName.length) ? 0 : (11 - turntableList?.data?.[0].param.prizeArr[index].prizeName.length)
      console.log('slice', index, turntableList?.data?.[0].param?.prizeArr?.[index].prizeName, startOff)

      var r = radii
      //轉盤扇型
      //https://codepen.io/AmeliaBR/pen/kAIzf
      //format [A|a]rx,ry, x-axis-rotation, large-arc-flag, sweep-flag, x,y
      const pathData = [
        `M ${startX} ${startY}`, // moveto
        `A ${r} ${r} 0 ${largeArcFlag} 1 ${endX} ${endY}`, // elliptical Arc
        'L 0 0', // lineto
      ].join(' ');

      //文字的路徑
      const d = [
        `M${startX/1.7} ${startY/1.7}`,
        `L${endX/1.7} ${endY/1.7}`,
        // `M${tStartX/2} ${tStartY/2}`,
        // `L${tEndX/2} ${tEndY/2}`,
      ].join(' ');
      // console.log('index', index, [startX, startY], imgPercent*360)
      return <>
        <Path d={pathData} fill={slice.color} key={pathData} />
        <Defs>
          <Path id={"path"+index} stroke="#fff" strokeWidth="1" d={d}></Path>
        </Defs>
        {/* <Path stroke="#fff" strokeWidth="1" d={d}></Path> */}
        <SvgText fill="#fff" fontSize={7}>
          <TextPath href={"#path"+index} startOffset={startOff}>
            <TSpan>{turntableList?.data?.[0].param.prizeArr[index].prizeName}</TSpan>
          </TextPath>
        </SvgText>
        {/* <Circle cx={startX/1.7} cy={startY/1.7} r="0.02" fill="pink"/>
        <Circle cx={endX/1.7} cy={endY/1.7} r="0.02" fill="green"/> */}
        {/* <Circle cx={iStartX/1.1} cy={iStartY/1.1} r="0.02" fill="yellow"/> */}
        <G rotation={90+imgPercent*360} origin={iStartX/1.05+", "+iStartY/1.05}>
          <SvgImg href={turntableList?.data?.[0].param.prizeArr[index].prizeIcon} 
            width={imgWidth} height={imgWidth}
            x={iStartX/1.05} y={iStartY/1.05} 
            />
        </G>
      </>
    });
    return arr;
  }

  return (
    <Modal transparent={true} animated={true} visible={show}>
      <View style={styles.container}>
        <TouchableWithoutFeedback style={styles.item} onPress={() => { setShow(false) }}>
          <View style={styles.shadowBg}></View>
        </TouchableWithoutFeedback>
        <View
          style={[styles.frontContainer]}>
          <ImageBackground
              style={styles.topImg}
              source={{ uri: plateBg }}
              resizeMode='stretch' >
            <Animated.View style={{width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', transform: [{ rotateZ: spinDeg }] }}>
              <Svg
                height="90%"
                width="90%"
                viewBox={-1*radii + ' ' + -1*radii + ' ' + 2*radii + ' ' + 2*radii}
                style={{ zIndex: 0 }}>
                { getSlices() }
              </Svg>
            </Animated.View>
            <TouchableOpacity style={{ position: 'absolute', width: 140, aspectRatio: 1, zIndex: 2 }} 
              onPress={() => { 
                console.log('轉轉盤') 
                showWin()
              }}>
              <Image source={{ uri: btnImg }} 
                style={{ position: 'absolute', width: 140, aspectRatio: 1, zIndex: 2 }} 
                resizeMode={'contain'} />
            </TouchableOpacity>
            {showWinDialog && <View style={{ position: 'absolute', width: '100%', aspectRatio: 1, backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 3, alignItems: 'center', justifyContent: 'center'}}>
              <View style={{ width: '80%', aspectRatio: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Animated.View style={{ width: '80%', aspectRatio: 1, transform: [{ rotateZ: winSpin }]}}>
                  <Image source={{ uri: winBg }} 
                    style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }} 
                    resizeMode={'stretch'} />
                </Animated.View>
                <Image source={{ uri: winData?.prizeIcon }} style={{ position: 'absolute', width: '25%', aspectRatio: 1, alignSelf: 'center'}} resizeMode={'center'} />
              </View>
              <Image source={{ uri: winTitleImg}}
                    style={{ position: 'absolute', top: '15%', width: '70%', height: 30 }}
                    resizeMode={'contain'} />
              <Text style={{ position: 'absolute', bottom: '15%', width: '100%', height: 40, fontSize: 25, fontWeight: 'bold', color: 'yellow', textAlign: 'center' }}>{winData?.prizeName}</Text>
            </View>}
          </ImageBackground>
          <Image
            style={{ position: 'absolute', width: 250, height: 80, top: -10, zIndex: 2 }} 
            source={{ uri: decorateImg }} 
            resizeMode={'stretch'}
          />
          <TouchableOpacity style={styles.pressClose} onPress={() => { setShow(false) }}>
            <Text style={{ fontSize: 20, color: '#fff' }}>X</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  shadowBg: {
    flex: 1,
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  item: {
    position: 'absolute'
  },
  frontContainer: {
    position: 'absolute',
    width: '100%',
    height: '90%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topImg: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    aspectRatio: 1,
    zIndex: 1,
  },
  titleContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: '#3e0172',
    marginTop: 20,
    paddingHorizontal: 40,
    paddingVertical: 10
  },
  pressClose: {
    width: 50,
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 0,
    top: -10,
    zIndex: 2,
  },
  text: {
    color: '#fff'
  },
  textLog: {
    color: '#fff',
    flex: 1,
    marginRight: 5,
    textAlign: 'center'
  },
})

