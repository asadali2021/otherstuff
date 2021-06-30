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
 
 const LeaderBoard = () => {
 
 
   return (
     
       
       <ScrollView
         
         >
         {/* '#4634A9', '#F63669' */}
         <View style={{
             backgroundColor: '#000',
             height: 800,
           }}>
           <View style={{
             position:'relative',
             top: 30,
           }}>
           <View style={{
             position: 'relative',
             top: 60,
             }}>
             <TouchableOpacity style={
               styles.banner}
               activeOpacity={1}>
               <Text style={{
                 position: 'relative',
                 top: 26,
                 left: 40,
                 lineHeight: 30,
                 fontSize: 24,
                 fontWeight: 'bold',
                 color: '#e9e5e9',
                 fontFamily: 'Lato-Regular',
               }}>Win $10</Text>
               <Text style={{
                 position: 'relative',
                 top: 40,
                 left: 40,
                 lineHeight: 16,
                 fontSize: 10,
                 width: 210,
                 fontWeight: 'bold',
                 color: '#e9e5e9',
                 fontFamily: 'Lato-Regular',
               }}>Lorem ipsum dolor sit amet {"\n"} consectetur adipisicing elit.{"\n"} Illum distinctio.Illum {"\n"} distinctio.</Text>
             </TouchableOpacity>
             <View style={styles.star}>
               <FontAwesome5 name={'star'} size={36} style={{ color: '#e9e5e9' }} solid />
             </View>
             <View>
               <Text style={{
                 position: 'relative',
                 top: 84,
                 left: 26,
                 fontSize: 11,
                 color: '#e9e5e9',
                 fontFamily: 'Lato-Regular',
               }}>CHECK THE LIST OF 5 TOP PLAYERS  !</Text>
             </View>
             <TouchableOpacity style={styles.usra} activeOpacity={0.7}>
 
               <View style={styles.user}>
                 <FontAwesome5 name={'user-circle'} size={26} style={{ color: '#e9e5e9' }} solid />
               </View>
               <View style={styles.firgreendot}>
               </View>
               <View>
                 <Text style={{
                   position: 'relative',
                   bottom: 19,
                   left: 50,
                   fontSize: 9,
                   color: '#e9e5e9',
                   fontFamily: 'Lato-Regular',
                 }}>Shawn_Sean</Text>
               </View>
             </TouchableOpacity>
             <TouchableOpacity style={styles.usrb} activeOpacity={0.8}>
 
               <View style={styles.user}>
                 <FontAwesome5 name={'user-circle'} size={26} style={{ color: '#e9e5e9' }} solid />
               </View>
               <View style={styles.firreddot}>
               </View>
               <View>
                 <Text style={{
                   position: 'relative',
                   bottom: 19,
                   left: 50,
                   fontSize: 9,
                   color: '#e9e5e9',
                   fontFamily: 'Lato-Regular',
                 }}>Elvis_Elon</Text>
               </View>
             </TouchableOpacity>
             <TouchableOpacity style={styles.usrc} activeOpacity={0.7}>
 
               <View style={styles.user}>
                 <FontAwesome5 name={'user-circle'} size={26} style={{ color: '#e9e5e9' }} solid />
               </View>
               <View style={styles.firgreendot}>
               </View>
               <View>
                 <Text style={{
                   position: 'relative',
                   bottom: 19,
                   left: 50,
                   fontSize: 9,
                   color: '#e9e5e9',
                   fontFamily: 'Lato-Regular',
                 }}>Maria.B</Text>
               </View>
             </TouchableOpacity>
             <TouchableOpacity style={styles.usrd} activeOpacity={0.7}>
 
               <View style={styles.user}>
                 <FontAwesome5 name={'user-circle'} size={26} style={{ color: '#e9e5e9' }} solid />
               </View>
               <View style={styles.firgreendot}>
               </View>
               <View>
                 <Text style={{
                   position: 'relative',
                   bottom: 19,
                   left: 50,
                   fontSize: 9,
                   color: '#e9e5e9',
                   fontFamily: 'Lato-Regular',
                 }}>Jessica_Arr</Text>
               </View>
             </TouchableOpacity>
             <TouchableOpacity style={styles.usre} activeOpacity={0.7}>
 
               <View style={styles.user}>
                 <FontAwesome5 name={'user-circle'} size={26} style={{ color: '#e9e5e9' }} solid />
               </View>
               <View style={styles.firgreendot}>
               </View>
               <View>
                 <Text style={{
                   position: 'relative',
                   bottom: 19,
                   left: 50,
                   fontSize: 9,
                   color: '#e9e5e9',
                   fontFamily: 'Lato-Regular',
                 }}>Lady_Gaga</Text>
               </View>
             </TouchableOpacity>
             <View style={styles.stacka}>
               <View>
                 <View style={styles.flexa}>
                   <FontAwesome5 name={'trophy'} size={10} style={{ color: '#8D99B2' }} solid />
                 </View>
                 <View style={styles.fonta}>
                   <Text style={{ color: '#8D99B2', fontSize: 10, fontFamily: 'Lato-Regular' }}> $3323</Text>
                 </View>
               </View>
               <View style={styles.flexb}>
                 <FontAwesome5 name={'globe-americas'} size={14} style={{ color: '#8D99B2' }} solid />
               </View>
               <View style={styles.fontb}>
                 <Text style={{ color: '#8D99B2', fontSize: 10, fontFamily: 'Lato-Regular' }}> #1</Text>
               </View>
             </View>
             <View style={styles.stackb}>
               <View>
                 <View style={styles.flexa}>
                   <FontAwesome5 name={'trophy'} size={10} style={{ color: '#8D99B2' }} solid />
                 </View>
                 <View style={styles.fonta}>
                   <Text style={{ color: '#8D99B2', fontSize: 10, fontFamily: 'Lato-Regular' }}> $3323</Text>
                 </View>
               </View>
               <View style={styles.flexb}>
                 <FontAwesome5 name={'globe-americas'} size={14} style={{ color: '#8D99B2' }} solid />
               </View>
               <View style={styles.fontb}>
                 <Text style={{ color: '#8D99B2', fontSize: 10, fontFamily: 'Lato-Regular' }}> #310</Text>
               </View>
             </View>
             <View style={styles.stackc}>
               <View>
                 <View style={styles.flexa}>
                   <FontAwesome5 name={'trophy'} size={10} style={{ color: '#8D99B2' }} solid />
                 </View>
                 <View style={styles.fonta}>
                   <Text style={{ color: '#8D99B2', fontSize: 10, fontFamily: 'Lato-Regular' }}> $3323</Text>
                 </View>
               </View>
               <View style={styles.flexb}>
                 <FontAwesome5 name={'globe-americas'} size={14} style={{ color: '#8D99B2' }} solid />
               </View>
               <View style={styles.fontb}>
                 <Text style={{ color: '#8D99B2', fontSize: 10, fontFamily: 'Lato-Regular' }}> #56</Text>
               </View>
             </View>
             <View style={styles.stackd}>
               <View>
                 <View style={styles.flexa}>
                   <FontAwesome5 name={'trophy'} size={10} style={{ color: '#8D99B2' }} solid />
                 </View>
                 <View style={styles.fonta}>
                   <Text style={{ color: '#8D99B2', fontSize: 10, fontFamily: 'Lato-Regular' }}> $3323</Text>
                 </View>
               </View>
               <View style={styles.flexb}>
                 <FontAwesome5 name={'globe-americas'} size={14} style={{ color: '#8D99B2' }} solid />
               </View>
               <View style={styles.fontb}>
                 <Text style={{ color: '#8D99B2', fontSize: 10, fontFamily: 'Lato-Regular' }}> #210</Text>
               </View>
             </View>
             <View style={styles.stacke}>
               <View>
                 <View style={styles.flexa}>
                   <FontAwesome5 name={'trophy'} size={10} style={{ color: '#8D99B2' }} solid />
                 </View>
                 <View style={styles.fonta}>
                   <Text style={{ color: '#8D99B2', fontSize: 10, fontFamily: 'Lato-Regular' }}> $3323</Text>
                 </View>
               </View>
               <View style={styles.flexb}>
                 <FontAwesome5 name={'globe-americas'} size={14} style={{ color: '#8D99B2' }} solid />
               </View>
               <View style={styles.fontb}>
                 <Text style={{ color: '#8D99B2', fontSize: 10, fontFamily: 'Lato-Regular' }}> #10</Text>
               </View>
             </View>
           </View>
           
           <View style={styles.poscircle}>
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
           </View>
         </View>
       </ScrollView>
     
   );
 };
 
 const styles = StyleSheet.create({
   poscircle:{
     position: 'relative',
     top: 580,
   },
   circle1: {
     width: 150,
     height: 150,
     position: 'relative',
     borderRadius: 150 / 2,
 
     bottom: 1130,
     left: 110,
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
     width: 244,
     height: 244,
     position: 'relative',
     borderRadius: 244 / 2,
 
     bottom: 919,
     left: 64,
     opacity: 0.2,
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
     width: 424,
     height: 424,
     position: 'relative',
     borderRadius: 424 / 2,
     bottom: 532,
     right: 32,
     opacity: 0.1,
     zIndex: -2,
     shadowColor: "#000",
     shadowOffset: {
       width: 1,
       height: 3,
     },
     shadowOpacity: 0.27,
     shadowRadius: 4.65,
 
     elevation: 6,
   },
   fonta: {
     marginLeft: 15,
     marginRight: 20,
     position: 'relative',
     bottom: 12,
   },
   fontb: {
     marginLeft: 1,
     marginRight: 15,
     position: 'relative',
     bottom: 1,
   },
   stacka: {
     display: 'flex',
     flexDirection: 'row',
     position: 'relative',
     bottom: 108,
     left: 205,
   },
   stackb: {
     display: 'flex',
     flexDirection: 'row',
     position: 'relative',
     bottom: 73,
     left: 205,
   },
   stackc: {
     display: 'flex',
     flexDirection: 'row',
     position: 'relative',
     bottom: 39,
     left: 205,
   },
   stackd: {
     display: 'flex',
     flexDirection: 'row',
     position: 'relative',
     bottom: 3,
     left: 205,
   },
   stacke: {
     display: 'flex',
     flexDirection: 'row',
     position: 'relative',
     top: 32,
     left: 205,
   },
   flexa: {
     display: 'flex',
     flexDirection: 'row',
     position: 'relative',
     top: 1,
   },
   flexb: {
     display: 'flex',
     flexDirection: 'row',
     marginRight: 12,
     position: 'relative',
     bottom: 2,
   },
   firgreendot: {
     backgroundColor: '#07E868',
     width: 6,
     height: 6,
     borderRadius: 50 / 2,
     position: 'relative',
     bottom: 16,
     left: 32,
     zIndex: 1,
   },
   firreddot: {
     backgroundColor: '#E4366F',
     width: 6,
     height: 6,
     borderRadius: 50 / 2,
     position: 'relative',
     bottom: 16,
     left: 32,
     zIndex: 1,
   },
   usra: {
     backgroundColor: '#222939',
     width: 330,
     height: 45,
     borderRadius: 50 / 2,
     position: 'relative',
     top: 100,
     left: 15,
   },
   usrb: {
     backgroundColor: '#222939',
     width: 330,
     height: 45,
     borderRadius: 50 / 2,
     position: 'relative',
     top: 115,
     left: 15,
   },
   usrc: {
     backgroundColor: '#222939',
     width: 330,
     height: 45,
     borderRadius: 50 / 2,
     position: 'relative',
     top: 130,
     left: 15,
   },
   usrd: {
     backgroundColor: '#222939',
     width: 330,
     height: 45,
     borderRadius: 50 / 2,
     position: 'relative',
     top: 145,
     left: 15,
   },
   usre: {
     backgroundColor: '#222939',
     width: 330,
     height: 45,
     borderRadius: 50 / 2,
     position: 'relative',
     top: 160,
     left: 15,
   },
   user: {
     position: 'relative',
     top: 10,
     left: 14,
     zIndex: 1,
     display: 'flex',
     flexDirection: 'row',
   },
   star: {
     position: 'relative',
     bottom: 1,
     left: 282,
     zIndex: 1,
     display: 'flex',
     flexDirection: 'row',
   },
   banner: {
     position: 'relative',
     top: 100,
     left: 15,
     backgroundColor: '#F63669',
     width: 330,
     height: 160,
 
     borderRadius: 40 / 2,
 
     zIndex: 1,
   },
   pos: {
     width: 140,
     height: 80,
     position: 'relative',
     top: 500,
     left: 35,
 
   },
   win: {
     position: 'relative',
     top: 440,
     left: 145,
   },
   sectionContainer: {
     marginTop: 32,
     paddingHorizontal: 24,
   },
   sectionTitle: {
     fontSize: 24,
     fontWeight: '600',
   },
   sectionDescription: {
     marginTop: 8,
     fontSize: 18,
     fontWeight: '400',
   },
   highlight: {
     fontWeight: '700',
   },
   t1: {
     backgroundColor: '#F63669',
     width: 330,
     height: 80,
     position: 'relative',
     borderRadius: 80 / 2,
     top: 110,
 
     left: 10,
     zIndex: 1,
   },
 });
 
 export default LeaderBoard;
 