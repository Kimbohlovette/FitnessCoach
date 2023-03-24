import React from 'react';
import { DrawerLayoutAndroid, Pressable, Text, View } from 'react-native';
import HeaderStyles from './HeaderStyle';
import Icon from 'react-native-vector-icons/AntDesign';
import { Colors } from '../../Styles';

const Header = (props: { drawer: React.RefObject<DrawerLayoutAndroid> }) => {
  return (
    <View style={HeaderStyles.containerView}>
      <Pressable onPress={() => props.drawer.current?.openDrawer()}>
        <Icon
          style={HeaderStyles.headerIcon}
          name={'menuunfold'}
          color={HeaderStyles.headerText.color}
        />
      </Pressable>
      <Text style={HeaderStyles.headerText}>Fitness Coach</Text>
      <Pressable android_ripple={{ color: Colors.primaryDark.backgroundColor }}>
        <Icon style={HeaderStyles.headerIcon} name={'user'} size={30} />
      </Pressable>
    </View>
  );
};

export default Header;
