import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Home, Dashboard, Historico } from './screens';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const screenOptions = {
  tabBarShowLabel: false,
  headerShown:false,
  tabBarStyle:{
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 60,
    background: "#fff"
  }
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen 
        name="Dashboard" 
        component={Dashboard}
        options={{
          tabBarIcon: ({focused}) =>{
            return (
              <View style={{alignItems: "center", justifyContent: "center"}}>
              <Entypo name="bar-graph" size={26} color={focused ? "#16247d" : "#111"} />
              <Text style={{fontSize: 12, color: "#16247d"}}> Dashboard</Text>
            </View>
            );
          }}
        } />
        <Tab.Screen 
        name="Home" 
        component={Home}
        options={{tabBarIcon: ({focused}) => {
          return (
            <View style={{
              top: Platform.OS == "ios" ? -10 : -20,
              width: Platform.OS == "ios" ? 50 : 60,
              height: Platform.OS == "ios" ? 50 : 60,
              borderRadius: Platform.OS == "ios" ? 25 : 30,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#16247d"
            }}>
              <Entypo name="home" size={26} color={"#fff"} />
            </View>
          )
        }}}
        />
        <Tab.Screen 
        name="Histórico" 
        component={Historico} 
        options={{
          tabBarIcon: ({focused}) =>{
            return (
              <View style={{alignItems: "center", justifyContent: "center"}}>
              <Entypo name="back-in-time" size={26} color={focused ? "#16247d" : "#111"} />
              <Text style={{fontSize: 12, color: "#16247d"}}> Histórico</Text>
            </View>
            );
          }}
        }/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}