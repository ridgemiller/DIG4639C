import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LocationsContainer from './locations-container';


class App extends Component {
  render() {
    return (
        <View class="App-header">
          <h2><strong>Trip</strong><strong>Cast</strong></h2>
        </View>
        <LocationsContainer />
    );
  }
}

export default App;

//Not sure where to insert the styles on every page. And how to set the Header text in React Native.