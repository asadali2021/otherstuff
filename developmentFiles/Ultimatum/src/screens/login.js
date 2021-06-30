/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';

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
 import { BackgroundImage } from 'react-native-elements/dist/config';
 import LinearGradient from 'react-native-linear-gradient';
 import { Button } from 'react-native-elements';
 import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
 
 const SignUp = (props) => {
   return (
     <ScrollView>
       <BackgroundImage style={{
         resizeMode: 'contain',
 
       }} source={require('../images/back.jpeg')} >
         <View style={{ height: 800, width: 360, margin: 0 }}>
           <View style={styles.goup}>
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
 
 
           
           <View style={styles.email}>
             <LinearGradient
               start={{ x: 0.01, y: 0.01 }}
               end={{ x: 0.9, y: 0.89 }}
               colors={['#4634A9', '#F63669',]}
               style={
                 styles.ti2}>
 
               <TextInput style={{
                 position: 'relative',
                 left: 80,
                 color: '#e9e5e9',
                 fontFamily: 'Lato-Regular',
                 alignContent: 'center',
                 alignItems: 'center',
                 textAlign: 'center',
                 width: 150,
               }}
                 placeholder="EMAIL ADDRESS"
                 placeholderTextColor="#e9e5e9"></TextInput>
 
             </LinearGradient>
           </View>
           <View style={styles.passw}>
             <LinearGradient
               start={{ x: 0.01, y: 0.01 }}
               end={{ x: 0.9, y: 0.89 }}
               colors={['#4634A9', '#F63669',]}
               style={
                 styles.ti3}>
 
               <TextInput style={{
                 position: 'relative',
                 left: 80,
                 color: '#e9e5e9',
                 fontFamily: 'Lato-Regular',
                 alignContent: 'center',
                 alignItems: 'center',
                 textAlign: 'center',
                 width: 150,
               }}
 
                 placeholder="PASSWORD"
                 keyboardType="visible-password"
 
                 placeholderTextColor="#e9e5e9"></TextInput>
 
             </LinearGradient>
           </View>
           <View style={styles.bLogin}>
 
             <Button title=">" activeOpacity={0.7}
               ViewComponent={LinearGradient} // Don't forget this!
               linearGradientProps={{
                 colors: ['#4634A9', '#F63669'],
                 start: { x: 0.4, y: 0.9 },
                 end: { x: 0.9, y: 0 },
               }}
               style={{ width: 80, height: 50, }}
               onPress={() => props.navigation.navigate("HomeStackScreen")}>
 
               {/* <FontAwesome5 name={'angle-right'} size={36} solid style={{ color: '#e9e5e9' }} /> */}
             </Button>
 
           </View>
           <View style={styles.q2}>
             <Text style={{ color: '#e9e5e9' }}>DON'T HAVE AN ACCOUNT?</Text>
 
           </View>
 
           <View style={styles.ult}>
             <Text style={styles.txt}>ULTIMATUM</Text>
           </View>
           
         </View>
       </BackgroundImage>
     </ScrollView>
 
   );
 };
 
 const styles = StyleSheet.create({
   goup: {
     zIndex: 1,
     flex: 1,
   },
 
   ult: {
    
     position: 'relative',
     bottom: 312,
     right: 12,
     width: 50,
     zIndex: 6,
     flex: 1,
   },
   nm: {
     position: 'relative',
     top: 50,
     left: 32,
   },
   email: {
     position: 'relative',
     top: 50,
     left: 32,
   },
   passw: {
 
 
     position: 'relative',
     top: 50,
     left: 32,
   },
 
   bLogin: {
 
     alignItems: 'center',
     position: 'relative',
     top: 300,
     left: 150,
     width: 60,
   },
   txt: {
     fontFamily: 'FirstJob-X8rP',
     fontSize: 26,
     marginLeft: 130,
     width: 180,
     color: '#e30ce3',
   },
   s: {
     display: 'flex',
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
     height: 220,
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
 
     bottom: 440,
     left: 144,
 
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
     top: 150,
     left: 120,
     fontFamily: 'Lato-Regular',
 
   },
   q2: {
     color: '#e9e5e9',
     position: 'relative',
     top: 310,
     left: 100,
     fontFamily: 'Lato-Regular',
 
   },
   ti1: {
 
     width: 300,
     height: 40,
 
     borderTopLeftRadius: 15,
     borderTopRightRadius: 15,
 
 
   },
   ti2: {
 
     width: 300,
     height: 40,
     borderTopLeftRadius: 15,
     borderTopRightRadius: 15,
   },
   ti3: {
 
     width: 300,
     height: 40,
 
     borderBottomRightRadius: 15,
     borderBottomLeftRadius: 15,
 
 
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
 
 
 });
 
 export default SignUp;
 