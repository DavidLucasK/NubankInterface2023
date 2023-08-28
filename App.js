import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from './src/pages/Home/index';
import Account from './src/pages/Account/index';
import Profile from './src/pages/Profile/index';
import MyCards from './src/pages/MyCards/index';
import CreditCardPage from './src/pages/CreditCardPage';
import SavedMoney from './src/pages/Account/SavedMoney';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
        name="Home" 
        component={Home} 
        options={{
          headerShown: false
        }} />
        <Stack.Screen 
        name="Account" 
        component={Account} 
        options={{
          headerShown: false
        }}/>
        <Stack.Screen 
        name="Profile" 
        component={Profile} 
        options={{
          headerShown: false
        }}/>
        <Stack.Screen 
        name="MyCards" 
        component={MyCards} 
        options={{
          headerShown: false
        }}/>
        <Stack.Screen 
        name="CreditCardPage" 
        component={CreditCardPage} 
        options={{
          headerShown: false
        }}/>
        <Stack.Screen 
        name="SavedMoney" 
        component={SavedMoney} 
        options={{
          headerShown: false
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}