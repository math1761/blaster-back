/// <reference types="express" />

/**
 * This type definition augments existing definition
 * from @types/express-flash
 */
declare namespace Express {
    export interface Request {
        flash(event: string, message: any): any;
    }
}

export type APIType = {
    req: Object;
    res: Object;
}

interface Flash {
    flash(type: string, message: any): void;
}

declare module "express-flash";

