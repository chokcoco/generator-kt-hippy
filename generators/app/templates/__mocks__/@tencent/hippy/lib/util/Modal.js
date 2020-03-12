import React from 'react';
import { StyleSheet, View } from '../../../hippy-react';

const side = 'left';
const styles = StyleSheet.create({
  modal: {
    position: 'absolute',
  },
  container: {
    position: 'absolute',
    [side]: 0,
    top: 0,
  },
});

export class Modal extends React.Component {
  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    let { animationType } = this.props;
    const {
      children,
      visible,
      transparent,
      animated,
      primaryKey,
      onRequestClose,
      onShow,
      supportedOrientations,
      onOrientationChange,
    } = this.props;
    if (visible === false) {
      return <View />;
    }

    const containerStyles = {
      backgroundColor: transparent ? 'transparent' : 'white',
    };

    if (!animationType) {
      // manually setting default prop here to keep support for the deprecated 'animated' prop
      animationType = 'none';
      if (animated) {
        animationType = 'slide';
      }
    }

    return (
      <div
        nativeName="Modal"
        animationType={animationType}
        primaryKey={primaryKey} // for ios
        transparent={transparent}
        onRequestClose={onRequestClose}
        onShow={onShow}
        style={styles.modal}
        supportedOrientations={supportedOrientations}
        onOrientationChange={onOrientationChange}
      >
        <View style={[styles.container, containerStyles]}>{children}</View>
      </div>
    );
  }
}
Modal.defaultProps = {
  visible: true,
};

export default Modal;
