import {Text, View} from 'react-native';

import QuizPage from './Components/QuizPage';
import React from 'react';
import Result from './Components/Result';
import StartPage from './Components/StartPage';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import User from './Components/User';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="StartPage">
        <Stack.Screen
          name="StartPage"
          component={StartPage}
          options={{header: () => null}}
        />
        <Stack.Screen
          name="QuizPage"
          component={QuizPage}
          options={{header: () => null}}
        />
        <Stack.Screen
          name="Result"
          component={Result}
          options={{header: () => null}}
        />
      </Stack.Navigator>
    </NavigationContainer>
    // <View style={{padding:0,margin:0}}>
    //   <User />
    // </View>
  );
};

export default App;


///not gonna waste time on this project for a while i'll start new project