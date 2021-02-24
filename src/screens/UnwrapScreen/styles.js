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
    opacity: 0.5,
    backgroundColor: 'black',
    width: windowWidth,
    height: windowHeight
  }  
})

export default styles;