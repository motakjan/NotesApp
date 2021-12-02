export type RequestType = {
    Request: Request;
    user: any;
    header: (token: string) => string | null;
};