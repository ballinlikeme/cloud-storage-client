import Auth from "../pages/Auth";
import Disk from "../pages/Disk";
import React from "react";

export interface IRoute {
    id: number;
    path: string;
    Component: React.ComponentType
}

export enum RouteNames {
    AUTH = '/auth',
    DISK = '/'
}

export const PUBLIC_ROUTES: IRoute[] = [
    {
        id: 0,
        path: RouteNames.AUTH,
        Component: Auth
    }
]

export const PRIVATE_ROUTES: IRoute[] = [
    {
        id: 0,
        path: RouteNames.DISK,
        Component: Disk
    }
]