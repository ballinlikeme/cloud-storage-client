import Auth from "../pages/Auth";
import Disk from "../pages/Disk";
import React from "react";
import { SignUpPage } from "../pages/SignUpPage";

export interface IRoute {
    id: number;
    path: string;
    Component: React.ComponentType
}

export enum RouteNames {
    REGISTRATION = '/registration',
    DISK = '/',
    AUTH='/auth'
}

export const PUBLIC_ROUTES: IRoute[] = [
    {
        id: 0,
        path: RouteNames.REGISTRATION,
        Component: SignUpPage
    }
]

export const PRIVATE_ROUTES: IRoute[] = [
    {
        id: 0,
        path: RouteNames.DISK,
        Component: Disk
    }
]