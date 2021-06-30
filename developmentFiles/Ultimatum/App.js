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
import AppNavigation from '../Ultimatum/src/config/Appnavigation';
import {
  Colors,

} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    
      <ScrollView>
      

      {/* '#4634A9', '#F63669' */}
      <View
        style={{
          backgroundColor: '#000',
          height: 800,
        }}>
          <AppNavigation />
        
          </View>

      </ScrollView>
    
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


export default App;
