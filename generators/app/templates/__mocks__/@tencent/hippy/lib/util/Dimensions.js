/* eslint-disable class-methods-use-this */
const Dimensions = {
  get(string) {
    if (string === 'window') {
      return {
        width: 960,
        height: 540,
      };
    }

    return 0;
  },
};

export default Dimensions;
export { Dimensions };

// export default {
//   get: jest.fn(() => 960),
// };
