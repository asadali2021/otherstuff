/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import React from 'react';
 import type { Node } from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
   Image,
   TextInput,
   TouchableOpacity,
 } from 'react-native';
 
 import LinearGradient from 'react-native-linear-gradient';
 import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
 
 const Main: () => Node = () => {
   return (
     <ScrollView>
       <View style={{height:800}}>
         <View>
           <Image style={{
             width: 380,
             height: 800,
             position: 'absolute',
             zIndex: -2,
             resizeMode: 'cover',
             
           }} source={require('../images/back.jpeg')} />
         
 
 
         <View style={{ zIndex: 1 }}>
           <LinearGradient
             start={{ x: 0.4, y: 0.9 }}
             end={{ x: 0.9, y: 0 }}
             colors={['#4634A9', '#F63669',]}
             style={
               styles.circle5}>
           </LinearGradient>
           <LinearGradient
             start={{ x: 0.4, y: 0.9 }}
             end={{ x: 0.9, y: 0 }}
             colors={['#4634A9', '#F63669',]}
             style={
               styles.circle4}>
           </LinearGradient>
           <LinearGradient
             start={{ x: 0.4, y: 0.9 }}
             end={{ x: 0.9, y: 0 }}
             colors={['#4634A9', '#F63669',]}
             style={
               styles.circle3}>
           </LinearGradient>
           <LinearGradient
             start={{ x: 0.4, y: 0.9 }}
             end={{ x: 0.9, y: 0 }}
             colors={['#4634A9', '#F63669',]}
             style={
               styles.circle2}>
           </LinearGradient>
           <LinearGradient
             start={{ x: 0.4, y: 0.9 }}
             end={{ x: 0.9, y: 0 }}
             colors={['#4634A9', '#F63669',]}
             style={
               styles.circle1}>
           </LinearGradient>
         </View>
         <View style={styles.s}>
           <Text style={styles.txt}>ULTIMATUM</Text>
         </View>
         <View>
           <Text style={styles.q1}>WHAT ARE YOU ?</Text>
         </View>
         <View style={styles.up}>
           <LinearGradient
             start={{ x: 1, y: 1 }}
             end={{ x: 0.9, y: 0.9 }}
             colors={['#4634A9', '#F63669',]}
             style={
               styles.b1}>
             <TouchableOpacity>
               <Text style={{
                 position: 'relative',
                 top: 10,
                 left: 26,
                 color: '#e9e5e9',
                 fontFamily: 'Lato-Regular',
               }}>WATCHER</Text>
             </TouchableOpacity>
           </LinearGradient>
           <LinearGradient
             start={{ x: 1, y: 1 }}
             end={{ x: 0.9, y: 0.89 }}
             colors={['#4634A9', '#F63669',]}
             style={
               styles.b2}>
             <TouchableOpacity>
               <Text style={{
                 position: 'relative',
                 top: 10,
                 left: 36,
                 color: '#e9e5e9',
                 fontFamily: 'Lato-Regular',
               }}>PLAYER</Text>
             </TouchableOpacity>
           </LinearGradient>
         </View>
         <View style={styles.fl}>
           <View style={styles.f1}>
             <FontAwesome5 name={'eye'} size={16} solid style={{ color: '#e9e5e9' }} />
             <Text style={{ color: '#e9e5e9', marginLeft: 50 }}>29,349 watchers online</Text>
           </View>
           <View style={styles.f2}>
             <FontAwesome5 name={'user'} size={16} solid style={{ color: '#e9e5e9' }} />
             <Text style={{ color: '#e9e5e9', marginLeft: 64 }}> 200 players online</Text>
           </View>
         </View>
         <View>
           <LinearGradient
             start={{ x: 0.4, y: 0.9 }}
             end={{ x: 0.9, y: 0 }}
             colors={['#4634A9', '#F63669',]}
             style={
               styles.circle6}>
             <TouchableOpacity>
               <Text style={{
                 position: 'relative',
                 top: 35,
                 left: 18,
                 color: '#e9e5e9',
                 fontFamily: 'Lato-Regular',
               }}>SIGN UP</Text>
             </TouchableOpacity>
           </LinearGradient>
           <Text style={styles.q2}>ALREADY HAVE ACCOUNT?</Text>
         </View>
         </View>
       </View>
     </ScrollView>
 
   );
 };
 
 const styles = StyleSheet.create({
  txt: {
    fontFamily: 'FirstJob-X8rP',
    fontSize: 26,
    position: 'absolute',
    bottom: 890,
    left: 110,
    zIndex: 6,
    width: 180,
    color: '#e30ce3',
  },
  s: {
    flex: 1,
  },
  circle1: {
    width: 100,
    height: 100,
    position: 'relative',
    borderRadius: 100 / 2,

    bottom: 856,
    left: 130,
    opacity: 0.7,
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },

  circle2: {
    width: 160,
    height: 160,
    position: 'relative',
    borderRadius: 160 / 2,

    bottom: 728,
    left: 100,
    opacity: 0.7,
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  circle3: {
    width: 220,
    height:220,
    position: 'relative',
    borderRadius: 220 / 2,
    bottom: 539,
    left: 70,
    opacity: 0.3,
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  circle4: {
    width: 260,
    height: 260,
    position: 'relative',
    borderRadius: 260 / 2,

    opacity: 0.1,
    bottom: 300,
    left: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  circle5: {
    width: 340,
    height: 340,
    position: 'relative',
    borderRadius: 340 / 2,

    opacity: 0.2,
    top: 0,
    left: 10,
  },
  circle6: {
    width: 90,
    height: 90,
    position: 'absolute',
    borderRadius: 90 / 2,

    bottom: 418,
    left: 134,

    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
   q1: {
     color: '#e9e5e9',
     position: 'relative',
     bottom: 750,
     left: 120,
     fontFamily: 'Lato-Regular',
 
   },
   q2: {
     color: '#e9e5e9',
     position: 'relative',
     bottom: 375,
     left: 90,
     fontFamily: 'Lato-Regular',
 
   },
   b1: {
     color: '#e9e5e9',
     width: 120,
     height: 40,
     position: 'relative',
     borderRadius: 40 / 2,
     bottom: 290,
     left: 35,
     zIndex: 1,
   },
   b2: {
     color: '#e9e5e9',
     width: 120,
     height: 40,
     position: 'relative',
     borderRadius: 40 / 2,
     bottom: 330,
     left: 195,
     zIndex: 1,
   },
   f1: {
     position: 'relative',
 
     bottom: 330,
     left: 185,
     zIndex: 1,
     display: 'flex',
     flexDirection: 'row',
 
 
   },
   f2: {
     position: 'relative',
 
     bottom: 316,
     left: 185,
     zIndex: 1,
     display: 'flex',
     flexDirection: 'row',
   },
   fl: {
     display: 'flex',
     flexDirection: 'column',
     position: 'relative',
 
     bottom: 270,
     right: 132,
   },
   up: {
     position: 'absolute',
 
     bottom: 400,
 
   },
 
 });
 
 export default Main;
 