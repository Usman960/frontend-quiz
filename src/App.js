import { NotificationContainer } from "react-notifications";
import AuthPage from "./components/authPage";
import UserPage from "./components/userPage";
import { useSelector } from "react-redux";

function App() {
  const isSuccess = useSelector((state) => state.user.isSuccess);

  return (
    <div className="App">
      {isSuccess ? <UserPage /> : <AuthPage />}
      <NotificationContainer />
    </div>
  );
}

export default App;
