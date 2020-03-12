/* eslint global-require: "off" */
module.exports = {
  get Dimensions() {
    return require('./lib/util/Dimensions').Dimensions;
  },
  get PixelRatio() {
    return require('./lib/util/PixelRatio').PixelRatio;
  },
  get ScrollView() {
    return require('./lib/util/ScrollView').ScrollView;
  },
  get ListView() {
    return require('./lib/util/ListView').ListView;
  },
  get Focusable() {
    return require('./lib/util/Focusable').Focusable;
  },
  get Modal() {
    return require('./lib/util/Modal').Modal;
  },
  get callNative() {
    return require('./lib/util/callNative').callNative;
  },
  get callNativeWithPromise() {
    return require('./lib/util/callNativeWithPromise').callNativeWithPromise;
  },
};
