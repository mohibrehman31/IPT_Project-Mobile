import React from "react";
import { Provider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { theme } from "./src/core/theme";
import {
  StartScreen,
  StudentLogin,
  TeacherLogin,
  EnterData,
  MarkAttendance,
  SelectDate,
} from "./src/screens";

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="StartScreen"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="StudentLogin" component={StudentLogin} />
          <Stack.Screen name="TeacherLogin" component={TeacherLogin} />
          <Stack.Screen name="EnterData" component={EnterData} />
          <Stack.Screen name="SelectDate" component={SelectDate} />
          <Stack.Screen name="MarkAttendance" component={MarkAttendance} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
