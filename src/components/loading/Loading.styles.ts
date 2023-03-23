import { StyleSheet } from 'react-native';
export const loadingStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingBall: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    width: '25%',
    padding: 16,
    borderRadius: 50,
    aspectRatio: 1,
  },
  loadingText: {
    fontSize: 11,
    color: 'white',
  },
});
