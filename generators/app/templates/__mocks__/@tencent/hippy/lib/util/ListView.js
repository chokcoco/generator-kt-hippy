/**
 * Created by saizhao on 2017/11/24.
 */

import React from 'react';
// import { UIManagerModule } from '@tencent/hippy';
// import Console from '../../util/Log';

function ListViewItem(props) {
  return <li nativeName="ListViewItem" {...props} />;
}

export class ListView extends React.Component {
  static scrollToIndex(xIndex, yIndex, animated) {
    if (
      typeof xIndex !== 'number'
      || typeof yIndex !== 'number'
      || typeof animated !== 'boolean'
    ) {
      // TODO
    }

    // UIManagerModule.callUIFunction(this, 'scrollToIndex', [xIndex, yIndex, animated]);
  }

  static scrollToContentOffset(xOffset, yOffset, animated) {
    if (
      typeof xOffset !== 'number'
      || typeof yOffset !== 'number'
      || typeof animated !== 'boolean'
    ) {
      // TODO
    }

    // UIManagerModule.callUIFunction(this, 'scrollToContentOffset', [xOffset, yOffset, animated]);
  }

  constructor(props) {
    super(props);
    this.state = {
      initialListReady: false,
    };
  }

  componentDidMount() {
    const { getRowKey } = this.props;
    if (!getRowKey) {
      // Console.warn('ListView needs getRowKey to specific the key of item');
    }
  }

  handleInitialListReady() {
    this.setState({ initialListReady: true });
  }

  render() {
    let { numberOfRows } = this.props;
    const {
      style,
      renderRow,
      getRowType,
      getRowStyle,
      getRowKey,
      dataSource,
      initialListSize,
      rowShouldSticky,
    } = this.props;
    const { initialListReady } = this.state;
    const itemList = [];

    if (!numberOfRows && dataSource) {
      numberOfRows = dataSource.length;
    }

    if (!initialListReady) {
      numberOfRows = Math.min(numberOfRows, initialListSize || 10);
    }

    for (let index = 0; index < numberOfRows; index += 1) {
      let renderRowParam;

      if (dataSource) {
        renderRowParam = dataSource[index];
      } else {
        renderRowParam = index;
      }

      let itemStyle = {};
      if (typeof getRowStyle === 'function') {
        itemStyle = getRowStyle(index);
      }

      let key;
      if (getRowKey) {
        key = getRowKey(index);
      } else {
        key = index;
      }
      const renderRowChildren = dataSource
        ? renderRow(renderRowParam, null, index)
        : renderRow(renderRowParam);
      if (renderRowChildren) {
        itemList.push(
          <ListViewItem
            key={key}
            style={itemStyle}
            type={getRowType ? `${getRowType(index)}` : `${0}`}
            iSticky={rowShouldSticky ? rowShouldSticky(index) : false}
            itemViewType={getRowType ? getRowType(index) : 0}
            sticky={rowShouldSticky ? rowShouldSticky(index) : false}
          >
            {renderRowChildren}
          </ListViewItem>,
        );
      }
    }

    const nativeProps = {
      ...this.props,
      // style: {
      //   overflow: 'scroll',
      // },
      style,
    };
    // ios端会判断numberOfRows参数和实际收到的listItem数量是否一致，一致的情况下才会开始渲染。
    // 但是在前端会判断numberOfRows和initialListSize,取小值为渲染数量。
    // 导致ios端收到的numberOfRows和实际理应渲染的数量不一致而一直不渲染
    // 所以需要加上这句话重新赋值
    nativeProps.numberOfRows = itemList.length;
    delete nativeProps.renderRow;
    delete nativeProps.getRowType;
    delete nativeProps.getRowHeight;

    return (
      <ul
        nativeName="ListView"
        initialListReady={this.handleInitialListReady.bind(this)}
        {...nativeProps}
      >
        {itemList}
      </ul>
    );
  }
}
ListView.defaultProps = 10;

export default ListView;
