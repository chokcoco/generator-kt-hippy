import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
} from '@tencent/hippy-react';

const window = Dimensions.get('window');
const [screenWidth, screenHeight] = [window.width, window.height];

const styles = StyleSheet.create({
  G_container: {
    position: 'relative',
    height: screenHeight,
    width: screenWidth,
    backgroundColor: '#000',
  },
});

export default class Entry extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <View style={styles.G_container} />
    );
  }
}
