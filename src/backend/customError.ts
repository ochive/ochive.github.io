/**
 * 按照团队习惯包装一个自定义异常.
 */
export class CustomError extends Error {
  /**
   * 错误码
   */
  retCode: string | number
  /**
   * 错误码提示语
   */
  retMsg: string
  constructor(retCode: string | number, retMsg: string) {
    super(retMsg)
    this.retCode = retCode
    this.retMsg = retMsg
    this.message = retMsg
    // https://stackoverflow.com/questions/55065742/implementing-instanceof-checks-for-custom-typescript-error-instances
    //https://github.com/Microsoft/TypeScript/wiki/Breaking-Changes#extending-built-ins-like-error-array-and-map-may-no-longer-work
    Object.setPrototypeOf(this, CustomError.prototype)
  }
}
