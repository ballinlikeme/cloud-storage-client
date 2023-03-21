import { createApi, fetchBaseQuery, FetchBaseQueryError } from "@reduxjs/toolkit/query/react"
import { ResponseBody } from "../models/ResponseBody";
import { RequestBody } from "../models/RequestBody";
import { authorizeUser } from "../store/store";
import { decodeToken } from "../helpers/decodeToken";

interface ErrorData {
     message: string;
     statusCode: string | number;
}

export const authApi = createApi({
     reducerPath: "api/auth",
     baseQuery: fetchBaseQuery({ baseUrl: `${process.env.REACT_APP_BASE_URL}/auth` }),
     endpoints: (builder) => ({
          login: builder.mutation<ResponseBody, RequestBody>({
               query: (body) => ({
                    url: 'login',
                    method: "POST",
                    body
               }),
               async onQueryStarted(queryBody, { dispatch, queryFulfilled }) {
                    try {
                         const { data } = await queryFulfilled;
                         localStorage.setItem('token', data.token)
                         const user = decodeToken(data.token)
                         dispatch(authorizeUser(user))
                    } catch (err) {
                         throw err
                    }
               }
          }),

          register: builder.mutation<ResponseBody, RequestBody>({
               query: (body) => ({
                    url: 'registration',
                    method: "POST",
                    body,
               }),
               async onQueryStarted(queryBody, { dispatch, queryFulfilled }) {
                    try {
                         const { data } = await queryFulfilled
                         localStorage.setItem('token', data.token)
                         const user = decodeToken(data.token)
                         dispatch(authorizeUser(user))
                    } catch (err) {
                         throw err
                    }
               },
          }),

          verify: builder.query({
               query: () => ({
                    url: 'check',
                    headers: {
                         "Authorization": `Bearer ${localStorage.getItem('token')}`
                    }
               }),
               async onQueryStarted(queryBody, { dispatch, queryFulfilled }) {
                    try {
                         const { data } = await queryFulfilled;
                         if (data.id) {
                              dispatch(authorizeUser(data))
                         }
                    } catch (err) {
                         throw err
                    }
               }
          })
     })
})

export const { useLoginMutation, useRegisterMutation, useVerifyQuery } = authApi;