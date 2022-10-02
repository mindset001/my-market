
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator,  } from '@react-navigation/stack';
import { useFonts } from 'expo-font';
import Home from './screens/Home';
import Details from './screens/Details';
import Three from './screens/three'

import { TapGestureHandler, State } from 'react-native-gesture-handler';

const Stack = createStackNavigator()

const theme = {
  ...DefaultTheme,
  color: {
    ...DefaultTheme.colors,
    background: "transparent"
  }
}
export default function App() {
  const [ loaded ] = useFonts({
    InterBold: require("./assets/fonts/Inter-Bold.ttf"),
    InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
    InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
    InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
    InterLight: require("./assets/fonts/Inter-Light.ttf"),
  });

  if (!loaded) return null;
  return (
    <NavigationContainer theme={theme} >
      <Stack.Navigator  initialRouteName ="Home">
      <Stack.Screen name= "Three" component={Three} options={{headerShown: true}}/>
        <Stack.Screen name= "Home" component={Home} options={{headerShown: false}}/>
        <Stack.Screen name= "Details" component={Details} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}



