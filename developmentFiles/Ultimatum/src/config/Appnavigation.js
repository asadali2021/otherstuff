import React from 'react';
import { Button, View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import Main from '../screens/main';
import Login from '../screens/login';
import SignUp from '../screens/signup';
import LeaderBoard from '../screens/leaderboard';
import Challenge from '../screens/challenge';
import PlayerProfile from '../screens/playerprofile';
import Home from  '../screens/home';
import Poll from '../screens/poll';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

// const AppNavigation = () => {
//     return (
//       function HomeScreen() {
//         return (
//           <View>
//             <Text style={{textAlign: 'center', marginTop: 300}}>
//               Home Screen
//             </Text>
//           </View>
//         );
//       };
      function NotificationsScreen({ navigation }) {
        return (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Button 
            onPress={() => navigation.goBack()}
            title="Go back home"
            />
          </View>
        );
      }
      const Drawer = createDrawerNavigator();
      const MainStack = createStackNavigator();
      const LoginStack = createStackNavigator();
      const SignUpStack = createStackNavigator();
      const LeaderBoardStack = createStackNavigator();
      const ChallengeStack = createStackNavigator();
      const PlayerProfileStack = createStackNavigator();
      const HomeStack = createStackNavigator();
      const PollStack = createStackNavigator();
      


      const MainStackScreen = (props) =>(
        <MainStack.Navigator screenOptions={{
                // headerStyle : {
                //   backgroundColor : '#009387'      
                // },
                // headerTintColor : '#fff',
                // headerTitleStyle : {
                //   fontWeight : "bold"
                // },
              }}>
                <MainStack.Screen name="Main" component={Main} options={{
                  
                  headerLeft : ()=>(
                    <Icon.Button name="menu" size={15}
                     backgroundColor = '#4634A9' onPress = {()=>{props.navigation.openDrawer()}} > </Icon.Button>
                  ),
                  title: null,
                    header:()=>null,
                }}/>
              
              </MainStack.Navigator> 
        )
      const SignUpStackScreen = (props) =>(
        <SignUpStack.Navigator screenOptions={{
                // headerStyle : {
                //   backgroundColor : '#F63669'      
                // },
                // headerTintColor : '#fff',
                // headerTitleStyle : {
                //   fontWeight : "bold"
                // },
              }}>
                <SignUpStack.Screen name="SignUp" component={SignUp} options={{
                  title : "Signup",
                  headerLeft : ()=>(
                    <Icon.Button name="menu" size={15}
                     backgroundColor = '#F63669' onPress = {()=>{props.navigation.openDrawer()}} > </Icon.Button>
                  ),
                  title: null,
                    header:()=>null,
                }}/>
              
              </SignUpStack.Navigator> 
        )
        const LoginStackScreen = (props) =>(
          <LoginStack.Navigator screenOptions={{
                  // headerStyle : {
                  //   backgroundColor : '#F63669'      
                  // },
                  // headerTintColor : '#fff',
                  // headerTitleStyle : {
                  //   fontWeight : "bold"
                  // },
                }}>
                  <LoginStack.Screen name="Login" component={Login} options={{
                    title : "Login",
                    headerLeft : ()=>(
                      <Icon.Button name="menu" size={15}
                       backgroundColor = '#F63669' onPress = {()=>{props.navigation.openDrawer()}} > </Icon.Button> 
                    ),
                    title: null,
                    header:()=>null,
                  }}/>
                
                </LoginStack.Navigator> 
          )
        const LeaderBoardStackScreen = (props) =>(
          <LeaderBoardStack.Navigator screenOptions={{
                  headerStyle : {
                    backgroundColor : '#F63669'      
                  },
                  headerTintColor : '#fff',
                  headerTitleStyle : {
                    fontWeight : "bold"
                  },
                }}>
                  <LeaderBoardStack.Screen name="LeaderBoard" component={LeaderBoard} options={{
                    title : "Leader Board",
                    headerLeft : ()=>(
                      <Icon.Button name="menu" size={15}
                       backgroundColor = '#F63669' onPress = {()=>{props.navigation.openDrawer()}} > </Icon.Button>
                    )
                  }}/>
                
                </LeaderBoardStack.Navigator> 
          )
        const ChallengeStackScreen = (props) =>(
          <ChallengeStack.Navigator screenOptions={{
                  headerStyle : {
                    backgroundColor : '#F63669'      
                  },
                  headerTintColor : '#fff',
                  headerTitleStyle : {
                    fontWeight : "bold"
                  },
                }}>
                  <ChallengeStack.Screen name="Challenge" component={Challenge} options={{
                    title : "Challenge",
                    headerLeft : ()=>(
                      <Icon.Button name="menu" size={15}
                       backgroundColor = '#F63669' onPress = {()=>{props.navigation.openDrawer()}} > </Icon.Button>
                    )
                  }}/>
                
                </ChallengeStack.Navigator> 
          )
        const PlayerProfileStackScreen = (props) =>(
          <PlayerProfileStack.Navigator screenOptions={{
                  headerStyle : {
                    backgroundColor : '#F63669'      
                  },
                  headerTintColor : '#fff',
                  headerTitleStyle : {
                    fontWeight : "bold"
                  },
                }}>
                  <PlayerProfileStack.Screen name="PlayerProfile" component={PlayerProfile} options={{
                    title : "Player Profile",
                    headerLeft : ()=>(
                      <Icon.Button name="menu" size={15}
                       backgroundColor = '#F63669' onPress = {()=>{props.navigation.openDrawer()}} > </Icon.Button>

                    )
                  }}/>
                
                </PlayerProfileStack.Navigator> 
          )
        const HomeStackScreen = (props) =>(
          <HomeStack.Navigator screenOptions={{
                  headerStyle : {
                    backgroundColor : '#F63669',
                         
                  },
                  headerTintColor : '#fff',
                  textAlign: 'center', 
                  headerTitleStyle : {
                    fontWeight : "bold",
                    
                  },
                }}>
                  <HomeStack.Screen name="Home" component={Home} options={{
                    title : "Start Stream",
                    headerLeft : ()=>(
                      <Icon.Button name="menu" size={15}
                       backgroundColor = '#F63669' onPress = {()=>{props.navigation.openDrawer()}} > </Icon.Button>
                    )
                  }}/>
                
                </HomeStack.Navigator> 
          )
        const PollStackScreen = (props) =>(
          <PollStack.Navigator screenOptions={{
                  headerStyle : {
                    backgroundColor : '#F63669'      
                  },
                  headerTintColor : '#fff',
                  headerTitleStyle : {
                    fontWeight : "bold"
                  },
                }}>
                  <PollStack.Screen name="Poll" component={Poll} options={{
                    title : "Poll",
                    headerLeft : ()=>(
                      <Icon.Button name="menu" size={15}
                       backgroundColor = '#F63669' onPress = {()=>{props.navigation.openDrawer()}} > </Icon.Button>
                    )
                  }}/>
                
                </PollStack.Navigator> 
          )
      const AppNavigation = (props) => {
        return (
          <NavigationContainer>
            <Drawer.Navigator initialRouteName="MainStackScreen">
              <Drawer.Screen name="MainStackScreen" component={MainStackScreen} 
              options={{
                
                title: 'Home',
                drawerIcon: () => null ,
                
            }}
              />
              <Drawer.Screen name="SignUpStackScreen" component={SignUpStackScreen} options={{
                drawerLabel: () => null,
                title: null,
                drawerIcon: () => null ,
                
                
            }}/>
              <Drawer.Screen name="LoginStackScreen" component={LoginStackScreen} options={{
                drawerLabel: () => null,
                title: null,
                drawerIcon: () => null ,
                
                
            }} />
              <Drawer.Screen name="HomeStackScreen" component={HomeStackScreen}  options={{
                
                title: 'Start Stream',
                drawerIcon: () => null ,
                
            }} />
              {/* <Drawer.Screen name="StartStreamStackScreen" /> */}
              <Drawer.Screen name="PlayerProfileStackScreen" component={PlayerProfileStackScreen} options={{
                
                title: 'Profile',
                drawerIcon: () => null ,
                color: '#fff',
                
            }}/>
              <Drawer.Screen name="PollStackScreen" component={PollStackScreen}  options={{
                title: 'Poll',
                drawerIcon: () => null,
                color: '#fff',

              }} />
              <Drawer.Screen name="LeaderBoardStackScreen" component={LeaderBoardStackScreen} />
              <Drawer.Screen name="ChallengeStackScreen" component={ChallengeStackScreen} />
            </Drawer.Navigator>
          </NavigationContainer>
        )
      }

      // <NavigationContainer>
      //   <Stack.Navigator>
      //     <Stack.Screen name="Poll" component={Poll} />
      //     <Stack.Screen name="Login" component={Login} />
      //     <Stack.Screen name="SignUp" component={SignUp} />
      //     <Stack.Screen name="Main" component={Main} />
      //     <Stack.Screen name="Home" component={Home} />
      //     <Stack.Screen name="LeaderBoard" component={LeaderBoard} />
      //     <Stack.Screen name="Challenge" component={Challenge} />
      //     <Stack.Screen name="PlayerProfile" component={PlayerProfile} />
      //   </Stack.Navigator>
      // </NavigationContainer>
  //   );
  // };
  
  export default AppNavigation;