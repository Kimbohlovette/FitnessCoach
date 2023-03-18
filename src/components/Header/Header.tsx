import React from 'react';
import { DrawerLayoutAndroid, Pressable, Text, View } from 'react-native';
import HeaderStyles from '../Header/HeaderStyle';
import Icon from 'react-native-vector-icons/AntDesign';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const Header = (props: { drawer: React.RefObject<DrawerLayoutAndroid> }) => {
  return (
    <View style={HeaderStyles.containerView}>
      <Pressable onPress={() => props.drawer.current?.openDrawer()}>
        <MCIcon
          style={HeaderStyles.headerIcon}
          name={'menu'}
          color={HeaderStyles.headerText.color}
        />
      </Pressable>
      <Text style={HeaderStyles.headerText}>Header</Text>
      <Pressable>
        <Icon style={HeaderStyles.headerIcon} name={'user'} size={30} />
      </Pressable>
    </View>
  );
};

export default Header;
