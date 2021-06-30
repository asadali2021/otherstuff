/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import * as React from 'react';

import {

  ScrollView,

  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Button } from 'react-native-elements';
import { BackgroundImage } from 'react-native-elements/dist/config';

const Main = (props) => {

  return (
    <ScrollView>
      <BackgroundImage style={{
        resizeMode: 'contain',

      }} source={require('../images/back.jpeg')} >
        <View style={{ flex: 1, height: 800, width: 360, margin: 0, }}>
          <View style={styles.whole}>



            <View style={{ zIndex: 1, flex: 1 }}>
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
            <View style={styles.txt}>
              <Text style={{
                fontFamily: 'FirstJob-X8rP',
                fontSize: 26,
                color: '#e30ce3',
              }}>ULTIMATUM</Text>
            </View>
            <View style={styles.q1}>
              <Text style={{ color: '#e9e5e9', fontFamily: 'Lato-Regular' }}>WHAT ARE YOU ?</Text>
            </View>
            <View style={styles.pos}>
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                colors={['#4634A9', '#F63669',]}
                style={
                  styles.b1}>
                <TouchableOpacity activeOpacity={0.7}>
                  <Text style={{
                    textAlign: 'center',
                    marginTop: 9,
                    color: '#e9e5e9',
                    fontFamily: 'Lato-Regular',
                  }}>WATCHER</Text>
                </TouchableOpacity>
              </LinearGradient>
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                colors={['#4634A9', '#F63669',]}
                style={
                  styles.b2}>
                <TouchableOpacity activeOpacity={0.7}>
                  <Text style={{
                    textAlign: 'center',
                    marginTop: 9,
                    color: '#e9e5e9',
                    fontFamily: 'Lato-Regular',
                  }}>PLAYER</Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>
            <View style={styles.fl}>
              <View style={styles.f1}>
                <FontAwesome5 name={'eye'} size={20} solid style={{ color: '#e5e9e5', position: 'relative', top: 18 }} />
                <Text style={{ color: '#e5e9e5', marginLeft: 70, fontFamily: 'Lato-Regular' }}>29,349 watchers online</Text>
              </View>
              <View style={styles.f2}>
                <FontAwesome5 name={'user'} size={20} solid style={{ color: '#e5e9e5', position: 'relative', top: 18 }} />
                <Text style={{ color: '#e5e9e5', marginLeft: 80, fontFamily: 'Lato-Regular' }}> 200 players online</Text>
              </View>
            </View>



            <View style={styles.q2}>
              <Text style={{ fontFamily: 'Lato-Regular', color: '#e9e5e9' }}>ALREADY HAVE ACCOUNT ?</Text>
            </View>


            {/* <Button 
          title="SIGN UP"
            ViewComponent={LinearGradient} // Don't forget this!
            linearGradientProps={{
              colors: ['#4634A9', '#F63669'],
              start: { x: 0.4, y: 0.9 },
              end: { x: 0.9, y: 0 },
            }}
            activeOpacity={0.7} 
            onPress={() => { Alert.alert('Simple Button pressed') }}
            
          /> */}
          </View>
          <View style={styles.signup}>
            <Button title="SIGN UP"
              ViewComponent={LinearGradient} // Don't forget this!
              linearGradientProps={{
                colors: ['#4634A9', '#F63669'],
                start: { x: 0.4, y: 0.9 },
                end: { x: 0.9, y: 0 },
              }}
              activeOpacity={0.7}
              onPress={() => props.navigation.navigate("SignUpStackScreen")}>

            </Button>
          </View>
        </View>

      </BackgroundImage>

    </ScrollView>

  );
};

const styles = StyleSheet.create({
  whole: {




  },
  txt: {

    position: 'relative',
    top: 180,
    left: 115,

    zIndex: 6,
    width: 180,

  },
  signup: {

    flex: 1,
    width: 100,
    height: 100,
    position: 'absolute',
    top: 685,
    right: 130,
    borderRadius: 100 / 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  pos: {
    position: 'relative',
    top: 350,

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  circle1: {
    backgroundColor: 'blue',
    width: 100,
    height: 100,
    position: 'relative',
    bottom: 842,
    left: 131,
    borderRadius: 100 / 2,


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
    bottom: 715,
    left: 102,
    borderRadius: 160 / 2,


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
    bottom: 525,
    left: 72,
    borderRadius: 220 / 2,

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
    bottom: 295,
    left: 50,
    borderRadius: 260 / 2,

    opacity: 0.1,

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

    borderRadius: 340 / 2,

    opacity: 0.2,
    position: 'relative',
    left: 10,
  },


  circle6: {

    width: 90,
    height: 90,
    borderRadius: 90 / 2,
    height: 3,
  },
  shadowOpacity: 0.27,
  shadowRadius: 4.65,

  elevation: 6,

  q1: {

    position: 'relative',
    top: 300,
    left: 120,

  },
  q2: {


    fontFamily: 'Lato-Regular',
    position: 'relative',
    top: 590,
    left: 90
  },
  b1: {

    width: 120,
    height: 40,

    borderRadius: 40 / 2,

    zIndex: 1,
  },
  b2: {

    width: 120,
    height: 40,

    borderRadius: 40 / 2,

    zIndex: 1,
  },
  f1: {

    zIndex: 1,
    display: 'flex',
    flexDirection: 'column',
    width: 400,

    position: 'relative',
    left: 110,

  },
  f2: {

    zIndex: 1,
    display: 'flex',
    flexDirection: 'column',
    width: 400,
    position: 'relative',
    left: 110,
  },
  fl: {

    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    top: 400,
    right: 60,
  },


});

export default Main;
