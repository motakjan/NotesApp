declare namespace Express {
  interface Request {
    user?: any;
    header: (token: string) => any;
  }
}
