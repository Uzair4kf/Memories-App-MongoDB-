class IError {
  status: number;
  msg: string;
  constructor(status: number, msg: string) {
    this.status = status;
    this.msg = msg;
  }
}
export { IError };
