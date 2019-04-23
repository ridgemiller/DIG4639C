import React, {PureComponent} from 'react';

export default class CityInfo extends PureComponent {

  render() {
    return (
      <View>
        {this.props.info.place}
      </View>
    );
  }
}

/*
  from react-map-gl example:
  https://github.com/uber/react-map-gl/blob/master/examples/controls/src/city-info.js
*/