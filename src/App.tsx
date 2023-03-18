import React, { useRef } from 'react';
import {
  Button,
  DrawerLayoutAndroid,
  SafeAreaView,
  StatusBar,
  Text,
  View,
} from 'react-native';
import Header from './components/Header/Header';
import Home from './pages/Home';
import { Colors } from './Styles';

const App = () => {
  const drawer = useRef<DrawerLayoutAndroid>(null);
  const navigationView = () => {
    return (
      <View>
        <Text>In the drawer view</Text>
        <Button title="close" onPress={() => drawer.current?.closeDrawer()} />
      </View>
    );
  };
  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      renderNavigationView={navigationView}
      drawerPosition={'left'}>
      <Header drawer={drawer} />
      <StatusBar backgroundColor={Colors.primaryDark.backgroundColor} />
      <SafeAreaView>
        <Home />
      </SafeAreaView>
    </DrawerLayoutAndroid>
  );
};

export default App;
