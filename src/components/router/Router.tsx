import React from "react";
import {Route, Routes} from "react-router";
import {PRIVATE_ROUTES, PUBLIC_ROUTES} from "../../router";
import RequireAuth from "../../hoc/RequireAuth";

const Router: React.FC = () => {
    return (
        <Routes>
            {PUBLIC_ROUTES.map(({path, id, Component}) => (
                <Route path={path} element={<Component />} key={id} />
            ))}
            {PRIVATE_ROUTES.map(({path, id, Component}) => (
                <Route
                    path={path}
                    element={
                        <RequireAuth>
                            <Component />
                        </RequireAuth>
                    }
                    key={id}
                />
            ))}
        </Routes>
    )
}

export default Router