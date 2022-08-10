import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import {Icon} from 'react-native-elements';
import * as ImagePicker from 'react-native-image-picker';

export default function UserHeader({image, name}) {
  const ChangeImage = () => {
    ImagePicker.launchImageLibrary();
  };
  return (
    <View style={styles.container}>
      <View style={styles.direction}>
        <Image
          style={styles.image}
          source={{
            uri: image,
          }}
        />
        <View style={styles.changeImage}>
          <TouchableOpacity onPress={ChangeImage}>
            <Icon name={'upload'} type={'feather'} />
          </TouchableOpacity>
        </View>
        <Text style={styles.name}>{name}</Text>
      </View>
    </View>
  );
}
