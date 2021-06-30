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
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
 
 import LinearGradient from 'react-native-linear-gradient';
  import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
 
 const Challenge = () => {
   const isDarkMode = useColorScheme() === 'dark';
 
   const backgroundStyle = {
     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
   };
 
   return (
     <SafeAreaView style={backgroundStyle}>
       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
       <ScrollView
         contentInsetAdjustmentBehavior="automatic"
         style={backgroundStyle}>
        {/* '#4634A9', '#F63669' */}
         <View
           style={{
             backgroundColor: '#000',
             height: 800,
           }}>
              <View>
              <TouchableOpacity style={
                styles.t1} activeOpacity={0.7}>
                <Text style={{
                  position: 'relative',
                  top: 10,
                  left: 110,
                  lineHeight: 30,
                  fontSize: 24,
                  color: '#e9e5e9',
                  fontFamily: 'Lato-Regular',
                }}>TRY THIS {"\n"} DRESS ON</Text>
              </TouchableOpacity>
              </View>
            <Image style={{
              width: 270,
              height: 300,
              position: 'absolute',
              top: 208,
              left: 50,
              resizeMode: 'contain',
              
            }} source={{uri:'https://1tq45j21k9qr27g1703pgsja-wpengine.netdna-ssl.com/wp-content/uploads/2019/09/1970sHalston7.jpg'}} />
            <View style={styles.win}>
              <Text style={{fontSize: 20,
                  color: '#e9e5e9',
                  fontFamily: 'Lato-Regular'}}>WIN $500</Text>
            </View>
            <View style={
                styles.pos}>
            <LinearGradient
               start={{ x: 0.01, y: 0.01 }}
               end={{ x: 0.9, y: 0.89 }}
              colors={['#4634A9', '#F63669']}
              style={{borderRadius: 80 / 2}}
              >
              <TouchableOpacity style={{
                width: 130,
                height: 50,
                position: 'relative',
                top: 15,
                left: 35,
                zIndex: 1,
                }} activeOpacity={0.7}>
                <Text style={{
                  color: '#e9e5e9',
                  fontFamily: 'Lato-Regular',
                  position: 'relative',
                  bottom:0}}>REJECT</Text>
                </TouchableOpacity>
                </LinearGradient>
                <LinearGradient
              start={{ x: 0.01, y: 0.01 }}
              end={{ x: 0.9, y: 0.89 }}
              colors={['#4634A9', '#F63669']}
              style={{position:'relative',
              bottom: 50,
              left: 168,
              borderRadius: 80 / 2}}
              >
              <TouchableOpacity style={{
                width: 130,
                height: 50,
                position: 'relative',
               top: 15,
               left: 35,
               zIndex: 1,
                }} activeOpacity={0.7}>
                <Text style={{color: '#e9e5e9',
                  fontFamily: 'Lato-Regular'}}>ACCEPT</Text>
                </TouchableOpacity>
                </LinearGradient>
            </View>
         </View>
       </ScrollView>
     </SafeAreaView>
   );
 };
 
 const styles = StyleSheet.create({
   pos:{
     width: 120,
     height: 80,
     position: 'relative',
     top: 500,
     left: 35,
     
   },
   win:{
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
 
 export default Challenge;
 