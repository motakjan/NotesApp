declare namespace Express {
    export interface Request {
        user: any;
        header: (token: string) => any;
    }
}