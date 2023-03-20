import { StyleSheet } from 'react-native';
import { Colors } from '../../Styles';

export const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  workoutTitle: {
    fontSize: 36,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 48,
  },
  divider: {
    borderWidth: 1,
    width: '60%',
    borderColor: Colors.onPrimary.color,
    marginVertical: 16,
    marginHorizontal: 20,
  },
  workoutDesc: {
    color: Colors.onPrimary.color,
    paddingHorizontal: 24,
    textAlign: 'center',
  },
  countDown: {
    fontSize: 92,
    letterSpacing: 4,
    fontWeight: '900',
  },
  mainView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 24,
  },
  cardsContainerView: {
    flexDirection: 'row',
    minWidth: '100%',
    alignContent: 'center',
    justifyContent: 'space-around',
    marginVertical: 36,
  },
  cardView: {
    padding: 16,
    marginHorizontal: 2,
    flex: 1,
    borderRadius: 2,
    elevation: 1,
    shadowColor: 'red',
    backgroundColor: 'white',
  },
  cardTitleText: {
    textAlign: 'left',
    textTransform: 'uppercase',
    fontWeight: '700',
    color: '#1a1a1a',
  },
  cardText: {
    textAlign: 'left',
    textTransform: 'capitalize',
    paddingVertical: 2,
    color: 'gray',
  },
  startBtnContainer: {
    overflow: 'hidden',
    borderRadius: 50,
    backgroundColor: '#ef4444',
    elevation: 2,
    width: '80%',
    shadowColor: 'red',
  },
  startBtn: {
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  startBtnText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 28,
    fontWeight: '600',
  },
});
