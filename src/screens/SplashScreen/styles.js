import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fefefe',
		alignItems: 'center',
		justifyContent: 'space-between',
		padding: 10,
		paddingVertical: 50
	},
	logoImage: {
		width: 300,
		height: 150,
		resizeMode: 'contain',
	},
	text: {
		// color: mainTheme.fgColor0,
		fontSize: 16,
		textAlign: 'center',
    fontFamily: 'Comfortaa_400Regular'
	}
});

export default styles;