/* eslint-disable class-methods-use-this */
const PixelRatio = {
  get(string) {
    if (string === 'window') {
      return 0.5;
    }

    return 1;
  },
};

export default PixelRatio;
export { PixelRatio };
