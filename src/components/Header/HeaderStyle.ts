import { StyleSheet } from 'react-native';
import { Colors } from '../../Styles';

export const HeaderStyles = StyleSheet.create({
  containerView: {
    paddingVertical: 20,
    paddingHorizontal: 16,
    backgroundColor: Colors.primary.backgroundColor,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    color: Colors.onPrimary.color,
    fontSize: 20,
    fontWeight: '700',
  },
  headerIcon: {
    color: Colors.onPrimary.color,
    fontSize: 24,
  },
  drawerMenu: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HeaderStyles;
