import Disk from "../pages/Disk";
import React from "react";
import { SignUpPage } from "../pages/SignUpPage";
import { SignInPage } from "../pages/SignInPage"

export interface IRoute {
    id: number;
    path: string;
    Component: React.ComponentType
}

export enum RouteNames {
    REGISTRATION = '/registration',
    DISK = '/',
    LOGIN = "/login",
    AUTH = '/auth'
}

export const PUBLIC_ROUTES: IRoute[] = [
    {
        id: 0,
        path: RouteNames.REGISTRATION,
        Component: SignUpPage
    },
    {
        id: 1,
        path: RouteNames.LOGIN,
        Component: SignInPage
    }
]

export const PRIVATE_ROUTES: IRoute[] = [
    {
        id: 0,
        path: RouteNames.DISK,
        Component: Disk
    }
]