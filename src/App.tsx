import React, { useRef } from 'react';
import { DrawerLayoutAndroid, StatusBar, View } from 'react-native';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import { Colors } from './Styles';
import { Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Overview from './components/overview/Overview';

const App = () => {
  const drawer = useRef<DrawerLayoutAndroid>(null);
  const navigationView = () => {
    return (
      <View>
        <Pressable onPress={() => drawer.current?.closeDrawer()}>
          <Icon name="close" size={30} color={Colors.onPrimary.color} />
        </Pressable>
        <Overview />
      </View>
    );
  };
  return (
    <DrawerLayoutAndroid
      drawerBackgroundColor={Colors.primary.backgroundColor}
      ref={drawer}
      drawerWidth={300}
      renderNavigationView={navigationView}
      drawerPosition={'left'}>
      <Header drawer={drawer} />
      <StatusBar backgroundColor={Colors.primaryDark.backgroundColor} />
      <Home />
    </DrawerLayoutAndroid>
  );
};

export default App;
