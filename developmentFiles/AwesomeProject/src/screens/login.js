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
 
 const Login: () => Node = () => {
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
        
         <View style={styles.up}>
          
           <LinearGradient
             start={{ x: 0.01, y: 0.01 }}
             end={{ x: 0.9, y: 0.89 }}
             colors={['#4634A9', '#F63669',]}
             style={
               styles.ti2}>
             
               <TextInput style={{
                 position: 'relative',
                 marginLeft: 100,
                 color: '#e9e5e9',
                 fontFamily: 'Lato-Regular',
               }}
               placeholder="EMAIL ADDRESS"
               placeholderTextColor="#e9e5e9"></TextInput>
            
           </LinearGradient>
           <LinearGradient
             start={{ x: 0.01, y: 0.01 }}
             end={{ x: 0.9, y: 0.89 }}
             colors={['#4634A9', '#F63669',]}
             style={
               styles.ti3}>
             
               <TextInput style={{
                 position: 'relative',
                 marginLeft: 110,
                 color: '#e9e5e9',
                 fontFamily: 'Lato-Regular',
               }}
               placeholder="PASSWORD"
               placeholderTextColor="#e9e5e9"></TextInput>
            
           </LinearGradient>
           <Text style={styles.q3}>FORGOT YOUR PASSWORD?</Text>
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
                 top: 16,
                 left: 28,
                 color: '#e9e5e9',
                 fontFamily: 'Lato-Regular',
               }}><FontAwesome5 name={'angle-right'} size={36} solid style={{ color: '#e9e5e9' }} /></Text>
             </TouchableOpacity>
           </LinearGradient>
           <Text style={styles.q2}>DON'T HAVE AN ACCOUNT?</Text>
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
     width: 70,
     height: 70,
     position: 'absolute',
     borderRadius: 70 / 2,
 
     bottom: 370,
     left: 142,
 
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
     bottom: 328,
     left: 90,
     fontFamily: 'Lato-Regular',
 
   },
   q3: {
     color: '#e9e5e9',
     position: 'relative',
     bottom: 265,
     left: 90,
     fontFamily: 'Lato-Regular',
 
   },
   ti1: {
     color: '#e9e5e9',
     width: 300,
     height: 40,
     position: 'relative',
     borderTopLeftRadius: 15,
     borderTopRightRadius: 15,
     bottom: 290,
     left: 25,
     zIndex: 1,
   },
   ti2: {
     color: '#e9e5e9',
     width: 300,
     height: 40,
     borderTopLeftRadius: 15,
     borderTopRightRadius: 15,
     position: 'relative',
     bottom: 290,
     left: 25,
     zIndex: 1,
   },
   ti3: {
     color: '#e9e5e9',
     width: 300,
     height: 40,
     position: 'relative',
     borderBottomLeftRadius: 15,
     borderBottomRightRadius: 15,
     bottom: 290,
     left: 25,
     
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
 
     bottom: 310,
     left: 185,
     zIndex: 1,
     display: 'flex',
     flexDirection: 'row',
   },
   fl: {
     display: 'flex',
     flexDirection: 'column',
     position: 'relative',
 
     bottom: 260,
     right: 108,
   },
   up: {
     position: 'absolute',
 
     bottom: 320,
 
   },
 
 });
 
 export default Login;
 