import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  View,
} from 'react-native';

export default class DetailScreen extends React.Component {


  render() {
    const {navigate} = this.props.navigation;
    const dogName = this.props.navigation.getParam('itemID', 'NO-ID');
    const dogImage = this.props.navigation.getParam('itemImg', 'NO-IMG');
    return (
      <View style={styles.container}>
        <Text style={styles.dogTitle}>Dog: {dogName}</Text>
        <Image source={dogImage} style={{flex:1, height: undefined, width: undefined}} resizeMode="contain" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  dogTitle: {
    fontSize: 17,
    textAlign: 'center',
  }
});