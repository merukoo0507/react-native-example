/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import FlexDirectionBasics from './ts/design/FlexDirectionBasics';
import LoadImage from './ts/design/LoadImage';
import ButtonSample from './ts/design/ButtonSample';
import FComponent from "./ts/design/FComponent";
import CustomEvent from "./ts/design/CustomEvent";
import Conditional from './ts/design/Conditional';
import Input from './ts/design/Input';
import ListKey from './ts/design/ListKey';
import Memo from './ts/design/Memo';
import UseStateTest from './ts/hooks/UseStateTest';
import UseEffectTest from './ts/hooks/UseEffectTest';
import UseRefTest from './ts/hooks/UseRefTest';
import UseReducerTest from './ts/hooks/UseReducerTest'
import CustomHook from './ts/hooks/CustomHook';
import LayoutSample from './ts/viewComponents/LayoutSample';
import Period from './ts/Period';
import ScratchComponent from './ts/viewComponents/ScratchComponent';
import { TurnTable } from './ts/viewComponents/TurnTable';

const App = () => {
  return (
    // <FlexDirectionBasics />
    //<LoadImage />
    <ScratchComponent />
    // <ButtonSample />

    //Function Components
    // <FComponent title="FComponent1" color="rrgb(59, 108, 212)" />
    // <CustomEvent />

    // <Conditional />
    // <ListKey />
    // <Memo />
    // <UseStateTest />
    // <UseReducerTest />
    // <UseReducerTest />
    // <UseEffectTest />
    // <UseRefTest />
    // <CustomHook />
    // <ViewSample />
    // <LayoutSample />
    // <Period />
    // <ViewSample />
    // <TurnTable />
  );
};

export default App;
