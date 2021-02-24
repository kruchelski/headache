import { StyleSheet } from 'react-native'
import { mainTheme } from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: mainTheme.bgColor0,
    padding: 20,
  },
  infoContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 40
  },
  background: { 
    flex: 1, 
    justifyContent: 'center', 
    width: '100%', 
    height: '100%' 
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
    shadowColor: '#666666',
    shadowOpacity: 0.8,
    shadowOffset: {width: 0, height: 1},
    marginBottom: 10,
  },
  text: {
    fontFamily: 'Comfortaa_400Regular',
    textAlign: 'center',
    fontSize: 14,
    color: mainTheme.fgColor1,
  },
  usernameText: {
    fontFamily: 'Comfortaa_600SemiBold',
    fontSize: 16,
    textAlign: 'center',
    color: mainTheme.fgColor0,
    marginBottom: 10
  },
  buttonContainerMid: {
    padding: 30,
    marginTop: 5,
    marginBottom: 30
  },
  buttonContainerBottom: {
    padding: 30,
  }
})

export default styles;