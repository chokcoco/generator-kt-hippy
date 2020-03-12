/**
 * Created by saizhao on 2017/12/15.
 */

import React from 'react';
import { View } from '../../../hippy-react';

export class Focusable extends React.Component {
  constructor(props) {
    super(props);
    const { requestFocus } = this.props;
    this.state = {
      isFocus: !!requestFocus,
    };

    this.handleFocus = this.handleFocus.bind(this);
  }

  handleFocus(e) {
    const { onFocus: userOnFocus } = this.props;
    if (typeof userOnFocus === 'function') {
      userOnFocus(e);
    }

    const { isFocus } = this.state;
    if (isFocus !== e.focus) {
      this.setState({
        isFocus: e.focus,
      });
    }
  }

  render() {
    const {
      requestFocus,
      style,
      noFocusStyle,
      focusStyle,
      onClick,
      nextFocusDownId,
      nextFocusUpId,
      nextFocusLeftId,
      nextFocusRightId,
    } = this.props;
    let { children } = this.props;
    const child = React.Children.only(children);

    let type;

    if (
      child
      && child.child
      && child.child.memoizedProps
      && child.child.memoizedProps.nativeName
    ) {
      type = child.child.memoizedProps.nativeName;
    } else if (child && child.type && child.type.name) {
      type = child.type.name;
    }

    // nextFocusDownId = nextFocusDownId && UIManagerModule.getNodeIdByRef(nextFocusDownId);
    // nextFocusUpId = nextFocusUpId && UIManagerModule.getNodeIdByRef(nextFocusUpId);
    // nextFocusLeftId = nextFocusLeftId && UIManagerModule.getNodeIdByRef(nextFocusLeftId);
    // nextFocusRightId = nextFocusRightId && UIManagerModule.getNodeIdByRef(nextFocusRightId);

    const childStyle = child.props.style;

    const nativeStyle = {};

    if (type === 'Text') {
      Object.assign(nativeStyle, style);
    } else {
      Object.assign(nativeStyle, style, childStyle);
    }

    const { isFocus } = this.state;
    Object.assign(nativeStyle, isFocus ? focusStyle : noFocusStyle);

    ({ children } = child.props);

    if (type === 'Text') {
      return (
        <View
          focusable
          nextFocusDownId={nextFocusDownId}
          nextFocusUpId={nextFocusUpId}
          nextFocusLeftId={nextFocusLeftId}
          nextFocusRightId={nextFocusRightId}
          requestFocus={requestFocus}
          style={nativeStyle}
          onClick={onClick}
          onFocus={this.handleFocus}
        >
          {React.cloneElement(child, {})}
        </View>
      );
    }
    return React.cloneElement(child, {
      focusable: true,
      nextFocusDownId,
      nextFocusUpId,
      nextFocusLeftId,
      nextFocusRightId,
      requestFocus,
      style: nativeStyle,
      onClick,
      children,
      onFocus: this.handleFocus,
    });
  }
}
export default Focusable;
