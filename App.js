/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import ButtonSample from './ts/base/ButtonSample'
import Conditional from './ts/base/Conditional'
import CountEvent from './ts/base/CountEvent'
import CustomerButton from './ts/base/CustomerButton'
import FlexDirectionBasics from './ts/base/FlexDirectionBasics'
import Input from './ts/base/Input'
import ListKey from './ts/base/ListKey'
import LoadImage from './ts/base/LoadImage'
import MemoSample from './ts/base/MemoSample'
import ViewSample from './ts/base/ViewSample'

import CustomHook from './ts/hooks/CustomHook'
import UseEffectTest from './ts/hooks/UseEffectTest'
import UseReducerTest from './ts/hooks/UseReducerTest'
import UseRefTest from './ts/hooks/UseRefTest'
import UseStateTest from './ts/hooks/UseStateTest'

import LayoutSample from './ts/sample/toggleSample/LayoutSample'

const App = () => {
  return (
//base
    // <ViewSample />
    // <ButtonSample />
    // <Conditional />
    // <CountEvent />
    // <CustomerButton />
    // <FlexDirectionBasics />
    // <Input />
    // <ListKey />
    // <LoadImage />
    // <MemoSample />

//hook
    // <CustomHook />
    // <UseEffectTest />
    // <UseReducerTest />
    // <UseRefTest />
    // <UseStateTest />

//sample
  //toggle
    <LayoutSample />

    // <DialogSample />
    // <ModalSample />
    // <ScratchComponent />
    // <TurnTable />
  )
};

export default App;
