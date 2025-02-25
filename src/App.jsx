import MainPage from "./MainPage";
import PrivacyPolicy from "./PrivacyPolicy";
import { Route, Switch } from "wouter";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={MainPage} />
        <Route path="privacy-policy" component={PrivacyPolicy} />
      </Switch>
    </>
  );
}

export default App;
