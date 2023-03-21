import Router from "./components/router/Router";
import { useVerifyQuery } from "./modules/RegistrationForm"

function App() {
  const { isLoading } = useVerifyQuery(undefined)

  if (isLoading) return <h1>Loading...</h1>

  return (
    <Router />
  );
}

export default App;
