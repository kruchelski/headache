import { StyleSheet, Dimensions } from 'react-native'
import { mainTheme } from '../../constants';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'flex-start'
  },
  background: {
    flex: 1,
    justifyContent: 'flex-start',
    width: '100%',
    height: '100%'
  },
  text: {
    fontFamily: 'Comfortaa_400Regular',
    textAlign: 'center',
    color: mainTheme.primary,
    fontSize: 24
  },
  overlay: {
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    opacity: 0.6,
    backgroundColor: 'black',
    width: windowWidth,
    height: windowHeight
  },
  intro: {
    fontFamily: 'Comfortaa_600SemiBold',
    fontSize: 24,
    textAlign: 'left',
    marginTop: 10,
    marginBottom: 15,
    marginHorizontal: 5,
    color: mainTheme.primary,
  },
  mid: {
    fontFamily: 'Comfortaa_400Regular',
    fontSize: 16,
    textAlign: 'left',
    marginTop: 5,
    marginBottom: 5,
    marginHorizontal: 5,
    color: mainTheme.primaryLight,
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'stretch',
    marginBottom: 5,
    padding: 10,
    marginTop: 20,
  },
  contentItemContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: 15,
    flexWrap: 'wrap'
  },
  contentItemIcon: {
    flex: 1,
    textAlign: 'center',
    marginRight: 10
  },
  contentItemText: {
    flex: 10,
    fontFamily: 'Comfortaa_400Regular',
    fontSize: 18,
    color: mainTheme.primary,
  },
  final: {
    fontFamily: 'Comfortaa_400Regular',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 5,
    marginHorizontal: 5,
    color: mainTheme.secondaryLight,
  },
  buttonContainer: {
    marginBottom: 5,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  error: {
    fontFamily: 'Comfortaa_300Light',
    color: mainTheme.danger,
    fontSize: 12,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: mainTheme.danger,
    padding: 10,
    marginHorizontal: 5,
    marginVertical: 10
  }
})

export default styles;