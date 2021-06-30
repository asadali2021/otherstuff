/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { useState, useEffect } from 'react';
 
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
   FlatList,
 } from 'react-native';

 import {
   Colors,
 
 } from 'react-native/Libraries/NewAppScreen';
 import * as Progress from 'react-native-progress';
 import { ListItem } from 'react-native-elements';
 import LinearGradient from 'react-native-linear-gradient';
 import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
 
 const Poll = () => {
   const isDarkMode = useColorScheme() === 'dark';
 
   const backgroundStyle = {
     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
   };
 
   const list = [
     {
       q: 'What is the most important trait of event leaders posess?',
       a: 'Creativity',
       b: 'Confidence',
       c: 'Communication',
       d: 'Vision',
       
     },
    {
       q: 'What is the largest province of Pakistan?',
       a: 'Sindh',
       b: 'Balochistan',
       c: 'Punjab',
       d: 'N.W.F.P',
     },
     {
       q: 'What is the largest city of Pakistan?',
       a: 'Lahore',
       b: 'Karachi',
       c: 'Islamabad',
       d: 'Multan',
     },
   ];
   const [firstq, setFirstq] = useState(' Creativity Confidence Communication Vision');
  //  const [secondq, setSecondq] = useState();
  //  const [thirdq, setThirdq] = useState();
   
 
  //  renderItem = ({ item }) => (
  //    <ListItem bottomDivider>
 
  //      <ListItem.Content>
  //        <ListItem.Title>{item.q}</ListItem.Title>
  //        <ListItem.Subtitle>{item.a}</ListItem.Subtitle>
  //        <ListItem.Subtitle>{item.b}</ListItem.Subtitle>
  //        <ListItem.Subtitle>{item.c}</ListItem.Subtitle>
  //        <ListItem.Subtitle>{item.d}</ListItem.Subtitle>
  //      </ListItem.Content>
 
  //    </ListItem>
  //  )
 
 
 
 
 
 
 
   return (
     <SafeAreaView style={backgroundStyle}>
       <ScrollView>
       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
 
       {/* '#4634A9', '#F63669' */}
       <View
         style={{
           backgroundColor: '#000',
           height: 800,
         }}>
          
         <View>
           <Text style={{
             color: '#e9e5e9', fontFamily: 'Lato-Regular', position: 'relative',
             top: 100,
             left: 90
           }}>You're currently in New York</Text>
         </View>
         <View>
           <Text style={{
             color: '#e9e5e9', fontFamily: 'Lato-Regular', position: 'relative',
             top: 150,
             left: 20
           }}>LIVE POLL</Text>
         </View>
         <View>
           <Text style={{
             color: '#e9e5e9', fontFamily: 'Lato-Regular', position: 'relative',
             top: 155,
             left: 20,
             fontSize: 10,
             color: '#8D99B2',
           }}>You cannot change your answer once it is submitted</Text>
         </View>
         <View style={{
           position: 'relative',
           left: 25,
           top: 200,
         }}>
           <Progress.Bar progress={0.3} width={310} height={10} color={'#8D99B2'} backgroundColor={'#fff'}
           />
         </View>
         <View>
           <View style={{
             backgroundColor: '#222939', position: 'absolute',
             top: 250,
             left: 6,
             height: 400,
             width: 345,
             borderRadius: 40 / 2,
             borderWidth: 1,
             borderColor: '#707070',
             borderStyle: 'solid',
           }}>
             <Text style={{
               color: '#e9e5e9', fontFamily: 'Lato-Bold', position: 'relative',
               top: 35,
               left: 18,
               textAlign: 'center',
               lineHeight: 20,
               fontSize: 14,
               width: 310,
             }}>What is the most important trait of event leaders can possess?</Text>
           </View>
           <View style={{
             position: 'relative',
             top: 342,
             left: 125,
           }}>
             <Text style={{
               color: '#e9e5e9', fontFamily: 'Lato-Regular',
               fontSize: 10,
               color: '#8D99B2',
             }}>Please select one answer</Text>
           </View>
         </View>
         <View style={{width: '80%', position: 'relative', top:326, left: 34}}>
         {/* {
     list.map((l, i) => (
      //  <ListItem key={i} bottomDivider>
         
      //    <ListItem.Content>
      //      <ListItem.Title><Text></Text></ListItem.Title>
      //      <ListItem.Subtitle>{l.a}</ListItem.Subtitle>
      //      <ListItem.Subtitle>{l.b}</ListItem.Subtitle>
      //      <ListItem.Subtitle>{l.c}</ListItem.Subtitle>
      //      <ListItem.Subtitle>{l.d}</ListItem.Subtitle>
      //    </ListItem.Content>
      //  </ListItem>
     ))
   } */} 
         </View>
         <View style={{
           position: 'relative',
           top: 614,
           left: 110
         }}>
           <TouchableOpacity activeOpacity={0.7} style={{
             backgroundColor: '#F4376D', width: 26, height: 26, borderRadius: 26 / 2, position: 'relative',
             right: 74,
             top: 59
           }}>
             <FontAwesome5 name={'chevron-left'} size={14} solid style={{
             color: '#e9e5e9', position: 'relative',
             left: 8,
             top: 5, fontFamily: 'Lato-Light',
           }} />
           </TouchableOpacity>
           <TouchableOpacity activeOpacity={0.7} style={{
             backgroundColor: '#F4376D', width: 26, height: 26, borderRadius: 26 / 2, position: 'relative',
             left: 188,
             top: 34
           }}>
             <FontAwesome5 name={'chevron-right'} size={14} solid style={{
             color: '#e9e5e9', position: 'relative',
             left: 10,
             top: 5, fontFamily: 'Lato-Light',
           }} />
           </TouchableOpacity>
           <TouchableOpacity activeOpacity={0.7} style={{
             backgroundColor: '#222939', width: 148, height: 40, borderRadius: 40 / 2,
             borderWidth: 1,
             borderColor: '#FFFFFF',
             borderStyle: 'solid',
           }}>
             <Text style={{
               color: '#fff', fontFamily: 'Lato-Regular',
               fontSize: 12, position: 'relative',
               left: 48,
               top: 12
             }}>SUBMIT</Text>
           </TouchableOpacity>
         </View>
       </View>
 
       </ScrollView>
     </SafeAreaView >
   );
 };
 
 const styles = StyleSheet.create({
   md: {
     position: 'relative',
     top: 300,
   },
   bba: {
     backgroundColor: '#F63669',
     width: 60,
     height: 15,
     borderRadius: 40 / 2,
     position: 'relative',
     top: 1,
     left: 5,
     zIndex: 1,
   },
   bbb: {
     backgroundColor: '#F63669',
     width: 60,
     height: 15,
     borderRadius: 40 / 2,
     position: 'relative',
     bottom: 75,
     left: 5,
     zIndex: 1,
   },
   bbc: {
     backgroundColor: '#F63669',
     width: 60,
     height: 15,
     borderRadius: 40 / 2,
     position: 'relative',
     bottom: 150,
     left: 5,
     zIndex: 1,
   },
   butt: {
     color: '#e9e5e9',
     width: 150,
     height: 40,
     position: 'relative',
     borderRadius: 40 / 2,
     top: 10,
     left: 115,
     zIndex: 1,
   },
   ttop: {
     position: 'relative',
     top: 80,
   },
   poscircle: {
     position: 'relative',
     top: 580,
   },
   circle1: {
     width: 150,
     height: 150,
     position: 'relative',
     borderRadius: 150 / 2,
 
     bottom: 1160,
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
 
     bottom: 949,
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
     bottom: 562,
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
     bottom: 18,
     left: 130,
   },
   stackb: {
     display: 'flex',
     flexDirection: 'row',
     position: 'relative',
     top: 16,
     left: 130,
   },
   stackc: {
     display: 'flex',
     flexDirection: 'row',
     position: 'relative',
     top: 51,
     left: 130,
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
 
 
 export default Poll;
 