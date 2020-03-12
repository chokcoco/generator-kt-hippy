global.__PLATFORM__ = '';

// 简单模拟fetch
// 测试环境返回resolve ret-1
// 预发布环境返回reject ret-2
// 正式环境返回resolve ret0 data:{data:'ok'}
global.fetch = (url) => new Promise((resolve, reject) => {
  const result = {};
  try {
    const urlObj = new URL(url);
    if (urlObj.host.startsWith('1.')) {
      result.json = () => ({
        result: {
          ret: -1,
          msg: '',
        },
        data: {},
      });
      resolve(result);
    } else if (urlObj.host.startsWith('2.')) {
      result.json = () => ({
        result: {
          ret: -2,
          msg: '',
        },
        data: {},
      });
      reject(result);
    } else {
      result.json = () => ({
        result: {
          ret: 0,
          msg: 'ok',
        },
        data: {
          data: 'ok',
        },
      });
      resolve(result);
    }
  } catch (ex) {
    reject(ex);
  }
});
