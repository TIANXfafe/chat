import toast from 'react-hot-toast';

const errorCode = {
  c401: 401
}
const errorMsg = '报告！服务器出了点小问题，稍后再试试...'

function handleCommonError(err: any, config: any) {
  const { code } = err
  switch (code) {
    case errorCode.c401: {
      // 重新登录
      localStorage.clear()
      break
    }
    default: {
      if (!config.noErrorTip) {
        handleNoCommontError(err)
      }
    }
  }
}
function handleNoCommontError(err: any) {
  if (!err) {
    toast.error(errorMsg)
  } else if (err.errorItems && err.errorItems.length > 0 && err.errorItems[0].message) {
    toast.error(err.errorItems[0].message)
  } else if (err.message) {
    toast.error(err.message)
  } else {
    toast.error(err)
  }
}
export { handleCommonError, handleNoCommontError, errorMsg, errorCode }
