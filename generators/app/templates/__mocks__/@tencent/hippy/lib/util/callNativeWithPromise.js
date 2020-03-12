const callNativeWithPromise = (...callArguments) => {
  let param = callArguments[2];
  return new Promise((resolve, rj) => {
    try {
      param = JSON.parse(param);
      param = param.key;
      if (param === 'success') {
        resolve({
          promise: '{"ret":0,"msg":"ok","data":{"success":"ok"}}',
        });
      } else if (param === 'error') {
        resolve({
          promise: '{"ret":-1,"msg":""}',
        });
      } else if (param === 'jsonerror') {
        resolve({
          promise: '"ret":0,"msg":"ok","data":{}',
        });
      } else {
        rj(param);
      }
    } catch (ex) {
      rj(ex);
    }
  });
};

export default callNativeWithPromise;
export { callNativeWithPromise };
