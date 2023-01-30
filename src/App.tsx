import React, {useEffect, useState} from 'react';
import Router from "./components/router/Router";
import userAPIService from "./services/userAPIService";
import {login} from "./store/slices/ActionCreators";
function App() {

    const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    userAPIService.checkAuth()
        .then(response => {
            console.log(response)
            login(response)
        }).finally(() => setIsLoading(false))
  }, [ ])

    if (isLoading) {
        return <div>Loading</div>
    }

  return (
      <Router />
  );
}

export default App;
