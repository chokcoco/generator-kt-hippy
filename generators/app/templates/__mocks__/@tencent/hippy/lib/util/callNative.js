const callNative = (...callArguments) => {
  if (callArguments.length < 2) {
    throw new TypeError('Arguments length must be larger than 2');
  }

  const param = [];
  let cbCount = 0;

  for (let i = 2; i < callArguments.length; i += 1) {
    if (typeof callArguments[i] === 'function' && cbCount === 0) {
      cbCount += 1;
    } else {
      param.push(callArguments[i]);
    }
  }
};

export default callNative;
export { callNative };
