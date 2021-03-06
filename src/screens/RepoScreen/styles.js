import { StyleSheet } from 'react-native';
import { mainTheme } from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    backgroundColor: mainTheme.fgColor0,
  },
  heading:{
    fontFamily: 'Comfortaa_600SemiBold',
    fontSize: 20,
    textAlign: 'left',
    marginTop: 10,
    marginHorizontal: 5,
    color: mainTheme.primary,
  },
  subHeading: {
    fontFamily: 'Comfortaa_600SemiBold',
    fontSize: 18,
    textAlign: 'right',
    marginTop: 5,
    marginBottom: 20,
    marginHorizontal: 5,
    color: mainTheme.secondary,
  },
  contentContainer:{
    alignItems: 'stretch',
    marginBottom: 5,
    padding: 10,
    marginTop: 20,
  },
  contentItemContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    marginVertical: 10,
    padding: 0,
    borderWidth: 1,
    borderColor: mainTheme.primaryDark,
    borderRadius: 10
  },
  contentItemHeader: {
    flex: 1,
    padding: 15,
    borderBottomColor: mainTheme.primaryDark,
    borderBottomWidth: 1,
    flexWrap: 'wrap'
  },
  textTitle: {
    fontFamily: 'Comfortaa_400Regular',
    color: mainTheme.secondaryLight,
    fontSize: 16,
    textAlign: 'center'
  },
  contentItemBody: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 15,
    flexWrap: 'wrap'
  },
  itemText: {
    fontFamily: 'Comfortaa_400Regular',
    fontSize: 14,
    color: mainTheme.bgColor1,
    textAlign: 'left',
    flex: 10
  },
  itemIcon:{
    flex: 1,
    textAlign: 'center',
    marginRight: 10
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