import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center'
  },
  viewHeader: {
    flex: 1.8,
    width: '80%',
    marginTop: 60,
  },
  viewButtons: {
    flex: 1,
  },
  buttonWhite: {
    marginVertical: 12,
    backgroundColor: 'white',
    borderRadius: 30,
  },
  textButtonWhite: {
    color: '#FF5F2E',
    textAlign:'center',
    paddingHorizontal: 60,
    paddingVertical: 20,
    fontSize: 20,
    fontFamily: 'sans-serif-thin',
  }
})

export {styles}