import {useState,useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import SplashScreen from './src/screens/SplashScreen';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import TabNavigator from './src/navigator/TabNavigator'

export default function App() {
  const Stack = createStackNavigator();
  const [isSplash, setIsSplash] = useState(true);

 useEffect(() => {
    const timer = setTimeout(() => {
      setIsSplash(false);
    }, 2300);

    return () => clearTimeout(timer); 
  }, []); 
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Main'  >
        
          <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
       
          <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}}/>
          <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown:false}}/>
          <Stack.Screen name="Main" component={TabNavigator} options={{ headerShown: false }} />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}