import { StyleSheet } from 'react-native'
import { mainTheme } from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center'
  },
  formContainer: {
    margin: 15,
    padding: 15,
    backgroundColor: `${mainTheme.bgColor3}ce`,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  logoImageContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  logoImage: {
		width: 200,
		height: 100,
		resizeMode: 'cover',
    margin: 15,
    marginBottom: 30
	},
  background: { 
    flex: 1, 
    justifyContent: 'center', 
    width: '100%', 
    height: '100%',
    alignItems: 'stretch',
    justifyContent: 'center'
  },
  text: {
    fontFamily: 'Comfortaa_400Regular',
    textAlign: 'center'
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
    marginBottom: 10
  }
})

export default styles;