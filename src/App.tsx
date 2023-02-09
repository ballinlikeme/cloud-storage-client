import React, {useEffect} from 'react';
import Router from "./components/router/Router";
import {useAppSelector} from "./hooks/useAppSelector";
import {useAppDispatch} from "./hooks/useAppDispatch";
import Spinner from "./ui/Spinner";
import {verify} from "./modules/RegistrationForm/index"

function App() {
  const {isLoading} = useAppSelector(state => state.userReducer)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(verify())
  }, [])

  if (isLoading) return <Spinner />

  return (
      <Router />
  );
}

export default App;
