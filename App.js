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
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import FlexDirectionBasics from './ts/baseComponents/FlexDirectionBasics';
import LoadImage from './ts/baseComponents/LoadImage';
import ButtonSample from './ts/baseComponents/ButtonSample';
import CustomEvent from "./ts/baseComponents/CustomEvent";
import Conditional from './ts/baseComponents/Conditional';
import Input from './ts/baseComponents/Input';
import ListKey from './ts/baseComponents/ListKey';
import MemoSample from './ts/baseComponents/MemoSample';
import UseStateTest from './ts/hooks/UseStateTest';
import UseEffectTest from './ts/hooks/UseEffectTest';
import UseRefTest from './ts/hooks/UseRefTest';
import UseReducerTest from './ts/hooks/UseReducerTest'
import CustomHook from './ts/hooks/CustomHook';
<<<<<<< HEAD
import ViewSample from './ts/samples/ViewSample';
import LayoutSample from './ts/samples/toggleSample/LayoutSample';
import ModalSample from './ts/samples/ModalSample';
import DialogSample from './ts/samples/DialogSample';
=======
import LayoutSample from './ts/viewComponents/LayoutSample';
import Period from './ts/Period';
import ScratchComponent from './ts/viewComponents/ScratchComponent';
import { TurnTable } from './ts/viewComponents/TurnTable';
>>>>>>> scratch

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
    // <MemoSample />
    // <UseStateTest />
    // <UseReducerTest />
    // <UseReducerTest />
    // <UseEffectTest />
    // <UseRefTest />
    // <CustomHook />
    // <ViewSample />
<<<<<<< HEAD
    <LayoutSample />
    // <ModalSample />
    // <DialogSample />

=======
    // <LayoutSample />
    // <Period />
    // <ViewSample />
    // <TurnTable />
>>>>>>> scratch
  );
};

export default App;
