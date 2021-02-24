import { StyleSheet } from 'react-native'
import { mainTheme } from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    padding: 20,
    marginVertical: 10,
  },
  background: { 
    flex: 1, 
    justifyContent: 'center', 
    width: '100%', 
    height: '100%',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'Comfortaa_400Regular',
    textAlign: 'left',
    fontSize: 16,
    color: mainTheme.primary,
    marginBottom: 15,
    marginHorizontal: 20,
  }
})

export default styles;