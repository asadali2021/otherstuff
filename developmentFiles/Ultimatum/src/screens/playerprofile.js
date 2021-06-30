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
   Image,
   TouchableOpacity,
   useColorScheme,
   View,
   Button,
 } from 'react-native';
 
 import {
   Colors,
 
 } from 'react-native/Libraries/NewAppScreen';
 
 import LinearGradient from 'react-native-linear-gradient';
 import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
 
 const PlayerProfile = () => {
   
 
   return (
     
       
       <ScrollView>
         {/* '#4634A9', '#F63669' */}
         <View
           style={{
             backgroundColor: '#000',
             height: 800,
           }}>
           <View>
             <View style={styles.userbig}>
               <FontAwesome5 name={'user-circle'} size={78} style={{ color: '#e9e5e9' }} solid />
             </View>
             <View>
 
               <View style={{
                 position: 'relative',
                 top: 28
               }}>
                 <Text style={{
                   position: 'relative',
                   left: 44,
                   fontSize: 18,
                   color: '#e9e5e9',
                   fontFamily: 'Lato-Thin',
                 }}>354</Text>
                 <Text style={{
                   position: 'relative',
                   left: 30,
                   fontSize: 11,
                   color: '#576E98',
                   fontFamily: 'Lato-Regular',
                 }}>FOLLOWING</Text>
               </View>
               <View style={{
                 position: 'relative',
                 bottom: 11,
                 left: 242,
               }}>
                 <Text style={{
                   position: 'relative',
                   left: 44,
                   fontSize: 18,
                   color: '#e9e5e9',
                   fontFamily: 'Lato-Thin',
                 }}>85k</Text>
                 <Text style={{
                   position: 'relative',
                   left: 30,
                   fontSize: 11,
                   color: '#576E98',
                   fontFamily: 'Lato-Regular',
                 }}>FOLLOWERS</Text>
               </View>
             </View>
 
             <View style={styles.starback}>
               <FontAwesome5 name={'star'} size={8} style={{
                 color: '#e9e5e9', position: 'relative',
                 top: 4,
                 left: 5
               }} solid />
             </View>
             <View>
               <Text style={{
                 position: 'relative',
                 left: 90,
                 fontSize: 34,
                 color: '#fff',
                 fontFamily: 'Lato-Thin',
               }}>Shawn_Sean</Text>
               <Text style={{
                 position: 'relative',
                 left: 148,
                 fontSize: 12,
                 color: '#e9e5e9',
                 fontFamily: 'Lato-Regular'
               }}>@shawnsean</Text>
             </View>
             <View>
               <Text style={{
                 position: 'relative',
                 left: 125,
                 top: 35,
                 fontSize: 12,
                 color: '#576E98',
                 fontFamily: 'Lato-Regular'
               }}>Challenges Complete</Text>
             </View>
             <View>
               <Text style={{
                 position: 'relative',
                 left: 130,
                 top: 150,
                 fontSize: 12,
                 color: '#576E98',
                 fontFamily: 'Lato-Regular'
               }}>RECENT ACTIVITY</Text>
             </View>
             <View style={styles.up}>
               <Text style={{
                 position: 'relative',
                 left: 68,
                 top: 210,
                 fontSize: 16,
                 fontWeight: '900',
                 color: '#e9e5e9',
                 fontFamily: 'Lato-Thin'
               }}>Paul Shaw followed</Text><Text style={{
                 position: 'relative',
                 left: 207,
                 top: 189,
                 fontSize: 16,
                 fontWeight: '900',
                 color: '#F4376D',
                 fontFamily: 'Lato-Thin'
               }}>Nathan Hunt</Text>
               <Text style={{
                 color: '#e9e5e9', position: 'relative',
                 left: 297,
                 top: 170
               }}>,</Text>
               <Text style={{
                 color: '#F4376D', position: 'relative',
                 left: 90,
                 top: 170, fontFamily: 'Lato-Thin',
                 fontSize: 16,
               }}>Carolyn Miller</Text>
               <Text style={{
                 color: '#e9e5e9', position: 'relative',
                 left: 190,
                 top: 150, fontFamily: 'Lato-Thin', fontSize: 16
               }}>&</Text>
               <Text style={{
                 color: '#F4376D', position: 'relative',
                 left: 207,
                 top: 127, fontFamily: 'Lato-Thin', fontSize: 16
               }}>two others</Text>
               <Text style={{
                 color: '#e9e5e9', position: 'relative',
                 left: 282,
                 top: 108
               }}>.</Text>
 
             </View>
             <View>
               <Text style={{
                 color: '#576E98', fontSize: 12, position: 'relative',
                 left: 152,
                 top: 86
               }}>2 hours ago</Text>
             </View>
           </View>
           <View style={styles.upa}>
           <LinearGradient
              start={{ x: 0.4, y: 0.9 }}
              end={{ x: 0.9, y: 0 }}
              colors={['#181D28', '#1A1F2B00']}
              style={{opacity: 0.3}}>
             <Text style={{
               position: 'relative',
               left: 68,
               top: 210,
               fontSize: 16,
               fontWeight: '900',
               color: '#e9e5e9',
               fontFamily: 'Lato-Thin'
             }}>Paul Shaw followed</Text><Text style={{
               position: 'relative',
               left: 207,
               top: 189,
               fontSize: 16,
               fontWeight: '900',
               color: '#F4376D',
               fontFamily: 'Lato-Thin'
             }}>Nathan Hunt</Text>
             <Text style={{
               color: '#e9e5e9', position: 'relative',
               left: 297,
               top: 170
             }}>,</Text>
             <Text style={{
               color: '#F4376D', position: 'relative',
               left: 90,
               top: 170, fontFamily: 'Lato-Thin',
               fontSize: 16,
             }}>Carolyn Miller</Text>
             <Text style={{
               color: '#e9e5e9', position: 'relative',
               left: 190,
               top: 150, fontFamily: 'Lato-Thin', fontSize: 16
             }}>&</Text>
             <Text style={{
               color: '#F4376D', position: 'relative',
               left: 207,
               top: 127, fontFamily: 'Lato-Thin', fontSize: 16
             }}>two others</Text>
             <Text style={{
               color: '#e9e5e9', position: 'relative',
               left: 282,
               top: 108
             }}>.</Text>
             <View>
               <Text style={{
                 color: '#576E98', fontSize: 12, position: 'relative',
                 left: 152,
                 top: 126
               }}>2 hours ago</Text>
             </View>
             </LinearGradient>
           </View>
           <View>
           <View style={styles.down}>
            <LinearGradient
              start={{ x: 0.01, y: 0.01 }}
              end={{ x: 0.9, y: 0.89 }}
              colors={['#4634A9', '#F63669',]}
              style={
                styles.b1}>
              <TouchableOpacity activeOpacity={0.7}>
                <Text style={{
                  position: 'relative',
                  top: 10,
                  left: 42,
                  color: '#e9e5e9',
                  fontFamily: 'Lato-Regular',
                }}>SETTINGS</Text>
              </TouchableOpacity>
            </LinearGradient>
            <LinearGradient
              start={{ x: 0.01, y: 0.01 }}
              end={{ x: 0.9, y: 0.89 }}
              colors={['#4634A9', '#F63669',]}
              style={
                styles.b2}>
              <TouchableOpacity activeOpacity={0.7}>
                <Text style={{
                  position: 'relative',
                  top: 10,
                  left: 34,
                  color: '#e9e5e9',
                  fontFamily: 'Lato-Regular',
                }}>CHALLENGE</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
           </View>
         </View>
       </ScrollView>
    
   );
 };
 
 const styles = StyleSheet.create({
   down:{
     position: 'relative',
     top: 328,
     right: 10,
   },
   b1: {
     color: '#e9e5e9',
     width: 150,
     height: 40,
     position: 'relative',
     borderRadius: 40 / 2,
     bottom: 290,
     left: 35,
     zIndex: 1,
   },
   b2: {
     color: '#e9e5e9',
     width: 150,
     height: 40,
     position: 'relative',
     borderRadius: 40 / 2,
     bottom: 330,
     left: 195,
     zIndex: 1,
   },
   upa: {
     position: 'relative',
     bottom: 100,
 
   },
   up: {
     position: 'relative',
     bottom: 40,
   },
   starback: {
     backgroundColor: '#F4376D',
     width: 18,
     height: 18,
     borderRadius: 50 / 2,
     position: 'relative',
     bottom: 74,
     left: 198,
     zIndex: 1,
   },
   poscircle: {
     position: 'relative',
     top: 580,
   },
   userbig: {
     position: 'relative',
     top: 80,
     left: 146,
     zIndex: 1,
     display: 'flex',
     flexDirection: 'row',
   },
 });
 
 export default PlayerProfile;
 