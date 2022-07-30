import {StyleSheet} from 'react-native';

const styles = value =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      marginTop: 30,
    },
    button: {
      marginHorizontal: 20,
    },
    scrollimage: {
      flexDirection: 'row',
      marginBottom: value,
      marginTop: 10,
      marginLeft: 20,
    },
    imagecontainer: {marginRight: 10},
    imageViewer: {backgroundColor: '#000000DC'},
  });

export default styles;
