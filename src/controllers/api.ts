"use strict";
import { Response, Request } from "express";

/**
 * GET /api
 * List of API examples.
 */
export const getApi = (_: Request, res: Response) => {
    res.json({
        status: "OK"
    });
};
