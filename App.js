import { SafeAreaView, Text, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { Provider } from 'react-redux';
import { store } from './store';
import HomeScreen from './screens/HomeScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import "react-native-gesture-handler";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapScreen from './screens/MapScreen';
import EatScreen from './screens/EatScreen';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store} >
      <NavigationContainer>
      <SafeAreaProvider>
        <Stack.Navigator>
          <Stack.Screen
          name='Home Screen'
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
          />
          <Stack.Screen
          name='MapScreen'
          component={MapScreen}
          options={{
            headerShown: false,
          }}
          />
          <Stack.Screen
          name='EatScreen'
          component={EatScreen}
          options={{
            headerShown: false,
          }}
          />
          
        </Stack.Navigator>        
    </SafeAreaProvider>
    </NavigationContainer>
    </Provider>
    
  );
}


