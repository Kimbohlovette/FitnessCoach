import { StyleSheet } from 'react-native';

export const Colors = StyleSheet.create({
  primaryLight: {
    backgroundColor: '#fee2e2',
  },
  primary: {
    backgroundColor: '#dc2626',
  },
  primaryDark: {
    backgroundColor: '#991b1b',
  },
  onPrimary: {
    color: 'white',
  },
  onPrimaryDark: {
    color: 'white',
  },
  onPrimaryLight: {
    color: 'gray',
  },
});

export const appStyles = StyleSheet.create({
  closeDrawerBtn: {
    width: '15%',
    marginTop: 16,
    marginRight: 8,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
  },
});
