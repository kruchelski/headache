import { StyleSheet } from 'react-native';
import { mainTheme } from '../../constants';

const styles = StyleSheet.create({
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
})

export default styles;