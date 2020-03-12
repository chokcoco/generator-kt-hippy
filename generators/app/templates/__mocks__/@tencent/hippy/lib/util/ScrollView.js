import React from 'react';
import { StyleSheet, View } from '../../../hippy-react';

// export class ScrollView extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   render() {
//     return (
//       <div nativeName="ScrollView" {...this.props} />
//     );
//   }
// }
// export default ScrollView;

const styles = StyleSheet.create({
  baseVertical: {
    flexGrow: 1,
    flexShrink: 1,
    flexDirection: 'column',
    overflow: 'scroll',
  },
  baseHorizontal: {
    flexGrow: 1,
    flexShrink: 1,
    flexDirection: 'row',
    overflow: 'scroll',
  },
  contentContainerVertical: {
    collapse: false,
    flexDirection: 'column',
  },
  contentContainerHorizontal: {
    collapse: false,
    flexDirection: 'row',
  },
});

export class ScrollView extends React.Component {
  render() {
    const {
      horizontal, contentContainerStyle, children, style,
    } = this.props;
    const contentContainerStyle_ = [
      horizontal
        ? styles.contentContainerHorizontal
        : styles.contentContainerVertical,
      contentContainerStyle,
    ];
    const contentContainer = (
      <View style={contentContainerStyle_}>{children}</View>
    );

    const newProps = { ...this.props };
    const newStyle = horizontal
      ? { ...style, ...styles.baseHorizontal }
      : { ...style, ...styles.baseVertical };
    newProps.style = newStyle;
    return (
      <div nativeName="ScrollView" ref={(ref) => ref} {...newProps}>
        {contentContainer}
      </div>
    );
  }
}
export default ScrollView;
