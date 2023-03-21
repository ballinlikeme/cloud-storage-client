import jwtDecode from "jwt-decode";
import { IUser } from "../models/IUser";

export function decodeToken(token: string): IUser {
     return jwtDecode(token)
}