/**
 * Created by harrykyguo on 2020/1/14.
 */

/* eslint global-require: "off" */

require('@tencent/hippy');

module.exports = {
  get StyleSheet() {
    return require('../../../node_modules/@tencent/hippy').StyleSheet;
  },
  get UIManagerModule() {
    return require('../../../node_modules/@tencent/hippy').UIManagerModule;
  },
  get Dimensions() {
    return require('@tencent/hippy').Dimensions;
  },
  get PixelRatio() {
    return require('@tencent/hippy').PixelRatio;
  },
  get ScrollView() {
    return require('@tencent/hippy').ScrollView;
  },
  get ListView() {
    return require('@tencent/hippy').ListView;
  },
  get Focusable() {
    return require('@tencent/hippy').Focusable;
  },
  get Modal() {
    return require('@tencent/hippy').Modal;
  },
  get callNative() {
    return require('../hippy').callNative;
  },
  get callNativeWithPromise() {
    return require('../hippy').callNativeWithPromise;
  },
  get View() {
    return require('../../../node_modules/@tencent/hippy-react/lib/components/View')
      .View;
  },
  get Text() {
    return require('../../../node_modules/@tencent/hippy-react/lib/components/Text')
      .Text;
  },
  get Image() {
    return require('../../../node_modules/@tencent/hippy-react/lib/components/Image')
      .Image;
  },
  get Animation() {
    return require('../../../node_modules/@tencent/hippy').Animation;
  },
  get AnimationSet() {
    return require('../../../node_modules/@tencent/hippy').AnimationSet;
  },
  get BackAndroid() {
    return require('../../../node_modules/@tencent/hippy').BackAndroid;
  },
  get HippyEventListener() {
    return require('../../../node_modules/@tencent/hippy').HippyEventListener;
  },
};
