import React, { useEffect, useRef } from 'react';
import { DrawerLayoutAndroid, StatusBar, View } from 'react-native';
import Header from './components/header/Header';
import Home from './pages/Home/Home';
import { appStyles, Colors } from './Styles';
import { Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Overview from './components/overview/Overview';
import { useAppDispatch, useAppSelector } from './store/hooks/index';
import { fetchWorkoutsAsync } from './store/slices/workoutSlice';
import Loading from './components/loading/Loading';

const App = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchWorkoutsAsync(dispatch));
  }, [dispatch]);
  const loadDataState = useAppSelector(state => state.workout.fetchStatus);
  const drawer = useRef<DrawerLayoutAndroid>(null);
  const navigationView = () => {
    return (
      <View>
        <View>
          <Pressable
            style={appStyles.closeDrawerBtn}
            android_ripple={{ color: Colors.primaryDark.backgroundColor }}
            onPress={() => drawer.current?.closeDrawer()}>
            <Icon name="arrow-left" size={25} color={Colors.onPrimary.color} />
          </Pressable>
        </View>
        <Overview />
      </View>
    );
  };
  return loadDataState === 'loading' ? (
    <Loading />
  ) : (
    <DrawerLayoutAndroid
      drawerBackgroundColor={Colors.primary.backgroundColor}
      ref={drawer}
      drawerWidth={320}
      renderNavigationView={navigationView}
      drawerPosition={'left'}>
      <Header drawer={drawer} />
      <StatusBar backgroundColor={Colors.primaryDark.backgroundColor} />
      <Home />
    </DrawerLayoutAndroid>
  );
};

export default App;
