import { StyleSheet } from 'react-native';

export const overviewStyles = StyleSheet.create({
  container: {
    paddingVertical: 32,
  },
  workoutView: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 6,
  },
  workTitleStyle: {
    fontSize: 20,
    color: 'white',
  },
  workDescStyle: {
    color: '#d1d0cf',
    paddingVertical: 2,
  },
  overviewHeader: {
    paddingHorizontal: 16,
    fontSize: 24,
    fontWeight: '700',
    color: 'white',
  },
});

export default overviewStyles;
