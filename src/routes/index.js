import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Splash,OnBoard,Register,Login,Registerr,Registerrr } from '../screens';
import MainNavigator from './MainNavigator';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions = {{
				headerShown : false,
				}}>
				<Stack.Screen name = "Splash" component = {Splash} />
				<Stack.Screen name ='OnBoard' component={OnBoard}/>
				<Stack.Screen name = "MainNavigator" component = {MainNavigator} />
				<Stack.Screen name ='Register' component={Register}/>
				<Stack.Screen name ='Registerr' component={Registerr}/>
				<Stack.Screen name ='Registerrr' component={Registerrr}/>
				<Stack.Screen name ='Login' component={Login}/>
			</Stack.Navigator>
		</NavigationContainer>
  );
}

export default AppNavigator;
