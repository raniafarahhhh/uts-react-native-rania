import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen, LoginScreen, RegisterScreen, SearchScreen, ProfileScreen, ReelsScreen, ShopScreen, SplashScreen, MsgScreen, EditScreen } from './pages';
import { Image } from 'react-native';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigation() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'blue', // Warna teks tombol aktif (misalnya biru)
        inactiveTintColor: 'black',
        showLabel: false, // Menghilangkan teks di bawah ikon
      }}
      screenOptions={{headerShown: false}}
    >
      <Tab.Screen
        name="Username"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('./assets/icons8-home.png')}
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }}
      />
      
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('./assets/icons8-search.png')}
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Shop"
        component={ShopScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('./assets/icons8-bag.png')}
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Reels"
        component={ReelsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('./assets/icons8-reels.png')}
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('./assets/icons8-profile.png')}
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }}
      />
    </Tab.Navigator>

  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Splash'>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Home" component={TabNavigation} options={{ headerShown: false }}/>
        <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Massage" component={MsgScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Edit" component={EditScreen} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
