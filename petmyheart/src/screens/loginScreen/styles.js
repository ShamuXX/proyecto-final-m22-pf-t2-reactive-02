import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  namecontainer: {marginTop: 23},
  logocontainer: {},
  container: {width: '100%', height: '100%',},
  formcontainer: {
    backgroundColor: '#DAC3DB',
    width: '100%',
    height: Dimensions.get('screen').height,
    marginTop: 100,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 16,
    color: '#DB6C9E',
  },
  logoscontainer: {width: '100%', height: 150},
  logosdireccion: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    alignSelf: 'center',
  },
});

export default styles;
